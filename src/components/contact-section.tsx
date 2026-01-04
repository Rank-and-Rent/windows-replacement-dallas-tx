'use client'

import { useState, useEffect, useRef, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { servicesData } from '@/data'
import styles from './contact-section.module.css'

// Extend window type for Turnstile
declare global {
  interface Window {
    _turnstileLoaded?: boolean;
    turnstile?: {
      render: (element: HTMLElement, options: Record<string, unknown>) => string;
      execute: (widgetId: string, options?: Record<string, unknown>) => Promise<string>;
      reset: (widgetId: string) => void;
    };
  }
}

// Utility to load Turnstile script exactly once
function loadTurnstile(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window._turnstileLoaded) return Promise.resolve();

  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src^="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
    );
    if (existing) {
      window._turnstileLoaded = true;
      return resolve();
    }
    const s = document.createElement("script");
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    s.async = true;
    s.defer = true;
    s.onload = () => {
      window._turnstileLoaded = true;
      resolve();
    };
    s.onerror = () => {
      console.error("Failed to load Turnstile script");
      reject(new Error("Turnstile script failed to load"));
    };
    document.head.appendChild(s);
  });
}

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  address: string;
  timeline: string;
  description: string;
};

export default function ContactSection() {
  const captchaRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    address: "",
    timeline: "",
    description: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [turnstileId, setTurnstileId] = useState<string | null>(null);
  const [turnstileReady, setTurnstileReady] = useState(false);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  // Load Turnstile script
  useEffect(() => {
    let cancelled = false;
    const initTimeout = setTimeout(async () => {
      if (cancelled) return;
      if (!siteKey) return;

      try {
        await loadTurnstile();
        if (cancelled) return;

        if (!window.turnstile) {
          console.error("Turnstile API not available");
          return;
        }

        if (!captchaRef.current) {
          console.error("Turnstile ref not mounted");
          return;
        }

        const id: string = window.turnstile.render(captchaRef.current, {
          sitekey: siteKey,
          size: "normal",
          theme: "dark",
          callback: () => {
            setTurnstileReady(true);
          },
          "error-callback": () => {
            console.warn("Turnstile error");
            setTurnstileReady(false);
          },
          "timeout-callback": () => {
            console.warn("Turnstile timeout");
            setTurnstileReady(false);
          },
        });
        setTurnstileId(id);
        setTurnstileReady(true);
      } catch (error) {
        console.error("Failed to initialize Turnstile:", error);
        setTurnstileReady(false);
      }
    }, 500);

    return () => {
      cancelled = true;
      clearTimeout(initTimeout);
    };
  }, [siteKey]);

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Required";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Invalid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Required";
    if (!formData.service.trim()) newErrors.service = "Required";
    if (!formData.address.trim()) newErrors.address = "Required";
    if (!formData.timeline.trim()) newErrors.timeline = "Required";
    if (!formData.description.trim()) newErrors.description = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setFeedback("Please complete all required fields.");
      return;
    }

    setStatus("submitting");
    setErrors({});
    setFeedback("");

    try {
      if (siteKey && (!turnstileReady || !window.turnstile || !turnstileId)) {
        setFeedback("Please complete the security verification.");
        setStatus("error");
        return;
      }

      let turnstileToken = '';
      if (siteKey && window.turnstile && turnstileId) {
        try {
          window.turnstile.reset(turnstileId);
          turnstileToken = await new Promise<string>((resolve, reject) => {
            if (!window.turnstile) {
              reject(new Error("Turnstile not available"));
              return;
            }
            window.turnstile.execute(turnstileId, {
              async: true,
              action: "form_submit",
              callback: (t: string) => resolve(t),
              "error-callback": () => reject(new Error("turnstile-error")),
              "timeout-callback": () => reject(new Error("turnstile-timeout")),
            });
          });
        } catch (err) {
          console.error("Turnstile execution error:", err);
          setFeedback("Security verification failed. Please try again.");
          setStatus("error");
          if (window.turnstile && turnstileId) {
            window.turnstile.reset(turnstileId);
          }
          return;
        }
      }

      const phoneDigits = formData.phone.replace(/\D/g, '');

      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          fullName: formData.fullName,
          email: formData.email,
          phone: phoneDigits,
          service: formData.service,
          address: formData.address,
          timeline: formData.timeline,
          description: formData.description,
          turnstileToken: turnstileToken,
        }),
      });

      if (response.ok) {
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          service: "",
          address: "",
          timeline: "",
          description: "",
        });
        if (window.turnstile && turnstileId) {
          window.turnstile.reset(turnstileId);
        }
        setStatus("success");
        setFeedback("Thank you! A Dallas window specialist will follow up within one business day.");
      } else {
        const errorData = await response.json().catch(() => ({ error: 'Failed to submit form' }));
        setFeedback(errorData.error || 'Failed to submit form. Please try again.');
        setStatus("error");
        if (window.turnstile && turnstileId) {
          window.turnstile.reset(turnstileId);
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFeedback("An error occurred. Please try again or contact us directly.");
      setStatus("error");
      if (window.turnstile && turnstileId) {
        window.turnstile.reset(turnstileId);
      }
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.background}>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div
            className={styles.contentColumn}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.label}>Get Started Today</span>
            <h2 className={styles.title}>
              Schedule Your Free In-Home Consultation
            </h2>
            <p className={styles.description}>
              Discover how new windows can transform your home&apos;s beauty, comfort, 
              and energy efficiency. Our expert consultants will visit your home, 
              assess your needs, and provide a detailed, no-obligation estimate.
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Call Us Directly</span>
                <a href="tel:214-949-8227" className={styles.contactValue}>
                  214-949-8227
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.formColumn}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Request Free Estimate</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <fieldset disabled={status === "submitting"} className="space-y-4">
                  {/* 1. Full Name */}
                  <div>
                    <label htmlFor="contact-fullName" className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="contact-fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange("fullName")}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
                    )}
                  </div>

                  {/* 2. Phone Number */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange("phone")}
                      placeholder="(214) 949-8227"
                      className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                    )}
                  </div>

                  {/* 3. Email Address */}
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange("email")}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>

                  {/* 4. Service Interested In - WITH OPTGROUPS */}
                  <div>
                    <label htmlFor="contact-service" className="block text-sm font-medium text-gray-300 mb-1">
                      Service Interested In *
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange("service")}
                      className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select a service...</option>
                      <optgroup label="Windows">
                        {servicesData.filter(s => s.category === 'Windows').map(service => (
                          <option key={service.slug} value={service.name}>
                            {service.name}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Doors">
                        {servicesData.filter(s => s.category === 'Doors').map(service => (
                          <option key={service.slug} value={service.name}>
                            {service.name}
                          </option>
                        ))}
                      </optgroup>
                      <option value="Not Sure / Multiple Services">Not Sure / Multiple Services</option>
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-400">{errors.service}</p>
                    )}
                  </div>

                  {/* 5. Property Address */}
                  <div>
                    <label htmlFor="contact-address" className="block text-sm font-medium text-gray-300 mb-1">
                      Property Address *
                    </label>
                    <input
                      type="text"
                      id="contact-address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange("address")}
                      placeholder="123 Main St, Dallas, TX 75201"
                      className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-400">{errors.address}</p>
                    )}
                  </div>

                  {/* 6. Project Timeline */}
                  <div>
                    <label htmlFor="contact-timeline" className="block text-sm font-medium text-gray-300 mb-1">
                      Project Timeline *
                    </label>
                    <select
                      id="contact-timeline"
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={handleChange("timeline")}
                      className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select timeline...</option>
                      <option value="ASAP">ASAP</option>
                      <option value="Within 1 month">Within 1 month</option>
                      <option value="Within 3 months">Within 3 months</option>
                      <option value="Within 6 months">Within 6 months</option>
                      <option value="6+ months">6+ months</option>
                      <option value="Just researching">Just researching</option>
                    </select>
                    {errors.timeline && (
                      <p className="mt-1 text-sm text-red-400">{errors.timeline}</p>
                    )}
                  </div>

                  {/* 7. Project Description */}
                  <div>
                    <label htmlFor="contact-description" className="block text-sm font-medium text-gray-300 mb-1">
                      Project Description *
                    </label>
                    <textarea
                      id="contact-description"
                      name="description"
                      required
                      rows={4}
                      value={formData.description}
                      onChange={handleChange("description")}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-vertical"
                    />
                    {errors.description && (
                      <p className="mt-1 text-sm text-red-400">{errors.description}</p>
                    )}
                  </div>

                  {/* Turnstile Container */}
                  {siteKey && (
                    <div className="flex justify-center">
                      <div ref={captchaRef} className="min-h-[78px]" />
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting" || !!(siteKey && !turnstileReady)}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </button>

                  {feedback && (
                    <p className={`text-sm font-medium ${status === "success" ? "text-green-400" : "text-red-400"}`}>
                      {feedback}
                    </p>
                  )}
                </fieldset>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState, useEffect, useRef, FormEvent } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { servicesData } from '@/data'

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

export default function ContactPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows')
  const doorServices = servicesData.filter(s => s.category === 'Doors')

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
        console.log("Turnstile initialized successfully");
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
      // Verify Turnstile is ready
      if (siteKey && (!turnstileReady || !window.turnstile || !turnstileId)) {
        setFeedback("Please complete the security verification.");
        setStatus("error");
        return;
      }

      // Get Turnstile token
      let turnstileToken = '';
      if (siteKey && window.turnstile && turnstileId) {
        try {
          // Reset before executing to avoid "already executed" error
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

      // Prepare phone number (digits only)
      const phoneDigits = formData.phone.replace(/\D/g, '');

      // Submit to API
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
        // Reset turnstile
        if (window.turnstile && turnstileId) {
          window.turnstile.reset(turnstileId);
        }
        setStatus("success");
        setFeedback("Thank you! A Dallas window specialist will follow up within one business day.");
      } else {
        const errorData = await response.json().catch(() => ({ error: 'Failed to submit form' }));
        setFeedback(errorData.error || 'Failed to submit form. Please try again.');
        setStatus("error");
        // Reset turnstile on error
        if (window.turnstile && turnstileId) {
          window.turnstile.reset(turnstileId);
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFeedback("An error occurred. Please try again or contact us directly.");
      setStatus("error");
      // Reset turnstile on error
      if (window.turnstile && turnstileId) {
        window.turnstile.reset(turnstileId);
      }
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-24 bg-gray-900 text-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
              Ready to upgrade your Dallas home with premium windows and doors? Get your free consultation today.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-8">
                  Get In Touch
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-600 p-3 rounded-lg">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-white">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                      <a href="tel:214-949-8227" className="text-gray-600 hover:text-orange-600 transition-colors">
                        214-949-8227
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-600 p-3 rounded-lg">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-white">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:hello@windowreplacementdallastx.com" className="text-gray-600 hover:text-orange-600 transition-colors">
                        hello@windowreplacementdallastx.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-600 p-3 rounded-lg">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-white">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                      <address className="text-gray-600 not-italic">
                        600 N Pearl St #1615<br />
                        Dallas, TX 75201
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-600 p-3 rounded-lg">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-white">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Hours</h3>
                      <p className="text-gray-600">
                        Open 24/7<br />
                        Available for Emergency Service
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form - MUST HAVE DARK BACKGROUND */}
              <div>
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-6">Request Free Estimate</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <fieldset disabled={status === "submitting"} className="space-y-4">
                      {/* 1. Full Name */}
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
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
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
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
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
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
                        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                          Service Interested In *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange("service")}
                          className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option value="">Select a service...</option>
                          <optgroup label="Windows">
                            {windowServices.map(service => (
                              <option key={service.slug} value={service.name}>
                                {service.name}
                              </option>
                            ))}
                          </optgroup>
                          <optgroup label="Doors">
                            {doorServices.map(service => (
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
                        <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">
                          Property Address *
                        </label>
                        <input
                          type="text"
                          id="address"
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
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-1">
                          Project Timeline *
                        </label>
                        <select
                          id="timeline"
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
                        <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                          Project Description *
                        </label>
                        <textarea
                          id="description"
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
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

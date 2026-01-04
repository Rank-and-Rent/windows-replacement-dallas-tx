'use client'

import { useState, useEffect, useRef, FormEvent } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { servicesData } from '@/data';

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

export default function Hero() {
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
    <section className="relative min-h-[750px] flex items-center bg-gray-100 overflow-hidden">
      {/* Background with Gradient Mask - Real site look */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10 hidden lg:block" />
        <div className="absolute inset-0 bg-white/80 lg:hidden z-10" />
        <div className="w-full h-full bg-[url('/locations/window-replacement-dallas-tx-4.jpg')] bg-cover bg-center opacity-40 grayscale-[20%]">
        </div>
      </div>

      <div className="container relative z-20">

        {/* Brand Logos Section - Moved Above Content */}
        <div className="text-center mb-12">
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block">Trusted Brands We Install</span>
          <h3 className="text-2xl md:text-3xl font-black text-secondary-dark uppercase tracking-tighter mb-8">Premium Manufacturer Partnerships</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-4xl mx-auto">
            <Link href="/brands/andersen-windows-doors" className="bg-white backdrop-blur-sm p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 group border border-gray-200 shadow-sm">
              <img
                src="/andersen-windows-and-doors-dallas-tx-logo.png"
                alt="Andersen Windows & Doors"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
            <Link href="/brands/jeld-wen-windows-doors" className="bg-white backdrop-blur-sm p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 group border border-gray-200 shadow-sm">
              <img
                src="/jeld-wen-windows-and-doors-dallas-tx-logo.png"
                alt="Jeld-Wen Windows & Doors"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
            <Link href="/brands/marvin-windows-doors" className="bg-white backdrop-blur-sm p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 group border border-gray-200 shadow-sm">
              <img
                src="/marvin-windows-and-doors-dallas-tx-logo.png"
                alt="Marvin Windows & Doors"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
            <Link href="/brands/pella-windows-doors" className="bg-white backdrop-blur-sm p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 group border border-gray-200 shadow-sm">
              <img
                src="/pella-windows-and-doors-dallas-tx-logo.png"
                alt="Pella Windows & Doors"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Area */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="max-w-3xl">
              <span className="inline-block border-l-4 border-primary pl-4 text-sm font-black uppercase tracking-[0.3em] text-secondary mb-6">
                Dallas's Premier Window Experts
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-secondary-dark uppercase tracking-tighter leading-[0.9] mb-8">
                Best Window<br/>
                <span className="text-primary">Replacement</span> in Dallas, TX
              </h1>
              <p className="text-xl text-secondary-light font-medium leading-relaxed max-w-xl mb-10">
                As Dallas's leading window replacement specialists, we proudly install premium windows and doors from trusted brands including Pella, Andersen, and Jeld-Wen, delivering unmatched quality, energy efficiency, and lasting beauty to homes across the Dallas-Fort Worth metroplex.
              </p>
              
              <Link href="/brands" className="group inline-flex items-center gap-4 text-sm font-black uppercase tracking-widest text-secondary-dark hover:text-primary transition-colors">
                <span className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <FaArrowRight className="text-[10px]" />
                </span>
                Learn About Our Brands
              </Link>
            </div>
          </div>

          {/* Form Area - Screenshot 1 Floating Form style */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-gray-800 p-8 rounded-lg relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-dark text-white px-8 py-3 text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap">
                Limited Time Offer
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Request Free Estimate</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <fieldset disabled={status === "submitting"} className="space-y-4">
                  {/* 1. Full Name */}
                  <div>
                    <label htmlFor="hero-fullName" className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="hero-fullName"
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
                    <label htmlFor="hero-phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="hero-phone"
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
                    <label htmlFor="hero-email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="hero-email"
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
                    <label htmlFor="hero-service" className="block text-sm font-medium text-gray-300 mb-1">
                      Service Interested In *
                    </label>
                    <select
                      id="hero-service"
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
                    <label htmlFor="hero-address" className="block text-sm font-medium text-gray-300 mb-1">
                      Property Address *
                    </label>
                    <input
                      type="text"
                      id="hero-address"
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
                    <label htmlFor="hero-timeline" className="block text-sm font-medium text-gray-300 mb-1">
                      Project Timeline *
                    </label>
                    <select
                      id="hero-timeline"
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
                    <label htmlFor="hero-description" className="block text-sm font-medium text-gray-300 mb-1">
                      Project Description *
                    </label>
                    <textarea
                      id="hero-description"
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
  );
}

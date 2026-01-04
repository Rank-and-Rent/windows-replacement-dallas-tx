import { COMPANY_NAME, PHONE, PHONE_DIGITS, EMAIL, ADDRESS, CANONICAL_URL } from '@/lib/config';

export function getBrand() {
  // Window Replacements Dallas colors
  const COLORS = {
    primary: '#ea580c', // Orange-600
    secondary: '#1f2937', // Gray-800
    dark: '#111827', // Gray-900
  };

  return {
    // Email template fields
    subject: "We received your window replacement inquiry",
    preheader: "Thanks for your inquiry, we have received your window replacement request and will contact you within one business day.",
    company_name: COMPANY_NAME,
    logo_url: 'https://www.windowreplacementdallastx.com/logo.png',
    city_state: "Dallas, TX",
    brand_accent: COLORS.primary,
    cta_dark_bg: COLORS.dark,
    bg_color: "#111827",
    text_dark: "#111827",
    text_muted: "#6b7280",
    text_body: "#374151",
    text_faint: "#9ca3af",
    border_color: "#e5e7eb",
    card_header_bg: "#f3f4f6",
    card_header_text: "#111827",
    header_text_color: "#FFFFFF",
    footer_text_color: "#FFFFFF",

    // Hero content
    hero_title: "Thanks for your inquiry. We received your window replacement request.",
    hero_subtitle: "Our team will review your details and reach out within one business day to discuss your project.",
    details_title: "Your project details",

    // CTA buttons
    call_cta_label: "Call Now",
    call_phone: PHONE,
    call_phone_plain: PHONE_DIGITS,
    site_cta_label: "Go To Site",
    site_url: CANONICAL_URL,

    // Address and footer
    address_line: ADDRESS,
    footer_note: "This confirmation is a transactional email related to your request.",

    // Legacy fields for backward compatibility
    brand_title: COMPANY_NAME,
    brand_tagline: 'Premium Window & Door Installation in Dallas, TX',
    brand_dark_bg: COLORS.dark,
    brand_gold: COLORS.primary,
    supportPhone: PHONE,
    supportEmail: EMAIL,
    service_area: 'Serving Dallas and the Greater DFW Metroplex',
    portfolio_url: CANONICAL_URL,
    portfolio_blurb: 'Premium window and door installation services for Dallas homeowners.',
    intro_copy: 'Delivering expert window and door installation services to help Dallas homeowners upgrade their homes with energy-efficient, beautiful windows and doors.',
  };
}

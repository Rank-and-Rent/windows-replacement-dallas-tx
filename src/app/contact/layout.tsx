import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Window Replacements of Dallas | Free Window Estimate',
  description: 'Request a free window or door replacement estimate in Dallas, TX. Call 214-949-8227 or fill out our online form. We serve Dallas, Plano, Frisco, Arlington, and all DFW communities.',
  alternates: {
    canonical: 'https://windowreplacementdallastx.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}

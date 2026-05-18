import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Areas | Window Replacement Dallas TX & Surrounding Cities',
  description: 'Window Replacements of Dallas serves homeowners across the DFW metroplex — Dallas, Plano, Frisco, Arlington, Irving, Fort Worth, Carrollton, Grand Prairie, Lewisville, and Richardson.',
  alternates: {
    canonical: 'https://windowreplacementdallastx.com/locations',
  },
}

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return children
}

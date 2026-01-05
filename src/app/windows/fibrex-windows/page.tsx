import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Fibrex Windows Replacement Dallas TX | Andersen Premium Composite',
  description: 'Andersen Fibrex composite replacement windows in Dallas, TX. Premium performance with wood-like beauty. Energy-efficient and durable. Everything priced including installation.',
  keywords: 'Fibrex windows Dallas TX, Andersen Fibrex windows, composite windows, premium replacement windows, energy efficient Fibrex windows, durable composite windows',
}

export default function FibrexWindowsPage() {
  const content = {
    title: 'Fibrex Windows Replacement in Dallas, TX',
    subtitle: 'Andersen\&apos;s Premium Composite Technology for Ultimate Performance',
    heroImage: '/window-types/fibrex-dallas-tx.jpg',

    intro: "Dallas homeowners seeking the ultimate in window performance discover that Andersen&apos;s Fibrex composite material perfectly balances traditional wood aesthetics with modern durability. As a major urban center with cosmopolitan districts, Dallas attracts homeowners who appreciate Fibrex windows' combination of wood-like beauty, exceptional strength, and superior energy efficiency. Whether in business districts or contemporary developments, Fibrex windows provide the premium quality and lasting performance that Dallas homeowners demand. With the area&apos;s mix of traditional and modern architecture, Fibrex windows offer versatile design that enhances Dallas&apos;s architectural heritage.",

    sections: [
      {
        heading: 'Advanced Composite Construction for Dallas Durability',
        content: "Fibrex represents Andersen\&apos;s revolutionary approach to window frame technology, blending wood fibers with advanced polymers to create a material that outperforms both traditional wood and modern synthetics. The wood fibers provide natural insulation and aesthetic appeal, while the polymer matrix delivers exceptional strength and moisture resistance. Unlike traditional wood that warps in Dallas&apos;s humidity or vinyl that lacks structural integrity, Fibrex maintains perfect dimensional stability year-round. The material&apos;s advanced formulation resists UV degradation from intense Texas sun, ensuring Fibrex windows maintain their performance and appearance indefinitely in Dallas&apos;s challenging climate.",
      },
      {
        heading: 'Authentic Wood Aesthetics Without Maintenance Burdens',
        content: "Fibrex windows capture the natural warmth and character of real wood while eliminating the maintenance headaches that plague traditional wood windows in Dallas. The material accepts stains and finishes that replicate authentic wood tones, from golden oak to deep walnut, creating seamless continuity with Dallas&apos;s historic architecture. Unlike wood windows that require annual painting and sealing in Dallas&apos;s climate, Fibrex maintains its finish indefinitely without fading or weathering. Homeowners can enjoy the traditional appeal of wood windows—the natural grain patterns, the tactile warmth—without the time, expense, and environmental impact of maintaining authentic wood in Dallas&apos;s demanding environment.",
      },
      {
        heading: 'Structural Superiority for Dallas Homes',
        content: "Fibrex&apos;s composite construction delivers strength that surpasses both wood and vinyl alternatives, making it ideal for Dallas&apos;s diverse housing stock. The material resists impact damage from severe weather, hail, or accidental impacts far better than traditional wood. Fibrex frames maintain perfect alignment and smooth operation even in Dallas&apos;s temperature extremes, where wood might warp and vinyl might become brittle. The material&apos;s dimensional stability ensures weatherstripping maintains perfect contact year-round, preventing air infiltration that compromises energy efficiency. For Dallas homeowners who demand quality and longevity, Fibrex provides the structural integrity required for windows that perform flawlessly in Texas weather.",
      },
      {
        heading: 'Energy Performance That Saves in Dallas Climate',
        content: "Fibrex&apos;s unique material properties create exceptional thermal performance that delivers measurable savings in Dallas&apos;s hot climate. The wood fiber content provides natural insulation, while the polymer matrix prevents heat conduction, resulting in U-factors that rival premium fiberglass. When combined with Andersen&apos;s advanced multi-pane insulated glass, Fibrex windows can reduce heating and cooling costs by 30-40% compared to older windows. The material&apos;s stability ensures optimal weatherstripping performance year-round, maintaining energy efficiency even during Dallas&apos;s dramatic temperature swings. Many Fibrex window configurations qualify for energy rebates, making them an economical choice despite their premium positioning.",
      },
      {
        heading: 'Design Flexibility for Dallas Architecture',
        content: "Fibrex&apos;s workability allows it to be formed into virtually any window style and configuration, making it ideal for Dallas&apos;s architectural diversity. The material can be stained to match traditional wood tones for historic Dallas homes or finished in contemporary colors for modern developments. Fibrex accommodates complex custom designs that would be difficult with other materials, from arched windows in historic restorations to large fixed panels in contemporary architecture. The material&apos;s strength enables innovative applications while maintaining the wood-like aesthetics that Dallas homeowners value. Whether preserving architectural heritage or embracing modern design, Fibrex provides the versatility required in Dallas&apos;s diverse real estate market.",
      },
      {
        heading: 'Environmental Responsibility and Longevity',
        content: "Fibrex represents a sustainable approach to window manufacturing that resonates with Dallas&apos;s growing environmental consciousness. The wood fiber content comes from responsibly harvested sources, and the advanced polymer technology reduces the environmental impact compared to traditional wood treated with chemical preservatives. Fibrex windows require no toxic sealants or paints, maintaining their appearance naturally. The exceptional longevity means fewer replacements over time, reducing material consumption and landfill impact. For environmentally aware Dallas homeowners, Fibrex windows provide premium performance with a significantly lower ecological footprint than traditional wood windows, supporting the city&apos;s commitment to sustainable development.",
      },
    ],

    features: [
      'Proprietary composite material technology',
      'Wood-like beauty without maintenance',
      'Superior strength and impact resistance',
      'Exceptional dimensional stability',
      'Advanced energy efficiency',
      'Resists rot, mold, and moisture',
      '25+ year manufacturer warranties',
      'Fusion-welded corner construction',
      'Available in unlimited wood tones',
      'Environmentally responsible manufacturing',
    ],

    brands: [
      {
        name: 'Andersen 100 Series Fibrex',
        description: 'Andersen\&apos;s premium Fibrex line offers the ultimate in window performance with their signature composite technology. These windows feature multi-pane insulated glass, advanced weatherstripping, and comprehensive warranties.',
      },
      {
        name: 'Andersen 200 Series Fibrex',
        description: 'Andersen\&apos;s mid-range Fibrex windows provide exceptional value with the same composite construction and performance features as higher-end lines. Perfect for homeowners seeking premium quality at accessible pricing.',
      },
      {
        name: 'Andersen 300 Series Fibrex',
        description: 'Andersen\&apos;s luxury Fibrex collection offers the most advanced features available, including impact-resistant glass options, premium hardware, and unlimited customization for discerning Dallas homeowners.',
      },
    ],

    faq: [
      {
        question: 'What makes Fibrex different from regular wood windows?',
        answer: 'Fibrex is a composite material that combines wood fibers with polymers, offering wood-like beauty without warping, rotting, or requiring maintenance. It maintains perfect dimensions year-round and resists moisture damage that destroys traditional wood.',
      },
      {
        question: 'Do Fibrex windows look like real wood?',
        answer: 'Yes, Fibrex windows can be finished to look exactly like real wood, including staining and painting to match any wood tone. The wood-grain textures are virtually indistinguishable from authentic wood.',
      },
      {
        question: 'How long do Fibrex windows last in Dallas?',
        answer: 'Fibrex windows are engineered to last 25-30 years or more with proper care. The composite material resists degradation and maintains its performance indefinitely, unlike wood that eventually rots or vinyl that may crack.',
      },
      {
        question: 'Are Fibrex windows energy efficient?',
        answer: 'Absolutely. Fibrex\&apos;s composite construction provides excellent insulation, and when combined with Andersen\&apos;s advanced glass packages, Fibrex windows can reduce energy costs by 35-45% in Dallas\&apos;s climate.',
      },
      {
        question: 'Do Fibrex windows require maintenance?',
        answer: 'Fibrex windows require minimal maintenance—just occasional cleaning. They never need painting, staining, or sealing, and they resist fading, cracking, moisture damage, and insect infestation.',
      },
      {
        question: 'How much do Fibrex windows cost with installation?',
        answer: 'Fibrex window costs with installation vary by style and features. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material. We do not sell windows without installation.',
      },
    ],
  }

  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title={content.title}
          subtitle={content.subtitle}
          image={content.heroImage}
        />
        <ServiceContent content={content} />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
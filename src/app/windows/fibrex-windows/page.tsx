import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Fibrex Windows Replacement Dallas TX | Andersen Premium Composite',
  description: 'Andersen Fibrex composite replacement windows in Dallas, TX. Premium performance with wood-like beauty engineered for Texas heat and storm seasons. Call (214) 949-8227.',
  keywords: 'Fibrex windows Dallas TX, Andersen Fibrex windows, composite windows, premium replacement windows, energy efficient Fibrex windows, durable composite windows',
  alternates: {
    canonical: 'https://windowreplacementdallastx.com/windows/fibrex-windows',
  },
}

export default function FibrexWindowsPage() {
  const content = {
    title: 'Fibrex Windows Replacement in Dallas, TX',
    subtitle: 'Andersen Composite Engineering Built for Dallas Heat, Hail, and Hard Use',
    heroImage: '/window-types/fibrex-dallas-tx.jpg',

    intro:
      "Fibrex is Andersen's proprietary composite frame material, a fusion of reclaimed wood fiber and thermoplastic polymer that delivers the structural strength of wood with the dimensional stability and weather resistance of high-end synthetics. For Dallas homeowners, that engineering matters in concrete ways. The 100-degree summer days that warp wood frames and the freeze-thaw events that crack inferior vinyl have no measurable effect on Fibrex. The frames hold their geometry, their finish, and their seal year after year, even on the punishing west elevations of Devonshire, Preston Hollow, and Forest Hills. Andersen's 100 Series uses Fibrex throughout, while the A-Series and Renewal by Andersen lines extend the technology with full wood-interior options. Across Lakewood Tudors, M Streets prairies, and the modern infill on Lakeshore Drive, Fibrex has quietly become one of the most-specified premium replacement frames in the Dallas market.",

    sections: [
      {
        heading: 'What Fibrex Actually Is and Why It Matters in Dallas',
        content:
          "Fibrex is engineered from approximately 40 percent reclaimed wood fiber and 60 percent thermoplastic polymer, manufactured at Andersen's Bayport, Minnesota plant under a process the company developed and patented in the 1990s. The wood fiber gives the material the rigidity and insulating properties of wood. The polymer matrix locks out moisture, blocks UV-driven degradation, and prevents the seasonal swelling and shrinking that destroys wood window joinery. In Dallas, where humidity swings from desert-dry winter cold fronts to soaking summer thunderstorms, that dimensional stability translates directly into windows that keep operating smoothly and sealing tightly across decades. The fusion-welded corners on Fibrex frames are stronger than the mechanical joinery on most wood windows and far more durable than the heat-welded corners on basic vinyl.",
      },
      {
        heading: 'Performance Advantages Over Vinyl and Wood',
        content:
          "Compared to mid-grade vinyl, Fibrex is roughly twice as strong, allowing for narrower sightlines and larger units without structural compromise. Compared to wood, Fibrex eliminates the rotting, warping, and refinishing burdens that drive wood-window failures in the Dallas climate. Wood windows on the south elevation of a Lakewood Tudor often need refinishing every three to five years; the same opening in Fibrex needs nothing but occasional washing. The composite material also resists the chalking and color fading that plagues lesser frames in the Texas sun. Andersen's color palette includes deep blacks, bronzes, and forest greens that have long been off-limits to vinyl manufacturers because of heat absorption issues. Fibrex handles dark colors without warping because of its inherent thermal stability.",
      },
      {
        heading: 'Energy Performance for Dallas Climate Zone 3',
        content:
          "Andersen pairs Fibrex frames with their High-Performance Low-E4 glass packages, including Low-E4 SmartSun, which is engineered specifically for Sun Belt cooling-dominated climates like Dallas. SmartSun glass blocks 95 percent of damaging UV rays and reduces solar heat gain by roughly 70 percent compared to standard dual-pane glass, dramatically cutting cooling load on west and south elevations. U-factors land in the 0.27 to 0.30 range and SHGC values can drop below 0.22 with the right specification. The result is a window that holds ENERGY STAR certification for Climate Zone 3 and qualifies for utility rebate programs offered through the Texas Public Utility Commission and individual utility providers serving Oncor's Dallas County footprint.",
      },
      {
        heading: 'Fit With Dallas Architecture and Aesthetic Range',
        content:
          "Fibrex carries an authentic painted-wood look on the exterior, which is why it slots cleanly into the architectural styles that dominate Dallas's most-loved neighborhoods. Tudor Revival homes around Lakewood and Greenway Parks pair beautifully with Fibrex in dark forest green or near-black with applied muntins. The Mediterranean and Spanish Colonial homes scattered through Devonshire and Bluffview look right with Fibrex in cream or terra-cotta tones. Craftsman bungalows in Junius Heights, Vickery Place, and Hollywood Heights work well with Fibrex in Sandtone or Black with cottage-style top sashes. The interior side of Renewal by Andersen Fibrex windows accepts a real wood veneer or a stained-laminate finish, allowing the inside of the home to read as traditional wood while the exterior carries the composite weather resistance.",
      },
      {
        heading: 'Storm and Hail Considerations',
        content:
          "Spring hail is a defining feature of life in North Texas, and the Andersen system addresses it through both frame strength and glass options. Fibrex's polymer-and-fiber composite absorbs impact energy without cracking, unlike rigid vinyl which can shatter under severe hail strikes. For exposed elevations on White Rock Lake homes, properties along open ravines in Lake Highlands, or simply west elevations facing afternoon storm tracks, Andersen offers laminated and impact-rated glass packages. The laminated inboard layer holds the pane together if the outer pane is broken, dramatically reducing risk of a damaged window becoming a damaged interior during a storm. Insurance carriers in Dallas County often credit homes with impact-rated glazing through reduced premiums.",
      },
      {
        heading: 'Warranty Coverage and Long-Term Value',
        content:
          "Andersen's warranty on Fibrex products is one of the strongest in the industry. The frame and sash carry a 20-year limited warranty against defects, the glass carries a 20-year warranty against seal failure, and most components carry 10-year coverage. The warranty is transferable in many cases, which matters in an active Dallas real estate market where homes change hands every seven to ten years. We register every install with Andersen on the homeowner's behalf and manage warranty claims directly so any future seal failure or hardware issue is handled smoothly. The brand's century-plus history and stable corporate structure mean the warranty is backed by a manufacturer that will still be operating decades from now.",
      },
      {
        heading: 'Where Fibrex Fits in Andersen Product Lineup',
        content:
          "Andersen offers Fibrex across several product families. The 100 Series is full Fibrex inside and out, the most economical of the lineup, and an excellent value choice for whole-house replacement projects. The A-Series uses a Fibrex exterior with a wood interior, offering the warmth of wood inside the home with weather-resistant composite outside. Renewal by Andersen, the company's branded replacement division, uses Fibrex throughout with custom sizing for retrofit installations. We help Dallas homeowners select the right line based on architectural fit, budget, and long-term ownership plans rather than pushing a single product across every project. Each line has different strengths and the right answer depends on the specific home.",
      },
      {
        heading: 'Installation Approach for Dallas Homes',
        content:
          "Fibrex frames install through either pocket replacement, where the new frame seats into the existing wood opening, or full-frame replacement, where the entire window assembly down to the rough opening is replaced. Pocket installations preserve interior trim and exterior masonry or stucco, which is critical on historically significant Lakewood and M Streets homes where original details add value. Full-frame replacement is the right approach when frames are rotted, when significant air leakage exists at the rough opening, or when sizing changes are needed. We field-measure every opening, inspect for hidden damage, and recommend the appropriate installation method per opening rather than applying a one-size-fits-all approach.",
      },
    ],

    features: [
      'Andersen proprietary Fibrex composite material',
      '40% reclaimed wood fiber, 60% thermoplastic polymer',
      'Twice the structural strength of mid-grade vinyl',
      'Fusion-welded corner construction',
      'Stable in dark exterior colors including black and bronze',
      'Andersen High-Performance Low-E4 SmartSun glass available',
      'ENERGY STAR rated for Dallas Climate Zone 3',
      '20-year frame, sash, and glass warranty',
      'Transferable warranty in most cases',
      'Available in 100 Series, A-Series, and Renewal product lines',
    ],

    brands: [
      {
        name: 'Andersen 100 Series',
        description:
          "Andersen's all-Fibrex line, the most economical entry point into Fibrex performance. Strong fit for whole-house replacement projects in Dallas where budget and durability both matter. Available in eight standard exterior colors with a 20-year limited warranty.",
      },
      {
        name: 'Andersen A-Series',
        description:
          "Premium hybrid line with a Fibrex exterior and a real wood interior. Authentic wood warmth on the inside of the home, weather-resistant composite outside. The right answer for traditional and Craftsman homes in Lakewood, M Streets, and Junius Heights where interior wood is part of the architectural language.",
      },
      {
        name: 'Renewal by Andersen',
        description:
          "Andersen's dedicated replacement division using Fibrex throughout. Custom-sized to existing openings for clean retrofit installations. Limited to specific authorized installers in each market.",
      },
    ],

    faq: [
      {
        question: 'How does Fibrex handle the heat on a Dallas west-facing wall?',
        answer:
          'Fibrex is dimensionally stable across the temperature range Dallas elevations actually see. Unlike vinyl, it does not warp under heat, and unlike wood, it does not require refinishing every few years. The polymer matrix blocks UV degradation that fades and weathers lesser materials.',
      },
      {
        question: 'Are Fibrex windows worth the premium over vinyl?',
        answer:
          'For Dallas homeowners planning to stay 7+ years and looking for stronger frames, more architectural color options, and a better warranty, yes. For shorter-term ownership or strict budget projects, premium vinyl from Pella or JELD-WEN is also a strong choice. We help match product to ownership plans and architectural fit.',
      },
      {
        question: 'Can Fibrex windows look like wood from inside the home?',
        answer:
          'Yes. The Andersen A-Series uses Fibrex exteriors with real wood interiors, and the Renewal by Andersen line offers stain-grade laminate options that read convincingly as wood. The 100 Series is composite throughout and reads as painted wood, which works well in many Dallas architectural styles.',
      },
      {
        question: 'Does Fibrex hold up to Dallas hail?',
        answer:
          'Fibrex frames absorb impact energy better than rigid vinyl and resist cracking. Pairing Fibrex frames with Andersen laminated impact glass dramatically improves overall hail resilience and qualifies many Dallas County homeowners for insurance premium credits.',
      },
      {
        question: 'How long do Fibrex windows last?',
        answer:
          'Andersen warranties Fibrex frames and glass for 20 years, with realistic service life well beyond that. The composite material does not rot, warp, or degrade, so the practical limit on service life is more about glass seals and hardware than frame durability.',
      },
      {
        question: 'How much do Fibrex windows cost installed in Dallas?',
        answer:
          'Everything is priced including installation. Fibrex sits in the upper-mid to premium tier of replacement windows. Pricing varies by size, line, glass package, and color. We provide transparent itemized quotes after in-home measurement.',
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

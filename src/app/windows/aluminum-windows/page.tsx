import type { Metadata } from 'next'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Aluminum Windows Replacement Dallas TX | Thermally Broken, Modern Sightlines',
  description: 'Thermally broken aluminum for Bluffview modern infill, Preston Hollow rebuilds, and White Rock Lake contemporaries. Two-inch sightlines, 12-foot glass walls, full ENERGY STAR.',
  keywords: 'aluminum windows Dallas TX, thermally broken aluminum windows, modern aluminum windows, large picture windows, contemporary windows Dallas',
  alternates: {
    canonical: 'https://windowreplacementdallastx.com/windows/aluminum-windows',
  },
}

export default function AluminumWindowsPage() {
  const content = {
    title: 'Aluminum Windows Replacement in Dallas, TX',
    subtitle: 'Thermally Broken Aluminum for Modern Dallas Homes and Wide-Glass Architecture',
    heroImage: '/window-types/aluminum-dallas-tx.jpg',

    intro:
      "Aluminum has come a long way from the leaky single-pane sliders that builders installed across Dallas in the 1960s and 1970s. Modern thermally broken aluminum is now the frame of choice for contemporary Bluffview infill, Preston Hollow rebuilds, and the wave of modernist remodels reshaping Lakewood, Devonshire, and the streets around White Rock Lake. The reason is simple: nothing else lets you carry a 12-foot wall of glass with sightlines under two inches and structural performance that holds up to hail, wind, and the brutal thermal cycling of a Dallas summer. Today's aluminum windows from premium manufacturers use polyamide thermal breaks, factory-applied multi-coat finishes, and engineered glazing that hits ENERGY STAR Climate Zone 3 numbers. For homeowners who want a true modern look without compromising on energy performance or storm durability, thermally broken aluminum is the right answer.",

    sections: [
      {
        heading: 'Thermal Breaks Solve the Old Aluminum Problem',
        content:
          "The reason older aluminum windows were so cold to the touch in winter and dripped condensation onto Dallas window sills was thermal bridging: heat moves through bare aluminum hundreds of times faster than through wood or vinyl. The fix is a polyamide thermal break, an insulating strip molded between the interior and exterior aluminum extrusions that prevents that conduction path. Modern thermal-break designs deliver U-factors in the 0.30 to 0.35 range, comparable to mid-grade vinyl while preserving aluminum's structural advantages. For Dallas homeowners considering aluminum on west-facing or south-facing elevations where surface temperatures climb past 140 degrees in August, the thermal break is the difference between a window that drives up the cooling bill and one that quietly holds the load.",
      },
      {
        heading: 'Why Modern Dallas Architecture Specifies Aluminum',
        content:
          "Drive through Bluffview, Preston Hollow, or the modern infill blocks of Lakewood and Casa Linda and you will see what aluminum makes possible: floor-to-ceiling glass walls, narrow horizontal sightlines, multi-slide patio openings stretching twenty feet across, and clean rectangular geometries that vinyl simply cannot replicate. Aluminum's tensile strength means a frame member can be much smaller than a vinyl or wood equivalent while carrying the same glass weight. For the increasingly common contemporary remodel where homeowners want to dissolve the wall between living room and pool deck, aluminum is the only material that carries the look. It also pairs naturally with the smooth stucco, board-formed concrete, and standing-seam metal cladding popular on modern Dallas builds.",
      },
      {
        heading: 'Performance Against Hail, UV, and Storm Loads',
        content:
          "Dallas weather is unforgiving on building exteriors. Spring hail, summer UV, sudden winter ice events, and the year-round wind exposure across open neighborhoods all stress window systems. Aluminum frames do not warp under heat, do not become brittle in a winter freeze, and do not flex or shift in high winds the way some lighter frames can. They will dent under direct hail impact, but the structural integrity of the assembly remains intact. Pairing aluminum with laminated or impact-rated glass, common practice in our high-end residential work, dramatically improves storm performance. Most quality aluminum lines carry a Design Pressure rating well above what Dallas County building code requires, which matters on tall walls and wide spans.",
      },
      {
        heading: 'Finishes, Colors, and the Black-Frame Look',
        content:
          "The dark-frame aesthetic that has dominated modern Dallas architecture for the last decade was built around aluminum. Factory-applied fluoropolymer finishes, the same coatings used on commercial high-rise glazing, deliver an essentially permanent black, bronze, or charcoal exterior that will not fade or chalk in the Texas sun. Custom anodized finishes are available for projects that want the raw industrial look popular in East Dallas converted-warehouse spaces. Interior aluminum can be color-matched or specified with a wood interior on dual-finish frames for homeowners who want warmth on the inside and the modern frame on the exterior. Custom RAL color matches are routine on the high-end lines we install, which is useful when matching trim packages on Bluffview and Devonshire architect-designed homes.",
      },
      {
        heading: 'Glass Packages Tuned for Texas Heat',
        content:
          "On a typical west elevation in Forest Hills or the streets around Lakewood Country Club, west-facing glass takes a thermal beating from roughly two in the afternoon until sunset. The right glass package is what controls cooling load. We routinely specify low-SHGC triple-silver Low-E coatings on these elevations, often paired with argon or krypton gas fills, to drop solar heat gain into the 0.18 to 0.22 range. North-facing elevations can run a higher SHGC for daylighting without paying a cooling penalty. Aluminum frames accept all the same advanced glass packages that wood and vinyl frames do, including laminated impact glass, acoustic laminated glass for homes near Mockingbird or Northwest Highway, and electrochromic dynamic glass on premium contemporary projects.",
      },
      {
        heading: 'Maintenance Reality in Dallas Conditions',
        content:
          "A common myth is that aluminum needs constant repainting in the Dallas climate. That was true for older anodized and painted aluminum, but the modern multi-coat fluoropolymer finishes used on premium lines carry twenty- to thirty-year color-fastness warranties. The finishes resist UV fading, chalking, and the hard-water spotting that builds up around Dallas sprinkler systems. Real-world maintenance is limited to occasional washing with mild detergent, periodic inspection of weatherstripping and gaskets, and lubrication of operable hardware. Compared to wood, which still requires refinishing on a Dallas exterior every few years, aluminum is functionally maintenance-free across a normal ownership window.",
      },
      {
        heading: 'When Aluminum Is the Right Choice and When It Is Not',
        content:
          "Aluminum is the right answer when architectural style demands narrow sightlines, when you are spanning unusually wide or tall openings, or when you are matching the contemporary vocabulary of a modern Dallas remodel. It is not always the right answer for traditional Tudors in Highland Park-adjacent blocks, Spanish Colonials in Greenway Parks, or Craftsman bungalows in Junius Heights, where wood, fiberglass, or wood-clad windows are usually the better fit for both architecture and HOA design guidelines. We will tell you honestly when aluminum is not the right material for your project, even if it is the more expensive option. The goal is the right window for your house, not the most expensive line in the catalog.",
      },
      {
        heading: 'Brand Selection and Local Service',
        content:
          "We install aluminum systems from manufacturers with established service networks in Dallas-Fort Worth so warranty support is not an export problem. Andersen, Pella, Marvin Modern, and select architectural lines all carry product offerings that meet our quality threshold for thermal performance, finish durability, and structural rating. Smaller boutique aluminum shops produce beautiful systems but can leave homeowners stranded if a sash needs warranty service three years after installation. We balance design ambition with serviceability so the window you love at year one still performs at year fifteen. Free in-home consultations include a frame-by-frame walk-through with material options and honest tradeoffs.",
      },
    ],

    features: [
      'Polyamide thermal breaks for Climate Zone 3 performance',
      'Narrow sightlines for contemporary Dallas architecture',
      'Factory-applied fluoropolymer finishes with 20+ year color-fastness',
      'Black, bronze, and custom RAL color options',
      'Compatible with laminated and impact-rated glass packages',
      'Engineered for wide spans and tall walls',
      'Resists warping, cracking, and dimensional movement',
      'Dual-finish wood interior options on premium lines',
      'High Design Pressure ratings for storm and wind exposure',
      'Recyclable material with sustainable manufacturing options',
    ],

    brands: [
      {
        name: 'Marvin Modern',
        description:
          "Marvin's aluminum-exterior modern line offers some of the narrowest sightlines in the residential market, with structural performance suited to wide multi-slide and lift-and-slide configurations. A natural fit for contemporary remodels in Bluffview, Preston Hollow, and the modern infill blocks of Lakewood and East Dallas.",
      },
      {
        name: 'Pella Architect Series Aluminum',
        description:
          "Pella's commercial-grade architectural aluminum, adapted for upscale residential use. EnduraClad fluoropolymer finishes, full thermal breaks, and engineered glass packages tuned for Dallas heat. Strong service network across the metroplex.",
      },
      {
        name: 'Andersen Architectural Aluminum',
        description:
          "Andersen's premium aluminum systems combine thermal performance with custom configurability and the warranty backing of one of the most established window manufacturers in North America. Available in custom colors and dual-finish frame options.",
      },
    ],

    faq: [
      {
        question: 'Are modern aluminum windows energy efficient enough for Dallas summers?',
        answer:
          'Yes. Thermally broken aluminum with quality Low-E glass packages hits ENERGY STAR Climate Zone 3 targets and reduces cooling-season energy use by 25 to 35 percent compared to older single-pane or non-thermally-broken frames. The polyamide thermal break is the critical detail.',
      },
      {
        question: 'Will aluminum frames dent in a Dallas hailstorm?',
        answer:
          'Direct hail impact can dent aluminum frames, but structural integrity of the window assembly remains intact. Pairing aluminum with laminated or impact-rated glass, which we routinely specify, dramatically reduces overall storm damage risk. Insurance carriers in Dallas County often offer premium credits for impact-rated glazing.',
      },
      {
        question: 'Do aluminum windows need repainting in the Dallas climate?',
        answer:
          'Premium aluminum windows use factory-applied fluoropolymer finishes carrying 20 to 30 year color-fastness warranties. They do not require repainting in the Dallas climate. Older anodized or painted aluminum from decades past is a different product entirely.',
      },
      {
        question: 'Are aluminum windows right for traditional Dallas homes?',
        answer:
          'Usually not. Tudors in Highland Park-adjacent areas, Spanish Colonials in Greenway Parks, and Craftsman bungalows in Junius Heights are typically better served by wood, wood-clad, or fiberglass. Aluminum shines on contemporary architecture and modern remodels where narrow sightlines and wide spans matter.',
      },
      {
        question: 'Can aluminum carry the wide multi-slide doors common in modern Dallas remodels?',
        answer:
          'Yes. Aluminum is the standard frame material for multi-slide and lift-and-slide door systems precisely because of its strength-to-sightline ratio. Spans of 12 to 30 feet are routine, and the engineered hardware on premium lines carries large panel weights smoothly for decades.',
      },
      {
        question: 'How much do aluminum windows cost installed in Dallas?',
        answer:
          'Everything is priced including installation. Aluminum is generally a premium-tier product, with pricing per opening varying based on size, glass package, finish color, and configuration. We provide detailed transparent quotes after an in-home measurement.',
      },
    ],
  }

  return (
    <>
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
    </>
  )
}

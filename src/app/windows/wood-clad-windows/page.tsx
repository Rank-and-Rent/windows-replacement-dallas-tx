import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Wood Clad Windows Replacement Dallas TX | Wood Inside, Weather-Tough Outside',
  description: 'Wood clad replacement windows in Dallas, TX. Real wood interiors paired with aluminum or fiberglass exterior cladding for the look of wood without the Dallas-climate maintenance burden. Call (214) 949-8227.',
  keywords: 'wood clad windows Dallas TX, wood clad replacement windows, aluminum clad wood windows, fiberglass clad wood, traditional windows Dallas',
  alternates: {
    canonical: 'https://windowreplacementdallastx.com/windows/wood-clad-windows',
  },
}

export default function WoodCladWindowsPage() {
  const content = {
    title: 'Wood Clad Windows Replacement in Dallas, TX',
    subtitle: 'Real Wood Interiors with Weather-Resistant Exterior Cladding for Dallas Heat and Storms',
    heroImage: '/window-types/wood-clad-dallas-tx.jpg',

    intro:
      "Wood clad windows are the practical compromise that has come to define replacement work on Dallas's most architecturally significant homes. Inside, you get the warm character of real stained or painted wood that belongs in a Lakewood Tudor, a Greenway Parks Spanish Colonial, or a Munger Place Craftsman. Outside, an extruded aluminum or pultruded fiberglass cladding takes the punishment of Dallas's UV-intense summers, hail-driven springs, and humidity-swing winters. The combination delivers most of the architectural authenticity of pure wood with a small fraction of the exterior maintenance. For Highland Park-adjacent and Conservation District homeowners who want wood inside but cannot commit to refinishing exterior sashes every few years, wood clad is almost always the right specification. The premium wood-clad lines from Marvin, Andersen, and Pella have been refined over decades and now represent some of the best engineered windows available for the North Texas climate.",

    sections: [
      {
        heading: 'How Wood Cladding Actually Works',
        content:
          "A wood clad window starts as a real wood frame and sash, typically pine, fir, or upgraded species like mahogany. The exterior face of the frame is then wrapped in a protective cladding, either rolled or extruded aluminum with factory-applied fluoropolymer paint, or pultruded fiberglass with similar finish technology. The cladding is mechanically attached and weather-sealed against the wood, creating a continuous barrier that blocks UV exposure, sheds water, and absorbs hail and impact damage before it reaches the wood substrate. The interior side remains untouched wood, ready for stain or paint to match interior trim. This separation of duties, wood for warmth and detail inside, weather-tough material outside, is the engineering insight that makes wood clad work as well as it does in Dallas.",
      },
      {
        heading: 'Why Wood Clad Wins on Most Dallas Architectural Replacements',
        content:
          "Dallas homeowners restoring or remodeling architecturally significant houses face a real maintenance question with pure wood. The exterior face of a wood window in Dallas takes brutal UV exposure year after year, and meticulous refinishing schedules are required to prevent failure. Wood clad solves this without compromising interior authenticity. On a Lakewood Tudor with leaded-glass interior wood windows, a wood clad replacement reads identically from inside the home. From outside, a properly color-matched cladding reads correctly to the eye at normal viewing distances. The trade-off is invisible until you climb a ladder, and the maintenance benefit is enormous. For most well-maintained replacement projects in Highland Park, University Park, M Streets, Devonshire, and the older Lakewood blocks, wood clad is the right call.",
      },
      {
        heading: 'Aluminum Clad vs. Fiberglass Clad',
        content:
          "Two cladding technologies dominate the Dallas market. Aluminum cladding is the historical standard, used by Marvin, Andersen, and Pella for decades, and offers the deepest range of factory-applied colors plus easy custom color matching to historic district paint palettes. Aluminum dents under direct hail impact but does not crack or compromise the wood beneath. Fiberglass cladding, used on certain newer Marvin and Pella product lines, resists dents better than aluminum and offers excellent thermal performance, though color options are slightly more limited. For Conservation District work where exact paint color matching matters, aluminum cladding usually wins. For storm-exposed elevations where hail damage is the primary concern, fiberglass cladding has a slight edge. We help select the right cladding material based on architectural review requirements and exposure.",
      },
      {
        heading: 'Color Range and Architectural Fit',
        content:
          "The factory-applied finishes used on premium wood clad windows are essentially permanent. Marvin's Kynar 500 fluoropolymer finishes, Andersen's Perma-Shield system, and Pella's EnduraClad all carry color-fastness warranties of twenty to thirty years. The black trim aesthetic that has dominated modern Dallas design for the last decade is fully achievable in wood clad without the heat-warping concerns that limit dark colors on basic vinyl. Traditional historic palettes, Tudor blacks and forest greens for Lakewood, sandstone tones for Greenway Parks Spanish Colonials, deep reds and creams for Munger Place Craftsman bungalows, are all available as standard or custom-matched colors. Inside the home, the wood frame accepts any stain or paint finish, allowing perfect integration with existing trim, cabinetry, and floor finishes.",
      },
      {
        heading: 'Energy Performance for Dallas Climate Zone 3',
        content:
          "Wood clad windows pair the natural insulating properties of wood with engineered glass packages that meet ENERGY STAR Climate Zone 3 requirements. U-factors typically land in the 0.27 to 0.30 range, comparable to fiberglass and Fibrex frames and significantly better than non-thermally-broken aluminum. SHGC values can drop into the 0.20 to 0.25 range with the right Low-E coating selection, which is the critical specification for Dallas cooling-dominated climate. We routinely specify lower SHGC on west and south elevations where afternoon solar load drives cooling costs, and slightly higher SHGC on shaded north exposures to preserve daylighting. The thermal mass of wood frames also moderates interior glass temperatures, reducing the radiant cooling effect on cold winter mornings.",
      },
      {
        heading: 'Hail and Storm Performance',
        content:
          "Aluminum and fiberglass cladding both protect the underlying wood frame from direct hail impact, which is a meaningful advantage during Dallas's spring storm season. Aluminum may dent but does not crack, and the wood beneath remains intact. Fiberglass cladding resists dents better and is increasingly specified on storm-exposed elevations like west-facing walls in Lake Highlands, properties on White Rock Lake's eastern shore, and homes along open ravines or golf courses. Pairing wood clad frames with laminated impact glass dramatically improves overall storm resilience and qualifies many Dallas County homes for insurance premium credits. We design glass and cladding packages on an elevation-by-elevation basis based on actual storm exposure rather than applying a uniform spec.",
      },
      {
        heading: 'Customization, Profiles, and Historic Compatibility',
        content:
          "Premium wood clad lines offer custom sizing, complex shapes, and profile options that match the vocabulary of Dallas's historic architecture. True divided lite muntin patterns, simulated divided lite options, ovolo and ogee sash profiles, eyebrow arches, and full-radius windows are all available in factory-built wood clad construction. For historic district homes where architectural review boards review window specifications, wood clad usually satisfies both the design intent and the practical maintenance concerns of homeowners. We have completed projects in Munger Place, Swiss Avenue, Junius Heights, and Hollywood Heights using wood clad as the primary specification with full architectural review approval. The custom profile capability also matters in Highland Park and University Park where pre-war original profiles can be matched precisely.",
      },
      {
        heading: 'Brands, Warranties, and Local Service',
        content:
          "We work with Marvin, Andersen, and Pella as primary wood clad manufacturers because their warranty support and Dallas-area service networks are reliable. Marvin's Signature Ultimate line is the most-specified wood clad on Highland Park and University Park projects. Andersen's A-Series and 400 Series wood clad lines are workhorses for Lakewood, M Streets, and East Dallas projects. Pella's Architect Series Reserve and standard Architect Series cover the same architectural ground with different aesthetic preferences. Warranties typically run 20 years on the frame and glass, with various coverage on cladding and hardware. We register every install on the homeowner's behalf and manage warranty claims directly so any future seal failure or hardware issue is handled smoothly.",
      },
    ],

    features: [
      'Real wood interior in pine, fir, mahogany, or upgraded species',
      'Aluminum or fiberglass exterior cladding with 20-30 year color-fastness',
      'Custom color matching for Conservation District and HOA palettes',
      'True divided lite and simulated divided lite muntin options',
      'ENERGY STAR rated Climate Zone 3 glass packages',
      'Compatible with laminated impact-rated glass for hail protection',
      'Custom sizing and shapes including arches and radius units',
      'Period-correct profiles for pre-war Dallas architecture',
      'Stain or paint finish on interior wood',
      '20+ year manufacturer warranties on premium lines',
    ],

    brands: [
      {
        name: 'Marvin Signature Ultimate',
        description:
          "The default specification for high-end wood clad work in Dallas. Extruded aluminum cladding, premium wood interior options, custom sizing, and the broadest color and profile selection on the market. Most-specified line for Highland Park, University Park, and Conservation District projects.",
      },
      {
        name: 'Andersen A-Series and 400 Series',
        description:
          "Andersen's wood clad lines combine authentic wood interiors with their proven Perma-Shield aluminum cladding. The A-Series sits at the premium tier with extensive species and finish options. The 400 Series offers strong value with the same fundamental construction.",
      },
      {
        name: 'Pella Architect Series Reserve',
        description:
          "Pella's flagship wood clad line with EnduraClad fluoropolymer exterior finish, premium hardware, and full custom configurability. Strong fit for Devonshire, Greenway Parks, and Bluffview projects where contemporary detailing meets traditional architecture.",
      },
    ],

    faq: [
      {
        question: 'How is wood clad different from solid wood windows?',
        answer:
          'Wood clad windows have a real wood interior just like solid wood, but the exterior face is wrapped in aluminum or fiberglass cladding that blocks UV, sheds water, and absorbs hail. This dramatically reduces exterior maintenance compared to pure wood without compromising interior wood character.',
      },
      {
        question: 'Will wood clad satisfy Dallas Conservation District requirements?',
        answer:
          'In most cases yes. Wood clad with custom color matching is regularly approved by Conservation District architectural review boards in Munger Place, Swiss Avenue, Junius Heights, and Hollywood Heights when properly specified. Highland Park and University Park architectural review typically also accepts wood clad for pre-war home replacement.',
      },
      {
        question: 'Aluminum clad or fiberglass clad, which is better for Dallas?',
        answer:
          'Aluminum cladding offers deeper color options and historic-color matching, important for Conservation District work, but can dent under direct hail. Fiberglass cladding resists dents better and is preferred on storm-exposed elevations. We help select based on architectural review requirements and storm exposure.',
      },
      {
        question: 'Do wood clad windows need exterior maintenance in Dallas?',
        answer:
          'Premium aluminum or fiberglass cladding carries 20 to 30 year color-fastness warranties and requires essentially no maintenance beyond occasional washing. Interior wood may benefit from periodic cleaning and occasional refinishing, but the demanding exterior maintenance schedule of pure wood is eliminated.',
      },
      {
        question: 'How long do wood clad windows last in Dallas conditions?',
        answer:
          'Quality wood clad windows are warrantied for 20 years on frame and glass and routinely deliver 30+ years of practical service life. The cladding system protects the wood substrate from the weather exposure that drives premature wood window failure in Dallas climate.',
      },
      {
        question: 'How much do wood clad windows cost installed in Dallas?',
        answer:
          'Wood clad sits in the upper-mid to premium tier of replacement windows. Pricing varies by species, line, glass package, color, and custom profile selection. We provide transparent itemized quotes after in-home measurement and an architectural fit consultation.',
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

import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Aluminum Windows Replacement Dallas TX | Durable, Modern Design',
  description: 'High-quality aluminum replacement windows in Dallas, TX. Durable, sleek, and energy-efficient. Andersen, Pella & JELD-WEN aluminum options. Everything priced including installation. Call 817-592-8870.',
  keywords: 'aluminum windows Dallas TX, aluminum replacement windows, durable windows, modern aluminum windows, Andersen aluminum windows, Pella aluminum windows, JELD-WEN aluminum windows',
}

export default function AluminumWindowsPage() {
  const content = {
    title: 'Aluminum Windows Replacement in Dallas, TX',
    subtitle: 'Sleek, Durable Performance with Modern Thermal Efficiency',
    heroImage: '/window-types/aluminum-dallas-tx.jpg',

    intro: "Dallas&apos;s urban sophistication and business district proximity make modern aluminum windows an ideal choice for homeowners seeking professional-grade durability. As a major metropolitan area with upscale residential developments, Dallas attracts professionals who appreciate aluminum windows' combination of sleek contemporary styling, exceptional strength, and thermal break efficiency. Whether in downtown-adjacent neighborhoods or suburban developments, aluminum windows provide the modern aesthetic and lasting performance that Dallas homeowners demand. With the city&apos;s focus on urban living and quality construction, aluminum windows offer sophisticated design that enhances Dallas&apos;s cosmopolitan character.",

    sections: [
      {
        heading: 'Thermal Break Technology for Urban Efficiency',
        content: "Dallas&apos;s urban climate with hot summers and cool winters benefits greatly from aluminum windows' advanced thermal break technology. A thermal break is a non-conductive material inserted between aluminum sections, creating an insulating barrier that dramatically improves energy performance. This prevents heat conduction through the metal, achieving U-factors comparable to vinyl windows while maintaining aluminum&apos;s sleek appearance. In Dallas&apos;s variable climate, thermally broken aluminum windows reduce heating and cooling costs by 25-35%, providing measurable savings for urban homeowners. Many models qualify for ENERGY STAR certification, appealing to Dallas&apos;s environmentally conscious community.",
      },
      {
        heading: 'Professional-Grade Durability and Strength',
        content: "Aluminum&apos;s fundamental properties make it exceptionally well-suited for Dallas&apos;s urban environment. The material never rusts, rots, or warps, maintaining structural integrity indefinitely. Aluminum windows are virtually indestructible—they resist impact damage from urban activity, vandalism, or severe weather far better than alternatives. This makes them ideal for Dallas properties where durability and security are priorities. The frames are extruded to precise tolerances, ensuring smooth operation and perfect alignment. Aluminum&apos;s strength enables larger window units and thinner sightlines that maximize views while maintaining structural stability. With proper maintenance, quality aluminum windows provide 40+ years of service in Dallas&apos;s competitive real estate market.",
      },
      {
        heading: 'Contemporary Aesthetics for Urban Dallas',
        content: "Aluminum windows excel at delivering the clean, minimalist aesthetic that complements Dallas&apos;s urban and contemporary architecture. The material&apos;s ability to be extruded into thin, precise profiles creates narrow sightlines that maximize glass area with minimal framing. Aluminum accepts a wide range of exterior finishes, from natural silver tones to custom powder-coated colors that match Dallas&apos;s architectural sophistication. Unlike wood windows that can swell or shrink, aluminum maintains perfectly straight lines year-round. For Dallas homeowners seeking sophisticated, low-maintenance windows that reflect the city&apos;s cosmopolitan character, aluminum provides the perfect balance of form and function.",
      },
      {
        heading: 'Low Maintenance with Urban Appeal',
        content: "While aluminum windows require more maintenance than vinyl options, they offer excellent long-term value with manageable care requirements for Dallas&apos;s urban lifestyle. Exterior surfaces benefit from periodic refinishing (typically every 8-12 years) to maintain appearance and protect the metal. The frames themselves never corrode or degrade, and interior surfaces require no maintenance beyond occasional cleaning. This maintenance schedule aligns with Dallas&apos;s professional standards, where homeowners expect quality materials. Compared to wood windows that require annual maintenance, aluminum windows represent a significant time and cost savings for busy urban professionals.",
      },
      {
        heading: 'Versatility for Dallas\&apos;s Architectural Diversity',
        content: "Aluminum&apos;s workability allows it to be formed into virtually any window configuration, making it ideal for Dallas&apos;s diverse architectural landscape. From contemporary high-rises to traditional homes, aluminum adapts beautifully. The material accommodates all major glass types, from single-pane for cost-conscious applications to triple-pane insulated units for maximum energy efficiency. In Dallas, aluminum windows excel in urban applications that demand durability and style. The material&apos;s compatibility with impact-resistant glass makes it suitable for downtown areas. Whether for new construction or replacement in established homes, aluminum provides the design flexibility required in Dallas&apos;s dynamic market.",
      },
      {
        heading: 'Sustainable Investment for Urban Professionals',
        content: "Aluminum represents one of the most environmentally responsible building materials available, perfectly aligning with Dallas&apos;s urban environmental consciousness. The material is 100% recyclable without loss of quality—recycled aluminum requires just 5% of the energy needed to produce new aluminum. Many aluminum window manufacturers use significant amounts of recycled content in their products. The material&apos;s longevity reduces the environmental impact of replacement over time. Aluminum windows contribute to sustainable living by enabling larger glass areas that maximize natural light and reduce artificial lighting needs. For environmentally aware Dallas professionals, aluminum windows provide premium performance with significantly lower ecological footprint.",
      },
    ],

    features: [
      'Thermal break technology for energy efficiency',
      'Exceptional strength and impact resistance',
      'Sleek, contemporary appearance',
      'Narrow sightlines maximize glass area',
      'Available in unlimited color options',
      '40+ year lifespan with proper maintenance',
      'Resists rust, rot, and corrosion',
      'Compatible with all glass types',
      'Smooth, precise operation',
      'Environmentally recyclable',
    ],

    brands: [
      {
        name: 'Andersen Aluminum Series',
        description: 'Andersen combines their expertise in window design with advanced aluminum extrusion technology. Their aluminum windows feature comprehensive thermal breaks and premium hardware for exceptional performance and longevity.',
      },
      {
        name: 'Pella Aluminum Windows',
        description: 'Pella\&apos;s aluminum windows incorporate their signature EnduraClad protection system and advanced thermal barrier systems. The result is aluminum performance with superior weather resistance and energy efficiency.',
      },
      {
        name: 'JELD-WEN Aluminum Collection',
        description: 'JELD-WEN offers premium aluminum windows with fusion-welded construction and comprehensive thermal breaks. Their extensive color selection ensures you can match any design aesthetic.',
      },
    ],

    faq: [
      {
        question: 'Do aluminum windows need painting in Dallas?',
        answer: 'Yes, aluminum windows require periodic exterior painting (typically every 8-12 years) to maintain their appearance and protect the metal from oxidation. However, the frames never rust or corrode, and the maintenance is far less frequent than wood windows.',
      },
      {
        question: 'Are aluminum windows energy efficient for urban Dallas homes?',
        answer: 'Modern aluminum windows with thermal breaks are highly energy efficient, achieving U-factors comparable to vinyl windows. They can reduce heating and cooling costs by 25-35% in Dallas\&apos;s climate when properly specified with insulated glass.',
      },
      {
        question: 'How long do aluminum windows last in Dallas?',
        answer: 'Quality aluminum windows last 40+ years with proper maintenance. The frames never degrade like wood or vinyl, and with periodic repainting, they maintain their appearance and performance indefinitely.',
      },
      {
        question: 'Are aluminum windows suitable for downtown Dallas?',
        answer: 'Absolutely. Aluminum windows are perfect for urban Dallas with their exceptional durability, strength, and contemporary styling that complements downtown architecture and provides security in busy urban environments.',
      },
      {
        question: 'Can aluminum windows be recycled?',
        answer: 'Yes, aluminum is 100% recyclable without loss of quality. Many aluminum windows contain recycled content, and the frames can be recycled at the end of their service life, making them an environmentally responsible choice.',
      },
      {
        question: 'How much do aluminum windows cost with installation?',
        answer: 'Aluminum window costs with installation vary by style and features. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material. We do not sell windows without installation.',
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
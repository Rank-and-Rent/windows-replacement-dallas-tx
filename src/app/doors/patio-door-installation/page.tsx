import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Patio Door Installation Dallas TX | Lakewood Decks, Forest Hills Pool Decks, Mid-Century Ranches',
  description: 'Patio door installation for Lakewood decks, Forest Hills pool-deck openings, and Casa Linda mid-century rear elevations. Sliding, French, multi-slide, and bifold options sized to original openings.',
  alternates: { canonical: 'https://windowreplacementdallastx.com/doors/patio-door-installation' },
};

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/doors/patio-doors-fort-worth-tx.avif')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/doors" className="hover:text-white transition-colors">Doors</Link>
              <span>/</span>
              <span className="text-primary">Patio Door Installation</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Patio Door Installation
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Patio doors for Lakewood decks, Forest Hills pool decks, and Casa Linda mid-century rear elevations. Sliding, French-hinged, multi-slide, and bifold options sized to the original opening with foundation-aware shimming.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* Left Column: Content */}
            <div className="lg:w-3/5">
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 mb-12">
                <p>Patio doors define how Dallas homeowners experience the threshold between interior living space and the outdoor patios, pool decks, and garden areas that anchor backyard life. The choice between sliding patio doors, French patio doors, multi-slide systems, and lift-and-slide configurations comes down to architectural style, opening size, and intended use pattern. Each type delivers different tradeoffs in opening width, weatherstripping geometry, and per-unit cost. We help Dallas homeowners think through the decision rather than defaulting to a single product type across every project.</p>

                <p>Patio doors carry the highest glass area of any door type in a typical home, often 40 to 80 square feet of glass on a single opening. That makes glass specification the single most important variable in long-term performance. Triple-silver Low-E coatings with low Solar Heat Gain Coefficients are essential on west and south patio door installations where afternoon Dallas sun drives serious cooling load. Argon gas fills, warm-edge spacers, and laminated impact-rated glass are standard upgrades on most projects we quote.</p>

                <p>Premium patio doors from Andersen, Pella, JELD-WEN, and Marvin all carry Climate Zone 3-tuned glass packages, multi-point locking, and engineered hardware that holds up across the Dallas humidity range. We register every install with the manufacturer for warranty support and manage warranty claims directly when needed.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSun />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Expansive Views</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Large glass panels bring natural light and outdoor scenery indoors.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSnowflake />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Energy Efficient</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Insulated glass and frames reduce heating and cooling costs in Texas climate.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaHome />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Seamless Flow</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Connect indoor living spaces with patios, decks, and outdoor areas.</p>
                </div>
              </div>

              {/* Features Section */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Door Types & Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Sliding Patio Doors</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Space-efficient operation with large glass panels for maximum views.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Horizontal sliding operation
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Stainless steel rollers and tracks
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Maximum usable space
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Hinged French Doors</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Elegant swinging operation with superior weather protection.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Traditional hinged operation
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Multi-panel configurations
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Superior weather sealing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Body Sections */}
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Patio Door Type Selection</h3>
                <p>Sliding patio doors are the most-installed type in Dallas because they maximize opening width without requiring swing clearance. French patio doors deliver dramatic full-opening but require more interior or exterior clearance for the door swing. Multi-slide systems open openings of 12 to 20 feet by stacking panels into a pocket, which is increasingly popular on Bluffview and Preston Hollow modern remodels. Lift-and-slide hardware uses a quarter-turn handle that lifts the panel off the seal before sliding, enabling much larger panel weights with smoother operation.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Energy Performance and Cooling-Season Savings</h3>
                <p>Patio doors are often the largest single source of heat gain on a Dallas home, particularly when the door faces west or south across an unshaded backyard. The cooling-season energy improvement from replacing original aluminum sliders with modern dual-pane Low-E patio doors is typically substantial. We model each project against the home's orientation and any shading from existing oaks and pecans before specifying glass. ENERGY STAR Climate Zone 3 compliance is the minimum standard.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Hail Protection and Storm Performance</h3>
                <p>Patio doors take direct hail exposure during Dallas spring storm seasons because they are typically on the back elevation of the home, often facing west or southwest. Pairing patio door frames with laminated impact-rated glass dramatically reduces breakage risk and qualifies many homeowners for insurance premium credits through carriers serving Dallas County. The laminated inboard layer holds the pane together if the outer light is broken, dramatically reducing the risk of a damaged door becoming a damaged interior.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Security Hardware and Access Control</h3>
                <p>Patio doors are sometimes viewed as a security vulnerability, and modern patio door hardware addresses that directly. Multi-point locking systems engage the frame at three or more points along the active panel. Smart lock compatibility allows integration with home security systems and keyless entry. Foot bolts on French patio doors lock the inactive panel to the threshold for added structural strength. We discuss security upgrades during the initial consultation rather than treating them as add-ons after install.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Service Coverage and Project Timeline</h3>
                <p>We install patio doors across the full Dallas metro service area. Installation typically completes in one to two working days for standard sliders and French doors and two to four days for larger multi-slide systems. The City of Dallas generally does not require permits for like-for-like patio door replacements that do not change opening size, but new openings or enlargements do trigger permitting and we handle that paperwork. Free in-home consultations are available across the service area.</p>
              </div>

              {/* CTA Block */}
              <div className="bg-secondary-dark p-10 text-center">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
                  Ready to Connect Your Spaces?
                </h3>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-8">
                  Professional consultation and free estimate
                </p>
                <Link href="/contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] shadow-2xl shadow-primary/40 transition-all active:scale-95">
                  Schedule Consultation
                </Link>
              </div>
            </div>

            {/* Right Column: Features & Specs */}
            <div className="lg:w-2/5">
              <div className="sticky top-32 space-y-8">
                {/* Features List */}
                <div className="bg-white p-10 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Sliding and hinged configurations</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Low-E and tinted glass options</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Insulated frames and multi-pane glass</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Retractable and sliding screen systems</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Impact-resistant glass available</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Heavy-duty hardware and thresholds</span>
                    </li>
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="bg-gray-50 p-10 border border-gray-100">
                  <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-6">
                    Perfect For Dallas Homes
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Living rooms opening to patios
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Dining areas with outdoor access
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Family rooms connecting to yards
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Contemporary and traditional homes
                    </li>
                  </ul>
                </div>

                {/* Contact CTA */}
                <div className="bg-primary p-8 text-center">
                  <span className="text-[9px] font-black text-white/70 uppercase tracking-[0.4em] mb-2 block">Questions?</span>
                  <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-6">Call Us Today</h4>
                  <a href="tel:2149498227" className="block bg-white text-secondary-dark font-black py-4 text-center uppercase tracking-widest text-[11px] hover:bg-gray-100 transition-colors">
                    (214) 949-8227
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-secondary-dark uppercase tracking-tighter leading-none mb-6 text-center">
              Patio Door <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about patio doors in Dallas, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Should I choose sliding or French patio doors?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Choose sliding doors when space efficiency is important and you have furniture near the door opening. French doors provide more dramatic openings and slightly better weather protection, but require clearance space for the door swing. Sliding doors are ideal for contemporary homes, while French doors suit traditional architecture.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How much do patio doors cost in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Patio door costs in Dallas, TX range from $1,200 to $4,000 installed, depending on size, materials, glass options, and brand. Sliding doors are typically less expensive than multi-panel French configurations. Premium impact-resistant glass and high-end brands increase costs.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Can patio doors be installed in existing openings?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most existing patio door openings can accommodate new patio doors, though some modifications may be needed. We assess each opening to ensure proper fit and may need to adjust framing, sills, or thresholds. Permits are rarely required for replacement installations in existing openings.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How do patio doors handle Texas heat and sun?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Quality patio doors feature Low-E glass coatings that reflect infrared heat while allowing visible light to pass through, reducing solar heat gain during Dallas summers. Insulated frames and multi-pane glass units further improve energy efficiency. Tinted glass options provide additional heat and glare reduction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products CTA */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-black text-secondary-dark uppercase tracking-tighter leading-none mb-6">
            Explore More <span className="text-primary italic">Options</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 max-w-2xl mx-auto">
            We offer a comprehensive range of premium products for every need
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/doors" className="bg-secondary-dark hover:bg-gray-900 text-white font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] transition-all">
              All Doors
            </Link>
            <Link href="/brands" className="border-2 border-secondary-dark text-secondary-dark font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] hover:bg-secondary-dark hover:text-white transition-all">
              Our Brands
            </Link>
            <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] transition-all shadow-lg shadow-primary/20">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
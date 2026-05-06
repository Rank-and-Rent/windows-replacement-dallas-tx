import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Storm Door Installation Dallas TX | Munger Place, Junius Heights, Conservation District Homes',
  description: 'Storm door installation that pairs with Munger Place, Junius Heights, and Swiss Avenue historic wood entries. Hail-rated glass and full-view options that protect the original door without altering it.',
  alternates: { canonical: 'https://windowreplacementdallastx.com/doors/storm-door-installation' },
};

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/doors/storm-doors-garland-tx.jpg')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/doors" className="hover:text-white transition-colors">Doors</Link>
              <span>/</span>
              <span className="text-primary">Storm Door Installation</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Storm Door Installation
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Storm doors that protect Munger Place, Junius Heights, and Swiss Avenue original wood entries from Dallas spring hailstorms and direct UV. Full-view, mid-view, and ventilating options that don't alter the historic door behind them.
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
                <p>Storm doors install over an existing entry door to add a secondary weather barrier, a sacrificial layer for hail and impact protection, and a screen function for spring and fall ventilation. In Dallas, where afternoon thunderstorms drop suddenly and homeowners want to keep front and back doors open for daylight and airflow during shoulder seasons, a quality storm door is one of the most practical small-budget upgrades available. They also extend the practical service life of premium entry doors by absorbing UV exposure, hail strikes, and accumulated weathering that would otherwise drive entry-door refinishing schedules.</p>

                <p>The right storm door for a Lakewood Tudor or a University Park Georgian is different from the right storm door for a Lake Highlands ranch or a Bishop Arts bungalow. We help Dallas homeowners select among glass-panel, ventilating, and full-view storm doors based on the architectural style of the entry, the orientation of the front elevation, and the practical use patterns of the household. Premium storm doors from Andersen, LARSON, and Pella all offer durable aluminum frames, tempered glass options, and engineered closer hardware that holds up across the Dallas humidity and heat range.</p>

                <p>Storm door installations are typically straightforward retrofits that complete in two to four working hours per door. The installation includes mounting the storm door frame to the existing entry casing, fitting the closer hardware, adjusting the threshold sweep, and verifying smooth operation across the full door swing.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaShieldAlt />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Enhanced Security</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Multi-point locking systems and reinforced construction deter intruders.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSun />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Weather Protection</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Shield primary doors from Texas storms, hail, and extreme weather.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSnowflake />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Energy Efficiency</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Insulated frames and sealed glass reduce heating and cooling costs.</p>
                </div>
              </div>

              {/* Features Section */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Key Features & Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Security Enhancement</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Storm doors add a critical layer of security with multi-point locking systems and reinforced construction that make break-ins much more difficult.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Multi-point locking systems
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Tempered or laminated glass
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Reinforced frame construction
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Screen Options</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Multiple screen systems provide ventilation while keeping insects out during pleasant Texas weather.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Full-view screen systems
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Retractable screens
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Pet-resistant options
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Body Sections */}
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Storm Door Types and Architectural Fit</h3>
                <p>Full-view storm doors with single-pane tempered glass deliver maximum daylight and unobstructed views, fitting modern remodels and contemporary homes. Mid-view storm doors with a ventilating bottom panel work well on traditional homes including Tudor Revivals, Spanish Colonials, and Craftsman bungalows where some bottom screen ventilation is desired. Self-storing or retractable-screen storm doors integrate the screen and glass into a single unit, eliminating the seasonal swap of glass and screen panels. We help select the right configuration based on architectural style and practical use patterns.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Hail Protection for the Primary Entry Door</h3>
                <p>Storm doors provide a sacrificial layer that absorbs hail impact before it reaches the primary entry door beneath. For Dallas homes with premium entry doors in fiberglass or stained wood, the storm door functions as a long-term protection mechanism that extends the entry door's service life and reduces refinishing burden. The tempered glass on quality storm doors handles most hail impacts without breaking, and the aluminum frame absorbs and distributes impact energy.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Color Matching and Hardware Coordination</h3>
                <p>Premium storm door manufacturers offer factory-applied finishes in dozens of colors, allowing close matching to the primary entry door, exterior trim, or shutter color. Hardware finishes including brass, satin nickel, oil-rubbed bronze, and matte black coordinate with the entry door hardware for visual consistency. We pay attention to these details because the storm door is a visible architectural element rather than purely functional hardware.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Closer Hardware and Long-Term Reliability</h3>
                <p>The hydraulic closer is the wear point on most storm doors. Premium lines use heavy-duty closers with adjustable tension that hold up across the Dallas humidity range and the seasonal temperature swings that can affect closer hydraulics. We adjust the closer during installation for the appropriate close speed and verify that the door closes fully without slamming. Routine maintenance is limited to occasional adjustment if the closer drifts over time.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Service Coverage and Free Quotes</h3>
                <p>We install storm doors across the full Dallas metro service area including Highland Park, University Park, Lakewood, the M Streets, Devonshire, Preston Hollow, Bluffview, Lake Highlands, Casa Linda, Bishop Arts, Oak Cliff, and the surrounding suburbs. Storm door installations are typically a half-day project per door, and we coordinate scheduling around the homeowner's needs. Free in-home quotes are available across the service area.</p>
              </div>

              {/* CTA Block */}
              <div className="bg-secondary-dark p-10 text-center">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
                  Ready to Get Started?
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
                      <span>Multi-point locking systems for enhanced security</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Insulated frames and sealed glass units</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Full-view and retractable screen systems</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Customizable colors and finishes</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Tempered or laminated glass options</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Easy installation and low maintenance</span>
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
                      Security-conscious homeowners
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Homes needing weather protection
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Energy efficiency improvements
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Curb appeal enhancement
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
              Storm Door <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about storm doors in Dallas, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How long does storm door installation take in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most storm door installations in Dallas, TX are completed in 1-2 hours. The process is much simpler than replacing primary entry doors and involves mounting the storm door frame around your existing door.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Do storm doors really improve home security?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, storm doors significantly enhance security by adding an additional barrier and reinforced frame that make forced entry much more difficult and time-consuming. Quality storm doors feature multi-point locking systems and tempered glass.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Can storm doors be installed over any entry door?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most entry doors can accommodate storm doors, though some older or unusually shaped doors may require modifications or custom storm doors. We assess each installation to ensure proper fit and operation.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How much do storm doors cost in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Storm door costs in Dallas, TX range from $300 to $800 installed, depending on size, brand, materials, and features. They represent excellent value for the security, weather protection, and energy efficiency benefits provided.
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
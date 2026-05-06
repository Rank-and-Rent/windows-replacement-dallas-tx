import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'French Door Installation Dallas TX | Highland Park Estates, Devonshire Garden Rooms',
  description: 'French door installation for Highland Park estate rear elevations, Devonshire Spanish Colonial garden rooms, and Greenway Parks formal interiors. True divided lite, multipoint security, mahogany or oak.',
  alternates: { canonical: 'https://windowreplacementdallastx.com/doors/french-door-installation' },
};

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/doors/french-doors-arlington-tx.jpg')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/doors" className="hover:text-white transition-colors">Doors</Link>
              <span>/</span>
              <span className="text-primary">French Door Installation</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              French Door Installation
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Hinged French pairs for Highland Park estate rear elevations, Devonshire Spanish Colonial garden rooms, and Greenway Parks formal interiors. Mortise-and-tenon stiles in mahogany or oak with true divided lite glass.
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
                <p>French doors are the architectural choice when the threshold between interior space and outdoor patio, courtyard, or garden should read as a deliberate design moment rather than a utilitarian opening. The two hinged operable panels with full-height glass panes create a visually dramatic connection that suits Dallas's traditional architecture beautifully. Tudor Revivals around Lakewood and Greenway Parks, Spanish Colonials in Devonshire and Bluffview, and the Mediterranean homes scattered through Highland Park-adjacent neighborhoods all carry French doors as part of their original architectural language. Modern French doors deliver the same classical proportions with dramatically improved energy and security performance compared to the original 1920s and 1930s wood units.</p>

                <p>French doors come in two primary configurations: in-swing for interior or covered-porch applications, and out-swing for exterior weather-exposed locations where in-swing operation would interfere with interior furniture or rugs. Active-active configurations let both panels open for full opening width; active-inactive configurations have one fixed panel with a flush bolt that can be opened occasionally for moving large furniture. We help select the right configuration based on the use pattern, weather exposure, and adjacent interior layout.</p>

                <p>Premium French doors from Andersen, Pella, Marvin, and JELD-WEN all carry Climate Zone 3-tuned glass packages, multi-point locking, and engineered hinges that hold up across the Dallas humidity range. Frame material options span fiberglass, wood-clad, and solid wood, with the right material depending on architectural fit and weather exposure.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSun />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Natural Light</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Expansive glass panels flood interiors with beautiful natural light.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaShieldAlt />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Enhanced Security</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Multi-point locking systems and reinforced frames protect your home.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSnowflake />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Energy Efficient</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Insulated glass and weatherstripping reduce heating and cooling costs.</p>
                </div>
              </div>

              {/* Features Section */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Glass Options & Materials
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Glass Treatments</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Multiple glass options balance light, privacy, and architectural style.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Clear glass for maximum light
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Obscure patterns for privacy
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Decorative divided-lite designs
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Frame Materials</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Durable materials that withstand Dallas weather conditions.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Fiberglass for low maintenance
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Steel for maximum security
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Wood with protective finishes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Body Sections */}
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">In-Swing vs. Out-Swing for Dallas Conditions</h3>
                <p>Out-swing French doors handle Dallas weather better in most exterior applications because the door swing pushes water and wind-driven rain away from the threshold rather than allowing it to be carried inside. Out-swing also keeps interior space free for furniture and rugs that would otherwise need to clear the door swing. In-swing doors work better on covered porch applications, breezeways, and locations where exterior obstructions would interfere with the swing path. We assess the specific application and recommend accordingly.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Glass Specification and Divided Lite Patterns</h3>
                <p>French doors are defined visually by their glass panels and the divided lite patterns within them. Six-over-six and ten-over-ten true divided lite patterns are the period-correct call for pre-war Dallas architecture, while clean two-pane configurations suit contemporary remodels. Simulated divided lites with applied muntins both inside and outside the glass deliver the same visual effect as true divided lites with significantly better energy performance. We specify Low-E glass packages tuned for Climate Zone 3 with low Solar Heat Gain Coefficient on west and south exposures.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Multi-Point Locking and Security</h3>
                <p>Modern French doors use multi-point locking systems that engage the active panel against the inactive panel and the frame at three or more points. The result is dramatically improved security and weather sealing compared to the single-point latches on older French doors. Smart lock compatibility allows integration with home automation systems and keyless entry. Laminated impact-rated glass adds another layer of security on doors that homeowners sometimes view as a vulnerability point.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Threshold and Weatherstripping Detail</h3>
                <p>The threshold is where most French door performance issues originate. Premium lines use adjustable thresholds with compression-fit weatherstripping that achieves a tight seal across the door bottom. We field-adjust thresholds during installation to verify proper sealing across the full width of both panels. The energy improvement from a properly installed premium French door versus a leaky original is substantial, particularly during the Dallas cooling season when air infiltration drives up cooling bills.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Installation Workflow and Permitting</h3>
                <p>Most French door installations are pocket replacements into existing rough openings without structural changes. Larger custom installations or new openings cut into existing walls do trigger permitting through the City of Dallas, and we handle that paperwork on the homeowner's behalf. Installation typically completes in one to two working days per opening including threshold adjustment and final operation testing. Free in-home consultations are available across the Dallas metro service area.</p>
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
                      <span>Traditional and contemporary styles</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Multiple glass options for privacy and light</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Fiberglass, steel, and wood frame materials</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Multi-point locking systems</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Impact-resistant glass options</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Energy-efficient insulated construction</span>
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
                      Connecting living spaces to patios
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Home offices needing natural light
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Elegant dining room entries
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Contemporary and traditional architecture
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
              French Door <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about French doors in Dallas, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How do French doors compare to sliding patio doors?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  French doors swing completely open on hinges, creating unobstructed access and allowing natural breezes to flow through. Sliding doors are more space-efficient but cannot be left open during windy conditions. French doors offer more elegant operation but require more clearance space.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Can French doors be left open during Texas weather?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  French doors can be left open during pleasant Texas weather to allow natural ventilation. However, they should be closed during rain, high winds, or when you leave the home. Quality French doors feature weatherstripping that creates an excellent seal when closed.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What glass options are available for French doors?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  French doors offer clear glass for maximum light, obscure patterns for privacy, decorative divided-lite designs for architectural interest, and impact-resistant glass for additional security and weather protection. You can mix different glass treatments on the same door.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How much do French doors cost in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  French door costs in Dallas, TX range from $1,500 to $4,000 per door installed, depending on size, materials, glass options, and brand. Premium custom French doors can cost $5,000 or more. They represent excellent value for their beauty and performance benefits.
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
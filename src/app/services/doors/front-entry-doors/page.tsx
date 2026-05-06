import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Front Entry Door Installation Dallas TX | HPISD Tudors, Munger Place, Lakewood Originals',
  description: 'Front entry doors for Highland Park Tudor Revivals, Munger Place craftsman entries, and Lakewood originals. Solid mahogany or fiberglass-clad with weatherstripping rated for Dallas freeze-thaw cycles.',
  alternates: { canonical: 'https://windowreplacementdallastx.com/services/doors/front-entry-doors' },
};

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/doors/entry-doors-fort-worth-tx.webp')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services/doors" className="hover:text-white transition-colors">Doors</Link>
              <span>/</span>
              <span className="text-primary">Front Entry Doors</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Front Entry Doors
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Front entries for HPISD Tudor Revivals, Munger Place Craftsman, and Lakewood originals where the door is part of the historic character. Solid mahogany, fiberglass-clad, or stave-core options with multipoint security hardware.
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
                <p>Our front entry door installation service across Dallas covers premium fiberglass, steel, and wood entries from Andersen, Pella, JELD-WEN, and Therma-Tru. The front entry is the most-seen architectural element of any Dallas home, and we approach replacement work as a coordinated specification involving the door, sidelights, transom, hardware, and threshold rather than a single-component swap. Lakewood Tudors typically need stained mahogany with leaded-glass sidelights, Spanish Colonials in Greenway Parks call for hand-carved Knotty Alder with appropriate carving, contemporary Bluffview remodels favor minimal modern doors with side-mounted handle hardware.</p>

                <p>Most front entry installations involve replacing the entire pre-hung unit including the frame, threshold, weatherstripping, and door slab. We field-measure the existing opening, document any structural considerations, and recommend the right combination of door, sidelights, and transom for the specific architecture. The City of Dallas generally does not require permits for like-for-like replacements that do not change opening size, though Conservation District and architectural review approvals are sometimes needed for historic-district homes.</p>

                <p>Premium front entry doors carry frame and slab warranties of 10 to 20 years with hardware coverage typically running 5 to 10 years. We register every install on the homeowner's behalf and handle warranty claims directly when needed. Installation typically completes in four to eight working hours per door including threshold adjustment and final hardware testing.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaShieldAlt />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Maximum Security</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Steel-reinforced frames and multi-point locking systems protect your family.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSnowflake />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Energy Savings</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Insulated cores and weatherstripping reduce heating and cooling costs significantly.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaDollarSign />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Curb Appeal</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Instantly enhances home value and creates positive first impressions for visitors.</p>
                </div>
              </div>

              {/* Security & Performance Features */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Security & Performance Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Advanced Security Systems</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Multi-point locking, reinforced frames, and high-security hardware protect your Dallas home.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Multi-point locking mechanisms
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Reinforced steel frames
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Deadbolts and security hinges
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Weather Protection</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Advanced weatherstripping and insulation maintain comfort in Texas climate extremes.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Multi-chambered insulation
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Compression weatherstripping
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Thermal break technology
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Body Sections */}
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Material Selection for Dallas Architecture</h3>
                <p>Fiberglass entry doors are our most-installed material because they balance authenticity, performance, and practicality for the Dallas climate. The pultruded fiberglass skin holds dimensional stability across the brutal thermal cycle Dallas summers impose on south and west elevations. Steel entries work well for back-of-house service entries where security is the priority. Solid wood remains the right call for Highland Park-area Tudors and Conservation District projects where authenticity is the priority and homeowners are prepared to budget for periodic refinishing.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Sidelights, Transoms, and Decorative Glass</h3>
                <p>Most Dallas front entries are not single-door installations but integrated assemblies including sidelights, transoms, or both. We coordinate the glass selection across the entire assembly: clear glass for maximum daylight, obscure or textured glass for privacy on street-facing entries, leaded or stained glass for period-correct historic homes, decorative inserts for upscale custom entries. The glass design dramatically affects both interior daylighting and exterior curb appeal.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Hardware and Smart Lock Integration</h3>
                <p>Premium front entry doors use multi-point locking systems that engage the frame at three or more points along the door height. Smart lock compatibility allows integration with home automation systems including Ring, August, Yale, and Schlage Encode platforms. Hardware finishes including brass, satin nickel, oil-rubbed bronze, matte black, and aged bronze coordinate with existing exterior light fixtures and house numbers. We discuss hardware selection during the initial consultation rather than treating it as an afterthought.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Threshold, Weatherstripping, and Energy Performance</h3>
                <p>Front entry energy performance depends as much on the threshold and weatherstripping as on the door itself. Adjustable thresholds with compression-fit weatherstripping prevent the air leakage that drives up cooling bills on Dallas homes. We field-adjust every threshold during installation to achieve a tight compression seal across the full door perimeter. Premium doors carry ENERGY STAR Climate Zone 3 ratings, and the energy improvement from a properly installed door versus a leaky original is often substantial.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Service Coverage and Free Quotes</h3>
                <p>We install front entry doors across the full Dallas metro service area including Highland Park, University Park, Lakewood, the M Streets, Devonshire, Preston Hollow, Bluffview, Lake Highlands, Casa Linda, Bishop Arts, Oak Cliff, Kessler Park, and the surrounding suburbs of Plano, Frisco, Richardson, Carrollton, Irving, and Las Colinas. Free in-home consultations cover product selection, hardware, glass options, and detailed itemized quotes with no obligation.</p>
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
                      <span>Fiberglass, steel, or solid wood construction</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Insulated cores with R-values up to 10</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Multi-point locking systems</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Decorative glass options with privacy features</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Factory-finished in custom colors</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Matching sidelights and transoms available</span>
                    </li>
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="bg-gray-50 p-10 border border-gray-100">
                  <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-6">
                    Ideal Applications
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Primary home entrances
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Security-conscious homeowners
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Style-focused renovations
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      All architectural styles
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
              Front Entry Doors <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about front entry doors in Dallas, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What materials work best for front entry doors in Texas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Fiberglass and steel front entry doors work exceptionally well in Dallas, Texas due to their dimensional stability in heat and humidity. Fiberglass offers the wood-like appearance many homeowners prefer while providing superior durability, while steel delivers maximum security for high-risk areas.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How much do front entry doors cost in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Front entry doors with installation in Dallas, Texas range from $1,500-$6,000 depending on material, style, and features. Everything is priced including installation. Premium fiberglass or steel doors with decorative glass and advanced security features typically cost $3,000-$5,000 with installation, while basic models start around $800-$1,500 with installation. We do not sell entry doors without installation.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Are front entry doors energy efficient in Texas climate?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Modern front entry doors in Dallas, Texas can achieve R-values up to 10 with insulated cores and advanced weatherstripping. Energy-efficient models help reduce heating and cooling costs in Texas Zone 3 climate, with proper installation being critical for optimal performance.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How long does front entry door installation take?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Front entry door installation in Dallas, Texas typically takes 4-8 hours for a standard replacement. This includes removing the old door, preparing the opening, installing the new door with proper flashing and weatherstripping, and final adjustments for smooth operation.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What security features should I look for in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Front entry doors in Dallas, Texas should include multi-point locking systems, reinforced frames, and security hinges. Look for doors with steel or fiberglass construction, deadbolts, and proper reinforcement around the lock area for maximum protection in urban and suburban Dallas areas.
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
            <Link href="/services/doors" className="bg-secondary-dark hover:bg-gray-900 text-white font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] transition-all">
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

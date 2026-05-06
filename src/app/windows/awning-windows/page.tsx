import Link from 'next/link';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/windows/awning-windows-dallas-tx.jpg')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services/windows" className="hover:text-white transition-colors">Windows</Link>
              <span>/</span>
              <span className="text-primary">Awning Windows</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Awning Windows
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Hinged at the top and opening outward, awning windows provide rain-resistant ventilation and contemporary style for Texas homes.
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
                <p>Awning windows are hinged at the top and open outward from the bottom using a crank mechanism, with the sash acting as a small overhang that lets the window stay open during the typical Dallas afternoon thunderstorm. That single design feature, ventilation that survives rain, makes awning windows uniquely useful in North Texas where summer storms drop suddenly and homeowners want to keep airflow without closing every window in the house. The compression seal that engages when the sash closes also delivers some of the best air infiltration numbers in residential window construction, often hitting performance ratings half of what a comparable double-hung achieves.</p>

                <p>Across Dallas, awning windows show up most often in three contexts. They are stacked vertically as a window wall in modern Bluffview and Preston Hollow remodels where the design wants horizontal sight lines. They are installed high on bathroom and kitchen walls in Lakewood, M Streets, and Junius Heights bungalows where ventilation matters but privacy from neighboring lots is important. And they are paired below large picture windows in Lake Highlands and Devonshire homes to create a fixed-glass-over-operable-vent configuration that delivers daylight and airflow without compromising views.</p>

                <p>Premium awning windows from Andersen, Marvin, Pella, and JELD-WEN all offer Low-E glass packages tuned for Climate Zone 3, multi-point locking systems, and integrated insect screens. Frame material options span vinyl, fiberglass, Fibrex, and wood-clad, and the right material depends on architectural style and ownership horizon.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSun />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Rain Protection</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Ventilate during light rain without water intrusion—perfect for Texas weather.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaShieldAlt />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Privacy + Light</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Install high on walls for ventilation while maintaining privacy in bathrooms.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSnowflake />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Energy Tight</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Compression seal technology delivers superior air and water resistance.</p>
                </div>
              </div>

              {/* Weather Performance Features */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Weather Performance Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Texas Storm Protection</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Engineered to handle Texas weather patterns with reinforced frames and advanced weatherstripping.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Impact-resistant glass options
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Reinforced frame construction
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Multi-point locking systems
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Ventilation Control</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Precise control over airflow with multiple opening positions and secure locking mechanisms.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Adjustable stay arms
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Multiple locking positions
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Screen retention system
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Body Sections */}
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Where Awning Windows Work Best in Dallas Homes</h3>
                <p>The most common awning window applications we install in Dallas are bathroom egress and ventilation, kitchen-corner ventilation above counters, and stacked window walls in modern remodels. In Tudor Revivals around Lakewood and Greenway Parks, awning windows often sit as transom units above larger fixed picture units, opening to release rising heat from second-story bedrooms during shoulder-season weather. In contemporary Bluffview and Preston Hollow homes, awning units stack three or four high to create vented glass walls that bring outside air in at multiple levels of the room.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Compression Seal Performance and Energy Numbers</h3>
                <p>The compression seal on a quality awning window achieves air infiltration ratings of around 0.10 cubic feet per minute per square foot of frame, compared to 0.30 or higher on typical double-hung sliders. That tighter seal translates directly into lower cooling-season energy waste, which matters in Dallas where afternoon temperatures regularly push past 100 degrees from June through September. Pairing awning frames with triple-silver Low-E glass on west and south elevations delivers some of the lowest U-factor and SHGC numbers available in residential glazing.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Material and Hardware Selection</h3>
                <p>Awning hardware lives outside under direct UV exposure, so material selection matters more than on a typical double-hung. Premium manufacturers use stainless steel and powder-coated zinc-aluminum alloys for the operator and stay arms to prevent corrosion in the Dallas summer humidity. We routinely specify Marvin, Andersen, and Pella for awning installations because their crank mechanisms and lock systems hold up over the typical fifteen-year ownership horizon. Vinyl, fiberglass, Fibrex, and wood-clad frames are all viable; the right choice depends on architectural fit and exterior color requirements.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Storm and Hail Considerations</h3>
                <p>Awning windows project outward when open, which makes them slightly more vulnerable to wind-driven hail than fixed glass. We recommend keeping awning units closed during storm warnings, and we routinely specify laminated impact-rated glass on awning installations facing west or southwest exposures across Lake Highlands, Casa Linda, and East Dallas. The compression seal performs better than slider seals during high-wind events, but the operator hardware should not be open during severe weather.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Installation Approach and Sizing</h3>
                <p>Awning windows typically install as pocket replacements into existing rough openings without changing structure. Standard sizes range from 24 inches wide by 16 inches tall up to 48 inches by 36 inches. Larger units are available but the operator hardware capacity becomes a limiting factor on big sashes. For Dallas custom homes that want a stacked window wall, individual awning units are typically combined with mullions to create the full assembly, which preserves the operability of each unit while reading as a single architectural element.</p>
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
                      <span>Top-hinged outward operation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Multi-point locking with interior screen</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Crank mechanism for precise control</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Compression weatherstripping</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Multiple sizes for stacking configurations</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Available in various grid patterns</span>
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
                      Bathrooms requiring privacy and ventilation
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Above entry doors for transom applications
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Basements and lower-level installations
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Contemporary and craftsman style homes
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
              Awning Window <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about awning windows in Dallas, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How do awning windows handle Texas thunderstorms?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Awning windows in Dallas, Texas are designed to handle Texas thunderstorms effectively. The outward-opening design creates a natural overhang that deflects rain away from the interior, allowing ventilation during light showers while maintaining weather protection during heavier Texas downpours.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Are awning windows suitable for high installations in Dallas homes?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Awning windows in Dallas, Texas are ideal for high installations where privacy and ventilation are needed without accessibility concerns. They're commonly installed 6-8 feet above floor level in bathrooms, above doors, or in areas where traditional operable windows would be difficult to reach for cleaning or operation.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Can awning windows be stacked for larger openings in Texas architecture?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Awning windows in Dallas, Texas can be stacked vertically to create larger architectural openings. This configuration is popular in contemporary Texas homes for creating dramatic window walls while maintaining the weather protection and ventilation benefits that make awning windows ideal for the Texas climate.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Do awning windows provide adequate ventilation in Texas heat?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Awning windows in Dallas, Texas provide excellent ventilation in Texas heat, directing airflow downward into occupied spaces. The outward-opening design captures prevailing breezes and creates positive pressure ventilation, making them more effective than inward-opening windows for natural cooling in Texas homes.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How do awning windows compare to casement windows in Dallas applications?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Both awning and casement windows in Dallas, Texas offer outward-opening operation, but awning windows open from the top while casement windows open from the side. Awning windows are preferred for high installations and rain protection, while casement windows typically provide more ventilation area in standard window openings.
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
            <Link href="/services/windows" className="bg-secondary-dark hover:bg-gray-900 text-white font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] transition-all">
              All Windows
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

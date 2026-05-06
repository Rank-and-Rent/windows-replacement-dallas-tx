import Link from 'next/link';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/windows/double-hung-windows-frisco-tx.jpg')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/windows" className="hover:text-white transition-colors">Windows</Link>
              <span>/</span>
              <span className="text-primary">Double-Hung Windows</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Double-Hung Window Replacement in Dallas, TX
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              The most popular window style in America, combining timeless design with modern performance technology for homes throughout Dallas, TX.
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
                <p>Double-hung windows are the most-installed style across Dallas residential construction, and for good reason. The two operable sashes that slide vertically deliver flexible ventilation, easy interior cleaning through tilt-in sashes, and an architectural profile that fits the prairie-style bungalows of the M Streets, the brick colonials of Preston Hollow, the mid-century ranches of Lake Highlands and Casa View, and the postwar tract homes of Wilshire Heights and Devonshire equally well. Modern double-hung construction has solved most of the operational and energy issues that plagued the original 1920s wood double-hungs in Dallas's pre-war neighborhoods, while preserving the proportions and look that make this style historically appropriate.</p>

                <p>The vertical sliding action means double-hungs do not project into pathways, decks, or landscaping, which makes them practical for Dallas homes with tight side-yard clearances or front-elevation porches. The tilt-in sash feature on quality lines lets homeowners clean both sides of the glass from inside the home, which is a meaningful convenience for two-story houses across Devonshire, Preston Hollow, and the older streets of Lakewood where ladder access is awkward.</p>

                <p>We install double-hungs in vinyl, fiberglass, Fibrex, and wood-clad. The right material depends on architectural style, ownership horizon, and elevation exposure. Premium lines from Andersen, Marvin, Pella, and JELD-WEN all carry strong warranties and Climate Zone 3-tuned glass packages that meet or beat ENERGY STAR requirements for Dallas conditions.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSun />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Superior Ventilation</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Control airflow from top, bottom, or both sashes simultaneously for optimal indoor air quality.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaTools />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Easy Maintenance</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Tilt-in sashes allow you to clean exterior glass from inside your home safely.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSnowflake />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Energy Efficient</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Multi-chambered frames and low-E glass reduce heat transfer, lowering HVAC costs year-round.</p>
                </div>
              </div>

              {/* Professional Installation Process */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Professional Installation Process
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Pre-Installation Assessment</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Our technicians perform detailed measurements and structural evaluations to ensure optimal performance and longevity.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Precise measurements and templates
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Frame condition assessment
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Flashing and drainage evaluation
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Installation Excellence</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Certified teams use professional techniques to ensure weather-tight seals and proper operation.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Shimming and leveling for stability
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Proper caulking and sealing
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Hardware adjustment and testing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Body Sections */}
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Architectural Fit Across Dallas Neighborhoods</h3>
                <p>Double-hungs are the historically correct specification for prairie-style and Craftsman bungalows in the M Streets, Junius Heights, Vickery Place, and Hollywood Heights, where the original architecture used double-hung wood sashes with one-over-one or three-over-one divided lite patterns. They also fit the brick colonials of Highland Park, University Park, and Preston Hollow, the mid-century ranches of Lake Highlands and Casa Linda, and the Tudor accents that show up across Lakewood and Greenway Parks. For these contexts, narrow-profile double-hungs with simulated divided lites in dark exterior colors typically read most accurately.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Energy Performance and Air Infiltration</h3>
                <p>The traditional weakness of double-hungs is air leakage through the meeting rail where the upper and lower sashes overlap. Modern lines have largely solved that problem with engineered weatherstripping, multi-fin meeting-rail seals, and balance-spring hardware that holds the sash firmly in place. Premium double-hungs achieve U-factor values in the 0.27 to 0.30 range with multi-pane Low-E glass packages, comfortably meeting ENERGY STAR Climate Zone 3 requirements for Dallas. The right glass package on west and south elevations cuts cooling-season energy use by twenty-five to thirty-five percent compared to original aluminum or builder vinyl.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Tilt-In Sashes and Long-Term Maintenance</h3>
                <p>Tilt-in sash hardware lets homeowners pivot each sash inward to clean exterior glass from inside the home. On two-story Dallas homes in Devonshire, Lakewood, and Preston Hollow where ladder access to second-floor windows is awkward, this feature pays back its small cost premium quickly. The hardware itself adds modest complexity and a few moving parts to the sash, but premium lines from Andersen, Marvin, and Pella have refined the mechanisms over decades and reliability is excellent on quality products.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Hail Protection and Storm Performance</h3>
                <p>Double-hung sashes do not project outward, which means they cannot be damaged by wind or hail in the way that an open casement or awning sash can. The vertical-only geometry also stays sealed effectively under wind-driven rain. We routinely specify laminated impact-rated glass on west and south elevations for Dallas homes in hail-prone neighborhoods, and many insurance carriers in Dallas County offer premium credits for impact-rated glazing. Pairing a quality double-hung frame with laminated inboard glass produces a window assembly that performs well across the full North Texas storm season.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Installation, Sizing, and Egress</h3>
                <p>Double-hung windows install as pocket replacements in existing rough openings without changing structure. Standard sizes range widely, and double-hungs are an excellent egress window choice for bedrooms because the lower operable sash provides a single unobstructed opening that meets the 5.7-square-foot egress minimum required by Texas building code. We field-measure each opening, verify egress compliance for bedroom locations, and size accordingly. Most Dallas double-hung replacement projects complete within three to five working days for a full-house installation of fifteen to twenty windows.</p>
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
                      <span>Dual weatherstripping for maximum air seal</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Tilt-in sashes for effortless cleaning</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Multi-point locking systems for enhanced security</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Low-E glass with argon gas fill</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Fusion-welded vinyl frames that won't rot or fade</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Lifetime limited warranty on materials</span>
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
                      Colonial and traditional style homes
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Historic restoration projects
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Bedrooms requiring egress compliance
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Living areas needing flexible ventilation
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
              Double-Hung Window <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about double-hung windows in Dallas, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How long does double-hung window installation take in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most double-hung window installations in Dallas, Texas take 2-4 hours per window, depending on the complexity of the job and existing frame condition. A typical whole-home replacement project spans 3-7 days for completion, with our teams working efficiently to minimize disruption to your daily routine.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What permits are needed for window replacement in Dallas, Texas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Window replacement in Dallas, Texas typically requires a building permit if the new windows differ in size or configuration from the originals, or if exterior modifications are needed. Our team handles the permit process and can guide you through local Dallas building code requirements to ensure compliance.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Can double-hung windows improve energy efficiency in Texas homes?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, modern double-hung windows in Dallas, Texas can significantly improve energy efficiency with low-E glass coatings, argon gas fills, and advanced weatherstripping. These features help reduce heat transfer, lowering cooling costs during Texas summers and providing better insulation during cooler months.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Are double-hung windows secure for Dallas-area homes?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Modern double-hung windows in Dallas, Texas include multi-point locking systems and reinforced frames for enhanced security. The sash design prevents forced entry attempts, and our installation ensures proper alignment and operation for maximum safety in your Dallas-area home.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What maintenance do double-hung windows require in Texas climate?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Double-hung windows in Dallas, Texas require minimal maintenance with tilt-in sashes for easy cleaning and durable vinyl frames that resist fading. Annual weatherstripping inspection and occasional hardware lubrication keep them performing optimally in the Texas climate.
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
            <Link href="/windows" className="bg-secondary-dark hover:bg-gray-900 text-white font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] transition-all">
              All Windows
            </Link>
            <Link href="/brands" className="border-2 border-secondary-dark text-secondary-dark font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] hover:bg-secondary-dark hover:text-white transition-all">
              Our Brands
            </Link>
            <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] transition-all shadow-lg shadow-primary/20">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}

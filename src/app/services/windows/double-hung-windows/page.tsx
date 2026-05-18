import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Double-Hung Window Installation Dallas TX | HPISD Tudors, Swiss Avenue, Munger Place',
  description: 'Double-hung installation for Highland Park Tudor Revivals, Swiss Avenue Historic District, and Munger Place conservation overlay. Tilt-in for second-story Lakewood cleaning, period-correct sash proportions.',
  alternates: { canonical: 'https://windowreplacementdallastx.com/services/windows/double-hung-windows' },
};

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/windows/double-hung-windows-frisco-tx.jpg')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services/windows" className="hover:text-white transition-colors">Windows</Link>
              <span>/</span>
              <span className="text-primary">Double-Hung Windows</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Double-Hung Window Replacement in Dallas, TX
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              The default specification for HPISD Tudors, Swiss Avenue Historic District, and Munger Place — period-correct sash proportions with modern weatherstripping and Low-E glass tuned to North Texas Climate Zone 3.
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
                <p>Our double-hung window installation service across Dallas covers the most-requested window style in the metroplex. Double-hungs make up a substantial majority of replacement work we do because they fit the architectural language of so much of Dallas's housing stock, from prairie-style bungalows in the M Streets and Junius Heights to brick colonials in Preston Hollow and Highland Park to mid-century ranches in Lake Highlands and Casa Linda. The two vertically-sliding sashes deliver flexible ventilation, easy interior cleaning through tilt-in mechanisms, and an architectural profile that holds up across decades.</p>

                <p>Our service workflow handles whole-house replacement projects involving fifteen to twenty-five openings as efficiently as single-room retrofits. Each project starts with an in-home consultation covering measurement, product selection, glass package recommendations, and exterior color matching. We provide detailed itemized quotes before any deposit and register every install with the manufacturer for warranty support. Installations typically complete in three to five working days for a full-house project.</p>

                <p>We work with Andersen, Marvin, Pella, and JELD-WEN double-hung lines because their warranties stand behind the product over realistic Dallas ownership periods. Frame material options span vinyl, fiberglass, Fibrex, and wood-clad, with the right material depending on architectural fit and ownership horizon. We help homeowners think through that decision rather than pushing a single product line on every project.</p>
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
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Service Coverage Across Dallas</h3>
                <p>We install double-hung windows across the full Dallas metro service area including Highland Park and University Park, Lakewood and East Dallas, the M Streets and Munger Place, Preston Hollow and Devonshire, Bluffview and Inwood, Lake Highlands and Casa Linda, Bishop Arts and Oak Cliff, and the surrounding suburbs of Plano, Frisco, Richardson, Carrollton, Irving, and Las Colinas. Our base in Dallas keeps us within consistent service range of every neighborhood in the metroplex.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Whole-House Replacement Projects</h3>
                <p>Most of our double-hung work is whole-house replacement on homes built between 1940 and 2005, where the original aluminum or builder-grade vinyl windows have reached the end of their practical service life. We handle the project as a coordinated installation rather than one window at a time, which keeps the schedule tight and minimizes disruption to the household. Project timelines typically run three to five working days for fifteen to twenty openings, and we can phase larger projects when scheduling demands it.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Glass Package Selection</h3>
                <p>Glass selection drives most of the long-term energy performance, and we specify on a per-elevation basis. West and south elevations on Lakewood Tudors, Devonshire colonials, or Lake Highlands ranches typically get triple-silver Low-E with low Solar Heat Gain Coefficient. North elevations can run higher SHGC values to preserve daylight. Acoustic laminated glass works well on homes near major Dallas arterials. Storm-exposed elevations across hail-prone neighborhoods get laminated impact-rated glass that qualifies many homeowners for insurance premium credits.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Architectural Color and Profile Matching</h3>
                <p>We match exterior color and profile to the architectural style of the home rather than defaulting to white vinyl across every project. Tudor and Mediterranean homes around Lakewood and Greenway Parks typically call for dark exterior colors with simulated divided lite patterns. Spanish Colonials and Mission-style homes in Bluffview and Devonshire fit cream and terra-cotta exteriors. Mid-century ranches in Lake Highlands and Casa Linda often look right with bronze or black exteriors and minimal grille patterns.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Pricing, Financing, and Free Quotes</h3>
                <p>We provide free in-home consultations and detailed itemized quotes covering product, installation, trim, and warranty registration. Everything is priced including installation. Pricing per opening varies based on size, material, glass package, and exterior color, and we explain the tradeoffs honestly. We offer financing through established home-improvement lenders for whole-house projects without pressuring financing on customers who prefer to pay in full.</p>
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

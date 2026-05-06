import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Window Replacement Arlington TX | UTA Neighborhoods, Lake Arlington, Joe Pool Lake',
  description: 'Window replacement for Arlington 1960s and 1970s ranches, the UTA-adjacent neighborhoods, the Lake Arlington area, and the entertainment district near AT&T Stadium and Globe Life Field.',
  alternates: { canonical: 'https://windowreplacementdallastx.com/locations/arlington-tx' },
};

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/locations/window-replacement-arlington-tx.jpg')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
              <span>/</span>
              <span className="text-primary">Arlington, TX</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Window Replacement in Arlington, TX
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Replacement work for Arlington's 1960s and 1970s ranch stock — UTA-adjacent neighborhoods, Lake Arlington, the entertainment district near AT&amp;T Stadium and Globe Life Field, and the newer south Arlington subdivisions toward Joe Pool Lake.
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
                <p>Arlington is a large city sitting between Dallas and Fort Worth with a housing stock that ranges from 1960s and 1970s ranch homes in north and east Arlington to newer developments in the southern parts of the city near Joe Pool Lake. Most replacement work we do here addresses original aluminum or builder-grade vinyl windows showing decades of UV degradation, seal failure, and hailstorm damage. We work across the entire city including the entertainment district near AT&amp;T Stadium and Globe Life Field, the Lake Arlington area, the established neighborhoods around UTA, and the newer south Arlington subdivisions.</p>

                <p>Arlington shares the same hot-summer cooling-dominated climate as the rest of North Texas, with ENERGY STAR Climate Zone 3 requirements applying to new replacement windows. The city is a regular hail target every spring, and we routinely specify laminated or impact-rated glass on west and south elevations where afternoon storm exposure is highest. Many insurance carriers in Tarrant County offer premium credits for impact-rated glazing, which can offset the upgrade cost over the policy life.</p>

                <p>Architectural styles in Arlington range from traditional brick ranches to contemporary new construction. The original homes near the UTA campus and east Arlington often benefit from premium vinyl with modern Low-E glass packages, while newer subdivisions on the south end of the city sometimes carry stricter HOA color and grille requirements that we navigate during the specification phase. Although Arlington is in Tarrant County, our base in Dallas keeps us within easy service range of every neighborhood in the city.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaTools />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Expert Service</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Professional installation by experienced Arlington specialists.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaShieldAlt />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Quality Products</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Premium brands like Andersen, Pella, JELD-WEN, and Marvin.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaHome />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Local Knowledge</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Deep understanding of Arlington neighborhoods and attractions.</p>
                </div>
              </div>

              {/* Services Section */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Comprehensive Arlington Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Window Replacement</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">All window types including casement, double-hung, sliding, and specialty shapes for Arlington homes.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Energy-efficient upgrades
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Impact-resistant options
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Custom configurations
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Door Installation</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Entry doors, patio doors, French doors, and storm doors for every Arlington property.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Security enhancements
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Weather protection
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Curb appeal improvements
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Body Sections */}
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Energy Efficiency for Arlington Cooling Loads</h3>
                <p>The cooling season in Arlington runs from April through October and drives most of the annual electric bill. Replacing original aluminum or worn-out builder vinyl with modern dual-pane Low-E glass typically reduces cooling-season energy use by twenty-five to thirty-five percent. We model west and south elevations against orientation and shading, then recommend glass packages with appropriately low Solar Heat Gain Coefficients. Triple-silver Low-E coatings, argon gas fills, and warm-edge spacers are standard upgrades on most Arlington projects we quote.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Hail Protection and Storm Performance</h3>
                <p>Arlington is on the western edge of the North Texas hail corridor and takes regular storm damage in the spring season. We pair frames with laminated or impact-rated glass on storm-exposed elevations, particularly homes in open neighborhoods or those near Joe Pool Lake. Insurance carriers serving Tarrant County often offer premium credits for impact-rated glazing, which we document and provide for the carrier's underwriting review.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Architectural Fit and HOA Considerations</h3>
                <p>Arlington's housing mix calls for different specifications depending on neighborhood. Older brick ranches near east Arlington and UTA generally accept white or almond exterior with double-hung configurations and applied muntins. Newer subdivisions south of I-20 toward Mansfield often have HOA design guidelines specifying frame colors and grille patterns, and we navigate those approvals on the homeowner's behalf. Contemporary new construction occasionally calls for thermally broken aluminum with narrow sightlines, and we specify accordingly.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Service Coverage Across Arlington</h3>
                <p>We serve Arlington homeowners across the entire city, from north Arlington and the entertainment district near Globe Life Field and AT&amp;T Stadium through central Arlington around the UTA campus to south Arlington toward Mansfield and Joe Pool Lake. Although our home base is in Dallas, Arlington is well within our regular service radius and we maintain consistent scheduling, pricing, and service across the metroplex.</p>
              </div>

              {/* CTA Block */}
              <div className="bg-secondary-dark p-10 text-center">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
                  Ready to Upgrade Your Arlington Home?
                </h3>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-8">
                  Free consultation and estimate for your location
                </p>
                <Link href="/contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] shadow-2xl shadow-primary/40 transition-all active:scale-95">
                  Get Free Quote
                </Link>
              </div>
            </div>

            {/* Right Column: Areas & Coverage */}
            <div className="lg:w-2/5">
              <div className="sticky top-32 space-y-8">
                {/* Service Areas */}
                <div className="bg-white p-10 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                    Arlington Service Areas
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Established downtown neighborhoods</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Family-friendly communities</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Properties near AT&T Stadium</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Six Flags Over Texas area</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Growing suburban developments</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Entertainment district properties</span>
                    </li>
                  </ul>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-50 p-10 border border-gray-100">
                  <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-6">
                    Why Arlington Homeowners Choose Us
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Local expertise in Arlington attractions and lifestyle
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Transparent pricing with detailed estimates
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Professional installation by certified technicians
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Premium products with manufacturer warranties
                    </li>
                  </ul>
                </div>

                {/* Contact CTA */}
                <div className="bg-primary p-8 text-center">
                  <span className="text-[9px] font-black text-white/70 uppercase tracking-[0.4em] mb-2 block">Questions?</span>
                  <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-6">Call Our Arlington Office</h4>
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
              Arlington Window & Door <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about window and door replacement in Arlington, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How long does window replacement take in Arlington?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most window replacements in Arlington, TX are completed in 4-8 hours per window. Complex installations or multiple windows may take 1-2 days total. We provide detailed timelines during your consultation and work efficiently to minimize disruption.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Do you offer financing for Arlington homeowners?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, we offer flexible financing options for Arlington homeowners to make energy-efficient window and door upgrades more affordable. Our financing partners provide competitive rates with easy qualification and monthly payment plans that fit most budgets.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What permits are needed for window replacement in Arlington?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  In most cases, replacing windows in existing openings in Arlington doesn't require permits. However, if you're changing the size of openings, adding windows, or making structural modifications, permits may be required. We help navigate local requirements and can coordinate with Arlington building officials when needed.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How much do windows cost in Arlington?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Window costs in Arlington, TX vary based on size, style, materials, and energy efficiency features. Basic replacement windows typically range from $300-$800 per window installed. Premium energy-efficient or impact-resistant windows range from $600-$1,500 or more per window. We provide detailed quotes based on your specific selections.
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
            Explore Our <span className="text-primary italic">Services</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 max-w-2xl mx-auto">
            Comprehensive window and door solutions for every Arlington home
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/windows" className="bg-secondary-dark hover:bg-gray-900 text-white font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] transition-all">
              All Windows
            </Link>
            <Link href="/doors" className="border-2 border-secondary-dark text-secondary-dark font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] hover:bg-secondary-dark hover:text-white transition-all">
              All Doors
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
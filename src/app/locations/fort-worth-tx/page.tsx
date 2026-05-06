import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Window Replacement Fort Worth TX | Fairmount, Mistletoe Heights, Ryan Place, Cultural District',
  description: 'Window replacement for Fort Worth Fairmount Craftsman, Mistletoe Heights Tudor, Ryan Place Spanish Colonial, and Cultural District homes. Period-correct profiles and foundation-aware install on pre-war stock.',
  alternates: { canonical: 'https://windowreplacementdallastx.com/locations/fort-worth-tx' },
};

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/locations/window-replacement-fort-worth-tx.jpg')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
              <span>/</span>
              <span className="text-primary">Fort Worth, TX</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Window Replacement in Fort Worth, TX
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Replacement work across Fort Worth's pre-war historic districts — Fairmount Craftsman bungalows, Mistletoe Heights Tudor Revivals, Ryan Place and Berkeley Place, the Cultural District, and TCU-adjacent University Place.
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
                <p>Fort Worth is the western anchor of the Dallas-Fort Worth metroplex with a deep stock of historic neighborhoods including Fairmount, Mistletoe Heights, Ryan Place, Berkeley Place, and the Cultural District around the Kimbell and Modern museums. Replacement work in Fort Worth often involves pre-war Craftsman bungalows, Tudor Revivals, and Spanish Colonial homes with original wood sashes that have aged significantly under decades of Texas sun. We also serve newer developments in the southwest part of the city around Hulen and the affluent neighborhoods of TCU-adjacent University Place and Westover Hills.</p>

                <p>Fort Worth shares the same hot-summer cooling-dominated climate as Dallas, with cooling season typically running from April into October and ENERGY STAR Climate Zone 3 requirements applying to new replacement windows. Spring hailstorms regularly track across Tarrant County, and pairing replacement frames with laminated impact-rated glass on storm-exposed elevations is a standard recommendation. Insurance carriers serving Tarrant County often offer premium credits for impact-rated glazing.</p>

                <p>Fort Worth's housing mix calls for a wide range of replacement specifications. Pre-war neighborhoods often benefit from wood-clad or premium fiberglass that reads correctly on traditional architecture without the maintenance burden of pure wood. Mid-century neighborhoods around the older Tarrant County Junior College area accept premium vinyl with appropriate profiles. Newer subdivisions in the southwest part of the city often have HOA design guidelines that we navigate during the specification phase. Although our home base is in Dallas, Fort Worth is well within our regular service radius.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaTools />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Expert Service</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Professional installation by experienced Fort Worth specialists.</p>
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
                  <p className="text-sm text-gray-500 leading-relaxed">Deep understanding of Fort Worth neighborhoods and heritage.</p>
                </div>
              </div>

              {/* Services Section */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Comprehensive Fort Worth Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Window Replacement</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">All window types including casement, double-hung, sliding, and specialty shapes for Fort Worth homes.</p>
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
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Entry doors, patio doors, French doors, and storm doors for every Fort Worth property.</p>
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
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Historic Districts and Architectural Authenticity</h3>
                <p>Fort Worth's Fairmount, Mistletoe Heights, and Ryan Place historic districts have design guidelines that strongly favor wood or wood-clad replacement windows. Pre-war Craftsman bungalows with original three-over-one configurations and Tudor Revivals with leaded-glass casements need replacements that match the original architectural vocabulary. We work with Marvin Signature Ultimate, Andersen A-Series, and Pella Architect Series Reserve on most historic-district projects in Fort Worth, with custom color matching and authentic profile selection critical to historic compliance.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Energy Performance and Cooling-Season Savings</h3>
                <p>Fort Worth's cooling season is the dominant driver of annual energy spend on most homes. Replacing original aluminum or worn-out builder vinyl with modern dual-pane Low-E glass typically cuts cooling-season energy use by twenty-five to thirty-five percent. We model west and south elevations against orientation and shading, then recommend glass packages with appropriately low Solar Heat Gain Coefficients. Triple-silver Low-E coatings on west-facing walls in TCU-adjacent neighborhoods and the Cultural District deliver measurable comfort improvements alongside the energy savings.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Hail Protection and Storm Considerations</h3>
                <p>Tarrant County is on the spring hail track and takes regular damage during the April-through-June storm season. Pairing frames with laminated or impact-rated glass on exposed elevations dramatically reduces breakage risk, and many Tarrant County insurance carriers offer premium credits for impact-rated glazing. We coordinate replacement work with insurance carriers when storm-driven claims are involved.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Service Coverage Across Fort Worth</h3>
                <p>We serve Fort Worth homeowners across the entire city, from the historic neighborhoods around the Cultural District and downtown through TCU-adjacent University Place and Westover Hills to the newer developments in the southwest part of the city near Hulen and Chisholm Trail Parkway. Although Fort Worth sits at the western edge of our regular service area from our Dallas base, we maintain consistent scheduling, pricing, and product availability across the full metroplex.</p>
              </div>

              {/* CTA Block */}
              <div className="bg-secondary-dark p-10 text-center">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
                  Ready to Upgrade Your Fort Worth Home?
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
                    Fort Worth Service Areas
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Historic downtown districts</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Cultural District properties</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Stockyards area homes</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Museum district communities</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>South and west Fort Worth</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Family-friendly neighborhoods</span>
                    </li>
                  </ul>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-50 p-10 border border-gray-100">
                  <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-6">
                    Why Fort Worth Homeowners Choose Us
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Local expertise in Fort Worth culture and architecture
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
                  <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-6">Call Our Fort Worth Office</h4>
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
              Fort Worth Window & Door <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about window and door replacement in Fort Worth, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How long does window replacement take in Fort Worth?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most window replacements in Fort Worth, TX are completed in 4-8 hours per window. Complex installations or multiple windows may take 1-2 days total. We provide detailed timelines during your consultation and work efficiently to minimize disruption.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Do you offer financing for Fort Worth homeowners?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, we offer flexible financing options for Fort Worth homeowners to make energy-efficient window and door upgrades more affordable. Our financing partners provide competitive rates with easy qualification and monthly payment plans that fit most budgets.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What permits are needed for window replacement in Fort Worth?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  In most cases, replacing windows in existing openings in Fort Worth doesn't require permits. However, if you're changing the size of openings, adding windows, or making structural modifications, permits may be required. We help navigate local requirements and can coordinate with Fort Worth building officials when needed.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How much do windows cost in Fort Worth?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Window costs in Fort Worth, TX vary based on size, style, materials, and energy efficiency features. Basic replacement windows typically range from $300-$800 per window installed. Premium energy-efficient or impact-resistant windows range from $600-$1,500 or more per window. We provide detailed quotes based on your specific selections.
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
            Comprehensive window and door solutions for every Fort Worth home
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
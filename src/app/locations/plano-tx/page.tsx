import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Window Replacement Plano TX | Willow Bend, Legacy West, West Plano Builder Tract',
  description: 'Window replacement for Plano West Willow Bend, Legacy West corporate-corridor neighborhoods, and 1980s/1990s tract homes whose builder-grade windows are now 25-40 years old and seal-failing.',
  alternates: { canonical: 'https://windowreplacementdallastx.com/locations/plano-tx' },
};

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/locations/window-replacement-plano-tx.jpg')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
              <span>/</span>
              <span className="text-primary">Plano, TX</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Window Replacement in Plano, TX
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Replacement work for Plano's 1980s and 1990s tract subdivisions — Willow Bend, the Sam Rayburn Tollway corridor, Legacy West-adjacent neighborhoods, and the original Plano downtown grid where builder-grade windows are now seal-failing.
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
                <p>Plano is one of the largest suburbs in the Dallas-Fort Worth metroplex with a housing stock that ranges from 1980s and 1990s tract subdivisions in West Plano and the Willow Bend area to newer master-planned communities along the Sam Rayburn Tollway and the established neighborhoods around the original Plano downtown. Most replacement work we do in Plano addresses original builder-grade windows that are now twenty-five to forty years old and showing the effects of long Texas summers, periodic hailstorms, and ordinary seal failure. We serve homeowners from Plano east of US-75 around the Plano Senior High area through Frisco-adjacent West Plano and the corporate-corridor neighborhoods around Legacy West.</p>

                <p>Plano sits squarely in North Texas hail territory and shares the same cooling-dominated climate as the rest of Dallas County. ENERGY STAR Climate Zone 3 requirements apply, meaning U-factor at or below 0.30 and SHGC below 0.25 on most exposures. The original aluminum-frame and basic vinyl windows installed in much of Plano's 1980s and 1990s housing stock fall well short of those numbers today, which is why replacement projects here typically deliver substantial cooling-season energy savings. We help Plano homeowners select between premium vinyl, fiberglass, Fibrex, and wood-clad based on the architectural style of the home and the long-term ownership horizon.</p>

                <p>The Plano architectural mix ranges from traditional brick colonials and prairie-style homes in established neighborhoods to contemporary new construction in the Castle Hills and Stonebriar-adjacent developments. Replacement windows need to read correctly on the original architecture, and we match profile, grille pattern, and exterior color carefully. Plano HOAs generally have specific exterior color guidelines that we navigate on the homeowner's behalf, and the City of Plano building permit office handles like-for-like replacements without requiring formal permits in most cases.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaTools />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Expert Service</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Professional installation by experienced Plano specialists.</p>
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
                  <p className="text-sm text-gray-500 leading-relaxed">Deep understanding of Plano neighborhoods and schools.</p>
                </div>
              </div>

              {/* Services Section */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Comprehensive Plano Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Window Replacement</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">All window types including casement, double-hung, sliding, and specialty shapes for Plano homes.</p>
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
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Entry doors, patio doors, French doors, and storm doors for every Plano property.</p>
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
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Energy Performance for Plano Cooling Loads</h3>
                <p>The cooling season in Plano stretches from April through October and drives the bulk of annual electric spend on most homes. Replacing original aluminum or single-pane vinyl with modern dual-pane Low-E glass and fusion-welded frames typically cuts cooling-season energy use by twenty-five to thirty-five percent. We model each elevation against the home's orientation and any shading from existing oaks or pecans before recommending a glass package, and we lean on lower SHGC coatings on west and south exposures where afternoon solar load is significant.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Hail and Storm Considerations</h3>
                <p>Plano takes hail damage in most spring storm seasons. Pairing replacement frames with laminated or impact-rated glass dramatically reduces breakage risk and qualifies many homeowners for insurance premium credits. We coordinate replacement work with insurance carriers when storm-driven claims are involved, and we field-measure carefully so the new units fit correctly in original openings without the stucco, brick, or trim modifications that drive up project costs.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Architectural Fit and HOA Approvals</h3>
                <p>Plano HOAs have specific guidelines on exterior window color, grille patterns, and frame visibility, and we have completed projects through most of the major homeowner associations in the city. For traditional brick colonials, we typically specify white or almond exterior with double-hung configurations and applied muntins. For contemporary homes in Stonebriar-area new construction, dark exterior colors with minimal grille patterns are usually the right call. We match material, profile, and finish to both the architecture and the HOA specifications.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Service Coverage Across Plano</h3>
                <p>We serve Plano homeowners across the entire city, from the east side near the original Plano downtown and Plano Senior High through the central neighborhoods around Park and Custer to Legacy West, Willow Bend, and the West Plano boundary with Frisco. The Sam Rayburn Tollway corridor, Castle Hills, and the Plano-side neighborhoods of the PGA-adjacent developments all sit within our regular service area. Plano is also a useful base for serving adjacent communities including Frisco, Allen, Richardson, and northern Dallas neighborhoods.</p>
              </div>

              {/* CTA Block */}
              <div className="bg-secondary-dark p-10 text-center">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
                  Ready to Upgrade Your Plano Home?
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
                    Plano Service Areas
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Established neighborhoods</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Family-friendly communities</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Properties near top-rated schools</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Master-planned developments</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Legacy area properties</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Golf course communities</span>
                    </li>
                  </ul>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-50 p-10 border border-gray-100">
                  <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-6">
                    Why Plano Homeowners Choose Us
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Local expertise in Plano's premier communities
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
                  <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-6">Call Our Plano Office</h4>
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
              Plano Window & Door <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about window and door replacement in Plano, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How long does window replacement take in Plano?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most window replacements in Plano, TX are completed in 4-8 hours per window. Complex installations or multiple windows may take 1-2 days total. We provide detailed timelines during your consultation and work efficiently to minimize disruption.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Do you offer financing for Plano homeowners?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, we offer flexible financing options for Plano homeowners to make energy-efficient window and door upgrades more affordable. Our financing partners provide competitive rates with easy qualification and monthly payment plans that fit most budgets.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What permits are needed for window replacement in Plano?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  In most cases, replacing windows in existing openings in Plano doesn't require permits. However, if you're changing the size of openings, adding windows, or making structural modifications, permits may be required. We help navigate local requirements and can coordinate with Plano building officials when needed.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How much do windows cost in Plano?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Window costs in Plano, TX vary based on size, style, materials, and energy efficiency features. Basic replacement windows typically range from $300-$800 per window installed. Premium energy-efficient or impact-resistant windows range from $600-$1,500 or more per window. We provide detailed quotes based on your specific selections.
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
            Comprehensive window and door solutions for every Plano home
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
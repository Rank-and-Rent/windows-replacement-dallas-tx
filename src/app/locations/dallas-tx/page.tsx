import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Window Replacement Dallas TX | HPISD Tudors, M Streets Prairies, Lakewood, Bishop Arts',
  description: 'Window replacement across Dallas — Highland Park Tudor Revivals, M Streets prairie cottages, Lakewood eclectic, Bishop Arts craftsman, and Preston Hollow estates. Foundation-aware install on older homes.',
  alternates: { canonical: 'https://windowreplacementdallastx.com/locations/dallas-tx' },
};

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/locations/window-replacement-dallas-tx-3.webp')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
              <span>/</span>
              <span className="text-primary">Dallas, TX</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Window Replacement in Dallas, TX
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Window and door replacement across the full city — Highland Park and University Park (HPISD), Swiss Avenue, Munger Place, Lakewood, M Streets, Bishop Arts, Preston Hollow, and Bluffview. Foundation-aware install on the older blocks where it matters.
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
                <p>Dallas is one of the most architecturally diverse cities in Texas, and replacing windows here means understanding a housing stock that ranges from 1920s Tudor Revivals along Swiss Avenue to mid-century ranches in Lake Highlands, prairie-style bungalows in the M Streets, Spanish Colonial homes in Greenway Parks, and modern infill in Bluffview and Preston Hollow. Our work covers the full city, from Highland Park and University Park out through Lakewood, Casa Linda, Forest Hills, Junius Heights, Hollywood Heights, Lower Greenville, Knox-Henderson, Uptown, Oak Lawn, Bishop Arts and Oak Cliff, Kessler Park, Winnetka Heights, Devonshire, and Preston Hollow.</p>

                <p>Climate is the constant factor across that range. Dallas summers routinely push past 100 degrees with relentless UV exposure on west and south elevations, while spring brings hailstorms that drive the second-largest insurance loss category in the metroplex. Winter cold fronts can drop temperatures into the 20s for days at a time, and the occasional ice event tests window seals that have weathered a long cooling season. We specify glass packages and frame materials with that full thermal cycle in mind, not the gentler conditions that drive product testing in other regions.</p>

                <p>Most of the homes we replace windows on are between 30 and 100 years old. Pre-war neighborhoods like Junius Heights, Munger Place, and the Swiss Avenue Historic District have original wood sashes that often deserve restoration rather than replacement, and we will tell you when that is the right path. Postwar tract housing in Casa View, Wilshire Heights, and parts of Lake Highlands is typically a clean replacement candidate where modern vinyl or fiberglass dramatically improves comfort and operating cost. Newer Preston Hollow and Bluffview homes from the 1990s onward often have failed builder-grade dual-pane units and are excellent candidates for premium fiberglass or wood-clad replacement.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaTools />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Expert Service</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Professional installation by experienced Dallas specialists.</p>
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
                  <p className="text-sm text-gray-500 leading-relaxed">Deep understanding of Dallas neighborhoods and climate.</p>
                </div>
              </div>

              {/* Services Section */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Comprehensive Dallas Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Window Replacement</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">All window types including casement, double-hung, sliding, and specialty shapes for Dallas homes.</p>
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
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Entry doors, patio doors, French doors, and storm doors for every Dallas property.</p>
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
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Dallas Climate and Glass Specification</h3>
                <p>Dallas falls inside ENERGY STAR Climate Zone 3, which calls for a maximum U-factor of 0.30 and a Solar Heat Gain Coefficient (SHGC) below 0.25 on most exposures. Cooling, not heating, drives the energy bill in Dallas, and SHGC is the lever that matters most. We routinely specify triple-silver Low-E coatings on west and south elevations across Lakewood, Forest Hills, and Lake Highlands where afternoon solar load is significant, then loosen the SHGC slightly on shaded north exposures to preserve daylighting. Argon gas fills, warm-edge spacers, and laminated impact glass on hail-exposed elevations are standard upgrades on most Dallas projects we quote.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Hail, Storm Season, and Insurance Considerations</h3>
                <p>North Texas hail is a real factor in window selection. The April-through-June storm season regularly drops golf-ball to baseball-sized hail across Lake Highlands, Casa Linda, Lakewood, Lower Greenville, and East Dallas. We pair frames with laminated or impact-rated glass on exposed elevations, particularly west-facing walls and properties along open ravines, golf courses, or White Rock Lake exposure. Many insurance carriers in Dallas County offer premium credits for impact-rated glazing, which can offset the upgrade cost over the policy life. We coordinate with your insurance carrier when storm-driven replacements are part of a claim.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Neighborhood Architectural Fit</h3>
                <p>Replacement windows have to read correctly on the architecture. Tudor Revivals around Lakewood and Greenway Parks usually need narrow-profile double-hungs with simulated divided lites in dark exterior colors. Spanish Colonials in Devonshire and Bluffview want cream or terra-cotta exteriors with appropriate sash proportions. Craftsman bungalows in Junius Heights, Vickery Place, and Hollywood Heights look right with cottage three-over-one configurations in fiberglass or wood-clad. Mid-century ranches in Lake Highlands, Casa Linda, and the Disney Streets carry low-profile sliders or picture units in bronze or black. Modern infill in Bluffview and Preston Hollow calls for thermally broken aluminum with narrow sightlines and large glass spans. We match material, profile, and finish to the home rather than pushing a single product.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Permits, HOAs, and Conservation Districts</h3>
                <p>The City of Dallas Department of Sustainable Development and Construction generally does not require permits for like-for-like window replacements that do not change opening size or structural framing. Enlargements, egress modifications, and structural changes do trigger permitting and we handle that paperwork. Conservation Districts including Munger Place, Junius Heights, Swiss Avenue, and Hollywood Heights have design guidelines that typically favor wood or wood-clad replacements. Highland Park and University Park architectural review boards expect period-appropriate specifications on pre-war homes. We navigate those approvals on the homeowner's behalf and have completed projects through every major conservation district in the city.</p>
              </div>

              {/* CTA Block */}
              <div className="bg-secondary-dark p-10 text-center">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
                  Ready to Upgrade Your Dallas Home?
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
                    Dallas Service Areas
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>North Dallas communities</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>East Dallas neighborhoods</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Downtown Dallas district</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>South Dallas communities</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>West Dallas properties</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Park Cities luxury homes</span>
                    </li>
                  </ul>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-50 p-10 border border-gray-100">
                  <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-6">
                    Why Dallas Homeowners Choose Us
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Local expertise in Dallas climate and architecture
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
                  <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-6">Call Our Dallas Office</h4>
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
              Dallas Window & Door <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about window and door replacement in Dallas, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How long does window replacement take in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most window replacements in Dallas, TX are completed in 4-8 hours per window. Complex installations or multiple windows may take 1-2 days total. We provide detailed timelines during your consultation and work efficiently to minimize disruption.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Do you offer financing for Dallas homeowners?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, we offer flexible financing options for Dallas homeowners to make energy-efficient window and door upgrades more affordable. Our financing partners provide competitive rates with easy qualification and monthly payment plans that fit most budgets.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What permits are needed for window replacement in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  In most cases, replacing windows in existing openings in Dallas doesn't require permits. However, if you're changing the size of openings, adding windows, or making structural modifications, permits may be required. We help navigate local requirements and can coordinate with Dallas building officials when needed.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How much do windows cost in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Window costs with installation in Dallas, TX vary based on size, style, materials, and energy efficiency features. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material, like wood clad windows. We do not sell windows without installation.
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
            Comprehensive window and door solutions for every Dallas home
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
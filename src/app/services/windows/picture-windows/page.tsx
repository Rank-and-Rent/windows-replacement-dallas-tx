import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Picture Window Installation Dallas TX | White Rock Lake Views, Bluffview Modern Glass',
  description: 'Fixed picture window installs for White Rock Lake-facing rooms, Bluffview modern infill, and Preston Hollow great rooms. Solar-control coatings sized for Dallas west elevations under 100-degree sun.',
  alternates: { canonical: 'https://windowreplacementdallastx.com/services/windows/picture-windows' },
};

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/windows/picture-windows-mckinney-tx.jpg')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services/windows" className="hover:text-white transition-colors">Windows</Link>
              <span>/</span>
              <span className="text-primary">Picture Windows</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Picture Window Replacement in Dallas, TX
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Fixed glass for White Rock Lake-facing rooms, Bluffview great rooms, and Preston Hollow stairwell elevations. Solar-control coatings sized for Dallas west exposures, no operable hardware to fail.
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
                <p>Our picture window installation service across Dallas covers fixed-glass units of every scale, from the modest 4-by-5-foot focal windows in living rooms and dining rooms to the wall-sized assemblies that define modern Bluffview, Preston Hollow, and East Dallas remodels. Picture windows have no operable hardware, no weatherstripping wear, and no sash gaps to leak air, which translates to the lowest U-factor and SHGC numbers of any window in a given product line. They are a smart specification for any room where ventilation comes from adjacent operable windows or doors and the goal is maximum daylight and view.</p>

                <p>We approach larger picture window installations as composed assemblies rather than single units. A 12-foot horizontal window wall in a Bluffview great room is typically three or four mulled units rather than a single oversized pane, which simplifies handling, lowers cost, and improves serviceability if a single unit ever needs replacement. We design these compositions on a per-project basis, considering elevation exposure, structural framing, and architectural fit before specifying the assembly.</p>

                <p>Premium picture windows from Andersen, Marvin, Pella, and JELD-WEN all carry Climate Zone 3-tuned glass packages and 20-year frame and glass warranties. Frame material selection on larger spans tends toward fiberglass, Fibrex, or thermally broken aluminum, while smaller spans accept any of the premium frame options. We help homeowners select the right material for the specific application.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSun />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Maximum Light</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Uninterrupted glass area floods interiors with natural daylight, reducing artificial lighting needs.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSnowflake />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Peak Efficiency</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">No operable parts means zero air leakage and the highest possible energy ratings.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaHome />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Clean Design</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">No grilles, hardware, or rails—just pure, unobstructed views of your surroundings.</p>
                </div>
              </div>

              {/* Glass Technology & Options */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Glass Technology & Options
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Insulated Glass Systems</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Advanced multi-pane glass with specialized coatings optimize thermal performance for Texas climate.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Triple-pane construction available
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Low-E coatings for solar control
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Argon or krypton gas fills
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Custom Configurations</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Wide range of shapes and sizes to accommodate any architectural requirement or design vision.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Custom geometric shapes
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Oversized installations
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Impact-resistant options
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Body Sections */}
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Common Picture Window Configurations We Install</h3>
                <p>The most-installed picture window configurations in our service area are large fixed centers in bay window assemblies on Tudor and Mediterranean homes, single oversized fixed lights in great rooms and dining rooms of 1990s and 2000s Preston Hollow homes, and stacked assemblies combining fixed picture units with operable awning or casement vents on contemporary remodels. We also install transom picture units above sliding patio doors and entry doors to add daylight without compromising security.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Glass Specification for Maximum Performance</h3>
                <p>Picture window glass packages can run more aggressive than operable equivalents because there is no operable hardware to support the heavier sash. We routinely specify triple-pane glass with krypton gas fills on west and south elevations of high-end Dallas projects where energy performance is the priority. Triple-silver Low-E coatings, electrochromic dynamic glass, and laminated impact glass are all easier to deploy on fixed picture units. The result is single units that deliver U-factor values as low as 0.20 and SHGC values down to 0.18.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Structural Considerations for Large Spans</h3>
                <p>Picture windows over about 40 square feet of glass start to push the structural limits of standard residential framing. We coordinate with structural engineers when load calculations are required, and we field-verify rough opening conditions before specifying oversized units. The frame material choice matters at large spans because heavier glass loads need rigid frames; vinyl can deflect over time, while fiberglass and aluminum hold dimension across decades.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Hail Protection and Insurance Considerations</h3>
                <p>Larger glass surface area means greater absolute risk of hail impact during Dallas storm events. We routinely specify laminated impact-rated glass on picture windows facing west or southwest in hail-prone neighborhoods. The laminated inboard layer holds the pane together if the outer light is broken, dramatically reducing the risk of a damaged window becoming a damaged interior. Insurance carriers in Dallas County offer premium credits for laminated impact glazing, which we document for the carrier's underwriting review.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Installation Workflow and Free Quotes</h3>
                <p>Our picture window installation workflow starts with a detailed in-home consultation covering measurement, glass package recommendations, structural review for larger units, and architectural fit. We provide itemized quotes before any deposit. Lead times typically run six to ten weeks on premium picture windows because the larger units are often custom manufactured. Installation typically completes in one to three working days per unit depending on size and complexity.</p>
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
                      <span>Welded frame construction for structural integrity</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Triple-pane glass options for maximum insulation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Custom sizing up to architectural dimensions</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Low-E coatings to control solar heat gain</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Narrow frame profiles to maximize glass area</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Lifetime warranty on seal and frame</span>
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
                      Living rooms with scenic views
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Two-story foyers and great rooms
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Dining areas overlooking gardens
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Modern and contemporary architecture
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
              Picture Window <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about picture windows in Dallas, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Can picture windows be installed in any room in Dallas homes?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Picture windows in Dallas, Texas can be installed in most rooms, though they're most effective where natural light and views are priorities rather than ventilation. They're commonly used in living rooms, dining areas, and master bedrooms throughout the Dallas area for their ability to brighten and expand interior spaces.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Do picture windows require special structural support in Texas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Large picture windows in Dallas, Texas may require additional structural support depending on size and location. Our team assesses each installation to ensure proper load distribution, especially important in Texas where wind loads can be significant. Headers and supporting walls are reinforced as needed for safety and longevity.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How do picture windows handle Texas summer heat?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Picture windows in Dallas, Texas are equipped with advanced low-E glass coatings specifically designed for Texas climate conditions. These coatings reflect solar heat while allowing visible light to pass through, reducing cooling costs during hot Texas summers and preventing interior fading of furniture and flooring.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Are picture windows more expensive than operable windows in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Picture windows in Dallas, Texas are often comparable in cost to premium operable windows of similar size, though they may be less expensive due to simpler construction. The cost advantage comes from eliminating moving parts, hardware, and screens while maintaining the highest energy efficiency ratings available.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How do picture windows compare to sliding glass doors in Dallas applications?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Picture windows in Dallas, Texas offer similar expansive views to sliding glass doors but without the operating mechanisms that can wear over time. While sliding doors provide access to outdoor spaces, picture windows excel at creating bright, view-focused interior spaces where ventilation isn't the primary requirement.
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

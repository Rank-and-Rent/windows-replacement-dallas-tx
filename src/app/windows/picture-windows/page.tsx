import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Picture Windows Dallas TX | White Rock Lake Views, Bluffview Modern Glass Walls',
  description: 'Fixed picture windows for White Rock Lake-facing rooms, Bluffview modern infill, and Preston Hollow great rooms. Maximum solar control glass tuned for Dallas west-elevation heat load.',
  alternates: { canonical: 'https://windowreplacementdallastx.com/windows/picture-windows' },
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
              Fixed glass for White Rock Lake-facing rooms, Bluffview great rooms, and Preston Hollow stairwell elevations. Solar-control coatings sized for Dallas 100-degree west exposures, no operable hardware to fail.
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
                <p>Picture windows are fixed-glass units that exist for one purpose: to deliver an unobstructed view and maximum daylight without operability. The absence of sashes, locks, or operating hardware translates directly into the lowest air infiltration ratings and the highest energy performance available in residential glazing. For Dallas homes facing White Rock Lake, the ravines of Forest Hills, the wooded slopes of Kessler Park, or the open backyards typical of Preston Hollow and Bluffview, a properly placed picture window often defines the room around it.</p>

                <p>Architecturally, picture windows fit a wide range of Dallas housing. They appear as large fixed centers in bay window assemblies on Tudor Revivals around Lakewood and Greenway Parks. They sit alone as massive view glass in modern Bluffview and Preston Hollow remodels. They run as window walls in contemporary East Dallas infill, paired with operable casement or awning flankers above and below. The same picture window assembly can read as historically appropriate or aggressively contemporary depending on profile width, divided-lite specification, and exterior color selection.</p>

                <p>Premium picture windows are available in vinyl, fiberglass, Fibrex, wood-clad, and thermally broken aluminum. Larger spans, anything beyond about 60 square feet of glass, typically push specification toward fiberglass or aluminum because of the structural rigidity those frames provide. The right specification depends on the architectural context, the size of the opening, and the elevation exposure.</p>
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
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Energy Performance Without Operable Hardware</h3>
                <p>The single biggest advantage of picture windows is the elimination of every air leak path that operable windows have to compensate for through weatherstripping. There is no meeting rail, no sash gap, no operator hardware penetration, and no compression seal to wear out. Quality picture windows achieve U-factor values in the 0.25 to 0.28 range and SHGC values down to 0.18 with the right Low-E coating, beating any operable window in the same product line. For Dallas homes where cooling load drives the energy bill, picture windows on west and south elevations deliver measurably lower afternoon solar load than operable equivalents.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Glass Specification for Dallas Solar Conditions</h3>
                <p>The lack of operable hardware also means picture windows can carry more aggressive glass specifications than operable units. Triple-pane glass packages, krypton gas fills, dynamic electrochromic glass, and laminated impact glass are all easier to deploy on fixed units because the operable hardware does not need to be sized to support the heavier sash assembly. We routinely specify triple-silver Low-E with low SHGC on west-facing picture windows in Lakewood, Forest Hills, and Lake Highlands homes facing afternoon sun, which makes a noticeable difference in interior comfort during August afternoons.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Frame Material Selection for Large Spans</h3>
                <p>Picture window frames carry heavier glass loads than operable units, especially in the larger spans common to Dallas modern remodels. Above about 40 square feet of glass, fiberglass and aluminum are usually the right structural choice because they hold dimensional stability under the weight without requiring oversized frame profiles. Vinyl and Fibrex work well at small to medium sizes but require thicker frames at large spans, which works against the clean-glass aesthetic that often drives picture window selection. Marvin Modern, Pella Architect Series Aluminum, and Andersen E-Series cover the upper end of the size range.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Window Wall Composition and Mullion Details</h3>
                <p>Most large picture window installations in Dallas are not single units but composed assemblies of one fixed center plus two operable flankers, three fixed lights mulled together for a horizontal window wall, or stacked assemblies that combine fixed picture units with awning or casement vents. The mullion details, how the units are joined structurally and visually, determine how the assembly reads architecturally. We design these compositions carefully on a per-project basis rather than treating each window as a standalone item.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Hail Considerations for Large Glass</h3>
                <p>Larger glass surface area means greater absolute risk of hail impact during a Dallas storm. We routinely specify laminated impact-rated glass on picture window installations facing west or southwest in hail-prone neighborhoods. The laminated inboard layer holds the pane together if the outer light is broken, dramatically reducing the risk of a damaged window becoming a damaged interior. Insurance carriers in Dallas County offer premium credits for laminated impact glazing on most picture window applications.</p>
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

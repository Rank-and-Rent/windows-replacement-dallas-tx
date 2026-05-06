import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Bay and Bow Windows Dallas TX | Tudor Breakfast Nooks, Spanish Colonial Living Rooms',
  description: 'Bay and bow windows for Highland Park Tudor breakfast rooms and Devonshire Spanish Colonial fronts. Engineered seat and roof support sized for Dallas foundation movement.',
  alternates: { canonical: 'https://windowreplacementdallastx.com/windows/bay-and-bow-windows' },
};

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/windows/bay-bow-windows-dallas-tx.jpg')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services/windows" className="hover:text-white transition-colors">Windows</Link>
              <span>/</span>
              <span className="text-primary">Bay & Bow Windows</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Bay & Bow Windows
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Projection assemblies sized for Highland Park Tudor breakfast nooks and Devonshire Spanish Colonial living rooms. Engineered seat and roof support that accounts for Dallas-area foundation movement on older blocks.
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
                <p>Bay and bow windows are multi-unit assemblies that project outward from the exterior wall, creating interior space, panoramic views, and curb appeal that no flat window can deliver. A bay window is typically three units in a 30 or 45 degree configuration with a flat fixed center and operable double-hung or casement flankers. A bow window is four to six units arranged in a gentle arc, almost always all fixed, designed for visual impact rather than ventilation. In Dallas, both forms appear most often in Tudor Revivals around Lakewood and Greenway Parks, the larger Craftsman bungalows of Junius Heights and Vickery Place, and the older homes along Swiss Avenue and the Munger Place historic district.</p>

                <p>The architectural impact of a properly designed bay or bow projection is significant. Inside the home, the recess creates space for a window seat, a breakfast nook, or simply a visual depth that breaks up flat interior walls. From the curb, the projection adds dimensional interest and reads as a deliberate architectural feature rather than a builder afterthought. For homes being staged for sale in competitive Dallas neighborhoods, a well-executed bay or bow window often shows up in MLS photos as the defining exterior detail.</p>

                <p>Bay and bow windows are not standard replacement projects. They involve structural framing, exterior cladding, roofing, flashing, and interior trim work that go well beyond simple window replacement. We approach every bay and bow project as a coordinated design-and-build engagement with proper structural review, careful integration into existing exterior surfaces, and detailed weatherproofing that holds up to Dallas storm seasons over decades of service.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaHome />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Adds Square Footage</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Projects 12-18 inches outward, creating usable interior space without adding a room.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSun />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Panoramic Light</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Multi-angle glass captures light throughout the day from different sun positions.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaDollarSign />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Boosts Home Value</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Significant curb appeal enhancement that increases resale value and buyer interest.</p>
                </div>
              </div>

              {/* Structural Engineering Considerations */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Structural Engineering Considerations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Load Distribution</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Proper structural support ensures bay and bow windows maintain integrity over decades of Texas weather exposure.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Engineered support systems
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Reinforced framing integration
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Proper load calculations
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Weather Protection</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Advanced sealing and drainage systems protect against Texas moisture and temperature variations.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Integrated roofing systems
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Advanced flashing details
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Drainage plane integration
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Body Sections */}
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Bay vs. Bow: Which Configuration Fits Your Home</h3>
                <p>Bay windows work well on Tudor Revivals, Spanish Colonials, and traditional brick colonials where the angular projection reads architecturally. The flat fixed center provides a focal view and the angled flankers can be operable for ventilation. Bow windows fit Victorian-influenced homes, certain Craftsman applications, and contemporary remodels where the gentler curve carries a softer visual line. For Dallas's older Lakewood, M Streets, and Junius Heights neighborhoods, bay windows are typically the more appropriate specification because the architecture leans angular rather than curvilinear.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Structural and Roofing Integration</h3>
                <p>The projection of a bay or bow window requires structural support. On Dallas homes, that typically means engineered cables or knee braces concealed within the lower projection, or a load-bearing extension of the foundation depending on the size of the unit. The top of the projection needs roofing tied properly into the existing house roof system, typically a hip-roof or gable arrangement with matching shingle or copper standing-seam material. Flashing, ice-and-water shield, and proper drip edge details prevent the water intrusion that can otherwise plague these projections through years of Dallas thunderstorms.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Glass Specification for Cooling Performance</h3>
                <p>Bay and bow windows present multiple glass faces at different angles, which means each unit may face different solar exposure across the day. We model the assembly carefully and often specify different SHGC ratings on different faces of the same bay, with the most aggressive low-SHGC coatings on the west-facing flank and slightly higher values on the north-facing flank. The projection itself can serve as a self-shading device for adjacent walls, which is a small but real benefit on west and south elevations during Dallas summers.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Frame Material and Brand Selection</h3>
                <p>For the architecturally significant Dallas homes that benefit most from bay and bow windows, premium materials matter. Marvin Signature Ultimate, Andersen A-Series, and Pella Architect Series Reserve all manufacture purpose-built bay and bow assemblies with matched units, integrated head and seat boards, and color-matched cladding. We rarely specify vinyl for bay or bow projects because the structural and aesthetic stakes argue for upgraded materials. Wood-clad with custom color matching is usually the right call on traditional homes; thermally broken aluminum can work on certain contemporary applications.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Project Timeline and Permitting</h3>
                <p>Bay and bow projects typically run two to four weeks of working time including structural prep, the projection build-out, exterior cladding integration, and interior trim finishing. The City of Dallas Department of Sustainable Development and Construction generally requires a permit for projection installations because they involve structural and exterior envelope changes. We handle permitting and any HOA architectural review on the homeowner's behalf, and we coordinate with structural engineers when load calculations require it.</p>
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
                      <span>Custom-built to your specifications</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Structural support systems included</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Combination of operable and fixed units</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Built-in seat board and head board options</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Cable or bracket support systems</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Matching roof systems with shingles or copper</span>
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
                      Living rooms and master bedrooms
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Dining areas overlooking gardens
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Kitchen breakfast nooks
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Traditional and Victorian architecture
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
              Bay & Bow Window <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about bay and bow windows in Dallas, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What's the difference between bay and bow windows in Dallas architecture?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Bay windows in Dallas, Texas typically consist of three window units arranged at 90-degree angles to create a boxed projection, while bow windows use four or more units arranged in a gentle curve. Both create additional interior space but bow windows offer smoother aesthetic lines and are often preferred for contemporary Dallas architecture.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Do bay and bow windows require special roof modifications in Texas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Bay and bow windows in Dallas, Texas require integrated roofing systems to prevent water infiltration. Our installation includes custom roof sections that match your existing roofing material and slope, ensuring weather-tight performance. This is especially important in Texas where roof integrity directly affects window longevity.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How much space do bay and bow windows add to Dallas homes?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Bay and bow windows in Dallas, Texas typically project 12-24 inches outward from the exterior wall, creating 4-8 square feet of additional usable interior space per window. This projection creates functional areas for window seats, display shelves, or simply enhances the sense of spaciousness in Dallas-area living rooms and dining areas.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Are bay and bow windows more expensive than standard windows in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Bay and bow windows in Dallas, Texas are premium installations costing 2-3 times more than standard windows due to custom fabrication, structural modifications, and integrated roofing requirements. However, they significantly increase home value and create distinctive architectural features that justify the investment in Dallas real estate.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Can bay and bow windows be installed in existing Dallas homes?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Bay and bow windows can be installed in existing Dallas, Texas homes but require careful structural assessment. Our teams evaluate foundation capacity, wall framing, and roof structure to ensure proper support. Many Dallas homeowners choose these windows for renovations where the architectural impact justifies the modifications required.
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

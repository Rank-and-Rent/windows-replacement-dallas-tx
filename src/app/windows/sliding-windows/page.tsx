import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Sliding Windows Dallas TX | Mid-Century Casa Linda, Hollywood Heights, Lake Highlands',
  description: 'Horizontal sliders for Casa Linda mid-century ranches and Hollywood Heights post-war homes where the original openings were wider than tall. Smooth roller hardware, hard-water-tolerant track.',
  alternates: { canonical: 'https://windowreplacementdallastx.com/windows/sliding-windows' },
};

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/windows/sliding-windows-irving-tx.webp')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services/windows" className="hover:text-white transition-colors">Windows</Link>
              <span>/</span>
              <span className="text-primary">Sliding Windows</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Sliding Windows
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Where the original opening is wider than tall — Casa Linda mid-century ranches, Hollywood Heights post-war, Lake Highlands kitchen-side openings. Roller hardware engineered for Dallas hard-water mineral spotting.
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
                <p>Sliding windows operate horizontally on roller tracks, with one fixed sash and one operable sash that glides side to side, or in some larger configurations, two operable sashes that meet at a center. The horizontal geometry suits the long, low proportions of mid-century ranch homes that fill Lake Highlands, Casa Linda, the Disney Streets, and parts of Casa View, where the original windows were almost always sliders. They also fit contemporary remodels in Bluffview and Preston Hollow where horizontal lines and minimal hardware are part of the design vocabulary. For Dallas homeowners replacing original aluminum sliders from the 1960s and 1970s, modern vinyl, fiberglass, and aluminum sliders deliver dramatically better energy performance with the same operational pattern.</p>

                <p>The advantage of sliders over double-hungs is operability without projection. The sash slides parallel to the wall, never extending into walkways, decks, or landscaping. That makes sliders well-suited to bathroom and laundry-room applications, kitchen openings above counters, and side-yard openings on tight Dallas lots in older neighborhoods like Lower Greenville and Knox-Henderson. The disadvantage is the weatherstripping geometry: sliders rely on bulb-and-fin seals that have to flex against motion rather than the compression seals of casements and awnings, which translates to slightly higher air infiltration rates in real-world testing.</p>

                <p>Premium sliders from Andersen, Pella, JELD-WEN, and Marvin all carry Climate Zone 3-tuned glass packages, multi-point locks, and engineered roller systems that hold up across the Dallas humidity range. Frame material choice depends on architectural fit, ownership horizon, and elevation exposure.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaTools />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Effortless Operation</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Smooth glide rollers require minimal force, perfect for hard-to-reach installations.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaHome />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Space Saving</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">No outward or inward swing required—ideal for areas near walkways or patios.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSun />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Wide Views</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Horizontal design maximizes glass area and provides expansive outdoor views.</p>
                </div>
              </div>

              {/* Track & Roller Technology */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Track & Roller Technology
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Precision Roller Systems</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Heavy-duty stainless steel rollers provide decades of smooth, quiet operation without maintenance.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Stainless steel ball bearings
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Dual roller design for stability
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Self-cleaning track geometry
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Weather Protection</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Advanced weatherstripping and drainage systems protect against Texas weather conditions.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Interlocking meeting rails
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Integrated weep holes
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Compression bulb seals
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Body Sections */}
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Where Sliders Belong in Dallas Architecture</h3>
                <p>Sliders fit the architectural language of mid-century ranches that line Lake Highlands, Casa View, the Disney Streets, the older blocks of Casa Linda and Hollywood Heights, and the postwar tract neighborhoods of Wilshire Heights. The horizontal proportions match the long roof lines and low ceiling heights typical of these homes. Modern slider profiles in low-profile aluminum or fiberglass also fit contemporary Bluffview and Preston Hollow remodels where the architecture wants horizontal sight lines. They are less appropriate for traditional Tudor Revivals around Lakewood and Greenway Parks, prairie-style bungalows in the M Streets and Junius Heights, or Spanish Colonials where casements or double-hungs are the period-correct call.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Roller Hardware and Long-Term Operation</h3>
                <p>The roller system is the wear point on sliding windows. Premium manufacturers use stainless steel ball-bearing rollers that resist corrosion in Dallas summer humidity and hold up across decades of operation. Lower-tier sliders use plastic rollers that can wear, crack, or jam over time, especially when track gunk accumulates from Dallas's hard water sprinkler over-spray and dust. We routinely specify Andersen, Pella, JELD-WEN, and Marvin sliders for Dallas applications because their roller hardware reliably operates cleanly at year fifteen and beyond. Track maintenance is limited to occasional vacuuming and wiping with a damp cloth.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Energy Performance and Air Infiltration</h3>
                <p>The bulb-and-fin weatherstripping geometry on sliders gives up some performance versus the compression seals on casements and awnings. Modern lines have closed most of the gap with engineered interlock geometry at the meeting rail and high-quality bulb seals on the perimeter. Premium sliders achieve U-factor values in the 0.28 to 0.32 range with Low-E glass, hitting ENERGY STAR Climate Zone 3 minimums. The cooling-season energy savings on a slider replacement project versus original 1960s aluminum sliders is typically thirty to forty percent, even though sliders themselves are not the absolute tightest window style available.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Hail Protection and Storm Performance</h3>
                <p>Sliding sashes do not project outward, which keeps them out of the impact path during Dallas storm events. The interlocking meeting rail also performs well under wind-driven rain. We routinely specify laminated impact-rated glass on west and south elevations for slider installations in hail-prone neighborhoods, and many insurance carriers in Dallas County offer premium credits for laminated impact glazing on slider replacements.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Egress and Sizing Considerations</h3>
                <p>Sliding windows in bedrooms must meet the 5.7-square-foot egress minimum required by Texas building code. Because only one sash on a two-panel slider is typically operable, the math works out differently than on a casement. The operable sash needs to be wide enough that its single side delivers the required clear opening. We field-verify egress compliance on every bedroom installation and specify slider sizing accordingly. Standard slider sizes range from 36 inches by 24 inches up to 72 inches by 60 inches; oversized custom configurations are available on premium lines.</p>
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
                      <span>Precision roller system for smooth operation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Interlocking meeting rails for weathertight seal</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Removable sashes for easy cleaning</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Multiple locking points for security</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Optional tempered or impact-resistant glass</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Compatible with between-glass blinds</span>
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
                      Ranch and mid-century modern homes
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Rooms with limited wall space
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Above countertops or furniture
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Locations requiring easy operation
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
              Sliding Window <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about sliding windows in Dallas, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How do sliding windows perform in Dallas area high winds?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sliding windows in Dallas, Texas are engineered to withstand high winds with reinforced frames and multi-point locking systems. The horizontal operation design distributes wind forces evenly across the window surface, making them suitable for Texas weather conditions when properly installed.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Can sliding windows be cleaned from inside in Dallas homes?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Many sliding windows in Dallas, Texas feature removable sashes that allow interior cleaning of exterior glass. This tilt-out or removal capability makes maintenance easier and safer, especially for second-story installations common in Dallas-area homes.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What sizes are available for sliding windows in Texas architecture?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sliding windows in Dallas, Texas range from compact sizes for bathrooms to expansive units spanning multiple feet. Large sliding windows are particularly popular in Texas contemporary and mid-century modern homes, providing the expansive glass areas that work well with the region's outdoor lifestyles.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Do sliding windows require special framing in Dallas construction?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sliding windows in Dallas, Texas require standard rough openings but benefit from precise framing for optimal performance. Our installation teams ensure proper shimming and leveling to prevent binding or weather infiltration, which is especially important in Texas variable weather conditions.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How do sliding windows compare to patio doors in Dallas applications?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sliding windows in Dallas, Texas offer similar operation to patio doors but in more compact sizes. While patio doors typically span 6-8 feet, sliding windows provide the same smooth operation in smaller configurations, making them ideal for standard window openings in Dallas-area homes.
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

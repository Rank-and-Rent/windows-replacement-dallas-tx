import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Single-Hung Windows Dallas TX | Value Tier for Casa View, Wilshire Heights, Lake Highlands',
  description: 'Single-hung windows for postwar Casa View tracts and second-story Lake Highlands ranches where the upper sash never operates. Lower per-opening cost on whole-house Dallas projects.',
  alternates: { canonical: 'https://windowreplacementdallastx.com/windows/single-hung-windows' },
};

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/windows/single-hung-windows-mckinney-tx.jpg')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services/windows" className="hover:text-white transition-colors">Windows</Link>
              <span>/</span>
              <span className="text-primary">Single-Hung Windows</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Single-Hung Windows
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Whole-house value pick for Casa View, Wilshire Heights, and the postwar streets of Lake Highlands where the original windows were always single-hungs. Saves real money across 20+ openings without changing the look.
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
                <p>Single-hung windows are the value-tier sibling of the double-hung. The upper sash is fixed and the lower sash slides vertically, which delivers most of the architectural look of a double-hung at a meaningfully lower price point. The simplification eliminates one set of weatherstripping seals, one balance system, and one tilt mechanism, which also slightly reduces the number of moving parts that can fail over time. For Dallas homeowners on whole-house replacement projects with twenty or more openings, the per-window savings on single-hungs versus double-hungs adds up to a real budget difference, often in the thousands of dollars across a complete project.</p>

                <p>Single-hungs work especially well on second-story openings in two-story Dallas homes where exterior cleaning access is awkward and the upper sash never needs to operate anyway. They are common across postwar tract neighborhoods in Casa View, Wilshire Heights, and the older streets of Lake Highlands, where the original windows were almost always single-hungs and replacements maintain the same operational pattern. They also fit well on minor openings, secondary-bedroom windows, hallway openings, and similar locations where the value proposition matters more than maximum ventilation flexibility.</p>

                <p>Premium single-hungs from Andersen, Pella, JELD-WEN, and Marvin all carry Climate Zone 3-tuned glass packages, multi-point locks, and structural performance comparable to their double-hung equivalents. The visible profile from inside and outside the home is essentially identical to a double-hung, which preserves architectural consistency on the elevation.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaDollarSign />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Value Pricing</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Lower cost than double-hung while maintaining quality construction and energy performance.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaShieldAlt />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Enhanced Security</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Fixed upper sash provides additional structural rigidity and security.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaHome />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Clean Aesthetics</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Identical appearance to double-hung windows from both interior and exterior.</p>
                </div>
              </div>

              {/* Maintenance & Care Guide */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Maintenance & Care Guide
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Seasonal Maintenance</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Regular care ensures optimal performance and extends window lifespan in Dallas climate conditions.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Clean tracks and weatherstripping quarterly
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Lubricate moving parts annually
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Inspect for wear and damage seasonally
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Cleaning Best Practices</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Proper cleaning techniques maintain appearance and functionality without causing damage.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Use mild, non-abrasive cleaners
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Avoid harsh chemicals on vinyl frames
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Dry thoroughly to prevent water spots
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Body Sections */}
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">When Single-Hung Is the Right Specification</h3>
                <p>Single-hung windows fit projects where the budget needs to stretch across many openings. Whole-house replacements in postwar Dallas neighborhoods often involve fifteen to twenty-five openings, and the per-unit savings versus double-hungs can fund glass-package upgrades or address other deferred maintenance like rotted exterior trim, failed flashing, or HVAC duct work that exists alongside the window project. We help homeowners think through the full project budget rather than treating windows as an isolated line item.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Energy Performance and Climate Zone 3 Compliance</h3>
                <p>Modern single-hungs achieve U-factor values in the 0.27 to 0.30 range with multi-pane Low-E glass, comfortably meeting ENERGY STAR Climate Zone 3 requirements for Dallas. The performance gap versus comparable double-hungs in the same product line is small to zero in real-world testing. The cooling-season energy savings on a whole-house single-hung replacement project typically run the same twenty-five to thirty-five percent improvement that double-hung replacements deliver, because the glass package is doing most of the work and the operable sash differences are secondary.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Architectural Fit Across Dallas</h3>
                <p>Single-hungs read identically to double-hungs from the curb, which means they fit the same architectural contexts: prairie-style and Craftsman bungalows in the M Streets and Junius Heights, brick colonials and ranches across Lake Highlands and Casa Linda, postwar tract homes in Wilshire Heights and Casa View, and the older blocks of East Dallas. They are slightly less appropriate on Tudor Revivals around Lakewood and Greenway Parks where casements were the historical specification, but they work fine when budget or ownership horizon argues for the value tier.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Hail Protection and Egress</h3>
                <p>Single-hung sashes do not project outward, so they cannot be damaged in the open position by hail or wind. We routinely specify laminated impact-rated glass on west and south elevations for hail-prone Dallas neighborhoods, which qualifies most homeowners for insurance premium credits. Single-hungs are an acceptable egress window for bedrooms when the lower operable sash provides at least 5.7 square feet of clear opening, which is the Texas building code minimum. We field-verify egress compliance on every bedroom installation.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Brand and Warranty Considerations</h3>
                <p>The premium single-hung lines we install carry essentially the same warranty terms as the double-hung lines from the same manufacturer. Andersen 100 Series single-hungs include lifetime frame coverage with twenty-year glass warranty. Pella 250 and 350 Series single-hungs match the corresponding double-hung warranty terms. The structural performance, NFRC ratings, and warranty coverage are equivalent; the price savings come from the simplified hardware. We register every install on the homeowner's behalf and handle warranty claims directly.</p>
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
                      <span>Fixed upper sash for improved structural integrity</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Operable lower sash with smooth glide system</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Multi-point locking mechanism</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Low-E insulated glass options</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Welded vinyl construction</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Factory-applied exterior color options</span>
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
                      Budget-conscious replacement projects
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Second-story installations
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Guest rooms and utility spaces
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Traditional home exteriors
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
              Single-Hung Window <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about single-hung windows in Dallas, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How do single-hung windows differ from double-hung in Dallas homes?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Single-hung windows in Dallas, Texas feature only the bottom sash that opens, while double-hung windows allow both sashes to move. This simpler design typically offers better value while maintaining the same traditional appearance in most Dallas-area homes.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Are single-hung windows suitable for ground floor installations in Texas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Single-hung windows work well for ground floor installations in Dallas, Texas, particularly in areas where security screening isn't needed or where the window serves secondary spaces. For primary living areas requiring maximum ventilation, double-hung windows remain the preferred choice.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What energy performance can I expect from single-hung windows in Texas climate?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Modern single-hung windows in Dallas, Texas deliver excellent energy performance with low-E glass, argon gas fills, and advanced weatherstripping. They can achieve Energy Star ratings comparable to double-hung windows while offering simplified operation in the Texas climate.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Do single-hung windows require special maintenance in Texas weather?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Single-hung windows in Dallas, Texas require similar maintenance to double-hung styles, with annual cleaning of tracks and weatherstripping. The simplified design actually makes them easier to maintain, though regular inspection ensures optimal performance in Texas humidity and temperature variations.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Can single-hung windows meet Dallas building code requirements?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Single-hung windows can meet Dallas, Texas building codes when properly specified and installed. Our team ensures compliance with local requirements for energy efficiency, structural integrity, and safety standards applicable to residential window replacements in the Dallas area.
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

import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Single-Hung Window Installation Dallas TX | Casa View, Wilshire Heights, Lake Highlands',
  description: 'Single-hung installs for Casa View tracts, Wilshire Heights, and Lake Highlands postwar streets where the original windows were always single-hungs. Whole-house savings, same look.',
  alternates: { canonical: 'https://windowreplacementdallastx.com/services/windows/single-hung-windows' },
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
              Single-Hung Window Replacement in Dallas, TX
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Whole-house value pick for Casa View, Wilshire Heights, and the postwar streets of Lake Highlands where the original openings were always single-hungs. Saves real money across 20+ openings without changing the look.
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
                <p>Our single-hung window installation service across Dallas covers the value-tier replacement option that fits whole-house projects with tight budgets and homes where the architectural call leans toward simplicity. The fixed upper sash with operable lower sash delivers most of the architectural look of a double-hung at a meaningful per-window cost reduction. On a typical fifteen-to-twenty-window whole-house replacement project, the savings versus double-hungs can fund glass-package upgrades, address other deferred maintenance, or simply stay in the homeowner's pocket.</p>

                <p>Single-hungs work especially well on second-story openings where exterior cleaning access is awkward and the upper sash never needs to operate anyway. They are common across postwar tract neighborhoods in Casa View, Wilshire Heights, and the older streets of Lake Highlands, where the original windows were almost always single-hungs and the replacement maintains the same operational pattern. They also make sense on minor openings, secondary-bedroom windows, and similar locations where value matters more than maximum operability.</p>

                <p>Premium single-hungs from Andersen, Pella, JELD-WEN, and Marvin all carry the same warranty terms as their double-hung equivalents in the same product line. Energy performance is essentially equivalent. The cost savings come from simplified hardware, not from compromised quality.</p>
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
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">When Single-Hung Service Is the Right Call</h3>
                <p>We help Dallas homeowners think through the single-hung versus double-hung decision honestly. For a homeowner staying in a Casa Linda ranch home for fifteen years and replacing eighteen windows, the per-window savings on single-hungs can fund the glass-package upgrade that delivers ten to fifteen years of meaningful cooling-bill reduction. For a homeowner restoring a 1925 M Streets bungalow with original double-hung wood sashes, single-hungs may compromise period authenticity in a way that hurts resale value. Our consultation walks through these tradeoffs.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Service Workflow and Project Timeline</h3>
                <p>Our single-hung installation workflow handles whole-house replacement projects efficiently. Each project starts with an in-home measurement and consultation, followed by an itemized quote covering product, installation, trim, and warranty registration. Lead times typically run four to six weeks from order confirmation, and installations complete in three to five working days for a fifteen-to-twenty-window project. We coordinate scheduling around the household's needs to minimize disruption.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Glass Package Recommendations</h3>
                <p>Single-hungs accept the same glass packages as their double-hung counterparts. We specify on a per-elevation basis: triple-silver Low-E with low SHGC on west and south elevations of homes in Lake Highlands, Casa View, and Devonshire; standard Low-E with moderate SHGC on north elevations to preserve daylight; laminated impact-rated glass on storm-exposed elevations in hail-prone neighborhoods. The glass spec drives most of the long-term energy performance.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Hail Protection and Insurance Credits</h3>
                <p>Single-hung sashes do not project outward, which keeps them out of the impact path during Dallas storm events. We routinely specify laminated impact-rated glass on west and south elevations across hail-prone neighborhoods, which qualifies most homeowners for insurance premium credits through carriers serving Dallas County. We document the spec for the carrier's underwriting review when storm-driven replacement claims are involved.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Free In-Home Consultation</h3>
                <p>We offer free in-home consultations for any window or door replacement project across the Dallas metro service area. The consultation covers product selection, glass package recommendations, exterior color matching, and a detailed itemized quote. There is no obligation, no high-pressure sales process, and no charge for the time. Reach out to schedule.</p>
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

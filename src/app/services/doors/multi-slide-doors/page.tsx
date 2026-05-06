import Link from 'next/link';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/doors/patio-doors-fort-worth-tx.avif')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services/doors" className="hover:text-white transition-colors">Doors</Link>
              <span>/</span>
              <span className="text-primary">Multi-Slide Doors</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Multi-Slide Doors
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Premium sliding door systems with oversized panels that disappear into wall pockets for expansive luxury living.
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
                <p>Our multi-slide door installation service across Dallas covers the premium category of sliding door systems where individual panels run 4 to 8 feet wide and stack on precision tracks to create openings of 12 to 40 feet or more. This is the door type that defines the indoor-outdoor architecture of high-end Bluffview, Preston Hollow, and Lake Highlands modern remodels, where the entire back wall of the great room or kitchen retracts to merge interior space with the pool deck or terrace.</p>

                <p>Multi-slide systems differ from bifold doors in operational pattern. Where bifolds fold accordion-style with each panel hinged to the next, multi-slides keep each panel parallel to the wall and slide them along a track to stack at one or both ends of the opening. This creates a cleaner sightline when closed, simpler hardware, and slightly better weather-sealing geometry. Multi-slides typically sit at slightly lower price points than equivalent bifolds for similar opening widths.</p>

                <p>We work with premium manufacturers including Andersen, Pella, Marvin, Western Window Systems, and LaCantina for multi-slide projects. Frame material is almost always thermally broken aluminum because of the panel weights and sightline expectations. Lift-and-slide hardware that lifts each panel off the seal before sliding is standard on premium systems, enabling larger panel weights with smoother operation. Lead times typically run twelve to twenty weeks because of custom manufacturing.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaHome />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Architectural Drama</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Massive glass panels create stunning modern aesthetics and design focal points.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSun />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Disappearing Walls</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Panels slide into wall pockets to completely open entire walls to outdoor spaces.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaTools />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Precision Engineering</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Heavy-duty systems engineered for effortless operation despite massive panel sizes.</p>
                </div>
              </div>

              {/* Advanced Engineering */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Advanced Engineering
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Heavy-Duty Hardware</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Premium roller systems and track designs engineered to handle panels weighing hundreds of pounds with smooth, reliable operation.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Stainless steel or bronze rollers
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Reinforced track systems
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Multi-point locking mechanisms
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Weather Performance</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Advanced sealing systems designed for large panel configurations while maintaining structural integrity in Texas conditions.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Compression bulb seals
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Integrated drainage systems
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Impact-resistant glass options
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Body Sections */}
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Multi-Slide vs. Bifold Decision</h3>
                <p>Both multi-slide and bifold systems achieve the same general goal of dissolving the wall between interior and exterior space, but they differ in important ways. Multi-slides preserve cleaner sightlines when closed because the panels remain in plane with the wall. Bifolds open faster because the accordion fold collapses panels quickly. Multi-slides typically cost less per linear foot of opening at large spans. Bifolds offer more flexibility for partial-opening configurations. We help homeowners think through these tradeoffs based on the specific architectural intent and use pattern.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Pocket Walls vs. End-Stack Configurations</h3>
                <p>Multi-slide systems can stack at one or both ends of the opening, or they can disappear entirely into a pocket wall. Pocket-wall configurations require building wall depth to accommodate the stacked panels, which works best when planned during initial framing or significant remodel. End-stack configurations are more flexible for retrofit installations because the stacked panels remain visible at the opening edges. We help select based on architectural plans and structural feasibility.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Glass Specification for Massive Glass Areas</h3>
                <p>Multi-slide doors carry enormous glass area, often 200 to 600 square feet on a single opening. Glass specification drives most of the cooling-season performance. We routinely specify triple-silver Low-E coatings with the lowest available SHGC values on west and south multi-slide installations. Argon gas fills, warm-edge spacers, and laminated impact-rated glass are standard upgrades on premium systems. The right glass package is what makes large multi-slide installations livable during Dallas summer afternoons.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Threshold, Drainage, and Weather Sealing</h3>
                <p>The threshold and weatherstripping geometry on a multi-slide system has to seal effectively against Dallas wind-driven rain while still allowing smooth operation. Premium systems use multi-step thresholds with integrated drainage channels and adjustable weatherstripping. Lift-and-slide hardware lifts each panel off the seal before sliding, which lets the seal compress firmly when closed without dragging during operation. We coordinate threshold detail with the interior flooring transition and exterior patio surface for a clean architectural integration.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Permitting and Project Coordination</h3>
                <p>Multi-slide installations almost always require a permit from the City of Dallas because they involve structural framing modifications and exterior envelope changes. We handle permitting on the homeowner's behalf and coordinate with structural engineers when load calculations are required. Our service includes coordination with finish carpenters, flooring contractors, and exterior trim specialists. Total project timelines from initial consultation through final installation typically span four to six months.</p>
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
                      <span>Panels up to 6 feet wide and 10+ feet tall</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Stainless steel or bronze roller assemblies</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Pocket or stacking configurations</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Flush thresholds for seamless transitions</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Motorized operation options</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Impact-resistant glass for coastal areas</span>
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
                      Luxury custom homes
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Modern and contemporary architecture
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Great rooms with outdoor living areas
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      High-end commercial applications
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
              Multi-Slide Doors <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about multi-slide doors in Dallas, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How wide can multi-slide doors span in Dallas homes?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Multi-slide doors in Dallas, Texas can span 20-40 feet or more with multiple large panels. The exact width depends on structural engineering, foundation capacity, and local building codes, with professional assessment required for openings exceeding standard sizes.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What's the cost range for multi-slide door systems?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Multi-slide doors with installation in Dallas, Texas range from $25,000-$75,000 or more depending on size, glass specifications, and hardware quality. Everything is priced including installation. The premium engineering and custom fabrication required for large panel systems make them a significant investment for luxury properties. We do not sell doors without installation.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Do multi-slide doors require special structural work?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Multi-slide doors in Dallas, Texas require extensive structural engineering for large openings. This includes reinforced headers, foundation evaluation for heavy panel loads, and sometimes additional support columns to ensure safety and proper operation over decades of use.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Are multi-slide doors energy efficient in Texas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Multi-slide doors in Dallas, Texas can achieve excellent energy efficiency with triple-pane insulated glass and advanced frame materials. They can meet Energy Star Zone 3 requirements when properly specified, helping reduce cooling costs during Texas summers despite their large glass areas.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How long does multi-slide door installation take?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Multi-slide door installation in Dallas, Texas typically takes 1-3 weeks depending on system complexity and site conditions. This includes structural modifications, precise panel alignment, weatherproofing, and thorough testing to ensure smooth operation of heavy panels.
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
            <Link href="/services/doors" className="bg-secondary-dark hover:bg-gray-900 text-white font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] transition-all">
              All Doors
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

import Link from 'next/link';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/doors/sliding-glass-doors-garland-tx.avif')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services/doors" className="hover:text-white transition-colors">Doors</Link>
              <span>/</span>
              <span className="text-primary">Sliding Patio Doors</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Sliding Patio Doors
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Space-saving design with maximum light and smooth operation for seamless indoor-outdoor connections.
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
                <p>Our sliding patio door installation service across Dallas covers replacement of original aluminum sliders from the 1970s and 1980s as well as new installations for additions and remodels. Sliding patio doors are the most-installed patio door type in Dallas because they maximize opening width without requiring swing clearance, which suits the typical Dallas backyard layout where furniture, grills, and pool decks compete for space. Modern dual-pane Low-E sliders deliver dramatically better energy performance than the original aluminum units they typically replace.</p>

                <p>Standard sliding patio doors run 6-foot through 12-foot widths in two-panel configurations. Three-panel sliders extend openings to 12 to 18 feet, with the center panel fixed and the two outer panels operable. Four-panel and larger custom configurations push into the multi-slide product category. We help homeowners select the right configuration based on the existing opening, the architectural intent, and the desired opening width.</p>

                <p>Premium sliders from Andersen, Pella, JELD-WEN, and Marvin all carry Climate Zone 3-tuned glass packages, multi-point locking, stainless steel ball-bearing rollers, and engineered track hardware that holds up across the Dallas humidity range. Lead times typically run six to ten weeks on premium lines, and most installations complete in one to two working days per opening.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaTools />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Effortless Access</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Smooth glide systems require minimal effort to operate, ideal for frequent use.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaHome />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Space Saving</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">No door swing required—perfect for tight spaces and furniture-heavy rooms.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSun />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Expansive Views</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Wall-to-wall glass creates visual connection with outdoor living areas.</p>
                </div>
              </div>

              {/* Technical Performance */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Technical Performance
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Roller & Track Systems</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Heavy-duty stainless steel rollers and precision tracks ensure decades of smooth, quiet operation.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Stainless steel ball-bearing rollers
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Self-cleaning track design
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Adjustable height mechanisms
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Weather Protection</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Advanced sealing systems protect against Texas weather while maintaining smooth operation.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Multi-point weatherstripping
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Interlocking meeting rails
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Integrated weep systems
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Body Sections */}
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Why Original Aluminum Sliders Need Replacement</h3>
                <p>The aluminum sliders builders installed across Dallas in the 1970s and 1980s have largely failed both energy and operational performance. The frames conduct heat and cold dramatically, the rollers are typically plastic and seized after decades of dust and humidity, the meeting-rail seals have hardened and shrunk, and the single-pane glass delivers essentially zero insulation. Replacing those units with modern dual-pane Low-E sliders typically cuts patio door heat gain by sixty to seventy percent during the Dallas cooling season.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Glass Specification for West-Facing Sliders</h3>
                <p>Dallas backyards often face west or southwest, which means the patio sliders take direct afternoon solar exposure during the hottest months of the year. We routinely specify triple-silver Low-E coatings with low Solar Heat Gain Coefficients on west-facing slider installations. Argon gas fills, warm-edge spacers, and laminated impact-rated glass are standard upgrades. The right glass package on a west-facing slider can drop interior surface temperatures by ten to fifteen degrees during the hottest part of the afternoon.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Roller Hardware and Track Maintenance</h3>
                <p>The roller mechanism is the primary wear point on sliding patio doors. Premium manufacturers use stainless steel ball-bearing rollers and self-cleaning track geometry that minimize the gunk buildup from Dallas hard-water sprinkler over-spray and accumulated dust. Routine maintenance is limited to occasional vacuuming. Lower-tier sliders use plastic rollers that can crack and seize over time, requiring difficult roller replacement that often becomes a service call.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Hail Protection and Storm Performance</h3>
                <p>Sliding patio doors take direct hail exposure on most Dallas homes because they typically face the back yard, often west or southwest. Pairing slider frames with laminated impact-rated glass dramatically reduces breakage risk and qualifies many homeowners for insurance premium credits through carriers serving Dallas County. We document the laminated glass specification for the carrier's underwriting review.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Service Coverage and Project Timeline</h3>
                <p>We install sliding patio doors across the full Dallas metro service area. Installation typically completes in one working day for standard 6 to 8 foot sliders and one to two days for larger 10 to 12 foot configurations. The City of Dallas generally does not require permits for like-for-like patio door replacements that do not change opening size. Free in-home consultations cover product selection, glass package recommendations, and detailed itemized quotes.</p>
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
                      <span>Tandem or triple-pane insulated glass</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Stainless steel roller systems</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Multi-point mortise locks</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Interlock weatherstripping</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Optional built-in blinds between glass</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Available in two, three, or four-panel configurations</span>
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
                      Family rooms and great rooms
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Master bedrooms with private patios
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Kitchen access to outdoor dining
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Spaces with limited swing clearance
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
              Sliding Patio Doors <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about sliding patio doors in Dallas, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How do sliding patio doors compare to French doors in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sliding patio doors in Dallas, Texas offer wider openings and easier operation than French doors, making them better for accessing large outdoor spaces. While French doors provide elegant aesthetics, sliding doors excel at creating seamless indoor-outdoor flow without requiring swing clearance.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Are sliding patio doors secure for ground-level installations?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sliding patio doors in Dallas, Texas include multi-point locking systems and reinforced frames for good security at ground level. While they provide excellent ventilation and views, homeowners concerned about security often choose impact-resistant glass options and additional reinforcement for peace of mind.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What maintenance do sliding patio doors require in Texas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sliding patio doors in Dallas, Texas require annual track cleaning and lubrication of rollers to maintain smooth operation. The tracks should be kept clear of debris, and weatherstripping should be inspected seasonally to ensure proper sealing in Texas variable weather conditions.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Can sliding patio doors include built-in blinds?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Many sliding patio doors in Dallas, Texas can include between-the-glass blinds or shades that are protected from dust and damage. These integrated systems provide privacy and light control without the maintenance issues of traditional window treatments, making them ideal for Texas homeowners.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How wide can sliding patio doors be installed in Dallas homes?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sliding patio doors in Dallas, Texas can span up to 12-16 feet wide depending on the specific product and structural considerations. Multi-panel configurations allow for even larger openings, though proper header support and foundation evaluation are essential for wide installations.
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

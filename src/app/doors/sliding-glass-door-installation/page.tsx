import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Sliding Glass Door Installation Dallas TX | Casa Linda Mid-Century, Lakewood Decks, Lake Highlands Pool Decks',
  description: 'Sliding glass door installs for Casa Linda mid-century rear elevations, Lakewood deck openings, and Lake Highlands pool decks. Adjustable rollers and ENERGY STAR Zone 3 glass tuned for Dallas heat.',
  alternates: { canonical: 'https://windowreplacementdallastx.com/doors/sliding-glass-door-installation' },
};

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
              <Link href="/doors" className="hover:text-white transition-colors">Doors</Link>
              <span>/</span>
              <span className="text-primary">Sliding Glass Door Installation</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Sliding Glass Door Installation
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Sliding-track glass doors for Casa Linda mid-century rear elevations, Lakewood deck openings, and Lake Highlands pool-deck retrofits. Hardware that won't seize on Dallas hard-water mineral spotting after years of pool-side service.
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
                <p>Sliding glass doors are the most common patio door type across Dallas residential construction, and replacing original 1970s and 1980s aluminum sliders with modern dual-pane Low-E units is one of the highest-impact energy improvements available on a typical home. The horizontal sliding geometry keeps the door panels parallel to the wall, which works well in tight backyards, on second-story balconies, and adjacent to outdoor furniture. Standard sizes run 6-foot through 12-foot widths in two-panel and three-panel configurations, with custom sizing available for projects that need wider openings.</p>

                <p>The architectural fit varies by home style. Mid-century ranches in Lake Highlands, Casa Linda, and the Disney Streets typically had original aluminum sliders that suit modern aluminum or fiberglass replacements with thin sightlines. Contemporary remodels in Bluffview and Preston Hollow often want larger custom sliders or multi-slide systems with three or more panels. Traditional homes in Devonshire and Greenway Parks sometimes specify French sliders with wider stiles and divided lite glass to match the architectural language. We help select the right configuration based on the existing opening and the architectural intent.</p>

                <p>Premium sliding glass doors from Andersen, Pella, JELD-WEN, and Marvin all offer Climate Zone 3-tuned glass packages, multi-point locking, and engineered roller hardware that holds up across the Dallas humidity range. Lead times typically run six to ten weeks on premium lines, and most installations complete in one to two working days per opening.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSun />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Maximum Views</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Large glass panels provide unobstructed views of outdoor spaces.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaTools />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Space Efficient</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Horizontal sliding requires no floor space for operation.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSnowflake />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Energy Efficient</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Insulated glass and frames reduce heating and cooling costs.</p>
                </div>
              </div>

              {/* Features Section */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Performance & Security Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Smooth Operation</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Precision engineering ensures effortless sliding with minimal effort.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Stainless steel rollers
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Precision-engineered tracks
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Quiet, smooth operation
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Security Features</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Multi-point locking systems protect against forced entry attempts.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Multi-point locking
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Reinforced frames
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Impact-resistant glass
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Body Sections */}
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Glass Specification for Dallas Heat and Solar Load</h3>
                <p>Sliding glass doors carry significant glass area, often facing west or south in homes with backyards oriented toward open lots, pools, or pool decks. That orientation drives serious cooling-season solar load on Dallas afternoons, and glass specification matters more on patio doors than on most other windows in the home. We routinely specify triple-silver Low-E coatings with low Solar Heat Gain Coefficients on west and south patio door installations, which dramatically reduces afternoon solar heat gain and improves interior comfort during August afternoons. Argon gas fills and laminated impact glass are standard upgrades on most projects.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Roller Hardware and Long-Term Operation</h3>
                <p>The roller mechanism on a sliding patio door is the primary wear point, and Dallas conditions are tough on it. Hard-water sprinkler over-spray, dust, and humidity all contribute to track gunk that can cause sliders to drag or jam over time. Premium manufacturers use stainless steel ball-bearing rollers and self-cleaning track geometry that minimize these issues. We routinely specify Andersen, Pella, Marvin, and JELD-WEN sliders for Dallas applications because their roller hardware reliably operates cleanly at year fifteen and beyond. Track maintenance is limited to occasional vacuuming.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Multi-Slide and Lift-and-Slide Upgrades</h3>
                <p>For Dallas homeowners renovating with backyards or pool decks that should feel continuous with the interior, multi-slide and lift-and-slide door systems offer dramatic openings. Multi-slide doors stack panels into a pocket, creating openings of 12 to 20 feet that disappear entirely when fully open. Lift-and-slide hardware uses a quarter-turn handle that lifts the panel off the seal before sliding, enabling much larger panel weights with smoother operation. Both systems require thermally broken aluminum frames and engineered hardware, and they sit at the premium tier of patio door specification.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Security Hardware and Multi-Point Locking</h3>
                <p>Modern sliding patio doors use multi-point locking systems that engage the frame at top, middle, and bottom of the active panel, dramatically improving security versus the single-point latches on older sliders. Smart lock compatibility, integrated alarm sensors, and laminated impact-rated glass all add layers of security on doors that are otherwise a recognized point of entry concern. We discuss security upgrades during the initial consultation rather than treating them as add-ons after install.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Installation Workflow and Permitting</h3>
                <p>Most sliding patio door installations are pocket replacements into existing rough openings without structural changes. Larger custom installations or new openings cut into existing walls do trigger permitting through the City of Dallas Department of Sustainable Development and Construction, and we handle that paperwork on the homeowner's behalf. Installation typically completes in one to two working days for standard sizes and two to four days for larger multi-slide systems. Free in-home consultations are available across the Dallas metro service area.</p>
              </div>

              {/* CTA Block */}
              <div className="bg-secondary-dark p-10 text-center">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
                  Ready for Expansive Views?
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
                      <span>Horizontal sliding operation saves space</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Large glass areas for maximum light and views</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Energy-efficient insulated glass and frames</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Multi-point locking systems for security</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Low-E coatings reduce solar heat gain</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Impact-resistant glass options</span>
                    </li>
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="bg-gray-50 p-10 border border-gray-100">
                  <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-6">
                    Perfect For Dallas Homes
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Contemporary home designs
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Small patios with furniture
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Maximizing usable space
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Expansive outdoor views
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
              Sliding Glass Door <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about sliding glass doors in Dallas, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How do sliding glass doors handle Texas heat?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Quality sliding glass doors feature Low-E glass coatings that reflect infrared heat while allowing visible light to pass through, dramatically reducing solar heat gain during Dallas summers. Insulated frames and multi-pane glass units further improve energy efficiency and comfort.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Are sliding glass doors secure?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Modern sliding glass doors incorporate robust security features including multi-point locking systems, reinforced frames, and impact-resistant glass. Quality hardware ensures doors cannot be easily forced open, and some include keyed locks and security bars for enhanced protection.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How much do sliding glass doors cost in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sliding glass door costs in Dallas, TX range from $800 to $3,500 installed, depending on size, materials, glass options, and brand. Premium impact-resistant glass and high-end brands increase costs. They represent excellent value for the space efficiency and views provided.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Can sliding glass doors be customized?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, sliding glass doors offer extensive customization including frame colors, glass options (clear, tinted, privacy patterns), hardware finishes, and sizes. You can choose different glass treatments for fixed and operable panels to balance views with privacy needs.
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
            <Link href="/doors" className="bg-secondary-dark hover:bg-gray-900 text-white font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] transition-all">
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
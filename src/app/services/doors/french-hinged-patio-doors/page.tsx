import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'French Hinged Patio Door Dallas TX | Highland Park Estates, Greenway Parks Spanish Colonial',
  description: 'Hinged French patio doors for Highland Park estate rear elevations and Greenway Parks Spanish Colonial garden rooms. True divided lite, multipoint security, mortise-and-tenon stiles in mahogany or oak.',
  alternates: { canonical: 'https://windowreplacementdallastx.com/services/doors/french-hinged-patio-doors' },
};

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/doors/french-doors-arlington-tx.jpg')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services/doors" className="hover:text-white transition-colors">Doors</Link>
              <span>/</span>
              <span className="text-primary">French Patio Doors</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              French Patio Doors
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Hinged French pairs for Highland Park estate rear elevations and Greenway Parks Spanish Colonial garden rooms. True divided lite glass and multipoint security hardware, with mortise-and-tenon stiles available in mahogany or oak.
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
                <p>Our French hinged patio door installation service across Dallas covers the architectural choice that defines so many of the city's most-loved homes. French doors carry the classical proportions that suit Tudor Revivals around Lakewood and Greenway Parks, Spanish Colonials in Devonshire and Bluffview, and the Mediterranean homes scattered through Highland Park-adjacent neighborhoods. The two hinged operable panels with full-height glass create a visually dramatic threshold to backyards, courtyards, and side patios.</p>

                <p>French patio doors come in two primary swing configurations. In-swing units open into the home, which is the traditional installation but requires interior clearance for the swing path. Out-swing units open outward, which protects the threshold from wind-driven rain and keeps interior space free for furniture. We help select the right swing direction based on the specific application, weather exposure, and adjacent interior layout.</p>

                <p>Premium French patio doors from Andersen, Pella, Marvin, and JELD-WEN all carry Climate Zone 3-tuned glass packages, multi-point locking, and engineered hinges that hold up across the Dallas humidity range. Frame material options span fiberglass, wood-clad, and solid wood, with the right material depending on architectural fit and weather exposure. Lead times typically run six to twelve weeks on premium lines.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaHome />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Timeless Elegance</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Classic divided light design complements traditional and transitional architecture.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSun />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Wide Opening</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Both panels swing open for maximum access and unobstructed passage.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaShieldAlt />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Secure Performance</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Multi-point locking systems provide security while maintaining classic appearance.</p>
                </div>
              </div>

              {/* Design & Functionality */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Design & Functionality
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Swing Configurations</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Available in inswing or outswing configurations to accommodate different architectural requirements and space constraints.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Inswing for traditional installations
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Outswing for screen integration
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Custom threshold options
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Grille Options</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Choose from traditional divided lites or contemporary designs to match your architectural style and preferences.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        True divided light patterns
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Simulated grille options
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Custom spacing and profiles
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Body Sections */}
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Architectural Fit Across Dallas Neighborhoods</h3>
                <p>French patio doors are particularly appropriate for Dallas's traditional architecture. Tudor Revivals in Lakewood, Greenway Parks, and around Highland Park frequently used French doors as the original specification on rear and side elevations. Spanish Colonial and Mediterranean homes in Devonshire and Bluffview often have arched French doors with hand-forged hardware as part of the original design. Munger Place, Junius Heights, and Hollywood Heights Conservation District homes typically retain or restore French doors as a defining architectural element. We match profiles, divided lite patterns, and exterior colors to the architectural intent.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Active-Active vs. Active-Inactive Configurations</h3>
                <p>French patio doors come in two operational configurations. Active-active means both panels are operable, with the active panel using a multi-point lock against the inactive panel. Active-inactive uses a flush bolt to lock one panel to the threshold and head, with the active panel locking against that fixed inactive panel. Active-active is more flexible for moving large furniture and entertaining; active-inactive is structurally tighter and slightly more secure. We help select based on use pattern.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Glass and Divided Lite Specification</h3>
                <p>The glass panels are what makes French doors French. Six-over-six and ten-over-ten true divided lite patterns are the period-correct call for pre-war Dallas architecture. Simulated divided lites with applied muntins both inside and outside the glass deliver the same visual effect with significantly better energy performance. We specify Low-E glass packages tuned for Climate Zone 3 with low SHGC on west and south exposures and laminated impact-rated glass on storm-exposed elevations across hail-prone neighborhoods.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Hardware and Threshold Detail</h3>
                <p>Modern French patio doors use multi-point locking systems that engage the active panel against the inactive panel and the frame at three or more points. Hardware finishes including brass, satin nickel, oil-rubbed bronze, and matte black coordinate with adjacent windows and exterior light fixtures. The threshold is the critical wear point, and adjustable thresholds with compression-fit weatherstripping prevent the air leakage that drives up cooling bills. We field-adjust thresholds during installation for tight sealing.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Service Coverage and Project Timeline</h3>
                <p>We install French patio doors across the full Dallas metro service area. Installation typically completes in one to two working days per opening including threshold adjustment and final operation testing. The City of Dallas generally does not require permits for like-for-like patio door replacements that do not change opening size. Free in-home consultations are available across the service area.</p>
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
                      <span>Inswing or outswing operation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>True divided lites or simulated grilles</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Low-E insulated glass</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Multi-point locking with deadbolts</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Matching sidelights and transoms</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Custom grille patterns and spacing</span>
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
                      Traditional and colonial style homes
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Dining rooms with patio access
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Master suites opening to gardens
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Homes valuing classic design
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
              French Patio Doors <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about French patio doors in Dallas, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Do French doors work well in Texas climate?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  French doors work exceptionally well in Dallas, Texas when properly specified with insulated glass and weatherstripping. Modern French doors include multi-chambered frames and advanced seals that handle Texas temperature variations and humidity while maintaining energy efficiency.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What's the difference between inswing and outswing French doors?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Inswing French doors in Dallas, Texas swing into the room, requiring floor space clearance for operation. Outswing French doors swing outward, making them easier to integrate with screens and providing better weather protection during Texas storms.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Are French doors energy efficient in Texas Zone 3?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Modern French doors in Dallas, Texas can achieve Energy Star certification with proper glass specifications and frame materials. Look for Low-E glass, argon gas fills, and multi-chambered frames to maximize energy efficiency in Texas Zone 3 climate conditions.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Can French doors include screens for Texas insects?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  French doors in Dallas, Texas can be equipped with retractable or removable screens to handle Texas insect seasons. Outswing configurations work particularly well with screen integration, providing ventilation while protecting against mosquitoes and other pests.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How wide can French door openings be in Dallas homes?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  French doors in Dallas, Texas typically span 5-8 feet wide, though custom configurations can be wider. The opening size depends on structural considerations and local building codes, with proper header support essential for larger openings.
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

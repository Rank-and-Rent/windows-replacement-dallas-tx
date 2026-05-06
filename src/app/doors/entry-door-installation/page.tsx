import Link from 'next/link';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/doors/entry-doors-fort-worth-tx.webp')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/doors" className="hover:text-white transition-colors">Doors</Link>
              <span>/</span>
              <span className="text-primary">Entry Door Installation</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Entry Door Installation
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Transform your Dallas home with premium entry doors that combine security, energy efficiency, and stunning curb appeal from top manufacturers.
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
                <p>The entry door is the most-seen, most-touched, and most-judged element of any Dallas home. It carries the first impression at the curb, shapes the threshold experience for everyone who visits, and serves the critical practical roles of weather barrier, security barrier, and energy barrier. The right entry door for a 1920s Lakewood Tudor is fundamentally different from the right entry door for a 1995 Preston Hollow custom or a 2020 Bluffview modern remodel, and we approach each replacement project as a coordinated specification rather than a stock-door swap.</p>

                <p>Material choice drives most of the long-term performance. Fiberglass entry doors deliver the warmth of wood with dramatically better stability across Dallas humidity swings, no warping, no rotting, and superior insulation. Steel doors offer maximum security and the best fire rating but read more institutional than residential, which limits their architectural fit. Solid wood doors remain the right answer for the architecturally significant homes of Highland Park, University Park, and the Conservation Districts, where authenticity matters and homeowners are prepared to budget for periodic refinishing.</p>

                <p>We install entry doors from Andersen, Pella, JELD-WEN, and Therma-Tru, all carrying multi-point locking, weather-tested adjustable thresholds, and Climate Zone 3-tuned glass packages on side-light and transom configurations. Most installations include sidelights, transoms, or both, and we approach the threshold as a complete weatherproofed assembly rather than a single-door swap.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaShieldAlt />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Enhanced Security</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Multi-point locking systems and reinforced frames protect against break-ins.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSnowflake />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Energy Efficiency</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Foam core construction and superior weatherstripping reduce heating costs.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaHome />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Curb Appeal</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Beautiful designs and finishes that enhance your home's exterior.</p>
                </div>
              </div>

              {/* Features Section */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Material Options & Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Fiberglass Doors</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Resist warping, rotting, and rust while offering wood-like aesthetics with minimal maintenance.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Andersen Fibrex technology
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Realistic wood grain textures
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Superior energy efficiency
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Steel & Wood Options</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Maximum security and natural beauty with modern protective treatments.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Impact-resistant glass options
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Multi-point locking systems
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Smart lock compatibility
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Body Sections */}
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Material Selection for Dallas Conditions</h3>
                <p>Fiberglass entry doors are our most-installed material in the Dallas metro because they balance authenticity, performance, and practicality. The pultruded fiberglass skin holds dimensional stability across the brutal thermal cycle Dallas summers impose on south and west elevations, and modern wood-grain textures read convincingly as authentic wood at normal viewing distance. Solid wood remains the right call for Highland Park-area Tudors, Lakewood historic homes, and Conservation District projects where authenticity is the priority. Steel works well for back-of-house service entries where security is the priority and aesthetics are secondary.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Sidelights, Transoms, and Whole-Threshold Design</h3>
                <p>Most Dallas entry doors are not single-door installations but integrated assemblies that include sidelights flanking the door, a transom above, or both. Tudor Revivals around Lakewood and Greenway Parks often carry single sidelights with leaded-glass divided lites. Spanish Colonial homes in Devonshire and Bluffview frequently use semi-circular transom arches above the main door. Contemporary remodels in Preston Hollow and the modern infill of East Dallas favor flanking double sidelights with minimal grille patterns. We design the assembly as a coordinated architectural element rather than specifying each piece in isolation.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Hardware, Multi-Point Locks, and Smart Locks</h3>
                <p>Premium entry doors use multi-point locking systems that engage the frame at three or more points along the door height, dramatically improving both security and weatherstripping compression. Smart lock compatibility is now standard on most premium lines, allowing integration with home automation systems, keyless entry, and remote access. Brass, satin nickel, oil-rubbed bronze, and matte black hardware finishes are all available, and we coordinate finish selection with existing exterior light fixtures and house numbers for visual consistency.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Energy Performance and Threshold Sealing</h3>
                <p>Entry door energy performance depends as much on the threshold and weatherstripping as on the door itself. Adjustable thresholds, compression-fit weatherstripping, and integrated sweep gaskets prevent the air leakage that drives up cooling bills on Dallas homes. We field-adjust every threshold during installation to achieve a tight compression seal across the full door perimeter. The energy improvement from a properly installed premium entry door versus a leaky original door is often substantial.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Installation Workflow and Permitting</h3>
                <p>Entry door installations typically complete in four to eight working hours including removal of the original door and frame, preparation of the rough opening, installation of the new pre-hung unit, exterior trim and brick mold work, threshold adjustment, hardware installation, and operation testing. The City of Dallas generally does not require permits for like-for-like entry door replacements that do not change opening size. Conservation District projects sometimes require architectural review approval, which we handle on the homeowner's behalf.</p>
              </div>

              {/* CTA Block */}
              <div className="bg-secondary-dark p-10 text-center">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
                  Ready to Transform Your Entry?
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
                      <span>Fiberglass, steel, and wood materials</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Multi-point locking systems</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Energy-efficient foam core construction</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Impact-resistant glass options</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Smart lock compatibility</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Sidelights and transom configurations</span>
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
                      Security-conscious homeowners
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Energy efficiency upgrades
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Curb appeal improvements
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Historic home restorations
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
              Entry Door <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about entry doors in Dallas, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How long does entry door installation take in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most entry door installations in Dallas, TX are completed in 4 to 8 hours. Complex installations with sidelights, transoms, or structural modifications may require a full day. We provide accurate timelines during consultation.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What is the best entry door material for Texas weather?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Fiberglass and steel doors perform exceptionally well in Dallas, TX climate. Fiberglass resists warping and cracking in temperature extremes while requiring minimal maintenance. Steel offers maximum security and excellent insulation.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Do I need a permit to replace my entry door in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  In most cases, replacing an entry door in an existing opening does not require a permit in Dallas, TX. However, if you are changing the size of the opening or making structural modifications, permits may be necessary.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How much do entry doors cost in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Entry door costs in Dallas, TX vary widely. Basic steel doors start around $800 to $1,200 installed. Quality fiberglass doors typically range from $1,500 to $3,500 installed. Premium wood or custom doors can range from $3,000 to $8,000 or more.
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
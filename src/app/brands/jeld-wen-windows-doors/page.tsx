import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'JELD-WEN Windows and Doors Dallas TX | Premium Vinyl and Aluminum-Clad Wood for Whole-House Projects',
  description: 'JELD-WEN vinyl, aluminum-clad wood, and premium options for Casa View, Lake Highlands, and Wilshire Heights whole-house projects. Strong value for 20-plus-opening Dallas replacement scopes.',
  alternates: { canonical: 'https://windowreplacementdallastx.com/brands/jeld-wen-windows-doors' },
};

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/windows/double-hung-windows-garland-tx.jpg')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/brands" className="hover:text-white transition-colors">Brands</Link>
              <span>/</span>
              <span className="text-primary">Jeld-Wen</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Jeld-Wen Windows & Doors
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              The value-and-volume specification for Casa View, Lake Highlands, and Wilshire Heights whole-house projects where 20-plus openings need to come in under budget without sacrificing the warranty profile or installation tolerances.
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
                <p>JELD-WEN is one of the largest window and door manufacturers in North America, with a deep portfolio that covers virtually every residential application from value-tier vinyl through premium custom wood. The company's manufacturing scale delivers consistent quality and product availability across the lineup, which matters for whole-house replacement projects in Dallas where lead times affect overall project scheduling. JELD-WEN windows and doors install across the full Dallas metro service area, from Highland Park and University Park through Lakewood, Lake Highlands, Casa Linda, Devonshire, Preston Hollow, and the surrounding suburbs.</p>

                <p>The JELD-WEN product portfolio is organized around several primary lines. Premium Vinyl is the upper-tier vinyl line, with fusion-welded frames, advanced glass packages, and lifetime warranties. The V-2500 line covers mid-range vinyl applications. The Siteline collection is the wood and wood-clad line for architectural projects requiring authentic wood character. The AuraLast pine treatment system is JELD-WEN's signature wood preservation technology, and it appears across both wood and wood-clad products to extend service life in challenging climates like Dallas.</p>

                <p>For Dallas summers, JELD-WEN's Low-E glass packages meet ENERGY STAR Climate Zone 3 requirements with appropriate SHGC values for cooling-dominated climates. As an authorized JELD-WEN dealer, we install across the full lineup with manufacturer-trained installation teams, factory warranty registration, and ongoing service support across the Dallas metro.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaDollarSign />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Exceptional Value</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Quality construction and performance at accessible price points for all budgets.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaTools />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Product Diversity</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Extensive selection of styles, materials, and configurations for any project.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaHome />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Proven Reliability</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Decades of proven performance backed by comprehensive warranty coverage.</p>
                </div>
              </div>

              {/* Certified Installation Services */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Certified Installation Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Jeld-Wen Authorized Dealer</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">As an authorized Jeld-Wen dealer, we maintain certification standards and access to factory training for proper installation techniques.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Factory-certified installation methods
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Warranty compliance assurance
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Access to technical support
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Professional Installation Process</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Our experienced team ensures proper fit, function, and finish for every Jeld-Wen product in your Dallas-area home.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Precise measurements and templating
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Proper framing and reinforcement
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Quality inspection and testing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Body Sections */}
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">JELD-WEN Premium Vinyl for Whole-House Projects</h3>
                <p>JELD-WEN Premium Vinyl is the line we install most often for whole-house replacement projects in postwar Dallas neighborhoods. Fusion-welded frame corners eliminate the gasket-and-joint failure points common on lower-tier vinyl. Advanced multi-pane glass packages deliver Climate Zone 3 performance. Lifetime frame warranties and twenty-year glass coverage protect the investment over realistic Dallas ownership periods. The line comes in multiple exterior color options that suit traditional and contemporary architecture.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">JELD-WEN Siteline Wood and Wood-Clad</h3>
                <p>The Siteline collection is JELD-WEN's wood and wood-clad line for architectural projects. Real wood interiors, AuraLast pine preservation treatment, and aluminum or fiberglass exterior cladding deliver authentic wood character with weather-resistant performance. We specify Siteline on Lakewood Tudor remodels, Devonshire Spanish Colonial work, Greenway Parks restorations, and historic district projects across Munger Place and Junius Heights where authenticity meets practical maintenance considerations.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">AuraLast Pine Preservation System</h3>
                <p>The AuraLast pine treatment system is JELD-WEN's signature wood preservation technology, applied throughout the wood substrate rather than as a surface coating. The treatment dramatically extends wood window service life in challenging climates by preventing wood rot, water damage, and termite intrusion across the full thickness of the wood. AuraLast carries a 20-year warranty against rot, which is meaningful in the Dallas climate where seasonal humidity swings can challenge wood window longevity.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Door Lineup and Patio Door Options</h3>
                <p>JELD-WEN manufactures a deep door lineup that includes entry doors, sliding patio doors, French patio doors, and bifold systems. The IWP Aurora and Custom Wood entry doors compete in the upper tier of the residential entry market. JELD-WEN sliding patio doors and French patio doors integrate well with their window product lineup for Dallas projects that include both window and door replacement.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Warranty and Service Network</h3>
                <p>JELD-WEN warranty terms run lifetime on premium frame materials and twenty years on glass seals across most product lines. We register every install on the homeowner's behalf and manage warranty claims directly. The brand maintains a substantial Dallas-Fort Worth distribution network, which keeps lead times competitive and parts availability strong for warranty service.</p>
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
                      <span>AuraLast wood protection against rot and decay</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Multiple vinyl series from value to premium</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Energy Star certification across product lines</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>LoĒ³-366 glass for superior solar control</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Factory-applied exterior finishes</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Extensive standard and custom sizes</span>
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
                      Budget-conscious quality seekers
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Whole-home replacement projects
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Rental properties and investment homes
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      New construction and remodeling
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
              Jeld-Wen <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about Jeld-Wen windows and doors in Dallas, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Why choose Jeld-Wen for window replacement in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Jeld-Wen in Dallas, Texas offers exceptional value with reliable performance and one of the most extensive product selections available. Their global manufacturing ensures consistent quality and availability, making them an excellent choice for both budget-conscious homeowners and those seeking premium features.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What Jeld-Wen products work best in Texas climate?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  For Texas climate in Dallas, we recommend Jeld-Wen's LoĒ³-366 glass technology that provides superior solar control while maintaining energy efficiency. Their vinyl and composite frames resist fading and warping in Texas heat, and the extensive size options accommodate any Dallas-area architectural style.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Are Jeld-Wen windows Energy Star certified?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, Jeld-Wen windows in Dallas, Texas include Energy Star certified options across their product lines. We help you select the right energy-efficient windows for your Dallas-area home to maximize comfort and minimize utility costs in Texas Zone 3 climate conditions.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What's the warranty coverage for Jeld-Wen products?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Jeld-Wen warranties in Dallas, Texas include comprehensive coverage on materials and components, with specific terms varying by product line. Our authorized dealer status ensures proper installation for warranty protection, and we handle all warranty claims for Dallas-area homeowners.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How quickly can Jeld-Wen products be delivered in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Jeld-Wen products in Dallas, Texas benefit from extensive manufacturing capacity and regional distribution. Most standard sizes are available for quick delivery, while custom configurations typically ship within 2-4 weeks, allowing efficient project scheduling for Dallas-area replacement projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Brands We Install */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
              More Premium <span className="text-primary italic">Brands We Install</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm max-w-2xl mx-auto">
              Explore our complete range of industry-leading manufacturers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg hover:shadow-lg transition-all duration-300 group border border-gray-100">
              <img
                src="/andersen-windows-and-doors-dallas-tx-logo.png"
                alt="Andersen Windows & Doors"
                className="h-16 md:h-20 w-auto object-contain mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="text-center">
                <h3 className="text-lg font-black text-secondary-dark uppercase tracking-tighter mb-2">Andersen</h3>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">Architectural Excellence</p>
                <Link href="/brands/andersen-windows-doors" className="text-primary hover:text-primary-dark font-bold uppercase tracking-widest text-xs transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg hover:shadow-lg transition-all duration-300 group border border-gray-100">
              <img
                src="/marvin-windows-and-doors-dallas-tx-logo.png"
                alt="Marvin Windows & Doors"
                className="h-16 md:h-20 w-auto object-contain mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="text-center">
                <h3 className="text-lg font-black text-secondary-dark uppercase tracking-tighter mb-2">Marvin</h3>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">Luxury Craftsmanship</p>
                <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Coming Soon</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg hover:shadow-lg transition-all duration-300 group border border-gray-100">
              <img
                src="/pella-windows-and-doors-dallas-tx-logo.png"
                alt="Pella Windows & Doors"
                className="h-16 md:h-20 w-auto object-contain mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="text-center">
                <h3 className="text-lg font-black text-secondary-dark uppercase tracking-tighter mb-2">Pella</h3>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">Innovation & Design</p>
                <Link href="/brands/pella-windows-doors" className="text-primary hover:text-primary-dark font-bold uppercase tracking-widest text-xs transition-colors">
                  Learn More →
                </Link>
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
            <Link href="/services/doors" className="border-2 border-secondary-dark text-secondary-dark font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] hover:bg-secondary-dark hover:text-white transition-all">
              All Doors
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

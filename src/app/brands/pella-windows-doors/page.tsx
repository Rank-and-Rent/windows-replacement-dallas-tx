import Link from 'next/link';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/locations/window-replacement-dallas-tx-4.jpg')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/brands" className="hover:text-white transition-colors">Brands</Link>
              <span>/</span>
              <span className="text-primary">Pella</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Pella Windows & Doors
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Pella delivers innovative window and door solutions with advanced features like between-the-glass blinds and industry-leading energy performance.
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
                <p>Since 1925, Pella has been at the forefront of window innovation, introducing features that have become industry standards. Their most recognizable innovation is the between-the-glass blinds and shades—eliminating dust collection and damage while providing integrated privacy control.</p>

                <p>Pella's product lines include the premium Architect Series featuring authentic wood interiors, the Lifestyle Series offering vinyl durability, and the Encompass Series providing excellent value. Each line incorporates advanced glass packages with multiple low-E coatings optimized for specific climates.</p>

                <p>Our Pella certification means we're trained on proper installation techniques specific to each product line, ensuring your windows perform as engineered. Pella's comprehensive warranty and our certified installation work together to protect your investment.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSun />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Innovative Features</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Between-glass blinds, triple-pane options, and advanced glass technologies.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSnowflake />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Climate Specific</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Glass packages engineered specifically for Texas heat and UV exposure.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaHome />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Design Versatility</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Extensive styles, colors, and customization options for any architecture.</p>
                </div>
              </div>

              {/* Expert Installation Services */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Expert Installation Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Pella-Certified Technicians</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Our team completes Pella's rigorous certification program, ensuring factory-approved installation methods for optimal performance.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Factory-certified installation training
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Product-specific installation techniques
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Warranty compliance assurance
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Quality Installation Process</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Every Pella installation follows precise protocols to ensure proper fit, function, and long-term performance in Texas conditions.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Precision measurement and templating
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Professional framing and shimming
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Final adjustment and testing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Block */}
              <div className="bg-secondary-dark p-10 text-center">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-8">
                  Professional consultation and free estimate
                </p>
                <Link href="/quote" className="inline-block bg-primary hover:bg-primary-dark text-white font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] shadow-2xl shadow-primary/40 transition-all active:scale-95">
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
                      <span>Between-the-glass blinds and shades</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Triple-pane glass with argon/krypton fill</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>AdvancedComfort Low-E glass</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>EnduraClad exterior finish resists fading</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Multiple wood species for interior finish</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Limited lifetime warranty coverage</span>
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
                      Homeowners prioritizing innovation
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Those seeking integrated privacy solutions
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Energy-conscious Texas homeowners
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Traditional and contemporary homes alike
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
              Pella <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about Pella windows and doors in Dallas, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What makes Pella windows unique in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Pella windows in Dallas, Texas stand out with their between-the-glass blinds and shades that eliminate dust collection and maintenance issues. Their AdvancedComfort Low-E glass is specifically engineered for Texas Zone 3 climate conditions, providing superior solar control and energy efficiency.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How does Pella's between-glass blinds work?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Pella's between-glass blinds in Dallas, Texas are sealed between two panes of insulating glass, protecting them from dust, damage, and fading. They can be adjusted for privacy and light control without ever needing cleaning, making them ideal for Texas homeowners seeking low-maintenance window treatments.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Are Pella windows Energy Star certified for Texas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, Pella windows in Dallas, Texas meet strict Energy Star Zone 3 requirements for the Texas climate. Their AdvancedComfort Low-E glass reduces solar heat gain while maintaining natural light, helping Dallas homeowners save on cooling costs during hot Texas summers.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What's included in professional Pella installation?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional Pella installation in Dallas, Texas includes certified technician assessment, precision measurements, proper framing modifications, weatherproofing, and final testing. Our Pella-certified team ensures every installation meets factory specifications for optimal performance and warranty protection.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How long do Pella warranties last in Texas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Pella warranties in Dallas, Texas include limited lifetime coverage on most components and finishes, with specific terms for glass and hardware. Our certified installation ensures warranty compliance, and we handle all warranty claims for Dallas-area homeowners throughout the warranty period.
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
                <Link href="/brands/andersen" className="text-primary hover:text-primary-dark font-bold uppercase tracking-widest text-xs transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg hover:shadow-lg transition-all duration-300 group border border-gray-100">
              <img
                src="/jeld-wen-windows-and-doors-dallas-tx-logo.png"
                alt="Jeld-Wen Windows & Doors"
                className="h-16 md:h-20 w-auto object-contain mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="text-center">
                <h3 className="text-lg font-black text-secondary-dark uppercase tracking-tighter mb-2">Jeld-Wen</h3>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">Reliable Performance</p>
                <Link href="/brands/jeld-wen" className="text-primary hover:text-primary-dark font-bold uppercase tracking-widest text-xs transition-colors">
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
            <Link href="/quote" className="bg-primary hover:bg-primary-dark text-white font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] transition-all shadow-lg shadow-primary/20">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

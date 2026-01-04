import Link from 'next/link';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign, FaAward } from 'react-icons/fa';

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/windows/casement-windows-frisco-tx.webp')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/brands" className="hover:text-white transition-colors">Brands</Link>
              <span>/</span>
              <span className="text-primary">Andersen</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Andersen Windows & Doors
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              For over 120 years, Andersen has set the standard for window and door innovation, combining timeless design with cutting-edge performance technology.
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
                <p>Andersen is America's most recognized window and door brand, trusted by homeowners and builders for over a century. Their commitment to innovation has resulted in numerous industry firsts, including the first vinyl-clad wood window and the first composite material specifically engineered for windows.</p>

                <p>The Andersen product line spans from the premium A-Series custom wood windows to the value-oriented 100 Series vinyl windows, with the popular 400 Series representing the sweet spot of performance and value. Each line is engineered to meet specific needs while maintaining the craftsmanship Andersen is known for.</p>

                <p>As a certified Andersen contractor, we maintain factory training and have access to their full product line, technical support, and warranty backing. This ensures your Andersen windows are installed to factory specifications, protecting your investment and ensuring decades of performance.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaAward />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Industry Leadership</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Over 120 years of innovation and the most recognized name in the industry.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaShieldAlt />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Fibrex Material</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Proprietary composite combines wood fiber strength with vinyl durability.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaTools />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Comprehensive Warranty</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Industry-leading warranty coverage on materials and components.</p>
                </div>
              </div>

              {/* Professional Installation Partnership */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Professional Installation Partnership
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Factory-Trained Expertise</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Our certified Andersen installers complete rigorous factory training programs to ensure proper installation techniques.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Andersen-certified technicians
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Factory-approved installation methods
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Warranty protection through certification
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Quality Assurance</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Every Andersen installation undergoes rigorous quality checks to ensure optimal performance and longevity.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Precision measurements and templates
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Professional shimming and leveling
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Final inspection and testing
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
                      <span>Fibrex composite material (2x stronger than vinyl)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Extensive product line from value to luxury</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Custom colors and hardware finishes</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>SmartSun glass for climate control</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Factory-built to custom specifications</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Renewable wood sources and recycled content</span>
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
                      Homeowners seeking premium quality
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Historic renovations requiring wood aesthetics
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      New construction with custom specifications
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Long-term homeowners valuing durability
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
              Andersen <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about Andersen windows and doors in Dallas, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Why choose Andersen windows in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Andersen windows in Dallas, Texas are chosen for their superior Fibrex composite material that's twice as strong as traditional vinyl, along with their extensive warranty coverage and factory-backed support. The brand's 120-year history ensures proven performance in Texas climate conditions.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What Andersen products are best for Texas homes?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  For Texas homes in Dallas, we recommend Andersen's 400 Series for the best balance of performance and value, featuring SmartSun glass that controls solar heat gain while maintaining visibility. The A-Series offers premium wood interior options for high-end custom homes.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How does Andersen warranty work in Texas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Andersen warranties in Texas include comprehensive coverage on materials and components, backed by factory support. Our certified installation ensures warranty protection, and we handle all warranty claims for Dallas-area homeowners to maintain seamless service.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Are Andersen windows energy efficient for Dallas climate?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Andersen windows excel in Dallas, Texas energy efficiency with SmartSun glass technology that reduces solar heat gain by up to 65% while maintaining natural light. Their advanced frame materials and weatherstripping meet strict Energy Star requirements for Texas Zone 3.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What's included in professional Andersen installation in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional Andersen installation in Dallas, Texas includes precise measurements, proper framing modifications if needed, factory-approved installation techniques, weatherproofing, and final inspection. Our certified technicians ensure every Andersen product performs to factory specifications.
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
            <div className="bg-white p-8 rounded-lg hover:shadow-lg transition-all duration-300 group border border-gray-100">
              <img
                src="/pella-windows-and-doors-dallas-tx-logo.png"
                alt="Pella Windows & Doors"
                className="h-16 md:h-20 w-auto object-contain mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="text-center">
                <h3 className="text-lg font-black text-secondary-dark uppercase tracking-tighter mb-2">Pella</h3>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">Innovation & Design</p>
                <Link href="/brands/pella" className="text-primary hover:text-primary-dark font-bold uppercase tracking-widest text-xs transition-colors">
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
            <Link href="/quote" className="bg-primary hover:bg-primary-dark text-white font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] transition-all shadow-lg shadow-primary/20">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

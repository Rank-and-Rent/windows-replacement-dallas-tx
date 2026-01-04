import Link from 'next/link';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign, FaAward } from 'react-icons/fa';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-secondary-dark py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 grayscale bg-[url('/windows/special-shape-windows-irving-tx.jpg')] bg-cover bg-center" />
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/brands" className="hover:text-white transition-colors">Brands</Link>
                <span>/</span>
                <span className="text-primary">Marvin</span>
              </nav>
              <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                Marvin Window & Door Replacement in Dallas, TX
              </h1>
              <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
                Marvin Windows and Doors is synonymous with premium quality and custom craftsmanship. Family-owned since 1912, Marvin specializes in made-to-order windows and doors.
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
                  <p>Marvin Windows and Doors is synonymous with premium quality and custom craftsmanship. Family-owned since 1912, Marvin specializes in made-to-order windows and doors that combine timeless design with cutting-edge performance. Their extensive product lines, including Marvin Signature, Marvin Elevate, and Marvin Essential collections, offer unparalleled customization options in materials, finishes, and hardware.</p>

                  <p>For Dallas homeowners seeking luxury, durability, and architectural distinction, Marvin delivers exceptional value. Every Marvin window and door is custom-built to your exact specifications, ensuring perfect fit and finish for your home. Their commitment to quality extends from the initial design consultation through installation and ongoing support.</p>

                  <p>As a certified Marvin dealer, we provide expert consultation on their extensive product lines and ensure proper installation according to Marvin's rigorous standards. This guarantees your Marvin products perform as promised for generations.</p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                    <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                      <FaAward />
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Custom Craftsmanship</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Each Marvin window and door is handcrafted to your exact specifications, ensuring perfect fit and finish.</p>
                  </div>

                  <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                    <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                      <FaShieldAlt />
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Premium Materials</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Marvin uses only the finest materials, including premium woods, advanced composites, and durable hardware.</p>
                  </div>

                  <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                    <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                      <FaTools />
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Expert Installation</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Our certified installers ensure proper fit and function according to Marvin's exacting standards.</p>
                  </div>
                </div>

                {/* What We Install */}
                <div className="bg-white p-8 shadow-sm border border-gray-100 mb-12">
                  <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-6">Marvin Products We Install</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-secondary-dark mb-3">Windows</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Marvin Signature Series</li>
                        <li>• Marvin Elevate Series</li>
                        <li>• Marvin Essential Series</li>
                        <li>• Custom shapes and sizes</li>
                        <li>• Energy-efficient options</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary-dark mb-3">Doors</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Entry doors</li>
                        <li>• Patio doors</li>
                        <li>• French doors</li>
                        <li>• Custom configurations</li>
                        <li>• Specialty hardware</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Why Choose Marvin */}
                <div className="bg-secondary-dark text-white p-8 mb-12">
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-6">Why Choose Marvin?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Family-owned since 1912 with proven heritage</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Unlimited customization options</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Premium materials and craftsmanship</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Energy-efficient performance</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Comprehensive warranty coverage</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Architectural design consultation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Made-to-order quality</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Generational durability</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="space-y-6">
                  <div className="bg-white p-6 border border-gray-100">
                    <h3 className="text-lg font-black text-secondary-dark uppercase tracking-tighter mb-3">
                      How long does Marvin window and door manufacturing take?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Marvin products are made-to-order, so manufacturing typically takes 3-6 weeks depending on complexity and current demand. Custom designs may require additional time for engineering and approval.
                    </p>
                  </div>

                  <div className="bg-white p-6 border border-gray-100">
                    <h3 className="text-lg font-black text-secondary-dark uppercase tracking-tighter mb-3">
                      Are Marvin products more expensive than other brands?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Marvin products represent premium quality and customization, so they are positioned at the higher end of the market. However, their exceptional durability, performance, and warranty make them an excellent long-term investment.
                    </p>
                  </div>

                  <div className="bg-white p-6 border border-gray-100">
                    <h3 className="text-lg font-black text-secondary-dark uppercase tracking-tighter mb-3">
                      Can Marvin products be customized for historic homes?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Absolutely. Marvin offers extensive customization options perfect for historic renovations, including period-specific hardware, divided-lite patterns, and authentic wood species that match original construction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Sidebar */}
              <div className="lg:w-2/5">
                {/* Brand Info Card */}
                <div className="bg-white p-8 shadow-sm border border-gray-100 mb-8 sticky top-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-black text-secondary-dark mb-2">Marvin</div>
                    <div className="text-sm text-primary font-bold uppercase tracking-widest">Since 1912</div>
                  </div>
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    Family-owned manufacturer of premium custom windows and doors, combining traditional craftsmanship with modern performance.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Founded:</span>
                      <span className="font-semibold">1912</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Headquarters:</span>
                      <span className="font-semibold">Warroad, MN</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Warranty:</span>
                      <span className="font-semibold">Limited Lifetime</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Customization:</span>
                      <span className="font-semibold">Unlimited</span>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-primary text-white p-8 text-center">
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-4">
                    Ready for Marvin Quality?
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Discover why Marvin is the choice for discerning Dallas homeowners seeking exceptional windows and doors.
                  </p>
                  <Link href="/contact" className="inline-block bg-white text-primary font-black py-3 px-8 uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors">
                    Get Free Estimate
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
              <Link href="/brands" className="bg-secondary-dark hover:bg-gray-900 text-white font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] transition-all">
                All Brands
              </Link>
              <Link href="/windows" className="border-2 border-secondary-dark text-secondary-dark font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] hover:bg-secondary-dark hover:text-white transition-all">
                Windows
              </Link>
              <Link href="/doors" className="border-2 border-secondary-dark text-secondary-dark font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] hover:bg-secondary-dark hover:text-white transition-all">
                Doors
              </Link>
              <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] transition-all shadow-lg shadow-primary/20">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
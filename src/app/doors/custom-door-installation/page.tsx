import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Custom Door Installation Dallas TX | Made-to-Order for Swiss Avenue, Munger Place, Greenway Parks',
  description: 'Custom doors templated to the original openings on Swiss Avenue, Munger Place, and Greenway Parks homes where stock sizes do not fit. Hand-built in mahogany, oak, or fiberglass with period-correct hardware.',
  alternates: { canonical: 'https://windowreplacementdallastx.com/doors/custom-door-installation' },
};

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/doors/custom-doors-arlington-tx.jpg')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/doors" className="hover:text-white transition-colors">Doors</Link>
              <span>/</span>
              <span className="text-primary">Custom Door Installation</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Custom Door Installation in Dallas, TX
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Made-to-order doors for Swiss Avenue Historic District, Munger Place conservation overlay, and Greenway Parks period homes where the original openings do not match stock sizes. Period-correct profiles, hand-built in wood or fiberglass.
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
                <p>Custom door work is the right path for Dallas homes where stock door sizes do not fit the existing opening, where the architectural style demands period-correct profiles, or where the homeowner wants a unique design statement at the entry. Highland Park, University Park, the Conservation Districts of East Dallas, and the architecturally significant streets of Lakewood, Greenway Parks, and Devonshire are the most common contexts for custom door work because the housing stock predates standardized door sizing and design. Restoration projects, additions, and significant remodels all routinely call for custom doors that match the rest of the home's vocabulary.</p>

                <p>Custom doors come in every material and configuration. We have installed mahogany Tudor entries with leaded-glass divided lite sidelights for Lakewood restoration projects, hand-carved Spanish Colonial entries for Greenway Parks remodels, contemporary pivot doors for Bluffview modern remodels, and custom-shaped barn doors for adaptive reuse projects across East Dallas. The premium custom door manufacturers we work with, including Marvin, Pella Reserve, Andersen E-Series, and select architectural specialty shops, can match virtually any historic profile or contemporary design intent.</p>

                <p>Custom door projects take longer than stock door replacements because of the manufacturing lead time. Standard custom doors run eight to twelve weeks from order, with more elaborate specifications running sixteen weeks or more. We handle the entire process from initial design consultation through final installation, including any architectural review or HOA approval steps required.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaTools />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Bespoke Design</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Custom-crafted to your exact specifications and style preferences.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaHome />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Perfect Fit</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Unusual sizes and shapes that match your unique architectural features.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaDollarSign />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Premium Materials</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Exotic woods, specialty metals, and custom finishes for lasting beauty.</p>
                </div>
              </div>

              {/* Features Section */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Customization Options
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Materials & Finishes</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Premium materials that create distinctive character and beauty.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Exotic woods (mahogany, walnut, teak)
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Specialty metals (bronze, copper)
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Custom stains and finishes
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Design Features</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Architectural details that harmonize with your home's unique features.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Unusual sizes and shapes
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Custom glass designs
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Integrated transoms and sidelights
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Body Sections */}
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">When Custom Doors Are the Right Specification</h3>
                <p>Custom doors are the right answer when the existing opening does not fit standard sizing, when the architectural style demands period-correct profiles, or when the homeowner wants a unique design statement. Pre-war Dallas neighborhoods including Junius Heights, Munger Place, Vickery Place, Hollywood Heights, and Swiss Avenue often have non-standard openings because the original construction predates the dimensional standardization that came with mass production. Highland Park-area Tudors and University Park colonials frequently call for custom mahogany or stained oak doors with specific divided lite patterns to match the original architecture.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Custom Manufacturing Process</h3>
                <p>Custom door projects start with a detailed in-home consultation covering opening dimensions, architectural fit, material selection, glass specification, hardware finish, and any divided lite or carving details. We field-template the existing opening and document any structural considerations affecting the new door installation. The order goes to the manufacturer with detailed specifications, and lead times typically run eight to sixteen weeks depending on complexity. We coordinate scheduling with the homeowner so the new door arrives close to the planned installation date.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Architectural Review and Conservation District Approvals</h3>
                <p>Custom doors on architecturally significant Dallas homes often require architectural review. Conservation Districts including Munger Place, Junius Heights, Swiss Avenue, and Hollywood Heights have design guidelines that govern entry door replacements. Highland Park and University Park architectural review boards typically expect period-appropriate specifications. We navigate these approvals on the homeowner's behalf, prepare the necessary documentation, and have completed projects through every major review process in the city.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Material and Finish Selection</h3>
                <p>Material choice on a custom door drives both aesthetics and long-term performance in the Dallas climate. Solid mahogany is the historically appropriate choice for Tudor and English Revival entries; properly finished, it holds up well to UV exposure when refinishing schedules are followed. White oak suits Craftsman and Prairie homes. Hand-carved Knotty Alder works well on Spanish Colonial and Mediterranean homes in Devonshire and Bluffview. Premium fiberglass with stained finishes delivers most of the wood look with significantly less maintenance burden, which is the right call for many homeowners.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Installation, Hardware, and Long-Term Service</h3>
                <p>Custom door installations require careful templating against the existing opening, custom shimming and structural prep, and detailed exterior trim and brick mold work to match original details. We coordinate with finish carpenters and stucco repair specialists when needed for trim and exterior repair work. Hardware selection on custom entries spans premium handle sets, mortise locks, multi-point security systems, and smart lock integration. We register custom doors with the manufacturer for warranty support and provide long-term service for any future hardware adjustments.</p>
              </div>

              {/* CTA Block */}
              <div className="bg-secondary-dark p-10 text-center">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
                  Ready for Something Unique?
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
                      <span>Made-to-order design collaboration</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Unusual sizes and architectural shapes</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Premium materials and exotic woods</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Custom glass and hardware options</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Integration with unique architecture</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Advanced functionality and security</span>
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
                      Historic homes needing period details
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Unusual architectural features
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Custom sizes and shapes
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Premium materials and finishes
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
              Custom Door <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about custom doors in Dallas, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How long does custom door creation take?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Custom door creation typically takes 6-12 weeks from design approval to delivery, depending on complexity and materials. Simple customizations may be faster, while complex designs with exotic materials require more time. We provide detailed timelines during the design consultation.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Can custom doors match my home's unusual architecture?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, custom doors excel at harmonizing with unique architectural features including arched openings, curved walls, asymmetrical designs, and historic details. We work with manufacturers to create doors that complement rather than compete with these distinctive features.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What premium materials are available for custom doors?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Custom doors offer access to premium materials including exotic woods (mahogany, walnut, teak), specialty metals (bronze, copper), and unique glass options. Custom stains, finishes, and hardware allow unlimited design possibilities to match your vision.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How much do custom doors cost in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Custom door costs in Dallas, TX vary widely based on materials, complexity, and features. Basic custom configurations start around $2,500, while premium exotic wood or highly complex designs can range from $5,000 to $15,000 or more. Each custom door is priced based on your specific requirements.
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
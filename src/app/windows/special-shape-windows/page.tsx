import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowRight, FaCheckCircle, FaTools, FaHome, FaShieldAlt, FaSun, FaSnowflake, FaDollarSign } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Special Shape Windows Dallas TX | Tudor Arches, Spanish Colonial Quatrefoils, Gable Fans',
  description: 'Custom-shape windows that match Highland Park Tudor pointed arches, Greenway Parks Spanish Colonial quatrefoils, and Lakewood gable-end fan transoms. Built to original opening templates.',
  alternates: { canonical: 'https://windowreplacementdallastx.com/windows/special-shape-windows' },
};

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/windows/special-shape-windows-irving-tx.jpg')] bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services/windows" className="hover:text-white transition-colors">Windows</Link>
              <span>/</span>
              <span className="text-primary">Special Shape Windows</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Special Shape Windows
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Pointed-arch transoms for Highland Park Tudors, quatrefoils for Greenway Parks Spanish Colonials, and gable-end fan windows for Lakewood eclectic. Templated to the original opening — no compromise patterns.
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
                <p>Special shape windows are the custom-geometry units that define some of the most recognizable architectural details across Dallas's residential landscape. The eyebrow arches over the front entries of Tudor Revivals in Lakewood and Greenway Parks, the half-round windows in the gable ends of Spanish Colonial homes in Devonshire and Bluffview, the rake-cut trapezoids in Lake Highlands and Casa Linda contemporary remodels, and the round porthole windows that occasionally appear on bungalow attics in Junius Heights and Hollywood Heights all fall into this category. Replacing these units requires custom manufacturing, careful template work, and installation skill that goes beyond standard rectangular replacements.</p>

                <p>Most special shape windows are fixed-glass units because operable hardware cannot accommodate curved or angled geometry. The exception is some larger custom assemblies where a quarter-circle operable casement can be paired with a fixed half-round to provide both architectural geometry and ventilation. Premium manufacturers offer extensive special shape catalogs, and we work primarily with Marvin, Andersen, and Pella for these specifications because their custom departments have the expertise and quality control to deliver units that match historic profiles or contemporary architectural intent.</p>

                <p>Frame material options span vinyl, fiberglass, Fibrex, and wood-clad, but in practice we lean toward fiberglass and wood-clad for special shapes because the tighter dimensional stability holds the unique geometry without the slight movement that vinyl can show in extreme heat. The aesthetic stakes are also higher on a focal-point window, which usually argues for the upgraded material.</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaHome />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Architectural Identity</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Defines your home's unique character and distinguishes it from neighboring properties.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaSun />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Functional Art</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Brings natural light to challenging spaces while serving as interior design focal points.</p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <FaShieldAlt />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-secondary-dark mb-3">Custom Precision</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Manufactured exactly to your specifications for perfect fit and finish.</p>
                </div>
              </div>

              {/* Design & Manufacturing Process */}
              <div className="bg-white p-10 shadow-lg border border-gray-100 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-6 pb-4 border-b border-gray-200">
                  Design & Manufacturing Process
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Custom Engineering</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Each special shape window is individually engineered using advanced CAD technology for structural integrity and performance.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Computer-aided design and modeling
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Structural analysis and testing
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Custom frame fabrication
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary-dark mb-3">Precision Manufacturing</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">State-of-the-art manufacturing ensures perfect geometry and seamless integration with your home's architecture.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        CNC machining for accuracy
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Laminated glass construction
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-primary text-xs" />
                        Quality control inspection
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Body Sections */}
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 mb-12">
                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Where Special Shapes Appear in Dallas Architecture</h3>
                <p>Tudor Revivals around Lakewood, Greenway Parks, and the Highland Park-adjacent blocks of Devonshire often carry eyebrow arches over front entries and pointed-arch transoms above leaded-glass casements. Spanish Colonials in the older neighborhoods of Bluffview and University Park feature half-round and segmental arched windows in gable ends. Craftsman bungalows in Junius Heights, Vickery Place, and Hollywood Heights occasionally include octagonal or round porthole windows on attic dormers. Mid-century ranch homes in Lake Highlands and Casa Linda sometimes have rake-cut trapezoidal windows under cathedral ceilings or in clerestory bands. Each architectural style calls for specific shape vocabulary, and replacement work needs to match the original geometry precisely.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Custom Templating and Field Measurement</h3>
                <p>Standard window replacements rely on rough-opening dimensions; special shapes require physical templates to capture the exact geometry. We make field templates from the existing opening using thin plywood or rigid template material, then transfer those templates to the manufacturer for custom fabrication. The lead time on special shapes typically runs eight to twelve weeks, longer than the four to six weeks for standard rectangular units, because of the custom manufacturing process. We schedule special shape orders early in the project timeline to keep installations on track.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Glass Specification and Energy Performance</h3>
                <p>Fixed-glass special shapes can carry the same Low-E glass packages as standard picture windows, including triple-silver Low-E with low SHGC for west and south elevations across hot Dallas afternoons. Many special shapes serve as gable-end or stairwell daylighting that brings light into otherwise-dark interior spaces, and the right glass package controls solar heat gain without compromising the daylighting function. We routinely specify laminated impact-rated glass on special shapes facing west or southwest exposures across hail-prone Dallas neighborhoods.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Installation Approach and Structural Considerations</h3>
                <p>Special shape installations sometimes involve structural modifications to the rough opening, particularly when replacing original wood-frame openings with units that have slightly different overall dimensions. We coordinate with structural framing where required and handle exterior trim, flashing, and waterproofing details that prevent water intrusion at the unique perimeter geometry. Round and arched windows have unique flashing requirements that benefit from custom-fabricated metal flashing or self-adhered membrane systems.</p>

                <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Conservation District and HOA Considerations</h3>
                <p>Special shape windows on historic Dallas homes often face architectural review during replacement. Conservation districts including Munger Place, Junius Heights, Swiss Avenue, and Hollywood Heights all have design guidelines that govern eyebrow arches, half-rounds, and similar period-correct details. Highland Park and University Park architectural review boards typically expect special shapes to match the original profile and divided lite pattern. We navigate these approvals on the homeowner's behalf and have completed projects through every major review process in the city.</p>
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
                      <span>Unlimited custom geometric possibilities</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Computer-aided design and precision manufacturing</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Low-E glass in any configuration</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Optional decorative grilles in custom patterns</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Available in all frame materials and colors</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Energy-efficient despite unique shapes</span>
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
                      Gable ends and cathedral ceilings
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Foyers and two-story entryways
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Stairwell landings
                    </li>
                    <li className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-light">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      Craftsman, Victorian, and custom homes
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
              Special Shape Window <span className="text-primary italic">FAQ</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12 text-center max-w-2xl mx-auto">
              Answers to common questions about special shape windows in Dallas, Texas
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  What types of special shapes are available for Dallas homes?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Special shape windows in Dallas, Texas include circles, half-rounds, ellipses, octagons, triangles, trapezoids, and completely custom geometric designs. We work with architects and homeowners to create unique shapes that complement Dallas-area architectural styles from contemporary to historic restorations.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Are special shape windows more expensive than standard windows in Dallas?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Special shape windows in Dallas, Texas typically cost 1.5-3 times more than standard rectangular windows due to custom engineering, specialized manufacturing, and complex installation requirements. However, they create distinctive architectural features that significantly enhance property value in the competitive Dallas real estate market.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Can special shape windows include operable sections in Texas climate?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Some special shape windows in Dallas, Texas can incorporate operable sections, though most maintain fixed designs to preserve geometric integrity. When ventilation is required, we can design hybrid configurations that combine fixed special shapes with adjacent operable windows for optimal Texas climate performance.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  How long does it take to manufacture special shape windows for Dallas projects?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Special shape windows in Dallas, Texas typically require 4-8 weeks for manufacturing after final design approval. This includes custom engineering, fabrication, and quality testing. Rush orders may be available for time-sensitive Dallas-area construction projects with appropriate premium pricing.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
                  Do special shape windows meet Dallas building codes and energy standards?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Special shape windows in Dallas, Texas are engineered to meet all local building codes and energy efficiency standards. We ensure compliance with Dallas-area requirements for structural integrity, thermal performance, and safety while maintaining the unique geometric designs that make these windows special.
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
            <Link href="/services/windows" className="bg-secondary-dark hover:bg-gray-900 text-white font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] transition-all">
              All Windows
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

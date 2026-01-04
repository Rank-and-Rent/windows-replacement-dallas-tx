import Link from 'next/link';
import { FaArrowRight, FaAward } from 'react-icons/fa';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export default function BrandsIndex() {
  const brands = [
    { 
      name: "Andersen", 
      slug: "andersen-windows-doors", 
      tagline: "Architectural Excellence",
      desc: "Unmatched durability and timeless design. Andersen is one of the most trusted names in the window industry.",
      img: "/windows/bay-bow-windows-arlington-tx.jpg"
    },
    { 
      name: "Pella", 
      slug: "pella-windows-doors", 
      tagline: "Innovation & Performance",
      desc: "Leading the way in energy efficiency and innovative features like between-the-glass blinds.",
      img: "/locations/window-replacement-dallas-tx-4.jpg"
    },
    {
      name: "JELD-WEN",
      slug: "jeld-wen-windows-doors",
      tagline: "Reliability for Every Home",
      desc: "Offering a diverse range of styles and materials that provide exceptional value and reliability.",
      img: "/windows/picture-windows-plano-tx.jpg"
    },
    {
      name: "Marvin",
      slug: "marvin-windows-doors",
      tagline: "Custom Craftsmanship",
      desc: "Family-owned since 1912, Marvin specializes in made-to-order windows and doors that combine timeless design with cutting-edge performance.",
      img: "/windows/picture-windows-plano-tx.jpg"
    }
  ];

  return (
    <>
      <Header />
      <Breadcrumbs items={[{ label: 'Brands', href: '/brands' }]} />
      <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-24 relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4 block">World-Class Partners</span>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
            The Industry's <span className="text-primary italic">Finest</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
            We exclusively partner with top-tier manufacturers to ensure every installation meets the highest standards of beauty and durability.
          </p>
        </div>
      </section>

      {/* Brand Logos Showcase */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-secondary-dark uppercase tracking-tighter mb-4">
              Our Premium <span className="text-primary italic">Brand Partnerships</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm max-w-2xl mx-auto">
              We exclusively install industry-leading brands known for quality, innovation, and lasting performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="bg-gray-50 p-8 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 group border border-gray-100">
              <img
                src="/andersen-windows-and-doors-dallas-tx-logo.png"
                alt="Andersen Windows & Doors"
                className="h-16 md:h-20 w-auto object-contain mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="text-center">
                <h3 className="text-lg font-black text-secondary-dark uppercase tracking-tighter mb-2">Andersen</h3>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Architectural Excellence</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 group border border-gray-100">
              <img
                src="/jeld-wen-windows-and-doors-dallas-tx-logo.png"
                alt="Jeld-Wen Windows & Doors"
                className="h-16 md:h-20 w-auto object-contain mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="text-center">
                <h3 className="text-lg font-black text-secondary-dark uppercase tracking-tighter mb-2">Jeld-Wen</h3>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Reliable Performance</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 group border border-gray-100">
              <img
                src="/marvin-windows-and-doors-dallas-tx-logo.png"
                alt="Marvin Windows & Doors"
                className="h-16 md:h-20 w-auto object-contain mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="text-center">
                <h3 className="text-lg font-black text-secondary-dark uppercase tracking-tighter mb-2">Marvin</h3>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Luxury Craftsmanship</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 group border border-gray-100">
              <img
                src="/pella-windows-and-doors-dallas-tx-logo.png"
                alt="Pella Windows & Doors"
                className="h-16 md:h-20 w-auto object-contain mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="text-center">
                <h3 className="text-lg font-black text-secondary-dark uppercase tracking-tighter mb-2">Pella</h3>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Innovation & Design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-24">
        <div className="container">
          <div className="space-y-32">
            {brands.map((brand, idx) => (
              <div key={brand.name} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 relative group overflow-hidden shadow-2xl">
                  <img 
                    src={brand.img} 
                    alt={brand.name} 
                    className="w-full aspect-video lg:aspect-[4/3] object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                  />
                  <div className="absolute top-8 left-8 bg-white/95 p-6 shadow-xl border-l-4 border-primary">
                    <span className="text-3xl font-black text-secondary-dark uppercase tracking-tighter">{brand.name}</span>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block">{brand.tagline}</span>
                  <h2 className="text-4xl md:text-6xl font-black text-secondary-dark uppercase tracking-tighter leading-[0.9] mb-8">
                    Exceptional<br/><span className="text-primary italic">{brand.name}</span> Quality
                  </h2>
                  <p className="text-lg text-gray-500 font-medium leading-relaxed mb-10">
                    {brand.desc} Our factory-trained technicians are certified in the latest {brand.name} installation techniques to guarantee performance.
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <Link href={`/brands/${brand.slug}`} className="btn-primary">
                      Explore {brand.name} <FaArrowRight className="text-[10px]" />
                    </Link>
                    <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-secondary-dark">
                      <FaAward className="text-primary text-xl" /> Certified Contractor
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-primary py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">
            Can't Decide on a Brand?
          </h2>
          <p className="text-white/80 font-bold uppercase tracking-widest text-sm mb-10 max-w-xl mx-auto">
            Our experts can help you choose the perfect material and style for your specific home and budget.
          </p>
          <Link href="/quote" className="inline-block bg-secondary-dark text-white font-black py-5 px-12 uppercase tracking-[0.2em] text-[11px] shadow-2xl hover:bg-gray-900 transition-colors">
            Speak With a Specialist
          </Link>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}

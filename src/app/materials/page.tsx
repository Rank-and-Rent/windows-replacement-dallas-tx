import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export default function MaterialsIndex() {
  const materialTypes = [
    { title: "Vinyl Windows", slug: "vinyl-windows", desc: "Low-maintenance vinyl windows with superior energy efficiency and durability.", image: "/window-types/vinyl-dallas-tx.jpg" },
    { title: "Aluminum Windows", slug: "aluminum-windows", desc: "Durable aluminum windows with modern thermal efficiency and sleek contemporary styling.", image: "/window-types/aluminum-dallas-tx.jpg" },
    { title: "Fibrex Windows", slug: "fibrex-windows", desc: "Andersen's premium composite material combining wood-like beauty with advanced durability.", image: "/window-types/fibrex-dallas-tx.jpg" },
    { title: "Fiberglass Windows", slug: "fiberglass-windows", desc: "Ultimate strength and insulation with authentic wood-like appearance.", image: "/window-types/fiberglass-dallas-tx.jpg" },
    { title: "Wood Clad Windows", slug: "wood-clad-windows", desc: "Authentic wood interiors with weather-resistant exterior protection.", image: "/window-types/wood-clad-dallas-tx.jpg" },
    { title: "Wood Windows", slug: "wood-windows", desc: "Traditional wood windows with natural beauty and superior insulation.", image: "/window-types/wood-dallas-tx.jpg" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/window-types/vinyl-dallas-tx.jpg')] bg-cover bg-center" />
        <div className="container relative z-10 text-center">
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4 block">Premium Materials</span>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
            Window <span className="text-primary italic">Materials</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Choose from premium window materials designed for Dallas's climate. Each material offers unique benefits in terms of durability, energy efficiency, and aesthetic appeal.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materialTypes.map((item, idx) => (
              <Link
                key={idx}
                href={`/windows/${item.slug}`}
                className="bg-white group hover:shadow-2xl transition-all duration-500 relative overflow-hidden border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.title} in Dallas TX`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="text-sm font-black text-white uppercase tracking-widest bg-primary px-3 py-1">0{idx + 1}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed mb-6">{item.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-secondary-dark group-hover:text-primary transition-colors">
                    Learn More <FaArrowRight className="text-xs group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="bg-white p-12 lg:p-20 shadow-2xl flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black text-secondary-dark uppercase tracking-tighter leading-[0.9] mb-8">
                Why Choose Premium<br/><span className="text-primary italic">Materials?</span>
              </h2>
              <ul className="space-y-4">
                {['Energy Star® Certified', 'Weather-Resistant', 'Low Maintenance', 'Lifetime Warranty'].map((point) => (
                  <li key={point} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-secondary-light">
                    <FaCheckCircle className="text-primary" /> {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <p className="text-gray-500 font-medium leading-relaxed mb-8">
                Our selection process focuses on durability, energy efficiency, and aesthetic appeal. Every material we offer is tested for Dallas's extreme weather conditions and backed by comprehensive warranties.
              </p>
              <Link href="/quote" className="btn-primary inline-flex">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
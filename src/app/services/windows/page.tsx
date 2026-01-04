import Link from 'next/link';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export default function WindowsIndex() {
  const windowTypes = [
    { title: "Double-Hung Windows", slug: "double-hung-windows", desc: "Classic versatility with two operable sashes." },
    { title: "Single-Hung Windows", slug: "single-hung-windows", desc: "Traditional style with one operable bottom sash." },
    { title: "Awning Windows", slug: "awning-windows", desc: "Hinged at the top, perfect for ventilation during rain." },
    { title: "Casement Windows", slug: "casement-windows", desc: "Hinged on the side for maximum airflow and views." },
    { title: "Sliding Windows", slug: "sliding-windows", desc: "Smooth horizontal operation for modern spaces." },
    { title: "Picture Windows", slug: "picture-windows", desc: "Fixed windows designed for maximum light and views." },
    { title: "Bay & Bow Windows", slug: "bay-and-bow-windows", desc: "Dramatic architectural features that expand space." },
    { title: "Special Shape Windows", slug: "special-shape-windows", desc: "Custom geometric designs for unique architectural needs." }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/windows/double-hung-windows-garland-tx.jpg')] bg-cover bg-center" />
        <div className="container relative z-10 text-center">
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4 block">Our Expertise</span>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
            Replacement <span className="text-primary italic">Windows</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Enhance your home's energy efficiency and curb appeal with our premium range of window solutions, expertly installed for Texas homeowners.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            {windowTypes.map((item, idx) => (
              <Link 
                key={idx} 
                href={`/services/windows/${item.slug}`}
                className="bg-white p-12 group hover:bg-secondary-dark transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-0 bg-primary group-hover:h-full transition-all duration-500" />
                <span className="text-sm font-black text-primary uppercase tracking-widest mb-6 block">0{idx + 1}</span>
                <h3 className="text-3xl font-black text-secondary-dark uppercase tracking-tighter mb-4 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-400 font-medium leading-relaxed mb-8">{item.desc}</p>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-secondary-dark group-hover:text-primary transition-colors">
                  Learn More <FaArrowRight className="text-[8px] group-hover:translate-x-2 transition-transform" />
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
                Why Signature<br/><span className="text-primary italic">Windows?</span>
              </h2>
              <ul className="space-y-4">
                {['Energy Star® Certified', 'Expert Local Installation', 'Lifetime Warranty', 'Premium Materials'].map((point) => (
                  <li key={point} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-secondary-light">
                    <FaCheckCircle className="text-primary" /> {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <p className="text-gray-500 font-medium leading-relaxed mb-8">
                Our selection process focuses on durability, energy efficiency, and aesthetic appeal. Every window we install is measured precisely to ensure a perfect fit for your home.
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

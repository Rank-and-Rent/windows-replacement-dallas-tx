import Link from 'next/link';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export default function DoorsIndex() {
  const doorTypes = [
    { title: "Bifold Doors", slug: "bifold-doors", desc: "Elegant folding glass walls that seamlessly connect indoor and outdoor spaces." },
    { title: "Front Entry Doors", slug: "front-entry-doors", desc: "Make a statement with secure and beautiful premium entryways." },
    { title: "Sliding Patio Doors", slug: "sliding-patio-doors", desc: "Space-saving design with maximum light and smooth operation." },
    { title: "French Patio Doors", slug: "french-hinged-patio-doors", desc: "Classic hinged design for an elegant, high-end architectural look." },
    { title: "Multi-Slide Doors", slug: "multi-slide-doors", desc: "Expansive glass panels that slide into pockets for wide openings." }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/doors/entry-doors-frisco-tx.webp')] bg-cover bg-center" />
        <div className="container relative z-10 text-center">
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4 block">Premium Entryways</span>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
            Replacement <span className="text-primary italic">Doors</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
            From grand entryways to massive sliding glass walls, discover doors that combine uncompromising security with stunning design.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            {doorTypes.map((item, idx) => (
              <Link 
                key={idx} 
                href={`/services/doors/${item.slug}`}
                className="bg-white p-12 group hover:bg-secondary-dark transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute bottom-0 right-0 w-0 h-2 bg-primary group-hover:w-full transition-all duration-500" />
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
                The Signature<br/><span className="text-primary italic">Door Standard</span>
              </h2>
              <ul className="space-y-4">
                {['High-Security Locking Systems', 'Precision Weather Stripping', 'Energy-Efficient Glass', 'Custom Hardware Options'].map((point) => (
                  <li key={point} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-secondary-light">
                    <FaCheckCircle className="text-primary" /> {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <p className="text-gray-500 font-medium leading-relaxed mb-8">
                Our doors are engineered to withstand the Texas elements while providing a stunning first impression and effortless operation for your home.
              </p>
              <Link href="/quote" className="btn-primary inline-flex">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

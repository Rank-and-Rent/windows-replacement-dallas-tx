import { FaAward, FaTools, FaUserCheck, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

export default function ValueProps() {
  const values = [
    {
      icon: <FaAward />,
      title: "Certified Contractor",
      desc: "Officially recognized by top manufacturers like Pella and Andersen for our expertise and quality standards."
    },
    {
      icon: <FaTools />,
      title: "Expert Installation",
      desc: "Our factory-trained technicians ensure precise installation for maximum energy efficiency and durability."
    },
    {
      icon: <FaUserCheck />,
      title: "Unmatched Quality",
      desc: "Dedicated to delivering exceptional service and value to homeowners across the DFW metroplex."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Structural Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gray-100" />
      
      <div className="container">
        <div className="text-center mb-20">
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4 block">Our Commitment</span>
          <h2 className="text-5xl md:text-6xl font-black text-secondary-dark uppercase tracking-tighter leading-none mb-6">
            The Signature <span className="text-primary italic">Standard</span>
          </h2>
          <div className="w-20 h-1 bg-gray-100 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-12 lg:p-16 hover:bg-gray-50 transition-colors group">
              <div className="w-16 h-16 bg-white border border-gray-100 shadow-sm flex items-center justify-center text-2xl text-primary mb-10 group-hover:scale-110 transition-transform">
                {v.icon}
              </div>
              <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">{v.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed mb-8">
                {v.desc}
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-secondary-dark hover:text-primary transition-colors">
                Learn More <FaChevronRight className="text-[8px]" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-20 bg-secondary-dark p-12 lg:p-20 text-center relative group">
          <div className="absolute inset-0 bg-[url('/locations/window-replacement-dallas-tx-3.webp')] bg-cover bg-center opacity-5 grayscale" />
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Proud to bring your home<br/>
              <span className="text-primary italic">The Finest</span> Windows and Doors
            </h3>
            <Link href="/quote" className="inline-block bg-primary hover:bg-primary-dark text-white font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] shadow-2xl shadow-primary/40 transition-all active:scale-95">
              Request Your Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

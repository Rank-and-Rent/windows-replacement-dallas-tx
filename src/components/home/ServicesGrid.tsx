import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

export default function ServicesGrid() {
  const windowTypes = [
    "Double-Hung Windows", "Single-Hung Windows", "Awning Windows", "Casement Windows",
    "Sliding Windows", "Picture Windows", "Bay & Bow Windows", "Special Shape Windows"
  ];

  const doorTypes = [
    "Bifold Doors", "Front Entry Doors", "Sliding Patio Doors", 
    "French/Hinged Patio Doors", "Multi-Slide Doors"
  ];

  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        
        {/* Windows Service Section - Dark Theme like Screenshot 2/3 style */}
        <div className="flex-1 relative group overflow-hidden bg-secondary-dark flex items-center justify-center p-12 lg:p-24">
          <div className="absolute inset-0 z-0 bg-[url('/windows/double-hung-windows-garland-tx.jpg')] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-700 grayscale" />
          <div className="absolute inset-0 bg-secondary-dark/60 group-hover:bg-secondary-dark/40 transition-colors duration-500 z-10" />
          
          <div className="relative z-20 text-center max-w-lg">
            <span className="inline-block bg-primary px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.4em] text-white mb-6">
              Expert Solutions
            </span>
            <h2 className="text-6xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-10">
              Windows
            </h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-left mb-12">
              {windowTypes.slice(0, 6).map((type) => (
                <div key={type} className="text-[10px] font-extrabold uppercase tracking-widest text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" /> {type}
                </div>
              ))}
            </div>
            <Link href="/services/windows" className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-white border-b-2 border-primary pb-2 hover:text-primary transition-colors">
              Explore Window Services <FaChevronRight className="text-[9px]" />
            </Link>
          </div>
        </div>

        {/* Doors Service Section - High Contrast White style */}
        <div className="flex-1 relative group overflow-hidden bg-white flex items-center justify-center p-12 lg:p-24 border-l border-gray-100">
          <div className="absolute inset-0 z-0 bg-[url('/doors/entry-doors-frisco-tx.webp')] bg-cover bg-center opacity-10 group-hover:scale-105 transition-transform duration-700 grayscale" />
          
          <div className="relative z-20 text-center max-w-lg">
            <span className="inline-block bg-secondary-dark px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.4em] text-white mb-6">
              Premium Entryways
            </span>
            <h2 className="text-6xl md:text-7xl font-black text-secondary-dark uppercase tracking-tighter leading-none mb-10">
              Doors
            </h2>
            <div className="grid grid-cols-1 gap-y-3 text-center mb-12">
              {doorTypes.map((type) => (
                <div key={type} className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary-light">
                  {type}
                </div>
              ))}
            </div>
            <Link href="/services/doors" className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-secondary-dark border-b-2 border-secondary-dark pb-2 hover:text-primary hover:border-primary transition-all">
              View Door Collections <FaChevronRight className="text-[9px]" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

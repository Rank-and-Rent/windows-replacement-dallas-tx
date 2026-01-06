import Link from 'next/link';
import Image from 'next/image';

export default function MaterialsSection() {
  const materialTypes = [
    {
      name: 'Vinyl',
      desc: 'Low-maintenance with superior energy efficiency',
      route: '/windows/vinyl-windows',
      image: '/window-types/vinyl-dallas-tx.jpg'
    },
    {
      name: 'Aluminum',
      desc: 'Exceptional strength with thermal breaks',
      route: '/windows/aluminum-windows',
      image: '/window-types/aluminum-dallas-tx.jpg'
    },
    {
      name: 'Fibrex',
      desc: 'Wood-like beauty with composite strength',
      route: '/windows/fibrex-windows',
      image: '/window-types/fibrex-dallas-tx.jpg'
    },
    {
      name: 'Fiberglass',
      desc: 'Ultimate durability and insulation',
      route: '/windows/fiberglass-windows',
      image: '/window-types/fiberglass-dallas-tx.jpg'
    },
    {
      name: 'Wood Clad',
      desc: 'Traditional wood with modern protection',
      route: '/windows/wood-clad-windows',
      image: '/window-types/wood-clad-dallas-tx.jpg'
    },
    {
      name: 'Wood',
      desc: 'Natural beauty with superior insulation',
      route: '/windows/wood-windows',
      image: '/window-types/wood-dallas-tx.jpg'
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block">Premium Materials</span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary-dark uppercase tracking-tighter leading-none mb-8">
            Window <span className="text-primary italic">Materials</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Choose from premium window materials designed for Dallas climate conditions.
            Each material offers unique benefits in terms of durability, energy efficiency, and aesthetic appeal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materialTypes.map((item, index) => (
            <Link
              key={index}
              href={item.route}
              className="group block"
            >
              <div className="bg-white hover:bg-gray-50 border border-gray-200 hover:border-primary/30 transition-all group-hover:shadow-xl overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.name} windows in Dallas TX`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  <span className="absolute top-4 left-4 text-xl font-black text-white bg-primary/90 px-3 py-1 rounded">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 font-medium leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-secondary-dark group-hover:text-primary transition-colors">
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/materials"
            className="inline-block bg-secondary-dark hover:bg-gray-900 text-white font-black py-4 px-8 uppercase tracking-[0.3em] text-[11px] transition-all shadow-lg"
          >
            View All Materials
          </Link>
        </div>
      </div>
    </section>
  );
}
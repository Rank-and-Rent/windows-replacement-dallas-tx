import Link from 'next/link';
import Image from 'next/image';

export default function WindowTypesSection() {
  const windowTypes = [
    {
      name: 'Double-Hung',
      desc: 'Classic vertical sliding design',
      route: '/windows/double-hung-windows',
      image: '/windows/double-hung-windows-frisco-tx.jpg'
    },
    {
      name: 'Single-Hung',
      desc: 'Timeless and cost-effective',
      route: '/windows/single-hung-windows',
      image: '/windows/single-hung-windows-plano-tx.jpg'
    },
    {
      name: 'Casement',
      desc: 'Full ventilation with crank operation',
      route: '/windows/casement-windows',
      image: '/windows/casement-windows-frisco-tx.webp'
    },
    {
      name: 'Awning',
      desc: 'Weather-resistant top-hinged design',
      route: '/windows/awning-windows',
      image: '/windows/awning-windows-arlington-tx.jpg'
    },
    {
      name: 'Sliding',
      desc: 'Contemporary horizontal operation',
      route: '/windows/sliding-windows',
      image: '/windows/sliding-windows-irving-tx.webp'
    },
    {
      name: 'Picture',
      desc: 'Maximize light and views',
      route: '/windows/picture-windows',
      image: '/windows/picture-windows-plano-tx.jpg'
    },
    {
      name: 'Bay & Bow',
      desc: 'Elegant projecting elegance',
      route: '/windows/bay-bow-windows',
      image: '/windows/bay-bow-windows-arlington-tx.jpg'
    },
    {
      name: 'Specialty',
      desc: 'Custom architectural shapes',
      route: '/windows/special-shape-windows',
      image: '/windows/special-shape-windows-irving-tx.jpg'
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block">Our Products</span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary-dark uppercase tracking-tighter leading-none mb-8">
            Premium Window <span className="text-primary italic">Styles</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Every home tells a story. Choose from our comprehensive selection of window styles,
            each engineered for North Texas climate conditions and available from our trusted brand partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {windowTypes.map((item, index) => (
            <Link
              key={index}
              href={item.route}
              className="group block"
            >
              <div className="bg-gray-50 hover:bg-white border border-gray-100 hover:border-primary/20 transition-all group-hover:shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.name} windows in Dallas TX`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  <span className="absolute top-4 left-4 text-2xl font-black text-white bg-primary/90 px-2 py-1 rounded">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-secondary-dark uppercase tracking-tighter mb-3 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 font-medium leading-relaxed mb-4">
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
      </div>
    </section>
  );
}
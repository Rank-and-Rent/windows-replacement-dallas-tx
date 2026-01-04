import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

export default function BrandsSection() {
  const brands = [
    {
      name: "Pella",
      tag: "Certified Contractor",
      desc: "Pella windows and doors represent the pinnacle of quality design and engineering. From enhancing your home's energy efficiency to providing protection from inclement weather.",
      img: "/locations/window-replacement-dallas-tx-4.jpg",
      logo: "/pella-windows-and-doors-dallas-tx-logo.png"
    },
    {
      name: "Andersen",
      tag: "Premium Partner",
      desc: "Experience unmatched durability and architectural beauty with Andersen's comprehensive range of replacement solutions tailored for Texas homes.",
      img: "/windows/casement-windows-frisco-tx.webp",
      logo: "/andersen-windows-and-doors-dallas-tx-logo.png"
    },
    {
      name: "JELD-WEN",
      tag: "Quality Solutions",
      desc: "JELD-WEN delivers reliable, affordable window and door solutions with advanced energy-efficient technology and AuraLast wood protection for lasting performance.",
      img: "/brands/jeld-wen-windows-plano-tx.jpg",
      logo: "/jeld-wen-windows-and-doors-dallas-tx-logo.png"
    },
    {
      name: "Marvin",
      tag: "Luxury Craftsmanship",
      desc: "Marvin combines timeless design with cutting-edge performance, offering unparalleled customization and architectural distinction for discerning Dallas homeowners.",
      img: "/brands/marvin-windows-irving-tx.avif",
      logo: "/marvin-windows-and-doors-dallas-tx-logo.png"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          <h2 className="text-5xl md:text-6xl font-black text-secondary-dark uppercase tracking-tighter leading-[0.9]">
            A Leader in<br/>
            <span className="text-primary italic">Innovation</span>
          </h2>
        </div>

        {/* Brands Grid - 2x2 Layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

          {brands.map((brand, index) => (
            <div key={brand.name} className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">

              {/* Brand Header with Logo */}
              <div className="bg-secondary-dark p-6 flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-none">
                    {brand.name}
                  </h3>
                  <span className="bg-primary text-[8px] font-black text-white px-2 py-0.5 uppercase tracking-widest mt-1 inline-block">
                    {brand.tag}
                  </span>
                </div>
              </div>

              {/* Brand Content */}
              <div className="p-6">
                <p className="text-gray-600 font-medium leading-relaxed mb-6">
                  {brand.desc}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Link href="/quote" className="flex-1 bg-primary text-white text-sm font-black uppercase tracking-widest py-3 px-4 text-center shadow-lg shadow-primary/10 transition-all hover:bg-primary-dark">
                    Get a Free Quote
                  </Link>
                  <Link href={`/brands/${brand.name === 'JELD-WEN' ? 'jeld-wen-windows-doors' : brand.name === 'Marvin' ? 'marvin-windows-doors' : brand.name.toLowerCase()}-windows-doors`} className="flex-1 bg-gray-200 text-secondary-dark text-sm font-black uppercase tracking-widest py-3 px-4 text-center transition-all hover:bg-gray-300">
                    More About {brand.name}
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

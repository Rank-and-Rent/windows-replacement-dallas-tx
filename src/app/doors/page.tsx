import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export const metadata = {
  title: 'Door Installation Services Dallas TX | Entry & Patio Doors',
  description: 'Professional door installation in Dallas, TX. Entry doors, patio doors, French doors, sliding glass doors. Andersen, Pella, JELD-WEN, Marvin. Free estimates.',
}

export default function DoorsIndexPage() {
  const doorTypes = [
    { title: "Entry Doors", slug: "entry-door-installation", desc: "Make a lasting first impression with premium entry doors that combine security, beauty, and energy efficiency.", image: "/doors/entry-doors-frisco-tx.webp" },
    { title: "Patio Doors", slug: "patio-door-installation", desc: "Seamlessly connect your indoor and outdoor living spaces with sliding or hinged patio doors.", image: "/doors/patio-doors-frisco-tx.jpg" },
    { title: "French Doors", slug: "french-door-installation", desc: "Add timeless elegance with classic French doors featuring beautiful glass panels and traditional styling.", image: "/doors/french-doors-irving-tx.png" },
    { title: "Sliding Glass Doors", slug: "sliding-glass-door-installation", desc: "Maximize space and light with contemporary sliding glass doors that glide effortlessly.", image: "/doors/sliding-glass-doors-plano-tx.jpg" },
    { title: "Storm Doors", slug: "storm-door-installation", desc: "Protect your entry door and improve energy efficiency with durable storm doors.", image: "/doors/storm-doors-plano-tx.jpg" },
    { title: "Custom Doors", slug: "custom-door-installation", desc: "Create a unique statement with fully custom doors designed to your exact specifications.", image: "/doors/custom-doors-irving-tx.webp" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/doors/entry-doors-frisco-tx.webp')] bg-cover bg-center" />
        <div className="container relative z-10 text-center">
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4 block">Our Expertise</span>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
            Replacement <span className="text-primary italic">Doors</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Transform your home with beautiful, energy-efficient doors that enhance security, curb appeal, and comfort for Texas homeowners.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doorTypes.map((item, idx) => (
              <Link
                key={idx}
                href={`/doors/${item.slug}`}
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
                Why Signature<br/><span className="text-primary italic">Doors?</span>
              </h2>
              <ul className="space-y-4">
                {['Premium Materials', 'Expert Installation', 'Energy Efficient', 'Security Enhanced'].map((point) => (
                  <li key={point} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-secondary-light">
                    <FaCheckCircle className="text-primary" /> {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <p className="text-gray-500 font-medium leading-relaxed mb-8">
                Our door selection focuses on quality craftsmanship, security features, and aesthetic appeal. Every door we install is measured precisely to ensure perfect fit and optimal performance for your Dallas home.
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
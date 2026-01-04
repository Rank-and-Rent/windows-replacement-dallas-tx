import Link from 'next/link';
import { FaCheckCircle, FaAward, FaTools, FaUserShield } from 'react-icons/fa';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export default function AboutPage() {
  return (
    <>
      <Header />
      <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />
      <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/locations/window-replacement-dallas-tx-4.jpg')] bg-cover bg-center" />
        <div className="container relative z-10 text-center">
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4 block">Our Story</span>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
            Decades of <span className="text-primary italic">Excellence</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed">
            Signature Windows and Doors was founded on a simple principle: provide Texas homeowners with the highest quality products and unparalleled craftsmanship.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="w-16 h-1 bg-primary mb-8" />
              <h2 className="text-4xl md:text-6xl font-black text-secondary-dark uppercase tracking-tighter leading-[0.9] mb-10">
                Crafting Better<br/>Homes Through<br/><span className="text-primary italic">Integrity</span>
              </h2>
              <div className="prose prose-lg text-gray-500 max-w-none">
                <p className="mb-6">
                  With deep roots in the Dallas-Fort Worth community, we have spent years refining our process to meet the specific architectural and environmental demands of North Texas. We don't just sell windows and doors; we provide long-term solutions that enhance the structural integrity and aesthetic value of your home.
                </p>
                <p className="mb-8">
                  Our extensive experience allows us to navigate complex installations that others might avoid. From historic restorations to modern custom builds, we bring a level of precision and attention to detail that is rare in the industry today.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "No Sub-Contractors",
                    "Factory-Trained Installers",
                    "Premium Product Lines",
                    "Transparent Pricing"
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-secondary-dark">
                      <FaCheckCircle className="text-primary text-lg" /> {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="aspect-square bg-gray-100 shadow-2xl overflow-hidden grayscale-[20%] group">
                  <img 
                    src="/locations/window-replacement-dallas-tx-4.jpg" 
                    alt="Workmanship" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
               </div>
               {/* Accent Box */}
               <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 border-8 border-primary -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Experience Section */}
      <section className="py-24 bg-secondary-dark text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div>
              <div className="text-5xl lg:text-7xl font-black text-primary mb-4 uppercase tracking-tighter italic">Countless</div>
              <div className="text-xs font-black uppercase tracking-[0.4em] text-gray-400">Homes Transformed</div>
            </div>
            <div>
              <div className="text-5xl lg:text-7xl font-black text-primary mb-4 uppercase tracking-tighter italic">Vast</div>
              <div className="text-xs font-black uppercase tracking-[0.4em] text-gray-400">Industry Expertise</div>
            </div>
            <div>
              <div className="text-5xl lg:text-7xl font-black text-primary mb-4 uppercase tracking-tighter italic">Local</div>
              <div className="text-xs font-black uppercase tracking-[0.4em] text-gray-400">Texas Ownership</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            <div className="bg-white p-12 lg:p-16 text-center group transition-colors hover:bg-gray-50">
              <FaAward className="text-5xl text-primary mx-auto mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Certified Masters</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                We maintain the highest levels of certification from industry giants like Pella and Andersen, ensuring your warranty is always protected.
              </p>
            </div>
            <div className="bg-white p-12 lg:p-16 text-center group transition-colors hover:bg-gray-50">
              <FaTools className="text-5xl text-primary mx-auto mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Precision First</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                Our measurement and installation process is rigorous, eliminating drafts and ensuring effortless operation for decades.
              </p>
            </div>
            <div className="bg-white p-12 lg:p-16 text-center group transition-colors hover:bg-gray-50">
              <FaUserShield className="text-5xl text-primary mx-auto mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-secondary-dark uppercase tracking-tighter mb-4">Client Protection</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                Fully licensed, bonded, and insured. We treat your home with the same respect we would our own—with no exceptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-24 text-center">
        <div className="container">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-10">
            Experience the Signature<br/><span className="text-secondary-dark italic">Difference</span> Today
          </h2>
          <Link href="/contact" className="inline-block bg-secondary-dark hover:bg-gray-900 text-white font-black py-5 px-12 uppercase tracking-[0.3em] text-[11px] shadow-2xl transition-all active:scale-95">
            Get Your Free Estimate
          </Link>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}

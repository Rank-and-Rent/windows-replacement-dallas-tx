import WindowsSection from '@/components/windows-section';
import MaterialsSection from '@/components/materials-section';
import ContactSection from '@/components/contact-section';

export const metadata = {
  title: 'Window Types & Materials Dallas TX | Replacement Windows',
  description: 'Explore all window types and materials in Dallas, TX. Double-hung, casement, sliding, vinyl, aluminum, Fibrex, fiberglass, wood clad, and wood windows. Urban-rated for cosmopolitan living.',
  keywords: 'window types Dallas TX, window materials, window styles Dallas, replacement windows Dallas',
}

export default function WindowsIndexPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary-dark py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale bg-[url('/windows/double-hung-windows-dallas-tx.webp')] bg-cover bg-center" />
        <div className="container relative z-10 text-center">
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4 block">Comprehensive Selection</span>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
            Replacement <span className="text-primary italic">Windows</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Urban-rated window materials engineered for Dallas&apos;s cosmopolitan lifestyle. Metropolitan-grade performance for Texas&apos;s largest city.
          </p>
        </div>
      </section>

      <WindowsSection />
      <MaterialsSection />
      <ContactSection />
    </div>
  );
}

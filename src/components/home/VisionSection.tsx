import Link from 'next/link';

export default function VisionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block">Our Vision</span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary-dark uppercase tracking-tighter leading-none mb-8">
            VALUING YOUR <span className="text-primary italic">VISION</span>.
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto mb-8">
            Your Dallas home deserves windows that reflect your commitment to quality and comfort.
            At Window Replacements of Dallas, we carefully curate our selection of premium windows
            from industry-leading manufacturers—Andersen, Pella, Jeld-Wen, and Marvin—to ensure your home
            receives nothing less than exceptional craftsmanship. Our long-standing partnerships
            with these trusted brands mean you get access to the latest innovations in window
            technology, energy efficiency, and architectural beauty.
          </p>
          <Link
            href="/brands"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-black py-4 px-8 uppercase tracking-[0.2em] text-sm shadow-lg transition-all active:scale-95"
          >
            Explore Our Brands
          </Link>
        </div>
      </div>
    </section>
  );
}
import Link from 'next/link';

export default function PassionSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary-dark uppercase tracking-tighter leading-none mb-8">
            PASSIONATE ABOUT YOUR <span className="text-primary italic">PROJECT</span>.
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto mb-8">
            With over two decades of experience serving North Texas homeowners, we bring
            unmatched expertise to every window replacement project. From historic homes in
            downtown Dallas to modern residences in the surrounding suburbs, our team understands
            the unique architectural requirements and climate challenges of the region. We combine
            meticulous attention to detail with professional installation techniques to deliver
            results that exceed expectations and stand the test of time.
          </p>
          <Link
            href="/about"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-black py-4 px-8 uppercase tracking-[0.2em] text-sm shadow-lg transition-all active:scale-95"
          >
            Learn About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
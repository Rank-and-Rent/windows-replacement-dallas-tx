import Link from 'next/link';

export default function ServiceSection() {
  const services = [
    {
      number: '01',
      title: 'Free Consultations',
      desc: 'On-site assessments with expert recommendations tailored to your Dallas home.'
    },
    {
      number: '02',
      title: 'Professional Installation',
      desc: 'Factory-certified installers ensuring warranty compliance and perfect fit.'
    },
    {
      number: '03',
      title: 'Energy Efficiency',
      desc: 'Windows that reduce heating and cooling costs significantly in Texas climate.'
    },
    {
      number: '04',
      title: 'Lifetime Support',
      desc: 'Ongoing service backed by manufacturer warranties and our commitment.'
    },
  ];

  return (
    <section className="py-24 bg-secondary-dark text-white">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">
            The Window Replacements of <span className="text-primary italic">Dallas</span> Difference
          </h2>
          <p className="text-xl text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed mb-8">
            Choosing Window Replacements of Dallas means partnering with professionals who
            understand that window replacement is an investment in your home's comfort,
            efficiency, and value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all">
              <span className="text-3xl font-black text-primary mb-4 block">{service.number}</span>
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">{service.title}</h4>
              <p className="text-gray-300 font-medium leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-black py-4 px-8 uppercase tracking-[0.2em] text-sm shadow-lg transition-all active:scale-95"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
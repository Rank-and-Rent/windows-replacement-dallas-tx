import Link from 'next/link';
import { locationsData } from '@/data';

export default function ServiceAreasSection() {
  // Show top 6 locations for homepage
  const topLocations = locationsData.slice(0, 6);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block">Service Areas</span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary-dark uppercase tracking-tighter leading-none mb-8">
            Serving the <span className="text-primary italic">Dallas-Fort Worth</span> Metroplex
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Professional window and door installation services across Dallas, TX and surrounding communities.
            We serve homeowners throughout the metroplex with quality installations and expert craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {topLocations.map((location) => (
            <Link
              key={location.slug}
              href={location.route}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-primary/20 transition-all group text-center"
            >
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                {location.name}, TX
              </h3>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/locations"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-black py-4 px-8 uppercase tracking-[0.2em] text-sm shadow-lg transition-all active:scale-95"
          >
            View All Service Areas
          </Link>
        </div>
      </div>
    </section>
  );
}
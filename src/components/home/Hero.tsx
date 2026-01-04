import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { servicesData } from '@/data';

export default function Hero() {
  return (
    <section className="relative min-h-[750px] flex items-center bg-gray-100 overflow-hidden">
      {/* Background with Gradient Mask - Real site look */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10 hidden lg:block" />
        <div className="absolute inset-0 bg-white/80 lg:hidden z-10" />
        <div className="w-full h-full bg-[url('/locations/window-replacement-dallas-tx-4.jpg')] bg-cover bg-center opacity-40 grayscale-[20%]">
        </div>
      </div>

      <div className="container relative z-20">

        {/* Brand Logos Section - Moved Above Content */}
        <div className="text-center mb-12">
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block">Trusted Brands We Install</span>
          <h3 className="text-2xl md:text-3xl font-black text-secondary-dark uppercase tracking-tighter mb-8">Premium Manufacturer Partnerships</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-4xl mx-auto">
            <Link href="/brands/andersen-windows-doors" className="bg-white backdrop-blur-sm p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 group border border-gray-200 shadow-sm">
              <img
                src="/andersen-windows-and-doors-dallas-tx-logo.png"
                alt="Andersen Windows & Doors"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
            <Link href="/brands/jeld-wen-windows-doors" className="bg-white backdrop-blur-sm p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 group border border-gray-200 shadow-sm">
              <img
                src="/jeld-wen-windows-and-doors-dallas-tx-logo.png"
                alt="Jeld-Wen Windows & Doors"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
            <Link href="/brands/marvin-windows-doors" className="bg-white backdrop-blur-sm p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 group border border-gray-200 shadow-sm">
              <img
                src="/marvin-windows-and-doors-dallas-tx-logo.png"
                alt="Marvin Windows & Doors"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
            <Link href="/brands/pella-windows-doors" className="bg-white backdrop-blur-sm p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 group border border-gray-200 shadow-sm">
              <img
                src="/pella-windows-and-doors-dallas-tx-logo.png"
                alt="Pella Windows & Doors"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Area */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="max-w-3xl">
              <span className="inline-block border-l-4 border-primary pl-4 text-sm font-black uppercase tracking-[0.3em] text-secondary mb-6">
                Dallas's Premier Window Experts
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-secondary-dark uppercase tracking-tighter leading-[0.9] mb-8">
                Best Window<br/>
                <span className="text-primary">Replacement</span> in Dallas, TX
              </h1>
              <p className="text-xl text-secondary-light font-medium leading-relaxed max-w-xl mb-10">
                As Dallas's leading window replacement specialists, we proudly install premium windows and doors from trusted brands including Pella, Andersen, and Jeld-Wen, delivering unmatched quality, energy efficiency, and lasting beauty to homes across the Dallas-Fort Worth metroplex.
              </p>
              
              <Link href="/brands" className="group inline-flex items-center gap-4 text-sm font-black uppercase tracking-widest text-secondary-dark hover:text-primary transition-colors">
                <span className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <FaArrowRight className="text-[10px]" />
                </span>
                Learn About Our Brands
              </Link>
            </div>
          </div>

          {/* Form Area - Screenshot 1 Floating Form style */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-gray-800 p-8 rounded-lg relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-dark text-white px-8 py-3 text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap">
                Limited Time Offer
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Request Free Estimate</h3>

              <form className="space-y-4">
                {/* 1. Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                {/* 2. Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="(214) 949-8227"
                    className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                {/* 3. Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                {/* 4. Service Interested In - WITH OPTGROUPS */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select a service...</option>
                    <optgroup label="Windows">
                      {servicesData.filter(s => s.category === 'Windows').map(service => (
                        <option key={service.slug} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Doors">
                      {servicesData.filter(s => s.category === 'Doors').map(service => (
                        <option key={service.slug} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </optgroup>
                    <option value="Not Sure / Multiple Services">Not Sure / Multiple Services</option>
                  </select>
                </div>

                {/* 5. Property Address */}
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">
                    Property Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    placeholder="123 Main St, Dallas, TX 75201"
                    className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                {/* 6. Project Timeline */}
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-1">
                    Project Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select timeline...</option>
                    <option value="ASAP">ASAP</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="Within 3 months">Within 3 months</option>
                    <option value="Within 6 months">Within 6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Just researching">Just researching</option>
                  </select>
                </div>

                {/* 7. Project Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-vertical"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import Link from 'next/link'
import { servicesData, locationsData, brandsData } from '@/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const windowServices = servicesData.filter(s => s.category === 'Windows')
  const doorServices = servicesData.filter(s => s.category === 'Doors')
  const materialServices = servicesData.filter(s => s.category === 'Materials')
  const topLocations = locationsData.slice(0, 8) // Show first 8 locations

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Windows Section - All 8 window types */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6">Windows</h3>
            <ul className="space-y-3">
              {windowServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.route}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Doors Section - All 6 door types */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6">Doors</h3>
            <ul className="space-y-3">
              {doorServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.route}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Materials Section - All 6 material types */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6">Materials</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/materials"
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                >
                  View All Materials
                </Link>
              </li>
              {materialServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.route}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands Section - All 4 brands */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6">Brands</h3>
            <ul className="space-y-3">
              {brandsData.map((brand) => (
                <li key={brand.slug}>
                  <Link
                    href={brand.route}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Section - 4-8 locations */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6">Service Areas</h3>
            <ul className="space-y-3">
              {topLocations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={location.route}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {location.name}, TX
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section - Phone, email, address, hours */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:2149498227"
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center gap-2"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  214-949-8227
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@windowreplacementdallastx.com"
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center gap-2"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  hello@windowreplacementdallastx.com
                </a>
              </li>
              <li className="text-gray-300 text-sm">
                <div className="flex items-start gap-2">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="mt-0.5 flex-shrink-0">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <address className="not-italic">
                    909 Hidden Ridge Dr #180<br />
                    Irving, TX 75038
                  </address>
                </div>
              </li>
              <li className="text-gray-300 text-sm">
                <strong>Open 24/7 - Available for Emergency Service</strong>
              </li>
            </ul>

            {/* Quick Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap.xml" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Maps - MUST HAVE */}
        <div className="mb-12">
          <h3 className="text-center mb-6 text-lg font-bold">Find Us</h3>
          <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.5!2d-96.9497!3d32.9026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2b6e1db45555%3A0x1234567890!2s909%20Hidden%20Ridge%20Dr%20%23180%2C%20Irving%2C%20TX%2075038!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Windows of Dallas location map"
            />
          </div>
        </div>

        {/* Disclosure - MUST HAVE */}
        <div className="py-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm max-w-4xl mx-auto leading-relaxed">
            This site routes inquiries to our chosen fulfillment partner for window and door contractor matching and project coordination support.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Windows of Dallas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
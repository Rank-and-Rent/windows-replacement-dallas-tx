'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { servicesData, locationsData, brandsData } from '@/data'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 300)
  }

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, dropdown: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
    } else if (e.key === 'Escape') {
      setActiveDropdown(null)
    }
  }

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === dropdown ? null : dropdown)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setMobileActiveDropdown(null)
  }

  // Split services into windows and doors
  const windowServices = servicesData.filter(s => s.category === 'Windows')
  const doorServices = servicesData.filter(s => s.category === 'Doors')

  // Top 8 locations for dropdown (main city first, then most populous)
  const topLocations = locationsData.slice(0, 8)

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="/window-replacements-of-dallas-tx-logo.png"
                alt="Window Replacements of Dallas"
                className="h-12 w-auto"
              />
            </Link>

            {/* Phone Number - MUST BE VISIBLE */}
            <a href="tel:2149498227" className="hidden lg:flex items-center gap-2 text-gray-900 hover:text-orange-600 transition-colors">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              214.949.8227
            </a>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {/* Windows Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('windows')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-1 text-gray-900 hover:text-orange-600 transition-colors font-medium"
                  onKeyDown={(e) => handleKeyDown(e, 'windows')}
                  aria-expanded={activeDropdown === 'windows'}
                  aria-haspopup="true"
                >
                  Windows
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'windows' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </button>
                {activeDropdown === 'windows' && (
                  <div
                    className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {windowServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={service.route}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-600 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {service.name}
                      </Link>
                    ))}
                    {/* MUST HAVE AT BOTTOM: */}
                    <div className="border-t border-gray-200 mt-2 pt-2">
                      <Link
                        href="/windows"
                        className="block px-4 py-2 bg-stone-50 text-gray-900 font-semibold hover:bg-stone-100 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        View All Windows
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Doors Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('doors')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-1 text-gray-900 hover:text-orange-600 transition-colors font-medium"
                  onKeyDown={(e) => handleKeyDown(e, 'doors')}
                  aria-expanded={activeDropdown === 'doors'}
                  aria-haspopup="true"
                >
                  Doors
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'doors' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </button>
                {activeDropdown === 'doors' && (
                  <div
                    className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {doorServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={service.route}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-600 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {service.name}
                      </Link>
                    ))}
                    {/* MUST HAVE AT BOTTOM: */}
                    <div className="border-t border-gray-200 mt-2 pt-2">
                      <Link
                        href="/doors"
                        className="block px-4 py-2 bg-stone-50 text-gray-900 font-semibold hover:bg-stone-100 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        View All Doors
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Brands Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('brands')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-1 text-gray-900 hover:text-orange-600 transition-colors font-medium"
                  onKeyDown={(e) => handleKeyDown(e, 'brands')}
                  aria-expanded={activeDropdown === 'brands'}
                  aria-haspopup="true"
                >
                  Brands
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'brands' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </button>
                {activeDropdown === 'brands' && (
                  <div
                    className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {brandsData.map((brand) => (
                      <Link
                        key={brand.slug}
                        href={brand.route}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-600 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {brand.name}
                      </Link>
                    ))}
                    {/* MUST HAVE AT BOTTOM: */}
                    <div className="border-t border-gray-200 mt-2 pt-2">
                      <Link
                        href="/brands"
                        className="block px-4 py-2 bg-stone-50 text-gray-900 font-semibold hover:bg-stone-100 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        View All Brands
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Locations Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('locations')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-1 text-gray-900 hover:text-orange-600 transition-colors font-medium"
                  onKeyDown={(e) => handleKeyDown(e, 'locations')}
                  aria-expanded={activeDropdown === 'locations'}
                  aria-haspopup="true"
                >
                  Areas We Serve
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'locations' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </button>
                {activeDropdown === 'locations' && (
                  <div
                    className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {topLocations.map((location) => (
                      <Link
                        key={location.slug}
                        href={location.route}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-600 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {location.name}, TX
                      </Link>
                    ))}
                    {/* MUST HAVE AT BOTTOM: */}
                    <div className="border-t border-gray-200 mt-2 pt-2">
                      <Link
                        href="/locations"
                        className="block px-4 py-2 bg-stone-50 text-gray-900 font-semibold hover:bg-stone-100 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        View All Locations
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className="text-gray-900 hover:text-orange-600 transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-orange-600 transition-colors font-medium">
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <a href="tel:2149498227" className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
                Call Now
              </a>
              <button
                className="p-2 text-gray-900"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <img
              src="/window-replacements-of-dallas-tx-logo.png"
              alt="Window Replacements of Dallas"
              className="h-10 w-auto"
            />
            <button
              onClick={closeMobileMenu}
              className="p-2 text-gray-500 hover:text-gray-700"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="space-y-4">
            {/* Windows Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full py-3 text-gray-900 font-medium"
                onClick={() => toggleMobileDropdown('windows')}
              >
                Windows
                <svg className={`w-5 h-5 transition-transform ${mobileActiveDropdown === 'windows' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              {mobileActiveDropdown === 'windows' && (
                <div className="ml-4 mt-2 space-y-2">
                  {windowServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.route}
                      className="block py-2 text-gray-600 hover:text-orange-600 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    href="/windows"
                    className="block py-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    View All Windows
                  </Link>
                </div>
              )}
            </div>

            {/* Doors Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full py-3 text-gray-900 font-medium"
                onClick={() => toggleMobileDropdown('doors')}
              >
                Doors
                <svg className={`w-5 h-5 transition-transform ${mobileActiveDropdown === 'doors' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              {mobileActiveDropdown === 'doors' && (
                <div className="ml-4 mt-2 space-y-2">
                  {doorServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.route}
                      className="block py-2 text-gray-600 hover:text-orange-600 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    href="/doors"
                    className="block py-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    View All Doors
                  </Link>
                </div>
              )}
            </div>

            {/* Brands Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full py-3 text-gray-900 font-medium"
                onClick={() => toggleMobileDropdown('brands')}
              >
                Brands
                <svg className={`w-5 h-5 transition-transform ${mobileActiveDropdown === 'brands' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              {mobileActiveDropdown === 'brands' && (
                <div className="ml-4 mt-2 space-y-2">
                  {brandsData.map((brand) => (
                    <Link
                      key={brand.slug}
                      href={brand.route}
                      className="block py-2 text-gray-600 hover:text-orange-600 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {brand.name}
                    </Link>
                  ))}
                  <Link
                    href="/brands"
                    className="block py-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    View All Brands
                  </Link>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full py-3 text-gray-900 font-medium"
                onClick={() => toggleMobileDropdown('locations')}
              >
                Areas We Serve
                <svg className={`w-5 h-5 transition-transform ${mobileActiveDropdown === 'locations' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              {mobileActiveDropdown === 'locations' && (
                <div className="ml-4 mt-2 space-y-2">
                  {topLocations.map((location) => (
                    <Link
                      key={location.slug}
                      href={location.route}
                      className="block py-2 text-gray-600 hover:text-orange-600 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {location.name}, TX
                    </Link>
                  ))}
                  <Link
                    href="/locations"
                    className="block py-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    View All Locations
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="block py-3 text-gray-900 font-medium hover:text-orange-600 transition-colors" onClick={closeMobileMenu}>
              About
            </Link>
            <Link href="/contact" className="block py-3 text-gray-900 font-medium hover:text-orange-600 transition-colors" onClick={closeMobileMenu}>
              Contact
            </Link>
          </nav>
        </div>
      </div>

    </>
  )
}
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactSection from '@/components/contact-section'
import { locationsData } from '@/data'

export default function LocationsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredLocations = locationsData.filter(location =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <Header />
      <main>
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block">Service Areas</span>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
                Window & Door Installation Throughout Dallas, TX
              </h1>
              <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
                Professional window and door installation services across Dallas, TX and surrounding communities. We serve homeowners throughout the metroplex with quality installations and expert craftsmanship.
              </p>
            </div>

            <div className="max-w-md mx-auto mb-16">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={location.route}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {location.name}, TX
                      </h3>
                      <span className="text-sm text-gray-500 capitalize">{location.type}</span>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            {filteredLocations.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No locations found matching "{searchQuery}"</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-orange-600 hover:text-orange-700 font-medium"
                >
                  Clear search
                </button>
              </div>
            )}

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Local Installation?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl text-orange-600 mb-3">🏠</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Local Expertise</h3>
                  <p className="text-gray-600 text-sm">Understanding of local building codes and climate considerations specific to Dallas area homes.</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-orange-600 mb-3">⚡</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
                  <p className="text-gray-600 text-sm">Local presence means faster response times for consultations, measurements, and installations.</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-orange-600 mb-3">🤝</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Community Support</h3>
                  <p className="text-gray-600 text-sm">Supporting local jobs and businesses while providing personalized service to Dallas homeowners.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
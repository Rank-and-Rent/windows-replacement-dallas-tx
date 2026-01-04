import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-9xl font-black text-gray-300 mb-8">404</div>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-md transition-colors mr-4"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-block border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-bold py-4 px-8 rounded-md transition-colors"
          >
            Contact Us
          </Link>
        </div>
        <div className="mt-16">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Popular Pages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <Link href="/windows" className="text-gray-600 hover:text-orange-600 transition-colors">
              Windows
            </Link>
            <Link href="/doors" className="text-gray-600 hover:text-orange-600 transition-colors">
              Doors
            </Link>
            <Link href="/brands" className="text-gray-600 hover:text-orange-600 transition-colors">
              Brands
            </Link>
            <Link href="/locations" className="text-gray-600 hover:text-orange-600 transition-colors">
              Locations
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
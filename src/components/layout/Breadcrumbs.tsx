import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="bg-stone-100 py-4 pt-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="text-gray-600 hover:text-orange-600 transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-gray-400">/</span>
              {index === items.length - 1 ? (
                <span className="text-orange-600 font-medium">{item.label}</span>
              ) : (
                <Link href={item.href} className="text-gray-600 hover:text-orange-600 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
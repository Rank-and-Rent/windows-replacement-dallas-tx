'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import styles from './brands-section.module.css'

const brands = [
  {
    name: 'Andersen',
    slug: 'andersen-windows-doors',
    tagline: 'Over 120 Years of Excellence',
    description: 'America\'s most recognized window and door brand, Andersen combines exceptional craftsmanship with innovative technology. Their 400 Series, E-Series, and A-Series collections offer unmatched beauty, performance, and energy efficiency for Arlington homeowners who demand the very best.',
    highlights: [
      'Industry-leading Energy Star ratings',
      'Exclusive Fibrex composite material',
      'Limited lifetime warranty',
      'Customizable styles and finishes',
    ],
    image: '/brands/andersen-windows-arlington-tx.png',
  },
  {
    name: 'Pella',
    slug: 'pella-windows-doors',
    tagline: 'Innovation Meets Craftsmanship',
    description: 'Pella\'s commitment to quality and innovation has made them a favorite among Texas homeowners for nearly a century. From the budget-friendly 250 Series to the premium Reserve line, Pella offers windows and doors that enhance any Arlington home\'s beauty and performance.',
    highlights: [
      'Patented between-the-glass blinds',
      'Superior noise reduction',
      'Exclusive wood protection system',
      'Architectural authenticity',
    ],
    image: '/brands/pella-windows-arlington-tx.jpg',
  },
  {
    name: 'JELD-WEN',
    slug: 'jeld-wen-windows-doors',
    tagline: 'Quality at Every Price Point',
    description: 'JELD-WEN delivers exceptional value without compromising on quality or style. Their diverse product lines—from the premium Siteline to the accessible Builders line—ensure every Arlington homeowner can find windows and doors that fit their budget and aesthetic preferences.',
    highlights: [
      'AuraLast wood protection',
      'ImpactGard impact-resistant options',
      'Wide range of price points',
      'Texas-weather durability',
    ],
    image: '/brands/jeld-wen-windows-arlington-tx.jpg',
  },
  {
    name: 'Marvin',
    slug: 'marvin-windows-doors',
    tagline: 'Premium Custom Craftsmanship',
    description: 'Marvin Windows and Doors is synonymous with luxury and custom quality. Family-owned since 1912, Marvin specializes in made-to-order windows and doors that combine timeless design with cutting-edge performance, delivering exceptional value for Arlington homeowners seeking distinction.',
    highlights: [
      'Unparalleled customization options',
      'Premium materials and finishes',
      'Industry-leading warranties',
      'Architectural excellence',
    ],
    image: '/brands/marvin-windows-arlington-tx.avif',
  },
]

export default function BrandsSection() {
  return (
    <section id="brands" className={styles.section}>
      <div className={styles.container}>
        {/* Brand Logos Row */}
        <motion.div
          className={styles.logoRow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 max-w-6xl mx-auto">
            <Link href="/brands/andersen-windows-doors" className="hover:opacity-80 transition-opacity">
              <img
                src="/andersen-windows-and-doors-dallas-tx-logo.png"
                alt="Andersen Windows & Doors"
                className="h-16 lg:h-20 w-auto"
              />
            </Link>
            <Link href="/brands/pella-windows-doors" className="hover:opacity-80 transition-opacity">
              <img
                src="/pella-windows-and-doors-dallas-tx-logo.png"
                alt="Pella Windows & Doors"
                className="h-16 lg:h-20 w-auto"
              />
            </Link>
            <Link href="/brands/jeld-wen-windows-doors" className="hover:opacity-80 transition-opacity">
              <img
                src="/jeld-wen-windows-and-doors-dallas-tx-logo.png"
                alt="Jeld-Wen Windows & Doors"
                className="h-16 lg:h-20 w-auto"
              />
            </Link>
            <Link href="/brands/marvin-windows-doors" className="hover:opacity-80 transition-opacity">
              <img
                src="/marvin-windows-and-doors-dallas-tx-logo.png"
                alt="Marvin Windows & Doors"
                className="h-16 lg:h-20 w-auto"
              />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Premium Partner</span>
          <h2 className={styles.title}>America&apos;s Most Trusted Window & Door Brands</h2>
          <p className={styles.subtitle}>
            We bring Arlington homeowners exclusive access to Andersen, Pella, JELD-WEN, and Marvin--
            the finest windows and doors on the market. Each brand
            offers unique advantages, and our experts will help you choose the perfect
            windows and doors for your home, style, and budget.
          </p>
        </motion.div>

        <div className={styles.brandsGrid}>
          {brands.map((brand, index) => (
            <motion.article
              key={brand.slug}
              className={styles.brandCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={styles.brandImage}>
                <Image
                  src={brand.image}
                  alt={`${brand.name} windows and doors`}
                  width={300}
                  height={200}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className={styles.brandHeader}>
                <h3 className={styles.brandName}>{brand.name}</h3>
                <span className={styles.brandTagline}>{brand.tagline}</span>
              </div>
              <p className={styles.brandDescription}>{brand.description}</p>
              <ul className={styles.highlights}>
                {brand.highlights.map((highlight) => (
                  <li key={highlight}>
                    <span className={styles.checkmark}></span>
                    {highlight}
                  </li>
                ))}
              </ul>
              <Link href={`/brands/${brand.slug}`} className={styles.brandCta}>
                Explore {brand.name}
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          className={styles.guarantee}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.guaranteeContent}>
            <h3 className={styles.guaranteeTitle}>Our Installation Guarantee</h3>
            <p className={styles.guaranteeText}>
              Every window we install comes backed by both the manufacturer&apos;s warranty 
              and our own craftsmanship guarantee. Our certified installers follow 
              rigorous protocols to ensure your windows perform flawlessly for decades 
              to come.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



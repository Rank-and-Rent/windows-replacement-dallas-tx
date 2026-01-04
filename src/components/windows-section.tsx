'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import styles from './windows-section.module.css'

const windowTypes = [
  {
    name: 'Double-Hung Windows',
    slug: '/windows/double-hung-windows',
    description: 'Classic versatility with two movable sashes that tilt inward for effortless cleaning. Perfect for traditional and modern Arlington homes alike.',
    features: ['Tilt-in sashes', 'Superior ventilation', 'Easy maintenance'],
    image: '/windows/double-hung-windows-arlington-tx.webp',
  },
  {
    name: 'Single-Hung Windows',
    slug: '/windows/single-hung-windows',
    description: 'Timeless design with a fixed upper sash and operable lower sash. An economical choice that delivers excellent performance and reliability.',
    features: ['Cost-effective', 'Low maintenance', 'Classic appeal'],
    image: '/windows/single-hung-windows-arlington-tx.jpg',
  },
  {
    name: 'Casement Windows',
    slug: '/windows/casement-windows',
    description: 'Hinged on the side and opening outward with a crank mechanism. Exceptional for capturing cross breezes and maximizing natural light in Texas homes.',
    features: ['Full ventilation', 'Tight seal', 'Unobstructed views'],
    image: '/windows/casement-windows-arlington-tx.png',
  },
  {
    name: 'Awning Windows',
    slug: '/windows/awning-windows',
    description: 'Hinged at the top and opening outward, these windows provide ventilation even during light rain—ideal for Arlington\'s unpredictable weather.',
    features: ['Weather protection', 'Privacy', 'Energy efficient'],
    image: '/windows/awning-windows-arlington-tx.jpg',
  },
  {
    name: 'Sliding Windows',
    slug: '/windows/sliding-windows',
    description: 'Glide horizontally on tracks for smooth operation in tight spaces. A contemporary choice that works beautifully in modern Texas architecture.',
    features: ['Space-saving', 'Modern design', 'Easy operation'],
    image: '/windows/sliding-windows-arlington-tx.webp',
  },
  {
    name: 'Picture Windows',
    slug: '/windows/picture-windows',
    description: 'Fixed, non-operable windows that create stunning focal points and frame your best views. Maximum natural light with superior energy efficiency.',
    features: ['Maximum light', 'No air leaks', 'Panoramic views'],
    image: '/windows/picture-windows-arlington-tx.webp',
  },
  {
    name: 'Bay & Bow Windows',
    slug: '/windows/bay-bow-windows',
    description: 'Projecting window combinations that add architectural elegance and expand your living space. Create stunning breakfast nooks or reading alcoves.',
    features: ['Added space', 'Dramatic views', 'Architectural interest'],
    image: '/windows/bay-bow-windows-arlington-tx.jpg',
  },
  {
    name: 'Special Shape Windows',
    slug: '/windows/special-shape-windows',
    description: 'Custom geometric shapes including circles, arches, triangles, and octagons. Make a unique architectural statement in your Arlington home.',
    features: ['Custom designs', 'Unique aesthetics', 'Architectural accent'],
    image: '/windows/special-shape-windows-arlington-tx.jpg',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function WindowsSection() {
  return (
    <section id="windows" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Our Window Collection</span>
          <h2 className={styles.title}>Premium Window Styles for Every Arlington Home</h2>
          <p className={styles.subtitle}>
            From classic double-hung windows to custom specialty shapes, we offer the complete 
            range of window styles to match your home&apos;s architecture and your lifestyle needs. 
            Every window we install is designed for Texas climates—built to withstand intense 
            sun, humidity, and severe weather while keeping your home comfortable year-round.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {windowTypes.map((window) => (
            <motion.article
              key={window.slug}
              className={styles.card}
              variants={itemVariants}
            >
              <Link href={window.slug} className={styles.cardLink}>
                <div className={styles.cardImage}>
                  <Image
                    src={window.image}
                    alt={`${window.name} installation in Arlington TX`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.cardOverlay}></div>
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.cardLabel}>Window Style</span>
                  <h3 className={styles.cardTitle}>{window.name}</h3>
                  <p className={styles.cardDescription}>{window.description}</p>
                  <ul className={styles.features}>
                    {window.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import styles from './windows-section.module.css' // Reusing windows section styles

const doorTypes = [
  {
    name: 'Entry Doors',
    slug: '/doors/entry-door-installation',
    description: 'Make a lasting first impression with premium entry doors that combine security, beauty, and energy efficiency for your Dallas home.',
    features: ['Enhanced security', 'Energy efficient', 'Customizable designs'],
    image: '/doors/entry-doors-frisco-tx.webp',
  },
  {
    name: 'Patio Doors',
    slug: '/doors/patio-door-installation',
    description: 'Seamlessly connect your indoor and outdoor living spaces with sliding or hinged patio doors that offer expansive views and smooth operation.',
    features: ['Indoor-outdoor flow', 'Large glass panels', 'Multiple configurations'],
    image: '/doors/patio-doors-frisco-tx.jpg',
  },
  {
    name: 'French Doors',
    slug: '/doors/french-door-installation',
    description: 'Add timeless elegance with classic French doors featuring beautiful glass panels and traditional styling, perfect for both interior and exterior applications.',
    features: ['Classic design', 'Natural light', 'Elegant transitions'],
    image: '/doors/french-doors-irving-tx.png',
  },
  {
    name: 'Sliding Glass Doors',
    slug: '/doors/sliding-glass-door-installation',
    description: 'Maximize space and light with contemporary sliding glass doors that glide effortlessly and create a modern aesthetic in your Dallas home.',
    features: ['Space-saving design', 'Modern appeal', 'Smooth operation'],
    image: '/doors/sliding-glass-doors-plano-tx.jpg',
  },
  {
    name: 'Storm Doors',
    slug: '/doors/storm-door-installation',
    description: 'Protect your entry door and improve energy efficiency with durable storm doors designed to withstand Texas weather while adding ventilation options.',
    features: ['Weather protection', 'Ventilation options', 'Added insulation'],
    image: '/doors/storm-doors-plano-tx.jpg',
  },
  {
    name: 'Custom Doors',
    slug: '/doors/custom-door-installation',
    description: 'Create a unique statement with fully custom doors designed to your exact specifications, featuring premium materials and personalized details.',
    features: ['Fully customizable', 'Premium materials', 'Unique designs'],
    image: '/doors/custom-doors-irving-tx.webp',
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

export default function DoorsSection() {
  return (
    <section id="doors" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Door Solutions</span>
          <h2 className={styles.title}>Premium Door Installation for Dallas Homes</h2>
          <p className={styles.subtitle}>
            Transform your home with beautiful, energy-efficient doors that enhance security,
            curb appeal, and comfort. From elegant entry doors to spacious patio doors, we offer
            professional installation of premium door systems from Andersen, Pella, JELD-WEN, and
            Marvin—all backed by expert craftsmanship and manufacturer warranties.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {doorTypes.map((door) => (
            <motion.article
              key={door.slug}
              className={styles.card}
              variants={itemVariants}
            >
              <Link href={door.slug} className={styles.cardLink}>
                <div className={styles.cardImage}>
                  <Image
                    src={door.image}
                    alt={`${door.name} installation in Dallas TX`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.cardOverlay}></div>
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.cardLabel}>Door Style</span>
                  <h3 className={styles.cardTitle}>{door.name}</h3>
                  <p className={styles.cardDescription}>{door.description}</p>
                  <ul className={styles.features}>
                    {door.features.map((feature) => (
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

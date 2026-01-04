'use client'

import { motion } from 'framer-motion'
import styles from './features-section.module.css'

const features = [
  {
    title: 'Energy Efficiency',
    description: 'Reduce your energy bills with high-performance Low-E glass and advanced weatherstripping. Our windows are designed for Texas climates, keeping your home cool in summer and warm in winter.',
  },
  {
    title: 'Professional Installation',
    description: 'Our certified installers follow manufacturer specifications to the letter. Proper installation is crucial for warranty protection and optimal window performance.',
  },
  {
    title: 'Lifetime Warranty',
    description: 'Every window we install comes backed by comprehensive manufacturer warranties plus our own workmanship guarantee. Your investment is protected for life.',
  },
  {
    title: 'Enhanced Security',
    description: 'Modern windows feature advanced locking mechanisms and impact-resistant glass options. Protect your Arlington home with windows designed for safety.',
  },
  {
    title: 'Noise Reduction',
    description: 'Multi-pane glass and tight seals dramatically reduce outside noise. Enjoy peace and quiet even in busy Arlington neighborhoods.',
  },
  {
    title: 'Increased Home Value',
    description: 'New windows deliver one of the highest ROI percentages of any home improvement. Recoup up to 85% of your investment at resale.',
  },
]

export default function FeaturesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Why Replace Your Windows</span>
          <h2 className={styles.title}>Benefits of New Window Installation</h2>
          <p className={styles.subtitle}>
            Replacing your windows is one of the smartest investments you can make in 
            your Arlington home. Beyond aesthetic improvements, new windows deliver 
            measurable benefits that impact your comfort, security, and wallet.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardNumber}>0{index + 1}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



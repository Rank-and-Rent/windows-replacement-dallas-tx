'use client'

import { motion } from 'framer-motion'
import styles from './process-section.module.css'

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'Schedule a complimentary in-home consultation where our window experts assess your needs, take measurements, and discuss your preferences and budget.',
  },
  {
    number: '02',
    title: 'Custom Proposal',
    description: 'Receive a detailed, no-obligation proposal with window recommendations from Andersen, Pella, or JELD-WEN—tailored specifically to your Arlington home.',
  },
  {
    number: '03',
    title: 'Professional Installation',
    description: 'Our certified installation team handles every detail with precision, from removing old windows to meticulous cleanup, typically completing most jobs in one day.',
  },
  {
    number: '04',
    title: 'Final Walkthrough',
    description: 'We conduct a thorough walkthrough with you, ensuring every window operates perfectly and you understand all warranty coverage and maintenance.',
  },
]

export default function ProcessSection() {
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
          <span className={styles.label}>Our Process</span>
          <h2 className={styles.title}>How Window Replacement Works</h2>
          <p className={styles.subtitle}>
            From your first call to final installation, we make window replacement 
            simple and stress-free. Here&apos;s what to expect when you partner with 
            Arlington&apos;s window experts.
          </p>
        </motion.div>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={styles.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </motion.div>
          ))}
          <div className={styles.timelineLine}></div>
        </div>
      </div>
    </section>
  )
}



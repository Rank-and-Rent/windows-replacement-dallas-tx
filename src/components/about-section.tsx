'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './about-section.module.css'

const stats = [
  { number: '25+', label: 'Years Serving Arlington' },
  { number: '4', label: 'Premium Brand Partners' },
]

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div
            className={styles.imageColumn}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src="/windows/double-hung-windows-arlington-tx.webp"
                alt="Professional window installation in Arlington home"
                width={800}
                height={1000}
                style={{ width: '100%', height: 'auto' }}
              />
              <div className={styles.imageAccent}></div>
            </div>
          </motion.div>

          <motion.div
            className={styles.contentColumn}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className={styles.label}>About Us</span>
            <h2 className={styles.title}>
              Arlington&apos;s Trusted Window Replacement Experts
            </h2>
            <div className={styles.content}>
              <p>
                For over two decades, Home Window Replacement Service of Arlington has 
                been transforming homes throughout the Dallas-Fort Worth metroplex with 
                premium window installations. Our commitment to excellence, combined with 
                our partnerships with America&apos;s leading window manufacturers, makes us the 
                clear choice for homeowners who demand the best.
              </p>
              <p>
                Every project begins with a thorough consultation where our experts assess 
                your home&apos;s unique needs. We consider factors like architectural style, 
                energy efficiency goals, budget, and personal preferences to recommend the 
                perfect windows for your situation. Our certified installation teams then 
                execute each project with meticulous attention to detail.
              </p>
              <p>
                We understand that Texas weather demands exceptional performance. That&apos;s 
                why we specialize in energy-efficient windows designed to keep your home 
                comfortable during scorching summers and chilly winters—while reducing 
                your utility bills year-round.
              </p>
            </div>

            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={styles.statItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


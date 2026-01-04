'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Brand Logos Banner - positioned below fixed header */}
      <div className="absolute top-[80px] left-0 right-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-200/20">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-6">
            <span className="hidden sm:inline text-sm font-medium text-gray-700 mr-2">Trusted Brands:</span>
            <Link href="/brands" className="hover:opacity-80 transition-opacity flex-shrink-0">
              <img
                src="/andersen-windows-and-doors-dallas-tx-logo.png"
                alt="Andersen Windows & Doors"
                className="h-6 sm:h-7 lg:h-8 w-auto"
              />
            </Link>
            <Link href="/brands" className="hover:opacity-80 transition-opacity flex-shrink-0">
              <img
                src="/pella-windows-and-doors-dallas-tx-logo.png"
                alt="Pella Windows & Doors"
                className="h-6 sm:h-7 lg:h-8 w-auto"
              />
            </Link>
            <Link href="/brands" className="hover:opacity-80 transition-opacity flex-shrink-0">
              <img
                src="/jeld-wen-windows-and-doors-dallas-tx-logo.png"
                alt="Jeld-Wen Windows & Doors"
                className="h-6 sm:h-7 lg:h-8 w-auto"
              />
            </Link>
            <Link href="/brands" className="hover:opacity-80 transition-opacity flex-shrink-0">
              <img
                src="/marvin-windows-and-doors-dallas-tx-logo.png"
                alt="Marvin Windows & Doors"
                className="h-6 sm:h-7 lg:h-8 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.background}>
        <div className={styles.overlay}></div>
        <div className={styles.gradient}></div>
      </div>
      
      <div className={styles.content}>
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className={styles.tagline}>Arlington&apos;s Premier Window Experts</span>
          
          <h1 className={styles.title}>
            Transform Your Home with
            <span className={styles.highlight}> Premium Windows</span>
          </h1>
          
          <p className={styles.description}>
            Experience the perfect combination of beauty, energy efficiency, and lasting
            durability with our expert window replacement services in Arlington, TX. We carry all four of
            America&apos;s most trusted window brands: Andersen, Pella, JELD-WEN, and Marvin.
          </p>
          
          <div className={styles.actions}>
            <Link href="#contact" className={styles.primaryBtn}>
              Get Your Free Estimate
            </Link>
            <Link href="#windows" className={styles.secondaryBtn}>
              Explore Our Windows
            </Link>
          </div>
          
        </motion.div>
      </div>
      
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span>Scroll to explore</span>
        <div className={styles.scrollLine}></div>
      </motion.div>
    </section>
  )
}



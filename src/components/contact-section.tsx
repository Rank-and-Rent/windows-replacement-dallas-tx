'use client'

import { motion } from 'framer-motion'
import { servicesData } from '@/data'
import styles from './contact-section.module.css'

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.background}>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div
            className={styles.contentColumn}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.label}>Get Started Today</span>
            <h2 className={styles.title}>
              Schedule Your Free In-Home Consultation
            </h2>
            <p className={styles.description}>
              Discover how new windows can transform your home&apos;s beauty, comfort, 
              and energy efficiency. Our expert consultants will visit your home, 
              assess your needs, and provide a detailed, no-obligation estimate.
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Call Us Directly</span>
                <a href="tel:214-949-8227" className={styles.contactValue}>
                  214-949-8227
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.formColumn}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Request Free Estimate</h3>
              <form className="space-y-4">

                    {/* 1. Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    {/* 2. Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="(214) 949-8227"
                        className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    {/* 3. Email Address */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    {/* 4. Service Interested In - WITH OPTGROUPS */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select a service...</option>
                        <optgroup label="Windows">
                          {servicesData.filter(s => s.category === 'Windows').map(service => (
                            <option key={service.slug} value={service.name}>
                              {service.name}
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="Doors">
                          {servicesData.filter(s => s.category === 'Doors').map(service => (
                            <option key={service.slug} value={service.name}>
                              {service.name}
                            </option>
                          ))}
                        </optgroup>
                        <option value="Not Sure / Multiple Services">Not Sure / Multiple Services</option>
                      </select>
                    </div>

                    {/* 5. Property Address */}
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">
                        Property Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        placeholder="123 Main St, Dallas, TX 75201"
                        className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    {/* 6. Project Timeline */}
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-1">
                        Project Timeline *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        required
                        className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select timeline...</option>
                        <option value="ASAP">ASAP</option>
                        <option value="Within 1 month">Within 1 month</option>
                        <option value="Within 3 months">Within 3 months</option>
                        <option value="Within 6 months">Within 6 months</option>
                        <option value="6+ months">6+ months</option>
                        <option value="Just researching">Just researching</option>
                      </select>
                    </div>

                    {/* 7. Project Description */}
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                        Project Description *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        required
                        rows={4}
                        placeholder="Tell us about your project..."
                        className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-vertical"
                      />
                    </div>


                    <button
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-md transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



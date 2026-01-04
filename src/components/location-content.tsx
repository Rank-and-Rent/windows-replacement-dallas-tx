import styles from './location-content.module.css'

interface LocationContentProps {
  city: string
  content: {
    intro: string
    whyUs: string
    services: string
    neighborhoods?: string
    commitment: string
  }
}

export default function LocationContent({ city, content }: LocationContentProps) {
  return (
    <div className={styles.wrapper}>
      <article className={styles.container}>
        <section className={styles.intro}>
          <p>{content.intro}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Why {city} Homeowners Choose Us</h2>
          <p className={styles.paragraph}>{content.whyUs}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Complete Window Services in {city}</h2>
          <p className={styles.paragraph}>{content.services}</p>
        </section>

        {content.neighborhoods && (
          <section className={styles.section}>
            <h2 className={styles.heading}>Serving All {city} Neighborhoods</h2>
            <p className={styles.paragraph}>{content.neighborhoods}</p>
          </section>
        )}

        <section className={styles.section}>
          <h2 className={styles.heading}>Our Commitment to {city}</h2>
          <p className={styles.paragraph}>{content.commitment}</p>
        </section>

        <section className={styles.cta}>
          <h2 className={styles.heading}>Schedule Your Free Consultation</h2>
          <p className={styles.ctaText}>
            Ready to transform your {city} home with premium replacement windows? 
            Contact us today for a free, no-obligation consultation and estimate.
          </p>
          <div className={styles.ctaButtons}>
            <a href="tel:817-592-8870" className={styles.phoneBtn}>
              Call 817-592-8870
            </a>
            <a href="#contact" className={styles.contactBtn}>
              Request Estimate
            </a>
          </div>
        </section>
      </article>
    </div>
  )
}



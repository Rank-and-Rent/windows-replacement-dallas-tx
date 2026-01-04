import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import DoorsSection from '@/components/doors-section'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata = {
  title: 'Door Installation Services Dallas TX | Entry & Patio Doors',
  description: 'Professional door installation in Dallas, TX. Entry doors, patio doors, French doors, sliding glass doors. Andersen, Pella, JELD-WEN, Marvin. Free estimates.',
}

export default function DoorsIndexPage() {
  return (
    <>
      <Header />
      <main>
        <DoorsSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
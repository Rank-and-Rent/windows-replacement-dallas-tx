import Hero from '@/components/home/Hero';
import FullImageSection from '@/components/home/FullImageSection';
import WindowTypesSection from '@/components/home/WindowTypesSection';
import BrandsSection from '@/components/home/BrandsSection';
import ServiceSection from '@/components/home/ServiceSection';
import ServiceAreasSection from '@/components/home/ServiceAreasSection';
import ContactSection from '@/components/contact-section';
import ServicesGrid from '@/components/home/ServicesGrid';

export default function Home() {
  return (
    <>
      <Hero />
      <WindowTypesSection />
      <BrandsSection />
      <ServiceSection />
      <FullImageSection
        imageUrl="/windows/casement-windows-frisco-tx.webp"
        title="INVEST IN QUALITY."
        subtitle="Premium windows that enhance your home's beauty and value."
        linkTo="/contact"
        linkText="Get Quote"
      />
      <ServicesGrid />
      <ServiceAreasSection />
      <ContactSection />
    </>
  );
}

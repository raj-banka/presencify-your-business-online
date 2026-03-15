import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import IndustryPackages from '@/components/IndustryPackages';
import ServicesSection from '@/components/ServicesSection';
import ComparisonSection from '@/components/ComparisonSection';
import PricingSection from '@/components/PricingSection';
import PortfolioSection from '@/components/PortfolioSection';
import HowItWorks from '@/components/HowItWorks';
import ROICalculator from '@/components/ROICalculator';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import TrustBadges from '@/components/TrustBadges';
import CommitmentsSection from '@/components/CommitmentsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 w-full flex flex-col">
        <AnnouncementBanner />
        <Navbar />
      </div>
      <HeroSection />
      <ProblemSection />
      <IndustryPackages />
      <ServicesSection />
      <ComparisonSection />
      <PricingSection />
      <PortfolioSection />
      <HowItWorks />
      <ROICalculator />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
      <TrustBadges />
      <CommitmentsSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;

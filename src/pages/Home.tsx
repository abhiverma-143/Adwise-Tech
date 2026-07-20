import { HeroSection } from '../components/home/HeroSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ServicesSection } from '../components/home/ServicesSection';
import { TrustedLogosSection } from '../components/home/TrustedLogosSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { PortfolioSection } from '../components/home/PortfolioSection';
import { StatsSection } from '../components/home/StatsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';

interface HomeProps {
  handleNavClick: (id: string) => void;
}

export const Home: React.FC<HomeProps> = ({ handleNavClick }) => {
  return (
    <>
      <HeroSection handleNavClick={handleNavClick} />
      <WhyChooseUs onNavClick={handleNavClick} />
      <ServicesSection handleNavClick={handleNavClick} />
      <TrustedLogosSection />
      <ProcessSection />
      <PortfolioSection handleNavClick={handleNavClick} />
      <StatsSection />
      <TestimonialsSection handleNavClick={handleNavClick} />
    </>
  );
};

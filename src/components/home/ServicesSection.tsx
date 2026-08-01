import { ServicesCards } from '../ServicesCards';

interface ServicesSectionProps {
  handleNavClick: (id: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ handleNavClick }) => {
  return (
    <section id="services-section" className="bg-[#F8F9FC] py-12 relative overflow-hidden z-10 border-y border-brand-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block mb-3">
          Our Services
        </span>
        <h2 className="font-display font-black text-3xl text-brand-navy text-center mb-3">
          Our <span className="text-brand-primary">Services</span>
        </h2>
        <p className="text-center text-gray-400 text-sm max-w-xl mx-auto mb-12">
          From SEO to Social Media — complete digital marketing solutions for your business growth.
        </p>

        {/* Services cards grid, showing first 4 */}
        <ServicesCards onNavClick={handleNavClick} limit={3} isHomePage={true} />

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => handleNavClick('services')}
            className="inline-flex items-center justify-center border-2 border-brand-cta text-brand-cta hover:bg-brand-cta hover:text-white font-semibold text-sm px-8 py-3 rounded-full transition-all duration-300"
          >
            View All Services →
          </button>
        </div>
      </div>
    </section>
  );
};

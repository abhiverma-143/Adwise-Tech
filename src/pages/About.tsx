import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TeamMembers } from '../components/TeamMembers';

interface AboutProps {
  handleNavClick: (id: string) => void;
}

export const About: React.FC<AboutProps> = ({ handleNavClick }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#our-team') {
      const timer = setTimeout(() => {
        const element = document.getElementById('our-team');
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="transition-all duration-300">
      {/* About Hero */}
      <section className="relative bg-brand-navy py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <span className="text-[#E91E8C] font-bold text-xs uppercase tracking-widest block mb-3">
            ABOUT US
          </span>
          <h1 className="font-display font-black text-3xl lg:text-4xl text-white tracking-tight leading-tight">
            Bhopal's Leading <span className="text-[#E91E8C]">Growth Agency</span>
          </h1>
          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed max-w-xl mt-3 mb-0">
            We partner with ambitious companies to build scalable marketing engines that drive transparent, measurable ROI.
          </p>
        </div>
      </section>

      {/* Who We Are & Mission Section */}
      <section className="bg-white py-16 border-b border-brand-border z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Who We Are column */}
            <div className="text-left">
              <span className="text-[#E91E8C] font-bold text-xs uppercase tracking-widest block mb-3">
                Who We Are
              </span>
              <h2 className="font-display font-black text-brand-navy text-2xl sm:text-3xl leading-tight mb-4">
                Bhopal's Trusted Digital Partner
              </h2>
              <p className="text-brand-secondary text-sm sm:text-base leading-relaxed">
                Welcome to AD Wise Tech, your trusted partner for digital growth in Bhopal. We specialize in SEO, Social Media Marketing, PPC Advertising, and Website Design & Development. Our expert team crafts powerful strategies to enhance your online presence, drive quality traffic, and boost your business growth.
              </p>
            </div>
            {/* Mission column */}
            <div className="text-left flex flex-col justify-center">
              <span className="text-[#E91E8C] font-bold text-xs uppercase tracking-widest block mb-3">
                Our Mission
              </span>
              <h2 className="font-display font-black text-brand-navy text-2xl sm:text-3xl leading-tight mb-4">
                Empowering Local Businesses to Scale
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed italic border-l-4 border-[#E91E8C] pl-4 py-2 bg-[rgba(233,30,140,0.05)] rounded-r-xl">
                "To craft powerful digital strategies that enhance online presence, drive quality traffic, and boost business growth for every client we serve."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <div id="our-team">
        <TeamMembers onNavClick={handleNavClick} />
      </div>
    </div>
  );
};

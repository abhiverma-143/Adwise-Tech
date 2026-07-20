import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseFeatures } from '../constants/mockData';

interface WhyChooseUsProps {
  onNavClick: (id: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onNavClick }) => {
  return (
    <section id="why-choose-us" className="bg-white py-20 lg:py-28 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (40%, vertically centered) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 text-left flex flex-col justify-center"
          >
            <span className="text-brand-orange uppercase tracking-widest text-xs font-bold block mb-3">
              Why Choose Us
            </span>
            <h2 className="font-display font-black text-brand-navy text-3xl sm:text-4xl leading-tight mb-5">
              Your Growth Partner,<br />Not Just Another Agency
            </h2>
            <div className="w-12 h-1 bg-brand-orange rounded mb-5" />
            
            <p className="text-brand-secondary text-base leading-relaxed mb-6">
              We don't just run ads or build pretty sites — we design complete, custom growth systems that align with your business objectives to deliver consistent, transparent, and measurable outcomes.
            </p>

            {/* Achievement Pills (stacked vertically) */}
            <div className="flex flex-col gap-3 items-start mb-8">
              <div className="bg-[#FDF2F8] border border-[#FCE7F3] text-[#E91E8C] text-sm font-medium rounded-full px-4 py-2 inline-flex items-center gap-2 shadow-sm">
                <span>✅</span> 50+ Happy Clients
              </div>
              <div className="bg-[#FDF2F8] border border-[#FCE7F3] text-[#E91E8C] text-sm font-medium rounded-full px-4 py-2 inline-flex items-center gap-2 shadow-sm">
                <span>✅</span> 7 Services Offered
              </div>
              <div className="bg-[#FDF2F8] border border-[#FCE7F3] text-[#E91E8C] text-sm font-medium rounded-full px-4 py-2 inline-flex items-center gap-2 shadow-sm">
                <span>✅</span> 100% Dedicated Team
              </div>
            </div>

            <button
              onClick={() => onNavClick('about-page-team')}
              className="w-max bg-brand-cta hover:bg-brand-ctaHover text-white rounded-full px-6 py-3 font-semibold text-sm shadow-md transition-colors"
            >
              Learn More About Us →
            </button>
          </motion.div>
 
          {/* Right Column (60%, 2x3 grid, vertically centered) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyChooseFeatures.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -5 }}
                  className={`bg-white border rounded-2xl p-5 shadow-sm hover:border-[#E91E8C] hover:shadow-md transition-all duration-300 text-left flex flex-row gap-4 items-start ${i === 0 ? 'border-[#E91E8C] shadow-[0_4px_12px_rgba(233,30,140,0.08)]' : 'border-brand-border'}`}
                >
                  {/* Left: Icon Box */}
                  <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    {f.icon}
                  </div>

                  {/* Right: Content */}
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-brand-navy mb-1">
                      {f.title}
                    </span>
                    <span className="text-xs text-brand-secondary leading-relaxed">
                      {f.desc}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

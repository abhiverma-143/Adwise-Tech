import React from 'react';
import { motion } from 'framer-motion';

interface BottomCTAProps {
  onNavClick: (id: string) => void;
}

export const BottomCTA: React.FC<BottomCTAProps> = ({ onNavClick }) => {
  return (
    <section className="bg-brand-navy relative z-10 transition-colors duration-300">
      <div className="py-10 relative overflow-hidden">
        {/* Particle Stars */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-start">
            
            <h2 className="font-display font-black text-2xl text-white tracking-tight leading-tight mb-4">
              Let's Build Something<br />Amazing Together!
            </h2>
            
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-8 max-w-md">
              Book a free strategic digital consultation call with our Bhopal marketing experts today, and we will formulate a personalized growth blueprint for your company.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavClick('contact-page')}
                className="bg-brand-orange hover:bg-brand-ctaHover text-white font-bold text-sm px-8 py-3 rounded-full shadow-md flex items-center gap-1.5 transition-colors"
              >
                Contact Us Today →
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

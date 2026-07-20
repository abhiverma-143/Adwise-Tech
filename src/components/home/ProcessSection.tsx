import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../../constants/mockData';

export const ProcessSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="process"
      className="bg-white pt-12 pb-10 lg:pt-12 lg:pb-12 px-4 lg:px-8 relative z-10 border-b border-brand-border transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-6 lg:mb-10"
        >
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest block mb-3">
            Our Process
          </span>
          <h2 className="font-display font-black text-brand-navy text-2xl sm:text-3xl lg:text-4xl leading-tight">
            Systematic Growth Delivery Process
          </h2>
          <div className="w-12 h-1 bg-brand-primary rounded mx-auto mt-4" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto flex flex-col items-center">

          {/* Desktop Connecting Line */}
          {!isMobile && (
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-[52px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-brand-accent to-[rgba(154,63,230,0.20)] z-0 origin-left"
            />
          )}

          {/* Steps Container */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 items-stretch px-4 z-10 w-full">
            {processSteps.map((step, idx) => {
              const delayFactor = isMobile ? 0.1 : 0.15;

              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center relative group bg-white lg:bg-transparent border border-brand-border lg:border-0 rounded-[16px] lg:rounded-none py-4 px-3 lg:p-0 shadow-sm lg:shadow-none h-full justify-between lg:justify-start"
                >

                  {/* Step Number */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * delayFactor + 0.1 }}
                    className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-1 lg:mb-3 block"
                  >
                    {step.number}
                  </motion.span>

                  {/* Circle Icon Container */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: idx * delayFactor }}
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 border-brand-primary bg-[rgba(154,63,230,0.06)] flex items-center justify-center text-brand-primary shadow-md lg:shadow-lg z-10 transition-all duration-300 hover:border-brand-primary hover:bg-white group-hover:scale-110"
                  >
                    {step.icon}
                  </motion.div>

                  {/* Title & Desc */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * delayFactor + 0.2 }}
                    className="mt-2 lg:mt-4 flex flex-col justify-start items-center"
                  >
                    <h3 className="font-bold text-xs lg:text-sm mt-2 lg:mt-4 text-brand-navy mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-brand-secondary max-w-[140px] leading-tight lg:leading-relaxed mt-1 lg:mt-0">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

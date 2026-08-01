import React from 'react';
import { jobOpenings } from '../constants/mockData';
import type { JobOpening } from '../types';

interface CareersPageProps {
  onApplyJob: (job: JobOpening) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onApplyJob }) => {
  return (
    <div className="transition-all duration-300">
      {/* Careers Hero */}
      <section className="relative bg-brand-navy py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest block mb-3">
            CAREERS
          </span>
          <h1 className="font-display font-black text-3xl lg:text-4xl text-white tracking-tight leading-tight">
            Join Our Team of <span className="text-brand-primary">Marketing Experts</span>
          </h1>
          <p className="text-[#FFFFFF] text-sm sm:text-base leading-relaxed max-w-xl mt-3 mb-0">
            We are always looking for passionate digital marketers, SEO specialists, developers, and creatives to join our growing Bhopal agency.
          </p>
        </div>
      </section>

      {/* Careers Openings Section */}
      <section id="careers-list" className="bg-white py-20 lg:py-28 relative z-10 border-b border-brand-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display font-black text-brand-navy text-3xl sm:text-4xl leading-tight mb-4">
              Current Openings
            </h2>
            <div className="w-12 h-1 bg-brand-primary rounded mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {jobOpenings.map((job, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#F0F0F0] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-brand-primary transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  <span className="inline-block bg-brand-primary/10 text-brand-primary text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-4">
                    {job.type}
                  </span>
                  <h3 className="font-display font-black text-brand-navy text-base sm:text-lg mb-1 leading-snug">
                    {job.title}
                  </h3>
                  <p className="text-xs text-[#64748B] mb-6 font-medium">
                    {job.location} • {job.experience}
                  </p>
                </div>
                <button
                  onClick={() => onApplyJob(job)}
                  className="w-full bg-brand-cta/10 text-brand-cta hover:bg-brand-cta hover:text-white font-bold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  Apply For Role ↗
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { teamMembers } from '../constants/mockData';

interface TeamMembersProps {
  onNavClick: (id: string) => void;
}

export const TeamMembers: React.FC<TeamMembersProps> = ({ onNavClick }) => {
  const [expandedBios, setExpandedBios] = useState<Record<number, boolean>>({});

  const toggleBio = (idx: number) => {
    setExpandedBios(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section id="team" className="bg-[#F8F9FC] py-20 relative z-10 transition-colors duration-300 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest block mb-4">
            LEADERSHIP
          </span>
          <h2 className="font-display font-black text-brand-navy text-3xl sm:text-4xl leading-tight">
            The Founders Driving Your Digital Growth
          </h2>
          <div className="w-12 h-1 bg-brand-primary rounded mx-auto mt-4" />
        </div>

        {/* Members Grid (4 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch mb-12 max-w-2xl mx-auto">
          {teamMembers.map((m, idx) => {
            const isExpanded = !!expandedBios[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-white border border-brand-border rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.10)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 text-center flex flex-col h-full group max-w-[260px] mx-auto w-full"
              >
                {/* Top Section — circular portrait */}
                <div className="w-full pt-7 pb-1 flex items-center justify-center bg-brand-light">
                  <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                    {m.image ? (
                      <img
                        src={m.image}
                        alt={m.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center">
                        <span className="font-black text-white text-2xl tracking-wider">
                          {m.initials}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="pt-5 pb-4 px-4 flex flex-col flex-1 text-center">
                  {/* Department badge */}
                  <div>
                    <span className="inline-block bg-brand-primary/10 text-brand-primary rounded-full px-3 py-1 text-[10px] font-bold mb-2.5 uppercase tracking-wider">
                      {m.department}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <h3 className="font-black text-base text-brand-navy mb-1">
                    {m.name}
                  </h3>
                  <p className="text-xs text-brand-secondary mb-3.5 font-medium">
                    {m.role}
                  </p>

                  <div className="border-t border-brand-border mb-3.5" />

                  {/* Bio — clamped to 2 lines with a Read More / Read Less toggle */}
                  <p className={`text-xs text-brand-secondary leading-relaxed mb-1 ${isExpanded ? '' : 'line-clamp-2'}`}>
                    {m.bio}
                  </p>
                  <button
                    type="button"
                    onClick={() => toggleBio(idx)}
                    className="text-brand-cta text-[11px] font-bold mb-3.5 hover:underline self-center"
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </button>

                  {/* Skills pills */}
                  <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                    {m.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-[#F8F9FC] border border-brand-border text-[#64748B] text-[10px] font-bold rounded-full px-2.5 py-0.5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Social icons row — each member's own links from mockData */}
                  <div className="mt-auto pt-1 flex justify-center gap-3">
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:bg-brand-cta hover:text-white flex items-center justify-center transition-all duration-300"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={m.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:text-white hover:bg-gradient-to-tr hover:from-[#feda75] hover:via-[#d62976] hover:to-[#4f5bd5] flex items-center justify-center transition-all duration-300"
                    >
                      <FaInstagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA below team section */}
        <div className="text-center flex flex-col items-center gap-1.5">
          <p className="text-brand-secondary text-sm">
            Want to join our growing team?
          </p>
          <button
            onClick={() => onNavClick('career')}
            className="text-brand-cta font-semibold text-sm hover:underline transition-all flex items-center gap-1"
          >
            View Career Opportunities <span className="font-light">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};
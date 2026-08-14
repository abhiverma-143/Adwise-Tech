import React from 'react';
import { motion } from 'framer-motion';
import { Telescope, Target, Handshake, Lightbulb, ShieldCheck, Award, TrendingUp, Users2 } from 'lucide-react';

const values = [
  { icon: <Lightbulb className="w-5 h-5" />, title: 'Innovation', desc: 'We embrace new ideas and technologies.' },
  { icon: <ShieldCheck className="w-5 h-5" />, title: 'Integrity', desc: 'We operate with honesty and transparency.' },
  { icon: <Award className="w-5 h-5" />, title: 'Excellence', desc: 'We are committed to quality in everything.' },
  { icon: <TrendingUp className="w-5 h-5" />, title: 'Growth', desc: 'We help businesses grow and succeed.' },
  { icon: <Users2 className="w-5 h-5" />, title: 'Partnership', desc: 'We believe in building long-term relationships.' },
];

export const VisionMission: React.FC = () => {
  return (
    <div className="transition-all duration-300">

      {/* ============ OUR PURPOSE ============ */}
      <section className="bg-[#F8F9FC] pt-14 pb-16 lg:pt-16 lg:pb-20 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent font-bold text-xs uppercase tracking-widest block mb-3">
              Our Purpose
            </span>
            <h2 className="font-display font-black text-brand-navy text-2xl sm:text-3xl lg:text-4xl leading-tight mb-4">
              Guided by <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Vision</span>, Driven by <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Mission</span>
            </h2>
            <p className="text-brand-secondary text-sm sm:text-base leading-relaxed">
              We aim to build meaningful digital experiences that help businesses grow, connect with their audience, and achieve long-term success.
            </p>
          </div>

          {/* Vision / Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-brand-border rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_rgba(233,30,140,0.12)] hover:border-brand-primary/30 transition-all duration-300 p-8 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white mb-5 shadow-md">
                <Telescope className="w-7 h-7" />
              </div>
              <h3 className="font-display font-black text-lg text-brand-navy mb-3 uppercase tracking-wide">
                Our Vision
              </h3>
              <p className="text-brand-secondary text-sm leading-relaxed">
                To be a globally recognized digital solutions company known for innovation, integrity, and impact — empowering businesses to achieve sustainable growth in the digital world.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-brand-border rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_rgba(233,30,140,0.12)] hover:border-brand-primary/30 transition-all duration-300 p-8 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center text-white mb-5 shadow-md">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-display font-black text-lg text-brand-navy mb-3 uppercase tracking-wide">
                Our Mission
              </h3>
              <p className="text-brand-secondary text-sm leading-relaxed">
                To deliver result-driven digital marketing, web development, and creative solutions that help our clients grow their brand, connect with their audience, and achieve their business goals.
              </p>
            </motion.div>
          </div>

          {/* ============ OUR COMMITMENT BANNER ============ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden bg-white border border-brand-border rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 sm:p-8 mt-10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white flex-shrink-0 shadow-md">
              <Handshake className="w-7 h-7" />
            </div>
            <div>
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent font-bold text-xs uppercase tracking-widest block mb-1">
                Our Commitment
              </span>
              <h3 className="font-display font-black text-brand-navy text-lg sm:text-xl mb-2">
                Building <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Trust</span>. Delivering <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Excellence</span>.
              </h3>
              <p className="text-brand-secondary text-sm leading-relaxed">
                We are committed to innovation, transparency, and excellence in everything we do, building long-term partnerships based on trust and measurable results.
              </p>
            </div>
          </motion.div>

          {/* ============ VALUES ROW ============ */}
          <div className="mt-14 max-w-5xl mx-auto">
            <h3 className="text-center font-display font-black text-brand-navy text-lg sm:text-xl mb-8">
              The Values That <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Drive Us Forward</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white border border-brand-border rounded-2xl shadow-sm hover:shadow-md hover:border-brand-primary/20 transition-all duration-300 p-4 flex flex-col items-center text-center"
                >
                  <div className="w-11 h-11 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-3">
                    {v.icon}
                  </div>
                  <span className="font-bold text-sm text-brand-navy mb-1">{v.title}</span>
                  <span className="text-[11px] text-brand-secondary leading-snug">{v.desc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
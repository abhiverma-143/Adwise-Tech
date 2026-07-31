import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, BarChart3, Users, CheckCircle, ChevronDown, ChevronUp, PlayCircle } from 'lucide-react';

interface CoursesProps {
  handleNavClick: (id: string) => void;
}

interface Course {
  id: number;
  category: 'SEO' | 'Social Media' | 'PPC Advertising' | 'Website Development' | 'Graphic Designing';
  title: string;
  desc: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  mode: 'Live Online' | 'In-Person, Bhopal';
  highlights: string[];
}

const courses: Course[] = [
  {
    id: 1,
    category: 'SEO',
    title: 'SEO Ranking Accelerator',
    desc: 'Learn keyword research, on-page and technical SEO, and link building to rank businesses on Page 1 of Google.',
    duration: '6 Weeks',
    level: 'Beginner',
    mode: 'Live Online',
    highlights: ['Keyword research & strategy', 'Technical SEO audits', 'Local SEO for Bhopal businesses', 'Certificate on completion'],
  },
  {
    id: 2,
    category: 'PPC Advertising',
    title: 'Meta Ads Growth Program',
    desc: 'Master Google Search, Display, YouTube, Facebook and Instagram ad campaigns from setup to optimization.',
    duration: '5 Weeks',
    level: 'Intermediate',
    mode: 'Live Online',
    highlights: ['Campaign setup & bid strategy', 'Retargeting & A/B testing', 'Real client ad account practice', 'Certificate on completion'],
  },
  {
    id: 3,
    category: 'Social Media',
    title: 'Social Media Success Program',
    desc: 'Build content strategy, grow engaged audiences, and run high-performing campaigns across Instagram & Facebook.',
    duration: '4 Weeks',
    level: 'Beginner',
    mode: 'In-Person, Bhopal',
    highlights: ['Content calendar planning', 'Reels & short-form strategy', 'Community management', 'Certificate on completion'],
  },
  {
    id: 4,
    category: 'Website Development',
    title: 'Website Development Bootcamp',
    desc: 'Build fast, conversion-focused websites and landing pages using modern no-code and React-based workflows.',
    duration: '8 Weeks',
    level: 'Intermediate',
    mode: 'Live Online',
    highlights: ['Landing page design principles', 'WordPress & React basics', 'Speed & mobile optimization', 'Certificate on completion'],
  },
  {
    id: 5,
    category: 'Graphic Designing',
    title: 'Brand & Ad Creative Design',
    desc: 'Design logos, social creatives, and ad banners that convert, using industry-standard design tools.',
    duration: '5 Weeks',
    level: 'Beginner',
    mode: 'In-Person, Bhopal',
    highlights: ['Logo & brand identity design', 'Social media creative kits', 'Ad banner design principles', 'Certificate on completion'],
  },
  {
    id: 6,
    category: 'PPC Advertising',
    title: 'Performance Marketing Intensive',
    desc: 'Go beyond single-platform ads — build full-funnel campaigns that track ROI across the entire customer journey.',
    duration: '6 Weeks',
    level: 'Advanced',
    mode: 'Live Online',
    highlights: ['Full-funnel campaign design', 'Marketing automation basics', 'ROI & analytics tracking', 'Certificate on completion'],
  },
];

const categories = ['All', 'SEO', 'Social Media', 'PPC Advertising', 'Website Development', 'Graphic Designing'];

const faqs = [
  {
    q: 'Do I need prior marketing experience to join?',
    a: 'No. Our Beginner-level courses (SEO, Social Media, Graphic Designing) start from the fundamentals. Intermediate and Advanced courses assume basic familiarity with the platform being taught.',
  },
  {
    q: 'Are the live online classes recorded?',
    a: "Yes, every live session is recorded and shared with enrolled students, so you can revisit any class or catch up if you miss one.",
  },
  {
    q: 'Will I get a certificate after completing a course?',
    a: 'Yes, every course includes a certificate of completion from Ad Wise Tech, which you can add to your resume or LinkedIn profile.',
  },
  {
    q: 'Do you offer any placement or internship support?',
    a: "Top-performing students get the opportunity for a paid internship with our in-house marketing team, working on real client campaigns.",
  },
];

export const Courses: React.FC<CoursesProps> = ({ handleNavClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredCourses = courses.filter(
    (c) => selectedCategory === 'All' || c.category === selectedCategory
  );

  return (
    <div className="transition-all duration-300">

      {/* HERO */}
      <section className="bg-white py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent font-bold text-xs uppercase tracking-widest block mb-3">
            Ad Wise Academy
          </span>
          <h1 className="font-display font-black text-3xl lg:text-4xl text-brand-navy tracking-tight leading-tight">
            Learn Digital Marketing <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">from Practitioners</span>
          </h1>
          <p className="text-brand-secondary text-sm sm:text-base leading-relaxed max-w-2xl mt-3 mb-0">
            Hands-on courses in SEO, PPC, Social Media, Web Development and Design — taught by the same team running live campaigns for 50+ Bhopal businesses.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="bg-white pb-4">
        <div
          className="max-w-4xl mx-auto px-4 overflow-x-auto whitespace-nowrap scrollbar-none pb-2 flex justify-start lg:justify-center gap-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-bold rounded-full px-4 py-2 transition-all duration-300 flex-shrink-0 ${
                selectedCategory === cat
                  ? 'bg-brand-cta text-white shadow-md'
                  : 'bg-[#F1F5F9] text-[#64748B] hover:text-brand-cta'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* COURSE GRID */}
      <section className="bg-[#F8F9FC] py-12 lg:py-16 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredCourses.map((course, idx) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="bg-white border border-brand-border rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col text-left"
                >
                  {/* Image */}
                  <div className="h-[160px] relative overflow-hidden">
                    <img
                      src={`https://picsum.photos/seed/course-${course.id}/500/400`}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
                    <span className="absolute top-3 left-3 bg-white/95 text-brand-navy text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                      {course.category}
                    </span>
                    <button
                      onClick={() => handleNavClick('contact-page')}
                      className="absolute inset-0 flex items-center justify-center bg-brand-navy/0 hover:bg-brand-navy/20 transition-colors duration-300 group"
                      aria-label={`Preview ${course.title}`}
                    >
                      <PlayCircle className="w-10 h-10 text-white opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-base text-brand-navy mb-2 leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs text-brand-secondary leading-relaxed mb-4 line-clamp-2">
                      {course.desc}
                    </p>

                    {/* Meta row */}
                    <div className="flex flex-wrap gap-3 text-[11px] text-[#64748B] font-medium mb-4">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-brand-primary" /> {course.duration}</span>
                      <span className="flex items-center gap-1"><BarChart3 className="w-3.5 h-3.5 text-brand-primary" /> {course.level}</span>
                      <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-brand-primary" /> {course.mode}</span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-5">
                      {course.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-brand-secondary">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-primary flex-shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Price + CTA */}
                    <div className="mt-auto border-t border-brand-border pt-4 flex items-center justify-between">
                      
                      <button
                        onClick={() => handleNavClick('contact-page')}
                        className="bg-brand-cta hover:bg-brand-ctaHover text-white text-xs font-bold px-4 py-2 rounded-full transition-colors shadow-sm"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-10 bg-white border border-brand-border rounded-[20px]">
              <p className="text-brand-secondary text-sm">No courses found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent font-bold text-xs uppercase tracking-widest block mb-3">
              FAQ
            </span>
            <h2 className="font-display font-black text-brand-navy text-2xl sm:text-3xl leading-tight">
              Course Questions, Answered
            </h2>
            <div className="w-12 h-1 bg-brand-primary rounded mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? 'border-brand-primary bg-[rgba(244,45,106,0.04)]'
                      : 'border-brand-border bg-white hover:border-brand-primary/40'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between text-brand-navy font-semibold text-sm sm:text-base transition-colors focus:outline-none"
                  >
                    <span className="pr-4">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-sm text-[#64748B] leading-relaxed border-t border-[#E2E8F0] bg-transparent">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-brand-navy py-14 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h3 className="font-display font-black text-xl lg:text-2xl text-white mb-2">
            Ready to build a career in digital marketing?
          </h3>
          <p className="text-sm text-white/60 max-w-lg mx-auto mb-6">
            Talk to our academy team to find the right course for your goals and experience level.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavClick('contact-page')}
            className="bg-brand-cta hover:bg-brand-ctaHover text-white font-semibold text-sm px-8 py-3 rounded-full shadow-md transition-colors"
          >
            Talk to Our Team →
          </motion.button>
        </div>
      </section>

    </div>
  );
};
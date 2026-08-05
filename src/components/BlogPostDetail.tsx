import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../constants/mockData';

interface BlogPostDetailProps {
  postId: number;
  onBack: () => void;
  onNavClick: (id: string) => void;
}

export const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ postId, onBack, onNavClick }) => {
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <section className="max-w-3xl mx-auto px-4 py-24 text-center">
        <p className="text-brand-secondary text-sm mb-4">Blog post not found.</p>
        <button
          onClick={onBack}
          className="text-brand-cta font-bold text-sm inline-flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </button>
      </section>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white pt-8 pb-20"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <button
          onClick={onBack}
          className="text-xs font-bold text-brand-secondary hover:text-brand-cta inline-flex items-center gap-1.5 mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
        </button>

        <div className="flex items-center gap-3 text-[11px] font-bold uppercase mb-3">
          <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
            {post.category}
          </span>
        </div>

        <h1 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-brand-navy leading-tight mb-6">
          {post.title}
        </h1>

        <div className="rounded-2xl overflow-hidden mb-8 shadow-md">
          <img src={post.img} alt={post.title} className="w-full h-[260px] sm:h-[360px] object-cover" />
        </div>

        <p className="text-sm sm:text-base text-brand-secondary leading-relaxed mb-8">
          {post.desc}
        </p>

        <div className="space-y-8">
          {post.content.map((section, idx) => (
            <div key={idx}>
              <h2 className="font-display font-bold text-lg sm:text-xl text-brand-navy mb-2.5">
                {section.heading}
              </h2>
              <p className="text-sm sm:text-[15px] text-brand-secondary leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-brand-navy rounded-2xl p-6 sm:p-8 text-center text-white">
          <h3 className="font-display font-black text-lg sm:text-xl mb-2">
            Want results like this for your business?
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted mb-5">
            Let's talk about your goals and build a strategy that fits.
          </p>
          <button
            onClick={() => onNavClick('contact-page')}
            className="bg-brand-cta hover:bg-brand-ctaHover text-white font-bold text-sm rounded-full px-6 py-3 transition-colors"
          >
            Get Consultation →
          </button>
        </div>
      </div>
    </motion.article>
  );
};
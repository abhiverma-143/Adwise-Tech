import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, Check } from 'lucide-react';
import type { JobOpening } from '../types';

interface CareerModalProps {
  isOpen: boolean;
  job: JobOpening | null;
  onClose: () => void;
}

export const CareerModal: React.FC<CareerModalProps> = ({ isOpen, job, onClose }) => {
  const [isSubmittingCareer, setIsSubmittingCareer] = useState(false);
  const [careerSuccess, setCareerSuccess] = useState(false);

  if (!isOpen || !job) return null;

  const handleCareerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmittingCareer(true);
    setTimeout(() => {
      setIsSubmittingCareer(false);
      setCareerSuccess(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => {
        setCareerSuccess(false);
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative z-10 text-left border border-gray-100 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-brand-dark"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-[10px] text-brand-orange font-bold uppercase tracking-widest block mb-1">
          Apply for Position
        </span>
        <h3 className="font-display font-black text-brand-dark text-xl sm:text-2xl mb-1">
          {job.title}
        </h3>
        <p className="text-xs text-gray-500 mb-6">
          {job.location} • {job.experience} • {job.type}
        </p>

        <form onSubmit={handleCareerSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-bold text-brand-dark uppercase tracking-wider mb-1.5">Full Name *</label>
            <input
              type="text"
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-orange focus:bg-white transition-colors"
              placeholder="e.g. Amit Sen"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-brand-dark uppercase tracking-wider mb-1.5">Email Address *</label>
              <input
                type="email"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-orange focus:bg-white transition-colors"
                placeholder="e.g. amit@example.com"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-brand-dark uppercase tracking-wider mb-1.5">Phone Number *</label>
              <input
                type="tel"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-orange focus:bg-white transition-colors"
                placeholder="e.g. +91 98930 11111"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-brand-dark uppercase tracking-wider mb-1.5">Current Location *</label>
              <input
                type="text"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-orange focus:bg-white transition-colors"
                placeholder="e.g. Bhopal"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-brand-dark uppercase tracking-wider mb-1.5">Relevant Experience (Years) *</label>
              <input
                type="number"
                step="0.5"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-orange focus:bg-white transition-colors"
                placeholder="e.g. 2.5"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-brand-dark uppercase tracking-wider mb-1.5">Resume Link *</label>
            <input
              type="url"
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-orange focus:bg-white transition-colors"
              placeholder="Link to GDrive, Dropbox or LinkedIn PDF resume..."
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-brand-dark uppercase tracking-wider mb-1.5">Cover Letter / Why should we hire you? *</label>
            <textarea
              required
              rows={3}
              className="w-full bg-gray-50 border border-gray-250 rounded-lg px-4 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-orange focus:bg-white transition-colors resize-none"
              placeholder="Tell us about your achievements and fit for this role..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmittingCareer}
            className="w-full mt-2 bg-brand-orange hover:bg-brand-ctaHover text-white rounded-lg py-3 font-semibold text-sm transition-colors flex items-center justify-center gap-1.5 disabled:opacity-85 shadow-md"
          >
            {isSubmittingCareer ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting Application...
              </>
            ) : (
              <>
                Submit Application ↗
              </>
            )}
          </motion.button>

          <AnimatePresence>
            {careerSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-450 p-4 rounded-lg text-xs font-semibold flex items-start gap-2 mt-2"
              >
                <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold block">Application Submitted!</span>
                  We will review your profile and contact you shortly.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </div>
  );
};

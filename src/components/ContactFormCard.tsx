import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';

const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE'; // <-- yaha apni key daalo

export const ContactFormCard: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: "5e01a64d-3c8f-410a-9eb4-7d8c7fa36660",
          subject: `New Inquiry from ${formData.fullName} - Ad Wise Tech`,
          from_name: formData.fullName,
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company_name: formData.companyName,
          service_interested: formData.service,
          monthly_budget: formData.budget,
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          companyName: '',
          service: '',
          budget: '',
          message: ''
        });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#F0F0F0] text-left">
      <h3 className="font-display font-black text-brand-dark text-xl sm:text-2xl mb-1">
        Send Us a Message
      </h3>
      <p className="text-xs text-gray-400 mb-6">
        Fill the form below and our team will get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1 (Name & Email) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-brand-dark uppercase tracking-wider mb-1.5">Full Name *</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-[#F8F9FC] border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-xs text-brand-navy placeholder-[#94A3B8] focus:outline-none focus:border-[#E91E8C] focus:ring-2 focus:ring-[#E91E8C]/10 transition-colors"
              placeholder="e.g. Rahul Verma"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-brand-dark uppercase tracking-wider mb-1.5">Email Address *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#F8F9FC] border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-xs text-brand-navy placeholder-[#94A3B8] focus:outline-none focus:border-[#E91E8C] focus:ring-2 focus:ring-[#E91E8C]/10 transition-colors"
              placeholder="e.g. rahul@example.com"
            />
          </div>
        </div>

        {/* Row 2 (Phone & Company) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-brand-dark uppercase tracking-wider mb-1.5">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-[#F8F9FC] border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-xs text-brand-navy placeholder-[#94A3B8] focus:outline-none focus:border-[#E91E8C] focus:ring-2 focus:ring-[#E91E8C]/10 transition-colors"
              placeholder="e.g. +91 98930 11111"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-brand-dark uppercase tracking-wider mb-1.5">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full bg-[#F8F9FC] border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-xs text-brand-navy placeholder-[#94A3B8] focus:outline-none focus:border-[#E91E8C] focus:ring-2 focus:ring-[#E91E8C]/10 transition-colors"
              placeholder="e.g. My Business"
            />
          </div>
        </div>

        {/* Row 3 (Service Dropdown) */}
        <div>
          <label className="block text-[11px] font-bold text-brand-dark uppercase tracking-wider mb-1.5">Service Interested In *</label>
          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-[#F8F9FC] border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-xs text-brand-navy focus:outline-none focus:border-[#E91E8C] focus:ring-2 focus:ring-[#E91E8C]/10 transition-colors"
          >
            <option value="">Select a service...</option>
            <option value="Social Media Marketing">Social Media Marketing</option>
            <option value="Search Engine Optimization">Search Engine Optimization</option>
            <option value="PPC Advertising">PPC Advertising</option>
            <option value="Website Development">Website Development</option>
            <option value="Graphic Designing">Graphic Designing</option>
            <option value="Performance Marketing">Performance Marketing</option>
            <option value="Offline Marketing">Offline Marketing</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Row 4 (Monthly Budget Dropdown) */}
        <div>
          <label className="block text-[11px] font-bold text-brand-dark uppercase tracking-wider mb-1.5">Monthly Budget *</label>
          <select
            name="budget"
            required
            value={formData.budget}
            onChange={handleChange}
            className="w-full bg-[#F8F9FC] border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-xs text-brand-navy focus:outline-none focus:border-[#E91E8C] focus:ring-2 focus:ring-[#E91E8C]/10 transition-colors"
          >
            <option value="">Select a budget range...</option>
            <option value="Under ₹25,000">Under ₹25,000</option>
            <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
            <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
            <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 - ₹2,50,000</option>
            <option value="₹2,50,000+">₹2,50,000+</option>
          </select>
        </div>

        {/* Row 5 (Message Textarea) */}
        <div>
          <label className="block text-[11px] font-bold text-brand-dark uppercase tracking-wider mb-1.5">Message *</label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-[#F8F9FC] border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-xs text-brand-navy placeholder-[#94A3B8] focus:outline-none focus:border-[#E91E8C] focus:ring-2 focus:ring-[#E91E8C]/10 transition-colors resize-none"
            placeholder="Tell us about your project and goals..."
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-bold rounded-full py-3.5 text-sm transition-colors flex items-center justify-center gap-1.5 disabled:opacity-85 shadow-md"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              Send Message →
            </>
          )}
        </motion.button>

        {/* Trust Badges */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 border-t border-gray-100 pt-4 text-[10px] text-[#94A3B8] font-medium">
          <span>🔒 100% Confidential</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-250" />
          <span>⚡ Reply in 24 hours</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-250" />
          <span>✅ Free Consultation</span>
        </div>

        {/* Success Alert */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-650 p-4 rounded-lg text-xs font-semibold flex items-start gap-2.5 mt-2"
            >
              <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-bold block">Message sent successfully!</span>
                Our marketing team will analyze your requirements and contact you shortly.
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Alert */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-600 p-3 rounded-lg text-xs font-semibold mt-2">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { services } from '../constants/mockData';

interface FooterProps {
  onNavClick: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer id="contact" className="bg-brand-navy text-brand-muted pt-10 pb-4 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* COL 1 - Brand Info */}
          <div className="col-span-2 md:col-span-1 text-left">
            <div className="flex items-center gap-2 cursor-pointer mb-3" onClick={() => onNavClick('home')}>
              <div className="w-24 h-12 flex-shrink-0">
                <img src="/logo.png" alt="Ad Wise Tech Logo" className="w-full h-full object-contain" />
              </div>
            </div>

            <p className="text-xs text-brand-muted leading-relaxed mt-2 mb-3">
              Your Trusted Partner for Digital Growth, From Bhopal to the World.
            </p>

            <div className="flex items-center gap-3 mt-2 mb-3">
              <a href="https://www.facebook.com/profile.php?id=61576342376816" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-muted hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300">
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.instagram.com/adwisetech_/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-muted hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300">
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.linkedin.com/company/ad-wise-tech/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-muted hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300">
                <FaLinkedin className="w-3.5 h-3.5" />
              </a>
              <a href="https://youtu.be/D8vuM9C20Kk?si=wefQTFRP2m768LEQ" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-muted hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300">
                <FaYoutube className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 pt-3 mt-3" />

            {/* Contact Info Stack */}
            <div className="flex flex-col gap-2 mt-3">
              {/* Item 1 */}
              <div className="flex items-center gap-2 text-left">
                <MapPin className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                <span className="text-xs text-brand-muted">Bhopal, Madhya Pradesh, India</span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-2 text-left">
                <Phone className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                <a href="tel:+919171038075,+91-8319793311" className="text-xs text-brand-muted hover:text-brand-orange transition-colors">
                  +91 91710 38075, +91-8319793311 
                </a>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-2 text-left">
                <Mail className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                <a href="mailto:contact@adwisetech.com" className="text-xs text-brand-muted hover:text-brand-orange transition-colors">
                  contact@adwisetech.com
                </a>
              </div>

              {/* Item 4 */}
              <div className="flex items-center gap-2 text-left">
                <Clock className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                <span className="text-xs text-brand-muted">Mon - Sat: 10:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* COL 2 - Quick Links */}
          <div className="col-span-1 text-left">
            <h4 className="text-white font-bold text-xs md:text-sm tracking-wider uppercase mb-2 md:mb-3">
              Quick Links
            </h4>
            <ul className="space-y-1.5 md:space-y-2">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Careers', 'Contact Us'].map((link) => {
                const sectionId = link === 'About Us' ? 'why-choose-us' : link === 'Contact Us' ? 'contact-page' : link.toLowerCase().replace(' ', '-');
                return (
                  <li key={link} className="text-left">
                    <button
                      onClick={() => onNavClick(sectionId)}
                      className="text-xs text-brand-muted hover:text-brand-orange transition-all block py-0.5"
                    >
                      {link}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* COL 3 - Our Services */}
          <div className="col-span-1 text-left">
            <h4 className="text-white font-bold text-xs md:text-sm tracking-wider uppercase mb-2 md:mb-3">
              Our Services
            </h4>
            <ul className="space-y-1.5 md:space-y-2">
              {services.map((s) => (
                <li key={s.id} className="text-left">
                  <button
                    onClick={() => onNavClick(s.id)}
                    className="text-left text-xs text-brand-muted hover:text-brand-orange transition-all py-0.5 block"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4 - Find Us */}
          <div className="col-span-2 md:col-span-1 text-left">
            <h4 className="text-white font-bold text-xs md:text-sm tracking-wider uppercase mb-2 md:mb-3">
              FIND US
            </h4>

            <div className="text-xs text-brand-muted mb-2 flex items-center gap-1.5 font-semibold">
              <span>📍</span> Our Location
            </div>

            {/* Google Maps iframe */}
            <div className="w-full h-[150px] rounded-[10px] border border-white/10 overflow-hidden shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.179846338119!2d77.43282647517114!3d23.236541679024356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c437e3c4f3b03%3A0xf073ac017266a37!2sAD%20WISE%20TECH%20%7C%20Best%20AI%20Digital%20Marketing%20Company%20%7C%20SEO%2C%20SMM%20%26%20PPC%20Ads%20Agency%20in%20Bhopal!5e0!3m2!1sen!2sin!4v1783339639157!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Ad Wise Tech Google Maps Location"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/5 pt-4 mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <span className="text-[10px] text-brand-secondary">
            © {new Date().getFullYear()} AD Wise Tech. All Rights Reserved. Bhopal, MP.
          </span>
          <div className="flex gap-4 text-[10px] text-brand-secondary">
            <a href="#privacy" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#terms" className="hover:text-brand-orange transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

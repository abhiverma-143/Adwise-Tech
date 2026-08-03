import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { ContactFormCard } from '../components/ContactFormCard';

export const Contact: React.FC = () => {
  return (
    <div className="transition-all duration-300">
      {/* HERO SECTION */}
      <section className="bg-white py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          {/* Badge */}
          <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent font-bold text-xs uppercase tracking-widest block mb-3">
            CONTACT US
          </span>

          {/* Heading */}
          <h1 className="font-display font-black text-3xl lg:text-4xl text-brand-navy tracking-tight leading-tight">
            Let's <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Talk Business</span>
          </h1>

          {/* Subtitle */}
          <p className="text-brand-secondary text-sm sm:text-base leading-relaxed max-w-2xl mt-3 mb-0">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond soon.
          </p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="bg-[#F8F9FC] py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT COLUMN (40%) */}
            <div className="lg:col-span-5 text-left flex flex-col gap-8">
              <div>
                <h2 className="font-display font-black text-brand-navy text-3xl mb-3">
                 <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Get In Touch</span>
                </h2>
                <p className="text-brand-secondary text-sm leading-relaxed">
                  Your trusted partner for digital growth in Bhopal and across the World.
                </p>
              </div>

              {/* Cards Stack */}
              <div className="flex flex-col gap-4">
                {/* Card 1: Visit Us */}
                <div className="bg-white rounded-xl border border-[#F0F0F0] shadow-sm overflow-hidden">
                  {/* <div className="p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider block mb-0.5">VISIT US</span>
                      <span className="text-xs sm:text-sm font-semibold text-brand-navy">Bhopal, Madhya Pradesh, India</span>
                    </div>
                  </div> */}

                  {/* Embedded Map */}
                  <div className="w-full h-[180px] border-t border-[#F0F0F0]">
                    <iframe
                      title="Ad Wise Tech Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.179846338119!2d77.43282647517114!3d23.236541679024356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c437e3c4f3b03%3A0xf073ac017266a37!2sAD%20WISE%20TECH%20%7C%20Best%20AI%20Digital%20Marketing%20Company%20%7C%20SEO%2C%20SMM%20%26%20PPC%20Ads%20Agency%20in%20Bhopal!5e0!3m2!1sen!2sin!4v1783339639157!5m2!1sen!2sin"
                      className="w-full h-full"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                {/* Card 2: Call Us */}
                <div className="bg-white rounded-xl border border-[#F0F0F0] p-5 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider block mb-0.5">CALL US</span>
                    <a href="tel:+919171038075, +91-8319793311 " className="text-xs sm:text-sm font-semibold text-brand-navy hover:text-brand-primary transition-colors block">
                      +91 91710 38075, +91-8319793311 
                    </a>
                    {/* <span className="text-[10px] text-brand-secondary font-medium mt-0.5 block">Mon-Sat, 10AM-7PM</span> */}
                  </div>
                </div>

                {/* Card 3: Email Us */}
                <div className="bg-white rounded-xl border border-[#F0F0F0] p-5 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider block mb-0.5">EMAIL US</span>
                    <a href="mailto:contact@adwisetech.com" className="text-xs sm:text-sm font-semibold text-brand-navy hover:text-brand-accent transition-colors block">
                      contact@adwisetech.com
                    </a>
                  </div>
                </div>

                {/* Card 4: WhatsApp */}
                {/* <div className="bg-white rounded-xl border border-[#F0F0F0] p-5 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-cta/10 flex items-center justify-center text-brand-cta flex-shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-grow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider block mb-0.5">WHATSAPP</span>
                      <span className="text-xs sm:text-sm font-semibold text-brand-navy">Chat with us</span>
                    </div>
                    <a
                      href="https://wa.me/919171038075"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] text-white text-center font-bold text-[11px] px-4 py-2 rounded-lg hover:bg-[#20ba5a] transition-colors w-max shadow-sm"
                    >
                      Open WhatsApp →
                    </a>
                  </div>
                </div> */}
              </div>

              {/* Social Icons Row */}
              <div className="flex items-center gap-3 mt-2">
                <a href="https://www.facebook.com/profile.php?id=61576342376816" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-secondary hover:bg-brand-cta hover:text-white hover:border-brand-cta transition-all duration-300">
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/adwisetech_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-secondary hover:bg-brand-cta hover:text-white hover:border-brand-cta transition-all duration-300">
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/company/ad-wise-tech/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-secondary hover:bg-brand-cta hover:text-white hover:border-brand-cta transition-all duration-300">
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a href="https://youtu.be/D8vuM9C20Kk?si=wefQTFRP2m768LEQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-secondary hover:bg-brand-cta hover:text-white hover:border-brand-cta transition-all duration-300">
                  <FaYoutube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN (60%) */}
            <div className="lg:col-span-7">
              <ContactFormCard />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
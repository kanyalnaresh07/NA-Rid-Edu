import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, CheckCircle, MessageCircle, Linkedin } from 'lucide-react';

interface ContactProps {
  translations: any;
}

const Contact: React.FC<ContactProps> = ({ translations }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = translations.contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: <Mail size={18} />, label: t.emailLabelInfo, value: t.email, link: `mailto:${t.email}` },
    { icon: <Phone size={18} />, label: t.phoneLabelInfo, value: t.phone, link: `tel:${t.phone.replace(/\s+/g, '')}` },
    { icon: <MessageCircle size={18} />, label: t.whatsappLabelInfo, value: t.whatsapp, link: `https://wa.me/${t.whatsapp.replace(/\D/g, '')}` },
    { icon: <Linkedin size={18} />, label: t.linkedinLabelInfo, value: t.linkedin, link: "https://www.linkedin.com/in/naresh-singh-kanyal-918881180/" },
    { icon: <MapPin size={18} />, label: t.locationLabelInfo, value: t.location, link: "https://maps.google.com/?q=Uttarakhand,India" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 md:mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
          {t.title}
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-xs md:text-sm">
          {t.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
        {/* Contact Info - Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col space-y-4"
        >
          {contactInfo.map((info, idx) => (
            <a 
              key={idx} 
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 md:p-5 rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-md hover:bg-slate-900/60 hover:border-cyan-500/30 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950/50 border border-white/5 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all">
                {info.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{info.label}</span>
                <span className="text-sm md:text-base font-bold text-white group-hover:text-cyan-400 transition-colors">{info.value}</span>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Contact Form - Right Column */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-900/40 backdrop-blur-md border border-white/5 p-6 md:p-8 rounded-3xl"
        >
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-12"
            >
              <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-cyan-400" />
              </div>
              <h3 className="text-xl font-black text-white mb-2">{t.successMessage}</h3>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-lg font-black text-white uppercase tracking-widest mb-6">{t.formTitle}</h3>
              
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                  {t.nameLabel}
                </label>
                <input 
                  type="text" 
                  placeholder={t.namePlaceholder}
                  required
                  className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-700 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                  {t.emailLabel}
                </label>
                <input 
                  type="email" 
                  placeholder={t.emailPlaceholder}
                  required
                  className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-700 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                  {t.subjectLabel}
                </label>
                <input 
                  type="text" 
                  placeholder={t.subjectPlaceholder}
                  required
                  className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-700 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                  {t.messageLabel}
                </label>
                <textarea 
                  required
                  placeholder={t.messagePlaceholder}
                  rows={4}
                  className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-700 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black uppercase tracking-widest py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm mt-2"
              >
                <Send size={16} className="shrink-0" />
                {t.sendButton}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

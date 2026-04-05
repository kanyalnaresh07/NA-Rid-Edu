import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

interface PrivacyPolicyProps {
  translations: any;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ translations }) => {
  const t = translations.privacy;

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 md:mb-20"
      >
        <div className="w-20 h-20 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
          <ShieldCheck className="w-10 h-10 text-cyan-400" />
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic mb-4">
          {t.title}
        </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-12"
      >
        {t.sections.map((section: any, index: number) => (
          <div key={index} className="bg-slate-900/40 backdrop-blur-md border border-white/5 p-8 md:p-10 rounded-3xl shadow-xl hover:border-cyan-500/20 transition-colors">
            <h2 className="text-xl md:text-2xl font-black text-cyan-400 uppercase tracking-widest mb-6 flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-sm border border-cyan-500/30 shrink-0">
                {index + 1}
              </span>
              {section.heading.replace(/^\d+\.\s*/, '')}
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              {section.content}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;

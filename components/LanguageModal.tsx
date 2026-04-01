import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { AIRFOCUS_LOGO } from '../constants';

interface LanguageModalProps {
  isOpen: boolean;
  onSelect: (lang: Language) => void;
}

const LanguageModal: React.FC<LanguageModalProps> = ({ isOpen, onSelect }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-slate-900 border border-cyan-500/30 rounded-3xl p-8 shadow-[0_0_100px_rgba(6,182,212,0.2)] overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 blur-3xl rounded-full"></div>
            
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="mb-8 scale-110">
                {AIRFOCUS_LOGO}
              </div>
              
              <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-2 italic">
                CHOOSE <span className="text-cyan-400">LANGUAGE</span>
              </h2>
              <p className="text-slate-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">
                Select your preferred language for the hub
              </p>

              <div className="grid grid-cols-1 gap-4 w-full">
                <button
                  onClick={() => onSelect('en')}
                  className="group relative flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex flex-col items-start relative z-10">
                    <span className="text-white font-black uppercase tracking-wider text-xl">English</span>
                    <span className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">Global Industrial Standard</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/20 group-hover:bg-cyan-500 group-hover:text-white transition-all relative z-10">
                    <span className="text-sm font-black tracking-tighter">EN</span>
                  </div>
                </button>

                <button
                  onClick={() => onSelect('hi')}
                  className="group relative flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex flex-col items-start relative z-10">
                    <span className="text-white font-black uppercase tracking-wider text-xl">हिन्दी</span>
                    <span className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">भारतीय औद्योगिक भाषा</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/20 group-hover:bg-cyan-500 group-hover:text-white transition-all relative z-10">
                    <span className="text-sm font-black tracking-tighter">हिं</span>
                  </div>
                </button>
              </div>

              <div className="mt-8 flex items-center gap-2">
                <div className="w-1 h-1 bg-cyan-500 rounded-full animate-ping"></div>
                <p className="text-slate-600 text-[8px] uppercase tracking-[0.4em] font-black">
                  SECURE INTERFACE READY
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LanguageModal;

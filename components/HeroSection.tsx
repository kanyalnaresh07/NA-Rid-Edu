import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { PageView, Language } from '../types';
import { AIRFOCUS_LOGO } from '../constants';
import { X, Zap, Wrench, CheckCircle2, ChevronRight } from 'lucide-react';

interface HeroProps {
  title: string;
  description: string;
  onGlossaryClick: () => void;
  onAboutClick: () => void;
  lang: Language;
  setLang: (l: Language) => void;
  translations: any;
}

const HeroSection: React.FC<HeroProps> = ({ 
  title, description, onGlossaryClick, onAboutClick, 
  lang, setLang, translations 
}) => {
  const [showChangelog, setShowChangelog] = useState(false);
  const isHi = lang === 'hi';

  const changelog = {
    version: "V.1.2.6",
    major: [
      { title: isHi ? "स्मार्ट सर्च इंजन" : "Smart Search Engine", desc: isHi ? "समानार्थी शब्दों और शॉर्ट फॉर्म के साथ उन्नत खोज" : "Advanced search with synonyms and short-form mapping" },
      { title: isHi ? "ग्लॉसरी और डिपार्टमेंट सिस्टम" : "Glossary & Department System", desc: isHi ? "विस्तृत औद्योगिक ज्ञान आधार" : "Comprehensive industrial knowledge base" }
    ],
    minor: [
      { title: isHi ? "प्रीमियम लोगो एनिमेशन" : "Premium Logo Animation", desc: isHi ? "निरंतर मोशन और शाइन इफेक्ट" : "Continuous motion and shimmer effects" },
      { title: isHi ? "हिंदी भाषा समर्थन" : "Hindi Language Support", desc: isHi ? "पूर्ण देवनागरी टाइपोग्राफी" : "Full Devanagari typography" }
    ],
    fixes: [
      { title: isHi ? "सर्च एरर फिक्स" : "Search Error Fix", desc: isHi ? "सर्च क्रैश और रेफरेंस एरर को ठीक किया गया" : "Resolved search crashes and reference errors" },
      { title: isHi ? "फोटो फिट फिक्स" : "Photo Fit Fix", desc: isHi ? "प्रोफाइल फोटो को सर्कल के अनुसार फिक्स किया गया" : "Fixed profile photo alignment in circle" },
      { title: isHi ? "हिंदी रेंडरिंग" : "Hindi Rendering", desc: isHi ? "अनुवाद और फोंट डिस्प्ले में सुधार" : "Improved translation and font display" }
    ]
  };
  const words = title.split(' ');

  // Animation variants for letters - simplified 2D
  const letterVariants: any = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.02,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden flex flex-col bg-transparent">
      {/* Decorative vertical lines */}
      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-4 md:right-12 space-y-4 md:space-y-8 z-20 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div 
            key={i}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: i === 1 ? "6rem" : "3rem", opacity: 1 }}
            transition={{ delay: 1.5 + (i * 0.2), duration: 1 }}
            className="w-[1px] bg-white/10 relative overflow-hidden"
          >
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
              className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
            />
          </motion.div>
        ))}
      </div>

      {/* Top Navigation Bar */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        className="relative z-30 flex justify-between items-center px-4 sm:px-8 py-6 md:px-16 md:py-8 w-full"
      >
        <div className="scale-75 sm:scale-90 md:scale-100 origin-left shrink-0">
           {AIRFOCUS_LOGO}
        </div>

        <div className="flex items-center gap-4 shrink-0">
          {/* Language Change Option */}
          <div className="flex items-center gap-1 bg-slate-950/40 backdrop-blur-xl p-1 rounded-lg border border-white/10 shadow-2xl">
            <button 
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-md text-[10px] md:text-xs font-black tracking-widest transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 ${lang === 'en' ? 'bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('hi')}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-md text-[10px] md:text-xs font-black tracking-widest transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 ${lang === 'hi' ? 'bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            >
              हिं
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Content Area */}
      <motion.div 
        className="flex-grow flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 z-20 py-8 md:py-16 w-full max-w-[100vw]"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12 w-full">
          
          <div className="flex flex-col gap-5 w-full lg:flex-1 lg:max-w-[60%] xl:max-w-[65%]">
              <div className="relative">
                {/* Decorative background glow for title */}
                <div className="absolute -left-10 -top-10 md:-left-20 md:-top-20 w-40 h-40 md:w-80 md:h-80 bg-cyan-500/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
                
                <h1 className="text-[clamp(2.2rem,5.5vw,5.5rem)] xl:text-[clamp(3rem,6.5vw,7rem)] font-black text-white leading-[0.9] tracking-tighter uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] relative z-10 break-words">
                  {words.map((word, wordIndex) => (
                    <span key={wordIndex} className={`inline-block whitespace-nowrap ${wordIndex >= 1 ? "text-cyan-500" : ""}`}>
                      {lang === 'hi' ? (
                        <motion.span
                          custom={wordIndex * 10}
                          variants={letterVariants}
                          initial="initial"
                          animate="animate"
                          className="inline-block relative"
                        >
                          {word}
                        </motion.span>
                      ) : (
                        word.split('').map((char, charIndex) => (
                          <motion.span
                            key={charIndex}
                            custom={wordIndex * 10 + charIndex}
                            variants={letterVariants}
                            initial="initial"
                            animate="animate"
                            className="inline-block relative"
                          >
                            {char}
                          </motion.span>
                        ))
                      )}
                      <span className="inline-block">&nbsp;</span>
                    </span>
                  ))}
                </h1>
              </div>
              
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: "circOut" }}
                className="flex items-center gap-0 max-w-full"
              >
                  <div className="h-1 md:h-2.5 w-16 md:w-32 bg-cyan-500 rounded-full shrink-0"></div>
                  <div className="h-[1px] w-full max-w-[12rem] md:max-w-md bg-cyan-500/20"></div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-2 md:mt-8 w-full max-w-xl relative"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500 rounded-full"></div>
                <div className="bg-slate-950/60 backdrop-blur-xl p-5 md:p-10 rounded-r-2xl md:rounded-r-3xl border border-white/5 shadow-2xl ml-0 w-full">
                  <p className="text-slate-200 text-sm md:text-lg font-bold leading-relaxed">
                    {description}
                  </p>
                </div>
              </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 md:gap-6 items-stretch lg:items-end w-full lg:w-auto shrink-0 mt-8 lg:mt-12 lg:translate-x-4 xl:translate-x-8">
            <motion.button 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              onClick={onGlossaryClick}
              className="group relative py-4 px-6 md:py-8 md:px-12 bg-slate-950/80 text-white font-black text-sm md:text-xl xl:text-2xl uppercase tracking-[0.2em] transition-all duration-500 flex items-center gap-3 md:gap-4 rounded-xl md:rounded-2xl border border-cyan-500/30 hover:border-cyan-400 w-full sm:flex-1 lg:w-auto justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl md:rounded-2xl"></div>
              <span className="relative z-10 flex items-center gap-3 md:gap-4 whitespace-nowrap">
                <div className="relative animate-spin-x flex items-center justify-center h-[1.2em]">
                  <span className="block backface-hidden" style={{ transform: 'rotateX(0deg) translateZ(0.6em)' }}>{translations.discover}</span>
                  <span className="absolute inset-0 flex items-center justify-center backface-hidden" style={{ transform: 'rotateX(90deg) translateZ(0.6em)' }}>{translations.discover}</span>
                  <span className="absolute inset-0 flex items-center justify-center backface-hidden" style={{ transform: 'rotateX(180deg) translateZ(0.6em)' }}>{translations.discover}</span>
                  <span className="absolute inset-0 flex items-center justify-center backface-hidden" style={{ transform: 'rotateX(270deg) translateZ(0.6em)' }}>{translations.discover}</span>
                </div>
                <svg 
                  className="w-5 h-5 md:w-8 md:h-8 text-cyan-400 transform group-hover:translate-x-2 transition-transform shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </motion.button>

            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(6,182,212,0.05)" }}
              whileTap={{ scale: 0.98 }}
              onClick={onAboutClick}
              className="group relative py-4 px-6 md:py-6 md:px-10 bg-transparent text-cyan-400 font-black text-xs md:text-base xl:text-lg uppercase tracking-[0.3em] transition-all duration-500 flex items-center gap-3 rounded-xl md:rounded-2xl border border-cyan-500/20 hover:border-cyan-400 w-full sm:flex-1 lg:w-auto justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
            >
              <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-cyan-500 rounded-full"></div>
              <span className="relative z-10 flex items-center gap-3 whitespace-nowrap">
                <svg className="w-4 h-4 md:w-6 md:h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {translations.navAbout}
              </span>
            </motion.button>
          </div>
        </div>
      </motion.div>
      
      {/* Version Indicator (Replaces Scroll) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="relative pb-8 w-full flex flex-col items-center gap-2 z-30 mt-auto"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowChangelog(true)}
          className="flex flex-col items-center gap-2 group focus:outline-none bg-slate-950/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5"
        >
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-cyan-500/30 rounded-full flex justify-center p-1 group-hover:border-cyan-400/60 transition-colors">
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 md:h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            />
          </div>
          <span className="text-[8px] md:text-[10px] font-black text-cyan-500/60 uppercase tracking-[0.3em] group-hover:text-cyan-400 transition-colors">
            version.{changelog.version}
          </span>
        </motion.button>
      </motion.div>

      {/* Changelog Modal */}
      <AnimatePresence>
        {showChangelog && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowChangelog(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-slate-900/90 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between bg-gradient-to-r from-cyan-500/10 to-transparent">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter italic">
                    {isHi ? 'अपडेट लॉग' : 'Update Log'}
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2 py-0.5 bg-cyan-500 text-slate-950 text-[10px] font-black rounded uppercase">
                      {changelog.version}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      {isHi ? 'स्थिर बिल्ड' : 'Stable Build'}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setShowChangelog(false)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
                <div className="space-y-8">
                  {/* Major */}
                  <section>
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="text-cyan-400" size={16} />
                      <h3 className="text-xs font-black text-cyan-500 uppercase tracking-[0.3em]">
                        {isHi ? 'प्रमुख अपडेट्स' : 'Major Updates'}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {changelog.major.map((item, i) => (
                        <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 shrink-0" />
                          <div>
                            <h4 className="text-sm font-black text-white uppercase tracking-tight">{item.title}</h4>
                            <p className="text-xs text-slate-400 mt-1 font-medium">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Minor */}
                  <section>
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="text-emerald-400" size={16} />
                      <h3 className="text-xs font-black text-emerald-500 uppercase tracking-[0.3em]">
                        {isHi ? 'लघु अपडेट्स' : 'Minor Updates'}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {changelog.minor.map((item, i) => (
                        <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5">
                          <h4 className="text-xs font-black text-white uppercase tracking-tight">{item.title}</h4>
                          <p className="text-[10px] text-slate-400 mt-1 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Fixes */}
                  <section>
                    <div className="flex items-center gap-2 mb-4">
                      <Wrench className="text-amber-400" size={16} />
                      <h3 className="text-xs font-black text-amber-500 uppercase tracking-[0.3em]">
                        {isHi ? 'बग फिक्स' : 'Bug Fixes'}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {changelog.fixes.map((item, i) => (
                        <div key={i} className="px-3 py-2 bg-white/5 rounded-xl border border-white/5 flex items-center gap-2">
                          <div className="w-1 h-1 bg-amber-500 rounded-full" />
                          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 bg-slate-950/50 border-t border-white/5 flex items-center justify-between">
                <p className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em]">
                  {isHi ? 'सिस्टम स्थिति: इष्टतम' : 'System Status: Optimal'}
                </p>
                <button 
                  onClick={() => setShowChangelog(false)}
                  className="flex items-center gap-2 text-[10px] font-black text-cyan-400 uppercase tracking-widest hover:gap-3 transition-all"
                >
                  {isHi ? 'जारी रखें' : 'Continue'}
                  <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.02, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-6 left-6 md:bottom-12 md:left-12 text-white font-black text-6xl md:text-[12rem] uppercase select-none pointer-events-none tracking-tighter leading-none"
      >
        HUB
      </motion.div>
    </div>
  );
};

export default HeroSection;

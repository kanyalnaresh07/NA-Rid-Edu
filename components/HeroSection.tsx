import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AIRFOCUS_LOGO } from '../constants';
import { Language } from '../types';
import { ChevronRight, Target, Lightbulb, CheckCircle2, Wrench, Sparkles } from 'lucide-react';

interface HeroProps {
  title: string;
  description: string;
  onGlossaryClick: () => void;
  onAboutClick: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  translations: any;
}

const changelog = {
  major: [
    { title: "New Glossary Structure", desc: "Redesigned the glossary layout for better navigation." },
    { title: "Multi-language Support", desc: "Added full Hindi language support." }
  ],
  minor: [
    { title: "UI Improvements", desc: "Enhanced animations and visual feedback." },
    { title: "Performance", desc: "Optimized rendering for smoother experience." }
  ],
  fixes: [
    { title: "Fixed navigation bugs" },
    { title: "Resolved layout issues on mobile" }
  ]
};

const HeroSection: React.FC<HeroProps> = ({ title, description, onGlossaryClick, onAboutClick, lang, setLang, translations }) => {
  const [showChangelog, setShowChangelog] = useState(false);
  const words = (title || "").split(' ');
  const isHi = lang === 'hi';

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

      {/* Content Area */}
      <motion.div 
        className="flex-grow flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 z-20 py-8 md:py-16 w-full max-w-[100vw]"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 w-full max-w-7xl mx-auto">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6 w-full lg:w-[55%] xl:w-1/2 z-10">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-cyan-500/30 backdrop-blur-sm w-fit"
            >
              <div className="text-cyan-400">
                <Target size={16} />
              </div>
              <span className="text-white font-bold text-xs tracking-widest uppercase">
                Manufacturing <span className="text-cyan-400">Hub</span>
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
            >
              Future-ready<br />
              Manufacturing Ecosystem
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-200 text-lg md:text-xl max-w-2xl leading-relaxed drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]"
            >
              Empowering the next generation of smart, sustainable, and globally competitive manufacturing.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 mt-4"
            >
              <button 
                onClick={onGlossaryClick}
                className="group relative px-8 py-4 bg-cyan-500/10 border border-cyan-400 rounded-xl text-white font-bold text-sm tracking-wide overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Explore Hub
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button 
                onClick={onAboutClick}
                className="group px-8 py-4 bg-transparent border border-white/20 rounded-xl text-slate-300 hover:text-white hover:border-white/40 font-bold text-sm tracking-wide transition-all flex items-center gap-2"
              >
                Learn More
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Column (Card) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full lg:w-[45%] xl:w-[40%] z-10"
          >
            <div className="relative bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
              
              {/* Top Section: Manufacturing Hub */}
              <div className="p-8 pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-amber-400 bg-amber-500/10 p-2.5 rounded-full border border-amber-500/20">
                    <Target className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white font-bold text-sm tracking-widest uppercase">
                    Manufacturing <span className="text-cyan-400">Hub</span>
                  </h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  A manufacturing hub is a centralized industrial ecosystem where production, supply chain, skilled workforce, and infrastructure come together to enable efficient, large-scale, and cost-effective manufacturing.
                </p>
              </div>

              {/* Separator */}
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

              {/* Bottom Section: Vision */}
              <div className="p-8 pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-cyan-400 bg-cyan-500/10 p-2.5 rounded-full border border-cyan-500/20">
                    <Lightbulb className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white font-bold text-sm tracking-widest uppercase">
                    Vision
                  </h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Build a smart, sustainable, and globally competitive manufacturing learning system that drives innovation, creates opportunity, and delivers skilled manpower with high quality knowledge.
                </p>
              </div>

              {/* Bottom Tabs */}
              <div className="flex items-center justify-center gap-12 border-t border-white/5 bg-slate-950/30 py-4">
                <div className="relative">
                  <span className="text-white font-bold text-xs tracking-widest uppercase">Overview</span>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                </div>
                <div className="relative">
                  <span className="text-slate-500 font-bold text-xs tracking-widest uppercase hover:text-slate-300 cursor-pointer transition-colors">Vision</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Changelog Modal */}
      <AnimatePresence>
        {showChangelog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              onClick={() => setShowChangelog(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/20 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                      {isHi ? 'नया क्या है?' : 'What\'s New?'}
                    </h2>
                    <p className="text-sm font-bold text-cyan-500 uppercase tracking-widest mt-1">
                      {isHi ? 'संस्करण 2.0.0' : 'Version 2.0.0'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
                <div className="space-y-8">
                  {/* Major */}
                  <section>
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="text-cyan-400" size={18} />
                      <h3 className="text-sm font-black text-cyan-500 uppercase tracking-[0.3em]">
                        {isHi ? 'प्रमुख अपडेट्स' : 'Major Updates'}
                      </h3>
                    </div>
                    <div className="space-y-3">
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

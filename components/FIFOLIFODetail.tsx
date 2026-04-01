
import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface FIFOLIFODetailProps {
  onBack: () => void;
  lang: Language;
}

const FIFOLIFODetail: React.FC<FIFOLIFODetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "FIFO vs LIFO Logic",
      subtitle: "Inventory Rotation Intelligence",
      backBtn: "Back to Hub",
      hero: {
        question: "What is FIFO & LIFO?",
        desc: "These are material rotation methods used in warehouses to decide which stock to use first based on the time it entered the store.",
        mantra: "Inventory flow determines product freshness."
      },
      fifo: {
        title: "FIFO: First-In, First-Out",
        tag: "Best for Manufacturing",
        desc: "The material that arrives FIRST must be used FIRST.",
        logic: "Oldest Stock ➔ Production Line",
        whyUse: [
          "Prevents material expiry",
          "Avoids rusted or dusty parts",
          "Maintain fresh batch quality",
          "Standard ISO requirement"
        ],
        analogy: "Like a queue at an ATM: person in front finishes first.",
        color: "emerald"
      },
      lifo: {
        title: "LIFO: Last-In, First-Out",
        tag: "Special Storage Only",
        desc: "The material that arrives LAST is used FIRST.",
        logic: "Newest Stock ➔ Production Line",
        whyUse: [
          "Used for bulk items like coal or sand",
          "When top layer is easier to pick",
          "Specific tax accounting needs",
          "Non-perishable items only"
        ],
        analogy: "Like a stack of plates: the plate on top is used first.",
        color: "rose"
      },
      comparison: {
        title: "Technical Comparison",
        headers: ["Point", "FIFO", "LIFO"],
        rows: [
          { p: "Primary Goal", f: "No Old Stock Left", l: "Fast Access (Top layer)" },
          { p: "Application", f: "Electronics, Rubber, Food", l: "Coal, Grain, Sand" },
          { p: "Risk", f: "Very Low (Safe)", l: "High (Old stock rots)" },
          { p: "Warehouse Cost", f: "Higher (Need flow racks)", l: "Lower (Standard stack)" }
        ]
      },
      summary: "In 99% of manufacturing factories, FIFO is MANDATORY."
    },
    hi: {
      title: "FIFO बनाम LIFO लॉजिक",
      subtitle: "इन्वेंटरी रोटेशन और रवानगी",
      backBtn: "वापस जाएं",
      hero: {
        question: "FIFO और LIFO क्या है?",
        desc: "ये गोदाम (Warehouse) में सामान इस्तेमाल करने के तरीके हैं जो यह तय करते हैं कि कौन सा माल पहले निकलेगा और कौन सा बाद में।",
        mantra: "इन्वेंटरी फ्लो ही प्रोडक्ट की ताज़गी तय करता है।"
      },
      fifo: {
        title: "FIFO: First-In, First-Out",
        tag: "फैक्ट्री के लिए बेस्ट",
        desc: "जो सामान स्टोर में पहले (First) आया, उसे पहले इस्तेमाल करना।",
        logic: "सबसे पुराना माल ➔ सबसे पहले उपयोग",
        whyUse: [
          "सामान को एक्सपायर होने से बचाना",
          "जंग या धूल लगने से बचाव",
          "हमेशा फ्रेश मटेरियल का उपयोग",
          "ISO नियमों के लिए ज़रूरी"
        ],
        analogy: "ATM की लाइन जैसा: जो पहले खड़ा है, उसका काम पहले होगा।",
        color: "emerald"
      },
      lifo: {
        title: "LIFO: Last-In, First-Out",
        tag: "खास स्टोरेज के लिए",
        desc: "जो सामान सबसे आखिर (Last) में आया, उसे सबसे पहले इस्तेमाल करना।",
        logic: "नया माल ➔ सबसे पहले उपयोग",
        whyUse: [
          "कोयले या रेत जैसे ढेर वाले सामान के लिए",
          "जब ऊपर का माल उठाना आसान हो",
          "खास टैक्स या हिसाब-किताब के लिए",
          "जो सामान खराब नहीं होता (Non-perishable)"
        ],
        analogy: "बर्तनों की ढेरी जैसा: जो बर्तन सबसे ऊपर रखा है, वही पहले उठेगा।",
        color: "rose"
      },
      comparison: {
        title: "मुख्य अंतर (Technical)",
        headers: ["बिंदु", "FIFO", "LIFO"],
        rows: [
          { p: "मुख्य लक्ष्य", f: "पुराना माल न बचे", l: "आसान पहुँच (ऊपरी लेयर)" },
          { p: "कहाँ उपयोग", f: "इलेक्ट्रॉनिक्स, रबर, खाना", l: "कोयला, रेत, अनाज" },
          { p: "जोखिम (Risk)", f: "बहुत कम (सुरक्षित)", l: "ज़्यादा (पुराना माल सड़ सकता है)" },
          { p: "स्टोरेज खर्च", f: "ज़्यादा (Flow Rack चाहिए)", l: "कम (साधारण ढेरी)" }
        ]
      },
      summary: "99% मैन्युफैक्चरिंग फैक्ट्रियों में FIFO अनिवार्य (Mandatory) है।"
    }
  };

  const current = content[lang] || content['en'];

  return (
    <div className="flex flex-col gap-8 animate-in slide-in-from-right-6 duration-700 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-purple-500/20 pb-6 bg-slate-950/40 p-8 rounded-t-[40px] backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-[0_0_12px_purple]"></div>
              <span className="text-purple-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none italic font-mono">{current.title}</h3>
        </div>
        <motion.button 
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBack} 
          className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
        >
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
          {current.backBtn}
        </motion.button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-purple-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-9xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Rotation</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-purple-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-purple-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">
            "🏢 {current.hero.mantra}"
         </div>
      </div>

      {/* FIFO vs LIFO Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* FIFO Section */}
         <motion.div 
           whileHover={{ y: -5, borderColor: "rgba(16, 185, 129, 0.3)" }}
           className="bg-slate-900/60 border border-emerald-500/20 p-8 rounded-[48px] shadow-2xl space-y-10 relative overflow-hidden group"
         >
            <div className="flex justify-between items-start">
               <div className="space-y-2">
                  <h4 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter">{current.fifo.title}</h4>
                  <span className="text-emerald-500 font-black text-[10px] uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">{current.fifo.tag}</span>
               </div>
               <div className="w-16 h-16 bg-slate-900 border border-emerald-500/30 rounded-2xl flex items-center justify-center text-4xl shadow-lg">📦</div>
            </div>

            <div className="bg-slate-950 p-6 rounded-3xl border border-white/5 space-y-4">
               <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em]">Logic Flow</span>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white">IN</div>
                  <div className="h-0.5 flex-grow bg-emerald-500/30 relative">
                     <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-emerald-500 rounded-full animate-ping"></div>
                     <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-500 rounded-full animate-ping [animation-delay:0.3s]"></div>
                     <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 bg-emerald-500 rounded-full"></div>
                  </div>
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white">OUT</div>
               </div>
               <p className="text-white font-black text-sm md:text-lg italic text-center">"{current.fifo.logic}"</p>
            </div>

            <div className="space-y-4">
               <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Benefits / फायदे:</span>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.fifo.whyUse.map((reason, i) => (
                     <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_emerald]"></div>
                        <span className="text-slate-300 text-[10px] font-bold uppercase">{reason}</span>
                     </div>
                  ))}
               </div>
            </div>

            <div className="bg-emerald-500/5 p-4 rounded-2xl border border-emerald-500/20 text-center italic">
               <p className="text-[10px] text-slate-400 font-bold leading-relaxed">
                  "Analogy: {current.fifo.analogy}"
               </p>
            </div>
         </motion.div>

         {/* LIFO Section */}
         <motion.div 
           whileHover={{ y: -5, borderColor: "rgba(244, 63, 94, 0.3)" }}
           className="bg-slate-900/60 border border-rose-500/20 p-8 rounded-[48px] shadow-2xl space-y-10 relative overflow-hidden group"
         >
            <div className="flex justify-between items-start">
               <div className="space-y-2">
                  <h4 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter">{current.lifo.title}</h4>
                  <span className="text-rose-500 font-black text-[10px] uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full">{current.lifo.tag}</span>
               </div>
               <div className="w-16 h-16 bg-slate-900 border border-rose-500/30 rounded-2xl flex items-center justify-center text-4xl shadow-lg">⛰️</div>
            </div>

            <div className="bg-slate-950 p-6 rounded-3xl border border-white/5 space-y-4">
               <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.4em]">Logic Flow</span>
               <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white">OUT</div>
                  <div className="w-0.5 h-20 bg-rose-500/30 relative">
                     <div className="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 bg-rose-500 rounded-full animate-bounce"></div>
                     <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-4 h-4 bg-rose-500/40 rounded-full"></div>
                     <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-4 h-4 bg-slate-800 rounded-full"></div>
                  </div>
                  <div className="w-12 h-12 bg-rose-600 rounded-xl flex items-center justify-center text-white">IN</div>
               </div>
               <p className="text-white font-black text-sm md:text-lg italic text-center">"{current.lifo.logic}"</p>
            </div>

            <div className="space-y-4">
               <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Use Cases / कब करें उपयोग:</span>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.lifo.whyUse.map((reason, i) => (
                     <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                        <div className="w-1.5 h-1.5 bg-rose-500 rounded-full shadow-[0_0_8px_rose]"></div>
                        <span className="text-slate-300 text-[10px] font-bold uppercase">{reason}</span>
                     </div>
                  ))}
               </div>
            </div>

            <div className="bg-rose-500/5 p-4 rounded-2xl border border-rose-500/20 text-center italic">
               <p className="text-[10px] text-slate-400 font-bold leading-relaxed">
                  "Analogy: {current.lifo.analogy}"
               </p>
            </div>
         </motion.div>
      </div>

      {/* Comparison Table */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl overflow-hidden backdrop-blur-xl mt-8">
         <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
            <span className="w-12 h-1.5 bg-purple-500 shadow-[0_0_12px_purple]"></span>
            {current.comparison.title}
         </h4>
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="border-b border-white/10 text-xs md:text-sm font-black uppercase">
                     <th className="py-6 text-slate-500">{current.comparison.headers[0]}</th>
                     <th className="py-6 text-emerald-500">{current.comparison.headers[1]}</th>
                     <th className="py-6 text-rose-500">{current.comparison.headers[2]}</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {current.comparison.rows.map((row, i) => (
                     <tr key={i} className="group hover:bg-white/5 transition-colors">
                        <td className="py-6 text-white font-black text-xs md:text-base uppercase tracking-tight">{row.p}</td>
                        <td className="py-6 text-emerald-400 font-bold text-xs md:text-base italic">{row.f}</td>
                        <td className="py-6 text-rose-400 font-bold text-xs md:text-base italic">{row.l}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      {/* Summary Footer */}
      <div className="bg-purple-600 p-10 rounded-[48px] shadow-[0_0_50px_rgba(168,85,247,0.3)] text-center relative overflow-hidden group mt-8">
         <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 animate-pulse"></div>
         <div className="relative z-10 space-y-4">
            <h5 className="text-white/60 font-black text-[10px] uppercase tracking-[0.6em] mb-2">Final Policy Point</h5>
            <p className="text-white text-lg md:text-3xl font-black italic tracking-tight leading-snug">
               "{current.summary}"
            </p>
         </div>
      </div>

      {/* System Status Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_white] animate-pulse"></span>
                Rotation Policy: Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                FIFO Engine: Synced
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Module: Inventory-Flow-v1 // Warehouse Node 05</div>
      </div>
    </div>
  );
};

export default FIFOLIFODetail;

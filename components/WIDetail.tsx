
import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface WIDetailProps {
  onBack: () => void;
  lang: Language;
}

const WIDetail: React.FC<WIDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "WI / WS / OPL Training",
      subtitle: "Standardized Work Documents",
      backBtn: "Back",
      sections: {
        wi: "1. Work Instruction (WI)",
        ws: "2. Work Standard (WS)",
        opl: "3. One Point Lesson (OPL)"
      },
      wi: {
        question: "How to perform the task?",
        desc: "A detailed, step-by-step guide for operators to ensure every unit is built correctly.",
        usage: ["New operator training", "Ensuring process sequence", "Quality & Safety checkpoints"],
        elements: ["Process Name & Station", "Step-wise photos", "Torque & Settings", "Safety Gear icons"],
        example: "Step 1: Fit screw (Torque 0.6Nm) -> Step 2: Route cable as per photo."
      },
      ws: {
        question: "What is the fixed best method?",
        desc: "The standardized baseline for the entire line to maintain consistent flow and output.",
        elements: ["Standard Sequence", "Cycle Time / Takt Time", "Manpower needed", "Standard WIP"],
        example: "Total Cycle Time: 45 sec | 1 Operator = 1 Station"
      },
      opl: {
        question: "One specific learning point",
        desc: "A short, visual one-page lesson to fix a specific recurring issue or defect.",
        usage: ["Repeated defects", "New safety alert", "Recent process change"],
        example: {
          wrong: "Loose connector / No sound",
          correct: "Full lock / 'Click' sound heard"
        }
      }
    },
    hi: {
      title: "WI / WS / OPL ट्रेनिंग",
      subtitle: "स्टैंडर्ड वर्क डॉक्यूमेंट्स",
      backBtn: "वापस",
      sections: {
        wi: "1. वर्क इंस्ट्रक्शन (WI)",
        ws: "2. वर्क स्टैंडर्ड (WS)",
        opl: "3. वन पॉइंट लेसन (OPL)"
      },
      wi: {
        question: "काम कैसे करना है?",
        desc: "ऑपरेटर के लिए स्टेप-बाय-स्टेप गाइड ताकि हर काम सही तरीके से पूरा हो।",
        usage: ["नए ऑपरेटर की ट्रेनिंग", "प्रोसेस सीक्वेंस सुनिश्चित करना", "क्वालिटी और सेफ्टी चेक"],
        elements: ["प्रोसेस का नाम और स्टेशन", "फोटो के साथ स्टेप्स", "टॉर्क और सेटिंग वैल्यू", "सेफ्टी निर्देश"],
        example: "स्टेप 1: स्क्रू लगाएं (टॉर्क 0.6Nm) -> स्टेप 2: फोटो के अनुसार केबल रूट करें।"
      },
      ws: {
        question: "काम का बेस्ट और फिक्स्ड तरीका क्या है?",
        desc: "पूरी लाइन के लिए एक स्टैंडर्ड नियम ताकि प्रोडक्शन का फ्लो बना रहे।",
        elements: ["स्टैंडर्ड प्रोसेस सीक्वेंस", "साइकिल टाइम / टैक्ट टाइम", "मैनपावर की ज़रूरत", "आउटपुट उम्मीद"],
        example: "साइकिल टाइम: 45 सेकंड | 1 ऑपरेटर = 1 स्टेशन"
      },
      opl: {
        question: "सिर्फ एक महत्वपूर्ण बात",
        desc: "किसी एक खास समस्या या डिफेक्ट को ठीक करने के लिए छोटा विजुअल सबक।",
        usage: ["बार-बार होने वाली गलतियां", "सेफ्टी अलर्ट", "नया बदलाव (ECN)"],
        example: {
          wrong: "कनेक्टर ढीला / आवाज नहीं आई",
          correct: "पूरा लॉक / 'क्लिक' की आवाज आई"
        }
      }
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10 max-w-6xl mx-auto px-4 md:px-6 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-cyan-500/20 pb-5 bg-slate-950/30 p-5 rounded-t-2xl">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
              <span className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.3em]">{current.subtitle}</span>
           </div>
           <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tight leading-none">{current.title}</h3>
        </div>
        <motion.button 
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBack}
          className="bg-slate-900 hover:bg-slate-800 text-white border border-white/20 px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
        >
          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </motion.button>
      </div>

      {/* Grid for WI and WS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Work Instruction (WI) */}
        <motion.div 
          whileHover={{ y: -5, borderColor: "rgba(6, 182, 212, 0.3)" }}
          className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col gap-5 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-4 text-4xl font-black text-white/[0.03] select-none">WI</div>
          <div className="flex flex-col gap-2">
            <h4 className="text-cyan-400 font-black text-sm md:text-lg uppercase tracking-tight">{current.sections.wi}</h4>
            <div className="bg-cyan-500/10 border-l-4 border-cyan-500 px-4 py-2">
               <p className="text-white text-xs md:text-sm font-bold leading-relaxed">{current.wi.question}</p>
            </div>
          </div>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{current.wi.desc}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Inclusion / क्या होता है?</span>
              <ul className="space-y-1.5">
                {current.wi.elements.map((el, i) => (
                  <li key={i} className="flex items-center gap-2 text-[10px] md:text-xs text-white font-medium">
                    <span className="w-1 h-1 bg-cyan-500 rounded-full"></span> {el}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-950/50 p-4 rounded-xl border border-white/5 border-dashed">
              <span className="text-[9px] font-black text-cyan-500 uppercase tracking-widest mb-2 block">Example / उदाहरण</span>
              <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed font-bold italic">"{current.wi.example}"</p>
            </div>
          </div>
        </motion.div>

        {/* Work Standard (WS) */}
        <motion.div 
          whileHover={{ y: -5, borderColor: "rgba(16, 185, 129, 0.3)" }}
          className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col gap-5 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-4 text-4xl font-black text-white/[0.03] select-none">WS</div>
          <div className="flex flex-col gap-2">
            <h4 className="text-emerald-400 font-black text-sm md:text-lg uppercase tracking-tight">{current.sections.ws}</h4>
            <div className="bg-emerald-500/10 border-l-4 border-emerald-500 px-4 py-2">
               <p className="text-white text-xs md:text-sm font-bold leading-relaxed">{current.ws.question}</p>
            </div>
          </div>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{current.ws.desc}</p>
          
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
               {current.ws.elements.map((el, i) => (
                 <div key={i} className="bg-white/5 p-2 px-3 rounded-lg border border-white/5 flex items-center gap-2">
                    <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[10px] md:text-xs text-slate-200 font-bold uppercase tracking-tighter">{el}</span>
                 </div>
               ))}
            </div>
            <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-xl flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[8px] font-black text-emerald-500 uppercase">Baseline Target</span>
                <span className="text-xs md:text-sm text-white font-black uppercase italic">{current.ws.example}</span>
              </div>
              <svg className="w-6 h-6 text-emerald-500 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* One Point Lesson (OPL) - Centered & Wide */}
      <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 md:p-10 flex flex-col gap-6 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 text-4xl font-black text-white/[0.03] select-none">OPL</div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-orange-400 font-black text-sm md:text-xl uppercase tracking-tight">{current.sections.opl}</h4>
            <div className="bg-orange-500/10 border-l-4 border-orange-500 px-4 py-2">
               <p className="text-white text-xs md:text-sm font-bold leading-relaxed">{current.opl.question}</p>
            </div>
          </div>
          <div className="bg-orange-500/20 px-4 py-1.5 rounded-full border border-orange-500/40 text-orange-400 text-[9px] font-black uppercase tracking-widest">Visual Lesson Tool</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
           <div className="space-y-4">
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{current.opl.desc}</p>
              <div className="space-y-2">
                 <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">When to use? / कब बनाए?</span>
                 <div className="flex flex-wrap gap-2">
                   {current.opl.usage.map((u, i) => (
                     <span key={i} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-[9px] md:text-[10px] text-white font-bold uppercase">{u}</span>
                   ))}
                 </div>
              </div>
           </div>

           {/* OPL Visualization: Correct vs Wrong */}
           <div className="bg-slate-950/80 rounded-2xl border border-white/10 overflow-hidden shadow-inner">
              <div className="grid grid-cols-2">
                {/* WRONG SIDE */}
                <div className="p-4 md:p-6 border-r border-white/10 flex flex-col items-center gap-4 group/wrong">
                   <div className="w-10 h-10 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center text-red-500 transition-transform group-hover/wrong:scale-110">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                   </div>
                   <div className="text-center">
                      <span className="block text-[8px] font-black text-red-500 uppercase mb-1">WRONG / गलत</span>
                      <p className="text-[10px] md:text-xs text-slate-400 font-bold leading-snug">{current.opl.example.wrong}</p>
                   </div>
                </div>

                {/* CORRECT SIDE */}
                <div className="p-4 md:p-6 flex flex-col items-center gap-4 group/correct">
                   <div className="w-10 h-10 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 transition-transform group-hover/correct:scale-110">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                   </div>
                   <div className="text-center">
                      <span className="block text-[8px] font-black text-emerald-500 uppercase mb-1">CORRECT / सही</span>
                      <p className="text-[10px] md:text-xs text-white font-black leading-snug">{current.opl.example.correct}</p>
                   </div>
                </div>
              </div>
              <div className="bg-white/5 p-3 text-center border-t border-white/5">
                <span className="text-[8px] md:text-[9px] font-black text-slate-500 uppercase tracking-[0.4em]">Comparison Interface Active</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default WIDetail;

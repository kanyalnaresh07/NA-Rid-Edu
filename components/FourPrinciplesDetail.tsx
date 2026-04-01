
import React from 'react';
import { Language } from '../types';

interface FourPrinciplesDetailProps {
  onBack: () => void;
  lang: Language;
}

const FourPrinciplesDetail: React.FC<FourPrinciplesDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Four Principles of Improvement",
      subtitle: "The Path to Manufacturing Excellence",
      backBtn: "Back",
      hero: {
        question: "How do we improve a process?",
        desc: "Improvement isn't magic; it's a systematic approach. By following these four principles in order, any factory can reach world-class efficiency.",
        hook: "Memory Hook: Eliminate → Simplify → Standardize → Improve"
      },
      principles: [
        {
          id: "eliminate",
          title: "1. Eliminate Waste",
          tag: "Loss Removal",
          desc: "Remove anything that does not add value to the customer. If it's pure waste (NVA), kill it immediately.",
          focus: ["Stop Rework/Scrap", "Kill Waiting Time", "Reduce Excess Motion"],
          result: "Pure Productivity",
          color: "rose"
        },
        {
          id: "simplify",
          title: "2. Simplify Process",
          tag: "Work Smarter",
          desc: "Make tasks so easy that anyone can do them right. Remove complexity from the method.",
          focus: ["Fewer steps", "Easy-to-use Jigs/Tools", "Operator-friendly layout"],
          result: "Zero Errors",
          color: "cyan"
        },
        {
          id: "standardize",
          title: "3. Standardize Work",
          tag: "The Anchor",
          desc: "Lock in the best method so everyone does the same thing, every time. No variation means stable quality.",
          focus: ["Strict WI/WS adherence", "Visual OPL training", "Fixed Process sequence"],
          result: "Stable Quality",
          color: "emerald"
        },
        {
          id: "kaizen",
          title: "4. Continuous Improvement",
          tag: "Kaizen Mindset",
          desc: "Never stop. Make small, daily changes. Use 5-Why analysis to solve root causes forever.",
          focus: ["Employee Suggestions", "Daily Small Kaizens", "5-Why Analysis"],
          result: "Never-ending Growth",
          color: "amber"
        }
      ],
      logic: {
        title: "The Improvement Cycle",
        steps: ["Eliminate", "Simplify", "Standardize", "Kaizen"]
      }
    },
    hi: {
      title: "सुधार के चार सिद्धांत",
      subtitle: "मैन्युफैक्चरिंग एक्सीलेंस का रास्ता",
      backBtn: "वापस",
      hero: {
        question: "काम में सुधार कैसे करें?",
        desc: "सुधार कोई जादू नहीं है, बल्कि एक व्यवस्थित तरीका है। इन चार नियमों को क्रम से अपनाकर किसी भी फैक्ट्री को वर्ल्ड-क्लास बनाया जा सकता है।",
        hook: "याद रखने का तरीका: हटाएं → सरल बनाएं → स्टैंडर्ड बनाएं → लगातार सुधारें"
      },
      principles: [
        {
          id: "eliminate",
          title: "1. बर्बादी हटाएं (Eliminate)",
          tag: "नुकसान रोकना",
          desc: "हर उस काम को हटा दें जो ग्राहक के लिए ज़रूरी नहीं है (NVA)। अगर कोई काम फालतू है, तो उसे तुरंत बंद करें।",
          focus: ["रीवर्क और स्क्रैप रोकना", "इंतज़ार का समय खत्म करना", "फालतू मोशन कम करना"],
          result: "बेहतर प्रोडक्टिविटी",
          color: "rose"
        },
        {
          id: "simplify",
          title: "2. सरल बनाएं (Simplify)",
          tag: "होशियारी से काम",
          desc: "काम को इतना आसान बना दें कि कोई भी उसे सही तरीके से कर सके। मुश्किल तरीकों को हटाकर आसान टूल्स का उपयोग करें।",
          focus: ["प्रोसेस के स्टेप्स कम करना", "आसान जिग्स और टूल्स", "ऑपरेटर के लिए आसान लेआउट"],
          result: "गलतियां खत्म",
          color: "cyan"
        },
        {
          id: "standardize",
          title: "3. स्टैंडर्ड बनाएं (Standardize)",
          tag: "नियम बनाना",
          desc: "सबसे अच्छे तरीके को नियम (WI/WS) बना दें ताकि हर ऑपरेटर एक जैसा काम करे। इससे क्वालिटी हमेशा स्थिर रहेगी।",
          focus: ["WI/WS का सख्ती से पालन", "विजुअल OPL ट्रेनिंग", "तय किया हुआ प्रोसेस क्रम"],
          result: "स्थिर क्वालिटी",
          color: "emerald"
        },
        {
          id: "kaizen",
          title: "4. लगातार सुधार (Kaizen)",
          tag: "काइज़न सोच",
          desc: "सुधार कभी खत्म नहीं होता। हर दिन छोटे-छोटे बदलाव करें। '5-Why' का उपयोग करके समस्याओं को जड़ से मिटाएं।",
          focus: ["कर्मचारियों के सुझाव", "रोजाना छोटे सुधार", "5-Why एनालिसिस"],
          result: "निरंतर विकास",
          color: "amber"
        }
      ],
      logic: {
        title: "सुधार का चक्र",
        steps: ["हटाएं", "सरल बनाएं", "स्टैंडर्ड बनाएं", "लगातार सुधारें"]
      }
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-6xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-amber-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(245,158,11,0.8)]"></div>
              <span className="text-amber-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg">{current.title}</h3>
        </div>
        <button 
          onClick={onBack}
          className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900/60 border border-amber-500/20 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 text-7xl font-black text-amber-500/[0.03] select-none uppercase tracking-tighter italic">Optimise</div>
         <div className="relative z-10 space-y-6">
            <div className="space-y-2">
               <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter">{current.hero.question}</h4>
               <p className="text-slate-300 text-sm md:text-xl font-medium leading-relaxed max-w-3xl">{current.hero.desc}</p>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl">
               <p className="text-amber-400 font-black text-xs md:text-sm uppercase tracking-widest text-center">
                  {current.hero.hook}
               </p>
            </div>
         </div>
      </div>

      {/* Improvement Logic Cycle Visualizer */}
      <div className="bg-slate-950/60 border border-white/5 rounded-[40px] p-8 md:p-12 shadow-inner overflow-x-auto no-scrollbar">
         <div className="flex items-center justify-between min-w-[800px] relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-rose-500/20 via-emerald-500/20 to-amber-500/20 -translate-y-1/2"></div>
            {current.principles.map((p, i) => (
               <div key={p.id} className="relative z-10 flex flex-col items-center gap-4 group">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-900 border-2 border-${p.color}-500/50 flex items-center justify-center text-${p.color}-500 text-2xl font-black shadow-lg group-hover:scale-110 transition-transform`}>
                     0{i+1}
                  </div>
                  <div className={`px-4 py-1.5 rounded-full bg-${p.color}-500 text-white text-[10px] font-black uppercase tracking-widest shadow-lg`}>
                     {current.logic.steps[i]}
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Detailed Principle Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {current.principles.map((p) => (
            <div key={p.id} className={`bg-slate-900/60 border border-${p.color}-500/20 p-8 rounded-[40px] hover:border-${p.color}-500/50 transition-all group flex flex-col gap-6 shadow-2xl relative overflow-hidden`}>
               <div className={`absolute top-0 right-0 w-32 h-32 bg-${p.color}-500/5 blur-[40px] rounded-full`}></div>
               
               <div className="flex items-center justify-between relative z-10">
                  <span className={`text-[9px] font-black text-${p.color}-400 border border-${p.color}-500/30 px-3 py-1 rounded-full uppercase tracking-widest`}>{p.tag}</span>
                  <div className={`w-8 h-8 rounded-lg bg-${p.color}-500/10 flex items-center justify-center text-${p.color}-500`}>
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" />
                     </svg>
                  </div>
               </div>

               <div className="relative z-10">
                  <h5 className="text-white font-black text-2xl uppercase mb-3 tracking-tighter leading-none group-hover:translate-x-2 transition-transform">{p.title}</h5>
                  <p className="text-slate-400 text-sm font-bold leading-relaxed italic">"{p.desc}"</p>
               </div>

               <div className="space-y-4 relative z-10">
                  <div className="bg-slate-950/60 p-4 rounded-2xl border border-white/5">
                     <span className={`text-[8px] font-black text-${p.color}-500 uppercase tracking-widest block mb-3`}>Target Focus / ध्यान दें</span>
                     <div className="grid grid-cols-1 gap-2">
                        {p.focus.map((item, idx) => (
                           <div key={idx} className="flex items-center gap-3 text-[11px] text-slate-300 font-bold uppercase tracking-tight">
                              <div className={`w-1.5 h-1.5 bg-${p.color}-500 rounded-full`}></div>
                              {item}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               <div className={`mt-auto bg-slate-950 p-4 rounded-2xl border border-${p.color}-500/20 text-center relative z-10`}>
                  <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.4em] block mb-1">Impact</span>
                  <span className={`text-xs font-black uppercase text-${p.color}-400 tracking-widest`}>{p.result}</span>
               </div>
            </div>
         ))}
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,1)]"></span>
                Improvement DNA: Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
                Kaizen Engine: Running
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest">Industrial Hub v5.5 // Optimisation Node</div>
      </div>
    </div>
  );
};

export default FourPrinciplesDetail;

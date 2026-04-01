
import React from 'react';
import { Language } from '../types';

interface SLEDetailProps {
  onBack: () => void;
  lang: Language;
}

const SLEDetail: React.FC<SLEDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "4M & SLE-50 Strategy",
      subtitle: "Root Cause & Loss Elimination",
      backBtn: "Back",
      sections: {
        fourM: "The 4M Framework",
        sle: "SLE-50 (Safety & Loss Elimination)",
        matrix: "The Improvement Matrix"
      },
      hero: {
        title: "4M: The DNA of Production",
        desc: "Every problem in manufacturing can be traced back to one of these four pillars. Mastering 4M means mastering the factory floor."
      },
      fourM: [
        {
          id: "man",
          title: "Man (Manpower)",
          icon: "👤",
          desc: "Human-related factors like skills, training, and fatigue.",
          points: ["Skill & Training gaps", "Fatigue / Stress", "Wrong methods"],
          example: "Untrained operator leading to rework."
        },
        {
          id: "machine",
          title: "Machine",
          icon: "⚙️",
          desc: "Equipment health, settings, and calibration.",
          points: ["Breakdown frequency", "Poor maintenance", "Calibration issues"],
          example: "Uncalibrated tool causing loose screws."
        },
        {
          id: "material",
          title: "Material",
          icon: "📦",
          desc: "Raw parts, components, and handling quality.",
          points: ["Wrong or mixed parts", "Poor supplier quality", "Damage in transit"],
          example: "Scratched bodies from the supplier."
        },
        {
          id: "method",
          title: "Method",
          icon: "📑",
          desc: "Processes, sequences, and standard operating procedures.",
          points: ["Wrong sequence", "SOP not followed", "No Poka-Yoke (Error proofing)"],
          example: "Manual checking causing label mismatch."
        }
      ],
      sle: {
        safety: {
          title: "Safety First",
          tag: "Goal: Zero Accident",
          desc: "Eliminating unsafe acts and conditions through machine guards, training, and PPE.",
          items: ["Unsafe Condition Check", "Machine Interlocks", "Safety Awareness"]
        },
        loss: {
          title: "50% Loss Elimination",
          tag: "Goal: -50% Waste",
          desc: "Systematically reducing identified losses (Idle, Rework, Rejection) by half.",
          items: ["Identify Non-Value Add", "Set 50% Reduction target", "Root Cause Analysis"]
        }
      },
      matrix: [
        { area: "Man", loss: "Human Error", fix: "Intensive OJT/Training" },
        { area: "Machine", loss: "Breakdown", fix: "Predictive Maintenance" },
        { area: "Material", loss: "Rejection", fix: "Vendor Quality Control" },
        { area: "Method", loss: "Delay/Defect", fix: "Poka-Yoke / SOP" }
      ]
    },
    hi: {
      title: "4M और SLE-50 रणनीति",
      subtitle: "रूट कॉज और लॉस एलिमिनेशन",
      backBtn: "वापस",
      sections: {
        fourM: "4M फ्रेमवर्क (Pillars)",
        sle: "SLE-50 (सुरक्षा और नुकसान की रोकथाम)",
        matrix: "सुधार मैट्रिक्स"
      },
      hero: {
        title: "4M: प्रोडक्शन का डीएनए",
        desc: "मैन्युफैक्चरिंग की हर समस्या इन चार पिलर्स में से किसी एक से जुड़ी होती है। 4M को समझना मतलब फैक्ट्री को समझना।"
      },
      fourM: [
        {
          id: "man",
          title: "Man (मैनपावर)",
          icon: "👤",
          desc: "इंसान से जुड़े फैक्टर्स जैसे हुनर, ट्रेनिंग और थकान।",
          points: ["ट्रेनिंग की कमी", "थकान और तनाव", "गलत तरीका अपनाना"],
          example: "बिना ट्रेनिंग वाले ऑपरेटर से गलती होना।"
        },
        {
          id: "machine",
          title: "Machine (मशीन)",
          icon: "⚙️",
          desc: "मशीन की सेहत, सेटिंग्स और कैलिब्रेशन।",
          points: ["मशीन का खराब होना", "रखरखाव की कमी", "कैलिब्रेशन फेल होना"],
          example: "टूल खराब होने से पेंच ढीला रहना।"
        },
        {
          id: "material",
          title: "Material (मटेरियल)",
          icon: "📦",
          desc: "कच्चा माल, पार्ट्स और उनकी क्वालिटी।",
          points: ["गलत या मिक्स सामान", "सप्लायर की खराब क्वालिटी", "आने-जाने में नुकसान"],
          example: "सप्लायर से ही सामान पर खरोंच आना।"
        },
        {
          id: "method",
          title: "Method (तरीका)",
          icon: "📑",
          desc: "प्रोसेस, क्रम और काम करने के नियम (SOP)।",
          points: ["गलत क्रम में काम करना", "SOP फॉलो न करना", "पोका-योक की कमी"],
          example: "मैन्युअल चेक के कारण गलत लेबल लगना।"
        }
      ],
      sle: {
        safety: {
          title: "सुरक्षा सर्वोपरि (Safety)",
          tag: "लक्ष्य: जीरो एक्सीडेंट",
          desc: "मशीन गार्ड, ट्रेनिंग और PPE के ज़रिए खतरों को खत्म करना।",
          items: ["असुरक्षित स्थिति की जाँच", "मशीन इंटरलॉक्स", "सुरक्षा जागरूकता"]
        },
        loss: {
          title: "50% नुकसान की कमी",
          tag: "लक्ष्य: -50% बर्बादी",
          desc: "पहचाने गए नुकसान (खाली समय, रीवर्क) को आधा करना।",
          items: ["बिना काम वाले समय की पहचान", "50% कमी का लक्ष्य", "समस्या की जड़ (Root Cause) की खोज"]
        }
      },
      matrix: [
        { area: "Man", loss: "मानवीय गलती", fix: "ओन-जॉब ट्रेनिंग (OJT)" },
        { area: "Machine", loss: "ब्रेकडाउन", fix: "नियमित रखरखाव (PM)" },
        { area: "Material", loss: "रिजेक्शन", fix: "वेंडर कंट्रोल" },
        { area: "Method", loss: "देरी / डिफेक्ट", fix: "पोका-योक / SOP" }
      ]
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-6xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-indigo-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(99,102,241,0.8)]"></div>
              <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg">{current.title}</h3>
        </div>
        <button 
          onClick={onBack}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero 4M Intro */}
      <div className="bg-slate-900/60 border border-indigo-500/20 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-indigo-500/[0.03] select-none">4-M</div>
         <div className="relative z-10 space-y-4">
            <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter">{current.hero.title}</h4>
            <p className="text-slate-300 text-sm md:text-xl font-medium leading-relaxed max-w-3xl">{current.hero.desc}</p>
         </div>
      </div>

      {/* 4M Quadrant Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {current.fourM.map((m, i) => (
           <div key={m.id} className="bg-slate-950/40 border border-white/5 p-6 md:p-8 rounded-[32px] hover:border-indigo-500/30 transition-all group shadow-xl">
              <div className="flex items-center gap-4 mb-5">
                 <div className="w-14 h-14 bg-slate-900 border border-indigo-500/30 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-inner">
                    {m.icon}
                 </div>
                 <div>
                    <h5 className="text-white font-black text-lg uppercase tracking-tight leading-none">{m.title}</h5>
                    <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest opacity-60">Factor Category</span>
                 </div>
              </div>
              <p className="text-slate-300 text-sm font-bold mb-6 leading-relaxed italic">"{m.desc}"</p>
              
              <div className="space-y-3 mb-6">
                 {m.points.map((p, idx) => (
                   <div key={idx} className="flex items-center gap-3 text-xs text-slate-400 font-bold">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                      {p}
                   </div>
                 ))}
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                 <span className="text-[9px] font-black text-indigo-500 uppercase tracking-widest block mb-1">Scenario / उदाहरण</span>
                 <p className="text-[11px] text-slate-200 font-bold">⚠️ {m.example}</p>
              </div>
           </div>
         ))}
      </div>

      {/* SLE-50 Section */}
      <div className="bg-slate-900/60 border border-indigo-500/20 p-8 md:p-12 rounded-[40px] shadow-2xl space-y-10 relative overflow-hidden">
         <div className="absolute inset-0 bg-indigo-600/5 blur-[100px] pointer-events-none"></div>
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
            <h4 className="text-white font-black text-2xl uppercase tracking-tight italic">{current.sections.sle}</h4>
            <div className="bg-indigo-500 text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg animate-pulse">Efficiency Node Active</div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Safety Pillar */}
            <div className="bg-slate-950/60 p-8 rounded-[32px] border border-emerald-500/20 flex flex-col gap-6 group hover:border-emerald-500/50 transition-all">
               <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-500">
                     <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                     </svg>
                  </div>
                  <span className="text-emerald-500 font-black text-[10px] uppercase tracking-[0.3em]">{current.sle.safety.tag}</span>
               </div>
               <div>
                  <h5 className="text-white text-xl font-black uppercase mb-3">{current.sle.safety.title}</h5>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed italic">{current.sle.safety.desc}</p>
               </div>
               <div className="flex flex-wrap gap-2">
                  {current.sle.safety.items.map((item, i) => (
                    <span key={i} className="bg-emerald-500/10 text-emerald-400 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-emerald-500/20">{item}</span>
                  ))}
               </div>
            </div>

            {/* Loss Pillar */}
            <div className="bg-slate-950/60 p-8 rounded-[32px] border border-orange-500/20 flex flex-col gap-6 group hover:border-orange-500/50 transition-all">
               <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-500">
                     <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                     </svg>
                  </div>
                  <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.3em]">{current.sle.loss.tag}</span>
               </div>
               <div>
                  <h5 className="text-white text-xl font-black uppercase mb-3">{current.sle.loss.title}</h5>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed italic">{current.sle.loss.desc}</p>
               </div>
               <div className="flex flex-wrap gap-2">
                  {current.sle.loss.items.map((item, i) => (
                    <span key={i} className="bg-orange-500/10 text-orange-400 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-orange-500/20">{item}</span>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* Improvement Matrix */}
      <div className="bg-slate-950/60 border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl">
         <h4 className="text-white text-[10px] font-black uppercase tracking-[0.5em] mb-8 text-center">{current.sections.matrix}</h4>
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="border-b border-white/10">
                     <th className="py-4 text-indigo-400 text-[10px] font-black uppercase tracking-widest">4M Area</th>
                     <th className="py-4 text-orange-400 text-[10px] font-black uppercase tracking-widest">Type of Loss</th>
                     <th className="py-4 text-emerald-400 text-[10px] font-black uppercase tracking-widest">Solution Strategy</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {current.matrix.map((row, i) => (
                    <tr key={i} className="group hover:bg-white/5 transition-colors">
                       <td className="py-5 text-white font-black text-sm">{row.area}</td>
                       <td className="py-5 text-slate-400 font-bold text-xs uppercase">{row.loss}</td>
                       <td className="py-5">
                          <span className="bg-emerald-500/20 text-emerald-400 text-[9px] font-black uppercase px-3 py-1.5 rounded-full border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">{row.fix}</span>
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      {/* Footer System Status Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                Analysis Engine: Online
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                Improvement Path: Mapped
             </span>
          </div>
          <div className="opacity-60 italic">Industrial Hub v4.2 // Production Optimization Node</div>
      </div>
    </div>
  );
};

export default SLEDetail;

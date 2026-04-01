
import React from 'react';
import { Language } from '../types';

interface ValueAnalysisDetailProps {
  onBack: () => void;
  lang: Language;
}

const ValueAnalysisDetail: React.FC<ValueAnalysisDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Value Analysis (VA / ENVA / NVA)",
      subtitle: "Lean Process Optimization",
      backBtn: "Back",
      hero: {
        question: "What is Value Analysis?",
        desc: "It is a systematic method to identify which activities add value to the customer and which do not. The goal is to maximize efficiency by focusing on what truly matters.",
        target: "Target: Higher Quality at Lower Cost."
      },
      categories: [
        {
          id: "va",
          title: "VA (Value Added)",
          tag: "Direct Value",
          desc: "Activities that physically change the product into what the customer wants to buy.",
          examples: ["Cutting & Shaping", "Welding & Assembly", "Painting & Finishing"],
          action: "MAXIMIZE / INCREASE",
          color: "emerald"
        },
        {
          id: "enva",
          title: "ENVA (Essential Non-Value Added)",
          tag: "Necessary Support",
          desc: "Activities that don't add value but are required by current processes or regulations.",
          examples: ["Quality Inspection", "Safety Testing", "Material Movement", "Documentation"],
          action: "MINIMIZE / OPTIMIZE",
          color: "amber"
        },
        {
          id: "nva",
          title: "NVA (Non-Value Added)",
          tag: "Pure Waste",
          desc: "Activities that consume resources but create zero value for the customer.",
          examples: ["Waiting Time", "Rework / Fixing errors", "Double Handling", "Searching for tools"],
          action: "ELIMINATE / STOP",
          color: "rose"
        }
      ],
      goldenRule: {
        title: "The Factory Golden Rule",
        logic: [
          { label: "Value Added (VA)", status: "UP", icon: "↑", color: "text-emerald-400" },
          { label: "Essential (ENVA)", status: "DOWN", icon: "↓", color: "text-amber-400" },
          { label: "Waste (NVA)", status: "DELETE", icon: "❌", color: "text-rose-500" }
        ]
      },
      matrix: {
        title: "Customer Perspective Matrix",
        headers: ["Activity Type", "Value to Customer?", "Business Action"],
        rows: [
          { type: "VA", value: "Yes (Willing to pay)", action: "Increase Focus", color: "emerald" },
          { type: "ENVA", value: "No (But process needs it)", action: "Reduce / Automate", color: "amber" },
          { type: "NVA", value: "No (Paying for nothing)", action: "Complete Elimination", color: "rose" }
        ]
      }
    },
    hi: {
      title: "वैल्यू एनालिसिस (VA / ENVA / NVA)",
      subtitle: "लीन प्रोसेस ऑप्टिमाइजेशन",
      backBtn: "वापस",
      hero: {
        question: "वैल्यू एनालिसिस क्या है?",
        desc: "यह एक व्यवस्थित तरीका है यह देखने का कि कौन सा काम ग्राहक के लिए मूल्य (Value) जोड़ता है और कौन सा नहीं। इसका लक्ष्य कम लागत में बेहतर काम करना है।",
        target: "लक्ष्य: कम खर्च में उच्च क्वालिटी।"
      },
      categories: [
        {
          id: "va",
          title: "VA (वैल्यू एडेड)",
          tag: "सीधा फायदा",
          desc: "वो काम जो उत्पाद का रूप बदलते हैं और जिसके लिए ग्राहक पैसा देने को तैयार है।",
          examples: ["कटिंग और फिटिंग", "वेल्डिंग और असेंबली", "पेंटिंग और फिनिशिंग"],
          action: "बढ़ावा दें (INCREASE)",
          color: "emerald"
        },
        {
          id: "enva",
          title: "ENVA (ज़रूरी पर बिना वैल्यू का)",
          tag: "सपोर्ट वर्क",
          desc: "वो काम जो सीधे वैल्यू तो नहीं जोड़ते, पर नियमों या प्रोसेस के लिए ज़रूरी हैं।",
          examples: ["क्वालिटी चेक", "टेस्टिंग", "सामान को इधर-उधर ले जाना", "कागज़ी कार्यवाही"],
          action: "कम करें (REDUCE)",
          color: "amber"
        },
        {
          id: "nva",
          title: "NVA (बिना वैल्यू का काम)",
          tag: "सिर्फ बर्बादी",
          desc: "वो काम जो सिर्फ समय और पैसा बर्बाद करते हैं और ग्राहक को कोई फायदा नहीं देते।",
          examples: ["इंतज़ार करना", "गलती सुधारना (Rework)", "फालतू मूवमेंट", "सामान ढूंढना"],
          action: "खत्म करें (ELIMINATE)",
          color: "rose"
        }
      ],
      goldenRule: {
        title: "फैक्ट्री का सुनहरा नियम",
        logic: [
          { label: "वैल्यू एडेड (VA)", status: "बढ़ाएं", icon: "↑", color: "text-emerald-400" },
          { label: "ज़रूरी काम (ENVA)", status: "घटाएं", icon: "↓", color: "text-amber-400" },
          { label: "बर्बादी (NVA)", status: "हटाएं", icon: "❌", color: "text-rose-500" }
        ]
      },
      matrix: {
        title: "ग्राहक का नज़रिया मैट्रिक्स",
        headers: ["काम का प्रकार", "ग्राहक के लिए वैल्यू?", "फैक्ट्री क्या करे?"],
        rows: [
          { type: "VA", value: "हाँ (पैसा देगा)", action: "ज़्यादा ध्यान दें", color: "emerald" },
          { type: "ENVA", value: "नहीं (पर मजबूरी है)", action: "कम / ऑटोमेट करें", color: "amber" },
          { type: "NVA", value: "नहीं (बेवजह का खर्च)", action: "पूरी तरह खत्म करें", color: "rose" }
        ]
      }
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-6xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-emerald-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.8)]"></div>
              <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg">{current.title}</h3>
        </div>
        <button 
          onClick={onBack}
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Section */}
      <div className="bg-slate-900/60 border border-emerald-500/20 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-emerald-500/[0.03] select-none uppercase tracking-tighter italic">Value</div>
         <div className="relative z-10 space-y-4">
            <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter">{current.hero.question}</h4>
            <p className="text-slate-300 text-sm md:text-xl font-medium leading-relaxed max-w-3xl">{current.hero.desc}</p>
            <div className="inline-block px-5 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 font-black text-xs md:text-sm uppercase italic">
               {current.hero.target}
            </div>
         </div>
      </div>

      {/* Classification Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {current.categories.map((cat, i) => (
           <div key={cat.id} className={`bg-slate-950/40 border border-${cat.color}-500/20 p-8 rounded-[32px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden`}>
              <div className={`absolute top-0 right-0 w-24 h-24 bg-${cat.color}-500/5 blur-[40px] rounded-full`}></div>
              <div className="flex items-center justify-between relative z-10">
                 <div className={`w-12 h-12 bg-${cat.color}-500/10 border border-${cat.color}-500/30 rounded-2xl flex items-center justify-center text-${cat.color}-500 font-black text-xl shadow-lg`}>
                    0{i+1}
                 </div>
                 <span className={`text-[9px] font-black text-${cat.color}-400 border border-${cat.color}-500/30 px-3 py-1 rounded-full uppercase tracking-widest`}>{cat.tag}</span>
              </div>
              <div className="relative z-10">
                 <h5 className="text-white font-black text-xl uppercase mb-2 tracking-tight leading-none group-hover:translate-x-2 transition-transform">{cat.title}</h5>
                 <p className="text-slate-400 text-xs font-bold leading-relaxed">{cat.desc}</p>
              </div>
              
              <div className="space-y-2 pt-4 border-t border-white/5 relative z-10">
                 <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block mb-2">Process Examples</span>
                 {cat.examples.map((ex, idx) => (
                   <div key={idx} className="flex items-center gap-2 text-[10px] text-slate-300 font-bold">
                      <div className={`w-1 h-1 bg-${cat.color}-500 rounded-full`}></div>
                      {ex}
                   </div>
                 ))}
              </div>

              <div className={`mt-auto bg-${cat.color}-500 text-white p-4 rounded-2xl text-center shadow-lg group-hover:scale-105 transition-transform`}>
                 <span className="text-[10px] font-black uppercase tracking-[0.2em]">{cat.action}</span>
              </div>
           </div>
         ))}
      </div>

      {/* Comparison Matrix & Golden Rule */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         
         {/* Golden Rule Visualizer */}
         <div className="lg:col-span-5 bg-slate-900/60 border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-10 flex flex-col items-center">
            <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-center w-full">{current.goldenRule.title}</h4>
            <div className="flex flex-col gap-6 w-full">
               {current.goldenRule.logic.map((item, i) => (
                 <div key={i} className="flex items-center justify-between p-6 bg-slate-950/80 rounded-3xl border border-white/5 group hover:border-white/20 transition-all">
                    <span className="text-white font-black text-sm uppercase tracking-widest">{item.label}</span>
                    <div className="flex items-center gap-4">
                       <span className={`text-xl font-black ${item.color}`}>{item.status}</span>
                       <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl ${item.color} shadow-inner`}>
                          {item.icon}
                       </div>
                    </div>
                 </div>
               ))}
            </div>
            <div className="bg-emerald-500/10 p-6 rounded-2xl border border-emerald-500/20 text-center w-full">
               <p className="text-[10px] md:text-xs text-emerald-200 font-black uppercase tracking-widest leading-relaxed">
                  "Efficiency is maximizing VA while aggressively killing NVA."
               </p>
            </div>
         </div>

         {/* Detailed Matrix Table */}
         <div className="lg:col-span-7 bg-slate-900/60 border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl overflow-hidden backdrop-blur-xl">
            <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-8">{current.matrix.title}</h4>
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                     <tr className="border-b border-white/10">
                        {current.matrix.headers.map((h, i) => (
                           <th key={i} className="py-4 text-emerald-400 text-[9px] font-black uppercase tracking-widest">{h}</th>
                        ))}
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                     {current.matrix.rows.map((row, i) => (
                        <tr key={i} className="group hover:bg-white/5 transition-colors">
                           <td className={`py-6 text-${row.color}-400 font-black text-sm tracking-tighter`}>{row.type}</td>
                           <td className="py-6 text-slate-300 font-bold text-xs uppercase italic pr-4">{row.value}</td>
                           <td className="py-6">
                              <span className={`bg-${row.color}-500/10 text-${row.color}-400 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border border-${row.color}-500/30`}>
                                 {row.action}
                              </span>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            <div className="mt-10 p-6 bg-slate-950 rounded-3xl border border-dashed border-white/10 text-center">
               <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.5em] block mb-2">Analysis Engine Note</span>
               <p className="text-[10px] text-slate-400 font-bold uppercase leading-relaxed italic">
                  Always verify classification based on specific shop floor standards and ECN guidelines.
               </p>
            </div>
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
                Classification Engine: Online
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,1)]"></span>
                Optimization Mode: Active
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest">Industrial Hub v5.2 // Value Node</div>
      </div>
    </div>
  );
};

export default ValueAnalysisDetail;


import React from 'react';
import { Language } from '../types';

interface CycleTimeStudyDetailProps {
  onBack: () => void;
  lang: Language;
}

const CycleTimeStudyDetail: React.FC<CycleTimeStudyDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Cycle Time Study (CTS)",
      subtitle: "Precision Performance Measurement",
      backBtn: "Back to Process Design",
      hero: {
        question: "What is Cycle Time Study?",
        desc: "Cycle Time Study is the systematic observation and measurement of actual time taken for every manual or machine operation on the shop floor.",
        rule: "Based on real data, not assumptions."
      },
      pillars: [
        {
          id: 1,
          title: "Operation-wise Study",
          tag: "Step Mapping",
          desc: "Recording the specific time for every tiny step (Fitting, Tightening, Testing).",
          impact: "Identifies exactly which step is fast and which is slow.",
          icon: "⏱️"
        },
        {
          id: 2,
          title: "VA / NVA Identification",
          tag: "Waste Detection",
          desc: "Classifying activities into Value Added (VA) and Non-Value Added (NVA).",
          impact: "Goal: Maximize VA, Kill NVA (waiting, searching, etc.).",
          icon: "🔍"
        },
        {
          id: 3,
          title: "Bottleneck Detection",
          tag: "Flow Restriction",
          desc: "Finding the single operation that takes the longest time.",
          impact: "The bottleneck determines the output of the whole line.",
          icon: "🚧"
        },
        {
          id: 4,
          title: "Standard Time Setting",
          tag: "Baseline Locking",
          desc: "Setting the 'Golden Time' that is best, safe, and repeatable.",
          impact: "Essential for accurate planning and target setting.",
          icon: "🎯"
        }
      ],
      simulation: {
        title: "Time Observation Sheet (Simulation)",
        headers: ["Op No.", "Operation Name", "Time (Sec)", "Class"],
        rows: [
          { no: "10", name: "Part Pick & Place", time: "08s", class: "ENVA" },
          { no: "20", name: "Screw Tightening", time: "15s", class: "VA" },
          { no: "30", name: "Visual Check", time: "05s", class: "VA" },
          { no: "40", name: "Search for Label", time: "12s", class: "NVA" }
        ],
        footer: "Red = Waste | Green = Value"
      },
      summary: "Result: Balanced Line + Zero Waste + Maximum Output."
    },
    hi: {
      title: "साइकिल टाइम स्टडी (CTS)",
      subtitle: "सटीक परफॉरमेंस मापन",
      backBtn: "वापस जाएं",
      hero: {
        question: "Cycle Time Study क्या है?",
        desc: "प्रोडक्शन प्रोसेस के हर ऑपरेशन को देख कर उसमें लगने वाले असली समय (Actual Time) को मापने की प्रक्रिया।",
        rule: "यह अनुमान पर नहीं, बल्कि असली डेटा पर आधारित होती है।"
      },
      pillars: [
        {
          id: 1,
          title: "Operation-wise Study",
          tag: "स्टेप मैपिंग",
          desc: "हर छोटे स्टेप (फिटिंग, टाइटनिंग, टेस्टिंग) का समय अलग-अलग रिकॉर्ड करना।",
          impact: "इससे पता चलता है कि कौन सा हिस्सा तेज़ है और कौन सा धीमा।",
          icon: "⏱️"
        },
        {
          id: 2,
          title: "VA / NVA की पहचान",
          tag: "बर्बादी की खोज",
          desc: "काम को 'वैल्यू एडेड' और 'नॉन-वैल्यू एडेड' में बांटना।",
          impact: "लक्ष्य: ज़रूरी काम बढ़ाना, फालतू काम (इंतज़ार, ढूंढना) खत्म करना।",
          icon: "🔍"
        },
        {
          id: 3,
          title: "बॉटलनेक की पहचान",
          tag: "रुकावट का पता",
          desc: "उस ऑपरेशन को ढूँढना जो सबसे ज्यादा समय लेता है।",
          impact: "बॉटलनेक ही तय करता है कि पूरी लाइन से कितना माल निकलेगा।",
          icon: "🚧"
        },
        {
          id: 4,
          title: "Standard Time तय करना",
          tag: "बेसलाइन लॉकिंग",
          desc: "सुधार के बाद उस बेस्ट समय को चुनना जिसे बार-बार दोहराया जा सके।",
          impact: "प्लानिंग और टारगेट सेट करने के लिए सबसे ज़रूरी दस्तावेज।",
          icon: "🎯"
        }
      ],
      simulation: {
        title: "समय अवलोकन पत्र (Simulation)",
        headers: ["Op No.", "ऑपरेशन का नाम", "समय (Sec)", "श्रेणी"],
        rows: [
          { no: "10", name: "पार्ट उठाना/रखना", time: "08s", class: "ENVA" },
          { no: "20", name: "पेंच टाइट करना", time: "15s", class: "VA" },
          { no: "30", name: "विजुअल चेक", time: "05s", class: "VA" },
          { no: "40", name: "लेबल ढूंढना", time: "12s", class: "NVA" }
        ],
        footer: "लाल = बर्बादी | हरा = असली काम"
      },
      summary: "नतीजा: बैलेंस्ड लाइन + जीरो वेस्ट + अधिकतम आउटपुट।"
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-cyan-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_12px_cyan]"></div>
              <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono">Cycle Time Study</h3>
        </div>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-cyan-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Measurement</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-cyan-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-cyan-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">
            "💡 {current.hero.rule}"
         </div>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {current.pillars.map((p) => (
            <div key={p.id} className="bg-slate-950/60 border border-white/5 p-8 rounded-[40px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden h-full">
               <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-slate-900 border border-cyan-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                     {p.icon}
                  </div>
                  <span className="text-cyan-500 font-black text-[10px] uppercase tracking-widest border border-cyan-500/30 px-3 py-1 rounded-full">{p.tag}</span>
               </div>

               <div className="space-y-2">
                  <h5 className="text-white text-xl font-black uppercase tracking-tight group-hover:text-cyan-400 transition-colors">0{p.id}. {p.title}</h5>
                  <p className="text-slate-400 text-xs font-bold leading-relaxed italic">"{p.desc}"</p>
               </div>

               <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl mt-auto">
                  <span className="text-emerald-500 text-[8px] font-black uppercase tracking-widest block mb-1">Impact / असर</span>
                  <p className="text-white text-[10px] font-bold italic leading-tight">📌 {p.impact}</p>
               </div>
            </div>
         ))}
      </div>

      {/* Simulation Box */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl space-y-8 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/[0.02] select-none uppercase italic">Data Log</div>
         <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter italic flex items-center gap-4">
            <span className="w-12 h-1 bg-cyan-500 shadow-[0_0_10px_cyan]"></span>
            {current.simulation.title}
         </h4>
         
         <div className="overflow-x-auto rounded-[32px] border border-white/5 bg-slate-950/40">
            <table className="w-full text-left">
               <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-cyan-400 text-[10px] font-black uppercase tracking-widest">
                     {current.simulation.headers.map((h, i) => (
                        <th key={i} className="py-6 px-8">{h}</th>
                     ))}
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5 text-[11px] font-bold">
                  {current.simulation.rows.map((row, i) => (
                     <tr key={i} className="group hover:bg-white/5 transition-colors">
                        <td className="py-6 px-8 text-slate-500">{row.no}</td>
                        <td className="py-6 px-8 text-white uppercase">{row.name}</td>
                        <td className="py-6 px-8 text-cyan-400 font-mono text-base">{row.time}</td>
                        <td className="py-6 px-8">
                           <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                              row.class === 'VA' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 
                              row.class === 'NVA' ? 'bg-rose-500/10 text-rose-400 border-rose-500/30' : 
                              'bg-amber-500/10 text-amber-400 border-amber-500/30'
                           }`}>
                              {row.class}
                           </span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         <p className="text-center text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">{current.simulation.footer}</p>
      </div>

      {/* Summary Footer */}
      <div className="bg-slate-950/60 border border-white/5 rounded-[40px] p-8 md:p-12 shadow-inner flex flex-col items-center text-center gap-4">
         <p className="text-emerald-400 font-black text-xs md:text-2xl uppercase tracking-widest italic drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            "{current.summary}"
         </p>
         <div className="flex gap-4">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
         </div>
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-[0_0_12px_cyan] animate-pulse"></span>
                Time Node: Analytics Mode
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Process Intelligence v4.5 // Industrial Standard</div>
      </div>
    </div>
  );
};

export default CycleTimeStudyDetail;

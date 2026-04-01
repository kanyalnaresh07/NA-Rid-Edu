
import React from 'react';
import { Language } from '../types';

interface LOBDetailProps {
  onBack: () => void;
  lang: Language;
}

const LOBDetail: React.FC<LOBDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Line of Balancing (LOB)",
      subtitle: "Process Harmonization & Flow",
      backBtn: "Back",
      hero: {
        question: "What is LOB?",
        desc: "LOB is a technique to distribute tasks across assembly line stations so that every station takes roughly the same amount of time.",
        goal: "Goal: Eliminate waiting time and ensure a smooth, continuous production heartbeat."
      },
      concepts: [
        { title: "Takt Time", icon: "💓", desc: "The speed required by the customer." },
        { title: "Cycle Time", icon: "⏱️", desc: "The actual time taken at each station." },
        { title: "Bottleneck", icon: "🍾", desc: "The slowest station limiting total output." }
      ],
      steps: [
        "Measure actual Cycle Time (CT) for all stations.",
        "Calculate Takt Time (TT) based on demand.",
        "Identify Bottlenecks (where CT > TT).",
        "Split, combine, or redistribute tasks to balance the workload."
      ],
      example: {
        title: "Balancing Simulation",
        before: [
          { st: "S1", time: 40, status: "OK" },
          { st: "S2", time: 45, status: "OK" },
          { st: "S3", time: 70, status: "CRITICAL" },
          { st: "S4", time: 42, status: "OK" }
        ],
        action: "Split S3 tasks (70s) into two 35s tasks or add manpower.",
        after: "Balanced Flow: 40s | 45s | 35s | 35s | 42s"
      },
      comparison: {
        title: "Normal Line vs. Balanced Line",
        headers: ["Feature", "Without LOB", "With LOB"],
        rows: [
          { feature: "Idle Time", before: "High (Waiting)", after: "Minimized", color: "rose" },
          { feature: "Bottlenecks", before: "Frequent", after: "Eliminated", color: "amber" },
          { feature: "Output (UPH)", before: "Unstable / Low", after: "Maximum / Steady", color: "emerald" }
        ]
      }
    },
    hi: {
      title: "लाइन ऑफ बैलेंसिंग (LOB)",
      subtitle: "प्रोसेस सामंजस्य और फ्लो",
      backBtn: "वापस",
      hero: {
        question: "LOB क्या होता है?",
        desc: "LOB एक ऐसी तकनीक है जिसमें असेंबली लाइन के सभी स्टेशनों पर काम को इस तरह बांटा जाता है कि सबको लगभग बराबर समय लगे।",
        goal: "लक्ष्य: खाली समय (Idle Time) को खत्म करना और प्रोडक्शन की लय बनाए रखना।"
      },
      concepts: [
        { title: "टैक्ट टाइम (TT)", icon: "💓", desc: "कस्टमर की मांग के हिसाब से ज़रूरी रफ़्तार।" },
        { title: "साइकिल टाइम (CT)", icon: "⏱️", desc: "हर स्टेशन पर लगने वाला असली समय।" },
        { title: "बॉटलनेक (BN)", icon: "🍾", desc: "सबसे धीमा पॉइंट जो पूरी लाइन रोकता है।" }
      ],
      steps: [
        "सभी स्टेशनों का असली साइकिल टाइम (CT) मापें।",
        "डिमांड के आधार पर टैक्ट टाइम (TT) की गणना करें।",
        "बॉटलनेक की पहचान करें (जहाँ CT, TT से ज्यादा हो)।",
        "काम को बांटें या जोड़ें ताकि सबका वर्कलोड बराबर हो जाए।"
      ],
      example: {
        title: "बैलेंसिंग सिमुलेशन",
        before: [
          { st: "S1", time: 40, status: "ठीक" },
          { st: "S2", time: 45, status: "ठीक" },
          { st: "S3", time: 70, status: "बॉटलनेक" },
          { st: "S4", time: 42, status: "ठीक" }
        ],
        action: "S3 के काम को दो हिस्सों (35s + 35s) में बांटें या मदद बढ़ाएं।",
        after: "बैलेंस्ड फ्लो: 40s | 45s | 35s | 35s | 42s"
      },
      comparison: {
        title: "सामान्य लाइन बनाम बैलेंस्ड लाइन",
        headers: ["विशेषता", "LOB के बिना", "LOB के साथ"],
        rows: [
          { feature: "खाली समय (Idle)", before: "ज़्यादा (इंतज़ार)", after: "न्यूनतम", color: "rose" },
          { feature: "बॉटलनेक", before: "बार-बार", after: "खत्म", color: "amber" },
          { feature: "आउटपुट (UPH)", before: "कम / अस्थिर", after: "अधिकतम / स्थिर", color: "emerald" }
        ]
      }
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-6xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-cyan-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_12px_rgba(34,211,238,0.8)]"></div>
              <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg">{current.title}</h3>
        </div>
        <button 
          onClick={onBack}
          className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900/60 border border-cyan-500/20 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-cyan-500/[0.03] select-none uppercase tracking-tighter">Balance</div>
         <div className="relative z-10 space-y-6">
            <div className="space-y-2">
               <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter">{current.hero.question}</h4>
               <p className="text-slate-300 text-sm md:text-xl font-medium leading-relaxed max-w-3xl">{current.hero.desc}</p>
            </div>
            <div className="inline-block px-5 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 font-black text-xs md:text-sm uppercase italic">
               {current.hero.goal}
            </div>
         </div>
      </div>

      {/* Concept Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {current.concepts.map((c, i) => (
           <div key={i} className="bg-slate-950/40 border border-white/5 p-8 rounded-[32px] hover:border-cyan-500/30 transition-all group shadow-xl flex flex-col items-center text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{c.icon}</div>
              <h5 className="text-white font-black text-lg uppercase mb-2">{c.title}</h5>
              <p className="text-slate-400 text-xs font-bold leading-relaxed">{c.desc}</p>
           </div>
         ))}
      </div>

      {/* Balancing Simulation Visual */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl space-y-10">
         <div className="flex flex-col gap-2">
            <h4 className="text-cyan-400 text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">{current.example.title}</h4>
            <p className="text-white text-xl font-black tracking-tight leading-none uppercase italic">Before LOB: Unbalanced Workload</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {current.example.before.map((item, i) => (
               <div key={i} className={`relative flex flex-col items-center gap-4 p-6 rounded-3xl border ${item.status === 'CRITICAL' || item.status === 'बॉटलनेक' ? 'bg-rose-500/10 border-rose-500/40 shadow-[0_0_20px_rgba(244,63,94,0.2)]' : 'bg-slate-950/40 border-white/5 opacity-60'}`}>
                  {item.status === 'CRITICAL' || item.status === 'बॉटलनेक' ? (
                     <div className="absolute -top-3 px-3 py-1 bg-rose-500 rounded-full text-[8px] font-black text-white uppercase animate-bounce">{item.status}</div>
                  ) : null}
                  <span className="text-[10px] font-black text-slate-500 uppercase">Station {item.st}</span>
                  <div className="w-full bg-slate-900 rounded-full h-24 flex items-end overflow-hidden p-1">
                     <div 
                        className={`w-full rounded-full transition-all duration-1000 ${item.status === 'CRITICAL' || item.status === 'बॉटलनेक' ? 'bg-rose-500' : 'bg-cyan-500'}`}
                        style={{ height: `${(item.time / 70) * 100}%` }}
                     ></div>
                  </div>
                  <span className="text-white font-black text-2xl italic">{item.time}s</span>
               </div>
            ))}
         </div>

         <div className="bg-slate-950/80 p-8 rounded-3xl border border-dashed border-cyan-500/30 text-center space-y-4">
            <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest block">Action / समाधान</span>
            <p className="text-white text-base md:text-lg font-bold italic leading-relaxed">"{current.example.action}"</p>
            <div className="flex flex-col items-center gap-2">
               <svg className="w-6 h-6 text-cyan-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
               </svg>
               <span className="text-emerald-400 font-black text-sm uppercase tracking-widest">{current.example.after}</span>
            </div>
         </div>
      </div>

      {/* Detailed Flow & Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         {/* Steps List */}
         <div className="lg:col-span-5 bg-slate-900/40 border border-white/10 p-8 rounded-[40px] shadow-xl space-y-6">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-4">Implementation Process</h4>
            <div className="space-y-4">
               {current.steps.map((step, i) => (
                 <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-white font-black text-xs flex-shrink-0">
                       0{i+1}
                    </div>
                    <p className="text-slate-300 text-xs font-bold leading-relaxed">{step}</p>
                 </div>
               ))}
            </div>
         </div>

         {/* Comparison Matrix */}
         <div className="lg:col-span-7 bg-slate-900/40 border border-white/10 p-8 rounded-[40px] shadow-xl overflow-hidden">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-6">{current.comparison.title}</h4>
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                     <tr className="border-b border-white/10">
                        {current.comparison.headers.map((h, i) => (
                           <th key={i} className="py-4 text-cyan-400 text-[9px] font-black uppercase tracking-widest">{h}</th>
                        ))}
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                     {current.comparison.rows.map((row, i) => (
                        <tr key={i} className="group hover:bg-white/5 transition-colors">
                           <td className="py-5 text-white font-black text-xs uppercase tracking-tight">{row.feature}</td>
                           <td className="py-5 text-slate-500 font-bold text-xs line-through opacity-50">{row.before}</td>
                           <td className="py-5">
                              <span className={`bg-${row.color}-500/10 text-${row.color}-400 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-${row.color}-500/20`}>
                                 {row.after}
                              </span>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,1)]"></span>
                Line Telemetry: Balanced
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
                Flow Capacity: Optimal
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest">Industrial Hub v4.8 // Balancing Node</div>
      </div>
    </div>
  );
};

export default LOBDetail;


import React, { useState } from 'react';
import { Language } from '../types';
import SMEDDetail from './SMEDDetail';

interface ProcessImprovementDetailProps {
  onBack: () => void;
  lang: Language;
}

const ProcessImprovementDetail: React.FC<ProcessImprovementDetailProps> = ({ onBack, lang }) => {
  const [activeSubView, setActiveSubView] = useState<string | null>(null);

  const content = {
    en: {
      title: "Process Improvement",
      subtitle: "Efficiency & Optimization Node",
      backBtn: "Back to Engineering",
      hero: {
        question: "What is Process Improvement?",
        desc: "The systematic approach to making existing processes better—targeting less time, lower cost, zero loss, and higher output.",
        mantra: "Better is better than best, because better never stops."
      },
      pillars: [
        {
          id: 'kaizen',
          title: "Kaizen Events",
          tag: "Continuous Evolution",
          desc: "Short-term, team-based activities focused on solving specific floor problems.",
          details: [
            "Small but continuous improvements",
            "Involves Production, Quality & Eng.",
            "Focus: Safety, Quality, Cost (SQC)"
          ],
          example: "Example: Changing tool positions to reduce operator movement by 20%.",
          icon: "⚡"
        },
        {
          id: 'smed',
          title: "SMED / Changeover",
          tag: "Quick Changeover",
          desc: "The art of reducing machine setup time from hours to minutes.",
          details: [
            "Shift 'Internal' tasks to 'External'",
            "Simplify setup tools (One-turn bolts)",
            "Parallel tasks by multiple people"
          ],
          example: "Example: Reducing model change time from 60 mins to 15 mins.",
          icon: "⏱️",
          deep: true
        },
        {
          id: 'bottleneck',
          title: "Bottleneck Removal",
          tag: "Flow Unblocker",
          desc: "Identifying and fixing the single slowest station that stops the whole line.",
          details: [
            "Identify highest Cycle Time station",
            "Apply automation or extra tools",
            "Redistribute work or add manpower"
          ],
          example: "Example: Adding a second jig to the slowest station to double its speed.",
          icon: "🚧"
        }
      ],
      smedLogic: {
        title: "The SMED Logic",
        internal: { name: "Internal Tasks", desc: "Must be done when machine is STOPPED." },
        external: { name: "External Tasks", desc: "Can be done while machine is RUNNING." },
        goal: "Goal: Convert Internal ➔ External"
      },
      impact: {
        title: "Optimization Impact Matrix",
        headers: ["Efficiency Area", "Impact Result"],
        rows: [
          { area: "Productivity", effect: "Increased (Higher UPH)", color: "emerald" },
          { area: "Changeover Loss", effect: "Reduced (Fast Setup)", color: "amber" },
          { area: "Idle Time", effect: "Reduced (Continuous Flow)", color: "cyan" },
          { area: "OEE Status", effect: "Improved (Machine Health)", color: "indigo" },
          { area: "Operating Cost", effect: "Reduced (Higher Profit)", color: "rose" }
        ]
      }
    },
    hi: {
      title: "प्रोसेस सुधार (Improvement)",
      subtitle: "एफिशिएंसी और ऑप्टिमाइजेशन",
      backBtn: "वापस जाएं",
      hero: {
        question: "Process Improvement क्या होता है?",
        desc: "मौजूदा काम करने के तरीके को बेहतर बनाना—ताकि कम समय, कम खर्च और कम नुकसान में ज्यादा माल बन सके।",
        mantra: "सुधार कभी खत्म नहीं होता, हर दिन कल से बेहतर होना ही लक्ष्य है।"
      },
      pillars: [
        {
          id: 'kaizen',
          title: "काइज़न (Kaizen) इवेंट्स",
          tag: "लगातार विकास",
          desc: "पूरी टीम के साथ मिलकर किसी खास समस्या को सुलझाने की छोटी और तेज़ गतिविधि।",
          details: [
            "छोटे लेकिन लगातार होने वाले सुधार",
            "प्रोडक्शन, क्वालिटी और इंजीनियरिंग का मेल",
            "फोकस: सुरक्षा, क्वालिटी और प्रोडक्टिविटी"
          ],
          example: "उदाहरण: टूल्स को करीब रखकर ऑपरेटर का चलना 20% कम करना।",
          icon: "⚡"
        },
        {
          id: 'smed',
          title: "SMED / चेंजओवर",
          tag: "तेज़ बदलाव (Quick)",
          desc: "मशीन के सेटअप या मॉडल बदलने के समय को घंटों से मिनटों में लाने की तकनीक।",
          details: [
            "रुकी हुई मशीन के काम को चलते हुए में शिफ्ट करना",
            "सेटअप के स्टेप्स को आसान बनाना",
            "एक साथ कई लोगों द्वारा सेटअप पूरा करना"
          ],
          example: "उदाहरण: मॉडल बदलने का समय 60 मिनट से घटाकर 15 मिनट करना।",
          icon: "⏱️",
          deep: true
        },
        {
          id: 'bottleneck',
          title: "बॉटलनेक हटाना",
          tag: "रुकावट दूर करना",
          desc: "लाइन के सबसे धीमे स्टेशन को पहचानना और उसे तेज़ करना ताकि पूरी लाइन स्मूथ चले।",
          details: [
            "सबसे ज्यादा साइकिल टाइम वाले स्टेशन की पहचान",
            "वहां ऑटोमेशन या नए टूल्स का इस्तेमाल",
            "काम का बँवारा या अतिरिक्त मैनपावर"
          ],
          example: "उदाहरण: धीमे स्टेशन पर एक अतिरिक्त जिग (Jig) लगाकर उसकी रफ़्तार बढ़ाना।",
          icon: "🚧"
        }
      ],
      smedLogic: {
        title: "SMED का सिद्धांत",
        internal: { name: "इंटरनल काम", desc: "मशीन रुकने पर ही किए जा सकते हैं।" },
        external: { name: "एक्सटर्नल काम", desc: "मशीन चलते हुए भी पहले से किए जा सकते हैं।" },
        goal: "लक्ष्य: इंटरनल को एक्सटर्नल में बदलना"
      },
      impact: {
        title: "सुधार का असर (Impact Matrix)",
        headers: ["कार्यक्षेत्र", "सुधार का नतीजा"],
        rows: [
          { area: "प्रोडक्टिविटी", effect: "बढ़ोतरी (ज़्यादा माल)", color: "emerald" },
          { area: "चेंजओवर लॉस", effect: "कमी (तेज़ सेटअप)", color: "amber" },
          { area: "खाली समय (Idle)", effect: "कमी (लगातार काम)", color: "cyan" },
          { area: "OEE स्टेटस", effect: "सुधार (मशीन क्षमता)", color: "indigo" },
          { area: "लागत (Cost)", effect: "कमी (ज़्यादा मुनाफा)", color: "rose" }
        ]
      }
    }
  };

  const current = content[lang];

  if (activeSubView === 'smed') return <SMEDDetail onBack={() => setActiveSubView(null)} lang={lang} />;

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-amber-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse shadow-[0_0_12px_amber]"></div>
              <span className="text-amber-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono">Optimization</h3>
        </div>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-amber-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Maximum Output</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-amber-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-amber-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">
            "{current.hero.mantra}"
         </div>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {current.pillars.map((p) => (
            <div 
              key={p.id} 
              onClick={() => p.deep && setActiveSubView(p.id)}
              className={`bg-slate-950/60 border border-white/5 p-8 rounded-[40px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden h-full ${p.deep ? 'cursor-pointer border-amber-500/30' : ''}`}
            >
               <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-slate-900 border border-amber-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                     {p.icon}
                  </div>
                  <span className="text-amber-500 font-black text-[10px] uppercase tracking-widest border border-amber-500/30 px-3 py-1 rounded-full">{p.tag}</span>
               </div>

               <div className="space-y-2">
                  <h5 className={`text-white text-xl font-black uppercase tracking-tight transition-colors ${p.deep ? 'group-hover:text-amber-400' : ''}`}>0{p.id === 'kaizen' ? '1' : p.id === 'smed' ? '2' : '3'}. {p.title}</h5>
                  <p className="text-slate-400 text-xs font-bold leading-relaxed italic">"{p.desc}"</p>
               </div>

               {p.deep && (
                  <div className="flex items-center gap-2 text-amber-400 text-[8px] font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                     Explore Technique <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
               )}

               <div className="space-y-3 pt-4 border-t border-white/5">
                  <div className="grid grid-cols-1 gap-2">
                     {p.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-[10px] text-slate-300 font-black uppercase tracking-tight">
                           <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                           {detail}
                        </div>
                     ))}
                  </div>
               </div>

               <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl mt-auto">
                  <p className="text-white text-[10px] font-bold italic leading-tight">📌 {p.example}</p>
               </div>
            </div>
         ))}
      </div>

      {/* SMED Logic Visual */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl space-y-10 overflow-hidden relative">
         <div className="absolute top-0 right-0 p-4 text-white/5 font-black text-4xl italic">Time Saving</div>
         <h4 className="text-white text-center font-black text-xl md:text-2xl uppercase tracking-[0.3em]">{current.smedLogic.title}</h4>
         <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-6">
            <div className="flex-1 bg-slate-950 p-8 rounded-[32px] border border-rose-500/30 flex flex-col items-center gap-4 group hover:scale-105 transition-all shadow-xl text-center">
               <div className="w-12 h-12 bg-rose-500/20 border border-rose-500/50 rounded-xl flex items-center justify-center text-rose-500 text-2xl">🛑</div>
               <h5 className="text-white font-black text-lg uppercase tracking-tight">{current.smedLogic.internal.name}</h5>
               <p className="text-slate-500 text-[10px] font-bold italic">"{current.smedLogic.internal.desc}"</p>
            </div>

            <div className="text-amber-500 text-4xl rotate-90 md:rotate-0 flex flex-col items-center gap-2">
               <span>➔</span>
               <span className="text-[8px] font-black uppercase tracking-widest text-white/40">Convert</span>
            </div>

            <div className="flex-1 bg-slate-950 p-8 rounded-[32px] border border-emerald-500/30 flex flex-col items-center gap-4 group hover:scale-105 transition-all shadow-xl text-center">
               <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/50 rounded-xl flex items-center justify-center text-emerald-500 text-2xl">⚙️</div>
               <h5 className="text-white font-black text-lg uppercase tracking-tight">{current.smedLogic.external.name}</h5>
               <p className="text-slate-500 text-[10px] font-bold italic">"{current.smedLogic.external.desc}"</p>
            </div>
         </div>
         <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl text-center">
            <p className="text-amber-400 font-black text-sm uppercase tracking-widest italic">{current.smedLogic.goal}</p>
         </div>
      </div>

      {/* Impact Matrix Table */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl overflow-hidden backdrop-blur-xl">
         <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
            <span className="w-10 h-1 bg-amber-500 shadow-[0_0_12px_amber]"></span>
            {current.impact.title}
         </h4>
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="border-b border-white/10">
                     {current.impact.headers.map((h, i) => (
                        <th key={i} className={`py-4 text-[10px] font-black uppercase tracking-widest ${i === 0 ? 'text-slate-500' : 'text-amber-400'}`}>{h}</th>
                     ))}
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {current.impact.rows.map((row, i) => (
                     <tr key={i} className="group hover:bg-white/5 transition-colors">
                        <td className="py-6 text-white font-black text-xs md:text-sm uppercase tracking-tight">{row.area}</td>
                        <td className="py-6">
                           <span className={`bg-${row.color}-500/10 text-${row.color}-400 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-${row.color}-500/30`}>
                              {row.effect}
                           </span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      {/* Summary Logic Footer */}
      <div className="bg-slate-950/60 border border-white/5 rounded-[40px] p-8 md:p-12 shadow-inner flex flex-col items-center text-center gap-4">
         <p className="text-amber-400 font-black text-xs md:text-base uppercase tracking-widest">
            {lang === 'hi' 
              ? 'छोटा बदलाव = बड़ी सफलता' 
              : 'Small Change = Big Success'}
         </p>
         <div className="flex gap-4">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
         </div>
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-amber-500 rounded-full shadow-[0_0_12px_amber] animate-pulse"></span>
                Optimization Engine: Running
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Process Improvement v3.4 // Industrial Growth Node</div>
      </div>
    </div>
  );
};

export default ProcessImprovementDetail;

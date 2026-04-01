
import React from 'react';
import { Language } from '../types';

interface LineBalancingDetailProps {
  onBack: () => void;
  lang: Language;
}

const LineBalancingDetail: React.FC<LineBalancingDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Line of Balancing (LOB)",
      subtitle: "Workflow Synchronization & Flow Harmony",
      backBtn: "Back to Process Design",
      hero: {
        question: "What is Line Balancing?",
        desc: "Line Balancing is the process of distributing tasks evenly across all workstations so that no station is overloaded while others sit idle.",
        goal: "Goal: Zero Bottlenecks, Maximum Throughput, Smooth Flow."
      },
      pillars: [
        {
          id: 1,
          title: "Takt Time Calculation",
          tag: "Customer Heartbeat",
          desc: "Determining the required speed to match customer demand.",
          logic: "Available Time ÷ Customer Demand",
          icon: "💓"
        },
        {
          id: 2,
          title: "CT vs TT Comparison",
          tag: "Health Check",
          desc: "Comparing actual station time (CT) with the target speed (TT).",
          logic: "CT > TT = Bottleneck | CT ≤ TT = Balanced",
          icon: "⚖️"
        },
        {
          id: 3,
          title: "Work Split / Merge",
          tag: "Flow Adjuster",
          desc: "Redistributing tasks by splitting heavy jobs or merging light ones.",
          logic: "Eliminates 'Waiting Time' and 'Over-burden'.",
          icon: "🧩"
        },
        {
          id: 4,
          title: "Manpower Optimization",
          tag: "Right Scaling",
          desc: "Using the exact number of people needed for the volume.",
          logic: "Avoids excess labor cost and idle time.",
          icon: "👥"
        }
      ],
      visuals: {
        unbalanced: "Unbalanced: S1 (Fast) | S2 (Very Slow) | S3 (Waiting)",
        balanced: "Balanced: S1 (Sync) | S2 (Sync) | S3 (Sync)",
        formulaLabel: "The Balancing Formula"
      },
      summary: "Result: Synchronized Production + Higher UPH + Happy Operators."
    },
    hi: {
      title: "लाइन बैलेंसिंग (Line Balancing)",
      subtitle: "वर्कफ़्लो तालमेल और स्मूथ फ्लो",
      backBtn: "वापस जाएं",
      hero: {
        question: "Line Balancing क्या होता है?",
        desc: "असेंबली लाइन के सभी स्टेशनों पर काम को बराबर बांटना, ताकि कोई स्टेशन ओवर-लोड न रहे और कोई खाली न बैठा रहे।",
        goal: "लक्ष्य: जीरो बॉटलनेक, अधिकतम आउटपुट, और काम की लय।"
      },
      pillars: [
        {
          id: 1,
          title: "Takt Time कैलकुलेशन",
          tag: "ग्राहक की धड़कन",
          desc: "कस्टमर की मांग के हिसाब से ज़रूरी रफ़्तार तय करना।",
          logic: "उपलब्ध समय ÷ ग्राहक की मांग",
          icon: "💓"
        },
        {
          id: 2,
          title: "CT vs TT तुलना",
          tag: "हेल्थ चेक",
          desc: "स्टेशन के असली समय (CT) की तुलना टारगेट समय (TT) से करना।",
          logic: "CT > TT = रुकावट (Bottleneck) | CT ≤ TT = बैलेंस",
          icon: "⚖️"
        },
        {
          id: 3,
          title: "वर्क स्प्लिट / मर्ज",
          tag: "फ्लो एडजेस्टर",
          desc: "भारी काम को बांटना या छोटे कामों को जोड़कर समय बचाना।",
          logic: "इससे 'इंतज़ार' और 'बोझ' दोनों खत्म होते हैं।",
          icon: "🧩"
        },
        {
          id: 4,
          title: "मैनपावर ऑप्टिमाइजेशन",
          tag: "सही संख्या",
          desc: "प्रोडक्शन के हिसाब से सही संख्या में ऑपरेटर लगाना।",
          logic: "फालतू लेबर खर्च और खाली बैठने का समय कम करता है।",
          icon: "👥"
        }
      ],
      visuals: {
        unbalanced: "Unbalanced: S1 (तेज़) | S2 (बहुत धीमा) | S3 (खाली)",
        balanced: "Balanced: S1 (बराबर) | S2 (बराबर) | S3 (बराबर)",
        formulaLabel: "बैलेंसिंग का सूत्र (Formula)"
      },
      summary: "नतीजा: तालमेल वाला प्रोडक्शन + ज्यादा UPH + खुश ऑपरेटर।"
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-indigo-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_12px_indigo]"></div>
              <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono">Line Balancing</h3>
        </div>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-indigo-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Synchronization</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-indigo-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-indigo-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">
            "{current.hero.goal}"
         </div>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {current.pillars.map((p) => (
            <div key={p.id} className="bg-slate-950/60 border border-white/5 p-8 rounded-[40px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden h-full">
               <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-slate-900 border border-indigo-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                     {p.icon}
                  </div>
                  <span className="text-indigo-500 font-black text-[10px] uppercase tracking-widest border border-indigo-500/30 px-3 py-1 rounded-full">{p.tag}</span>
               </div>

               <div className="space-y-2">
                  <h5 className="text-white text-xl font-black uppercase tracking-tight group-hover:text-indigo-400 transition-colors flex items-center gap-3">
                     <span className="text-indigo-500/40 font-mono">0{p.id}</span>
                     {p.title}
                  </h5>
                  <p className="text-slate-400 text-xs font-bold leading-relaxed italic">"{p.desc}"</p>
               </div>

               <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl mt-auto">
                  <span className="text-emerald-500 text-[8px] font-black uppercase tracking-widest block mb-1">Key Logic / लॉजिक</span>
                  <p className="text-white text-[10px] font-bold italic leading-tight">⚡ {p.logic}</p>
               </div>
            </div>
         ))}
      </div>

      {/* Visual Comparison Logic */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* Unbalanced State */}
         <div className="bg-slate-900/60 border border-rose-500/20 p-8 rounded-[40px] shadow-2xl space-y-8">
            <h5 className="text-rose-500 font-black text-sm uppercase tracking-[0.3em] flex items-center gap-3">
               <span className="w-8 h-px bg-rose-500"></span>
               {current.visuals.unbalanced}
            </h5>
            <div className="flex items-end justify-center gap-6 h-48 bg-slate-950/40 rounded-3xl p-6 border border-white/5 shadow-inner">
               <div className="w-12 bg-emerald-500/40 rounded-t-xl h-1/4 relative group">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-emerald-400">15s</span>
               </div>
               <div className="w-12 bg-rose-500 rounded-t-xl h-full relative group shadow-[0_0_20px_rgba(244,63,94,0.3)]">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-rose-500 animate-pulse">60s!!</span>
               </div>
               <div className="w-12 bg-slate-800 rounded-t-xl h-1/6 relative group">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-slate-500 italic">Idle</span>
               </div>
               {/* Target Line */}
               <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t border-dashed border-indigo-500/30"></div>
            </div>
            <p className="text-slate-500 text-[10px] font-black uppercase text-center">Chaos: The Bottleneck (S2) blocks the whole line.</p>
         </div>

         {/* Balanced State */}
         <div className="bg-slate-900/60 border border-emerald-500/20 p-8 rounded-[40px] shadow-2xl space-y-8">
            <h5 className="text-emerald-500 font-black text-sm uppercase tracking-[0.3em] flex items-center gap-3">
               <span className="w-8 h-px bg-emerald-500"></span>
               {current.visuals.balanced}
            </h5>
            <div className="flex items-end justify-center gap-6 h-48 bg-slate-950/40 rounded-3xl p-6 border border-white/5 shadow-inner">
               <div className="w-12 bg-indigo-500 rounded-t-xl h-1/2 relative group transition-all hover:h-[55%]">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-indigo-400">30s</span>
               </div>
               <div className="w-12 bg-indigo-500 rounded-t-xl h-1/2 relative group transition-all hover:h-[55%]">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-indigo-400">30s</span>
               </div>
               <div className="w-12 bg-indigo-500 rounded-t-xl h-1/2 relative group transition-all hover:h-[55%]">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-indigo-400">30s</span>
               </div>
               {/* Target Line */}
               <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t border-dashed border-emerald-500/50"></div>
            </div>
            <p className="text-slate-500 text-[10px] font-black uppercase text-center">Harmony: Every station is level with Takt Time.</p>
         </div>
      </div>

      {/* Takt Time Formula Callout */}
      <div className="bg-slate-950/60 border border-indigo-500/30 rounded-[40px] p-8 md:p-12 shadow-inner flex flex-col items-center text-center gap-6">
         <h4 className="text-indigo-400 font-black text-[10px] md:text-xs uppercase tracking-[0.5em]">{current.visuals.formulaLabel}</h4>
         <div className="bg-slate-900 border border-white/10 px-12 py-8 rounded-3xl shadow-2xl">
            <p className="text-2xl md:text-5xl font-black text-white italic tracking-tighter leading-none bg-gradient-to-r from-white via-indigo-400 to-white bg-clip-text text-transparent">
               Takt Time = Available Time ÷ Customer Demand
            </p>
         </div>
         <div className="flex gap-4">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
         </div>
         <p className="text-emerald-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            "{current.summary}"
         </p>
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-[0_0_12px_indigo] animate-pulse"></span>
                Flow Engine: Levelled
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Balancing Protocol v8.4 // Flow Efficiency Standard</div>
      </div>
    </div>
  );
};

export default LineBalancingDetail;

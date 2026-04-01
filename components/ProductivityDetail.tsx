
import React from 'react';
import { Language } from '../types';

interface ProductivityDetailProps {
  onBack: () => void;
  lang: Language;
}

const ProductivityDetail: React.FC<ProductivityDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Productivity Metrics",
      subtitle: "Performance & Efficiency Hub",
      backBtn: "Back",
      sections: {
        uph: "1. UPH (Units Per Hour)",
        upph: "2. UPPH (Units Per Person Hour)",
        idle: "3. Idle Time (The Loss Factor)"
      },
      uph: {
        tag: "Line Speed",
        question: "How many units do we produce in one hour?",
        desc: "Measures the output speed of the machine or the entire line.",
        formula: "Total Units ÷ Total Hours",
        example: "If a line makes 120 pieces in 1 hour -> UPH = 120",
        useCase: ["Target setting", "Daily output tracking", "Shift performance"]
      },
      upph: {
        tag: "Manpower Power",
        question: "How many units does ONE person make in one hour?",
        desc: "Measures how efficiently your manpower is being used.",
        formula: "Total Units ÷ (Total Persons × Total Hours)",
        example: "240 Units made by 4 people in 1 hour -> UPPH = 60",
        note: "Higher UPPH means better manpower utilization."
      },
      idle: {
        tag: "Time Leakage",
        question: "When are we NOT working?",
        desc: "The time during a shift when machines or people are waiting (Loss time).",
        reasons: [
          { label: "Material Shortage", icon: "📦" },
          { label: "Machine Breakdown", icon: "⚙️" },
          { label: "Quality Issues", icon: "⚠️" },
          { label: "Absenteeism", icon: "👤" },
          { label: "Power Cut", icon: "⚡" }
        ],
        example: "8hr Shift - 7hr Working = 1hr Idle Time (Loss)"
      }
    },
    hi: {
      title: "प्रोडक्टिविटी मैट्रिक्स",
      subtitle: "कार्यक्षमता और परफॉरमेंस",
      backBtn: "वापस",
      sections: {
        uph: "1. UPH (Units Per Hour)",
        upph: "2. UPPH (Units Per Person Hour)",
        idle: "3. Idle Time (समय की बर्बादी)"
      },
      uph: {
        tag: "लाइन की रफ़्तार",
        question: "1 घंटे में कितने पीस बन रहे हैं?",
        desc: "यह मशीन या पूरी लाइन की काम करने की रफ़्तार को बताता है।",
        formula: "कुल पीस ÷ कुल घंटे",
        example: "अगर 1 घंटे में 120 पीस बने -> UPH = 120",
        useCase: ["टारगेट सेट करने के लिए", "आउटपुट चेक करने के लिए", "शिफ्ट की तुलना के लिए"]
      },
      upph: {
        tag: "मैनपावर की ताकत",
        question: "1 व्यक्ति 1 घंटे में कितने पीस बना रहा है?",
        desc: "यह बताता है कि आपकी टीम कितनी कुशलता से काम कर रही है।",
        formula: "कुल पीस ÷ (कुल व्यक्ति × कुल घंटे)",
        example: "4 लोगों ने 1 घंटे में 240 पीस बनाए -> UPPH = 60",
        note: "UPPH जितना ज्यादा होगा, काम उतना ही अच्छा माना जाएगा।"
      },
      idle: {
        tag: "समय का नुकसान",
        question: "काम कब रुका हुआ है?",
        desc: "शिफ्ट का वह समय जब मशीन या आदमी किसी वजह से काम नहीं कर रहे होते (नुकसान का समय)।",
        reasons: [
          { label: "सामान की कमी", icon: "📦" },
          { label: "मशीन खराब होना", icon: "⚙️" },
          { label: "क्वालिटी रिजेक्शन", icon: "⚠️" },
          { label: "कर्मचारी की कमी", icon: "👤" },
          { label: "बिजली / पावर कट", icon: "⚡" }
        ],
        example: "8 घंटे की शिफ्ट - 7 घंटे काम = 1 घंटा Idle Time (घाटा)"
      }
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-12 max-w-6xl mx-auto px-4 md:px-6 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-500/20 pb-5 bg-slate-950/40 p-5 rounded-t-2xl">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
              <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.3em]">{current.subtitle}</span>
           </div>
           <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tight leading-none">{current.title}</h3>
        </div>
        <button 
          onClick={onBack}
          className="bg-slate-900 hover:bg-slate-800 text-white border border-amber-500/30 px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </button>
      </div>

      {/* Grid for UPH and UPPH */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* UPH Card */}
        <div className="bg-slate-900/60 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col gap-5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 text-5xl font-black text-white/[0.02] select-none">UPH</div>
          <div className="flex items-center justify-between">
            <h4 className="text-amber-500 font-black text-sm md:text-lg uppercase tracking-tight">{current.sections.uph}</h4>
            <span className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded text-[8px] text-amber-400 font-black uppercase">{current.uph.tag}</span>
          </div>
          
          <div className="bg-amber-500/5 border-l-4 border-amber-500 px-4 py-2">
             <p className="text-white text-xs md:text-sm font-bold leading-relaxed">{current.uph.question}</p>
          </div>
          
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{current.uph.desc}</p>
          
          <div className="bg-slate-950/80 p-5 rounded-2xl border border-white/5 flex flex-col gap-3">
             <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-[9px] font-black text-slate-500 uppercase">Calculation</span>
                <span className="text-amber-500 text-[10px] font-black italic">{current.uph.formula}</span>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
                </div>
                <p className="text-[10px] md:text-xs text-slate-100 font-black uppercase italic">{current.uph.example}</p>
             </div>
          </div>
        </div>

        {/* UPPH Card */}
        <div className="bg-slate-900/60 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col gap-5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 text-5xl font-black text-white/[0.02] select-none">UPPH</div>
          <div className="flex items-center justify-between">
            <h4 className="text-emerald-500 font-black text-sm md:text-lg uppercase tracking-tight">{current.sections.upph}</h4>
            <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded text-[8px] text-emerald-400 font-black uppercase">{current.upph.tag}</span>
          </div>
          
          <div className="bg-emerald-500/5 border-l-4 border-emerald-500 px-4 py-2">
             <p className="text-white text-xs md:text-sm font-bold leading-relaxed">{current.upph.question}</p>
          </div>
          
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{current.upph.desc}</p>
          
          <div className="bg-slate-950/80 p-5 rounded-2xl border border-white/5 flex flex-col gap-3">
             <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-[9px] font-black text-slate-500 uppercase">Calculation</span>
                <span className="text-emerald-500 text-[10px] font-black italic">{current.upph.formula}</span>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                   </svg>
                </div>
                <p className="text-[10px] md:text-xs text-slate-100 font-black uppercase italic">{current.upph.example}</p>
             </div>
             <div className="text-[8px] font-bold text-emerald-500/60 text-center uppercase tracking-widest mt-1">
                {current.upph.note}
             </div>
          </div>
        </div>
      </div>

      {/* Idle Time Section - Detailed Loss Analysis */}
      <div className="bg-slate-900/60 border border-white/5 rounded-3xl p-6 md:p-10 flex flex-col gap-8 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 text-5xl font-black text-red-500/5 select-none">IDLE</div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-red-500 font-black text-sm md:text-xl uppercase tracking-tight">{current.sections.idle}</h4>
            <div className="bg-red-500/10 border-l-4 border-red-500 px-4 py-2">
               <p className="text-white text-xs md:text-sm font-bold leading-relaxed">{current.idle.question}</p>
            </div>
          </div>
          <div className="bg-red-500/20 px-4 py-1.5 rounded-full border border-red-500/40 text-red-400 text-[9px] font-black uppercase tracking-widest">{current.idle.tag}</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
           <div className="lg:col-span-7 space-y-6">
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{current.idle.desc}</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                 {current.idle.reasons.map((reason, i) => (
                   <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-2xl flex flex-col items-center gap-2 hover:bg-red-500/10 transition-all text-center">
                      <span className="text-2xl">{reason.icon}</span>
                      <span className="text-[10px] font-bold text-white uppercase tracking-tighter leading-tight">{reason.label}</span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="lg:col-span-5">
              <div className="bg-slate-950/80 rounded-2xl border border-red-500/20 p-6 md:p-8 flex flex-col items-center text-center gap-6 shadow-inner">
                 <div className="w-16 h-16 rounded-full border-4 border-red-500/30 border-t-red-500 flex items-center justify-center text-red-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                 </div>
                 <div className="space-y-2">
                    <span className="block text-[10px] font-black text-red-500 uppercase tracking-widest">Efficiency Leakage Example</span>
                    <p className="text-sm md:text-lg text-white font-black italic">"{current.idle.example}"</p>
                 </div>
                 <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-emerald-500"></div>
                    <div className="w-[15%] h-full bg-red-500"></div>
                 </div>
                 <span className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.4em]">Target: 100% Active Production</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProductivityDetail;

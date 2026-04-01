
import React from 'react';
import { Language } from '../types';

interface TimeManagementDetailProps {
  onBack: () => void;
  lang: Language;
}

const TimeManagementDetail: React.FC<TimeManagementDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Time Management Excellence",
      subtitle: "Industrial Efficiency Metrics",
      backBtn: "Back",
      sections: {
        ct: "Cycle Time (CT)",
        tt: "Takt Time (TT)",
        lt: "Lead Time (LT)",
        bn: "Bottleneck Analysis"
      },
      ct: {
        tag: "Actual Performance",
        desc: "The actual time taken by an operator or machine to complete one unit of work.",
        keyPoints: ["Used for line balancing", "Measures operator efficiency", "Identifies speed gaps"],
        formula: "Total Time / Units Produced",
        analogy: "Think of it as your actual running speed."
      },
      tt: {
        tag: "Customer Heartbeat",
        desc: "The rate at which you must produce to meet customer demand.",
        keyPoints: ["Set by the customer", "Defines line rhythm", "Zero waste target"],
        formula: "Available Time / Customer Demand",
        example: "If demand is 480 units in 8 hours, you must finish 1 unit every 60 seconds."
      },
      lt: {
        tag: "Total Journey",
        desc: "The total time elapsed from the moment an order is placed until the product is delivered.",
        stages: ["Order Received", "Procurement", "Production", "Quality Check", "Dispatch"]
      },
      bn: {
        tag: "System Constraint",
        desc: "The slowest station in the production line that limits the total output.",
        impacts: ["Line slows down", "WIP (Work In Progress) increases", "High operator stress"],
        solutions: ["Process automation", "Work splitting", "Additional manpower", "Fixture improvement"]
      }
    },
    hi: {
      title: "टाइम मैनेजमेंट",
      subtitle: "इंडस्ट्रियल एफिशिएंसी",
      backBtn: "वापस",
      sections: {
        ct: "साइकिल टाइम (Cycle Time)",
        tt: "टैक्ट टाइम (Takt Time)",
        lt: "लीड टाइम (Lead Time)",
        bn: "बॉटलनेक (Bottleneck)"
      },
      ct: {
        tag: "काम की असली रफ़्तार",
        desc: "एक ऑपरेटर या मशीन को एक यूनिट तैयार करने में लगने वाला वास्तविक समय।",
        keyPoints: ["प्रोडक्टिविटी चेक के लिए", "लाइन बैलेंसिंग में मददगार", "ऑपरेटर की क्षमता मापने के लिए"],
        formula: "कुल समय / बनी हुई यूनिट्स",
        analogy: "यह आपकी दौड़ने की असली रफ़्तार है।"
      },
      tt: {
        tag: "कस्टमर की धड़कन",
        desc: "वह रफ़्तार जिससे आपको सामान बनाना चाहिए ताकि ग्राहक की मांग पूरी हो सके।",
        keyPoints: ["ग्राहक द्वारा तय किया गया", "प्रोडक्शन की लय (Rhythm)", "वेस्ट को कम करने का लक्ष्य"],
        formula: "उपलब्ध समय / ग्राहक की मांग",
        example: "अगर 8 घंटे में 480 पीस चाहिए, तो हर 60 सेकंड में 1 पीस बनना ज़रूरी है।"
      },
      lt: {
        tag: "कुल सफर",
        desc: "ऑर्डर मिलने से लेकर सामान कस्टमर तक पहुँचने तक का कुल समय।",
        stages: ["ऑर्डर मिला", "मटेरियल खरीदना", "प्रोडक्शन", "क्वालिटी चेक", "डिस्पैच"]
      },
      bn: {
        tag: "सबसे धीमा पॉइंट",
        desc: "प्रोडक्शन लाइन का वह हिस्सा जो सबसे धीमा है और पूरी लाइन की रफ़्तार कम कर देता है।",
        impacts: ["लाइन धीमी होना", "WIP (कच्चा माल) जमा होना", "टारगेट मिस होना"],
        solutions: ["ऑटोमेशन का इस्तेमाल", "काम को बांटना", "अतिरिक्त मैनपावर", "ट्रेनिंग और सुधार"]
      }
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-12 max-w-6xl mx-auto px-4 md:px-6 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5 bg-slate-950/40 p-5 rounded-t-2xl">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
              <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em]">{current.subtitle}</span>
           </div>
           <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tight leading-none">{current.title}</h3>
        </div>
        <button 
          onClick={onBack}
          className="bg-slate-900 hover:bg-slate-800 text-white border border-white/10 px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2 group"
        >
          <svg className="w-4 h-4 text-emerald-400 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </button>
      </div>

      {/* Main Comparison Section (CT vs TT) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cycle Time Card */}
        <div className="bg-slate-900/60 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col gap-5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 text-5xl font-black text-emerald-500/5 select-none">CT</div>
          <div className="flex items-center justify-between">
            <h4 className="text-emerald-400 font-black text-xs md:text-sm uppercase tracking-widest">{current.sections.ct}</h4>
            <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 rounded text-[8px] text-emerald-500 font-black uppercase">{current.ct.tag}</span>
          </div>
          <p className="text-white text-xs md:text-sm font-bold leading-relaxed">{current.ct.desc}</p>
          <div className="bg-slate-950/60 p-4 rounded-2xl border border-emerald-500/20">
             <span className="text-[9px] font-black text-emerald-500/60 uppercase block mb-1">Formula</span>
             <code className="text-emerald-400 text-xs md:text-sm font-black">{current.ct.formula}</code>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            {current.ct.keyPoints.map((p, i) => (
              <div key={i} className="flex items-center gap-3 text-[10px] md:text-xs text-slate-300 font-bold">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> {p}
              </div>
            ))}
          </div>
        </div>

        {/* Takt Time Card */}
        <div className="bg-slate-900/60 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col gap-5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 text-5xl font-black text-cyan-500/5 select-none">TT</div>
          <div className="flex items-center justify-between">
            <h4 className="text-cyan-400 font-black text-xs md:text-sm uppercase tracking-widest">{current.sections.tt}</h4>
            <span className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/30 rounded text-[8px] text-cyan-500 font-black uppercase">{current.tt.tag}</span>
          </div>
          <p className="text-white text-xs md:text-sm font-bold leading-relaxed">{current.tt.desc}</p>
          <div className="bg-slate-950/60 p-4 rounded-2xl border border-cyan-500/20">
             <span className="text-[9px] font-black text-cyan-500/60 uppercase block mb-1">Formula</span>
             <code className="text-cyan-400 text-xs md:text-sm font-black">{current.tt.formula}</code>
          </div>
          <div className="bg-cyan-500/5 border border-cyan-500/10 p-3 rounded-xl">
             <p className="text-[10px] md:text-xs text-slate-400 font-bold leading-snug"><strong className="text-cyan-400">Ex:</strong> {current.tt.example}</p>
          </div>
        </div>
      </div>

      {/* Lead Time (Total Journey) Visualization */}
      <div className="bg-slate-900/60 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-2xl overflow-hidden relative">
        <div className="flex items-center justify-between">
          <h4 className="text-white font-black text-xs md:text-sm uppercase tracking-[0.2em]">{current.sections.lt}</h4>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-slate-400 font-black uppercase tracking-widest">{current.lt.tag}</span>
        </div>
        <p className="text-slate-300 text-xs md:text-sm font-bold max-w-2xl">{current.lt.desc}</p>
        
        {/* Visual Track */}
        <div className="relative mt-4 mb-8">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 rounded-full"></div>
          <div className="relative flex justify-between items-center gap-2">
            {current.lt.stages.map((stage, i) => (
              <div key={i} className="flex flex-col items-center gap-3 relative z-10 group/stage">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 text-[10px] font-black shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover/stage:scale-110 transition-transform">
                  {i + 1}
                </div>
                <span className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase text-center w-16 md:w-20 tracking-tighter leading-tight group-hover/stage:text-white transition-colors">{stage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottleneck Analysis Section */}
      <div className="bg-slate-900/60 border border-white/5 rounded-3xl p-6 md:p-10 flex flex-col gap-8 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 text-5xl font-black text-red-500/5 select-none">BN</div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-red-500 font-black text-sm md:text-xl uppercase tracking-tight">{current.sections.bn}</h4>
            <div className="bg-red-500/10 border-l-4 border-red-500 px-4 py-2">
               <p className="text-white text-xs md:text-sm font-bold leading-relaxed">{current.bn.desc}</p>
            </div>
          </div>
          <div className="bg-red-500/20 px-4 py-1.5 rounded-full border border-red-500/40 text-red-400 text-[9px] font-black uppercase tracking-widest">{current.bn.tag}</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
           {/* Bottleneck Visual */}
           <div className="bg-slate-950/80 rounded-2xl border border-white/5 p-6 flex flex-col gap-6">
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest text-center">Visual Simulation / विजुअल सिमुलेशन</span>
              <div className="flex items-center justify-around gap-2">
                 <div className="flex flex-col items-center gap-2 opacity-40">
                    <div className="w-12 h-16 bg-slate-800 rounded-lg border border-white/10 flex flex-col items-center justify-center">
                       <span className="text-[8px] font-black text-white/40">S-1</span>
                       <span className="text-[10px] font-black text-white">40s</span>
                    </div>
                    <div className="w-1 h-4 bg-slate-800"></div>
                 </div>
                 <div className="flex flex-col items-center gap-2 opacity-40">
                    <div className="w-12 h-16 bg-slate-800 rounded-lg border border-white/10 flex flex-col items-center justify-center">
                       <span className="text-[8px] font-black text-white/40">S-2</span>
                       <span className="text-[10px] font-black text-white">45s</span>
                    </div>
                    <div className="w-1 h-4 bg-slate-800"></div>
                 </div>
                 <div className="flex flex-col items-center gap-2 relative">
                    <div className="absolute -top-1 px-2 py-0.5 bg-red-500 rounded text-[7px] font-black text-white animate-bounce">SLOW</div>
                    <div className="w-14 h-20 bg-slate-900 border-2 border-red-500 rounded-lg flex flex-col items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                       <span className="text-[8px] font-black text-red-500/60">S-3</span>
                       <span className="text-[12px] font-black text-white">70s</span>
                    </div>
                    <div className="w-1 h-6 bg-red-500"></div>
                 </div>
                 <div className="flex flex-col items-center gap-2 opacity-20">
                    <div className="w-12 h-16 bg-slate-800 rounded-lg border border-white/10 flex flex-col items-center justify-center">
                       <span className="text-[8px] font-black text-white/40">S-4</span>
                       <span className="text-[10px] font-black text-white">??s</span>
                    </div>
                    <div className="w-1 h-4 bg-slate-800"></div>
                 </div>
              </div>
              <p className="text-[10px] md:text-xs text-slate-400 text-center font-bold px-4">Station-3 is the Bottleneck because it takes the most time and blocks the whole flow.</p>
           </div>

           {/* Solution List */}
           <div className="flex flex-col gap-6">
              <div className="space-y-3">
                 <h5 className="text-[10px] font-black text-red-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-red-500"></span> How to Fix? / कैसे सुधारें?
                 </h5>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.bn.solutions.map((sol, i) => (
                       <div key={i} className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-3 hover:bg-red-500/10 transition-colors">
                          <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span className="text-[10px] md:text-[11px] text-white font-bold uppercase tracking-tight">{sol}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TimeManagementDetail;

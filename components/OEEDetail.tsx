
import React from 'react';
import { Language } from '../types';

interface OEEDetailProps {
  onBack: () => void;
  lang: Language;
}

const OEEDetail: React.FC<OEEDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "OEE Performance Hub",
      subtitle: "Overall Equipment Effectiveness",
      backBtn: "Back",
      hero: {
        question: "What is OEE?",
        desc: "Overall Equipment Effectiveness (OEE) is a manufacturing performance metric that measures how effectively a machine or production line is utilized. In simple words: OEE shows how much productive time you are getting from your equipment compared to the total planned production time.",
        formula: "OEE = Availability × Performance × Quality"
      },
      pillars: [
        {
          id: "availability",
          title: "1. Availability",
          tag: "Uptime",
          desc: "Measures how much of the planned production time the machine was actually running.",
          formula: "Run Time / Planned Production Time",
          losses: ["Breakdown", "Changeover time", "Setup time", "Waiting for material", "Unplanned stoppages"],
          color: "blue"
        },
        {
          id: "performance",
          title: "2. Performance",
          tag: "Speed",
          desc: "Measures whether the machine is running at its ideal speed.",
          formula: "Actual Output / Ideal Output",
          losses: ["Slow cycle time", "Minor stoppages", "Operator delays", "Reduced machine speed"],
          color: "amber"
        },
        {
          id: "quality",
          title: "3. Quality",
          tag: "Yield",
          desc: "Measures how many good units were produced compared to total units.",
          formula: "Good Units / Total Units Produced",
          losses: ["Rejections", "Rework", "Testing failures", "Field returns"],
          color: "emerald"
        }
      ],
      example: {
        title: "📌 Example (Production Line)",
        assumptions: [
          "Planned Production Time = 480 mins",
          "Breakdown = 60 mins",
          "Actual Output = 900 pcs",
          "Ideal Output = 1000 pcs",
          "Rejection = 50 pcs"
        ],
        steps: [
          { label: "Step 1: Availability", calc: "(480 - 60) / 480 = 87.5%" },
          { label: "Step 2: Performance", calc: "900 / 1000 = 90%" },
          { label: "Step 3: Quality", calc: "(900 - 50) / 900 = 94.4%" }
        ],
        result: "Final OEE: 74.2%"
      },
      typesTitle: "📊 Types of OEE",
      types: [
        { type: "Machine OEE", purpose: "Single machine measurement" },
        { type: "Line OEE", purpose: "Entire production line" },
        { type: "Plant OEE", purpose: "Whole factory performance" },
        { type: "Shift OEE", purpose: "Shift-wise monitoring" },
        { type: "Daily/Monthly OEE", purpose: "Time-based tracking" }
      ],
      benchmarksTitle: "🌍 World Class OEE Benchmark",
      benchmarks: [
        { label: "World Class", range: "85%+", status: "Elite", color: "text-cyan-400" },
        { label: "Good", range: "70–85%", status: "Stable", color: "text-emerald-400" },
        { label: "Average", range: "60–70%", status: "Needs Work", color: "text-amber-400" },
        { label: "Poor", range: "Below 60%", status: "Loss Mode", color: "text-red-500" }
      ],
      improvement: ["TPM / Preventive Maintenance", "Eliminate Bottlenecks", "Skill Upgrading", "SMED (Fast Setup)"]
    },
    hi: {
      title: "OEE परफॉरमेंस हब",
      subtitle: "मशीन की असली कार्यक्षमता",
      backBtn: "वापस",
      hero: {
        question: "OEE क्या होता है?",
        desc: "ओवरऑल इक्विपमेंट इफेक्टिवनेस (OEE) एक मैन्युफैक्चरिंग परफॉरमेंस मेट्रिक है जो यह मापता है कि मशीन या प्रोडक्शन लाइन का कितना प्रभावी ढंग से उपयोग किया जा रहा है। सरल शब्दों में: OEE दिखाता है कि कुल नियोजित उत्पादन समय की तुलना में आपको अपने उपकरणों से कितना उत्पादक समय मिल रहा है।",
        formula: "OEE = Availability × Performance × Quality"
      },
      pillars: [
        {
          id: "availability",
          title: "1. उपलब्धता (Availability)",
          tag: "अप-टाइम",
          desc: "यह मापता है कि नियोजित उत्पादन समय का कितना हिस्सा मशीन वास्तव में चल रही थी।",
          formula: "चलने का समय / नियोजित उत्पादन समय",
          losses: ["ब्रेकडाउन", "चेंजओवर समय", "सेटअप समय", "मटेरियल का इंतज़ार", "अनियोजित रुकावटें"],
          color: "blue"
        },
        {
          id: "performance",
          title: "2. परफॉरमेंस (Performance)",
          tag: "रफ़्तार",
          desc: "यह मापता है कि क्या मशीन अपनी आदर्श गति से चल रही है।",
          formula: "वास्तविक उत्पादन / आदर्श उत्पादन",
          losses: ["धीमी साइकिल समय", "छोटे स्टॉपेज", "ऑपरेटर की देरी", "मशीन की कम गति"],
          color: "amber"
        },
        {
          id: "quality",
          title: "3. क्वालिटी (Quality)",
          tag: "शुद्धता",
          desc: "यह मापता है कि कुल इकाइयों की तुलना में कितनी अच्छी इकाइयों का उत्पादन किया गया था।",
          formula: "अच्छी इकाइयाँ / कुल उत्पादित इकाइयाँ",
          losses: ["रिजेक्शन", "रीवर्क", "टेस्टिंग विफलताएं", "फील्ड रिटर्न"],
          color: "emerald"
        }
      ],
      example: {
        title: "📌 उदाहरण (प्रोडक्शन लाइन)",
        assumptions: [
          "नियोजित उत्पादन समय = 480 मिनट",
          "ब्रेकडाउन = 60 मिनट",
          "वास्तविक उत्पादन = 900 पीस",
          "आदर्श उत्पादन = 1000 पीस",
          "रिजेक्शन = 50 पीस"
        ],
        steps: [
          { label: "चरण 1: उपलब्धता", calc: "(480 - 60) / 480 = 87.5%" },
          { label: "चरण 2: परफॉरमेंस", calc: "900 / 1000 = 90%" },
          { label: "चरण 3: क्वालिटी", calc: "(900 - 50) / 900 = 94.4%" }
        ],
        result: "कुल OEE: 74.2%"
      },
      typesTitle: "📊 OEE के प्रकार",
      types: [
        { type: "मशीन OEE", purpose: "सिंगल मशीन मापन" },
        { type: "लाइन OEE", purpose: "पूरी प्रोडक्शन लाइन" },
        { type: "प्लांट OEE", purpose: "पूरी फैक्ट्री का परफॉरमेंस" },
        { type: "शिफ्ट OEE", purpose: "शिफ्ट-वार मॉनिटरिंग" },
        { type: "दैनिक/मासिक OEE", purpose: "समय-आधारित ट्रैकिंग" }
      ],
      benchmarksTitle: "🌍 वर्ल्ड क्लास OEE बेंचमार्क",
      benchmarks: [
        { label: "वर्ल्ड क्लास", range: "85%+", status: "सर्वश्रेष्ठ", color: "text-cyan-400" },
        { label: "बेहतर", range: "70–85%", status: "स्थिर", color: "text-emerald-400" },
        { label: "औसत", range: "60–70%", status: "सुधार की ज़रूरत", color: "text-amber-400" },
        { label: "खराब", range: "60% से कम", status: "घाटे में", color: "text-red-500" }
      ],
      improvement: ["TPM / समय पर रखरखाव", "रुकावटें (Bottlenecks) दूर करना", "ट्रेनिंग और स्किल सुधार", "रीवर्क और रिजेक्शन कम करना"]
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-6xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-cyan-500/20 pb-6 bg-slate-950/40 p-4 md:p-6 rounded-2xl md:rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(6,182,212,0.8)]"></div>
              <span className="text-cyan-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg">{current.title}</h3>
        </div>
        <button 
          onClick={onBack}
          className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-xl md:rounded-2xl text-[10px] md:text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2 md:gap-3 transform hover:-translate-x-1"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero OEE Formula */}
      <div className="bg-slate-900/60 border border-cyan-500/20 p-6 md:p-12 rounded-3xl md:rounded-[40px] shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-4 md:p-8 text-6xl md:text-8xl font-black text-cyan-500/[0.03] select-none">OEE</div>
         <div className="relative z-10 space-y-4 md:space-y-6">
            <div className="space-y-2">
               <h4 className="text-white text-lg md:text-3xl font-black uppercase tracking-tighter">{current.hero.question}</h4>
               <p className="text-slate-300 text-xs md:text-xl font-medium leading-relaxed max-w-3xl">{current.hero.desc}</p>
            </div>
            <div className="bg-slate-950/80 p-4 md:p-8 rounded-2xl md:rounded-3xl border border-cyan-500/30 text-center shadow-inner">
               <span className="text-[8px] md:text-[11px] font-black text-cyan-500 uppercase tracking-[0.5em] mb-2 md:mb-4 block">The Master Formula</span>
               <p className="text-lg md:text-4xl font-black text-white italic tracking-tighter leading-tight bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent break-words">
                  {current.hero.formula}
               </p>
            </div>
         </div>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
         {current.pillars.map((p, i) => (
           <div key={p.id} className={`bg-slate-950/40 border border-${p.color}-500/20 p-6 md:p-8 rounded-2xl md:rounded-[32px] hover:bg-slate-900 transition-all group flex flex-col gap-4 md:gap-6 shadow-xl`}>
              <div className="flex items-center justify-between">
                 <div className={`w-10 h-10 md:w-12 md:h-12 bg-${p.color}-500/10 border border-${p.color}-500/30 rounded-xl md:rounded-2xl flex items-center justify-center text-${p.color}-500 font-black text-lg md:text-xl shadow-lg`}>
                    0{i+1}
                 </div>
                 <span className={`text-[8px] md:text-[9px] font-black text-${p.color}-400 border border-${p.color}-500/30 px-2 py-0.5 md:px-3 md:py-1 rounded-full uppercase tracking-widest`}>{p.tag}</span>
              </div>
              <div>
                 <h5 className="text-white font-black text-base md:text-lg uppercase mb-1 md:mb-2 tracking-tight leading-none group-hover:translate-x-2 transition-transform">{p.title}</h5>
                 <p className="text-slate-400 text-[10px] md:text-xs font-bold leading-relaxed">{p.desc}</p>
              </div>
              <div className="bg-slate-950/80 p-3 md:p-4 rounded-lg md:rounded-xl border border-white/5">
                 <span className={`text-[7px] md:text-[8px] font-black text-${p.color}-500 uppercase tracking-widest mb-1 block`}>Metric Logic</span>
                 <p className="text-[9px] md:text-[10px] text-slate-300 font-bold leading-tight">{p.formula}</p>
              </div>
              <div className="space-y-1.5 md:space-y-2 pt-3 md:pt-4 border-t border-white/5">
                 <span className="text-[7px] md:text-[8px] font-black text-slate-500 uppercase tracking-widest block mb-1 md:mb-2 italic">Major Losses / कमियां</span>
                 {p.losses.map((loss, idx) => (
                   <div key={idx} className="flex items-center gap-2 text-[9px] md:text-[10px] text-slate-400 font-bold">
                      <div className={`w-1 h-1 bg-${p.color}-500 rounded-full`}></div>
                      {loss}
                   </div>
                 ))}
              </div>
           </div>
         ))}
      </div>

      {/* Calculation & Benchmark */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
         
         {/* Live Calculation Example */}
         <div className="bg-slate-900/60 border border-white/10 p-6 md:p-10 rounded-3xl md:rounded-[40px] shadow-2xl space-y-6 md:space-y-8">
            <h4 className="text-white text-[9px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center gap-3 md:gap-4">
               <span className="w-8 md:w-12 h-0.5 bg-cyan-500"></span>
               {current.example.title}
            </h4>
            <div className="space-y-4 md:space-y-6">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {current.example.assumptions.map((item, i) => (
                    <div key={i} className="p-2.5 md:p-3 bg-slate-950/40 rounded-lg md:rounded-xl border border-white/5 text-[9px] md:text-[10px] text-slate-400 font-bold">
                       {item}
                    </div>
                  ))}
               </div>
               <div className="space-y-2 md:space-y-3">
                  {current.example.steps.map((step, i) => (
                    <div key={i} className="flex flex-col gap-0.5 md:gap-1 p-3 md:p-4 bg-slate-950/60 rounded-xl md:rounded-2xl border border-white/5">
                       <span className="text-cyan-500 text-[8px] md:text-[9px] font-black uppercase tracking-widest">{step.label}</span>
                       <span className="text-slate-200 text-xs md:text-sm font-bold tracking-tight">{step.calc}</span>
                    </div>
                  ))}
               </div>
               <div className="p-4 md:p-6 bg-cyan-500 rounded-2xl md:rounded-3xl text-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  <span className="text-white/60 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-1 block">Final Computation</span>
                  <span className="text-2xl md:text-4xl font-black text-white italic tracking-tighter">{current.example.result}</span>
               </div>
            </div>
         </div>

         {/* Types of OEE & Benchmark Scoreboard */}
         <div className="space-y-6 md:space-y-8">
            {/* Types of OEE */}
            <div className="bg-slate-900/60 border border-white/10 p-6 md:p-10 rounded-3xl md:rounded-[40px] shadow-2xl space-y-4 md:space-y-6 backdrop-blur-xl">
               <h4 className="text-white text-[9px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center gap-3 md:gap-4">
                  <span className="w-8 md:w-12 h-0.5 bg-amber-500"></span>
                  {current.typesTitle}
               </h4>
               <div className="grid grid-cols-1 gap-2 md:gap-3">
                  {current.types.map((t, i) => (
                    <div key={i} className="flex items-center justify-between p-3 md:p-4 bg-slate-950/80 rounded-xl md:rounded-2xl border border-white/5">
                       <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-tight">{t.type}</span>
                       <span className="text-[8px] md:text-[10px] font-bold text-slate-400 italic">{t.purpose}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* Benchmark Scoreboard */}
            <div className="bg-slate-900/60 border border-white/10 p-6 md:p-10 rounded-3xl md:rounded-[40px] shadow-2xl space-y-4 md:space-y-6 backdrop-blur-xl">
               <h4 className="text-white text-[9px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center gap-3 md:gap-4">
                  <span className="w-8 md:w-12 h-0.5 bg-emerald-500"></span>
                  {current.benchmarksTitle}
               </h4>
               <div className="grid grid-cols-1 gap-2 md:gap-3">
                  {current.benchmarks.map((b, i) => (
                    <div key={i} className="flex items-center justify-between p-3 md:p-4 bg-slate-950/80 rounded-xl md:rounded-2xl border border-white/5 hover:border-white/10 transition-all">
                       <div className="flex flex-col">
                          <span className={`text-[10px] md:text-sm font-black uppercase tracking-tight ${b.color}`}>{b.label}</span>
                          <span className="text-[8px] md:text-[9px] font-bold text-slate-500 uppercase tracking-widest">{b.status}</span>
                       </div>
                       <div className="text-base md:text-xl font-black text-white italic">{b.range}</div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,1)]"></span>
                Machine Telemetry: Online
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
                Benchmarks: Loaded
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest">Industrial Hub v4.5 // OEE Analysis Node</div>
      </div>
    </div>
  );
};

export default OEEDetail;

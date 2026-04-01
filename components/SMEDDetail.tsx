
import React from 'react';
import { Language } from '../types';

interface SMEDDetailProps {
  onBack: () => void;
  lang: Language;
}

const SMEDDetail: React.FC<SMEDDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "SMED / Quick Changeover",
      subtitle: "The Art of the Industrial Pit-Stop",
      backBtn: "Back to Improvement",
      hero: {
        question: "What is SMED?",
        acronym: "Single Minute Exchange of Die",
        desc: "A lean technique to reduce the time it takes to change a machine from one model to another to less than 10 minutes (Single Digits).",
        mantra: "Every second the machine is stopped is a second of lost profit."
      },
      changeover: {
        title: "What is a Changeover?",
        desc: "The total time between the last 'Good' part of Model A and the first 'Good' part of Model B.",
        stages: ["Tool/Die Swap", "Setting Adjustments", "Trial Runs & Approval"]
      },
      pillars: [
        {
          id: 1,
          title: "Internal vs External",
          tag: "Core Logic",
          desc: "Separating tasks based on machine status.",
          internal: "Internal: Only done when machine is STOPPED.",
          external: "External: Done while machine is still RUNNING.",
          goal: "Goal: Move everything to External.",
          icon: "🔄"
        },
        {
          id: 2,
          title: "Simplification",
          tag: "Fast Clamping",
          desc: "Removing the need for 'Turns' and 'Tools'.",
          points: ["One-turn bolts", "Quick connectors", "Fixed reference marks"],
          icon: "🔧"
        },
        {
          id: 3,
          title: "Parallel Work",
          tag: "Team Sync",
          desc: "Using multiple people to work like a Pit-Stop crew.",
          points: ["Synchronized movements", "Pre-filled kits", "Clear roles"],
          icon: "👥"
        },
        {
          id: 4,
          title: "Trial Elimination",
          tag: "First Time Right",
          desc: "Zeroing out the need for adjustments and test pieces.",
          points: ["Preset values", "Poka-Yoke settings", "Precision stops"],
          icon: "🎯"
        }
      ],
      impact: {
        title: "SMED Performance Matrix",
        headers: ["Operational Metric", "Improvement Result"],
        rows: [
          { area: "Changeover Time", effect: "Reduced (-70% typical)", color: "emerald" },
          { area: "Machine Downtime", effect: "Minimized (More Uptime)", color: "cyan" },
          { area: "Production Flexibility", effect: "Increased (Small Batches)", color: "blue" },
          { area: "OEE Status", effect: "Improved (Higher Capacity)", color: "indigo" },
          { area: "WIP Inventory", effect: "Reduced (Less Buffer)", color: "rose" }
        ]
      }
    },
    hi: {
      title: "SMED / क्विक चेंजओवर",
      subtitle: "इंडस्ट्रियल पिट-स्टॉप की कला",
      backBtn: "वापस जाएं",
      hero: {
        question: "SMED क्या होता है?",
        acronym: "Single Minute Exchange of Die",
        desc: "मशीन या लाइन का मॉडल बदलने के समय को कम करके 10 मिनट से भी कम (सिंगल डिजिट) में लाने की तकनीक।",
        mantra: "मशीन जितनी देर बंद रहेगी, उतना ही नुकसान होगा।"
      },
      changeover: {
        title: "चेंजओवर (Changeover) क्या है?",
        desc: "पुराने मॉडल के आखिरी सही पीस और नए मॉडल के पहले सही पीस के बीच का कुल समय।",
        stages: ["टूल / डाई बदलना", "सेटिंग एडजस्ट करना", "ट्रायल और अप्रूवल"]
      },
      pillars: [
        {
          id: 1,
          title: "इंटरनल बनाम एक्सटर्नल",
          tag: "मुख्य सिद्धांत",
          desc: "काम को मशीन की स्थिति के हिसाब से बांटना।",
          internal: "Internal: जो सिर्फ मशीन रुकने पर ही हो सकते हैं।",
          external: "External: जो मशीन चलते हुए भी पहले से किए जा सकते हैं।",
          goal: "लक्ष्य: इंटरनल काम को एक्सटर्नल में बदलना।",
          icon: "🔄"
        },
        {
          id: 2,
          title: "सरलीकरण (Simplification)",
          tag: "फास्ट क्लैम्पिंग",
          desc: "पेचों को घुमाने और औज़ारों की ज़रूरत को खत्म करना।",
          points: ["वन-टर्न बोल्ट्स", "क्विक कनेक्टर्स", "फिक्स्ड मार्किंग"],
          icon: "🔧"
        },
        {
          id: 3,
          title: "पैरेलल वर्क (Parallel)",
          tag: "टीम का तालमेल",
          desc: "एक साथ कई लोगों का पिट-स्टॉप टीम की तरह काम करना।",
          points: ["तालमेल वाले स्टेप्स", "तैयार किट का उपयोग", "तय रोल"],
          icon: "👥"
        },
        {
          id: 4,
          title: "ट्रायल खत्म करना",
          tag: "पहली बार में सही",
          desc: "एडजस्टमेंट और बार-बार सैंपल बनाने की ज़रूरत को खत्म करना।",
          points: ["प्रीसेट वैल्यूज़", "पोका-योक सेटिंग्स", "सटीक स्टॉपर्स"],
          icon: "🎯"
        }
      ],
      impact: {
        title: "SMED का असर (Matrix)",
        headers: ["कार्यक्षेत्र", "सुधार का नतीजा"],
        rows: [
          { area: "चेंजओवर समय", effect: "भारी कमी (-70% तक)", color: "emerald" },
          { area: "मशीन डाउन-टाइम", effect: "न्यूनतम (मशीन ज्यादा चलेगी)", color: "cyan" },
          { area: "लचीलापन (Flexibility)", effect: "बढ़ोतरी (छोटे लॉट भी संभव)", color: "blue" },
          { area: "OEE स्टेटस", effect: "सुधार (ज़्यादा आउटपुट)", color: "indigo" },
          { area: "WIP इन्वेंटरी", effect: "कमी (कम माल जमा होगा)", color: "rose" }
        ]
      }
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-emerald-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_12px_emerald]"></div>
              <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono">SMED Protocol</h3>
        </div>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-emerald-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Pit Stop</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <div className="flex flex-col items-center gap-2">
               <span className="text-emerald-500 font-black text-xs md:text-lg uppercase tracking-[0.3em]">{current.hero.acronym}</span>
               <p className="text-slate-300 text-sm md:text-xl font-bold leading-relaxed">"{current.hero.desc}"</p>
            </div>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-emerald-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-sm md:text-lg font-bold italic leading-relaxed">
            "💡 {current.hero.mantra}"
         </div>
      </div>

      {/* Changeover Logic Visual */}
      <div className="bg-slate-950/60 border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl space-y-8">
         <h4 className="text-white text-center font-black text-xl md:text-2xl uppercase tracking-[0.3em]">{current.changeover.title}</h4>
         <div className="relative pt-12 pb-8">
            <div className="absolute top-1/2 left-0 w-full h-2 bg-slate-800 -translate-y-1/2 rounded-full"></div>
            <div className="relative flex justify-between items-center">
               <div className="flex flex-col items-center gap-3 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-600 border-4 border-emerald-400 flex items-center justify-center text-white font-black text-xs shadow-lg">Model A</div>
                  <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Last Good Part</span>
               </div>
               
               <div className="flex-1 flex flex-col items-center gap-4 relative">
                  <div className="h-1 bg-rose-500 absolute top-1/2 w-full -translate-y-1/2 animate-pulse"></div>
                  <div className="bg-slate-900 px-6 py-2 rounded-full border border-rose-500 text-rose-500 text-[10px] font-black uppercase tracking-widest z-10 shadow-xl">
                     Downtime (Waste)
                  </div>
                  <div className="flex gap-4 z-10">
                     {current.changeover.stages.map((s, i) => (
                        <div key={i} className="bg-slate-950/80 px-3 py-1 rounded border border-white/10 text-[7px] font-black text-slate-400 uppercase tracking-tighter">
                           {s}
                        </div>
                     ))}
                  </div>
               </div>

               <div className="flex flex-col items-center gap-3 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-blue-600 border-4 border-blue-400 flex items-center justify-center text-white font-black text-xs shadow-lg">Model B</div>
                  <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">First Good Part</span>
               </div>
            </div>
         </div>
         <p className="text-center text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] italic">{current.changeover.desc}</p>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {current.pillars.map((p) => (
            <div key={p.id} className="bg-slate-950/60 border border-white/5 p-8 rounded-[40px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden">
               <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-slate-900 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                     {p.icon}
                  </div>
                  <span className="text-emerald-500 font-black text-[10px] uppercase tracking-widest border border-emerald-500/30 px-3 py-1 rounded-full">{p.tag}</span>
               </div>

               <div className="space-y-2">
                  <h5 className="text-white text-xl font-black uppercase tracking-tight group-hover:text-emerald-400 transition-colors">0{p.id}. {p.title}</h5>
                  <p className="text-slate-400 text-xs font-bold leading-relaxed italic">"{p.desc}"</p>
               </div>

               <div className="space-y-4 pt-4 border-t border-white/5 flex-1">
                  {p.internal && (
                     <div className="space-y-2">
                        <div className="flex items-start gap-3 text-[10px] text-rose-400 font-black uppercase tracking-tight">
                           <div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-1"></div>
                           {p.internal}
                        </div>
                        <div className="flex items-start gap-3 text-[10px] text-emerald-400 font-black uppercase tracking-tight">
                           <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1"></div>
                           {p.external}
                        </div>
                        <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20 text-white text-[9px] font-black uppercase tracking-widest text-center mt-2">
                           🎯 {p.goal}
                        </div>
                     </div>
                  )}
                  {p.points && (
                     <div className="grid grid-cols-1 gap-2">
                        {p.points.map((point, idx) => (
                           <div key={idx} className="flex items-center gap-3 text-[10px] text-slate-300 font-black uppercase tracking-tight">
                              <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                              {point}
                           </div>
                        ))}
                     </div>
                  )}
               </div>
            </div>
         ))}
      </div>

      {/* Impact Matrix Table */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl overflow-hidden backdrop-blur-xl">
         <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
            <span className="w-10 h-1 bg-emerald-500 shadow-[0_0_12px_emerald]"></span>
            {current.impact.title}
         </h4>
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="border-b border-white/10">
                     {current.impact.headers.map((h, i) => (
                        <th key={i} className={`py-4 text-[10px] font-black uppercase tracking-widest ${i === 0 ? 'text-slate-500' : 'text-emerald-400'}`}>{h}</th>
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
         <p className="text-emerald-400 font-black text-xs md:text-base uppercase tracking-widest">
            {lang === 'hi' 
              ? 'कम डाउनटाइम = ज्यादा माल' 
              : 'Less Downtime = More Throughput'}
         </p>
         <div className="flex gap-4">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
         </div>
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_12px_emerald] animate-pulse"></span>
                Velocity Engine: High
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Quick Changeover v3.1 // SMED Standard</div>
      </div>
    </div>
  );
};

export default SMEDDetail;

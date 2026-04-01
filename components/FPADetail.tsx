
import React from 'react';
import { Language } from '../types';

interface FPADetailProps {
  onBack: () => void;
  lang: Language;
}

const FPADetail: React.FC<FPADetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "FPA & FAI Verification",
      subtitle: "The 'First' Quality Shield",
      backBtn: "Back to IPQC",
      fpa: {
        title: "1. FPA (First Piece Approval)",
        tag: "Permission to Start",
        desc: "FPA is the process of getting the very first 'Good' unit approved by Quality before starting mass production.",
        when: "Shift Start, Post-Breakdown, Setup/Machine change, or Tooling changeover.",
        checks: ["Visual Quality", "Critical Dimensions", "Fitment / Assembly", "Basic Functionality"],
        result: {
          ok: "Start Mass Production",
          ng: "Stop Line & Recalibrate"
        }
      },
      fai: {
        title: "2. FAI (First Article Inspection)",
        tag: "Validation of Design",
        desc: "A highly detailed inspection where the first item of a new batch or process is verified against every drawing parameter.",
        when: "New Product Development, New Vendor Approval, New Mold/Die/Tool, or Engineering Changes (ECN).",
        elements: ["100% Dimension Check", "Material Grade Verification", "Drawing Ballooning", "Detailed Tech Report"],
      },
      comparison: {
        title: "FPA vs. FAI: The Core Difference",
        headers: ["Point", "FPA", "FAI"],
        rows: [
          { p: "Level", fpa: "Shop-floor / Daily", fai: "Engineering / Detailed" },
          { p: "Timing", fpa: "Every Start-up", fai: "New / Changed Item" },
          { p: "Check Scope", fpa: "Critical & Visual", fai: "100% Parameter Match" },
          { p: "Decision", fpa: "Go / No-Go (Line)", fai: "Process / Vendor Approval" }
        ]
      },
      hooks: {
        fpa: "Line start OK?",
        fai: "Design & Process OK?"
      },
      example: "First cabinet of the shift = FPA | First cabinet from a new vendor = FAI"
    },
    hi: {
      title: "FPA और FAI वेरिफिकेशन",
      subtitle: "क्वालिटी का पहला सुरक्षा कवच",
      backBtn: "IPQC पर वापस जाएं",
      fpa: {
        title: "1. FPA (फर्स्ट पीस अप्रूवल)",
        tag: "काम शुरू करने की अनुमति",
        desc: "मास प्रोडक्शन शुरू करने से पहले क्वालिटी टीम से पहले 'सही' पीस को पास करवाना FPA कहलाता है।",
        when: "शिफ्ट शुरू होने पर, मशीन ब्रेकडाउन के बाद, या सेटअप बदलने पर।",
        checks: ["विजुअल क्वालिटी", "महत्वपूर्ण माप (Dimensions)", "फिटिंग और असेंबली", "बेसिक फंक्शन"],
        result: {
          ok: "मास प्रोडक्शन शुरू करें",
          ng: "लाइन रोकें और सुधारें"
        }
      },
      fai: {
        title: "2. FAI (फर्स्ट आर्टिकल इंस्पेक्शन)",
        tag: "डिज़ाइन की पक्की जांच",
        desc: "यह एक विस्तृत जांच है जिसमें नए पार्ट या वेंडर के पहले पीस को ड्राइंग के हर एक पैरामीटर पर चेक किया जाता है।",
        when: "नया पार्ट बनने पर, नए वेंडर के आने पर, या डिज़ाइन बदलाव (ECN) होने पर।",
        elements: ["100% माप की जांच", "मटेरियल ग्रेड वेरिफिकेशन", "ड्राइंग बैलूनिंग", "विस्तृत टेक्निकल रिपोर्ट"],
      },
      comparison: {
        title: "FPA बनाम FAI: मुख्य अंतर",
        headers: ["बिंदु", "FPA", "FAI"],
        rows: [
          { p: "स्तर (Level)", fpa: "शॉप-फ्लोर / रोजाना", fai: "इंजीनियरिंग / विस्तृत" },
          { p: "कब (Timing)", fpa: "हर स्टार्टअप पर", fai: "नया या बदला हुआ पार्ट" },
          { p: "जांच का दायरा", fpa: "ज़रूरी और विजुअल", fai: "100% पैरामीटर मैच" },
          { p: "फैसला", fpa: "लाइन शुरू करना", fai: "वेंडर / प्रोसेस अप्रूवल" }
        ]
      },
      hooks: {
        fpa: "क्या लाइन शुरू करें?",
        fai: "क्या डिज़ाइन और प्रोसेस सही है?"
      },
      example: "शिफ्ट का पहला कैबिनेट = FPA | नए सप्लायर का पहला कैबिनेट = FAI"
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-blue-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(59,130,246,0.8)]"></div>
              <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg">{current.title}</h3>
        </div>
        <button 
          onClick={onBack}
          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Dual Hooks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="bg-blue-900/40 border border-blue-500/30 p-8 rounded-[40px] shadow-2xl flex flex-col items-center justify-center text-center gap-4 group">
            <span className="text-blue-400 font-black text-[10px] uppercase tracking-[0.5em]">FPA Core Question</span>
            <h4 className="text-white text-2xl md:text-4xl font-black italic">"{current.hooks.fpa}"</h4>
         </div>
         <div className="bg-indigo-900/40 border border-indigo-500/30 p-8 rounded-[40px] shadow-2xl flex flex-col items-center justify-center text-center gap-4 group">
            <span className="text-indigo-400 font-black text-[10px] uppercase tracking-[0.5em]">FAI Core Question</span>
            <h4 className="text-white text-2xl md:text-4xl font-black italic">"{current.hooks.fai}"</h4>
         </div>
      </div>

      {/* Detail Sections Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* FPA Detail Card */}
         <div className="bg-slate-900/60 border border-blue-500/20 rounded-[40px] p-8 md:p-12 shadow-2xl space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-8xl font-black text-blue-500/[0.03] select-none uppercase italic">APPROVAL</div>
            <div className="relative z-10 space-y-6">
               <div className="flex items-center justify-between">
                  <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter">{current.fpa.title}</h4>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-blue-500/30">{current.fpa.tag}</span>
               </div>
               <p className="text-slate-300 text-sm md:text-base font-bold leading-relaxed">{current.fpa.desc}</p>
               
               <div className="bg-blue-500/5 border-l-4 border-blue-500 p-5 rounded-r-2xl space-y-2">
                  <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">When? / कब होगा?</span>
                  <p className="text-white text-xs font-bold italic">{current.fpa.when}</p>
               </div>

               <div className="space-y-4">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Inspection Checklist</span>
                  <div className="grid grid-cols-2 gap-3">
                     {current.fpa.checks.map((check, i) => (
                        <div key={i} className="bg-slate-950/60 p-3 rounded-xl border border-white/5 flex items-center gap-3">
                           <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                           <span className="text-slate-200 text-[10px] font-bold uppercase">{check}</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="pt-6 border-t border-white/5 flex items-center gap-6">
                  <div className="flex-1 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
                     <span className="block text-[8px] font-black text-emerald-500 uppercase mb-1">Result: OK</span>
                     <span className="text-white text-[10px] font-black uppercase">{current.fpa.result.ok}</span>
                  </div>
                  <div className="flex-1 p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-center">
                     <span className="block text-[8px] font-black text-rose-500 uppercase mb-1">Result: NG</span>
                     <span className="text-white text-[10px] font-black uppercase">{current.fpa.result.ng}</span>
                  </div>
               </div>
            </div>
         </div>

         {/* FAI Detail Card */}
         <div className="bg-slate-900/60 border border-indigo-500/20 rounded-[40px] p-8 md:p-12 shadow-2xl space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-8xl font-black text-indigo-500/[0.03] select-none uppercase italic">VALIDATE</div>
            <div className="relative z-10 space-y-6">
               <div className="flex items-center justify-between">
                  <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter">{current.fai.title}</h4>
                  <span className="bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-indigo-500/30">{current.fai.tag}</span>
               </div>
               <p className="text-slate-300 text-sm md:text-base font-bold leading-relaxed">{current.fai.desc}</p>
               
               <div className="bg-indigo-500/5 border-l-4 border-indigo-500 p-5 rounded-r-2xl space-y-2">
                  <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest">When? / कब होगा?</span>
                  <p className="text-white text-xs font-bold italic">{current.fai.when}</p>
               </div>

               <div className="space-y-4">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Quality Components</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                     {current.fai.elements.map((el, i) => (
                        <div key={i} className="bg-slate-950/60 p-4 rounded-2xl border border-white/5 flex items-center gap-4 group hover:border-indigo-500/40 transition-all">
                           <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-black text-[10px]">0{i+1}</div>
                           <span className="text-slate-200 text-[10px] font-bold uppercase">{el}</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="mt-auto p-4 bg-slate-950 border border-white/10 rounded-2xl text-center italic">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight leading-relaxed">
                     "FAI is a critical gateway for mass production commitment."
                  </p>
               </div>
            </div>
         </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl overflow-hidden backdrop-blur-xl">
         <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
            <span className="w-10 h-1 bg-blue-500"></span>
            {current.comparison.title}
         </h4>
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="border-b border-white/10">
                     {current.comparison.headers.map((h, i) => (
                        <th key={i} className={`py-4 text-[10px] font-black uppercase tracking-widest ${i === 0 ? 'text-slate-500' : i === 1 ? 'text-blue-400' : 'text-indigo-400'}`}>{h}</th>
                     ))}
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {current.comparison.rows.map((row, i) => (
                     <tr key={i} className="group hover:bg-white/5 transition-colors">
                        <td className="py-6 text-white font-black text-xs md:text-sm uppercase tracking-tight">{row.p}</td>
                        <td className="py-6 text-blue-300 font-bold text-xs md:text-sm">{row.fpa}</td>
                        <td className="py-6 text-indigo-300 font-bold text-xs md:text-sm">{row.fai}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      {/* Industrial Real-world Example */}
      <div className="bg-slate-950 border border-blue-500/20 rounded-[40px] p-8 md:p-10 shadow-inner flex flex-col items-center text-center gap-6">
         <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em]">Factory Scenario / उदाहरण</span>
         <p className="text-white text-lg md:text-2xl font-black uppercase italic tracking-tighter leading-tight max-w-4xl drop-shadow-xl">
            "{current.example}"
         </p>
         <div className="flex gap-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]"></span>
                Line Startup: Monitoring
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_indigo]"></span>
                NPI Engine: Sync Active
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest">Industrial Hub v6.5 // FPA-FAI Node</div>
      </div>
    </div>
  );
};

export default FPADetail;

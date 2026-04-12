
import React from 'react';
import { Language } from '../types';

interface NCRDetailProps {
  onBack: () => void;
  lang: Language;
}

const NCRDetail: React.FC<NCRDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "NCR & SCAR Management",
      subtitle: "Non-Conformance & Corrective Protocol",
      backBtn: "Back to IQC",
      ncr: {
        title: "1. NCR (Non-Conformance Report)",
        tag: "Problem Record",
        desc: "An NCR is an official document generated when material, process, or product fails to meet the defined drawing, specification, or SOP.",
        when: "Issued when defects are found in IQC, IPQC, or via Customer complaints.",
        elements: ["Part Details & Qty", "Defect Description", "Reference (PO/Lot)", "Immediate Action (Hold)"]
      },
      scar: {
        title: "2. SCAR (Supplier Corrective Action)",
        tag: "Future Solution",
        desc: "A formal demand sent to the vendor to find a permanent solution so that the same defect never repeats.",
        when: "Issued for Repeat NCRs, Critical defects, or Line stoppages.",
        elements: ["Problem Description", "Root Cause Analysis", "Corrective Action", "Preventive Action"]
      },
      redTag: {
        title: "3. Red Tag (Rejection Tagging)",
        tag: "Visual Stop",
        desc: "A visual identification sticker that strictly means: DO NOT USE. It is used to isolate suspected or rejected stock.",
        label: "STOP USE",
        info: ["Part Name/No", "Rejection Reason", "Inspector Name", "Date"]
      },
      rootCause: {
        title: "4. The Root Cause (The 'Why')",
        desc: "The underlying real reason. Removing it solves the problem permanently. Symptom is what you see; Root Cause is why it happened.",
        example: {
          problem: "Scratch on Cabinet",
          symptom: "Visual Scratch",
          immediate: "Handling issue",
          root: "No protective film + Poor packing SOP"
        },
        tools: ["5-Why Analysis", "Fishbone (Ishikawa)", "4M / 6M Matrix"]
      },
      flow: {
        title: "Rejection Lifecycle Flow",
        steps: ["Issue Found", "Raise NCR", "Red Tag & Isolation", "Root Cause Analysis", "Issue SCAR", "CAPA Implementation"]
      },
      summary: [
        { k: "NCR", v: "The official record of 'What' is wrong." },
        { k: "SCAR", v: "The demand for 'How' it will be fixed forever." },
        { k: "Red Tag", v: "Visual signal for 'Strict Prohibit'." },
        { k: "Root Cause", v: "The 'Real Reason' behind the failure." }
      ]
    },
    hi: {
      title: "NCR और SCAR मैनेजमेंट",
      subtitle: "नॉन-कन्फर्मेन्स और सुधारात्मक प्रोटोकॉल",
      backBtn: "IQC पर वापस जाएं",
      ncr: {
        title: "1. NCR (नॉन-कन्फर्मेन्स रिपोर्ट)",
        tag: "समस्या का रिकॉर्ड",
        desc: "NCR तब बनाया जाता है जब कोई मटेरियल या प्रोसेस ड्राइंग और नियमों (SOP) के हिसाब से सही नहीं होता।",
        when: "IQC में डिफेक्ट मिलने पर, या कस्टमर की शिकायत आने पर इसे बनाया जाता है।",
        elements: ["पार्ट का नाम और मात्रा", "गलती का विवरण", "रेफरेंस (PO/Lot)", "तत्काल फैसला (Hold)"]
      },
      scar: {
        title: "2. SCAR (सप्लायर सुधार अनुरोध)",
        tag: "भविष्य का समाधान",
        desc: "यह सप्लायर को भेजा जाने वाला एक औपचारिक पत्र है ताकि वह गलती को जड़ से खत्म करे और भविष्य में वह दोबारा न हो।",
        when: "बार-बार गलती होने पर या बड़े डिफेक्ट मिलने पर वेंडर को भेजा जाता है।",
        elements: ["समस्या का विवरण", "जड़ से जांच (RCA)", "सुधार (Corrective Action)", "रोकथाम (Preventive)"]
      },
      redTag: {
        title: "3. रेड टैग (रिजेक्शन टैगिंग)",
        tag: "विजुअल रोक",
        desc: "यह एक विजुअल पहचान है जिसका सीधा मतलब है: 'इस्तेमाल करना मना है'। इसे खराब माल को अलग रखने के लिए इस्तेमाल किया जाता है।",
        label: "इस्तेमाल न करें",
        info: ["पार्ट का नाम/नंबर", "रिजेक्शन का कारण", "इंस्पेक्टर का नाम", "तारीख"]
      },
      rootCause: {
        title: "4. रूट कॉज (असली जड़)",
        desc: "वह असली वजह जिसे मिटाने से समस्या हमेशा के लिए खत्म हो जाती है। लक्षण (Symptom) सिर्फ दिखता है, जड़ (Root Cause) समस्या पैदा करती है।",
        example: {
          problem: "कैबिनेट पर खरोंच (Scratch)",
          symptom: "खरोंच दिख रही है",
          immediate: "हैंडलिंग की कमी",
          root: "सुरक्षा फिल्म की कमी + गलत पैकिंग नियम"
        },
        tools: ["5-Why एनालिसिस", "फिशबोन (Ishikawa) डायग्राम", "4M / 6M मैट्रिक्स"]
      },
      flow: {
        title: "रिजेक्शन प्रोसेस फ्लो",
        steps: ["डिफेक्ट मिला", "NCR बनाया", "रेड टैग और अलगाव", "जड़ की पहचान (RCA)", "SCAR भेजना", "पक्का समाधान (CAPA)"]
      },
      summary: [
        { k: "NCR", v: "क्या समस्या है, उसका आधिकारिक रिकॉर्ड।" },
        { k: "SCAR", v: "समस्या हमेशा के लिए कैसे ठीक होगी, उसका अनुरोध।" },
        { k: "रेड टैग", v: "सामान के उपयोग पर सख्त मनाही का संकेत।" },
        { k: "रूट कॉज", v: "समस्या के पीछे की 'असली और आखिरी' वजह।" }
      ]
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-rose-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-rose-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(244,63,94,0.8)]"></div>
              <span className="text-rose-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg">{current.title}</h3>
        </div>
        <button 
          onClick={onBack}
          className="bg-rose-600 hover:bg-rose-500 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </button>
      </div>

      {/* Rejection Pipeline Flow */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl space-y-10 overflow-x-auto no-scrollbar">
         <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-center w-full">{current.flow.title}</h4>
         <div className="flex items-center justify-between min-w-[900px] relative px-10">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-rose-500/20 via-rose-500/10 to-emerald-500/20 -translate-y-1/2"></div>
            {current.flow.steps.map((step, i) => (
               <div key={i} className="relative z-10 flex flex-col items-center gap-4 group">
                  <div className={`w-12 h-12 rounded-2xl bg-slate-950 border-2 flex items-center justify-center transition-all ${i === 2 ? 'border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.4)] scale-110' : 'border-white/20'}`}>
                     {i === 0 ? '🔍' : i === 1 ? '📝' : i === 2 ? '🚫' : i === 3 ? '🧠' : i === 4 ? '📧' : '✅'}
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-widest whitespace-nowrap ${i === 2 ? 'text-rose-500' : 'text-slate-500'}`}>
                     {step}
                  </span>
               </div>
            ))}
         </div>
      </div>

      {/* NCR vs SCAR Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* NCR Section */}
         <div className="bg-slate-900/60 border border-rose-500/20 rounded-[40px] p-8 md:p-10 shadow-2xl space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-8xl font-black text-rose-500/[0.03] select-none uppercase italic">Report</div>
            <div className="relative z-10 space-y-6">
               <div className="flex items-center justify-between">
                  <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter">{current.ncr.title}</h4>
                  <span className="bg-rose-500/10 text-rose-400 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-rose-500/30">{current.ncr.tag}</span>
               </div>
               <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic border-l-4 border-rose-500 pl-6 bg-rose-500/5 py-4 rounded-r-2xl">
                  "{current.ncr.desc}"
               </p>
               <div className="space-y-4">
                  <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest block">Core Information / मुख्य जानकारी</span>
                  <div className="grid grid-cols-2 gap-3">
                     {current.ncr.elements.map((el, i) => (
                        <div key={i} className="bg-slate-950/60 p-3 rounded-xl border border-white/5 flex items-center gap-3">
                           <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                           <span className="text-slate-400 text-[10px] font-bold uppercase">{el}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* SCAR Section */}
         <div className="bg-slate-900/60 border border-blue-500/20 rounded-[40px] p-8 md:p-10 shadow-2xl space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-8xl font-black text-blue-400/[0.03] select-none uppercase italic">Vendor</div>
            <div className="relative z-10 space-y-6">
               <div className="flex items-center justify-between">
                  <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter">{current.scar.title}</h4>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-blue-500/30">{current.scar.tag}</span>
               </div>
               <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic border-l-4 border-blue-500 pl-6 bg-blue-500/5 py-4 rounded-r-2xl">
                  "{current.scar.desc}"
               </p>
               <div className="space-y-4">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block">Response Required / वेंडर जवाब</span>
                  <div className="grid grid-cols-2 gap-3">
                     {current.scar.elements.map((el, i) => (
                        <div key={i} className="bg-slate-950/60 p-3 rounded-xl border border-white/5 flex items-center gap-3">
                           <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                           <span className="text-slate-400 text-[10px] font-bold uppercase">{el}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Red Tag & Root Cause Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         {/* Red Tag Visualization */}
         <div className="lg:col-span-5 bg-slate-900/60 border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 text-6xl font-black text-rose-500/[0.03] select-none uppercase">Alert</div>
            <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4">
               <span className="w-12 h-0.5 bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,1)]"></span>
               {current.redTag.title}
            </h4>
            <div className="flex flex-col items-center">
               {/* Red Tag Component */}
               <div className="w-full max-w-xs bg-rose-600 border-4 border-white rounded-3xl p-6 shadow-2xl relative transform -rotate-3 hover:rotate-0 transition-transform">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-slate-900 rounded-full border-2 border-white shadow-inner flex items-center justify-center">
                     <div className="w-1 h-12 bg-slate-400 absolute bottom-full"></div>
                  </div>
                  <div className="mt-6 bg-white text-rose-700 font-black text-center py-2 text-2xl uppercase tracking-widest rounded-lg mb-6 shadow-md">
                     {current.redTag.label}
                  </div>
                  <div className="space-y-4">
                     {current.redTag.info.map((label, i) => (
                        <div key={i} className="border-b-2 border-white/40 pb-1">
                           <span className="text-[8px] font-black text-white/60 uppercase">{label}</span>
                           <div className="h-4"></div>
                        </div>
                     ))}
                  </div>
                  <div className="mt-8 text-center text-white text-[8px] font-black uppercase tracking-[0.4em] opacity-40 italic">Quality Isolation Node 7.1</div>
               </div>
            </div>
            <p className="text-slate-400 text-xs font-bold leading-relaxed text-center italic mt-4">"{current.redTag.desc}"</p>
         </div>

         {/* Root Cause Detail */}
         <div className="lg:col-span-7 bg-indigo-950/20 border border-indigo-500/20 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
               <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter italic">{current.rootCause.title}</h4>
               <span className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">⭐</span>
            </div>
            <p className="text-slate-300 text-sm md:text-base font-bold leading-relaxed">{current.rootCause.desc}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Example Box */}
               <div className="bg-slate-950/60 p-6 rounded-3xl border border-white/5 space-y-4">
                  <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest block">Root Cause Simulation</span>
                  <div className="space-y-3">
                     <div className="flex justify-between items-center text-[10px] font-bold">
                        <span className="text-slate-500 uppercase">Problem:</span>
                        <span className="text-white">{current.rootCause.example.problem}</span>
                     </div>
                     <div className="flex justify-between items-center text-[10px] font-bold opacity-60">
                        <span className="text-slate-500 uppercase">Symptom:</span>
                        <span className="text-rose-400 line-through italic">{current.rootCause.example.symptom}</span>
                     </div>
                     <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                        <span className="block text-[8px] font-black text-emerald-500 uppercase mb-1">True Root Cause</span>
                        <p className="text-white text-[10px] font-black uppercase italic leading-snug">{current.rootCause.example.root}</p>
                     </div>
                  </div>
               </div>

               {/* Analysis Tools */}
               <div className="bg-slate-950/60 p-6 rounded-3xl border border-white/5 space-y-4">
                  <span className="text-[9px] font-black text-cyan-400 uppercase tracking-widest block">RCA Toolkit</span>
                  <div className="flex flex-col gap-2">
                     {current.rootCause.tools.map((tool, i) => (
                        <div key={i} className="flex items-center gap-3 p-2.5 bg-slate-900 border border-white/5 rounded-xl hover:border-cyan-500/30 transition-all">
                           <div className="w-6 h-6 rounded bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-[10px] font-black">{i+1}</div>
                           <span className="text-[10px] font-black text-slate-200 uppercase tracking-tight">{tool}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Summary Matrix */}
      <div className="bg-slate-950 border border-white/5 rounded-[40px] p-8 md:p-12 shadow-inner">
         <h4 className="text-white text-[10px] font-black uppercase tracking-[0.5em] mb-10 text-center">Protocol Memory Hooks</h4>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {current.summary.map((item, i) => (
               <div key={i} className="bg-slate-900/40 p-6 rounded-3xl border border-white/5 hover:border-rose-500/20 transition-all group flex flex-col gap-3">
                  <span className="text-rose-500 font-black text-lg italic uppercase tracking-tighter">{item.k}</span>
                  <p className="text-slate-400 text-[11px] font-bold leading-relaxed">{item.v}</p>
               </div>
            ))}
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,1)]"></span>
                NCR Ledger: Sync Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_indigo]"></span>
                CAPA Module: Monitoring
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest">Industrial Hub v6.6 // Correction Node</div>
      </div>
    </div>
  );
};

export default NCRDetail;

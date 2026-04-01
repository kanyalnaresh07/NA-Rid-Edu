
import React, { useState } from 'react';
import { Language } from '../types';

interface ControlPlanDetailProps {
  onBack: () => void;
  lang: Language;
}

const ControlPlanDetail: React.FC<ControlPlanDetailProps> = ({ onBack, lang }) => {
  const [selectedColumn, setSelectedColumn] = useState<number | null>(null);

  const content = {
    en: {
      title: "Control Plan Masterclass",
      subtitle: "The Production Rulebook",
      backBtn: "Back to IPQC",
      hero: {
        title: "Daily Quality Rulebook",
        mantra: "What to control, how to check, when to check, and what to do if things go wrong.",
        definition: "A structured document that defines the specific steps, characteristics, methods, and reaction plans to ensure a process remains stable and output remains perfect."
      },
      objectives: [
        { t: "Prevent Defects", d: "Stop errors before they even happen.", i: "🛡️" },
        { t: "Process Stability", d: "Ensures everyone follows the same standard.", i: "⚖️" },
        { t: "Clear Guidance", d: "Roadmap for Operators and IPQC Patrol.", i: "🗺️" },
        { t: "Audit Compliance", d: "Fulfills IATF 16949 / ISO requirements.", i: "📋" }
      ],
      connectivity: {
        title: "The Quality Ecosystem",
        desc: "The Control Plan is the central 'Hub' connected to all other documents.",
        links: [
          { from: "Process Flow", to: "Sequence of steps" },
          { from: "PFMEA", to: "High Risk (RPN) points" },
          { from: "SOP/WI", to: "Specific work methods" },
          { from: "SPC Plan", to: "Monitoring & Stats" }
        ],
        note: "Crucial Rule: Only points with HIGH RPN in PFMEA must be in the Control Plan!"
      },
      columns: [
        { h: "Operation", d: "Process Step No. & Machine Name." },
        { h: "Characteristic", d: "CTQ point (Length, Surface, etc.)." },
        { h: "Specification", d: "Tolerance (e.g., 10.0 ± 0.05 mm)." },
        { h: "Control Method", d: "Visual, Vernier, Micrometer, or SPC." },
        { h: "Sample Size", d: "Frequency (e.g., 2 Pcs / 1 Hour)." },
        { h: "Reaction Plan", d: "What to do if NG? (Stop line, Quarantining)." },
        { h: "Responsibility", d: "Who checks? (Op, IPQC, Sup)." },
        { h: "Record", d: "Where to write? (Inspection Sheet ID)." }
      ],
      example: {
        title: "Real Case: Cabinet Assembly",
        headers: ["Step", "CTQ", "Method", "Reaction"],
        rows: [
          { s: "Assembly", c: "Scratch", m: "Visual (100%)", r: "Stop Line & Segregate" },
          { s: "Fitting", c: "Screw Torque", m: "Digital Wrench", r: "Retighten & Verify" }
        ]
      },
      types: [
        { n: "Prototype", desc: "For R&D / Development stage." },
        { n: "Pre-Launch", desc: "For Trial / Pilot production runs." },
        { n: "Production", desc: "For daily mass manufacturing." }
      ],
      rules: [
        "Must be available on the Shop Floor.",
        "Mandatory update during ECN (Engineering Change).",
        "SPC points must be highlighted.",
        "Reaction plan must be practical & fast."
      ]
    },
    hi: {
      title: "कंट्रोल प्लान मास्टरक्लास",
      subtitle: "प्रोडक्शन की नियम पुस्तिका",
      backBtn: "IPQC पर वापस जाएं",
      hero: {
        title: "क्वालिटी की नियम पुस्तिका",
        mantra: "क्या कंट्रोल करना है, कैसे चेक करना है, कब चेक करना है, और गड़बड़ होने पर क्या करना है।",
        definition: "यह एक आधिकारिक दस्तावेज है जिसमें हर प्रोसेस स्टेप की बारीकियाँ, जाँच का तरीका और गलती मिलने पर उठाए जाने वाले कदमों की जानकारी होती है।"
      },
      objectives: [
        { t: "डिफेक्ट से बचाव", d: "गलती होने से पहले उसे रोकना।", i: "🛡️" },
        { t: "स्थिरता (Stability)", d: "सुनिश्चित करता है कि हर कोई एक ही नियम माने।", i: "⚖️" },
        { t: "साफ़ निर्देश", d: "ऑपरेटर और पेट्रोलिंग टीम के लिए नक्शा।", i: "🗺️" },
        { t: "ऑडिट का पालन", d: "ISO / IATF की शर्तों को पूरा करना।", i: "📋" }
      ],
      connectivity: {
        title: "क्वालिटी का जुड़ाव",
        desc: "कंट्रोल प्लान फैक्ट्री के बाकी सभी दस्तावेजों से जुड़ा होता है।",
        links: [
          { from: "Process Flow", to: "काम करने का क्रम" },
          { from: "PFMEA", to: "हाई रिस्क (RPN) वाले पॉइंट" },
          { from: "SOP/WI", to: "काम करने का तरीका" },
          { from: "SPC Plan", to: "निगरानी और डेटा" }
        ],
        note: "खास नियम: PFMEA में जिसका रिस्क (RPN) ज़्यादा है, वही कंट्रोल प्लान में आता है।"
      },
      columns: [
        { h: "Operation", d: "प्रोसेस का नाम और मशीन नंबर।" },
        { h: "Characteristic", d: "जाँचने वाला पॉइंट (CTQ)।" },
        { h: "Specification", d: "टोलरेंस (जैसे: 10.0 ± 0.05 mm)।" },
        { h: "Control Method", d: "विजुअल, वर्नियर या SPC।" },
        { h: "Sample Size", d: "जाँच का समय (जैसे: 2 पीस / 1 घंटा)।" },
        { h: "Reaction Plan", d: "खराब माल मिलने पर क्या करें?" },
        { h: "Responsibility", d: "कौन चेक करेगा? (Op, IPQC)।" },
        { h: "Record", d: "कहाँ लिखना है? (रिपोर्ट नंबर)।" }
      ],
      example: {
        title: "असली उदाहरण: कैबिनेट असेंबली",
        headers: ["स्टेप", "CTQ", "तरीका", "एक्शन"],
        rows: [
          { s: "असेंबली", c: "खरोंच (Scratch)", m: "विजुअल (100%)", r: "लाइन रोकें और माल अलग करें" },
          { s: "फिटिंग", c: "स्क्रू टॉर्क", m: "डिजिटल रिंच", r: "दोबारा टाइट करें और चेक करें" }
        ]
      },
      types: [
        { n: "Prototype", desc: "नया मॉडल / डिज़ाइन स्टेज के लिए।" },
        { n: "Pre-Launch", desc: "ट्रायल और पायलट रन के लिए।" },
        { n: "Production", desc: "रोजाना मास प्रोडक्शन के लिए।" }
      ],
      rules: [
        "शॉप फ्लोर पर हमेशा उपलब्ध होना चाहिए।",
        "ECN या प्रोसेस बदलाव होने पर अपडेट ज़रूरी है।",
        "SPC पॉइंट्स साफ़ दिखने चाहिए।",
        "रिएक्शन प्लान आसान और काम करने लायक हो।"
      ]
    }
  };

  const current = content[lang] || content['en'];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-blue-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(59,130,246,0.8)]"></div>
              <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono">Control Plan</h3>
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

      {/* Hero Section */}
      <div className="bg-slate-900 border border-blue-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/[0.02] select-none uppercase italic">Rulebook</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.title}</h4>
            <p className="text-blue-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">
               "{current.hero.mantra}"
            </p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-blue-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors">
            <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">
               "{current.hero.definition}"
            </p>
         </div>
      </div>

      {/* Connectivity Flow */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 left-0 p-8 text-8xl font-black text-white/[0.01] select-none uppercase italic pointer-events-none">Ecosystem</div>
         <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
               <h4 className="text-white text-2xl font-black uppercase tracking-tighter italic">{current.connectivity.title}</h4>
               <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed italic border-l-4 border-blue-500 pl-6 bg-blue-500/5 py-4 rounded-r-2xl">
                  "{current.connectivity.desc}"
               </p>
               <div className="bg-rose-500/10 border border-rose-500/30 p-4 rounded-2xl text-center">
                  <p className="text-rose-400 text-[10px] font-black uppercase italic tracking-tighter">
                     ⚠️ {current.connectivity.note}
                  </p>
               </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
               {current.connectivity.links.map((link, i) => (
                  <div key={i} className="bg-slate-950/60 border border-white/5 p-5 rounded-3xl group hover:border-blue-500/30 transition-all shadow-xl">
                     <span className="text-blue-500 font-black text-[9px] uppercase tracking-widest block mb-1">{link.from}</span>
                     <div className="h-px w-8 bg-blue-500/20 mb-2"></div>
                     <span className="text-slate-200 text-xs font-bold uppercase italic">{link.to}</span>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* Objectives Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {current.objectives.map((obj, i) => (
           <div key={i} className="bg-slate-950/40 border border-white/5 p-8 rounded-[32px] hover:bg-slate-900 transition-all group flex flex-col items-center text-center gap-4 shadow-xl">
              <div className="text-5xl group-hover:scale-110 transition-transform">{obj.i}</div>
              <h5 className="text-white font-black text-lg uppercase mb-1 tracking-tight leading-none group-hover:text-blue-400 transition-colors">{obj.t}</h5>
              <p className="text-slate-400 text-xs font-bold leading-relaxed">{obj.d}</p>
           </div>
         ))}
      </div>

      {/* Interactive Columns breakdown */}
      <div className="space-y-6">
         <div className="flex items-center gap-4">
            <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.5em] whitespace-nowrap">Interactive Document Columns</h4>
            <div className="h-px w-full bg-white/10"></div>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {current.columns.map((col, i) => (
               <div 
                  key={i} 
                  onMouseEnter={() => setSelectedColumn(i)}
                  onMouseLeave={() => setSelectedColumn(null)}
                  className={`bg-slate-900/60 border rounded-[24px] p-6 cursor-help transition-all shadow-xl flex flex-col gap-2 relative overflow-hidden ${selectedColumn === i ? 'border-blue-500 ring-2 ring-blue-500/20 scale-105' : 'border-white/5 opacity-80 hover:opacity-100'}`}
               >
                  <span className="text-blue-400 font-black text-[9px] uppercase">Column {i+1}</span>
                  <h6 className="text-white font-black text-xs uppercase tracking-tight">{col.h}</h6>
                  {selectedColumn === i && (
                     <p className="text-slate-400 text-[9px] font-bold uppercase mt-2 animate-in slide-in-from-top-1 duration-200">{col.d}</p>
                  )}
                  <div className="absolute -bottom-2 -right-2 text-4xl font-black text-white/[0.02] select-none italic">{i+1}</div>
               </div>
            ))}
         </div>
      </div>

      {/* Assembly Example Case */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl space-y-8">
         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter italic flex items-center gap-4">
               <span className="w-12 h-1.5 bg-blue-500"></span>
               {current.example.title}
            </h4>
            <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">Practical Blueprint</span>
         </div>
         
         <div className="overflow-x-auto rounded-[32px] border border-white/5 bg-slate-950/40">
            <table className="w-full text-left">
               <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                     {current.example.headers.map((h, i) => (
                        <th key={i} className="py-6 px-8 text-blue-400 text-[10px] font-black uppercase tracking-widest">{h}</th>
                     ))}
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {current.example.rows.map((row, i) => (
                     <tr key={i} className="group hover:bg-white/5 transition-colors">
                        <td className="py-8 px-8 text-white font-black text-sm uppercase">{row.s}</td>
                        <td className="py-8 px-8 text-rose-400 font-bold text-xs uppercase italic">{row.c}</td>
                        <td className="py-8 px-8 text-slate-300 font-medium text-xs uppercase">{row.m}</td>
                        <td className="py-8 px-8">
                           <span className="bg-rose-500/20 text-rose-400 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-rose-500/30 group-hover:bg-rose-500 group-hover:text-white transition-all shadow-md">
                              {row.r}
                           </span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      {/* Control Plan Types */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {current.types.map((type, i) => (
            <div key={i} className="bg-slate-950/60 border border-white/10 p-8 rounded-[40px] flex flex-col gap-4 group hover:bg-slate-900 transition-all shadow-2xl">
               <h6 className="text-blue-500 font-black text-[10px] uppercase tracking-[0.4em]">PHASE 0{i+1}</h6>
               <h5 className="text-white text-xl font-black uppercase tracking-tight">{type.n}</h5>
               <p className="text-slate-400 text-xs font-bold leading-relaxed italic">"{type.desc}"</p>
               <div className="mt-4 h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
         ))}
      </div>

      {/* Important Rules Grid */}
      <div className="bg-slate-950/60 border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl flex flex-col items-center">
         <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-10 text-center">Important Protocol Rules</h4>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {current.rules.map((rule, i) => (
               <div key={i} className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 font-black text-xs flex-shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
                     ★
                  </div>
                  <p className="text-slate-300 text-[10px] md:text-xs font-bold leading-relaxed uppercase">{rule}</p>
               </div>
            ))}
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)] animate-pulse"></span>
                Control Node: Validated
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
                Standard: IATF Tier 1
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest">Industrial Hub v7.2 // Control Plan Core</div>
      </div>
    </div>
  );
};

export default ControlPlanDetail;

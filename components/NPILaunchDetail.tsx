
import React from 'react';
import { Language } from '../types';

interface NPILaunchDetailProps {
  onBack: () => void;
  lang: Language;
}

const NPILaunchDetail: React.FC<NPILaunchDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "NPI / NPD Launch",
      subtitle: "Full Forms: New Product Introduction & New Product Development",
      backBtn: "Back to Engineering",
      hero: {
        question: "What is NPI / NPD Launch?",
        desc: "NPI (New Product Introduction) and NPD (New Product Development) is a structured process to systematically launch a new product from the design phase through mass production and final customer approval.",
        mantra: "A safe launch is a successful launch."
      },
      pillars: [
        {
          id: 1,
          title: "Prototype Build",
          tag: "Design Verification",
          desc: "Creating the first physical model based on drawing and BOM (Bill of Materials).",
          details: [
            "Fitment & Function check",
            "Visual aesthetics review",
            "Design flaw identification",
            "Initial material verification"
          ],
          purpose: "Verify design before expensive mass production starts.",
          icon: "🏗️"
        },
        {
          id: 2,
          title: "Trial Run Audit",
          tag: "Process Readiness",
          desc: "A limited production run on the actual line to test process capability.",
          details: [
            "Actual production line build",
            "Cycle Time & Manpower check",
            "Risk & Defect identification",
            "Jig & Fixture validation"
          ],
          purpose: "Ensure the line is fully ready for high-volume production.",
          icon: "🏭"
        },
        {
          id: 3,
          title: "Sample Submission",
          tag: "Formal Approval",
          desc: "Providing customer with FAI/PPAP samples for official sign-off.",
          details: [
            "Gold-standard sample selection",
            "Detailed Test & Inspection reports",
            "Customer FAI/PPAP submission",
            "Legal & Quality compliance"
          ],
          purpose: "Obtain official go-ahead and trust from the customer.",
          icon: "🎁"
        },
        {
          id: 4,
          title: "Project Timeline",
          tag: "Time-Bound Roadmap",
          desc: "The Master Schedule that tracks milestones from start to finish.",
          details: [
            "Milestone definition (T0, T1, T2)",
            "Responsibility Matrix (RACI)",
            "Delay & Critical path tracking",
            "Launch risk management"
          ],
          purpose: "Ensure on-time delivery of the new product.",
          icon: "📅"
        }
      ],
      impact: {
        title: "NPI Launch Impact Matrix",
        headers: ["Strategic Area", "Effect Result"],
        rows: [
          { area: "Time to Market", result: "Reduced (Speed)", color: "cyan" },
          { area: "Quality Risk", result: "Controlled (Safety)", color: "emerald" },
          { area: "Rework Cost", result: "Reduced (Savings)", color: "amber" },
          { area: "Customer Trust", result: "Increased (Confidence)", color: "indigo" }
        ]
      },
      flow: {
        title: "Standard Launch Pipeline",
        steps: ["Kickoff", "Design", "Prototype", "Tooling", "Trial Run", "Approval", "Mass Production"]
      }
    },
    hi: {
      title: "NPI / NPD लॉन्च",
      subtitle: "Full Forms: New Product Introduction और New Product Development",
      backBtn: "वापस जाएं",
      hero: {
        question: "NPI / NPD Launch क्या होता है?",
        desc: "NPI (New Product Introduction) और NPD (New Product Development) नए प्रोडक्ट को डिज़ाइन से लेकर मास प्रोडक्शन और कस्टमर अप्रूवल तक सुरक्षित और व्यवस्थित तरीके से लॉन्च करने की एक स्ट्रक्चर्ड प्रक्रिया है।",
        mantra: "सुरक्षित शुरुआत ही सफल भविष्य की नींव है।"
      },
      pillars: [
        {
          id: 1,
          title: "प्रोटोटाइप बनाना (Prototype)",
          tag: "डिज़ाइन की जांच",
          desc: "ड्राइंग और BOM के आधार पर प्रोडक्ट का पहला असली मॉडल तैयार करना।",
          details: [
            "फिटिंग और फंक्शन की जांच",
            "दिखावट और फिनिशिंग की समीक्षा",
            "डिज़ाइन की कमियों को पहचानना",
            "शुरुआती मटेरियल वेरिफिकेशन"
          ],
          purpose: "महंगे मास प्रोडक्शन से पहले डिज़ाइन को पक्का करना।",
          icon: "🏗️"
        },
        {
          id: 2,
          title: "ट्रायल रन ऑडिट (Trial Run)",
          tag: "प्रोसेस की तैयारी",
          desc: "असली प्रोडक्शन लाइन पर थोड़ी मात्रा में माल बनाकर प्रोसेस की क्षमता जांचना।",
          details: [
            "असली लाइन पर ट्रायल बिल्ड",
            "Cycle Time और मैनपावर की जांच",
            "रिस्क और डिफेक्ट्स की पहचान",
            "जिग्स और टूल्स का वेरिफिकेशन"
          ],
          purpose: "सुनिश्चित करना कि लाइन बड़े प्रोडक्शन के लिए तैयार है।",
          icon: "🏭"
        },
        {
          id: 3,
          title: "सैंपल सबमिशन (Sample)",
          tag: "औपचारिक अप्रूवल",
          desc: "कस्टमर को FAI/PPAP सैंपल्स और रिपोर्ट भेजकर उनकी मंजूरी लेना।",
          details: [
            "बेस्ट क्वालिटी सैंपल्स का चुनाव",
            "इंस्पेक्शन और टेस्ट रिपोर्ट्स",
            "FAI / PPAP दस्तावेज तैयार करना",
            "कस्टमर से फाइनल साइन-ऑफ"
          ],
          purpose: "कस्टमर से काम शुरू करने की आधिकारिक अनुमति लेना।",
          icon: "🎁"
        },
        {
          id: 4,
          title: "प्रोजेक्ट टाइमलाइन",
          tag: "समयबद्ध रोडमैप",
          desc: "मुख्य शेड्यूल जो प्रोजेक्ट के हर कदम पर नज़र रखता है।",
          details: [
            "मुख्य पड़ाव (Milestones) तय करना",
            "टीम की ज़िम्मेदारी तय करना",
            "देरी और रिस्क को ट्रैक करना",
            "लॉन्च की गति बनाए रखना"
          ],
          purpose: "समय पर प्रोडक्ट लॉन्च सुनिश्चित करना।",
          icon: "📅"
        }
      ],
      impact: {
        title: "लॉन्च का असर (Impact Matrix)",
        headers: ["कार्यक्षेत्र", "सुधार का नतीजा"],
        rows: [
          { area: "मार्केट में रफ़्तार", result: "तेज़ी (कम समय)", color: "cyan" },
          { area: "क्वालिटी रिस्क", result: "नियंत्रित (सुरक्षा)", color: "emerald" },
          { area: "रीवर्क की लागत", result: "कमी (बचत)", color: "amber" },
          { area: "ग्राहक का भरोसा", result: "बढ़ोतरी (विश्वास)", color: "indigo" }
        ]
      },
      flow: {
        title: "स्टैंडर्ड लॉन्च पाइपलाइन",
        steps: ["शुरुआत", "डिज़ाइन", "प्रोटोटाइप", "टूलिंग", "ट्रायल रन", "अप्रूवल", "मास प्रोडक्शन"]
      }
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
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono">Launch Node</h3>
        </div>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Section */}
      <div className="bg-slate-900 border border-indigo-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Mission Control</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-indigo-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-indigo-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">
            "🚀 {current.hero.mantra}"
         </div>
      </div>

      {/* Flow Pipeline Visual */}
      <div className="bg-slate-950/60 border border-white/5 rounded-[40px] p-8 md:p-10 shadow-inner overflow-x-auto no-scrollbar">
         <h4 className="text-white text-[10px] font-black uppercase tracking-[0.5em] mb-10 text-center">{current.flow.title}</h4>
         <div className="flex items-center justify-between min-w-[900px] relative px-10">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/20 via-cyan-500/20 to-emerald-500/20 -translate-y-1/2"></div>
            {current.flow.steps.map((step, i) => (
               <div key={i} className="relative z-10 flex flex-col items-center gap-4 group">
                  <div className={`w-12 h-12 rounded-full border-2 border-indigo-500/50 bg-slate-900 flex items-center justify-center text-white font-black text-xs shadow-lg group-hover:scale-110 transition-transform group-hover:bg-indigo-600`}>
                     0{i+1}
                  </div>
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest group-hover:text-indigo-400 transition-colors">{step}</span>
               </div>
            ))}
         </div>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {current.pillars.map((p) => (
            <div key={p.id} className="bg-slate-950/60 border border-white/5 p-8 rounded-[40px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden">
               <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-slate-900 border border-indigo-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                     {p.icon}
                  </div>
                  <span className="text-indigo-500 font-black text-[10px] uppercase tracking-widest border border-indigo-500/30 px-3 py-1 rounded-full">{p.tag}</span>
               </div>

               <div className="space-y-2">
                  <h5 className="text-white text-xl font-black uppercase tracking-tight group-hover:text-indigo-400 transition-colors">0{p.id}. {p.title}</h5>
                  <p className="text-slate-400 text-xs font-bold leading-relaxed italic">"{p.desc}"</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div className="space-y-2">
                     <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Process Details:</span>
                     {p.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[9px] text-slate-300 font-black uppercase tracking-tight leading-tight">
                           <div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
                           {detail}
                        </div>
                     ))}
                  </div>
                  <div className="bg-indigo-500/5 p-4 rounded-2xl border border-indigo-500/20 flex flex-col justify-center">
                     <span className="text-indigo-400 text-[8px] font-black uppercase tracking-widest block mb-1">Key Purpose:</span>
                     <p className="text-white text-[10px] font-bold italic leading-tight">{p.purpose}</p>
                  </div>
               </div>
            </div>
         ))}
      </div>

      {/* Impact Matrix Table */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl overflow-hidden backdrop-blur-xl">
         <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
            <span className="w-10 h-1 bg-indigo-500 shadow-[0_0_12px_indigo]"></span>
            {current.impact.title}
         </h4>
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="border-b border-white/10">
                     {current.impact.headers.map((h, i) => (
                        <th key={i} className={`py-4 text-[10px] font-black uppercase tracking-widest ${i === 0 ? 'text-slate-500' : 'text-indigo-400'}`}>{h}</th>
                     ))}
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {current.impact.rows.map((row, i) => (
                     <tr key={i} className="group hover:bg-white/5 transition-colors">
                        <td className="py-6 text-white font-black text-xs md:text-sm uppercase tracking-tight">{row.area}</td>
                        <td className="py-6">
                           <span className={`bg-${row.color}-500/10 text-${row.color}-400 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-${row.color}-500/30`}>
                              {row.result}
                           </span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-[0_0_12px_indigo] animate-pulse"></span>
                Launch Sequence: Ready
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Standard: IATF APQP v2.0 // Launch Node</div>
      </div>
    </div>
  );
};

export default NPILaunchDetail;

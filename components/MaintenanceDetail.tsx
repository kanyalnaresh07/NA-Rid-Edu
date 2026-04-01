import React, { useState } from 'react';
import { Language } from '../types';

interface MaintenanceDetailProps {
  onBack: () => void;
  lang: Language;
}

const MaintenanceDetail: React.FC<MaintenanceDetailProps> = ({ onBack, lang }) => {
  const [activeTab, setActiveTab] = useState<'disciplines' | 'types' | 'breakdown'>('disciplines');

  const content = {
    en: {
      title: "Maintenance Hub",
      subtitle: "Machine Reliability & Asset Management",
      backBtn: "Back to Main",
      tabs: ["Disciplines", "Maintenance Types", "Breakdown Analytics"],
      hero: {
        question: "What is Maintenance?",
        desc: "Maintenance is the systematic process of keeping machines, electrical systems, and utilities in a safe, reliable, and optimal running condition.",
        mantra: "The machine must never stop."
      },
      objectives: {
        title: "Main Objectives",
        list: ["Avoid unplanned breakdowns", "Reduce production losses", "Ensure operator safety", "Extend machine life", "Improve Overall OEE"]
      },
      disciplines: [
        {
          id: "mech",
          title: "Mechanical Maintenance",
          tag: "Machine Health",
          icon: "🔧",
          desc: "Focus on the physical components and moving parts of production equipment.",
          activities: ["Lubrication & Greasing", "Belt & Chain tensioning", "Bearing replacement", "Alignment & Leveling"],
          example: "Conveyor jam → Bearing failure identified → Replace bearing → Restart line."
        },
        {
          id: "elec",
          title: "Electrical Maintenance",
          tag: "Power & Control",
          icon: "⚡",
          desc: "Managing power distribution, control panels, sensors, and automation logic.",
          activities: ["PLC / HMI Troubleshooting", "Panel cleaning & tightening", "Sensor calibration", "Wiring & Earthing checks"],
          example: "Sensor fail → Mismatch count → Sensor replacement & calibration."
        },
        {
          id: "utility",
          title: "Utility Maintenance",
          tag: "Factory Support",
          icon: "🏢",
          desc: "Supporting services that keep the whole factory running.",
          activities: ["Air Compressors (Pneumatics)", "DG Sets (Power Backup)", "HVAC / Cooling Towers", "Fire Fighting Systems"],
          example: "Low air pressure → Pneumatic tools slow down → Compressor service."
        }
      ],
      types: [
        {
          name: "Reactive (Breakdown)",
          tag: "Run-to-Fail",
          desc: "Repairing machine only after it stops working.",
          impact: "High production loss, high repair cost.",
          color: "rose"
        },
        {
          name: "Preventive (PM)",
          tag: "Scheduled Care",
          desc: "Periodic checks based on time (Daily/Weekly/Monthly) to prevent failure.",
          impact: "Stable production, planned downtime.",
          color: "emerald"
        },
        {
          name: "Predictive (PdM)",
          tag: "Condition Based",
          desc: "Using sensors (Vibration, Thermal) to catch failures before they happen.",
          impact: "Zero surprise breakdowns, maximum part life.",
          color: "cyan"
        },
        {
          name: "TPM",
          tag: "Total Productive",
          desc: "Everyone (including operators) participates in machine care (Autonomous Maintenance).",
          impact: "World-class OEE, shared responsibility.",
          color: "indigo"
        }
      ],
      breakdown: {
        title: "Breakdown Analytics",
        desc: "A breakdown is a complete stoppage of a machine that prevents production. We use statistical KPIs to track performance.",
        metrics: [
          {
            name: "MTTR",
            full: "Mean Time To Repair",
            formula: "Total Repair Time / No. of Breakdowns",
            desc: "Measures how FAST the team can fix a problem.",
            goal: "Goal: Low MTTR"
          },
          {
            name: "MTBF",
            full: "Mean Time Between Failures",
            formula: "Total Operating Time / No. of Breakdowns",
            desc: "Measures how RELIABLE the machine is (Repairable assets).",
            goal: "Goal: High MTBF"
          },
          {
            name: "MTTF",
            full: "Mean Time To Failure",
            formula: "Total Operating Time / Total Units",
            desc: "Used for non-repairable assets (like bulbs). Measures average life until failure.",
            goal: "Goal: High MTTF"
          }
        ],
        comparison: {
          title: "The Breakdown Timeline",
          steps: ["Failure Occurs", "Detection", "Maintenance Arrival", "Diagnosis", "Repair", "Testing", "Restart"]
        }
      }
    },
    hi: {
      title: "मेंटेनेंस हब",
      subtitle: "मशीन विश्वसनीयता और एसेट मैनेजमेंट",
      backBtn: "वापस जाएं",
      tabs: ["मुख्य विभाग", "मेंटेनेंस के प्रकार", "ब्रेकडाउन एनालिसिस"],
      hero: {
        question: "Maintenance क्या होता है?",
        desc: "मशीनों, इलेक्ट्रिकल सिस्टम और यूटिलिटीज को हमेशा सुरक्षित, भरोसेमंद और चालू स्थिति में रखने की व्यवस्थित प्रक्रिया।",
        mantra: "मशीन रुकनी नहीं चाहिए।"
      },
      objectives: {
        title: "मुख्य उद्देश्य",
        list: ["ब्रेकडाउन को रोकना", "प्रोडक्शन लॉस कम करना", "ऑपरेटर की सुरक्षा", "मशीन की उम्र बढ़ाना", "OEE में सुधार"]
      },
      disciplines: [
        {
          id: "mech",
          title: "मैकेनिकल मेंटेनेंस",
          tag: "मशीन की सेहत",
          icon: "🔧",
          desc: "मशीन के फिजिकल पार्ट्स और चलने वाले पुर्जों पर ध्यान देना।",
          activities: ["ऑयलिंग और ग्रीसिंग", "बेल्ट और चैन टाइट करना", "बेयरिंग बदलना", "अलाइनमेंट चेक करना"],
          example: "कन्वेयर जाम → बेयरिंग खराब → बेयरिंग बदलना → लाइन चालू।"
        },
        {
          id: "elec",
          title: "इलेक्ट्रिकल मेंटेनेंस",
          tag: "पावर और कंट्रोल",
          icon: "⚡",
          desc: "पावर सप्लाई, कंट्रोल पैनल, सेंसर और ऑटोमेशन को मैनेज करना।",
          activities: ["PLC / HMI समस्या हल करना", "पैनल की सफाई", "सेंसर कैलिब्रेशन", "वायरिंग और अर्थिंग चेक"],
          example: "सेंसर फेल → गलत गिनती → सेंसर बदलना और सेट करना।"
        },
        {
          id: "utility",
          title: "यूटिलिटी मेंटेनेंस",
          tag: "फैक्ट्री सपोर्ट",
          icon: "🏢",
          desc: "पूरी फैक्ट्री को चलाने वाली बुनियादी सुविधाओं की देखरेख।",
          activities: ["एयर कंप्रेसर (हवा)", "DG सेट (पावर बैकअप)", "AC / कूलिंग टावर", "फायर फाइटिंग सिस्टम"],
          example: "हवा का दबाव कम → टूल धीमे चलना → कंप्रेसर की सर्विस।"
        }
      ],
      types: [
        {
          name: "रिएक्टिव (Breakdown)",
          tag: "खराब होने पर",
          desc: "मशीन के रुकने के बाद ही उसे ठीक करना।",
          impact: "ज्यादा नुकसान, महंगी रिपेयर।",
          color: "rose"
        },
        {
          name: "प्रिवेंटिव (PM)",
          tag: "तय समय पर",
          desc: "तय समय (रोज/हफ्ते/महीने) पर मशीन की जांच ताकि वह खराब न हो।",
          impact: "स्थिर प्रोडक्शन, प्लान्ड रुकावट।",
          color: "emerald"
        },
        {
          name: "प्रेडिक्टिव (PdM)",
          tag: "हालत के आधार पर",
          desc: "सेंसर के ज़रिए पहले ही भांप लेना कि मशीन कब खराब हो सकती है।",
          impact: "अचानक ब्रेकडाउन से बचाव, पुर्जों की पूरी लाइफ।",
          color: "cyan"
        },
        {
          name: "TPM",
          tag: "सबका सहयोग",
          desc: "ऑपरेटर सहित हर कोई मशीन की देखरेख में शामिल होता है।",
          impact: "वर्ल्ड-क्लास OEE, सबकी ज़िम्मेदारी।",
          color: "indigo"
        }
      ],
      breakdown: {
        title: "ब्रेकडाउन एनालिसिस",
        desc: "मशीन का अचानक रुकना जिससे प्रोडक्शन बंद हो जाए। हम परफॉरमेंस ट्रैक करने के लिए मुख्य KPIs का उपयोग करते हैं।",
        metrics: [
          {
            name: "MTTR",
            full: "Mean Time To Repair",
            formula: "कुल रिपेयर समय / ब्रेकडाउन की संख्या",
            desc: "यह बताता है कि टीम कितनी जल्दी खराबी ठीक करती है।",
            goal: "लक्ष्य: कम MTTR"
          },
          {
            name: "MTBF",
            full: "Mean Time Between Failures",
            formula: "कुल चलने का समय / ब्रेकडाउन की संख्या",
            desc: "यह बताता है कि मशीन कितनी भरोसेमंद है (रिपेयर होने वाले पार्ट्स)।",
            goal: "लक्ष्य: ज्यादा MTBF"
          },
          {
            name: "MTTF",
            full: "Mean Time To Failure",
            formula: "कुल चलने का समय / यूनिट्स की संख्या",
            desc: "उन पार्ट्स के लिए जो रिपेयर नहीं होते (जैसे बल्ब)। यह फेल होने तक की कुल उम्र बताता है।",
            goal: "लक्ष्य: ज्यादा MTTF"
          }
        ],
        comparison: {
          title: "ब्रेकडाउन का समय चक्र",
          steps: ["मशीन रुकी", "खराबी का पता चला", "टीम पहुँची", "समस्या पहचानी", "ठीक किया", "टेस्टिंग", "चालू"]
        }
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
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono">Maintenance Node</h3>
        </div>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-emerald-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Reliability</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-emerald-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-emerald-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">
            "⚙️ {current.hero.mantra}"
         </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 bg-slate-950/40 p-2 rounded-2xl border border-white/5 w-fit">
         {current.tabs.map((tab, idx) => {
           const tabIds: any[] = ['disciplines', 'types', 'breakdown'];
           const id = tabIds[idx];
           return (
             <button 
               key={id}
               onClick={() => setActiveTab(id)}
               className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === id ? 'bg-white text-slate-950 shadow-lg scale-105' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
             >
               {tab}
             </button>
           );
         })}
      </div>

      {/* Dynamic Content */}
      <div className="min-h-[600px]">
        {activeTab === 'disciplines' && (
          <div className="animate-in slide-in-from-right-4 duration-500 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {current.disciplines.map((d, i) => (
                  <div key={d.id} className="bg-slate-950/60 border border-white/5 p-8 rounded-[40px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden h-full">
                     <div className="flex items-center justify-between">
                        <div className="w-14 h-14 bg-slate-900 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">{d.icon}</div>
                        <span className="text-emerald-500 font-black text-[9px] uppercase tracking-widest border border-emerald-500/30 px-3 py-1 rounded-full">{d.tag}</span>
                     </div>
                     <h5 className="text-white text-xl font-black uppercase tracking-tight">{d.title}</h5>
                     <p className="text-slate-500 text-xs font-bold leading-relaxed italic">"{d.desc}"</p>
                     <div className="space-y-2 pt-4 border-t border-white/5">
                        {d.activities.map((act, idx) => (
                           <div key={idx} className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-tight">
                              <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                              {act}
                           </div>
                        ))}
                     </div>
                     <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl mt-auto">
                        <p className="text-white text-[10px] font-bold italic leading-tight">📌 {d.example}</p>
                     </div>
                  </div>
               ))}
            </div>

            <div className="bg-slate-900/60 border border-white/10 p-8 rounded-[40px] shadow-2xl space-y-6">
               <h4 className="text-white text-[10px] font-black uppercase tracking-[0.5em] text-center w-full">{current.objectives.title}</h4>
               <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {current.objectives.list.map((obj, i) => (
                     <div key={i} className="p-4 bg-slate-950 rounded-2xl border border-white/5 text-center flex flex-col items-center gap-2">
                        <span className="text-emerald-500 text-lg">✔</span>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{obj}</span>
                     </div>
                  ))}
               </div>
            </div>
          </div>
        )}

        {activeTab === 'types' && (
          <div className="animate-in slide-in-from-right-4 duration-500 space-y-8">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {current.types.map((type, i) => (
                   <div key={i} className={`bg-slate-900/60 border border-${type.color}-500/20 p-8 md:p-12 rounded-[48px] shadow-2xl relative overflow-hidden flex flex-col gap-6 group hover:bg-slate-900 transition-all`}>
                      <div className="flex items-center justify-between">
                         <h5 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tighter italic">{type.name}</h5>
                         <span className={`bg-${type.color}-500/10 text-${type.color}-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-${type.color}-500/30`}>{type.tag}</span>
                      </div>
                      <p className="text-slate-200 text-base md:text-lg font-bold leading-relaxed border-l-4 p-6 rounded-r-2xl bg-white/5 border-white/10">
                         "{type.desc}"
                      </p>
                      <div className="mt-auto space-y-2">
                         <span className={`text-${type.color}-500 text-[10px] font-black uppercase tracking-widest block`}>Industrial Impact:</span>
                         <p className="text-slate-400 text-xs font-bold uppercase">{type.impact}</p>
                      </div>
                      <div className={`absolute -bottom-6 -right-6 text-9xl font-black text-${type.color}-500/[0.03] select-none uppercase italic group-hover:text-${type.color}-500/[0.06] transition-colors`}>{type.name.slice(0, 1)}</div>
                   </div>
                ))}
             </div>
          </div>
        )}

        {activeTab === 'breakdown' && (
          <div className="animate-in slide-in-from-right-4 duration-500 space-y-12">
             <div className="bg-slate-900 border border-rose-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden space-y-8">
                <div className="absolute top-0 right-0 p-8 text-6xl font-black text-rose-500/[0.03] select-none italic uppercase tracking-tighter">Stoppage</div>
                <div className="max-w-3xl space-y-4">
                   <h4 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none italic">{current.breakdown.title}</h4>
                   <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic border-l-4 border-rose-500 pl-6 bg-rose-500/5 py-4 rounded-r-2xl">
                      "{current.breakdown.desc}"
                   </p>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {current.breakdown.metrics.map((m, i) => (
                   <div key={i} className="bg-slate-950/60 border border-white/10 p-10 rounded-[48px] shadow-2xl flex flex-col gap-6 group hover:bg-slate-900 transition-all relative overflow-hidden h-full">
                      <div className="absolute top-0 right-0 p-6 text-6xl font-black text-white/[0.02] italic">{m.name}</div>
                      <div className="space-y-1">
                         <h5 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tighter italic">{m.name}</h5>
                         <span className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.4em]">{m.full}</span>
                      </div>
                      <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                         <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-2">Calculation Formula</span>
                         <p className="text-white text-sm md:text-base font-black font-mono tracking-tight">{m.formula}</p>
                      </div>
                      <p className="text-slate-400 text-xs font-bold leading-relaxed italic">{m.desc}</p>
                      <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-2xl text-center mt-auto">
                         <span className="text-emerald-400 font-black text-xs uppercase tracking-widest">{m.goal}</span>
                      </div>
                   </div>
                ))}
             </div>

             <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl space-y-10">
                <h4 className="text-white text-center font-black text-xl md:text-2xl uppercase tracking-[0.3em]">{current.breakdown.comparison.title}</h4>
                <div className="flex flex-wrap justify-between items-center relative px-10">
                   <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-rose-500/20 via-amber-500/20 to-emerald-500/20 -translate-y-1/2"></div>
                   {current.breakdown.comparison.steps.map((step, i) => (
                      <div key={i} className="relative z-10 flex flex-col items-center gap-4 group">
                         <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-slate-900 flex items-center justify-center text-white font-black text-xs shadow-lg group-hover:bg-slate-700 transition-all">0{i+1}</div>
                         <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">{step}</span>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        )}
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_12px_emerald] animate-pulse"></span>
                Uptime Status: Healthy
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-amber-500 rounded-full shadow-[0_0_12px_orange]"></span>
                Predictive Engine: Online
             </span>
          </div>
          <div className="opacity-40 italic uppercase tracking-widest font-mono">Maintenance Framework v4.3 // Industrial Asset Node</div>
      </div>
    </div>
  );
};

export default MaintenanceDetail;

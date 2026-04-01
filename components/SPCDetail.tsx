
import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface SPCDetailProps {
  onBack: () => void;
  lang: Language;
}

const SPCDetail: React.FC<SPCDetailProps> = ({ onBack, lang }) => {
  const [activeTab, setActiveTab] = useState<'basics' | 'charts' | 'capability' | 'strategy'>('basics');
  const [chartPoints, setChartPoints] = useState<number[]>([20, 18, 22, 19, 21, 25, 18]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartPoints(prev => [...prev.slice(1), 15 + Math.random() * 10]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const content = {
    en: {
      title: "SPC: Statistical Process Control",
      subtitle: "Process Intelligence & Stability",
      backBtn: "Back to IPQC",
      tabs: ["Basics", "Control Charts", "Capability", "Strategy"],
      hero: {
        title: "Control the Process, Not just the Product",
        desc: "SPC is a method to monitor and control a process through statistical tools. It prevents defects by catching variations early.",
        goal: "Objective: Zero Waste, High Stability."
      },
      basics: {
        objectives: ["Understand Process Variation", "Check Process Stability", "Prevent defects before they occur", "Reduce rework and scrap costs"],
        monitors: ["Critical Dimensions (CTQ)", "Process Parameters (Temp, Pressure, Torque)", "Defect Rates", "Cycle Time stability"]
      },
      charts: {
        types: [
          { group: "Variable Data (Continuous)", items: ["X̄–R Chart (Small subgroup)", "X̄–S Chart (Large subgroup)"] },
          { group: "Attribute Data (Defects)", items: ["P Chart (Defective %)", "NP Chart (No. of defectives)", "C Chart (Defects per unit)", "U Chart (Variable sample size)"] }
        ],
        signals: [
          "Any point outside UCL / LCL limits",
          "7 consecutive points on one side of center line",
          "Continuous upward or downward trend",
          "Abnormal patterns or sudden jumps"
        ]
      },
      capability: {
        analogyTitle: "The Garage & Car Analogy",
        analogyDesc: "Tolerance is the garage width. Your process variation is the car width.",
        metrics: [
          { name: "Cp", def: "Process Potential", simple: "Can the car fit in the garage?", target: "> 1.33" },
          { name: "Cpk", def: "Process Accuracy", simple: "Is the car parked in the middle or hitting the wall?", target: "> 1.33" }
        ]
      },
      strategy: {
        comparison: {
          headers: ["Point", "SPC", "Inspection"],
          rows: [
            { p: "Focus", s: "Process", i: "Product" },
            { p: "Timing", s: "During production", i: "After production" },
            { p: "Result", s: "Prevention (बचाव)", i: "Detection (पकड़ना)" }
          ]
        },
        steps: ["Identify CTQ", "Data Collection Plan", "Select Control Chart", "Plot & Monitor", "Out-of-control action", "Continuous Improvement"]
      }
    },
    hi: {
      title: "SPC: स्टेटिस्टिकल प्रोसेस कंट्रोल",
      subtitle: "प्रोसेस इंटेलिजेंस और स्थिरता",
      backBtn: "IPQC पर वापस जाएं",
      tabs: ["बुनियादी बातें", "कंट्रोल चार्ट", "क्षमता (Cp/Cpk)", "रणनीति"],
      hero: {
        title: "प्रोडक्ट नहीं, प्रोसेस को कंट्रोल करो",
        desc: "SPC सांख्यिकीय टूल्स का उपयोग करके प्रोसेस की निगरानी और सुधार करने का तरीका है। यह डिफेक्ट बनने से पहले ही बदलावों को पहचान लेता है।",
        goal: "लक्ष्य: शून्य बर्बादी, उच्च स्थिरता।"
      },
      basics: {
        objectives: ["प्रोसेस बदलाव (Variation) को समझना", "प्रोसेस स्थिर (Stable) है या नहीं चेक करना", "डिफेक्ट होने से पहले ही रोकना", "रीवर्क और स्क्रैप की लागत कम करना"],
        monitors: ["क्रिटिकल डायमेंशन (CTQ)", "प्रोसेस पैरामीटर्स (Temp, Pressure, Torque)", "डिफेक्ट रेट (गलती की दर)", "साइकिल टाइम स्थिरता"]
      },
      charts: {
        types: [
          { group: "वैरिएबल डेटा (Variable)", items: ["X̄–R चार्ट (छोटा ग्रुप)", "X̄–S चार्ट (बड़ा ग्रुप)"] },
          { group: "एट्रीब्यूट डेटा (Defects)", items: ["P चार्ट (डिफेक्टिव %)", "NP चार्ट (डिफेक्टिव संख्या)", "C चार्ट (डिफेक्ट प्रति यूनिट)", "U चार्ट (बदलता हुआ सैंपल)"] }
        ],
        signals: [
          "कोई भी पॉइंट UCL / LCL लिमिट के बाहर जाना",
          "लगातार 7 पॉइंट्स सेंटर लाइन के एक ही तरफ होना",
          "लगातार ऊपर या नीचे की तरफ जाने वाला ट्रेंड",
          "अचानक जम्प या कोई असामान्य पैटर्न दिखना"
        ]
      },
      capability: {
        analogyTitle: "गैराज और कार का उदाहरण",
        analogyDesc: "टोलरेंस (Tolerance) गैराज की चौड़ाई है। आपके प्रोसेस का बदलाव कार की चौड़ाई है।",
        metrics: [
          { name: "Cp", def: "प्रोसेस की क्षमता", simple: "क्या कार गैराज के अंदर आने लायक है?", target: "> 1.33" },
          { name: "Cpk", def: "प्रोसेस की सटीकता", simple: "क्या कार बीच में खड़ी है या दीवार से टकरा रही है?", target: "> 1.33" }
        ]
      },
      strategy: {
        comparison: {
          headers: ["बिंदु", "SPC", "इंस्पेक्शन"],
          rows: [
            { p: "ध्यान (Focus)", s: "प्रोसेस पर", i: "प्रोडक्ट पर" },
            { p: "समय", s: "काम के दौरान", i: "काम खत्म होने के बाद" },
            { p: "परिणाम", s: "रोकथाम (Prevention)", i: "पकड़ना (Detection)" }
          ]
        },
        steps: ["CTQ की पहचान", "डेटा कलेक्शन प्लान", "सही कंट्रोल चार्ट चुनें", "प्लॉट और मॉनिटरिंग", "आउट-ऑफ-कंट्रोल एक्शन", "निरंतर सुधार"]
      }
    }
  };

  const current = content[lang] || content['en'];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-cyan-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(6,182,212,0.8)]"></div>
              <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg">{current.title}</h3>
        </div>
        <button 
          onClick={onBack}
          className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900/60 border border-cyan-500/20 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-cyan-500/[0.03] select-none uppercase italic tracking-tighter">Monitoring</div>
         <div className="relative z-10 space-y-6">
            <div className="space-y-2">
               <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter">{current.hero.title}</h4>
               <p className="text-slate-300 text-sm md:text-xl font-bold leading-relaxed max-w-4xl italic border-l-4 border-cyan-500 pl-6 bg-white/5 py-4 rounded-r-2xl">
                  "{current.hero.desc}"
               </p>
            </div>
            <div className="inline-block px-5 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 font-black text-xs md:text-sm uppercase tracking-widest">
               {current.hero.goal}
            </div>
         </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 bg-slate-950/40 p-2 rounded-2xl border border-white/5 w-fit">
         {current.tabs.map((label, idx) => {
           const ids: any[] = ['basics', 'charts', 'capability', 'strategy'];
           const id = ids[idx];
           return (
             <button 
               key={id}
               onClick={() => setActiveTab(id)}
               className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === id ? 'bg-white text-slate-950 shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
             >
               {label}
             </button>
           );
         })}
      </div>

      {/* Dynamic Content */}
      <div className="min-h-[500px]">
        {activeTab === 'basics' && (
          <div className="animate-in slide-in-from-right-4 duration-500 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-slate-950/40 p-8 rounded-[40px] border border-white/5 shadow-xl space-y-6">
                 <h5 className="text-white font-black text-xl uppercase tracking-widest flex items-center gap-3">
                   <span className="w-1.5 h-6 bg-cyan-500"></span>
                   {lang === 'hi' ? 'मुख्य उद्देश्य' : 'Main Objectives'}
                 </h5>
                 <div className="space-y-4">
                    {current.basics.objectives.map((obj, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl group hover:bg-cyan-500/10 transition-all border border-transparent hover:border-cyan-500/20">
                         <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-black">0{i+1}</span>
                         <span className="text-slate-200 text-sm font-bold">{obj}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-slate-950/40 p-8 rounded-[40px] border border-white/5 shadow-xl space-y-6">
                 <h5 className="text-white font-black text-xl uppercase tracking-widest flex items-center gap-3">
                   <span className="w-1.5 h-6 bg-emerald-500"></span>
                   {lang === 'hi' ? 'क्या मॉनिटर होता है?' : 'What is monitored?'}
                 </h5>
                 <div className="grid grid-cols-1 gap-4">
                    {current.basics.monitors.map((mon, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-slate-900 rounded-2xl border border-white/5">
                         <span className="text-2xl opacity-50">⚙️</span>
                         <span className="text-slate-300 text-sm font-black uppercase tracking-tight">{mon}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
            
            {/* Example Case */}
            <div className="bg-slate-950 border-2 border-dashed border-cyan-500/20 p-8 rounded-[40px] text-center">
               <span className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.5em] block mb-4">Example Case</span>
               <p className="text-white text-lg md:text-2xl font-black italic max-w-4xl mx-auto drop-shadow-xl leading-snug">
                  {lang === 'hi' 
                    ? '"10.00 ± 0.05 mm का होल डायमीटर है। चार्ट दिखाता है कि वैल्यू धीरे-धीरे लिमिट की तरफ जा रही है → मशीन की घिसाई (Wear) पहचानें और खराब माल बनने से पहले ही सेटिंग सुधारें।"'
                    : '"Critical hole dia = 10.00 ± 0.05 mm. SPC chart shows values drifting toward upper limit → Identify machine wear, correct settings, and avoid defects."'}
               </p>
            </div>
          </div>
        )}

        {activeTab === 'charts' && (
          <div className="animate-in slide-in-from-right-4 duration-500 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column - Tools */}
              <div className="lg:col-span-5 space-y-6">
                 <div className="bg-slate-950/60 p-8 rounded-[40px] border border-white/5 space-y-8 shadow-xl h-full">
                    {current.charts.types.map((type, i) => (
                      <div key={i} className="space-y-4">
                         <h6 className={`text-[10px] font-black uppercase tracking-[0.4em] ${i === 0 ? 'text-cyan-400' : 'text-amber-400'}`}>{type.group}</h6>
                         <div className="space-y-2">
                            {type.items.map((item, idx) => (
                              <div key={idx} className="bg-white/5 p-3 px-4 rounded-xl border border-white/5 text-slate-200 text-xs font-bold flex items-center gap-3">
                                 <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-cyan-500' : 'bg-amber-500'}`}></div>
                                 {item}
                              </div>
                            ))}
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Right Column - Monitor & Signals */}
              <div className="lg:col-span-7 space-y-8">
                 <div className="bg-slate-900 border border-white/10 p-8 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col gap-6">
                    <div className="absolute top-0 right-0 p-8 text-2xl font-black text-white/5 select-none uppercase italic">Live Analyzer</div>
                    <h6 className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.4em] flex items-center gap-2">
                       <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                       X-Bar Monitor Simulation
                    </h6>
                    <div className="bg-slate-950/80 h-48 rounded-3xl border border-white/10 p-8 relative shadow-inner">
                        <div className="absolute top-8 left-0 right-0 border-t border-rose-500 border-dashed opacity-30"></div>
                        <div className="absolute bottom-8 left-0 right-0 border-t border-rose-500 border-dashed opacity-30"></div>
                        <div className="absolute top-1/2 left-0 right-0 border-t border-white/10"></div>
                        <svg className="w-full h-full relative z-10" viewBox="0 0 100 40" preserveAspectRatio="none">
                           <polyline points={chartPoints.map((p, i) => `${i * (100/6)},${p}`).join(' ')} fill="none" stroke="#10b981" strokeWidth="1.5" className="transition-all duration-1000" />
                           {chartPoints.map((p, i) => (
                             <circle key={i} cx={i * (100/6)} cy={p} r="1.5" fill={p < 8 || p > 32 ? "#f43f5e" : "#10b981"} className={i === 6 ? "animate-pulse" : ""} />
                           ))}
                        </svg>
                    </div>

                    <div className="space-y-4 mt-4">
                       <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest block text-center">Out of Control Signals / खतरे के संकेत</span>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {current.charts.signals.map((sig, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                               <span className="text-rose-500 text-xs">⚠️</span>
                               <span className="text-slate-300 text-[10px] font-bold uppercase leading-tight">{sig}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'capability' && (
          <div className="animate-in slide-in-from-right-4 duration-500 space-y-10">
            <div className="bg-slate-900 border border-white/10 p-10 rounded-[40px] shadow-2xl flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600"></div>
               <div className="lg:w-1/2 space-y-8">
                  <div className="space-y-2">
                     <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic drop-shadow-lg">{current.capability.analogyTitle}</h4>
                     <span className="text-indigo-400 font-black text-[10px] uppercase tracking-[0.5em]">The Ultimate Visualization</span>
                  </div>
                  <p className="text-slate-200 text-lg md:text-xl font-bold leading-relaxed italic bg-indigo-500/5 p-8 rounded-[32px] border-l-4 border-indigo-500 shadow-inner">
                     "{current.capability.analogyDesc}"
                  </p>
               </div>

               <div className="lg:w-1/2 flex flex-col items-center gap-8">
                  <div className="relative w-full max-w-sm h-64 border-x-8 border-rose-500/40 bg-slate-950/80 rounded-sm shadow-2xl flex flex-col items-center justify-center group overflow-hidden">
                     <div className="relative w-40 h-20 bg-indigo-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-[0_0_40px_rgba(79,70,229,0.5)] group-hover:translate-x-10 transition-transform duration-1000">
                        <span className="text-[10px] font-black uppercase tracking-widest">PROCESS</span>
                     </div>
                     <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/20 -translate-x-1/2 border-l border-dashed border-white/30"></div>
                     <div className="absolute top-4 left-4 text-rose-500 text-[8px] font-black uppercase">LSL (Wall)</div>
                     <div className="absolute top-4 right-4 text-rose-500 text-[8px] font-black uppercase">USL (Wall)</div>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl w-full text-center italic text-amber-400 text-[11px] font-black uppercase tracking-tight">
                     "Cp tells you the size of the car. Cpk tells you if it's hitting the wall."
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {current.capability.metrics.map((m, i) => (
                  <div key={i} className={`bg-slate-950/40 border border-white/10 p-8 rounded-[40px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-2xl relative overflow-hidden`}>
                     <div className="flex justify-between items-center relative z-10">
                        <h5 className={`text-white font-black text-3xl uppercase tracking-tighter ${i === 0 ? 'text-emerald-400' : 'text-indigo-400'}`}>{m.name}</h5>
                        <div className="bg-white/5 text-slate-400 px-4 py-1.5 rounded-full text-[10px] font-black border border-white/10 shadow-inner">Bench: {m.target}</div>
                     </div>
                     <div className="space-y-1 relative z-10">
                        <p className="text-slate-100 font-black uppercase text-sm tracking-tight">{m.def}</p>
                        <p className="text-slate-500 text-xs font-bold leading-relaxed italic">"{m.simple}"</p>
                     </div>
                     <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden mt-2 border border-white/5 relative">
                        <div className={`h-full ${i === 0 ? 'w-[90%] bg-emerald-500' : 'w-[75%] bg-indigo-500'} transition-all duration-1000 delay-300`}></div>
                     </div>
                  </div>
               ))}
            </div>
          </div>
        )}

        {activeTab === 'strategy' && (
          <div className="animate-in slide-in-from-right-4 duration-500 space-y-10">
            {/* Comparison Table */}
            <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl overflow-hidden backdrop-blur-xl">
               <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                  <span className="w-10 h-1 bg-cyan-500"></span>
                  SPC vs Inspection (मुख्य अंतर)
               </h4>
               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-white/10">
                           {current.strategy.comparison.headers.map((h, i) => (
                              <th key={i} className={`py-4 text-[10px] font-black uppercase tracking-widest ${i === 0 ? 'text-slate-500' : i === 1 ? 'text-emerald-400' : 'text-rose-400'}`}>{h}</th>
                           ))}
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-white/5">
                        {current.strategy.comparison.rows.map((row, i) => (
                           <tr key={i} className="group hover:bg-white/5 transition-colors">
                              <td className="py-6 text-white font-black text-xs md:text-sm uppercase tracking-tight">{row.p}</td>
                              <td className="py-6 text-emerald-400 font-black text-xs md:text-sm uppercase">{row.s}</td>
                              <td className="py-6 text-rose-400 font-black text-xs md:text-sm uppercase italic">{row.i}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            {/* Implementation Steps */}
            <div className="bg-slate-950/60 border border-white/5 p-8 md:p-12 rounded-[40px] shadow-2xl space-y-10">
               <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-center w-full">{lang === 'hi' ? 'SPC लागू करने के स्टेप्स' : 'SPC Implementation Steps'}</h4>
               <div className="flex flex-wrap justify-center gap-8 md:gap-12 relative w-full">
                  {current.strategy.steps.map((step, i) => (
                     <div key={i} className="flex flex-col items-center gap-3 group relative z-10 w-32">
                        <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-cyan-500/20 flex items-center justify-center text-white font-black text-xl group-hover:border-cyan-500 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all">
                           {i + 1}
                        </div>
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest text-center">{step}</span>
                     </div>
                  ))}
               </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-6 bg-slate-950/80 rounded-3xl border border-white/10 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 backdrop-blur-xl">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-[0_0_12px_rgba(6,182,212,1)] animate-pulse"></span>
                Stats Processor: Online
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-[0_0_12px_rgba(99,102,241,1)]"></span>
                Standard: MIL-STD-105E
             </span>
          </div>
          <div className="opacity-40 italic uppercase tracking-widest">Industrial Intelligence Node v7.6 // SPC Detail Node</div>
      </div>
    </div>
  );
};

export default SPCDetail;

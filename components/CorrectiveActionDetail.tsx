
import React, { useState } from 'react';
import { Language } from '../types';

interface CorrectiveActionDetailProps {
  onBack: () => void;
  lang: Language;
}

const CorrectiveActionDetail: React.FC<CorrectiveActionDetailProps> = ({ onBack, lang }) => {
  const [activeTab, setActiveTab] = useState<'basics' | 'rpa' | '8d' | 'cmr'>('basics');

  const content = {
    en: {
      title: "Corrective Action Support",
      subtitle: "Problem Solving & RCA Engine",
      backBtn: "Back to IPQC",
      hero: {
        title: "Permanent Fix Protocol",
        desc: "Corrective Action is not just 'fixing' a mistake; it's about changing the system so the mistake never happens again.",
        goal: "Goal: Zero Recurrence."
      },
      basics: {
        title: "Core Definitions",
        subtitle: "Understand the terms clearly",
        items: [
          {
            title: "Root Cause Analysis (RCA)",
            desc: "Finding the 'Real Reason'. Not just fixing the scratch, but finding out WHY the scratch happened (e.g., poor handling).",
            icon: "🔎",
            tag: "The Investigation"
          },
          {
            title: "Corrective Action",
            desc: "The 'Permanent Fix'. Changing the process or SOP so the same error doesn't happen on this station again.",
            icon: "🛠️",
            tag: "The Solution"
          },
          {
            title: "Preventive Action",
            desc: "The 'Future Shield'. Applying the solution to other similar machines/lines even if they don't have the problem yet.",
            icon: "🛡️",
            tag: "Safety Guard"
          },
          {
            title: "Effectiveness Verification",
            desc: "The 'Double Check'. Monitoring the process for 3–5 days to confirm that the problem is 100% gone.",
            icon: "✅",
            tag: "Audit Proof"
          },
          {
            title: "NCR / SCAR Closure",
            desc: "The 'Final Seal'. Officially closing the paperwork once the evidence of the fix is approved by Quality.",
            icon: "🔒",
            tag: "System Closure"
          }
        ]
      },
      fiveWhy: {
        title: "5-Why Analysis",
        subtitle: "The Root Cause Finder",
        steps: [
          { q: "Why?", a: "Handling was rough", icon: "🤝" },
          { q: "Why?", a: "No protective film used", icon: "🛡️" },
          { q: "Why?", a: "Not mentioned in SOP", icon: "📑" },
          { q: "Why?", a: "Process update was missed", icon: "❌" },
          { q: "Why?", a: "Change control system failed", icon: "🧠" }
        ],
        result: "Root Cause: Change Control Failure"
      },
      fishbone: {
        title: "Fishbone (Ishikawa) 6M Analysis",
        desc: "Brainstorming all possible causes across 6 industrial categories.",
        categories: [
          { m: "Man", items: ["Skill", "Training", "Fatigue"], icon: "👤" },
          { m: "Machine", items: ["Setting", "Condition", "Tools"], icon: "⚙️" },
          { m: "Material", items: ["Quality", "Mix-up", "Grade"], icon: "📦" },
          { m: "Method", items: ["SOP", "Sequence", "WI"], icon: "📑" },
          { m: "Measurement", items: ["Calibration", "Gauge"], icon: "📐" },
          { m: "Mother Nature", items: ["Heat", "Dust", "Lighting"], icon: "🌍" }
        ]
      },
      eightD: {
        title: "8D Reporting (The Gold Standard)",
        steps: [
          { d: "D1", title: "Team Formation", desc: "Build cross-functional team." },
          { d: "D2", title: "Problem Description", desc: "Define What, When, Where." },
          { d: "D3", title: "Containment", desc: "Immediate stock hold." },
          { d: "D4", title: "RCA", desc: "Identify 5-Why / Fishbone." },
          { d: "D5", title: "Action Plan", desc: "Define permanent fix." },
          { d: "D6", title: "Validation", desc: "Verify result with data." },
          { d: "D7", title: "Prevention", desc: "Update SOP / Poka-Yoke." },
          { d: "D8", title: "Closure", desc: "Appreciate & close report." }
        ]
      },
      summary: [
        { k: "5-Why", v: "Deep Root Cause finder" },
        { k: "Fishbone", v: "Brainstorming toolkit" },
        { k: "CMR", v: "Internal progress record" },
        { k: "8D", v: "Customer-level solving" }
      ]
    },
    hi: {
      title: "सुधारात्मक कार्यवाही (Corrective Action)",
      subtitle: "समस्या समाधान और RCA इंजन",
      backBtn: "IPQC पर वापस जाएं",
      hero: {
        title: "स्थायी समाधान प्रोटोकॉल",
        desc: "करेक्टिव एक्शन का मतलब सिर्फ गलती सुधारना नहीं, बल्कि सिस्टम को बदलना है ताकि वह गलती दोबारा कभी न हो।",
        goal: "लक्ष्य: समस्या दोबारा न आए।"
      },
      basics: {
        title: "मुख्य परिभाषाएं",
        subtitle: "नियमों को गहराई से समझें",
        items: [
          {
            title: "रूट कॉज एनालिसिस (RCA)",
            desc: "असली जड़ ढूँढना। सिर्फ खरोंच ठीक नहीं करना, बल्कि यह ढूँढना कि खरोंच क्यों लगी (जैसे: गलत हैंडलिंग)।",
            icon: "🔎",
            tag: "असली जांच"
          },
          {
            title: "करेक्टिव एक्शन (Corrective)",
            desc: "पक्का और स्थायी सुधार। प्रोसेस या SOP में बदलाव करना ताकि इस मशीन पर दोबारा वो गलती न हो।",
            icon: "🛠️",
            tag: "स्थायी समाधान"
          },
          {
            title: "प्रिवेंटिव एक्शन (Preventive)",
            desc: "भविष्य की सुरक्षा। जो सुधार यहाँ किया है, उसे वैसी ही दूसरी मशीनों पर भी लागू करना ताकि वहां समस्या आने ही न पाए।",
            icon: "🛡️",
            tag: "सुरक्षा कवच"
          },
          {
            title: "इफेक्टिवनेस वेरिफिकेशन",
            desc: "दोबारा पक्की जांच। सुधार के बाद 3-5 दिन तक काम पर नज़र रखना कि क्या समस्या वाकई खत्म हो गई है।",
            icon: "✅",
            tag: "रिजल्ट की पुष्टि"
          },
          {
            title: "NCR / SCAR क्लोजर",
            desc: "आधिकारिक समापन। जब क्वालिटी टीम सुधार के सबूत देख ले, तो कागजी कार्यवाही (Report) को बंद करना।",
            icon: "🔒",
            tag: "सिस्टम क्लोजर"
          }
        ]
      },
      fiveWhy: {
        title: "5-Why एनालिसिस",
        subtitle: "जड़ तक पहुँचने का तरीका",
        steps: [
          { q: "क्यों?", a: "हैंडलिंग सही नहीं थी", icon: "🤝" },
          { q: "क्यों?", a: "सुरक्षा फिल्म नहीं लगी थी", icon: "🛡️" },
          { q: "क्यों?", a: "SOP में इसका जिक्र नहीं था", icon: "📑" },
          { q: "क्यों?", a: "प्रोसेस अपडेट करना भूल गए", icon: "❌" },
          { q: "क्यों?", a: "चेंज कंट्रोल सिस्टम फेल था", icon: "🧠" }
        ],
        result: "असली जड़: चेंज कंट्रोल फेलियर"
      },
      fishbone: {
        title: "फिशबोन (Ishikawa) 6M विश्लेषण",
        desc: "समस्या के सभी संभावित कारणों को 6 मुख्य श्रेणियों में बांटकर देखना।",
        categories: [
          { m: "मैन (Man)", items: ["हुनर", "ट्रेनिंग", "थकान"], icon: "👤" },
          { m: "मशीन", items: ["सेटिंग", "हालत", "टूल"], icon: "⚙️" },
          { m: "मटेरियल", items: ["क्वालिटी", "मिक्स-अप"], icon: "📦" },
          { m: "तरीका (Method)", items: ["SOP नियम", "क्रम (Sequence)"], icon: "📑" },
          { m: "माप (Measurement)", items: ["कैलिब्रेशन", "गेज"], icon: "📐" },
          { m: "वातावरण (Nature)", items: ["गर्मी", "धूल", "रोशनी"], icon: "🌍" }
        ]
      },
      eightD: {
        title: "8D रिपोर्टिंग (इंटरनेशनल स्टैंडर्ड)",
        steps: [
          { d: "D1", title: "टीम बनाना", desc: "एक्सपर्ट्स की टीम चुनें।" },
          { d: "D2", title: "समस्या का विवरण", desc: "क्या, कब और कहाँ?" },
          { d: "D3", title: "तत्काल रोक", desc: "खराब माल को अलग करें।" },
          { d: "D4", title: "RCA जांच", desc: "5-Why / फिशबोन का उपयोग।" },
          { d: "D5", title: "सुधार योजना", desc: "पक्का समाधान तय करें।" },
          { d: "D6", title: "पुष्टि (Validation)", desc: "रिजल्ट को डेटा से चेक करें।" },
          { d: "D7", title: "रोकथाम", desc: "SOP और पोका-योक अपडेट।" },
          { d: "D8", title: "क्लोजर", desc: "टीम की तारीफ और रिकॉर्ड।" }
        ]
      },
      summary: [
        { k: "5-Why", v: "जड़ ढूँढने वाली तकनीक" },
        { k: "फिशबोन", v: "विचार मंथन (Brainstorming)" },
        { k: "CMR", v: "इंटरनल सुधार का रिकॉर्ड" },
        { k: "8D", v: "कस्टमर लेवल समाधान" }
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

      {/* Hero Intro */}
      <div className="bg-slate-900/60 border border-rose-500/20 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-rose-500/[0.03] select-none uppercase italic">Solution</div>
         <div className="relative z-10 space-y-4">
            <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter">{current.hero.title}</h4>
            <p className="text-slate-300 text-sm md:text-xl font-bold leading-relaxed max-w-4xl italic">
               "{current.hero.desc}"
            </p>
            <div className="inline-block px-5 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 font-black text-xs md:text-sm uppercase tracking-widest">
               {current.hero.goal}
            </div>
         </div>
      </div>

      {/* Logic Selection Tabs */}
      <div className="flex flex-wrap gap-2 bg-slate-950/40 p-2 rounded-2xl border border-white/5 w-fit">
         {[
           { id: 'basics', label: lang === 'hi' ? 'मुख्य बातें' : 'Basics', color: 'rose' },
           { id: 'rpa', label: 'RCA (5-Why & Fishbone)', color: 'cyan' },
           { id: '8d', label: '8D Discipline', color: 'indigo' },
           { id: 'cmr', label: 'CMR Internal', color: 'rose' }
         ].map(tab => (
           <button 
             key={tab.id}
             onClick={() => setActiveTab(tab.id as any)}
             className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab.id ? 'bg-white text-slate-950 shadow-lg' : 'text-slate-400 hover:text-white'}`}
           >
             {tab.label}
           </button>
         ))}
      </div>

      {/* Dynamic Content Area */}
      <div className="min-h-[500px]">
        {activeTab === 'basics' && (
          <div className="animate-in slide-in-from-right-4 duration-500 space-y-10">
            <div className="flex flex-col gap-2">
               <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter">{current.basics.title}</h4>
               <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">{current.basics.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {current.basics.items.map((item, i) => (
                <div key={i} className="bg-slate-950/40 border border-white/5 p-8 rounded-[32px] hover:border-rose-500/30 transition-all group flex flex-col gap-5 shadow-xl relative overflow-hidden">
                   <div className="flex items-center justify-between relative z-10">
                      <div className="w-14 h-14 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-inner">
                         {item.icon}
                      </div>
                      <span className="text-[8px] font-black text-rose-500 border border-rose-500/20 px-3 py-1 rounded-full uppercase tracking-widest">{item.tag}</span>
                   </div>
                   <div className="relative z-10 space-y-2">
                      <h5 className="text-white font-black text-lg uppercase tracking-tight leading-tight group-hover:text-rose-400 transition-colors">{item.title}</h5>
                      <p className="text-slate-400 text-xs font-bold leading-relaxed">{item.desc}</p>
                   </div>
                   <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-rose-500/5 blur-2xl rounded-full"></div>
                </div>
              ))}
            </div>

            {/* Root Cause Visual Card */}
            <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl flex flex-col md:flex-row items-center gap-10">
               <div className="md:w-1/2 space-y-6">
                  <h5 className="text-white text-2xl font-black uppercase tracking-tighter italic">Symptom vs. Root Cause</h5>
                  <div className="space-y-4">
                     <div className="bg-rose-500/10 border border-rose-500/30 p-4 rounded-2xl">
                        <span className="text-[8px] font-black text-rose-500 uppercase block mb-1">Symptom (लक्षण)</span>
                        <p className="text-white text-sm font-bold">What is visible? (e.g., The machine stopped).</p>
                     </div>
                     <div className="flex justify-center">
                        <svg className="w-6 h-6 text-slate-700 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 14l-7 7-7-7" strokeWidth="3" /></svg>
                     </div>
                     <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-2xl">
                        <span className="text-[8px] font-black text-emerald-500 uppercase block mb-1">Root Cause (असली जड़)</span>
                        <p className="text-white text-sm font-bold">Why did it happen? (e.g., Fuse blown due to poor maintenance).</p>
                     </div>
                  </div>
               </div>
               <div className="md:w-1/2 flex justify-center">
                  <div className="relative w-48 h-48 flex items-center justify-center">
                     <div className="absolute inset-0 border-4 border-dashed border-rose-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                     <div className="text-7xl">🌳</div>
                     <div className="absolute bottom-4 text-emerald-500 font-black text-[10px] uppercase tracking-widest bg-slate-950 px-3 py-1 rounded-full border border-emerald-500/30 shadow-lg">Focus on Roots</div>
                  </div>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'rpa' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in slide-in-from-right-4 duration-500">
             {/* 5-Why Ladder */}
             <div className="lg:col-span-5 bg-slate-900/60 border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 text-4xl font-black text-white/5 select-none uppercase italic">Ladder</div>
                <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4">
                   <span className="w-12 h-0.5 bg-cyan-500"></span>
                   {current.fiveWhy.title}
                </h4>
                
                <div className="space-y-4 relative">
                   <div className="absolute top-0 bottom-0 left-[15px] w-0.5 bg-gradient-to-b from-cyan-500 via-cyan-500/20 to-transparent"></div>
                   {current.fiveWhy.steps.map((s, i) => (
                      <div key={i} className="flex gap-6 relative z-10 group">
                         <div className="w-8 h-8 rounded-full bg-slate-950 border border-cyan-500 flex items-center justify-center text-cyan-400 font-black text-[10px] group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-lg">
                            {i+1}
                         </div>
                         <div className="flex-1 bg-slate-950/40 p-4 rounded-2xl border border-white/5 group-hover:border-cyan-500/30 transition-all">
                            <span className="text-cyan-500 text-[10px] font-black uppercase block mb-1">{s.q}</span>
                            <div className="flex items-center justify-between">
                               <p className="text-white text-xs md:text-sm font-bold italic">{s.a}</p>
                               <span className="text-xl opacity-20 group-hover:opacity-100 transition-opacity">{s.icon}</span>
                            </div>
                         </div>
                      </div>
                   ))}
                </div>

                <div className="p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-3xl text-center">
                   <span className="text-emerald-500 font-black text-[9px] uppercase tracking-widest block mb-1">Investigation Result</span>
                   <p className="text-white text-xs md:text-sm font-black uppercase italic tracking-tighter">{current.fiveWhy.result}</p>
                </div>
             </div>

             {/* Fishbone Grid */}
             <div className="lg:col-span-7 bg-slate-900/60 border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-10">
                <div className="space-y-2">
                   <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4">
                      <span className="w-12 h-0.5 bg-rose-500"></span>
                      {current.fishbone.title}
                   </h4>
                   <p className="text-slate-400 text-xs font-bold italic">"{current.fishbone.desc}"</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                   {current.fishbone.categories.map((cat, i) => (
                      <div key={i} className="bg-slate-950/60 p-6 rounded-[32px] border border-white/5 hover:border-rose-500/30 transition-all group shadow-lg flex flex-col gap-4">
                         <div className="flex items-center justify-between">
                            <div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-inner">
                               {cat.icon}
                            </div>
                            <span className="text-rose-500/20 font-black text-lg italic">M{i+1}</span>
                         </div>
                         <h5 className="text-white font-black text-xs uppercase tracking-widest">{cat.m}</h5>
                         <div className="space-y-1">
                            {cat.items.map((item, idx) => (
                               <div key={idx} className="text-slate-500 text-[10px] font-bold uppercase tracking-tight">• {item}</div>
                            ))}
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        )}

        {activeTab === '8d' && (
          <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl animate-in slide-in-from-right-4 duration-500 space-y-12">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="space-y-2">
                   <h4 className="text-indigo-400 font-black text-2xl md:text-3xl uppercase tracking-tighter">{current.eightD.title}</h4>
                   <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Global Standard for Problem Solving</p>
                </div>
                <div className="px-6 py-2 bg-indigo-500 rounded-xl text-white font-black text-[10px] uppercase tracking-widest shadow-lg">Phase: Systematic Fix</div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {current.eightD.steps.map((step, i) => (
                   <div key={i} className="bg-slate-950/60 border border-white/5 p-6 rounded-[32px] hover:bg-slate-900 transition-all group flex flex-col gap-4 shadow-xl">
                      <div className="flex items-center justify-between">
                         <span className="text-3xl font-black text-indigo-400 italic opacity-20 group-hover:opacity-60 transition-opacity">{step.d}</span>
                         <div className="w-1 h-8 bg-indigo-500/20 rounded-full group-hover:bg-indigo-500 transition-colors"></div>
                      </div>
                      <h5 className="text-white font-black text-xs md:text-sm uppercase tracking-tight leading-tight group-hover:text-indigo-400 transition-colors">{step.title}</h5>
                      <p className="text-slate-400 text-[10px] md:text-xs font-bold leading-relaxed">{step.desc}</p>
                   </div>
                ))}
             </div>

             <div className="bg-indigo-500/5 p-8 rounded-3xl border border-dashed border-indigo-500/20 text-center">
                <p className="text-indigo-400 text-sm md:text-lg font-bold italic">
                   "8D is the bridge that repairs customer trust after a failure."
                </p>
             </div>
          </div>
        )}

        {activeTab === 'cmr' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in slide-in-from-right-4 duration-500">
             {/* CMR Template Simulation */}
             <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-t-[16px] border-rose-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-[8px] font-black text-slate-200 uppercase tracking-widest select-none">Internal Use Only</div>
                <div className="flex justify-between items-start mb-10 pb-6 border-b border-slate-100">
                   <div>
                      <h4 className="text-slate-900 text-3xl font-black uppercase tracking-tighter">CMR Report</h4>
                      <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest">Corrective Measure Record</p>
                   </div>
                   <div className="text-right">
                      <div className="bg-rose-100 text-rose-700 px-4 py-1 rounded text-[10px] font-black uppercase tracking-widest">Doc No: Q-2025-042</div>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   <div className="space-y-8">
                      <div>
                         <span className="text-[7px] font-black text-slate-400 uppercase tracking-tighter block mb-2">Problem Statement</span>
                         <div className="h-12 bg-slate-50 rounded-lg border border-slate-100 p-3 italic text-slate-600 text-[10px]">Cabinet scratch reported on Line 4...</div>
                      </div>
                      <div>
                         <span className="text-[7px] font-black text-slate-400 uppercase tracking-tighter block mb-2">Root Cause Analysis</span>
                         <div className="h-20 bg-slate-50 rounded-lg border border-slate-100 p-3 italic text-slate-600 text-[10px]">Protective film missing from supplier packaging...</div>
                      </div>
                   </div>
                   <div className="space-y-8">
                      <div>
                         <span className="text-[7px] font-black text-slate-400 uppercase tracking-tighter block mb-2">Corrective Action</span>
                         <div className="h-12 bg-emerald-50 rounded-lg border border-emerald-100 p-3 italic text-emerald-700 text-[10px]">Standard kitting trays introduced...</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                         <div>
                            <span className="text-[7px] font-black text-slate-400 uppercase tracking-tighter block mb-1">Responsibility</span>
                            <div className="h-8 bg-slate-50 rounded-lg border border-slate-100"></div>
                         </div>
                         <div>
                            <span className="text-[7px] font-black text-slate-400 uppercase tracking-tighter block mb-1">Target Date</span>
                            <div className="h-8 bg-slate-50 rounded-lg border border-slate-100"></div>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="mt-12 flex justify-between items-end">
                   <div className="w-32 h-10 border-b border-slate-300"></div>
                   <div className="text-right">
                      <span className="text-[10px] font-black text-slate-900 block">System Validated</span>
                      <span className="text-[8px] font-bold text-slate-400 uppercase">ISO 9001:2015 Approved</span>
                   </div>
                </div>
             </div>

             {/* Summary Side Card */}
             <div className="lg:col-span-4 space-y-6">
                <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Protocol Hooks</h4>
                <div className="grid grid-cols-1 gap-4">
                   {current.summary.map((item, i) => (
                      <div key={i} className="bg-slate-950/60 p-6 rounded-3xl border border-white/5 hover:border-rose-500/20 transition-all group flex flex-col gap-2">
                         <span className="text-rose-500 font-black text-lg italic uppercase tracking-tighter">{item.k}</span>
                         <p className="text-slate-400 text-[10px] font-bold leading-relaxed">{item.v}</p>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        )}
      </div>

      {/* Process Flow Footer Node */}
      <div className="bg-slate-950 border border-white/5 rounded-[40px] p-8 md:p-10 shadow-inner flex flex-col items-center">
         <h4 className="text-white text-[10px] font-black uppercase tracking-[0.5em] mb-10 text-center">Corrective Action Lifecycle</h4>
         <div className="flex flex-wrap justify-center gap-6 md:gap-12 relative w-full">
            {[
               { l: "Detect", i: "🔎" },
               { l: "Contain", i: "📦" },
               { l: "Analyse", i: "🧠" },
               { l: "Action", i: "🛠️" },
               { l: "Verify", i: "✅" },
               { l: "Close", i: "🔒" }
            ].map((node, i) => (
               <div key={i} className="flex flex-col items-center gap-3 group">
                  <div className="w-14 h-14 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-2xl group-hover:border-rose-500 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.4)] transition-all">
                     {node.i}
                  </div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{node.l}</span>
               </div>
            ))}
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_12px_rgba(244,63,94,1)]"></span>
                RCA Processor: Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_12px_emerald]"></span>
                Closure Sync: Online
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest">Industrial Hub v6.8 // Corrective Action Node</div>
      </div>
    </div>
  );
};

export default CorrectiveActionDetail;

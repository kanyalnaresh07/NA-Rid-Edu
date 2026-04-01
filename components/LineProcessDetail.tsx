
import React, { useState } from 'react';
import { Language } from '../types';

interface LineProcessDetailProps {
  onBack: () => void;
  lang: Language;
}

const LineProcessDetail: React.FC<LineProcessDetailProps> = ({ onBack, lang }) => {
  const [selectedCriticalParam, setSelectedCriticalParam] = useState<string | null>(null);

  const content = {
    en: {
      title: "Line Process Inspection",
      subtitle: "In-Process Quality Vigilance",
      backBtn: "Back to IPQC",
      hero: {
        definition: "Line Process Inspection is a systematic audit conducted during production at defined intervals to ensure the Man, Machine, Material, and Method are perfectly aligned.",
        objective: "Goal: Catch defects at the source, minimize rework, and maintain process stability."
      },
      criticalHub: {
        title: "Critical Parameter Hub",
        desc: "The 3 Pillars of Industrial Accuracy. Click to explore.",
        items: [
          {
            id: "ctq",
            title: "CTQ",
            full: "Critical to Quality",
            target: "Customer Focus",
            desc: "Specific measurable characteristics that must be met to satisfy the customer.",
            points: ["Hole Diameter", "Color Shade", "Surface Finish", "Fitment Gap"],
            icon: "💎",
            color: "cyan"
          },
          {
            id: "ctp",
            title: "CTP",
            full: "Critical to Process",
            target: "Machine Focus",
            desc: "Key settings or variables in the process that must be stable to ensure CTQ is achieved.",
            points: ["Oven Temp", "Weld Voltage", "Torque Value", "Injection Pressure"],
            icon: "⚙️",
            color: "indigo"
          },
          {
            id: "cts",
            title: "CTS",
            full: "Critical to Safety",
            target: "Risk Focus",
            desc: "Parameters that directly impact the safety of the user or the operator.",
            points: ["Brake Pressure", "Earthing Check", "Insulation Resistance", "Safety Interlocks"],
            icon: "🛡️",
            color: "rose"
          }
        ]
      },
      checks: [
        { title: "1. Man (Operator)", icon: "👤", items: ["SOP/WI Adherence", "Proper Skill/Training", "Mandatory PPE Use"] },
        { title: "2. Machine", icon: "⚙️", items: ["Settings as per SOP", "Jig/Fixture Condition", "Torque/Pressure check"] },
        { title: "3. Material", icon: "📦", items: ["Correct Part/Model", "Mix-up Prevention", "IQC Cleared Only"] },
        { title: "4. Method/Process", icon: "📑", items: ["WI Displayed", "Sequence Followed", "Poka-Yoke Working"] }
      ],
      frequency: {
        title: "Inspection Timeline",
        steps: [
          { time: "Shift Start", task: "Startup Inspection" },
          { time: "1st Unit", task: "First Piece Approval" },
          { time: "Periodic", task: "Every 1–2 Hours Patrol" },
          { time: "Changeover", task: "Post-Breakdown Check" }
        ]
      },
      checklist: ["Correct Material", "Machine Settings OK", "Dimensions OK", "Visual Quality OK", "SOP Followed"]
    },
    hi: {
      title: "लाइन प्रोसेस इंस्पेक्शन",
      subtitle: "इन-प्रोसेस क्वालिटी निगरानी",
      backBtn: "IPQC पर वापस जाएं",
      hero: {
        definition: "लाइन प्रोसेस इंस्पेक्शन वह जांच है जो प्रोडक्शन के दौरान तय समय पर की जाती है ताकि ऑपरेटर, मशीन, मटेरियल और तरीका (Method) सब सही रहें।",
        objective: "लक्षय: गलती को शुरुआत में पकड़ना, रीवर्क कम करना और प्रोसेस को स्थिर रखना।"
      },
      criticalHub: {
        title: "क्रिटिकल पैरामीटर हब",
        desc: "इंडस्ट्रियल सटीकता के 3 मुख्य पिलर्स। जानकारी के लिए क्लिक करें।",
        items: [
          {
            id: "ctq",
            title: "CTQ",
            full: "Critical to Quality (क्वालिटी के लिए ज़रूरी)",
            target: "कस्टमर का ध्यान",
            desc: "वो माप या विशेषताएँ जो ग्राहक की संतुष्टि के लिए एकदम सही होनी चाहिए।",
            points: ["छेद का डायमीटर", "रंग का शेड", "फिनिशिंग की चमक", "पार्ट्स के बीच गैप"],
            icon: "💎",
            color: "cyan"
          },
          {
            id: "ctp",
            title: "CTP",
            full: "Critical to Process (प्रोसेस के लिए ज़रूरी)",
            target: "मशीन का ध्यान",
            desc: "मशीन की वो सेटिंग्स या पैरामीटर्स जिन्हें स्थिर रखना ज़रूरी है ताकि क्वालिटी (CTQ) बनी रहे।",
            points: ["ओवन का तापमान", "वेल्डिंग वोल्टेज", "टॉर्क की वैल्यू", "इंजेक्शन प्रेशर"],
            icon: "⚙️",
            color: "indigo"
          },
          {
            id: "cts",
            title: "CTS",
            full: "Critical to Safety (सुरक्षा के लिए ज़रूरी)",
            target: "जोखिम का ध्यान",
            desc: "वो पैरामीटर्स जिनका सीधा असर यूजर या ऑपरेटर की सुरक्षा पर पड़ता है।",
            points: ["ब्रेक प्रेशर", "अर्थिंग की जांच", "इन्सुलेशन रेजिस्टेंस", "सेफ्टी इंटरलॉक्स"],
            icon: "🛡️",
            color: "rose"
          }
        ]
      },
      checks: [
        { title: "1. मैन (ऑपरेटर)", icon: "👤", items: ["SOP/WI का पालन", "सही ट्रेनिंग और हुनर", "PPE का सही उपयोग"] },
        { title: "2. मशीन (Machine)", icon: "⚙️", items: ["SOP के अनुसार सेटिंग", "जिग/फिक्स्चर की हालत", "टॉर्क और प्रेशर चेक"] },
        { title: "3. मटेरियल", icon: "📦", items: ["सही पार्ट और मॉडल", "मिक्स-अप से बचाव", "सिर्फ IQC पास माल"] },
        { title: "4. तरीका (Method)", icon: "📑", items: ["WI बोर्ड पर लगा हो", "सही क्रम (Sequence)", "पोका-योक चालू है"] }
      ],
      frequency: {
        title: "जांच का समय (Timeline)",
        steps: [
          { time: "शिफ्ट शुरू", task: "स्टार्ट-अप इंस्पेक्शन" },
          { time: "पहला पीस", task: "फर्स्ट पीस अप्रूवल" },
          { time: "समय-समय पर", task: "हर 1-2 घंटे में गश्त" },
          { time: "बदलाव के बाद", task: "ब्रेकडाउन के बाद चेक" }
        ]
      },
      checklist: ["सही मटेरियल", "मशीन सेटिंग ठीक", "माप सही (OK)", "दिखावट ठीक", "नियम का पालन"]
    }
  };

  const current = content[lang];

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

      {/* Hero Definition */}
      <div className="bg-slate-900/60 border border-cyan-500/20 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-cyan-500/[0.03] select-none uppercase italic tracking-tighter">Patrol</div>
         <div className="relative z-10 space-y-6">
            <div className="space-y-3">
               <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-widest border-b-2 border-cyan-500 w-fit pb-2">Process Guardian</h4>
               <p className="text-slate-300 text-sm md:text-xl font-bold leading-relaxed max-w-4xl italic">
                  "{current.hero.definition}"
               </p>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/30 p-4 rounded-2xl inline-block">
               <p className="text-cyan-400 font-black text-xs md:text-sm uppercase tracking-wider">{current.hero.objective}</p>
            </div>
         </div>
      </div>

      {/* NEW SECTION: CTQ, CTP, CTS Hub */}
      <div className="space-y-8">
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
               <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter italic">{current.criticalHub.title}</h4>
               <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">{current.criticalHub.desc}</p>
            </div>
            <div className="bg-indigo-500/10 px-4 py-2 rounded-xl border border-indigo-500/30 text-indigo-400 text-[9px] font-black uppercase tracking-widest animate-pulse">Precision Mode Enabled</div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {current.criticalHub.items.map((item) => (
               <div 
                  key={item.id}
                  onClick={() => setSelectedCriticalParam(selectedCriticalParam === item.id ? null : item.id)}
                  className={`bg-slate-950/60 border p-8 rounded-[40px] cursor-pointer transition-all group relative overflow-hidden flex flex-col gap-6 shadow-2xl ${selectedCriticalParam === item.id ? `border-${item.color}-500 ring-2 ring-${item.color}-500/20 bg-slate-900` : 'border-white/5 hover:border-white/20'}`}
               >
                  <div className="flex items-center justify-between relative z-10">
                     <div className={`w-14 h-14 bg-slate-900 border border-${item.color}-500/30 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                        {item.icon}
                     </div>
                     <span className={`text-[10px] font-black text-${item.color}-400 uppercase tracking-widest border border-${item.color}-500/30 px-3 py-1 rounded-full`}>{item.target}</span>
                  </div>

                  <div className="space-y-1 relative z-10">
                     <h5 className={`text-3xl font-black uppercase tracking-tighter text-${item.color}-400`}>{item.title}</h5>
                     <p className="text-white text-xs font-black uppercase tracking-widest opacity-60">{item.full}</p>
                  </div>

                  {selectedCriticalParam === item.id && (
                     <div className="animate-in slide-in-from-top-2 duration-300 space-y-6 pt-6 border-t border-white/5 relative z-10">
                        <p className="text-slate-300 text-sm font-bold leading-relaxed italic">"{item.desc}"</p>
                        <div className="space-y-3">
                           <span className={`text-[8px] font-black text-${item.color}-500 uppercase tracking-widest`}>Checklist / मुख्य बिंदु:</span>
                           <div className="grid grid-cols-1 gap-2">
                              {item.points.map((p, idx) => (
                                 <div key={idx} className="flex items-center gap-3 p-2.5 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-all">
                                    <div className={`w-1.5 h-1.5 bg-${item.color}-500 rounded-full`}></div>
                                    <span className="text-slate-200 text-[10px] font-bold uppercase">{p}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  )}

                  {!selectedCriticalParam && (
                    <div className="flex items-center gap-2 text-white/40 text-[8px] font-black uppercase tracking-widest animate-pulse group-hover:text-white transition-colors">
                      Learn More <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  )}

                  <div className={`absolute -bottom-4 -right-4 text-7xl font-black text-white/[0.01] select-none uppercase italic transition-colors ${selectedCriticalParam === item.id ? 'text-white/[0.03]' : ''}`}>{item.id}</div>
               </div>
            ))}
         </div>
      </div>

      {/* 4 Pillars Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {current.checks.map((check, i) => (
           <div key={i} className="bg-slate-950/40 border border-white/5 p-6 rounded-[32px] hover:border-cyan-500/30 transition-all group flex flex-col gap-4 shadow-xl">
              <div className="flex items-center justify-between">
                 <div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    {check.icon}
                 </div>
                 <div className="h-0.5 w-6 bg-cyan-500/20 rounded-full"></div>
              </div>
              <h5 className="text-white font-black text-sm md:text-base uppercase tracking-tight leading-tight group-hover:text-cyan-400 transition-colors">{check.title}</h5>
              <div className="space-y-2">
                 {check.items.map((item, idx) => (
                   <div key={idx} className="flex items-center gap-3 text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-tighter">
                      <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                      {item}
                   </div>
                 ))}
              </div>
           </div>
         ))}
      </div>

      {/* Frequency Timeline Section */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-10 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-6 text-5xl font-black text-white/5 select-none uppercase italic">Schedule</div>
         <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4">
            <span className="w-12 h-0.5 bg-cyan-500 shadow-[0_0_10px_cyan]"></span>
            {current.frequency.title}
         </h4>
         
         <div className="relative space-y-8">
            <div className="absolute top-0 bottom-0 left-[19px] w-0.5 bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent"></div>
            {current.frequency.steps.map((step, i) => (
               <div key={i} className="flex items-center gap-8 group/step relative z-10">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 text-[10px] font-black group-hover/step:bg-cyan-500 group-hover/step:text-white transition-all shadow-lg">
                     {i + 1}
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[8px] font-black text-cyan-500 uppercase tracking-widest">{step.time}</span>
                     <span className="text-white text-sm font-black uppercase tracking-tight">{step.task}</span>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 backdrop-blur-xl">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,1)] animate-pulse"></span>
                Patrol Status: Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
                Standard: v6.5.2 Secured
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest">Industrial Hub // Advanced Process Node</div>
      </div>
    </div>
  );
};

export default LineProcessDetail;

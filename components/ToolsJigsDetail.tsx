
import React from 'react';
import { Language } from '../types';

interface ToolsJigsDetailProps {
  onBack: () => void;
  lang: Language;
}

const ToolsJigsDetail: React.FC<ToolsJigsDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Tools, Jigs & Fixtures",
      subtitle: "Manufacturing Aids & Error Proofing",
      backBtn: "Back to Engineering",
      hero: {
        question: "What are Tools, Jigs & Fixtures?",
        desc: "These are specialized manufacturing aids designed to make work easy, fast, accurate, and to prevent human mistakes (Poka-Yoke).",
        mantra: "Better Tools = Easier Work + Zero Defects."
      },
      pillars: [
        {
          id: 1,
          title: "Fixture Design",
          tag: "Precision Holding",
          desc: "A system to hold the part in the exact same position every time.",
          details: [
            "Prevents movement/misalignment",
            "Ensures repeatable accuracy",
            "Frees operator's hands for work"
          ],
          example: "Example: Holding a cabinet steady while drilling so the holes never shift.",
          icon: "🏗️"
        },
        {
          id: 2,
          title: "Poka-Yoke Jigs",
          tag: "Mistake Proofing",
          desc: "Jigs that make it impossible to make a mistake.",
          details: [
            "Part only fits in one direction",
            "Missing part detection (Sensors)",
            "Step-skipping prevention"
          ],
          example: "Example: A guide pin that stops you from putting the label upside down.",
          icon: "🧩"
        },
        {
          id: 3,
          title: "Tool Maintenance",
          tag: "Lifecycle Care",
          desc: "Keeping every aid in perfect working condition.",
          details: [
            "Regular inspection & cleaning",
            "Calibration (Torque/Gauges)",
            "Wear & damage replacement plan"
          ],
          example: "Example: Recalibrating a digital wrench every week to ensure correct tightness.",
          icon: "🔧"
        }
      ],
      impact: {
        title: "Operational Impact Matrix",
        headers: ["Operational Area", "Effect Result"],
        rows: [
          { area: "Productivity", effect: "Increased (Fast Work)", color: "emerald" },
          { area: "Quality", effect: "Stable (No Variation)", color: "blue" },
          { area: "Error Rate", effect: "Reduced (Mistake Proof)", color: "cyan" },
          { area: "Safety", effect: "Improved (Less Force)", color: "indigo" },
          { area: "Rework", effect: "Reduced (Right 1st Time)", color: "rose" }
        ]
      }
    },
    hi: {
      title: "टूल्स, जिग्स और फिक्स्चर",
      subtitle: "मैन्युफैक्चरिंग एड्स और गलती की रोकथाम",
      backBtn: "वापस जाएं",
      hero: {
        question: "Tools, Jigs & Fixtures क्या होते हैं?",
        desc: "ये वो मददगार उपकरण हैं जो काम को आसान, तेज़ और सटीक बनाते हैं और मानवीय गलतियों (Human Mistakes) को रोकते हैं।",
        mantra: "बेहतर टूल = आसान काम + जीरो डिफेक्ट।"
      },
      pillars: [
        {
          id: 1,
          title: "फिक्स्चर डिज़ाइन",
          tag: "सटीक पकड़",
          desc: "पार्ट को हर बार बिल्कुल सही और एक ही स्थिति में पकड़ने का सिस्टम।",
          details: [
            "पार्ट को हिलने या तिरछा होने से रोकता है",
            "हर बार एक जैसी सटीकता (Accuracy) देता है",
            "काम के दौरान हाथ फ्री रखता है"
          ],
          example: "उदाहरण: ड्रिलिंग के समय पार्ट को मजबूती से पकड़ना ताकि छेद गलत न हो।",
          icon: "🏗️"
        },
        {
          id: 2,
          title: "पोका-योक जिग्स",
          tag: "गलती की रोकथाम",
          desc: "ऐसे जिग्स जो गलती होने की गुंजाइश को ही खत्म कर देते हैं।",
          details: [
            "पार्ट सिर्फ एक ही दिशा में फिट होगा",
            "पार्ट गायब होने पर सेंसर पकड़ लेगा",
            "प्रोसेस स्टेप्स मिस नहीं होने देता"
          ],
          example: "उदाहरण: ऐसी पिन लगाना जिससे स्टिकर कभी उल्टा न लग सके।",
          icon: "🧩"
        },
        {
          id: 3,
          title: "टूल मेंटेनेंस",
          tag: "सही देखभाल",
          desc: "हर टूल को हमेशा काम करने की बेहतरीन स्थिति में रखना।",
          details: [
            "नियमित सफाई और जांच",
            "कैलिब्रेशन (टॉर्क/गेज की सटीकता)",
            "पुराने या खराब टूल को समय पर बदलना"
          ],
          example: "उदाहरण: हर हफ्ते टॉर्क रिंच को चेक करना ताकि पेंच सही टाइट हों।",
          icon: "🔧"
        }
      ],
      impact: {
        title: "प्रोडक्शन पर असर (Impact Matrix)",
        headers: ["कार्यक्षेत्र", "सुधार का नतीजा"],
        rows: [
          { area: "प्रोडक्टिविटी", effect: "बढ़ोतरी (तेज़ काम)", color: "emerald" },
          { area: "क्वालिटी", effect: "स्थिर (एक जैसा काम)", color: "blue" },
          { area: "गलती की दर", effect: "कमी (पोका-योक)", color: "cyan" },
          { area: "सुरक्षा (Safety)", effect: "सुधार (सुरक्षित काम)", color: "indigo" },
          { area: "रीवर्क", effect: "कमी (पहली बार में सही)", color: "rose" }
        ]
      }
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-cyan-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_12px_cyan]"></div>
              <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono">Aids & Fixtures</h3>
        </div>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-cyan-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Blueprint</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-cyan-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-cyan-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">
            "{current.hero.mantra}"
         </div>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {current.pillars.map((p) => (
            <div key={p.id} className="bg-slate-950/60 border border-white/5 p-8 rounded-[40px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden h-full">
               <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-slate-900 border border-cyan-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                     {p.icon}
                  </div>
                  <span className="text-cyan-500 font-black text-[10px] uppercase tracking-widest border border-cyan-500/30 px-3 py-1 rounded-full">{p.tag}</span>
               </div>

               <div className="space-y-2">
                  <h5 className="text-white text-xl font-black uppercase tracking-tight group-hover:text-cyan-400 transition-colors">0{p.id}. {p.title}</h5>
                  <p className="text-slate-400 text-xs font-bold leading-relaxed italic">"{p.desc}"</p>
               </div>

               <div className="space-y-3 pt-4 border-t border-white/5">
                  <div className="grid grid-cols-1 gap-2">
                     {p.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-[10px] text-slate-300 font-black uppercase tracking-tight">
                           <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                           {detail}
                        </div>
                     ))}
                  </div>
               </div>

               <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl mt-auto">
                  <p className="text-white text-[10px] font-bold italic leading-tight">📌 {p.example}</p>
               </div>
            </div>
         ))}
      </div>

      {/* Impact Matrix Table */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl overflow-hidden backdrop-blur-xl">
         <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
            <span className="w-10 h-1 bg-cyan-500 shadow-[0_0_12px_cyan]"></span>
            {current.impact.title}
         </h4>
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="border-b border-white/10">
                     {current.impact.headers.map((h, i) => (
                        <th key={i} className={`py-4 text-[10px] font-black uppercase tracking-widest ${i === 0 ? 'text-slate-500' : 'text-cyan-400'}`}>{h}</th>
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

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-[0_0_12px_cyan] animate-pulse"></span>
                Asset Engine: Connected
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Tool Engineering v2.1 // System Standard</div>
      </div>
    </div>
  );
};

export default ToolsJigsDetail;

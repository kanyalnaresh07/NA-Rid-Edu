
import React from 'react';
import { Language } from '../types';

interface KaizenPokaYokeDetailProps {
  onBack: () => void;
  lang: Language;
}

const KaizenPokaYokeDetail: React.FC<KaizenPokaYokeDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Kaizen & Poka-Yoke",
      subtitle: "Continuous Improvement & Zero Defect Strategy",
      backBtn: "Back",
      kaizen: {
        header: "What is Kaizen?",
        meaning: "Continuous Improvement (Step-by-step progress every day)",
        pointsTitle: "What happens in Kaizen?",
        points: [
          "Small daily improvements",
          "Value employee suggestions",
          "Improve Safety, Quality & Productivity",
          "Cost and loss reduction"
        ],
        examplesTitle: "Practical Examples",
        examples: [
          { title: "Tool Placement", desc: "Keeping tools close to the workstation → Reduces unnecessary movement.", icon: "🔧" },
          { title: "Process optimization", desc: "Reducing extra steps in a process → Saves valuable time.", icon: "⚡" }
        ],
        summary: "Kaizen = Small change, Big impact"
      },
      pokaYoke: {
        header: "What is Poka-Yoke?",
        meaning: "Mistake Proofing (Don't let mistakes happen)",
        pointsTitle: "What happens in Poka-Yoke?",
        points: [
          "Prevent wrong assembly",
          "Avoid skipping process steps",
          "Control human error physically",
          "Stop defects at the source"
        ],
        examplesTitle: "Practical Examples",
        examples: [
          { title: "Directional Fit", desc: "Designing parts so they only fit in one specific direction.", icon: "🧩" },
          { title: "Sensor Detection", desc: "Using sensors or jigs to detect a missing screw immediately.", icon: "🚨" }
        ],
        summary: "Poka-Yoke = Error prevention"
      },
      comparison: {
        title: "Kaizen vs Poka-Yoke Matrix",
        headers: ["Point", "Kaizen", "Poka-Yoke"],
        rows: [
          { p: "Meaning", k: "Continuous improvement", py: "Error proofing" },
          { p: "Focus", k: "Overall process", py: "Human error" },
          { p: "Change Type", k: "Small & ongoing", py: "Design/System based" },
          { p: "Result", k: "Efficiency ↑", py: "Defect ↓" }
        ]
      }
    },
    hi: {
      title: "काइज़न और पोका-योक",
      subtitle: "निरंतर सुधार और जीरो डिफेक्ट तकनीक",
      backBtn: "वापस",
      kaizen: {
        header: "Kaizen (काइज़न) क्या है?",
        meaning: "Continuous Improvement (रोज थोड़ा-थोड़ा सुधार)",
        pointsTitle: "काइज़न में क्या होता है?",
        points: [
          "छोटे-छोटे सुधार (Small improvements)",
          "कर्मचारियों के सुझाव (Employee suggestions)",
          "सेफ्टी, क्वालिटी और प्रोडक्टिविटी में सुधार",
          "लागत और नुकसान (Cost & Loss) में कमी"
        ],
        examplesTitle: "आसान उदाहरण (Example)",
        examples: [
          { title: "टूल मैनेजमेंट", desc: "टूल को पास रखना → जिससे फालतू मूवमेंट कम हो।", icon: "🔧" },
          { title: "स्टेप रिडक्शन", desc: "प्रोसेस के फालतू स्टेप्स हटाना → जिससे समय बचे।", icon: "⚡" }
        ],
        summary: "काइज़न = छोटा बदलाव, बड़ा असर (Small change, Big impact)"
      },
      pokaYoke: {
        header: "Poka-Yoke (पोका-योक) क्या है?",
        meaning: "Mistake Proofing (गलती होने ही ना देना)",
        pointsTitle: "पोका-योक में क्या होता है?",
        points: [
          "गलत असेंबली रोकना (Wrong assembly prevent)",
          "प्रोसेस स्टेप्स मिस होने से बचाना",
          "मानवीय गलती पर नियंत्रण (Human error control)",
          "डिफेक्ट को पैदा होने से पहले रोकना"
        ],
        examplesTitle: "आसान उदाहरण (Example)",
        examples: [
          { title: "फिक्स्ड फिटिंग", desc: "पार्ट सिर्फ एक ही दिशा (Direction) में फिट होना।", icon: "🧩" },
          { title: "स्मार्ट सेंसर", desc: "सेंसर या जिग से छूटे हुए पेंच (Missing screw) को पकड़ना।", icon: "🚨" }
        ],
        summary: "पोका-योक = गलती की रोकथाम (Error prevention)"
      },
      comparison: {
        title: "काइज़न बनाम पोका-योक (अंतर)",
        headers: ["बिंदु", "काइज़न", "पोका-योक"],
        rows: [
          { p: "मतलब", k: "लगातार सुधार", py: "गलती की रोकथाम" },
          { p: "ध्यान (Focus)", k: "पूरा प्रोसेस", py: "मानवीय गलती" },
          { p: "बदलाव", k: "छोटा और निरंतर", py: "डिज़ाइन/सिस्टम आधारित" },
          { p: "परिणाम", k: "एफिशिएंसी (क्षमता) ↑", py: "डिफेक्ट (कमी) ↓" }
        ]
      }
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-6xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-purple-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(168,85,247,0.8)]"></div>
              <span className="text-purple-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg">{current.title}</h3>
        </div>
        <button 
          onClick={onBack}
          className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </button>
      </div>

      {/* Kaizen Section */}
      <div className="bg-slate-900/60 border border-purple-500/20 rounded-[40px] p-8 md:p-12 shadow-2xl space-y-8 relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-purple-500/[0.03] select-none uppercase italic">Kaizen</div>
         
         <div className="relative z-10 space-y-4">
            <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter">{current.kaizen.header}</h4>
            <div className="inline-block px-5 py-2 bg-purple-500/10 border border-purple-500/30 rounded-xl text-purple-400 font-black text-xs md:text-lg uppercase italic">
               {current.kaizen.meaning}
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
            <div className="space-y-6">
               <h5 className="text-purple-300 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                  <span className="w-8 h-px bg-purple-500"></span>
                  {current.kaizen.pointsTitle}
               </h5>
               <div className="space-y-3">
                  {current.kaizen.points.map((p, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-950/40 border border-white/5 rounded-2xl group hover:border-purple-500/30 transition-all">
                       <div className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_8px_purple]"></div>
                       <span className="text-slate-200 text-sm md:text-base font-bold">{p}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="space-y-6">
               <h5 className="text-purple-300 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                  <span className="w-8 h-px bg-purple-500"></span>
                  {current.kaizen.examplesTitle}
               </h5>
               <div className="grid grid-cols-1 gap-4">
                  {current.kaizen.examples.map((ex, i) => (
                    <div key={i} className="bg-slate-950/60 p-5 rounded-3xl border border-white/5 flex items-center gap-5 group hover:bg-slate-800 transition-all">
                       <div className="w-14 h-14 bg-slate-900 border border-purple-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                          {ex.icon}
                       </div>
                       <div>
                          <h6 className="text-white font-black text-xs md:text-sm uppercase tracking-tight mb-1">{ex.title}</h6>
                          <p className="text-slate-400 text-[11px] md:text-xs font-bold leading-relaxed">{ex.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="bg-purple-500/10 border-2 border-dashed border-purple-500/20 p-6 rounded-3xl text-center relative z-10">
            <p className="text-sm md:text-xl text-purple-400 font-black uppercase tracking-widest italic animate-pulse">
               "{current.kaizen.summary}"
            </p>
         </div>
      </div>

      {/* Poka-Yoke Section */}
      <div className="bg-slate-900/60 border border-emerald-500/20 rounded-[40px] p-8 md:p-12 shadow-2xl space-y-8 relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-emerald-500/[0.03] select-none uppercase italic">Mistake</div>
         
         <div className="relative z-10 space-y-4">
            <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter">{current.pokaYoke.header}</h4>
            <div className="inline-block px-5 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 font-black text-xs md:text-lg uppercase italic">
               {current.pokaYoke.meaning}
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
            <div className="space-y-6">
               <h5 className="text-emerald-300 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                  <span className="w-8 h-px bg-emerald-500"></span>
                  {current.pokaYoke.pointsTitle}
               </h5>
               <div className="space-y-3">
                  {current.pokaYoke.points.map((p, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-950/40 border border-white/5 rounded-2xl group hover:border-emerald-500/30 transition-all">
                       <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_emerald]"></div>
                       <span className="text-slate-200 text-sm md:text-base font-bold">{p}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="space-y-6">
               <h5 className="text-emerald-300 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                  <span className="w-8 h-px bg-emerald-500"></span>
                  {current.pokaYoke.examplesTitle}
               </h5>
               <div className="grid grid-cols-1 gap-4">
                  {current.pokaYoke.examples.map((ex, i) => (
                    <div key={i} className="bg-slate-950/60 p-5 rounded-3xl border border-white/5 flex items-center gap-5 group hover:bg-slate-800 transition-all">
                       <div className="w-14 h-14 bg-slate-900 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                          {ex.icon}
                       </div>
                       <div>
                          <h6 className="text-white font-black text-xs md:text-sm uppercase tracking-tight mb-1">{ex.title}</h6>
                          <p className="text-slate-400 text-[11px] md:text-xs font-bold leading-relaxed">{ex.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="bg-emerald-500/10 border-2 border-dashed border-emerald-500/20 p-6 rounded-3xl text-center relative z-10">
            <p className="text-sm md:text-xl text-emerald-400 font-black uppercase tracking-widest italic animate-pulse">
               "{current.pokaYoke.summary}"
            </p>
         </div>
      </div>

      {/* Comparison Table Section */}
      <div className="bg-slate-900/60 border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl overflow-hidden backdrop-blur-xl">
         <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
            <span className="w-10 h-1 bg-cyan-500"></span>
            {current.comparison.title}
         </h4>
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="border-b border-white/10">
                     {current.comparison.headers.map((h, i) => (
                        <th key={i} className={`py-4 text-[10px] font-black uppercase tracking-widest ${i === 0 ? 'text-slate-500' : i === 1 ? 'text-purple-400' : 'text-emerald-400'}`}>{h}</th>
                     ))}
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {current.comparison.rows.map((row, i) => (
                     <tr key={i} className="group hover:bg-white/5 transition-colors">
                        <td className="py-6 text-white font-black text-xs md:text-sm uppercase tracking-tight">{row.p}</td>
                        <td className="py-6 text-purple-300 font-bold text-xs md:text-sm">{row.k}</td>
                        <td className="py-6 text-emerald-300 font-bold text-xs md:text-sm">{row.py}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,1)]"></span>
                Kaizen Engine: Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
                Poka-Yoke: Enabled
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest">Industrial Hub v5.6 // Excellence & Zero Defect Node</div>
      </div>
    </div>
  );
};

export default KaizenPokaYokeDetail;

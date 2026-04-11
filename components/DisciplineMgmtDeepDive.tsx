
import React from 'react';
import { Language } from '../types';

interface DisciplineMgmtDeepDiveProps {
  onBack: () => void;
  lang: Language;
}

const DisciplineMgmtDeepDive: React.FC<DisciplineMgmtDeepDiveProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Discipline & Compliance",
      subtitle: "Professional Ethics & Safety Standards",
      backBtn: "Back to HR",
      hero: {
        question: "What is Discipline & Compliance?",
        desc: "Ensuring factory rules, safety norms, and code of conduct are followed so the workplace stays safe, respectful, and productive.",
        simple: "Simple words: 'Follow the rules, behave professionally.'",
        mantra: "Discipline is the bridge between goals and accomplishment."
      },
      pillars: [
        {
          id: 1,
          title: "Factory Rules",
          tag: "Standardization",
          desc: "Applying company rules on the ground level.",
          points: [
            "ID Card & Dress Code (Uniform)",
            "Shift timing discipline",
            "SOP & Safety rule enforcement",
            "Visual Do’s & Don’ts boards"
          ],
          purpose: "Ensure uniform behavior and total clarity for everyone.",
          icon: "📜",
          color: "fuchsia"
        },
        {
          id: 2,
          title: "Time & Misconduct",
          tag: "Punctuality",
          desc: "Controlling attendance and behavior issues.",
          points: [
            "Late coming tracking & records",
            "Unauthorized absence control",
            "Misconduct (Arguments/Abuse) inquiry",
            "Penalty/Action as per policy"
          ],
          purpose: "Maintain a professional and timely work culture.",
          icon: "⚖️",
          color: "rose"
        },
        {
          id: 3,
          title: "Safety & Behavior",
          tag: "Zero Harm",
          desc: "Making safe behavior mandatory for all.",
          points: [
            "Compulsory PPE usage checks",
            "Reporting Unsafe Acts/Conditions",
            "Behavior-Based Safety (BBS)",
            "Safety violation management"
          ],
          purpose: "Prevent accidents and build a zero-harm culture.",
          icon: "⛑️",
          color: "orange"
        },
        {
          id: 4,
          title: "Warning & Counselling",
          tag: "Improvement",
          desc: "Maintaining discipline through a corrective approach.",
          points: [
            "Verbal Warning (First mistake)",
            "Written Warning (Repeat issue)",
            "Counselling (Understand root cause)",
            "Disciplinary Action (Last option)"
          ],
          purpose: "Focus on improvement; punishment is only the last resort.",
          icon: "🤝",
          color: "violet"
        }
      ],
      summary: "Compliance is not about control; it is about creating a safe and respected environment for every worker."
    },
    hi: {
      title: "अनुशासन और अनुपालन (Discipline)",
      subtitle: "पेशेवर नैतिकता और सुरक्षा मानक",
      backBtn: "HR पर वापस जाएं",
      hero: {
        question: "Discipline & Compliance क्या होता है?",
        desc: "फैक्ट्री के नियमों, सुरक्षा मानकों और आचरण (Code of Conduct) का पालन करवाना, ताकि काम करने की जगह सुरक्षित, सम्मानजनक और मेहनती बनी रहे।",
        simple: "आसान शब्दों में: 'नियमों का पालन हो, व्यवहार सही रहे।' (Sahi behavior)",
        mantra: "अनुशासन ही सफलता की असली बुनियाद है।"
      },
      pillars: [
        {
          id: 1,
          title: "फैक्ट्री नियमों को लागू करना",
          tag: "स्टैंडर्ड नियम",
          desc: "कंपनी के नियमों को ज़मीनी स्तर पर अपनाना।",
          points: [
            "ID कार्ड और ड्रेस कोड (यूनिफार्म)",
            "शिफ्ट के समय का पाबंद होना",
            "SOP और सुरक्षा नियमों का पालन",
            "क्या करें और क्या न करें (Do's & Don'ts)"
          ],
          purpose: "सबके लिए एक जैसे नियम और काम में स्पष्टता।",
          icon: "📜",
          color: "fuchsia"
        },
        {
          id: 2,
          title: "समय और दुर्व्यवहार कंट्रोल",
          tag: "समय की पाबंदी",
          desc: "देरी से आने और गलत व्यवहार पर रोक लगाना।",
          points: [
            "लेट आने वालों का रिकॉर्ड",
            "बिना बताए छुट्टी करने पर रोक",
            "गलत व्यवहार या लड़ाई-झगड़े की जांच",
            "पॉलिसी के हिसाब से एक्शन लेना"
          ],
          purpose: "फैक्ट्री में प्रोफेशनलिज्म और समय की कद्र बनाए रखना।",
          icon: "⚖️",
          color: "rose"
        },
        {
          id: 3,
          title: "सुरक्षा और व्यवहार",
          tag: "जीरो एक्सीडेंट",
          desc: "सुरक्षित काम करने के तरीके को आदत बनाना।",
          points: [
            "PPE (हेलमेट, जूते) पहनना अनिवार्य",
            "असुरक्षित काम या स्थिति की रिपोर्ट",
            "बिहेवियर-बेस्ड सेफ्टी (BBS)",
            "सुरक्षा नियमों के उल्लंघन पर रोक"
          ],
          purpose: "हादसों को रोकना और सुरक्षा की संस्कृति बनाना।",
          icon: "⛑️",
          color: "orange"
        },
        {
          id: 4,
          title: "चेतावनी और काउंसलिंग",
          tag: "सुधार का मौका",
          desc: "गलती सुधारने के तरीके से अनुशासन बनाए रखना।",
          points: [
            "मौखिक चेतावनी (Verbal) - पहली गलती",
            "लिखित चेतावनी - बार-बार गलती",
            "काउंसलिंग - जड़ (Root Cause) समझना",
            "एक्शन - जब सुधार की कोई गुंजाइश न हो"
          ],
          purpose: "सज़ा से ज्यादा सुधार (Improvement) पर ध्यान देना।",
          icon: "🤝",
          color: "violet"
        }
      ],
      summary: "अनुशासन का मतलब डर पैदा करना नहीं, बल्कि हर वर्कर के लिए एक सुरक्षित और सम्मानजनक माहौल बनाना है।"
    }
  };

  const current = content[lang] || content['en'];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-fuchsia-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-fuchsia-500 rounded-full animate-pulse shadow-[0_0_12px_fuchsia]"></div>
              <span className="text-fuchsia-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono italic">Pillar 04: Compliance</h2>
        </div>
        <button onClick={onBack} className="bg-fuchsia-700 hover:bg-fuchsia-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Definition */}
      <div className="bg-slate-900 border border-fuchsia-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Code of Conduct</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h3 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h3>
            <p className="text-fuchsia-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-fuchsia-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors">
            <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic mb-4">"⚖️ {current.hero.simple}"</p>
            <p className="text-fuchsia-500 text-[10px] font-black uppercase tracking-[0.6em] animate-pulse italic">"{current.hero.mantra}"</p>
         </div>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {current.pillars.map((p) => (
            <div key={p.id} className={`bg-slate-950/60 border border-white/5 p-8 rounded-[40px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden border-t-4 border-t-${p.color}-500/40`}>
               <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 bg-slate-900 border border-${p.color}-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>{p.icon}</div>
                  <span className={`text-${p.color}-500 font-black text-[9px] uppercase tracking-widest border border-${p.color}-500/30 px-3 py-1 rounded-full`}>{p.tag}</span>
               </div>

               <div className="space-y-1">
                  <h4 className="text-white text-xl font-black uppercase tracking-tight group-hover:text-fuchsia-400 transition-colors">0{p.id}. {p.title}</h4>
                  <p className="text-slate-500 text-[10px] font-bold leading-relaxed italic uppercase">"{p.desc}"</p>
               </div>

               <div className="space-y-3 pt-6 border-t border-white/5">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-4">Key Responsibilities / क्या होता है:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {p.points.map((point, idx) => (
                       <div key={idx} className="flex items-start gap-3 group/point">
                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-${p.color}-500/40 group-hover/point:bg-${p.color}-500 transition-colors`}></div>
                          <span className="text-slate-300 text-[10px] font-bold uppercase tracking-tight leading-tight group-hover:text-white transition-colors">{point}</span>
                       </div>
                    ))}
                  </div>
               </div>

               <div className={`mt-auto bg-${p.color}-500/10 border border-${p.color}-500/20 p-5 rounded-2xl`}>
                  <span className={`text-${p.color}-500 text-[9px] font-black uppercase block mb-1`}>Core Objective / उद्देश्य:</span>
                  <p className="text-white text-[11px] font-bold italic leading-tight">📌 {p.purpose}</p>
               </div>
            </div>
         ))}
      </div>

      {/* Corrective Path Visualization */}
      <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl space-y-10 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-8 text-6xl font-black text-fuchsia-500/[0.03] select-none uppercase italic">Process</div>
         <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter italic flex items-center gap-4">
            <span className="w-12 h-1 bg-fuchsia-500 shadow-[0_0_10px_fuchsia]"></span>
            Disciplinary Correction Path
         </h3>
         <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden md:block"></div>
            {[
              { l: "Verbal", i: "🗣️", c: "fuchsia" },
              { l: "Written", i: "📝", c: "rose" },
              { l: "Counselling", i: "🛋️", c: "violet" },
              { l: "Action", i: "🔨", c: "slate" }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center gap-4 group">
                 <div className={`w-20 h-20 rounded-full bg-slate-950 border-4 border-${step.c}-500/40 flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 group-hover:border-${step.c}-500 transition-all`}>
                    {step.i}
                 </div>
                 <div className="text-center">
                    <span className={`text-[10px] font-black uppercase tracking-widest text-${step.c}-400`}>{step.l}</span>
                    <span className="block text-[8px] font-bold text-slate-400 uppercase">Stage 0{i+1}</span>
                 </div>
              </div>
            ))}
         </div>
         <div className="bg-fuchsia-500/10 p-6 rounded-3xl border border-dashed border-fuchsia-500/30 text-center">
            <p className="text-fuchsia-400 text-xs md:text-sm font-black uppercase italic tracking-widest">
               {lang === 'hi' ? '"हमेशा याद रखें: सुधार पहला कदम है, सज़ा आखरी।"' : '"Remember: Improvement is the priority; Action is the last resort."'}
            </p>
         </div>
      </div>

      {/* Summary Logic Footer */}
      <div className="bg-fuchsia-600 p-10 rounded-[48px] shadow-[0_0_50px_rgba(217,70,239,0.3)] text-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-700 via-fuchsia-600 to-fuchsia-700 animate-pulse opacity-50"></div>
         <div className="relative z-10 space-y-4">
            <h4 className="text-white/60 font-black text-[10px] uppercase tracking-[0.6em] mb-2">Technical Insight</h4>
            <p className="text-white text-lg md:text-2xl font-black italic tracking-tight leading-snug">
               "{current.summary}"
            </p>
         </div>
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-fuchsia-500 rounded-full shadow-[0_0_10px_fuchsia] animate-pulse"></span>
                Code Status: Compliant
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_emerald]"></span>
                Workplace Harmony: Online
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">HR-Node v14.4 // Compliance Module</div>
      </div>
    </div>
  );
};

export default DisciplineMgmtDeepDive;

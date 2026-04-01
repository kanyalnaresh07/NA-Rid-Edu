
import React, { useState } from 'react';
import { Language } from '../types';
import ManpowerMgmtDeepDive from './ManpowerMgmtDeepDive';
import AttendanceMgmtDeepDive from './AttendanceMgmtDeepDive';
import PayrollMgmtDeepDive from './PayrollMgmtDeepDive';
import DisciplineMgmtDeepDive from './DisciplineMgmtDeepDive';

interface HRAdminDetailProps {
  onBack: () => void;
  lang: Language;
}

const HRAdminDetail: React.FC<HRAdminDetailProps> = ({ onBack, lang }) => {
  const [selectedPillarId, setSelectedPillarId] = useState<number | null>(null);

  const content = {
    en: {
      title: "HR / Admin Hub",
      subtitle: "Human Capital & Factory Discipline",
      backBtn: "Back",
      hero: {
        question: "What is HR / Admin?",
        desc: "HR / Admin is the department that manages the entire lifecycle of manpower—from hiring to salary, attendance, and discipline—to ensure smooth factory operations.",
        simple: "Simple words: Managing the People.",
        mantra: "People are the most valuable asset of a factory."
      },
      pillars: [
        {
          id: 1,
          title: "Manpower Management",
          tag: "Right Placement",
          desc: "Right people, right place, right time.",
          points: [
            "Recruitment & Onboarding",
            "Skill mapping & Deployment",
            "Shift planning & Rotation",
            "Contractor manpower handling",
            "Training & Development"
          ],
          purpose: "Ensure no line sits idle; maintain stable productivity.",
          icon: "👤",
          color: "purple",
          clickable: true
        },
        {
          id: 2,
          title: "Attendance Management",
          tag: "Tracking",
          desc: "Who came to work, who didn't.",
          points: [
            "Biometric / Register marking",
            "Shift-wise attendance tracking",
            "Leave & Absenteeism control",
            "Overtime (OT) recording"
          ],
          purpose: "Accurate manpower planning & precise payroll.",
          icon: "🕒",
          color: "indigo",
          clickable: true
        },
        {
          id: 3,
          title: "Payroll Management",
          tag: "Benefits",
          desc: "Processing salary and worker benefits.",
          points: [
            "Salary & OT calculation",
            "Incentive processing",
            "PF / ESI / Statutory deductions",
            "Payslip generation",
            "Contractor bill verification"
          ],
          purpose: "On-time, error-free salary payment.",
          icon: "💳",
          color: "violet",
          clickable: true
        },
        {
          id: 4,
          title: "Discipline & Compliance",
          tag: "Rules",
          desc: "Enforcing the factory code of conduct.",
          points: [
            "Factory rules implementation",
            "Late coming / Misconduct handling",
            "Safety & behavior discipline",
            "Warning / Counselling / Action"
          ],
          purpose: "Safe, respectful, and productive workplace.",
          icon: "⚖️",
          color: "fuchsia",
          clickable: true
        }
      ],
      summary: "HR / Admin ensures the 'Human Engine' of the factory is always ready and disciplined."
    },
    hi: {
      title: "HR / एडमिन हब",
      subtitle: "मानव संसाधन और फैक्ट्री अनुशासन",
      backBtn: "वापस",
      hero: {
        question: "HR / Admin क्या होता है?",
        desc: "HR / Admin वो विभाग है जो मैनपावर को मैनेज करता है—हायरिंग से लेकर सैलरी, हाज़िरी और अनुशासन तक, ताकि फैक्ट्री का काम बिना रुके चले।",
        simple: "आसान शब्दों में: 'लोगों को मैनेज करना' (Managing the People)।",
        mantra: "इंसान ही फैक्ट्री की असली ताकत हैं।"
      },
      pillars: [
        {
          id: 1,
          title: "मैनपावर मैनेजमेंट",
          tag: "सही तैनाती",
          desc: "सही व्यक्ति, सही जगह और सही समय पर।",
          points: [
            "भर्ती और जॉइनिंग (Recruitment)",
            "स्किल मैपिंग और काम सौंपना",
            "शिफ्ट प्लानिंग और रोटेशन",
            "कॉन्ट्रैक्टर मैनपावर हैंडलिंग",
            "ट्रेनिंग और विकास"
          ],
          purpose: "लाइन खाली न रहे और प्रोडक्शन स्थिर बना रहे।",
          icon: "👤",
          color: "purple",
          clickable: true
        },
        {
          id: 2,
          title: "हाज़िरी मैनेजमेंट (Attendance)",
          tag: "ट्रैकिंग",
          desc: "कौन काम पर आया, कौन नहीं।",
          points: [
            "बायोमेट्रिक / रजिस्टर अटेंडेंस",
            "शिफ्ट-वाइज अटेंडेंस रिकॉर्ड",
            "छुट्टी और गैर-हाज़िरी पर कंट्रोल",
            "ओवरटाइम (OT) का सटीक रिकॉर्ड"
          ],
          purpose: "सटीक मैनपावर प्लानिंग और सही सैलरी के लिए ज़रूरी।",
          icon: "🕒",
          color: "indigo",
          clickable: true
        },
        {
          id: 3,
          title: "पेरोल मैनेजमेंट (Payroll)",
          tag: "सैलरी और लाभ",
          desc: "सैलरी और कर्मचारियों के फायदों का हिसाब।",
          points: [
            "सैलरी और OT की गणना",
            "इंसेंटिव (Incentive) का प्रोसेस",
            "PF / ESI और अन्य कटौती",
            "पे-स्लिप (Payslip) तैयार करना",
            "कॉन्ट्रैक्टर बिल वेरिफिकेशन"
          ],
          purpose: "समय पर और बिना किसी गलती के सैलरी भुगतान।",
          icon: "💳",
          color: "violet",
          clickable: true
        },
        {
          id: 4,
          title: "अनुशासन और नियम (Discipline)",
          tag: "नियम पालन",
          desc: "फैक्ट्री के नियमों का पालन करवाना।",
          points: [
            "फैक्ट्री रूल्स और कोड ऑफ कंडक्ट",
            "देरी से आने / दुर्व्यवहार पर रोक",
            "सुरक्षा और व्यवहार अनुशासन",
            "चेतावनी / काउंसलिंग / एक्शन"
          ],
          purpose: "सुरक्षित, सम्मानजनक और मेहनती माहौल बनाना।",
          icon: "⚖️",
          color: "fuchsia",
          clickable: true
        }
      ],
      summary: "HR / Admin सुनिश्चित करता है कि फैक्ट्री का 'ह्यूमन इंजन' हमेशा तैयार और अनुशासित रहे।"
    }
  };

  const current = content[lang] || content['en'];

  if (selectedPillarId === 1) {
    return <ManpowerMgmtDeepDive onBack={() => setSelectedPillarId(null)} lang={lang} />;
  }

  if (selectedPillarId === 2) {
    return <AttendanceMgmtDeepDive onBack={() => setSelectedPillarId(null)} lang={lang} />;
  }

  if (selectedPillarId === 3) {
    return <PayrollMgmtDeepDive onBack={() => setSelectedPillarId(null)} lang={lang} />;
  }

  if (selectedPillarId === 4) {
    return <DisciplineMgmtDeepDive onBack={() => setSelectedPillarId(null)} lang={lang} />;
  }

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-purple-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-[0_0_12px_purple]"></div>
              <span className="text-purple-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono italic">People Node</h3>
        </div>
        <button onClick={onBack} className="bg-purple-700 hover:bg-purple-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-purple-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Human Power</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-purple-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-purple-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors">
            <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic mb-4">"🤝 {current.hero.simple}"</p>
            <p className="text-purple-500 text-[10px] font-black uppercase tracking-[0.6em] animate-pulse italic">"{current.hero.mantra}"</p>
         </div>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {current.pillars.map((p) => (
            <div 
              key={p.id} 
              onClick={() => p.clickable && setSelectedPillarId(p.id)}
              className={`bg-slate-950/60 border border-white/5 p-8 rounded-[40px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden border-t-4 border-t-${p.color}-500/40 ${p.clickable ? 'cursor-pointer hover:border-purple-500/40' : ''}`}
            >
               <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 bg-slate-900 border border-${p.color}-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>{p.icon}</div>
                  <span className={`text-${p.color}-500 font-black text-[9px] uppercase tracking-widest border border-${p.color}-500/30 px-3 py-1 rounded-full`}>{p.tag}</span>
               </div>

               <div className="space-y-1">
                  <h5 className="text-white text-xl font-black uppercase tracking-tight group-hover:text-purple-400 transition-colors">0{p.id}. {p.title}</h5>
                  <p className="text-slate-500 text-[10px] font-bold leading-relaxed italic uppercase">"{p.desc}"</p>
               </div>

               {p.clickable && (
                 <div className="flex items-center gap-2 text-purple-400 text-[8px] font-black uppercase tracking-widest animate-pulse group-hover:text-white transition-colors">
                    Explore Deep Intel <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                 </div>
               )}

               <div className="space-y-3 pt-6 border-t border-white/5">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-4">Functional Elements / मुख्य कार्य:</span>
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
                  <span className={`text-${p.color}-500 text-[9px] font-black uppercase block mb-1`}>Purpose / उद्देश्य:</span>
                  <p className="text-white text-[11px] font-bold italic leading-tight">📌 {p.purpose}</p>
               </div>
            </div>
         ))}
      </div>

      {/* Summary Logic Footer */}
      <div className="bg-purple-600 p-10 rounded-[48px] shadow-[0_0_50px_rgba(168,85,247,0.3)] text-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 animate-pulse opacity-50"></div>
         <div className="relative z-10 space-y-4">
            <h5 className="text-white/60 font-black text-[10px] uppercase tracking-[0.6em] mb-2">Technical Summary</h5>
            <p className="text-white text-lg md:text-2xl font-black italic tracking-tight leading-snug">
               "{current.summary}"
            </p>
         </div>
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_purple] animate-pulse"></span>
                Manpower Ledger: Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_emerald]"></span>
                Compliance Node: Synced
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">HR-Framework v12.1 // People Operations Node</div>
      </div>
    </div>
  );
};

export default HRAdminDetail;

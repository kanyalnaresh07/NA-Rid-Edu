
import React from 'react';
import { Language } from '../types';

interface AttendanceMgmtDeepDiveProps {
  onBack: () => void;
  lang: Language;
}

const AttendanceMgmtDeepDive: React.FC<AttendanceMgmtDeepDiveProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Attendance Management",
      subtitle: "Time & Presence Intelligence",
      backBtn: "Back to HR",
      hero: {
        question: "What is Attendance Management?",
        desc: "Tracking which employee came to work, who is absent, and managing their specific shifts and timings.",
        simple: "Simple words: 'Who came, who didn't.'",
        mantra: "Every second counts, every presence matters."
      },
      pillars: [
        {
          id: 1,
          title: "Biometric & Register",
          tag: "The Record",
          desc: "Tamper-free attendance recording system.",
          points: [
            "Biometric Machine (Finger/Face ID)",
            "Manual Register (Backup/Contractor)",
            "In-time & Out-time capture",
            "Gate entry verification"
          ],
          purpose: "Accurate and honest attendance without errors.",
          icon: "☝️",
          color: "indigo"
        },
        {
          id: 2,
          title: "Shift-wise Tracking",
          tag: "Manpower Count",
          desc: "Real-time count of people available in a shift.",
          points: [
            "Shift-wise attendance sheets",
            "Line-wise manpower summary",
            "Headcount verification at shift start",
            "Identifying empty stations early"
          ],
          purpose: "Ensure no line stops due to missing operators.",
          icon: "📅",
          color: "blue"
        },
        {
          id: 3,
          title: "Leave & Absenteeism",
          tag: "Gap Management",
          desc: "Controlling planned and unplanned leaves.",
          points: [
            "Leave application & HOD approval",
            "Absentee trend analysis (Who is regular?)",
            "Replacement / Backup planning",
            "Emergency leave handling"
          ],
          purpose: "Avoid sudden manpower shortages on the floor.",
          icon: "🛑",
          color: "rose"
        },
        {
          id: 4,
          title: "Overtime (OT) Record",
          tag: "Extra Work",
          desc: "Proper record of extra hours worked.",
          points: [
            "OT hours approval process",
            "Actual vs Planned OT capture",
            "Direct linkage to Payroll/Salary",
            "Compliance with labor laws"
          ],
          purpose: "Ensure correct salary payment for extra effort.",
          icon: "💰",
          color: "emerald"
        }
      ],
      summary: "Attendance Management ensures that the 'Human Clock' of the factory is always accurate."
    },
    hi: {
      title: "हाज़िरी मैनेजमेंट",
      subtitle: "समय और उपस्थिति का हिसाब",
      backBtn: "HR पर वापस जाएं",
      hero: {
        question: "Attendance Management क्या होता है?",
        desc: "यह ट्रैक करना कि कौन कर्मचारी काम पर आया, कौन गैर-हाज़िर (Absent) रहा, और कौन किस समय/शिफ्ट में काम कर रहा है।",
        simple: "आसान शब्दों में: 'कौन आया, कौन नहीं।' (Attandance record)",
        mantra: "समय ही सबसे कीमती संसाधन है।"
      },
      pillars: [
        {
          id: 1,
          title: "बायोमेट्रिक और रजिस्टर",
          tag: "रिकॉर्ड",
          desc: "हाज़िरी दर्ज करने का पक्का और सुरक्षित सिस्टम।",
          points: [
            "बायोमेट्रिक मशीन (फिंगर/फेस ID)",
            "बैकअप के लिए मैन्युअल रजिस्टर",
            "आने और जाने का समय (In/Out Time)",
            "गेट एंट्री वेरिफिकेशन"
          ],
          purpose: "सटीक और बिना किसी गड़बड़ के हाज़िरी रिकॉर्ड करना।",
          icon: "☝️",
          color: "indigo"
        },
        {
          id: 2,
          title: "शिफ्ट-वाइज ट्रैकिंग",
          tag: "मैनपावर गिनती",
          desc: "हर शिफ्ट में मौजूद लोगों की असली संख्या जानना।",
          points: [
            "शिफ्ट के हिसाब से हाज़िरी शीट",
            "लाइन और विभाग के अनुसार गिनती",
            "डेली मैनपावर समरी रिपोर्ट",
            "खाली स्टेशन की तुरंत पहचान"
          ],
          purpose: "सही प्लानिंग ताकि काम न रुके और स्टेशन खाली न रहे।",
          icon: "📅",
          color: "blue"
        },
        {
          id: 3,
          title: "छुट्टी और गैर-हाज़िरी",
          tag: "कमी को रोकना",
          desc: "प्लान्ड और अचानक होने वाली छुट्टियों को मैनेज करना।",
          points: [
            "लीव एप्लिकेशन और अप्रूवल सिस्टम",
            "ज्यादा छुट्टी लेने वालों की पहचान",
            "बैकअप ऑपरेटर का इंतजाम",
            "इमरजेंसी में छुट्टी का मैनेजमेंट"
          ],
          purpose: "अचानक होने वाली मैनपावर की कमी से बचाव।",
          icon: "🛑",
          color: "rose"
        },
        {
          id: 4,
          title: "ओवरटाइम (OT) रिकॉर्ड",
          tag: "एक्स्ट्रा काम",
          desc: "एक्स्ट्रा काम का सटीक और सही हिसाब रखना।",
          points: [
            "OT के घंटों की मंजूरी (Approval)",
            "असली एक्स्ट्रा समय का रिकॉर्ड",
            "सैलरी सिस्टम से सीधा जुड़ाव",
            "कानूनी नियमों का पालन"
          ],
          purpose: "एक्स्ट्रा मेहनत के लिए सही और पूरी सैलरी पक्का करना।",
          icon: "💰",
          color: "emerald"
        }
      ],
      summary: "हाज़िरी मैनेजमेंट सुनिश्चित करता है कि फैक्ट्री की 'ह्यूमन क्लॉक' हमेशा सही समय पर चले।"
    }
  };

  const current = content[lang] || content['en'];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-indigo-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_12px_indigo]"></div>
              <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono italic">Pillar 02: Attendance</h3>
        </div>
        <button onClick={onBack} className="bg-indigo-700 hover:bg-indigo-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Definition */}
      <div className="bg-slate-900 border border-indigo-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Time Track</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-indigo-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-indigo-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors">
            <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic mb-4">"🕒 {current.hero.simple}"</p>
            <p className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.6em] animate-pulse italic">"{current.hero.mantra}"</p>
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
                  <h5 className="text-white text-xl font-black uppercase tracking-tight group-hover:text-indigo-400 transition-colors">0{p.id}. {p.title}</h5>
                  <p className="text-slate-500 text-[10px] font-bold leading-relaxed italic uppercase">"{p.desc}"</p>
               </div>

               <div className="space-y-3 pt-6 border-t border-white/5">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-4">What happens / क्या होता है:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {p.points.map((point, idx) => (
                       <div key={idx} className="flex items-start gap-3 group/point">
                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-${p.color}-500/40 group-hover/point:bg-${p.color}-500 transition-colors`}></div>
                          <span className="text-slate-300 text-[10px] font-bold uppercase tracking-tight leading-tight group-hover:point:text-white transition-colors">{point}</span>
                       </div>
                    ))}
                  </div>
               </div>

               <div className={`mt-auto bg-${p.color}-500/10 border border-${p.color}-500/20 p-5 rounded-2xl`}>
                  <span className={`text-${p.color}-500 text-[9px] font-black uppercase block mb-1`}>Critical Purpose / उद्देश्य:</span>
                  <p className="text-white text-[11px] font-bold italic leading-tight">📌 {p.purpose}</p>
               </div>
            </div>
         ))}
      </div>

      {/* Attendance Simulation Visual */}
      <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl space-y-8 relative overflow-hidden">
         <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter italic flex items-center gap-4">
            <span className="w-12 h-1 bg-indigo-500 shadow-[0_0_10px_indigo]"></span>
            Shift Presence Simulator
         </h4>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-950 p-6 rounded-3xl border border-white/5 flex flex-col items-center gap-4">
               <span className="text-emerald-500 font-black text-3xl">98%</span>
               <span className="text-slate-500 text-[8px] font-black uppercase tracking-widest text-center">Attendance Efficiency</span>
               <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[98%] h-full bg-emerald-500 shadow-[0_0_10px_emerald]"></div>
               </div>
            </div>
            <div className="bg-slate-950 p-6 rounded-3xl border border-white/5 flex flex-col items-center gap-4">
               <span className="text-indigo-400 font-black text-3xl">450</span>
               <span className="text-slate-500 text-[8px] font-black uppercase tracking-widest text-center">People In Shift A</span>
               <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-indigo-500 shadow-[0_0_10px_indigo]"></div>
               </div>
            </div>
            <div className="bg-slate-950 p-6 rounded-3xl border border-white/5 flex flex-col items-center gap-4">
               <span className="text-rose-500 font-black text-3xl">02</span>
               <span className="text-slate-500 text-[8px] font-black uppercase tracking-widest text-center">Critical Shortages</span>
               <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[10%] h-full bg-rose-500 shadow-[0_0_10px_rose] animate-pulse"></div>
               </div>
            </div>
         </div>
      </div>

      {/* Summary Logic Footer */}
      <div className="bg-indigo-600 p-10 rounded-[48px] shadow-[0_0_50px_rgba(79,70,229,0.3)] text-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-700 animate-pulse opacity-50"></div>
         <div className="relative z-10 space-y-4">
            <h5 className="text-white/60 font-black text-[10px] uppercase tracking-[0.6em] mb-2">Technical Insight</h5>
            <p className="text-white text-lg md:text-2xl font-black italic tracking-tight leading-snug">
               "{current.summary}"
            </p>
         </div>
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_indigo] animate-pulse"></span>
                Attendance Node: Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_emerald]"></span>
                Time Sync: Online
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">HR-Node v14.3 // Attendance Module</div>
      </div>
    </div>
  );
};

export default AttendanceMgmtDeepDive;


import React from 'react';
import { Language } from '../types';

interface ManpowerDetailProps {
  onBack: () => void;
  lang: Language;
}

const ManpowerDetail: React.FC<ManpowerDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Manpower Management",
      subtitle: "Human Capital Excellence",
      backBtn: "Back",
      hero: {
        title: "The Golden Rule of People",
        quote: "Right Person, Right Place, Right Time, with the Right Skills.",
        desc: "Strategic manpower handling ensures maximum productivity while keeping the team motivated and stress-free."
      },
      sections: {
        planning: "1. Planning & Mapping",
        allocation: "2. Strategic Allocation",
        development: "3. Training & Discipline",
        impact: "Operational Impact"
      },
      pillars: [
        {
          title: "Planning",
          tag: "Demand-Based",
          desc: "Calculating exactly how many people are needed based on Takt Time and UPH.",
          icon: "📊"
        },
        {
          title: "Skill Mapping",
          tag: "The Matrix",
          desc: "Developing 'Multi-Skill' operators who can handle multiple stations during absenteeism.",
          icon: "🎯"
        },
        {
          title: "Allocation",
          tag: "Smart Placement",
          desc: "Placing your best 'A-Grade' operators on Bottleneck stations to keep the line moving.",
          icon: "📍"
        }
      ],
      points: [
        { title: "Attendance Control", detail: "Daily tracking and keeping a 'Backup Pool' to avoid line stops." },
        { title: "Idle Time Control", detail: "Reshuffling staff instantly if a machine breaks down or material is short." },
        { title: "Performance Review", detail: "Monitoring UPH/UPPH and providing extra training to slow performers." },
        { title: "Motivation", detail: "Using appreciation and safe work practices to improve morale." }
      ],
      impactTable: [
        { area: "Productivity", effect: "Significant Increase", color: "emerald" },
        { area: "Quality", effect: "Stable & Reliable", color: "blue" },
        { area: "Idle Time", effect: "Major Reduction", color: "rose" },
        { area: "Line Stops", effect: "Fully Avoided", color: "amber" }
      ]
    },
    hi: {
      title: "मैनपावर हैंडलिंग",
      subtitle: "मानव संसाधन प्रबंधन",
      backBtn: "वापस",
      hero: {
        title: "सफल मैनपावर का सुनहरा नियम",
        quote: "सही व्यक्ति, सही जगह, सही समय और सही हुनर (Skill) के साथ।",
        desc: "सही मैनपावर हैंडलिंग से काम की रफ़्तार बढ़ती है और टीम का हौसला भी बना रहता है।"
      },
      sections: {
        planning: "1. प्लानिंग और मैपिंग",
        allocation: "2. सही जगह पर तैनाती",
        development: "3. ट्रेनिंग और अनुशासन",
        impact: "प्रोडक्शन पर असर"
      },
      pillars: [
        {
          title: "प्लानिंग",
          tag: "मांग के अनुसार",
          desc: "Takt Time और UPH के आधार पर तय करना कि कितने लोगों की ज़रूरत है।",
          icon: "📊"
        },
        {
          title: "स्किल मैपिंग",
          tag: "मल्टी-स्किलिंग",
          desc: "ऐसे ऑपरेटर तैयार करना जो एक से ज्यादा मशीनें चला सकें (बहुमुखी प्रतिभा)।",
          icon: "🎯"
        },
        {
          title: "एलोकेशन",
          tag: "स्मार्ट प्लेसमेंट",
          desc: "सबसे तेज़ ऑपरेटर को बॉटलनेक (धीमे पॉइंट) पर लगाना ताकि काम न रुके।",
          icon: "📍"
        }
      ],
      points: [
        { title: "हाजिरी नियंत्रण", detail: "डेली अटेंडेंस ट्रैक करना और छुट्टी होने पर बैकअप तैयार रखना।" },
        { title: "खाली समय (Idle) कंट्रोल", detail: "मशीन खराब होने पर मैनपावर को तुरंत दूसरी जगह शिफ्ट करना।" },
        { title: "परफॉरमेंस चेक", detail: "UPH/UPPH ट्रैक करना और कमज़ोर ऑपरेटर को एक्स्ट्रा ट्रेनिंग देना।" },
        { title: "अनुशासन और प्रेरणा", detail: "अच्छे काम की तारीफ करना और सुरक्षित तरीके से काम करवाना।" }
      ],
      impactTable: [
        { area: "प्रोडक्टिविटी", effect: "बड़ी बढ़ोतरी", color: "emerald" },
        { area: "क्वालिटी", effect: "स्थिर और बेहतर", color: "blue" },
        { area: "खाली समय (Idle)", effect: "भारी कमी", color: "rose" },
        { area: "लाइन स्टॉप", effect: "बिल्कुल खत्म", color: "amber" }
      ]
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-6xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-indigo-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(99,102,241,0.8)]"></div>
              <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg">{current.title}</h3>
        </div>
        <button 
          onClick={onBack}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Rule Card */}
      <div className="relative group">
         <div className="absolute inset-0 bg-indigo-600/10 blur-[60px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
         <div className="relative bg-slate-900/60 border border-indigo-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl backdrop-blur-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-10">
               <div className="lg:w-2/3 space-y-6">
                  <span className="bg-indigo-500/20 text-indigo-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/30">{current.hero.title}</span>
                  <h4 className="text-3xl md:text-5xl font-black text-white italic leading-[1.1] tracking-tighter">"{current.hero.quote}"</h4>
                  <p className="text-slate-300 text-base md:text-xl font-medium leading-relaxed max-w-2xl">{current.hero.desc}</p>
               </div>
               <div className="lg:w-1/3 flex justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-dashed border-indigo-500/20 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                     <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-indigo-500/5 flex items-center justify-center border border-indigo-500/10">
                        <div className="text-6xl md:text-8xl filter grayscale group-hover:grayscale-0 transition-all">👥</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {current.pillars.map((p, i) => (
           <div key={i} className="bg-slate-900/40 border border-white/5 p-8 rounded-[32px] hover:border-indigo-500/50 hover:bg-slate-800/60 transition-all duration-300 group shadow-lg">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{p.icon}</div>
              <div className="flex items-center justify-between mb-4">
                 <h5 className="text-white font-black text-lg uppercase tracking-tight">{p.title}</h5>
                 <span className="text-[8px] font-black text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded uppercase tracking-widest">{p.tag}</span>
              </div>
              <p className="text-slate-400 text-sm font-bold leading-relaxed">{p.desc}</p>
           </div>
         ))}
      </div>

      {/* Operational Points - Strategic List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
         <div className="bg-slate-900/60 border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8">
            <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4">
               <span className="w-12 h-0.5 bg-indigo-500"></span>
               Core Strategy Checklist
            </h4>
            <div className="space-y-4">
               {current.points.map((pt, i) => (
                 <div key={i} className="flex gap-5 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-indigo-500/10 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center text-indigo-400 font-black text-sm flex-shrink-0 border border-white/10 shadow-lg">
                       0{i+1}
                    </div>
                    <div>
                       <h6 className="text-white font-black text-xs md:text-sm uppercase tracking-tight mb-1">{pt.title}</h6>
                       <p className="text-slate-400 text-[11px] md:text-xs font-bold leading-relaxed">{pt.detail}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Impact Analysis Table */}
         <div className="bg-indigo-950/20 border border-indigo-500/20 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="flex flex-col gap-2">
               <h4 className="text-indigo-400 text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">{current.sections.impact}</h4>
               <p className="text-white text-xl font-black tracking-tight leading-none uppercase italic">The Production Catalyst</p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
               {current.impactTable.map((row, i) => (
                 <div key={i} className="flex items-center justify-between p-5 bg-slate-950/60 rounded-2xl border border-white/5 hover:scale-[1.02] transition-transform">
                    <span className="text-slate-300 font-black text-xs md:text-sm uppercase tracking-widest">{row.area}</span>
                    <div className="flex items-center gap-3">
                       <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/30`}>
                          {row.effect}
                       </span>
                       <svg className={`w-5 h-5 text-emerald-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                       </svg>
                    </div>
                 </div>
               ))}
            </div>

            <div className="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 text-center">
               <p className="text-[10px] md:text-xs text-indigo-200 font-black uppercase tracking-widest leading-relaxed">
                  "Efficiency is not just about machines; it starts with the heartbeat of your people."
               </p>
            </div>
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,1)]"></span>
                Human Resources Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
                Team Optimized
             </span>
          </div>
          <div className="opacity-60 italic">Industrial Hub v3.5 // Performance Node</div>
      </div>
    </div>
  );
};

export default ManpowerDetail;

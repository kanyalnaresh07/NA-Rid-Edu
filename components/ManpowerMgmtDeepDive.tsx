
import React from 'react';
import { Language } from '../types';

interface ManpowerMgmtDeepDiveProps {
  onBack: () => void;
  lang: Language;
}

const ManpowerMgmtDeepDive: React.FC<ManpowerMgmtDeepDiveProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Manpower Management",
      subtitle: "Human Capital Optimization",
      backBtn: "Back to HR",
      hero: {
        question: "What is Manpower Management?",
        desc: "Deploying people with the right skills, at the right place, and at the right time so production runs smoothly.",
        simple: "Simple words: Right people, right place, right time.",
        mantra: "A factory is built of machines, but it is run by people."
      },
      pillars: [
        {
          id: 1,
          title: "Recruitment & Onboarding",
          tag: "Hiring",
          desc: "Bringing new energy into the factory.",
          points: [
            "Requirement Planning (Kitne log chahiye?)",
            "Interview & Selection",
            "Joining Formalities & Docs",
            "Orientation (Rules & Safety training)"
          ],
          purpose: "Ensure the new person starts working productively from Day 1.",
          icon: "🤝",
          color: "purple"
        },
        {
          id: 2,
          title: "Skill Mapping & Deployment",
          tag: "Matching",
          desc: "Matching the person's talent to the right machine.",
          points: [
            "Creating a Skill Matrix (Who knows what?)",
            "Multi-skill development",
            "Right person on the Bottleneck station",
            "Operator grade assignment (A, B, C)"
          ],
          purpose: "Improve quality and reduce rework by avoiding wrong placement.",
          icon: "🎯",
          color: "indigo"
        },
        {
          id: 3,
          title: "Shift Planning & Rotation",
          tag: "Scheduling",
          desc: "Managing the 24/7 factory heartbeat.",
          points: [
            "Shift Roster (Duty Chart)",
            "Weekly/Monthly rotation",
            "Overtime (OT) management",
            "Absentee backup planning"
          ],
          purpose: "Reduce fatigue and maintain stable attendance.",
          icon: "🕒",
          color: "violet"
        },
        {
          id: 4,
          title: "Contractor Manpower",
          tag: "External Team",
          desc: "Managing third-party or contract workers.",
          points: [
            "Contractor agreement & compliance",
            "Attendance & Wage verification",
            "Specific safety training for contractors",
            "Discipline & behavior control"
          ],
          purpose: "Legal safety + maintaining factory productivity standards.",
          icon: "🏢",
          color: "fuchsia"
        },
        {
          id: 5,
          title: "Training & Development",
          tag: "Growth",
          desc: "Improving skills and making people smarter.",
          points: [
            "Induction (Starting) training",
            "Process & Machine-specific training",
            "Quality & Safety refresher courses",
            "Upskilling (Helper to Operator)"
          ],
          purpose: "Increase speed, decrease errors, and build a master team.",
          icon: "📚",
          color: "pink"
        }
      ],
      summary: "Manpower Management is about treating every worker as a key pillar of the factory's success."
    },
    hi: {
      title: "मैनपावर मैनेजमेंट",
      subtitle: "मानव संसाधन का सही उपयोग",
      backBtn: "HR पर वापस जाएं",
      hero: {
        question: "Manpower Management क्या होता है?",
        desc: "सही हुनर (Skill) वाले लोगों को, सही जगह पर और सही समय पर काम पर लगाना, ताकि प्रोडक्शन बिना रुके और बढ़िया तरीके से चले।",
        simple: "आसान शब्दों में: 'सही आदमी, सही काम, सही समय' (Right Person, Right Job)।",
        mantra: "फैक्ट्री मशीनों से बनती है, लेकिन चलती लोगों से है।"
      },
      pillars: [
        {
          id: 1,
          title: "भर्ती और जॉइनिंग (Recruitment)",
          tag: "हायरिंग",
          desc: "फैक्ट्री में नए सदस्यों को जोड़ना।",
          points: [
            "कितने लोगों की ज़रूरत है? (Planning)",
            "इंटरव्यू और चुनाव",
            "जॉइनिंग और कागज़ी कार्यवाही",
            "नियम और सुरक्षा की जानकारी देना"
          ],
          purpose: "नया कर्मचारी पहले ही दिन से काम को समझ सके और उपयोगी बने।",
          icon: "🤝",
          color: "purple"
        },
        {
          id: 2,
          title: "स्किल मैपिंग (Skill Mapping)",
          tag: "सही मिलान",
          desc: "इंसान के हुनर को उसके सही काम से जोड़ना।",
          points: [
            "स्किल मैट्रिक्स बनाना (किसको क्या आता है?)",
            "मल्टी-स्किलिंग (एक व्यक्ति को कई काम सिखाना)",
            "मुश्किल स्टेशन पर बेस्ट ऑपरेटर लगाना",
            "ऑपरेटर की ग्रेडिंग (A, B, C) करना"
          ],
          purpose: "क्वालिटी सुधारना और गलतियों (Rework) को कम करना।",
          icon: "🎯",
          color: "indigo"
        },
        {
          id: 3,
          title: "शिफ्ट प्लानिंग और रोटेशन",
          tag: "शेड्यूलिंग",
          desc: "फैक्ट्री को 24/7 चलाने का टाइम-टेबल।",
          points: [
            "शिफ्ट रोस्टर (ड्यूटी चार्ट) बनाना",
            "हफ्ते या महीने में शिफ्ट बदलना",
            "ओवरटाइम (OT) का हिसाब रखना",
            "छुट्टी होने पर बैकअप तैयार रखना"
          ],
          purpose: "थकान कम करना और प्रोडक्शन को लगातार चलाए रखना।",
          icon: "🕒",
          color: "violet"
        },
        {
          id: 4,
          title: "कॉन्ट्रैक्टर मैनेजमेंट",
          tag: "बाहरी टीम",
          desc: "ठेके (Contract) पर काम करने वाले वर्करों का मैनेजमेंट।",
          points: [
            "ठेकेदार के साथ नियम और शर्तें",
            "हाज़िरी और सैलरी की जांच",
            "वर्करों की सुरक्षा ट्रेनिंग",
            "अनुशासन और परफॉरमेंस कंट्रोल"
          ],
          purpose: "कानूनी सुरक्षा और काम की रफ़्तार बनाए रखना।",
          icon: "🏢",
          color: "fuchsia"
        },
        {
          id: 5,
          title: "ट्रेनिंग और विकास",
          tag: "ग्रोथ",
          desc: "लोगों को सिखाना और उन्हें माहिर बनाना।",
          points: [
            "काम शुरू करने से पहले की ट्रेनिंग (Induction)",
            "मशीन और प्रोसेस की जानकारी",
            "सेफ्टी और क्वालिटी के नए नियम सिखाना",
            "हेल्पर से ऑपरेटर तक का सफर"
          ],
          purpose: "काम की रफ़्तार बढ़ाना और गलतियों को जड़ से मिटाना।",
          icon: "📚",
          color: "pink"
        }
      ],
      summary: "मैनपावर मैनेजमेंट का मतलब है हर वर्कर को फैक्ट्री की सफलता का एक मज़बूत हिस्सा मानना।"
    }
  };

  const current = content[lang] || content['en'];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-purple-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-[0_0_12px_purple]"></div>
              <span className="text-purple-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono italic">Pillar 01: Manpower</h3>
        </div>
        <button onClick={onBack} className="bg-purple-700 hover:bg-purple-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Definition */}
      <div className="bg-slate-900 border border-purple-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Human Force</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-purple-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-purple-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors">
            <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic mb-4">"👤 {current.hero.simple}"</p>
            <p className="text-purple-500 text-[10px] font-black uppercase tracking-[0.6em] animate-pulse italic">"{current.hero.mantra}"</p>
         </div>
      </div>

      {/* 5 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {current.pillars.map((p) => (
            <div key={p.id} className={`bg-slate-950/60 border border-white/5 p-8 rounded-[40px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden border-t-4 border-t-${p.color}-500/40`}>
               <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 bg-slate-900 border border-${p.color}-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>{p.icon}</div>
                  <span className={`text-${p.color}-500 font-black text-[9px] uppercase tracking-widest border border-${p.color}-500/30 px-3 py-1 rounded-full`}>{p.tag}</span>
               </div>

               <div className="space-y-1">
                  <h5 className="text-white text-xl font-black uppercase tracking-tight group-hover:text-purple-400 transition-colors">0{p.id}. {p.title}</h5>
                  <p className="text-slate-500 text-[10px] font-bold leading-relaxed italic uppercase">"{p.desc}"</p>
               </div>

               <div className="space-y-3 pt-6 border-t border-white/5">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-4">Key Steps / क्या होता है:</span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {p.points.map((point, idx) => (
                       <div key={idx} className="flex items-start gap-3 group/point">
                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-${p.color}-500/40 group-hover/point:bg-${p.color}-500 transition-colors`}></div>
                          <span className="text-slate-300 text-[10px] font-bold uppercase tracking-tight leading-tight group-hover:text-white transition-colors">{point}</span>
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

      {/* Summary Logic Footer */}
      <div className="bg-purple-600 p-10 rounded-[48px] shadow-[0_0_50px_rgba(168,85,247,0.3)] text-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 animate-pulse opacity-50"></div>
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
                <span className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_purple] animate-pulse"></span>
                Staffing Ledger: Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_emerald]"></span>
                Skill Mapping: Online
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">HR-Node v14.2 // Manpower Module</div>
      </div>
    </div>
  );
};

export default ManpowerMgmtDeepDive;

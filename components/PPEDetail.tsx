
import React from 'react';
import { Language } from '../types';

interface PPEDetailProps {
  onBack: () => void;
  lang: Language;
}

const PPEIcon = ({ id, className }: { id: string; className?: string }) => {
  switch (id) {
    case 'head':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <path d="M2 12c0-5.5 4.5-10 10-10s10 4.5 10 10v2h-20v-2z" />
          <path d="M12 2v3M7 4l1 2M17 4l-1 2" />
          <rect x="2" y="14" width="20" height="3" rx="1" />
        </svg>
      );
    case 'eye':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <path d="M3 10h18v4a4 4 0 01-4 4H7a4 4 0 01-4-4v-4z" />
          <path d="M3 10V8a2 2 0 012-2h14a2 2 0 012 2v2" />
          <path d="M7 10v4M17 10v4M10 14h4" />
        </svg>
      );
    case 'hand':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <path d="M18 11V6a2 2 0 00-4 0v5M14 10V4a2 2 0 00-4 0v6M10 10V5a2 2 0 00-4 0v7" />
          <path d="M6 12v4c0 3 2 5 5 5h3c3 0 5-2 5-5v-5l-4-2-4 2-5-2z" />
        </svg>
      );
    case 'foot':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <path d="M4 4v12a4 4 0 004 4h12v-3l-7-2V4H4z" />
          <path d="M4 12h5M10 20v-4" />
        </svg>
      );
    case 'ear':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <path d="M4 11v5a3 3 0 003 3h0a3 3 0 003-3v-5" />
          <path d="M14 11v5a3 3 0 003 3h0a3 3 0 003-3v-5" />
          <path d="M4 11a8 8 0 0116 0" />
          <rect x="2" y="10" width="4" height="6" rx="1" />
          <rect x="18" y="10" width="4" height="6" rx="1" />
        </svg>
      );
    case 'respiratory':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <path d="M4 10l8 8 8-8" />
          <path d="M2 8v4c0 4.4 3.6 8 8 8h4c4.4 0 8-3.6 8-8V8l-10-2-10 2z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      );
    default:
      return null;
  }
};

const PPEDetail: React.FC<PPEDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Personal Protective Equipment",
      subtitle: "The Safety Shield Protocol",
      backBtn: "Back",
      hero: {
        question: "What is PPE?",
        desc: "PPE refers to specialized gear designed to protect workers from serious workplace injuries or illnesses resulting from contact with chemical, physical, electrical, or other mechanical hazards.",
        purpose: "Main Purpose: Prevent injury, minimize health risks, and ensure every life returns home safely."
      },
      why: {
        title: "Why is PPE Essential?",
        points: [
          { title: "Injury Prevention", desc: "Reduces severity of accidents on the floor." },
          { title: "Risk Mitigation", desc: "Protects against long-term health hazards like dust or noise." },
          { title: "Legal Compliance", desc: "Adherence to safety laws (OSHA/ISO)." },
          { title: "Safe Culture", desc: "Creates a professional and secure work environment." }
        ]
      },
      items: [
        { 
          id: "head", 
          title: "Head Protection", 
          gear: "Safety Helmet", 
          protects: "Falling objects, impacts, and electrical shocks.",
          color: "amber"
        },
        { 
          id: "eye", 
          title: "Eye & Face", 
          gear: "Goggles / Face Shield", 
          protects: "Dust, chemicals, sparks, and metal fragments.",
          color: "cyan"
        },
        { 
          id: "hand", 
          title: "Hand Protection", 
          gear: "Safety Gloves", 
          protects: "Cuts, burns, heat, and chemical exposure.",
          color: "indigo"
        },
        { 
          id: "foot", 
          title: "Foot Protection", 
          gear: "Steel-Toe Shoes", 
          protects: "Heavy falling items, crushing, and slippery floors.",
          color: "emerald"
        },
        { 
          id: "ear", 
          title: "Hearing Protection", 
          gear: "Ear Plugs / Muffs", 
          protects: "Permanent hearing loss from high machine noise.",
          color: "rose"
        },
        { 
          id: "respiratory", 
          title: "Respiratory", 
          gear: "Mask / Respirator", 
          protects: "Inhaling harmful dust, fumes, or smoke.",
          color: "orange"
        }
      ],
      rules: {
        title: "Golden Rules of PPE",
        list: [
          "Right PPE for the Right Job (Job Specific).",
          "Mandatory usage at all times on the floor.",
          "Inspect for damage before every use.",
          "Training and awareness are not optional."
        ]
      },
      defense: {
        title: "PPE: The Last Line of Defense",
        desc: "In safety logic, we first try to eliminate or control the hazard. PPE is used when the risk cannot be fully removed.",
        steps: ["Eliminate Hazard", "Engineering Controls", "Administrative Controls", "PPE (Shield)"]
      }
    },
    hi: {
      title: "सुरक्षा उपकरण (PPE)",
      subtitle: "सुरक्षा कवच प्रोटोकॉल",
      backBtn: "वापस",
      hero: {
        question: "PPE क्या होता है?",
        desc: "PPE वो विशेष उपकरण हैं जो कर्मचारियों को कार्यस्थल पर होने वाले खतरों (रसायन, बिजली, मशीनरी) से बचाते हैं।",
        purpose: "मुख्य उद्देश्य: चोट से बचाना, स्वास्थ्य जोखिम कम करना और सुरक्षा सुनिश्चित करना।"
      },
      why: {
        title: "PPE क्यों ज़रूरी है?",
        points: [
          { title: "चोट से बचाव", desc: "हादसों के दौरान चोट की गंभीरता को कम करता है।" },
          { title: "स्वास्थ्य सुरक्षा", desc: "धूल, शोर जैसे लंबे समय के खतरों से बचाता है।" },
          { title: "नियमों का पालन", desc: "सुरक्षा कानूनों और मानकों का पालन सुनिश्चित करता है।" },
          { title: "सुरक्षित माहौल", desc: "फैक्ट्री में सुरक्षित काम करने की संस्कृति बनाता है।" }
        ]
      },
      items: [
        { 
          id: "head", 
          title: "सिर की सुरक्षा", 
          gear: "सेफ्टी हेलमेट", 
          protects: "ऊपर से गिरते सामान और चोट से सुरक्षा।",
          color: "amber"
        },
        { 
          id: "eye", 
          title: "आंख और चेहरा", 
          gear: "गॉगल्स / फेस शील्ड", 
          protects: "धूल, केमिकल, चिंगारी और कतरन से बचाव।",
          color: "cyan"
        },
        { 
          id: "hand", 
          title: "हाथों की सुरक्षा", 
          gear: "सेफ्टी ग्लव्स", 
          protects: "कटने, जलने और रसायनों से सुरक्षा।",
          color: "indigo"
        },
        { 
          id: "foot", 
          title: "पैरों की सुरक्षा", 
          gear: "स्टील-टो जूते", 
          protects: "भारी सामान गिरने और फिसलने से बचाव।",
          color: "emerald"
        },
        { 
          id: "ear", 
          title: "कानों की सुरक्षा", 
          gear: "इयर प्लग / मफ", 
          protects: "मशीनों के शोर से होने वाले बहरेपन से बचाव।",
          color: "rose"
        },
        { 
          id: "respiratory", 
          title: "सांस की सुरक्षा", 
          gear: "मास्क / रेस्पिरेटर", 
          protects: "धूल, धुंआ और जहरीली गैसों से बचाव।",
          color: "orange"
        }
      ],
      rules: {
        title: "PPE के सुनहरे नियम",
        list: [
          "सही काम के लिए सही PPE का चुनाव करें।",
          "फ्लोर पर PPE पहनना अनिवार्य है।",
          "क्षतिग्रस्त (Damaged) PPE का उपयोग न करें।",
          "ट्रेनिंग और जागरूकता बहुत ज़रूरी है।"
        ]
      },
      defense: {
        title: "PPE: सुरक्षा की अंतिम दीवार",
        desc: "सुरक्षा विज्ञान में सबसे पहले खतरे को हटाने की कोशिश की जाती है। PPE तब इस्तेमाल होता है जब खतरा पूरी तरह खत्म न हो सके।",
        steps: ["खतरा हटाएं", "इंजीनियरिंग कंट्रोल", "नियम व ट्रेनिंग", "PPE (सुरक्षा कवच)"]
      }
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-6xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-orange-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(249,115,22,0.8)]"></div>
              <span className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg">{current.title}</h3>
        </div>
        <button 
          onClick={onBack}
          className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Definition */}
      <div className="bg-slate-900/60 border border-orange-500/20 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-orange-500/[0.03] select-none uppercase tracking-tighter italic">Shield</div>
         <div className="relative z-10 space-y-6">
            <div className="space-y-2">
               <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter">{current.hero.question}</h4>
               <p className="text-slate-300 text-sm md:text-xl font-medium leading-relaxed max-w-3xl">{current.hero.desc}</p>
            </div>
            <div className="inline-block px-5 py-2 bg-orange-500/10 border border-orange-500/30 rounded-xl text-orange-400 font-black text-xs md:text-sm uppercase italic">
               {current.hero.purpose}
            </div>
         </div>
      </div>

      {/* Why PPE Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         {current.why.points.map((p, i) => (
           <div key={i} className="bg-slate-950/40 border border-white/5 p-6 rounded-3xl hover:border-orange-500/30 transition-all group flex flex-col gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 font-black text-xs">0{i+1}</div>
              <h5 className="text-white font-black text-xs uppercase tracking-widest">{p.title}</h5>
              <p className="text-slate-400 text-[10px] font-bold leading-relaxed">{p.desc}</p>
           </div>
         ))}
      </div>

      {/* Main PPE Items Grid */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl space-y-10">
         <div className="flex items-center gap-4">
            <h4 className="text-orange-400 text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">Equipment Inventory</h4>
            <div className="h-px flex-grow bg-white/10"></div>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {current.items.map((item) => (
               <div key={item.id} className={`group relative bg-slate-950/60 border border-${item.color}-500/20 p-8 rounded-[32px] hover:bg-slate-900 transition-all flex flex-col gap-6 shadow-xl overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}-500/5 blur-[40px] rounded-full`}></div>
                  
                  <div className="flex items-center justify-between relative z-10">
                     <div className={`w-14 h-14 bg-${item.color}-500/10 border border-${item.color}-500/30 rounded-2xl flex items-center justify-center text-${item.color}-500 group-hover:scale-110 transition-transform shadow-lg`}>
                        <PPEIcon id={item.id} className="w-8 h-8" />
                     </div>
                     <span className={`text-[8px] font-black text-${item.color}-400 border border-${item.color}-500/30 px-3 py-1 rounded-full uppercase tracking-widest`}>{item.gear}</span>
                  </div>

                  <div className="relative z-10">
                     <h5 className="text-white font-black text-lg uppercase mb-2 tracking-tight leading-none group-hover:translate-x-2 transition-transform">{item.title}</h5>
                     <p className="text-slate-400 text-xs font-bold leading-relaxed">{item.protects}</p>
                  </div>

                  <div className={`mt-auto h-1 w-0 bg-${item.color}-500 group-hover:w-full transition-all duration-500 rounded-full`}></div>
               </div>
            ))}
         </div>
      </div>

      {/* Rules & Hierarchy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         {/* Golden Rules */}
         <div className="lg:col-span-5 bg-slate-900/40 border border-white/10 p-8 rounded-[40px] shadow-xl space-y-6">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-4">{current.rules.title}</h4>
            <div className="space-y-4">
               {current.rules.list.map((rule, i) => (
                 <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group hover:border-orange-500/20 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-black text-xs flex-shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
                       ★
                    </div>
                    <p className="text-slate-300 text-xs font-bold leading-relaxed">{rule}</p>
                 </div>
               ))}
            </div>
         </div>

         {/* Defense Hierarchy */}
         <div className="lg:col-span-7 bg-slate-900/40 border border-white/10 p-8 rounded-[40px] shadow-xl space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-6xl font-black text-orange-500/[0.03] select-none uppercase italic">Defense</div>
            <div>
               <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-4">{current.defense.title}</h4>
               <p className="text-slate-400 text-xs font-bold leading-relaxed max-w-xl italic">"{current.defense.desc}"</p>
            </div>

            <div className="relative space-y-3">
               {current.defense.steps.map((step, i) => (
                 <div key={i} className={`relative flex items-center justify-between p-4 rounded-2xl border ${i === 3 ? 'bg-orange-500/20 border-orange-500 text-white' : 'bg-slate-950/60 border-white/5 text-slate-500'}`}>
                    <div className="flex items-center gap-4">
                       <span className="text-[10px] font-black italic">STEP-0{i+1}</span>
                       <span className="font-black text-xs uppercase tracking-widest">{step}</span>
                    </div>
                    {i === 3 && (
                      <span className="text-[8px] font-black uppercase bg-orange-500 px-2 py-0.5 rounded text-white animate-pulse">Critical</span>
                    )}
                 </div>
               ))}
               <div className="absolute top-0 left-8 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
            </div>
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,1)]"></span>
                Shield Status: Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
                Hazard Compliance: Certified
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest">Industrial Hub v5.0 // Safety Node</div>
      </div>
    </div>
  );
};

export default PPEDetail;

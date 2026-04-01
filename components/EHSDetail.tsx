
import React from 'react';
import { Language } from '../types';

interface EHSDetailProps {
  onBack: () => void;
  lang: Language;
}

const EHSDetail: React.FC<EHSDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "EHS / Safety Hub",
      subtitle: "Environment, Health & Safety Systems",
      backBtn: "Back",
      hero: {
        question: "What is EHS / Safety?",
        desc: "EHS is a system that ensures the safety of employees, their health, and the protection of the environment, while following all legal laws.",
        simple: "Simple words: Keep people safe, keep factory safe, and don't harm the environment.",
        mantra: "Safety is not an option; it's a way of life."
      },
      pillars: [
        {
          id: 1,
          title: "Environment (Paryavaran)",
          tag: "Protection",
          desc: "Controlling the factory's impact on nature.",
          points: [
            "Waste management (Dry, Wet, Hazardous)",
            "E-waste & scrap handling",
            "Pollution control (Air, Water, Noise)",
            "Chemical storage & safe disposal",
            "Energy & Water conservation",
            "Environmental audits & legal records"
          ],
          goal: "No damage to nature; follow all pollution norms.",
          icon: "🌱",
          color: "emerald"
        },
        {
          id: 2,
          title: "Health (Swasthya)",
          tag: "Wellness",
          desc: "Care for physical and mental health of staff.",
          points: [
            "Periodic medical check-ups",
            "Occupational health risk assessment",
            "Ergonomics improvement",
            "First-aid & Emergency medical facility",
            "Health awareness & Vaccination programs",
            "Canteen & Drinking water hygiene"
          ],
          goal: "Avoid long-term health issues and work-related illness.",
          icon: "🩺",
          color: "cyan"
        },
        {
          id: 3,
          title: "Safety (Suraksha)",
          tag: "Defense",
          desc: "Prevention of accidents and injuries.",
          points: [
            "PPE usage (Helmet, Gloves, Shoes, Goggles)",
            "Machine guarding & Safety interlocks",
            "Fire safety (Extinguishers, Drills, Hydrants)",
            "Electrical safety & LOTO (Lock-out, Tag-out)",
            "Safety signage & Hazard marking",
            "Tool Box Talk (TBT) & Training",
            "Incident / Near-miss reporting"
          ],
          goal: "Build a Zero-Accident workplace.",
          icon: "⛑️",
          color: "orange"
        }
      ],
      compliance: {
        title: "What is EHS Compliance?",
        desc: "Following government laws, safety standards, and internal factory rules properly.",
        items: [
          { l: "Factory Act", d: "Legal compliance for worker welfare." },
          { l: "Fire NOC", d: "Approval for fire safety preparedness." },
          { l: "PCB Norms", d: "Pollution Control Board requirements." },
          { l: "Safety Logs", d: "Record keeping of training and audits." }
        ]
      },
      summary: "EHS ensures that production happens without costing human health or nature's balance."
    },
    hi: {
      title: "EHS / सेफ्टी हब",
      subtitle: "पर्यावरण, स्वास्थ्य और सुरक्षा प्रणाली",
      backBtn: "वापस",
      hero: {
        question: "EHS / Safety क्या होता है?",
        desc: "EHS एक ऐसा सिस्टम है जो कर्मचारियों की सुरक्षा, उनके स्वास्थ्य और पर्यावरण की रक्षा सुनिश्चित करता है, साथ ही कानूनी नियमों (Laws) का पालन करवाता है।",
        simple: "आसान शब्दों में: इंसान सुरक्षित रहे, फैक्ट्री सुरक्षित रहे, और पर्यावरण को नुकसान न हो।",
        mantra: "सुरक्षा कोई विकल्प नहीं, यह जीवन जीने का तरीका है।"
      },
      pillars: [
        {
          id: 1,
          title: "Environment (पर्यावरण)",
          tag: "सुरक्षा",
          desc: "फैक्ट्री का प्रकृति पर पड़ने वाले असर को कंट्रोल करना।",
          points: [
            "वेस्ट मैनेजमेंट (सूखा, गीला, जहरीला कचरा)",
            "E-waste और स्क्रैप हैंडलिंग",
            "प्रदूषण नियंत्रण (हवा, पानी, शोर)",
            "केमिकल स्टोरेज और डिस्पोजल",
            "बिजली और पानी की बचत",
            "पर्यावरण ऑडिट और कानूनी रिकॉर्ड"
          ],
          goal: "प्रकृति को नुकसान न हो और प्रदूषण के नियमों का पालन हो।",
          icon: "🌱",
          color: "emerald"
        },
        {
          id: 2,
          title: "Health (स्वास्थ्य)",
          tag: "कल्याण",
          desc: "कर्मचारियों की शारीरिक और मानसिक सेहत का ख्याल।",
          points: [
            "नियमित मेडिकल चेकअप",
            "काम से जुड़े स्वास्थ्य जोखिमों की जांच",
            "Ergonomics (काम करने के तरीके) में सुधार",
            "फर्स्ट-एड और इमरजेंसी सुविधा",
            "स्वास्थ्य जागरूकता प्रोग्राम",
            "कैंटीन और पीने के पानी की सफाई"
          ],
          goal: "लंबी बीमारियों और काम के कारण होने वाली बीमारी को रोकना।",
          icon: "🩺",
          color: "cyan"
        },
        {
          id: 3,
          title: "Safety (सुरक्षा)",
          tag: "बचाव",
          desc: "हादसों और चोट से बचाव की तैयारी।",
          points: [
            "PPE का उपयोग (हेलमेट, ग्लव्स, जूते, चश्मा)",
            "मशीन गार्डिंग और इंटरलॉक्स",
            "आग से सुरक्षा (Extinguishers, Drills)",
            "इलेक्ट्रिकल सेफ्टी और LOTO नियम",
            "सेफ्टी बोर्ड और खतरे के निशान",
            "टूल बॉक्स टॉक (TBT) - डेली जानकारी",
            "हादसों (Near-miss) की रिपोर्टिंग"
          ],
          goal: "फैक्ट्री को 'जीरो एक्सीडेंट' (Zero Accident) कार्यस्थल बनाना।",
          icon: "⛑️",
          color: "orange"
        }
      ],
      compliance: {
        title: "EHS कंप्लायंस क्या होता है?",
        desc: "सरकारी कानूनों, सुरक्षा मानकों और कंपनी के नियमों का सही तरीके से पालन करना।",
        items: [
          { l: "Factory Act", d: "मजदूरों के कल्याण और सुरक्षा के कानून।" },
          { l: "Fire NOC", d: "फायर विभाग से सुरक्षा की मंजूरी।" },
          { l: "PCB नियम", "d": "प्रदूषण बोर्ड के कड़े नियमों का पालन।" },
          { l: "ऑडिट रिकॉर्ड", d: "ट्रेनिंग और सुरक्षा जांच का पूरा हिसाब।" }
        ]
      },
      summary: "EHS पक्का करता है कि माल बने, पर किसी की जान या प्रकृति की कीमत पर नहीं।"
    }
  };

  const current = content[lang] || content['en'];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-orange-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse shadow-[0_0_12px_orange]"></div>
              <span className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono italic">Safety Node</h3>
        </div>
        <button onClick={onBack} className="bg-orange-700 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-orange-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Life Protection</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-orange-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-orange-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors">
            <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic mb-4">"🛡️ {current.hero.simple}"</p>
            <p className="text-orange-500 text-[10px] font-black uppercase tracking-[0.6em] animate-pulse italic">"{current.hero.mantra}"</p>
         </div>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {current.pillars.map((p) => (
            <div key={p.id} className={`bg-slate-950/60 border border-white/5 p-8 rounded-[40px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden border-t-4 border-t-${p.color}-500/40`}>
               <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 bg-slate-900 border border-${p.color}-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>{p.icon}</div>
                  <span className={`text-${p.color}-500 font-black text-[9px] uppercase tracking-widest border border-${p.color}-500/30 px-3 py-1 rounded-full`}>{p.tag}</span>
               </div>

               <div className="space-y-1">
                  <h5 className="text-white text-xl font-black uppercase tracking-tight group-hover:text-${p.color}-400 transition-colors">0{p.id}. {p.title}</h5>
                  <p className="text-slate-500 text-[10px] font-bold leading-relaxed italic uppercase">"{p.desc}"</p>
               </div>

               <div className="space-y-3 pt-6 border-t border-white/5">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-4">Core Focus Area / मुख्य कार्य:</span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {p.points.map((point, idx) => (
                       <div key={idx} className="flex items-start gap-3 group/point">
                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-${p.color}-500/40 group-hover/point:bg-${p.color}-500 transition-colors`}></div>
                          <span className="text-slate-300 text-[10px] font-bold uppercase tracking-tight leading-tight group-hover/point:text-white transition-colors">{point}</span>
                       </div>
                    ))}
                  </div>
               </div>

               <div className={`mt-auto bg-${p.color}-500/10 border border-${p.color}-500/20 p-5 rounded-2xl`}>
                  <span className={`text-${p.color}-500 text-[9px] font-black uppercase block mb-1`}>The Goal:</span>
                  <p className="text-white text-[11px] font-bold italic leading-tight">🎯 {p.goal}</p>
               </div>
            </div>
         ))}
      </div>

      {/* Compliance Section */}
      <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[48px] shadow-2xl space-y-10 relative overflow-hidden">
         <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter italic flex items-center gap-4">
            <span className="w-12 h-1 bg-rose-500 shadow-[0_0_10px_rose]"></span>
            {current.compliance.title}
         </h4>
         <p className="text-slate-400 text-sm md:text-lg font-bold leading-relaxed italic">"{current.compliance.desc}"</p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {current.compliance.items.map((item, i) => (
               <div key={i} className="bg-slate-950/60 p-6 rounded-3xl border border-white/5 hover:border-rose-500/30 transition-all group shadow-inner">
                  <h6 className="text-rose-400 font-black text-xs uppercase mb-2">{item.l}</h6>
                  <p className="text-slate-500 text-[10px] font-bold leading-relaxed italic">{item.d}</p>
               </div>
            ))}
         </div>
      </div>

      {/* Summary Footer */}
      <div className="bg-orange-600 p-10 rounded-[48px] shadow-[0_0_50px_rgba(249,115,22,0.3)] text-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 animate-pulse opacity-50"></div>
         <div className="relative z-10 space-y-4">
            <h5 className="text-white/60 font-black text-[10px] uppercase tracking-[0.6em] mb-2">Technical Conclusion</h5>
            <p className="text-white text-lg md:text-2xl font-black italic tracking-tight leading-snug">
               "{current.summary}"
            </p>
         </div>
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_emerald] animate-pulse"></span>
                Environmental Node: Balanced
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_10px_rose]"></span>
                Safety Sentinel: Active
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">EHS-Shield v15.3 // Industrial Safety Node</div>
      </div>
    </div>
  );
};

export default EHSDetail;

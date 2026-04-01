
import React from 'react';
import { Language } from '../types';

interface ErgonomicsDetailProps {
  onBack: () => void;
  lang: Language;
}

const ErgonomicsDetail: React.FC<ErgonomicsDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Industrial Ergonomics",
      subtitle: "Human-Factor System Design",
      backBtn: "Back to Process Design",
      hero: {
        question: "What is Ergonomics?",
        desc: "Designing the workstation and process according to the human body structure, ensuring the operator is comfortable, safe, and free from long-term health issues.",
        mantra: "Fitting the job to the person, not the person to the job."
      },
      pillars: [
        {
          id: 1,
          title: "Working Height",
          tag: "The Elbow Rule",
          desc: "Adjusting table or machine height to prevent bending or over-reaching.",
          details: [
            "Ideal height: Close to elbow level",
            "Too low: Causes back & neck pain",
            "Too high: Causes shoulder strain"
          ],
          icon: "📏"
        },
        {
          id: 2,
          title: "Posture Standards",
          tag: "Body Alignment",
          desc: "Maintaining the natural 'S' curve of the spine during work.",
          details: [
            "Keep back straight & supported",
            "Avoid bent necks for long hours",
            "Keep both feet flat on the ground",
            "Avoid static positions (Move often)"
          ],
          icon: "👤"
        },
        {
          id: 3,
          title: "Reach Optimization",
          tag: "Efficiency Zone",
          desc: "Keeping tools and parts within the natural arc of arm movement.",
          details: [
            "Frequently used: Within Near Zone",
            "Heavy items: At waist level",
            "Avoid over-stretching or twisting"
          ],
          icon: "🎯"
        },
        {
          id: 4,
          title: "Fatigue Prevention",
          tag: "Stamina Guard",
          desc: "Strategies to keep the operator energized throughout the shift.",
          details: [
            "Job rotation (Switching tasks)",
            "Scheduled micro-breaks",
            "Use of anti-fatigue mats/chairs",
            "Mandatory PPE for strain reduction"
          ],
          icon: "⚡"
        }
      ],
      impact: {
        title: "Ergonomics Impact Matrix",
        headers: ["Operational Area", "Impact Result"],
        rows: [
          { area: "Operator Comfort", result: "Increased (Better Morale)", color: "emerald" },
          { area: "Health Issues", result: "Reduced (Zero Injuries)", color: "cyan" },
          { area: "Productivity", result: "Increased (Stable UPH)", color: "indigo" },
          { area: "Quality", result: "Improved (Zero Errors)", color: "blue" },
          { area: "Safety", result: "Improved (Zero Hazards)", color: "rose" }
        ]
      }
    },
    hi: {
      title: "इंडस्ट्रियल एर्गोनॉमिक्स",
      subtitle: "मानव-आधारित सिस्टम डिज़ाइन",
      backBtn: "वापस जाएं",
      hero: {
        question: "Ergonomics क्या होता है?",
        desc: "वर्कस्टेशन और प्रोसेस को इंसान के शरीर की बनावट के हिसाब से डिज़ाइन करना, ताकि ऑपरेटर आरामदायक और सुरक्षित रहे और उसे लंबे समय तक कोई बीमारी न हो।",
        mantra: "काम को इंसान के हिसाब से बनाना, इंसान को काम के हिसाब से नहीं।"
      },
      pillars: [
        {
          id: 1,
          title: "काम करने की सही ऊंचाई",
          tag: "कोहनी का नियम",
          desc: "टेबल या मशीन की ऊंचाई सही रखना ताकि झुकना या बहुत ऊपर न हाथ ले जाना पड़े।",
          details: [
            "आइडियल ऊंचाई: कोहनी (Elbow) के लेवल पर",
            "बहुत नीचा: कमर और गर्दन में दर्द",
            "बहुत ऊँचा: कंधों में खिंचाव और दर्द"
          ],
          icon: "📏"
        },
        {
          id: 2,
          title: "पोस्चर सुधार (Posture)",
          tag: "शरीर का अलाइनमेंट",
          desc: "काम के दौरान रीढ़ की हड्डी और शरीर की स्थिति को सही रखना।",
          details: [
            "कमर सीधी और सपोर्टेड रखें",
            "गर्दन को ज्यादा देर तक न झुकाएं",
            "दोनों पैर जमीन पर सही से टिके हों",
            "लंबे समय तक एक ही स्थिति में न रहें"
          ],
          icon: "👤"
        },
        {
          id: 3,
          title: "रीच ऑप्टिमाइजेशन",
          tag: "आसान पहुँच क्षेत्र",
          desc: "टूल्स और सामान को हाथों की पहुँच के घेरे (Arc) के अंदर रखना।",
          details: [
            "ज़्यादा इस्तेमाल वाले टूल: पास वाले ज़ोन में",
            "भारी सामान: हमेशा कमर के लेवल पर",
            "ज़्यादा झुकने या मुड़ने से बचें"
          ],
          icon: "🎯"
        },
        {
          id: 4,
          title: "थकान और चोट से बचाव",
          tag: "स्टैमिना गार्ड",
          desc: "ऐसी रणनीतियां जिससे ऑपरेटर पूरी शिफ्ट में ऊर्जावान (Energetic) रहे।",
          details: [
            "जॉब रोटेशन (काम बदलते रहना)",
            "छोटे-छोटे ब्रेक (Micro-breaks)",
            "थकान कम करने वाली चटाई/कुर्सी",
            "चोट से बचने के लिए सही PPE"
          ],
          icon: "⚡"
        }
      ],
      impact: {
        title: "एर्गोनॉमिक्स का असर (Impact Matrix)",
        headers: ["कार्यक्षेत्र", "सुधार का नतीजा"],
        rows: [
          { area: "ऑपरेटर का आराम", result: "बढ़ोतरी (बेहतर जोश)", color: "emerald" },
          { area: "स्वास्थ्य समस्याएं", result: "कमी (बीमारी से बचाव)", color: "cyan" },
          { area: "प्रोडक्टिविटी", result: "बढ़ोतरी (स्थिर आउटपुट)", color: "indigo" },
          { area: "क्वालिटी (Quality)", result: "सुधार (जीरो गलती)", color: "blue" },
          { area: "सुरक्षा (Safety)", result: "सुधार (खतरा नहीं)", color: "rose" }
        ]
      }
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-indigo-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_12px_indigo]"></div>
              <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono">Ergonomics</h3>
        </div>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-indigo-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Human Design</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-indigo-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-indigo-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">
            "{current.hero.mantra}"
         </div>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {current.pillars.map((p) => (
            <div key={p.id} className="bg-slate-950/60 border border-white/5 p-8 rounded-[40px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden">
               <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-slate-900 border border-indigo-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                     {p.icon}
                  </div>
                  <span className="text-indigo-500 font-black text-[10px] uppercase tracking-widest border border-indigo-500/30 px-3 py-1 rounded-full">{p.tag}</span>
               </div>

               <div className="space-y-2">
                  <h5 className="text-white text-xl font-black uppercase tracking-tight group-hover:text-indigo-400 transition-colors">0{p.id}. {p.title}</h5>
                  <p className="text-slate-400 text-xs font-bold leading-relaxed italic">"{p.desc}"</p>
               </div>

               <div className="space-y-3 pt-4 border-t border-white/5 mt-auto">
                  {p.details.map((detail, idx) => (
                     <div key={idx} className="flex items-center gap-3 text-[10px] text-slate-200 font-bold uppercase tracking-tight">
                        <div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
                        {detail}
                     </div>
                  ))}
               </div>
            </div>
         ))}
      </div>

      {/* Impact Matrix Table */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl overflow-hidden backdrop-blur-xl">
         <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
            <span className="w-10 h-1 bg-indigo-500 shadow-[0_0_12px_indigo]"></span>
            {current.impact.title}
         </h4>
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="border-b border-white/10">
                     {current.impact.headers.map((h, i) => (
                        <th key={i} className={`py-4 text-[10px] font-black uppercase tracking-widest ${i === 0 ? 'text-slate-500' : 'text-indigo-400'}`}>{h}</th>
                     ))}
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {current.impact.rows.map((row, i) => (
                     <tr key={i} className="group hover:bg-white/5 transition-colors">
                        <td className="py-6 text-white font-black text-xs md:text-sm uppercase tracking-tight">{row.area}</td>
                        <td className="py-6">
                           <span className={`bg-${row.color}-500/10 text-${row.color}-400 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-${row.color}-500/30`}>
                              {row.result}
                           </span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      {/* Summary Logic Footer */}
      <div className="bg-slate-950/60 border border-white/5 rounded-[40px] p-8 md:p-12 shadow-inner flex flex-col items-center text-center gap-4">
         <p className="text-indigo-400 font-black text-xs md:text-base uppercase tracking-widest">
            {lang === 'hi' 
              ? 'खुश ऑपरेटर = सुरक्षित और बेहतर काम' 
              : 'Happy Operator = Safe and Better Work'}
         </p>
         <div className="flex gap-4">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse [animation-delay:0.4s]"></div>
         </div>
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-[0_0_12px_indigo] animate-pulse"></span>
                Human-Factor Node: Optimized
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Ergonomics Standard v2.0 // Industrial Health Center</div>
      </div>
    </div>
  );
};

export default ErgonomicsDetail;

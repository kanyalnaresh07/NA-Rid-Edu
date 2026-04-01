
import React from 'react';
import { Language } from '../types';

interface StationLayoutDetailProps {
  onBack: () => void;
  lang: Language;
}

const StationLayoutDetail: React.FC<StationLayoutDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Station Layout Architecture",
      subtitle: "Micro-Process Design & Ergonomics",
      backBtn: "Back to Process Design",
      hero: {
        question: "What is Station Layout?",
        desc: "The detailed design of an individual workstation to ensure the best possible arrangement of the operator, tools, materials, and instructions.",
        goal: "Goal: Fast cycle times, zero errors, and maximum operator comfort."
      },
      elements: [
        {
          id: 1,
          title: "Tool & Material Placement",
          tag: "The Reach Rule",
          desc: "Positioning assets based on usage frequency and weight.",
          points: [
            "Frequent tools → Within 30cm of operator",
            "Heavy tools → Always at waist level",
            "Rarely used items → Secondary side racks",
            "Shadow boards for tool identification"
          ],
          benefit: "Eliminates search time and unnecessary walking.",
          icon: "🔧"
        },
        {
          id: 2,
          title: "Bin Location & Height",
          tag: "Supply Precision",
          desc: "Correct positioning of material supply bins for effortless picking.",
          points: [
            "Bins within the 'Comfort Reach Zone'",
            "Heavy parts at ergonomic waist height",
            "FIFO (First-In, First-Out) shelf design",
            "Clear color-coded labels on every bin"
          ],
          benefit: "Reduces fatigue and prevents 'Wrong Pick' errors.",
          icon: "📦"
        },
        {
          id: 3,
          title: "Visual Aids & WI Placement",
          tag: "Information Flow",
          desc: "Making sure critical data is always in the operator's line of sight.",
          points: [
            "WI (Work Instructions) right in front of eyes",
            "High-res photos for critical assembly steps",
            "OK / NG boundary samples on display",
            "Digital torque & parameter monitors"
          ],
          benefit: "Easy training and immediate mistake detection.",
          icon: "👁️"
        }
      ],
      zones: {
        title: "Working Zone Definition",
        primary: { name: "Primary Zone", desc: "Arms width. For 90% of tasks.", color: "cyan" },
        secondary: { name: "Secondary Zone", desc: "Extended reach. For occasional tasks.", color: "amber" },
        danger: { name: "No-Work Zone", desc: "Safety clearance. No storage here.", color: "rose" }
      },
      impact: {
        title: "Station Layout Impact Matrix",
        headers: ["Operational Area", "Impact Result"],
        rows: [
          { area: "Cycle Time", result: "Reduced (Fast Flow)", color: "cyan" },
          { area: "Error / Defect", result: "Reduced (Zero Skip)", color: "emerald" },
          { area: "Operator Fatigue", result: "Reduced (Less Strain)", color: "blue" },
          { area: "Productivity", result: "Increased (Higher UPH)", color: "indigo" },
          { area: "Safety", result: "Improved (No Hazards)", color: "rose" }
        ]
      }
    },
    hi: {
      title: "स्टेशन लेआउट आर्किटेक्चर",
      subtitle: "माइक्रो-प्रोसेस डिज़ाइन और एर्गोनॉमिक्स",
      backBtn: "वापस जाएं",
      hero: {
        question: "Station Layout क्या होता है?",
        desc: "हर एक वर्कस्टेशन का बारीकी से किया गया डिज़ाइन, जिसमें ऑपरेटर, टूल्स, मटेरियल और निर्देशों का सबसे अच्छा अरेंजमेंट होता है।",
        goal: "लक्ष्य: काम की तेज़ रफ़्तार, जीरो गलती और ऑपरेटर का आराम।"
      },
      elements: [
        {
          id: 1,
          title: "टूल और मटेरियल प्लेसमेंट",
          tag: "पहुँच का नियम",
          desc: "टूल्स और सामान को उनके उपयोग और वजन के हिसाब से रखना।",
          points: [
            "ज्यादा इस्तेमाल होने वाले टूल्स → ऑपरेटर के बिल्कुल पास",
            "भारी टूल्स → हमेशा कमर (Waist) के लेवल पर",
            "कम इस्तेमाल होने वाले टूल्स → साइड रैक पर",
            "Shadow बोर्ड का इस्तेमाल (टूल पहचानने के लिए)"
          ],
          benefit: "ढूँढने का समय बचता है और फालतू चलना खत्म होता है।",
          icon: "🔧"
        },
        {
          id: 2,
          title: "बिन की जगह और ऊंचाई",
          tag: "सटीक सप्लाई",
          desc: "सामान के डिब्बों (Bins) को सही ऊंचाई और दूरी पर रखना।",
          points: [
            "डिब्बे ऑपरेटर के आसान पहुँच क्षेत्र में हों",
            "भारी पार्ट्स कमर की ऊंचाई पर रखे जाएं",
            "FIFO (पुराना माल पहले) का पालन करने वाले रैक",
            "हर बिन पर साफ़ कलर-कोडेड लेबल"
          ],
          benefit: "थकान कम होती है और 'गलत पार्ट' उठाने का रिस्क खत्म होता है।",
          icon: "📦"
        },
        {
          id: 3,
          title: "विजुअल एड्स और WI की जगह",
          tag: "जानकारी का फ्लो",
          desc: "यह पक्का करना कि ज़रूरी निर्देश हमेशा ऑपरेटर की आँखों के सामने हों।",
          points: [
            "वर्क इंस्ट्रक्शन (WI) स्टेशन के ठीक सामने",
            "मुश्किल स्टेप्स के लिए साफ़ फोटो और चित्र",
            "OK / NG सैंपल्स का डिस्प्ले",
            "डिजिटल टॉर्क और मशीन सेटिंग मॉनिटर"
          ],
          benefit: "ट्रेनिंग आसान होती है और गलतियां तुरंत पकड़ी जाती हैं।",
          icon: "👁️"
        }
      ],
      zones: {
        title: "वर्किंग ज़ोन (Working Zones)",
        primary: { name: "Primary Zone", desc: "हाथ की चौड़ाई। 90% काम यहीं होता है।", color: "cyan" },
        secondary: { name: "Secondary Zone", desc: "फैले हुए हाथ। कभी-कभी इस्तेमाल होने वाले टूल।", color: "amber" },
        danger: { name: "No-Work Zone", desc: "सुरक्षित दूरी। यहाँ कोई सामान न रखें।", color: "rose" }
      },
      impact: {
        title: "स्टेशन लेआउट का असर (Matrix)",
        headers: ["कार्यक्षेत्र", "सुधार का नतीजा"],
        rows: [
          { area: "Cycle Time", result: "कमी (काम तेज़ होगा)", color: "cyan" },
          { area: "Error / Defect", result: "कमी (गलती नहीं होगी)", color: "emerald" },
          { area: "Operator Fatigue", result: "कमी (थकान कम होगी)", color: "blue" },
          { area: "Productivity", result: "बढ़ोतरी (ज़्यादा प्रोडक्शन)", color: "indigo" },
          { area: "Safety", result: "सुधार (खतरा नहीं)", color: "rose" }
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
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono">Station Design</h3>
        </div>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Definition */}
      <div className="bg-slate-900 border border-cyan-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Micro-Cell</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-cyan-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-cyan-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">
            "{current.hero.goal}"
         </div>
      </div>

      {/* Working Zone Visualization */}
      <div className="bg-slate-950/60 border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl space-y-10">
         <h4 className="text-white text-center font-black text-xl md:text-2xl uppercase tracking-[0.3em]">{current.zones.title}</h4>
         
         <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="relative w-full max-w-md aspect-square bg-slate-900 rounded-full border border-white/10 flex items-center justify-center overflow-hidden group">
               {/* Zone Circles */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[85%] h-[85%] rounded-full border-2 border-dashed border-rose-500/20"></div>
                  <div className="w-[60%] h-[60%] rounded-full border-2 border-amber-500/30 bg-amber-500/5"></div>
                  <div className="w-[35%] h-[35%] rounded-full border-2 border-cyan-500/50 bg-cyan-500/10 shadow-[0_0_30px_rgba(6,182,212,0.2)]"></div>
               </div>
               {/* Operator Icon */}
               <div className="relative z-10 text-5xl filter drop-shadow-[0_0_10px_cyan] group-hover:scale-110 transition-transform">👤</div>
               {/* Labels */}
               <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[8px] font-black text-rose-400 uppercase tracking-widest">No-Work Zone</div>
            </div>

            <div className="flex-1 grid grid-cols-1 gap-4 w-full">
               {[current.zones.primary, current.zones.secondary, current.zones.danger].map((zone, i) => (
                  <div key={i} className={`p-6 rounded-3xl border border-white/5 bg-slate-900/60 flex items-center gap-6 group hover:border-${zone.color}-500/40 transition-all`}>
                     <div className={`w-3 h-12 rounded-full bg-${zone.color}-500 shadow-[0_0_10px_${zone.color}]`}></div>
                     <div>
                        <h5 className={`text-white font-black text-lg uppercase tracking-tight group-hover:text-${zone.color}-400`}>{zone.name}</h5>
                        <p className="text-slate-400 text-xs font-bold italic">{zone.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* Elements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {current.elements.map((el) => (
            <div key={el.id} className="bg-slate-950/40 border border-white/5 p-8 rounded-[40px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden h-full">
               <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-slate-900 border border-cyan-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                     {el.icon}
                  </div>
                  <span className="text-cyan-500 font-black text-[10px] uppercase tracking-widest border border-cyan-500/30 px-3 py-1 rounded-full">{el.tag}</span>
               </div>

               <div className="space-y-2">
                  <h5 className="text-white text-xl font-black uppercase tracking-tight group-hover:text-cyan-400 transition-colors">0{el.id}. {el.title}</h5>
                  <p className="text-slate-400 text-xs font-bold leading-relaxed italic">"{el.desc}"</p>
               </div>

               <div className="space-y-3 pt-4 border-t border-white/5 mt-auto">
                  {el.points.map((p, idx) => (
                     <div key={idx} className="flex items-center gap-3 text-[10px] text-slate-300 font-black uppercase tracking-tight">
                        <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                        {p}
                     </div>
                  ))}
               </div>

               <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl mt-2">
                  <p className="text-white text-[10px] font-bold italic leading-tight">📌 {el.benefit}</p>
               </div>
            </div>
         ))}
      </div>

      {/* Impact Matrix Table */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl overflow-hidden backdrop-blur-xl">
         <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
            <span className="w-10 h-1 bg-emerald-500 shadow-[0_0_12px_emerald]"></span>
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
                              {row.result}
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
                Ergo-Node: Optimized
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Micro-Layout Design v3.1 // Industrial Standard</div>
      </div>
    </div>
  );
};

export default StationLayoutDetail;

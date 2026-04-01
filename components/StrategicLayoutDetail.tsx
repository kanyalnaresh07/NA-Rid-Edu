
import React from 'react';
import { Language } from '../types';

interface StrategicLayoutDetailProps {
  onBack: () => void;
  lang: Language;
}

const StrategicLayoutDetail: React.FC<StrategicLayoutDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Strategic Layout Planning",
      subtitle: "Facility Arrangement & Flow Intelligence",
      backBtn: "Back to Process Design",
      hero: {
        question: "What is Strategic Layout Planning?",
        desc: "The smart arrangement of machines and workstations in a factory to ensure the flow of material is smooth, safe, and highly efficient.",
        focus: "Core Focus: Flow, Safety, Visibility, and Productivity."
      },
      elements: [
        {
          id: 1,
          title: "Workstation Placement",
          tag: "Smart Positioning",
          desc: "Placing machines/stations exactly where the process sequence demands.",
          points: [
            "Sequence-based arrangement",
            "Minimum operator walking distance",
            "Easy material access",
            "Clear maintenance space"
          ],
          example: "Example: Place 'Tapping' immediately after 'Drilling' to reduce travel.",
          icon: "🏗️"
        },
        {
          id: 2,
          title: "Movement & Handling",
          tag: "Waste Elimination",
          desc: "Designing the layout to kill extra walking, lifting, or turning.",
          points: [
            "Tools within reach (The 30cm rule)",
            "Line-side material supply (Gravity racks)",
            "Conveyor or trolley paths",
            "No Backtracking (Material never goes back)"
          ],
          result: "Result: Saved Time + Reduced Fatigue.",
          icon: "🚶"
        },
        {
          id: 3,
          title: "Safety & Visibility",
          tag: "Zero Risk Zone",
          desc: "Creating a workplace that is safe to move in and easy to monitor.",
          points: [
            "Clear Emergency Exits & Fire Access",
            "Zero blind spots (Supervisor can see whole line)",
            "No crossing of man and machine paths",
            "Andon / Visual boards clearly visible"
          ],
          benefit: "Benefit: Fast response & lower accident risk.",
          icon: "🛡️"
        }
      ],
      flowSection: {
        title: "Flow Direction Architectures",
        straight: {
          name: "Straight Line Flow",
          desc: "Material moves in one direction from Raw to Finish.",
          usage: "Best for High Volume & Simple Processes.",
          plus: "Easy to supervise."
        },
        uLine: {
          name: "U-Line Flow",
          desc: "Start and End points are close to each other.",
          usage: "Best for Multi-skill teams.",
          plus: "Better communication & flexibility."
        }
      }
    },
    hi: {
      title: "स्ट्रेटेजिक लेआउट प्लानिंग",
      subtitle: "फैक्ट्री अरेंजमेंट और फ्लो इंटेलिजेंस",
      backBtn: "वापस जाएं",
      hero: {
        question: "Strategic Layout Planning क्या होता है?",
        desc: "फैक्ट्री या लाइन की मशीनों और वर्कस्टेशन को इस तरह व्यवस्थित (Arrange) करना कि माल का फ्लो सुचारू, सुरक्षित और कुशल हो।",
        focus: "मुख्य फोकस: फ्लो, सुरक्षा, विजिबिलिटी और प्रोडक्टिविटी।"
      },
      elements: [
        {
          id: 1,
          title: "मशीन / स्टेशन प्लेसमेंट",
          tag: "स्मार्ट अरेंजमेंट",
          desc: "मशीन या स्टेशन को प्रोसेस के क्रम (Sequence) के हिसाब से सही जगह पर रखना।",
          points: [
            "प्रोसेस सीक्वेंस के हिसाब से प्लेसमेंट",
            "ऑपरेटर का पैदल चलना कम से कम हो",
            "मटेरियल हैंडलिंग आसान हो",
            "मेंटेनेंस के लिए पर्याप्त जगह"
          ],
          example: "उदाहरण: ड्रिलिंग के तुरंत बाद टैपिंग स्टेशन रखें ताकि दूरी कम हो।",
          icon: "🏗️"
        },
        {
          id: 2,
          title: "मूवमेंट और हैंडलिंग",
          tag: "बर्बादी पर रोक",
          desc: "फालतू चलने, उठाने या मुड़ने की क्रियाओं को खत्म करने वाला डिज़ाइन।",
          points: [
            "टूल्स ऑपरेटर की पहुँच (Reach) में हों",
            "लाइन-साइड मटेरियल सप्लाई",
            "ट्रॉली या कन्वेयर का सही उपयोग",
            "नो बैक-ट्रैकिंग (माल पीछे नहीं जाना चाहिए)"
          ],
          result: "नतीजा: समय की बचत + थकान में कमी।",
          icon: "🚶"
        },
        {
          id: 3,
          title: "सुरक्षा और विजिबिलिटी",
          tag: "जीरो रिस्क ज़ोन",
          desc: "ऐसा वर्कप्लेस जो सुरक्षित हो और जहाँ से सब कुछ साफ़ दिखाई दे।",
          points: [
            "इमरजेंसी एग्जिट और फायर पॉइंट साफ़ हों",
            "नो ब्लाइंड स्पॉट्स (पूरी लाइन नज़र में हो)",
            "इंसान और माल के रास्ते अलग-अलग हों",
            "Andon और सूचना बोर्ड साफ़ दिखें"
          ],
          benefit: "फायदा: एक्सीडेंट कम + समस्या पर तुरंत एक्शन।",
          icon: "🛡️"
        }
      ],
      flowSection: {
        title: "फ्लो की दिशा (Flow Direction)",
        straight: {
          name: "Straight Line Flow",
          desc: "कच्चा माल से तैयार माल तक एक ही दिशा में मूवमेंट।",
          usage: "ज्यादा वॉल्यूम और आसान प्रोसेस के लिए बेस्ट।",
          plus: "निगरानी करना आसान।"
        },
        uLine: {
          name: "U-Line Flow",
          desc: "शुरुआत और अंत वाले पॉइंट पास-पास होते हैं।",
          usage: "मल्टी-स्किल ऑपरेटरों के लिए बेस्ट।",
          plus: "बेहतर बातचीत और लचीलापन।"
        }
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
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono">Layout Strategy</h3>
        </div>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Definition */}
      <div className="bg-slate-900 border border-cyan-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Arrangement</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-cyan-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-cyan-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">
            "{current.hero.focus}"
         </div>
      </div>

      {/* Flow Direction Comparison */}
      <div className="bg-slate-950/60 border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl space-y-10">
         <h4 className="text-white text-center font-black text-xl md:text-2xl uppercase tracking-[0.3em]">{current.flowSection.title}</h4>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Straight Flow */}
            <div className="bg-slate-900 p-8 rounded-[32px] border border-white/5 flex flex-col gap-6 relative group overflow-hidden">
               <div className="absolute top-0 right-0 p-4 text-white/5 font-black text-4xl italic">Linear</div>
               <h5 className="text-cyan-400 font-black text-xl uppercase italic">{current.flowSection.straight.name}</h5>
               <div className="flex items-center gap-4 py-8">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-white">IN</div>
                  <div className="h-0.5 flex-grow bg-gradient-to-r from-cyan-500 to-transparent relative">
                     <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 border-r-2 border-t-2 border-cyan-500 rotate-45"></div>
                  </div>
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white">OUT</div>
               </div>
               <div className="space-y-2">
                  <p className="text-slate-200 text-sm font-bold">{current.flowSection.straight.desc}</p>
                  <p className="text-slate-400 text-xs italic">💡 {current.flowSection.straight.usage}</p>
                  <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">✅ {current.flowSection.straight.plus}</span>
               </div>
            </div>

            {/* U-Line Flow */}
            <div className="bg-slate-900 p-8 rounded-[32px] border border-white/5 flex flex-col gap-6 relative group overflow-hidden">
               <div className="absolute top-0 right-0 p-4 text-white/5 font-black text-4xl italic">Cellular</div>
               <h5 className="text-indigo-400 font-black text-xl uppercase italic">{current.flowSection.uLine.name}</h5>
               <div className="flex items-center justify-center py-4">
                  <div className="w-32 h-24 border-4 border-indigo-500/30 border-t-0 rounded-b-[40px] relative">
                     <div className="absolute -top-4 -left-6 w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-white text-xs">IN</div>
                     <div className="absolute -top-4 -right-6 w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white text-xs">OUT</div>
                     <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xl">👤</div>
                  </div>
               </div>
               <div className="space-y-2">
                  <p className="text-slate-200 text-sm font-bold">{current.flowSection.uLine.desc}</p>
                  <p className="text-slate-400 text-xs italic">💡 {current.flowSection.uLine.usage}</p>
                  <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">✅ {current.flowSection.uLine.plus}</span>
               </div>
            </div>
         </div>
      </div>

      {/* Key Elements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {current.elements.map((el) => (
            <div key={el.id} className="bg-slate-950/40 border border-white/5 p-8 rounded-[40px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden">
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
                  <p className="text-white text-[10px] font-bold italic leading-tight">📌 {el.example || el.result || el.benefit}</p>
               </div>
            </div>
         ))}
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-[0_0_12px_cyan] animate-pulse"></span>
                Arrangement Engine: Optimized
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Layout Design v4.2 // Industrial Efficiency Standard</div>
      </div>
    </div>
  );
};

export default StrategicLayoutDetail;

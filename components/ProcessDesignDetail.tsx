
import React, { useState } from 'react';
import { Language } from '../types';
import StrategicLayoutDetail from './StrategicLayoutDetail';
import StationLayoutDetail from './StationLayoutDetail';
import CycleTimeStudyDetail from './CycleTimeStudyDetail';
import LineBalancingDetail from './LineBalancingDetail';
import ErgonomicsDetail from './ErgonomicsDetail';

interface ProcessDesignDetailProps {
  onBack: () => void;
  lang: Language;
}

const ProcessDesignDetail: React.FC<ProcessDesignDetailProps> = ({ onBack, lang }) => {
  const [showLayoutDetail, setShowLayoutDetail] = useState(false);
  const [showStationDetail, setShowStationDetail] = useState(false);
  const [showTimeStudyDetail, setShowTimeStudyDetail] = useState(false);
  const [showLineBalancingDetail, setShowLineBalancingDetail] = useState(false);
  const [showErgonomicsDetail, setShowErgonomicsDetail] = useState(false);

  const content = {
    en: {
      title: "Process Design Intelligence",
      subtitle: "Strategic Layout & Workflow Architecture",
      backBtn: "Back",
      hero: {
        question: "What is Process Design?",
        desc: "Process Design is the systematic planning and configuration of the production sequence to ensure work is smooth, safe, fast, and balanced.",
        scope: "It covers layout, workload distribution, timing, and operator safety."
      },
      elementsTitle: "Main Elements of Process Design",
      elements: [
        {
          id: 1,
          title: "Strategic Layout Planning",
          tag: "Smart Arrangement",
          desc: "Arrangement of machines, stations, and flow directions.",
          details: ["Machine/Workstation placement", "Flow direction (Straight / U-line)", "Minimum movement & handling", "Safety & visibility"],
          benefit: "Less movement → less time → higher productivity",
          icon: "🏗️",
          deep: true
        },
        {
          id: 2,
          title: "Station Layout",
          tag: "Micro-Design",
          desc: "Detailed design of every individual workstation.",
          details: ["Tool & material placement", "Bin location & height", "Working zone definition", "Visual aids & WI placement"],
          benefit: "Reduced operator confusion and errors",
          icon: "📍",
          deep: true
        },
        {
          id: 3,
          title: "Cycle Time Study",
          tag: "Performance Metric",
          desc: "Measuring the actual time taken for every operation.",
          details: ["Operation-wise time study", "VA / NVA identification", "Bottleneck identification", "Standard time setting"],
          benefit: "Accurate planning & perfect line balancing",
          icon: "⏱️",
          deep: true
        },
        {
          id: 4,
          title: "Line Balancing",
          tag: "Flow Harmony",
          desc: "Distributing workload evenly across all stations.",
          details: ["Takt time calculation", "CT vs TT comparison", "Work split / merge", "Manpower optimization"],
          benefit: "Less idle time, higher UPH",
          icon: "⚖️",
          deep: true
        },
        {
          id: 5,
          title: "Ergonomics",
          tag: "Human Factor",
          desc: "Ensuring operator comfort and long-term health.",
          details: ["Correct working height", "Posture improvement", "Reach distance optimization", "Fatigue & injury prevention"],
          benefit: "Less fatigue → better quality → higher productivity",
          icon: "👤",
          deep: true
        }
      ]
    },
    hi: {
      title: "प्रोसेस डिज़ाइन इंटेलिजेंस",
      subtitle: "रणनीतिक लेआउट और वर्कफ़्लो आर्किटेक्चर",
      backBtn: "वापस",
      hero: {
        question: "Process Design क्या होता है?",
        desc: "प्रोडक्शन प्रोसेस को इस तरह plan और design करना कि काम smooth, safe, fast और balanced हो।",
        scope: "इसमें लेआउट, वर्कलोड, समय और ऑपरेटर की सुरक्षा सब कवर होता है।"
      },
      elementsTitle: "Process Design के मुख्य तत्व (Main Elements)",
      elements: [
        {
          id: 1,
          title: "Strategic Layout Planning",
          tag: "स्मार्ट अरेंजमेंट",
          desc: "मशीन, स्टेशन और फ्लो का सही तालमेल।",
          details: ["मशीन / वर्कस्टेशन प्लेसमेंट", "मटेरियल फ्लो की दिशा (Straight / U-line)", "न्यूनतम मूवमेंट और हैंडलिंग", "सुरक्षा और विजिबिलिटी"],
          benefit: "कम मूवमेंट → कम समय → ज्यादा प्रोडक्टिविटी",
          icon: "🏗️",
          deep: true
        },
        {
          id: 2,
          title: "Station Layout",
          tag: "विस्तृत डिज़ाइन",
          desc: "हर स्टेशन का बारीकी से डिज़ाइन।",
          details: ["टूल और मटेरियल प्लेसमेंट", "बिन की जगह और ऊंचाई", "वर्किंग ज़ोन की परिभाषा", "विजुअल एड्स और WI की जगह"],
          benefit: "ऑपरेटर का कन्फ्यूजन कम, गलतियां कम",
          icon: "📍",
          deep: true
        },
        {
          id: 3,
          title: "Cycle Time Study",
          tag: "समय का मापन",
          desc: "हर ऑपरेशन में लगने वाले असली समय को मापना।",
          details: ["ऑपरेशन-वाइज टाइम स्टडी", "VA / NVA की पहचान", "बॉटलनेक (रुकावट) की पहचान", "स्टैंडर्ड समय तय करना"],
          benefit: "सटीक प्लानिंग और लाइन बैलेंसिंग",
          icon: "⏱️",
          deep: true
        },
        {
          id: 4,
          title: "Line Balancing",
          tag: "काम का बंटवारा",
          desc: "वर्कलोड को सभी स्टेशनों में बराबर बांटना।",
          details: ["Takt time कैलकुलेशन", "CT बनाम TT की तुलना", "काम को बांटना या जोड़ना", "मैनपावर ऑप्टिमाइजेशन"],
          benefit: "खाली समय कम, UPH बढ़ता है",
          icon: "⚖️",
          deep: true
        },
        {
          id: 5,
          title: "Ergonomics",
          tag: "आराम और सुरक्षा",
          desc: "ऑपरेटर की सेहत और काम करने में आसानी।",
          details: ["काम करने की सही ऊंचाई", "पोस्चर (बैठने/खड़े होने) में सुधार", "पहुंच (Reach) की दूरी को सुधारना", "थकान और चोट से बचाव"],
          benefit: "कम थकान → बेहतर क्वालिटी → ज्यादा प्रोडक्टिविटी",
          icon: "👤",
          deep: true
        }
      ]
    }
  };

  const current = content[lang];

  if (showLayoutDetail) return <StrategicLayoutDetail onBack={() => setShowLayoutDetail(false)} lang={lang} />;
  if (showStationDetail) return <StationLayoutDetail onBack={() => setShowStationDetail(false)} lang={lang} />;
  if (showTimeStudyDetail) return <CycleTimeStudyDetail onBack={() => setShowTimeStudyDetail(false)} lang={lang} />;
  if (showLineBalancingDetail) return <LineBalancingDetail onBack={() => setShowLineBalancingDetail(false)} lang={lang} />;
  if (showErgonomicsDetail) return <ErgonomicsDetail onBack={() => setShowErgonomicsDetail(false)} lang={lang} />;

  const handleElementClick = (id: number) => {
    if (id === 1) setShowLayoutDetail(true);
    if (id === 2) setShowStationDetail(true);
    if (id === 3) setShowTimeStudyDetail(true);
    if (id === 4) setShowLineBalancingDetail(true);
    if (id === 5) setShowErgonomicsDetail(true);
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-cyan-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_12px_cyan]"></div>
              <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono">Process Design</h3>
        </div>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-cyan-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Architecture</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-cyan-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-cyan-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">
            "{current.hero.scope}"
         </div>
      </div>

      {/* Main Elements Grid */}
      <div className="space-y-10">
         <div className="flex items-center gap-4">
            <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.5em] whitespace-nowrap">{current.elementsTitle}</h4>
            <div className="h-px w-full bg-white/10"></div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {current.elements.map((el) => (
               <div 
                  key={el.id} 
                  onClick={() => el.deep && handleElementClick(el.id)}
                  className={`bg-slate-950/60 border border-white/5 p-8 rounded-[40px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden h-full ${el.deep ? 'cursor-pointer border-cyan-500/30' : 'cursor-default'}`}
               >
                  <div className="flex items-center justify-between">
                     <div className="w-14 h-14 bg-slate-900 border border-cyan-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                        {el.icon}
                     </div>
                     <span className="text-cyan-500 font-black text-[10px] uppercase tracking-widest border border-cyan-500/30 px-3 py-1 rounded-full">{el.tag}</span>
                  </div>

                  <div className="space-y-2">
                     <h5 className="text-white text-xl font-black uppercase tracking-tight group-hover:text-cyan-400 transition-colors flex items-center gap-3">
                        <span className="text-cyan-500/40 font-mono">0{el.id}</span>
                        {el.title}
                     </h5>
                     <p className="text-slate-400 text-xs font-bold leading-relaxed italic">"{el.desc}"</p>
                  </div>

                  {el.deep && (
                     <div className="flex items-center gap-2 text-cyan-400 text-[8px] font-black uppercase tracking-widest animate-pulse group-hover:text-white transition-colors">
                        Deep Dive <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7" /></svg>
                     </div>
                  )}

                  <div className="space-y-3 pt-4 border-t border-white/5 mt-auto">
                     <div className="grid grid-cols-1 gap-2">
                        {el.details.map((detail, idx) => (
                           <div key={idx} className="flex items-center gap-3 text-[10px] text-slate-300 font-black uppercase tracking-tight">
                              <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                              {detail}
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl mt-2">
                     <span className="text-emerald-500 text-[8px] font-black uppercase tracking-widest block mb-1">Key Benefit / फायदा</span>
                     <p className="text-white text-[10px] font-bold italic leading-tight">📌 {el.benefit}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Summary Logic Footer */}
      <div className="bg-slate-950/60 border border-white/5 rounded-[40px] p-8 md:p-12 shadow-inner flex flex-col items-center text-center gap-4">
         <p className="text-cyan-400 font-black text-xs md:text-base uppercase tracking-widest">
            {lang === 'hi' 
              ? 'सटीक डिज़ाइन = बेहतर प्रोडक्टिविटी + खुश ऑपरेटर' 
              : 'Precise Design = Higher Productivity + Happy Operator'}
         </p>
         <div className="flex gap-4">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse [animation-delay:0.4s]"></div>
         </div>
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-[0_0_12px_cyan] animate-pulse"></span>
                Design Logic: Active
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Process Architecture v10.2 // Industrial Standard</div>
      </div>
    </div>
  );
};

export default ProcessDesignDetail;

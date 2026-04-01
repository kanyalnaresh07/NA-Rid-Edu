
import React, { useState } from 'react';
import { Language } from '../types';
import LOBDetail from './LOBDetail';
import WIDetail from './WIDetail';
import APQPPPAPDetail from './APQPPPAPDetail';
import FMEADMAICDetail from './FMEADMAICDetail';
import ProcessDesignDetail from './ProcessDesignDetail';
import ToolsJigsDetail from './ToolsJigsDetail';
import DrawingsTechDocsDetail from './DrawingsTechDocsDetail';
import ProcessImprovementDetail from './ProcessImprovementDetail';
import NPILaunchDetail from './NPILaunchDetail';

interface ProcessEngineeringDetailProps {
  onBack: () => void;
  lang: Language;
}

const ProcessEngineeringDetail: React.FC<ProcessEngineeringDetailProps> = ({ onBack, lang }) => {
  const [activeSubView, setActiveSubView] = useState<string | null>(null);

  const content = {
    en: {
      title: "Process Engineering Hub",
      subtitle: "The Factory Brain & System Design",
      backBtn: "Back to Main",
      hero: {
        mantra: "Optimizing Man, Machine, and Method.",
        desc: "Process Engineering designs the sequence of work. We build the system that makes production fast, easy, and error-free."
      },
      sections: [
        {
          id: "core",
          title: "Process Design",
          icon: "⚙️",
          desc: "Strategic layout planning and workload distribution across stations.",
          deep: "process_design"
        },
        {
          id: "tools",
          title: "Tools, Jigs & Fixtures",
          icon: "🛠️",
          desc: "Designing aids that make work easier and prevent mistakes (Poka-Yoke).",
          deep: "tools"
        },
        {
          id: "docs",
          title: "Drawings & Tech Docs",
          icon: "📐",
          desc: "Managing Blueprints, CAD files, and Engineering Changes (ECN/ECR).",
          deep: "docs"
        },
        {
          id: "standards",
          title: "Work Instructions",
          icon: "📝",
          desc: "SOP, WI, and OPL (One Point Lessons) for line operators.",
          deep: "wi"
        },
        {
          id: "improvement",
          title: "Process Improvement",
          icon: "⚡",
          desc: "Kaizen, SMED (Quick Changeover), and productivity boosting.",
          deep: "improvement"
        },
        {
          id: "npi",
          title: "NPI / NPD Launch",
          icon: "🚀",
          desc: "Managing New Product Introduction and formal approval roadmaps.",
          deep: "npi"
        },
        {
          id: "risk",
          title: "Quality & Risk Support",
          icon: "🛡️",
          desc: "FMEA and Control Plan support to ensure zero process defects.",
          deep: "fmea"
        }
      ]
    },
    hi: {
      title: "प्रोसेस इंजीनियरिंग हब",
      subtitle: "फैक्ट्री का दिमाग और सिस्टम डिज़ाइन",
      backBtn: "वापस जाएं",
      hero: {
        mantra: "इंसान, मशीन और तरीके का तालमेल।",
        desc: "प्रोसेस इंजीनियरिंग काम करने के तरीके को डिज़ाइन करती है। हम ऐसा सिस्टम बनाते हैं जिससे प्रोडक्शन तेज़ और आसान हो।"
      },
      sections: [
        {
          id: "core",
          title: "प्रोसेस डिज़ाइन",
          icon: "⚙️",
          desc: "स्टेशनों के बीच काम का बँवारा और लेआउट की सटीक प्लानिंग।",
          deep: "process_design"
        },
        {
          id: "tools",
          title: "टूल्स, जिग्स और फिक्स्चर",
          icon: "🛠️",
          desc: "ऐसे मददगार टूल्स बनाना जिससे काम आसान हो और गलती न हो (पोका-योक)।",
          deep: "tools"
        },
        {
          id: "docs",
          title: "ड्राइंग और टेक्निकल डॉक्स",
          icon: "📐",
          desc: "नक्शे (Blueprints), CAD फाइल्स और बदलावों (ECN/ECR) को मैनेज करना।",
          deep: "docs"
        },
        {
          id: "standards",
          title: "वर्क इंस्ट्रक्शन",
          icon: "📝",
          desc: "SOP, WI और OPL (वन पॉइंट लेसन) तैयार करना।",
          deep: "wi"
        },
        {
          id: "improvement",
          title: "प्रोसेस सुधार",
          icon: "⚡",
          desc: "काइज़न (Kaizen), SMED और प्रोडक्टिविटी बढ़ाना।",
          deep: "improvement"
        },
        {
          id: "npi",
          title: "NPI / NPD लॉन्च",
          icon: "🚀",
          desc: "नए प्रोडक्ट को शुरू करने और अप्रूवल की पूरी योजना।",
          deep: "npi"
        },
        {
          id: "risk",
          title: "क्वालिटी और रिस्क सपोर्ट",
          icon: "🛡️",
          desc: "PFMEA और कंट्रोल प्लान के ज़रिए जोखिमों को रोकना।",
          deep: "fmea"
        }
      ]
    }
  };

  const current = content[lang];

  if (activeSubView === 'wi') return <WIDetail onBack={() => setActiveSubView(null)} lang={lang} />;
  if (activeSubView === 'fmea') return <FMEADMAICDetail onBack={() => setActiveSubView(null)} lang={lang} />;
  if (activeSubView === 'process_design') return <ProcessDesignDetail onBack={() => setActiveSubView(null)} lang={lang} />;
  if (activeSubView === 'tools') return <ToolsJigsDetail onBack={() => setActiveSubView(null)} lang={lang} />;
  if (activeSubView === 'docs') return <DrawingsTechDocsDetail onBack={() => setActiveSubView(null)} lang={lang} />;
  if (activeSubView === 'improvement') return <ProcessImprovementDetail onBack={() => setActiveSubView(null)} lang={lang} />;
  if (activeSubView === 'npi') return <NPILaunchDetail onBack={() => setActiveSubView(null)} lang={lang} />;

  return (
    <div className="flex flex-col gap-5 animate-in fade-in duration-500 pb-10 max-w-7xl mx-auto px-4 md:px-6 py-6">
      {/* Header - Scaled Down */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-cyan-500/20 pb-4 bg-slate-950/40 p-4 rounded-t-2xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_cyan]"></div>
              <span className="text-cyan-400 text-[9px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono">{current.title}</h3>
        </div>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2.5 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro - Scaled Down */}
      <div className="bg-slate-900 border border-cyan-500/30 p-6 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-6 group">
         <div className="absolute top-0 right-0 p-4 text-6xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">System Engine</div>
         <div className="space-y-2 max-w-3xl relative z-10">
            <h4 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter italic leading-none">Process Intelligence</h4>
            <p className="text-cyan-400 font-black text-[10px] md:text-base uppercase tracking-widest italic drop-shadow-lg">"{current.hero.mantra}"</p>
         </div>
         <div className="bg-white/5 p-4 md:p-6 rounded-2xl border-l-4 border-cyan-500 max-w-3xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-[11px] md:text-sm font-bold leading-relaxed italic">
            "{current.hero.desc}"
         </div>
      </div>

      {/* Grid Sections - Updated to Horizontal 4 Column Layout (4x3 potential) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
         {current.sections.map((sec, i) => (
           <div 
             key={sec.id} 
             onClick={() => sec.deep && setActiveSubView(sec.deep)}
             className={`bg-slate-950/60 border border-white/5 p-5 rounded-2xl hover:bg-slate-900 transition-all group flex flex-col gap-4 shadow-xl relative overflow-hidden h-full ${sec.deep ? 'cursor-pointer border-cyan-500/30' : 'cursor-default'}`}
           >
              <div className="flex items-center justify-between">
                 <div className={`w-10 h-10 bg-slate-900 border border-cyan-500/20 rounded-xl flex items-center justify-center text-xl shadow-lg group-hover:scale-105 transition-transform`}>{sec.icon}</div>
                 <span className="text-cyan-500 font-black text-[8px] uppercase tracking-widest opacity-40">PROC-0{i+1}</span>
              </div>
              
              <div className="space-y-1.5">
                 <h5 className={`text-white font-black text-sm md:text-base uppercase tracking-tight transition-colors ${sec.deep ? 'group-hover:text-cyan-400' : ''}`}>{sec.title}</h5>
                 <p className="text-slate-400 text-[9px] font-bold leading-relaxed italic">{sec.desc}</p>
              </div>

              {sec.deep && (
                <div className="mt-auto pt-2 flex items-center gap-2 text-cyan-400 text-[7px] font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                   Deep Dive Module <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              )}


           </div>
         ))}
      </div>

      {/* Footer System Status - Scaled Down */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-3 bg-slate-950/60 rounded-2xl border border-white/5 text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-6">
             <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_8px_cyan] animate-pulse"></span>
                Process Node: Active
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Standard: IATF 16949 // System Architecture v10.2</div>
      </div>
    </div>
  );
};

export default ProcessEngineeringDetail;

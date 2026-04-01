
import React, { useState } from 'react';
import { Language } from '../types';
import IQCDetail from './IQCDetail';
import IPQCDetail from './IPQCDetail';
import FQCOQCCombinedDetail from './FQCOQCCombinedDetail';

interface QualityManagementDetailProps {
  onBack: () => void;
  lang: Language;
}

const QualityManagementDetail: React.FC<QualityManagementDetailProps> = ({ onBack, lang }) => {
  const [showIQCDetail, setShowIQCDetail] = useState(false);
  const [showIPQCDetail, setShowIPQCDetail] = useState(false);
  const [showFQCOQCDetail, setShowFQCOQCDetail] = useState(false);

  const content = {
    en: {
      title: "Quality Management System",
      subtitle: "The Standard of Excellence",
      backBtn: "Back",
      hero: {
        definition: "Quality is the ability of a product or service to satisfy customer needs consistently.",
        philosophy: "Precision at every stage, Perfection in every unit."
      },
      stages: [
        {
          id: "iqc",
          title: "IQC",
          fullName: "Incoming Quality Control",
          tag: "The Entry Gate",
          desc: "Verification of raw materials and components from suppliers before production.",
          focus: ["Vendor material check", "AQL Sampling", "GRN clearance"],
          impact: "Prevents bad material entry.",
          icon: "📥",
          color: "blue",
          clickable: true
        },
        {
          id: "ipqc",
          title: "IPQC / PQC",
          fullName: "In-Process Quality Control",
          tag: "The Process Sentinel",
          desc: "Continuous monitoring during the manufacturing process to catch errors early.",
          focus: ["Patrol checks", "Parameter audits", "SPC Control"],
          impact: "Reduces rework & scrap.",
          icon: "⚙️",
          color: "cyan",
          clickable: true
        },
        {
          id: "fqc_oqc",
          title: "FQC & OQC",
          fullName: "Final & Outgoing Quality",
          tag: "The Final Barrier",
          desc: "100% end-of-line checks (FQC) and warehouse dispatch audits (OQC).",
          focus: ["100% Functional Test", "AQL Dispatch Audit", "Packaging Check"],
          impact: "Guarantees 100% Customer Smile.",
          icon: "🛡️",
          color: "emerald",
          clickable: true
        }
      ],
      pipeline: {
        title: "The Quality Pipeline",
        steps: ["Raw Material", "IQC Gate", "Production Line", "IPQC Patrol", "FQC (100%)", "Warehouse", "OQC Audit", "Customer"]
      }
    },
    hi: {
      title: "क्वालिटी मैनेजमेंट सिस्टम",
      subtitle: "उत्कृष्टता का मानक",
      backBtn: "वापस",
      hero: {
        definition: "क्वालिटी का मतलब है किसी उत्पाद की वह क्षमता जिससे वह ग्राहकों की ज़रूरतों को पूरा कर सके।",
        philosophy: "हर स्तर पर शुद्धता, हर यूनिट में पूर्णता।"
      },
      stages: [
        {
          id: "iqc",
          title: "IQC",
          fullName: "इनकमिंग क्वालिटी कंट्रोल",
          tag: "प्रवेश द्वार",
          desc: "सप्लायर से आए माल की जांच, फ्लोर पर जाने से पहले।",
          focus: ["वेंडर मटेरियल जांच", "AQL सैंपलिंग", "GRN क्लियरेंस"],
          impact: "खराब माल को अंदर आने से रोकता है।",
          icon: "📥",
          color: "blue",
          clickable: true
        },
        {
          id: "ipqc",
          title: "IPQC / PQC",
          fullName: "इन-प्रोसेस क्वालिटी कंट्रोल",
          tag: "प्रोसेस का पहरेदार",
          desc: "सामान बनने के दौरान की जाने वाली लगातार निगरानी और गश्त।",
          focus: ["पेट्रोलिंग चेक", "पैरामीटर ऑडिट", "SPC कंट्रोल"],
          impact: "रीवर्क और वेस्टेज कम करता है।",
          icon: "⚙️",
          color: "cyan",
          clickable: true
        },
        {
          id: "fqc_oqc",
          title: "FQC और OQC",
          fullName: "अंतिम और आउटगोइंग जांच",
          tag: "अंतिम सुरक्षा दीवार",
          desc: "लाइन के अंत में 100% जांच (FQC) और डिस्पैच से पहले सैंपलिंग ऑडिट (OQC)।",
          focus: ["100% फंक्शनल टेस्ट", "AQL डिस्पैच ऑडिट", "पैकिंग की जांच"],
          impact: "ग्राहकों को 100% सही माल की गारंटी।",
          icon: "🛡️",
          color: "emerald",
          clickable: true
        }
      ],
      pipeline: {
        title: "क्वालिटी पाइपलाइन",
        steps: ["कच्चा माल", "IQC गेट", "प्रोडक्शन", "IPQC चेक", "FQC (100%)", "वेयरहाउस", "OQC ऑडिट", "ग्राहक"]
      }
    }
  };

  const current = content[lang];

  if (showIQCDetail) return <IQCDetail onBack={() => setShowIQCDetail(false)} lang={lang} />;
  if (showIPQCDetail) return <IPQCDetail onBack={() => setShowIPQCDetail(false)} lang={lang} />;
  if (showFQCOQCDetail) return <FQCOQCCombinedDetail onBack={() => setShowFQCOQCDetail(false)} lang={lang} />;

  const handleStageClick = (stageId: string) => {
    if (stageId === 'iqc') setShowIQCDetail(true);
    if (stageId === 'ipqc') setShowIPQCDetail(true);
    if (stageId === 'fqc_oqc') setShowFQCOQCDetail(true);
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
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

      {/* Hero Definition */}
      <div className="bg-slate-900/60 border border-indigo-500/20 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-indigo-500/[0.03] select-none uppercase italic">TRUST</div>
         <div className="relative z-10 space-y-6">
            <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter leading-tight max-w-4xl italic">
               "{current.hero.definition}"
            </h4>
            <p className="text-indigo-400 font-black text-xs md:text-sm uppercase tracking-[0.3em] pl-6 border-l-4 border-indigo-500">
               {current.hero.philosophy}
            </p>
         </div>
      </div>

      {/* 3 Merged Stages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {current.stages.map((stage, i) => (
           <div 
             key={stage.id} 
             onClick={() => stage.clickable && handleStageClick(stage.id)}
             className={`bg-slate-950/40 border border-${stage.color}-500/20 p-6 rounded-[32px] hover:bg-slate-900 transition-all group flex flex-col gap-5 shadow-xl relative overflow-hidden h-full ${stage.clickable ? 'cursor-pointer border-indigo-500/30' : ''}`}
           >
              <div className="flex items-center justify-between relative z-10">
                 <div className={`w-12 h-12 bg-${stage.color}-500/10 border border-${stage.color}-500/30 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {stage.icon}
                 </div>
                 <span className={`text-[8px] font-black text-${stage.color}-400 border border-${stage.color}-500/20 px-2 py-0.5 rounded-full uppercase tracking-widest`}>{stage.tag}</span>
              </div>

              <div className="relative z-10">
                 <h5 className="text-white font-black text-xl uppercase mb-1 tracking-tight group-hover:text-white transition-colors">{stage.title}</h5>
                 <p className={`text-${stage.color}-400 text-[9px] font-black uppercase tracking-widest mb-3 opacity-70`}>{stage.fullName}</p>
                 <p className="text-slate-400 text-[11px] font-bold leading-relaxed">{stage.desc}</p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/5 relative z-10 mt-auto">
                 {stage.focus.map((f, idx) => (
                   <div key={idx} className="flex items-center gap-2 text-[10px] text-slate-200 font-bold uppercase tracking-tight">
                      <div className={`w-1 h-1 bg-${stage.color}-500 rounded-full`}></div>
                      {f}
                   </div>
                 ))}
              </div>

              {stage.clickable && (
                <div className="relative z-10 pt-2 flex items-center gap-2 text-white/40 text-[8px] font-black uppercase tracking-widest group-hover:text-white transition-colors">
                   Details <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7" /></svg>
                </div>
              )}
           </div>
         ))}
      </div>

      {/* The Quality Pipeline Visualization */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl space-y-10 overflow-x-auto no-scrollbar">
         <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-center w-full">{current.pipeline.title}</h4>
         <div className="flex items-center justify-between min-w-[900px] relative px-10">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-emerald-500/20 -translate-y-1/2"></div>
            {current.pipeline.steps.map((step, i) => {
               const isGate = step.includes('Gate') || step.includes('Audit') || step.includes('100%');
               return (
                 <div key={i} className="relative z-10 flex flex-col items-center gap-4 group">
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${isGate ? 'bg-indigo-600 border-indigo-400 scale-125 shadow-[0_0_20px_indigo]' : 'bg-slate-900 border-white/20'}`}>
                       {isGate ? (
                         <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4" />
                       </svg>
                       ) : (
                         <span className="text-white/40 font-black text-[10px]">{i+1}</span>
                       )}
                    </div>
                    <span className={`text-[9px] font-black uppercase tracking-widest whitespace-nowrap ${isGate ? 'text-indigo-400' : 'text-slate-500'}`}>
                       {step}
                    </span>
                 </div>
               );
            })}
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_indigo]"></span>
                Quality Ledger: Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_emerald]"></span>
                Gate Combined: Active
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Industrial Hub v9.6 // Quality Node</div>
      </div>
    </div>
  );
};

export default QualityManagementDetail;

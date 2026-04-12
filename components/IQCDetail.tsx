
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import MaterialReceivingDetail from './MaterialReceivingDetail';
import VisualInspectionDetail from './VisualInspectionDetail';
import DimensionalInspectionDetail from './DimensionalInspectionDetail';
import SamplingInspectionDetail from './SamplingInspectionDetail';
import NCRDetail from './NCRDetail';

interface IQCDetailProps {
  onBack: () => void;
  lang: Language;
}

const IQCDetail: React.FC<IQCDetailProps> = ({ onBack, lang }) => {
  const [showMaterialDeepDive, setShowMaterialDeepDive] = useState(false);
  const [showVisualDeepDive, setShowVisualDeepDive] = useState(false);
  const [showDimensionalDeepDive, setShowDimensionalDeepDive] = useState(false);
  const [showSamplingDeepDive, setShowSamplingDeepDive] = useState(false);
  const [showNCRDeepDive, setShowNCRDeepDive] = useState(false);

  const content = {
    en: {
      title: "Incoming Quality Control (IQC)",
      subtitle: "Material Integrity & Vendor Compliance",
      backBtn: "Back",
      sections: [
        {
          id: "receiving",
          title: "1. Material Receiving Verification",
          tag: "Document Check",
          desc: "The first step when material arrives at the gate. We verify if the physical material matches the paperwork.",
          points: ["GRN (Goods Receipt Note) check", "MRN Verification", "Invoice vs Physical Qty", "Vendor COA (Cert. of Analysis)"],
          icon: "📄",
          color: "blue",
          clickable: true
        },
        {
          id: "visual",
          title: "2. Visual Inspection",
          tag: "Aesthetics",
          desc: "Checking the appearance and external condition of parts without using measuring tools.",
          points: ["Surface finish & Color", "Rust or Damage check", "Proper Packaging", "Labeling accuracy"],
          icon: "👁️",
          color: "cyan",
          clickable: true
        },
        {
          id: "dimensional",
          title: "3. Dimensional Inspection",
          tag: "Precision",
          desc: "Verification of physical measurements against the technical drawing or specifications.",
          points: ["Vernier Caliper / Micrometer use", "Height Gauge / Thread Gauge", "Critical dimension check", "Drawing tolerance match"],
          icon: "📏",
          color: "indigo",
          clickable: true
        },
        {
          id: "sampling",
          title: "4. Sampling Inspection (AQL)",
          tag: "Statistical Quality",
          desc: "Inspecting a representative sample from a batch instead of checking every single piece.",
          points: ["AQL (Acceptance Quality Limit)", "Lot size vs Sample size", "Accept/Reject criteria", "Random selection method"],
          icon: "🎲",
          color: "amber",
          clickable: true
        },
        {
          id: "ncr",
          title: "5. NCR / SCAR Management",
          tag: "Corrective Action",
          desc: "Protocol for handling materials that fail the inspection criteria.",
          points: ["NCR (Non-Conformance Report)", "SCAR (Supplier Corrective Action)", "Rejection tagging (Red Tag)", "Root cause from vendor"],
          icon: "🚫",
          color: "rose",
          clickable: true
        }
      ],
      footer: {
        engine: "IQC Analysis: Active",
        standard: "Gate Control: Secured"
      }
    },
    hi: {
      title: "इनकमिंग क्वालिटी कंट्रोल (IQC)",
      subtitle: "मटेरियल की शुद्धता और वेंडर जांच",
      backBtn: "वापस",
      sections: [
        {
          id: "receiving",
          title: "1. मटेरियल रिसीविंग वेरिफिकेशन",
          tag: "दस्तावेज जांच",
          desc: "मटेरियल आने पर सबसे पहला कदम। हम चेक करते हैं कि आया हुआ सामान कागजों (Documents) से मेल खाता है या नहीं।",
          points: ["GRN / MRN की जांच", "इनवॉइस और असली गिनती", "वेंडर टेस्ट रिपोर्ट (COA)", "पैकिंग लिस्ट वेरिफिकेशन"],
          icon: "📄",
          color: "blue",
          clickable: true
        },
        {
          id: "visual",
          title: "2. विजुअल इंस्पेक्शन (Visual)",
          tag: "दिखावट",
          desc: "बिना किसी टूल के आँखों से सामान की बाहरी स्थिति और क्वालिटी को चेक करना।",
          points: ["सतह और रंग की जांच", "जंग या डैमेज चेक", "सही पैकिंग की जांच", "लेबल और नाम की शुद्धता"],
          icon: "👁️",
          color: "cyan",
          clickable: true
        },
        {
          id: "dimensional",
          title: "3. डायमेंशनल इंस्पेक्शन (Dimensional)",
          tag: "सटीक माप",
          desc: "ड्राइंग और स्पेसिफिकेशन के हिसाब से सामान के साइज और माप की जांच करना।",
          points: ["वर्नियर और माइक्रोमीटर का उपयोग", "हाइट गेज और थ्रेड गेज", "ड्राइंग के अनुसार साइज चेक", "सहिष्णुता (Tolerance) की जांच"],
          icon: "📏",
          color: "indigo",
          clickable: true
        },
        {
          id: "sampling",
          title: "4. सैंपलिंग इंस्पेक्शन (AQL)",
          tag: "सांख्यिकीय जांच",
          desc: "पूरे लॉट में से कुछ सैंपल निकालकर चेक करना (AQL नियमों के अनुसार)।",
          points: ["AQL लिमिट सेट करना", "सैंपल साइज का चुनाव", "पास/फेल का फैसला", "रैंडम सैंपलिंग तरीका"],
          icon: "🎲",
          color: "amber",
          clickable: true
        },
        {
          id: "ncr",
          title: "5. NCR / SCAR मैनेजमेंट",
          tag: "सुधारात्मक कार्यवाही",
          desc: "जो सामान रिजेक्ट हो जाता है, उसके लिए रिपोर्ट बनाना और वेंडर को सुधार के लिए कहना।",
          points: ["NCR (नॉन-कन्फर्मेन्स रिपोर्ट)", "SCAR (सप्लायर सुधार रिपोर्ट)", "रिजेक्शन टैग (Red Tag)", "वेंडर से जड़ (Root cause) पूछना"],
          icon: "🚫",
          color: "rose",
          clickable: true
        }
      ],
      footer: {
        engine: "IQC एनालिसिस: सक्रिय",
        standard: "गेट कंट्रोल: सुरक्षित"
      }
    }
  };

  const current = content[lang];

  if (showMaterialDeepDive) {
    return <MaterialReceivingDetail onBack={() => setShowMaterialDeepDive(false)} lang={lang} />;
  }

  if (showVisualDeepDive) {
    return <VisualInspectionDetail onBack={() => setShowVisualDeepDive(false)} lang={lang} />;
  }

  if (showDimensionalDeepDive) {
    return <DimensionalInspectionDetail onBack={() => setShowDimensionalDeepDive(false)} lang={lang} />;
  }

  if (showSamplingDeepDive) {
    return <SamplingInspectionDetail onBack={() => setShowSamplingDeepDive(false)} lang={lang} />;
  }

  if (showNCRDeepDive) {
    return <NCRDetail onBack={() => setShowNCRDeepDive(false)} lang={lang} />;
  }

  const handleSectionClick = (id: string) => {
    if (id === 'receiving') setShowMaterialDeepDive(true);
    if (id === 'visual') setShowVisualDeepDive(true);
    if (id === 'dimensional') setShowDimensionalDeepDive(true);
    if (id === 'sampling') setShowSamplingDeepDive(true);
    if (id === 'ncr') setShowNCRDeepDive(true);
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-6xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-blue-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(59,130,246,0.8)]"></div>
              <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg">{current.title}</h3>
        </div>
        <button 
          onClick={onBack}
          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900/60 border border-blue-500/20 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-blue-400/[0.03] select-none uppercase italic">INCOMING</div>
         <div className="relative z-10 space-y-4">
            <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-widest border-b-2 border-blue-500 w-fit pb-2">Entry Gate Standards</h4>
            <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed max-w-4xl italic">
               "If bad material enters the factory, a bad product leaves the factory. IQC is the first shield of quality."
            </p>
         </div>
      </div>

      {/* 5 Main Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {current.sections.map((section, i) => (
           <motion.button 
             key={section.id} 
             onClick={() => section.clickable && handleSectionClick(section.id)}
             whileHover={section.clickable ? { 
               scale: 1.02,
               backgroundColor: "rgba(15, 23, 42, 0.8)",
               borderColor: "rgba(59, 130, 246, 0.5)"
             } : {}}
             whileTap={section.clickable ? { scale: 0.98 } : {}}
             className={`bg-slate-950/40 border border-${section.color}-500/20 p-8 rounded-[32px] transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden h-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950 ${section.clickable ? 'cursor-pointer border-blue-500/40 shadow-blue-500/10' : 'cursor-default'}`}
           >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-${section.color}-500/5 blur-[40px] rounded-full`}></div>
              
              <div className="flex items-center justify-between relative z-10">
                 <div className={`w-14 h-14 bg-${section.color}-500/10 border border-${section.color}-500/30 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {section.icon}
                 </div>
                 <span className={`text-[9px] font-black text-${section.color}-400 border border-${section.color}-500/30 px-3 py-1 rounded-full uppercase tracking-widest`}>{section.tag}</span>
              </div>

              <div className="relative z-10">
                 <h5 className="text-white font-black text-xl uppercase mb-3 tracking-tighter leading-tight group-hover:translate-x-2 transition-transform">{section.title}</h5>
                 <p className="text-slate-400 text-xs font-bold leading-relaxed">{section.desc}</p>
              </div>

              {section.clickable && (
                <div className="relative z-10 flex items-center gap-2 text-blue-400 text-[8px] font-black uppercase tracking-widest animate-pulse">
                   Explore Module <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7" /></svg>
                </div>
              )}

              <div className="space-y-3 pt-4 border-t border-white/5 relative z-10 mt-auto">
                 <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block mb-2">Checkpoints / मुख्य बिंदु</span>
                 {section.points.map((p, idx) => (
                   <div key={idx} className="flex items-center gap-3 text-[10px] text-slate-200 font-bold uppercase tracking-tight">
                      <div className={`w-1.5 h-1.5 bg-${section.color}-500 rounded-full`}></div>
                      {p}
                   </div>
                 ))}
              </div>
           </motion.button>
         ))}
      </div>

      {/* Tools Showcase for Dimensional */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl space-y-8">
         <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-center w-full">IQC Essential Toolset</h4>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
               { name: "Vernier Caliper", icon: "📏" },
               { name: "Micrometer", icon: "🔬" },
               { name: "Thread Gauge", icon: "🔩" },
               { name: "Height Gauge", icon: "📐" }
            ].map((tool, i) => (
               <motion.div 
                 key={i} 
                 whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.5)" }}
                 className="bg-slate-950 p-6 rounded-3xl border border-white/5 flex flex-col items-center gap-3 group transition-all shadow-lg"
               >
                  <span className="text-3xl group-hover:scale-125 transition-transform">{tool.icon}</span>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-center">{tool.name}</span>
               </motion.div>
            ))}
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]"></span>
                {current.footer.engine}
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
                {current.footer.standard}
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest">Industrial Hub v5.8 // Entry Node</div>
      </div>
    </div>
  );
};

export default IQCDetail;

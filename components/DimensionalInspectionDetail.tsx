
import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface DimensionalInspectionDetailProps {
  onBack: () => void;
  lang: Language;
}

const DimensionalInspectionDetail: React.FC<DimensionalInspectionDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Dimensional Inspection Hub",
      subtitle: "Precision Measurement & Tolerance Control",
      backBtn: "Back to IQC",
      hero: {
        question: "What is Dimensional Inspection?",
        desc: "It is the process of measuring part dimensions (Length, Diameter, Thickness, etc.) and comparing them with the technical drawing or specifications to ensure a perfect fit.",
        rule: "Visual = By Eyes | Dimension = By Instruments"
      },
      categories: [
        {
          title: "Linear Dimensions",
          icon: "📏",
          items: ["Length", "Width", "Height", "Thickness"]
        },
        {
          title: "Diameter & Holes",
          icon: "⭕",
          items: ["Inner Diameter (ID)", "Outer Diameter (OD)", "Hole Depth", "Pitch"]
        },
        {
          title: "Location & Position",
          icon: "🎯",
          items: ["Hole Center Distance", "Edge to Hole", "Slot Position", "Alignment"]
        },
        {
          title: "Form & Shape",
          icon: "📐",
          items: ["Flatness", "Straightness", "Roundness", "Camber"]
        }
      ],
      tools: [
        { name: "Vernier Caliper", icon: "📐", use: "Standard Linear & ID/OD" },
        { name: "Micrometer", icon: "🔬", use: "High Precision Thickness" },
        { name: "Height Gauge", icon: "📊", use: "Vertical Accuracy" },
        { name: "Plug / Ring Gauge", icon: "🔩", use: "Go / No-Go Fast Check" }
      ],
      process: {
        title: "Standard Inspection Workflow",
        steps: [
          "Check Drawing & Rev Number",
          "Identify Critical Dimensions",
          "Select Calibrated Instrument",
          "Measure as per AQL Sampling",
          "Compare Actual vs Spec",
          "Record Decision (OK / NG)"
        ]
      },
      rules: [
        "Calibration must be VALID (check sticker).",
        "Tolerance limits are STRICT (Zero compromise).",
        "Out of Spec = Immediate HOLD/REJECT.",
        "Verify Vendor COA values physically."
      ],
      example: {
        title: "Tolerance Check Example",
        spec: "Drawing: 10.00 ± 0.05 mm",
        actual: "Measured: 10.08 mm",
        status: "NG / REJECTED",
        reason: "Outside +0.05 limit"
      }
    },
    hi: {
      title: "डायमेंशनल इंस्पेक्शन हब",
      subtitle: "सटीक माप और टोलरेंस कंट्रोल",
      backBtn: "IQC पर वापस जाएं",
      hero: {
        question: "Dimension Inspection क्या है?",
        desc: "यह पार्ट के साइज (लंबाई, चौड़ाई, व्यास आदि) को मापने और उसे टेक्निकल ड्राइंग या स्पेसिफिकेशन से मिलान करने की प्रक्रिया है ताकि पार्ट असेंबली में सही फिट हो सके।",
        rule: "विजुअल = आँखों से | डायमेंशन = टूल/मशीन से"
      },
      categories: [
        {
          title: "लीनियर माप (Linear)",
          icon: "📏",
          items: ["लंबाई (Length)", "चौड़ाई (Width)", "ऊंचाई (Height)", "मोटाई (Thickness)"]
        },
        {
          title: "व्यास और छेद (Holes)",
          icon: "⭕",
          items: ["अंदर का व्यास (ID)", "बाहर का व्यास (OD)", "छेद की गहराई (Depth)", "पिच (Pitch)"]
        },
        {
          title: "लोकेशन और पोजीशन",
          icon: "🎯",
          items: ["छेद के बीच की दूरी", "किनारे से दूरी", "स्लॉट की जगह", "अलाइनमेंट"]
        },
        {
          title: "आकार और रूप (Form)",
          icon: "📐",
          items: ["समतलता (Flatness)", "सीधापन (Straightness)", "गोलाई (Roundness)", "झुकाव (Camber)"]
        }
      ],
      tools: [
        { name: "वर्नियर कैलिपर", icon: "📐", use: "सामान्य माप और ID/OD" },
        { name: "माइक्रोमीटर", icon: "🔬", use: "ज्यादा सटीक मोटाई के लिए" },
        { name: "हाइट गेज", icon: "📊", use: "वर्टिकल ऊंचाई मापने के लिए" },
        { name: "प्लग / रिंग गेज", icon: "🔩", use: "Go / No-Go (तेज़ जांच)" }
      ],
      process: {
        title: "जांच का सही तरीका (Workflow)",
        steps: [
          "ड्राइंग और रिवीजन नंबर चेक करें",
          "ज़रूरी (Critical) माप की पहचान करें",
          "सही कैलिब्रेटेड टूल चुनें",
          "सैंपलिंग नियमों के अनुसार माप लें",
          "ड्राइंग और असली माप का मिलान करें",
          "रिजल्ट रिकॉर्ड करें (OK / NG)"
        ]
      },
      rules: [
        "कैलिब्रेशन वैलिड होना चाहिए (स्टिकर देखें)।",
        "ड्राइंग टोलरेंस का सख्ती से पालन करें।",
        "स्पेसिफिकेशन से बाहर = तुरंत HOLD / REJECT।",
        "वेंडर COA की वैल्यू को खुद भी चेक करें।"
      ],
      example: {
        title: "टोलरेंस का उदाहरण",
        spec: "ड्राइंग: 10.00 ± 0.05 mm",
        actual: "असली माप: 10.08 mm",
        status: "NG / REJECT (रिजेक्ट)",
        reason: "+0.05 की सीमा से बाहर है"
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
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(99,102,241,0.8)]"></div>
              <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg">{current.title}</h3>
        </div>
        <motion.button 
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBack}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </motion.button>
      </div>

      {/* Hero Definition */}
      <div className="bg-slate-900/60 border border-indigo-500/20 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-indigo-500/[0.03] select-none uppercase italic">PRECISION</div>
         <div className="relative z-10 space-y-6">
            <div className="space-y-2">
               <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter">{current.hero.question}</h4>
               <p className="text-slate-300 text-sm md:text-xl font-bold leading-relaxed max-w-4xl italic">
                  "{current.hero.desc}"
               </p>
            </div>
            <div className="inline-block px-5 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-indigo-400 font-black text-xs md:text-sm uppercase tracking-widest">
               {current.hero.rule}
            </div>
         </div>
      </div>

      {/* Measurement Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {current.categories.map((cat, i) => (
           <motion.div 
             key={i} 
             whileHover={{ y: -5, borderColor: "rgba(99, 102, 241, 0.3)" }}
             className="bg-slate-950/40 border border-white/5 p-6 rounded-[32px] transition-all group flex flex-col gap-5 shadow-xl"
           >
              <div className="flex items-center justify-between">
                 <div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    {cat.icon}
                 </div>
                 <div className="h-1 w-8 bg-indigo-500/20 rounded-full"></div>
              </div>
              <h5 className="text-white font-black text-sm md:text-base uppercase tracking-tight leading-tight group-hover:text-indigo-400 transition-colors">{cat.title}</h5>
              <div className="space-y-2">
                 {cat.items.map((item, idx) => (
                   <div key={idx} className="flex items-center gap-3 text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-tighter">
                      <div className="w-1 h-1 bg-indigo-500/40 rounded-full"></div>
                      {item}
                   </div>
                 ))}
              </div>
           </motion.div>
         ))}
      </div>

      {/* Tools & Workflow Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         
         {/* Essential Tools */}
         <div className="lg:col-span-7 bg-slate-900/60 border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8">
            <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4">
               <span className="w-12 h-0.5 bg-indigo-500"></span>
               IQC Measurement Arsenal
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {current.tools.map((tool, i) => (
                 <div key={i} className="flex gap-4 p-5 bg-slate-950/60 rounded-2xl border border-white/5 group hover:border-indigo-500/20 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-2xl group-hover:bg-indigo-500 transition-all shadow-lg">
                       {tool.icon}
                    </div>
                    <div>
                       <h6 className="text-white font-black text-xs md:text-sm uppercase tracking-tight mb-1">{tool.name}</h6>
                       <p className="text-slate-500 text-[9px] font-bold uppercase leading-relaxed">{tool.use}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Steps Workflow */}
         <div className="lg:col-span-5 bg-indigo-950/20 border border-indigo-500/20 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-6 backdrop-blur-xl">
            <h4 className="text-indigo-400 text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">{current.process.title}</h4>
            <div className="space-y-3">
               {current.process.steps.map((step, i) => (
                 <div key={i} className="flex items-center gap-4 p-3 bg-slate-950/60 rounded-xl border border-white/5 group">
                    <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[10px] font-black group-hover:scale-110 transition-transform">
                       {i+1}
                    </div>
                    <span className="text-slate-200 text-[10px] md:text-xs font-bold uppercase tracking-tight">{step}</span>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* Rules & Tolerance Example */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
         
         {/* Critical Rules */}
         <div className="bg-slate-900/60 border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8">
            <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4">
               <span className="w-12 h-0.5 bg-rose-500"></span>
               Dimensional Protocol Rules
            </h4>
            <div className="space-y-4">
               {current.rules.map((rule, i) => (
                 <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group hover:border-rose-500/20 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center text-white font-black text-xs flex-shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
                       ★
                    </div>
                    <p className="text-slate-300 text-xs md:text-sm font-bold leading-relaxed">{rule}</p>
                 </div>
               ))}
            </div>
         </div>

         {/* Visual Example Node */}
         <div className="bg-slate-950/80 border border-indigo-500/20 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8 relative overflow-hidden flex flex-col items-center">
            <div className="absolute top-0 right-0 p-6 text-4xl font-black text-white/5 select-none uppercase italic">Example</div>
            <h4 className="text-indigo-400 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4">{current.example.title}</h4>
            
            <div className="w-full max-w-sm space-y-6">
               <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                  <span className="text-[8px] font-black text-slate-500 uppercase block mb-1">Specification</span>
                  <p className="text-xl md:text-2xl font-black text-white tracking-tighter">{current.example.spec}</p>
               </div>
               
               <div className="flex items-center justify-center gap-6">
                  <div className="flex flex-col items-center gap-2">
                     <span className="text-[10px] font-black text-indigo-400 uppercase">Limit</span>
                     <span className="text-sm font-bold text-slate-400">9.95mm</span>
                  </div>
                  <div className="w-32 h-1.5 bg-slate-800 rounded-full relative">
                     <div className="absolute left-0 right-0 top-0 bottom-0 bg-emerald-500/30 rounded-full"></div>
                     <div className="absolute top-1/2 left-[105%] -translate-y-1/2 w-4 h-4 bg-rose-500 rounded-full shadow-[0_0_15px_rgba(244,63,94,1)] border-2 border-white animate-pulse"></div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                     <span className="text-[10px] font-black text-indigo-400 uppercase">Limit</span>
                     <span className="text-sm font-bold text-slate-400">10.05mm</span>
                  </div>
               </div>

               <div className="bg-rose-500/10 p-6 rounded-3xl border border-rose-500/30 text-center space-y-2">
                  <p className="text-lg md:text-xl font-black text-white tracking-tight uppercase italic">{current.example.actual}</p>
                  <p className="text-rose-400 font-black text-xs uppercase tracking-[0.2em]">{current.example.status}</p>
                  <p className="text-slate-400 text-[9px] font-bold uppercase">{current.example.reason}</p>
               </div>
            </div>
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,1)]"></span>
                Metrology Engine: Online
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
                Tolerance Mapping: Active
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest">Industrial Hub v6.4 // Precision Node</div>
      </div>
    </div>
  );
};

export default DimensionalInspectionDetail;


import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface ToolCalibrationDetailProps {
  onBack: () => void;
  lang: Language;
}

const ToolCalibrationDetail: React.FC<ToolCalibrationDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Tool Calibration Hub",
      subtitle: "Measurement Reliability & Standards",
      backBtn: "Back to IPQC",
      hero: {
        question: "What is Tool Calibration?",
        desc: "Calibration is the process of comparing a measuring tool (like a Vernier) against a known 'Standard Reference' to ensure it gives 100% accurate readings.",
        rule: "Calibration = The 'Trust' in Measurement."
      },
      purpose: [
        { title: "Accuracy", desc: "Ensures the tool shows the true size.", icon: "🎯" },
        { title: "Avoid False Decisions", desc: "Prevents accepting bad parts or rejecting good ones.", icon: "🚫" },
        { title: "Compliance", icon: "📋", desc: "Fulfills ISO/IATF audit requirements." },
        { title: "Reliability", icon: "🤝", desc: "Makes every quality decision trustworthy." }
      ],
      tools: [
        { name: "Vernier Caliper", icon: "📐" },
        { name: "Micrometer", icon: "🔬" },
        { name: "Height Gauge", icon: "📊" },
        { name: "Torque Wrench", icon: "🔧" },
        { name: "Pressure Gauge", icon: "⏲️" },
        { name: "Go / No-Go Gauge", icon: "🔩" }
      ],
      sticker: {
        title: "The Calibration Sticker (ID Card of Tool)",
        desc: "Sticker missing or expired? STOP! Tool use is strictly prohibited.",
        fields: [
          { label: "Instrument ID", val: "QC-VC-042" },
          { label: "Calibrated Date", val: "15-Jan-2025" },
          { label: "Next Due Date", val: "14-Jan-2026" },
          { label: "Status", val: "CALIBRATED" }
        ]
      },
      rules: {
        title: "The Golden Rules of Calibration",
        list: [
          "Always check the 'Due Date' sticker before starting work.",
          "Damaged tools automatically lose calibration—Get them re-checked.",
          "Data taken from a non-calibrated tool is INVALID in audits.",
          "Keep tools in their protective cases after use."
        ]
      },
      scenario: {
        title: "Real Factory Scenario",
        problem: "Micrometer due date expired 2 days ago.",
        risk: "Dimensions measured today might be wrong.",
        action: "Stop Production -> Recalibrate -> Re-verify parts."
      }
    },
    hi: {
      title: "टूल कैलिब्रेशन हब",
      subtitle: "माप की शुद्धता और मानक",
      backBtn: "IPQC पर वापस जाएं",
      hero: {
        question: "Tool Calibration क्या है?",
        desc: "कैलिब्रेशन वह प्रक्रिया है जिसमें किसी मापने वाले टूल (जैसे वर्नियर) की तुलना एक 'स्टैंडर्ड मास्टर' से की जाती है ताकि यह पक्का हो सके कि वह सही माप दिखा रहा है।",
        rule: "कैलिब्रेशन = माप का भरोसा।"
      },
      purpose: [
        { title: "सटीकता", desc: "यह पक्का करता है कि टूल सही साइज दिखाए।", icon: "🎯" },
        { title: "गलत फैसले से बचाव", desc: "खराब माल को पास होने या अच्छे को फेल होने से रोकता है।", icon: "🚫" },
        { title: "नियमों का पालन", icon: "📋", desc: "ऑडिट (ISO/IATF) की ज़रूरतों को पूरा करता है।" },
        { title: "भरोसेमंद काम", icon: "🤝", desc: "क्वालिटी के हर फैसले को विश्वसनीय बनाता है।" }
      ],
      tools: [
        { name: "वर्नियर कैलिपर", icon: "📐" },
        { name: "माइक्रोमीटर", icon: "🔬" },
        { name: "हाइट गेज", icon: "📊" },
        { name: "टॉर्क रिंच (Torque)", icon: "🔧" },
        { name: "प्रेशर गेज", icon: "⏲️" },
        { name: "Go / No-Go गेज", icon: "🔩" }
      ],
      sticker: {
        title: "कैलिब्रेशन स्टिकर (टूल का पहचान पत्र)",
        desc: "स्टिकर गायब है या तारीख निकल गई है? रुकें! टूल का इस्तेमाल सख्त मना है।",
        fields: [
          { label: "इन्स्ट्रुमेंट ID", val: "QC-VC-042" },
          { label: "कैलिब्रेशन की तारीख", val: "15-Jan-2025" },
          { label: "अगली ड्यू डेट", val: "14-Jan-2026" },
          { label: "स्टेटस", val: "OK / VALID" }
        ]
      },
      rules: {
        title: "कैलिब्रेशन के सुनहरे नियम",
        list: [
          "काम शुरू करने से पहले स्टिकर पर 'Due Date' ज़रूर देखें।",
          "अगर टूल गिर जाए या डैमेज हो, तो उसे दोबारा चेक करवाएं।",
          "बिना कैलिब्रेशन वाले टूल से लिया गया डेटा अमान्य (Invalid) होता है।",
          "इस्तेमाल के बाद टूल को उसके सुरक्षित बॉक्स में ही रखें।"
        ]
      },
      scenario: {
        title: "फैक्ट्री का असली उदाहरण",
        problem: "माइक्रोमीटर की ड्यू डेट 2 दिन पहले निकल गई।",
        risk: "आज ली गई माप गलत हो सकती है और माल रिजेक्ट हो सकता है।",
        action: "काम रोकें -> टूल कैलिब्रेट कराएं -> माल को दोबारा चेक करें।"
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
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-indigo-400/[0.03] select-none uppercase italic">Accuracy</div>
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

      {/* Purpose Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {current.purpose.map((p, i) => (
           <motion.div 
             key={i} 
             whileHover={{ y: -5, borderColor: "rgba(99, 102, 241, 0.3)" }}
             className="bg-slate-950/40 border border-white/5 p-6 rounded-[32px] transition-all group flex flex-col gap-4 shadow-xl"
           >
              <div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                 {p.icon}
              </div>
              <h5 className="text-white font-black text-sm md:text-base uppercase tracking-tight leading-tight group-hover:text-indigo-400 transition-colors">{p.title}</h5>
              <p className="text-slate-400 text-[10px] md:text-xs font-bold leading-relaxed">{p.desc}</p>
           </motion.div>
         ))}
      </div>

      {/* Tools & Sticker Simulation Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         
         {/* Tools Inventory */}
         <div className="lg:col-span-7 bg-slate-900/60 border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8">
            <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4">
               <span className="w-12 h-0.5 bg-indigo-500"></span>
               Calibrated Asset Inventory
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
               {current.tools.map((tool, i) => (
                 <div key={i} className="flex flex-col items-center gap-3 p-5 bg-slate-950/60 rounded-2xl border border-white/5 group hover:border-indigo-500/30 transition-all">
                    <div className="text-3xl group-hover:scale-125 transition-transform">{tool.icon}</div>
                    <span className="text-white font-black text-[9px] md:text-[10px] uppercase tracking-widest text-center">{tool.name}</span>
                 </div>
               ))}
            </div>
         </div>

         {/* The Sticker Simulation */}
         <div className="lg:col-span-5 bg-indigo-950/20 border border-indigo-500/30 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8 backdrop-blur-xl flex flex-col items-center">
            <h4 className="text-indigo-400 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-center w-full">{current.sticker.title}</h4>
            
            {/* Sticker Visual */}
            <div className="w-full max-w-xs bg-white p-6 rounded-lg shadow-[0_15px_40px_rgba(0,0,0,0.4)] border-l-[12px] border-emerald-500 relative overflow-hidden group/sticker hover:rotate-1 transition-transform">
               <div className="absolute top-0 right-0 p-2 text-[6px] font-black text-slate-300 uppercase tracking-widest select-none">Quality Assurance</div>
               <div className="flex flex-col gap-4 text-slate-900">
                  {current.sticker.fields.map((f, i) => (
                    <div key={i} className="border-b border-slate-100 pb-1">
                       <span className="text-[7px] font-black text-slate-400 uppercase tracking-tighter">{f.label}</span>
                       <p className={`text-xs font-black uppercase tracking-tight ${i === 3 ? 'text-emerald-600' : ''}`}>{f.val}</p>
                    </div>
                  ))}
               </div>
               <div className="mt-4 flex justify-between items-center">
                  <div className="w-12 h-12 bg-slate-100 rounded-md border border-slate-200 flex items-center justify-center">
                     <span className="text-[10px] text-slate-300 italic">Sign</span>
                  </div>
                  <div className="text-right">
                     <span className="text-[7px] font-bold text-slate-400 block">System Verified</span>
                     <span className="text-[9px] font-black text-slate-800">ISO 9001/17025</span>
                  </div>
               </div>
            </div>
            
            <p className="text-slate-400 text-[10px] md:text-xs font-bold leading-relaxed text-center italic">
               "{current.sticker.desc}"
            </p>
         </div>
      </div>

      {/* Rules & Scenario Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
         
         {/* The Golden Rules */}
         <div className="bg-slate-900/60 border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8">
            <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4">
               <span className="w-12 h-0.5 bg-rose-500"></span>
               Calibration Discipline
            </h4>
            <div className="space-y-4">
               {current.rules.list.map((rule, i) => (
                 <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group hover:border-rose-500/20 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center text-white font-black text-xs flex-shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
                       ★
                    </div>
                    <p className="text-slate-300 text-xs md:text-sm font-bold leading-relaxed">{rule}</p>
                 </div>
               ))}
            </div>
         </div>

         {/* Visual Scenario Card */}
         <div className="bg-slate-950/80 border border-indigo-500/20 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 text-4xl font-black text-white/5 select-none uppercase italic">Scenario</div>
            <h4 className="text-indigo-400 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4">{current.scenario.title}</h4>
            
            <div className="space-y-6">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-500/10 border border-rose-500/30 rounded-2xl flex items-center justify-center text-rose-500 text-xl">⚠️</div>
                  <div className="flex flex-col">
                     <span className="text-[8px] font-black text-rose-500 uppercase">The Issue</span>
                     <p className="text-white text-sm md:text-base font-bold italic">{current.scenario.problem}</p>
                  </div>
               </div>

               <div className="h-px bg-white/10 w-full"></div>

               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center text-amber-500 text-xl">🔥</div>
                  <div className="flex flex-col">
                     <span className="text-[8px] font-black text-amber-500 uppercase">The Risk</span>
                     <p className="text-white text-sm md:text-base font-bold italic">{current.scenario.risk}</p>
                  </div>
               </div>

               <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-3xl text-center">
                  <span className="text-emerald-500 font-black text-[9px] uppercase tracking-widest block mb-1">Standard Action / सही कदम</span>
                  <p className="text-white text-xs md:text-sm font-black uppercase italic tracking-tight">{current.scenario.action}</p>
               </div>
            </div>
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,1)]"></span>
                Metrology Engine: Sync Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
                Validation Node: Secure
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest">Industrial Hub v6.3 // Calibration Node</div>
      </div>
    </div>
  );
};

export default ToolCalibrationDetail;

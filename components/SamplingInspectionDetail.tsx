
import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface SamplingInspectionDetailProps {
  onBack: () => void;
  lang: Language;
}

const SamplingInspectionDetail: React.FC<SamplingInspectionDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Sampling Inspection (AQL)",
      subtitle: "Statistical Quality Gate",
      backBtn: "Back to IQC",
      hero: {
        question: "What is AQL Sampling?",
        desc: "AQL (Acceptable Quality Limit) defines the maximum number of defects allowed in a batch to be considered acceptable. Instead of checking every piece (100%), we check a random 'sample' to decide the fate of the entire 'lot'.",
        rule: "AQL is a decision tool, not a quality improvement tool."
      },
      terms: [
        { title: "Lot Size", code: "N", desc: "The total quantity of material received in one batch.", icon: "📦" },
        { title: "Sample Size", code: "n", desc: "The number of units randomly picked for physical inspection.", icon: "🧪" },
        { title: "Acceptance (Ac)", code: "Ac", desc: "The maximum number of defects allowed to PASS the lot.", icon: "✅" },
        { title: "Rejection (Re)", code: "Re", desc: "The minimum number of defects that FAIL the lot.", icon: "❌" }
      ],
      process: {
        title: "AQL Execution Workflow",
        steps: [
          "Identify total Lot Size",
          "Select Inspection Level (Usually Level II)",
          "Choose AQL Value (e.g., 2.5 for Major)",
          "Get Sample Size & Ac/Re from Table",
          "Perform Random Sampling",
          "Count Defects found",
          "Take Accept/Reject Decision"
        ]
      },
      table: {
        title: "Standard Manufacturing AQL Levels",
        headers: ["Defect Type", "Importance", "Typical AQL"],
        rows: [
          { type: "Critical", imp: "Safety / Function fail", aql: "0.0 (Zero Tolerance)", color: "text-rose-500" },
          { type: "Major", imp: "Customer will complain", aql: "1.0 - 2.5", color: "text-amber-500" },
          { type: "Minor", imp: "Small visual issue", aql: "4.0", color: "text-cyan-400" }
        ]
      },
      example: {
        title: "Practical AQL Simulation",
        lot: "1,000 Pcs",
        level: "General Level II",
        aqlValue: "2.5",
        sample: "80 Pcs",
        acRe: "Ac: 5 | Re: 6",
        pass: "Defects ≤ 5 → Lot ACCEPTED",
        fail: "Defects ≥ 6 → Lot REJECTED"
      },
      chartTitle: "Standard Sampling Plan (MIL-STD-105D)",
      rules: [
        "Sampling MUST be 100% random.",
        "Applies to both Visual and Dimensional checks.",
        "Repeated rejection triggers 100% inspection.",
        "Levels (I, II, III) change as per risk."
      ]
    },
    hi: {
      title: "सैंपलिंग इंस्पेक्शन (AQL)",
      subtitle: "सांख्यिकीय क्वालिटी गेट",
      backBtn: "IQC पर वापस जाएं",
      hero: {
        question: "AQL सैंपलिंग क्या है?",
        desc: "AQL (Acceptable Quality Limit) का मतलब है कि एक लॉट में कितने डिफेक्ट्स तक माल को स्वीकार (Accept) किया जा सकता है। इसमें पूरे लॉट को चेक करने के बजाय, कुछ रैंडम सैंपल चेक करके पूरे बैच का फैसला लिया जाता है।",
        rule: "AQL क्वालिटी सुधारने का नहीं, बल्कि फैसला लेने का टूल है।"
      },
      terms: [
        { title: "लॉट साइज (Lot Size)", code: "N", desc: "एक बार में आए कुल माल की संख्या।", icon: "📦" },
        { title: "सैंपल साइज", code: "n", desc: "जांच के लिए निकाले गए पीस की संख्या।", icon: "🧪" },
        { title: "एक्सेप्टेंस (Ac)", code: "Ac", desc: "इतने डिफेक्ट मिलने तक लॉट पास माना जाएगा।", icon: "✅" },
        { title: "रिजेक्शन (Re)", code: "Re", desc: "इतने डिफेक्ट मिलते ही लॉट फेल माना जाएगा।", icon: "❌" }
      ],
      process: {
        title: "AQL जांच की प्रक्रिया (Workflow)",
        steps: [
          "कुल लॉट साइज की पहचान करें",
          "इंस्पेक्शन लेवल चुनें (आमतौर पर Level II)",
          "AQL वैल्यू चुनें (जैसे Major के लिए 2.5)",
          "AQL टेबल से सैंपल साइज और Ac/Re निकालें",
          "रैंडम सैंपलिंग (Random Sampling) करें",
          "मिले हुए डिफेक्ट्स की गिनती करें",
          "पास या फेल (Accept/Reject) का फैसला लें"
        ]
      },
      table: {
        title: "मैन्युफैक्चरिंग के मुख्य AQL लेवल्स",
        headers: ["डिफेक्ट का प्रकार", "असर", "सामान्य AQL"],
        rows: [
          { type: "Critical (गंभीर)", imp: "खतरा या फंक्शन फेल", aql: "0.0 (बिल्कुल नहीं)", color: "text-rose-500" },
          { type: "Major (बड़ा)", imp: "कस्टमर रिजेक्ट करेगा", aql: "1.0 - 2.5", color: "text-amber-500" },
          { type: "Minor (छोटा)", imp: "दिखने में हल्की कमी", aql: "4.0", color: "text-cyan-400" }
        ]
      },
      example: {
        title: "सैंपलिंग का आसान उदाहरण",
        lot: "1,000 पीस",
        level: "लेवल II",
        aqlValue: "2.5",
        sample: "80 पीस",
        acRe: "Ac: 5 | Re: 6",
        pass: "डिफेक्ट ≤ 5 → लॉट पास (Accept)",
        fail: "डिफेक्ट ≥ 6 → लॉट फेल (Reject)"
      },
      chartTitle: "स्टैंडर्ड सैंपलिंग प्लान (MIL-STD-105D)",
      rules: [
        "सैंपलिंग पूरी तरह रैंडम (Random) होनी चाहिए।",
        "यह विजुअल और डायमेंशन दोनों जांच पर लागू होता है।",
        "बार-बार फेल होने पर 100% जांच की जाती है।",
        "लेवल (I, II, III) रिस्क के हिसाब से बदल सकते हैं।"
      ]
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-amber-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(245,158,11,0.8)]"></div>
              <span className="text-amber-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg">{current.title}</h3>
        </div>
        <motion.button 
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBack}
          className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </motion.button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900/60 border border-amber-500/20 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-amber-500/[0.03] select-none uppercase italic">Statistical</div>
         <div className="relative z-10 space-y-4">
            <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter">{current.hero.question}</h4>
            <p className="text-slate-300 text-sm md:text-xl font-bold leading-relaxed max-w-4xl italic">
               "{current.hero.desc}"
            </p>
            <div className="inline-block px-5 py-2 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400 font-black text-xs md:text-sm uppercase tracking-widest">
               {current.hero.rule}
            </div>
         </div>
      </div>

      {/* Key Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {current.terms.map((term, i) => (
           <motion.div 
             key={i} 
             whileHover={{ y: -5, borderColor: "rgba(245, 158, 11, 0.3)" }}
             className="bg-slate-950/40 border border-white/5 p-6 rounded-[32px] transition-all group flex flex-col gap-4 shadow-xl"
           >
              <div className="flex items-center justify-between">
                 <div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    {term.icon}
                 </div>
                 <span className="text-amber-500 font-black text-lg italic opacity-40">{term.code}</span>
              </div>
              <h5 className="text-white font-black text-sm md:text-base uppercase tracking-tight leading-tight group-hover:text-amber-400 transition-colors">{term.title}</h5>
              <p className="text-slate-400 text-[10px] md:text-xs font-bold leading-relaxed">{term.desc}</p>
           </motion.div>
         ))}
      </div>

      {/* Process & Example Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         {/* Workflow Steps */}
         <div className="lg:col-span-5 bg-amber-950/10 border border-amber-500/20 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-6 backdrop-blur-xl">
            <h4 className="text-amber-400 text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">{current.process.title}</h4>
            <div className="space-y-3">
               {current.process.steps.map((step, i) => (
                 <div key={i} className="flex items-center gap-4 p-3 bg-slate-950/60 rounded-xl border border-white/5 group">
                    <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-[10px] font-black group-hover:scale-110 transition-transform">
                       {i+1}
                    </div>
                    <span className="text-slate-200 text-[10px] md:text-xs font-bold uppercase tracking-tight">{step}</span>
                 </div>
               ))}
            </div>
         </div>

         {/* Visual Example Node */}
         <div className="lg:col-span-7 bg-slate-900/60 border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 text-4xl font-black text-white/5 select-none uppercase italic">Simulator</div>
            <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4">
               <span className="w-12 h-0.5 bg-amber-500"></span>
               {current.example.title}
            </h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
               {[
                 { l: "Lot Size", v: current.example.lot },
                 { l: "Level", v: current.example.level },
                 { l: "AQL Value", v: current.example.aqlValue },
                 { l: "Sample", v: current.example.sample },
                 { l: "Ac / Re", v: current.example.acRe }
               ].map((item, i) => (
                 <div key={i} className="bg-slate-950/80 p-4 rounded-2xl border border-white/5 flex flex-col gap-1">
                    <span className="text-[8px] font-black text-slate-500 uppercase">{item.l}</span>
                    <span className="text-white font-black text-sm uppercase italic tracking-tighter">{item.v}</span>
                 </div>
               ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
               <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-black">✔</div>
                  <span className="text-emerald-400 font-black text-[10px] md:text-xs uppercase tracking-tight leading-tight">{current.example.pass}</span>
               </div>
               <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-2xl flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white font-black">✖</div>
                  <span className="text-rose-400 font-black text-[10px] md:text-xs uppercase tracking-tight leading-tight">{current.example.fail}</span>
               </div>
            </div>
         </div>
      </div>

      {/* AQL Table & Chart Image Section */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl space-y-12">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Value Table */}
            <div className="space-y-8">
               <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4">
                  <span className="w-12 h-0.5 bg-cyan-500"></span>
                  {current.table.title}
               </h4>
               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-white/10">
                           {current.table.headers.map((h, i) => (
                              <th key={i} className="py-4 text-slate-500 text-[9px] font-black uppercase tracking-widest">{h}</th>
                           ))}
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-white/5">
                        {current.table.rows.map((row, i) => (
                           <tr key={i} className="group hover:bg-white/5 transition-colors">
                              <td className={`py-5 font-black text-sm uppercase ${row.color}`}>{row.type}</td>
                              <td className="py-5 text-slate-300 font-bold text-xs uppercase italic">{row.imp}</td>
                              <td className="py-5 text-white font-black text-sm italic">{row.aql}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            {/* AQL Chart Image Holder */}
            <div className="space-y-6">
               <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4">
                  <span className="w-12 h-0.5 bg-amber-500"></span>
                  {current.chartTitle}
               </h4>
               <div className="bg-slate-950/80 p-4 rounded-[32px] border border-white/10 shadow-inner group overflow-hidden">
                  {/* Image display - using a container to hold the user's provided plan */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center">
                     <img 
                        src="https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/placeholder.svg" 
                        alt="AQL MIL STD 105D Plan Chart" 
                        className="w-full h-full object-contain opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                     />
                     <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/40 backdrop-blur-sm group-hover:backdrop-blur-none transition-all">
                        <span className="text-white font-black text-xl uppercase italic tracking-tighter drop-shadow-xl">Plan Reference Chart</span>
                        <span className="text-amber-500 text-[8px] font-black uppercase tracking-[0.4em] mt-2">MIL-STD-105D Official</span>
                     </div>
                  </div>
                  <p className="mt-4 text-[9px] text-slate-500 font-bold text-center uppercase tracking-widest italic leading-relaxed">
                     Tip: Always refer to the latest Revision of the Sampling Table specified in the Control Plan.
                  </p>
               </div>
            </div>
         </div>
      </div>

      {/* Rules Section */}
      <div className="bg-slate-950/60 border border-white/5 rounded-[40px] p-8 md:p-10 shadow-2xl flex flex-col items-center">
         <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-10">Critical Sampling Protocol</h4>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {current.rules.map((rule, i) => (
               <div key={i} className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-amber-500/20 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 font-black text-xs flex-shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
                     ★
                  </div>
                  <p className="text-slate-300 text-[10px] md:text-xs font-bold leading-relaxed">{rule}</p>
               </div>
            ))}
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,1)]"></span>
                Statistic Engine: Online
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,1)]"></span>
                Plan: Normal Inspection
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest">Industrial Hub v6.5 // Statistics Node</div>
      </div>
    </div>
  );
};

export default SamplingInspectionDetail;

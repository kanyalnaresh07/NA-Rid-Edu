
import React, { useState } from 'react';
import { Language } from '../types';
import ERPDetail from './ERPDetail';

interface ERPPhysicalDetailProps {
  onBack: () => void;
  lang: Language;
}

const ERPPhysicalDetail: React.FC<ERPPhysicalDetailProps> = ({ onBack, lang }) => {
  const [showErpDeepDive, setShowErpDeepDive] = useState(false);

  const content = {
    en: {
      title: "ERP vs Physical Stock",
      subtitle: "Inventory Reconciliation & Audit",
      backBtn: "Back to Control",
      definitions: {
        erp: { label: "ERP Stock", desc: "Quantity visible in the System (SAP / Oracle / Tally / etc.)", icon: "🖥️", clickable: true },
        physical: { label: "Physical Stock", desc: "Material actually present in the Warehouse / Store.", icon: "📦" }
      },
      hero: {
        title: "What is ERP vs Physical Stock?",
        desc: "It is the process of matching the system quantity with the actual physical quantity (Reconciliation).",
        whyTitle: "Why is it Important?",
        reasons: [
          "Planning depends on ERP accuracy.",
          "Avoids shortage / overstock risks.",
          "Detects theft, damage, and mix-ups.",
          "Essential for audit and compliance."
        ]
      },
      process: {
        title: "Reconciliation Process (Step-by-Step)",
        steps: [
          { n: "1. Stock Count", d: "Physical verification by bin/location. Verify part code and lot numbers." },
          { n: "2. Data Extraction", d: "Download ERP stock report for the same date and time." },
          { n: "3. Comparison", d: "Match System qty vs Physical qty to identify Variance (Short/Excess)." },
          { n: "4. Variance Analysis", d: "Identify root cause: Wrong entries, unposted GRNs, or missing slips." },
          { n: "5. Correction", d: "Stock adjustment entries with official approval from Store/Finance." }
        ]
      },
      varianceBox: {
        title: "Variance Simulation",
        erp: "ERP = 100 pcs",
        phys: "Physical = 95 pcs",
        result: "Short = 5 pcs",
        action: "Urgent Investigation Required"
      },
      mismatchReasons: {
        title: "Common Reasons for Mismatch",
        list: ["GRN not posted", "Issue slip missing", "Scrap not booked", "Manual error", "Pilferage / Theft"]
      },
      frequency: {
        title: "Frequency of Check",
        items: [
          { f: "Daily", d: "Cycle count for Critical (A-Items)." },
          { f: "Monthly", d: "Regular stock audit for all categories." },
          { f: "Yearly", d: "Mandatory full-scale verification." }
        ]
      }
    },
    hi: {
      title: "ERP vs Physical Stock",
      subtitle: "इन्वेंटरी मिलान (Reconciliation)",
      backBtn: "इन्वेंटरी कंट्रोल पर वापस",
      definitions: {
        erp: { label: "ERP Stock", desc: "System (SAP / Oracle / Tally / etc.) में दिखने वाली मात्रा।", icon: "🖥️", clickable: true },
        physical: { label: "Physical Stock", desc: "Warehouse / Store में असली मौजूद माल।", icon: "📦" }
      },
      hero: {
        title: "ERP vs Physical Stock क्या होता है?",
        desc: "System quantity और actual quantity का मिलान (Matching/Reconciliation) करना।",
        whyTitle: "यह क्यों ज़रूरी है?",
        reasons: [
          "प्लानिंग ERP डेटा पर आधारित होती है।",
          "गलत डेटा → सामान की कमी / ओवर-स्टॉक का खतरा।",
          "ऑडिट और सरकारी नियमों के लिए ज़रूरी।",
          "चोरी, डैमेज या मिक्स-अप का पता चलता है।"
        ]
      },
      process: {
        title: "Reconciliation प्रोसेस (Step-by-Step)",
        steps: [
          { n: "1. Stock Count", d: "बिन और लोकेशन के हिसाब से गिनती। पार्ट कोड और लॉट नंबर चेक करना।" },
          { n: "2. Data Extraction", d: "उसी तारीख का ERP स्टॉक रिपोर्ट डाउनलोड करना।" },
          { n: "3. Comparison", d: "ERP और असली गिनती का मिलान करना (Short / Excess पहचानना)।" },
          { n: "4. Variance Analysis", d: "जड़ (Root Cause) ढूंढना: गलत एंट्री, छूटा हुआ GRN, या गायब स्लिप।" },
          { n: "5. Correction", d: "स्टोर और फाइनेंस से मंजूरी लेकर स्टॉक एडजस्टमेंट एंट्री करना।" }
        ]
      },
      varianceBox: {
        title: "अंतर (Variance) का उदाहरण",
        erp: "ERP = 100 pcs",
        phys: "Physical = 95 pcs",
        result: "Short = 5 pcs",
        action: "तुरंत जांच की ज़रूरत"
      },
      mismatchReasons: {
        title: "मिसमैच के आम कारण",
        list: ["GRN पोस्ट नहीं हुआ", "इशू स्लिप (Issue slip) गायब है", "स्क्रैप/रिजेक्शन बुक नहीं हुआ", "मैन्युअल गलती", "चोरी (Pilferage)"]
      },
      frequency: {
        title: "चेक करने का समय (Frequency)",
        items: [
          { f: "रोजाना (Daily)", d: "कीमती सामान (A-Items) की गिनती।" },
          { f: "मासिक (Monthly)", d: "सभी कैटेगरी का रेगुलर स्टॉक ऑडिट।" },
          { f: "सालाना (Yearly)", d: "पूरी फैक्ट्री का फिजिकल वेरिफिकेशन।" }
        ]
      }
    }
  };

  const current = content[lang] || content['en'];

  if (showErpDeepDive) {
    return <ERPDetail onBack={() => setShowErpDeepDive(false)} lang={lang} />;
  }

  return (
    <div className="flex flex-col gap-8 animate-in slide-in-from-bottom-6 duration-700 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-blue-500/20 pb-6 bg-slate-950/40 p-8 rounded-t-[40px] backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-[0_0_12px_blue]"></div>
              <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none italic font-mono">{current.title}</h3>
        </div>
        <button onClick={onBack} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Definitions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div 
           onClick={() => current.definitions.erp.clickable && setShowErpDeepDive(true)}
           className={`bg-slate-900 border border-blue-500/20 p-8 rounded-[40px] shadow-2xl flex items-center gap-6 group hover:bg-slate-800 transition-all ${current.definitions.erp.clickable ? 'cursor-pointer border-blue-500/50' : ''}`}
         >
            <div className="w-20 h-20 bg-blue-500/10 border border-blue-500/30 rounded-3xl flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform">{current.definitions.erp.icon}</div>
            <div className="flex-1">
               <div className="flex items-center justify-between">
                  <h4 className="text-blue-400 font-black text-xl uppercase italic">{current.definitions.erp.label}</h4>
                  {current.definitions.erp.clickable && <span className="text-[7px] bg-blue-500/20 px-2 py-0.5 rounded text-blue-400 uppercase font-black animate-pulse">Deep Dive</span>}
               </div>
               <p className="text-slate-300 text-sm font-bold">"{current.definitions.erp.desc}"</p>
            </div>
         </div>
         <div className="bg-slate-900 border border-emerald-500/20 p-8 rounded-[40px] shadow-2xl flex items-center gap-6 group hover:bg-slate-800 transition-all">
            <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-3xl flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform">{current.definitions.physical.icon}</div>
            <div>
               <h4 className="text-emerald-400 font-black text-xl uppercase italic">{current.definitions.physical.label}</h4>
               <p className="text-slate-300 text-sm font-bold">"{current.definitions.physical.desc}"</p>
            </div>
         </div>
      </div>

      {/* Logic Card */}
      <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[48px] shadow-2xl space-y-10 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-8 text-9xl font-black text-white/[0.01] select-none uppercase italic tracking-tighter">DATA</div>
         <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
               <h4 className="text-white text-2xl md:text-4xl font-black uppercase tracking-widest border-b-2 border-blue-500 w-fit pb-2 mx-auto lg:mx-0">{current.hero.title}</h4>
               <p className="text-slate-200 text-xl font-bold leading-relaxed italic pr-4">
                  "{current.hero.desc}"
               </p>
               <div className="bg-blue-500/10 p-4 rounded-3xl border border-blue-500/20 text-center">
                  <p className="text-blue-400 font-black text-xs md:text-sm uppercase tracking-widest italic animate-pulse">Reconciliation Logic Engine</p>
               </div>
            </div>
            <div className="lg:w-1/2 bg-slate-950/60 p-8 rounded-[40px] border border-white/5 space-y-6 shadow-inner">
               <h5 className="text-white font-black text-[10px] uppercase tracking-[0.5em] text-center">{current.hero.whyTitle}</h5>
               <div className="space-y-3">
                  {current.hero.reasons.map((r, i) => (
                     <div key={i} className="flex items-center gap-4 p-3 bg-white/5 rounded-2xl group hover:border-blue-500/30 transition-all border border-transparent">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-slate-300 text-xs font-bold uppercase">{r}</span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* Process Flow */}
      <div className="bg-slate-950 border border-white/10 p-8 md:p-12 rounded-[48px] shadow-2xl space-y-12">
         <h4 className="text-white text-center font-black text-xl md:text-3xl uppercase tracking-tighter italic">{current.process.title}</h4>
         <div className="relative space-y-12 max-w-4xl mx-auto">
            <div className="absolute top-0 bottom-0 left-[23px] w-1 bg-gradient-to-b from-blue-500 via-emerald-500 to-transparent"></div>
            {current.process.steps.map((step, i) => (
               <div key={i} className="flex gap-8 group relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border-2 border-blue-500 flex items-center justify-center text-white font-black text-lg shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:scale-110 transition-transform">
                     {i+1}
                  </div>
                  <div className="flex-1 bg-slate-900 p-6 rounded-[32px] border border-white/5 group-hover:border-blue-500/20 transition-all">
                     <h5 className="text-white font-black text-sm md:text-lg uppercase tracking-tight mb-2 italic">{step.n}</h5>
                     <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed italic">"{step.d}"</p>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Variance Analysis Box */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
         {/* Simulator */}
         <div className="bg-slate-900/60 border border-rose-500/30 p-10 rounded-[48px] shadow-2xl space-y-8 flex flex-col items-center">
            <h4 className="text-rose-400 text-[10px] font-black uppercase tracking-[0.5em]">{current.varianceBox.title}</h4>
            <div className="w-full space-y-4">
               <div className="bg-slate-950 p-6 rounded-3xl border border-white/10 flex justify-between items-center group hover:border-blue-500/30 transition-all">
                  <span className="text-slate-400 font-black text-xs uppercase">{current.varianceBox.erp.split(' ')[0]}</span>
                  <span className="text-white font-black text-xl italic">{current.varianceBox.erp.split(' ')[2]} {current.varianceBox.erp.split(' ')[3]}</span>
               </div>
               <div className="flex justify-center text-2xl text-slate-700">➖</div>
               <div className="bg-slate-950 p-6 rounded-3xl border border-white/10 flex justify-between items-center group hover:border-emerald-500/30 transition-all">
                  <span className="text-slate-400 font-black text-xs uppercase">{current.varianceBox.phys.split(' ')[0]}</span>
                  <span className="text-white font-black text-xl italic">{current.varianceBox.phys.split(' ')[2]} {current.varianceBox.phys.split(' ')[3]}</span>
               </div>
               <div className="pt-4 border-t border-white/10 flex flex-col items-center gap-4">
                  <div className="bg-rose-500/10 p-6 rounded-full border-4 border-rose-500/40 w-full text-center">
                     <span className="text-rose-500 font-black text-3xl italic tracking-tighter">{current.varianceBox.result}</span>
                  </div>
                  <span className="text-rose-500 font-black text-[9px] uppercase tracking-[0.4em] animate-bounce">⚠️ {current.varianceBox.action}</span>
               </div>
            </div>
         </div>

         {/* Reasons Grid */}
         <div className="bg-slate-950 border border-white/5 p-10 rounded-[48px] shadow-inner space-y-8">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.5em] flex items-center gap-3">
               <span className="w-12 h-0.5 bg-indigo-500"></span>
               {current.mismatchReasons.title}
            </h4>
            <div className="grid grid-cols-1 gap-3">
               {current.mismatchReasons.list.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-slate-900 rounded-3xl border border-white/5 group hover:border-rose-500/20 transition-all">
                     <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-rose-500 font-black text-xs shadow-lg group-hover:scale-110">0{i+1}</div>
                     <span className="text-slate-300 font-black text-xs md:text-sm uppercase tracking-tight">{item}</span>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* Frequency Node */}
      <div className="bg-slate-900 border border-white/10 p-10 rounded-[48px] shadow-2xl">
         <h4 className="text-white text-center font-black text-xl uppercase tracking-[0.4em] mb-12">{current.frequency.title}</h4>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {current.frequency.items.map((item, i) => (
               <div key={i} className="bg-slate-950/60 p-8 rounded-[40px] border border-white/5 flex flex-col items-center text-center gap-4 group hover:border-blue-500/30 transition-all shadow-xl">
                  <div className="w-16 h-16 rounded-3xl bg-blue-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform">📅</div>
                  <div>
                     <h5 className="text-white font-black text-xl uppercase tracking-tighter italic mb-2">{item.f}</h5>
                     <p className="text-slate-500 text-[10px] md:text-xs font-bold leading-relaxed">"{item.d}"</p>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Footer Summary */}
      <div className="bg-blue-600 p-10 rounded-[48px] shadow-[0_0_50px_rgba(59,130,246,0.3)] text-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 animate-pulse"></div>
         <div className="relative z-10 space-y-4">
            <h5 className="text-white/60 font-black text-[10px] uppercase tracking-[0.6em] mb-2">Final Logic Point</h5>
            <p className="text-white text-lg md:text-3xl font-black italic tracking-tight leading-snug">
               {lang === 'hi' 
                 ? 'ERP vs Physical = सिस्टम और हकीकत का मिलान।' 
                 : 'ERP vs Physical = Syncing System Data with Shop Floor Reality.'}
            </p>
         </div>
      </div>

      {/* System Status Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_white] animate-pulse"></span>
                Reconciliation Module: Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_white]"></span>
                Audit Compliance: Verified
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Module: Inventory-Sync-v3 // Global Accuracy</div>
      </div>
    </div>
  );
};

export default ERPPhysicalDetail;


import React from 'react';
import { Language } from '../types';

interface OQCDetailProps {
  onBack: () => void;
  lang: Language;
}

const OQCDetail: React.FC<OQCDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Outgoing Quality Control (OQC)",
      subtitle: "The Final Customer Protection Shield",
      backBtn: "Back to QMS",
      hero: {
        question: "What is OQC?",
        desc: "OQC is a sample-based audit performed in the warehouse before the product is dispatched to the customer. It is the very last quality gate focusing on packaging, quantity, and loading conditions.",
        mantra: "Safe delivery is as important as safe production."
      },
      elements: [
        {
          title: "Packaging Integrity",
          icon: "📦",
          desc: "Ensuring the product is protected from damage during transit.",
          points: ["Correct Box Grade", "Seal integrity (Tape/Straps)", "Internal cushioning", "Pallet stability"]
        },
        {
          title: "Labeling & IDs",
          icon: "🏷️",
          desc: "Traceability must be 100% accurate for the logistics chain.",
          points: ["Correct Barcode scan", "Serial No. matching", "Model No. on box", "Shipping Marks"]
        },
        {
          title: "Quantity & Parts",
          icon: "🔢",
          desc: "Verifying if the customer receives exactly what they ordered.",
          points: ["Box count match", "Accessories (Manuals/Cables)", "Lot number tracking", "Physical count vs Invoice"]
        },
        {
          title: "Storage Condition",
          icon: "🏢",
          desc: "Ensuring Finished Goods (FG) were stored in a safe environment.",
          points: ["No dust/moisture", "Stacking height limit", "FIFO/FEFO adherence", "Damage-free handling"]
        }
      ],
      docs: {
        title: "OQC Release Documents",
        items: [
          { name: "OQC Release Sheet", full: "Outgoing Sampling Audit", d: "Record based on AQL sampling levels (e.g. 1.0/0.65)." },
          { name: "Packing List", full: "Dispatch Verification", d: "Final list of all items, serial numbers, and weights in the lot." },
          { name: "COC / COQ", full: "Certificate of Conformance", d: "The quality guarantee certificate sent directly to the customer." },
          { name: "Vehicle Audit", full: "Truck/Container Check", d: "Safety check of the transport vehicle (Cleanliness, Leakage)." }
        ]
      },
      proTip: "OQC uses stricter AQL levels. If even 1 defect is found in the sample, the whole batch is put on HOLD and re-inspected 100%."
    },
    hi: {
      title: "OQC (आउटगोइंग क्वालिटी कंट्रोल)",
      subtitle: "ग्राहक सुरक्षा का अंतिम कवच",
      backBtn: "QMS पर वापस जाएं",
      hero: {
        question: "OQC क्या है?",
        desc: "OQC एक सैंपलिंग-आधारित ऑडिट है जो सामान डिस्पैच होने से पहले गोदाम (Warehouse) में किया जाता है। यह आखिरी क्वालिटी गेट है जो पैकिंग, मात्रा और लोडिंग पर ध्यान देता है।",
        mantra: "सुरक्षित डिलीवरी उतनी ही ज़रूरी है जितना सुरक्षित प्रोडक्शन।"
      },
      elements: [
        {
          title: "पैकिंग की मजबूती",
          icon: "📦",
          desc: "रास्ते में होने वाले नुकसान (Transit Damage) से बचाव सुनिश्चित करना।",
          points: ["सही ग्रेड का बॉक्स", "सील की मजबूती (Tape)", "कुशनिंग / थर्माकोल", "पैलेट की स्टेबिलिटी"]
        },
        {
          title: "लेबलिंग और पहचान",
          icon: "🏷️",
          desc: "लॉजिस्टिक्स के लिए ट्रेसेबिलिटी (Traceability) बिल्कुल सटीक होनी चाहिए।",
          points: ["सही बारकोड स्कैन", "सीरियल नंबर मैचिंग", "बॉक्स पर मॉडल नंबर", "शिपिंग मार्क्स (Marks)"]
        },
        {
          title: "गिनती और पुर्जे",
          icon: "🔢",
          desc: "यह चेक करना कि ग्राहक को वही मिल रहा है जो उसने ऑर्डर किया है।",
          points: ["बॉक्स की गिनती", "एक्सेसरीज (मैनुअल/केबल)", "लॉट नंबर रिकॉर्ड", "इनवॉइस से मिलान"]
        },
        {
          title: "स्टोरेज की हालत",
          icon: "🏢",
          desc: "यह पक्का करना कि तैयार माल (FG) सुरक्षित माहौल में रखा गया था।",
          points: ["धूल / नमी से बचाव", "स्टैकिंग हाइट लिमिट", "FIFO नियम का पालन", "हैंडलिंग डैमेज चेक"]
        }
      ],
      docs: {
        title: "OQC क्लियरेंस दस्तावेज़",
        items: [
          { name: "OQC रिलीज़ शीट", full: "आउटगोइंग सैंपलिंग ऑडिट", d: "AQL लेवल (जैसे 1.0) के आधार पर लिया गया सैंपलिंग रिकॉर्ड।" },
          { name: "पैकिंग लिस्ट", full: "डिस्पैच वेरिफिकेशन", d: "लॉट में मौजूद सभी सीरियल नंबर और वजन का अंतिम रिकॉर्ड।" },
          { name: "COC / COQ", full: "क्वालिटी सर्टिफिकेट", d: "कस्टमर को भेजा जाने वाला अंतिम गारंटी सर्टिफिकेट।" },
          { name: "गाड़ी ऑडिट", full: "Vehicle Inspection", d: "सामान ले जाने वाले ट्रक या कंटेनर की सुरक्षा जांच।" }
        ]
      },
      proTip: "OQC में बहुत सख्त AQL का उपयोग होता है। अगर सैंपल में 1 भी डिफेक्ट मिला, तो पूरा बैच रोककर 100% दोबारा चेक किया जाता है।"
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-emerald-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_12px_emerald]"></div>
              <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono">Outgoing Quality (OQC)</h3>
        </div>
        <button onClick={onBack} className="bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-emerald-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Dispatch Gate</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-emerald-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.mantra}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-emerald-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-sm md:text-lg font-bold italic leading-relaxed">
            "{current.hero.desc}"
         </div>
      </div>

      {/* Elements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {current.elements.map((el, i) => (
           <div key={i} className="bg-slate-950/60 border border-white/5 p-8 rounded-[32px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                 <div className="w-14 h-14 bg-slate-900 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">{el.icon}</div>
                 <span className="text-emerald-500 font-black text-[9px] uppercase tracking-widest opacity-40">OQC-0{i+1}</span>
              </div>
              <div className="space-y-2">
                 <h5 className="text-white font-black text-lg uppercase tracking-tight group-hover:text-emerald-400 transition-colors">{el.title}</h5>
                 <p className="text-slate-500 text-xs font-bold leading-relaxed italic">{el.desc}</p>
              </div>
              <div className="space-y-2 pt-4 border-t border-white/5">
                 {el.points.map((p, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-tight">
                       <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                       {p}
                    </div>
                 ))}
              </div>
           </div>
         ))}
      </div>

      {/* Docs & Key Strategy Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         <div className="lg:col-span-8 bg-slate-900/60 border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8">
            <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter italic flex items-center gap-4">
               <span className="w-12 h-1 bg-emerald-500 shadow-[0_0_10px_emerald]"></span>
               {current.docs.title}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {current.docs.items.map((doc, i) => (
                  <div key={i} className="bg-slate-950 p-5 rounded-3xl border border-white/5 group hover:border-emerald-500/40 transition-all shadow-xl">
                     <div className="flex items-center justify-between mb-2">
                        <span className="text-emerald-500 font-black text-[10px] uppercase tracking-widest">{doc.name}</span>
                        <div className="w-6 h-6 bg-slate-900 rounded-lg flex items-center justify-center text-xs opacity-50">🚛</div>
                     </div>
                     <h6 className="text-white font-black text-xs uppercase mb-2 tracking-tight leading-none">{doc.full}</h6>
                     <p className="text-slate-500 text-[10px] font-bold leading-relaxed">{doc.d}</p>
                  </div>
               ))}
            </div>
         </div>
         <div className="lg:col-span-4 bg-emerald-950/20 border border-emerald-500/20 p-8 md:p-10 rounded-[40px] shadow-2xl flex flex-col gap-6 backdrop-blur-xl">
            <h4 className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em]">Audit Intelligence</h4>
            <p className="text-white text-sm md:text-lg font-bold leading-relaxed italic border-l-4 border-emerald-500 pl-6 bg-emerald-500/5 py-4 rounded-r-2xl">
               "{current.proTip}"
            </p>
            <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/20 text-center animate-pulse">
               <p className="text-[10px] text-emerald-200 font-black uppercase tracking-widest">AQL Mode: Strictest Protocol</p>
            </div>
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_12px_emerald] animate-pulse"></span>
                Audit Status: AQL Verified
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Industrial Hub v9.5 // OQC Audit Node</div>
      </div>
    </div>
  );
};

export default OQCDetail;

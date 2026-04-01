
import React, { useState } from 'react';
import { Language } from '../types';
import ERPTypeDeepDive from './ERPTypeDeepDive';

interface ERPDetailProps {
  onBack: () => void;
  lang: Language;
}

const ERPDetail: React.FC<ERPDetailProps> = ({ onBack, lang }) => {
  const [selectedTypeIndex, setSelectedTypeIndex] = useState<number | null>(null);

  const content = {
    en: {
      title: "ERP: Enterprise Resource Planning",
      subtitle: "The Central Nervous System of Industry",
      backBtn: "Back to Match",
      hero: {
        question: "What is ERP?",
        desc: "ERP is a business management software that allows an organization to use a system of integrated applications to manage the business and automate many back-office functions.",
        simple: "In simple words: ERP is a central computer system where all departments (Purchase, Store, Production, Accounts) share real-time data.",
        mantra: "One System, One Truth."
      },
      howItWorks: {
        title: "How ERP Works? (The Data Flow)",
        steps: [
          { dept: "Purchase", act: "Purchases material. Entry made in ERP.", icon: "💳" },
          { dept: "Store", act: "Receives material. GRN made. Stock goes UP in ERP.", icon: "📥" },
          { dept: "Production", act: "Consumes material. Issue entry. Stock goes DOWN in ERP.", icon: "⚙️" },
          { dept: "Sales", act: "Dispatches finished goods. Invoice made. Stock removed.", icon: "🚛" }
        ],
        logic: "If any department forgets to make an entry, the ERP Stock becomes WRONG."
      },
      types: {
        title: "Types of ERP Systems (Click to Explore)",
        items: [
          { name: "SAP", tag: "Global Standard", desc: "Used by 90% of large manufacturing companies worldwide.", color: "blue" },
          { name: "Oracle NetSuite", tag: "Cloud Based", desc: "Powerful analytics and supply chain management.", color: "indigo" },
          { name: "Microsoft Dynamics", tag: "Integration Pro", desc: "Seamless connection with Office 365 and Windows.", color: "emerald" },
          { name: "Tally Prime", tag: "SME Focused", desc: "Best for accounting and basic inventory for small factories.", color: "amber" },
          { name: "Custom ERP", tag: "Tailor Made", desc: "Built specifically for one company's unique needs.", color: "slate" }
        ]
      },
      modules: {
        title: "Main Folders (Modules) in ERP",
        list: ["Inventory Management (MM)", "Production Planning (PP)", "Quality Management (QM)", "Sales & Distribution (SD)", "Finance & Accounts (FI)", "Human Resources (HR)"]
      },
      summary: "ERP is the 'Software Brain' that tracks everything from a single screw to a whole truck."
    },
    hi: {
      title: "ERP: एंटरप्राइज रिसोर्स प्लानिंग",
      subtitle: "फैक्ट्री का डिजिटल दिमाग",
      backBtn: "पीछे जाएं",
      hero: {
        question: "ERP क्या होती है?",
        desc: "ERP एक बिजनेस मैनेजमेंट सॉफ्टवेयर है जिसका उपयोग कंपनी के हर विभाग के काम को एक ही जगह जोड़ने और मैनेज करने के लिए किया जाता है।",
        simple: "आसान भाषा में: ERP वो कंप्यूटर सिस्टम है जहाँ Purchase, Store, Production और Accounts विभाग एक साथ अपना डेटा लिखते हैं।",
        mantra: "एक सिस्टम, एक सच (One System, One Truth)।"
      },
      howItWorks: {
        title: "ERP कैसे काम करती है? (Data Flow)",
        steps: [
          { dept: "Purchase", act: "सामान खरीदा। ERP में एंट्री की।", icon: "💳" },
          { dept: "Store", act: "सामान रिसीव किया। GRN बनाया। स्टॉक बढ़ गया।", icon: "📥" },
          { dept: "Production", act: "सामान इस्तेमाल किया। कंजम्पशन एंट्री की। स्टॉक कम हो गया।", icon: "⚙️" },
          { dept: "Sales", act: "तैयार माल भेजा। इनवॉइस बनाया। माल सिस्टम से बाहर।", icon: "🚛" }
        ],
        logic: "अगर कोई विभाग एंट्री करना भूल जाए, तो ERP स्टॉक गलत (Wrong) हो जाता है।"
      },
      types: {
        title: "ERP कितने प्रकार की होती है? (जानकारी के लिए क्लिक करें)",
        items: [
          { name: "SAP", tag: "ग्लोबल स्टैंडर्ड", desc: "दुनिया की 90% बड़ी कंपनियाँ इसी का उपयोग करती हैं।", color: "blue" },
          { name: "Oracle NetSuite", tag: "क्लाउड बेस्ड", desc: "सप्लाई चेन और बड़े डेटा के लिए बहुत ताकतवर सॉफ्टवेयर।", color: "indigo" },
          { name: "Microsoft Dynamics", tag: "विंडोज फ्रेंडली", desc: "ऑफिस और एक्सेल के साथ आसानी से जुड़ जाता है।", color: "emerald" },
          { name: "Tally Prime", tag: "छोटे उद्योगों के लिए", desc: "अकाउंटिंग और बेसिक स्टॉक के लिए सबसे आसान टूल।", color: "amber" },
          { name: "Custom ERP", tag: "ऑर्डर पर बना", desc: "जब कंपनी अपनी ज़रूरत के हिसाब से खुद का सॉफ्टवेयर बनवाती है।", color: "slate" }
        ]
      },
      modules: {
        title: "ERP के मुख्य भाग (Modules)",
        list: ["इन्वेंटरी मैनेजमेंट (MM)", "प्रोडक्शन प्लानिंग (PP)", "क्वालिटी मैनेजमेंट (QM)", "सेल्स और डिस्ट्रीब्यूशन (SD)", "फाइनेंस और अकाउंट्स (FI)", "HR और मैनपावर (HR)"]
      },
      summary: "ERP वो 'सॉफ्टवेयर दिमाग' है जो एक छोटे पेंच से लेकर पूरे ट्रक तक का हिसाब रखता है।"
    }
  };

  const current = content[lang] || content['en'];

  if (selectedTypeIndex !== null) {
    return <ERPTypeDeepDive erpIndex={selectedTypeIndex} onBack={() => setSelectedTypeIndex(null)} lang={lang} />;
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

      {/* Hero Definition */}
      <div className="bg-slate-900 border border-blue-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-9xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Software</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">{current.hero.question}</h4>
            <p className="text-blue-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.simple}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-blue-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">
            "🖥️ {current.hero.desc}"
         </div>
      </div>

      {/* How it works: Flow Visual */}
      <div className="bg-slate-950 border border-white/10 p-8 md:p-12 rounded-[48px] shadow-2xl space-y-12">
         <h4 className="text-white text-center font-black text-xl md:text-3xl uppercase tracking-tighter italic">{current.howItWorks.title}</h4>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 hidden md:block"></div>
            {current.howItWorks.steps.map((step, i) => (
               <div key={i} className="bg-slate-900 p-6 rounded-3xl border border-white/5 group hover:border-blue-500/40 transition-all flex flex-col items-center text-center gap-4 relative z-10">
                  <div className="w-16 h-16 bg-slate-950 border-2 border-blue-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                     {step.icon}
                  </div>
                  <div>
                     <h5 className="text-white font-black text-xs uppercase tracking-widest mb-1">{step.dept}</h5>
                     <p className="text-slate-400 text-[10px] font-bold italic">"{step.act}"</p>
                  </div>
               </div>
            ))}
         </div>
         <div className="bg-rose-500/10 border-l-4 border-rose-500 p-4 rounded-r-xl">
            <span className="text-rose-500 font-black text-[9px] uppercase tracking-widest block mb-1">CRITICAL LOGIC / ज़रूरी बात:</span>
            <p className="text-white text-xs font-bold italic">"{current.howItWorks.logic}"</p>
         </div>
      </div>

      {/* Types Grid */}
      <div className="space-y-8">
         <h4 className="text-white text-[10px] font-black uppercase tracking-[0.5em]">{current.types.title}</h4>
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {current.types.items.map((item, i) => (
               <div 
                key={i} 
                onClick={() => setSelectedTypeIndex(i)}
                className={`bg-slate-900/60 border border-${item.color}-500/20 p-6 rounded-[32px] hover:bg-slate-800 transition-all group flex flex-col gap-4 shadow-xl cursor-pointer hover:border-blue-500 hover:ring-1 hover:ring-blue-500/50`}
               >
                  <div className="flex justify-between items-start">
                     <h5 className={`text-white font-black text-xl tracking-tighter uppercase text-${item.color}-400 group-hover:text-white transition-colors`}>{item.name}</h5>
                     <span className={`text-[7px] font-black text-${item.color}-500 border border-${item.color}-500/30 px-2 py-0.5 rounded uppercase`}>{item.tag}</span>
                  </div>
                  <p className="text-slate-500 text-[10px] font-bold leading-relaxed">{item.desc}</p>
                  <div className="mt-auto flex items-center gap-2 text-blue-500 text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                     Details <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7" /></svg>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Modules & Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         <div className="lg:col-span-7 bg-slate-900/60 border border-white/10 p-10 rounded-[48px] shadow-2xl space-y-8">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-4">
               <span className="w-12 h-0.5 bg-blue-500"></span>
               {current.modules.title}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
               {current.modules.list.map((m, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-slate-950/60 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all">
                     <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 font-black text-[10px]">0{i+1}</div>
                     <span className="text-slate-300 font-black text-xs uppercase tracking-tight">{m}</span>
                  </div>
               ))}
            </div>
         </div>

         <div className="lg:col-span-5 bg-blue-600 p-10 rounded-[48px] shadow-[0_0_50px_rgba(59,130,246,0.3)] text-center relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 animate-pulse"></div>
            <div className="relative z-10 space-y-4">
               <h5 className="text-white/60 font-black text-[10px] uppercase tracking-[0.6em] mb-2">The Final Logic</h5>
               <p className="text-white text-lg md:text-2xl font-black italic tracking-tight leading-snug">
                  "{current.summary}"
               </p>
            </div>
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_white] animate-pulse"></span>
                ERP Engine: Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_white]"></span>
                Database: Synchronized
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Module: ERP-Core-v1 // Enterprise Node</div>
      </div>
    </div>
  );
};

export default ERPDetail;

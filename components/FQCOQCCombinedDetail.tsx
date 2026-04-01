
import React, { useState } from 'react';
import { Language } from '../types';
import FQCOQCPointDetail from './FQCOQCPointDetail';

interface FQCOQCCombinedDetailProps {
  onBack: () => void;
  lang: Language;
}

const FQCOQCCombinedDetail: React.FC<FQCOQCCombinedDetailProps> = ({ onBack, lang }) => {
  const [activeTab, setActiveTab] = useState<'fqc' | 'oqc'>('fqc');
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null);

  const content = {
    en: {
      title: "Final & Outgoing Quality Hub",
      subtitle: "The 100% Quality Assurance Zone",
      backBtn: "Back to QMS",
      tabs: ["FQC (Production Guard)", "OQC (Dispatch Shield)"],
      fqc: {
        header: "Final Quality Control (FQC)",
        mantra: "100% Inspection at Line End.",
        desc: "FQC ensures every single unit leaving the production floor is verified for function and looks. There is zero tolerance for defects here.",
        elements: [
          { id: "FIR", title: "FIR Report", v: "100% Inspection records per shift.", icon: "📋", deep: true },
          { id: "FUNCTION", title: "Function Test", v: "Power ON, buttons, software logic.", icon: "⚡" },
          { id: "PDI", title: "PDI Check", v: "Pre-Delivery check from customer eyes.", icon: "👁️", deep: true },
          { id: "SAFETY", title: "Safety (HV)", v: "High Voltage & Leakage testing.", icon: "🛡️" }
        ],
        docs: [
          { n: "FIR", d: "Final Inspection Report (100% records)." },
          { n: "PDI", d: "Pre-Delivery check sheet." },
          { n: "Pass Mark", d: "Physical OK stamp/label on part." }
        ],
        strategy: "Focus on DETECTION: Catch any process failure before parts enter the warehouse."
      },
      oqc: {
        header: "Outgoing Quality Control (OQC)",
        mantra: "Pre-Dispatch Sampling Audit.",
        desc: "OQC focuses on the 'Box' and 'Logistics'. It ensures the customer receives the right quantity, with correct labeling, in perfect packaging.",
        elements: [
          { id: "AQL", title: "AQL Sampling", v: "Statistical audit based on lot size.", icon: "🎲", deep: true },
          { id: "COC_COQ", title: "COC / COQ", v: "Certificates of Conformance & Quality.", icon: "📜", deep: true },
          { id: "PACK", title: "Packaging", v: "Box grade, tape, internal cushioning.", icon: "📦" },
          { id: "VEHICLE", title: "Vehicle Audit", v: "Truck health, no leakage, cleanliness.", icon: "🚛" }
        ],
        docs: [
          { n: "OQC Sheet", d: "AQL-based sampling audit report." },
          { n: "COC / COQ", d: "Certificate of Conformance for client." },
          { n: "Packing List", d: "Verified list of loaded goods." }
        ],
        strategy: "Focus on LOGISTICS: Ensure safe delivery and 100% accurate documentation."
      }
    },
    hi: {
      title: "अंतिम और आउटगोइंग क्वालिटी हब",
      subtitle: "100% क्वालिटी अश्योरेंस जोन",
      backBtn: "QMS पर वापस जाएं",
      tabs: ["FQC (लाइन का रक्षक)", "OQC (डिस्पैच सुरक्षा)"],
      fqc: {
        header: "FQC (अंतिम क्वालिटी जांच)",
        mantra: "लाइन के अंत में 100% जांच।",
        desc: "FQC यह सुनिश्चित करता है कि प्रोडक्शन फ्लोर से निकलने वाला हर एक पीस फंक्शनल और विजुअल तौर पर परफेक्ट हो।",
        elements: [
          { id: "FIR", title: "FIR रिपोर्ट", v: "हर पीस की 100% जांच का रिकॉर्ड।", icon: "📋", deep: true },
          { id: "FUNCTION", title: "फंक्शन टेस्ट", v: "पावर ऑन, बटन, सॉफ्टवेयर लॉजिक।", icon: "⚡" },
          { id: "PDI", title: "PDI चेक", v: "कस्टमर की नज़र से अंतिम जांच।", icon: "👁️", deep: true },
          { id: "SAFETY", title: "सेफ्टी टेस्ट", v: "HV टेस्ट और लीकेज चेक।", icon: "🛡️" }
        ],
        docs: [
          { n: "FIR रिपोर्ट", d: "हर पीस की जांच का 100% रिकॉर्ड।" },
          { n: "PDI चेकलिस्ट", d: "डिलीवरी से पहले की जांच रिपोर्ट।" },
          { n: "FQC स्टैम्प", d: "प्रोडक्ट पर लगा OK का निशान।" }
        ],
        strategy: "पहचान (Detection) पर ध्यान: वेयरहाउस में माल जाने से पहले गलती पकड़ना।"
      },
      oqc: {
        header: "OQC (आउटगोइंग क्वालिटी जांच)",
        mantra: "डिस्पैच से पहले सैंपलिंग ऑडिट।",
        desc: "OQC का ध्यान 'पैकिंग' और 'लॉजिस्टिक्स' पर होता है। यह पक्का करता है कि ग्राहक को सही मात्रा और सही पैकिंग मिले।",
        elements: [
          { id: "AQL", title: "AQL सैंपलिंग", v: "लॉट साइज के हिसाब से स्टेटिस्टिकल ऑडिट।", icon: "🎲", deep: true },
          { id: "COC_COQ", title: "COC / COQ", v: "क्वालिटी और कन्फर्मेन्स सर्टिफिकेट।", icon: "📜", deep: true },
          { id: "PACK", title: "पैकिंग", v: "बॉक्स की मजबूती, टेप, थर्माकोल।", icon: "📦" },
          { id: "VEHICLE", title: "गाड़ी ऑडिट", v: "ट्रक की सफाई और सुरक्षा जांच।", icon: "🚛" }
        ],
        docs: [
          { n: "OQC शीट", d: "AQL सैंपलिंग के आधार पर ऑडिट रिपोर्ट।" },
          { n: "COC / COQ", d: "क्वालिटी का गारंटी सर्टिफिकेट।" },
          { n: "पैकिंग लिस्ट", d: "डिस्पैच होने वाले माल की लिस्ट।" }
        ],
        strategy: "लॉजिस्टिक्स पर ध्यान: सुरक्षित डिलीवरी और सही कागजी कार्यवाही।"
      }
    }
  };

  const current = content[lang];

  if (selectedPoint) {
    return <FQCOQCPointDetail pointId={selectedPoint} onBack={() => setSelectedPoint(null)} lang={lang} />;
  }

  const activeData = activeTab === 'fqc' ? current.fqc : current.oqc;
  const activeColor = activeTab === 'fqc' ? 'indigo' : 'emerald';

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-indigo-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className={`w-3 h-3 bg-${activeColor}-500 rounded-full animate-pulse shadow-[0_0_12px_${activeColor}]`}></div>
              <span className={`text-${activeColor}-400 text-[10px] font-black uppercase tracking-[0.4em]`}>{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono">{current.title}</h3>
        </div>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Mode Selection Tabs */}
      <div className="flex gap-4 p-2 bg-slate-900 border border-white/10 rounded-[32px] shadow-2xl">
         <button 
          onClick={() => setActiveTab('fqc')}
          className={`flex-1 py-6 rounded-[24px] transition-all flex flex-col items-center gap-2 ${activeTab === 'fqc' ? 'bg-indigo-600 text-white shadow-lg scale-105' : 'text-slate-500 hover:bg-white/5'}`}
         >
            <span className="text-2xl">✅</span>
            <span className="font-black uppercase tracking-widest text-xs md:text-sm">{current.tabs[0]}</span>
         </button>
         <button 
          onClick={() => setActiveTab('oqc')}
          className={`flex-1 py-6 rounded-[24px] transition-all flex flex-col items-center gap-2 ${activeTab === 'oqc' ? 'bg-emerald-600 text-white shadow-lg scale-105' : 'text-slate-500 hover:bg-white/5'}`}
         >
            <span className="text-2xl">🚢</span>
            <span className="font-black uppercase tracking-widest text-xs md:text-sm">{current.tabs[1]}</span>
         </button>
      </div>

      {/* Dynamic Content Hero */}
      <div className={`bg-slate-900 border border-${activeColor}-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group transition-colors duration-500`}>
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">{activeTab}</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{activeData.header}</h4>
            <p className={`text-${activeColor}-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg`}>"{activeData.mantra}"</p>
         </div>
         <div className={`bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-${activeColor}-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors`}>
            <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">"{activeData.desc}"</p>
         </div>
      </div>

      {/* Elements Grid - INTERACTIVE */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {activeData.elements.map((el, i) => (
           <div 
             key={i} 
             onClick={() => el.deep && setSelectedPoint(el.id)}
             className={`bg-slate-950/60 border border-white/5 p-8 rounded-[32px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden ${el.deep ? 'cursor-pointer border-indigo-500/30 ring-1 ring-white/5' : ''}`}
           >
              <div className="flex items-center justify-between">
                 <div className={`w-14 h-14 bg-slate-900 border border-${activeColor}-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>{el.icon}</div>
                 <span className={`text-${activeColor}-500 font-black text-[9px] uppercase tracking-widest opacity-40`}>STP-0{i+1}</span>
              </div>
              <div className="space-y-2">
                 <div className="flex items-center justify-between">
                    <h5 className={`text-white font-black text-lg uppercase tracking-tight group-hover:text-${activeColor}-400 transition-colors`}>{el.title}</h5>
                    {el.deep && <span className="text-[7px] bg-white/10 px-2 py-0.5 rounded text-white/50 uppercase font-black animate-pulse">Deep Dive</span>}
                 </div>
                 <p className="text-slate-500 text-xs font-bold leading-relaxed italic">{el.v}</p>
              </div>
              {el.deep && (
                <div className="mt-auto flex items-center gap-2 text-indigo-400 text-[8px] font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                   Explore Module <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              )}
           </div>
         ))}
      </div>

      {/* Documents & Strategy Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         <div className="lg:col-span-8 bg-slate-900/60 border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8">
            <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter italic flex items-center gap-4">
               <span className={`w-12 h-1 bg-${activeColor}-500 shadow-[0_0_10px_${activeColor}]`}></span>
               {lang === 'hi' ? 'अनिवार्य दस्तावेज़' : 'Mandatory Records'}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {activeData.docs.map((doc, i) => (
                  <div key={i} className="bg-slate-950 p-5 rounded-3xl border border-white/5 group hover:border-white/20 transition-all shadow-xl">
                     <div className="flex items-center justify-between mb-2">
                        <span className={`text-${activeColor}-500 font-black text-[10px] uppercase tracking-widest`}>{doc.n}</span>
                        <div className="w-6 h-6 bg-slate-900 rounded-lg flex items-center justify-center text-xs opacity-50">📄</div>
                     </div>
                     <p className="text-slate-500 text-[10px] font-bold leading-relaxed">{doc.d}</p>
                  </div>
               ))}
            </div>
         </div>

         <div className={`lg:col-span-4 bg-${activeColor}-950/20 border border-${activeColor}-500/20 p-8 md:p-10 rounded-[40px] shadow-2xl flex flex-col gap-6 backdrop-blur-xl`}>
            <h4 className={`text-${activeColor}-400 text-[10px] font-black uppercase tracking-[0.4em]`}>{lang === 'hi' ? 'क्वालिटी रणनीति' : 'Quality Strategy'}</h4>
            <p className="text-white text-sm md:text-lg font-bold leading-relaxed italic border-l-4 border-white/20 pl-6 py-2">
               "{activeData.strategy}"
            </p>
         </div>
      </div>
    </div>
  );
};

export default FQCOQCCombinedDetail;


import React from 'react';
import { Language } from '../types';

interface QualityDetailProps {
  onBack: () => void;
  lang: Language;
}

const QualityDetail: React.FC<QualityDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Quality & Inspection",
      subtitle: "Zero Defect Manufacturing",
      backBtn: "Back",
      sections: {
        rejection: "1. Rejection (Scrap)",
        rework: "2. Rework (Repair)",
        ssiSelf: "3. SSI (Self Sequence Inspection)",
        ssiSupplier: "4. SSI (Supplier Side Issue)"
      },
      rejection: {
        tag: "Total Loss",
        question: "What is it?",
        desc: "Products that do not meet quality standards and CANNOT be fixed. These are considered scrap/waste.",
        reasons: ["Major cracks", "Wrong raw material", "Out of dimension", "Total damage"],
        impact: ["Money loss", "Material waste", "Production target miss"]
      },
      rework: {
        tag: "Additional Effort",
        question: "What is it?",
        desc: "Defective products that CAN be fixed with extra processing. They become usable but cost extra time.",
        examples: ["Loose screws → Tighten", "Label mismatch → Replace", "Minor scratches → Buffing"],
        impact: ["Cycle time increase", "Extra manpower used", "Lower productivity"]
      },
      ssiSelf: {
        tag: "Quality at Source",
        question: "I check my own work",
        desc: "A system where the operator inspects their work step-by-step before passing it to the next station.",
        steps: ["Do work (As per WI)", "Check critical points", "Confirm/Sign/Stamp", "Move to next station"],
        goal: "No error leaves the station. Stop defects immediately."
      },
      ssiSupplier: {
        tag: "External Defect",
        question: "Issue from Vendor",
        desc: "Defects found in parts supplied by external vendors (found at Incoming Inspection).",
        examples: ["Part painting poor", "Mixed raw material", "Damage during transit"]
      }
    },
    hi: {
      title: "क्वालिटी और इंस्पेक्शन",
      subtitle: "जीरो डिफेक्ट मैन्युफैक्चरिंग",
      backBtn: "वापस",
      sections: {
        rejection: "1. रिजेक्शन (Rejection)",
        rework: "2. रीवर्क (Rework)",
        ssiSelf: "3. SSI (सेल्फ सीक्वेंस इंस्पेक्शन)",
        ssiSupplier: "4. SSI (सप्लायर साइड इशू)"
      },
      rejection: {
        tag: "पूरा नुकसान",
        question: "यह क्या है?",
        desc: "वह सामान जो क्वालिटी के हिसाब से बिल्कुल खराब है और जिसे ठीक नहीं किया जा सकता। इसे 'स्क्रैप' माना जाता है।",
        reasons: ["बड़ा क्रैक होना", "गलत रॉ मटेरियल", "साइज का गलत होना", "पूरी तरह टूटा हुआ"],
        impact: ["पैसों का नुकसान", "मटेरियल की बर्बादी", "प्रोडक्शन टारगेट मिस होना"]
      },
      rework: {
        tag: "अतिरिक्त मेहनत",
        question: "यह क्या है?",
        desc: "वह सामान जिसमें कमी तो है, लेकिन दोबारा काम करके उसे ठीक किया जा सकता है। यह इस्तेमाल लायक बन जाता है पर समय ज्यादा लगता है।",
        examples: ["ढीला स्क्रू → टाइट करना", "गलत स्टिकर → नया लगाना", "छोटा स्क्रैच → पॉलिश करना"],
        impact: ["काम में ज्यादा समय", "अतिरिक्त लेबर", "प्रोडक्टिविटी कम होना"]
      },
      ssiSelf: {
        tag: "सोर्स पर क्वालिटी",
        question: "मेरा काम, मेरी जाँच",
        desc: "एक ऐसा सिस्टम जिसमें ऑपरेटर अपना काम खुद स्टेप-बाय-स्टेप चेक करता है ताकि आगे गलत सामान न जाए।",
        steps: ["काम पूरा करना (WI के अनुसार)", "ज़रूरी पॉइंट चेक करना", "कन्फर्म / पंच / साइन", "अगले स्टेशन पर भेजना"],
        goal: "गलती को वहीं रोकें जहाँ वह हुई है। दूसरों पर निर्भरता कम करें।"
      },
      ssiSupplier: {
        tag: "बाहरी डिफेक्ट",
        question: "सप्लायर की गलती",
        desc: "वह डिफेक्ट जो सप्लायर या वेंडर के सामान में मिलता है (Incoming stage पर)।",
        examples: ["पेंटिंग खराब होना", "मटेरियल मिक्स होना", "पैकिंग में डैमेज"]
      }
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-12 max-w-6xl mx-auto px-4 md:px-6 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-rose-500/20 pb-5 bg-slate-950/40 p-5 rounded-t-2xl">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.8)]"></div>
              <span className="text-rose-500 text-[10px] font-black uppercase tracking-[0.3em]">{current.subtitle}</span>
           </div>
           <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tight leading-none">{current.title}</h3>
        </div>
        <button 
          onClick={onBack}
          className="bg-slate-900 hover:bg-slate-800 text-white border border-rose-500/30 px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </button>
      </div>

      {/* Split: Rejection vs Rework */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Rejection */}
        <div className="bg-slate-900/60 border border-red-500/20 rounded-3xl p-6 md:p-8 flex flex-col gap-5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 text-4xl font-black text-red-500/[0.03] select-none">SCRAP</div>
          <div className="flex items-center justify-between">
            <h4 className="text-red-500 font-black text-sm md:text-lg uppercase tracking-tight">{current.sections.rejection}</h4>
            <span className="px-2 py-0.5 bg-red-500/10 border border-red-500/40 rounded text-[8px] text-red-400 font-black uppercase">{current.rejection.tag}</span>
          </div>
          <div className="bg-red-500/5 border-l-4 border-red-500 px-4 py-2">
             <p className="text-white text-xs md:text-sm font-bold leading-relaxed">{current.rejection.desc}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Causes / कारण</span>
              <ul className="space-y-1.5">
                {current.rejection.reasons.map((r, i) => (
                  <li key={i} className="flex items-center gap-2 text-[10px] md:text-xs text-slate-300 font-bold">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-950/50 p-4 rounded-xl border border-red-500/10">
              <span className="text-[9px] font-black text-red-500 uppercase tracking-widest mb-2 block italic">Critical Impact</span>
              {current.rejection.impact.map((imp, i) => (
                <p key={i} className="text-[10px] text-slate-400 font-bold leading-relaxed">❌ {imp}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Rework */}
        <div className="bg-slate-900/60 border border-amber-500/20 rounded-3xl p-6 md:p-8 flex flex-col gap-5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 text-4xl font-black text-amber-500/[0.03] select-none">FIX</div>
          <div className="flex items-center justify-between">
            <h4 className="text-amber-500 font-black text-sm md:text-lg uppercase tracking-tight">{current.sections.rework}</h4>
            <span className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/40 rounded text-[8px] text-amber-400 font-black uppercase">{current.rework.tag}</span>
          </div>
          <div className="bg-amber-500/5 border-l-4 border-amber-500 px-4 py-2">
             <p className="text-white text-xs md:text-sm font-bold leading-relaxed">{current.rework.desc}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Examples / उदाहरण</span>
              <ul className="space-y-1.5">
                {current.rework.examples.map((r, i) => (
                  <li key={i} className="flex items-center gap-2 text-[10px] md:text-xs text-slate-300 font-bold">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-950/50 p-4 rounded-xl border border-amber-500/10">
              <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest mb-2 block italic">Hidden Costs</span>
              {current.rework.impact.map((imp, i) => (
                <p key={i} className="text-[10px] text-slate-400 font-bold leading-relaxed">⚠️ {imp}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SSI (Self Sequence Inspection) - Detailed Flow */}
      <div className="bg-slate-900/60 border border-emerald-500/20 rounded-3xl p-6 md:p-10 flex flex-col gap-8 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 text-5xl font-black text-emerald-500/[0.03] select-none">SELF CHECK</div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-emerald-500 font-black text-sm md:text-xl uppercase tracking-tight">{current.sections.ssiSelf}</h4>
            <div className="bg-emerald-500/10 border-l-4 border-emerald-500 px-4 py-2">
               <p className="text-white text-xs md:text-sm font-black leading-relaxed italic">"{current.ssiSelf.question}"</p>
            </div>
          </div>
          <div className="bg-emerald-500/20 px-4 py-1.5 rounded-full border border-emerald-500/40 text-emerald-400 text-[9px] font-black uppercase tracking-widest">{current.ssiSelf.tag}</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
           {/* Visual Workflow */}
           <div className="lg:col-span-8">
              <div className="flex flex-col md:flex-row items-center gap-4 relative">
                 <div className="absolute top-1/2 left-0 w-full h-0.5 bg-emerald-500/10 -translate-y-1/2 hidden md:block"></div>
                 {current.ssiSelf.steps.map((step, i) => (
                   <div key={i} className="flex-1 w-full bg-slate-950/80 border border-white/5 p-4 rounded-2xl relative z-10 hover:border-emerald-500/50 transition-all group/step">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-black text-xs mb-3 group-hover/step:bg-emerald-500 group-hover/step:text-white transition-all">
                         0{i+1}
                      </div>
                      <p className="text-[10px] md:text-[11px] text-slate-200 font-black uppercase leading-tight">{step}</p>
                   </div>
                 ))}
              </div>
           </div>

           <div className="lg:col-span-4 bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-2xl flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xs md:text-sm text-white font-black uppercase italic leading-snug">{current.ssiSelf.goal}</p>
           </div>
        </div>
      </div>

      {/* SSI (Supplier Side Issue) */}
      <div className="bg-slate-900/60 border border-blue-500/20 rounded-3xl p-6 md:p-8 flex flex-col gap-5 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 text-4xl font-black text-blue-400/[0.03] select-none">EXTERNAL</div>
        <div className="flex items-center justify-between">
          <h4 className="text-blue-400 font-black text-sm md:text-lg uppercase tracking-tight">{current.sections.ssiSupplier}</h4>
          <span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/40 rounded text-[8px] text-blue-400 font-black uppercase">{current.ssiSupplier.tag}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
           <div className="space-y-4">
              <p className="text-slate-300 text-xs md:text-sm font-bold leading-relaxed">{current.ssiSupplier.desc}</p>
              <div className="bg-slate-950/80 p-5 rounded-2xl border border-white/5">
                 <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-3 block">Real World Examples</span>
                 <div className="grid grid-cols-1 gap-2">
                    {current.ssiSupplier.examples.map((ex, i) => (
                      <div key={i} className="flex items-center gap-3 p-2 bg-white/5 rounded-lg border border-white/5">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-[10px] md:text-xs text-slate-200 font-bold uppercase">{ex}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
           
           <div className="flex justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl border-2 border-dashed border-blue-500/30 flex items-center justify-center p-6 text-center group-hover:rotate-6 transition-transform">
                 <div className="flex flex-col items-center gap-2">
                    <svg className="w-12 h-12 text-blue-400 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-[8px] font-black text-blue-400 uppercase tracking-widest">Incoming Intelligence Unit</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default QualityDetail;

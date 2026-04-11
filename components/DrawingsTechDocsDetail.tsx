
import React from 'react';
import { Language } from '../types';

interface DrawingsTechDocsDetailProps {
  onBack: () => void;
  lang: Language;
}

const DrawingsTechDocsDetail: React.FC<DrawingsTechDocsDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Drawings & Tech Docs",
      subtitle: "Engineering Reference & Revision Control",
      backBtn: "Back to Engineering",
      hero: {
        question: "What are Drawings & Tech Docs?",
        desc: "These are the master reference documents that define exactly how a product must be built—covering dimensions, material, and process steps.",
        mantra: "Production follows the drawing; Quality follows the drawing."
      },
      pillars: [
        {
          id: 1,
          title: "Blueprint Reading",
          tag: "Visual Language",
          desc: "The ability to accurately interpret complex engineering drawings.",
          details: [
            "Understanding Dimensions & Tolerances",
            "GD&T Symbols & Surface Finish",
            "Views: Top, Front, Side, Isometric",
            "Technical Notes & Material specs"
          ],
          benefit: "Prevents wrong manufacturing and quality disputes.",
          icon: "📐"
        },
        {
          id: 2,
          title: "ECN / ECR Management",
          tag: "Revision Control",
          desc: "Systematic control of any engineering changes to parts or processes.",
          details: [
            "ECR: Request for a change (Improvement)",
            "ECN: Official release of approved change",
            "Revision History (Rev A -> Rev B)",
            "Effective Date & Cut-off control"
          ],
          benefit: "Ensures the correct version is produced on the line.",
          icon: "📑"
        },
        {
          id: 3,
          title: "Master Samples",
          tag: "The Golden Part",
          desc: "Approved physical samples used as the ultimate reference point.",
          details: [
            "Signed by Engineering & Quality",
            "Standard for Color, Finish & Fitment",
            "Boundary samples for Limit checks",
            "Visual reference for line comparison"
          ],
          benefit: "Removes confusion between 'Good' and 'Bad' units.",
          icon: "🧪"
        }
      ],
      comparison: {
        title: "The Change Lifecycle",
        ecr: { name: "ECR (Request)", action: "Proposed Change", color: "amber" },
        ecn: { name: "ECN (Notice)", action: "Released Change", color: "emerald" }
      },
      impact: {
        title: "Technical Impact Matrix",
        headers: ["Operational Area", "Effect Result"],
        rows: [
          { area: "Quality", result: "Stable (Standardized)", color: "emerald" },
          { area: "Rework", result: "Reduced (No Revision Error)", color: "cyan" },
          { area: "Confusion", result: "Avoided (Clear Specs)", color: "indigo" },
          { area: "Traceability", result: "Improved (Rev History)", color: "blue" }
        ]
      }
    },
    hi: {
      title: "ड्राइंग और टेक्निकल डॉक्स",
      subtitle: "इंजीनियरिंग रेफरेंस और रिवीजन कंट्रोल",
      backBtn: "वापस जाएं",
      hero: {
        question: "Drawings & Tech Docs क्या होते हैं?",
        desc: "ये वो मुख्य दस्तावेज हैं जो बताते हैं कि प्रोडक्ट का डिज़ाइन, माप (Dimensions), मटेरियल और बनाने का तरीका कैसा होना चाहिए।",
        mantra: "प्रोडक्शन ड्राइंग को फॉलो करता है; क्वालिटी ड्राइंग को फॉलो करती है।"
      },
      pillars: [
        {
          id: 1,
          title: "ब्लूप्रिंट रीडिंग (Blueprint)",
          tag: "विजुअल भाषा",
          desc: "इंजीनियरिंग ड्राइंग को सही तरह से समझने और पढ़ने की क्षमता।",
          details: [
            "माप (Dimensions) और टॉलरेंस समझना",
            "GD&T सिंबल और फिनिश की जानकारी",
            "Views: टॉप, फ्रंट, साइड और आइसोमेट्रिक",
            "टेक्निकल नोट्स और मटेरियल जानकारी"
          ],
          benefit: "गलत मैन्युफैक्चरिंग और क्वालिटी विवादों को रोकता है।",
          icon: "📐"
        },
        {
          id: 2,
          title: "ECN / ECR मैनेजमेंट",
          tag: "रिवीजन कंट्रोल",
          desc: "डिज़ाइन या प्रोसेस में होने वाले किसी भी बदलाव का व्यवस्थित नियंत्रण।",
          details: [
            "ECR: बदलाव के लिए किया गया अनुरोध",
            "ECN: मंजूर बदलाव की आधिकारिक सूचना",
            "रिवीजन इतिहास (Rev A -> Rev B)",
            "लागू होने की तारीख और स्टॉक कंट्रोल"
          ],
          benefit: "सुनिश्चित करता है कि लाइन पर हमेशा सही वर्जन बने।",
          icon: "📑"
        },
        {
          id: 3,
          title: "मास्टर सैंपल्स (Master Sample)",
          tag: "गोल्डन पार्ट",
          desc: "मंजूर किए गए असली सैंपल्स जिन्हें सबसे सटीक रेफरेंस माना जाता है।",
          details: [
            "इंजीनियरिंग और क्वालिटी द्वारा हस्ताक्षरित",
            "रंग, फिनिश और फिटमेंट के लिए बेंचमार्क",
            "लिमिट सैंपल्स (OK/NG बाउंड्री)",
            "लाइन पर तुलना के लिए उपयोग"
          ],
          benefit: "अच्छे और खराब माल के बीच का भ्रम (Confusion) खत्म करता है।",
          icon: "🧪"
        }
      ],
      comparison: {
        title: "बदलाव का चक्र (Change Cycle)",
        ecr: { name: "ECR (प्रस्ताव)", action: "बदलाव का सुझाव", color: "amber" },
        ecn: { name: "ECN (सूचना)", action: "बदलाव लागू करना", color: "emerald" }
      },
      impact: {
        title: "तकनीकी असर (Impact Matrix)",
        headers: ["कार्यक्षेत्र", "सुधार का नतीजा"],
        rows: [
          { area: "क्वालिटी", result: "स्थिर (एक जैसा काम)", color: "emerald" },
          { area: "रीवर्क", result: "कमी (गलत रिवीजन से बचाव)", color: "cyan" },
          { area: "कन्फ्यूजन", result: "खत्म (साफ़ निर्देश)", color: "indigo" },
          { area: "ट्रेसेबिलिटी", result: "सुधार (रिवीजन रिकॉर्ड)", color: "blue" }
        ]
      }
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-cyan-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_12px_cyan]"></div>
              <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono">Tech Docs Hub</h2>
        </div>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-cyan-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Documentation</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h3 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h3>
            <p className="text-cyan-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-cyan-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-sm md:text-lg font-bold italic leading-relaxed">
            "{current.hero.mantra}"
         </div>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {current.pillars.map((p) => (
            <div key={p.id} className="bg-slate-950/60 border border-white/5 p-8 rounded-[40px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden h-full">
               <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-slate-900 border border-cyan-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                     {p.icon}
                  </div>
                  <span className="text-cyan-500 font-black text-[10px] uppercase tracking-widest border border-cyan-500/30 px-3 py-1 rounded-full">{p.tag}</span>
               </div>

               <div className="space-y-2">
                  <h4 className="text-white text-xl font-black uppercase tracking-tight group-hover:text-cyan-400 transition-colors flex items-center gap-3">
                     <span className="text-cyan-500/40 font-mono">0{p.id}</span>
                     {p.title}
                  </h4>
                  <p className="text-slate-400 text-xs font-bold leading-relaxed italic">"{p.desc}"</p>
               </div>

               <div className="space-y-3 pt-4 border-t border-white/5 mt-auto">
                  {p.details.map((detail, idx) => (
                     <div key={idx} className="flex items-center gap-3 text-[10px] text-slate-300 font-black uppercase tracking-tight">
                        <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                        {detail}
                     </div>
                  ))}
               </div>

               <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl mt-2">
                  <p className="text-white text-[10px] font-bold italic leading-tight">📌 {p.benefit}</p>
               </div>
            </div>
         ))}
      </div>

      {/* Change Management Flow Visual */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl space-y-10 overflow-hidden relative">
         <div className="absolute top-0 right-0 p-4 text-white/5 font-black text-4xl italic">Revision Cycle</div>
         <h3 className="text-white text-center font-black text-xl md:text-2xl uppercase tracking-[0.3em]">{current.comparison.title}</h3>
         <div className="flex flex-col md:flex-row items-center justify-center gap-12 py-6">
            <div className="bg-slate-950 p-8 rounded-[32px] border border-amber-500/30 flex flex-col items-center gap-4 group hover:scale-105 transition-all shadow-xl">
               <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/50 rounded-2xl flex items-center justify-center text-amber-500 text-3xl">📝</div>
               <h4 className="text-white font-black text-lg uppercase tracking-tight">{current.comparison.ecr.name}</h4>
               <span className="text-[10px] font-black uppercase text-amber-400 tracking-widest">{current.comparison.ecr.action}</span>
            </div>

            <div className="text-slate-400 text-4xl rotate-90 md:rotate-0">➔</div>

            <div className="bg-slate-950 p-8 rounded-[32px] border border-emerald-500/30 flex flex-col items-center gap-4 group hover:scale-105 transition-all shadow-xl">
               <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/50 rounded-2xl flex items-center justify-center text-emerald-500 text-3xl">✅</div>
               <h4 className="text-white font-black text-lg uppercase tracking-tight">{current.comparison.ecn.name}</h4>
               <span className="text-[10px] font-black uppercase text-emerald-400 tracking-widest">{current.comparison.ecn.action}</span>
            </div>
         </div>
      </div>

      {/* Impact Matrix Table */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl overflow-hidden backdrop-blur-xl">
         <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
            <span className="w-10 h-1 bg-cyan-500 shadow-[0_0_12px_cyan]"></span>
            {current.impact.title}
         </h3>
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="border-b border-white/10">
                     {current.impact.headers.map((h, i) => (
                        <th key={i} className={`py-4 text-[10px] font-black uppercase tracking-widest ${i === 0 ? 'text-slate-500' : 'text-cyan-400'}`}>{h}</th>
                     ))}
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {current.impact.rows.map((row, i) => (
                     <tr key={i} className="group hover:bg-white/5 transition-colors">
                        <td className="py-6 text-white font-black text-xs md:text-sm uppercase tracking-tight">{row.area}</td>
                        <td className="py-6">
                           <span className={`bg-${row.color}-500/10 text-${row.color}-400 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-${row.color}-500/30`}>
                              {row.result}
                           </span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-[0_0_12px_cyan] animate-pulse"></span>
                Archive Engine: Connected
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Standard: IATF Section 7.5 // Engineering Node v12.4</div>
      </div>
    </div>
  );
};

export default DrawingsTechDocsDetail;


import React from 'react';
import { Language } from '../types';

interface FGDetailProps {
  onBack: () => void;
  lang: Language;
}

const FGDetail: React.FC<FGDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Finished Goods (FG) Hub",
      subtitle: "Outbound Value & Customer Readiness",
      backBtn: "Back to Hub",
      hero: {
        question: "What is Finished Goods (FG)?",
        desc: "Finished Goods (FG) are products that have completed the entire manufacturing process, passed OQC (Outgoing Quality Control), and are now stored and ready for dispatch to the customer.",
        simple: "In simple words: 'Customer-ready products'.",
        mantra: "The final proof of factory performance."
      },
      steps: [
        {
          id: 1,
          title: "Model-Wise Storage",
          desc: "Dedicated zones or racks for each individual product model / SKU.",
          points: [
            "Specific zones for each SKU",
            "Clear rack labeling & model names",
            "Color-coded visual identification",
            "Zero mix-up guarantee"
          ],
          purpose: "Prevent wrong dispatch and mixed shipments.",
          icon: "🏗️",
          color: "blue"
        },
        {
          id: 2,
          title: "Safe Stacking Height",
          desc: "Maintaining carton stacks within safe, engineered limits.",
          points: [
            "Predefined max stacking levels",
            "Heavy cartons at bottom, light on top",
            "Use of pallets or industrial racks",
            "Ensuring box integrity and stability"
          ],
          purpose: "Avoid product damage and floor accidents.",
          icon: "📏",
          color: "emerald"
        },
        {
          id: 3,
          title: "Dispatch Staging",
          desc: "A separate area for segregating goods before loading onto vehicles.",
          points: [
            "Order-wise or Invoice-wise grouping",
            "Easy loading and final verification",
            "Strict adherence to FIFO flow",
            "Fast & accurate truck turnaround"
          ],
          purpose: "Ensure fast and on-time delivery.",
          icon: "🚛",
          color: "cyan"
        },
        {
          id: 4,
          title: "Quality Pass Stock Only",
          desc: "Strict control ensuring only verified goods enter the FG zone.",
          points: [
            "OQC 'PASS' tag or stamp mandatory",
            "Isolation of 'Hold' or 'NG' material",
            "100% reliability for the end customer",
            "System-linked release locks"
          ],
          purpose: "Guarantee zero defects reach the customer.",
          icon: "🛡️",
          color: "indigo"
        }
      ],
      impact: {
        title: "Finished Goods (FG) Impact Matrix",
        headers: ["Area", "Effect Result"],
        rows: [
          { area: "Customer Satisfaction", effect: "Improve (Quality Delivery)", color: "emerald" },
          { area: "Dispatch Accuracy", effect: "Improve (Zero Error)", color: "cyan" },
          { area: "Damage Risk", effect: "Reduce (Safe Storage)", color: "amber" },
          { area: "Audit Compliance", effect: "Strong (100% Traceable)", color: "indigo" }
        ]
      },
      summary: "FG Management = The 'Final Promise' to our customer."
    },
    hi: {
      title: "Finished Goods (FG) हब",
      subtitle: "आउटबाउंड वैल्यू और ग्राहक तैयारी",
      backBtn: "वापस जाएं",
      hero: {
        question: "Finished Goods (FG) क्या होता है?",
        desc: "Finished Goods (FG) वो प्रोडक्ट्स होते हैं जो प्रोडक्शन पूरा होने के बाद OQC (Outgoing Quality Control) से पास हो चुके होते हैं और कस्टमर को भेजने के लिए बिल्कुल तैयार होते हैं।",
        simple: "आसान भाषा में: 'कस्टमर के लिए तैयार माल' (Customer-ready products)।",
        mantra: "सटीक डिस्पैच ही फैक्ट्री की असली सफलता है।"
      },
      steps: [
        {
          id: 1,
          title: "Model-Wise Storage",
          desc: "हर प्रोडक्ट मॉडल या SKU के लिए अलग और तय स्टोरेज एरिया।",
          points: [
            "हर SKU के लिए अलग रैक या ज़ोन",
            "साफ़ लेबलिंग और मॉडल का नाम",
            "कलर कोडिंग (पहचान के लिए)",
            "मिक्स-अप (Mix-up) होने का जीरो चांस"
          ],
          purpose: "गलत मॉडल डिस्पैच और कस्टमर शिकायत रोकना।",
          icon: "🏗️",
          color: "blue"
        },
        {
          id: 2,
          title: "Safe Stacking Height",
          desc: "डिब्बों (Cartons) को एक तय और सुरक्षित ऊंचाई तक ही रखना।",
          points: [
            "अधिकतम ऊंचाई (Max Height) पहले से तय",
            "भारी डिब्बे नीचे, हल्के ऊपर",
            "पैलेट (Pallet) या रैक का उपयोग",
            "डिब्बे दबने या गिरने से बचाना"
          ],
          purpose: "प्रोडक्ट के नुकसान और एक्सीडेंट से बचाव।",
          icon: "📏",
          color: "emerald"
        },
        {
          id: 3,
          title: "Dispatch Staging",
          desc: "डिस्पैच से पहले माल को एक अलग 'स्टेजिंग एरिया' में रखना।",
          points: [
            "इनवॉइस या ऑर्डर के हिसाब से ग्रुप बनाना",
            "आसान वेरिफिकेशन और लोडिंग",
            "FIFO (पुराना माल पहले) का पालन",
            "ट्रक की तेज़ रवानगी"
          ],
          purpose: "तेज़, सटीक और समय पर डिस्पैच सुनिश्चित करना।",
          icon: "🚛",
          color: "cyan"
        },
        {
          id: 4,
          title: "Quality Pass Stock Only",
          desc: "सिर्फ वही माल FG एरिया में आएगा जो क्वालिटी पास है।",
          points: [
            "OQC पास टैग या स्टैम्प अनिवार्य",
            "रोका गया (Hold) माल बिल्कुल अलग",
            "100% भरोसेमंद डिलीवरी",
            "सिस्टम-लॉक्ड क्लियरेंस"
          ],
          purpose: "ग्राहक को 100% सही प्रोडक्ट मिले इसकी गारंटी।",
          icon: "🛡️",
          color: "indigo"
        }
      ],
      impact: {
        title: "Finished Goods (FG) का कुल असर",
        headers: ["क्षेत्र (Area)", "असर (Effect)"],
        rows: [
          { area: "ग्राहक संतुष्टि (Satisfaction)", effect: "सुधार (Improve)", color: "emerald" },
          { area: "डिस्पैच सटीकता", effect: "सुधार (Accuracy)", color: "cyan" },
          { area: "नुकसान का रिस्क", effect: "कमी (Reduce)", color: "amber" },
          { area: "ऑडिट और नियम", effect: "मज़बूत (Strong)", color: "indigo" }
        ]
      },
      summary: "FG मैनेजमेंट = ग्राहक से किया गया 'अंतिम वादा' पूरा करना।"
    }
  };

  const current = content[lang] || content['en'];

  return (
    <div className="flex flex-col gap-8 animate-in slide-in-from-right-6 duration-700 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-emerald-500/20 pb-6 bg-slate-950/40 p-8 rounded-t-[40px] backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_12px_emerald]"></div>
              <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none italic font-mono">{current.title}</h3>
        </div>
        <button onClick={onBack} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Definition */}
      <div className="bg-slate-900 border border-emerald-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-9xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Ready FG</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-emerald-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.simple}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-emerald-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">
            "📦 {current.hero.desc}"
         </div>
         <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.6em] animate-pulse">
            {current.hero.mantra}
         </p>
      </div>

      {/* Deep Dive Steps */}
      <div className="space-y-12">
         {current.steps.map((step, i) => (
            <div key={step.id} className="relative flex flex-col md:flex-row gap-8 items-start group">
               {/* Connection Line */}
               {i !== current.steps.length - 1 && (
                  <div className="absolute left-[31px] top-16 bottom-0 w-1 bg-gradient-to-b from-emerald-500/50 to-transparent hidden md:block"></div>
               )}

               <div className={`w-16 h-16 rounded-2xl bg-slate-900 border-2 border-${step.color}-500/50 flex items-center justify-center text-3xl shadow-lg relative z-10 group-hover:scale-110 transition-transform`}>
                  {step.icon}
               </div>

               <div className="flex-1 bg-slate-900/60 border border-white/5 p-8 rounded-[40px] shadow-2xl hover:bg-slate-800 transition-all flex flex-col lg:flex-row gap-10 overflow-hidden relative">
                  <div className={`absolute top-0 right-0 p-6 text-6xl font-black text-${step.color}-500/[0.03] select-none italic`}>Node 0{step.id}</div>
                  
                  <div className="lg:w-1/2 space-y-4">
                     <div className="space-y-1">
                        <span className={`text-${step.color}-500 font-black text-[10px] uppercase tracking-widest`}>FG STAGE 0{step.id}</span>
                        <h5 className="text-white text-2xl font-black uppercase tracking-tight">{step.title}</h5>
                     </div>
                     <p className="text-slate-400 text-sm font-bold leading-relaxed italic">"{step.desc}"</p>
                     <div className={`bg-${step.color}-500/10 border-l-4 border-${step.color}-500 p-4 rounded-r-xl`}>
                        <span className={`text-${step.color}-400 text-[8px] font-black uppercase block mb-1`}>Critical Purpose / उद्देश्य:</span>
                        <p className="text-white text-xs font-bold leading-snug">{step.purpose}</p>
                     </div>
                  </div>

                  <div className="lg:w-1/2 space-y-4 relative z-10">
                     <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Operational Points</span>
                     <div className="grid grid-cols-1 gap-2">
                        {step.points.map((p, idx) => (
                           <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
                              <div className={`w-1.5 h-1.5 bg-${step.color}-500 rounded-full shadow-[0_0_8px_${step.color}]`}></div>
                              <span className="text-slate-200 text-[11px] font-bold uppercase tracking-tight leading-tight">{p}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </div>

      {/* Impact Matrix Table */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[48px] shadow-2xl overflow-hidden backdrop-blur-xl mt-8">
         <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
            <span className="w-12 h-1.5 bg-emerald-500 shadow-[0_0_12px_emerald]"></span>
            {current.impact.title}
         </h4>
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="border-b border-white/10 text-xs md:text-sm font-black uppercase">
                     <th className="py-6 text-slate-500">{current.impact.headers[0]}</th>
                     <th className="py-6 text-emerald-500">{current.impact.headers[1]}</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {current.impact.rows.map((row, i) => (
                     <tr key={i} className="group hover:bg-white/5 transition-colors">
                        <td className="py-6 pr-4">
                           <div className="flex items-center gap-3">
                              <span className="text-white font-black text-sm md:text-lg uppercase tracking-tight italic">{row.area}</span>
                           </div>
                        </td>
                        <td className="py-6">
                           <div className="flex items-center gap-3">
                              <span className="text-emerald-500 text-lg">📈</span>
                              <span className={`text-${row.color}-400 font-black text-sm md:text-lg uppercase tracking-tight`}>{row.effect}</span>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      {/* Summary Logic Footer */}
      <div className="bg-emerald-600 p-10 rounded-[48px] shadow-[0_0_50px_rgba(16,185,129,0.3)] text-center relative overflow-hidden group mt-8">
         <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 animate-pulse"></div>
         <div className="relative z-10 space-y-4">
            <h5 className="text-white/60 font-black text-[10px] uppercase tracking-[0.6em] mb-2">Technical Insight</h5>
            <p className="text-white text-lg md:text-3xl font-black italic tracking-tight leading-snug">
               "{current.summary}"
            </p>
         </div>
      </div>

      {/* System Status Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_white] animate-pulse"></span>
                Dispatch Status: Ready
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_white]"></span>
                Quality Integrity: Passed
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Module: Store-FG-v1 // Dispatch Node</div>
      </div>
    </div>
  );
};

export default FGDetail;

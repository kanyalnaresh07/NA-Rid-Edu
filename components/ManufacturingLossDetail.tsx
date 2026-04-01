
import React from 'react';
import { Language } from '../types';

interface ManufacturingLossDetailProps {
  onBack: () => void;
  lang: Language;
}

const ManufacturingLossDetail: React.FC<ManufacturingLossDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Manufacturing Loss & Wastage",
      subtitle: "Efficiency Optimization Node",
      backBtn: "Back",
      hero: {
        lossTitle: "What is Manufacturing Loss?",
        lossDesc: "Any factor that reduces productivity, time, cost, or output. It includes both visible and hidden inefficiencies.",
        wasteTitle: "What is Wastage?",
        wasteDesc: "Material loss that does not become part of the final product. It is primarily physical scrap."
      },
      sevenWastes: {
        title: "The 7 Deadly Lean Wastes",
        items: [
          { name: "Waiting", icon: "⏳", desc: "Idle time while waiting for parts or machine." },
          { name: "Overproduction", icon: "📈", desc: "Making more than required by the customer." },
          { name: "Rework", icon: "🛠️", desc: "Fixing defects that should have been right first time." },
          { name: "Motion", icon: "🚶", desc: "Unnecessary movement of people or tools." },
          { name: "Transportation", icon: "🚛", desc: "Moving material between locations excessively." },
          { name: "Inventory", icon: "📦", desc: "Excess stock/WIP sitting and costing money." },
          { name: "Over-processing", icon: "⚙️", desc: "Doing more work on a part than necessary." }
        ]
      },
      comparison: {
        title: "Loss vs. Wastage",
        headers: ["Feature", "Manufacturing Loss", "Wastage"],
        rows: [
          { f: "Type", l: "Time / Cost / Effort", w: "Direct Material", color: "cyan" },
          { f: "Visibility", l: "Hidden + Visible", w: "Mostly Visible (Scrap)", color: "amber" },
          { f: "Example", l: "Breakdown, Idle time", w: "Cut pieces, Spillage", color: "blue" },
          { f: "Impact", l: "Efficiency Leakage", w: "Direct Material Cost", color: "rose" }
        ]
      },
      toolkit: [
        { label: "4M Analysis", tool: "Root cause detection" },
        { label: "LOB", tool: "Line balancing" },
        { label: "TPM", tool: "Preventive care" },
        { label: "Poka-Yoke", tool: "Error proofing" }
      ]
    },
    hi: {
      title: "मैन्युफैक्चरिंग लॉस और वेस्टेज",
      subtitle: "एफिशिएंसी सुधार केंद्र",
      backBtn: "वापस",
      hero: {
        lossTitle: "मैन्युफैक्चरिंग लॉस क्या है?",
        lossDesc: "कोई भी चीज़ जो प्रोडक्टिविटी, समय या पैसे को कम करती है। यह अदृश्य (Hidden) भी हो सकता है।",
        wasteTitle: "वेस्टेज (Wastage) क्या है?",
        wasteDesc: "मटेरियल का वह हिस्सा जो इस्तेमाल के बाद भी प्रोडक्ट का हिस्सा नहीं बनता, जैसे कतरन या कचरा।"
      },
      sevenWastes: {
        title: "लीन मैन्युफैक्चरिंग के 7 बड़े वेस्ट",
        items: [
          { name: "इंतज़ार (Waiting)", icon: "⏳", desc: "मटेरियल या मशीन का इंतज़ार करना।" },
          { name: "ओवर-प्रोडक्शन", icon: "📈", desc: "ज़रूरत से ज़्यादा सामान बनाना।" },
          { name: "रीवर्क (Rework)", icon: "🛠️", desc: "गलती ठीक करने में दोबारा मेहनत करना।" },
          { name: "मोशन (Motion)", icon: "🚶", desc: "फालतू इधर-उधर घूमना या हाथ हिलाना।" },
          { name: "ट्रांसपोर्टेशन", icon: "🚛", desc: "सामान को बेवजह एक जगह से दूसरी जगह ले जाना।" },
          { name: "इन्वेंटरी (Stock)", icon: "📦", desc: "फालतू स्टॉक या अधूरा माल जमा रखना।" },
          { name: "ओवर-प्रोसेसिंग", icon: "⚙️", desc: "किसी पार्ट पर ज़रूरत से ज़्यादा काम करना।" }
        ]
      },
      comparison: {
        title: "लॉस बनाम वेस्टेज",
        headers: ["विशेषता", "मैन्युफैक्चरिंग लॉस", "वेस्टेज (Wastage)"],
        rows: [
          { f: "प्रकार", l: "समय / मेहनत / पैसा", w: "सीधा मटेरियल", color: "cyan" },
          { f: "दिखावट", l: "छुपा हुआ + दिखता हुआ", w: "साफ दिखता (कचरा)", color: "amber" },
          { f: "उदाहरण", l: "ब्रेकडाउन, खाली समय", w: "टुकड़े, बिखरा हुआ सामान", color: "blue" },
          { f: "असर", l: "क्षमता में कमी", w: "मटेरियल का सीधा नुकसान", color: "rose" }
        ]
      },
      toolkit: [
        { label: "4M एनालिसिस", tool: "जड़ से सुधार" },
        { label: "LOB", tool: "लाइन बैलेंसिंग" },
        { label: "TPM", tool: "मशीन की देखभाल" },
        { label: "पोका-योक", tool: "गलती की रोकथाम" }
      ]
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-6xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-rose-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-rose-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(244,63,94,0.8)]"></div>
              <span className="text-rose-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg">{current.title}</h3>
        </div>
        <button 
          onClick={onBack}
          className="bg-rose-600 hover:bg-rose-500 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </button>
      </div>

      {/* Dual Hero Definition */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="bg-slate-900/60 border border-white/10 p-8 rounded-[40px] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 text-5xl font-black text-white/[0.02] select-none italic uppercase">Loss</div>
            <h4 className="text-rose-400 text-lg md:text-2xl font-black uppercase mb-4">{current.hero.lossTitle}</h4>
            <p className="text-slate-300 text-sm md:text-base font-bold leading-relaxed">{current.hero.lossDesc}</p>
         </div>
         <div className="bg-slate-900/60 border border-white/10 p-8 rounded-[40px] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 text-5xl font-black text-white/[0.02] select-none italic uppercase">Waste</div>
            <h4 className="text-amber-400 text-lg md:text-2xl font-black uppercase mb-4">{current.hero.wasteTitle}</h4>
            <p className="text-slate-300 text-sm md:text-base font-bold leading-relaxed">{current.hero.wasteDesc}</p>
         </div>
      </div>

      {/* 7 Deadly Wastes Section */}
      <div className="bg-slate-950/60 border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl space-y-10">
         <div className="flex items-center gap-4 border-b border-white/10 pb-6">
            <div className="w-10 h-10 bg-rose-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">7</div>
            <h4 className="text-white font-black text-xl uppercase tracking-tighter italic">{current.sevenWastes.title}</h4>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {current.sevenWastes.items.map((item, i) => (
               <div key={i} className="bg-slate-900/40 border border-white/5 p-6 rounded-3xl hover:border-rose-500/30 transition-all group flex flex-col gap-4">
                  <div className="w-12 h-12 bg-slate-950 border border-white/10 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-inner">{item.icon}</div>
                  <div>
                     <h5 className="text-rose-400 font-black text-xs uppercase tracking-widest mb-1">{item.name}</h5>
                     <p className="text-slate-400 text-[10px] font-bold leading-snug">{item.desc}</p>
                  </div>
               </div>
            ))}
            <div className="bg-rose-500/10 border-2 border-dashed border-rose-500/30 rounded-3xl flex flex-col items-center justify-center text-center p-6">
               <span className="text-rose-500 font-black text-2xl italic tracking-tighter">TIM WOODS</span>
               <span className="text-[8px] font-black text-rose-500/60 uppercase tracking-widest">Memory Hook</span>
            </div>
         </div>
      </div>

      {/* Comparison Table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         <div className="lg:col-span-8 bg-slate-900/60 border border-white/10 p-8 rounded-[40px] shadow-2xl overflow-hidden">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-8 flex items-center gap-4">
               <span className="w-12 h-0.5 bg-rose-500"></span>
               {current.comparison.title}
            </h4>
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                     <tr className="border-b border-white/10">
                        {current.comparison.headers.map((h, i) => (
                           <th key={i} className="py-4 text-rose-400 text-[9px] font-black uppercase tracking-widest">{h}</th>
                        ))}
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                     {current.comparison.rows.map((row, i) => (
                        <tr key={i} className="group hover:bg-white/5 transition-colors">
                           <td className="py-5 text-white font-black text-xs uppercase tracking-tight">{row.f}</td>
                           <td className="py-5 text-slate-400 font-bold text-xs uppercase italic">{row.l}</td>
                           <td className="py-5">
                              <span className={`bg-slate-950 px-3 py-1 rounded-full text-[9px] font-black uppercase text-white border border-white/10 group-hover:border-rose-500/30 transition-all`}>
                                 {row.w}
                              </span>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>

         {/* Toolkit */}
         <div className="lg:col-span-4 space-y-6">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Reduction Toolkit</h4>
            <div className="grid grid-cols-1 gap-3">
               {current.toolkit.map((item, i) => (
                  <div key={i} className="bg-slate-950/60 p-5 rounded-3xl border border-white/5 flex items-center justify-between group hover:border-emerald-500/30 transition-all">
                     <div className="flex flex-col">
                        <span className="text-white font-black text-xs uppercase tracking-widest mb-1 group-hover:text-emerald-400 transition-colors">{item.label}</span>
                        <span className="text-[9px] font-bold text-slate-500 uppercase">{item.tool}</span>
                     </div>
                     <svg className="w-5 h-5 text-emerald-500 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                     </svg>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,1)]"></span>
                Waste Detection: Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
                Recovery Plan: Loaded
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest">Industrial Hub v5.0 // Efficiency Center</div>
      </div>
    </div>
  );
};

export default ManufacturingLossDetail;

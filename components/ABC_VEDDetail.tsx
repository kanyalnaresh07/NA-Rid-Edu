
import React from 'react';
import { Language } from '../types';

interface ABC_VEDDetailProps {
  onBack: () => void;
  lang: Language;
}

const ABC_VEDDetail: React.FC<ABC_VEDDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "ABC / VED Analysis",
      subtitle: "Inventory Categorization Logic",
      backBtn: "Back to Inventory Control",
      abc: {
        title: "ABC Analysis (Based on Cost)",
        q: "Which item blocks more money?",
        items: [
          { l: "A items", h: "High value items", d: "Low quantity, High cost (70-80% value).", ctrl: "Tight control, frequent review." },
          { l: "B items", h: "Medium value items", d: "Moderate quantity & cost (15-20% value).", ctrl: "Normal control." },
          { l: "C items", h: "Low value items", d: "High quantity, Low cost (5-10% value).", ctrl: "Simple control." }
        ],
        use: "Use: To invest money and management attention in the right place."
      },
      ved: {
        title: "VED Analysis (Based on Criticality)",
        q: "How critical is the item for production?",
        items: [
          { l: "V – Vital", d: "If not available, the line stops immediately.", risk: "Critical" },
          { l: "E – Essential", d: "Work will slow down, but line won't stop fully.", risk: "Medium" },
          { l: "D – Desirable", d: "Alternatives possible, low risk of stoppage.", risk: "Low" }
        ],
        use: "Use: To avoid line stoppages."
      },
      combined: {
        title: "ABC + VED Combined Use",
        q: "Looking at both Cost + Criticality together",
        items: [
          { l: "AV (High cost + Vital)", d: "Highest priority. Daily monitoring." },
          { l: "CV (Low cost + Vital)", d: "Must-have stock. Inexpensive but critical." },
          { l: "AD (High cost + Desirable)", d: "Controlled stocking. High value but can wait." }
        ]
      },
      summary: {
        title: "One Line Summary",
        text: "ABC / VED Analysis = Classifying inventory by cost and criticality to set the right control and priority."
      }
    },
    hi: {
      title: "ABC / VED एनालिसिस",
      subtitle: "इन्वेंटरी वर्गीकरण (Categorization) लॉजिक",
      backBtn: "इन्वेंटरी कंट्रोल पर वापस",
      abc: {
        title: "ABC Analysis (Cost के हिसाब से)",
        q: "Kaunsa item paisa zyada block karta hai?",
        items: [
          { l: "A items", h: "High value items", d: "Kam quantity, zyada cost.", ctrl: "Tight control, frequent review." },
          { l: "B items", h: "Medium value", d: "Average quantity and cost.", ctrl: "Normal control." },
          { l: "C items", h: "Low value items", d: "Zyada quantity, kam cost.", ctrl: "Simple control." }
        ],
        use: "Use: Paisa aur management attention sahi jagah lagana."
      },
      ved: {
        title: "VED Analysis (Criticality के हिसाब से)",
        q: "Kaunsa item production ke liye kitna critical hai?",
        items: [
          { l: "V – Vital", d: "Nahi mila to line ruk jayegi.", risk: "Critical" },
          { l: "E – Essential", d: "Kaam slow hoga, par rukega nahi.", risk: "Medium" },
          { l: "D – Desirable", d: "Alternate possible, low risk.", risk: "Low" }
        ],
        use: "Use: Line stoppage avoid karna."
      },
      combined: {
        title: "ABC + VED Combined Use",
        q: "Cost + Criticality dono ko saath dekhna",
        items: [
          { l: "AV (High cost + Vital)", d: "Highest priority. Sabse zyada dhayan." },
          { l: "CV (Low cost + Vital)", d: "Must-have stock. Sasta par zaroori." },
          { l: "AD (High cost + Desirable)", d: "Controlled stocking. Mehenga par kaam chal sakta hai." }
        ]
      },
      summary: {
        title: "One Line Summary",
        text: "ABC / VED Analysis = Inventory ko cost aur criticality ke base par classify karke sahi control aur priority set karna."
      }
    }
  };

  const current = content[lang];

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

      {/* ABC Section */}
      <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl space-y-8 relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 text-9xl font-black text-blue-500/[0.03] select-none uppercase italic tracking-tighter">ABC</div>
         <div className="relative z-10 space-y-6">
            <div>
               <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-widest border-b-2 border-blue-500 w-fit pb-2">{current.abc.title}</h4>
               <p className="text-blue-400 font-black text-sm md:text-lg uppercase tracking-widest mt-2">👉 {current.abc.q}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {current.abc.items.map((item, i) => (
                  <div key={i} className="bg-slate-950/60 p-6 rounded-[32px] border border-white/5 flex flex-col gap-4 group hover:bg-slate-900 transition-all">
                     <span className="text-blue-500 font-black text-3xl italic">{item.l.split(' ')[0]}</span>
                     <div className="space-y-2">
                        <h5 className="text-white font-black text-sm uppercase tracking-tight">{item.h}</h5>
                        <p className="text-slate-400 text-xs font-bold">{item.d}</p>
                        <div className="pt-2 border-t border-white/5">
                           <span className="text-[8px] font-black text-blue-500 uppercase tracking-widest">Control Mode:</span>
                           <p className="text-white text-[10px] font-bold italic">{item.ctrl}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="bg-blue-500/10 p-5 rounded-2xl border-l-8 border-blue-500">
               <p className="text-white text-xs md:text-sm font-black uppercase italic tracking-widest">📌 {current.abc.use}</p>
            </div>
         </div>
      </div>

      {/* VED Section */}
      <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl space-y-8 relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 text-9xl font-black text-rose-500/[0.03] select-none uppercase italic tracking-tighter">VED</div>
         <div className="relative z-10 space-y-6">
            <div>
               <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-widest border-b-2 border-rose-500 w-fit pb-2">{current.ved.title}</h4>
               <p className="text-rose-400 font-black text-sm md:text-lg uppercase tracking-widest mt-2">👉 {current.ved.q}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {current.ved.items.map((item, i) => (
                  <div key={i} className="bg-slate-950/60 p-6 rounded-[32px] border border-white/5 flex flex-col gap-4 group hover:bg-slate-900 transition-all">
                     <div className="flex justify-between items-center">
                        <span className="text-rose-500 font-black text-3xl italic">{item.l.split(' ')[0]}</span>
                        <span className="text-[7px] font-black text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 uppercase">{item.risk} Risk</span>
                     </div>
                     <div className="space-y-1">
                        <h5 className="text-white font-black text-xs uppercase tracking-tight">{item.l}</h5>
                        <p className="text-slate-400 text-xs font-bold italic leading-relaxed">{item.d}</p>
                     </div>
                  </div>
               ))}
            </div>

            <div className="bg-rose-500/10 p-5 rounded-2xl border-l-8 border-rose-500">
               <p className="text-white text-xs md:text-sm font-black uppercase italic tracking-widest">📌 {current.ved.use}</p>
            </div>
         </div>
      </div>

      {/* Combined Matrix Section */}
      <div className="bg-slate-950 border border-blue-500/20 p-8 md:p-12 rounded-[48px] shadow-2xl space-y-10 relative overflow-hidden">
         <div className="absolute top-0 left-0 p-8 text-6xl font-black text-white/[0.01] uppercase select-none pointer-events-none">Combined Strategy</div>
         <div className="text-center space-y-2">
            <h4 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter italic">{current.combined.title}</h4>
            <p className="text-slate-500 text-xs md:text-sm font-black uppercase tracking-widest italic">👉 {current.combined.q}</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {current.combined.items.map((item, i) => (
               <div key={i} className="bg-slate-900 p-8 rounded-[40px] border border-white/5 group hover:border-blue-500/30 transition-all flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">{item.l.slice(0, 2)}</div>
                  <div>
                     <h5 className="text-white font-black text-sm uppercase tracking-tight mb-2">{item.l}</h5>
                     <p className="text-slate-400 text-xs font-bold leading-relaxed">{item.d}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* One Line Summary Footer */}
      <div className="bg-blue-600 p-10 rounded-[48px] shadow-[0_0_50px_rgba(59,130,246,0.3)] text-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 animate-pulse"></div>
         <div className="relative z-10 space-y-4">
            <h5 className="text-white/60 font-black text-[10px] md:text-xs uppercase tracking-[0.6em] mb-2">{current.summary.title}</h5>
            <p className="text-white text-lg md:text-3xl font-black italic tracking-tight leading-snug">
               {current.summary.text}
            </p>
         </div>
      </div>

      {/* Global Status Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_white] animate-pulse"></span>
                Classification: Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_white]"></span>
                Priority Logic: Validated
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Module: Inventory-Strategy-v2 // Deep Analytics</div>
      </div>
    </div>
  );
};

export default ABC_VEDDetail;


import React from 'react';
import { Language } from '../types';

interface MaterialHandlingDetailProps {
  onBack: () => void;
  lang: Language;
}

const MaterialHandlingDetail: React.FC<MaterialHandlingDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Material Handling",
      subtitle: "Logistics & Flow Excellence",
      backBtn: "Back",
      hero: {
        question: "What is Material Handling?",
        desc: "It is the art and science of moving, storing, protecting, and controlling materials (Raw, WIP, FG) throughout the manufacturing process.",
        goal: "Goal: Zero damage, minimum movement, and maximum speed."
      },
      process: [
        { title: "Receiving", icon: "📥", detail: "Checking quantity vs system, GRN, and IQC inspection." },
        { title: "Storage", icon: "🏢", detail: "FIFO/FEFO adherence, proper binning, and safe stacking." },
        { title: "Line Issue", icon: "🚛", detail: "Kitting, trolley systems, and barcode-based issuing." },
        { title: "Finished Goods", icon: "📦", detail: "OQC clearance, damage-free packing, and dispatch readiness." }
      ],
      corePoints: [
        { 
          title: "FIFO / FEFO System", 
          desc: "First In, First Out. Ensures old material is used first to prevent expiry/obsolescence.",
          visual: "Oldest ➔ Newest"
        },
        { 
          title: "Traceability", 
          desc: "Knowing the Lot No, Date, and Vendor for every single part on the line.",
          visual: "ID: 800-XYZ-L01"
        },
        { 
          title: "Damage Control", 
          desc: "Using proper trays and racks to avoid scratches, drops, or mix-ups.",
          visual: "Zero Scratches"
        }
      ],
      methods: [
        { label: "Manual", icon: "🤲" },
        { label: "Trolley", icon: "🛒" },
        { label: "Conveyor", icon: "⛓️" },
        { label: "Forklift", icon: "🚜" }
      ],
      impact: {
        title: "Logistics Impact",
        rows: [
          { label: "Productivity", value: "↑ High Increase", color: "emerald" },
          { label: "Line Stops", value: "↓ Major Reduction", color: "rose" },
          { label: "Material Loss", value: "↓ Near Zero", color: "amber" },
          { label: "Safety", value: "↑ Enhanced", color: "blue" }
        ]
      }
    },
    hi: {
      title: "मटेरियल हैंडलिंग",
      subtitle: "लॉजिस्टिक्स और फ्लो मैनेजमेंट",
      backBtn: "वापस",
      hero: {
        question: "मटेरियल हैंडलिंग क्या है?",
        desc: "कच्चे माल (Raw), वर्क-इन-प्रोग्रेस (WIP) और तैयार माल (FG) को सही तरीके से हिलाना, रखना और सुरक्षित रखने की प्रक्रिया।",
        goal: "लक्ष्य: कम से कम नुकसान और काम की तेज़ रफ़्तार।"
      },
      process: [
        { title: "प्राप्ति (Receiving)", icon: "📥", detail: "सामान की गिनती, GRN और क्वालिटी चेक (IQC) करना।" },
        { title: "स्टोरेज (Storage)", icon: "🏢", detail: "FIFO नियम का पालन, सही बिन और सुरक्षित स्टैकिंग।" },
        { title: "लाइन इशू (Issue)", icon: "🚛", detail: "ट्रॉली सिस्टम और बारकोड के ज़रिए लाइन पर सामान भेजना।" },
        { title: "तैयार माल (FG)", icon: "📦", detail: "OQC के बाद सुरक्षित पैकिंग और डिस्पैच के लिए तैयार करना।" }
      ],
      corePoints: [
        { 
          title: "FIFO / FEFO सिस्टम", 
          desc: "जो पहले आया, वो पहले जाएगा। इससे पुराना सामान खराब होने से बचता है।",
          visual: "पुराना ➔ नया"
        },
        { 
          title: "ट्रेसेबिलिटी (Traceability)", 
          desc: "हर पार्ट का लॉट नंबर, तारीख और वेंडर की जानकारी रखना ताकि ज़रूरत पड़ने पर ट्रैक हो सके।",
          visual: "ID: 800-XYZ-L01"
        },
        { 
          title: "नुकसान पर रोक", 
          desc: "सही ट्रे और रैक का इस्तेमाल करके खरोंच, गिरने या मिक्स-अप से बचाना।",
          visual: "जीरो स्क्रैच"
        }
      ],
      methods: [
        { label: "मैनुअल", icon: "🤲" },
        { label: "ट्रॉली", icon: "🛒" },
        { label: "कन्वेयर", icon: "⛓️" },
        { label: "फोर्कलिफ्ट", icon: "🚜" }
      ],
      impact: {
        title: "लॉजिस्टिक्स का असर",
        rows: [
          { label: "प्रोडक्टिविटी", value: "↑ भारी बढ़ोतरी", color: "emerald" },
          { label: "लाइन स्टॉप", value: "↓ बड़ी कमी", color: "rose" },
          { label: "मटेरियल का नुकसान", value: "↓ लगभग शून्य", color: "amber" },
          { label: "सुरक्षा (Safety)", value: "↑ सुधार", color: "blue" }
        ]
      }
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-6xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-orange-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(249,115,22,0.8)]"></div>
              <span className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg">{current.title}</h3>
        </div>
        <button 
          onClick={onBack}
          className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900/60 border border-orange-500/20 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 text-7xl font-black text-orange-500/[0.03] select-none">FLOW</div>
         <div className="relative z-10 space-y-4">
            <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter">{current.hero.question}</h4>
            <p className="text-slate-300 text-sm md:text-xl font-medium leading-relaxed max-w-3xl">{current.hero.desc}</p>
            <div className="inline-block px-5 py-2 bg-orange-500/10 border border-orange-500/30 rounded-xl text-orange-400 font-black text-xs md:text-sm uppercase italic">
               {current.hero.goal}
            </div>
         </div>
      </div>

      {/* Process Flow - Horizontal on Desktop, Vertical on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         {current.process.map((step, i) => (
           <div key={i} className="bg-slate-900/40 border border-white/5 p-6 rounded-3xl hover:border-orange-500/40 transition-all group flex flex-col gap-4 relative">
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-slate-950 border border-orange-500/30 rounded-xl flex items-center justify-center text-xl shadow-lg transform group-hover:rotate-12 transition-transform">{step.icon}</div>
              <h5 className="text-orange-400 font-black text-xs uppercase tracking-widest">{step.title}</h5>
              <p className="text-slate-400 text-[11px] font-bold leading-relaxed">{step.detail}</p>
              <div className="mt-auto pt-4 flex items-center gap-2">
                 <div className="h-0.5 flex-grow bg-white/5"></div>
                 <span className="text-[9px] font-black text-white/20">STP-0{i+1}</span>
              </div>
           </div>
         ))}
      </div>

      {/* Middle Section: Strategy & Impact */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         
         {/* Strategic Points */}
         <div className="lg:col-span-7 space-y-6">
            <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4">
               <span className="w-12 h-0.5 bg-orange-500"></span>
               Core Management Pillars
            </h4>
            <div className="grid grid-cols-1 gap-4">
               {current.corePoints.map((p, i) => (
                 <div key={i} className="bg-slate-950/60 p-6 rounded-3xl border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-orange-500/20 transition-all shadow-xl">
                    <div className="flex-1 space-y-1">
                       <h6 className="text-white font-black text-sm uppercase tracking-tight group-hover:text-orange-400 transition-colors">{p.title}</h6>
                       <p className="text-slate-400 text-xs font-medium leading-relaxed">{p.desc}</p>
                    </div>
                    <div className="bg-orange-500/10 px-4 py-2 rounded-xl border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-widest shadow-inner">
                       {p.visual}
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Impact Analysis */}
         <div className="lg:col-span-5 bg-orange-950/20 border border-orange-500/20 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8 backdrop-blur-xl">
            <h4 className="text-orange-400 text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">{current.impact.title}</h4>
            <div className="space-y-4">
               {current.impact.rows.map((row, i) => (
                 <div key={i} className="flex items-center justify-between p-4 bg-slate-950/40 rounded-2xl border border-white/5">
                    <span className="text-slate-300 font-black text-[10px] md:text-xs uppercase tracking-widest">{row.label}</span>
                    <span className={`text-[10px] md:text-xs font-black uppercase text-${row.color}-400`}>{row.value}</span>
                 </div>
               ))}
            </div>
            
            {/* Movement Methods Icons */}
            <div className="pt-6 border-t border-orange-500/20">
               <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em] block mb-5 text-center">Equipment Inventory</span>
               <div className="grid grid-cols-4 gap-4">
                  {current.methods.map((m, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 group/icon">
                       <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-xl shadow-lg group-hover/icon:scale-110 group-hover/icon:border-orange-500 transition-all">{m.icon}</div>
                       <span className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">{m.label}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,1)]"></span>
                Inventory Sync: Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
                Flow: Optimized
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest">Industrial Hub v3.8 // Logistics Node</div>
      </div>
    </div>
  );
};

export default MaterialHandlingDetail;

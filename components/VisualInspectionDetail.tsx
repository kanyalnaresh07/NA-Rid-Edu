
import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface VisualInspectionDetailProps {
  onBack: () => void;
  lang: Language;
}

const VisualInspectionDetail: React.FC<VisualInspectionDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Visual Inspection Standards",
      subtitle: "Optical Quality Verification",
      backBtn: "Back to IQC",
      definition: "Visual inspection means checking for defects visible to the naked eye without using measuring tools or machines.",
      groups: [
        {
          title: "1. Surface Defects",
          icon: "💎",
          items: ["Scratch / Dent", "Crack / Breakage", "Burr / Sharp edge", "Rust / Corrosion", "Oil / Grease marks"]
        },
        {
          title: "2. Color & Appearance",
          icon: "🎨",
          items: ["Color Mismatch", "Shade Variation", "Gloss / Matt mismatch", "Discoloration / Burn", "Uneven Finish"]
        },
        {
          title: "3. Printing & Marking",
          icon: "🏷️",
          items: ["Blur / Smudge", "Logo / Label Missing", "Wrong Font / Size", "Barcode Unreadable", "Ink Overlap"]
        },
        {
          title: "4. Molding / Casting",
          icon: "🏗️",
          items: ["Sink Mark", "Flow Lines", "Short Mold", "Flash (Extra material)", "Air Bubbles / Void"]
        },
        {
          title: "5. Damage & Handling",
          icon: "🚚",
          items: ["Transit Damage", "Edge Crushing", "Deformation / Bending", "Improper Packing Impact"]
        },
        {
          title: "6. Cleanliness",
          icon: "🧹",
          items: ["Dust Particles", "Foreign Material", "Internal Burr waste", "Chemical Stains"]
        },
        {
          title: "7. Assembly Related",
          icon: "🧩",
          items: ["Missing Parts", "Wrong Orientation", "Loose / Improper fit", "Gap / Misalignment"]
        },
        {
          title: "8. Traceability",
          icon: "🔍",
          items: ["Part No Mismatch", "Lot / Batch Missing", "Box vs Part Label", "COA Mismatch"]
        }
      ],
      rules: {
        title: "Golden Rules for Inspection",
        list: [
          "Minimum 1000 Lux lighting required.",
          "Viewing distance: 30–50 cm.",
          "Always compare with 'Golden Sample'.",
          "Follow drawing tolerance limits."
        ]
      },
      summary: "Visual Inspection = Does it look perfect to the customer?",
      checklist: ["Surface OK", "Color OK", "Printing OK", "No Damage", "Clean Part", "ID Tagged"]
    },
    hi: {
      title: "विजुअल इंस्पेक्शन स्टैंडर्ड",
      subtitle: "आंखों से क्वालिटी की जांच",
      backBtn: "IQC पर वापस जाएं",
      definition: "विजुअल इंस्पेक्शन का मतलब है आंखों से दिखने वाले डिफेक्ट्स को चेक करना—बिना किसी टूल या मशीन के उपयोग के।",
      groups: [
        {
          title: "1. सतह के डिफेक्ट (Surface)",
          icon: "💎",
          items: ["स्क्रैच (खरोंच) / डेंट", "क्रैक / टूटा हुआ", "बर् (Burr) / धार", "जंग (Rust)", "तेल या ग्रीस के दाग"]
        },
        {
          title: "2. रंग और दिखावट",
          icon: "🎨",
          items: ["रंग का मेल न खाना", "शेड में फर्क", "चमक (Gloss) कम-ज्यादा", "जला हुआ निशान", "खराब फिनिशिंग"]
        },
        {
          title: "3. छपाई और मार्किंग",
          icon: "🏷️",
          items: ["धुंधली छपाई", "लोगो / लेबल गायब", "गलत फॉन्ट / साइज", "बारकोड न पढ़ना", "स्याही का फैलना"]
        },
        {
          title: "4. मोल्डिंग के डिफेक्ट",
          icon: "🏗️",
          items: ["सिंक मार्क", "फ्लो लाइन", "शॉर्ट मोल्ड", "फ्लैश (फालतू मटेरियल)", "हवा के बुलबुले"]
        },
        {
          title: "5. डैमेज और हैंडलिंग",
          icon: "🚚",
          items: ["रास्ते का डैमेज (Transit)", "कोने टूटे होना", "मुड़ा हुआ पार्ट", "पैकिंग का दबाव"]
        },
        {
          title: "6. साफ-सफाई (Clean)",
          icon: "🧹",
          items: ["धूल के कण", "बाहरी कचरा", "पार्ट के अंदर बर्", "केमिकल के धब्बे"]
        },
        {
          title: "7. असेंबली से जुड़ा",
          icon: "🧩",
          items: ["पार्ट गायब होना", "उलटा फिट होना", "ढीला फिट होना", "गैप / आउट होना"]
        },
        {
          title: "8. पहचान (Traceability)",
          icon: "🔍",
          items: ["गलत पार्ट नंबर", "लॉट / बैच गायब", "बॉक्स और पार्ट अलग", "COA से अलग जानकारी"]
        }
      ],
      rules: {
        title: "जांच के सुनहरे नियम",
        list: [
          "रोशनी (Lighting) बहुत अच्छी होनी चाहिए।",
          "देखने की दूरी: 30–50 सेमी।",
          "हमेशा 'गोल्डन सैंपल' से मिलान करें।",
          "SOP/ड्राइंग के हिसाब से फैसला लें।"
        ]
      },
      summary: "विजुअल चेक = जो डिफेक्ट ग्राहक को दिखे और उसे बुरा लगे।",
      checklist: ["सतह ठीक", "रंग ठीक", "छपाई ठीक", "डैमेज नहीं", "पार्ट साफ", "पहचान सही"]
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-cyan-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(6,182,212,0.8)]"></div>
              <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg">{current.title}</h3>
        </div>
        <motion.button 
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBack}
          className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </motion.button>
      </div>

      {/* Hero Definition */}
      <div className="bg-slate-900/60 border border-cyan-500/20 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-cyan-500/[0.03] select-none uppercase italic">EYES ON</div>
         <div className="relative z-10 space-y-4">
            <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-widest border-b-2 border-cyan-500 w-fit pb-2">The Visual Shield</h4>
            <p className="text-slate-300 text-sm md:text-xl font-bold leading-relaxed max-w-4xl italic">
               "{current.definition}"
            </p>
         </div>
      </div>

      {/* 8 Parameters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {current.groups.map((group, i) => (
           <motion.div 
             key={i} 
             whileHover={{ y: -5, borderColor: "rgba(6, 182, 212, 0.3)" }}
             className="bg-slate-950/40 border border-white/5 p-6 rounded-[32px] transition-all group flex flex-col gap-5 shadow-xl"
           >
              <div className="flex items-center justify-between">
                 <div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    {group.icon}
                 </div>
                 <div className="h-1 w-8 bg-cyan-500/20 rounded-full"></div>
              </div>
              <h5 className="text-white font-black text-sm md:text-base uppercase tracking-tight leading-tight group-hover:text-cyan-400 transition-colors">{group.title}</h5>
              <div className="space-y-2">
                 {group.items.map((item, idx) => (
                   <div key={idx} className="flex items-center gap-3 text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-tighter">
                      <div className="w-1 h-1 bg-cyan-500/40 rounded-full"></div>
                      {item}
                   </div>
                 ))}
              </div>
           </motion.div>
         ))}
      </div>

      {/* Logic & Checklist Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
         {/* Rules */}
         <div className="bg-slate-900/60 border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8">
            <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4">
               <span className="w-12 h-0.5 bg-cyan-500"></span>
               {current.rules.title}
            </h4>
            <div className="space-y-4">
               {current.rules.list.map((rule, i) => (
                 <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group hover:border-cyan-500/20 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-white font-black text-xs flex-shrink-0 shadow-lg">
                       ★
                    </div>
                    <p className="text-slate-300 text-xs md:text-sm font-bold leading-relaxed">{rule}</p>
                 </div>
               ))}
            </div>
         </div>

         {/* Short Checklist Node */}
         <div className="bg-cyan-950/20 border border-cyan-500/20 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 text-4xl font-black text-cyan-500/5 select-none uppercase italic">READY</div>
            <div className="flex flex-col gap-2">
               <h4 className="text-cyan-400 text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">Final Summary</h4>
               <p className="text-white text-xl font-black tracking-tight leading-none uppercase italic">{current.summary}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               {current.checklist.map((check, i) => (
                 <div key={i} className="flex items-center gap-3 p-4 bg-slate-950/60 rounded-2xl border border-white/5">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                       </svg>
                    </div>
                    <span className="text-slate-200 text-[10px] font-black uppercase tracking-widest">{check}</span>
                 </div>
               ))}
            </div>

            <div className="bg-cyan-500/10 p-6 rounded-2xl border border-cyan-500/20 text-center">
               <p className="text-[10px] md:text-xs text-cyan-200 font-black uppercase tracking-widest leading-relaxed">
                  "If you see a defect, stop it here. Don't let the customer find it."
               </p>
            </div>
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,1)]"></span>
                Optical Core: Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
                Defect Detection: Online
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest">Industrial Hub v6.3 // Visual Node</div>
      </div>
    </div>
  );
};

export default VisualInspectionDetail;

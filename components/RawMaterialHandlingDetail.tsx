
import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface RawMaterialHandlingDetailProps {
  onBack: () => void;
  lang: Language;
}

const RawMaterialHandlingDetail: React.FC<RawMaterialHandlingDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Raw Material Handling",
      subtitle: "Material Integrity & Store Input",
      backBtn: "Back to Hub",
      hero: {
        question: "What is Raw Material Handling?",
        desc: "It is the controlled process of receiving, verifying, and storing supplier parts to ensure only quality-passed material reaches the production line.",
        mantra: "Only OK Material makes an OK Product."
      },
      steps: [
        {
          id: 1,
          title: "Unloading from Truck",
          desc: "Safely removing material from the supplier's vehicle upon arrival.",
          points: [
            "Invoice / DC (Delivery Challan) check",
            "Quick check for physical damage or leakage",
            "Quantity shortage verification",
            "Safe unloading via Forklift or Manual"
          ],
          purpose: "Identify transit damage and quantity errors immediately.",
          icon: "🚛",
          color: "blue"
        },
        {
          id: 2,
          title: "Making GRN Record",
          desc: "Formally logging the material arrival in the computer system (ERP).",
          points: [
            "Entry of Part Code & Description",
            "Recording exact received quantity",
            "Supplier details and date-stamp",
            "Capturing Lot / Batch numbers"
          ],
          purpose: "Update ERP stock and maintain 100% traceability.",
          icon: "📊",
          color: "amber"
        },
        {
          id: 3,
          title: "Quality Check (IQC)",
          desc: "Incoming Quality Control inspection by professional inspectors.",
          points: [
            "Visual check (No scratches, dents, rust)",
            "Dimensional check against Technical Drawing",
            "AQL Sampling plan execution",
            "Decision: OK / Reject / Hold"
          ],
          purpose: "Stop defective material from entering the production floor.",
          icon: "🔬",
          color: "cyan"
        },
        {
          id: 4,
          title: "Storing in OK Area",
          desc: "Placing verified material in designated storage zones.",
          points: [
            "Apply green 'OK' tags for identification",
            "Follow FIFO (First-In, First-Out) logic",
            "Bin-wise location assignment",
            "Ready for production line issuance"
          ],
          purpose: "Ensure the right material is ready at the right time.",
          icon: "📥",
          color: "emerald"
        }
      ],
      summary: "Raw Material Handling is a controlled and quality-driven pipeline from the Truck to OK Storage."
    },
    hi: {
      title: "Raw Material Handling",
      subtitle: "मटेरियल शुद्धता और स्टोर इनपुट",
      backBtn: "वापस जाएं",
      hero: {
        question: "Raw Material Handling क्या होता है?",
        desc: "सप्लायर से आने वाले पार्ट्स को रिसीव करना, वेरीफाई करना, क्वालिटी चेक करना और सुरक्षित स्टोर करना, ताकि प्रोडक्शन में सिर्फ OK मटेरियल ही इस्तेमाल हो।",
        mantra: "सिर्फ 'पास' माल ही 'परफेक्ट' प्रोडक्ट बनाता है।"
      },
      steps: [
        {
          id: 1,
          title: "गाड़ी से माल उतारना (Unloading)",
          desc: "सप्लायर की गाड़ी आने पर सुरक्षित तरीके से माल उतारना।",
          points: [
            "इनवॉइस (Invoice) और चालान चेक करना",
            "ऊपर से डैमेज या लीकेज की तुरंत जांच",
            "मात्रा (Quantity) की कमी देखना",
            "फोर्कलिफ्ट या मैन्युअल सुरक्षा के साथ काम"
          ],
          purpose: "रास्ते में हुआ नुकसान (Transit Damage) और मात्रा की कमी तुरंत पकड़ना।",
          icon: "🚛",
          color: "blue"
        },
        {
          id: 2,
          title: "GRN रिकॉर्ड बनाना (ERP)",
          desc: "मटेरियल मिलने की जानकारी कंप्यूटर सिस्टम (ERP) में दर्ज करना।",
          points: [
            "पार्ट कोड और नाम की सही एंट्री",
            "असली मात्रा (Received Qty) लिखना",
            "सप्लायर और तारीख की जानकारी",
            "लॉट (Lot) और बैच नंबर की एंट्री"
          ],
          purpose: "ERP में स्टॉक अपडेट करना और ट्रेसेबिलिटी बनाए रखना।",
          icon: "📊",
          color: "amber"
        },
        {
          id: 3,
          title: "क्वालिटी चेक (IQC)",
          desc: "IQC टीम द्वारा माल की बारीकी से जांच।",
          points: [
            "विजुअल चेक (खरोंच, डेंट, जंग की जांच)",
            "ड्राइंग के हिसाब से माप (Dimensions) चेक",
            "सैंपलिंग (AQL) नियमों का पालन",
            "फैसला: पास (OK) / फेल (Reject) / रोकें (Hold)"
          ],
          purpose: "खराब माल को प्रोडक्शन लाइन तक जाने से पहले रोकना।",
          icon: "🔬",
          color: "cyan"
        },
        {
          id: 4,
          title: "OK एरिया में स्टोर करना",
          desc: "पास किए गए माल को सही जगह पर सुरक्षित रखना।",
          points: [
            "पहचान के लिए ग्रीन 'OK' टैग लगाना",
            "FIFO / FEFO नियम का पालन करना",
            "बिन लोकेशन और सही लेबलिंग",
            "प्रोडक्शन को सामान देने के लिए तैयार"
          ],
          purpose: "सही सामान → सही समय → सही लाइन पर पहुँचाना।",
          icon: "📥",
          color: "emerald"
        }
      ],
      summary: "Raw material का फ्लो ट्रक से ले कर OK स्टोरेज तक का एक नियंत्रित और क्वालिटी-आधारित प्रोसेस है।"
    }
  };

  const current = content[lang] || content['en'];

  return (
    <div className="flex flex-col gap-8 animate-in slide-in-from-right-6 duration-700 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-amber-500/20 pb-6 bg-slate-950/40 p-8 rounded-t-[40px] backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse shadow-[0_0_12px_amber]"></div>
              <span className="text-amber-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none italic font-mono">{current.title}</h3>
        </div>
        <motion.button 
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBack} 
          className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
          {current.backBtn}
        </motion.button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-amber-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-9xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Incoming</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-amber-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-amber-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">
            "🏢 {current.hero.mantra}"
         </div>
      </div>

      {/* Process Flow Steps */}
      <div className="space-y-12">
         {current.steps.map((step, i) => (
            <div key={step.id} className="relative flex flex-col md:flex-row gap-8 items-start group">
               {/* Vertical Connection Line */}
               {i !== current.steps.length - 1 && (
                  <div className="absolute left-[31px] top-16 bottom-0 w-1 bg-gradient-to-b from-amber-500/50 to-transparent hidden md:block"></div>
               )}

               <motion.div 
                 whileInView={{ opacity: 1, x: 0 }}
                 initial={{ opacity: 0, x: -20 }}
                 viewport={{ once: true }}
                 className={`w-16 h-16 rounded-2xl bg-slate-900 border-2 border-${step.color}-500/50 flex items-center justify-center text-3xl shadow-lg relative z-10 group-hover:scale-110 transition-transform`}
               >
                  {step.icon}
               </motion.div>

               <motion.div 
                 whileHover={{ y: -5, borderColor: "rgba(255, 255, 255, 0.1)" }}
                 className="flex-1 bg-slate-900/60 border border-white/5 p-8 rounded-[40px] shadow-2xl hover:bg-slate-800 transition-all flex flex-col lg:flex-row gap-10 overflow-hidden relative"
               >
                  <div className={`absolute top-0 right-0 p-6 text-6xl font-black text-${step.color}-500/[0.03] select-none italic`}>Step 0{step.id}</div>
                  
                  <div className="lg:w-1/2 space-y-4">
                     <div className="space-y-1">
                        <span className={`text-${step.color}-500 font-black text-[10px] uppercase tracking-widest`}>STAGE 0{step.id}</span>
                        <h5 className="text-white text-2xl font-black uppercase tracking-tight">{step.title}</h5>
                     </div>
                     <p className="text-slate-400 text-sm font-bold leading-relaxed italic">"{step.desc}"</p>
                     <div className={`bg-${step.color}-500/10 border-l-4 border-${step.color}-500 p-4 rounded-r-xl`}>
                        <span className={`text-${step.color}-400 text-[8px] font-black uppercase block mb-1`}>Critical Purpose:</span>
                        <p className="text-white text-xs font-bold leading-snug">{step.purpose}</p>
                     </div>
                  </div>

                  <div className="lg:w-1/2 space-y-4 relative z-10">
                     <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Verification Checklist</span>
                     <div className="grid grid-cols-1 gap-2">
                        {step.points.map((p, idx) => (
                           <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
                              <div className={`w-1.5 h-1.5 bg-${step.color}-500 rounded-full shadow-[0_0_8px_${step.color}]`}></div>
                              <span className="text-slate-200 text-[11px] font-bold uppercase tracking-tight leading-tight">{p}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </motion.div>
            </div>
         ))}
      </div>

      {/* Summary Logic Footer */}
      <div className="bg-amber-600 p-10 rounded-[48px] shadow-[0_0_50px_rgba(245,158,11,0.3)] text-center relative overflow-hidden group mt-12">
         <div className="absolute inset-0 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 animate-pulse"></div>
         <div className="relative z-10 space-y-4">
            <h5 className="text-white/60 font-black text-[10px] uppercase tracking-[0.6em] mb-2">Technical Conclusion</h5>
            <p className="text-white text-lg md:text-2xl font-black italic tracking-tight leading-snug">
               "{current.summary}"
            </p>
         </div>
      </div>

      {/* System Status Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_10px_white] animate-pulse"></span>
                Material Pipeline: Online
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_white]"></span>
                Quality Traceability: Enabled
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Module: Store-Handling-v1 // Logic Node 01</div>
      </div>
    </div>
  );
};

export default RawMaterialHandlingDetail;

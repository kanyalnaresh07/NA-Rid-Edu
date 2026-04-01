
import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface MaterialReceivingDetailProps {
  onBack: () => void;
  lang: Language;
}

const MaterialReceivingDetail: React.FC<MaterialReceivingDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Material Receiving Verification",
      subtitle: "The Gate Entry Protocol",
      backBtn: "Back to IQC",
      grn: {
        title: "GRN – Goods Receipt Note",
        meaning: "Confirmation that material has physically arrived and been accepted by the store.",
        timing: "When vendor delivers material to the factory gate/store.",
        detailsTitle: "Key Details in GRN",
        details: ["Vendor Name & Invoice No", "PO (Purchase Order) Number", "Material / Part Number", "Received Quantity", "Date & Receiver Signature"],
        usage: "Adds stock to inventory and informs Finance of delivery.",
        note: "GRN only means material is received; it does NOT mean quality is OK."
      },
      mrn: {
        title: "MRN – Material Rejection Note",
        meaning: "Formal document used when Quality/IQC rejects the received material.",
        timing: "After IQC inspection if defects or mismatches are found.",
        detailsTitle: "Key Details in MRN",
        details: ["GRN Reference Number", "Rejected Quantity", "Reason for Rejection (Scratches, Dents, etc.)", "Inspector Name & Date"],
        usage: "Segregates bad stock and initiates vendor return/replacement.",
        note: "MRN stops payment and prevents defective parts from entering production."
      },
      coa: {
        title: "Vendor COA – Certificate of Analysis",
        header: "The Quality Proof",
        meaning: "A document from the supplier confirming that the material was tested and passed all specifications before dispatch.",
        timing: "Sent along with the Invoice / Challan during material dispatch.",
        contentsTitle: "What's inside a COA?",
        contents: [
          { l: "Batch / Lot No", d: "For 100% Traceability" },
          { l: "Test Parameters", d: "Dimensions, Strength, Chemical properties" },
          { l: "Actual Values", d: "Exact results measured by vendor lab" },
          { l: "Spec Limits", d: "Min/Max range allowed" }
        ],
        usageTitle: "Where is it used?",
        usagePoints: [
          "IQC matching with Drawing/PO",
          "Traceability for future audits",
          "Deciding sampling (Skip-lot checks)",
          "Legal evidence for rejections"
        ],
        warning: "NEVER accept COA blindly. Physical IQC verification is mandatory!"
      },
      table: {
        title: "GRN vs MRN: Quick Comparison",
        headers: ["Point", "GRN", "MRN"],
        rows: [
          { p: "Full Form", g: "Goods Receipt Note", m: "Material Rejection Note" },
          { p: "Trigger", g: "On Arrival", m: "On Failure" },
          { p: "Dept", g: "Store / Logistics", m: "Quality / IQC" },
          { p: "Goal", g: "Stock Addition", m: "Reject Record" },
          { p: "Quality", g: "Unchecked", m: "Failed" }
        ]
      }
    },
    hi: {
      title: "मटेरियल रिसीविंग वेरिफिकेशन",
      subtitle: "गेट एंट्री प्रोटोकॉल",
      backBtn: "IQC पर वापस जाएं",
      grn: {
        title: "GRN – Goods Receipt Note",
        meaning: "मटेरियल फैक्ट्री/स्टोर में आ गया है और स्टोर ने उसे रिसीव कर लिया है।",
        timing: "जब वेंडर से सामान फैक्ट्री के गेट या स्टोर पर आता है।",
        detailsTitle: "GRN में क्या होता है?",
        details: ["वेंडर का नाम और इनवॉइस नंबर", "PO (Purchase Order) नंबर", "पार्ट का नाम और नंबर", "प्राप्त मात्रा (Quantity)", "तारीख और स्टोर के साइन"],
        usage: "इन्वेंटरी में स्टॉक बढ़ाना और फाइनेंस को सूचना देना।",
        note: "GRN का मतलब सिर्फ सामान मिलना है, क्वालिटी पास होना नहीं।"
      },
      mrn: {
        title: "MRN – Material Rejection Note",
        meaning: "यह तब बनता है जब IQC टीम सामान को क्वालिटी के आधार पर रिजेक्ट कर देती है।",
        timing: "IQC इंस्पेक्शन के बाद, अगर सामान में डिफेक्ट मिलता है।",
        detailsTitle: "MRN में क्या होता है?",
        details: ["GRN नंबर का रेफरेंस", "रिजेक्ट की गई मात्रा", "रिजेक्शन का कारण (जैसे: डेंट, गलत साइज)", "इंस्पेक्टर का नाम और तारीख"],
        usage: "खराब माल को अलग करना और सप्लायर को वापस भेजना।",
        note: "MRN बनते ही सामान रिजेक्ट माना जाता है और पेमेंट रुक जाती है।"
      },
      coa: {
        title: "वेंडर COA – सर्टिफिकेट ऑफ एनालिसिस",
        header: "क्वालिटी का सबूत",
        meaning: "सप्लायर द्वारा दिया गया वह सर्टिफिकेट जो यह पक्का करता है कि माल भेजने से पहले लैब में टेस्ट किया गया है और पास है।",
        timing: "सामान के डिस्पैच के समय इनवॉइस या चालान के साथ आता है।",
        contentsTitle: "COA में क्या-क्या होता है?",
        contents: [
          { l: "बैच / लॉट नंबर", d: "पूरी ट्रेसेबिलिटी (Traceability) के लिए" },
          { l: "टेस्ट पैरामीटर्स", d: "साइज, मजबूती, केमिकल बनावट" },
          { l: "Actual Values", d: "वेंडर की लैब में आई असली वैल्यू" },
          { l: "Spec Limits", d: "तय की गई ऊपरी और निचली सीमा" }
        ],
        usageTitle: "इसका उपयोग कहाँ होता है?",
        usagePoints: [
          "IQC द्वारा ड्राइंग और PO से मिलान करना",
          "ट्रेसेबिलिटी और ऑडिट रिकॉर्ड के लिए",
          "सैंपलिंग या स्किप-लॉट का फैसला लेने के लिए",
          "रिजेक्शन केस में कानूनी सबूत के तौर पर"
        ],
        warning: "COA पर आँख बंद करके भरोसा न करें। IQC वेरिफिकेशन ज़रूरी है!"
      },
      table: {
        title: "GRN बनाम MRN (मुख्य अंतर)",
        headers: ["बिंदु", "GRN", "MRN"],
        rows: [
          { p: "मतलब", g: "सामान की प्राप्ति", m: "सामान की अस्वीकृति" },
          { p: "कब बनता है", g: "सामान आने पर", m: "क्वालिटी फेल होने पर" },
          { p: "विभाग", g: "स्टोर / लॉजिस्टिक्स", m: "क्वालिटी / IQC" },
          { p: "मुख्य लक्ष्य", g: "स्टॉक बढ़ाना", m: "रिजेक्ट का रिकॉर्ड" },
          { p: "क्वालिटी स्टेटस", g: "चेक नहीं हुआ", m: "फेल हो गया" }
        ]
      }
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-6xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-blue-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(59,130,246,0.8)]"></div>
              <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg">{current.title}</h3>
        </div>
        <motion.button 
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBack}
          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </motion.button>
      </div>

      {/* Industrial Flow Visual */}
      <div className="bg-slate-900/40 p-8 rounded-[40px] border border-white/5 flex flex-col md:flex-row items-center justify-around gap-8">
         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="flex flex-col items-center gap-3 group"
         >
            <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/40 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">🚚</div>
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Arrival</span>
         </motion.div>
         <div className="h-px w-12 bg-white/10 hidden md:block"></div>
         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.1 }}
           className="flex flex-col items-center gap-3 group"
         >
            <div className="w-20 h-20 bg-blue-600 border-2 border-blue-400 rounded-3xl flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:scale-110 transition-transform">GRN</div>
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Store Entry</span>
         </motion.div>
         <div className="h-px w-12 bg-white/10 hidden md:block"></div>
         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.2 }}
           className="flex flex-col items-center gap-3 group"
         >
            <div className="w-16 h-16 bg-slate-800 border border-white/10 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">🔬</div>
            <span className="text-[10px] font-black text-white uppercase tracking-widest">IQC Check</span>
         </motion.div>
         <div className="h-px w-12 bg-white/10 hidden md:block"></div>
         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.3 }}
           className="flex flex-col items-center gap-3 group"
         >
            <div className="w-20 h-20 bg-rose-600 border-2 border-rose-400 rounded-3xl flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(244,63,94,0.4)] group-hover:scale-110 transition-transform">MRN</div>
            <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest">Rejection</span>
         </motion.div>
      </div>

      {/* Documents Grid: GRN and MRN */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* GRN Section */}
         <motion.div 
           whileHover={{ y: -5 }}
           className="bg-slate-900/60 border border-blue-500/20 rounded-[40px] p-8 md:p-12 shadow-2xl space-y-8 relative overflow-hidden group"
         >
            <div className="absolute top-0 right-0 p-8 text-8xl font-black text-blue-500/[0.03] select-none uppercase italic">Receive</div>
            
            <div className="relative z-10 space-y-4">
               <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter leading-none">{current.grn.title}</h4>
               <div className="inline-block px-5 py-2 bg-blue-500/10 border border-blue-500/30 rounded-xl text-blue-400 font-bold text-xs md:text-base leading-relaxed">
                  {current.grn.meaning}
               </div>
            </div>

            <div className="space-y-6 relative z-10">
               <div className="space-y-3">
                  <h5 className="text-blue-300 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                     <span className="w-8 h-px bg-blue-500"></span>
                     {current.grn.detailsTitle}
                  </h5>
                  <div className="grid grid-cols-1 gap-2">
                     {current.grn.details.map((d, i) => (
                       <div key={i} className="flex items-center gap-3 p-3 bg-slate-950/40 border border-white/5 rounded-xl">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-slate-200 text-[11px] font-bold uppercase">{d}</span>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="p-5 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-xl">
                  <span className="text-[9px] font-black text-blue-400 uppercase block mb-1">Impact / उपयोग</span>
                  <p className="text-white text-xs font-bold leading-relaxed">{current.grn.usage}</p>
               </div>

               <div className="bg-slate-950 p-5 rounded-2xl border border-dashed border-white/10 text-center italic">
                  <p className="text-[10px] text-slate-500 font-bold leading-relaxed">
                     ⚠️ {current.grn.note}
                  </p>
               </div>
            </div>
         </motion.div>

         {/* MRN Section */}
         <motion.div 
           whileHover={{ y: -5 }}
           className="bg-slate-900/60 border border-rose-500/20 rounded-[40px] p-8 md:p-12 shadow-2xl space-y-8 relative overflow-hidden group"
         >
            <div className="absolute top-0 right-0 p-8 text-8xl font-black text-rose-500/[0.03] select-none uppercase italic">Reject</div>
            
            <div className="relative z-10 space-y-4">
               <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter leading-none">{current.mrn.title}</h4>
               <div className="inline-block px-5 py-2 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 font-bold text-xs md:text-base leading-relaxed">
                  {current.mrn.meaning}
               </div>
            </div>

            <div className="space-y-6 relative z-10">
               <div className="space-y-3">
                  <h5 className="text-rose-300 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                     <span className="w-8 h-px bg-rose-500"></span>
                     {current.mrn.detailsTitle}
                  </h5>
                  <div className="grid grid-cols-1 gap-2">
                     {current.mrn.details.map((d, i) => (
                       <div key={i} className="flex items-center gap-3 p-3 bg-slate-950/40 border border-white/5 rounded-xl">
                          <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                          <span className="text-slate-200 text-[11px] font-bold uppercase">{d}</span>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="p-5 bg-rose-500/10 border-l-4 border-rose-500 rounded-r-xl">
                  <span className="text-[9px] font-black text-rose-400 uppercase block mb-1">Impact / उपयोग</span>
                  <p className="text-white text-xs font-bold leading-relaxed">{current.mrn.usage}</p>
               </div>

               <div className="bg-slate-950 p-5 rounded-2xl border border-dashed border-white/10 text-center italic">
                  <p className="text-[10px] text-slate-500 font-bold leading-relaxed">
                     ⚠️ {current.mrn.note}
                  </p>
               </div>
            </div>
         </motion.div>
      </div>

      {/* Vendor COA Section - High-End Lab Style */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-900/60 border border-cyan-500/20 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden group"
      >
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-cyan-500/[0.03] select-none uppercase italic">Laboratory</div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_70%)] pointer-events-none"></div>

         <div className="relative z-10 flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 space-y-8">
               <div className="space-y-4">
                  <div className="flex items-center gap-4">
                     <div className="w-14 h-14 bg-cyan-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg transform group-hover:rotate-12 transition-transform">📄</div>
                     <div className="flex flex-col">
                        <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter leading-none">{current.coa.title}</h4>
                        <span className="text-cyan-400 text-[9px] font-black uppercase tracking-[0.4em] mt-1">{current.coa.header}</span>
                     </div>
                  </div>
                  <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic border-l-4 border-cyan-500 pl-6 bg-cyan-500/5 py-4 rounded-r-2xl">
                     "{current.coa.meaning}"
                  </p>
               </div>

               <div className="space-y-6">
                  <h5 className="text-cyan-300 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                     <span className="w-8 h-px bg-cyan-500"></span>
                     {current.coa.contentsTitle}
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {current.coa.contents.map((item, i) => (
                       <div key={i} className="bg-slate-950/60 border border-white/5 p-4 rounded-2xl hover:border-cyan-500/30 transition-all">
                          <span className="block text-cyan-400 text-[10px] font-black uppercase mb-1">{item.l}</span>
                          <span className="block text-slate-300 text-[11px] font-bold">{item.d}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="lg:w-1/2 space-y-8 bg-slate-950/40 p-8 rounded-[32px] border border-white/5">
               <div className="space-y-6">
                  <h5 className="text-cyan-300 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                     <span className="w-8 h-px bg-cyan-500"></span>
                     {current.coa.usageTitle}
                  </h5>
                  <ul className="space-y-4">
                     {current.coa.usagePoints.map((p, i) => (
                       <li key={i} className="flex items-center gap-4 group/item">
                          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-500 group-hover/item:bg-cyan-500 group-hover/item:text-white transition-all">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                             </svg>
                          </div>
                          <span className="text-slate-200 text-sm font-bold uppercase tracking-tight">{p}</span>
                       </li>
                     ))}
                  </ul>
               </div>

               <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                  <div className="flex items-center gap-3 text-rose-500">
                     <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                     </svg>
                     <span className="text-[10px] font-black uppercase tracking-widest">{lang === 'hi' ? 'महत्वपूर्ण चेतावनी' : 'QUALITY ALERT'}</span>
                  </div>
                  <p className="text-rose-400 text-xs md:text-sm font-black italic bg-rose-500/5 p-4 rounded-xl border border-rose-500/20">
                     "{current.coa.warning}"
                  </p>
               </div>
            </div>
         </div>
      </motion.div>

      {/* Comparison Table Section */}
      <div className="bg-slate-900/60 border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl overflow-hidden backdrop-blur-xl">
         <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
            <span className="w-10 h-1 bg-cyan-500"></span>
            {current.table.title}
         </h4>
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="border-b border-white/10">
                     {current.table.headers.map((h, i) => (
                        <th key={i} className={`py-4 text-[10px] font-black uppercase tracking-widest ${i === 0 ? 'text-slate-500' : i === 1 ? 'text-blue-400' : 'text-rose-400'}`}>{h}</th>
                     ))}
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {current.table.rows.map((row, i) => (
                     <motion.tr 
                       key={i} 
                       whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                       className="group transition-colors"
                     >
                        <td className="py-6 text-white font-black text-xs md:text-sm uppercase tracking-tight">{row.p}</td>
                        <td className="py-6 text-blue-300 font-bold text-xs md:text-sm">{row.g}</td>
                        <td className="py-6 text-rose-300 font-bold text-xs md:text-sm">{row.m}</td>
                     </motion.tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]"></span>
                Gate Sync: Online
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,1)]"></span>
                COA Validator: Active
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest">Industrial Hub v6.2 // Gate Control Node</div>
      </div>
    </div>
  );
};

export default MaterialReceivingDetail;


import React from 'react';
import { Language } from '../types';

interface FQCOQCPointDetailProps {
  pointId: string;
  onBack: () => void;
  lang: Language;
}

const FQCOQCPointDetail: React.FC<FQCOQCPointDetailProps> = ({ pointId, onBack, lang }) => {
  const content = {
    en: {
      fir: {
        title: "FIR: Final Inspection Report",
        subtitle: "100% Performance Guarantee Log",
        desc: "The FIR is the official shift-wise document that records the final check of every single unit before it is marked 'OK'. It is the 100% inspection ledger.",
        keys: [
          { h: "Unit Serial Number", d: "Total traceability of which part was checked when." },
          { h: "Shift & Operator ID", d: "Accountability for who passed the unit." },
          { h: "Functional Status", d: "Pass/Fail record for all power and button tests." },
          { h: "Visual Clearance", d: "Confirmation that no scratches or dents exist." }
        ],
        mantra: "If it's not in the FIR, it was never checked.",
        color: "indigo"
      },
      pdi: {
        title: "PDI: Pre-Delivery Inspection",
        subtitle: "The Customer's Final Proxy",
        desc: "PDI is the last look from the perspective of the customer. It happens just before the unit goes into the final packing box.",
        keys: [
          { h: "Aesthetics Check", d: "Is the finish, color, and texture perfect?" },
          { h: "Accessories Verify", d: "Are manuals, cables, and remote controls inside?" },
          { h: "Labeling Check", d: "Are all serial labels straight and correct?" },
          { h: "Function Final", d: "One last 'Power On' to ensure zero startup failure." }
        ],
        mantra: "The customer is the ultimate inspector.",
        color: "cyan"
      },
      aql: {
        title: "AQL: Acceptance Quality Limit",
        subtitle: "Statistical Decision Intelligence",
        desc: "AQL is a method to decide if a whole 'Lot' (1000 pcs) is OK by checking only a small 'Sample' (e.g. 80 pcs). It uses statistical math to manage risk.",
        keys: [
          { h: "N (Lot Size)", d: "The total quantity received/produced in a batch." },
          { h: "n (Sample Size)", d: "Number of pieces randomly picked for audit." },
          { h: "Ac (Acceptance)", d: "Max defects allowed to PASS the whole batch." },
          { h: "Re (Rejection)", d: "Min defects that FAIL the whole batch (e.g. Ac=5, Re=6)." }
        ],
        mantra: "Sampling is about managing the risk of missing a defect.",
        color: "emerald"
      },
      coc_coq: {
        title: "COC & COQ Architecture",
        subtitle: "Legal & Technical Certification",
        desc: "COC and COQ are the formal 'Passports' of your product. They tell the customer: 'We have checked everything, and here is the proof.'",
        keys: [
          { h: "COC (Conformance)", d: "A legal declaration that the batch meets all contract specifications and drawings. It is a 'Promise' document." },
          { h: "COQ (Quality)", d: "A data-rich report showing actual test results (e.g. exact Hardness, Voltage, or Dimensions). It is an 'Evidence' document." },
          { h: "Batch Traceability", d: "Linking the certificate to a specific Lot Number or Production Date." },
          { h: "Authorization", d: "Digital or physical sign-off by the Quality Manager." }
        ],
        comparison: {
          title: "COC vs COQ: The Difference",
          rows: [
            { p: "Type", coc: "General Statement", coq: "Detailed Data" },
            { p: "Content", coc: "Declaration of Conformity", coq: "Actual Measurement Values" },
            { p: "Purpose", coc: "Legal / Compliance", coq: "Technical Proof" }
          ]
        },
        mantra: "No certificate, No dispatch.",
        color: "blue"
      }
    },
    hi: {
      fir: {
        title: "FIR: फाइनल इंस्पेक्शन रिपोर्ट",
        subtitle: "100% परफॉरमेंस गारंटी लॉग",
        desc: "FIR एक आधिकारिक दस्तावेज है जिसमें शिफ्ट के दौरान चेक किए गए हर एक पीस का रिकॉर्ड होता है। यह 100% चेकिंग का सबूत है।",
        keys: [
          { h: "सीरियल नंबर", d: "ट्रेसेबिलिटी: कौन सा पार्ट कब चेक हुआ।" },
          { h: "ऑपरेटर ID", d: "किसने इस पीस को पास किया, उसकी जिम्मेदारी।" },
          { h: "फंक्शनल स्टेटस", d: "पावर और बटन टेस्ट का पास/फेल रिकॉर्ड।" },
          { h: "विजुअल क्लियरेंस", d: "पुष्टि कि सतह पर कोई डेंट या खरोंच नहीं है।" }
        ],
        mantra: "अगर FIR में नहीं है, तो मतलब वो चेक ही नहीं हुआ।",
        color: "indigo"
      },
      pdi: {
        title: "PDI: प्री-डिलीवरी इंस्पेक्शन",
        subtitle: "ग्राहक की अंतिम नज़र",
        desc: "PDI ग्राहक के नजरिए से की जाने वाली आखिरी जांच है। यह सामान को बॉक्स में बंद करने से ठीक पहले होती है।",
        keys: [
          { h: "दिखावट चेक", d: "क्या पेंट, रंग और फिनिश एकदम परफेक्ट है?" },
          { h: "एक्सेसरीज चेक", d: "क्या मैन्युअल, केबल और रिमोट बॉक्स के अंदर हैं?" },
          { h: "लेबलिंग चेक", d: "क्या सीरियल नंबर के स्टिकर सीधे और सही लगे हैं?" },
          { h: "अंतिम पावर ऑन", d: "एक आखिरी बार चलाकर देखना ताकि कस्टमर को खराब न मिले।" }
        ],
        mantra: "असली इंस्पेक्टर ग्राहक ही है।",
        color: "cyan"
      },
      aql: {
        title: "AQL: एक्सेप्टेंस क्वालिटी लिमिट",
        subtitle: "सांख्यिकीय फैसला (Decision)",
        desc: "AQL एक ऐसा तरीका है जिससे पूरे लॉट (जैसे 1000 पीस) का फैसला सिर्फ कुछ सैंपल (जैसे 80 पीस) चेक करके किया जाता है।",
        keys: [
          { h: "N (लॉट साइज)", d: "एक बार में आए कुल माल की संख्या।" },
          { h: "n (सैंपल साइज)", d: "ऑडिट के लिए रैंडम चुने गए पीस की संख्या।" },
          { h: "Ac (Acceptance)", d: "इतने डिफेक्ट मिलने तक पूरे लॉट को पास माना जाएगा।" },
          { h: "Re (Rejection)", d: "इतने डिफेक्ट मिलते ही पूरा लॉट रिजेक्ट माना जाएगा।" }
        ],
        mantra: "सैंपलिंग का मतलब है डिफेक्ट छूट जाने के रिस्क को मैनेज करना।",
        color: "emerald"
      },
      coc_coq: {
        title: "COC और COQ संरचना",
        subtitle: "कानूनी और तकनीकी प्रमाणन",
        desc: "COC और COQ आपके प्रोडक्ट के 'पासपोर्ट' हैं। ये ग्राहक को बताते हैं कि: 'हमने सब कुछ चेक किया है, और यह रहा उसका सबूत'!",
        keys: [
          { h: "COC (कन्फर्मेन्स)", d: "एक कानूनी घोषणा कि पूरा बैच ड्राइंग और नियमों के हिसाब से बना है। यह 'वादा' दस्तावेज है।" },
          { h: "COQ (क्वालिटी)", d: "एक डेटा-रिपोर्ट जिसमें असली टेस्ट के परिणाम (जैसे असली वोल्टेज या साइज) लिखे होते हैं। यह 'सबूत' दस्तावेज है।" },
          { h: "ट्रेसेबिलिटी", d: "सर्टिफिकेट को खास लॉट नंबर या प्रोडक्शन तारीख से जोड़ना।" },
          { h: "अथॉरिटी", d: "क्वालिटी मैनेजर के डिजिटल या फिजिकल हस्ताक्षर।" }
        ],
        comparison: {
          title: "COC बनाम COQ: अंतर",
          rows: [
            { p: "प्रकार", coc: "सामान्य बयान", coq: "विस्तृत डेटा" },
            { p: "सामग्री", coc: "नियम पालन की घोषणा", coq: "टेस्ट की असली वैल्यू" },
            { p: "उद्देश्य", coc: "कानूनी / अनुपालन", coq: "तकनीकी सबूत" }
          ]
        },
        mantra: "सर्टिफिकेट नहीं, तो डिस्पैच नहीं।",
        color: "blue"
      }
    }
  };

  const data = (lang === 'hi' ? content.hi : content.en)[pointId.toLowerCase() as keyof typeof content.en];

  if (!data) return null;

  return (
    <div className="flex flex-col gap-8 animate-in slide-in-from-bottom-6 duration-700 pb-16 max-w-6xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className={`flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-${data.color}-500/20 pb-6 bg-slate-950/40 p-8 rounded-t-[40px] backdrop-blur-md`}>
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className={`w-3 h-3 bg-${data.color}-500 rounded-full animate-pulse shadow-[0_0_12px_${data.color}]`}></div>
              <span className={`text-${data.color}-400 text-[10px] font-black uppercase tracking-[0.4em]`}>{data.subtitle}</span>
           </div>
           <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none italic font-mono">{data.title}</h3>
        </div>
        <button onClick={onBack} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          Back to Hub
        </button>
      </div>

      {/* Main Desc */}
      <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
         <div className={`absolute top-0 right-0 p-8 text-9xl font-black text-${data.color}-500/[0.03] select-none uppercase italic`}>{pointId.slice(0, 3)}</div>
         <div className="relative z-10 space-y-8">
            <h4 className="text-white text-xl md:text-3xl font-bold leading-relaxed italic max-w-4xl">
               "{data.desc}"
            </h4>
            <div className={`bg-${data.color}-500/10 p-6 rounded-3xl border border-${data.color}-500/20 inline-block`}>
               <p className={`text-${data.color}-400 font-black text-xs md:text-sm uppercase tracking-widest italic`}>
                  "{data.mantra}"
               </p>
            </div>
         </div>
      </div>

      {/* Key Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {data.keys.map((key: any, i: number) => (
           <div key={i} className="bg-slate-950/40 border border-white/5 p-8 rounded-[32px] hover:bg-slate-900 transition-all group flex gap-6 shadow-xl">
              <div className={`w-14 h-14 bg-slate-900 border border-${data.color}-500/20 rounded-2xl flex items-center justify-center text-xl font-black text-${data.color}-500 shadow-inner group-hover:scale-110 transition-transform`}>
                 0{i+1}
              </div>
              <div className="space-y-1 flex-1">
                 <h5 className="text-white font-black text-sm md:text-base uppercase tracking-tight group-hover:text-white transition-colors">{key.h}</h5>
                 <p className="text-slate-500 text-xs font-bold leading-relaxed italic">{key.d}</p>
              </div>
           </div>
         ))}
      </div>

      {/* Visual Simulation Area */}
      <div className="bg-slate-950 border border-white/5 rounded-[40px] p-8 md:p-12 shadow-inner flex flex-col items-center">
         <h4 className="text-white text-[10px] font-black uppercase tracking-[0.5em] mb-10 text-center">Process Insight Visual</h4>
         
         {pointId === 'FIR' && (
           <div className="w-full max-w-2xl bg-white/5 rounded-2xl p-6 font-mono text-[10px] text-slate-400 border border-white/10 space-y-2 overflow-x-auto whitespace-nowrap">
              <div className="border-b border-white/10 pb-2 flex justify-between text-indigo-400">
                 <span>SN_NUMBER</span><span>TIMESTAMP</span><span>FUNCTION</span><span>APPEARANCE</span><span>STATUS</span>
              </div>
              <div className="flex justify-between"><span>CAB_001042</span><span>09:42:15</span><span>OK</span><span>OK</span><span className="text-emerald-500">PASS</span></div>
              <div className="flex justify-between"><span>CAB_001043</span><span>09:45:10</span><span>OK</span><span>OK</span><span className="text-emerald-500">PASS</span></div>
              <div className="flex justify-between"><span>CAB_001044</span><span>09:48:02</span><span className="text-rose-500">FAIL</span><span>OK</span><span className="text-rose-500">REJECT</span></div>
           </div>
         )}

         {pointId === 'PDI' && (
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {['Accessory Kit', 'Remote Check', 'Cleaning', 'Packing Grade'].map((item, idx) => (
                <div key={idx} className="bg-cyan-500/10 border border-cyan-500/30 p-4 rounded-xl text-center">
                   <span className="text-xl block mb-2">📦</span>
                   <span className="text-[8px] font-black text-cyan-300 uppercase">{item} OK</span>
                </div>
              ))}
           </div>
         )}

         {pointId === 'AQL' && (
           <div className="flex flex-col md:flex-row items-center gap-12 w-full justify-center">
              <div className="flex flex-col items-center">
                 <div className="w-24 h-24 bg-emerald-500/20 border-2 border-emerald-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">N</div>
                 <span className="mt-2 text-[10px] font-black text-white uppercase tracking-widest">LOT (1000)</span>
              </div>
              <div className="text-slate-600 text-4xl hidden md:block">➔</div>
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 bg-white/10 border-2 border-dashed border-white/30 rounded-2xl flex items-center justify-center text-2xl shadow-lg">n</div>
                 <span className="mt-2 text-[10px] font-black text-white uppercase tracking-widest">SAMPLE (80)</span>
              </div>
              <div className="text-slate-600 text-4xl hidden md:block">➔</div>
              <div className="flex flex-col items-center">
                 <div className="px-6 py-3 bg-emerald-600 border-2 border-emerald-400 rounded-xl text-white font-black text-sm shadow-xl italic">Ac: 5 | Re: 6</div>
                 <span className="mt-2 text-[10px] font-black text-emerald-500 uppercase tracking-widest">Decision Logic</span>
              </div>
           </div>
         )}

         {pointId === 'COC_COQ' && (
           <div className="w-full space-y-10">
              {/* Document Comparison Table */}
              <div className="overflow-x-auto bg-slate-900/60 rounded-[32px] border border-white/10 p-6">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="border-b border-white/10 text-[9px] font-black uppercase text-blue-400">
                          <th className="py-4 px-4">Feature</th>
                          <th className="py-4 px-4">COC (Conformance)</th>
                          <th className="py-4 px-4">COQ (Quality)</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-[11px] font-bold">
                       {(data as any).comparison.rows.map((row: any, i: number) => (
                          <tr key={i}>
                             <td className="py-4 px-4 text-white uppercase">{row.p}</td>
                             <td className="py-4 px-4 text-slate-400 italic">{row.coc}</td>
                             <td className="py-4 px-4 text-blue-400">{row.coq}</td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>

              {/* Digital Cert Simulation */}
              <div className="max-w-md mx-auto bg-white p-6 rounded-sm shadow-2xl border-t-[10px] border-blue-600 text-slate-900 font-serif">
                 <h6 className="text-center font-bold uppercase text-lg border-b border-slate-200 pb-2 mb-4">CERTIFICATE OF QUALITY</h6>
                 <div className="space-y-3 text-[10px]">
                    <div className="flex justify-between"><span>Batch No:</span><span className="font-bold">LOT-99812</span></div>
                    <div className="flex justify-between"><span>Inspection Date:</span><span className="font-bold">25-Jan-2025</span></div>
                    <div className="h-px bg-slate-100 my-4"></div>
                    <div className="grid grid-cols-3 font-bold border-b border-slate-100 pb-1">
                       <span>Parameter</span><span className="text-center">Actual</span><span className="text-right">Result</span>
                    </div>
                    <div className="grid grid-cols-3 opacity-80">
                       <span>Input Voltage</span><span className="text-center">232V</span><span className="text-right text-emerald-600">PASS</span>
                    </div>
                    <div className="grid grid-cols-3 opacity-80">
                       <span>Torque Check</span><span className="text-center">0.85Nm</span><span className="text-right text-emerald-600">PASS</span>
                    </div>
                    <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-end">
                       <div className="w-16 h-8 bg-slate-50 border border-dashed border-slate-200"></div>
                       <div className="text-right">
                          <span className="block text-[8px] font-bold">Quality Dept Head</span>
                          <span className="block text-[6px] italic">ISO 9001:2015 Verified</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
         )}
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className={`w-2 h-2 bg-${data.color}-500 rounded-full shadow-[0_0_10px_white]`}></span>
                Detail Extraction: Complete
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Technical Knowledge Node // v2.1</div>
      </div>
    </div>
  );
};

export default FQCOQCPointDetail;

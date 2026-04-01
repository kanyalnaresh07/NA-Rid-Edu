
import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface WIPDetailProps {
  onBack: () => void;
  lang: Language;
}

const WIPDetail: React.FC<WIPDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "WIP: Work In Process",
      subtitle: "Flow Management & Buffer Control",
      backBtn: "Back to Hub",
      hero: {
        question: "What is WIP?",
        desc: "WIP refers to material or products that are currently in the middle of production. They are no longer raw materials, but not yet finished goods.",
        simple: "In simple words: 'Work happening between machines'.",
        mantra: "Motion is only value if it leads to completion."
      },
      steps: [
        {
          id: 1,
          title: "Pre / Post Process Bins",
          desc: "Defined bins for holding material before and after each station.",
          points: [
            "Pre-process bin: Parts waiting for the next operation.",
            "Post-process bin: Parts finished at this station.",
            "Standard labeling & fixed quantity limits.",
            "Prevents mix-ups between processed and unprocessed parts."
          ],
          purpose: "Avoid confusion and maintain sequence.",
          icon: "📥",
          color: "blue"
        },
        {
          id: 2,
          title: "Line-Side Buffer Control",
          desc: "Maintaining a limited amount of stock near the assembly line.",
          points: [
            "Define maximum allowable buffer quantity.",
            "Strict adherence to FIFO (First-In, First-Out).",
            "Prevents floor congestion and mess.",
            "Stops overproduction at early stages."
          ],
          purpose: "Optimize floor space and stop overproduction.",
          icon: "🛡️",
          color: "orange"
        },
        {
          id: 3,
          title: "Stagnant Stock Monitoring",
          desc: "Checking if any WIP is stuck at a station for too long.",
          points: [
            "Identify why material is not moving.",
            "Signal for Bottleneck or Machine issues.",
            "Detect Quality 'Hold' material early.",
            "Avoid hidden inventory costs."
          ],
          purpose: "Detect delays and identify bottlenecks.",
          icon: "⚠️",
          color: "rose"
        },
        {
          id: 4,
          title: "Moving Parts Forward",
          desc: "Timely movement of WIP to the next stage in the process.",
          points: [
            "Priority-based movement for urgent models.",
            "Separate bins for hold/rework items.",
            "Continuous flow with zero gaps.",
            "Sync with production schedule."
          ],
          purpose: "Ensure continuous production flow.",
          icon: "🏃",
          color: "emerald"
        }
      ],
      comparison: {
        title: "Why WIP Control is Mandatory?",
        headers: ["If WIP is High (Chaos)", "If WIP is Controlled (Success)"],
        rows: [
          { bad: "Congestion & Mess", good: "Smooth & Clean Flow", color: "cyan" },
          { bad: "Defects found late", good: "Defects caught early", color: "amber" },
          { bad: "Space waste", good: "Optimized Floor Space", color: "indigo" },
          { bad: "High Lead Time", good: "Fast Lead Time", color: "emerald" }
        ]
      },
      summary: "WIP Control = The heartbeat of a fast-moving factory line."
    },
    hi: {
      title: "WIP (Work In Process)",
      subtitle: "फ्लो मैनेजमेंट और बफर कंट्रोल",
      backBtn: "वापस जाएं",
      hero: {
        question: "WIP क्या होता है?",
        desc: "WIP वो मटेरियल / प्रोडक्ट होता है जो प्रोडक्शन के बीच में होता है — ना रॉ मटेरियल होता है और ना ही तैयार माल।",
        simple: "आसान भाषा में: 'मशीन से मशीन के बीच चल रहा काम'।",
        mantra: "फ्लो सही तो प्रोडक्शन सही।"
      },
      steps: [
        {
          id: 1,
          title: "Pre / Post Process Bins",
          desc: "हर स्टेशन के पहले और बाद माल रखने के लिए तय किए गए बिन (Bins)।",
          points: [
            "Pre-process bin: अगले प्रोसेस के इंतज़ार वाला माल।",
            "Post-process bin: काम पूरा होने के बाद रखा माल।",
            "सही लेबलिंग और मात्रा (Qty) की सीमा।",
            "मिक्‍स-अप और कन्फ्यूजन से बचाव।"
          ],
          purpose: "पहचान सही रखना और मिक्स-अप रोकना।",
          icon: "📥",
          color: "blue"
        },
        {
          id: 2,
          title: "Line-Side Buffer Control",
          desc: "लाइन के पास ज़रूरत के हिसाब से सीमित माल रखना।",
          points: [
            "बफर की मात्रा पहले से तय होती है।",
            "ज्यादा माल जमा नहीं होने देते।",
            "FIFO (पुराना माल पहले) का पालन।",
            "ओवर-प्रोडक्शन और भीड़भाड़ से बचाव।"
          ],
          purpose: "भीड़ रोकना और ओवर-प्रोडक्शन से बचना।",
          icon: "🛡️",
          color: "orange"
        },
        {
          id: 3,
          title: "Stagnant Stock Monitoring",
          desc: "यह चेक करना कि माल कहीं रुका तो नहीं है।",
          points: [
            "रुके हुए माल की वजह ढूँढना।",
            "बॉटलनेक स्टेशन का पता चलना।",
            "क्वालिटी या मशीन की समस्या का सिग्नल।",
            "छिपे हुए नुकसान (Hidden Loss) को पकड़ना।"
          ],
          purpose: "देरी और बॉटलनेक की पहचान करना।",
          icon: "⚠️",
          color: "rose"
        },
        {
          id: 4,
          title: "Moving Parts Forward",
          desc: "WIP को अगले प्रोसेस तक समय पर पहुँचाना।",
          points: [
            "प्राथमिकता (Priority) के हिसाब से मूवमेंट।",
            "रोके गए (Hold) माल को अलग रखना।",
            "बिना रुकावट लगातार फ्लो बनाए रखना।",
            "प्रोडक्शन प्लान के साथ तालमेल।"
          ],
          purpose: "प्रोडक्शन फ्लो को लगातार बनाए रखना।",
          icon: "🏃",
          color: "emerald"
        }
      ],
      comparison: {
        title: "WIP कंट्रोल क्यों ज़रूरी है?",
        headers: ["WIP ज्यादा हो तो (नुकसान)", "WIP कंट्रोल में हो तो (फायदा)"],
        rows: [
          { bad: "भीड़ और गंदगी (Congestion)", good: "स्मूथ और साफ़ फ्लो", color: "cyan" },
          { bad: "गलती देर से पता चलती है", good: "गलती तुरंत पकड़ में आती है", color: "amber" },
          { bad: "जगह की बर्बादी", good: "जगह का सही उपयोग", color: "indigo" },
          { bad: "काम में ज्यादा समय लगना", good: "काम तेज़ी से पूरा होना", color: "emerald" }
        ]
      },
      summary: "WIP कंट्रोल = तेज़ और सटीक फैक्ट्री की जान।"
    }
  };

  const current = content[lang] || content['en'];

  return (
    <div className="flex flex-col gap-8 animate-in slide-in-from-right-6 duration-700 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-orange-500/20 pb-6 bg-slate-950/40 p-8 rounded-t-[40px] backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse shadow-[0_0_12px_orange]"></div>
              <span className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none italic font-mono">{current.title}</h3>
        </div>
        <motion.button 
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBack} 
          className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        >
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
          {current.backBtn}
        </motion.button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-orange-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-9xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Workflow</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-orange-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.simple}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-orange-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">
            "🏗️ {current.hero.desc}"
         </div>
      </div>

      {/* Process Flow Steps */}
      <div className="space-y-12">
         {current.steps.map((step, i) => (
            <div key={step.id} className="relative flex flex-col md:flex-row gap-8 items-start group">
               {/* Vertical Connection Line */}
               {i !== current.steps.length - 1 && (
                  <div className="absolute left-[31px] top-16 bottom-0 w-1 bg-gradient-to-b from-orange-500/50 to-transparent hidden md:block"></div>
               )}

               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 className={`w-16 h-16 rounded-2xl bg-slate-900 border-2 border-${step.color}-500/50 flex items-center justify-center text-3xl shadow-lg relative z-10 transition-transform`}
               >
                  {step.icon}
               </motion.div>

               <motion.div 
                 whileHover={{ y: -5, borderColor: "rgba(249, 115, 22, 0.3)" }}
                 className="flex-1 bg-slate-900/60 border border-white/5 p-8 rounded-[40px] shadow-2xl transition-all flex flex-col lg:flex-row gap-10 overflow-hidden relative"
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
                     <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Operational Guidelines</span>
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

      {/* Comparison Matrix Table */}
      <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[48px] shadow-2xl overflow-hidden backdrop-blur-xl mt-8">
         <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
            <span className="w-12 h-1.5 bg-orange-500 shadow-[0_0_12px_orange]"></span>
            {current.comparison.title}
         </h4>
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="border-b border-white/10 text-xs md:text-sm font-black uppercase">
                     <th className="py-6 text-rose-500">{current.comparison.headers[0]}</th>
                     <th className="py-6 text-emerald-500">{current.comparison.headers[1]}</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {current.comparison.rows.map((row, i) => (
                     <tr key={i} className="group hover:bg-white/5 transition-colors">
                        <td className="py-6 pr-4">
                           <div className="flex items-center gap-3">
                              <span className="text-rose-500 text-lg">❌</span>
                              <span className="text-slate-400 font-bold text-sm md:text-lg italic">{row.bad}</span>
                           </div>
                        </td>
                        <td className="py-6">
                           <div className="flex items-center gap-3">
                              <span className="text-emerald-500 text-lg">✅</span>
                              <span className={`text-${row.color}-400 font-black text-sm md:text-lg uppercase tracking-tight`}>{row.good}</span>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      {/* Summary Logic Footer */}
      <div className="bg-orange-600 p-10 rounded-[48px] shadow-[0_0_50px_rgba(249,115,22,0.3)] text-center relative overflow-hidden group mt-8">
         <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 animate-pulse"></div>
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
                <span className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_white] animate-pulse"></span>
                Flow Engine: Levelled
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_white]"></span>
                WIP Threshold: Monitored
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Module: Store-WIP-v2 // Logic Node 02</div>
      </div>
    </div>
  );
};

export default WIPDetail;


import React from 'react';
import { Language } from '../types';

interface FQCDetailProps {
  onBack: () => void;
  lang: Language;
}

const FQCDetail: React.FC<FQCDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Final Quality Control (FQC)",
      subtitle: "The Production Line Guard",
      backBtn: "Back to QMS",
      hero: {
        question: "What is FQC?",
        desc: "FQC is the 100% inspection performed at the very last station of the production line. Every single piece is checked before it moves to the warehouse as Finished Goods (FG).",
        mantra: "Zero defects allowed beyond this point."
      },
      elements: [
        {
          title: "Functional Testing",
          icon: "⚡",
          desc: "Checking if the product performs its main intended task perfectly.",
          points: ["Full Power-On test", "Switch & Button response", "Software/Logic check", "Parameter validation"]
        },
        {
          title: "Aesthetic Grading",
          icon: "✨",
          desc: "Ensuring the surface, paint, and assembly looks perfect for the customer.",
          points: ["Scratch-free surface", "Logo alignment", "Cleanliness", "No burrs or sharp edges"]
        },
        {
          title: "Safety Parameters",
          icon: "🛡️",
          desc: "Critical safety checks to ensure the user is protected.",
          points: ["HV (High Voltage) Test", "Earthing Continuity", "Current leakage test", "Safety interlocks"]
        },
        {
          title: "Final Configuration",
          icon: "🎛️",
          desc: "Matching the part to the specific Sales Order or Model.",
          points: ["Model No. check", "Internal settings", "Software version", "Accessories count"]
        }
      ],
      docs: {
        title: "FQC Mandatory Records",
        items: [
          { name: "FIR", full: "Final Inspection Report", d: "Record of 100% check of all parameters per shift." },
          { name: "PDI Checklist", full: "Pre-Delivery Inspection", d: "Detailed check sheet signed by the line supervisor." },
          { name: "HV Test Log", full: "Electrical Safety Record", d: "Specific log for safety parameter testing." },
          { name: "Final Pass Stamp", full: "Batch Marking", d: "Visual proof on the product (Punch/Stamp) that FQC is OK." }
        ]
      },
      proTip: "FQC is about 'Detection'—the goal is to ensure that even if the process failed, the customer receives 100% Good parts."
    },
    hi: {
      title: "FQC (अंतिम क्वालिटी जांच)",
      subtitle: "प्रोडक्शन लाइन का रक्षक",
      backBtn: "QMS पर वापस जाएं",
      hero: {
        question: "FQC क्या है?",
        desc: "FQC प्रोडक्शन लाइन के बिल्कुल आखिरी स्टेशन पर की जाने वाली 100% जांच है। वेयरहाउस में माल भेजने से पहले हर एक पीस को चेक किया जाता है।",
        mantra: "इस पॉइंट के आगे एक भी डिफेक्ट नहीं जाना चाहिए।"
      },
      elements: [
        {
          title: "फंक्शनल टेस्टिंग",
          icon: "⚡",
          desc: "यह चेक करना कि प्रोडक्ट अपना काम सही से कर रहा है या नहीं।",
          points: ["पावर-ऑन टेस्ट", "बटन और स्विच की जांच", "सॉफ्टवेयर / लॉजिक चेक", "वर्किंग पैरामीटर्स"]
        },
        {
          title: "विजुअल फिनिशिंग",
          icon: "✨",
          desc: "यह सुनिश्चित करना कि पेंट, फिटिंग और सतह देखने में परफेक्ट हो।",
          points: ["खरोंच रहित सतह", "लोगो और स्टिकर एलाइनमेंट", "साफ-सफाई", "किनारे स्मूथ होना"]
        },
        {
          title: "सेफ्टी पैरामीटर्स",
          icon: "🛡️",
          desc: "यूजर की सुरक्षा के लिए किए जाने वाले अनिवार्य टेस्ट।",
          points: ["HV टेस्ट (हाई वोल्टेज)", "अर्थिंग चेक", "लीकेज करंट टेस्ट", "सेफ्टी इंटरलॉक्स"]
        },
        {
          title: "फाइनल कॉन्फ़िगरेशन",
          icon: "🎛️",
          desc: "पार्ट को मॉडल नंबर और ऑर्डर के हिसाब से मैच करना।",
          points: ["मॉडल नंबर की जांच", "इंटरनल सेटिंग्स", "सॉफ्टवेयर वर्जन", "एक्सेसरीज की गिनती"]
        }
      ],
      docs: {
        title: "FQC के ज़रूरी दस्तावेज़",
        items: [
          { name: "FIR", full: "Final Inspection Report", d: "हर शिफ्ट में होने वाली 100% जांच का रिकॉर्ड।" },
          { name: "PDI चेकलिस्ट", full: "Pre-Delivery Inspection", d: "सुपरवाइजर द्वारा साइन किया गया विस्तृत जांच फॉर्म।" },
          { name: "HV टेस्ट लॉग", full: "इलेक्ट्रिकल सेफ्टी रिकॉर्ड", d: "सेफ्टी पैरामीटर्स की टेस्टिंग का खास लॉग।" },
          { name: "FQC पास स्टैम्प", full: "बैच मार्किंग", d: "प्रोडक्ट पर लगा वो निशान जो बताता है कि यह OK है।" }
        ]
      },
      proTip: "FQC का काम 'खराब माल पकड़ना' है—इसका लक्ष्य यह है कि कस्टमर तक हमेशा 100% सही माल ही पहुँचे।"
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-indigo-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_12px_indigo]"></div>
              <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono">Final Quality (FQC)</h3>
        </div>
        <button onClick={onBack} className="bg-indigo-700 hover:bg-indigo-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-indigo-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Line Guard</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-indigo-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.mantra}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-indigo-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-sm md:text-lg font-bold italic leading-relaxed">
            "{current.hero.desc}"
         </div>
      </div>

      {/* Elements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {current.elements.map((el, i) => (
           <div key={i} className="bg-slate-950/60 border border-white/5 p-8 rounded-[32px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                 <div className="w-14 h-14 bg-slate-900 border border-indigo-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">{el.icon}</div>
                 <span className="text-indigo-500 font-black text-[9px] uppercase tracking-widest opacity-40">FQC-0{i+1}</span>
              </div>
              <div className="space-y-2">
                 <h5 className="text-white font-black text-lg uppercase tracking-tight group-hover:text-indigo-400 transition-colors">{el.title}</h5>
                 <p className="text-slate-500 text-xs font-bold leading-relaxed italic">{el.desc}</p>
              </div>
              <div className="space-y-2 pt-4 border-t border-white/5">
                 {el.points.map((p, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-tight">
                       <div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
                       {p}
                    </div>
                 ))}
              </div>
           </div>
         ))}
      </div>

      {/* Mandatory Docs & Pro Tip */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         <div className="lg:col-span-8 bg-slate-900/60 border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8">
            <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter italic flex items-center gap-4">
               <span className="w-12 h-1 bg-indigo-500 shadow-[0_0_10px_indigo]"></span>
               {current.docs.title}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {current.docs.items.map((doc, i) => (
                  <div key={i} className="bg-slate-950 p-5 rounded-3xl border border-white/5 group hover:border-indigo-500/40 transition-all shadow-xl">
                     <div className="flex items-center justify-between mb-2">
                        <span className="text-indigo-500 font-black text-[10px] uppercase tracking-widest">{doc.name}</span>
                        <div className="w-6 h-6 bg-slate-900 rounded-lg flex items-center justify-center text-xs opacity-50">📑</div>
                     </div>
                     <h6 className="text-white font-black text-xs uppercase mb-2 tracking-tight leading-none">{doc.full}</h6>
                     <p className="text-slate-500 text-[10px] font-bold leading-relaxed">{doc.d}</p>
                  </div>
               ))}
            </div>
         </div>
         <div className="lg:col-span-4 bg-indigo-950/20 border border-indigo-500/20 p-8 md:p-10 rounded-[40px] shadow-2xl flex flex-col gap-6 backdrop-blur-xl">
            <h4 className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em]">FQC Strategy Hook</h4>
            <p className="text-white text-sm md:text-lg font-bold leading-relaxed italic border-l-4 border-indigo-500 pl-6 bg-indigo-500/5 py-4 rounded-r-2xl">
               "{current.proTip}"
            </p>
            <div className="bg-indigo-500/10 p-4 rounded-2xl border border-indigo-500/20 text-center animate-pulse">
               <p className="text-[10px] text-indigo-200 font-black uppercase tracking-widest">100% Shield Mode Active</p>
            </div>
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-[0_0_12px_indigo] animate-pulse"></span>
                Inspection Node: 100% Coverage
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Industrial Hub v9.5 // FQC Station Node</div>
      </div>
    </div>
  );
};

export default FQCDetail;

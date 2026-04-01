
import React, { useState } from 'react';
import { Language } from '../types';
import PPCSectionDetail from './PPCSectionDetail';

interface PlanningDetailProps {
  onBack: () => void;
  lang: Language;
}

const PlanningDetail: React.FC<PlanningDetailProps> = ({ onBack, lang }) => {
  const [selectedSectionId, setSelectedSectionId] = useState<number | null>(null);

  const content = {
    en: {
      title: "Planning (PPC) Hub",
      subtitle: "Production Planning & Control Intelligence",
      backBtn: "Back to Main",
      hero: {
        question: "What is PPC?",
        desc: "PPC is the 'Brain' of the factory. It balances customer demand with factory resources (Man, Machine, Material) to ensure on-time delivery at the lowest cost.",
        mantra: "The right part, at the right time, in the right quantity."
      },
      sections: [
        {
          id: 1,
          title: "Demand Planning",
          tag: "Customer Focus",
          desc: "Understanding what the customer actually needs.",
          items: ["Customer order analysis", "Forecast vs Firm order review", "Priority & Urgency mapping"],
          icon: "📈"
        },
        {
          id: 2,
          title: "Capacity Planning",
          tag: "Factory Limit",
          desc: "Calculating if the factory can actually build it.",
          items: ["Line capacity calculation", "Manpower & Machine availability", "Bottleneck consideration"],
          icon: "🏭"
        },
        {
          id: 3,
          title: "Production Planning",
          tag: "Master Schedule",
          desc: "Creating the big picture of 'What and When'.",
          items: ["Monthly / Weekly / Daily plans", "Model mix strategy", "Shift & Resource allocation"],
          icon: "📅"
        },
        {
          id: 4,
          title: "Production Scheduling",
          tag: "Daily Execution",
          desc: "The specific 'Sequence' for the production lines.",
          items: ["Line-wise hourly schedule", "Sequence optimization", "Changeover (SMED) planning"],
          icon: "⏱️"
        },
        {
          id: 5,
          title: "Material Planning",
          tag: "Supply Chain",
          desc: "Ensuring all parts are ready before the line starts.",
          items: ["BOM based requirements", "Store & Purchase coordination", "Shortage identification (Critical)"],
          icon: "📦"
        },
        {
          id: 6,
          title: "WIP Control",
          tag: "Flow Management",
          desc: "Controlling the material sitting between stations.",
          items: ["WIP limit definition", "Congestion avoidance", "Bottleneck area monitoring"],
          icon: "⛓️"
        },
        {
          id: 7,
          title: "Output & Target Control",
          tag: "Performance Sync",
          desc: "Real-time tracking of Plan vs Actual.",
          items: ["Daily output monitoring", "Hourly production tracking", "Gap analysis & Recovery plan"],
          icon: "🎯"
        },
        {
          id: 8,
          title: "Dispatch Planning",
          tag: "Final Promise",
          desc: "Getting finished goods to the customer door.",
          items: ["Dispatch schedule sync", "Logistics & Truck coordination", "Commitment adherence (OTIF)"],
          icon: "🚛"
        },
        {
          id: 9,
          title: "Exception Handling",
          tag: "Crisis Control",
          desc: "Managing plan changes during emergencies.",
          items: ["Urgent order handling", "Breakdown impact plans", "Quality hold management"],
          icon: "⚠️"
        },
        {
          id: 10,
          title: "Data & Reports",
          tag: "Visibility",
          desc: "Providing the management with the truth.",
          items: ["MIS & KPI reports", "UPH / OEE tracking", "Review meetings (Morning/Weekly)"],
          icon: "📊"
        }
      ]
    },
    hi: {
      title: "प्लानिंग (PPC) हब",
      subtitle: "प्रोडक्शन प्लानिंग और कंट्रोल इंटेलिजेंस",
      backBtn: "वापस जाएं",
      hero: {
        question: "PPC क्या होता है?",
        desc: "PPC फैक्ट्री का 'दिमाग' है। यह ग्राहक की मांग और फैक्ट्री के साधनों (मैन, मशीन, मटेरियल) के बीच संतुलन बनाता है ताकि सही समय पर सामान डिलीवर हो सके।",
        mantra: "सही सामान, सही समय पर, सही मात्रा में।"
      },
      sections: [
        {
          id: 1,
          title: "डिमांड प्लानिंग",
          tag: "ग्राहक की ज़रूरत",
          desc: "समझना कि कस्टमर को असल में क्या और कब चाहिए।",
          items: ["कस्टमर ऑर्डर एनालिसिस", "फोरकास्ट और पक्के ऑर्डर की समीक्षा", "प्राथमिकता (Priority) तय करना"],
          icon: "📈"
        },
        {
          id: 2,
          title: "कैपेसिटी प्लानिंग",
          tag: "फैक्ट्री की क्षमता",
          desc: "यह हिसाब लगाना कि क्या फैक्ट्री वाकई उतना बना सकती है।",
          items: ["लाइन क्षमता की गणना", "मैनपावर और मशीन की उपलब्धता", "बॉटलनेक (रुकावट) पर ध्यान"],
          icon: "🏭"
        },
        {
          id: 3,
          title: "प्रोडक्शन प्लानिंग",
          tag: "मुख्य शेड्यूल",
          desc: "'क्या और कब' बनाना है, इसका पूरा खाका तैयार करना।",
          items: ["महीने, हफ्ते और दिन का प्लान", "मॉडल मिक्स (Model Mix) की योजना", "शिफ्ट और रिसोर्स मैनेजमेंट"],
          icon: "📅"
        },
        {
          id: 4,
          title: "प्रोडक्शन शेड्यूलिंग",
          tag: "डेली काम का क्रम",
          desc: "प्रोडक्शन लाइन के लिए सटीक 'सीक्वेंस' तय करना।",
          items: ["लाइन-वाइज घंटेवार शेड्यूल", "क्रम (Sequence) सुधारना", "चेंजओवर (मॉडल बदलना) प्लानिंग"],
          icon: "⏱️"
        },
        {
          id: 5,
          title: "मटेरियल प्लानिंग",
          tag: "सप्लाई चेन",
          desc: "सुनिश्चित करना कि लाइन शुरू होने से पहले सारा सामान मौजूद हो।",
          items: ["BOM आधारित मटेरियल की ज़रूरत", "स्टोर और परचेज के साथ तालमेल", "शॉर्टेज (सामान की कमी) की पहचान"],
          icon: "📦"
        },
        {
          id: 6,
          title: "WIP कंट्रोल",
          tag: "फ्लो मैनेजमेंट",
          desc: "प्रोसेस के बीच पड़े हुए माल (WIP) को कंट्रोल करना।",
          items: ["WIP लिमिट तय करना", "लाइन पर भीड़ (Congestion) रोकना", "बॉटलनेक एरिया की निगरानी"],
          icon: "⛓️"
        },
        {
          id: 7,
          title: "आउटपुट और टारगेट कंट्रोल",
          tag: "परफॉरमेंस चेक",
          desc: "प्लान बनाम असल उत्पादन (Actual) की निगरानी।",
          items: ["डेली आउटपुट की निगरानी", "हर घंटे का प्रोडक्शन ट्रैक करना", "गैप एनालिसिस और सुधार प्लान"],
          icon: "🎯"
        },
        {
          id: 8,
          title: "डिस्पैच प्लानिंग",
          tag: "अंतिम वादा",
          desc: "तैयार माल को सुरक्षित कस्टमर तक पहुँचाना।",
          items: ["डिस्पैच शेड्यूल सिंक करना", "लॉजिस्टिक्स और ट्रक का तालमेल", "डिलीवरी कमिटमेंट का पालन"],
          icon: "🚛"
        },
        {
          id: 9,
          title: "एक्सेप्शन हैंडलिंग",
          tag: "आपातकालीन स्थिति",
          desc: "इमरजेंसी में प्लान के बदलावों को संभालना।",
          items: ["अर्जेंट ऑर्डर को मैनेज करना", "ब्रेकडाउन का असर कम करना", "क्वालिटी होल्ड वाले माल का प्लान"],
          icon: "⚠️"
        },
        {
          id: 10,
          title: "डेटा और रिपोर्ट्स",
          tag: "पारदर्शिता",
          desc: "मैनेजमेंट को सही और सटीक जानकारी देना।",
          items: ["MIS और KPI रिपोर्ट्स", "UPH / OEE ट्रैकिंग", "रिव्यू मीटिंग्स (Morning/Weekly)"],
          icon: "📊"
        }
      ]
    }
  };

  const current = content[lang];

  if (selectedSectionId !== null) {
    return <PPCSectionDetail sectionId={selectedSectionId} onBack={() => setSelectedSectionId(null)} lang={lang} />;
  }

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-indigo-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_12px_indigo]"></div>
              <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono">Planning Node (PPC)</h3>
        </div>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-indigo-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Control</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-indigo-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-indigo-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">
            "🧠 {current.hero.mantra}"
         </div>
      </div>

      {/* 10 Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
         {current.sections.map((sec) => (
            <div 
              key={sec.id} 
              onClick={() => setSelectedSectionId(sec.id)}
              className="bg-slate-950/60 border border-white/5 p-6 rounded-[32px] hover:bg-slate-900 transition-all group flex flex-col gap-5 shadow-xl relative overflow-hidden h-full cursor-pointer hover:border-indigo-500/40"
            >
               <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-slate-900 border border-indigo-500/20 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                     {sec.icon}
                  </div>
                  <span className="text-indigo-500 font-black text-[8px] uppercase tracking-widest border border-indigo-500/30 px-3 py-1 rounded-full">{sec.tag}</span>
               </div>

               <div className="space-y-1">
                  <h5 className="text-white text-base font-black uppercase tracking-tight group-hover:text-indigo-400 transition-colors">0{sec.id}. {sec.title}</h5>
                  <p className="text-slate-500 text-[10px] font-bold leading-relaxed italic">"{sec.desc}"</p>
               </div>

               <div className="relative pt-2 flex items-center gap-2 text-indigo-500 text-[8px] font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                  Deep Dive <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </div>

               <div className="space-y-2 pt-4 border-t border-white/5 mt-auto">
                  {sec.items.map((item, idx) => (
                     <div key={idx} className="flex items-start gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-tight leading-tight">
                        • {item}
                     </div>
                  ))}
               </div>
            </div>
         ))}
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-[0_0_12px_indigo] animate-pulse"></span>
                PPC Engine: Synchronized
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">PPC Framework v5.1 // Industrial Execution Node</div>
      </div>
    </div>
  );
};

export default PlanningDetail;

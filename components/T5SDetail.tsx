
import React, { useState } from 'react';
import { Language } from '../types';

interface T5SDetailProps {
  onBack: () => void;
  lang: Language;
}

const T5SDetail: React.FC<T5SDetailProps> = ({ onBack, lang }) => {
  const [activeTab, setActiveTab] = useState<'overview' | '5s' | '3r' | 'vm' | 'map'>('overview');

  const content = {
    en: {
      title: "Total 5S (T5S)",
      subtitle: "Advanced Quality Standard",
      backBtn: "Back to Production",
      tabs: {
        overview: "T5S Overview",
        pillars: "7S Pillars",
        methodology: "3R Methodology",
        visual: "Visual Control",
        logic: "Logic Flow"
      },
      overview: {
        title: "T5S is the total management of the shop floor ecosystem.",
        quote: "It is the holistic approach to improve, maintain and manage not only the 5S activity but also 3R and Visual Management.",
        alert: "Standardization & Safety are the breathing of a healthy factory."
      },
      fiveS: [
        { name: 'Sort', def: 'Clearly separate necessary things from unnecessary ones and abandon the latter.', color: 'cyan' },
        { name: 'Systematic Arrangement', def: 'Neatly arrange & identify things for ease of use.', color: 'cyan' },
        { name: 'Sweeping', def: 'Always clean up, to maintain tidiness and cleanliness.', color: 'cyan' },
        { name: 'Standardize', def: 'Constantly maintain the 3S mentioned before (Sort, Syst. Arrangement, Sweeping).', color: 'cyan' },
        { name: 'Sustain', def: 'Have workers a habit of always conforming to rules.', color: 'cyan' },
        { name: 'Safety', def: 'To proactively identify and eliminate hazards, ensuring a secure environment where every worker returns home safely.', color: 'orange' },
        { name: 'Saving', def: 'To optimize the consumption of resources—energy, materials, and time—while minimizing hidden operational costs.', color: 'emerald' },
      ],
      threeR: {
        title: "The Golden Rule of Material Flow",
        quote: "Total identification removes the waste of searching and arranging.",
        items: [
          { title: 'Right Place', desc: 'Eliminate the waste of finding things by making it clear where things should be put.' },
          { title: 'Right Quantity', desc: 'Reducing the waste of inventory by optimizing the number of stocks and WIP.' },
          { title: 'Right Container', desc: 'Reducing the waste of transportation by standardizing the container.' },
        ]
      },
      vm: {
        title: "SEE STATUS AT A GLANCE",
        quote: "Visual management is about making situations clear so anyone can recognize issues immediately.",
        tools: [
          'Mark the location & position of materials',
          'Mark Takt Time',
          'Production capacity per hour status',
          'Announce standard work guidelines',
          'Sign boards (Right position, component list)',
          'Alarms (Andon system)',
          'Mark colors (Color coding)'
        ]
      }
    },
    hi: {
      title: "टोटल 5S (T5S)",
      subtitle: "एडवांस्ड क्वालिटी स्टैंडर्ड",
      backBtn: "प्रोडक्शन पर वापस जाएं",
      tabs: {
        overview: "T5S ओवरव्यू",
        pillars: "7S पिलर्स",
        methodology: "3R तरीका",
        visual: "विजुअल कंट्रोल",
        logic: "प्रोसेस फ्लो"
      },
      overview: {
        title: "T5S शॉप फ्लोर को मैनेज करने का पूरा तरीका है।",
        quote: "यह सिर्फ 5S नहीं, बल्कि 3R और विजुअल मैनेजमेंट को भी सुधारने और बनाए रखने का तरीका है।",
        alert: "स्टैंडर्ड और सेफ्टी ही एक अच्छी फैक्ट्री की पहचान हैं।"
      },
      fiveS: [
        { name: 'Sort (छांटना)', def: 'काम की चीज़ें रखें और फालतू सामान को तुरंत हटा दें।', color: 'cyan' },
        { name: 'Set (सजाना)', def: 'सामान को सही जगह पर तरीके से रखें ताकि उसे ढूंढना आसान हो।', color: 'cyan' },
        { name: 'Shine (सफाई)', def: 'हमेशा सफाई रखें ताकि फ्लोर और मशीनें चमकदार रहें।', color: 'cyan' },
        { name: 'Standardize', def: 'सफाई और अरेंजमेंट को एक नियम की तरह हमेशा फॉलो करें।', color: 'cyan' },
        { name: 'Sustain (अनुशासन)', def: 'नियमों को अपनी आदत बना लें ताकि सिस्टम कभी खराब न हो।', color: 'cyan' },
        { name: 'Safety (सुरक्षा)', def: 'खतरों को पहचानें और हटा दें, ताकि हर वर्कर सुरक्षित रहे।', color: 'orange' },
        { name: 'Saving (बचत)', def: 'बिजली, पानी और सामान की बचत करें ताकि फालतू खर्चा कम हो।', color: 'emerald' },
      ],
      threeR: {
        title: "मटेरियल फ्लो का सुनहरा नियम",
        quote: "सही पहचान होने से ढूंढने और सामान सजाने में समय बर्बाद नहीं होता।",
        items: [
          { title: 'Right Place (सही जगह)', desc: 'हर चीज़ के लिए एक जगह तय करें ताकि उसे ढूंढना न पड़े।' },
          { title: 'Right Quantity (सही मात्रा)', desc: 'सिर्फ उतना ही सामान रखें जितना काम के लिए ज़रूरी हो।' },
          { title: 'Right Container (सही डिब्बा)', desc: 'सामान के हिसाब से सही डिब्बा चुनें ताकि लाने-ले जाने में आसानी हो।' },
        ]
      },
      vm: {
        title: "एक नज़र में स्टेटस देखें",
        quote: "विजुअल मैनेजमेंट का मतलब है कि फ्लोर देखकर तुरंत समझ आ जाए कि सब ठीक है या नहीं।",
        tools: [
          'सामान रखने की जगह मार्क करें',
          'Takt Time का निशान लगाएं',
          'हर घंटे का प्रोडक्शन स्टेटस दिखाएं',
          'काम के सही नियम (SOP) बोर्ड पर लगाएं',
          'साइन बोर्ड (नाम और लिस्ट) लगाएं',
          'खतरे या मदद के लिए अलार्म (Andon) लगाएं',
          'कलर कोडिंग (रंगों का इस्तेमाल) करें'
        ]
      }
    }
  };

  const current = content[lang];

  return (
    <div className="flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-700 pb-12 max-w-6xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 border-b border-white/20 pb-6">
        <div>
           <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
              <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter italic leading-none drop-shadow-xl">{current.title}</h3>
        </div>
        <button 
          onClick={onBack}
          className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg flex items-center gap-3 transform hover:-translate-y-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </button>
      </div>

      {/* Nav Tabs */}
      <div className="flex flex-wrap gap-2 bg-slate-900/80 p-2 rounded-xl border border-white/20 backdrop-blur-xl shadow-lg">
        {[
          { id: 'overview', label: current.tabs.overview },
          { id: '5s', label: current.tabs.pillars },
          { id: '3r', label: current.tabs.methodology },
          { id: 'vm', label: current.tabs.visual },
          { id: 'map', label: current.tabs.logic },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-5 py-2.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all duration-300 ${
              activeTab === tab.id 
              ? 'bg-cyan-500 text-white shadow-md ring-1 ring-cyan-400/50' 
              : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="min-h-[400px]">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-in slide-in-from-right-6 duration-500">
            <div className="space-y-6">
              <div className="bg-slate-800/80 p-8 rounded-2xl border border-white/10 backdrop-blur-2xl relative overflow-hidden shadow-xl">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px]"></div>
                <h4 className="text-cyan-400 font-black text-[9px] uppercase tracking-[0.4em] mb-4">{lang === 'hi' ? 'रणनीतिक परिभाषा' : 'Strategic Definition'}</h4>
                <p className="text-white text-2xl font-black leading-tight mb-6 italic drop-shadow-md">
                  {current.overview.title}
                </p>
                <div className="bg-white/5 p-5 rounded-xl border-l-4 border-cyan-500 shadow-inner">
                   <p className="text-slate-100 text-base font-bold leading-relaxed italic">
                    "{current.overview.quote}"
                   </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl shadow-md backdrop-blur-md">
                 <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg">!</div>
                 <p className="text-white text-sm font-black tracking-tight leading-snug uppercase">{current.overview.alert}</p>
              </div>
            </div>

            <div className="relative flex justify-center py-6">
               <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
                  <div className="absolute inset-0 border-[2px] border-cyan-500/20 rounded-full animate-[spin_30s_linear_infinite]"></div>
                  
                  <div className="relative z-10 w-36 h-36 bg-slate-900 border-[4px] border-cyan-500 rounded-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.4)] group hover:scale-105 transition-transform duration-500">
                    <span className="text-4xl font-black text-white italic drop-shadow-lg">T5S</span>
                    <span className="text-[8px] font-bold text-cyan-400 tracking-[0.2em] uppercase mt-1">{lang === 'hi' ? 'मुख्य इंजन' : 'Core Engine'}</span>
                  </div>

                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-24 h-24 bg-slate-800 border-2 border-white/20 rounded-2xl flex flex-col items-center justify-center shadow-xl rotate-12">
                    <span className="text-cyan-400 font-black text-xl italic">7S</span>
                    <span className="text-[7px] font-black text-white/40 uppercase mt-1 tracking-widest">Base</span>
                  </div>
                  <div className="absolute bottom-2 left-0 w-24 h-24 bg-slate-800 border-2 border-white/20 rounded-2xl flex flex-col items-center justify-center shadow-xl -rotate-12">
                    <span className="text-cyan-400 font-black text-xl italic">3R</span>
                    <span className="text-[7px] font-black text-white/40 uppercase mt-1 tracking-widest">Material</span>
                  </div>
                  <div className="absolute bottom-2 right-0 w-24 h-24 bg-slate-800 border-2 border-white/20 rounded-2xl flex flex-col items-center justify-center shadow-xl rotate-6 p-2 text-center">
                    <span className="text-cyan-400 font-black text-sm italic leading-none uppercase">Visual</span>
                    <span className="text-[7px] font-black text-white/40 uppercase mt-1 tracking-widest">Control</span>
                  </div>
               </div>
            </div>
          </div>
        )}

        {activeTab === '5s' && (
          <div className="space-y-6 animate-in slide-in-from-right-6 duration-500">
            <div className="bg-slate-800/80 p-6 border border-white/10 rounded-2xl shadow-xl backdrop-blur-xl">
                <p className="text-white text-xl font-black leading-tight italic text-center drop-shadow-md uppercase">
                    {lang === 'hi' ? '"5S से 7S तक का सफर"' : '"Journey from 5S to 7S"'}
                </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {current.fiveS.map((item, idx) => (
                <div key={idx} className={`group flex flex-col md:flex-row md:items-center bg-slate-800/40 border p-6 rounded-2xl transition-all gap-6 shadow-lg backdrop-blur-md ${
                  item.color === 'orange' ? 'border-orange-500/30 hover:bg-orange-500/5' : 
                  item.color === 'emerald' ? 'border-emerald-500/30 hover:bg-emerald-500/5' :
                  'border-white/5 hover:bg-slate-700/60'
                }`}>
                   <div className="w-full md:w-56 flex-shrink-0">
                      <div className={`text-[8px] font-black uppercase tracking-[0.4em] mb-1 ${
                        item.color === 'orange' ? 'text-orange-400' : 
                        item.color === 'emerald' ? 'text-emerald-400' :
                        'text-cyan-400'
                      }`}>Pillar 0{idx+1}</div>
                      <div className="text-2xl font-black text-white uppercase italic tracking-tighter transition-colors drop-shadow-md">{item.name}</div>
                   </div>
                   <div className={`h-[1px] md:h-10 w-full md:w-[1px] transition-colors ${
                      item.color === 'orange' ? 'bg-orange-500/30' : 
                      item.color === 'emerald' ? 'bg-emerald-500/30' :
                      'bg-cyan-500/20'
                   }`}></div>
                   <div className="text-slate-200 text-sm md:text-base font-bold leading-relaxed">{item.def}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === '3r' && (
          <div className="animate-in slide-in-from-right-6 duration-500 flex flex-col gap-8">
            <div className="bg-cyan-600/10 border-l-4 border-cyan-400 p-8 rounded-r-2xl shadow-xl backdrop-blur-xl">
               <h4 className="text-cyan-300 font-black text-[9px] uppercase tracking-[0.5em] mb-2">{current.threeR.title}</h4>
               <p className="text-white text-2xl font-black leading-tight italic drop-shadow-md">
                  "{current.threeR.quote}"
               </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {current.threeR.items.map((r, idx) => (
                <div key={idx} className="bg-slate-800/50 p-8 rounded-[32px] border border-white/10 hover:border-cyan-400/30 transition-all group relative overflow-hidden shadow-xl backdrop-blur-md">
                   <div className="absolute top-0 right-0 p-4 text-5xl font-black text-white/5 transition-colors select-none">0{idx+1}</div>
                   <h5 className="text-xl font-black text-white uppercase italic mb-6 group-hover:text-cyan-400 transition-colors tracking-tighter drop-shadow-md">{r.title}</h5>
                   <p className="text-slate-200 text-sm font-bold leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'vm' && (
          <div className="animate-in slide-in-from-right-6 duration-500 grid grid-cols-1 lg:grid-cols-2 gap-8">
             <div className="space-y-6">
                <div className="bg-slate-800/80 p-8 rounded-2xl border border-white/10 shadow-xl backdrop-blur-xl">
                   <h4 className="text-cyan-400 font-black text-[9px] uppercase tracking-[0.4em] mb-4">{lang === 'hi' ? 'विजुअल मैनेजमेंट' : 'Visual Intelligence'}</h4>
                   <p className="text-white text-3xl font-black uppercase italic tracking-tighter mb-6 leading-none drop-shadow-lg">
                      {current.vm.title}
                   </p>
                   <div className="bg-cyan-500/10 p-5 rounded-xl border-l-4 border-cyan-400">
                     <p className="text-slate-100 text-sm font-bold leading-relaxed">
                        {current.vm.quote}
                     </p>
                   </div>
                </div>
             </div>
             <div className="bg-slate-900/90 border border-cyan-400/20 rounded-[32px] p-8 shadow-xl relative overflow-hidden backdrop-blur-3xl">
                <h5 className="text-cyan-400 text-[9px] font-black uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-cyan-400"></span>
                  {lang === 'hi' ? 'टूल्स' : 'Toolset'}
                </h5>
                <ul className="space-y-3 relative z-10">
                   {current.vm.tools.map((tool, i) => (
                     <li key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-400/30 hover:bg-cyan-500/10 transition-all group shadow-sm">
                        <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 font-black text-sm group-hover:bg-cyan-500 group-hover:text-white transition-all">
                           {i+1}
                        </span>
                        <span className="text-slate-100 font-black text-sm uppercase tracking-tight group-hover:text-white transition-colors">{tool}</span>
                     </li>
                   ))}
                </ul>
             </div>
          </div>
        )}

        {activeTab === 'map' && (
          <div className="animate-in zoom-in-95 duration-700 bg-slate-900/95 p-10 rounded-[32px] border border-white/10 shadow-2xl overflow-x-auto backdrop-blur-3xl">
             <div className="min-w-[800px] flex flex-col gap-10 items-center py-6">
                <div className="px-6 py-3 bg-cyan-500 rounded-full text-white font-black text-center uppercase tracking-[0.3em] shadow-lg text-sm italic">{lang === 'hi' ? 'अनुशासन' : 'Sustain'}</div>
                <div className="w-[2px] h-10 bg-gradient-to-b from-cyan-400 to-white/10"></div>

                <div className="flex gap-16 items-start">
                   <div className="flex flex-col items-center gap-6">
                      <div className="w-32 h-14 bg-slate-800 border-2 border-white/20 rounded-xl flex items-center justify-center text-white font-black uppercase text-sm italic">{lang === 'hi' ? 'छांटना' : 'Sort'}</div>
                      <div className="flex gap-4">
                         <div className="px-3 py-2 bg-red-600/30 border border-red-500/50 rounded-lg text-red-200 text-[8px] font-black uppercase text-center">{lang === 'hi' ? 'फेंकें' : 'Discard'}</div>
                         <div className="px-3 py-2 bg-yellow-600/30 border border-yellow-500/50 rounded-lg text-yellow-200 text-[8px] font-black uppercase text-center">{lang === 'hi' ? 'स्टोर' : 'Store'}</div>
                      </div>
                   </div>

                   <div className="flex flex-col items-center gap-6">
                      <div className="w-32 h-14 bg-slate-800 border-2 border-cyan-400/40 rounded-xl flex items-center justify-center text-white font-black uppercase text-sm italic">{lang === 'hi' ? 'सजाना' : 'Set'}</div>
                      <div className="w-24 h-24 bg-cyan-500/10 border-2 border-cyan-400 rounded-full flex items-center justify-center text-cyan-200 font-black text-center uppercase text-base shadow-lg ring-4 ring-cyan-400/10">3R</div>
                   </div>

                   <div className="flex flex-col items-center gap-6">
                      <div className="w-32 h-14 bg-slate-800 border-2 border-white/20 rounded-xl flex items-center justify-center text-white font-black uppercase text-sm italic">{lang === 'hi' ? 'सफाई' : 'Shine'}</div>
                      <div className="px-5 py-2.5 bg-cyan-600/20 border border-cyan-400/40 rounded-lg text-cyan-100 text-[8px] font-black uppercase text-center">{lang === 'hi' ? 'जड़ सुधारें' : 'Root Fix'}</div>
                   </div>
                </div>

                <div className="w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent relative my-6">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 bg-slate-900 text-cyan-400 text-[9px] font-black uppercase tracking-[0.5em] shadow-lg py-2 border border-cyan-400/20 rounded-full italic">{lang === 'hi' ? 'स्टैंडर्ड' : 'Standardize'}</div>
                </div>

                <div className="px-6 py-3 bg-slate-800 border-2 border-cyan-400 text-white font-black text-center uppercase tracking-[0.3em] rounded-xl shadow-lg text-sm italic">{lang === 'hi' ? 'नियम' : 'Standardize'}</div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default T5SDetail;

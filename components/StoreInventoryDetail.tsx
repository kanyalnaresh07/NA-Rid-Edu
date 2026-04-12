
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import ABC_VEDDetail from './ABC_VEDDetail';
import ERPPhysicalDetail from './ERPPhysicalDetail';
import RawMaterialHandlingDetail from './RawMaterialHandlingDetail';
import WIPDetail from './WIPDetail';
import FGDetail from './FGDetail';
import FIFOLIFODetail from './FIFOLIFODetail';

interface StoreInventoryDetailProps {
  onBack: () => void;
  lang: Language;
}

const StoreInventoryDetail: React.FC<StoreInventoryDetailProps> = ({ onBack, lang }) => {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const [showAbcVedDetail, setShowAbcVedDetail] = useState(false);
  const [showErpPhysicalDetail, setShowErpPhysicalDetail] = useState(false);
  const [showRawMaterialDetail, setShowRawMaterialDetail] = useState(false);
  const [showWIPDetail, setShowWIPDetail] = useState(false);
  const [showFGDetail, setShowFGDetail] = useState(false);
  const [showFifoLifoDetail, setShowFifoLifoDetail] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedSection, showAbcVedDetail, showErpPhysicalDetail, showRawMaterialDetail, showWIPDetail, showFGDetail, showFifoLifoDetail]);

  const content = {
    en: {
      title: "Store / Inventory Hub",
      subtitle: "Material Safety & Logistics",
      backBtn: "Exit Hub",
      backToList: "Back to List",
      hero: {
        question: "What is a Store / Warehouse?",
        desc: "The department that manages Raw material, WIP, and Finished Goods in the right quantity and condition.",
        mantra: "The Home of Material + Control System."
      },
      objectives: {
        title: "Main Goals",
        list: ["Stop shortages", "No extra stock", "Track everything", "Safe storage"]
      },
      sections: [
        { 
          id: 1, title: "Raw Material Handling", tag: "Input", desc: "Checking and storing incoming parts.", icon: "📥", color: "amber",
          points: ["Unloading from truck", "Making GRN record", "Quality Check (IQC)", "Storing in OK area"]
        },
        { 
          id: 2, title: "WIP (Work In Process)", tag: "Flow", desc: "Managing parts between machines.", icon: "🏭", color: "orange",
          points: ["Pre/Post Process Bins", "Line-side buffer control", "Stagnant stock monitoring", "Moving parts forward"]
        },
        { 
          id: 3, title: "Finished Goods (FG)", tag: "Output", desc: "Storing products ready for customers.", icon: "📦", color: "emerald",
          points: ["Model-wise storage", "Safe stacking height", "Dispatch staging", "Quality Pass stock"]
        },
        { 
          id: 4, title: "Inventory Control", tag: "Accuracy", desc: "Maintaining correct stock levels.", icon: "📊", color: "blue",
          points: ["Min-Max stock levels", "ABC / VED Analysis", "ERP vs Physical match", "Safety stock buffer"]
        },
        { 
          id: 5, title: "FIFO / LIFO Logic", tag: "Rotation", desc: "Controlling material consumption sequence.", icon: "🔄", color: "purple",
          points: ["First In, First Out", "Last In, First Out", "Shelf-life management", "Old stock avoidance"]
        }
      ],
      inventoryControl: {
        title: "04. What is Inventory Control?",
        desc: "Inventory Control means maintaining the right balance between Demand and Available Stock.",
        goals: ["No material shortage", "No blocked money in excess stock"],
        pillarsTitle: "Key Elements of Inventory Control",
        pillars: [
          { id: 1, name: "Min–Max Stock Levels", desc: "Defining minimum and maximum stock for every item.", use: "For automatic reorder and planning." },
          { id: 2, name: "ABC / VED Analysis", desc: "Categorizing inventory based on value and criticality.", use: "To decide focus and priority.", clickable: true, type: 'abc' },
          { id: 3, name: "ERP vs Physical Match", desc: "Matching system stock with actual physical stock.", use: "To avoid wrong planning, theft, or mix-ups.", clickable: true, type: 'erp' },
          { id: 4, name: "Safety Stock Buffer", desc: "Extra stock maintained for emergencies or delays.", use: "To prevent line stoppages." }
        ]
      }
    },
    hi: {
      title: "स्टोर / इन्वेंटरी हब",
      subtitle: "मटेरियल सुरक्षा और लॉजिस्टिक्स",
      backBtn: "हब से बाहर",
      backToList: "लिस्ट पर वापस",
      hero: {
        question: "स्टोर / वेयरहाउस क्या है?",
        desc: "वह विभाग जो कच्चे माल, WIP और तैयार माल को सही मात्रा और सही सलामत रखने की जिम्मेदारी लेता है।",
        mantra: "मटेरियल का घर + कंट्रोल सिस्टम।"
      },
      objectives: {
        title: "मुख्य लक्ष्य",
        list: ["सामान की कमी रोकना", "फालतू स्टॉक न बढ़ाना", "हर पार्ट का हिसाब", "सुरक्षित स्टोरेज"]
      },
      sections: [
        { 
          id: 1, title: "Raw Material Handling", tag: "इनपुट", desc: "आने वाले माल की जांच और उसे रखना।", icon: "📥", color: "amber",
          points: ["गाड़ी से माल उतारना", "GRN (रिकॉर्ड) बनाना", "क्वालिटी चेक (IQC)", "OK एरिया में रखना"]
        },
        { 
          id: 2, title: "WIP (Work In Process)", tag: "फ्लो", desc: "मशीनों के बीच पड़े माल का मैनेजमेंट।", icon: "🏭", color: "orange",
          points: ["मशीन से पहले/बाद के बिन", "लाइन के पास कम स्टॉक", "रुके माल की निगरानी", "प्रोसेस मूवमेंट"]
        },
        { 
          id: 3, title: "Finished Goods (FG)", tag: "आउटपुट", desc: "कस्टमर के लिए तैयार माल का स्टोर।", icon: "📦", color: "emerald",
          points: ["मॉडल के हिसाब से रैक", "सुरक्षित ऊंचाई तक माल", "डिस्पैच की तैयारी", "सिर्फ पास माल"]
        },
        { 
          id: 4, title: "Inventory Control", tag: "सटीकता", desc: "स्टॉक का सही बैलेंस बनाए रखना।", icon: "📊", color: "blue",
          points: ["Min-Max स्टॉक लेवल", "ABC / VED एनालिसिस", "ERP बनाम असली स्टॉक", "सेफ्टी स्टॉक (बैकअप)"]
        },
        { 
          id: 5, title: "FIFO / LIFO लॉजिक", tag: "रोटेशन", desc: "मटेरियल इस्तेमाल करने का सही क्रम।", icon: "🔄", color: "purple",
          points: ["First In, First Out", "Last In, First Out", "एक्सपायरी मैनेजमेंट", "पुराना स्टॉक रोकना"]
        }
      ],
      inventoryControl: {
        title: "Inventory Control क्या होता है?",
        desc: "Inventory Control का मतलब है: Demand aur available stock ke beech sahi balance maintain karna, taaki:",
        goals: ["material shortage na ho", "excess stock me paisa block na ho"],
        pillarsTitle: "Inventory Control के Key Elements",
        pillars: [
          { id: 1, name: "Min–Max Stock Levels", desc: "Har item ke liye minimum aur maximum stock define karna.", use: "Automatic reorder aur planning ke liye." },
          { id: 2, name: "ABC / VED Analysis", desc: "Inventory ko importance ke hisaab se categorize karna.", use: "Focus & priority decide karna.", clickable: true, type: 'abc' },
          { id: 3, name: "ERP vs Physical Match", desc: "System stock aur actual stock ka matching.", use: "Wrong planning, theft, mix-up avoid karna.", clickable: true, type: 'erp' },
          { id: 4, name: "Safety Stock Buffer", desc: "Emergency ke liye extra stock.", use: "Line stoppage se bachav." }
        ]
      }
    }
  };

  const current = content[lang];

  const handleSectionClick = (id: number) => {
    if (id === 1) setShowRawMaterialDetail(true);
    else if (id === 2) setShowWIPDetail(true);
    else if (id === 3) setShowFGDetail(true);
    else if (id === 5) setShowFifoLifoDetail(true);
    else setSelectedSection(id);
  };

  if (showAbcVedDetail) return <ABC_VEDDetail onBack={() => setShowAbcVedDetail(false)} lang={lang} />;
  if (showErpPhysicalDetail) return <ERPPhysicalDetail onBack={() => setShowErpPhysicalDetail(false)} lang={lang} />;
  if (showRawMaterialDetail) return <RawMaterialHandlingDetail onBack={() => setShowRawMaterialDetail(false)} lang={lang} />;
  if (showWIPDetail) return <WIPDetail onBack={() => setShowWIPDetail(false)} lang={lang} />;
  if (showFGDetail) return <FGDetail onBack={() => setShowFGDetail(false)} lang={lang} />;
  if (showFifoLifoDetail) return <FIFOLIFODetail onBack={() => setShowFifoLifoDetail(false)} lang={lang} />;

  if (selectedSection === 4) {
    return (
      <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-12 max-w-7xl mx-auto px-4 md:px-8 py-6 relative">
        <div className="animate-in slide-in-from-right-4 duration-500 space-y-10">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/40 rounded-3xl flex items-center justify-center text-4xl shadow-xl">📊</div>
              <div>
                <h3 className="text-white text-2xl md:text-5xl font-black uppercase tracking-tighter italic">{current.inventoryControl.title}</h3>
                <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.6em] mt-2">Accuracy Matrix / Module 04</p>
              </div>
            </div>
            <button onClick={() => setSelectedSection(null)} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest border border-white/10 transition-all flex items-center gap-3">
              <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
              {current.backToList}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-slate-900/60 p-10 rounded-[48px] border border-white/5 shadow-2xl relative overflow-hidden">
              <h4 className="text-white text-xl font-black uppercase mb-6 border-b border-white/10 pb-2">{lang === 'hi' ? 'परिभाषा (Definition)' : 'Meaning'}</h4>
              <p className="text-slate-200 text-xl md:text-3xl font-bold leading-relaxed italic">"{current.inventoryControl.desc}"</p>
              <div className="mt-8 flex flex-wrap gap-4">
                {current.inventoryControl.goals.map((goal, i) => (
                  <div key={i} className="bg-blue-500/10 border border-blue-500/20 px-6 py-3 rounded-2xl text-blue-300 text-sm font-black uppercase tracking-widest flex items-center gap-3">
                    <span className="text-emerald-500 text-xl">✔</span> {goal}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 bg-blue-950/20 border border-blue-500/20 p-10 rounded-[48px] shadow-2xl flex flex-col justify-center items-center text-center gap-6 backdrop-blur-xl">
              <div className="w-24 h-24 rounded-full border-4 border-dashed border-blue-500/30 flex items-center justify-center shadow-[0_0_20px_blue]">
                <span className="text-5xl">🎯</span>
              </div>
              <h5 className="text-white text-2xl font-black uppercase tracking-tighter italic">{lang === 'hi' ? 'सही बैलेंस' : 'The Balance'}</h5>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em]">
                {lang === 'hi' ? 'सटीक स्टॉक = पैसों की बचत + 100% उपलब्धता' : 'Stock Accuracy = Cost Savings + 100% Availability'}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.5em] whitespace-nowrap">{current.inventoryControl.pillarsTitle}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {current.inventoryControl.pillars.map((p) => (
                <div 
                  key={p.id} 
                  onClick={() => {
                    if (p.clickable && p.type === 'abc') setShowAbcVedDetail(true);
                    if (p.clickable && p.type === 'erp') setShowErpPhysicalDetail(true);
                  }}
                  className={`bg-slate-950/60 border border-white/5 p-8 rounded-[40px] transition-all group flex flex-col gap-5 shadow-xl relative overflow-hidden h-full ${p.clickable ? 'cursor-pointer border-blue-500/40 hover:bg-slate-900' : ''}`}
                >
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-900 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 font-black text-xl shadow-lg group-hover:scale-110 transition-transform">0{p.id}</div>
                      <h5 className="text-white font-black text-lg md:text-xl uppercase tracking-tight group-hover:text-blue-400 transition-colors">{p.name}</h5>
                    </div>
                    {p.clickable && <span className="text-[7px] bg-blue-500/20 px-3 py-1 rounded-full text-blue-400 uppercase font-black animate-pulse">Deep Dive</span>}
                  </div>
                  <p className="text-slate-400 text-sm font-bold leading-relaxed italic">"{p.desc}"</p>
                  <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-xl mt-auto">
                    <span className="text-[8px] font-black text-blue-400 uppercase block mb-1">📌 Use / उपयोग:</span>
                    <p className="text-white text-[11px] font-bold italic leading-tight">{p.use}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedSection !== null) {
     return <div className="text-white p-20 text-center uppercase font-black">Module Under Development... <button onClick={() => setSelectedSection(null)} className="underline block mx-auto mt-4">Go Back</button></div>;
  }

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-12 max-w-7xl mx-auto px-4 md:px-8 py-6 relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse shadow-[0_0_12px_orange]"></div>
              <span className="text-amber-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight font-mono leading-none">Store Hub</h3>
        </div>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 border border-white/10 self-start sm:self-center">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
          {current.backBtn}
        </button>
      </div>

      <div className="bg-slate-900 border border-amber-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-7xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Inventory</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-amber-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-amber-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">
            "🏢 {current.hero.mantra}"
         </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {current.sections.map((sec) => (
            <div 
              key={sec.id} 
              onClick={() => handleSectionClick(sec.id)}
              className={`bg-slate-950/60 border border-white/5 p-7 rounded-[40px] transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden h-full border-t-4 border-t-${sec.color}-500/50 cursor-pointer hover:bg-slate-900 hover:border-amber-500/30 ring-1 ring-white/5`}
            >
              <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 bg-slate-900 border border-${sec.color}-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>{sec.icon}</div>
                  <span className={`text-${sec.color}-500 font-black text-[9px] uppercase tracking-widest border border-${sec.color}-500/30 px-3 py-1 rounded-full`}>{sec.tag}</span>
              </div>

              <div className="space-y-2">
                  <h5 className="text-white text-xl font-black uppercase tracking-tight leading-tight group-hover:text-amber-400">0{sec.id}. {sec.title}</h5>
                  <p className="text-slate-500 text-xs font-bold leading-relaxed italic">"{sec.desc}"</p>
              </div>

              <div className="flex items-center gap-2 text-amber-500 text-[8px] font-black uppercase tracking-widest animate-pulse group-hover:text-white transition-colors">
                {lang === 'hi' ? 'विस्तार से देखें' : 'Deep Dive'} <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7" /></svg>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/5">
                  {sec.points.map((p, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 bg-${sec.color}-500/40`}></div>
                        <span className="text-slate-300 text-[10px] font-bold uppercase tracking-tight leading-tight">{p}</span>
                    </div>
                  ))}
              </div>
              
              <div className="mt-auto h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className={`h-full bg-${sec.color}-500/30 w-1/2`}></div>
              </div>
            </div>
         ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-[32px] border border-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-10">
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-amber-500 rounded-full shadow-[0_0_12px_orange] animate-pulse"></span>
                Inventory System: Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_12px_emerald]"></span>
                Rotation Engine: Verified
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Archive Node v10.5</div>
      </div>
    </div>
  );
};

export default StoreInventoryDetail;

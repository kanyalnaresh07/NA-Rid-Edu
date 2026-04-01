
import React, { useState } from 'react';
import { Language } from '../types';
import PPAPElementDeepDive from './PPAPElementDeepDive';

interface APQPPPAPDetailProps {
  onBack: () => void;
  lang: Language;
}

const APQPPPAPDetail: React.FC<APQPPPAPDetailProps> = ({ onBack, lang }) => {
  const [activeTab, setActiveTab] = useState<'apqp' | 'ppap'>('apqp');
  const [selectedPhase, setSelectedPhase] = useState<number>(0);
  const [selectedElementIndex, setSelectedElementIndex] = useState<number | null>(null);

  const content = {
    en: {
      title: "APQP & PPAP Excellence",
      subtitle: "Strategic Product Launch & Approval",
      backBtn: "Back to IPQC",
      tabs: ["APQP (The Roadmap)", "PPAP (The Proof)"],
      apqp: {
        title: "APQP: Advanced Product Quality Planning",
        mantra: "A full roadmap for quality before making the product.",
        definition: "A structured planning method used to understand customer requirements and validate the process to ensure a minimum-risk launch.",
        phases: [
          {
            title: "Phase 1: Planning",
            focus: "What does the customer want?",
            points: ["Voice of Customer (VOC)", "Feasibility Study", "Risk Identification", "Project Timing Plan"],
            output: ["Project Plan", "Feasibility Commitment"]
          },
          {
            title: "Phase 2: Product Design",
            focus: "Is the design correct?",
            points: ["Design Review", "DFMEA Analysis", "Material Selection", "Prototype Build & Test"],
            output: ["Approved Drawing", "DFMEA Report", "Prototype Test Results"]
          },
          {
            title: "Phase 3: Process Design",
            focus: "How will it be built?",
            points: ["Process Flow Diagram", "PFMEA (Process Risk)", "Control Plan (Trial)", "Tooling Readiness"],
            output: ["PFMEA", "Control Plan", "SOP / WI"]
          },
          {
            title: "Phase 4: Validation",
            focus: "Is the process stable?",
            points: ["Trial Production", "Dimensional/Functional Test", "MSA & SPC Studies", "PPAP Submission"],
            output: ["PPAP Approved", "Validation Reports"]
          },
          {
            title: "Phase 5: Launch & Improvement",
            focus: "Continuous Performance",
            points: ["Production Control Plan", "SPC Monitoring", "Customer Feedback", "Kaizen Actions"],
            output: ["Stable Production", "Improvement Records"]
          }
        ]
      },
      ppap: {
        title: "PPAP: Production Part Approval Process",
        mantra: "Proof that the APQP plan is actually working.",
        definition: "A formal approval process where the supplier proves that their process can consistently produce parts according to customer drawings.",
        gridLabel: "The 18 Elements of PPAP (Click for Detailed Page)",
        elements: [
          "Design Record", "Engineering Change Docs", "Customer Engineering Approval", "DFMEA", "Process Flow Diagram",
          "PFMEA", "Control Plan", "MSA Studies", "Dimensional Results", "Material / Performance Tests",
          "Initial Process Studies", "Qualified Lab Docs", "Appearance Approval (AAR)", "Sample Production Parts",
          "Master Sample", "Checking Aids", "Customer Specific Req.", "PSW (Part Submission Warrant)"
        ],
        levels: [
          { l: "Level 1", d: "PSW Only" },
          { l: "Level 2", d: "PSW + Limited Docs" },
          { l: "Level 3", d: "PSW + All Docs (Standard)" },
          { l: "Level 4", d: "Customer Defined" },
          { l: "Level 5", d: "Site Audit + Docs" }
        ]
      }
    },
    hi: {
      title: "APQP और PPAP मास्टरक्लास",
      subtitle: "प्रोडक्ट लॉन्च और अप्रूवल की रणनीति",
      backBtn: "IPQC पर वापस जाएं",
      tabs: ["APQP (रोडमैप)", "PPAP (सबूत)"],
      apqp: {
        title: "APQP: एडवांस प्रोडक्ट क्वालिटी प्लानिंग",
        mantra: "प्रोडक्ट बनाने से पहले क्वालिटी का पूरा रोडमैप।",
        definition: "एक ऐसी प्लानिंग जिसमें ग्राहक की ज़रूरतों को समझकर प्रोसेस को इस तरह बनाया जाता है कि कम से कम रिस्क में काम शुरू हो सके।",
        phases: [
          {
            title: "चरण 1: प्लानिंग",
            focus: "कस्टमर क्या चाहता है?",
            points: ["कस्टमर की आवाज़ (VOC)", "फिजिबिलिटी चेक", "रिस्क की पहचान", "समय का प्लान"],
            output: ["प्रोजेक्ट प्लान", "फिजिबिलिटी रिपोर्ट"]
          },
          {
            title: "चरण 2: प्रोडक्ट डिज़ाइन",
            focus: "क्या डिज़ाइन सही है?",
            points: ["डिज़ाइन रिव्यू", "DFMEA (डिज़ाइन रिस्क)", "मटेरियल का चुनाव", "प्रोटोटाइप टेस्ट"],
            output: ["पास ड्राइंग", "DFMEA", "प्रोटोटाइप रिपोर्ट"]
          },
          {
            title: "चरण 3: प्रोसेस डिज़ाइन",
            focus: "सामान कैसे बनेगा?",
            points: ["प्रोसेस फ्लो डायग्राम", "PFMEA (प्रोसेस रिस्क)", "कंट्रोल प्लान (ट्रायल)", "टूल की तैयारी"],
            output: ["PFMEA", "कंट्रोल प्लान", "SOP / WI"]
          },
          {
            title: "चरण 4: वैलिडेशन",
            focus: "क्या प्रोसेस स्थिर है?",
            points: ["ट्रायल प्रोडक्शन", "माप और फंक्शन टेस्ट", "MSA और SPC", "PPAP भेजना"],
            output: ["PPAP पास", "वैलिडेशन रिपोर्ट"]
          },
          {
            title: "चरण 5: लॉन्च और सुधार",
            focus: "लगातार बेहतर परफॉरमेंस",
            points: ["प्रोडक्शन कंट्रोल प्लान", "SPC मॉनिटरिंग", "कस्टमर फीडबैक", "सुधार के कदम"],
            output: ["स्थिर प्रोडक्शन", "काइज़न रिकॉर्ड"]
          }
        ]
      },
      ppap: {
        title: "PPAP: प्रोडक्शन पार्ट अप्रूवल प्रोसेस",
        mantra: "यह सबूत है कि APQP प्लान वाकई में काम कर रहा है।",
        definition: "एक फॉर्मल अप्रूवल प्रोसेस जिसमें सप्लायर यह साबित करता है कि उसका प्रोसेस ग्राहक की ड्राइंग के अनुसार सही माल बना सकता है।",
        gridLabel: "PPAP के 18 तत्व (विस्तृत जानकारी के लिए क्लिक करें)",
        elements: [
          "Design Record", "Engineering Change Docs", "Customer Engineering Approval", "DFMEA", "Process Flow Diagram",
          "PFMEA", "Control Plan", "MSA Studies", "Dimensional Results", "Material / Performance Tests",
          "Initial Process Studies", "Qualified Lab Docs", "Appearance Approval (AAR)", "Sample Production Parts",
          "Master Sample", "Checking Aids", "Customer Specific Req.", "PSW (Part Submission Warrant)"
        ],
        levels: [
          { l: "लेवल 1", d: "सिर्फ PSW" },
          { l: "लेवल 2", d: "PSW + कुछ दस्तावेज" },
          { l: "लेवल 3", d: "PSW + सभी 18 दस्तावेज" },
          { l: "लेवल 4", d: "कस्टमर के अनुसार" },
          { l: "लेवल 5", d: "फैक्ट्री ऑडिट + दस्तावेज" }
        ]
      }
    }
  };

  const current = content[lang] || content['en'];

  if (selectedElementIndex !== null) {
    return (
      <PPAPElementDeepDive 
        elementIndex={selectedElementIndex} 
        onBack={() => setSelectedElementIndex(null)} 
        lang={lang} 
      />
    );
  }

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-purple-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(168,85,247,0.8)]"></div>
              <span className="text-purple-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono">APQP & PPAP</h3>
        </div>
        <button 
          onClick={onBack}
          className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </button>
      </div>

      {/* Logic Selection Tabs */}
      <div className="flex flex-wrap gap-2 bg-slate-950/40 p-2 rounded-2xl border border-white/5 w-fit">
         <button 
           onClick={() => setActiveTab('apqp')}
           className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'apqp' ? 'bg-purple-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
         >
           {current.tabs[0]}
         </button>
         <button 
           onClick={() => setActiveTab('ppap')}
           className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'ppap' ? 'bg-cyan-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
         >
           {current.tabs[1]}
         </button>
      </div>

      {/* APQP Section */}
      {activeTab === 'apqp' && (
        <div className="animate-in slide-in-from-right-4 duration-500 space-y-12">
           {/* Hero Card */}
           <div className="bg-slate-900 border border-purple-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
              <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/[0.02] select-none uppercase italic">Planning</div>
              <div className="flex-1 space-y-6">
                 <h4 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none italic">{current.apqp.title}</h4>
                 <div className="p-6 bg-white/5 rounded-3xl border-l-4 border-purple-500">
                    <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">"{current.apqp.definition}"</p>
                 </div>
                 <p className="text-purple-400 font-black text-xs md:text-lg uppercase tracking-widest">
                    "{current.apqp.mantra}"
                 </p>
              </div>
           </div>

           {/* 5 Phases Interactive Stepper */}
           <div className="bg-slate-950/60 border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                 <div className="lg:col-span-4 space-y-4">
                    {current.apqp.phases.map((phase, i) => (
                       <div 
                         key={i}
                         onClick={() => setSelectedPhase(i)}
                         className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center gap-4 ${selectedPhase === i ? 'bg-purple-600 border-purple-400 text-white shadow-xl scale-105' : 'bg-white/5 border-white/10 text-slate-500 hover:bg-white/10'}`}
                       >
                          <span className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-[10px] font-black">{i+1}</span>
                          <span className="text-[10px] font-black uppercase tracking-widest">{phase.title}</span>
                       </div>
                    ))}
                 </div>
                 <div className="lg:col-span-8 bg-slate-900 rounded-3xl p-8 border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 text-9xl font-black text-white/[0.01] select-none italic">0{selectedPhase+1}</div>
                    <div className="relative z-10 space-y-8">
                       <div>
                          <h5 className="text-purple-400 text-2xl font-black uppercase tracking-tight">{current.apqp.phases[selectedPhase].title}</h5>
                          <p className="text-white text-lg font-bold italic mt-1">{current.apqp.phases[selectedPhase].focus}</p>
                       </div>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                             <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Key Points / मुख्य बिंदु</span>
                             <div className="space-y-2">
                                {current.apqp.phases[selectedPhase].points.map((p, i) => (
                                   <div key={i} className="flex items-center gap-3 text-slate-200 text-xs font-bold uppercase">
                                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                      {p}
                                   </div>
                                ))}
                             </div>
                          </div>
                          <div className="space-y-4">
                             <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Deliverables / आउटपुट</span>
                             <div className="grid grid-cols-1 gap-2">
                                {current.apqp.phases[selectedPhase].output.map((out, i) => (
                                   <div key={i} className="p-3 bg-slate-950 border border-white/5 rounded-xl text-white text-[10px] font-black uppercase tracking-tight">
                                      📄 {out}
                                   </div>
                                ))}
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* PPAP Section */}
      {activeTab === 'ppap' && (
        <div className="animate-in slide-in-from-right-4 duration-500 space-y-12">
           {/* Hero Card */}
           <div className="bg-slate-900 border border-cyan-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
              <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/[0.02] select-none uppercase italic">Evidence</div>
              <div className="flex-1 space-y-6">
                 <h4 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none italic">{current.ppap.title}</h4>
                 <div className="p-6 bg-white/5 rounded-3xl border-l-4 border-cyan-500">
                    <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">"{current.ppap.definition}"</p>
                 </div>
                 <p className="text-cyan-400 font-black text-xs md:text-lg uppercase tracking-widest">
                    "{current.ppap.mantra}"
                 </p>
              </div>
           </div>

           {/* 18 Elements Grid */}
           <div className="space-y-6 relative">
              <div className="flex items-center gap-4">
                 <h4 className="text-white text-[10px] font-black uppercase tracking-[0.5em] whitespace-nowrap">{current.ppap.gridLabel}</h4>
                 <div className="h-px w-full bg-white/10"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                 {current.ppap.elements.map((el, i) => (
                   <button 
                    key={i} 
                    onClick={() => setSelectedElementIndex(i)}
                    className="bg-slate-950 border border-white/5 p-4 rounded-2xl transition-all group flex flex-col gap-2 text-left hover:border-cyan-500 hover:bg-slate-900 shadow-xl"
                   >
                      <span className="text-cyan-500 font-black text-[10px] opacity-40 group-hover:opacity-100">{i+1 < 10 ? `0${i+1}` : i+1}</span>
                      <p className="text-white text-[9px] md:text-[10px] font-black uppercase tracking-tight leading-tight group-hover:text-cyan-400 transition-colors">{el}</p>
                   </button>
                 ))}
              </div>
           </div>

           {/* Levels Matrix */}
           <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl space-y-8">
              <h4 className="text-white text-center font-black text-xl md:text-2xl uppercase tracking-[0.3em]">PPAP Submission Levels</h4>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                 {current.ppap.levels.map((level, i) => (
                    <div key={i} className="bg-slate-950/60 p-6 rounded-3xl border border-white/5 flex flex-col items-center text-center gap-4 group hover:border-cyan-500 transition-all">
                       <div className="w-12 h-12 rounded-2xl bg-cyan-600 flex items-center justify-center text-white font-black text-xs shadow-lg">L{i+1}</div>
                       <div className="space-y-1">
                          <span className="text-white font-black text-xs uppercase">{level.l}</span>
                          <p className="text-slate-500 text-[9px] font-bold leading-relaxed">{level.d}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default APQPPPAPDetail;

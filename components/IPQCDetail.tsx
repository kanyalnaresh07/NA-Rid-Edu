
import React, { useState } from 'react';
import { Language, GlossaryTerm } from '../types';
import FMEADMAICDetail from './FMEADMAICDetail';
import LineProcessDetail from './LineProcessDetail';
import FPADetail from './FPADetail';
import ToolCalibrationDetail from './ToolCalibrationDetail';
import CorrectiveActionDetail from './CorrectiveActionDetail';
import SevenQCToolsDetail from './SevenQCToolsDetail';
import SPCDetail from './SPCDetail';
import ControlPlanDetail from './ControlPlanDetail';
import APQPPPAPDetail from './APQPPPAPDetail';
import AuditSystemDetail from './AuditSystemDetail';

interface IPQCDetailProps {
  onBack: () => void;
  lang: Language;
}

const IPQCDetail: React.FC<IPQCDetailProps> = ({ onBack, lang }) => {
  const [showFMEADeepDive, setShowFMEADeepDive] = useState(false);
  const [showLineProcessDeepDive, setShowLineProcessDeepDive] = useState(false);
  const [showFPADeepDive, setShowFPADeepDive] = useState(false);
  const [showToolCalibDeepDive, setShowToolCalibDeepDive] = useState(false);
  const [showCADeepDive, setShowCADeepDive] = useState(false);
  const [show7QCDeepDive, setShow7QCDeepDive] = useState(false);
  const [showSPCDeepDive, setShowSPCDeepDive] = useState(false);
  const [showControlPlanDeepDive, setShowControlPlanDeepDive] = useState(false);
  const [showAPQPPPAPDeepDive, setShowAPQPPPAPDeepDive] = useState(false);
  const [showAuditSystemDeepDive, setShowAuditSystemDeepDive] = useState(false);

  const content = {
    en: {
      title: "In-Process Quality Control (IPQC)",
      subtitle: "Manufacturing Intelligence & Process Control",
      backBtn: "Back",
      sections: [
        {
          id: "line",
          title: "1. Line Process Inspection",
          desc: "Regular patrolling and monitoring of the production line to ensure standard parameters are maintained.",
          focus: ["Hourly patrol checks", "Parameter auditing", "Visual hygiene"],
          icon: "🕵️",
          color: "cyan",
          clickable: true
        },
        {
          id: "fpa",
          title: "2. First Piece Approval (FPA / FAI)",
          desc: "Verification of the very first unit produced after a setup change or shift start to prevent mass defects.",
          focus: ["Setup verification", "Golden sample match", "FAI documentation"],
          icon: "🥇",
          color: "blue",
          clickable: true
        },
        {
          id: "calibration",
          title: "3. Tool Calibration Check",
          desc: "Ensuring all measuring instruments (Vernier, Micrometer) are accurate and have valid calibration dates.",
          focus: ["Calibration labels", "Master gauge check", "Zero-error verification"],
          icon: "🔬",
          color: "indigo",
          clickable: true
        },
        {
          id: "ca",
          title: "4. Corrective Action Support",
          desc: "Advanced problem-solving techniques to find the root cause of any internal failure.",
          focus: ["5-Why Analysis", "Fishbone (Ishikawa)", "CMR / 8D Reporting"],
          icon: "🧠",
          color: "rose",
          clickable: true
        },
        {
          id: "7qc",
          title: "5. 7 QC Tools",
          desc: "The fundamental statistical tools used to analyze process data and improve quality.",
          focus: ["Pareto Chart", "Histogram", "Control Charts", "Check Sheets"],
          icon: "📊",
          color: "emerald",
          clickable: true
        },
        {
          id: "spc",
          title: "6. SPC (Statistical Process Control)",
          desc: "Monitoring process stability using statistical limits to predict and prevent variations.",
          focus: ["X-bar / R Charts", "Cp / Cpk calculation", "Process capability"],
          icon: "📈",
          color: "cyan",
          clickable: true
        },
        {
          id: "fmea",
          title: "7. FMEA & DMAIC",
          desc: "Failure Mode and Effects Analysis & Structured Problem Solving roadmap (DMAIC).",
          focus: ["Risk Priority (RPN)", "S-O-D Factors", "Define to Control"],
          icon: "🛡️",
          color: "amber",
          clickable: true
        },
        {
          id: "control",
          title: "8. Control Plan",
          desc: "The structured roadmap for controlling the process. Define characteristic, frequency, and reaction plan.",
          focus: ["Process steps", "Sample frequency", "Reaction plan (OCAP)"],
          icon: "🗺️",
          color: "blue",
          clickable: true
        },
        {
          id: "apqp",
          title: "9. APQP & PPAP",
          desc: "Strategic framework used to ensure that a product being developed satisfies the customer through planning and formal approval.",
          focus: ["NPI (New Product Intro)", "PPAP submission", "Quality gate reviews"],
          icon: "📅",
          color: "purple",
          clickable: true
        },
        {
          id: "audit",
          title: "10. Audit & System Tools",
          desc: "Maintaining the quality management system through regular internal and external verifications.",
          focus: ["LPA (Layered Audit)", "ISO 9001 Compliance", "Process Audits"],
          icon: "📝",
          color: "slate",
          clickable: true
        }
      ],
      footer: {
        engine: "IPQC Engine: Monitoring",
        standard: "IATF 16949 / ISO 9001"
      }
    },
    hi: {
      title: "इन-प्रोसेस क्वालिटी कंट्रोल (IPQC)",
      subtitle: "मैने्युफैक्चरिंग इंटेलिजेंस और प्रोसेस कंट्रोल",
      backBtn: "वापस",
      sections: [
        {
          id: "line",
          title: "1. लाइन प्रोसेस इंस्पेक्शन",
          desc: "प्रोडक्शन लाइन की लगातार निगरानी ताकि यह सुनिश्चित हो सके कि काम तय नियमों के अनुसार हो रहा है।",
          focus: ["हर घंटे गश्त (Patrol)", "पैरामीटर ऑडिटिंग", "विजुअल चेक"],
          icon: "🕵️",
          color: "cyan",
          clickable: true
        },
        {
          id: "fpa",
          title: "2. फर्स्ट पीस अप्रूवल (FPA / FAI)",
          desc: "शिफ्ट शुरू होने या सेटअप बदलने के बाद बने पहले पीस की पूरी जांच, ताकि बड़ी गलती न हो।",
          focus: ["सेटअप वेरिफिकेशन", "गोल्डन सैंपल से तुलना", "FAI रिपोर्ट"],
          icon: "🥇",
          color: "blue",
          clickable: true
        },
        {
          id: "calibration",
          title: "3. टूल कैलिब्रेशन चेक",
          desc: "यह सुनिश्चित करना कि सभी मापने वाले टूल (वर्नियर, माइक्रोमीटर) बिल्कुल सही काम कर रहे हैं।",
          focus: ["कैलिब्रेशन स्टिकर", "मास्टर गेज चेक", "जीरो-एरर जांच"],
          icon: "🔬",
          color: "indigo",
          clickable: true
        },
        {
          id: "ca",
          title: "4. सुधारात्मक कार्यवाही (Corrective Action)",
          desc: "किसी भी गलती की असली जड़ (Root Cause) को ढूँढने और उसे हमेशा के लिए मिटाने की तकनीक।",
          focus: ["5-Why एनालिसिस", "फिशबोन डायग्राम", "CMR / 8D रिपोर्टिंग"],
          icon: "🧠",
          color: "rose",
          clickable: true
        },
        {
          id: "7qc",
          title: "5. 7 QC टूल्स",
          desc: "क्वालिटी डेटा को समझने और सुधारने के लिए इस्तेमाल होने वाले 7 बेसिक सांख्यिकीय तरीके।",
          focus: ["पेरेटो चार्ट", "हिस्टोग्राम", "कंट्रोल चार्ट", "चेक शीट"],
          icon: "📊",
          color: "emerald",
          clickable: true
        },
        {
          id: "spc",
          title: "6. SPC (स्टेटिस्टिकल प्रोसेस कंट्रोल)",
          desc: "डेटा का उपयोग करके प्रोसेस की स्थिरता को मापना और बदलावों को पहले से भांप लेना।",
          focus: ["X-bar / R चार्ट", "Cp / Cpk वैल्यू", "प्रोसेस क्षमता"],
          icon: "📈",
          color: "cyan",
          clickable: true
        },
        {
          id: "fmea",
          title: "7. FMEA और DMAIC",
          desc: "गलती होने से पहले जोखिम विश्लेषण (FMEA) और व्यवस्थित समस्या समाधान (DMAIC)।",
          focus: ["RPN स्कोरिंग", "S-O-D फैक्टर्स", "सुधार का रास्ता"],
          icon: "🛡️",
          color: "amber",
          clickable: true
        },
        {
          id: "control",
          title: "8. कंट्रोल प्लान",
          desc: "क्वालिटी कंट्रोल की डेली नियम पुस्तिका। इसमें जांच का तरीका, समय और गलत माल मिलने पर क्या करें, सब लिखा होता है।",
          focus: ["चेक पॉइंट", "सैंपल साइज", "रिएक्शन प्लान"],
          icon: "🗺️",
          color: "blue",
          clickable: true
        },
        {
          id: "apqp",
          title: "9. APQP और PPAP",
          desc: "नए प्रोडक्ट को बनाते समय उसकी क्वालिटी की एडवांस में पूरी प्लानिंग (APQP) और उसका औपचारिक अप्रूवल (PPAP)।",
          focus: ["NPI (नया प्रोडक्ट)", "PPAP सबमिशन", "क्वालिटी गेट रिव्यू"],
          icon: "📅",
          color: "purple",
          clickable: true
        },
        {
          id: "audit",
          title: "10. ऑडिट और सिस्टम टूल्स",
          desc: "इंटरनल और एक्सटर्नल ऑडिट के ज़रिए क्वालिटी सिस्टम को मज़बूत बनाए रखना।",
          focus: ["LPA ऑडिट", "ISO 9001 नियमों का पालन", "प्रोसेस ऑडिट"],
          icon: "📝",
          color: "slate",
          clickable: true
        }
      ],
      footer: {
        engine: "IPQC इंजन: सक्रिय",
        standard: "IATF 16949 / ISO 9001 प्रमाणित"
      }
    }
  };

  const current = content[lang] || content['en'];

  if (showFMEADeepDive) {
    return <FMEADMAICDetail onBack={() => setShowFMEADeepDive(false)} lang={lang} />;
  }

  if (showLineProcessDeepDive) {
    return <LineProcessDetail onBack={() => setShowLineProcessDeepDive(false)} lang={lang} />;
  }

  if (showFPADeepDive) {
    return <FPADetail onBack={() => setShowFPADeepDive(false)} lang={lang} />;
  }

  if (showToolCalibDeepDive) {
    return <ToolCalibrationDetail onBack={() => setShowToolCalibDeepDive(false)} lang={lang} />;
  }

  if (showCADeepDive) {
    return <CorrectiveActionDetail onBack={() => setShowCADeepDive(false)} lang={lang} />;
  }

  if (show7QCDeepDive) {
    return <SevenQCToolsDetail onBack={() => setShow7QCDeepDive(false)} lang={lang} />;
  }

  if (showSPCDeepDive) {
    return <SPCDetail onBack={() => setShowSPCDeepDive(false)} lang={lang} />;
  }

  if (showControlPlanDeepDive) {
    return <ControlPlanDetail onBack={() => setShowControlPlanDeepDive(false)} lang={lang} />;
  }

  if (showAPQPPPAPDeepDive) {
    return <APQPPPAPDetail onBack={() => setShowAPQPPPAPDeepDive(false)} lang={lang} />;
  }

  if (showAuditSystemDeepDive) {
    return <AuditSystemDetail onBack={() => setShowAuditSystemDeepDive(false)} lang={lang} />;
  }

  const handleSectionClick = (id: string) => {
    if (id === 'fmea') setShowFMEADeepDive(true);
    if (id === 'line') setShowLineProcessDeepDive(true);
    if (id === 'fpa') setShowFPADeepDive(true);
    if (id === 'calibration') setShowToolCalibDeepDive(true);
    if (id === 'ca') setShowCADeepDive(true);
    if (id === '7qc') setShow7QCDeepDive(true);
    if (id === 'spc') setShowSPCDeepDive(true);
    if (id === 'control') setShowControlPlanDeepDive(true);
    if (id === 'apqp') setShowAPQPPPAPDeepDive(true);
    if (id === 'audit') setShowAuditSystemDeepDive(true);
  };

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
        <button 
          onClick={onBack}
          className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Banner */}
      <div className="bg-slate-900/60 border border-cyan-500/20 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-cyan-500/[0.03] select-none uppercase italic">PROCESS</div>
         <div className="relative z-10 space-y-4">
            <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-widest border-b-2 border-cyan-500 w-fit pb-2">The Engine of Quality</h4>
            <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed max-w-5xl italic">
               "Process stability is the heartbeat of manufacturing. IPQC ensures that we don't just inspect quality, we BUILD quality into every single station."
            </p>
         </div>
      </div>

      {/* 10 Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
         {(current.sections || []).map((section: any, i: number) => (
           <div 
             key={section.id} 
             onClick={() => section.clickable && handleSectionClick(section.id)}
             className={`bg-slate-950/40 border border-${section.color}-500/20 p-6 rounded-[32px] hover:bg-slate-900 transition-all group flex flex-col gap-5 shadow-xl relative overflow-hidden h-full ${section.clickable ? 'cursor-pointer' : ''}`}
           >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-${section.color}-500/5 blur-[40px] rounded-full`}></div>
              
              <div className="flex items-center justify-between relative z-10">
                 <div className={`w-12 h-12 bg-slate-900 border border-${section.color}-500/30 rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {section.icon}
                 </div>
              </div>

              <div className="relative z-10">
                 <h5 className="text-white font-black text-sm md:text-base uppercase mb-3 tracking-tighter leading-tight group-hover:text-cyan-400 transition-colors">{section.title}</h5>
                 <p className="text-slate-400 text-[10px] md:text-xs font-bold leading-relaxed">{section.desc}</p>
              </div>

              {section.clickable && (
                <div className="relative z-10 flex items-center gap-2 text-white/40 text-[8px] font-black uppercase tracking-widest animate-pulse group-hover:text-white transition-colors">
                   Explore Module <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7" /></svg>
                </div>
              )}

              <div className="space-y-2 pt-4 border-t border-white/5 relative z-10 mt-auto">
                 <span className="text-[7px] font-black text-slate-500 uppercase tracking-widest block mb-1">Scope / कार्यक्षेत्र</span>
                 {(section.focus || []).map((p: string, idx: number) => (
                   <div key={idx} className="flex items-center gap-2 text-[9px] md:text-[10px] text-slate-200 font-bold uppercase tracking-tight">
                      <div className={`w-1 h-1 bg-${section.color}-500 rounded-full`}></div>
                      {p}
                   </div>
                 ))}
              </div>
           </div>
         ))}
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,1)]"></span>
                {current.footer?.engine || 'IPQC Active'}
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
                {current.footer?.standard || 'IATF 16949'}
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest">Industrial Hub v7.7 // Process Node</div>
      </div>
    </div>
  );
};

export default IPQCDetail;

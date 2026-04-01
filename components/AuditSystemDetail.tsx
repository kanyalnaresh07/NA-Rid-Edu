
import React, { useState } from 'react';
import { Language } from '../types';

interface AuditSystemDetailProps {
  onBack: () => void;
  lang: Language;
}

const AuditSystemDetail: React.FC<AuditSystemDetailProps> = ({ onBack, lang }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'lpa' | 'iso' | 'process' | 'iatf'>('overview');

  const content = {
    en: {
      title: "Audit & System Tools",
      subtitle: "QMS Integrity & Compliance",
      backBtn: "Back to IPQC",
      tabs: ["Overview", "LPA (Layers)", "ISO 9001", "Process Audit", "IATF 16949"],
      hero: {
        question: "What are Audit & System Tools?",
        desc: "These are systematic methods used to regularly verify, maintain, and improve the Quality Management System (QMS).",
        simple: "Simple words: Routine health check to ensure the system is working as defined.",
        objectives: [
          "Compliance with ISO & Customer standards",
          "Ensure process discipline",
          "Identify gaps and risks early",
          "Drive continuous improvement (Kaizen)"
        ]
      },
      scope: {
        title: "Audit Scope (कार्यक्षेत्र)",
        desc: "The boundary that defines what, where, and when the audit will occur.",
        items: ["Departments involved", "Specific Processes", "Applicable Standards", "Time Period"]
      },
      lpa: {
        title: "LPA: Layered Process Audit",
        mantra: "Daily process discipline through multi-level checks.",
        layers: [
          { l: "Layer 1", p: "Operator / Supervisor", f: "Daily", focus: "Immediate Station Compliance" },
          { l: "Layer 2", p: "Quality / Prod. Engineer", f: "Weekly", focus: "Cross-station verification" },
          { l: "Layer 3", p: "Manager / HOD", f: "Monthly", focus: "Systemic gaps & resources" },
          { l: "Layer 4", p: "Plant Head", f: "Quarterly", focus: "Strategic alignment" }
        ],
        checklist: ["SOP followed?", "Correct material?", "Poka-Yoke working?", "Control Plan followed?"]
      },
      iso: {
        title: "ISO 9001 Compliance",
        desc: "The international gold standard for QMS ensuring consistent quality and customer satisfaction.",
        types: [
          { t: "Internal Audit", d: "Done by company employees." },
          { t: "External Audit", d: "Done by certification bodies (TÜV, BSI)." },
          { t: "Surveillance", d: "Yearly follow-up check." },
          { t: "Re-certification", d: "Full check every 3 years." }
        ],
        nc: ["SOP not followed", "Missing records", "Expired calibration", "Training gaps"]
      },
      iatf: {
        title: "IATF 16949: Automotive Standard",
        mantra: "The global entry ticket for automotive suppliers.",
        definition: "IATF 16949 is the world's most rigorous Quality Management System (QMS) standard for the automotive industry. An IATF Audit verifies if the organization is following these strict requirements to ensure safety and reliability.",
        formula: "IATF = ISO 9001 + Automotive Specific Requirements",
        objectives: [
          { t: "Defect Prevention", d: "Shift focus from 'Detection' to 'Prevention'." },
          { t: "Variation Reduction", d: "Minimize differences in part-to-part quality." },
          { t: "Waste Elimination", d: "Remove non-value adding activities." },
          { t: "Customer Satisfaction", d: "Fulfill specific OEM requirements (CSR)." }
        ],
        comparison: {
          title: "ISO 9001 vs. IATF 16949",
          rows: [
            { area: "Risk Management", iso: "Context & Risk", iatf: "Detailed PFMEA / DFMEA" },
            { area: "Product Launch", iso: "Standard Dev", iatf: "Strict APQP / PPAP" },
            { area: "Supplier Quality", iso: "Evaluation", iatf: "SCAR / PPAP / Auditor Training" },
            { area: "Monitoring", iso: "Internal Audit", iatf: "LPA / Process Audit / SPC" }
          ]
        },
        auditTypes: [
          { t: "Internal IATF Audit", d: "Performed by trained internal staff using the Process Approach." },
          { t: "External (Certification)", d: "BSI/TÜV audits (Stage-1, Stage-2, Surveillance)." },
          { t: "Customer Audit", d: "OEM (Maruti, Tata, etc.) checks focusing on core tools." }
        ],
        checkpoints: {
          system: ["Risk & Opportunity", "Document Control", "Training Competence", "Contingency Plan"],
          process: ["PFMEA & Control Plan Match", "LPA Effectiveness", "SPC & Reaction Plan", "Change Control (ECN)"]
        },
        commonNCRs: [
          "PFMEA and Control Plan do not match.",
          "Reaction plan defined but operator doesn't know it.",
          "SPC chart shows 'Out-of-Control' but no action taken.",
          "Supplier rejections high with no SCAR closure."
        ],
        flow: ["QMS Defined", "Core Tool Setup", "LPA & Patrol", "Internal Audit", "External Audit", "CAPA & Closure"]
      },
      processAudit: {
        title: "Process Audit vs Product Audit",
        desc: "Verifying if the 'Process' is running as defined, not just checking the final output.",
        comparison: {
          headers: ["Point", "Process Audit", "Product Audit"],
          rows: [
            { p: "Focus", pr: "Work Method", pd: "Final Output" },
            { p: "Timing", pr: "During Production", pd: "After Production" },
            { p: "Goal", pr: "Prevention (बचाव)", pd: "Detection (पकड़ना)" }
          ]
        }
      },
      summary: "Scope = Boundary | LPA = Discipline | ISO = Framework | IATF = Automotive Power"
    },
    hi: {
      title: "ऑडिट और सिस्टम टूल्स",
      subtitle: "QMS अखंडता और अनुपालन",
      backBtn: "IPQC पर वापस जाएं",
      tabs: ["ओवरव्यू", "LPA (लेयर्स)", "ISO 9001", "प्रोसेस ऑडिट", "IATF 16949"],
      hero: {
        question: "Audit & System Tools क्या होते हैं?",
        desc: "ये वो तरीके हैं जिनके ज़रिए क्वालिटी मैनेजमेंट सिस्टम (QMS) को नियमित रूप से जांचा, सुधारा और बनाए रखा जाता है।",
        simple: "आसान शब्दों में: सिस्टम सही चल रहा है या नहीं — इसका रूटीन हेल्थ चेक।",
        objectives: [
          "ISO और कस्टमर नियमों का पालन",
          "प्रोसेस अनुशासन (Discipline) सुनिश्चित करना",
          "खामियों और जोखिमों की पहचान",
          "लगातार सुधार (Kaizen) को बढ़ावा देना"
        ]
      },
      scope: {
        title: "ऑडिट का दायरा (Scope)",
        desc: "वह सीमा जो तय करती है कि ऑडिट में क्या, कहाँ और कब चेक किया जाएगा।",
        items: ["संबंधित विभाग (IQC, Production आदि)", "खास प्रोसेस", "लागू होने वाले मानक (ISO)", "समय सीमा"]
      },
      lpa: {
        title: "LPA: लेयर्ड प्रोसेस ऑडिट",
        mantra: "बहु-स्तरीय जांच के ज़रिए डेली प्रोसेस अनुशासन।",
        layers: [
          { l: "लेयर 1", p: "ऑपरेटर / सुपरवाइजर", f: "रोजाना (Daily)", focus: "स्टेशन के नियमों का पालन" },
          { l: "लेयर 2", p: "क्वालिटी / Prod इंजीनियर", f: "साप्ताहिक", focus: "पूरी लाइन की जांच" },
          { l: "लेयर 3", p: "मैनेजर / HOD", f: "मासिक (Monthly)", focus: "सिस्टम की कमियां" },
          { l: "लेयर 4", p: "प्लांट हेड", f: "त्रैमासिक", focus: "रणनीतिक सुधार" }
        ],
        checklist: ["SOP फॉलो हो रही है?", "सही मटेरियल है?", "पोका-योक काम कर रहा है?", "कंट्रोल प्लान के पॉइंट्स OK?"]
      },
      iso: {
        title: "ISO 9001 अनुपालन (Compliance)",
        desc: "क्वालिटी का इंटरनेशनल स्टैंडर्ड जो बेहतर प्रोडक्ट और कस्टमर भरोसे की गारंटी देता है।",
        types: [
          { t: "इंटरनल ऑडिट", d: "कंपनी के कर्मचारियों द्वारा जांच।" },
          { t: "एक्सटर्नल ऑडिट", d: "बाहरी सर्टिफिकेशन बॉडी (TÜV, BSI) द्वारा।" },
          { t: "सर्वेक्षण (Surveillance)", d: "सालाना फॉलो-अप चेक।" },
          { t: "री-सर्टिफिकेशन", d: "हर 3 साल में पूरी जांच।" }
        ],
        nc: ["SOP का पालन न होना", "अधूरे रिकॉर्ड", "कैलिब्रेशन की तारीख निकलना", "ट्रेनिंग की कमी"]
      },
      iatf: {
        title: "IATF 16949: ऑटोमोटिव स्टैंडर्ड",
        mantra: "ऑटोमोटिव सप्लायर बनने का ग्लोबल 'एंट्री टिकट' (Ticket)।",
        definition: "IATF 16949 ऑटोमोटिव इंडस्ट्री के लिए दुनिया का सबसे कड़ा क्वालिटी स्टैंडर्ड है। IATF ऑडिट यह चेक करता है कि कंपनी गाड़ियों के पुर्जे बनाने के लिए तय किए गए सख्त नियमों का पालन कर रही है या नहीं।",
        formula: "IATF = ISO 9001 + ऑटोमोटिव की खास जरूरतें",
        objectives: [
          { t: "गलती रोकना (Defect Prevention)", d: "चेकिंग से ज्यादा 'गलती होने ही न देने' पर ध्यान देना।" },
          { t: "बदलाव कम करना (Variation)", d: "हर पार्ट की क्वालिटी एक जैसी (Consistent) रखना।" },
          { t: "बर्बादी खत्म करना", d: "समय और मटेरियल के फालतू खर्च को रोकना।" },
          { t: "कस्टमर संतुष्टि", d: "बड़ी कंपनियों (जैसे Maruti, Tata) की शर्तों (CSR) को पूरा करना।" }
        ],
        comparison: {
          title: "ISO 9001 बनाम IATF 16949",
          rows: [
            { area: "जोखिम (Risk)", iso: "साधारण रिस्क", iatf: "गहरा विश्लेषण (PFMEA)" },
            { area: "प्रोडक्ट लॉन्च", iso: "साधारण प्लानिंग", iatf: "सख्त APQP / PPAP" },
            { area: "सप्लायर क्वालिटी", iso: "मूल्यांकन", iatf: "SCAR और सख्त ऑडिट" },
            { area: "निगरानी (Monitoring)", iso: "इंटरनल ऑडिट", iatf: "LPA और SPC अनिवार्य" }
          ]
        },
        auditTypes: [
          { t: "इंटरनल IATF ऑडिट", d: "कंपनी की अपनी टीम द्वारा प्रोसेस आधारित जांच।" },
          { t: "एक्सटर्नल (सर्टिफिकेशन)", d: "BSI/TÜV जैसी संस्थाओं द्वारा (Stage-1, Stage-2, Yearly)।" },
          { t: "कस्टमर ऑडिट", d: "OEM (जैसे मारुति) द्वारा की जाने वाली मुख्य टूल्स की जांच।" }
        ],
        checkpoints: {
          system: ["रिस्क और मौके की पहचान", "दस्तावेज कंट्रोल", "ट्रेनिंग और हुनर", "इमरजेंसी बैकअप प्लान"],
          process: ["PFMEA और कंट्रोल प्लान का मिलान", "LPA की प्रभावशीलता", "SPC और रिएक्शन प्लान", "बदलाव कंट्रोल (ECN)"]
        },
        commonNCRs: [
          "PFMEA और कंट्रोल प्लान आपस में मेल नहीं खाते।",
          "रिएक्शन प्लान लिखा है पर ऑपरेटर को पता नहीं है।",
          "SPC चार्ट में गलती दिख रही है पर कोई एक्शन नहीं लिया गया।",
          "सप्लायर का माल बार-बार रिजेक्ट हो रहा है पर SCAR बंद नहीं है।"
        ],
        flow: ["QMS तय करना", "कोर टूल्स सेटअप", "LPA और गश्त", "इंटरनल ऑडिट", "एक्सटर्नल ऑडिट", "CAPA और क्लोजर"]
      },
      processAudit: {
        title: "प्रोसेस ऑडिट बनाम प्रोडक्ट ऑडिट",
        desc: "यह चेक करना कि क्या 'काम का तरीका' सही है, न कि सिर्फ आखिरी माल को देखना।",
        comparison: {
          headers: ["बिंदु", "प्रोसेस ऑडिट", "प्रोडक्ट ऑडिट"],
          rows: [
            { p: "ध्यान (Focus)", pr: "काम का तरीका", pd: "तैयार माल (Output)" },
            { p: "समय", pr: "काम के दौरान", pd: "काम खत्म होने के बाद" },
            { p: "लक्ष्य", pr: "बचाव (Prevention)", pd: "पकड़ना (Detection)" }
          ]
        }
      },
      summary: "Scope = सीमा | LPA = अनुशासन | ISO = फ्रेमवर्क | IATF = ऑटोमोटिव ताकत"
    }
  };

  const current = content[lang] || content['en'];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-slate-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(255,255,255,0.4)]"></div>
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono">System & Audit</h3>
        </div>
        <button 
          onClick={onBack}
          className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Definition */}
      <div className="bg-slate-900 border border-slate-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/[0.02] select-none uppercase italic">Compliance</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-slate-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">
               "{current.hero.simple}"
            </p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-slate-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors">
            <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">
               "{current.hero.desc}"
            </p>
         </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 bg-slate-950/40 p-2 rounded-2xl border border-white/5 w-fit">
         {current.tabs.map((tab, idx) => {
           const tabIds: any[] = ['overview', 'lpa', 'iso', 'process', 'iatf'];
           const id = tabIds[idx];
           return (
             <button 
               key={id}
               onClick={() => setActiveTab(id)}
               className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === id ? 'bg-white text-slate-950 shadow-lg scale-105' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
             >
               {tab}
             </button>
           );
         })}
      </div>

      {/* Content Area */}
      <div className="min-h-[500px]">
        {activeTab === 'overview' && (
          <div className="animate-in slide-in-from-right-4 duration-500 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-slate-950/60 p-8 rounded-[40px] border border-white/5 space-y-6 shadow-xl">
                  <h5 className="text-white font-black text-xl uppercase tracking-widest flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-slate-500"></span>
                    Audit Objectives
                  </h5>
                  <div className="space-y-4">
                     {current.hero.objectives.map((obj, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl group hover:bg-slate-500/10 transition-all">
                           <div className="w-8 h-8 rounded-lg bg-slate-500/20 flex items-center justify-center text-white text-xs font-black">0{i+1}</div>
                           <span className="text-slate-300 text-sm font-bold">{obj}</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="bg-slate-950/60 p-8 rounded-[40px] border border-white/5 space-y-6 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/[0.01] select-none">Scope</div>
                  <h5 className="text-white font-black text-xl uppercase tracking-widest flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-emerald-500"></span>
                    {current.scope.title}
                  </h5>
                  <p className="text-slate-400 text-sm italic mb-4">{current.scope.desc}</p>
                  <div className="grid grid-cols-2 gap-3">
                     {current.scope.items.map((item, i) => (
                        <div key={i} className="p-4 bg-slate-900 border border-white/5 rounded-2xl text-[10px] font-black text-white uppercase tracking-tight">
                           • {item}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'lpa' && (
          <div className="animate-in slide-in-from-right-4 duration-500 space-y-10">
            <div className="bg-slate-900 border border-slate-500/30 p-8 rounded-[40px] shadow-2xl space-y-6">
               <h4 className="text-white text-2xl font-black uppercase tracking-tighter italic">{current.lpa.title}</h4>
               <p className="text-slate-400 font-black text-[11px] uppercase tracking-widest bg-white/5 px-4 py-2 rounded-xl inline-block">"{current.lpa.mantra}"</p>
               
               <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                  {current.lpa.layers.map((layer, i) => (
                     <div key={i} className="bg-slate-950/60 p-6 rounded-3xl border border-white/5 flex flex-col items-center text-center gap-4 group hover:border-slate-400 transition-all">
                        <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center text-white font-black text-xs shadow-lg group-hover:bg-slate-700">{layer.l}</div>
                        <div className="space-y-1">
                           <span className="text-white font-black text-xs uppercase">{layer.p}</span>
                           <p className="text-emerald-400 text-[10px] font-bold uppercase">{layer.f}</p>
                           <div className="h-px w-8 bg-white/10 mx-auto my-2"></div>
                           <p className="text-slate-500 text-[9px] font-bold leading-relaxed italic">{layer.focus}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
          </div>
        )}

        {activeTab === 'iso' && (
          <div className="animate-in slide-in-from-right-4 duration-500 space-y-10">
            <div className="bg-slate-900 border border-emerald-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl space-y-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 text-8xl font-black text-emerald-500/[0.03] select-none">ISO</div>
               <div className="max-w-2xl space-y-4">
                  <h4 className="text-white text-3xl font-black uppercase italic leading-none">{current.iso.title}</h4>
                  <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">"{current.iso.desc}"</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {current.iso.types.map((type, i) => (
                     <div key={i} className="bg-slate-950/60 p-6 rounded-3xl border border-white/5 hover:bg-slate-900 transition-all flex flex-col gap-3">
                        <span className="text-emerald-500 font-black text-[10px] uppercase tracking-widest">{type.t}</span>
                        <p className="text-slate-400 text-[11px] font-medium leading-relaxed">{type.d}</p>
                     </div>
                  ))}
               </div>
            </div>
          </div>
        )}

        {activeTab === 'iatf' && (
          <div className="animate-in slide-in-from-right-4 duration-500 space-y-12">
             {/* IATF Hero Deep Dive */}
             <div className="bg-slate-900 border border-indigo-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden space-y-8">
                <div className="absolute top-0 right-0 p-8 text-8xl font-black text-indigo-500/[0.03] select-none italic uppercase">Standard</div>
                <div className="max-w-3xl space-y-4 relative z-10">
                   <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-2xl font-black shadow-lg">16</div>
                      <div>
                         <h4 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none">{current.iatf.title}</h4>
                         <p className="text-indigo-400 font-black text-[10px] uppercase tracking-[0.4em] mt-2">Hierarchy: Automotive QMS</p>
                      </div>
                   </div>
                   <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic border-l-4 border-indigo-500 pl-6 bg-indigo-500/5 py-4 rounded-r-2xl">
                      "{current.iatf.definition}"
                   </p>
                </div>
                <div className="p-6 bg-slate-950/60 rounded-3xl border border-white/5 text-center shadow-inner group">
                   <p className="text-lg md:text-2xl font-black text-white italic tracking-tighter bg-gradient-to-r from-white via-indigo-400 to-white bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-500">
                      {current.iatf.formula}
                   </p>
                </div>
             </div>

             {/* IATF Objectives & Comparison */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Objectives */}
                <div className="bg-slate-950/60 p-8 rounded-[40px] border border-white/5 space-y-8 shadow-xl">
                   <h5 className="text-white font-black text-xl uppercase tracking-widest flex items-center gap-3">
                      <span className="w-1.5 h-6 bg-indigo-500"></span>
                      Audit Objectives
                   </h5>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {current.iatf.objectives.map((obj, i) => (
                         <div key={i} className="p-5 bg-slate-900 rounded-3xl border border-white/5 group hover:border-indigo-500/30 transition-all h-full">
                            <h6 className="text-indigo-400 font-black text-xs uppercase mb-2">{obj.t}</h6>
                            <p className="text-slate-400 text-[10px] font-bold leading-relaxed">{obj.d}</p>
                         </div>
                      ))}
                   </div>
                </div>

                {/* ISO vs IATF Table */}
                <div className="bg-slate-900 border border-white/10 p-8 rounded-[40px] shadow-2xl overflow-hidden">
                   <h5 className="text-white font-black text-xl uppercase tracking-widest mb-6">{current.iatf.comparison.title}</h5>
                   <div className="overflow-x-auto">
                      <table className="w-full text-left">
                         <thead>
                            <tr className="border-b border-white/10 text-[9px] font-black uppercase text-slate-500">
                               <th className="py-4">Area</th>
                               <th className="py-4">ISO 9001</th>
                               <th className="py-4 text-indigo-400">IATF 16949</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-white/5 text-[10px] font-bold">
                            {current.iatf.comparison.rows.map((row, i) => (
                               <tr key={i}>
                                  <td className="py-4 text-white uppercase">{row.area}</td>
                                  <td className="py-4 text-slate-500 italic">{row.iso}</td>
                                  <td className="py-4 text-indigo-400">{row.iatf}</td>
                               </tr>
                            ))}
                         </tbody>
                      </table>
                   </div>
                </div>
             </div>

             {/* Audit Types & Checkpoints */}
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-6">
                   <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Audit Types</h4>
                   <div className="space-y-3">
                      {current.iatf.auditTypes.map((type, i) => (
                         <div key={i} className="flex gap-5 p-5 bg-slate-950/60 rounded-[32px] border border-white/5 hover:bg-slate-900 transition-all">
                            <div className="w-12 h-12 bg-slate-900 border border-indigo-500/20 rounded-2xl flex items-center justify-center text-xl shadow-lg">
                               {i === 0 ? '🏠' : i === 1 ? '📜' : '🏢'}
                            </div>
                            <div>
                               <h6 className="text-white font-black text-xs uppercase mb-1">{type.t}</h6>
                               <p className="text-slate-500 text-[10px] font-bold leading-relaxed italic">{type.d}</p>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>

                <div className="lg:col-span-7 bg-slate-900/60 border border-white/10 p-8 rounded-[40px] shadow-2xl space-y-10">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-6">
                         <h6 className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.5em] flex items-center gap-3">
                            <span className="w-1.5 h-4 bg-indigo-500"></span>
                            System Level
                         </h6>
                         <div className="space-y-2">
                            {current.iatf.checkpoints.system.map((item, i) => (
                               <div key={i} className="flex items-center gap-3 text-slate-300 text-[10px] font-black uppercase tracking-tight">
                                  <div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
                                  {item}
                               </div>
                            ))}
                         </div>
                      </div>
                      <div className="space-y-6">
                         <h6 className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.5em] flex items-center gap-3">
                            <span className="w-1.5 h-4 bg-emerald-500"></span>
                            Process Level
                         </h6>
                         <div className="space-y-2">
                            {current.iatf.checkpoints.process.map((item, i) => (
                               <div key={i} className="flex items-center gap-3 text-slate-300 text-[10px] font-black uppercase tracking-tight">
                                  <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                                  {item}
                               </div>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Common NCRs & Overall Flow */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Common Failures */}
                <div className="bg-rose-950/20 border border-rose-500/20 p-8 rounded-[40px] shadow-2xl space-y-6 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-6 text-4xl opacity-5">🚫</div>
                   <h5 className="text-rose-500 font-black text-sm uppercase tracking-widest flex items-center gap-3">
                      Common NCRs / गलतियाँ
                   </h5>
                   <div className="space-y-4">
                      {current.iatf.commonNCRs.map((nc, i) => (
                         <div key={i} className="flex gap-4 group">
                            <span className="text-rose-500 font-black italic text-xs">⚠️</span>
                            <p className="text-slate-300 text-xs font-bold leading-relaxed">{nc}</p>
                         </div>
                      ))}
                   </div>
                </div>

                {/* Overall Flow */}
                <div className="bg-slate-900 border border-white/10 p-8 rounded-[40px] shadow-2xl space-y-8">
                   <h5 className="text-white font-black text-sm uppercase tracking-widest">Overall IATF Flow</h5>
                   <div className="flex flex-wrap gap-3">
                      {current.iatf.flow.map((step, i) => (
                         <React.Fragment key={i}>
                            <div className="px-4 py-2 bg-slate-950 border border-white/10 rounded-xl text-[9px] font-black text-slate-300 uppercase tracking-widest hover:border-indigo-500 hover:text-white transition-all shadow-md">
                               {step}
                            </div>
                            {i !== current.iatf.flow.length - 1 && (
                               <div className="flex items-center text-slate-700 px-1">→</div>
                            )}
                         </React.Fragment>
                      ))}
                   </div>
                   <div className="bg-indigo-500/10 p-4 rounded-2xl border border-dashed border-indigo-500/30 text-center">
                      <p className="text-indigo-400 text-[10px] font-black uppercase italic tracking-widest">
                         Continuous Improvement Engine v9.0
                      </p>
                   </div>
                </div>
             </div>
          </div>
        )}

        {activeTab === 'process' && (
          <div className="animate-in slide-in-from-right-4 duration-500 space-y-10">
            <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl overflow-hidden backdrop-blur-xl">
               <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                  <span className="w-12 h-1.5 bg-slate-500 shadow-[0_0_12px_white]"></span>
                  {current.processAudit.title}
               </h4>
               <p className="text-slate-300 mb-10 text-sm font-bold italic leading-relaxed">"{current.processAudit.desc}"</p>
               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-white/10">
                           {current.processAudit.comparison.headers.map((h, i) => (
                              <th key={i} className={`py-6 text-[10px] font-black uppercase tracking-[0.5em] ${i === 0 ? 'text-slate-500' : i === 1 ? 'text-emerald-400' : 'text-rose-400'}`}>{h}</th>
                           ))}
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-white/5">
                        {current.processAudit.comparison.rows.map((row, i) => (
                           <tr key={i} className="group hover:bg-white/5 transition-colors">
                              <td className="py-8 text-white font-black text-sm md:text-lg uppercase tracking-tight">{row.p}</td>
                              <td className="py-8 text-emerald-400 font-bold text-xs md:text-base uppercase">{row.pr}</td>
                              <td className="py-8 text-slate-400 font-bold text-xs md:text-base uppercase italic">{row.pd}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
          </div>
        )}
      </div>

      {/* Summary Matrix Footer */}
      <div className="bg-slate-950 border border-white/5 rounded-[40px] p-8 md:p-10 shadow-inner">
         <h4 className="text-white text-[10px] font-black uppercase tracking-[0.5em] mb-10 text-center">Audit Strategy Memory Hooks</h4>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
               { k: "Scope", v: "The Audit Boundary" },
               { k: "LPA", v: "Daily Process Discipline" },
               { k: "ISO 9001", v: "Global QMS Framework" },
               { k: "IATF 16949", v: "Automotive Precision" }
            ].map((item, i) => (
               <div key={i} className="bg-slate-900/40 p-6 rounded-3xl border border-white/5 hover:border-emerald-500/20 transition-all group flex flex-col gap-2">
                  <span className="text-emerald-500 font-black text-lg italic uppercase tracking-tighter">{item.k}</span>
                  <p className="text-slate-400 text-[10px] font-bold leading-relaxed">{item.v}</p>
               </div>
            ))}
         </div>
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_12px_emerald] animate-pulse"></span>
                System Verifier: Online
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-[0_0_10px_indigo]"></span>
                IATF Node: Connected
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">Industrial Intelligence Node v9.2 // IATF Standard</div>
      </div>
    </div>
  );
};

export default AuditSystemDetail;

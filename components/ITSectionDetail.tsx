
import React from 'react';
import { Language } from '../types';

interface ITSectionDetailProps {
  sectionId: number;
  onBack: () => void;
  lang: Language;
}

const ITSectionDetail: React.FC<ITSectionDetailProps> = ({ sectionId, onBack, lang }) => {
  const translations = {
    en: {
      back: "Back to IT Hub",
      objective: "Technical Mission",
      workflow: "System Workflow",
      subElements: "Module Breakdown",
      risk: "Critical Risks",
      kpi: "Success Metric",
      sections: [
        {
          id: 1,
          title: "Software Management",
          obj: "Managing the digital tools that drive factory productivity and accuracy.",
          desc: "Software is the instructions for the factory. Without the right software, machines are just iron and humans are just doing guesswork.",
          workflow: ["Identify Need", "License Procure", "User Mapping", "Install & Patch", "Support / Helpdesk"],
          elements: [
            { h: "Operational Software", d: "Tools like OEE trackers, Quality LIMS, and Maintenance logs." },
            { h: "Design Software", d: "CAD/CAM tools (SolidWorks, AutoCAD) for engineering precision." },
            { h: "Access Management", d: "Determining who can 'Edit' vs who can only 'View' data." },
            { h: "SaaS & Licenses", d: "Managing cloud subscriptions and legal software usage." }
          ],
          risks: "Unlicensed software (Audit risk), System crashes, Malware attacks.",
          kpi: "App Availability (%)",
          icon: "💻",
          color: "blue"
        },
        {
          id: 2,
          title: "ERP (Enterprise Resource Planning)",
          obj: "Creating a single digital source of truth where all departments are interconnected.",
          desc: "ERP is the backbone. When Purchase buys a screw, the Store sees it, Production uses it, and Accounts pays for it—all in ONE system.",
          workflow: ["Master Data Setup", "Transaction Entry", "Real-time Sync", "Auto-Validation", "Master Reporting"],
          elements: [
            { h: "Master Data Management", d: "Setting correct Part Codes, BOMs, and Vendor profiles (The Foundation)." },
            { h: "Material Management (MM)", d: "Managing Stock-in, Stock-out, and Min-Max levels automatically." },
            { h: "Production Planning (PP)", d: "Scheduling work based on machine capacity and orders." },
            { h: "Financial Integration", d: "Automatic calculation of GST, payments, and cost-per-part." }
          ],
          risks: "Wrong Master Entry (Garbage-In Garbage-Out), Data mismatch, Delayed entries.",
          kpi: "Data Accuracy (Inventory Match)",
          icon: "🖥️",
          color: "indigo"
        },
        {
          id: 3,
          title: "Data Management",
          obj: "The collection, protection, and systematic storage of all industrial knowledge.",
          desc: "Data is the new oil. If we don't store it properly, we can't improve. If we lose it, the factory stops.",
          workflow: ["Data Capture", "Secure Storage", "Daily Backup", "Encryption", "Archive Logic"],
          elements: [
            { h: "Centralized Servers", d: "Keeping all data in a central 'Safe' instead of individual PCs." },
            { h: "Backup & Recovery", d: "Daily copies of data stored in 2 different locations (Local + Cloud)." },
            { h: "Cyber Security", d: "Protecting data from hackers using Firewalls, Antivirus, and VPNs." },
            { h: "Data Logs", d: "Keeping history of who changed what and when." }
          ],
          risks: "Data theft, Permanent loss due to HDD failure, Virus/Ransomware.",
          kpi: "Recovery Time Objective (RTO)",
          icon: "🗄️",
          color: "cyan"
        },
        {
          id: 4,
          title: "MIS (Management Info System)",
          obj: "Turning raw numbers into intelligent dashboards for fast decision-making.",
          desc: "MIS is the eyes of the Management. It answers 'Are we profitable today?' in 10 seconds.",
          workflow: ["Data Collection", "Aggregation", "Chart Creation", "Report Dispatch", "Review Sync"],
          elements: [
            { h: "DPR (Daily Production Report)", d: "Summarizing output, rejection, and UPH for every shift." },
            { h: "Trend Analysis", d: "Visualizing if quality is getting better or worse over 6 months." },
            { h: "KPI Dashboards", d: "Live screens showing OEE and real-time status of the floor." },
            { h: "Exception Alerting", d: "Auto-emails when rejection goes above 5% or machine stops." }
          ],
          risks: "Fake/Manual data entry, Late reporting, Complex/Unclear charts.",
          kpi: "Insight-to-Action Time",
          icon: "📊",
          color: "emerald"
        },
        {
          id: 5,
          title: "Automation & Digitalization",
          obj: "Replacing paper and manual work with sensors, scanners, and IoT.",
          desc: "Industry 4.0 means the machine talks to the system without human intervention.",
          workflow: ["Process Mapping", "Sensor Install", "Network Sync", "Paperless Logic", "IoT Analytics"],
          elements: [
            { h: "Barcode & QR Systems", d: "Scanning parts at every stage for 100% traceability." },
            { h: "Machine Connectivity (IoT)", d: "Direct data capture from PLC to the ERP system." },
            { h: "Digital Checksheets", d: "Operators using Tablets/Apps instead of paper files." },
            { h: "Andon Systems", d: "Visual/Sound alerts for line stoppages and quality issues." }
          ],
          risks: "Network latency, Sensor failure, Operator tech-resistance.",
          kpi: "Digital Floor Coverage (%)",
          icon: "🤖",
          color: "purple"
        },
        {
          id: 6,
          title: "IT Infrastructure",
          obj: "The physical 'Body' of the technology: PCs, LAN, Servers, and Power.",
          desc: "Infrastructure is the foundation. If the Wi-Fi or Server is down, the whole 'Smart Factory' is useless.",
          workflow: ["Hardware Asset Audit", "Network Design", "Security Layering", "Ups/Power Sync", "Preventive AMC"],
          elements: [
            { h: "Network (LAN/WAN/Wi-Fi)", d: "Ensuring high-speed connectivity to every corner of the factory." },
            { h: "Server Room Mgmt", d: "Maintaining temperature, power backup, and physical security for servers." },
            { h: "Asset Lifecycle", d: "Regularly replacing old PCs/Laptops to avoid slow performance." },
            { h: "CCTV & Biometrics", d: "Security surveillance and digital attendance hardware." }
          ],
          risks: "Internet downtime, Server overheating, Power surges (UPS fail).",
          kpi: "Network Uptime (%)",
          icon: "🌐",
          color: "slate"
        }
      ]
    },
    hi: {
      back: "IT हब पर वापस जाएं",
      objective: "तकनीकी मिशन",
      workflow: "सिस्टम वर्कफ़्लो",
      subElements: "मॉड्यूल विवरण",
      risk: "मुख्य जोखिम (Risks)",
      kpi: "सफलता का पैमाना",
      sections: [
        {
          id: 1,
          title: "सॉफ्टवेयर मैनेजमेंट",
          obj: "फैक्ट्री चलाने वाले डिजिटल टूल्स का रखरखाव और नियंत्रण।",
          desc: "सॉफ्टवेयर फैक्ट्री के लिए 'दिमाग' जैसा है। बिना सही सॉफ्टवेयर के मशीनें लोहा हैं और इंसान सिर्फ अंदाज़ा लगा सकते हैं।",
          workflow: ["ज़रूरत पहचानना", "लाइसेंस खरीदना", "यूजर तय करना", "अपडेट करना", "सपोर्ट देना"],
          elements: [
            { h: "ऑपरेशनल सॉफ्टवेयर", d: "OEE ट्रैकर, क्वालिटी डेटा टूल और मेंटेनेंस लॉग्स।" },
            { h: "डिज़ाइन सॉफ्टवेयर (CAD)", d: "ड्राइंग और नक्शे बनाने के लिए SolidWorks और AutoCAD जैसे टूल।" },
            { h: "एक्सेस कंट्रोल", d: "तय करना कि कौन डेटा बदल सकता है और कौन सिर्फ देख सकता है।" },
            { h: "SaaS और लाइसेंस", d: "सॉफ्टवेयर के कानूनी उपयोग और सब्सक्रिप्शन को मैनेज करना।" }
          ],
          risks: "बिना लाइसेंस सॉफ्टवेयर (ऑडिट खतरा), सिस्टम हैंग होना, वायरस अटैक।",
          kpi: "सॉफ्टवेयर अप-टाइम (%)",
          icon: "💻",
          color: "blue"
        },
        {
          id: 2,
          title: "ERP (एंटरप्राइज रिसोर्स प्लानिंग)",
          obj: "एक ऐसा सिस्टम बनाना जहाँ हर विभाग का डेटा आपस में जुड़ा हो।",
          desc: "ERP रीढ़ की हड्डी है। जब खरीद (Purchase) एक पेंच खरीदती है, तो स्टोर उसे देख सकता है और अकाउंट्स पेमेंट कर सकता है—सब एक ही जगह।",
          workflow: ["मास्टर डेटा बनाना", "एंट्री करना", "रियल-टाइम सिंक", "चेकिंग", "रिपोर्टिंग"],
          elements: [
            { h: "मास्टर डेटा मैनेजमेंट", d: "पार्ट कोड, मटेरियल लिस्ट और वेंडर की सही जानकारी (बुनियाद)।" },
            { h: "मटेरियल मैनेजमेंट (MM)", d: "स्टॉक का आना-जाना और Min-Max लेवल को ऑटोमेटिक मैनेज करना।" },
            { h: "प्रोडक्शन प्लानिंग (PP)", d: "मशीन की क्षमता और ऑर्डर के हिसाब से काम तय करना।" },
            { h: "फाइनेंस इंटीग्रेशन", d: "GST, पेमेंट और प्रति-पार्ट लागत का अपने आप हिसाब।" }
          ],
          risks: "गलत मास्टर डेटा एंट्री, डेटा का न मिलना, देरी से एंट्री करना।",
          kpi: "डेटा की सटीकता (Stock Match)",
          icon: "🖥️",
          color: "indigo"
        },
        {
          id: 3,
          title: "डेटा मैनेजमेंट",
          obj: "फैक्ट्री के सभी ज्ञान (Information) को जमा करना, सुरक्षित रखना और व्यवस्थित करना।",
          desc: "डेटा ही नया 'तेल' है। अगर हम इसे सही से नहीं रखेंगे, तो सुधार नहीं कर पाएंगे। डेटा खोना मतलब फैक्ट्री रुकना।",
          workflow: ["डेटा कैप्चर", "सुरक्षित स्टोरेज", "डेली बैकअप", "एन्क्रिप्शन", "पुराना डेटा हटाना"],
          elements: [
            { h: "सेंट्रलाइज्ड सर्वर्स", d: "सारा डेटा अलग-अलग PC के बजाय एक मुख्य 'तिजोरी' (Server) में रखना।" },
            { h: "बैकअप और रिकवरी", d: "डेटा की कॉपी 2 अलग जगहों (Local + Cloud) पर रोज सुरक्षित करना।" },
            { h: "साइबर सुरक्षा", d: "फायरवॉल और एंटीवायरस के ज़रिए हैकर्स से डेटा बचाना।" },
            { h: "डेटा लॉग्स", d: "रिकॉर्ड रखना कि किसने, कब और क्या बदलाव किया।" }
          ],
          risks: "डेटा चोरी, कंप्यूटर खराब होने पर डेटा गायब होना, वायरस/रैंसमवेयर अटैक।",
          kpi: "डेटा रिकवरी समय",
          icon: "🗄️",
          color: "cyan"
        },
        {
          id: 4,
          title: "MIS (मैनेजमेंट रिपोर्टिंग)",
          obj: "डेटा को ग्राफ और रिपोर्ट्स में बदलना ताकि मैनेजमेंट तेज़ और सही फैसले ले सके।",
          desc: "MIS मैनेजमेंट की 'आँखें' हैं। यह 10 सेकंड में बताता है कि आज फैक्ट्री फायदे में है या घाटे में।",
          workflow: ["डेटा संग्रह", "कुल जोड़", "चार्ट बनाना", "रिपोर्ट भेजना", "रिव्यू मीटिंग"],
          elements: [
            { h: "डेली रिपोर्ट (DPR)", "d": "प्रोडक्शन, रिजेक्शन और UPH का हर शिफ्ट का सारांश।" },
            { h: "ट्रेंड एनालिसिस", d: "ग्राफ से देखना कि क्वालिटी सुधर रही है या बिगड़ रही है।" },
            { h: "KPI डैशबोर्ड", d: "लाइव स्क्रीन जो फ्लोर की असली स्थिति दिखाती है।" },
            { h: "अलर्ट सिस्टम", d: "रिजेक्शन बढ़ने या मशीन रुकने पर अपने आप ईमेल जाना।" }
          ],
          risks: "गलत डेटा एंट्री, रिपोर्ट मिलने में देरी, मुश्किल या अस्पष्ट चार्ट्स।",
          kpi: "रिपोर्टिंग रफ़्तार",
          icon: "📊",
          color: "emerald"
        },
        {
          id: 5,
          title: "ऑटोमेशन और डिजिटलीकरण",
          obj: "कागज़ी काम को खत्म करके सेंसर, स्कैनर और IoT का उपयोग करना।",
          desc: "इंडस्ट्री 4.0 का मतलब है मशीन खुद सिस्टम से बात करे, इंसान की ज़रूरत कम हो जाए।",
          workflow: ["प्रोसेस मैपिंग", "सेंसर लगाना", "नेटवर्क सिंक", "पेपरलेस नियम", "डेटा विश्लेषण"],
          elements: [
            { h: "बारकोड और QR सिस्टम", d: "हर स्टेप पर पार्ट को स्कैन करना ताकि 100% सही रिकॉर्ड मिले।" },
            { h: "IoT (मशीन जुड़ाव)", d: "मशीन से सीधा प्रोडक्शन डेटा ERP सिस्टम में पहुँचाना।" },
            { h: "डिजिटल चेकशीट", d: "कागज़ की जगह टैब (Tablet) या ऐप का इस्तेमाल।" },
            { h: "एंडॉन सिस्टम (Andon)", d: "मशीन रुकने पर लाइट या आवाज़ से तुरंत अलर्ट देना।" }
          ],
          risks: "नेटवर्क की धीमी रफ़्तार, सेंसर खराब होना, कर्मचारियों द्वारा तकनीक का विरोध।",
          kpi: "डिजिटल कवरेज (%)",
          icon: "🤖",
          color: "purple"
        },
        {
          id: 6,
          title: "IT इंफ्रास्ट्रक्चर",
          obj: "टेक्नोलॉजी का 'शरीर': कंप्यूटर, तार, सर्वर और बिजली का सही सेटअप।",
          desc: "इंफ्रास्ट्रक्चर ही बुनियाद है। अगर Wi-Fi या सर्वर बंद है, तो पूरी 'स्मार्ट फैक्ट्री' बेकार है।",
          workflow: ["हार्डवेयर ऑडिट", "नेटवर्क डिज़ाइन", "सुरक्षा लेयर्स", "पावर बैकअप", "रखरखाव"],
          elements: [
            { h: "नेटवर्क (Wi-Fi / LAN)", d: "फैक्ट्री के हर कोने में तेज़ इंटरनेट और कनेक्शन पक्का करना।" },
            { h: "सर्वर रूम मैनेजमेंट", d: "सर्वर के लिए तापमान, बिजली बैकअप और सुरक्षा का ध्यान रखना।" },
            { h: "एसेट लाइफ-साइकिल", d: "पुराने कंप्यूटर समय पर बदलना ताकि काम धीमा न हो।" },
            { h: "CCTV और बायोमेट्रिक्स", d: "सुरक्षा निगरानी और डिजिटल हाज़िरी की मशीनें।" }
          ],
          risks: "इंटरनेट का बंद होना, सर्वर रूम में गर्मी बढ़ना, पावर सर्ज (UPS फेल)।",
          kpi: "नेटवर्क रफ़्तार और स्टेबिलिटी",
          icon: "🌐",
          color: "slate"
        }
      ]
    }
  };

  const t = translations[lang] || translations['en'];
  const data = t.sections.find(s => s.id === sectionId);

  if (!data) return null;

  return (
    <div className="flex flex-col gap-8 animate-in slide-in-from-bottom-6 duration-700 pb-16 max-w-7xl mx-auto px-4 md:px-8 py-8 relative">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
          <svg width="100%" height="100%">
            <pattern id="it-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="cyan" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#it-grid)" />
          </svg>
      </div>

      {/* Header */}
      <div className={`flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-${data.color}-500/20 pb-6 bg-slate-950/40 p-8 rounded-t-[40px] backdrop-blur-md relative z-10`}>
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className={`w-3 h-3 bg-${data.color}-500 rounded-full animate-pulse shadow-[0_0_12px_cyan]`}></div>
              <span className={`text-${data.color}-400 text-[10px] font-black uppercase tracking-[0.4em]`}>IT Deep-Intel Node / 0{sectionId}</span>
           </div>
           <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none italic font-mono">{data.title}</h3>
        </div>
        <button onClick={onBack} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
          {t.back}
        </button>
      </div>

      {/* Core Objective Hero */}
      <div className={`bg-slate-900 border border-${data.color}-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group z-10`}>
         <div className={`absolute top-0 right-0 p-8 text-9xl font-black text-${data.color}-500/[0.03] select-none uppercase italic tracking-tighter`}>{data.icon}</div>
         <div className="relative z-10 space-y-8">
            <div className="space-y-4">
                <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-widest border-b-2 border-indigo-500 w-fit pb-2">{t.objective}</h4>
                <p className="text-slate-100 text-lg md:text-3xl font-bold leading-relaxed italic max-w-4xl">
                   "{data.obj}"
                </p>
            </div>
            <div className="bg-white/5 p-6 rounded-[32px] border-l-8 border-indigo-500 shadow-inner group-hover:bg-white/10 transition-colors">
                <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">
                   "💡 {data.desc}"
                </p>
            </div>
         </div>
      </div>

      {/* Workflow Stepper */}
      <div className="bg-slate-950/60 border border-white/10 p-10 rounded-[48px] shadow-2xl space-y-12 relative z-10">
         <h4 className="text-white text-center font-black text-xl md:text-2xl uppercase tracking-[0.3em] italic">{t.workflow}</h4>
         <div className="flex flex-wrap justify-center gap-6 md:gap-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 hidden md:block"></div>
            {data.workflow.map((step, i) => (
               <div key={i} className="flex flex-col items-center gap-4 group relative z-10 w-32">
                  <div className={`w-14 h-14 rounded-2xl bg-slate-900 border-2 border-${data.color}-500/50 flex items-center justify-center text-white font-black text-lg shadow-lg group-hover:scale-110 transition-transform group-hover:bg-indigo-600 group-hover:border-white`}>
                     {i + 1}
                  </div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-center group-hover:text-white transition-colors">{step}</span>
               </div>
            ))}
         </div>
      </div>

      {/* Main Elements Grid */}
      <div className="space-y-8 z-10">
         <h4 className="text-white text-[10px] font-black uppercase tracking-[0.5em]">{t.subElements}</h4>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.elements.map((el, i) => (
               <div key={i} className="bg-slate-900/60 border border-white/5 p-8 rounded-[40px] hover:bg-slate-800 transition-all group flex flex-col gap-4 shadow-xl h-full border-b-4 border-b-indigo-500/20">
                  <div className="flex items-center justify-between">
                     <h5 className="text-white font-black text-lg md:text-xl uppercase tracking-tight group-hover:text-cyan-400 transition-colors">{el.h}</h5>
                     <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                  </div>
                  <p className="text-slate-400 text-sm font-bold leading-relaxed italic">"{el.d}"</p>
               </div>
            ))}
         </div>
      </div>

      {/* Risks & KPI Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch z-10">
         {/* Risks Section */}
         <div className="lg:col-span-7 bg-rose-950/20 border border-rose-500/30 p-10 rounded-[48px] shadow-2xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-4xl opacity-5">⚠️</div>
            <h4 className="text-rose-500 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
               <span className="w-12 h-0.5 bg-rose-500 shadow-[0_0_10px_rose]"></span>
               {t.risk}
            </h4>
            <p className="text-white text-lg md:text-xl font-black italic tracking-tight leading-relaxed max-w-2xl">
               "{data.risks}"
            </p>
            <div className="bg-rose-500/10 p-5 rounded-2xl border border-rose-500/20">
               <p className="text-rose-400 text-[9px] font-black uppercase tracking-widest italic">
                  Critical Vulnerability Node
               </p>
            </div>
         </div>

         {/* KPI Node */}
         <div className={`lg:col-span-5 bg-slate-900 border border-${data.color}-500/30 p-10 rounded-[48px] shadow-2xl space-y-8 backdrop-blur-xl relative overflow-hidden flex flex-col items-center justify-center text-center group`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-transparent"></div>
            <div className="space-y-4 relative z-10">
               <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em]">{t.kpi}</h4>
               <div className="bg-slate-950 p-8 rounded-full border-4 border-indigo-500/40 w-48 h-48 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.1)] group-hover:scale-105 transition-transform duration-700">
                  <span className="text-5xl group-hover:rotate-12 transition-transform">🎯</span>
                  <p className="text-white font-black text-base uppercase mt-4 leading-tight tracking-tighter">{data.kpi}</p>
               </div>
            </div>
         </div>
      </div>

      {/* System Status Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 relative z-10">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className={`w-2.5 h-2.5 bg-${data.color}-500 rounded-full shadow-[0_0_12px_cyan] animate-pulse`}></span>
                Information Integrity: Validated
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_10px_emerald]"></span>
                System Sync: 100%
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">IT-CORE Framework v16.4.2 // Detail Extraction Module</div>
      </div>
    </div>
  );
};

export default ITSectionDetail;

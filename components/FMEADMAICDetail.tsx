
import React, { useState } from 'react';
import { Language } from '../types';
import { EmptyState } from './ui/EmptyState';
import { motion, AnimatePresence } from 'motion/react';

interface FMEADMAICDetailProps {
  onBack: () => void;
  lang: Language;
}

const FMEADMAICDetail: React.FC<FMEADMAICDetailProps> = ({ onBack, lang }) => {
  const [activeTab, setActiveTab] = useState<'fmea' | 'dmaic' | 'comparison'>('fmea');
  const [selectedFmeaType, setSelectedFmeaType] = useState<string | null>(null);
  const [fmeaSubTab, setFmeaSubTab] = useState<'overview' | 'flow' | 'pfmea' | 'control'>('overview');

  const content = {
    en: {
      title: "Risk & Improvement Hub",
      subtitle: "Preventive & Corrective Frameworks",
      backBtn: "Back to IPQC",
      tabs: ["FMEA (Preventive)", "DMAIC (Corrective)", "The Difference"],
      fmeaSubTabs: [
        { id: 'overview', label: 'Overview' },
        { id: 'flow', label: 'Process Flow' },
        { id: 'pfmea', label: 'PFMEA Table' },
        { id: 'control', label: 'Control Plan' }
      ],
      statusLabels: {
        completed: "Completed",
        pending: "Pending",
        overdue: "Overdue"
      },
      priorityLabels: {
        high: "High",
        medium: "Medium",
        low: "Low"
      },
      fmea: {
        header: "FMEA",
        fullForm: "Failure Mode and Effects Analysis",
        mantra: "Think about the problem BEFORE it happens.",
        definition: "FMEA is a preventive quality tool used to identify possible failures in a process or product and reduce their risk early.",
        processFlow: {
          title: "Cabinet Assembly Process Flow",
          steps: [
            { id: 1, name: "Material Receiving", desc: "Inspection of raw boards", icon: "📥" },
            { id: 2, name: "Panel Cutting", desc: "Precision sizing", icon: "🪚" },
            { id: 3, name: "Edge Banding", desc: "Finishing edges", icon: "📏" },
            { id: 4, name: "Drilling", desc: "Hole placement", icon: "🔘" },
            { id: 5, name: "Assembly", desc: "Joining panels", icon: "🔨" },
            { id: 6, name: "Quality Check", desc: "Final inspection", icon: "✅" },
            { id: 7, name: "Packing", desc: "Protection & Boxing", icon: "📦" }
          ]
        },
        pfmeaTable: {
          title: "PFMEA: Cabinet Assembly",
          headers: ["Process Step", "Failure Mode", "S", "O", "D", "RPN", "Action", "Priority", "Status"],
          rows: [
            { step: "Material Receiving", mode: "Defective Raw Board", cause: "Supplier Quality", s: 7, o: 3, d: 5, rpn: 105, action: "100% Visual Inspection + Moisture Check", priority: "medium", status: "completed" },
            { step: "Panel Cutting", mode: "Dimensional Error", cause: "Blade Wear", s: 8, o: 3, d: 4, rpn: 96, action: "Blade replacement schedule", priority: "medium", status: "completed" },
            { step: "Edge Banding", mode: "Poor Adhesion", cause: "Low Glue Temp", s: 6, o: 4, d: 3, rpn: 72, action: "Digital temp monitoring", priority: "low", status: "completed" },
            { step: "Drilling", mode: "Misaligned Holes", cause: "Jig Loosening", s: 9, o: 2, d: 4, rpn: 72, action: "Hourly jig verification", priority: "low", status: "pending" },
            { step: "Assembly", mode: "Loose Joints", cause: "Low Glue Pressure", s: 7, o: 4, d: 3, rpn: 84, action: "Auto-pressure monitor", priority: "high", status: "pending" },
            { step: "Handling", mode: "Scratch on Surface", cause: "Improper Stacking", s: 8, o: 6, d: 5, rpn: 240, action: "Apply Protective Film + SOP Update", priority: "high", status: "overdue" },
            { step: "Packing", mode: "Inadequate Protection", cause: "Wrong Box Size", s: 5, o: 2, d: 2, rpn: 20, action: "Standardize box sizes", priority: "low", status: "completed" }
          ]
        },
        controlPlan: {
          title: "Control Plan: Surface Protection",
          target: "Failure Mode: Scratch on Surface",
          headers: ["Characteristic", "Specification", "Method", "Freq", "Responsibility", "Reaction Plan", "Status"],
          rows: [
            { char: "Surface Finish", spec: "Zero Scratches", method: "Visual Inspection", freq: "100%", resp: "Operator", reaction: "Quarantine & Re-train", status: "completed" },
            { char: "Film Adhesion", spec: "No Bubbles", method: "Peel Test", freq: "1/Shift", resp: "QC Inspector", reaction: "Adjust Applicator", status: "pending" },
            { char: "Stacking Height", spec: "Max 10 Panels", method: "Measurement", freq: "Hourly", resp: "Supervisor", reaction: "Restack & Correct", status: "overdue" },
            { char: "Protective Film", spec: "Full Coverage", method: "Visual Check", freq: "Every Panel", resp: "Operator", reaction: "Re-apply Film", status: "completed" },
            { char: "Handling Gear", spec: "Clean Gloves", method: "Visual Check", freq: "Start of Shift", resp: "Operator", reaction: "Replace Gloves", status: "completed" }
          ]
        },
        typesTitle: "Click to explore FMEA Types",
        types: [
          { 
            id: "dfmea",
            name: "DFMEA (Design)", 
            full: "Design Failure Mode & Effects Analysis",
            desc: "Performed at the drawing/blueprint stage. Focuses on product design failures.",
            focus: ["Material strength", "Part dimensions", "Functionality failures"]
          },
          { 
            id: "pfmea",
            name: "PFMEA (Process)", 
            full: "Process Failure Mode & Effects Analysis",
            desc: "Performed during manufacturing. Focuses on assembly and process failures.",
            focus: ["Operator errors", "Machine settings", "Tooling wear and tear"]
          },
          { 
            id: "sfmea",
            name: "System FMEA", 
            full: "System Failure Mode & Effects Analysis",
            desc: "Looks at the entire factory system. Focuses on interactions between departments.",
            focus: ["IT system failure", "Supply chain gaps", "Safety system integration"]
          }
        ],
        elements: [
          { t: "Failure Mode", m: "What can go wrong?" },
          { t: "Effect", m: "What happens if it fails?" },
          { t: "Cause", m: "Why would it fail?" },
          { t: "Control", m: "Current prevention/detection." }
        ],
        factors: [
          { n: "Severity (S)", d: "How serious is the impact?", scale: "1-10" },
          { n: "Occurrence (O)", d: "How often could it happen?", scale: "1-10" },
          { n: "Detection (D)", d: "Probability of catching it.", scale: "1-10" }
        ],
        rpnHeader: "RPN Full Form:",
        rpnFull: "Risk Priority Number",
        rpnFormula: "RPN = S × O × D",
        rpnNote: "High RPN (>100) = Action Required!",
        example: {
          process: "Cabinet Assembly",
          fail: "Scratch on surface",
          cause: "Improper Handling",
          math: "8(S) x 6(O) x 5(D) = 240 RPN",
          fix: "Add Protective Film + Update SOP"
        }
      },
      dmaic: {
        header: "DMAIC",
        fullForm: "Define, Measure, Analyze, Improve, Control",
        mantra: "Fix the problem AFTER it happens (Roadmap).",
        definition: "A structured Six Sigma methodology to reduce defects and variation in existing processes using data.",
        phases: [
          { l: "D – Define", d: "Problem: 8% Scratch Rejection. Goal: Reduce to 2%.", icon: "🎯" },
          { l: "M – Measure", d: "Collect current data. Scratch is the #1 defect.", icon: "📊" },
          { l: "A – Analyze", d: "Use 5-Why/Fishbone. Root Cause: Poor packing.", icon: "🔍" },
          { l: "I – Improve", d: "Implement new trays + Operator training.", icon: "🛠️" },
          { l: "C – Control", d: "Update SOP + Hourly audits. Monitor via SPC.", icon: "🛡️" }
        ]
      },
      comparison: {
        title: "FMEA vs DMAIC",
        headers: ["Point", "FMEA", "DMAIC"],
        rows: [
          { p: "Nature", f: "Preventive (बचाव)", d: "Corrective (सुधार)" },
          { p: "Timing", f: "Before Problem", d: "After Problem" },
          { p: "Focus", f: "Risk Analysis", d: "Process Improvement" },
          { p: "Method", f: "Risk-based", d: "Data-driven" }
        ],
        decision: {
          title: "Decision Logic",
          fmea: "New Line / New Model Launch",
          dmaic: "High Rejection / Customer Complaint"
        }
      }
    },
    hi: {
      title: "रिस्क और सुधार केंद्र",
      subtitle: "बचाव और सुधार का ढांचा",
      backBtn: "IPQC पर वापस जाएं",
      tabs: ["FMEA (बचाव)", "DMAIC (सुधार)", "दोनों में अंतर"],
      fmeaSubTabs: [
        { id: 'overview', label: 'ओवरव्यू' },
        { id: 'flow', label: 'प्रोसेस फ्लो' },
        { id: 'pfmea', label: 'PFMEA टेबल' },
        { id: 'control', label: 'कंट्रोल प्लान' }
      ],
      statusLabels: {
        completed: "पूरा हुआ",
        pending: "लंबित",
        overdue: "समय सीमा समाप्त"
      },
      priorityLabels: {
        high: "उच्च",
        medium: "मध्यम",
        low: "निम्न"
      },
      fmea: {
        header: "FMEA",
        fullForm: "Failure Mode and Effects Analysis",
        mantra: "समस्या आने से पहले समस्या के बारे में सोचना।",
        definition: "FMEA एक प्रिवेंटिव टूल है जिससे प्रोसेस की संभावित गलतियों को पहले ही पहचान कर रिस्क कम किया जाता है।",
        processFlow: {
          title: "कैबिनेट असेंबली प्रोसेस फ्लो",
          steps: [
            { id: 1, name: "मटेरियल रिसीविंग", desc: "बोर्ड का निरीक्षण", icon: "📥" },
            { id: 2, name: "पैनल कटिंग", desc: "सटीक साइजिंग", icon: "🪚" },
            { id: 3, name: "एज बैंडिंग", desc: "किनारों की फिनिशिंग", icon: "📏" },
            { id: 4, name: "ड्रिलिंग", desc: "छेद का स्थान", icon: "🔘" },
            { id: 5, name: "असेंबली", desc: "पैनल जोड़ना", icon: "🔨" },
            { id: 6, name: "क्वालिटी चेक", desc: "अंतिम निरीक्षण", icon: "✅" },
            { id: 7, name: "पैकिंग", desc: "सुरक्षा और बॉक्सिंग", icon: "📦" }
          ]
        },
        pfmeaTable: {
          title: "PFMEA: कैबिनेट असेंबली",
          headers: ["प्रोसेस स्टेप", "फेलियर मोड", "S", "O", "D", "RPN", "सुधार", "प्राथमिकता", "स्थिति"],
          rows: [
            { step: "मटेरियल रिसीविंग", mode: "खराब बोर्ड", cause: "सप्लायर क्वालिटी", s: 7, o: 3, d: 5, rpn: 105, action: "100% विजुअल चेक + नमी जांच", priority: "medium", status: "completed" },
            { step: "पैनल कटिंग", mode: "साइज में गलती", cause: "ब्लेड घिसना", s: 8, o: 3, d: 4, rpn: 96, action: "ब्लेड बदलने का शेड्यूल", priority: "medium", status: "completed" },
            { step: "एज बैंडिंग", mode: "खराब चिपकना", cause: "कम ग्लू तापमान", s: 6, o: 4, d: 3, rpn: 72, action: "डिजिटल तापमान निगरानी", priority: "low", status: "completed" },
            { step: "ड्रिलिंग", mode: "गलत छेद", cause: "जिग ढीला होना", s: 9, o: 2, d: 4, rpn: 72, action: "प्रति घंटा जिग चेक", priority: "low", status: "pending" },
            { step: "असेंबली", mode: "ढीले जोड़", cause: "कम ग्लू प्रेशर", s: 7, o: 4, d: 3, rpn: 84, action: "प्रेशर मॉनिटरिंग", priority: "high", status: "pending" },
            { step: "हैंडलिंग", mode: "सतह पर खरोंच", cause: "गलत स्टैकिंग", s: 8, o: 6, d: 5, rpn: 240, action: "प्रोटेक्टिव फिल्म + SOP अपडेट", priority: "high", status: "overdue" },
            { step: "पैकिंग", mode: "कम सुरक्षा", cause: "गलत बॉक्स साइज", s: 5, o: 2, d: 2, rpn: 20, action: "बॉक्स साइज मानक करें", priority: "low", status: "completed" }
          ]
        },
        controlPlan: {
          title: "कंट्रोल प्लान: सतह सुरक्षा",
          target: "फेलियर मोड: सतह पर खरोंच",
          headers: ["विशेषता", "स्पेसिफिकेशन", "तरीका", "फ्रीक्वेंसी", "जिम्मेदारी", "रिएक्शन प्लान", "स्थिति"],
          rows: [
            { char: "सतह फिनिश", spec: "जीरो स्क्रैच", method: "विजुअल चेक", freq: "100%", resp: "ऑपरेटर", reaction: "क्वारंटाइन और ट्रेनिंग", status: "completed" },
            { char: "फिल्म चिपकना", spec: "बुलबुले नहीं", method: "पील टेस्ट", freq: "1/शिफ्ट", resp: "QC इंस्पेक्टर", reaction: "मशीन एडजस्ट करें", status: "pending" },
            { char: "स्टैकिंग ऊंचाई", spec: "मैक्स 10 पैनल", method: "माप", freq: "प्रति घंटा", resp: "सुपरवाइजर", reaction: "सही ढंग से रखें", status: "overdue" },
            { char: "प्रोटेक्टिव फिल्म", spec: "पूरी कवरेज", method: "विजुअल चेक", freq: "हर पैनल", resp: "ऑपरेटर", reaction: "फिल्म दोबारा लगाएं", status: "completed" },
            { char: "हैंडलिंग गियर", spec: "साफ दस्ताने", method: "विजुअल चेक", freq: "शिफ्ट की शुरुआत", resp: "ऑपरेटर", reaction: "दस्ताने बदलें", status: "completed" }
          ]
        },
        typesTitle: "FMEA के प्रकारों पर क्लिक करें",
        types: [
          { 
            id: "dfmea",
            name: "DFMEA (डिज़ाइन)", 
            full: "Design Failure Mode & Effects Analysis",
            desc: "प्रोडक्ट के नक्शे/डिज़ाइन स्टेज पर। प्रोडक्ट की डिज़ाइन में होने वाली कमियों पर ध्यान।",
            focus: ["मटेरियल की मजबूती", "सही माप (Dimensions)", "फंक्शनल फेलियर"]
          },
          { 
            id: "pfmea",
            name: "PFMEA (प्रोसेस)", 
            full: "Process Failure Mode & Effects Analysis",
            desc: "सामान बनाने या असेंबली के दौरान। काम करने के तरीके की गलतियों पर ध्यान।",
            focus: ["ऑपरेटर की गलती", "मशीन की गलत सेटिंग", "टूल्स की घिसाई (Wear)"]
          },
          { 
            id: "sfmea",
            name: "System FMEA (सिस्टम)", 
            full: "System Failure Mode & Effects Analysis",
            desc: "पूरी फैक्ट्री या सिस्टम लेवल पर। अलग-अलग विभागों के बीच तालमेल पर ध्यान।",
            focus: ["IT सिस्टम फेलियर", "सप्लाई चेन में कमी", "सुरक्षा सिस्टम में रिस्क"]
          }
        ],
        elements: [
          { t: "Failure Mode", m: "क्या गलत हो सकता है?" },
          { t: "Effect", m: "अगर फेल हुआ तो क्या असर होगा?" },
          { t: "Cause", m: "फेल क्यों होगा? (वजह)" },
          { t: "Control", m: "अभी हम इसे कैसे रोक रहे हैं?" }
        ],
        factors: [
          { n: "Severity (S)", d: "असर कितना गंभीर है?", scale: "1-10" },
          { n: "Occurrence (O)", d: "यह गलती कितनी बार हो सकती है?", scale: "1-10" },
          { n: "Detection (D)", d: "क्या हम इसे पकड़ पाएंगे?", scale: "1-10" }
        ],
        rpnHeader: "RPN का फुल फॉर्म:",
        rpnFull: "Risk Priority Number (रिस्क प्रायोरिटी नंबर)",
        rpnFormula: "RPN = S × O × D",
        rpnNote: "हाई RPN (>100) = तुरंत सुधार!",
        example: {
          process: "कैबिनेट असेंबली",
          fail: "पार्ट पर खरोंच (Scratch)",
          cause: "गलत हैंडलिंग",
          math: "8(S) x 6(O) x 5(D) = 240 RPN",
          fix: "प्रोटेक्टिव फिल्म + SOP में बदलाव"
        }
      },
      dmaic: {
        header: "DMAIC",
        fullForm: "Define, Measure, Analyze, Improve, Control",
        mantra: "समस्या आने के बाद उसे डेटा के ज़रिए सुधारना।",
        definition: "सिक्स सिग्मा (Six Sigma) का एक तरीका जिससे पुराने प्रोसेस की गलतियों को स्टेप-बाय-स्टेप सुधारा जाता है।",
        phases: [
          { l: "D – Define (परिभाषा)", d: "समस्या: 8% स्क्रैच रिजेक्शन। लक्ष्य: 2% तक लाना।", icon: "🎯" },
          { l: "M – Measure (माप)", d: "डेटा जमा करें। पता करें समस्या कितनी बड़ी है।", icon: "📊" },
          { l: "A – Analyze (विश्लेषण)", d: "5-Why और फिशबोन से जड़ (Root Cause) ढूंढें।", icon: "🔍" },
          { l: "I – Improve (सुधार)", d: "नया समाधान और ऑपरेटर ट्रेनिंग लागू करें।", icon: "🛠️" },
          { l: "C – Control (नियंत्रण)", d: "SOP अपडेट करें और SPC से निगरानी रखें।", icon: "🛡️" }
        ]
      },
      comparison: {
        title: "FMEA बनाम DMAIC",
        headers: ["बिंदु", "FMEA", "DMAIC"],
        rows: [
          { p: "प्रकृति (Nature)", f: "Preventive (बचाव)", d: "Corrective (सुधार)" },
          { p: "समय", f: "समस्या आने से पहले", d: "समस्या आने के बाद" },
          { p: "ध्यान (Focus)", f: "जोखिम (Risk) पर", d: "सुधार (Improvement) पर" },
          { p: "टूल्स", f: "अनुभव आधारित", d: "डेटा आधारित" }
        ],
        decision: {
          title: "कब किसका उपयोग करें?",
          fmea: "नई लाइन या नए मॉडल के समय",
          dmaic: "ज़्यादा रिजेक्शन या कस्टमर शिकायत पर"
        }
      }
    }
  };

  const current = content[lang] || content['en'];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'completed':
        return { color: 'text-emerald-400', bg: 'bg-emerald-500/20', icon: '✅' };
      case 'pending':
        return { color: 'text-amber-400', bg: 'bg-amber-500/20', icon: '⏳' };
      case 'overdue':
        return { color: 'text-rose-500', bg: 'bg-rose-500/20', icon: '⚠️' };
      default:
        return { color: 'text-slate-400', bg: 'bg-slate-500/20', icon: '•' };
    }
  };

  const getPriorityStyle = (priority: string) => {
    switch (priority) {
      case 'high':
        return { color: 'text-rose-400', border: 'border-rose-500/30', bg: 'bg-rose-500/10' };
      case 'medium':
        return { color: 'text-amber-400', border: 'border-amber-500/30', bg: 'bg-amber-500/10' };
      case 'low':
        return { color: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10' };
      default:
        return { color: 'text-slate-400', border: 'border-slate-500/30', bg: 'bg-slate-500/10' };
    }
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-indigo-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(99,102,241,0.8)]"></div>
              <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono">FMEA & DMAIC</h3>
        </div>
        <motion.button 
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBack}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {current.backBtn}
        </motion.button>
      </div>

      {/* Hero Section */}
      <div className="bg-slate-900 border border-indigo-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
         <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/[0.02] select-none uppercase italic">Standards</div>
         <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
               <div className="w-20 h-20 bg-indigo-500 rounded-3xl flex items-center justify-center text-white text-4xl font-black shadow-lg">
                  {activeTab === 'fmea' ? 'F' : activeTab === 'dmaic' ? 'D' : 'Q'}
               </div>
               <div className="flex flex-col">
                  <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none italic">
                     {activeTab === 'fmea' ? current.fmea.header : activeTab === 'dmaic' ? current.dmaic.header : 'Strategy'}
                  </h4>
                  <p className="text-indigo-400 font-black text-xs md:text-sm uppercase tracking-[0.3em] mt-2">
                     {activeTab === 'fmea' ? current.fmea.fullForm : activeTab === 'dmaic' ? current.dmaic.fullForm : 'Kanyal Excellence'}
                  </p>
               </div>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border-l-4 border-indigo-500">
               <p className="text-slate-100 text-lg md:text-2xl font-black leading-tight italic">
                  "{activeTab === 'fmea' ? current.fmea.mantra : activeTab === 'dmaic' ? current.dmaic.mantra : 'Always choosing the right tool for the job.'}"
               </p>
            </div>
         </div>
         {activeTab !== 'comparison' && (
           <div className="hidden lg:flex w-48 h-48 rounded-full border-4 border-dashed border-indigo-500/20 items-center justify-center animate-[spin_40s_linear_infinite]">
              <div className="text-6xl">{activeTab === 'fmea' ? '🛡️' : '🛠️'}</div>
           </div>
         )}
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 bg-slate-950/40 p-2 rounded-2xl border border-white/5 w-fit">
         {['fmea', 'dmaic', 'comparison'].map((tab, idx) => (
           <motion.button 
             key={tab}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             onClick={() => setActiveTab(tab as any)}
             className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${activeTab === tab ? 'bg-white text-slate-950 shadow-lg scale-105' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
           >
             {current.tabs[idx]}
           </motion.button>
         ))}
      </div>

      {/* Content Area */}
      <div className="min-h-[600px]">
        {activeTab === 'fmea' && (
          <div className="animate-in slide-in-from-right-4 duration-500 space-y-10">
            {/* FMEA Sub-Tabs */}
            <div className="flex flex-wrap gap-2 bg-slate-900/40 p-1.5 rounded-xl border border-white/5 w-fit">
              {current.fmeaSubTabs.map((sub) => (
                <motion.button
                  key={sub.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFmeaSubTab(sub.id as any)}
                  className={`px-6 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${fmeaSubTab === sub.id ? 'bg-indigo-500 text-white shadow-lg' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
                >
                  {sub.label}
                </motion.button>
              ))}
            </div>

            {fmeaSubTab === 'overview' && (
              <div className="space-y-10 animate-in fade-in duration-500">
                {/* RPN Callout - Full Form Focus */}
                <div className="bg-slate-950/80 border-2 border-amber-500/30 p-8 rounded-[40px] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
                   <div className="space-y-2">
                      <h5 className="text-amber-500 font-black text-xs md:text-sm uppercase tracking-[0.4em]">{current.fmea.rpnHeader}</h5>
                      <p className="text-white text-2xl md:text-5xl font-black uppercase italic tracking-tighter drop-shadow-lg">{current.fmea.rpnFull}</p>
                   </div>
                   <div className="bg-slate-900 px-10 py-6 rounded-3xl border border-white/10 text-center shadow-inner group">
                      <p className="text-2xl md:text-4xl font-black text-amber-500 italic tracking-tighter mb-1 group-hover:scale-110 transition-transform">{current.fmea.rpnFormula}</p>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{current.fmea.rpnNote}</span>
                   </div>
                </div>

                {/* FMEA Types - Interactive Section */}
                <div className="space-y-6">
                   <div className="flex items-center gap-4">
                      <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.5em] whitespace-nowrap">{current.fmea.typesTitle}</h4>
                      <div className="h-px w-full bg-white/10"></div>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {current.fmea.types.map((type) => (
                        <motion.button 
                          key={type.id}
                          onClick={() => setSelectedFmeaType(selectedFmeaType === type.id ? null : type.id)}
                          whileHover={{ 
                            scale: 1.02,
                            borderColor: "rgba(99, 102, 241, 0.5)",
                            backgroundColor: "rgba(15, 23, 42, 0.8)"
                          }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative bg-slate-900/60 border rounded-[32px] p-8 transition-all group overflow-hidden text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950 ${selectedFmeaType === type.id ? 'border-indigo-500 ring-2 ring-indigo-500/20' : 'border-white/5'}`}
                        >
                          <div className="flex flex-col gap-4 relative z-10">
                             <div className="flex items-center justify-between">
                                <span className="text-indigo-400 font-black text-[10px] uppercase tracking-widest">{type.name}</span>
                                <div className={`w-8 h-8 rounded-full border border-indigo-500/30 flex items-center justify-center transition-transform ${selectedFmeaType === type.id ? 'rotate-180' : ''}`}>
                                   <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                                </div>
                             </div>
                             <h5 className="text-white text-lg font-black uppercase tracking-tight">{type.full}</h5>
                             
                             {selectedFmeaType === type.id && (
                               <div className="animate-in slide-in-from-top-2 duration-300 space-y-6 mt-4 pt-6 border-t border-white/5">
                                  <p className="text-slate-400 text-sm font-medium leading-relaxed italic">"{type.desc}"</p>
                                  <div className="space-y-3">
                                     <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Core Focus:</span>
                                     <div className="flex flex-wrap gap-2">
                                        {type.focus.map((f, i) => (
                                          <span key={i} className="bg-white/5 text-slate-300 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase">{f}</span>
                                        ))}
                                     </div>
                                  </div>
                               </div>
                             )}
                          </div>
                          <div className="absolute -bottom-6 -right-6 text-9xl font-black text-white/[0.01] select-none uppercase italic group-hover:text-white/[0.03] transition-colors">{type.id.slice(0, 1)}</div>
                        </motion.button>
                      ))}
                   </div>
                </div>

                {/* Elements & Logic Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                   <div className="lg:col-span-8 space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                         {current.fmea.factors.map((f, i) => (
                            <div key={i} className="bg-slate-950/40 border border-white/5 p-6 rounded-3xl hover:bg-slate-900 transition-all group border-t-4 border-t-amber-500/50">
                               <div className="flex justify-between items-center mb-4">
                                  <span className="text-amber-500 font-black text-xs uppercase">{f.n}</span>
                                  <span className="bg-white/5 px-2 py-0.5 rounded text-[8px] text-slate-500 font-black">SCALE {f.scale}</span>
                               </div>
                               <p className="text-white text-xs font-bold leading-relaxed">{f.d}</p>
                            </div>
                         ))}
                      </div>

                      <div className="bg-slate-900/40 border border-white/10 rounded-[32px] overflow-hidden">
                         <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
                            <span className="text-white text-[10px] font-black uppercase tracking-widest">Main FMEA Elements</span>
                            <span className="text-amber-500 text-[8px] font-black uppercase tracking-[0.4em]">Analysis Core</span>
                         </div>
                         <div className="grid grid-cols-1 divide-y divide-white/5">
                            {current.fmea.elements.map((el, i) => (
                               <div key={i} className="p-6 flex items-center gap-6 hover:bg-white/5 transition-all group">
                                  <span className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center text-amber-500 font-black text-xs group-hover:scale-110 transition-transform">0{i+1}</span>
                                  <div>
                                     <h6 className="text-white font-black text-xs uppercase tracking-tight">{el.t}</h6>
                                     <p className="text-slate-400 text-[10px] font-bold uppercase mt-1">{el.m}</p>
                                  </div>
                               </div>
                            ))}
                         </div>
                      </div>
                   </div>

                   {/* Example Case */}
                   <div className="lg:col-span-4 bg-slate-950 border-2 border-indigo-500/20 p-8 rounded-[40px] shadow-2xl flex flex-col gap-6 relative overflow-hidden">
                      <span className="text-indigo-400 text-[9px] font-black uppercase tracking-[0.5em] block text-center italic">Cabinet Assembly Case</span>
                      <div className="space-y-4">
                         <div className="flex justify-between items-center text-[10px] font-bold uppercase">
                            <span className="text-slate-500">Problem:</span>
                            <span className="text-white">{current.fmea.example.fail}</span>
                         </div>
                         <div className="p-5 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-center">
                            <p className="text-rose-400 font-black text-xl leading-none">{current.fmea.example.math}</p>
                         </div>
                         <div className="p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
                            <span className="block text-[8px] font-black text-emerald-500 uppercase mb-2">Recommended Action</span>
                            <p className="text-white text-[11px] font-black italic">{current.fmea.example.fix}</p>
                         </div>
                      </div>
                      <div className="mt-4 pt-6 border-t border-white/5 text-center">
                         <p className="text-[9px] text-slate-500 font-bold uppercase italic leading-relaxed">
                            "Goal of FMEA is to reduce RPN below the threshold."
                         </p>
                      </div>
                   </div>
                </div>
              </div>
            )}

            {fmeaSubTab === 'flow' && (
              <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-8">
                <div className="bg-slate-900/40 p-6 md:p-12 rounded-[40px] border border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30"></div>
                  <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight mb-12 text-center flex items-center justify-center gap-4">
                    <span className="w-8 h-px bg-indigo-500"></span>
                    {current.fmea.processFlow.title}
                    <span className="w-8 h-px bg-indigo-500"></span>
                  </h4>
                  
                  <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 z-0"></div>
                    
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative z-10">
                      {current.fmea.processFlow.steps.map((step, i) => (
                        <div key={step.id} className="flex flex-col items-center gap-4 group w-full md:w-auto">
                          <div className="relative">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-slate-950 border border-indigo-500/30 flex items-center justify-center text-3xl md:text-4xl shadow-2xl group-hover:border-indigo-500 group-hover:scale-110 transition-all duration-300 relative z-10">
                              {step.icon}
                            </div>
                            <div className="absolute -inset-2 bg-indigo-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-[10px] font-black text-white border-2 border-slate-900">
                              {step.id}
                            </div>
                          </div>
                          
                          <div className="text-center max-w-[120px]">
                            <p className="text-white text-[10px] md:text-xs font-black uppercase tracking-tight group-hover:text-indigo-400 transition-colors">{step.name}</p>
                            <p className="text-slate-500 text-[8px] md:text-[9px] font-bold uppercase mt-1 leading-tight">{step.desc}</p>
                          </div>

                          {i !== current.fmea.processFlow.steps.length - 1 && (
                            <div className="md:hidden flex flex-col items-center gap-1">
                              <div className="w-0.5 h-4 bg-indigo-500/30"></div>
                              <svg className="w-3 h-3 text-indigo-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-6 md:gap-12">
                     <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Value Added Step</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Inspection Point</span>
                     </div>
                  </div>
                </div>
              </div>
            )}

            {fmeaSubTab === 'pfmea' && (
              <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-8">
                <div className="bg-slate-900/40 p-8 rounded-[40px] border border-white/5 overflow-hidden">
                  <h4 className="text-white text-xl font-black uppercase tracking-tight mb-8">{current.fmea.pfmeaTable.title}</h4>
                  <div className="overflow-x-auto">
                    {current.fmea.pfmeaTable.rows.length > 0 ? (
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-white/10">
                            {current.fmea.pfmeaTable.headers.map((h, i) => (
                              <th key={i} className="py-4 px-4 text-[9px] font-black uppercase tracking-widest text-slate-500">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {current.fmea.pfmeaTable.rows.map((row, i) => {
                            const statusStyle = getStatusStyle(row.status);
                            const priorityStyle = getPriorityStyle(row.priority);
                            return (
                              <tr key={i} className="hover:bg-white/5 transition-colors">
                                <td className="py-4 px-4 text-white text-[10px] font-bold uppercase">{row.step}</td>
                                <td className="py-4 px-4 text-slate-300 text-[10px] font-bold uppercase">{row.mode}</td>
                                <td className="py-4 px-4 text-white text-[10px] font-black">{row.s}</td>
                                <td className="py-4 px-4 text-white text-[10px] font-black">{row.o}</td>
                                <td className="py-4 px-4 text-white text-[10px] font-black">{row.d}</td>
                                <td className="py-4 px-4">
                                  <span className={`px-2 py-1 rounded text-[10px] font-black ${row.rpn > 100 ? 'bg-rose-500/20 text-rose-500' : 'bg-amber-500/20 text-amber-500'}`}>
                                    {row.rpn}
                                  </span>
                                </td>
                                <td className="py-4 px-4 text-indigo-300 text-[10px] font-black uppercase italic">"{row.action}"</td>
                                <td className="py-4 px-4">
                                  <span className={`px-2 py-1 rounded-lg border ${priorityStyle.border} ${priorityStyle.bg} ${priorityStyle.color} text-[8px] font-black uppercase tracking-widest`}>
                                    {current.priorityLabels[row.priority as keyof typeof current.priorityLabels]}
                                  </span>
                                </td>
                                <td className="py-4 px-4">
                                  <div className={`flex items-center gap-2 ${statusStyle.color} text-[9px] font-black uppercase tracking-wider`}>
                                    <span className={`w-5 h-5 rounded-full ${statusStyle.bg} flex items-center justify-center text-[10px]`}>{statusStyle.icon}</span>
                                    {current.statusLabels[row.status as keyof typeof current.statusLabels]}
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    ) : (
                      <EmptyState 
                        color="blue"
                        icon="🛡️"
                        title={lang === 'hi' ? 'कोई PFMEA डेटा नहीं मिला' : 'No PFMEA Data Found'}
                        description={lang === 'hi' ? 'वर्तमान में इस प्रक्रिया के लिए कोई सक्रिय PFMEA डेटा उपलब्ध नहीं है।' : 'Currently there is no active PFMEA data available for this process step.'}
                        actionLabel={lang === 'hi' ? 'रिफ्रेश करें' : 'Refresh Data'}
                        onAction={() => window.location.reload()}
                      />
                    )}
                  </div>
                </div>
              </div>
            )}

            {fmeaSubTab === 'control' && (
              <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-8">
                <div className="bg-slate-900/40 p-8 rounded-[40px] border border-white/5 overflow-hidden">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <h4 className="text-white text-xl font-black uppercase tracking-tight">{current.fmea.controlPlan.title}</h4>
                    <span className="px-4 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-[9px] font-black uppercase tracking-widest">
                      {current.fmea.controlPlan.target}
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    {current.fmea.controlPlan.rows.length > 0 ? (
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-white/10">
                            {current.fmea.controlPlan.headers.map((h, i) => (
                              <th key={i} className="py-4 px-4 text-[9px] font-black uppercase tracking-widest text-slate-500">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {current.fmea.controlPlan.rows.map((row, i) => {
                            const statusStyle = getStatusStyle(row.status);
                            return (
                              <tr key={i} className="hover:bg-white/5 transition-colors">
                                <td className="py-4 px-4 text-white text-[10px] font-bold uppercase">{row.char}</td>
                                <td className="py-4 px-4 text-indigo-400 text-[10px] font-black uppercase">{row.spec}</td>
                                <td className="py-4 px-4 text-slate-400 text-[10px] font-medium italic">{row.method}</td>
                                <td className="py-4 px-4 text-white text-[10px] font-black">{row.freq}</td>
                                <td className="py-4 px-4 text-slate-300 text-[10px] font-bold uppercase">{row.resp}</td>
                                <td className="py-4 px-4 text-amber-400 text-[10px] font-black uppercase">{row.reaction}</td>
                                <td className="py-4 px-4">
                                  <div className={`flex items-center gap-2 ${statusStyle.color} text-[9px] font-black uppercase tracking-wider`}>
                                    <span className={`w-5 h-5 rounded-full ${statusStyle.bg} flex items-center justify-center text-[10px]`}>{statusStyle.icon}</span>
                                    {current.statusLabels[row.status as keyof typeof current.statusLabels]}
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    ) : (
                      <EmptyState 
                        color="rose"
                        icon="📋"
                        title={lang === 'hi' ? 'कोई कंट्रोल प्लान नहीं मिला' : 'No Control Plan Found'}
                        description={lang === 'hi' ? 'वर्तमान में इस प्रक्रिया के लिए कोई सक्रिय कंट्रोल प्लान डेटा उपलब्ध नहीं है।' : 'Currently there is no active control plan data available for this process step.'}
                        actionLabel={lang === 'hi' ? 'रिफ्रेश करें' : 'Refresh Data'}
                        onAction={() => window.location.reload()}
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'dmaic' && (
          <div className="animate-in slide-in-from-right-4 duration-500 space-y-10">
            <div className="bg-slate-900/40 p-8 rounded-[40px] border border-white/5">
               <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">
                  "{current.dmaic.definition}"
               </p>
            </div>

            <div className="bg-slate-950/40 p-8 md:p-12 rounded-[48px] border border-white/5 shadow-2xl relative overflow-hidden">
               <div className="space-y-12 relative z-10">
                  {current.dmaic.phases.map((phase, i) => (
                     <div key={i} className="flex gap-8 group">
                        <div className="flex flex-col items-center">
                           <div className="w-16 h-16 md:w-20 md:h-20 rounded-[24px] bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-3xl md:text-4xl shadow-[0_0_25px_rgba(6,182,212,0.2)] group-hover:scale-110 transition-transform">
                              {phase.icon}
                           </div>
                           {i !== current.dmaic.phases.length - 1 && (
                              <div className="w-0.5 h-16 md:h-20 bg-gradient-to-b from-cyan-500 to-transparent mt-4"></div>
                           )}
                        </div>
                        <div className="flex-1 pt-2 md:pt-4">
                           <h5 className="text-cyan-400 text-lg md:text-2xl font-black uppercase tracking-tight italic mb-2 group-hover:translate-x-2 transition-transform">{phase.l}</h5>
                           <div className="bg-white/5 p-5 md:p-6 rounded-[24px] border border-white/5 group-hover:border-cyan-500/20 transition-all">
                              <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic">"{phase.d}"</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="bg-cyan-500/10 border-2 border-dashed border-cyan-500/30 p-8 rounded-[40px] text-center">
               <p className="text-cyan-400 text-xs md:text-sm font-black uppercase tracking-[0.4em]">
                  DMAIC = Data-Driven Problem Solving Roadmap
               </p>
            </div>
          </div>
        )}

        {activeTab === 'comparison' && (
          <div className="animate-in slide-in-from-right-4 duration-500 space-y-12">
            <div className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl overflow-hidden backdrop-blur-xl">
               <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter mb-10 flex items-center gap-4">
                  <span className="w-12 h-1.5 bg-indigo-500 shadow-[0_0_12px_indigo]"></span>
                  {current.comparison.title}
               </h4>
               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-white/10">
                           {current.comparison.headers.map((h, i) => (
                              <th key={i} className={`py-6 text-[10px] font-black uppercase tracking-[0.5em] ${i === 0 ? 'text-slate-500' : i === 1 ? 'text-amber-400' : 'text-cyan-400'}`}>{h}</th>
                           ))}
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-white/5">
                        {current.comparison.rows.map((row, i) => (
                           <tr key={i} className="group hover:bg-white/5 transition-colors">
                              <td className="py-8 text-white font-black text-sm md:text-lg uppercase tracking-tight">{row.p}</td>
                              <td className="py-8 text-amber-500/80 font-bold text-xs md:text-base uppercase">{row.f}</td>
                              <td className="py-8 text-cyan-400 font-bold text-xs md:text-base uppercase italic">{row.d}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-slate-950/60 border border-amber-500/20 p-10 rounded-[48px] shadow-2xl flex flex-col items-center text-center gap-6 group hover:bg-slate-900 transition-all">
                  <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center text-3xl">🚀</div>
                  <h5 className="text-amber-500 font-black text-xs uppercase tracking-widest">Decision Case #1</h5>
                  <p className="text-white text-xl font-black uppercase leading-tight italic max-w-xs">"{current.comparison.decision.fmea}"</p>
                  <div className="px-6 py-2 bg-amber-500 text-slate-950 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-lg">Use FMEA (Preventive)</div>
               </div>
               <div className="bg-slate-950/60 border border-cyan-500/20 p-10 rounded-[48px] shadow-2xl flex flex-col items-center text-center gap-6 group hover:bg-slate-900 transition-all">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center text-3xl">🩹</div>
                  <h5 className="text-cyan-400 font-black text-xs uppercase tracking-widest">Decision Case #2</h5>
                  <p className="text-white text-xl font-black uppercase leading-tight italic max-w-xs">"{current.comparison.decision.dmaic}"</p>
                  <div className="px-6 py-2 bg-cyan-500 text-slate-950 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-lg">Use DMAIC (Corrective)</div>
               </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-6 bg-slate-950/80 rounded-3xl border border-white/10 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 backdrop-blur-xl">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-[0_0_12px_indigo] animate-pulse"></span>
                Quality Engine: v8.5 Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-amber-500 rounded-full shadow-[0_0_12px_orange]"></span>
                RCA Simulator: Running
             </span>
          </div>
          <div className="opacity-40 italic uppercase tracking-widest font-mono">Standard: ISO 9001 // Core Node</div>
      </div>
    </div>
  );
};

export default FMEADMAICDetail;

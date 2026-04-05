
import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { ArrowLeft, Clock, Layout, RefreshCcw, CheckCircle2, TrendingUp, Package, Zap, Info, Layers } from 'lucide-react';

interface JITKanbanPullDetailProps {
  onBack: () => void;
  lang: Language;
}

const JITKanbanPullDetail: React.FC<JITKanbanPullDetailProps> = ({ onBack, lang }) => {
  const isHi = lang === 'hi';

  const content = {
    title: isHi ? "JIT, Kanban और Pull System" : "JIT, Kanban & Pull System",
    subtitle: isHi ? "लीन मैन्युफैक्चरिंग के मुख्य स्तंभ" : "Core Pillars of Lean Manufacturing",
    intro: isHi 
      ? "ये तीन लीन मैन्युफैक्चरिंग (विशेष रूप से टोयोटा प्रोडक्शन सिस्टम) की मुख्य अवधारणाएं हैं और वे कचरे को कम करने, इन्वेंट्री को नियंत्रित करने और प्रवाह में सुधार करने के लिए मिलकर काम करते हैं।"
      : "These three are core concepts of Lean manufacturing (especially from the Toyota Production System) and they work together to reduce waste, control inventory, and improve flow.",
    
    jit: {
      title: isHi ? "1. जस्ट-इन-टाइम (JIT)" : "1. Just-In-Time (JIT)",
      what: isHi ? "JIT क्या है?" : "What is JIT?",
      def: isHi 
        ? "👉 केवल वही उत्पादन या वितरण करें जिसकी आवश्यकता है, जब उसकी आवश्यकता है, और सटीक मात्रा में जिसकी आवश्यकता है।"
        : "👉 Produce or deliver only what is needed, when it is needed, in the exact quantity needed.",
      points: [
        isHi ? "न्यूनतम इन्वेंट्री (कोई ओवरस्टॉक नहीं)" : "Minimum inventory (no overstock)",
        isHi ? "मांग पर आधारित उत्पादन" : "Production based on demand",
        isHi ? "सामग्री का निरंतर प्रवाह" : "Continuous flow of material",
        isHi ? "उच्च गुणवत्ता (दोषों की अनुमति नहीं)" : "High quality (defects not allowed)",
        isHi ? "मजबूत आपूर्तिकर्ता समन्वय" : "Strong supplier coordination",
        isHi ? "भंडारण लागत में कमी" : "Reduced storage cost"
      ],
      benefits: [
        { icon: TrendingUp, text: isHi ? "कम इन्वेंट्री लागत" : "Lower inventory cost" },
        { icon: Zap, text: isHi ? "तेज़ उत्पादन प्रवाह" : "Faster production flow" },
        { icon: Package, text: isHi ? "कम भंडारण स्थान" : "Less storage space" },
        { icon: RefreshCcw, text: isHi ? "बेहतर दक्षता" : "Better efficiency" }
      ]
    },

    kanban: {
      title: isHi ? "2. कानबान सिस्टम (Kanban System)" : "2. Kanban System",
      what: isHi ? "कानबान क्या है?" : "What is Kanban?",
      def: isHi 
        ? "कानबान एक विजुअल सिग्नलिंग सिस्टम है जिसका उपयोग सामग्री प्रवाह और उत्पादन को नियंत्रित करने के लिए किया जाता है।"
        : "Kanban is a visual signaling system used to control material flow and production.",
      tells: isHi ? "यह बताता है: क्या, कब और कितना उत्पादन करना है।" : "It tells: What, When and How much to produce.",
      points: [
        isHi ? "कार्ड, बिन या सिग्नल का उपयोग करता है" : "Uses cards, bins, or signals",
        isHi ? "वर्क-इन-प्रोग्रेस (WIP) को नियंत्रित करता है" : "Controls work-in-progress (WIP)",
        isHi ? "ओवरप्रोडक्शन को रोकता है" : "Prevents overproduction",
        isHi ? "वास्तविक खपत पर आधारित" : "Based on actual consumption",
        isHi ? "समझने और लागू करने में आसान" : "Easy to understand and implement"
      ],
      types: [
        isHi ? "प्रोडक्शन कानबान" : "Production Kanban",
        isHi ? "विड्रॉल कानबान" : "Withdrawal Kanban",
        isHi ? "सिग्नल कानबान" : "Signal Kanban"
      ]
    },

    pull: {
      title: isHi ? "3. पुल सिस्टम (Pull System)" : "3. Pull System",
      what: isHi ? "पुल सिस्टम क्या है?" : "What is Pull System?",
      def: isHi 
        ? "👉 उत्पादन अगली प्रक्रिया/ग्राहक की वास्तविक मांग पर आधारित होता है।"
        : "👉 Production is based on actual demand from next process/customer.",
      rule: isHi ? "“जब तक मांग न हो तब तक उत्पादन न करें”" : "“Don’t produce until there is a demand”",
      points: [
        isHi ? "मांग-संचालित उत्पादन" : "Demand-driven production",
        isHi ? "कोई अतिरिक्त इन्वेंट्री नहीं" : "No excess inventory",
        isHi ? "नियंत्रित वर्कफ़्लो" : "Controlled workflow",
        isHi ? "कचरे (ओवरप्रोडक्शन) को कम करता है" : "Reduces waste (overproduction)",
        isHi ? "लचीलेपन में सुधार करता है" : "Improves flexibility"
      ]
    },

    comparison: {
      title: isHi ? "सरल अंतर (आसान समझ)" : "Simple Difference (Easy Understanding)",
      headers: [
        isHi ? "अवधारणा" : "Concept",
        isHi ? "अर्थ" : "Meaning"
      ],
      rows: [
        { c: "JIT", m: isHi ? "केवल वही उत्पादन करें जिसकी आवश्यकता है" : "Produce only what is needed" },
        { c: "Kanban", m: isHi ? "उत्पादन को नियंत्रित करने के लिए सिग्नल सिस्टम" : "Signal system to control production" },
        { c: "Pull System", m: isHi ? "मांग पर आधारित उत्पादन" : "Production based on demand" }
      ]
    },

    synergy: {
      title: isHi ? "वे एक साथ कैसे काम करते हैं" : "How They Work Together",
      points: [
        { label: isHi ? "पुल सिस्टम = रणनीति" : "Pull System = Strategy", desc: isHi ? "(मांग-आधारित उत्पादन)" : "(Demand-based production)" },
        { label: isHi ? "कानबान = उपकरण" : "Kanban = Tool", desc: isHi ? "(प्रवाह को नियंत्रित करने के लिए सिग्नल)" : "(Signal to control flow)" },
        { label: isHi ? "JIT = लक्ष्य" : "JIT = Goal", desc: isHi ? "(सही उत्पाद, सही समय, सही मात्रा)" : "(Right product, right time, right quantity)" }
      ]
    },

    example: {
      title: isHi ? "वास्तविक उदाहरण" : "Real Example",
      step1: isHi ? "ग्राहक की मांग आती है" : "Customer demand comes",
      step2: isHi ? "कानबान कार्ड उत्पादन शुरू करता है" : "Kanban card triggers production",
      step3: isHi ? "उत्पादन जस्ट-इन-टाइम होता है" : "Production happens just-in-time",
      result: isHi ? "👉 परिणाम: कोई अतिरिक्त स्टॉक नहीं, सुचारू प्रवाह" : "👉 Result: No extra stock, smooth flow"
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-white/10 pb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.4em]">{content.subtitle}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic leading-none">
            {content.title}
          </h1>
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest transition-all shadow-lg flex items-center gap-3 border border-white/10"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={3} />
          {isHi ? "वापस जाएं" : "Back"}
        </motion.button>
      </div>

      {/* Intro */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[32px] shadow-xl backdrop-blur-xl mb-16"
      >
        <p className="text-white text-xl md:text-2xl font-bold leading-relaxed italic">
          "{content.intro}"
        </p>
      </motion.div>

      {/* Main Sections */}
      <div className="space-y-16 mb-16">
        {/* JIT Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-slate-900/40 border border-emerald-500/20 p-8 md:p-12 rounded-[32px]"
          >
            <h2 className="text-emerald-400 text-2xl md:text-4xl font-black uppercase tracking-tight mb-6 flex items-center gap-4">
              <Clock className="w-8 h-8" />
              {content.jit.title}
            </h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-white text-sm font-black uppercase tracking-widest mb-2">{content.jit.what}</h4>
                <p className="text-slate-300 font-bold leading-relaxed">{content.jit.def}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.jit.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span className="text-slate-400 text-xs font-bold leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {content.jit.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-emerald-500/5 border border-emerald-500/10 p-6 rounded-2xl flex flex-col items-center text-center gap-4 group hover:bg-emerald-500 hover:text-white transition-all">
                <benefit.icon className="w-8 h-8 text-emerald-400 group-hover:text-white" />
                <span className="text-slate-200 group-hover:text-white font-black text-[10px] uppercase tracking-widest leading-tight">{benefit.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Kanban Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-yellow-500/5 border border-yellow-500/20 p-8 rounded-[32px] flex flex-col justify-center"
          >
            <h3 className="text-yellow-500 text-[10px] font-black uppercase tracking-[0.5em] mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-yellow-500"></span>
              {isHi ? "कानबान प्रकार" : "KANBAN TYPES"}
            </h3>
            <div className="space-y-4">
              {content.kanban.types.map((type, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-400">
                    <Layout className="w-5 h-5" />
                  </div>
                  <span className="text-slate-200 font-black text-[10px] uppercase tracking-widest">{type}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-slate-900/40 border border-yellow-500/20 p-8 md:p-12 rounded-[32px]"
          >
            <h2 className="text-yellow-500 text-2xl md:text-4xl font-black uppercase tracking-tight mb-6 flex items-center gap-4">
              <Layers className="w-8 h-8" />
              {content.kanban.title}
            </h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-white text-sm font-black uppercase tracking-widest mb-2">{content.kanban.what}</h4>
                <p className="text-slate-300 font-bold leading-relaxed mb-2">{content.kanban.def}</p>
                <p className="text-yellow-400/80 font-black text-xs uppercase tracking-wider italic">{content.kanban.tells}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.kanban.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0 mt-1" />
                    <span className="text-slate-400 text-xs font-bold leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pull System Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/40 border border-blue-500/20 p-8 md:p-12 rounded-[32px]"
        >
          <h2 className="text-blue-400 text-2xl md:text-4xl font-black uppercase tracking-tight mb-8 flex items-center gap-4">
            <RefreshCcw className="w-8 h-8" />
            {content.pull.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h4 className="text-white text-sm font-black uppercase tracking-widest mb-2">{content.pull.what}</h4>
                <p className="text-slate-300 font-bold leading-relaxed mb-4 italic text-lg">{content.pull.def}</p>
                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl text-blue-400 font-black uppercase tracking-widest text-xs text-center">
                  {content.pull.rule}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.pull.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
                  <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest leading-tight">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Comparison Table */}
      <div className="mb-16">
        <h3 className="text-white text-[12px] font-black uppercase tracking-[0.6em] mb-10 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-emerald-500"></span>
          {content.comparison.title}
        </h3>
        <div className="overflow-hidden border border-white/10 rounded-[32px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900">
                {content.comparison.headers.map((header, idx) => (
                  <th key={idx} className="p-6 text-emerald-400 font-black uppercase tracking-widest text-xs border-b border-white/10">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.comparison.rows.map((row, idx) => (
                <tr key={idx} className="bg-slate-900/40 hover:bg-white/5 transition-all">
                  <td className="p-6 text-white font-black uppercase tracking-widest text-sm border-b border-white/5">
                    {row.c}
                  </td>
                  <td className="p-6 text-slate-400 font-bold text-sm border-b border-white/5">
                    {row.m}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Synergy Section */}
      <div className="mb-16">
        <h3 className="text-white text-[12px] font-black uppercase tracking-[0.6em] mb-10 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-emerald-500"></span>
          {content.synergy.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.synergy.points.map((point, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-white/10 p-8 rounded-[32px] text-center group hover:border-emerald-500/30 transition-all">
              <div className="text-emerald-400 font-black uppercase tracking-tighter text-xl mb-2">{point.label}</div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">{point.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Example Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/30 p-8 md:p-16 rounded-[48px] relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px]"></div>
        <div className="relative z-10">
          <h3 className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.5em] mb-10 text-center">
            {content.example.title}
          </h3>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-black">1</div>
              <p className="text-slate-200 font-black uppercase tracking-widest text-sm">{content.example.step1}</p>
            </div>
            
            <div className="flex items-center gap-6 ml-8">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center text-yellow-400 font-black">2</div>
              <p className="text-slate-200 font-black uppercase tracking-widest text-sm">{content.example.step2}</p>
            </div>

            <div className="flex items-center gap-6 ml-16">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-black">3</div>
              <p className="text-slate-200 font-black uppercase tracking-widest text-sm">{content.example.step3}</p>
            </div>

            <div className="mt-12 p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-[32px] text-center">
               <span className="text-emerald-400 font-black uppercase tracking-tighter text-xl md:text-2xl">
                 {content.example.result}
               </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default JITKanbanPullDetail;

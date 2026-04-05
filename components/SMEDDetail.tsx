
import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { ArrowLeft, Zap, Target, Settings, Users, Clock, TrendingUp, CheckCircle2, Info } from 'lucide-react';

interface SMEDDetailProps {
  onBack: () => void;
  lang: Language;
}

const SMEDDetail: React.FC<SMEDDetailProps> = ({ onBack, lang }) => {
  const isHi = lang === 'hi';

  const content = {
    title: isHi ? "SMED (क्विक चेंजओवर)" : "SMED (Quick Changeover)",
    subtitle: isHi ? "सिंगल मिनट एक्सचेंज ऑफ डाई" : "Single Minute Exchange of Die",
    intro: isHi 
      ? "SMED (सिंगल मिनट एक्सचेंज ऑफ डाई) एक लीन मैन्युफैक्चरिंग तकनीक है जिसका उपयोग चेंजओवर/सेटअप समय को कम करने के लिए किया जाता है—आदर्श रूप से 10 मिनट से कम।"
      : "SMED (Single Minute Exchange of Die) is a Lean manufacturing technique used to reduce changeover/setup time—ideally to less than 10 minutes.",
    quickChangeover: isHi
      ? "क्विक चेंजओवर का मतलब है किसी मशीन या प्रोडक्शन लाइन को एक उत्पाद से दूसरे उत्पाद में जितनी जल्दी हो सके कम से कम डाउनटाइम के साथ बदलना।"
      : "Quick Changeover means switching a machine or production line from one product to another as fast as possible with minimum downtime.",
    keyPointsTitle: isHi ? "SMED के मुख्य बिंदु" : "Key Points of SMED",
    keyPoints: [
      {
        title: isHi ? "1. इंटरनल बनाम एक्सटर्नल गतिविधियाँ" : "1. Internal vs External Activities",
        items: [
          { label: isHi ? "इंटरनल गतिविधियाँ" : "Internal Activities", desc: isHi ? "वे कार्य जो केवल मशीन रुकने पर ही किए जा सकते हैं" : "Tasks that can only be done when the machine is stopped" },
          { label: isHi ? "एक्सटर्नल गतिविधियाँ" : "External Activities", desc: isHi ? "वे कार्य जो मशीन चलने के दौरान किए जा सकते हैं" : "Tasks that can be done while the machine is running" }
        ],
        goal: isHi ? "लक्ष्य: इंटरनल गतिविधियों को एक्सटर्नल में बदलें" : "Goal: Convert internal activities into external ones"
      },
      {
        title: isHi ? "2. सेटअप समय कम करें" : "2. Reduce Setup Time",
        items: [
          { label: isHi ? "हटाएं" : "Eliminate", desc: isHi ? "अनावश्यक कदम" : "Unnecessary steps" },
          { label: isHi ? "कम करें" : "Reduce", desc: isHi ? "देरी और प्रतीक्षा समय" : "Delays and waiting time" },
          { label: isHi ? "अनुकूलित करें" : "Optimize", desc: isHi ? "कार्यों को तेज़ी से और समझदारी से करें" : "Perform tasks faster and smarter" }
        ]
      },
      {
        title: isHi ? "3. मानकीकरण (Standardization)" : "3. Standardization",
        items: [
          { label: "SOP", desc: isHi ? "चेंजओवर के लिए एक मानक संचालन प्रक्रिया बनाएं" : "Create a standard operating procedure for changeover" },
          { label: isHi ? "निरंतरता" : "Consistency", desc: isHi ? "हर बार एक ही विधि का उपयोग करें" : "Use the same method every time" }
        ],
        goal: isHi ? "त्रुटियों और भिन्नता को कम करता है" : "Reduces errors and variation"
      },
      {
        title: isHi ? "4. त्वरित फिक्सिंग विधियों का उपयोग करें" : "4. Use Quick Fixing Methods",
        items: [
          { label: isHi ? "बदलें" : "Replace", desc: isHi ? "नट और बोल्ट को क्विक क्लैम्प या वन-टच सिस्टम से बदलें" : "Nuts & bolts with quick clamps or one-touch systems" }
        ],
        goal: isHi ? "समय और प्रयास बचाता है" : "Saves time and effort"
      },
      {
        title: isHi ? "5. समानांतर संचालन (Parallel Operations)" : "5. Parallel Operations",
        items: [
          { label: isHi ? "टीम वर्क" : "Teamwork", desc: isHi ? "एक व्यक्ति उपकरण तैयार करता है, दूसरा सेटअप करता है" : "One person prepares tools, another performs setup" }
        ],
        goal: isHi ? "काम एक साथ होता है → तेज़ चेंजओवर" : "Work happens simultaneously → faster changeover"
      },
      {
        title: isHi ? "6. समायोजन (Adjustments) समाप्त करें" : "6. Eliminate Adjustments",
        items: [
          { label: isHi ? "कोई परीक्षण नहीं" : "No Trial", desc: isHi ? "ट्रायल और एरर से बचें" : "Avoid trial and error" },
          { label: isHi ? "प्री-सेट" : "Pre-set", desc: isHi ? "प्री-सेट टूल और माप का उपयोग करें" : "Use pre-set tools and measurements" }
        ],
        goal: isHi ? "एक ही बार में सही सेटअप प्राप्त करें" : "Achieve correct setup in one go"
      },
      {
        title: isHi ? "7. प्रशिक्षण और अभ्यास" : "7. Training & Practice",
        items: [
          { label: isHi ? "प्रशिक्षण" : "Train", desc: isHi ? "ऑपरेटरों को उचित प्रशिक्षण दें" : "Train operators properly" },
          { label: isHi ? "अभ्यास" : "Practice", desc: isHi ? "गति सुधारने के लिए नियमित अभ्यास करें" : "Practice regularly to improve speed" }
        ]
      }
    ],
    benefitsTitle: isHi ? "SMED के लाभ" : "Benefits of SMED",
    benefits: [
      { icon: Clock, text: isHi ? "डाउनटाइम में कमी" : "Reduced downtime" },
      { icon: TrendingUp, text: isHi ? "उत्पादकता में वृद्धि" : "Increased productivity" },
      { icon: Settings, text: isHi ? "छोटे बैच उत्पादन का समर्थन" : "Supports small batch production" },
      { icon: Target, text: isHi ? "कम उत्पादन लागत" : "Lower production cost" },
      { icon: Zap, text: isHi ? "तेज़ डिलीवरी" : "Faster delivery" }
    ],
    exampleTitle: isHi ? "सरल उदाहरण" : "Simple Example",
    example: {
      before: isHi ? "SMED से पहले: चेंजओवर समय = 60 मिनट" : "Before SMED: Changeover time = 60 minutes",
      after: isHi ? "SMED के बाद: 15 मिनट तक कम हो गया" : "After SMED: Reduced to 15 minutes",
      result: isHi ? "परिणाम: अधिक उत्पादन समय और उच्च दक्षता" : "Result: More production time and higher efficiency"
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
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
            <span className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.4em]">{content.subtitle}</span>
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
          className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 rounded-none font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center gap-3 border border-cyan-400/50"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={3} />
          {isHi ? "वापस जाएं" : "Back"}
        </motion.button>
      </div>

      {/* Intro Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/60 border border-cyan-500/30 p-8 md:p-12 relative overflow-hidden backdrop-blur-xl"
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-500"></div>
          <p className="text-white text-xl md:text-2xl font-bold leading-relaxed italic mb-8">
            "{content.intro}"
          </p>
          <div className="flex items-start gap-4 bg-cyan-500/10 p-6 border border-cyan-500/20">
            <Zap className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
            <p className="text-cyan-100 text-sm md:text-base font-bold leading-relaxed">
              {content.quickChangeover}
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/40 border border-white/10 p-8 md:p-12 flex flex-col justify-center"
        >
          <h3 className="text-white text-[10px] font-black uppercase tracking-[0.5em] mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-cyan-500"></span>
            {content.benefitsTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all group">
                <div className="w-10 h-10 bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                  <benefit.icon className="w-5 h-5" />
                </div>
                <span className="text-slate-200 font-black text-[10px] uppercase tracking-widest">{benefit.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Key Points Grid */}
      <div className="mb-16">
        <h3 className="text-white text-[12px] font-black uppercase tracking-[0.6em] mb-10 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-cyan-500"></span>
          {content.keyPointsTitle}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.keyPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-slate-900/40 border border-white/10 p-6 md:p-8 hover:border-cyan-500/30 transition-all group"
            >
              <h4 className="text-cyan-400 font-black text-sm uppercase tracking-widest mb-6 border-b border-white/5 pb-4">
                {point.title}
              </h4>
              <div className="space-y-4 mb-6">
                {point.items.map((item, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="text-white text-[10px] font-black uppercase tracking-wider">{item.label}</span>
                    <span className="text-slate-400 text-xs font-bold leading-snug">{item.desc}</span>
                  </div>
                ))}
              </div>
              {point.goal && (
                <div className="mt-auto pt-4 border-t border-white/5 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span className="text-cyan-200 text-[9px] font-black uppercase tracking-wider leading-tight">
                    {point.goal}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Example Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/30 p-8 md:p-16 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px]"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h3 className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.5em] mb-6">
            {content.exampleTitle}
          </h3>
          <div className="space-y-4 mb-10">
            <div className="bg-white/5 p-4 border border-white/5 text-slate-400 font-bold uppercase tracking-widest text-sm">
              {content.example.before}
            </div>
            <div className="bg-cyan-500/20 p-4 border border-cyan-500/40 text-cyan-400 font-black uppercase tracking-widest text-lg">
              {content.example.after}
            </div>
          </div>
          <div className="inline-flex items-center gap-4 bg-white p-4 px-8 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            <TrendingUp className="w-6 h-6 text-slate-900" />
            <span className="text-slate-900 font-black uppercase tracking-tighter text-xl">
              {content.example.result}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SMEDDetail;

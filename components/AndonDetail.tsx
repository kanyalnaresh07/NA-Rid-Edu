
import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { ArrowLeft, Bell, Eye, Zap, Users, BarChart3, ShieldAlert, CheckCircle2, Monitor, Lightbulb } from 'lucide-react';

interface AndonDetailProps {
  onBack: () => void;
  lang: Language;
}

const AndonDetail: React.FC<AndonDetailProps> = ({ onBack, lang }) => {
  const isHi = lang === 'hi';

  const content = {
    title: isHi ? "Andon (विजुअल मैनेजमेंट सिस्टम)" : "Andon (Visual Management System)",
    subtitle: isHi ? "रियल-टाइम स्टेटस इंडिकेटर" : "Real-Time Status Indicator",
    intro: isHi 
      ? "Andon एक विजुअल मैनेजमेंट सिस्टम है जिसका उपयोग मैन्युफैक्चरिंग में रियल-टाइम प्रोडक्शन स्टेटस दिखाने और समस्याओं को तुरंत उजागर करने के लिए किया जाता है।"
      : "Andon is a visual management system used in manufacturing to show real-time production status and highlight problems immediately.",
    helps: isHi
      ? "👉 यह ऑपरेटरों को समस्याओं (जैसे मशीन की खराबी, गुणवत्ता दोष, सामग्री की कमी) को जल्दी से संकेत देने में मदद करता है ताकि सहायता टीमें तेज़ी से प्रतिक्रिया दे सकें।"
      : "👉 It helps operators quickly signal issues (like machine fault, quality defect, material shortage) so that support teams can respond fast.",
    origin: isHi ? "यह अवधारणा टोयोटा प्रोडक्शन सिस्टम से आई है।" : "The concept comes from Toyota Production System.",
    appearanceTitle: isHi ? "Andon सिस्टम कैसा दिखता है?" : "What does an Andon system look like?",
    appearance: [
      { icon: Monitor, text: isHi ? "डिस्प्ले बोर्ड / LED स्क्रीन" : "Display boards / LED screens" },
      { icon: Zap, text: isHi ? "टावर लाइट्स (लाल, पीला, हरा)" : "Tower lights (Red, Yellow, Green)" },
      { icon: Bell, text: isHi ? "ध्वनि अलार्म / बजर" : "Sound alarms / buzzers" }
    ],
    keyPointsTitle: isHi ? "Andon सिस्टम के मुख्य बिंदु" : "Key Points of Andon System",
    keyPoints: [
      {
        title: isHi ? "1. विजुअल सिग्नल (कलर कोडिंग)" : "1. Visual Signals (Color Coding)",
        items: [
          { label: isHi ? "हरा (Green)" : "Green", desc: isHi ? "सामान्य संचालन (Normal operation)" : "Normal operation" },
          { label: isHi ? "पीला (Yellow)" : "Yellow", desc: isHi ? "चेतावनी / ध्यान देने की आवश्यकता" : "Warning / Attention needed" },
          { label: isHi ? "लाल (Red)" : "Red", desc: isHi ? "समस्या / मशीन बंद" : "Problem / Machine stopped" }
        ],
        goal: isHi ? "कोई भी तुरंत स्टेटस समझ सकता है" : "Anyone can understand status instantly"
      },
      {
        title: isHi ? "2. रियल-टाइम समस्या संकेत" : "2. Real-Time Problem Indication",
        items: [
          { label: isHi ? "तत्काल" : "Immediate", desc: isHi ? "समस्याएं तुरंत दिखाई जाती हैं" : "Issues are shown immediately" },
          { label: isHi ? "कोई देरी नहीं" : "No Delay", desc: isHi ? "संचार में कोई देरी नहीं" : "No delay in communication" }
        ],
        goal: isHi ? "तेज़ प्रतिक्रिया = कम डाउनटाइम" : "Faster response = less downtime"
      },
      {
        title: isHi ? "3. ऑपरेटर सशक्तिकरण" : "3. Operator Empowerment",
        items: [
          { label: isHi ? "लाइन रोकें" : "Stop Line", desc: isHi ? "ऑपरेटर लाइन रोक सकता है या अलर्ट कर सकता है" : "Operator can stop the line or raise alert" },
          { label: isHi ? "स्वायत्तता" : "Autonomy", desc: isHi ? "सुपरवाइजर का इंतज़ार करने की ज़रूरत नहीं" : "No need to wait for supervisor" }
        ],
        goal: isHi ? "स्वामित्व और गुणवत्ता में सुधार" : "Improves ownership and quality"
      },
      {
        title: isHi ? "4. त्वरित प्रतिक्रिया प्रणाली" : "4. Quick Response System",
        items: [
          { label: isHi ? "सिग्नल" : "Signal", desc: isHi ? "मेंटेनेंस / क्वालिटी टीम को तुरंत सिग्नल मिलता है" : "Maintenance / Quality team gets instant signal" },
          { label: isHi ? "समय" : "Time", desc: isHi ? "प्रतिक्रिया समय काफी कम हो जाता है" : "Response time reduces significantly" }
        ]
      },
      {
        title: isHi ? "5. शॉप फ्लोर पर पारदर्शिता" : "5. Transparency on Shop Floor",
        items: [
          { label: isHi ? "दृश्यता" : "Visibility", desc: isHi ? "हर कोई प्रोडक्शन स्टेटस और डाउनटाइम देख सकता है" : "Everyone can see production status and downtime" }
        ],
        goal: isHi ? "समन्वय (Coordination) में सुधार" : "Improves coordination"
      },
      {
        title: isHi ? "6. निरंतर सुधार (Kaizen)" : "6. Continuous Improvement Support",
        items: [
          { label: isHi ? "डेटा" : "Data", desc: isHi ? "रूट कॉज एनालिसिस में मदद करता है" : "Helps in root cause analysis" }
        ],
        goal: isHi ? "काइज़न (Kaizen) का समर्थन करता है" : "Supports Kaizen"
      },
      {
        title: isHi ? "7. Andon के प्रकार" : "7. Types of Andon",
        items: [
          { label: isHi ? "मैनुअल" : "Manual", desc: isHi ? "बटन या पुल कॉर्ड" : "Button or pull cord" },
          { label: isHi ? "ऑटोमैटिक" : "Automatic", desc: isHi ? "सेंसर या सिस्टम-आधारित अलर्ट" : "Sensor or system-based alerts" },
          { label: isHi ? "डिजिटल" : "Digital", desc: isHi ? "सॉफ्टवेयर डैशबोर्ड और स्क्रीन" : "Software dashboards & screens" }
        ]
      }
    ],
    benefitsTitle: isHi ? "Andon के लाभ" : "Benefits of Andon",
    benefits: [
      { icon: Zap, text: isHi ? "डाउनटाइम में कमी" : "Reduced downtime" },
      { icon: Lightbulb, text: isHi ? "तेज़ समस्या समाधान" : "Faster problem-solving" },
      { icon: BarChart3, text: isHi ? "उत्पादकता में वृद्धि" : "Increased productivity" },
      { icon: ShieldAlert, text: isHi ? "बेहतर गुणवत्ता नियंत्रण" : "Better quality control" },
      { icon: Users, text: isHi ? "मजबूत टीम संचार" : "Strong team communication" }
    ],
    exampleTitle: isHi ? "सरल उदाहरण" : "Simple Example",
    example: {
      step1: isHi ? "👉 यदि कोई मशीन रुकती है:" : "👉 If a machine stops:",
      step2: isHi ? "ऑपरेटर Andon बटन दबाता है" : "Operator presses Andon button",
      step3: isHi ? "लाल बत्ती चालू + अलार्म" : "Red light ON + alarm",
      step4: isHi ? "मेंटेनेंस टीम तुरंत पहुँचती है" : "Maintenance team arrives immediately",
      result: isHi ? "👉 परिणाम: समस्या जल्दी हल हो गई, उत्पादन तेज़ी से फिर से शुरू हुआ" : "👉 Result: Problem solved quickly, production resumes faster"
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
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
            <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.4em]">{content.subtitle}</span>
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

      {/* Intro Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/60 border border-white/10 p-8 md:p-12 rounded-[32px] shadow-xl backdrop-blur-xl"
        >
          <p className="text-white text-xl md:text-2xl font-bold leading-relaxed italic mb-6">
            "{content.intro}"
          </p>
          <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed mb-6">
            {content.helps}
          </p>
          <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs font-black uppercase tracking-widest">
            {content.origin}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/40 border border-white/10 p-8 md:p-12 rounded-[32px] flex flex-col justify-center"
        >
          <h3 className="text-white text-[10px] font-black uppercase tracking-[0.5em] mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-red-500"></span>
            {content.appearanceTitle}
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {content.appearance.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all group">
                <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-all">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-slate-200 font-black text-[10px] uppercase tracking-widest">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Key Points Grid */}
      <div className="mb-16">
        <h3 className="text-white text-[12px] font-black uppercase tracking-[0.6em] mb-10 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-red-500"></span>
          {content.keyPointsTitle}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.keyPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-slate-900/40 border border-white/10 p-8 rounded-[32px] hover:border-red-500/30 transition-all group"
            >
              <h4 className="text-red-400 font-black text-sm uppercase tracking-widest mb-6 border-b border-white/5 pb-4">
                {point.title}
              </h4>
              <div className="space-y-4 mb-6">
                {point.items.map((item, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      {idx === 0 && (
                        <div className={`w-2 h-2 rounded-full ${
                          i === 0 ? 'bg-emerald-500' : i === 1 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                      )}
                      <span className="text-white text-[10px] font-black uppercase tracking-wider">{item.label}</span>
                    </div>
                    <span className="text-slate-400 text-xs font-bold leading-snug">{item.desc}</span>
                  </div>
                ))}
              </div>
              {point.goal && (
                <div className="mt-auto pt-4 border-t border-white/5 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-red-200 text-[9px] font-black uppercase tracking-wider leading-tight">
                    {point.goal}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-16">
        <h3 className="text-white text-[12px] font-black uppercase tracking-[0.6em] mb-10 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-red-500"></span>
          {content.benefitsTitle}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {content.benefits.map((benefit, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center gap-4 group hover:bg-red-500/5 hover:border-red-500/30 transition-all">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-all">
                <benefit.icon className="w-6 h-6" />
              </div>
              <span className="text-slate-200 font-black text-[9px] uppercase tracking-widest leading-tight">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Example Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-900 border border-red-500/30 p-8 md:p-16 rounded-[48px] relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[100px]"></div>
        <div className="relative z-10">
          <h3 className="text-red-500 text-[10px] font-black uppercase tracking-[0.5em] mb-10 text-center">
            {content.exampleTitle}
          </h3>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-black">1</div>
              <p className="text-slate-200 font-bold uppercase tracking-widest text-sm">{content.example.step1}</p>
            </div>
            
            <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5 ml-8">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-black">2</div>
              <p className="text-slate-200 font-bold uppercase tracking-widest text-sm">{content.example.step2}</p>
            </div>

            <div className="flex items-center gap-6 p-6 bg-red-500/20 rounded-2xl border border-red-500/40 ml-16">
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-black">3</div>
              <p className="text-red-400 font-black uppercase tracking-widest text-sm">{content.example.step3}</p>
            </div>

            <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5 ml-24">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-black">4</div>
              <p className="text-slate-200 font-bold uppercase tracking-widest text-sm">{content.example.step4}</p>
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

export default AndonDetail;

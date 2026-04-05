
import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { ArrowLeft, TrendingUp, Trash2, Zap, Target, Users, BarChart, CheckCircle2, RefreshCcw, Search, Settings } from 'lucide-react';

interface ImprovementPrincipleDetailProps {
  onBack: () => void;
  lang: Language;
}

const ImprovementPrincipleDetail: React.FC<ImprovementPrincipleDetailProps> = ({ onBack, lang }) => {
  const isHi = lang === 'hi';

  const principles = [
    {
      id: 1,
      title: isHi ? 'अपशिष्ट को समाप्त करें (Muda)' : 'Eliminate Waste (Muda)',
      desc: isHi ? 'गैर-मूल्य वर्धित गतिविधियों को हटा दें।' : 'Remove non-value-added activities.',
      examples: isHi ? ['प्रतीक्षा समय (Waiting time)', 'अति उत्पादन (Overproduction)', 'अतिरिक्त इन्वेंट्री (Excess inventory)'] : ['Waiting time', 'Overproduction', 'Excess inventory'],
      icon: <Trash2 className="w-6 h-6 text-rose-400" />
    },
    {
      id: 2,
      title: isHi ? 'निरंतर छोटे सुधार' : 'Continuous Small Improvements',
      desc: isHi ? 'दैनिक छोटे बदलाव (केवल बड़े बदलाव नहीं)।' : 'Daily small changes (not big changes only).',
      extra: isHi ? 'हर कोई योगदान देता है (ऑपरेटर + प्रबंधक)' : 'Everyone contributes (operators + managers)',
      icon: <Zap className="w-6 h-6 text-amber-400" />
    },
    {
      id: 3,
      title: isHi ? 'समस्या समाधान दृष्टिकोण' : 'Problem Solving Approach',
      desc: isHi ? 'मूल कारण खोजें, केवल लक्षण नहीं।' : 'Find root cause, not just symptoms.',
      tools: isHi ? ['5 Why', 'फिशबोन आरेख (Fishbone diagram)'] : ['5 Why', 'Fishbone diagram'],
      icon: <Search className="w-6 h-6 text-cyan-400" />
    },
    {
      id: 4,
      title: isHi ? 'मानकीकरण (Standardization)' : 'Standardization',
      desc: isHi ? 'सुधार के बाद, मानक प्रक्रिया (SOP) बनाएं।' : 'After improvement, create standard process (SOP).',
      extra: isHi ? 'ताकि सुधार बना रहे' : 'So improvement is sustained',
      icon: <Settings className="w-6 h-6 text-slate-400" />
    },
    {
      id: 5,
      title: isHi ? 'कर्मचारी भागीदारी' : 'Employee Involvement',
      desc: isHi ? 'ऑपरेटर विचार देते हैं।' : 'Operators give ideas.',
      extra: isHi ? 'टीम की भागीदारी महत्वपूर्ण है' : 'Team participation is key',
      icon: <Users className="w-6 h-6 text-blue-400" />
    },
    {
      id: 6,
      title: isHi ? 'PDCA चक्र' : 'PDCA Cycle',
      desc: isHi ? 'Plan-Do-Check-Act' : 'Plan-Do-Check-Act',
      steps: isHi 
        ? ['Plan → समस्या और समाधान की पहचान करें', 'Do → लागू करें', 'Check → परिणामों को सत्यापित करें', 'Act → मानकीकृत करें या आगे सुधारें']
        : ['Plan → Identify problem & solution', 'Do → Implement', 'Check → Verify results', 'Act → Standardize or improve further'],
      icon: <RefreshCcw className="w-6 h-6 text-emerald-400" />
    },
    {
      id: 7,
      title: isHi ? 'डेटा-आधारित निर्णय' : 'Data-Based Decisions',
      desc: isHi ? 'वास्तविक डेटा का उपयोग करें।' : 'Use actual data.',
      extra: isHi ? 'अनुमान से बचें' : 'Avoid guesswork',
      icon: <BarChart className="w-6 h-6 text-indigo-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 pb-20">
      {/* Header */}
      <div className="bg-slate-900/50 border-b border-white/5 sticky top-0 z-50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs md:text-sm font-black uppercase tracking-widest">
              {isHi ? 'पीछे जाएं' : 'Back to List'}
            </span>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h1 className="text-sm md:text-xl font-black uppercase tracking-tighter">
              {isHi ? 'सुधार सिद्धांत' : 'Improvement Principle'}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* Definition Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-slate-900/80 border border-cyan-500/30 p-8 md:p-12 rounded-[32px] md:rounded-[48px] shadow-2xl overflow-hidden mb-12"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"></div>
          <div className="relative z-10">
            <div className="inline-block px-4 py-1.5 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              {isHi ? 'लीन मैन्युफैक्चरिंग' : 'Lean Manufacturing'}
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight mb-6">
              {isHi ? 'सुधार सिद्धांत क्या है?' : 'What is Improvement Principle?'}
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-bold border-l-4 border-cyan-500 pl-6">
              {isHi 
                ? 'अपशिष्ट को समाप्त करके और व्यवस्थित रूप से समस्याओं को हल करके प्रक्रियाओं, गुणवत्ता और दक्षता में निरंतर सुधार करना।'
                : 'Continuously improving processes, quality, and efficiency by eliminating waste and solving problems systematically.'}
            </p>
            <div className="mt-8 flex items-center gap-4 text-cyan-400/80 text-xs font-black uppercase tracking-widest">
              <RefreshCcw className="w-4 h-4 animate-spin-slow" />
              {isHi ? 'निरंतर सुधार (Kaizen)' : 'Continuous Improvement (Kaizen)'}
            </div>
          </div>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {principles.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/40 border border-white/5 p-6 md:p-8 rounded-3xl hover:border-cyan-500/30 transition-all group"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-white text-lg font-black uppercase tracking-tight mb-2">{p.title}</h3>
                  <p className="text-slate-400 text-sm font-medium mb-4 leading-relaxed">{p.desc}</p>
                  
                  {p.examples && (
                    <div className="flex flex-wrap gap-2">
                      {p.examples.map(ex => (
                        <span key={ex} className="px-3 py-1 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[9px] font-black uppercase rounded-lg">
                          {ex}
                        </span>
                      ))}
                    </div>
                  )}

                  {p.tools && (
                    <div className="flex flex-wrap gap-2">
                      {p.tools.map(tool => (
                        <span key={tool} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[9px] font-black uppercase rounded-lg">
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}

                  {p.steps && (
                    <div className="space-y-2 mt-2">
                      {p.steps.map((step, i) => (
                        <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-300">
                          <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                          {step}
                        </div>
                      ))}
                    </div>
                  )}

                  {p.extra && (
                    <p className="text-[10px] font-black text-cyan-500/60 uppercase tracking-widest mt-2">
                      {p.extra}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits & Example */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-emerald-500/5 border border-emerald-500/20 p-8 md:p-10 rounded-[32px]"
          >
            <h3 className="text-emerald-400 text-xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6" />
              {isHi ? 'सुधार के लाभ' : 'Benefits of Improvement'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: isHi ? 'उच्च उत्पादकता' : 'Higher Productivity', icon: '📈' },
                { label: isHi ? 'बेहतर गुणवत्ता' : 'Better Quality', icon: '🔍' },
                { label: isHi ? 'कम डाउनटाइम' : 'Reduced Downtime', icon: '⏱️' },
                { label: isHi ? 'लागत की बचत' : 'Cost Saving', icon: '💰' },
                { label: isHi ? 'बेहतर टीम वर्क' : 'Better Teamwork', icon: '😊' }
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-2xl border border-white/5">
                  <span className="text-xl">{benefit.icon}</span>
                  <span className="text-xs font-black text-white uppercase tracking-wider">{benefit.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Simple Example */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-amber-500/5 border border-amber-500/20 p-8 md:p-10 rounded-[32px]"
          >
            <h3 className="text-amber-400 text-xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
              <Zap className="w-6 h-6" />
              {isHi ? 'सरल उदाहरण' : 'Simple Example'}
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-900/50 rounded-2xl border-l-4 border-rose-500">
                <p className="text-[10px] font-black text-rose-500 uppercase mb-1">{isHi ? 'समस्या' : 'Problem'}</p>
                <p className="text-sm font-bold text-white">{isHi ? 'मशीन डाउनटाइम = 60 मिनट/दिन' : 'Machine downtime = 60 min/day'}</p>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-2xl border-l-4 border-cyan-500">
                <p className="text-[10px] font-black text-cyan-500 uppercase mb-1">{isHi ? 'मूल कारण' : 'Root Cause'}</p>
                <p className="text-sm font-bold text-white">{isHi ? 'अनुचित सेटअप पाया गया' : 'Improper setup found'}</p>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-2xl border-l-4 border-emerald-500">
                <p className="text-[10px] font-black text-emerald-500 uppercase mb-1">{isHi ? 'सुधार' : 'Improvement'}</p>
                <p className="text-sm font-bold text-white">{isHi ? 'मानक सेटअप बनाया गया' : 'Standard setup created'}</p>
              </div>
              <div className="p-4 bg-emerald-500/20 rounded-2xl border border-emerald-500/30">
                <p className="text-[10px] font-black text-emerald-400 uppercase mb-1">{isHi ? 'परिणाम' : 'Result'}</p>
                <p className="text-lg font-black text-white">{isHi ? 'डाउनटाइम घटकर 20 मिनट/दिन हो गया' : 'Downtime reduced to 20 min/day'}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Summary Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-slate-900/60 border border-white/10 rounded-[32px] text-center"
        >
          <p className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.5em] mb-4">One-Line Summary</p>
          <p className="text-white text-lg md:text-xl font-black uppercase tracking-tight">
            {isHi 
              ? 'सुधार सिद्धांत = निरंतर छोटे सुधार + अपशिष्ट उन्मूलन + मानकीकरण'
              : 'Improvement Principle = Continuous small improvements + waste elimination + standardization'}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ImprovementPrincipleDetail;

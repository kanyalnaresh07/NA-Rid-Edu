import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Bot, Zap, BrainCircuit, Search, ArrowRight, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { searchWithAI } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

interface AIHubProps {
  translations: any;
  lang: Language;
}

const AIHub: React.FC<AIHubProps> = ({ translations, lang }) => {
  const isHi = lang === 'hi';
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    try {
      const aiResponse = await searchWithAI(query, lang);
      setResponse(aiResponse || null);
    } catch (error: any) {
      console.error("AI Search failed:", error);
      setResponse(isHi ? `क्षमा करें, AI खोज विफल रही। कृपया पुनः प्रयास करें। (${error.message})` : `Sorry, AI search failed. Please try again. (${error.message})`);
    } finally {
      setIsSearching(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const suggestedQueries = isHi ? [
    "5S क्या है?",
    "Kaizen के फायदे बताओ",
    "OEE कैसे कैलकुलेट करते हैं?",
    "Lean Manufacturing क्या है?"
  ] : [
    "What is 5S?",
    "Explain Kaizen benefits",
    "How to calculate OEE?",
    "What is Lean Manufacturing?"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 relative min-h-[80vh]">
      {/* Premium Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-[100px] pointer-events-none rounded-full" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 relative z-10"
      >
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl border border-indigo-500/30 mb-6 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
          <BrainCircuit className="w-10 h-10 text-indigo-400" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 uppercase tracking-tighter mb-4 drop-shadow-2xl">
          {isHi ? 'AI हब' : 'AI HUB'}
        </h2>
        <p className="text-slate-200 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-lg">
          {isHi 
            ? 'औद्योगिक ज्ञान के लिए हमारे उन्नत AI सहायक का उपयोग करें। कोई भी प्रश्न पूछें और तुरंत उत्तर प्राप्त करें।' 
            : 'Leverage our advanced AI assistant for industrial knowledge. Ask any question and get instant, accurate answers.'}
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Search Input Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-2 shadow-2xl">
            <div className="pl-6 pr-4 text-indigo-400">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isHi ? "अपना प्रश्न यहाँ पूछें..." : "Ask your question here..."}
              className="flex-grow bg-transparent border-none text-white text-lg placeholder:text-slate-500 focus:outline-none py-4"
            />
            <button
              onClick={handleSearch}
              disabled={isSearching || !query.trim()}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSearching ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {isHi ? 'खोजें' : 'SEARCH'}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Suggested Queries */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {suggestedQueries.map((sq, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuery(sq);
                // Optional: auto-search when clicking suggestion
                // handleSearch(); 
              }}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-medium hover:bg-indigo-500/10 hover:text-indigo-300 hover:border-indigo-500/30 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-3 h-3" />
              {sq}
            </button>
          ))}
        </motion.div>

        {/* AI Response Area */}
        <AnimatePresence>
          {response && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="mt-12 bg-slate-900/80 backdrop-blur-xl border border-indigo-500/20 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"></div>
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                  <Bot className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white uppercase tracking-widest">
                    {isHi ? 'AI उत्तर' : 'AI Response'}
                  </h3>
                  <p className="text-xs text-indigo-400 font-medium">Powered by Gemini</p>
                </div>
              </div>
              
              <div className="prose prose-invert prose-indigo max-w-none text-slate-200 prose-p:text-slate-200 prose-headings:text-white prose-strong:text-white prose-li:text-slate-200 prose-p:leading-relaxed prose-pre:bg-slate-950 prose-pre:border prose-pre:border-white/10">
                <ReactMarkdown>{response}</ReactMarkdown>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AIHub;

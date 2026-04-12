import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, Settings, BrainCircuit, ListOrdered, 
  Play, ChevronRight, CheckCircle2, XCircle, 
  BarChart3, Award, Timer, ShieldAlert,
  Cpu, Zap, LineChart
} from 'lucide-react';
import { Language } from '../types';
import { generateQuiz } from '../services/geminiService';

interface QuizProps {
  translations: any;
  lang: Language;
}

type QuizState = 'setup' | 'loading' | 'active' | 'feedback' | 'result';

interface AIQuestion {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: any;
}

const TOPICS = [
  "Production Operations (SMT/MI/AI/FATP)",
  "Electronics Assembly (SMT/THT)",
  "Quality Control & Testing",
  "Production Planning & Control",
  "Lean Manufacturing",
  "Industrial Safety & ESD",
  "Equipment Maintenance"
];

const DIFFICULTIES = ["Adaptive", "Beginner", "Intermediate", "Advanced"];
const QUESTION_COUNTS = [5, 10, 15, 20];

const Quiz: React.FC<QuizProps> = ({ translations, lang }) => {
  const isHi = lang === 'hi';
  const [state, setState] = useState<QuizState>('setup');
  const [topic, setTopic] = useState(TOPICS[0]);
  const [difficulty, setDifficulty] = useState(DIFFICULTIES[0]);
  const [questionCount, setQuestionCount] = useState(5);
  
  const [questions, setQuestions] = useState<AIQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  
  const [lastQuestionFeedback, setLastQuestionFeedback] = useState<{
    isCorrect: boolean;
    explanation: any;
    selectedOptionText: string;
    correctOptionText: string;
  } | null>(null);

  const parseExplanation = (exp: any) => {
    if (typeof exp === 'object' && exp !== null) {
      return {
        general: exp.general || '',
        why: exp.why || '',
        where: exp.where || '',
        what: exp.what || ''
      };
    }
    
    if (typeof exp === 'string') {
      let general = exp;
      let why = '';
      let where = '';
      let what = '';
      
      const whyMatch = exp.match(/WHY it's correct:(.*?)(WHERE it is used:|WHAT it means:|$)/i);
      const whereMatch = exp.match(/WHERE it is used:(.*?)(WHAT it means:|$)/i);
      const whatMatch = exp.match(/WHAT it means:(.*)/i);
      
      if (whyMatch || whereMatch || whatMatch) {
        general = exp.split(/WHY it's correct:|WHERE it is used:|WHAT it means:/i)[0].trim();
        why = whyMatch ? whyMatch[1].trim() : '';
        where = whereMatch ? whereMatch[1].trim() : '';
        what = whatMatch ? whatMatch[1].trim() : '';
      }
      
      return { general, why, where, what };
    }
    
    return { general: '', why: '', where: '', what: '' };
  };

  const startQuiz = async () => {
    setState('loading');
    try {
      // Load and filter recent questions to prevent repetition
      const RECENT_QUESTIONS_KEY = 'narid_recent_quiz_questions';
      const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;
      const now = Date.now();
      
      let storedQuestions: {text: string, timestamp: number}[] = [];
      try {
        const stored = localStorage.getItem(RECENT_QUESTIONS_KEY);
        if (stored) {
          storedQuestions = JSON.parse(stored);
          // Filter out questions older than 1 week
          storedQuestions = storedQuestions.filter(q => (now - q.timestamp) < ONE_WEEK_MS);
        }
      } catch (e) {
        console.error("Failed to parse recent questions", e);
      }

      const recentQuestionTexts = storedQuestions.map(q => q.text);

      const generatedQuestions = await generateQuiz(topic, difficulty, questionCount, lang, recentQuestionTexts);
      
      if (generatedQuestions && generatedQuestions.length > 0) {
        // Save new questions to localStorage
        const newStoredQuestions = [
          ...storedQuestions,
          ...generatedQuestions.map((q: any) => ({ text: q.text, timestamp: now }))
        ];
        // Keep only the last 200 questions to avoid localStorage bloat
        if (newStoredQuestions.length > 200) {
          newStoredQuestions.splice(0, newStoredQuestions.length - 200);
        }
        localStorage.setItem(RECENT_QUESTIONS_KEY, JSON.stringify(newStoredQuestions));

        setQuestions(generatedQuestions);
        setCurrentIndex(0);
        setScore(0);
        setSelectedOption(null);
        setLastQuestionFeedback(null);
        setTimeLeft(questionCount * 60); // 1 minute per question
        setState('active');
      } else {
        throw new Error("No questions generated");
      }
    } catch (error: any) {
      console.error("Failed to generate quiz:", error);
      
      let errorMessage = isHi ? `क्विज़ जनरेट करने में विफल। कृपया पुनः प्रयास करें। (${error.message})` : `Failed to generate quiz. Please try again. (${error.message})`;
      
      if (error.message?.includes("API key is not configured") || error.message?.includes("Invalid API Key")) {
        errorMessage = isHi 
          ? "API Key सेट नहीं है या अमान्य है। कृपया Vercel सेटिंग्स में GEMINI_API_KEY जोड़ें।" 
          : "API Key is missing or invalid. Please set GEMINI_API_KEY in your Vercel project settings.";
      } else if (error.message?.includes("429") || error.message?.includes("quota") || error.message?.includes("RESOURCE_EXHAUSTED")) {
        errorMessage = isHi
          ? "API कोटा समाप्त हो गया है। कृपया कुछ मिनट प्रतीक्षा करें और पुनः प्रयास करें।"
          : "API Quota Exceeded. Please wait a few minutes and try again.";
      } else if (error.message?.includes("503") || error.message?.includes("UNAVAILABLE")) {
        errorMessage = isHi
          ? "AI मॉडल वर्तमान में ओवरलोड है। कृपया बाद में प्रयास करें।"
          : "AI model is currently overloaded. Please try again later.";
      }
      
      alert(errorMessage);
      setState('setup');
    }
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;

    const currentQ = questions[currentIndex];
    const isCorrect = selectedOption === currentQ.correctAnswerIndex;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setLastQuestionFeedback({
      isCorrect,
      explanation: currentQ.explanation,
      selectedOptionText: currentQ.options[selectedOption],
      correctOptionText: currentQ.options[currentQ.correctAnswerIndex]
    });

    setState('feedback');
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setState('active');
    } else {
      setState('result');
    }
  };

  // Timer logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (state === 'active' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && state === 'active') {
      setState('result');
    }
    return () => clearInterval(timer);
  }, [state, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 relative min-h-screen">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-[120px] pointer-events-none rounded-full" />
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 relative z-10"
      >
        <div className="inline-flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-indigo-500/30 mb-6 shadow-[0_0_30px_rgba(99,102,241,0.2)] relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl"></div>
          <Bot className="w-12 h-12 text-indigo-400 relative z-10" />
          {/* Hexagon outline effect */}
          <svg className="absolute inset-0 w-full h-full text-indigo-400/50 scale-125" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
             <polygon points="50 5, 95 27.5, 95 72.5, 50 95, 5 72.5, 5 27.5" />
          </svg>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 uppercase tracking-tighter mb-4 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">
          {isHi ? 'Na-rid क्विज़' : 'Na-rid QUIZ'}
        </h1>
        <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          {isHi 
            ? 'हमारे अनुकूली, Na-rid क्विज़ के साथ अपने विनिर्माण ज्ञान का परीक्षण करें!' 
            : 'Test your manufacturing knowledge with our adaptive, Na-rid quizzes!'}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Left Column: Customization */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900/60 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"></div>
            
            <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <Settings className="w-6 h-6 text-indigo-400" />
              {isHi ? 'अपना Na-rid क्विज़ कस्टमाइज़ करें' : 'Customize Your Na-rid Quiz'}
            </h2>

            <div className="space-y-6">
              {/* Topic */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                  <BrainCircuit className="w-4 h-4 text-indigo-400" />
                  {isHi ? 'विषय' : 'Topic'}
                </label>
                <select 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  disabled={state !== 'setup'}
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 appearance-none"
                >
                  {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {/* Difficulty */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-purple-400" />
                  {isHi ? 'कठिनाई' : 'Difficulty'}
                </label>
                <select 
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  disabled={state !== 'setup'}
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 appearance-none"
                >
                  {DIFFICULTIES.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>

              {/* Number of Questions */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                  <ListOrdered className="w-4 h-4 text-cyan-400" />
                  {isHi ? 'प्रश्नों की संख्या' : 'Number of Questions'}
                </label>
                <select 
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                  disabled={state !== 'setup'}
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 appearance-none"
                >
                  {QUESTION_COUNTS.map(c => <option key={c} value={c}>{c} (Dynamic)</option>)}
                </select>
              </div>

              <button
                onClick={startQuiz}
                disabled={state === 'loading' || state === 'active' || state === 'feedback'}
                className="w-full mt-8 relative group overflow-hidden rounded-xl p-[1px]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
                <div className="relative bg-slate-900 px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 group-hover:bg-slate-900/50">
                  {state === 'loading' ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Play className="w-5 h-5 text-white fill-current" />
                      <span className="text-white font-black uppercase tracking-widest">
                        {isHi ? 'Na-rid क्विज़ शुरू करें' : 'START Na-rid QUIZ'}
                      </span>
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Quiz Card */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-slate-900/60 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"></div>
            
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                  <Bot className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-white uppercase tracking-widest">
                    {isHi ? 'Na-rid क्विज़ कार्ड' : 'Na-rid QUIZ CARD'}
                  </h2>
                  {state !== 'setup' && state !== 'loading' && (
                    <div className="flex items-center gap-4 mt-1 text-xs font-bold">
                      <span className="text-slate-400">Question {currentIndex + 1} / {questions.length}</span>
                      <span className="text-emerald-400">SCORE +{score}</span>
                      <span className="text-cyan-400">TIME LEFT: {formatTime(timeLeft)}</span>
                    </div>
                  )}
                </div>
              </div>
              
              {state === 'active' && (
                <button 
                  onClick={handleNext}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-bold hover:bg-white/10 transition-colors"
                >
                  + SKIP
                </button>
              )}
            </div>

            {state === 'setup' || state === 'loading' ? (
              <div className="flex-grow flex flex-col items-center justify-center text-center opacity-50">
                <BrainCircuit className="w-16 h-16 text-indigo-400 mb-4 animate-pulse" />
                <p className="text-slate-400 text-lg">
                  {state === 'loading' 
                    ? (isHi ? 'Na-rid आपके लिए प्रश्न तैयार कर रहा है...' : 'Na-rid is generating your questions...')
                    : (isHi ? 'क्विज़ शुरू करने के लिए कस्टमाइज़ करें' : 'Customize and start to begin')}
                </p>
              </div>
            ) : state === 'result' ? (
              <div className="flex-grow flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <Award className="w-20 h-20 text-emerald-400 mb-6" />
                </motion.div>
                <h2 className="text-4xl font-black text-white mb-2">Quiz Complete!</h2>
                <p className="text-xl text-slate-300 mb-8">You scored {score} out of {questions.length}</p>
                <button 
                  onClick={() => setState('setup')}
                  className="px-8 py-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-black uppercase tracking-widest transition-colors"
                >
                  Try Another Quiz
                </button>
              </div>
            ) : (
              <div className="flex-grow flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-8 leading-relaxed">
                  {questions[currentIndex]?.text}
                </h3>

                <div className="space-y-3 mb-8">
                  {questions[currentIndex]?.options.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isFeedback = state === 'feedback';
                    const isCorrect = idx === questions[currentIndex].correctAnswerIndex;
                    
                    let btnClass = "w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-4 ";
                    
                    if (isFeedback) {
                      if (isCorrect) {
                        btnClass += "bg-emerald-500/20 border-emerald-500/50 text-emerald-100";
                      } else if (isSelected) {
                        btnClass += "bg-red-500/20 border-red-500/50 text-red-100";
                      } else {
                        btnClass += "bg-slate-900/50 border-white/5 text-slate-400 opacity-50";
                      }
                    } else {
                      if (isSelected) {
                        btnClass += "bg-indigo-500/20 border-indigo-500 text-white";
                      } else {
                        btnClass += "bg-slate-900/50 border-white/10 text-slate-300 hover:bg-white/5 hover:border-white/20";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => state === 'active' && setSelectedOption(idx)}
                        disabled={state === 'feedback'}
                        className={btnClass}
                      >
                        <span className="w-8 h-8 rounded-lg bg-black/20 flex items-center justify-center font-bold text-sm shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="font-medium text-sm md:text-base">{option}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-auto flex justify-end">
                  {state === 'active' ? (
                    <button
                      onClick={handleSubmit}
                      disabled={selectedOption === null}
                      className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-black uppercase tracking-widest text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isHi ? 'सबमिट करें' : 'SUBMIT'} <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black uppercase tracking-widest text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
                    >
                      {isHi ? 'अगला प्रश्न' : 'NEXT QUESTION'} <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <AnimatePresence>
        {state === 'feedback' && lastQuestionFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8 bg-slate-900/60 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">
                  {isHi ? 'Na-rid फीडबैक' : 'Na-rid FEEDBACK'}
                </h2>
                
                {(() => {
                  const parsed = parseExplanation(lastQuestionFeedback.explanation);
                  return (
                    <div className="space-y-4">
                      {parsed.general && (
                        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                          {parsed.general}
                        </p>
                      )}
                      
                      {parsed.why && (
                        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4">
                          <h3 className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" /> {isHi ? 'यह सही क्यों है' : 'Why it is correct'}
                          </h3>
                          <p className="text-slate-300 text-sm leading-relaxed">{parsed.why}</p>
                        </div>
                      )}
                      
                      {parsed.where && (
                        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                          <h3 className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Settings className="w-4 h-4" /> {isHi ? 'यह कहाँ उपयोग होता है' : 'Where it is used'}
                          </h3>
                          <p className="text-slate-300 text-sm leading-relaxed">{parsed.where}</p>
                        </div>
                      )}
                      
                      {parsed.what && (
                        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                          <h3 className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Zap className="w-4 h-4" /> {isHi ? 'इसका क्या अर्थ है' : 'What it means'}
                          </h3>
                          <p className="text-slate-300 text-sm leading-relaxed">{parsed.what}</p>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
              
              <div className="bg-slate-950/50 rounded-2xl p-6 border border-white/5">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <LineChart className="w-4 h-4" /> LAST QUESTION
                </h3>
                
                <div className={`p-4 rounded-xl border mb-6 flex items-center gap-4 ${lastQuestionFeedback.isCorrect ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-black text-xl ${lastQuestionFeedback.isCorrect ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                    {lastQuestionFeedback.isCorrect ? '✓' : '✗'}
                  </div>
                  <div>
                    <div className={`font-bold text-lg ${lastQuestionFeedback.isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                      {lastQuestionFeedback.isCorrect ? 'Correct' : 'Incorrect'}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase mb-1">Score</div>
                    <div className="text-xl font-black text-white">{score} / {questions.length}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase mb-1">Time Left</div>
                    <div className="text-xl font-black text-white">{formatTime(timeLeft)}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Features Bottom */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 relative z-10">
        {[
          { icon: Cpu, title: 'DYNAMIC QUESTIONS', desc: 'Na-rid creates custom quizzes based on your topic and skill level.', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
          { icon: ShieldAlert, title: 'ADAPTIVE DIFFICULTY', desc: 'Questions adjust in real-time to challenge you based on your performance.', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
          { icon: BrainCircuit, title: 'EXPLANATIONS & HINTS', desc: 'Receive instant feedback and detailed explanations for every answer.', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
          { icon: BarChart3, title: 'IN-DEPTH ANALYSIS', desc: 'Review your performance with detailed insights pinpointing weak areas.', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' }
        ].map((feature, idx) => (
          <div key={idx} className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 text-center hover:bg-slate-900/60 transition-colors">
            <div className={`w-16 h-16 mx-auto rounded-full ${feature.bg} ${feature.border} border flex items-center justify-center mb-4`}>
              <feature.icon className={`w-8 h-8 ${feature.color}`} />
            </div>
            <h3 className="text-sm font-black text-white uppercase tracking-widest mb-2">{feature.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Quiz;

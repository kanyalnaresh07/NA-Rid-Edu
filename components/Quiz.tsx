import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PlayCircle, Brain, Trophy, ChevronRight, 
  Clock, CheckCircle2, XCircle, Info, 
  ArrowLeft, ArrowRight, RotateCcw, ShieldAlert, Settings,
  BarChart3, Award, Timer, Share2, Eye, History,
  Factory, Wrench, ClipboardCheck, Truck, Package, Leaf, FileText
} from 'lucide-react';
import { getQuizData } from '../quizData';
import { QuizCategory, QuizQuestion, Language } from '../types';
import EmptyState from './EmptyState';

interface QuizProps {
  translations: any;
  lang: Language;
}

type QuizState = 'selection' | 'level_selection' | 'active' | 'result';

const Quiz: React.FC<QuizProps> = ({ translations, lang }) => {
  const [state, setState] = useState<QuizState>('selection');
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<'beginner' | 'intermediate' | 'advanced' | 'all'>('all');
  const [currentQuestions, setCurrentQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [score, setScore] = useState(0);
  const [leaderboard, setLeaderboard] = useState<{name: string, score: number, category: string, date: string}[]>([]);
  const [showReview, setShowReview] = useState(false);

  const quizData = getQuizData(lang);

  useEffect(() => {
    const savedLeaderboard = localStorage.getItem('quiz_leaderboard');
    if (savedLeaderboard) {
      setLeaderboard(JSON.parse(savedLeaderboard));
    }
  }, []);

  const startQuiz = (category: QuizCategory, level: 'beginner' | 'intermediate' | 'advanced' | 'all') => {
    let filtered = category.questions;
    if (level !== 'all') {
      filtered = category.questions.filter(q => q.level === level);
    }
    
    // Shuffle questions
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    
    setSelectedCategory(category);
    setSelectedLevel(level);
    setCurrentQuestions(shuffled);
    setCurrentIndex(0);
    setUserAnswers({});
    setTimeLeft(category.duration * 60);
    setState('active');
  };

  const handleAnswer = (optionIndex: number) => {
    if (userAnswers[currentQuestions[currentIndex].id] !== undefined) return;
    
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestions[currentIndex].id]: optionIndex
    }));
  };

  const nextQuestion = () => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const finishQuiz = useCallback(() => {
    let finalScore = 0;
    currentQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) {
        finalScore++;
      }
    });
    setScore(finalScore);
    setState('result');

    // Update leaderboard
    const newEntry = {
      name: 'You',
      score: Math.round((finalScore / currentQuestions.length) * 100),
      category: selectedCategory?.title || '',
      date: new Date().toLocaleDateString()
    };
    const updatedLeaderboard = [...leaderboard, newEntry]
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
    setLeaderboard(updatedLeaderboard);
    localStorage.setItem('quiz_leaderboard', JSON.stringify(updatedLeaderboard));
  }, [currentQuestions, userAnswers, selectedCategory, leaderboard]);

  const handleShare = () => {
    const percentage = Math.round((score / currentQuestions.length) * 100);
    const text = `I scored ${percentage}% on the ${selectedCategory?.title} at Na-Rid Education Hub! Can you beat me? 🚀`;
    if (navigator.share) {
      navigator.share({
        title: 'Na-Rid Quiz Result',
        text: text,
        url: window.location.href,
      }).catch(() => {
        navigator.clipboard.writeText(text);
        alert('Result copied to clipboard!');
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('Result copied to clipboard!');
    }
  };

  useEffect(() => {
    if (state === 'active' && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            finishQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [state, timeLeft, finishQuiz]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return ShieldAlert;
      case 'Settings': return Settings;
      case 'Trophy': return Trophy;
      case 'Factory': return Factory;
      case 'CheckCircle': return CheckCircle2;
      case 'Wrench': return Wrench;
      case 'ClipboardCheck': return ClipboardCheck;
      case 'Truck': return Truck;
      case 'Package': return Package;
      case 'Leaf': return Leaf;
      case 'FileText': return FileText;
      default: return Brain;
    }
  };

  const isHi = lang === 'hi';

  if (state === 'selection') {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-black text-white uppercase tracking-[0.2em] mb-4 italic">
            <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
              {translations.navQuiz}
            </span>
          </h2>
          <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">
            {isHi ? 'अपने औद्योगिक ज्ञान का परीक्षण करें' : 'Test your industrial knowledge and master the floor'}
          </p>
        </motion.div>

        <div className="grid gap-6">
          {quizData.map((quiz, idx) => {
            const Icon = getIcon(quiz.icon);
            return (
              <motion.button
                key={quiz.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedCategory(quiz);
                  setState('level_selection');
                }}
                className="group relative bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-500 cursor-pointer overflow-hidden text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative flex items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shadow-inner">
                      <Icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white uppercase tracking-wider mb-1 group-hover:text-cyan-400 transition-colors">
                        {quiz.title}
                      </h3>
                      <p className="text-slate-500 text-xs mb-3 font-medium">{quiz.description}</p>
                      <div className="flex items-center gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-1"><Timer size={12} /> {quiz.duration} min</span>
                        <span className="flex items-center gap-1"><Brain size={12} /> {quiz.questions.length} Questions</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/20 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-16 p-8 rounded-3xl bg-slate-900/40 border border-white/5 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/5 blur-3xl rounded-full"></div>
          <div className="flex items-center justify-between mb-8 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                <Award size={20} />
              </div>
              <h4 className="text-white font-black uppercase tracking-widest">{isHi ? 'शीर्ष प्रदर्शन' : 'Top Performers'}</h4>
            </div>
            {leaderboard.length > 0 && (
              <button 
                onClick={() => {
                  localStorage.removeItem('quiz_leaderboard');
                  setLeaderboard([]);
                }}
                className="text-slate-600 hover:text-red-400 transition-colors text-[8px] font-black uppercase tracking-widest focus:outline-none focus-visible:text-red-400"
              >
                {isHi ? 'साफ़ करें' : 'Clear'}
              </button>
            )}
          </div>
          
          <div className="relative z-10">
            {leaderboard.length > 0 ? (
              <div className="space-y-3">
                {leaderboard.map((entry, i) => (
                  <div key={i} className="group flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-cyan-500/20 transition-all">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs ${i === 0 ? 'bg-yellow-500 text-black' : i === 1 ? 'bg-slate-300 text-black' : i === 2 ? 'bg-orange-400 text-black' : 'bg-white/10 text-white'}`}>
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{entry.name}</p>
                        <div className="flex items-center gap-2">
                          <p className="text-slate-500 text-[9px] uppercase tracking-tighter font-bold">{entry.category}</p>
                          <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                          <p className="text-slate-600 text-[8px] font-medium">{entry.date}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-cyan-400 font-black text-lg">{entry.score}%</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState 
                icon={History}
                title={isHi ? 'कोई हालिया गतिविधि नहीं' : 'No Recent Activity'}
                description={isHi 
                  ? 'आपने अभी तक कोई क्विज़ नहीं दी है। अपनी पहली क्विज़ शुरू करें!' 
                  : 'You haven\'t taken any quizzes yet. Start your first challenge to see your score here!'}
                className="py-8"
              />
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  if (state === 'level_selection') {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20">
        <button 
          onClick={() => setState('selection')}
          className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-8 uppercase text-[10px] font-black tracking-widest focus:outline-none focus-visible:text-white"
        >
          <ArrowLeft size={14} /> {isHi ? 'पीछे' : 'Back'}
        </button>
        
        <h2 className="text-3xl font-black text-white uppercase tracking-wider mb-2">
          {isHi ? 'कठिनाई स्तर चुनें' : 'Select Difficulty'}
        </h2>
        <p className="text-slate-500 text-sm mb-10 font-medium">
          {isHi ? 'अपनी विशेषज्ञता के अनुसार स्तर चुनें' : 'Choose a level that matches your expertise'}
        </p>

        <div className="grid gap-4">
          {[
            { id: 'beginner', label: isHi ? 'शुरुआती (Beginner)' : 'Beginner', color: 'bg-green-500' },
            { id: 'intermediate', label: isHi ? 'मध्यम (Intermediate)' : 'Intermediate', color: 'bg-yellow-500' },
            { id: 'advanced', label: isHi ? 'उन्नत (Advanced)' : 'Advanced', color: 'bg-red-500' },
            { id: 'all', label: isHi ? 'सभी प्रश्न (All Questions)' : 'All Questions', color: 'bg-cyan-500' }
          ].map((level) => (
            <button
              key={level.id}
              onClick={() => startQuiz(selectedCategory!, level.id as any)}
              className="flex items-center justify-between p-6 bg-slate-900/60 border border-white/5 rounded-2xl hover:border-white/20 hover:bg-slate-800 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
            >
              <div className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${level.color}`}></div>
                <span className="text-white font-bold uppercase tracking-widest text-sm">{level.label}</span>
              </div>
              <ChevronRight className="text-slate-600 group-hover:text-white transition-colors" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (state === 'active' && currentQuestions.length > 0) {
    const q = currentQuestions[currentIndex];
    const progress = ((currentIndex + 1) / currentQuestions.length) * 100;
    const answered = userAnswers[q.id] !== undefined;

    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400">
              <Brain size={24} />
            </div>
            <div>
              <h3 className="text-white font-black uppercase tracking-widest text-sm">{selectedCategory?.title}</h3>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-tighter">Question {currentIndex + 1} of {currentQuestions.length}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-full border border-white/10">
            <Clock size={14} className={timeLeft < 60 ? 'text-red-500 animate-pulse' : 'text-cyan-500'} />
            <span className={`font-mono font-bold ${timeLeft < 60 ? 'text-red-500' : 'text-white'}`}>{formatTime(timeLeft)}</span>
          </div>
        </div>

        <div className="w-full h-1 bg-slate-900 rounded-full mb-12 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,1)]"
          />
        </div>

        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-8">
              {q.question}
            </h2>

            <div className="grid gap-4">
              {q.options.map((option, i) => {
                const isSelected = userAnswers[q.id] === i;
                const isCorrect = q.correctAnswer === i;
                let borderColor = 'border-white/5';
                let bgColor = 'bg-slate-900/40';
                
                if (answered) {
                  if (isCorrect) {
                    borderColor = 'border-green-500';
                    bgColor = 'bg-green-500/10';
                  } else if (isSelected) {
                    borderColor = 'border-red-500';
                    bgColor = 'bg-red-500/10';
                  }
                } else {
                  borderColor = 'hover:border-cyan-500/50 hover:bg-slate-800/60';
                }

                return (
                  <button
                    key={i}
                    disabled={answered}
                    onClick={() => handleAnswer(i)}
                    className={`w-full text-left p-6 rounded-2xl border ${borderColor} ${bgColor} transition-all flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50`}
                  >
                    <span className={`font-bold ${isSelected ? 'text-white' : 'text-slate-300'} group-hover:text-white`}>{option}</span>
                    {answered && isCorrect && <CheckCircle2 className="text-green-500" size={20} />}
                    {answered && isSelected && !isCorrect && <XCircle className="text-red-500" size={20} />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between">
          <button
            onClick={prevQuestion}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-slate-400 font-bold uppercase text-[10px] tracking-widest hover:bg-white/10 hover:text-white transition-all disabled:opacity-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
          >
            <ArrowLeft size={14} /> {isHi ? 'पिछला' : 'Previous'}
          </button>
          
          <button
            onClick={nextQuestion}
            disabled={!answered}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-cyan-500 text-white font-black uppercase text-[10px] tracking-widest hover:bg-cyan-400 transition-all disabled:opacity-30 shadow-[0_0_20px_rgba(6,182,212,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
          >
            {currentIndex === currentQuestions.length - 1 ? (isHi ? 'सबमिट' : 'Submit') : (isHi ? 'अगला' : 'Next')} <ArrowRight size={14} />
          </button>
        </div>
      </div>
    );
  }

  if (state === 'result') {
    const percentage = Math.round((score / currentQuestions.length) * 100);
    const passed = percentage >= 70;

    if (showReview) {
      return (
        <div className="max-w-3xl mx-auto px-6 py-12">
          <button 
            onClick={() => setShowReview(false)}
            className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-8 uppercase text-[10px] font-black tracking-widest focus:outline-none focus-visible:text-white"
          >
            <ArrowLeft size={14} /> {isHi ? 'परिणाम पर वापस' : 'Back to Result'}
          </button>
          
          <h2 className="text-3xl font-black text-white uppercase tracking-wider mb-8">
            {isHi ? 'प्रश्नों की समीक्षा' : 'Review Answers'}
          </h2>

          <div className="space-y-8">
            {currentQuestions.map((q, idx) => {
              const userAnswer = userAnswers[q.id];
              const isCorrect = userAnswer === q.correctAnswer;
              
              return (
                <div key={q.id} className="p-6 rounded-3xl bg-slate-900/40 border border-white/5">
                  <div className="flex items-start gap-4 mb-4">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shrink-0 ${isCorrect ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                      {idx + 1}
                    </span>
                    <p className="text-white font-bold leading-relaxed">{q.question}</p>
                  </div>
                  
                  <div className="grid gap-2 ml-12">
                    {q.options.map((opt, i) => (
                      <div 
                        key={i}
                        className={`p-3 rounded-xl text-xs font-medium border ${
                          i === q.correctAnswer 
                            ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                            : i === userAnswer 
                              ? 'bg-red-500/10 border-red-500/30 text-red-400'
                              : 'bg-white/5 border-transparent text-slate-500'
                        }`}
                      >
                        {opt}
                        {i === q.correctAnswer && <span className="ml-2 text-[8px] font-black uppercase tracking-widest">(Correct)</span>}
                        {i === userAnswer && i !== q.correctAnswer && <span className="ml-2 text-[8px] font-black uppercase tracking-widest">(Your Answer)</span>}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-12"
        >
          <div className={`w-32 h-32 rounded-full mx-auto flex items-center justify-center mb-8 ${passed ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
            {passed ? <Trophy size={64} /> : <RotateCcw size={64} />}
          </div>
          
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">
            {passed ? (isHi ? 'बधाई हो!' : 'Congratulations!') : (isHi ? 'फिर से प्रयास करें' : 'Keep Learning!') }
          </h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest mb-12">
            {isHi ? `आपने ${currentQuestions.length} में से ${score} अंक प्राप्त किए` : `You scored ${score} out of ${currentQuestions.length}`}
          </p>

          <div className="grid grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/5">
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{isHi ? 'प्रतिशत' : 'Percentage'}</p>
              <p className="text-3xl font-black text-white">{percentage}%</p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/5">
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{isHi ? 'स्थिति' : 'Status'}</p>
              <p className={`text-3xl font-black ${passed ? 'text-green-500' : 'text-red-500'}`}>
                {passed ? (isHi ? 'पास' : 'PASS') : (isHi ? 'फेल' : 'FAIL')}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={() => setState('selection')}
              className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-cyan-500 text-white font-black uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
            >
              {isHi ? 'होम पर जाएं' : 'Back to Home'}
            </button>
            <button
              onClick={() => startQuiz(selectedCategory!, selectedLevel)}
              className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-white/5 text-white font-black uppercase tracking-widest hover:bg-white/10 transition-all border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              {isHi ? 'पुनः प्रयास करें' : 'Try Again'}
            </button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <button 
              onClick={() => setShowReview(true)}
              className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors text-[10px] font-black uppercase tracking-widest focus:outline-none focus-visible:text-cyan-400"
            >
              <Eye size={14} /> {isHi ? 'जवाब देखें' : 'Review Answers'}
            </button>
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors text-[10px] font-black uppercase tracking-widest focus:outline-none focus-visible:text-cyan-400"
            >
              <Share2 size={14} /> {isHi ? 'शेयर करें' : 'Share Result'}
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
};

export default Quiz;

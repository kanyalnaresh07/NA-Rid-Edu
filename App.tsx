
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Hero from './components/HeroSection';
import GlossaryList from './components/GlossaryList';
import SubCategoryList from './components/SubCategoryList';
import About from './components/About';
import Quiz from './components/Quiz';
import Photos from './components/Photos';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import LanguageModal from './components/LanguageModal';
import NetworkBackground from './components/NetworkBackground';
import { PageView, Language, GlossaryTerm } from './types';
import { TRANSLATIONS, AIRFOCUS_LOGO } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<PageView>(PageView.HOME);
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('app_lang');
    return (saved as Language) || 'en';
  });
  const [hasSelectedLang, setHasSelectedLang] = useState<boolean>(true);
  const [showLangModal, setShowLangModal] = useState<boolean>(false);
  const [pendingView, setPendingView] = useState<PageView | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<GlossaryTerm | null>(null);
  const [initialSubItem, setInitialSubItem] = useState<string | null>(null);
  const [initialPoint, setInitialPoint] = useState<string | null>(null);
  const [viewHistory, setViewHistory] = useState<PageView[]>([PageView.HOME]);
  const [showSecurityAlert, setShowSecurityAlert] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    // Prevent right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Prevent copy
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      setShowSecurityAlert(true);
      setTimeout(() => setShowSecurityAlert(false), 3000);
    };

    // Prevent dragstart
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    // Prevent selectstart
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
    };

    // Prevent common devtools shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
      }
      // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
        e.preventDefault();
      }
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
      }
      // Ctrl+S (Save)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
      }
      // Ctrl+P (Print)
      if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('keydown', handleKeyDown);

    // Deter DevTools usage with debugger loop
    const deterDevTools = setInterval(() => {
      const startTime = performance.now();
      debugger;
      const endTime = performance.now();
      if (endTime - startTime > 100) {
        // DevTools is likely open
        // We could take action here, but the debugger itself is the deterrent
      }
    }, 1000);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('keydown', handleKeyDown);
      clearInterval(deterDevTools);
    };
  }, []);

  const navigateTo = (targetView: PageView) => {
    if (targetView !== view) {
      setViewHistory(prev => [...prev, targetView]);
      setView(targetView);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (viewHistory.length > 1) {
      const newHistory = [...viewHistory];
      newHistory.pop(); // Remove current
      const prevView = newHistory[newHistory.length - 1];
      setViewHistory(newHistory);
      setView(prevView);
      if (prevView === PageView.GLOSSARY) {
        setSelectedCategory(null);
      }
    } else {
      setView(PageView.HOME);
      setViewHistory([PageView.HOME]);
      setSelectedCategory(null);
    }
  };

  const navigateWithLangCheck = (targetView: PageView) => {
    navigateTo(targetView);
  };

  const handleLanguageSelect = (selectedLang: Language) => {
    setLang(selectedLang);
    setHasSelectedLang(true);
    setShowLangModal(false);
    localStorage.setItem('app_lang', selectedLang);
    localStorage.setItem('app_lang_selected', 'true');
    if (pendingView) {
      navigateTo(pendingView);
      setPendingView(null);
    }
  };

  const handleExploreClick = () => {
    navigateWithLangCheck(PageView.GLOSSARY);
  };

  const handleBackHome = () => {
    setView(PageView.HOME);
    setViewHistory([PageView.HOME]);
    setSelectedCategory(null);
  };

  const handleCategorySelect = (category: GlossaryTerm, subItem?: string, point?: string) => {
    setSelectedCategory(category);
    setInitialSubItem(subItem || null);
    setInitialPoint(point || null);
    navigateTo(PageView.CATEGORY_DETAIL);
  };

  const handleBackToGlossary = () => {
    setInitialSubItem(null);
    setInitialPoint(null);
    handleBack();
  };

  const handleAboutClick = () => {
    navigateWithLangCheck(PageView.ABOUT);
  };

  const handleQuizClick = () => {
    navigateWithLangCheck(PageView.QUIZ);
  };

  const handlePhotosClick = () => {
    navigateWithLangCheck(PageView.PHOTOS);
  };

  const handleContactClick = () => {
    navigateWithLangCheck(PageView.CONTACT);
  };

  const handlePrivacyClick = () => {
    navigateWithLangCheck(PageView.PRIVACY);
  };

  const LanguageSwitcher = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-0 bg-white/10 backdrop-blur-md p-0.5 rounded-lg border border-white/20 shadow-lg ${className}`}>
      <button 
        onClick={() => {
          setLang('en');
          localStorage.setItem('app_lang', 'en');
        }}
        className={`px-1.5 py-0.5 md:px-3 md:py-1 rounded-md text-[9px] md:text-[10px] font-black transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-white/50 ${lang === 'en' ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/50' : 'text-white/60 hover:text-white'}`}
      >
        EN
      </button>
      <button 
        onClick={() => {
          setLang('hi');
          localStorage.setItem('app_lang', 'hi');
        }}
        className={`px-1.5 py-0.5 md:px-3 md:py-1 rounded-md text-[9px] md:text-[10px] font-black transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-white/50 ${lang === 'hi' ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/50' : 'text-white/60 hover:text-white'}`}
      >
        हिं
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020617] relative overflow-x-hidden">
      <NetworkBackground />

      <div className="relative z-10">
        <LanguageModal isOpen={showLangModal} onSelect={handleLanguageSelect} />
        
        <AnimatePresence>
          {showSecurityAlert && (
            <motion.div
              initial={{ opacity: 0, y: 50, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 50, x: '-50%' }}
              className="fixed bottom-10 left-1/2 z-[100] bg-red-500/90 backdrop-blur-xl border border-red-400/50 px-6 py-3 rounded-2xl shadow-[0_0_30px_rgba(239,68,68,0.4)] text-white font-black text-sm uppercase tracking-widest flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Security Alert: Content Protected
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {view === PageView.HOME ? (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
              transition={{ duration: 0.4 }}
            >
              <Hero 
                title={t.title}
                description={t.description}
                onGlossaryClick={handleExploreClick}
                onAboutClick={handleAboutClick}
                lang={lang}
                setLang={handleLanguageSelect}
                translations={t}
              />
            </motion.div>
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="min-h-screen flex flex-col"
            >
              <header className="bg-slate-950/80 border-b border-cyan-500/10 px-2 md:px-12 py-2 md:py-4 flex justify-between items-center sticky top-0 z-50 backdrop-blur-2xl h-14 md:h-20">
                <div className="flex items-center gap-1 md:gap-8 min-w-0 flex-1 h-full">
                  <div onClick={handleBackHome} className="cursor-pointer scale-[0.6] sm:scale-75 origin-left md:scale-90 hover:opacity-80 transition-opacity shrink-0">
                      {AIRFOCUS_LOGO}
                  </div>
                  <nav className="flex items-center gap-1.5 md:gap-6 overflow-x-auto no-scrollbar whitespace-nowrap min-w-0 pr-4 h-full">
                    <button onClick={handleBackHome} className="text-white text-[7px] md:text-[10px] font-black uppercase tracking-[0.05em] md:tracking-[0.2em] transition-colors hover:text-cyan-400">{t.navHome}</button>
                    <span className="text-white/10 md:text-white/20 text-[7px]">/</span>
                    <button onClick={handleQuizClick} className={`text-white text-[7px] md:text-[10px] font-black uppercase tracking-[0.05em] md:tracking-[0.2em] transition-colors ${view === PageView.QUIZ ? 'text-cyan-400' : 'hover:text-cyan-400'}`}>{t.navQuiz}</button>
                    <span className="text-white/10 md:text-white/20 text-[7px]">/</span>
                    <button onClick={handlePhotosClick} className={`text-white text-[7px] md:text-[10px] font-black uppercase tracking-[0.05em] md:tracking-[0.2em] transition-colors ${view === PageView.PHOTOS ? 'text-cyan-400' : 'hover:text-cyan-400'}`}>{t.navPhotos}</button>
                    <span className="text-white/10 md:text-white/20 text-[7px]">/</span>
                    <button onClick={handleAboutClick} className={`text-white text-[7px] md:text-[10px] font-black uppercase tracking-[0.05em] md:tracking-[0.2em] transition-colors ${view === PageView.ABOUT ? 'text-cyan-400' : 'hover:text-cyan-400'}`}>{t.navAbout}</button>
                    <span className="text-white/10 md:text-white/20 text-[7px]">/</span>
                    <button onClick={handleContactClick} className={`text-white text-[7px] md:text-[10px] font-black uppercase tracking-[0.05em] md:tracking-[0.2em] transition-colors ${view === PageView.CONTACT ? 'text-cyan-400' : 'hover:text-cyan-400'}`}>{t.navContact}</button>
                  </nav>
                </div>
                
                <div className="flex items-center gap-1 md:gap-4 shrink-0 h-full">
                  <LanguageSwitcher />
                </div>
              </header>

              <main className="flex-grow">
                <AnimatePresence mode="wait">
                  {view === PageView.GLOSSARY && (
                    <motion.div
                      key="glossary-list"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    >
                      <GlossaryList 
                        translations={t} 
                        lang={lang} 
                        onCategorySelect={handleCategorySelect} 
                      />
                    </motion.div>
                  )}
                  {view === PageView.CATEGORY_DETAIL && selectedCategory && (
                    <motion.div
                      key="category-detail"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <SubCategoryList 
                        category={selectedCategory}
                        translations={t}
                        lang={lang}
                        onBack={handleBackToGlossary}
                        initialSubItem={initialSubItem}
                        initialPoint={initialPoint}
                      />
                    </motion.div>
                  )}
                  {view === PageView.ABOUT && (
                    <motion.div
                      key="about"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <About translations={t} lang={lang} />
                    </motion.div>
                  )}
                  {view === PageView.QUIZ && (
                    <motion.div
                      key="quiz"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Quiz translations={t} lang={lang} />
                    </motion.div>
                  )}
                  {view === PageView.PHOTOS && (
                    <motion.div
                      key="photos"
                      initial={{ opacity: 0, filter: "blur(10px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(10px)" }}
                      transition={{ duration: 0.4 }}
                    >
                      <Photos translations={t} lang={lang} />
                    </motion.div>
                  )}
                  {view === PageView.CONTACT && (
                    <motion.div
                      key="contact"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Contact translations={t} />
                    </motion.div>
                  )}
                  {view === PageView.PRIVACY && (
                    <motion.div
                      key="privacy"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <PrivacyPolicy translations={t} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </main>

              <footer className="bg-slate-950 text-white py-12 px-6 border-t border-cyan-500/5 backdrop-blur-md">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="scale-110 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 rounded-lg p-1" onClick={handleBackHome} tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleBackHome()}>
                    {AIRFOCUS_LOGO}
                  </div>
                  <div className="flex flex-col items-center md:items-end gap-2">
                      <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">{t.copyright}</p>
                      <div className="flex items-center gap-4">
                        <button onClick={handlePrivacyClick} className="text-cyan-500/60 hover:text-cyan-400 text-[9px] uppercase tracking-widest font-bold transition-colors">
                          {t.navPrivacy}
                        </button>
                        <span className="text-white/10 text-[9px]">|</span>
                        <p className="text-slate-600 text-[9px] uppercase tracking-widest font-bold">{t.footerText}</p>
                      </div>
                      <div className="flex gap-4 mt-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,1)]"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                      </div>
                  </div>
                </div>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;

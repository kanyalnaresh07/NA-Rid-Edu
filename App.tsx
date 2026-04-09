
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Hero from './components/HeroSection';
import LanguageModal from './components/LanguageModal';
import LoadingSkeleton from './components/LoadingSkeleton';
import Sidebar from './components/Sidebar';
import { PageView, Language, GlossaryTerm } from './types';
import { TRANSLATIONS, AIRFOCUS_LOGO, GLOSSARY_TERMS } from './constants';
import AppBackground from './components/AppBackground';
import { Sparkles, ChevronRight, Globe } from 'lucide-react';

const changelog = {
  major: [
    { title: "New Glossary Structure", desc: "Redesigned the glossary layout for better navigation." },
    { title: "Multi-language Support", desc: "Added full Hindi language support." }
  ],
  minor: [
    { title: "UI Improvements", desc: "Enhanced animations and visual feedback." },
    { title: "Performance", desc: "Optimized rendering for smoother experience." }
  ],
  fixes: [
    { title: "Fixed navigation bugs" },
    { title: "Resolved layout issues on mobile" }
  ]
};

const GlossaryList = lazy(() => import('./components/GlossaryList'));
const SubCategoryList = lazy(() => import('./components/SubCategoryList'));
const About = lazy(() => import('./components/About'));
const Quiz = lazy(() => import('./components/Quiz'));
const Photos = lazy(() => import('./components/Photos'));
const Videos = lazy(() => import('./components/Videos'));
const AIHub = lazy(() => import('./components/AIHub'));
const Contact = lazy(() => import('./components/Contact'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));

const App: React.FC = () => {
  const [view, setView] = useState<PageView>(PageView.HOME);
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('app_lang');
    if (saved === 'en' || saved === 'hi') {
      return saved as Language;
    }
    return 'en';
  });
  const [hasSelectedLang, setHasSelectedLang] = useState<boolean>(true);
  const [showLangModal, setShowLangModal] = useState<boolean>(false);
  const [pendingView, setPendingView] = useState<PageView | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<GlossaryTerm | null>(null);
  const [initialSubItem, setInitialSubItem] = useState<string | null>(null);
  const [initialPoint, setInitialPoint] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewHistory, setViewHistory] = useState<PageView[]>([PageView.HOME]);
  const [showSecurityAlert, setShowSecurityAlert] = useState(false);
  const [showChangelog, setShowChangelog] = useState(false);

  const t = TRANSLATIONS[lang] || TRANSLATIONS['en'];

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

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    // Check URL parameters for initial view and state
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view') as PageView;
    const qParam = params.get('q');
    const catIdParam = params.get('categoryId');
    const subItemParam = params.get('subItem');
    const pointParam = params.get('point');

    const initialView = Object.values(PageView).includes(viewParam) ? viewParam : PageView.HOME;
    
    if (qParam) setSearchQuery(qParam);
    if (subItemParam) setInitialSubItem(subItemParam);
    if (pointParam) setInitialPoint(pointParam);
    if (catIdParam) {
      const cat = GLOSSARY_TERMS.find(c => c.id === catIdParam);
      if (cat) setSelectedCategory(cat);
    }

    setView(initialView);

    const handlePopState = (event: PopStateEvent) => {
      const state = event.state;
      
      if (!state || state.isFallback) {
        // Prevent exit by pushing state again and going to HOME
        setView(PageView.HOME);
        try {
          window.history.pushState({ view: PageView.HOME }, '', `?view=${PageView.HOME}`);
        } catch (e) {
          console.warn("History API not available:", e);
        }
        return;
      }

      const targetView = state.view || PageView.HOME;
      setView(targetView);
      
      // Handle category restoration
      if (state.categoryId) {
        const cat = GLOSSARY_TERMS.find(c => c.id === state.categoryId);
        if (cat) setSelectedCategory(cat);
      } else if (targetView === PageView.GLOSSARY || targetView === PageView.HOME) {
        setSelectedCategory(null);
      }
      
      // Handle subItem and point restoration
      setInitialSubItem(state.subItem || null);
      setInitialPoint(state.point || null);
      
      setViewHistory(prev => {
        if (prev.length > 1 && prev[prev.length - 2] === targetView) {
          return prev.slice(0, -1);
        }
        return [...prev, targetView];
      });
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigateTo = (targetView: PageView, additionalState: any = {}) => {
    if (targetView !== view || Object.keys(additionalState).length > 0) {
      // Preload the next view if it's a lazy component
      // This helps reduce the "Loading..." flash
      const preloadMap: Record<string, () => Promise<any>> = {
        [PageView.GLOSSARY]: () => import('./components/GlossaryList'),
        [PageView.ABOUT]: () => import('./components/About'),
        [PageView.QUIZ]: () => import('./components/Quiz'),
        [PageView.PHOTOS]: () => import('./components/Photos'),
        [PageView.VIDEOS]: () => import('./components/Videos'),
        [PageView.AI_HUB]: () => import('./components/AIHub'),
        [PageView.CONTACT]: () => import('./components/Contact'),
      };
      
      if (preloadMap[targetView]) {
        preloadMap[targetView]();
      }

      setViewHistory(prev => [...prev, targetView]);
      setView(targetView);
      
      const newState = { view: targetView, ...additionalState };
      let url = `?view=${targetView}`;
      if (additionalState.q) url += `&q=${encodeURIComponent(additionalState.q)}`;
      if (additionalState.categoryId) url += `&categoryId=${encodeURIComponent(additionalState.categoryId)}`;
      if (additionalState.subItem) url += `&subItem=${encodeURIComponent(additionalState.subItem)}`;
      if (additionalState.point) url += `&point=${encodeURIComponent(additionalState.point)}`;
      
      try {
        window.history.pushState(newState, '', url);
      } catch (e) {
        console.warn("History API not available:", e);
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleBack = () => {
    if (window.history.state?.isFallback || window.history.length <= 2) {
      navigateTo(PageView.HOME);
    } else {
      window.history.back();
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
    navigateTo(PageView.HOME);
  };

  const handleCategorySelect = (category: GlossaryTerm, subItem?: string, point?: string) => {
    setSelectedCategory(category);
    setInitialSubItem(subItem || null);
    setInitialPoint(point || null);
    navigateTo(PageView.CATEGORY_DETAIL, { categoryId: category.id, subItem: subItem || null, point: point || null });
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

  const handleVideosClick = () => {
    navigateWithLangCheck(PageView.VIDEOS);
  };

  const handleAiHubClick = () => {
    navigateWithLangCheck(PageView.AI_HUB);
  };

  const handleContactClick = () => {
    navigateWithLangCheck(PageView.CONTACT);
  };

  const handlePrivacyClick = () => {
    navigateWithLangCheck(PageView.PRIVACY);
  };

  const getNavTitle = () => {
    if (view === PageView.HOME) return TRANSLATIONS[lang].title;
    
    // Special cases
    if (view === PageView.GLOSSARY) return TRANSLATIONS[lang].navCategories;
    if (view === PageView.CATEGORY_DETAIL) return selectedCategory?.title || TRANSLATIONS[lang].navCategories;
    if (view === PageView.AI_HUB) return TRANSLATIONS[lang].navAiHub;
    
    const navKey = `nav${view.charAt(0).toUpperCase() + view.slice(1).toLowerCase()}`;
    const title = (TRANSLATIONS[lang] as any)[navKey];
    return typeof title === 'string' ? title : view;
  };

  return (
    <AppBackground>
      <div className="min-h-screen bg-transparent relative overflow-x-hidden flex">
        {/* Global Sidebar - Hidden on Home Page */}
        {view !== PageView.HOME && (
          <Sidebar 
            currentView={view}
            onNavigate={navigateTo}
            lang={lang}
            onLangChange={() => setShowLangModal(true)}
            translations={t}
            showChangelog={showChangelog}
            setShowChangelog={setShowChangelog}
          />
        )}

        <div className={`relative z-10 flex-grow transition-all duration-500 ${view === PageView.HOME ? 'pl-0' : 'pl-[70px] lg:pl-[280px]'}`}>
          {/* Floating Logo and Language Switcher for Home Page (since Sidebar/Nav is hidden) */}
          {view === PageView.HOME && (
            <div className="absolute top-8 left-8 md:left-12 z-[50] flex items-center gap-6">
              <div 
                onClick={() => navigateTo(PageView.HOME)}
                className="cursor-pointer hover:opacity-80 transition-opacity scale-110 origin-left"
              >
                {AIRFOCUS_LOGO}
              </div>
              
              <button 
                onClick={() => setShowLangModal(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400 hover:bg-white/10 transition-all group backdrop-blur-md"
              >
                <Globe size={18} className="group-hover:rotate-12 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block">
                  {lang === 'en' ? 'EN' : 'हिं'}
                </span>
              </button>
            </div>
          )}

          {/* Top Navigation Bar - Hidden on Home Page */}
          {view !== PageView.HOME && (
            <header className="sticky top-0 left-0 right-0 z-[40] bg-slate-950/80 backdrop-blur-md border-b border-white/5 px-4 md:px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="block">
                  <h2 className="text-sm font-black text-white uppercase tracking-widest">
                    {getNavTitle()}
                  </h2>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setShowLangModal(true)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400 hover:bg-white/10 transition-all group"
                >
                  <Globe size={18} className="group-hover:rotate-12 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block">
                    {lang === 'en' ? 'EN' : 'हिं'}
                  </span>
                </button>
              </div>
            </header>
          )}

          {/* Main Content Area */}
          
          <LanguageModal isOpen={showLangModal} onSelect={handleLanguageSelect} />
          
          {/* Changelog Modal */}
          <AnimatePresence>
            {showChangelog && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                  onClick={() => setShowChangelog(false)}
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/20 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden"
                >
                  {/* Header */}
                  <div className="p-6 md:p-8 border-b border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <Sparkles size={24} />
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                          {lang === 'hi' ? 'नया क्या है?' : 'What\'s New?'}
                        </h2>
                        <p className="text-sm font-bold text-cyan-500 uppercase tracking-widest mt-1">
                          {lang === 'hi' ? 'संस्करण 2.0.0' : 'Version 2.0.0'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
                    <div className="space-y-8">
                      {/* Major */}
                      <section>
                        <div className="flex items-center gap-2 mb-4">
                          <Sparkles className="text-cyan-400" size={18} />
                          <h3 className="text-sm font-black text-cyan-500 uppercase tracking-[0.3em]">
                            {lang === 'hi' ? 'प्रमुख अपडेट्स' : 'Major Updates'}
                          </h3>
                        </div>
                        <div className="space-y-3">
                          {changelog.major.map((item, i) => (
                            <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 shrink-0" />
                              <div>
                                <h4 className="text-sm font-black text-white uppercase tracking-tight">{item.title}</h4>
                                <p className="text-xs text-slate-400 mt-1 font-medium">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>

                      {/* Minor */}
                      <section>
                        <div className="flex items-center gap-2 mb-4">
                          <Sparkles className="text-emerald-400" size={16} />
                          <h3 className="text-xs font-black text-emerald-500 uppercase tracking-[0.3em]">
                            {lang === 'hi' ? 'लघु अपडेट्स' : 'Minor Updates'}
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {changelog.minor.map((item, i) => (
                            <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5">
                              <h4 className="text-xs font-black text-white uppercase tracking-tight">{item.title}</h4>
                              <p className="text-[10px] text-slate-400 mt-1 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </section>

                      {/* Fixes */}
                      <section>
                        <div className="flex items-center gap-2 mb-4">
                          <Sparkles className="text-amber-400" size={16} />
                          <h3 className="text-xs font-black text-amber-500 uppercase tracking-[0.3em]">
                            {lang === 'hi' ? 'बग फिक्स' : 'Bug Fixes'}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {changelog.fixes.map((item, i) => (
                            <div key={i} className="px-3 py-2 bg-white/5 rounded-xl border border-white/5 flex items-center gap-2">
                              <div className="w-1 h-1 bg-amber-500 rounded-full" />
                              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">{item.title}</span>
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-6 bg-slate-950/50 border-t border-white/5 flex items-center justify-between">
                    <p className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em]">
                      {lang === 'hi' ? 'सिस्टम स्थिति: इष्टतम' : 'System Status: Optimal'}
                    </p>
                    <button 
                      onClick={() => setShowChangelog(false)}
                      className="flex items-center gap-2 text-[10px] font-black text-cyan-400 uppercase tracking-widest hover:gap-3 transition-all"
                    >
                      {lang === 'hi' ? 'जारी रखें' : 'Continue'}
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        
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
              <main className="flex-grow">
                <Suspense fallback={<LoadingSkeleton />}>
                  <AnimatePresence mode="wait" initial={false}>
                    {view === PageView.GLOSSARY && (
                    <motion.div
                      key="glossary-list"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15, ease: "linear" }}
                      style={{ willChange: "transform, opacity" }}
                    >
                      <GlossaryList 
                        translations={t} 
                        lang={lang} 
                        onCategorySelect={handleCategorySelect} 
                        initialSearchQuery={searchQuery}
                        onSearchChange={(q) => {
                          setSearchQuery(q);
                          // Update URL without full navigation
                          const url = new URL(window.location.href);
                          if (q) url.searchParams.set('q', q);
                          else url.searchParams.delete('q');
                          window.history.replaceState(window.history.state, '', url.toString());
                        }}
                      />
                    </motion.div>
                  )}
                  {view === PageView.CATEGORY_DETAIL && selectedCategory && (
                    <motion.div
                      key="category-detail"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.15, ease: "linear" }}
                      style={{ willChange: "transform, opacity" }}
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
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15, ease: "linear" }}
                      style={{ willChange: "transform, opacity" }}
                    >
                      <About translations={t} lang={lang} />
                    </motion.div>
                  )}
                  {view === PageView.QUIZ && (
                    <motion.div
                      key="quiz"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.15, ease: "linear" }}
                      style={{ willChange: "transform, opacity" }}
                    >
                      <Quiz translations={t} lang={lang} />
                    </motion.div>
                  )}
                  {view === PageView.PHOTOS && (
                    <motion.div
                      key="photos"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15, ease: "linear" }}
                      style={{ willChange: "opacity" }}
                    >
                      <Photos translations={t} lang={lang} />
                    </motion.div>
                  )}
                  {view === PageView.VIDEOS && (
                    <motion.div
                      key="videos"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15, ease: "linear" }}
                      style={{ willChange: "opacity" }}
                    >
                      <Videos translations={t} lang={lang} />
                    </motion.div>
                  )}
                  {view === PageView.AI_HUB && (
                    <motion.div
                      key="ai_hub"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.15, ease: "linear" }}
                      style={{ willChange: "transform, opacity" }}
                    >
                      <AIHub translations={t} lang={lang} />
                    </motion.div>
                  )}
                  {view === PageView.CONTACT && (
                    <motion.div
                      key="contact"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15, ease: "linear" }}
                      style={{ willChange: "transform, opacity" }}
                    >
                      <Contact translations={t} />
                    </motion.div>
                  )}
                  {view === PageView.PRIVACY && (
                    <motion.div
                      key="privacy"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15, ease: "linear" }}
                      style={{ willChange: "transform, opacity" }}
                    >
                      <PrivacyPolicy translations={t} />
                    </motion.div>
                  )}
                </AnimatePresence>
                </Suspense>
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
    </AppBackground>
  );
};

export default App;


import React from 'react';
import { motion } from 'motion/react';
import { 
  Home, 
  Trophy, 
  Image as ImageIcon, 
  PlayCircle, 
  Cpu, 
  Info, 
  Mail, 
  Globe,
  Sparkles,
  UserCheck
} from 'lucide-react';
import { PageView, Language } from '../types';
import { Logo } from '../constants';

interface SidebarProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
  lang: Language;
  onLangChange: () => void;
  translations: any;
  showChangelog: boolean;
  setShowChangelog: (show: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  currentView, 
  onNavigate, 
  lang, 
  onLangChange, 
  translations,
  showChangelog,
  setShowChangelog
}) => {
  const isHi = lang === 'hi';

  const navItems = [
    { id: PageView.HOME, label: translations.navHome, icon: Home, color: 'text-blue-400' },
    { id: PageView.QUIZ, label: translations.navQuiz, icon: Trophy, color: 'text-amber-400', special: true },
    { id: PageView.PHOTOS, label: translations.navPhotos, icon: ImageIcon, color: 'text-emerald-400' },
    { id: PageView.VIDEOS, label: translations.navVideos, icon: PlayCircle, color: 'text-rose-400' },
    { id: PageView.AI_HUB, label: translations.navAiHub, icon: Cpu, color: 'text-indigo-400', special: true },
    { id: PageView.INTERVIEW, label: translations.navInterview, icon: UserCheck, color: 'text-orange-400', special: true },
    { id: PageView.ABOUT, label: translations.navAbout, icon: Info, color: 'text-cyan-400' },
    { id: PageView.CONTACT, label: translations.navContact, icon: Mail, color: 'text-slate-400' },
  ];

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
  };

  return (
    <>
      {/* Sidebar Container */}
      <motion.aside 
        className="fixed top-0 left-0 h-screen bg-slate-950/90 backdrop-blur-3xl border-r border-white/10 z-[58] flex flex-col transition-all duration-500 ease-in-out w-[70px] lg:w-[280px] group/sidebar shadow-[10px_0_50px_rgba(0,0,0,0.5)]"
      >
        {/* Logo Section */}
        <div className="p-4 lg:p-8 mb-4 flex justify-center lg:justify-start">
          <div 
            onClick={() => handleNavClick(PageView.HOME)}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="scale-90 lg:scale-110 origin-center lg:origin-left">
              <Logo hideTextOnMobile={true} />
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow px-2 lg:px-4 space-y-2 overflow-y-auto no-scrollbar">
          {/* Updates Button */}
          <button 
            onClick={() => setShowChangelog(true)}
            className="w-full mb-6 flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-4 p-2 lg:px-4 lg:py-4 rounded-xl lg:rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 group/updates shadow-[0_0_15px_rgba(6,182,212,0.1)]"
          >
            <Sparkles size={18} className="animate-pulse group-hover/updates:scale-110 transition-transform shrink-0" />
            <span className="text-[7px] lg:text-[10px] font-black tracking-[0.1em] lg:tracking-[0.2em] uppercase text-center lg:text-left">
              {translations.updates}
            </span>
          </button>

          {navItems.map((item) => {
            const isActive = currentView === item.id;
            const Icon = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full group relative flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-4 p-2 lg:px-4 lg:py-4 rounded-xl lg:rounded-2xl transition-all duration-300 overflow-hidden ${
                  isActive 
                    ? 'bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {/* Active Indicator */}
                {isActive && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 lg:h-8 bg-cyan-500 rounded-r-full shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                  />
                )}

                {/* Background Glow for Special Items */}
                {item.special && (
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-r ${item.id === PageView.QUIZ ? 'from-amber-500 to-orange-500' : 'from-indigo-500 to-cyan-500'}`} />
                )}

                <div className={`shrink-0 transition-transform duration-300 group-hover:scale-110 ${isActive ? item.color : 'text-slate-500 group-hover:text-slate-300'}`} title={item.label}>
                  <Icon className="w-5 h-5 lg:w-[22px] lg:h-[22px]" strokeWidth={isActive ? 2.5 : 2} />
                </div>

                <span className={`text-[7px] lg:text-xs font-black uppercase tracking-[0.1em] lg:tracking-[0.2em] transition-all duration-300 text-center lg:text-left ${isActive ? 'translate-y-0.5 lg:translate-x-1' : 'group-hover:translate-y-0.5 lg:group-hover:translate-x-1'}`}>
                  {item.label}
                </span>

                {item.special && (
                  <Sparkles size={10} className={`ml-auto animate-pulse hidden lg:block ${item.id === PageView.QUIZ ? 'text-amber-400' : 'text-cyan-400'}`} />
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom Section: Info */}
        <div className="p-2 lg:p-6 mt-auto border-t border-white/5 space-y-6">
          {/* Copyright Info */}
          <div className="px-2 hidden lg:block">
            <p className="text-[8px] font-bold text-slate-600 uppercase tracking-[0.3em] leading-relaxed">
              © 2026 NA-RID<br />
              Manufacturing Hub
            </p>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;

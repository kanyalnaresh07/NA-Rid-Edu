
import React from 'react';
import { motion } from 'motion/react';
import { 
  Home, 
  Trophy, 
  Cpu, 
  UserCheck,
  Menu
} from 'lucide-react';
import { PageView } from '../types';

interface BottomNavProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
  onMenuClick: () => void;
  translations: any;
}

const BottomNav: React.FC<BottomNavProps> = ({ 
  currentView, 
  onNavigate, 
  onMenuClick,
  translations 
}) => {
  const navItems = [
    { id: PageView.HOME, label: translations.navHome, icon: Home, color: 'text-blue-400' },
    { id: PageView.QUIZ, label: translations.navQuiz, icon: Trophy, color: 'text-amber-400' },
    { id: PageView.AI_HUB, label: translations.navAiHub, icon: Cpu, color: 'text-indigo-400' },
    { id: PageView.INTERVIEW, label: translations.navInterview, icon: UserCheck, color: 'text-orange-400' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[60] bg-slate-950/90 backdrop-blur-xl border-t border-white/10 px-2 py-2 flex items-center justify-around lg:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      {navItems.map((item) => {
        const isActive = currentView === item.id;
        const Icon = item.icon;
        
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 ${
              isActive ? 'text-white' : 'text-slate-500'
            }`}
          >
            <div className={`relative ${isActive ? item.color : ''}`}>
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              {isActive && (
                <motion.div 
                  layoutId="bottomNavActive"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                />
              )}
            </div>
            <span className="text-[8px] font-black uppercase tracking-widest">
              {item.label}
            </span>
          </button>
        );
      })}
      
      <button
        onClick={onMenuClick}
        className="flex flex-col items-center gap-1 p-2 rounded-xl text-slate-500"
      >
        <Menu size={20} />
        <span className="text-[8px] font-black uppercase tracking-widest">
          {translations.navMore || 'More'}
        </span>
      </button>
    </nav>
  );
};

export default BottomNav;

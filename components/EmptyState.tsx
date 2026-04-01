import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon, Search, Inbox, AlertCircle } from 'lucide-react';

interface EmptyStateProps {
  icon?: LucideIcon | string;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  // Support for legacy props used in some components
  actionLabel?: string;
  onAction?: () => void;
  color?: 'cyan' | 'blue' | 'rose' | 'emerald' | 'amber' | 'indigo';
  className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ 
  icon = Inbox, 
  title, 
  description, 
  action,
  actionLabel,
  onAction,
  color = 'cyan',
  className = ""
}) => {
  const colorMap = {
    cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500/5', border: 'border-cyan-500/20', glow: 'shadow-[0_0_30px_rgba(6,182,212,0.3)]', btn: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500' },
    blue: { text: 'text-blue-400', bg: 'bg-blue-500/5', border: 'border-blue-500/20', glow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]', btn: 'bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500' },
    rose: { text: 'text-rose-400', bg: 'bg-rose-500/5', border: 'border-rose-500/20', glow: 'shadow-[0_0_30px_rgba(244,63,94,0.3)]', btn: 'bg-rose-500/10 text-rose-400 border-rose-500/30 hover:bg-rose-500' },
    emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/5', border: 'border-emerald-500/20', glow: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]', btn: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500' },
    amber: { text: 'text-amber-400', bg: 'bg-amber-500/5', border: 'border-amber-500/20', glow: 'shadow-[0_0_30px_rgba(245,158,11,0.3)]', btn: 'bg-amber-500/10 text-amber-400 border-amber-500/30 hover:bg-amber-500' },
    indigo: { text: 'text-indigo-400', bg: 'bg-indigo-500/5', border: 'border-indigo-500/20', glow: 'shadow-[0_0_30px_rgba(99,102,241,0.3)]', btn: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30 hover:bg-indigo-500' },
  };

  const theme = colorMap[color as keyof typeof colorMap] || colorMap.cyan;
  const finalAction = action || (actionLabel && onAction ? { label: actionLabel, onClick: onAction } : null);
  const IconComponent = typeof icon !== 'string' ? icon : null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex flex-col items-center justify-center py-12 md:py-16 px-4 text-center ${className}`}
    >
      <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-slate-900/50 border border-white/5 flex items-center justify-center text-slate-600 mb-6 md:mb-8 relative group overflow-hidden shadow-2xl">
        <div className={`absolute inset-0 ${theme.bg} opacity-0 group-hover:opacity-100 transition-opacity`} />
        <div className={`absolute inset-0 border ${theme.border} rounded-2xl md:rounded-3xl animate-pulse`} />
        
        {typeof icon === 'string' ? (
          <span className="text-3xl md:text-5xl relative z-10 group-hover:scale-110 transition-transform">{icon}</span>
        ) : (
          IconComponent && <IconComponent size={28} className={`relative z-10 group-hover:${theme.text} transition-colors md:w-10 md:h-10`} />
        )}
        
        {/* Scanline effect */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className={`w-full h-[1px] ${color === 'rose' ? 'bg-rose-500' : 'bg-cyan-500'} absolute top-0 animate-[scan_2s_linear_infinite]`}></div>
        </div>
      </div>
      
      <h3 className="text-lg md:text-2xl font-black text-white uppercase tracking-[0.2em] mb-2 md:mb-3">
        {title}
      </h3>
      
      {description && (
        <p className="text-slate-500 text-[10px] md:text-sm font-bold max-w-xs mx-auto mb-8 md:mb-10 leading-relaxed uppercase tracking-wider">
          {description}
        </p>
      )}
      
      {finalAction && (
        <button
          onClick={finalAction.onClick}
          className={`px-6 md:px-10 py-2.5 md:py-4 rounded-xl font-black uppercase text-[8px] md:text-[11px] tracking-[0.3em] text-white border transition-all active:scale-95 ${theme.btn} shadow-lg hover:${theme.glow}`}
        >
          {finalAction.label}
        </button>
      )}
    </motion.div>
  );
};

export default EmptyState;

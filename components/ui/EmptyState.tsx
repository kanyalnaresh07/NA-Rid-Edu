import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon?: string | LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  color?: 'blue' | 'emerald' | 'rose' | 'amber' | 'slate';
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon = '🔍',
  title,
  description,
  actionLabel,
  onAction,
  color = 'slate'
}) => {
  const colorMap = {
    blue: 'text-blue-400 border-blue-500/20 bg-blue-500/5',
    emerald: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
    rose: 'text-rose-400 border-rose-500/20 bg-rose-500/5',
    amber: 'text-amber-400 border-amber-500/20 bg-amber-500/5',
    slate: 'text-slate-400 border-slate-500/20 bg-slate-500/5',
  };

  const btnColorMap = {
    blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/20',
    emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/20',
    rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/20',
    amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/20',
    slate: 'bg-slate-600 hover:bg-slate-500 shadow-slate-500/20',
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`flex flex-col items-center justify-center p-8 md:p-16 rounded-[40px] md:rounded-[60px] border-2 border-dashed ${colorMap[color]} text-center gap-6 md:gap-8 backdrop-blur-md`}
    >
      <div className="relative">
        <div className="text-5xl md:text-7xl mb-2 animate-bounce duration-[3000ms] flex items-center justify-center">
          {typeof Icon === 'string' ? Icon : <Icon size={48} className="md:w-16 md:h-16" />}
        </div>
        <div className="absolute -inset-6 bg-current opacity-10 blur-3xl rounded-full"></div>
      </div>
      
      <div className="space-y-3 max-w-md">
        <h3 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter italic leading-none">
          {title}
        </h3>
        <p className="text-slate-400 text-xs md:text-base font-bold leading-relaxed italic opacity-80">
          {description}
        </p>
      </div>

      {actionLabel && onAction && (
        <motion.button 
          whileHover={{ scale: 1.05, x: 4 }}
          whileTap={{ scale: 0.95 }}
          onClick={onAction}
          className={`${btnColorMap[color]} text-white px-6 md:px-10 py-3 md:py-5 rounded-2xl md:rounded-3xl text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all shadow-2xl flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50`}
        >
          {actionLabel}
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" />
          </svg>
        </motion.button>
      )}
    </motion.div>
  );
};

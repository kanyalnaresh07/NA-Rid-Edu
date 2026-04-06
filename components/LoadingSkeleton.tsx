import React from 'react';
import { motion } from 'motion/react';

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 animate-pulse">
      <div className="h-8 md:h-12 bg-slate-800/50 rounded-lg w-1/3 mb-8"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 h-64 flex flex-col">
            <div className="h-12 w-12 bg-slate-800/50 rounded-xl mb-4"></div>
            <div className="h-6 bg-slate-800/50 rounded w-3/4 mb-3"></div>
            <div className="h-4 bg-slate-800/50 rounded w-full mb-2"></div>
            <div className="h-4 bg-slate-800/50 rounded w-5/6 mb-auto"></div>
            <div className="h-10 bg-slate-800/50 rounded-xl w-full mt-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;

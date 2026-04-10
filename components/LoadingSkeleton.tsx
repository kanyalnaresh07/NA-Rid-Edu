import React from 'react';

interface LoadingSkeletonProps {
  type?: 'grid' | 'detail' | 'text';
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ type = 'grid' }) => {
  if (type === 'detail') {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 animate-pulse">
        {/* Hero Section Skeleton */}
        <div className="h-64 md:h-80 bg-slate-800/50 rounded-3xl w-full mb-12"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Skeleton */}
          <div className="lg:col-span-2 space-y-6">
            <div className="h-10 bg-slate-800/50 rounded-lg w-3/4 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-slate-800/50 rounded w-full"></div>
              <div className="h-4 bg-slate-800/50 rounded w-full"></div>
              <div className="h-4 bg-slate-800/50 rounded w-5/6"></div>
              <div className="h-4 bg-slate-800/50 rounded w-full"></div>
              <div className="h-4 bg-slate-800/50 rounded w-4/5"></div>
            </div>
            <div className="h-48 bg-slate-800/50 rounded-2xl w-full mt-8"></div>
          </div>
          
          {/* Sidebar Skeleton */}
          <div className="space-y-6">
            <div className="h-32 bg-slate-800/50 rounded-2xl w-full"></div>
            <div className="h-64 bg-slate-800/50 rounded-2xl w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'text') {
    return (
      <div className="w-full animate-pulse space-y-6 bg-slate-900/40 p-8 rounded-3xl border border-white/5">
        <div className="h-8 bg-slate-800/50 rounded-lg w-1/2 mb-6"></div>
        <div className="space-y-4">
          <div className="h-4 bg-slate-800/50 rounded w-full"></div>
          <div className="h-4 bg-slate-800/50 rounded w-full"></div>
          <div className="h-4 bg-slate-800/50 rounded w-5/6"></div>
          <div className="h-4 bg-slate-800/50 rounded w-4/5"></div>
        </div>
        <div className="space-y-4 mt-8">
          <div className="h-4 bg-slate-800/50 rounded w-full"></div>
          <div className="h-4 bg-slate-800/50 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  // Default 'grid' skeleton
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

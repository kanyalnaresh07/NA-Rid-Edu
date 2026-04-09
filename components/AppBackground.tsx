import React from 'react';

interface AppBackgroundProps {
  children: React.ReactNode;
}

const AppBackground: React.FC<AppBackgroundProps> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-[#020617] overflow-x-hidden">
      {/* Background Image - User provided Google Drive Image */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.4), rgba(2, 6, 23, 0.7)), url('https://lh3.googleusercontent.com/d/1UGmsFQibiFSorRM7TDKvxDD07Ywnrv0g')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Premium Animated Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-purple-500/5 blur-[100px] rounded-full animate-pulse [animation-delay:4s]" />
      </div>
      
      {/* Subtle overlay to ensure text readability */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-slate-950/40 backdrop-blur-[4px]" />
      
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default AppBackground;

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
          backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.2), rgba(2, 6, 23, 0.4)), url('https://lh3.googleusercontent.com/d/1UGmsFQibiFSorRM7TDKvxDD07Ywnrv0g')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Subtle overlay to ensure text readability */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black/10" />
      
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default AppBackground;

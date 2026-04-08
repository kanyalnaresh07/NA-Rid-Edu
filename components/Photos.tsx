import React from 'react';
import { motion } from 'motion/react';
import { Cpu, CircuitBoard, ShieldCheck, Wrench, Settings } from 'lucide-react';

interface PhotosProps {
  translations: any;
  lang: string;
}

const DIVISIONS = [
  { 
    id: 'production', 
    title: 'Electronics Production Division', 
    titleHi: 'इलेक्ट्रॉनिक्स उत्पादन प्रभाग', 
    icon: Cpu, 
    color: 'teal' 
  },
  { 
    id: 'smt', 
    title: 'Electronics SMT Division', 
    titleHi: 'इलेक्ट्रॉनिक्स SMT प्रभाग', 
    icon: CircuitBoard, 
    color: 'orange' 
  },
  { 
    id: 'quality', 
    title: 'Quality Division', 
    titleHi: 'गुणवत्ता प्रभाग', 
    icon: ShieldCheck, 
    color: 'red' 
  },
  { 
    id: 'maintenance', 
    title: 'Maintenance Division', 
    titleHi: 'रखरखाव प्रभाग', 
    icon: Wrench, 
    color: 'purple' 
  },
  { 
    id: 'equipment', 
    title: 'Equipment Division', 
    titleHi: 'उपकरण प्रभाग', 
    icon: Settings, 
    color: 'blue' 
  },
];

const colorMap = {
  teal: { light: 'bg-[#14b8a6]', dark: 'bg-[#0f766e]', text: 'text-teal-100', arrow: 'border-l-[#115e59]' },
  orange: { light: 'bg-[#f97316]', dark: 'bg-[#c2410c]', text: 'text-orange-100', arrow: 'border-l-[#9a3412]' },
  red: { light: 'bg-[#ef4444]', dark: 'bg-[#b91c1c]', text: 'text-red-100', arrow: 'border-l-[#991b1b]' },
  purple: { light: 'bg-[#a855f7]', dark: 'bg-[#7e22ce]', text: 'text-purple-100', arrow: 'border-l-[#6b21a8]' },
  blue: { light: 'bg-[#3b82f6]', dark: 'bg-[#1d4ed8]', text: 'text-blue-100', arrow: 'border-l-[#1e40af]' },
};

const Photos: React.FC<PhotosProps> = ({ translations, lang }) => {
  return (
    <div className="w-full py-12 overflow-hidden bg-transparent">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6">
        {/* 
          MOBILE: flex-col (Top to Bottom stacking)
          DESKTOP: flex-row (Fits all 5 cards without zooming out)
        */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-y-12 lg:gap-x-4 xl:gap-x-8 py-12">
          {DIVISIONS.map((division, idx) => {
            const Icon = division.icon;
            const colors = colorMap[division.color as keyof typeof colorMap];
            
            return (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                // Responsive sizing to fit 5 cards on desktop without zooming out
                className="relative shrink-0 group cursor-pointer w-[280px] h-[280px] lg:w-[190px] lg:h-[190px] xl:w-[230px] xl:h-[230px] 2xl:w-[280px] 2xl:h-[280px]"
              >
                {/* Bottom floor shadow */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/60 blur-xl rounded-[100%] transition-all duration-300 group-hover:w-24 group-hover:bg-black/80"></div>
                
                {/* Diamond Container Wrapper for Drop Shadow */}
                <div className="absolute inset-0 filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-translate-y-3">
                  
                  {/* Actual Diamond Shape */}
                  <div 
                    className="w-full h-full relative overflow-hidden"
                    style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                  >
                    {/* Spinning Background Layer */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className={`absolute -inset-1/2 ${colors.light} z-0`}
                    >
                      {/* Middle Dark Band that spins */}
                      <div className={`absolute top-[38%] bottom-[38%] left-0 right-0 ${colors.dark} shadow-[inset_0_10px_20px_rgba(0,0,0,0.4),inset_0_-10px_20px_rgba(0,0,0,0.4)]`}></div>
                    </motion.div>

                    {/* Global Gradient Overlay for 3D effect (Fixed) */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/40 pointer-events-none z-0"></div>

                    {/* Fixed Content Layer */}
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-between pt-[10%] pb-[8%] pointer-events-none">
                      
                      {/* Top Icon Area */}
                      <div className="flex justify-center text-white/90 transition-transform duration-500 group-hover:scale-110">
                        <Icon className="w-10 h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 drop-shadow-md" strokeWidth={1.5} />
                      </div>

                      {/* Middle Text Area */}
                      <div className="w-[65%] mx-auto flex flex-col items-center justify-center pointer-events-auto">
                        <h3 className="text-white font-bold text-[12px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px] uppercase tracking-wider leading-snug mb-1 2xl:mb-2 text-center w-full break-words drop-shadow-lg">
                          {lang === 'hi' ? division.titleHi : division.title}
                        </h3>
                        <p className={`text-[10px] lg:text-[8px] xl:text-[9px] 2xl:text-[11px] ${colors.text} italic text-center opacity-90 group-hover:opacity-100 transition-opacity font-medium tracking-wide`}>
                          {lang === 'hi' ? 'तस्वीरें देखें' : 'View Photos'}
                        </p>
                      </div>

                      {/* Bottom Number Area */}
                      <div className="flex justify-center text-white/90 font-light text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl tracking-widest">
                        0{idx + 1}
                      </div>
                    </div>
                    
                    {/* Right Arrow Triangle (Fixed) */}
                    <div className={`absolute right-[8%] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] ${colors.arrow} z-10`}></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Photos;

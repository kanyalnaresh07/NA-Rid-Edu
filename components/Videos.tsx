import React from 'react';
import { motion } from 'motion/react';
import { Play, Video, Clock, ExternalLink } from 'lucide-react';
import { Language } from '../types';

interface VideosProps {
  translations: any;
  lang: Language;
}

const Videos: React.FC<VideosProps> = ({ translations, lang }) => {
  const isHi = lang === 'hi';

  const videoList = [
    {
      id: 'v1',
      title: isHi ? '5S कार्यप्रणाली का परिचय' : 'Introduction to 5S Methodology',
      description: isHi ? 'कार्यस्थल संगठन और दक्षता के लिए 5S के बुनियादी सिद्धांतों को समझें।' : 'Understand the basic principles of 5S for workplace organization and efficiency.',
      duration: '12:45',
      thumbnail: 'https://picsum.photos/seed/5s/800/450',
      category: 'Production'
    },
    {
      id: 'v2',
      title: isHi ? 'Kaizen: निरंतर सुधार' : 'Kaizen: Continuous Improvement',
      description: isHi ? 'कैसे छोटे बदलाव बड़े औद्योगिक सुधार ला सकते हैं।' : 'How small changes can lead to massive industrial improvements.',
      duration: '15:20',
      thumbnail: 'https://picsum.photos/seed/kaizen/800/450',
      category: 'Process'
    },
    {
      id: 'v3',
      title: isHi ? 'गुणवत्ता नियंत्रण (QC) मूल बातें' : 'Quality Control (QC) Basics',
      description: isHi ? 'विनिर्माण में उच्च गुणवत्ता मानकों को बनाए रखने की तकनीकें।' : 'Techniques for maintaining high quality standards in manufacturing.',
      duration: '10:30',
      thumbnail: 'https://picsum.photos/seed/quality/800/450',
      category: 'Quality'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
          {isHi ? 'वीडियो लाइब्रेरी' : 'Video Library'}
        </h2>
        <div className="w-20 h-1 bg-cyan-500 mb-6"></div>
        <p className="text-slate-400 text-sm md:text-lg max-w-2xl font-medium leading-relaxed">
          {isHi 
            ? 'औद्योगिक प्रक्रियाओं और विनिर्माण अवधारणाओं को गहराई से समझने के लिए हमारे शैक्षिक वीडियो देखें।' 
            : 'Watch our educational videos to gain a deeper understanding of industrial processes and manufacturing concepts.'}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videoList.map((video, idx) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all shadow-2xl"
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                  <Play className="text-white fill-current ml-1" size={32} />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-black text-white flex items-center gap-1.5 border border-white/10">
                <Clock size={12} className="text-cyan-400" />
                {video.duration}
              </div>
              <div className="absolute top-4 left-4 bg-cyan-500 px-3 py-1 rounded-full text-[8px] font-black text-white uppercase tracking-widest shadow-lg">
                {video.category}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">
                {video.title}
              </h3>
              <p className="text-slate-500 text-xs font-medium leading-relaxed mb-6 line-clamp-2">
                {video.description}
              </p>
              <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-cyan-500 hover:border-cyan-500 transition-all active:scale-95">
                {isHi ? 'अभी देखें' : 'Watch Now'}
                <ExternalLink size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-20 p-12 rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full"></div>
        
        <div className="relative z-10">
          <div className="w-20 h-20 rounded-3xl bg-slate-800 flex items-center justify-center text-cyan-400 mx-auto mb-8 border border-white/10 shadow-2xl">
            <Video size={40} />
          </div>
          <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">
            {isHi ? 'अधिक वीडियो जल्द आ रहे हैं' : 'More Videos Coming Soon'}
          </h3>
          <p className="text-slate-500 text-sm md:text-lg max-w-xl mx-auto font-medium leading-relaxed uppercase tracking-widest">
            {isHi 
              ? 'हम आपके लिए और अधिक औद्योगिक प्रशिक्षण सामग्री तैयार कर रहे हैं।' 
              : 'We are preparing more industrial training content for you.'}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Videos;

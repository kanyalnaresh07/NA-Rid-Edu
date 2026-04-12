import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Video, Clock, ExternalLink, X } from 'lucide-react';
import { Language } from '../types';

interface VideosProps {
  translations: any;
  lang: Language;
}

const Videos: React.FC<VideosProps> = ({ translations, lang }) => {
  const isHi = lang === 'hi';
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videoList = [
    {
      id: 'v4',
      title: 'Excel full hindi course',
      description: isHi ? 'एक्सेल का पूरा कोर्स हिंदी में सीखें।' : 'Learn the complete Excel course in Hindi.',
      duration: 'Course',
      thumbnail: 'https://img.youtube.com/vi/OX-iyb-21tk/hqdefault.jpg',
      category: 'Software',
      videoUrl: 'https://www.youtube.com/embed/OX-iyb-21tk'
    },
    {
      id: 'v5',
      title: '5S, VMS, KAIZEN, POKA YOKE, ANDON, KPI, SMED',
      description: isHi ? 'औद्योगिक उत्कृष्टता के लिए प्रमुख विनिर्माण अवधारणाओं को सीखें।' : 'Learn key manufacturing concepts for industrial excellence.',
      duration: 'Training',
      thumbnail: 'https://img.youtube.com/vi/0Fvyx2bqaoc/hqdefault.jpg',
      category: 'Production',
      videoUrl: 'https://www.youtube.com/embed/0Fvyx2bqaoc'
    },
    {
      id: 'v6',
      title: 'Short form industrial tools',
      description: isHi ? 'औद्योगिक उपकरणों के संक्षिप्त रूप।' : 'Short forms of industrial tools.',
      duration: 'Training',
      thumbnail: 'https://img.youtube.com/vi/jZvFDa86hgA/0.jpg',
      category: 'Tools',
      videoUrl: 'https://www.youtube.com/embed/jZvFDa86hgA'
    },
    {
      id: 'v7',
      title: '3G, 3M, 3K',
      description: isHi ? '3G, 3M, 3K अवधारणाओं को समझें।' : 'Understand 3G, 3M, 3K concepts.',
      duration: 'Training',
      thumbnail: 'https://img.youtube.com/vi/OfUsa_cpc_Q/0.jpg',
      category: 'Concepts',
      videoUrl: 'https://www.youtube.com/embed/OfUsa_cpc_Q'
    },
    {
      id: 'v8',
      title: 'DPR, OEE, HPR, DRR',
      description: isHi ? 'DPR, OEE, HPR, DRR मैट्रिक्स के बारे में जानें।' : 'Learn about DPR, OEE, HPR, DRR metrics.',
      duration: 'Training',
      thumbnail: 'https://img.youtube.com/vi/cEnQ60NNt6M/0.jpg',
      category: 'Metrics',
      videoUrl: 'https://www.youtube.com/embed/cEnQ60NNt6M'
    },
    {
      id: 'v9',
      title: 'PPM, DPU, DPM, DPMO',
      description: isHi ? 'गुणवत्ता मैट्रिक्स: PPM, DPU, DPM, DPMO' : 'Quality Metrics: PPM, DPU, DPM, DPMO',
      duration: 'Training',
      thumbnail: 'https://img.youtube.com/vi/S_jn2tPb_Oc/0.jpg',
      category: 'Quality',
      videoUrl: 'https://www.youtube.com/embed/S_jn2tPb_Oc'
    },
    {
      id: 'v10',
      title: '7QC TOOL',
      description: isHi ? '7 गुणवत्ता नियंत्रण उपकरण सीखें।' : 'Learn the 7 Quality Control Tools.',
      duration: 'Training',
      thumbnail: 'https://img.youtube.com/vi/ElLwRsLAhv8/0.jpg',
      category: 'Quality',
      videoUrl: 'https://www.youtube.com/embed/ElLwRsLAhv8'
    },
    {
      id: 'v11',
      title: 'PPAP',
      description: isHi ? 'PPAP (Production Part Approval Process) के बारे में जानें।' : 'Learn about PPAP (Production Part Approval Process).',
      duration: 'Training',
      thumbnail: 'https://img.youtube.com/vi/_cs3yrijQt8/hqdefault.jpg',
      category: 'Quality',
      videoUrl: 'https://www.youtube.com/embed/_cs3yrijQt8'
    },
    {
      id: 'v12',
      title: 'PPAP Document',
      description: isHi ? 'PPAP दस्तावेज़ों को विस्तार से समझें।' : 'Understand PPAP documents in detail.',
      duration: 'Training',
      thumbnail: 'https://img.youtube.com/vi/kklupOI3KNM/hqdefault.jpg',
      category: 'Quality',
      videoUrl: 'https://www.youtube.com/embed/kklupOI3KNM'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
          {isHi ? 'वीडियो लाइब्रेरी' : 'Video Library'}
        </h1>
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
            className="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all shadow-2xl cursor-pointer"
            onClick={() => video.videoUrl && setSelectedVideo(video.videoUrl)}
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
                <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)]" title={isHi ? 'वीडियो चलाएं' : 'Play Video'}>
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
              <h2 className="text-lg font-black text-white uppercase tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">
                {video.title}
              </h2>
              <p className="text-slate-500 text-xs font-medium leading-relaxed mb-6 line-clamp-2">
                {video.description}
              </p>
              <button 
                className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-cyan-500 hover:border-cyan-500 transition-all active:scale-95"
                onClick={(e) => {
                  e.stopPropagation();
                  if (video.videoUrl) {
                    setSelectedVideo(video.videoUrl);
                  } else {
                    alert(isHi ? 'यह वीडियो अभी उपलब्ध नहीं है।' : 'This video is not available yet.');
                  }
                }}
              >
                {isHi ? 'अभी देखें' : 'Watch Now'}
                <Play size={14} className="fill-current" />
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
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">
            {isHi ? 'अधिक वीडियो जल्द आ रहे हैं' : 'More Videos Coming Soon'}
          </h2>
          <p className="text-slate-500 text-sm md:text-lg max-w-xl mx-auto font-medium leading-relaxed uppercase tracking-widest">
            {isHi 
              ? 'हम आपके लिए और अधिक औद्योगिक प्रशिक्षण सामग्री तैयार कर रहे हैं।' 
              : 'We are preparing more industrial training content for you.'}
          </p>
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-500 text-white rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <iframe
                src={`${selectedVideo}?autoplay=1&vq=hd1080`}
                title="YouTube video player"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Videos;

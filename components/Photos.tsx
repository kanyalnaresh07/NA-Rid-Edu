import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, Sparkles, Loader2, Download, RefreshCw, Eye } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface PhotosProps {
  translations: any;
  lang: string;
}

interface AIConcept {
  id: string;
  title: string;
  titleHi: string;
  prompt: string;
  category: string;
  description: string;
  descriptionHi: string;
}

const AI_CONCEPTS: AIConcept[] = [
  {
    id: 'production-dashboard',
    title: 'Production Dashboard',
    titleHi: 'प्रोडक्शन डैशबोर्ड',
    category: 'SYSTEMS',
    description: 'Futuristic OEE & Productivity Metrics',
    descriptionHi: 'भविष्य का OEE और उत्पादकता मेट्रिक्स',
    prompt: 'Futuristic industrial production dashboard UI, dark blue neon theme, manufacturing environment background, glowing panels, showing sections like OEE, line balancing, manpower, material handling, productivity metrics, modern glassmorphism UI, high-tech factory control room, cinematic lighting, ultra detailed'
  },
  {
    id: 'iqc-inspection',
    title: 'IQC Inspection',
    titleHi: 'IQC निरीक्षण',
    category: 'QUALITY',
    description: 'Incoming Quality Control & AQL Sampling',
    descriptionHi: 'इनकमिंग क्वालिटी कंट्रोल और AQL सैंपलिंग',
    prompt: 'Industrial quality inspection scene, incoming quality control (IQC), engineer checking raw materials with checklist, factory environment, blue neon UI overlay, modern dashboard style card, showing AQL sampling, vendor inspection, GRN clearance, futuristic design, dark theme, high detail'
  },
  {
    id: 'ipqc-monitoring',
    title: 'IPQC Monitoring',
    titleHi: 'IPQC मॉनिटरिंग',
    category: 'PROCESS',
    description: 'Real-time SPC & Process Monitoring',
    descriptionHi: 'रियल-टाइम SPC और प्रोसेस मॉनिटरिंग',
    prompt: 'In-process quality control in manufacturing, engineer monitoring production line, SPC charts on screen, real-time process monitoring, factory assembly line, glowing UI panels, dark futuristic theme, high-tech dashboard look, cinematic lighting, ultra detailed'
  },
  {
    id: 'fqc-oqc-testing',
    title: 'FQC & OQC Testing',
    titleHi: 'FQC और OQC टेस्टिंग',
    category: 'FINAL',
    description: 'Functional Testing & Dispatch Area',
    descriptionHi: 'फंक्शनल टेस्टिंग और डिस्पैच एरिया',
    prompt: 'Final quality inspection and outgoing quality control, engineer performing functional testing on products, packaging inspection, warehouse dispatch area, digital dashboard overlay, neon blue futuristic UI, high detail industrial environment'
  },
  {
    id: 'training-interface',
    title: 'Training Interface',
    titleHi: 'ट्रेनिंग इंटरफेस',
    category: 'EDUCATION',
    description: 'Industrial Quiz & Learning Dashboard',
    descriptionHi: 'इंडस्ट्रियल क्विज़ और लर्निंग डैशबोर्ड',
    prompt: 'Industrial training and education interface, quiz system on manufacturing topics, modern UI with glowing buttons, dark blue theme, icons for safety, process engineering, quality control, futuristic learning dashboard, clean and minimal design'
  },
  {
    id: 'factory-environment',
    title: 'Factory Environment',
    titleHi: 'फैक्ट्री वातावरण',
    category: 'PRODUCTION',
    description: 'Dark Futuristic Manufacturing Plant',
    descriptionHi: 'डार्क फ्यूचरिस्टिक मैन्युफैक्चरिंग प्लांट',
    prompt: 'Dark futuristic industrial background, manufacturing plant with machines and assembly lines, blue neon lighting, blurred background for UI overlay, high-tech environment, cinematic and professional look'
  }
];

const Photos: React.FC<PhotosProps> = ({ translations, lang }) => {
  const [generatedImages, setGeneratedImages] = useState<Record<string, string>>({});
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const generateImage = async (concept: AIConcept) => {
    setLoadingStates(prev => ({ ...prev, [concept.id]: true }));
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: concept.prompt }],
        },
      });

      let imageUrl = '';
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          imageUrl = `data:image/png;base64,${part.inlineData.data}`;
          break;
        }
      }

      if (imageUrl) {
        setGeneratedImages(prev => ({ ...prev, [concept.id]: imageUrl }));
      } else {
        throw new Error('No image generated');
      }
    } catch (err: any) {
      console.error('Image generation error:', err);
      setError(lang === 'hi' ? 'इमेज जनरेट करने में समस्या आई। कृपया पुनः प्रयास करें।' : 'Failed to generate image. Please try again.');
    } finally {
      setLoadingStates(prev => ({ ...prev, [concept.id]: false }));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black tracking-[0.2em] uppercase mb-6">
          <Sparkles size={12} />
          AI Powered Visuals
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-[0.2em] mb-6 italic">
          <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
            {translations.navPhotos}
          </span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base uppercase tracking-widest font-bold max-w-2xl mx-auto leading-relaxed">
          {lang === 'hi' 
            ? 'AI द्वारा जनरेट की गई औद्योगिक दुनिया की भविष्यवादी झलक' 
            : 'Futuristic glimpses of the industrial world generated by AI'}
        </p>
      </motion.div>

      {error && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-center text-sm font-bold"
        >
          {error}
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {AI_CONCEPTS.map((concept, idx) => (
          <motion.div
            key={concept.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative flex flex-col bg-slate-900/50 backdrop-blur-xl rounded-[2rem] border border-white/5 overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
              <AnimatePresence>
                {generatedImages[concept.id] ? (
                  <motion.img
                    key="generated"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    src={generatedImages[concept.id]}
                    alt={concept.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full flex flex-col items-center justify-center p-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center text-slate-700 mb-4">
                      <ImageIcon size={32} />
                    </div>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
                      {lang === 'hi' ? 'इमेज जनरेट करने के लिए क्लिक करें' : 'Click to generate visual'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Loading Overlay */}
              {loadingStates[concept.id] && (
                <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center z-20">
                  <Loader2 className="w-10 h-10 text-cyan-500 animate-spin mb-4" />
                  <p className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] animate-pulse">
                    {lang === 'hi' ? 'AI जनरेट कर रहा है...' : 'AI Generating...'}
                  </p>
                </div>
              )}

              {/* Hover Actions */}
              {generatedImages[concept.id] && !loadingStates[concept.id] && (
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                  <button 
                    onClick={() => setSelectedImage(generatedImages[concept.id])}
                    className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-cyan-500 hover:border-cyan-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  >
                    <Eye size={20} />
                  </button>
                  <a 
                    href={generatedImages[concept.id]} 
                    download={`${concept.id}.png`}
                    className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-cyan-500 hover:border-cyan-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  >
                    <Download size={20} />
                  </a>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-cyan-500 text-[9px] font-black uppercase tracking-[0.3em] mb-2 block">
                    {concept.category}
                  </span>
                  <h3 className="text-white text-xl font-black uppercase tracking-tight">
                    {lang === 'hi' ? concept.titleHi : concept.title}
                  </h3>
                </div>
                {!generatedImages[concept.id] && !loadingStates[concept.id] && (
                  <button 
                    onClick={() => generateImage(concept)}
                    className="p-3 rounded-xl bg-cyan-500 text-white shadow-lg shadow-cyan-500/20 hover:scale-110 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
                  >
                    <Sparkles size={16} />
                  </button>
                )}
                {generatedImages[concept.id] && !loadingStates[concept.id] && (
                  <button 
                    onClick={() => generateImage(concept)}
                    className="p-3 rounded-xl bg-white/5 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
                    title="Regenerate"
                  >
                    <RefreshCw size={16} />
                  </button>
                )}
              </div>
              
              <p className="text-slate-400 text-xs font-bold leading-relaxed mb-6">
                {lang === 'hi' ? concept.descriptionHi : concept.description}
              </p>

              <div className="mt-auto">
                <button
                  onClick={() => generateImage(concept)}
                  disabled={loadingStates[concept.id]}
                  className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 ${
                    generatedImages[concept.id]
                      ? 'bg-white/5 text-slate-400 hover:bg-white/10'
                      : 'bg-cyan-500 text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1'
                  }`}
                >
                  {loadingStates[concept.id] ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      {lang === 'hi' ? 'जनरेट हो रहा है' : 'Generating'}
                    </>
                  ) : (
                    <>
                      <Sparkles size={14} />
                      {generatedImages[concept.id] 
                        ? (lang === 'hi' ? 'पुनः जनरेट करें' : 'Regenerate') 
                        : (lang === 'hi' ? 'AI से जनरेट करें' : 'Generate with AI')}
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-square md:aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Full preview" 
                className="w-full h-full object-contain bg-slate-900"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-red-500 transition-colors focus:outline-none focus-visible:bg-red-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Photos;

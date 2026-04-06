import React from 'react';
import { Language } from '../types';
import { motion } from 'motion/react';
import { 
  Linkedin, 
  Mail, 
  MessageCircle, 
  Factory, 
  Settings, 
  Cpu, 
  Code, 
  Target, 
  Eye, 
  ShieldCheck, 
  Zap, 
  Compass 
} from 'lucide-react';

interface AboutProps {
  translations: any;
  lang: Language;
}

const About: React.FC<AboutProps> = ({ translations, lang }) => {
  const content = translations.about;

  const iconMap: Record<string, React.ReactNode> = {
    factory: <Factory className="w-8 h-8 text-cyan-400" />,
    settings: <Settings className="w-8 h-8 text-cyan-400" />,
    cpu: <Cpu className="w-8 h-8 text-cyan-400" />,
    code: <Code className="w-8 h-8 text-cyan-400" />,
  };

  return (
    <div className="flex flex-col gap-16 pb-24 max-w-6xl mx-auto px-6 py-12">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center text-center gap-8"
      >
        <div className="relative group">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-cyan-500 blur-[100px] opacity-20 rounded-full animate-pulse"></div>
          
          {/* Animated SVG Ring */}
          <div className="absolute inset-[-15px] md:inset-[-25px] z-0">
            <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-cyan-500/20"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="60 240"
                strokeLinecap="round"
                className="text-cyan-500"
                animate={{ strokeDashoffset: [0, -300] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.8))' }}
              />
            </svg>
          </div>

          {/* Profile Image Container */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-[8px] border-slate-900 p-1 bg-slate-950 shadow-2xl overflow-hidden z-10 flex items-center justify-center">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-cyan-500/30 relative">
              <img 
                src="https://lh3.googleusercontent.com/d/18rsXth-WYnAvYsJGaXACQhyAub_7m1s7" 
                alt="Naresh Singh Kanyal"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              {/* Subtle inner overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/40"></div>
            </div>
          </div>
          
          {/* Small Status Dot from image */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-6 right-6 w-5 h-5 bg-cyan-500 rounded-full border-[3px] border-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.8)] z-20"
          ></motion.div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
            Naresh Singh <span className="text-cyan-400">Kanyal</span>
          </h1>
          <p className="text-slate-400 font-bold tracking-[0.3em] uppercase text-xs md:text-sm">{lang === 'hi' ? 'इंडस्ट्रियल सिस्टम्स में उत्कृष्टता' : 'Excellence in Industrial Systems'}</p>
          
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {['Engineer', 'Tech Innovator', 'Part-time Coder'].map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-300 tracking-wider uppercase">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-4 pt-6">
            <a 
              href="https://www.linkedin.com/in/naresh-singh-kanyal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:kanyal.narsh@outlook.com" 
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/918979031442" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Stats & Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 border border-white/10 p-10 rounded-[32px] flex flex-col items-center justify-center text-center shadow-xl"
        >
          <div className="text-7xl font-black text-cyan-400 mb-2">{content.stats}</div>
          <div className="text-white text-xs font-black uppercase tracking-widest leading-tight">
            {lang === 'hi' ? 'इंडस्ट्रियल सिस्टम्स में' : 'Years of Experience in'}
            <br />
            {lang === 'hi' ? 'अनुभव के वर्ष' : 'Industrial Systems'}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-slate-900/50 border border-white/10 p-10 rounded-[32px] shadow-xl"
        >
          <h3 className="text-cyan-400 text-xs font-black tracking-[0.4em] uppercase mb-6">{content.mission}</h3>
          <p className="text-slate-200 text-xl font-bold leading-relaxed mb-8 italic">
            "{content.missionText}"
          </p>
          <div className="flex flex-wrap gap-2">
            {content.missionTags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-[9px] font-black text-cyan-400 tracking-wider uppercase">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Expertise Section */}
      <div className="space-y-10">
        <h2 className="text-white text-2xl md:text-3xl font-black tracking-tight uppercase text-center">
          {content.expertiseTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.expertise.map((item: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900/40 border border-white/5 p-8 rounded-3xl flex flex-col items-center text-center group hover:bg-slate-800/60 transition-all"
            >
              <div className="mb-6 p-4 bg-cyan-500/10 rounded-2xl group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-white text-base font-black mb-3 uppercase tracking-tight">{item.title}</h3>
              <p className="text-slate-400 text-xs font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Goal & Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 border border-white/10 p-10 rounded-[32px] shadow-xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
              <Target className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-white text-xl font-black uppercase tracking-tight">{lang === 'hi' ? 'हमारा लक्ष्य' : 'OUR MISSION'}</h3>
          </div>
          <p className="text-slate-300 text-sm md:text-base font-bold leading-relaxed">
            {lang === 'hi' ? content.missionText : "TO EMPOWER EVERY OPERATOR WITH CORRECT KNOWLEDGE AND DIGITAL GUIDES, ENABLING THEM TO MASTER COMPLEX INDUSTRIAL SYSTEMS THROUGH SELF-IMPROVEMENT."}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 border border-white/10 p-10 rounded-[32px] shadow-xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
              <Eye className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-white text-xl font-black uppercase tracking-tight">{lang === 'hi' ? 'हमारा दृष्टिकोण' : 'OUR VISION'}</h3>
          </div>
          <p className="text-slate-300 text-sm md:text-base font-bold leading-relaxed">
            {lang === 'hi' ? content.visionText : "A FUTURE WHERE EVERY WORKER IS AN EXPERT, BRIDGING THE GAP BETWEEN BASIC FLOOR OPERATIONS AND COMPLEX TECHNICAL EXCELLENCE."}
          </p>
        </motion.div>
      </div>

      {/* Core Values Section */}
      <div className="space-y-10">
        <h2 className="text-white text-2xl md:text-3xl font-black tracking-tight uppercase text-center">
          {content.values}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: content.v1Title, desc: content.v1Desc, icon: <ShieldCheck className="w-10 h-10 text-cyan-400" /> },
            { title: content.v2Title, desc: content.v2Desc, icon: <Zap className="w-10 h-10 text-cyan-400" /> },
            { title: content.v3Title, desc: content.v3Desc, icon: <Compass className="w-10 h-10 text-cyan-400" /> }
          ].map((value, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8 bg-slate-900/40 border border-white/5 rounded-3xl group hover:bg-slate-800/60 transition-all"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-2xl group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                {value.icon}
              </div>
              <h4 className="text-white text-lg font-black uppercase tracking-tight mb-2">{value.title}</h4>
              <p className="text-slate-400 text-xs font-medium leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

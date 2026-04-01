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
    factory: <Factory className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />,
    settings: <Settings className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />,
    cpu: <Cpu className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />,
    code: <Code className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />,
  };

  return (
    <div className="flex flex-col gap-16 pb-24 max-w-7xl mx-auto px-4 md:px-8 py-12 relative overflow-hidden">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center gap-8"
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-cyan-500 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-cyan-500/30 p-1.5 bg-slate-950 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)] group-hover:border-cyan-400 transition-all duration-500">
            <div className="w-full h-full rounded-full overflow-hidden relative bg-gradient-to-b from-slate-900 to-black flex items-center justify-center">
              {/* User Photo */}
              <img 
                src="https://lh3.googleusercontent.com/d/18rsXth-WYnAvYsJGaXACQhyAub_7m1s7" 
                alt="Naresh Singh Kanyal"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle overlays for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              <div className="absolute inset-0 shadow-[inner_0_0_40px_rgba(0,0,0,0.5)]"></div>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-slate-950 shadow-[0_0_15px_rgba(16,185,129,1)] animate-pulse"></div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tight drop-shadow-2xl">
            Naresh Singh Kanyal
          </h1>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {['SYSTEM ARCHITECT', 'ENGINEER', 'TECH INNOVATOR', 'PART-TIME CODER'].map((tag) => (
              <span key={tag} className="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-[10px] md:text-xs font-black text-cyan-400 tracking-widest uppercase shadow-lg">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <a 
              href="https://www.linkedin.com/in/naresh-singh-kanyal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-[#0077b5]/10 border border-[#0077b5]/30 rounded-xl text-white text-[10px] font-black tracking-widest hover:bg-[#0077b5]/20 transition-all shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077b5]"
            >
              <Linkedin className="w-4 h-4 text-[#0077b5]" /> LINKEDIN
            </a>
            <a 
              href="mailto:kanyal.narsh@outlook.com" 
              className="flex items-center gap-2 px-6 py-2.5 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-white text-[10px] font-black tracking-widest hover:bg-cyan-500/20 transition-all shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              <Mail className="w-4 h-4 text-cyan-400" /> EMAIL
            </a>
            <a 
              href="https://wa.me/918979031442" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl text-white text-[10px] font-black tracking-widest hover:bg-[#25D366]/20 transition-all shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> WHATSAPP
            </a>
          </div>
        </div>
      </motion.div>

      {/* Stats & Mission Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Stats Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4 bg-slate-950/60 backdrop-blur-xl border border-white/5 rounded-[3rem] p-12 flex flex-col items-center justify-center text-center relative group overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 p-8 text-5xl font-black text-white/[0.03] select-none pointer-events-none uppercase italic">STATS</div>
          <div className="text-8xl md:text-9xl font-black text-cyan-500 mb-2 drop-shadow-[0_0_25px_rgba(6,182,212,0.6)]">
            {content.stats}
          </div>
          <div className="text-white text-xl md:text-2xl font-black uppercase tracking-widest leading-none mb-2">
            YEARS OF EXPERIENCE
          </div>
          <div className="text-cyan-500/60 text-[10px] font-black uppercase tracking-[0.4em]">
            IN INDUSTRIAL SYSTEMS
          </div>
        </motion.div>

        {/* Mission Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-8 bg-slate-950/60 backdrop-blur-xl border border-white/5 rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-0.5 w-12 bg-cyan-500"></div>
            <span className="text-cyan-400 text-xs font-black tracking-[0.5em] uppercase">{content.mission}</span>
          </div>
          
          <p className="text-slate-200 text-xl md:text-3xl font-bold leading-relaxed mb-10 tracking-tight">
            {content.missionText}
          </p>

          <div className="flex flex-wrap gap-3">
            {content.missionTags.map((tag: string) => (
              <span key={tag} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-slate-400 tracking-widest uppercase hover:border-cyan-500/40 hover:text-cyan-400 transition-all cursor-default shadow-lg">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Technical Expertise Domains */}
      <div className="space-y-12">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-white text-xl md:text-4xl font-black tracking-[0.2em] uppercase">
            {content.expertiseTitle}
          </h2>
          <div className="h-1.5 w-32 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.expertise.map((item: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-950/60 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 flex flex-col items-center text-center group hover:border-cyan-500/40 transition-all shadow-2xl"
            >
              <div className="mb-8 p-5 bg-slate-900 rounded-2xl border border-white/10 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-500 shadow-inner">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-white text-base font-black mb-3 tracking-wider uppercase">{item.title}</h3>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] leading-tight">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Goal & Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Mission Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-950/60 backdrop-blur-xl border border-white/5 rounded-[3rem] p-12 relative group overflow-hidden shadow-2xl"
        >
          <div className="absolute -right-4 -top-4 text-9xl font-black text-white/[0.02] select-none pointer-events-none uppercase italic">GOAL</div>
          <div className="flex items-center gap-5 mb-10">
            <div className="w-14 h-14 bg-cyan-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30 shadow-lg">
              <Target className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-white text-2xl font-black uppercase tracking-widest">{lang === 'hi' ? 'हमारा लक्ष्य' : 'OUR MISSION'}</h3>
          </div>
          <div className="p-8 bg-white/5 border-l-[6px] border-cyan-500 rounded-r-3xl shadow-inner">
            <p className="text-slate-200 text-sm md:text-lg font-black leading-relaxed uppercase tracking-tight">
              {lang === 'hi' ? content.missionText : "TO EMPOWER EVERY OPERATOR WITH CORRECT KNOWLEDGE AND DIGITAL GUIDES, ENABLING THEM TO MASTER COMPLEX INDUSTRIAL SYSTEMS THROUGH SELF-IMPROVEMENT."}
            </p>
          </div>
        </motion.div>

        {/* Vision Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-950/60 backdrop-blur-xl border border-white/5 rounded-[3rem] p-12 relative group overflow-hidden shadow-2xl"
        >
          <div className="absolute -right-4 -top-4 text-9xl font-black text-white/[0.02] select-none pointer-events-none uppercase italic">VISION</div>
          <div className="flex items-center gap-5 mb-10">
            <div className="w-14 h-14 bg-cyan-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30 shadow-lg">
              <Eye className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-white text-2xl font-black uppercase tracking-widest">{lang === 'hi' ? 'हमारा दृष्टिकोण' : 'OUR VISION'}</h3>
          </div>
          <div className="p-8 bg-white/5 border-l-[6px] border-cyan-500 rounded-r-3xl shadow-inner">
            <p className="text-slate-200 text-sm md:text-lg font-black leading-relaxed uppercase tracking-tight">
              {lang === 'hi' ? content.visionText : "A FUTURE WHERE EVERY WORKER IS AN EXPERT, BRIDGING THE GAP BETWEEN BASIC FLOOR OPERATIONS AND COMPLEX TECHNICAL EXCELLENCE."}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Core Values Section */}
      <div className="space-y-12">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-white text-xl md:text-4xl font-black tracking-[0.2em] uppercase">
            {content.values}
          </h2>
          <div className="h-1.5 w-32 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
              className="flex flex-col items-center text-center gap-6 group"
            >
              <div className="mb-2 p-6 bg-slate-900 rounded-full border border-white/10 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-500 shadow-2xl">
                {value.icon}
              </div>
              <h4 className="text-white text-lg font-black uppercase tracking-widest">{value.title}</h4>
              <p className="text-slate-500 text-[11px] font-black uppercase tracking-[0.2em] max-w-[240px] leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, ExternalLink, Briefcase, Building2, Sparkles, Clock } from 'lucide-react';
import { Language } from '../types';

interface HiringCard {
  company: string;
  role: string;
  description: string;
  applyLink: string;
  isNew?: boolean;
  postedAt: string; // ISO date string
}

interface HiringSectionProps {
  lang: Language;
  translations: any;
}

const HiringSection: React.FC<HiringSectionProps> = ({ lang, translations }) => {
  const isHi = lang === 'hi';
  const t = translations.hiring;

  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const postedDate = new Date(dateString);
    const diffInMs = now.getTime() - postedDate.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

    if (diffInDays > 0) {
      return isHi ? `${diffInDays} दिन पहले` : `${diffInDays}d ago`;
    }
    if (diffInHours > 0) {
      return isHi ? `${diffInHours} घंटे पहले` : `${diffInHours}h ago`;
    }
    return isHi ? 'अभी' : 'Just now';
  };

  const hiringData: HiringCard[] = [
    {
      company: "XIHI Technology Pvt Ltd",
      role: "ME Supervisor (Wave soldering)",
      description: isHi 
        ? "ME सुपरवाइजर (वेव सोल्डरिंग) पदों के लिए तत्काल भर्ती। विनिर्माण क्षेत्र में करियर का अवसर।" 
        : "Urgent hiring for ME Supervisor (Wave soldering) positions. Career opportunity in manufacturing sector.",
      applyLink: "https://www.linkedin.com/posts/shivani1206_urgent-hiring-xihi-technology-pvt-ltd-share-7439872403226308608-UUOe?utm_source=share&utm_medium=member_android&rcm=ACoAACL-0WMBZwaN1UkXbC0KqCsi6AMAgFY2K3E",
      isNew: true,
      postedAt: "2026-04-12T11:13:00Z"
    },
    {
      company: "Wellmei India Pvt Ltd",
      role: "Senior Quality Engineer",
      description: isHi 
        ? "सीनियर क्वालिटी इंजीनियर पदों के लिए भर्ती। विनिर्माण क्षेत्र में करियर का अवसर।" 
        : "Hiring for Senior Quality Engineer positions. Career opportunity in manufacturing sector.",
      applyLink: "https://www.linkedin.com/posts/karthick-k-87b7b0211_we-are-hiringseniorengineer-department-activity-7448780101426774016-_5O-?utm_source=share&utm_medium=member_android&rcm=ACoAACL-0WMBZwaN1UkXbC0KqCsi6AMAgFY2K3E",
      isNew: true,
      postedAt: "2026-04-12T11:08:00Z"
    },
    {
      company: "Zefrex Industries Pvt Ltd",
      role: "Senior/Lead Quality Engineer",
      description: isHi 
        ? "सीनियर/लीड क्वालिटी इंजीनियर पदों के लिए भर्ती। गुणवत्ता प्रबंधन में नेतृत्व का अवसर।" 
        : "Hiring for Senior/Lead Quality Engineer positions. Leadership opportunity in quality management.",
      applyLink: "https://www.linkedin.com/posts/karthick-k-87b7b0211_hiring-seniorqualityengineer-quality-share-7448780004647231489-JlMk?utm_source=share&utm_medium=member_android&rcm=ACoAACL-0WMBZwaN1UkXbC0KqCsi6AMAgFY2K3E",
      isNew: true,
      postedAt: "2026-04-12T11:05:00Z"
    },
    {
      company: "Avalon Technology",
      role: "Quality Engineer",
      description: isHi 
        ? "क्वालिटी इंजीनियर (SMT) पदों के लिए भर्ती। विनिर्माण क्षेत्र में करियर का अवसर।" 
        : "Hiring for Quality Engineer (SMT) positions. Career opportunity in manufacturing sector.",
      applyLink: "https://www.linkedin.com/posts/karthick-k-87b7b0211_were-hiring-quality-engineer-smt-company-share-7449147480996249600-36IL?utm_source=share&utm_medium=member_android&rcm=ACoAACL-0WMBZwaN1UkXbC0KqCsi6AMAgFY2K3E",
      isNew: true,
      postedAt: "2026-04-12T11:03:00Z"
    },
    {
      company: "OKAYA power pvt Ltd",
      role: "SQA Engineer",
      description: isHi 
        ? "SQA इंजीनियर पदों के लिए भर्ती। गुणवत्ता आश्वासन में करियर का अवसर।" 
        : "Hiring for SQA Engineer positions. Career opportunity in Quality Assurance.",
      applyLink: "https://www.linkedin.com/posts/okayapowergroup_okaya-hiring-sqaengineer-activity-7444246540170211328-4ocr?utm_source=share&utm_medium=member_android&rcm=ACoAACL-0WMBZwaN1UkXbC0KqCsi6AMAgFY2K3E",
      isNew: true,
      postedAt: "2026-04-12T11:00:00Z"
    },
    {
      company: "ILJIN India Pvt Ltd",
      role: "Production Engineer",
      description: isHi 
        ? "प्रोडक्शन इंजीनियर पदों के लिए भर्ती। विनिर्माण क्षेत्र में करियर का अवसर।" 
        : "Hiring for Production Engineer positions. Career opportunity in manufacturing sector.",
      applyLink: "https://www.linkedin.com/posts/tribhuwan-tiwari-535044b2_job-opening-production-engineer-positions-activity-7445177990319239168-6akJ?utm_source=share&utm_medium=member_android&rcm=ACoAACL-0WMBZwaN1UkXbC0KqCsi6AMAgFY2K3E",
      isNew: true,
      postedAt: "2026-04-12T10:00:00Z"
    },
    {
      company: "DBG Technology India Pvt Ltd.",
      role: "SMT Engineer",
      description: isHi 
        ? "EMS विनिर्माण वातावरण में SMT इंजीनियर के लिए भर्ती।" 
        : "Hiring for SMT Engineer in EMS manufacturing environment",
      applyLink: "https://www.linkedin.com/posts/nidhi-5238a323a_hiring-smt-ems-share-7448667540949725184-Pw2T?utm_source=share&utm_medium=member_android&rcm=ACoAACL-0WMBZwaN1UkXbC0KqCsi6AMAgFY2K3E",
      isNew: true,
      postedAt: "2026-04-12T08:00:00Z"
    }
  ];

  return (
    <section className="pt-0 pb-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Section Header - Ultra Compact */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[8px] font-black uppercase tracking-[0.2em] mb-3"
            >
              <Sparkles size={10} />
              {t.latestBadge}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-4xl font-black uppercase tracking-tighter relative group"
            >
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-white to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                {t.title}
              </span>
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-[10px] md:text-xs font-medium max-w-xs md:text-right uppercase tracking-widest leading-tight"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Minimal List Layout - Ultra Compact */}
        <div className="bg-slate-950/40 backdrop-blur-xl border border-white/5 rounded-xl overflow-hidden shadow-2xl">
          {/* Table Header - Desktop Only */}
          <div className="hidden md:grid grid-cols-[2fr_1.5fr_1fr_1fr] gap-4 px-5 py-3 border-b border-white/5 bg-white/[0.02]">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em]">{isHi ? 'पद' : 'Position'}</span>
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em]">{isHi ? 'कंपनी' : 'Company'}</span>
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em]">{isHi ? 'समय' : 'Posted'}</span>
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em] text-right">{isHi ? 'कार्रवाई' : 'Action'}</span>
          </div>

          <div className="divide-y divide-white/5">
            {hiringData.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative hover:bg-white/[0.03] transition-colors duration-300"
              >
                {/* Mobile & Desktop Responsive Row */}
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1.5fr_1fr_1fr] gap-2 md:gap-4 px-4 md:px-5 py-3 md:py-3.5 items-center">
                  
                  {/* Position / Role */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                      <Briefcase size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="text-xs font-black text-white uppercase tracking-tight truncate group-hover:text-cyan-400 transition-colors">
                          {job.role}
                        </h3>
                        {job.isNew && (
                          <span className="px-1 py-0.5 rounded bg-cyan-500 text-white text-[5px] font-black uppercase tracking-widest">
                            {t.newBadge}
                          </span>
                        )}
                      </div>
                      <p className="text-[8px] text-slate-500 font-medium truncate md:hidden">
                        {job.company}
                      </p>
                    </div>
                  </div>

                  {/* Company - Desktop Only */}
                  <div className="hidden md:flex items-center">
                    <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400 text-[8px] font-black uppercase tracking-widest group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all">
                      {job.company}
                    </span>
                  </div>

                  {/* Time */}
                  <div className="flex items-center gap-1 text-slate-500">
                    <Clock size={9} className="shrink-0" />
                    <span className="text-[8px] font-bold uppercase tracking-wider">
                      {getTimeAgo(job.postedAt)}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end gap-1.5">
                    <a
                      href={job.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-md font-black uppercase tracking-widest text-[8px] transition-all flex items-center gap-1 shadow-lg active:scale-95 whitespace-nowrap"
                    >
                      {t.applyNow}
                      <ExternalLink size={10} />
                    </a>
                    <a
                      href={job.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all shrink-0"
                      title="View on LinkedIn"
                    >
                      <Linkedin size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Hint */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-6 text-center text-[8px] font-black text-slate-600 uppercase tracking-[0.4em]"
        >
          {isHi ? 'अधिक अवसर जल्द ही आ रहे हैं' : 'More opportunities coming soon'}
        </motion.p>
      </div>
    </section>
  );
};

export default HiringSection;

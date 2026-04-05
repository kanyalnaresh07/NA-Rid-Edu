
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, AlertCircle, BookOpen, Lightbulb, Target, Settings, Rocket, BarChart, Puzzle, Megaphone } from 'lucide-react';
import { getGlossaryTerms } from '../constants';
import { GlossaryTerm, Language } from '../types';
import { EmptyState } from './ui/EmptyState';

interface GlossaryListProps {
  translations: any;
  lang: Language;
  onCategorySelect: (category: GlossaryTerm, subItem?: string, point?: string) => void;
}

const SYNONYMS: Record<string, string[]> = {
  // Departments Synonyms (English)
  'Quality (QC)': ['qc', 'quality', 'spc', 'inspection', 'qa', 'quality assurance', 'standards', 'compliance'],
  'Production': ['prod', 'manufacturing', 'assembly', 'shop floor', 'output', 'line'],
  'Process Engineering': ['pe', 'process', 'engineering', 'optimization', 'efficiency', 'industrial engineering', 'ie'],
  'Maintenance': ['mt', 'repair', 'breakdown', 'preventive', 'utility', 'electrical', 'mechanical'],
  'Planning (PPC)': ['ppc', 'planning', 'scheduling', 'inventory', 'mrp', 'order'],
  
  // Departments Synonyms (Hindi)
  'Quality (क्वालिटी)': ['qc', 'quality', 'spc', 'inspection', 'qa', 'quality assurance', 'standards', 'compliance'],
  'Production (प्रोडक्शन)': ['prod', 'manufacturing', 'assembly', 'shop floor', 'output', 'line'],
  'Process Engineering (प्रोसेस)': ['pe', 'process', 'engineering', 'optimization', 'efficiency', 'industrial engineering', 'ie'],
  'Maintenance (मेंटेनेंस)': ['mt', 'repair', 'breakdown', 'preventive', 'utility', 'electrical', 'mechanical'],
  'Planning (प्लानिंग)': ['ppc', 'planning', 'scheduling', 'inventory', 'mrp', 'order'],
  
  // Points Synonyms
  'T5S (5S, 3R & VM)': ['5s', '3r', 'vm', 'housekeeping', 'cleanliness', 'sorting', 'set in order', 'shine', 'standardize', 'sustain', 'cleaning', 'organization'],
  'PPE (Safety Gear)': ['ppe', 'safety gear', 'helmet', 'gloves', 'safety shoes', 'goggles', 'earplugs', 'protection', 'mask', 'vest', 'safety equipment'],
  'Work Instruction / OPL': ['wi', 'work standard', 'opl', 'instruction', 'sop', 'standard operating procedure', 'one point lesson', 'manual', 'guide', 'how to'],
  'Time Management': ['takt time', 'talk time', 'cycle time', 'lead time', 'bottle neck', 'timings', 'production time', 'schedule', 'efficiency'],
  'Productivity (UPH/UPPH)': ['uph', 'upph', 'idle time', 'output', 'efficiency', 'units per hour', 'performance', 'target'],
  'JIT / Kanban / Pull System': ['jit', 'kanban', 'pull system', 'just in time', 'lean', 'inventory reduction', 'supermarket', 'fifo'],
  'SMED (Quick Changeover)': ['smed', 'quick changeover', 'setup reduction', 'single minute exchange of die', 'internal task', 'external task'],
  'Andon / Visual Management': ['andon', 'visual management', 'lights', 'signal', 'status', 'board', 'display', 'visibility'],
  'Rejection & Rework': ['rejection', 'rework', 'ssi', 'defect', 'scrap', 'quality issue', 'faulty', 'repair', 'waste', 'ng'],
  'Manpower Handling': ['attendance', 'skill mapping', 'manpower', 'workers', 'staffing', 'labor', 'team', 'operators'],
  'Material Handling': ['fifo', 'inventory', 'material', 'parts', 'stock', 'warehouse', 'first in first out', 'storage', 'supply'],
  '4M / SLE-50 (Loss reduction)': ['4m', 'sle-50', 'loss', 'reduction', 'man machine material method', 'safety loss elimination', 'waste reduction'],
  'OEE (Machine Efficiency)': ['oee', 'machine efficiency', 'availability', 'performance', 'overall equipment effectiveness', 'uptime'],
  'LOB (Line Balancing)': ['lob', 'line balancing', 'bottleneck', 'workload distribution', 'balancing', 'flow'],
  'Value Analysis (VA/NVA)': ['va', 'nva', 'enva', 'value analysis', 'waste elimination', 'non value added', 'muda', 'mura', 'muri'],
  'Improvement Principles': ['four principles', 'improvement', 'elimination', 'combination', 'rearrangement', 'simplification', 'ecrs'],
  'Kaizen / Poka-Yoke': ['kaizen', 'poka-yoke', 'mistake proofing', 'improvement', 'continuous improvement', 'error proofing', 'zero defects'],
  'Incoming Quality Control (IQC)': ['iqc', 'incoming', 'raw material', 'vendor quality', 'inspection'],
  'In-Process Quality Control (IPQC)': ['ipqc', 'inprocess', 'line inspection', 'process check'],
  'Final Quality Control (FQC)': ['fqc', 'final inspection', 'pdi', 'pre dispatch inspection'],
  'Statistical Process Control (SPC)': ['spc', 'statistical process control', 'control charts', 'cp', 'cpk', 'process capability', 'sigma', 'standard deviation', 'variation', 'quality control'],
  'Poka-Yoke (Mistake Proofing)': ['poka-yoke', 'mistake proofing', 'error proofing', 'zero defects', 'prevention', 'detection'],
  'Calibration': ['instrument', 'gauge', 'measurement', 'accuracy', 'testing', 'calibration'],
  '7 QC Tools': ['pareto', 'fishbone', 'histogram', 'control chart', 'scatter diagram', 'check sheet', 'stratification', 'qc tools'],
  'Preventive Maintenance': ['pm', 'preventive', 'scheduled maintenance', 'routine check', 'maintenance'],
  'Production Planning & Control (PPC)': ['ppc', 'planning', 'scheduling', 'production control'],
  'EHS / Safety': ['ehs', 'safety', 'environment', 'health', 'security', 'protection', 'accident prevention'],
  'Compliance / ISO': ['iso', 'compliance', 'standards', 'audit', 'certification', 'legal'],
  'HR / Admin': ['hr', 'admin', 'human resources', 'payroll', 'recruitment', 'staff'],
  'IT / Systems': ['it', 'systems', 'computer', 'network', 'software', 'data', 'mis'],
  'Finance / Accounts': ['finance', 'accounts', 'budget', 'tax', 'money', 'audit'],
  'Store / Inventory / Warehouse': ['store', 'inventory', 'warehouse', 'stock', 'fifo', 'material'],
  'Purchase / Procurement': ['purchase', 'procurement', 'vendor', 'buying', 'supply'],
  'Logistics / Dispatch': ['logistics', 'dispatch', 'transport', 'delivery', 'shipping'],
  'R&D / Design': ['r&d', 'design', 'research', 'development', 'prototype']
};

const HighlightText = ({ text, highlight, className = "" }: { text: string; highlight: string; className?: string }) => {
  if (!highlight.trim()) return <span className={className}>{text}</span>;
  const parts = text.split(new RegExp(`(${highlight.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, 'gi'));
  return (
    <span className={className}>
      {parts.map((part, i) => 
        part.toLowerCase() === highlight.toLowerCase() ? (
          <mark key={i} className="bg-cyan-500/40 text-white rounded-sm px-0.5 border-b border-cyan-400/50 decoration-none">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
};

const GlossaryList: React.FC<GlossaryListProps> = ({ translations, lang, onCategorySelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const isHi = lang === 'hi';
  
  const allTerms = getGlossaryTerms(lang);
  
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase().trim();
    const results: { 
      type: 'category' | 'department' | 'point'; 
      term: GlossaryTerm; 
      title: string; 
      subtitle: string;
      snippet?: string;
      subItem?: string;
      point?: string;
      matchReason?: string;
      score: number; // For sorting
    }[] = [];

    allTerms.forEach(term => {
      const termTitleLower = term.title.toLowerCase();
      const termCategoryLower = term.category.toLowerCase();

      // 1. Check Category Title & Category Name
      if (termTitleLower.includes(query) || termCategoryLower.includes(query)) {
        results.push({ 
          type: 'category', 
          term, 
          title: term.title, 
          subtitle: term.category, 
          score: termTitleLower.startsWith(query) ? 10 : 8 
        });
      }

      // 2. Check Sub-items (Departments)
      term.subItems.forEach(item => {
        const itemLower = item.toLowerCase();
        const synonyms = SYNONYMS[item] || [];
        const matchedSynonym = synonyms.find(s => s.toLowerCase().includes(query));

        if (itemLower.includes(query) || matchedSynonym) {
          results.push({ 
            type: 'department', 
            term, 
            title: item, 
            subtitle: term.title, 
            subItem: item, 
            matchReason: matchedSynonym && !itemLower.includes(query) ? `${isHi ? 'मैच मिला' : 'Matched'}: "${matchedSynonym.toUpperCase()}"` : undefined,
            score: itemLower.startsWith(query) ? 9 : (matchedSynonym ? 7 : 8)
          });
        }
      });

      // 3. Check Details (Deep Content Search)
      if (term.details) {
        Object.values(term.details).forEach(dept => {
          const deptNameLower = dept.name.toLowerCase();
          const deptRoleLower = dept.role.toLowerCase();

          // Check department name and role (Paragraph search)
          if (deptNameLower.includes(query) || deptRoleLower.includes(query)) {
            results.push({ 
              type: 'department', 
              term, 
              title: dept.name, 
              subtitle: term.title,
              snippet: dept.role,
              subItem: dept.name,
              score: deptNameLower.startsWith(query) ? 8 : 6
            });
          }

          dept.responsibilities.forEach(group => {
            if (group.groupName?.toLowerCase().includes(query)) {
              results.push({
                type: 'point',
                term,
                title: group.groupName,
                subtitle: `${term.title} > ${dept.name}`,
                subItem: dept.name,
                score: 5
              });
            }

            group.items.forEach(item => {
              const itemLower = item.toLowerCase();
              const synonyms = SYNONYMS[item] || [];
              const matchedSynonym = synonyms.find(s => s.toLowerCase().includes(query));
              
              if (itemLower.includes(query) || matchedSynonym) {
                results.push({ 
                  type: 'point', 
                  term, 
                  title: item, 
                  subtitle: `${term.title} > ${dept.name}`,
                  subItem: dept.name,
                  point: item,
                  matchReason: matchedSynonym && !itemLower.includes(query) ? `${isHi ? 'मैच मिला' : 'Matched'}: "${matchedSynonym.toUpperCase()}"` : undefined,
                  score: itemLower.startsWith(query) ? 9 : (matchedSynonym ? 7 : 8)
                });
              }
            });
          });

          // Check responsible persons
          dept.responsiblePersons.forEach(person => {
            if (person.toLowerCase().includes(query)) {
              results.push({
                type: 'department',
                term,
                title: dept.name,
                subtitle: `${isHi ? 'ज़िम्मेदार' : 'Responsible'}: ${person}`,
                subItem: dept.name,
                score: 4
              });
            }
          });
        });
      }
    });

    // Sort by score (higher first) and remove duplicates
    return results
      .sort((a, b) => b.score - a.score)
      .filter((v, i, a) => a.findIndex(t => (
        t.title === v.title && 
        t.subItem === v.subItem && 
        t.point === v.point &&
        t.type === v.type
      )) === i);
  }, [allTerms, searchQuery, isHi]);

  const filteredTerms = useMemo(() => {
    if (!searchQuery.trim()) return allTerms;
    const query = searchQuery.toLowerCase();
    
    return allTerms.filter(term => {
      // 1. Check main term properties
      const matchesMain = 
        term.title.toLowerCase().includes(query) || 
        term.category.toLowerCase().includes(query) ||
        term.subItems.some(item => item.toLowerCase().includes(query));
      
      if (matchesMain) return true;

      // 2. Deep search in details if available
      if (term.details) {
        return Object.values(term.details).some(dept => {
          // Check department name and role
          if (dept.name.toLowerCase().includes(query) || dept.role.toLowerCase().includes(query)) {
            return true;
          }

          // Check responsibilities
          const matchesResponsibilities = dept.responsibilities.some(group => 
            (group.groupName?.toLowerCase().includes(query)) ||
            group.items.some(item => item.toLowerCase().includes(query))
          );
          if (matchesResponsibilities) return true;

          // Check responsible persons
          if (dept.responsiblePersons.some(person => person.toLowerCase().includes(query))) {
            return true;
          }

          return false;
        });
      }

      return false;
    });
  }, [allTerms, searchQuery]);

  const circleColors = [
    { border: 'border-slate-600', line: 'bg-slate-600', text: 'text-slate-600' },
    { border: 'border-teal-500', line: 'bg-teal-500', text: 'text-teal-500' },
    { border: 'border-amber-500', line: 'bg-amber-500', text: 'text-amber-500' },
    { border: 'border-purple-600', line: 'bg-purple-600', text: 'text-purple-600' },
    { border: 'border-slate-800', line: 'bg-slate-800', text: 'text-slate-800' },
  ];

  const circleIcons = [Search, Settings, Lightbulb, Rocket, BarChart, Target];

  const handleAISearch = () => {
    if (searchQuery.trim()) {
      const url = `https://chatgpt.com/?q=${encodeURIComponent(searchQuery)}`;
      window.open(url, '_blank');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAISearch();
    }
  };

  return (
    <div className="relative z-10">
      <div className="max-w-[1600px] mx-auto px-2 md:px-4 lg:px-6 py-4 md:py-8">
        
        {!searchQuery.trim() && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16">
            {/* Card 1 - Red/Rose */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="relative group h-full"
            >
              <div className="absolute -inset-1 bg-rose-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]"></div>
              <div className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl">
                <div className="h-4 w-full bg-rose-500 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-10 bg-slate-950 rounded-b-full border-x border-b border-white/10"></div>
                </div>
                <div className="p-8 md:p-10 pt-12 flex flex-col md:flex-row gap-6 items-start h-full">
                  <div className="shrink-0 w-20 h-20 rounded-3xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Lightbulb size={40} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4 text-white group-hover:text-rose-400 transition-colors">{translations.heroCards.card1.title}</h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium mb-8">{translations.heroCards.card1.desc}</p>
                    <div className="mt-auto flex gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-rose-500/30 group-hover:bg-rose-500 transition-all duration-300" style={{ transitionDelay: `${i * 100}ms` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Blue */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative group h-full"
            >
              <div className="absolute -inset-1 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]"></div>
              <div className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl">
                <div className="h-4 w-full bg-blue-500 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-10 bg-slate-950 rounded-b-full border-x border-b border-white/10"></div>
                </div>
                <div className="p-8 md:p-10 pt-12 flex flex-col md:flex-row gap-6 items-start h-full">
                  <div className="shrink-0 w-20 h-20 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Puzzle size={40} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4 text-white group-hover:text-blue-400 transition-colors">{translations.heroCards.card2.title}</h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium mb-8">{translations.heroCards.card2.desc}</p>
                    <div className="mt-auto flex gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-blue-500/30 group-hover:bg-blue-500 transition-all duration-300" style={{ transitionDelay: `${i * 100}ms` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Amber/Orange */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative group h-full"
            >
              <div className="absolute -inset-1 bg-amber-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]"></div>
              <div className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl">
                <div className="h-4 w-full bg-amber-500 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-10 bg-slate-950 rounded-b-full border-x border-b border-white/10"></div>
                </div>
                <div className="p-8 md:p-10 pt-12 flex flex-col md:flex-row gap-6 items-start h-full">
                  <div className="shrink-0 w-20 h-20 rounded-3xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Megaphone size={40} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4 text-white group-hover:text-amber-400 transition-colors">{translations.heroCards.card3.title}</h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium mb-8">{translations.heroCards.card3.desc}</p>
                    <div className="mt-auto flex gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-amber-500/30 group-hover:bg-amber-500 transition-all duration-300" style={{ transitionDelay: `${i * 100}ms` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 4 - Emerald/Green */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative group h-full"
            >
              <div className="absolute -inset-1 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]"></div>
              <div className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl">
                <div className="h-4 w-full bg-emerald-500 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-10 bg-slate-950 rounded-b-full border-x border-b border-white/10"></div>
                </div>
                <div className="p-8 md:p-10 pt-12 flex flex-col md:flex-row gap-6 items-start h-full">
                  <div className="shrink-0 w-20 h-20 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Target size={40} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4 text-white group-hover:text-emerald-400 transition-colors">{translations.heroCards.card4.title}</h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium mb-8">{translations.heroCards.card4.desc}</p>
                    <div className="mt-auto flex gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-emerald-500/30 group-hover:bg-emerald-500 transition-all duration-300" style={{ transitionDelay: `${i * 100}ms` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-4 md:mb-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-grow border-b border-white/10 pb-2"
          >
            <h2 className="text-[10px] md:text-xs font-black text-slate-400 tracking-[0.3em] uppercase leading-none">{translations.browseTerms}</h2>
            <div className="w-6 md:w-10 h-0.5 bg-cyan-500 mt-2"></div>
          </motion.div>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full md:w-[450px] relative group"
            >
              {/* Glowing Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity rounded-2xl"></div>
              
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
                <Search className={`w-5 h-5 transition-colors duration-300 ${searchQuery ? 'text-cyan-400' : 'text-slate-500 group-focus-within:text-cyan-400'}`} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={translations.searchPlaceholder}
                className="w-full bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl py-4 pl-14 pr-14 text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-800/90 transition-all shadow-2xl relative z-0"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-4 flex items-center text-slate-500 hover:text-white transition-colors z-10"
                >
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 border border-white/10">
                    <span className="text-sm font-bold">×</span>
                  </div>
                </button>
              )}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAISearch}
              disabled={!searchQuery.trim()}
              className={`whitespace-nowrap px-8 py-4 rounded-2xl font-black text-xs tracking-[0.2em] uppercase transition-all flex items-center gap-3 shadow-2xl relative overflow-hidden group/btn ${
                searchQuery.trim() 
                  ? 'bg-slate-900 text-white border border-cyan-500/50' 
                  : 'bg-slate-800 text-slate-500 border border-white/5 cursor-not-allowed'
              }`}
            >
              {searchQuery.trim() && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
              )}
              <Rocket size={16} className={searchQuery.trim() ? 'text-cyan-400 animate-bounce' : ''} />
              <span className="relative z-10">{translations.searchWithAI}</span>
              {searchQuery.trim() && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              )}
            </motion.button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {searchQuery.trim() ? (
            searchResults.length > 0 ? (
              <motion.div 
                key="search-results"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4 mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-[10px] font-black text-cyan-500 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    {searchResults.length} {isHi ? 'परिणाम मिले' : 'Results Found'}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {searchResults.map((result, idx) => (
                    <motion.button
                      key={`${result.type}-${result.title}-${idx}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => onCategorySelect(result.term, result.subItem, result.point)}
                      className="flex items-center gap-4 p-4 bg-slate-900/60 border border-white/5 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-800 transition-all text-left group w-full"
                    >
                      <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all shrink-0">
                        {result.type === 'category' ? <AlertCircle size={18} /> : <Search size={18} />}
                      </div>
                      <div className="min-w-0 flex-grow">
                        <HighlightText 
                          text={result.title} 
                          highlight={searchQuery} 
                          className="block text-sm md:text-base font-black text-white uppercase tracking-tight truncate group-hover:text-cyan-400 transition-colors"
                        />
                        <HighlightText 
                          text={result.subtitle} 
                          highlight={searchQuery} 
                          className="block text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest truncate"
                        />
                        {result.snippet && (
                          <div className="mt-2 text-[9px] md:text-[11px] text-slate-400 line-clamp-2 leading-relaxed italic border-l-2 border-cyan-500/30 pl-2">
                            <HighlightText text={result.snippet} highlight={searchQuery} />
                          </div>
                        )}
                        {result.matchReason && (
                          <div className="mt-1 flex items-center gap-1.5">
                            <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                            <span className="text-[7px] md:text-[8px] font-black text-cyan-400 uppercase tracking-widest">{result.matchReason}</span>
                          </div>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 md:py-20"
              >
                <EmptyState 
                  icon={Search}
                  color="blue"
                  title={isHi ? 'कोई परिणाम नहीं मिला' : 'No Results Found'}
                  description={isHi 
                    ? `"${searchQuery}" के लिए कोई शब्द नहीं मिला। कृपया कुछ और खोजें।` 
                    : `We couldn't find any terms matching "${searchQuery}". Try a different keyword.`}
                  actionLabel={isHi ? 'खोज साफ़ करें' : 'Clear Search'}
                  onAction={() => setSearchQuery('')}
                />
              </motion.div>
            )
          ) : (
            <motion.div 
              key="categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 md:gap-20 lg:gap-24 px-4 md:px-8 max-w-[1500px] mx-auto"
            >
              {filteredTerms.map((term, index) => {
                const color = circleColors[index % circleColors.length];
                const Icon = circleIcons[index % circleIcons.length];
                
                // Update connector logic for 3 items per row
                const getConnectorClassesFor3 = (index: number, total: number) => {
                  if (index === total - 1) return 'hidden';
                  
                  // Mobile (1 column): hide all connectors
                  const mobileClass = 'hidden md:flex';
                  
                  // Tablet (2 columns): hide on every 2nd item
                  const tabletClass = (index + 1) % 2 === 0 ? 'md:hidden xl:flex' : '';
                  
                  // Desktop (3 columns): hide on every 3rd item
                  const desktopClass = (index + 1) % 3 === 0 ? 'xl:hidden' : '';
                  
                  return `${mobileClass} ${tabletClass} ${desktopClass}`;
                };

                return (
                  <div key={term.id} className="relative flex justify-center items-center w-full">
                    {/* Connector Lines */}
                    <div className={`absolute top-1/2 -right-10 md:-right-12 lg:-right-16 xl:-right-20 w-10 md:w-12 lg:w-16 xl:w-20 h-8 -translate-y-1/2 z-0 flex flex-col justify-center gap-3 ${getConnectorClassesFor3(index, filteredTerms.length)}`}>
                      <div className={`w-full h-[6px] md:h-[8px] ${color.line} opacity-20 rounded-full relative overflow-hidden`}>
                        <motion.div 
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                          className="absolute inset-0 bg-white/40"
                        />
                      </div>
                      <div className={`w-full h-[6px] md:h-[8px] ${color.line} opacity-20 rounded-full relative overflow-hidden`}>
                        <motion.div 
                          animate={{ x: ['100%', '-100%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                          className="absolute inset-0 bg-white/40"
                        />
                      </div>
                    </div>

                    <motion.button 
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", damping: 20, stiffness: 100, delay: index * 0.05 }}
                      onClick={() => onCategorySelect(term)}
                      className={`relative w-[300px] sm:w-[340px] md:w-[360px] lg:w-[400px] aspect-square rounded-full border-[12px] md:border-[16px] ${color.border} bg-white flex flex-col items-center justify-center p-10 md:p-12 text-center group z-10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/50 overflow-visible`}
                    >
                      {/* Premium Loader Animation Rings */}
                      <div 
                        className={`absolute inset-[-15px] md:inset-[-22px] rounded-full border-[4px] md:border-[6px] border-transparent ${color.text} opacity-60 animate-[spin_4s_linear_infinite] pointer-events-none`}
                        style={{ borderTopColor: 'currentColor', borderRightColor: 'currentColor' }}
                      ></div>
                      <div 
                        className={`absolute inset-[-22px] md:inset-[-32px] rounded-full border-[2px] border-dashed ${color.text} opacity-30 animate-[spin_10s_linear_infinite_reverse] pointer-events-none`}
                        style={{ borderColor: 'currentColor' }}
                      ></div>
                      <div 
                        className={`absolute inset-[-30px] md:inset-[-42px] rounded-full border-[3px] border-transparent ${color.text} opacity-40 animate-[spin_6s_linear_infinite] pointer-events-none`}
                        style={{ borderBottomColor: 'currentColor', borderLeftColor: 'currentColor' }}
                      >
                        <div className={`absolute bottom-[14%] right-[14%] w-3 h-3 md:w-4 md:h-4 rounded-full ${color.line} shadow-[0_0_15px_currentColor] animate-pulse`}></div>
                      </div>

                      {/* Inner dashed ring */}
                      <div className="absolute inset-4 border-2 border-dashed border-slate-100 rounded-full pointer-events-none"></div>

                      <div className={`mb-6 md:mb-8 ${color.text} transition-all duration-700 ease-in-out group-hover:[transform:rotateY(360deg)_scale(1.2)]`} style={{ perspective: '1000px' }}>
                        <Icon className="w-16 h-16 md:w-20 md:h-20" strokeWidth={1} />
                      </div>
                      
                      <h3 className="text-slate-900 font-black text-xl md:text-3xl uppercase tracking-widest mb-4 line-clamp-2 px-6 leading-tight group-hover:text-cyan-600 transition-colors">
                        {term.title}
                      </h3>
                      
                      <div className="w-16 h-1.5 bg-slate-200 mb-6 rounded-full group-hover:w-24 group-hover:bg-cyan-500 transition-all duration-500"></div>

                      <p className="text-slate-500 text-[11px] md:text-[13px] font-bold px-6 line-clamp-3 leading-relaxed tracking-wide">
                        {term.subItems.join(', ')}
                      </p>
                    </motion.button>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GlossaryList;

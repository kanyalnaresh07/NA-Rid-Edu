
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, AlertCircle, BookOpen, Lightbulb, Target, Settings, Rocket, BarChart } from 'lucide-react';
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-12">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative bg-slate-950/40 backdrop-blur-md border border-white/5 p-8 md:p-12 flex flex-col items-center text-center group hover:bg-slate-900/60 transition-all overflow-hidden"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-emerald-500 opacity-40 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-emerald-500/50"></div>
              
              <div className="w-14 h-14 border border-emerald-500/20 flex items-center justify-center mb-8 mx-auto group-hover:bg-emerald-500/10 transition-all">
                <BookOpen size={24} className="text-emerald-400" />
              </div>
              <h3 className="text-white font-black text-sm md:text-lg tracking-[0.2em] uppercase mb-6">{translations.heroCards.card1.title}</h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                {translations.heroCards.card1.desc}
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative bg-slate-950/40 backdrop-blur-md border border-white/5 p-8 md:p-12 flex flex-col items-center text-center group hover:bg-slate-900/60 transition-all overflow-hidden"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-cyan-500 opacity-40 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-500/50"></div>
              
              <div className="w-14 h-14 border border-cyan-500/20 flex items-center justify-center mb-8 mx-auto group-hover:bg-cyan-500/10 transition-all">
                <Lightbulb size={24} className="text-cyan-400" />
              </div>
              <h3 className="text-white font-black text-sm md:text-lg tracking-[0.2em] uppercase mb-6">{translations.heroCards.card2.title}</h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                {translations.heroCards.card2.desc}
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative bg-slate-950/40 backdrop-blur-md border border-white/5 p-8 md:p-12 flex flex-col items-center text-center group hover:bg-slate-900/60 transition-all overflow-hidden"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-blue-500 opacity-40 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-blue-500/50"></div>
              
              <div className="w-14 h-14 border border-blue-500/20 flex items-center justify-center mb-8 mx-auto group-hover:bg-blue-500/10 transition-all">
                <Target size={24} className="text-blue-400" />
              </div>
              <h3 className="text-white font-black text-sm md:text-lg tracking-[0.2em] uppercase mb-6">{translations.heroCards.card3.title}</h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                {translations.heroCards.card3.desc}
              </p>
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
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full md:w-96 relative group"
            >
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className={`w-4 h-4 transition-colors duration-300 ${searchQuery ? 'text-cyan-400' : 'text-slate-500 group-focus-within:text-cyan-400'}`} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={translations.searchPlaceholder}
                className="w-full bg-slate-900/60 border border-white/10 rounded-2xl py-3 pl-12 pr-12 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-800/80 transition-all shadow-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-4 flex items-center text-slate-500 hover:text-white transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10">
                    <span className="text-xs font-bold">×</span>
                  </div>
                </button>
              )}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAISearch}
              disabled={!searchQuery.trim()}
              className={`whitespace-nowrap px-6 py-3 rounded-2xl font-black text-[10px] tracking-widest uppercase transition-all flex items-center gap-2 shadow-lg ${
                searchQuery.trim() 
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:shadow-cyan-500/20 border border-cyan-400/30' 
                  : 'bg-slate-800 text-slate-500 border border-white/5 cursor-not-allowed'
              }`}
            >
              <Rocket size={14} className={searchQuery.trim() ? 'animate-pulse' : ''} />
              {translations.searchWithAI}
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
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-16 lg:gap-20 px-4 md:px-8 max-w-[1400px] mx-auto"
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
                    <div className={`absolute top-1/2 -right-8 md:-right-10 lg:-right-12 xl:-right-14 w-8 md:w-10 lg:w-12 xl:w-14 h-6 -translate-y-1/2 z-0 flex-col justify-center gap-2 ${getConnectorClassesFor3(index, filteredTerms.length)}`}>
                      <div className={`w-full h-[4px] md:h-[5px] ${color.line} opacity-40`}></div>
                      <div className={`w-full h-[4px] md:h-[5px] ${color.line} opacity-40`}></div>
                    </div>

                    <motion.button 
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", damping: 20, stiffness: 100, delay: index * 0.05 }}
                      onClick={() => onCategorySelect(term)}
                      className={`relative w-[280px] sm:w-[320px] md:w-[340px] lg:w-[380px] aspect-square rounded-full border-[8px] md:border-[12px] ${color.border} bg-white flex flex-col items-center justify-center p-8 md:p-10 text-center group z-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/50`}
                    >
                      {/* Premium Loader Animation Rings */}
                      <div 
                        className={`absolute inset-[-12px] md:inset-[-18px] rounded-full border-[3px] md:border-[4px] border-transparent ${color.text} opacity-60 animate-[spin_4s_linear_infinite] pointer-events-none`}
                        style={{ borderTopColor: 'currentColor', borderRightColor: 'currentColor' }}
                      ></div>
                      <div 
                        className={`absolute inset-[-18px] md:inset-[-26px] rounded-full border-[1.5px] border-dashed ${color.text} opacity-30 animate-[spin_10s_linear_infinite_reverse] pointer-events-none`}
                        style={{ borderColor: 'currentColor' }}
                      ></div>
                      <div 
                        className={`absolute inset-[-24px] md:inset-[-34px] rounded-full border-[2px] border-transparent ${color.text} opacity-40 animate-[spin_6s_linear_infinite] pointer-events-none`}
                        style={{ borderBottomColor: 'currentColor', borderLeftColor: 'currentColor' }}
                      >
                        <div className={`absolute bottom-[14%] right-[14%] w-2 h-2 md:w-3 md:h-3 rounded-full ${color.line} shadow-[0_0_12px_currentColor]`}></div>
                      </div>

                      {/* Inner dashed ring */}
                      <div className="absolute inset-2 border-2 border-dashed border-slate-100 rounded-full pointer-events-none"></div>

                      <div className={`mb-4 md:mb-6 ${color.text} transition-all duration-700 ease-in-out group-hover:[transform:rotateY(360deg)_scale(1.15)]`} style={{ perspective: '1000px' }}>
                        <Icon className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1.2} />
                      </div>
                      
                      <h3 className="text-slate-900 font-black text-lg md:text-2xl uppercase tracking-widest mb-3 line-clamp-2 px-4 leading-tight">
                        {term.title}
                      </h3>
                      
                      <div className="w-12 h-1 bg-slate-200 mb-4 rounded-full group-hover:w-20 group-hover:bg-cyan-500 transition-all duration-500"></div>

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

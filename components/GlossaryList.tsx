
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, AlertCircle } from 'lucide-react';
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

  return (
    <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-6 md:mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-grow border-b border-white/10 pb-2 md:pb-4"
          >
            <h2 className="text-[10px] md:text-sm font-black text-slate-400 tracking-[0.3em] md:tracking-[0.4em] uppercase leading-none">{translations.browseTerms}</h2>
            <div className="w-6 md:w-10 h-0.5 bg-cyan-500 mt-2"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full md:w-80"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isHi ? 'खोजें...' : 'Search terms...'}
              className="w-full bg-slate-900/50 border border-white/5 rounded-xl py-2.5 md:py-3 pl-10 md:pl-12 pr-4 text-xs md:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all shadow-inner"
            />
          </motion.div>
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
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
            >
              {filteredTerms.map((term, index) => (
                <motion.button 
                  layout
                  key={term.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    y: -5,
                    backgroundColor: "rgba(15, 23, 42, 0.6)",
                    borderColor: "rgba(6, 182, 212, 0.3)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(6, 182, 212, 0.1)"
                  }}
                  whileTap={{ 
                    scale: 0.96,
                    backgroundColor: "rgba(15, 23, 42, 0.8)"
                  }}
                  transition={{ 
                    type: "spring",
                    damping: 25,
                    stiffness: 120,
                    delay: index * 0.02 
                  }}
                  onClick={() => onCategorySelect(term)}
                  className="bg-slate-900/40 backdrop-blur-xl p-5 md:p-10 border border-white/5 transition-all group cursor-pointer relative overflow-hidden rounded-[32px] md:rounded-[48px] shadow-2xl text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3 md:mb-6">
                      <div className="w-1 h-3 md:w-2 md:h-5 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                      <div className="text-[8px] md:text-[11px] font-black text-cyan-500 uppercase tracking-[0.4em]">
                         {term.category}
                      </div>
                    </div>
                    <h3 className="text-xl md:text-4xl font-black text-white mb-4 md:mb-8 group-hover:text-cyan-400 transition-colors uppercase tracking-tighter leading-none italic">
                      {term.title}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-12">
                      {term.subItems.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-[10px] md:text-[13px] font-bold text-slate-400 group-hover:text-cyan-400/90 transition-colors uppercase tracking-wider">
                          <div className="w-1.5 h-1.5 bg-slate-700 group-hover:bg-cyan-500 rounded-full transition-colors shadow-[0_0_8px_rgba(6,182,212,0)] group-hover:shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                      <div className="flex items-center gap-2 text-cyan-400 font-black text-[9px] md:text-[12px] uppercase tracking-widest group-hover:gap-4 transition-all">
                        {translations.viewDepartments}
                        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                      <div className="text-[8px] md:text-[10px] font-black text-slate-600 uppercase tracking-widest font-mono">
                        {term.id.toUpperCase()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 md:-bottom-12 -right-6 md:-right-12 text-8xl md:text-[16rem] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-white/[0.04] transition-all duration-700 leading-none italic">
                    {term.subItems.length}
                  </div>
                  
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Scanline effect */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                    <div className="w-full h-[2px] bg-cyan-500/50 absolute top-0 animate-[scan_4s_linear_infinite]"></div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GlossaryList;

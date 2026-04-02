
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

  const getConnectorClasses = (index: number, total: number) => {
    if (index === total - 1) return 'hidden';
    const isSmEnd = (index + 1) % 2 === 0;
    const isLgEnd = (index + 1) % 4 === 0;

    if (isSmEnd && isLgEnd) return 'hidden sm:hidden lg:hidden';
    if (isSmEnd && !isLgEnd) return 'hidden sm:hidden lg:flex';
    if (!isSmEnd && isLgEnd) return 'hidden sm:flex lg:hidden';
    return 'hidden sm:flex lg:flex';
  };

  return (
    <div className="relative z-10">
      <div className="max-w-[1600px] mx-auto px-2 md:px-4 lg:px-6 py-4 md:py-8">
        
        {/* Intro Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Point 1 */}
            <div className="relative bg-slate-900/60 backdrop-blur-xl border border-emerald-500/20 rounded-xl p-4 md:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] ml-5 md:ml-6 hover:border-emerald-500/50 transition-colors group">
              {/* Ribbon */}
              <div className="absolute -left-5 md:-left-6 top-4 w-5 md:w-6 h-24 bg-emerald-500 rounded-l-md flex items-center justify-center shadow-lg">
                <span className="transform -rotate-90 text-slate-950 font-black text-[8px] md:text-[10px] tracking-[0.2em] whitespace-nowrap">
                  OPTION 01
                </span>
                {/* Top Fold */}
                <div className="absolute -top-1.5 right-0 w-0 h-0 border-b-[6px] border-b-emerald-700 border-l-[6px] border-l-transparent"></div>
                {/* Bottom Fold */}
                <div className="absolute -bottom-1.5 right-0 w-0 h-0 border-t-[6px] border-t-emerald-700 border-l-[6px] border-l-transparent"></div>
              </div>

              {/* Content */}
              <div className="pl-2 flex flex-col items-center text-center">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-xs md:text-sm font-black text-white uppercase tracking-wider mb-2">Manufacturing Education Hub</h3>
                <p className="text-[10px] md:text-xs text-slate-400 leading-snug">
                  NA-RID Education Hub is a modern digital platform that explains the concepts of manufacturing, industrial processes, and operational excellence in a simple and structured way. The main objective of this platform is to make real-world industrial knowledge easily accessible to students, engineers, and professionals.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="relative bg-slate-900/60 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-4 md:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] ml-5 md:ml-6 hover:border-cyan-500/50 transition-colors group">
              {/* Ribbon */}
              <div className="absolute -left-5 md:-left-6 top-4 w-5 md:w-6 h-24 bg-cyan-500 rounded-l-md flex items-center justify-center shadow-lg">
                <span className="transform -rotate-90 text-slate-950 font-black text-[8px] md:text-[10px] tracking-[0.2em] whitespace-nowrap">
                  OPTION 02
                </span>
                {/* Top Fold */}
                <div className="absolute -top-1.5 right-0 w-0 h-0 border-b-[6px] border-b-cyan-700 border-l-[6px] border-l-transparent"></div>
                {/* Bottom Fold */}
                <div className="absolute -bottom-1.5 right-0 w-0 h-0 border-t-[6px] border-t-cyan-700 border-l-[6px] border-l-transparent"></div>
              </div>

              {/* Content */}
              <div className="pl-2 flex flex-col items-center text-center">
                <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-4 h-4 text-cyan-400" />
                </div>
                <h3 className="text-xs md:text-sm font-black text-white uppercase tracking-wider mb-2">What You Will Learn</h3>
                <p className="text-[10px] md:text-xs text-slate-400 leading-snug">
                  On this website, you will find detailed information about core departments such as Production, Quality, Planning, and Maintenance. Each section explains practical concepts, tools, and methodologies that are used in real industries.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="relative bg-slate-900/60 backdrop-blur-xl border border-blue-500/20 rounded-xl p-4 md:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] ml-5 md:ml-6 hover:border-blue-500/50 transition-colors group">
              {/* Ribbon */}
              <div className="absolute -left-5 md:-left-6 top-4 w-5 md:w-6 h-24 bg-blue-500 rounded-l-md flex items-center justify-center shadow-lg">
                <span className="transform -rotate-90 text-slate-950 font-black text-[8px] md:text-[10px] tracking-[0.2em] whitespace-nowrap">
                  OPTION 03
                </span>
                {/* Top Fold */}
                <div className="absolute -top-1.5 right-0 w-0 h-0 border-b-[6px] border-b-blue-700 border-l-[6px] border-l-transparent"></div>
                {/* Bottom Fold */}
                <div className="absolute -bottom-1.5 right-0 w-0 h-0 border-t-[6px] border-t-blue-700 border-l-[6px] border-l-transparent"></div>
              </div>

              {/* Content */}
              <div className="pl-2 flex flex-col items-center text-center">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Target className="w-4 h-4 text-blue-400" />
                </div>
                <h3 className="text-xs md:text-sm font-black text-white uppercase tracking-wider mb-2">Why This Platform</h3>
                <p className="text-[10px] md:text-xs text-slate-400 leading-snug">
                  In today's time, industrial knowledge is often scattered. NA-RID Education Hub provides a centralized platform where you can engage in structured learning. This platform is especially useful for those who want to build their career in the manufacturing and process improvement fields.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-4 md:mb-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-grow border-b border-white/10 pb-2"
          >
            <h2 className="text-[10px] md:text-xs font-black text-slate-400 tracking-[0.3em] uppercase leading-none">{translations.browseTerms}</h2>
            <div className="w-6 md:w-10 h-0.5 bg-cyan-500 mt-2"></div>
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 lg:gap-4 xl:gap-8 px-0 md:px-4"
            >
              {filteredTerms.map((term, index) => {
                const color = circleColors[index % circleColors.length];
                const Icon = circleIcons[index % circleIcons.length];
                
                // Update connector logic for 5 items per row
                const getConnectorClassesFor5 = (index: number, total: number) => {
                  if (index === total - 1) return 'hidden'; // Last item never has a connector
                  
                  // Mobile (1 column): hide all connectors
                  const mobileClass = 'hidden sm:flex';
                  
                  // Tablet (2 columns): hide on every 2nd item
                  const tabletClass = (index + 1) % 2 === 0 ? 'sm:hidden lg:flex' : '';
                  
                  // Desktop (5 columns): hide on every 5th item
                  const desktopClass = (index + 1) % 5 === 0 ? 'lg:hidden' : '';
                  
                  return `${mobileClass} ${tabletClass} ${desktopClass}`;
                };

                return (
                  <div key={term.id} className="relative flex justify-center items-center w-full">
                    {/* Connector Lines */}
                    <div className={`absolute top-1/2 -right-4 sm:-right-6 lg:-right-4 xl:-right-8 w-4 sm:w-6 lg:w-4 xl:w-8 h-4 -translate-y-1/2 z-0 flex-col justify-center gap-1.5 ${getConnectorClassesFor5(index, filteredTerms.length)}`}>
                      <div className={`w-full h-[3px] md:h-[4px] ${color.line}`}></div>
                      <div className={`w-full h-[3px] md:h-[4px] ${color.line}`}></div>
                    </div>

                    <motion.button 
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", damping: 20, stiffness: 100, delay: index * 0.05 }}
                      onClick={() => onCategorySelect(term)}
                      className={`relative w-full max-w-[320px] lg:max-w-full aspect-square rounded-full border-[8px] md:border-[12px] ${color.border} bg-white flex flex-col items-center justify-center p-6 md:p-8 text-center group z-10 shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/50`}
                    >
                      {/* Premium Loader Animation Rings */}
                      <div 
                        className={`absolute inset-[-12px] md:inset-[-18px] rounded-full border-[2px] md:border-[3px] border-transparent ${color.text} opacity-60 animate-[spin_3s_linear_infinite] pointer-events-none`}
                        style={{ borderTopColor: 'currentColor', borderRightColor: 'currentColor' }}
                      ></div>
                      <div 
                        className={`absolute inset-[-16px] md:inset-[-24px] rounded-full border-[1px] border-dashed ${color.text} opacity-30 animate-[spin_8s_linear_infinite_reverse] pointer-events-none`}
                        style={{ borderColor: 'currentColor' }}
                      ></div>
                      <div 
                        className={`absolute inset-[-20px] md:inset-[-30px] rounded-full border-[1px] border-transparent ${color.text} opacity-40 animate-[spin_5s_linear_infinite] pointer-events-none`}
                        style={{ borderBottomColor: 'currentColor', borderLeftColor: 'currentColor' }}
                      >
                        <div className={`absolute bottom-[14%] right-[14%] w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${color.line} shadow-[0_0_8px_currentColor]`}></div>
                      </div>

                      {/* Inner dashed ring */}
                      <div className="absolute inset-1 border border-dashed border-slate-200 rounded-full pointer-events-none"></div>

                      <div className={`mb-2 md:mb-4 ${color.text} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
                      </div>
                      
                      <h3 className="text-slate-900 font-black text-sm md:text-base uppercase tracking-widest mb-2 md:mb-3 line-clamp-2 px-2">
                        {term.title}
                      </h3>
                      
                      <div className="w-12 h-[2px] bg-slate-200 mb-2 md:mb-3"></div>
                      
                      <p className="text-xs md:text-sm text-slate-500 leading-relaxed line-clamp-4 px-2 md:px-4 font-medium">
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


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Settings, Lightbulb, Rocket, BarChart, Target, Factory, ShieldCheck, Wrench, CalendarClock, Box, Truck, Users, DollarSign, Monitor, ShieldAlert, Info } from 'lucide-react';
import { GlossaryTerm, Language, DepartmentDetail, PageView } from '../types';
import { getTermDefinition } from '../services/geminiService';
import Markdown from 'react-markdown';
import T5SDetail from './T5SDetail';
import PPEDetail from './PPEDetail';
import WIDetail from './WIDetail';
import TimeManagementDetail from './TimeManagementDetail';
import ProductivityDetail from './ProductivityDetail';
import QualityDetail from './QualityDetail';
import ManpowerDetail from './ManpowerDetail';
import MaterialHandlingDetail from './MaterialHandlingDetail';
import SLEDetail from './SLEDetail';
import OEEDetail from './OEEDetail';
import LOBDetail from './LOBDetail';
import ManufacturingLossDetail from './ManufacturingLossDetail';
import ValueAnalysisDetail from './ValueAnalysisDetail';
import FourPrinciplesDetail from './FourPrinciplesDetail';
import QualityManagementDetail from './QualityManagementDetail';
import KaizenPokaYokeDetail from './KaizenPokaYokeDetail';
import FMEADMAICDetail from './FMEADMAICDetail';
import ControlPlanDetail from './ControlPlanDetail';
import APQPPPAPDetail from './APQPPPAPDetail';
import ProcessEngineeringDetail from './ProcessEngineeringDetail';
import MaintenanceDetail from './MaintenanceDetail';
import PlanningDetail from './PlanningDetail';
import StoreInventoryDetail from './StoreInventoryDetail';
import PurchaseProcurementDetail from './PurchaseProcurementDetail';
import LogisticsDetail from './LogisticsDetail';
import RDDesignDetail from './RDDesignDetail';
import HRAdminDetail from './HRAdminDetail';
import FinanceDetail from './FinanceDetail';
import ITSystemsDetail from './ITSystemsDetail';
import EHSDetail from './EHSDetail';
import SMEDDetail from './SMEDDetail';
import AndonDetail from './AndonDetail';
import JITKanbanPullDetail from './JITKanbanPullDetail';
import ImprovementPrincipleDetail from './ImprovementPrincipleDetail';

interface SubCategoryListProps {
  category: GlossaryTerm;
  translations: any;
  lang: Language;
  onBack: () => void;
  initialSubItem?: string | null;
  initialPoint?: string | null;
}

const SubCategoryList: React.FC<SubCategoryListProps> = ({ 
  category, translations, lang, onBack, 
  initialSubItem = null, initialPoint = null 
}) => {
  const [selectedSubItem, setSelectedSubItem] = useState<string | null>(initialSubItem);
  const [selectedPoint, setSelectedPoint] = useState<string | null>(initialPoint);
  const [activeDeepDive, setActiveDeepDive] = useState<string | null>(null);
  const [pointData, setPointData] = useState<{ title: string; definition: string; category: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Use effect to handle initial deep dives if provided
  React.useEffect(() => {
    const fetchInitialData = async () => {
      if (initialPoint) {
        setIsLoading(true);
        try {
          const data = await getTermDefinition(initialPoint, lang);
          setPointData(data);
        } catch (err) {
          console.error("Error fetching point detail:", err);
          setPointData({
            title: initialPoint,
            definition: lang === 'hi' ? 'क्षमा करें, इस बिंदु का विवरण अभी उपलब्ध नहीं है।' : 'Sorry, the detailed explanation for this point is currently unavailable.',
            category: category.category
          });
        } finally {
          setIsLoading(false);
        }
      }
      
      // Check if there's a deep dive in the current history state
      const state = window.history.state;
      if (state && state.deepDive) {
        setActiveDeepDive(state.deepDive);
      }
    };
    
    fetchInitialData();
  }, []);

  React.useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const state = event.state;
      if (state && (state.view === PageView.CATEGORY_DETAIL || state.view === 'CATEGORY_DETAIL')) {
        setSelectedSubItem(state.subItem || null);
        
        const newPoint = state.point || null;
        setSelectedPoint(newPoint);
        setActiveDeepDive(state.deepDive || null);
        
        if (newPoint) {
           // Fetch data for the new point if it changed via popstate
           setIsLoading(true);
           getTermDefinition(newPoint, lang).then(data => {
             setPointData(data);
             setIsLoading(false);
           }).catch(err => {
             console.error("Error fetching point detail:", err);
             setPointData({
               title: newPoint,
               definition: lang === 'hi' ? 'क्षमा करें, इस बिंदु का विवरण अभी उपलब्ध नहीं है।' : 'Sorry, the detailed explanation for this point is currently unavailable.',
               category: category.category
             });
             setIsLoading(false);
           });
        } else {
           setPointData(null);
        }
      } else if (!state || state.view === PageView.GLOSSARY || state.view === PageView.HOME) {
        // If we go back to a state that doesn't have CATEGORY_DETAIL, 
        // App.tsx will handle it, but we should clear our local state just in case
        setSelectedPoint(null);
        setActiveDeepDive(null);
        setPointData(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [lang, category.category]); // Removed selectedPoint from dependencies

  const pushHistoryState = (updates: any) => {
    const currentState = window.history.state || {};
    const newState = {
      ...currentState,
      view: PageView.CATEGORY_DETAIL,
      categoryId: category.id, // Ensure categoryId is always preserved
      subItem: updates.subItem !== undefined ? updates.subItem : selectedSubItem,
      point: updates.point !== undefined ? updates.point : selectedPoint,
      deepDive: updates.deepDive !== undefined ? updates.deepDive : activeDeepDive,
    };
    
    let url = `?view=${PageView.CATEGORY_DETAIL}&categoryId=${category.id}`;
    if (newState.subItem) url += `&subItem=${encodeURIComponent(newState.subItem)}`;
    if (newState.point) url += `&point=${encodeURIComponent(newState.point)}`;
    
    window.history.pushState(newState, '', url);
  };

  const handleSubItemClick = (item: string) => {
    // Specialized Routing
    let deepDive = null;
    if (item.includes('Quality') || item.includes('क्वालिटी')) deepDive = 'QualityDept';
    else if (item.includes('Process Engineering') || item.includes('प्रोसेस इंजीनियरिंग')) deepDive = 'ProcessEng';
    else if (item.includes('Maintenance') || item.includes('मेंटेनेंस')) deepDive = 'Maintenance';
    else if (item.includes('Planning') || item.includes('प्लानिंग')) deepDive = 'Planning';
    else if (item.includes('Store') || item.includes('Inventory') || item.includes('Warehouse')) deepDive = 'Store';
    else if (item.includes('Purchase') || item.includes('Procurement') || item.includes('परचेज')) deepDive = 'Purchase';
    else if (item.includes('Logistics') || item.includes('Dispatch') || item.includes('लॉजिस्टिक्स')) deepDive = 'Logistics';
    else if (item.includes('R&D') || item.includes('Design') || item.includes('डिज़ाइन')) deepDive = 'RD';
    else if (item.includes('HR') || item.includes('Admin') || item.includes('एडमिन')) deepDive = 'HR';
    else if (item.includes('Finance') || item.includes('Accounts') || item.includes('फाइनेंस')) deepDive = 'Finance';
    else if (item.includes('IT') || item.includes('Systems') || item.includes('MIS')) deepDive = 'IT';
    else if (item.includes('EHS') || item.includes('Safety') || item.includes('सुरक्षा')) deepDive = 'EHS';

    if (deepDive) {
      setActiveDeepDive(deepDive);
      pushHistoryState({ deepDive });
      return;
    }

    setSelectedSubItem(item);
    setSelectedPoint(null);
    setPointData(null);
    pushHistoryState({ subItem: item, point: null, deepDive: null });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePointClick = async (point: string) => {
    let deepDive = null;
    if (point.includes('T5S')) deepDive = 'T5S';
    else if (point.includes('PPE')) deepDive = 'PPE';
    else if (point.includes('Work Instruction') || point.includes('Work Standard') || point.includes('OPL')) deepDive = 'WI';
    else if (point.includes('Time Management') || point.includes('Cycle Time') || point.includes('Takt Time') || point.includes('Lead Time') || point.includes('Bottle Neck')) deepDive = 'Time';
    else if (point.includes('UPH') || point.includes('UPPH') || point.includes('Idle Time')) deepDive = 'Productivity';
    else if (point.includes('Rejection') || point.includes('Rework') || point.includes('SSI')) deepDive = 'Quality';
    else if (point.includes('Manpower Handling') || point.includes('Attendance') || point.includes('Skill Mapping')) deepDive = 'Manpower';
    else if (point.includes('Material Handling') || point.includes('Inventory') || point.includes('FIFO')) deepDive = 'Material';
    else if (point.includes('4M') || point.includes('SLE-50') || point.includes('Loss Elimination') || point.includes('Safety improvement')) deepDive = 'SLE';
    else if (point.includes('OEE') || point.includes('Overall Equipment Effectiveness')) deepDive = 'OEE';
    else if (point.includes('LOB') || point.includes('Line of Balancing')) deepDive = 'LOB';
    else if (point.includes('Manufacturing Loss') || point.includes('Wastages') || point.includes('Waste Management')) deepDive = 'Loss';
    else if (point.includes('Value Analysis') || point.includes('VA') || point.includes('ENVA') || point.includes('NVA')) deepDive = 'VA';
    else if (point.includes('Four Principles of Improvement') || point.includes('सुधार के चार सिद्धांत')) deepDive = 'Principles';
    else if (point.includes('Kaizen') || point.includes('Poka-Yoke') || point.includes('काइज़न') || point.includes('पोका-योक')) deepDive = 'Kaizen';
    else if (point.includes('FMEA') || point.includes('DMAIC')) deepDive = 'FMEA';
    else if (point.includes('Control Plan')) deepDive = 'ControlPlan';
    else if (point.includes('APQP') || point.includes('PPAP')) deepDive = 'APQPPPAP';
    else if (point.includes('SMED')) deepDive = 'SMED';
    else if (point.includes('Andon')) deepDive = 'Andon';
    else if (point.includes('JIT') || point.includes('Kanban') || point.includes('Pull System')) deepDive = 'JIT';
    else if (point.includes('Improvement Principle') || point.includes('सुधार सिद्धांत')) deepDive = 'Improvement';

    if (deepDive) {
      setActiveDeepDive(deepDive);
      pushHistoryState({ deepDive });
      return;
    }

    setSelectedPoint(point);
    pushHistoryState({ point, deepDive: null });
    setIsLoading(true);
    setPointData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    try {
      const data = await getTermDefinition(point, lang);
      setPointData(data);
    } catch (err) {
      console.error("Error fetching point detail:", err);
      setPointData({
        title: point,
        definition: lang === 'hi' ? 'क्षमा करें, इस बिंदु का विवरण अभी उपलब्ध नहीं है।' : 'Sorry, the detailed explanation for this point is currently unavailable.',
        category: category.category
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackFromDeepDive = () => {
    window.history.back();
  };

  if (activeDeepDive === 'T5S') return <T5SDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'PPE') return <PPEDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'WI') return <WIDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'Time') return <TimeManagementDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'Productivity') return <ProductivityDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'Quality') return <QualityDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'Manpower') return <ManpowerDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'Material') return <MaterialHandlingDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'SLE') return <SLEDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'OEE') return <OEEDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'LOB') return <LOBDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'Loss') return <ManufacturingLossDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'VA') return <ValueAnalysisDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'Principles') return <FourPrinciplesDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'QualityDept') return <QualityManagementDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'Kaizen') return <KaizenPokaYokeDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'FMEA') return <FMEADMAICDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'ControlPlan') return <ControlPlanDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'APQPPPAP') return <APQPPPAPDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'SMED') return <SMEDDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'Andon') return <AndonDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'JIT') return <JITKanbanPullDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'Improvement') return <ImprovementPrincipleDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'ProcessEng') return <ProcessEngineeringDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'Maintenance') return <MaintenanceDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'Planning') return <PlanningDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'Store') return <StoreInventoryDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'Purchase') return <PurchaseProcurementDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'Logistics') return <LogisticsDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'RD') return <RDDesignDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'HR') return <HRAdminDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'Finance') return <FinanceDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'IT') return <ITSystemsDetail onBack={handleBackFromDeepDive} lang={lang} />;
  if (activeDeepDive === 'EHS') return <EHSDetail onBack={handleBackFromDeepDive} lang={lang} />;

  const getIconForSubItem = (item: string) => {
    const lowerItem = item.toLowerCase();
    if (lowerItem.includes('production') || lowerItem.includes('प्रोडक्शन')) return Factory;
    if (lowerItem.includes('quality') || lowerItem.includes('क्वालिटी')) return ShieldCheck;
    if (lowerItem.includes('process') || lowerItem.includes('प्रोसेस')) return Settings;
    if (lowerItem.includes('maintenance') || lowerItem.includes('मेंटेनेंस')) return Wrench;
    if (lowerItem.includes('planning') || lowerItem.includes('प्लानिंग')) return CalendarClock;
    if (lowerItem.includes('store') || lowerItem.includes('inventory') || lowerItem.includes('स्टोर')) return Box;
    if (lowerItem.includes('purchase') || lowerItem.includes('खरीद')) return DollarSign;
    if (lowerItem.includes('logistics') || lowerItem.includes('लॉजिस्टिक्स')) return Truck;
    if (lowerItem.includes('r&d') || lowerItem.includes('design') || lowerItem.includes('डिज़ाइन')) return Lightbulb;
    if (lowerItem.includes('hr') || lowerItem.includes('admin') || lowerItem.includes('एडमिन')) return Users;
    if (lowerItem.includes('finance') || lowerItem.includes('accounts') || lowerItem.includes('फाइनेंस')) return BarChart;
    if (lowerItem.includes('it') || lowerItem.includes('systems')) return Monitor;
    if (lowerItem.includes('ehs') || lowerItem.includes('safety') || lowerItem.includes('सुरक्षा')) return ShieldAlert;
    return Target;
  };

  const selectedDetail = selectedSubItem && category.details ? category.details[selectedSubItem] : null;

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-16">
      {!selectedSubItem && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.3)] animate-[scan_6s_linear_infinite]"></div>
            <style>{`
                @keyframes scan {
                    0% { top: -5%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 105%; opacity: 0; }
                }
            `}</style>
        </div>
      )}
      <div className="mb-4 md:mb-8 flex items-center gap-2 md:gap-3 text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] md:tracking-[0.5em] bg-slate-950/80 w-fit max-w-full px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-white/10 shadow-2xl backdrop-blur-md relative z-10 overflow-x-auto no-scrollbar whitespace-nowrap">
        <button onClick={onBack} className="text-slate-500 hover:text-white transition-colors flex-shrink-0 focus:outline-none focus-visible:text-white focus-visible:underline">{category.category}</button>
        <span className="text-slate-800">/</span>
        <button onClick={() => { setSelectedSubItem(null); setSelectedPoint(null); pushHistoryState({ subItem: null, point: null, deepDive: null }); }} className={`transition-colors flex-shrink-0 focus:outline-none focus-visible:underline ${!selectedSubItem ? 'text-cyan-400' : 'text-slate-500 hover:text-white'}`}>
            {category.title}
        </button>
        {selectedSubItem && (
            <>
                <span className="text-slate-800">/</span>
                <button onClick={() => { 
                  if (selectedPoint || activeDeepDive) {
                    window.history.back();
                  } else {
                    setSelectedPoint(null); 
                    pushHistoryState({ point: null, deepDive: null }); 
                  }
                }} className={`transition-colors flex-shrink-0 focus:outline-none focus-visible:underline ${!selectedPoint ? 'text-cyan-400' : 'text-slate-500 hover:text-white'}`}>
                    {selectedSubItem}
                </button>
            </>
        )}
        {selectedPoint && (
            <>
                <span className="text-slate-800">/</span>
                <span className="text-cyan-400 flex-shrink-0">{selectedPoint}</span>
            </>
        )}
      </div>

      <AnimatePresence>
        {selectedPoint ? (
          <motion.div 
            key="point-detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto px-4 md:px-0"
          >
          <div className="mb-6 md:mb-8 flex flex-col sm:flex-row justify-end items-start sm:items-center gap-4">
            <div className="text-[8px] md:text-[9px] font-black text-cyan-500 uppercase tracking-[0.4em] bg-cyan-500/10 px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-cyan-500/20 shadow-inner">
               {selectedSubItem} / {lang === 'hi' ? 'तकनीकी विवरण' : 'Technical View'}
            </div>
          </div>

          {isLoading ? (
            <div className="h-64 md:h-[400px] flex flex-col items-center justify-center bg-slate-950/40 rounded-3xl md:rounded-[40px] border border-white/5 shadow-2xl backdrop-blur-xl">
               <div className="relative w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6">
                  <div className="absolute inset-0 border-4 border-cyan-500/10 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-t-cyan-500 rounded-full animate-spin"></div>
               </div>
               <p className="text-cyan-400 text-[8px] md:text-xs font-black uppercase tracking-[0.5em] animate-pulse">Loading Intel...</p>
            </div>
          ) : pointData ? (
            <div className="space-y-6 md:space-y-8">
               <div className="relative bg-slate-900/80 border border-cyan-500/30 p-8 md:p-16 rounded-3xl md:rounded-[48px] shadow-2xl overflow-hidden backdrop-blur-3xl group">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-cyan-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-6 md:mb-8">
                       Highlighted Concept
                    </div>
                    <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-8 md:mb-10 drop-shadow-2xl">
                       {pointData.title}
                    </h2>
                    <div className="h-1 w-24 md:h-1.5 md:w-32 bg-gradient-to-r from-cyan-500 to-transparent mb-8 md:mb-12 rounded-full"></div>
                    
                    <div className="bg-white/5 p-6 md:p-12 rounded-2xl md:rounded-[32px] border border-white/10 shadow-inner">
                       <div className="text-slate-100 text-lg md:text-2xl leading-relaxed font-bold prose prose-invert max-w-none">
                          <Markdown>{pointData.definition}</Markdown>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          ) : null}
        </motion.div>
        ) : selectedDetail ? (
          <motion.div 
            key="detail-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto flex flex-col gap-4 md:gap-6 px-4 md:px-0"
          >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-cyan-500/30 pb-4 bg-slate-950/20 p-4 rounded-t-2xl">
            <div className="flex items-center gap-3 md:gap-4">
               <div className="w-8 h-8 md:w-10 md:h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
               </div>
               <div className="min-w-0">
                  <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none truncate">{selectedDetail.name}</h3>
                  <p className="text-cyan-500 text-[7px] md:text-[8px] font-black uppercase tracking-[0.4em] mt-1">Operational Dashboard / {selectedDetail.id}</p>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 items-start">
            <div className="lg:col-span-4 flex flex-col gap-4 md:gap-6 order-2 lg:order-1">
              <div className="bg-slate-900/60 border border-cyan-500/20 p-5 md:p-6 rounded-2xl relative overflow-hidden backdrop-blur-xl shadow-xl">
                <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500"></div>
                <h4 className="text-cyan-400 text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] mb-3">{translations.mainRole}</h4>
                <p className="text-white text-xs md:text-base font-bold leading-snug">"{selectedDetail.role}"</p>
              </div>
              <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-5 md:p-6 shadow-xl backdrop-blur-xl">
                <h4 className="text-white text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-cyan-500"></span>
                  {translations.responsibleTeam}
                </h4>
                <div className="flex flex-col gap-2">
                  {selectedDetail.responsiblePersons.map((person, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 px-3 md:px-4 rounded-xl bg-white/5 border border-white/5 hover:bg-cyan-500/10 transition-all text-left">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 text-[9px] font-black flex-shrink-0">
                        {idx + 1}
                      </div>
                      <span className="text-slate-300 font-bold text-[9px] md:text-[10px] uppercase tracking-wider">{person}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 bg-slate-900/40 border border-white/10 rounded-2xl p-5 md:p-8 shadow-2xl backdrop-blur-xl order-1 lg:order-2">
              <div className="flex items-center justify-between mb-4 md:mb-6 border-b border-white/5 pb-4">
                 <h4 className="text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                   <span className="w-6 md:w-8 h-0.5 bg-cyan-500"></span>
                   {translations.coreOperationalPoints}
                 </h4>
                 <span className="hidden sm:inline-block text-cyan-500 text-[7px] font-black uppercase tracking-[0.5em] bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">Live System Map</span>
              </div>
              <div className="space-y-6">
                {selectedDetail.responsibilities.map((group, idx) => (
                  <div key={idx} className="space-y-4">
                    {group.groupName && (
                      <h5 className="text-cyan-400 font-black text-[8px] md:text-[9px] uppercase tracking-[0.3em] mb-2 flex items-center gap-2 opacity-70">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                        {group.groupName}
                      </h5>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-3">
                      {group.items.map((item, i) => (
                        <button 
                          key={i} 
                          onClick={() => handlePointClick(item)}
                          className="group/point relative text-left bg-slate-950/40 p-2.5 md:p-3.5 rounded-lg md:rounded-xl border border-white/5 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-200 shadow-lg flex items-start gap-2.5 md:gap-3 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover/point:opacity-100 transition-opacity"></div>
                          <div className="relative z-10 w-5 h-5 md:w-7 md:h-7 flex-shrink-0 bg-slate-800 border border-white/10 rounded-md md:rounded-lg flex items-center justify-center text-cyan-400 group-hover/point:bg-cyan-500 group-hover/point:text-white transition-all text-[7px] md:text-[8px] font-black">
                            {i + 1 < 10 ? `0${i + 1}` : i + 1}
                          </div>
                          <div className="relative z-10 flex-grow min-w-0">
                            <span className="block text-slate-100 text-[9px] md:text-[11px] font-bold uppercase tracking-tight leading-tight group-hover:text-white transition-colors">
                              {item}
                            </span>
                            <div className="h-0.5 w-0 bg-cyan-500 group-hover/point:w-full transition-all duration-300 mt-1 md:mt-1.5 opacity-50"></div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 md:px-6 py-3 bg-slate-950/60 rounded-xl border border-white/5 text-[7px] md:text-[8px] font-black uppercase tracking-[0.4em] text-slate-500">
              <div className="flex gap-4 md:gap-6">
                 <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    Node Active
                 </span>
                 <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    Safe Connection
                 </span>
              </div>
              <div className="text-center sm:text-right">Industrial Hub v2.5 // Dashboard Refined</div>
          </div>
        </motion.div>
        ) : (
          <motion.div 
            key="sub-category-list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative z-10"
          >
            <div className="mb-6 md:mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-6">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-2 md:mb-3">
                        <div className="w-1 h-4 md:h-6 bg-cyan-500"></div>
                        <span className="text-cyan-500 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em]">Directory v2.5</span>
                    </div>
                    <h2 className="text-xl md:text-5xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-3 md:mb-6 drop-shadow-2xl">
                      {category.title}
                    </h2>
                </div>
                <div className="hidden lg:flex flex-col items-end gap-2 border-r-2 border-cyan-500/30 pr-6 h-fit">
                    <span className="text-white font-black text-2xl leading-none">{category.subItems.length}</span>
                    <span className="text-cyan-500 text-[8px] font-black uppercase tracking-widest">Active Units</span>
                </div>
            </div>

            {category.description && (
                <div className="flex items-center mb-10 relative drop-shadow-xl group">
                    {/* Hexagon Container */}
                    <div className="relative z-10 w-24 h-28 md:w-28 md:h-32 shrink-0">
                        {/* White Border Hexagon */}
                        <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
                        {/* Inner Cyan Hexagon */}
                        <div className="absolute inset-[3px] md:inset-[4px] bg-cyan-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-105" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', perspective: '1000px' }}>
                            <div className="transition-all duration-700 ease-in-out group-hover:[transform:rotateY(360deg)]">
                                <Info className="text-white w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Banner */}
                    <div className="relative z-0 -ml-8 md:-ml-10 flex-1 bg-cyan-500 flex flex-col justify-center py-5 md:py-8 pr-10 md:pr-16 pl-14 md:pl-20 min-h-[6rem] md:min-h-[8rem]"
                         style={{ clipPath: 'polygon(0% 0%, calc(100% - 32px) 0%, 100% 50%, calc(100% - 32px) 100%, 0% 100%)' }}>
                        <h3 className="text-slate-900 font-black text-lg md:text-xl uppercase mb-2 tracking-wider">
                            {lang === 'hi' ? 'परिचय' : 'Introduction'}
                        </h3>
                        <p className="text-slate-900 font-semibold text-sm md:text-base leading-relaxed">
                            {category.description}
                        </p>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 mt-8">
                {category.subItems.map((item, idx) => {
                    const Icon = getIconForSubItem(item);
                    const cardColors = [
                      { bg: 'bg-[#1a9b6c]' },
                      { bg: 'bg-[#00669e]' },
                      { bg: 'bg-[#c2a31d]' },
                      { bg: 'bg-[#c91a4d]' },
                      { bg: 'bg-[#673ab7]' },
                    ];
                    const color = cardColors[idx % cardColors.length];
                    
                    return (
                    <motion.button
                        key={item}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSubItemClick(item)}
                        className={`group relative flex flex-col items-center justify-center w-full h-full min-h-[260px] py-8 md:py-10 ${color.bg} overflow-hidden transition-all duration-300 focus:outline-none shadow-lg`}
                    >
                        {/* Background Image Overlay */}
                        <div 
                            className="absolute inset-0 opacity-30 mix-blend-overlay bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                            style={{ backgroundImage: `url(https://picsum.photos/seed/${item.replace(/\s+/g, '')}/400/400)` }}
                        ></div>
                        
                        {/* Gradient Overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                        <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 md:p-6 w-full" style={{ perspective: '1000px' }}>
                            {/* Icon */}
                            <div className="mb-4 md:mb-5 text-white transition-all duration-700 ease-in-out group-hover:[transform:rotateY(360deg)_scale(1.1)]">
                                <Icon className="w-14 h-14 md:w-16 md:h-16 drop-shadow-md" strokeWidth={1.5} />
                            </div>

                            {/* Title */}
                            <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide text-center mb-2 md:mb-3">
                                {item}
                            </h4>

                            {/* Description / Role */}
                            {category.details && category.details[item] && (
                                <p className="text-xs md:text-sm text-white/90 font-medium text-center line-clamp-4">
                                    {category.details[item].role}
                                </p>
                            )}
                        </div>
                    </motion.button>
                )})}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SubCategoryList;

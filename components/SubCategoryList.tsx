
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GlossaryTerm, Language, DepartmentDetail } from '../types';
import { getTermDefinition } from '../services/geminiService';
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
  
  // Use effect to handle initial deep dives if provided
  React.useEffect(() => {
    if (initialSubItem) {
      handleSubItemClick(initialSubItem);
    }
    if (initialPoint) {
      handlePointClick(initialPoint);
    }
  }, []);
  const [showT5SDeepDive, setShowT5SDeepDive] = useState(false);
  const [showPPEDeepDive, setShowPPEDeepDive] = useState(false);
  const [showWIDeepDive, setShowWIDeepDive] = useState(false);
  const [showTimeDeepDive, setShowTimeDeepDive] = useState(false);
  const [showProductivityDeepDive, setShowProductivityDeepDive] = useState(false);
  const [showQualityDeepDive, setShowQualityDeepDive] = useState(false);
  const [showManpowerDeepDive, setShowManpowerDeepDive] = useState(false);
  const [showMaterialDeepDive, setShowMaterialDeepDive] = useState(false);
  const [showSLEDeepDive, setShowSLEDeepDive] = useState(false);
  const [showOEEDeepDive, setShowOEEDeepDive] = useState(false);
  const [showLOBDeepDive, setShowLOBDeepDive] = useState(false);
  const [showLossDeepDive, setShowLossDeepDive] = useState(false);
  const [showVADeepDive, setShowVADeepDive] = useState(false);
  const [showPrinciplesDeepDive, setShowPrinciplesDeepDive] = useState(false);
  const [showQualityDeptDeepDive, setShowQualityDeptDeepDive] = useState(false);
  const [showKaizenDeepDive, setShowKaizenDeepDive] = useState(false);
  const [showFMEADeepDive, setShowFMEADeepDive] = useState(false);
  const [showControlPlanDeepDive, setShowControlPlanDeepDive] = useState(false);
  const [showAPQPPPAPDeepDive, setShowAPQPPPAPDeepDive] = useState(false);
  const [showProcessEngDeepDive, setShowProcessEngDeepDive] = useState(false);
  const [showMaintenanceDeepDive, setShowMaintenanceDeepDive] = useState(false);
  const [showPlanningDeepDive, setShowPlanningDeepDive] = useState(false);
  const [showStoreDeepDive, setShowStoreDeepDive] = useState(false);
  const [showPurchaseDeepDive, setShowPurchaseDeepDive] = useState(false);
  const [showLogisticsDeepDive, setShowLogisticsDeepDive] = useState(false);
  const [showRDDeepDive, setShowRDDeepDive] = useState(false);
  const [showHRDeepDive, setShowHRDeepDive] = useState(false);
  const [showFinanceDeepDive, setShowFinanceDeepDive] = useState(false);
  const [showITDeepDive, setShowITDeepDive] = useState(false);
  const [showEHSDeepDive, setShowEHSDeepDive] = useState(false);
  const [pointData, setPointData] = useState<{ title: string; definition: string; category: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubItemClick = (item: string) => {
    // Specialized Routing
    if (item.includes('Quality') || item.includes('क्वालिटी')) {
      setShowQualityDeptDeepDive(true);
      return;
    }
    if (item.includes('Process Engineering') || item.includes('प्रोसेस इंजीनियरिंग')) {
      setShowProcessEngDeepDive(true);
      return;
    }
    if (item.includes('Maintenance') || item.includes('मेंटेनेंस')) {
      setShowMaintenanceDeepDive(true);
      return;
    }
    if (item.includes('Planning') || item.includes('प्लानिंग')) {
      setShowPlanningDeepDive(true);
      return;
    }
    if (item.includes('Store') || item.includes('Inventory') || item.includes('Warehouse')) {
      setShowStoreDeepDive(true);
      return;
    }
    if (item.includes('Purchase') || item.includes('Procurement') || item.includes('परचेज')) {
      setShowPurchaseDeepDive(true);
      return;
    }
    if (item.includes('Logistics') || item.includes('Dispatch') || item.includes('लॉजिस्टिक्स')) {
      setShowLogisticsDeepDive(true);
      return;
    }
    if (item.includes('R&D') || item.includes('Design') || item.includes('डिज़ाइन')) {
      setShowRDDeepDive(true);
      return;
    }
    if (item.includes('HR') || item.includes('Admin') || item.includes('एडमिन')) {
      setShowHRDeepDive(true);
      return;
    }
    if (item.includes('Finance') || item.includes('Accounts') || item.includes('फाइनेंस')) {
      setShowFinanceDeepDive(true);
      return;
    }
    if (item.includes('IT') || item.includes('Systems') || item.includes('MIS')) {
      setShowITDeepDive(true);
      return;
    }
    if (item.includes('EHS') || item.includes('Safety') || item.includes('सुरक्षा')) {
      setShowEHSDeepDive(true);
      return;
    }
    setSelectedSubItem(item);
    setSelectedPoint(null);
    setPointData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePointClick = async (point: string) => {
    if (point.includes('T5S')) {
      setShowT5SDeepDive(true);
      return;
    }
    if (point.includes('PPE')) {
      setShowPPEDeepDive(true);
      return;
    }
    if (point.includes('Work Instruction') || point.includes('Work Standard') || point.includes('OPL')) {
      setShowWIDeepDive(true);
      return;
    }
    if (point.includes('Time Management') || point.includes('Cycle Time') || point.includes('Takt Time') || point.includes('Lead Time') || point.includes('Bottle Neck')) {
      setShowTimeDeepDive(true);
      return;
    }
    if (point.includes('UPH') || point.includes('UPPH') || point.includes('Idle Time')) {
      setShowProductivityDeepDive(true);
      return;
    }
    if (point.includes('Rejection') || point.includes('Rework') || point.includes('SSI')) {
      setShowQualityDeepDive(true);
      return;
    }
    if (point.includes('Manpower Handling') || point.includes('Attendance') || point.includes('Skill Mapping')) {
      setShowManpowerDeepDive(true);
      return;
    }
    if (point.includes('Material Handling') || point.includes('Inventory') || point.includes('FIFO')) {
      setShowMaterialDeepDive(true);
      return;
    }
    if (point.includes('4M') || point.includes('SLE-50') || point.includes('Loss Elimination') || point.includes('Safety improvement')) {
      setShowSLEDeepDive(true);
      return;
    }
    if (point.includes('OEE') || point.includes('Overall Equipment Effectiveness')) {
      setShowOEEDeepDive(true);
      return;
    }
    if (point.includes('LOB') || point.includes('Line of Balancing')) {
      setShowLOBDeepDive(true);
      return;
    }
    if (point.includes('Manufacturing Loss') || point.includes('Wastages') || point.includes('Waste Management')) {
      setShowLossDeepDive(true);
      return;
    }
    if (point.includes('Value Analysis') || point.includes('VA') || point.includes('ENVA') || point.includes('NVA')) {
      setShowVADeepDive(true);
      return;
    }
    if (point.includes('Four Principles of Improvement') || point.includes('सुधार के चार सिद्धांत')) {
      setShowPrinciplesDeepDive(true);
      return;
    }
    if (point.includes('Kaizen') || point.includes('Poka-Yoke') || point.includes('काइज़न') || point.includes('पोका-योक')) {
      setShowKaizenDeepDive(true);
      return;
    }
    if (point.includes('FMEA') || point.includes('DMAIC')) {
      setShowFMEADeepDive(true);
      return;
    }
    if (point.includes('Control Plan')) {
      setShowControlPlanDeepDive(true);
      return;
    }
    if (point.includes('APQP') || point.includes('PPAP')) {
      setShowAPQPPPAPDeepDive(true);
      return;
    }

    setSelectedPoint(point);
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

  if (showT5SDeepDive) return <T5SDetail onBack={() => setShowT5SDeepDive(false)} lang={lang} />;
  if (showPPEDeepDive) return <PPEDetail onBack={() => setShowPPEDeepDive(false)} lang={lang} />;
  if (showWIDeepDive) return <WIDetail onBack={() => setShowWIDeepDive(false)} lang={lang} />;
  if (showTimeDeepDive) return <TimeManagementDetail onBack={() => setShowTimeDeepDive(false)} lang={lang} />;
  if (showProductivityDeepDive) return <ProductivityDetail onBack={() => setShowProductivityDeepDive(false)} lang={lang} />;
  if (showQualityDeepDive) return <QualityDetail onBack={() => setShowQualityDeepDive(false)} lang={lang} />;
  if (showManpowerDeepDive) return <ManpowerDetail onBack={() => setShowManpowerDeepDive(false)} lang={lang} />;
  if (showMaterialDeepDive) return <MaterialHandlingDetail onBack={() => setShowMaterialDeepDive(false)} lang={lang} />;
  if (showSLEDeepDive) return <SLEDetail onBack={() => setShowSLEDeepDive(false)} lang={lang} />;
  if (showOEEDeepDive) return <OEEDetail onBack={() => setShowOEEDeepDive(false)} lang={lang} />;
  if (showLOBDeepDive) return <LOBDetail onBack={() => setShowLOBDeepDive(false)} lang={lang} />;
  if (showLossDeepDive) return <ManufacturingLossDetail onBack={() => setShowLossDeepDive(false)} lang={lang} />;
  if (showVADeepDive) return <ValueAnalysisDetail onBack={() => setShowVADeepDive(false)} lang={lang} />;
  if (showPrinciplesDeepDive) return <FourPrinciplesDetail onBack={() => setShowPrinciplesDeepDive(false)} lang={lang} />;
  if (showQualityDeptDeepDive) return <QualityManagementDetail onBack={() => setShowQualityDeptDeepDive(false)} lang={lang} />;
  if (showKaizenDeepDive) return <KaizenPokaYokeDetail onBack={() => setShowKaizenDeepDive(false)} lang={lang} />;
  if (showFMEADeepDive) return <FMEADMAICDetail onBack={() => setShowFMEADeepDive(false)} lang={lang} />;
  if (showControlPlanDeepDive) return <ControlPlanDetail onBack={() => setShowControlPlanDeepDive(false)} lang={lang} />;
  if (showAPQPPPAPDeepDive) return <APQPPPAPDetail onBack={() => setShowAPQPPPAPDeepDive(false)} lang={lang} />;
  if (showProcessEngDeepDive) return <ProcessEngineeringDetail onBack={() => setShowProcessEngDeepDive(false)} lang={lang} />;
  if (showMaintenanceDeepDive) return <MaintenanceDetail onBack={() => setShowMaintenanceDeepDive(false)} lang={lang} />;
  if (showPlanningDeepDive) return <PlanningDetail onBack={() => setShowPlanningDeepDive(false)} lang={lang} />;
  if (showStoreDeepDive) return <StoreInventoryDetail onBack={() => setShowStoreDeepDive(false)} lang={lang} />;
  if (showPurchaseDeepDive) return <PurchaseProcurementDetail onBack={() => setShowPurchaseDeepDive(false)} lang={lang} />;
  if (showLogisticsDeepDive) return <LogisticsDetail onBack={() => setShowLogisticsDeepDive(false)} lang={lang} />;
  if (showRDDeepDive) return <RDDesignDetail onBack={() => setShowRDDeepDive(false)} lang={lang} />;
  if (showHRDeepDive) return <HRAdminDetail onBack={() => setShowHRDeepDive(false)} lang={lang} />;
  if (showFinanceDeepDive) return <FinanceDetail onBack={() => setShowFinanceDeepDive(false)} lang={lang} />;
  if (showITDeepDive) return <ITSystemsDetail onBack={() => setShowITDeepDive(false)} lang={lang} />;
  if (showEHSDeepDive) return <EHSDetail onBack={() => setShowEHSDeepDive(false)} lang={lang} />;

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
        <button onClick={() => { setSelectedSubItem(null); setSelectedPoint(null); }} className={`transition-colors flex-shrink-0 focus:outline-none focus-visible:underline ${!selectedSubItem ? 'text-cyan-400' : 'text-slate-500 hover:text-white'}`}>
            {category.title}
        </button>
        {selectedSubItem && (
            <>
                <span className="text-slate-800">/</span>
                <button onClick={() => setSelectedPoint(null)} className={`transition-colors flex-shrink-0 focus:outline-none focus-visible:underline ${!selectedPoint ? 'text-cyan-400' : 'text-slate-500 hover:text-white'}`}>
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
                       <p className="text-slate-100 text-lg md:text-2xl leading-relaxed font-bold">
                          "{pointData.definition}"
                       </p>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                {category.subItems.map((item, idx) => (
                    <motion.button
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSubItemClick(item)}
                        className="group relative bg-slate-900/40 border border-white/5 p-4 md:p-6 rounded-xl md:rounded-2xl text-left hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all duration-500 shadow-xl backdrop-blur-md flex flex-col min-h-[90px] md:min-h-[140px] justify-between overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
                    >
                        <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-cyan-500/5 blur-[30px] md:blur-[40px] rounded-full group-hover:bg-cyan-500/15 transition-all"></div>
                        <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 text-5xl md:text-7xl font-black text-white/[0.03] leading-none select-none">
                            {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2 md:mb-4 opacity-40 group-hover:opacity-100 transition-opacity">
                                <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-cyan-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
                                <span className="text-[6px] md:text-[7px] font-black text-cyan-500 uppercase tracking-[0.2em] md:tracking-[0.3em]">UNIT: {idx + 800}</span>
                            </div>
                            <h4 className="text-sm md:text-xl font-black text-white uppercase tracking-tight mb-1 md:mb-2 group-hover:text-cyan-400 transition-colors leading-tight">
                                {item}
                            </h4>
                        </div>
                        <div className="relative z-10 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-cyan-400 text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] group-hover:gap-4 transition-all">
                                {lang === 'hi' ? 'एक्सेस' : 'Access Unit'}
                                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                            <div className="w-4 h-[1px] bg-white/10 group-hover:w-8 md:group-hover:w-12 group-hover:bg-cyan-500 transition-all"></div>
                        </div>
                    </motion.button>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SubCategoryList;

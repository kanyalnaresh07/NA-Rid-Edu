
import React from 'react';
import { Language } from '../types';

interface PPCSectionDetailProps {
  sectionId: number;
  onBack: () => void;
  lang: Language;
}

const PPCSectionDetail: React.FC<PPCSectionDetailProps> = ({ sectionId, onBack, lang }) => {
  const translations = {
    en: {
      back: "Back to PPC Grid",
      objective: "Strategic Objective",
      checklist: "Operation Checklist",
      kpi: "Critical Metric (KPI)",
      impact: "Business Impact",
      sections: [
        {
          id: 1,
          title: "Demand Planning",
          obj: "To identify the future load on the factory by analyzing actual orders and market trends.",
          details: [
            { h: "Customer Order Analysis", d: "Breaking down the bulk orders into SKU level requirements for the production lines." },
            { h: "Forecast vs Firm Review", d: "Comparing the month's forecast (Estimated) with Firm (Confirmed) orders to avoid inventory pile-up." },
            { h: "Priority Decision", d: "Marking 'Urgent' or 'Strategic' orders that must be finished first regardless of normal flow." }
          ],
          checklist: ["Check ERP for new orders", "Confirm delivery dates with sales", "Review buffer stock levels"],
          kpi: "Forecast Accuracy (%)",
          icon: "📈",
          color: "indigo"
        },
        {
          id: 2,
          title: "Capacity Planning",
          obj: "To calculate the 'Ability' of the factory to fulfill the demand within given time and resources.",
          details: [
            { h: "Line Capacity Calculation", d: "Determining max output based on Shift time minus planned breaks and losses." },
            { h: "Manpower Availability", d: "Analyzing attendance and skill levels for each line to ensure stations are not empty." },
            { h: "Bottleneck Analysis", d: "Finding the slowest point in the factory that limits the total production speed." }
          ],
          checklist: ["Calculate total machine hours", "Audit available manpower", "Check for major maintenance downtime"],
          kpi: "Capacity Utilization (%)",
          icon: "🏭",
          color: "blue"
        },
        {
          id: 3,
          title: "Production Planning",
          obj: "Creating the Master Production Schedule (MPS) that guides the entire factory operation.",
          details: [
            { h: "Monthly/Weekly Plan", d: "Setting the high-level goals for each week to meet the monthly dispatch target." },
            { h: "Model Mix Planning", d: "Deciding which models should run together to minimize setup time changes." },
            { h: "Shift Allocation", d: "Determining if 1, 2, or 3 shifts are needed to meet the volume requirements." }
          ],
          checklist: ["Finalize Monthly MPS", "Distribute weekly targets", "Check Shift-wise load balancing"],
          kpi: "Plan Adherence (%)",
          icon: "📅",
          color: "emerald"
        },
        {
          id: 4,
          title: "Production Scheduling",
          obj: "Converting the plan into minute-by-minute execution steps for every machine and operator.",
          details: [
            { h: "Line-wise Schedule", d: "The hourly target sheet for every station on the production line." },
            { h: "Sequence Planning", d: "Determining the order of production (e.g., Color A then Color B) to avoid waste." },
            { h: "Changeover Management", d: "Planning exact times for SMED/Setup changes between different models." }
          ],
          checklist: ["Issue daily schedule cards", "Check setup tools readiness", "Sync with line supervisor"],
          kpi: "Schedule Stability (%)",
          icon: "⏱️",
          color: "cyan"
        },
        {
          id: 5,
          title: "Material Planning",
          obj: "Ensuring every component is at the workstation BEFORE the production line starts.",
          details: [
            { h: "BOM Based Requirements", d: "Exploding the production plan into a list of every screw, label, and part needed." },
            { h: "Shortage Identification", d: "Highlighting 'Critical' parts that are not in stock to stop the line from starting without parts." },
            { h: "Purchase Sync", d: "Coordinating with the supply chain to rush material from vendors for urgent plans." }
          ],
          checklist: ["Review part stock levels", "Identify critical shortages", "Release daily material indent"],
          kpi: "Inventory Turnover Ratio",
          icon: "📦",
          color: "amber"
        },
        {
          id: 6,
          title: "WIP Control",
          obj: "Managing the Work-In-Progress material to ensure smooth flow without congestion.",
          details: [
            { h: "WIP Limit Definition", d: "Setting the maximum number of parts allowed between two stations (Buffer control)." },
            { h: "Bottleneck Monitoring", d: "Watching areas where parts are piling up and re-assigning manpower to clear it." },
            { h: "Line Congestion Avoidance", d: "Stopping feeding if the back-end is blocked to prevent physical mess on the floor." }
          ],
          checklist: ["Audit WIP at buffer points", "Check bottleneck throughput", "Verify bin movement speed"],
          kpi: "WIP Turn-Around Time",
          icon: "⛓️",
          color: "indigo"
        },
        {
          id: 7,
          title: "Output & Target Control",
          obj: "Tracking the actual performance against the plan in real-time to prevent end-of-month panic.",
          details: [
            { h: "Daily Output Tracking", d: "Comparing the total good units produced today against the daily target." },
            { h: "Hourly Production Monitor", d: "Identifying gaps every 60 minutes to take immediate corrective action." },
            { h: "Gap Analysis", d: "Asking 'Why did we miss?' and creating a recovery plan for the next shift." }
          ],
          checklist: ["Update hourly production board", "Calculate shift efficiency", "Identify root cause for gaps"],
          kpi: "UPH (Units Per Hour)",
          icon: "🎯",
          color: "rose"
        },
        {
          id: 8,
          title: "Dispatch Planning",
          obj: "Managing the final step: ensuring Finished Goods reach the customer on the promised date.",
          details: [
            { h: "Dispatch Schedule Sync", d: "Coordinating with the warehouse and logistics for truck arrivals." },
            { h: "Logistics Coordination", d: "Preparing the packing lists, invoices, and COA documents for the transit." },
            { h: "Commitment Adherence", d: "Tracking the OTIF (On-Time In-Full) metric for customer satisfaction." }
          ],
          checklist: ["Review pending dispatch list", "Coordinate with transport vendor", "Verify FG stock availability"],
          kpi: "OTIF (On-Time In-Full)",
          icon: "🚛",
          color: "blue"
        },
        {
          id: 9,
          title: "Exception Handling",
          obj: "Managing the 'Unplanned' events that break the original production schedule.",
          details: [
            { h: "Urgent Order Handling", d: "Rescheduling the whole line to accommodate a high-priority customer request." },
            { h: "Breakdown Impact Plan", d: "Moving operators or parts to another line if a machine fails." },
            { h: "Quality Hold Management", d: "Updating the plan if a whole batch is rejected and needs rework." }
          ],
          checklist: ["Trigger contingency plan", "Inform sales of delays", "Calculate impact on MPS"],
          kpi: "Agility / Response Time",
          icon: "⚠️",
          color: "orange"
        },
        {
          id: 10,
          title: "Data, Reports & Review",
          obj: "Converting floor data into management information for strategic decisions.",
          details: [
            { h: "MIS Reports", d: "Automated dashboards showing OEE, Productivity, and Loss analysis." },
            { h: "KPI Tracking", d: "Visualizing long-term trends in UPH, Rejection, and Capacity." },
            { h: "Daily Review Meeting", d: "Morning 'PPC-Production' sync to align everyone on the day's execution." }
          ],
          checklist: ["Prepare daily MIS report", "Conduct Morning review", "Analyze weekly KPI trends"],
          kpi: "Reporting Accuracy",
          icon: "📊",
          color: "slate"
        }
      ]
    },
    hi: {
      back: "वापस जाएं",
      objective: "रणनीतिक उद्देश्य",
      checklist: "डेली चेकलिस्ट",
      kpi: "मुख्य पैमाना (KPI)",
      impact: "फैक्ट्री पर असर",
      sections: [
        {
          id: 1,
          title: "डिमांड प्लानिंग",
          obj: "असली ऑर्डर और बाज़ार के रुझान को देखकर फैक्ट्री पर भविष्य के बोझ का अंदाजा लगाना।",
          details: [
            { h: "कस्टमर ऑर्डर एनालिसिस", d: "बड़े ऑर्डर्स को छोटे-छोटे हिस्सों (SKU) में बांटना ताकि लाइन पर काम शुरू हो सके।" },
            { h: "फोरकास्ट बनाम फर्म रिव्यू", d: "अंदाजे (Forecast) और पक्के ऑर्डर्स की तुलना करना ताकि फालतू स्टॉक न बने।" },
            { h: "प्राथमिकता तय करना", d: "उन ऑर्डर्स को चुनना जिन्हें किसी भी हाल में पहले पूरा करना ज़रूरी है।" }
          ],
          checklist: ["ERP में नए ऑर्डर चेक करें", "सेल्स टीम से तारीख कन्फर्म करें", "स्टॉक लेवल की समीक्षा करें"],
          kpi: "फोरकास्ट सटीकता (%)",
          icon: "📈",
          color: "indigo"
        },
        {
          id: 2,
          title: "कैपेसिटी प्लानिंग",
          obj: "यह हिसाब लगाना कि फैक्ट्री के पास मांग पूरी करने के लिए पर्याप्त मशीनें और लोग हैं या नहीं।",
          details: [
            { h: "लाइन क्षमता की गणना", d: "ब्रेक और मेंटेनेंस का समय घटाकर मशीन से निकलने वाले अधिकतम माल का हिसाब।" },
            { h: "मैनपावर की उपलब्धता", d: "चेक करना कि हर स्टेशन के लिए सही हुनर वाले ऑपरेटर मौजूद हैं।" },
            { h: "बॉटलनेक विश्लेषण", d: "फैक्ट्री के उस सबसे धीमे पॉइंट को ढूँढना जो पूरी रफ़्तार को कम कर रहा है।" }
          ],
          checklist: ["मशीन के कुल घंटों का हिसाब", "ऑपरेटर की हाजिरी चेक करें", "मेंटेनेंस का समय घटाएं"],
          kpi: "साधनों का उपयोग (%)",
          icon: "🏭",
          color: "blue"
        },
        {
          id: 3,
          title: "प्रोडक्शन प्लानिंग",
          obj: "मास्टर प्रोडक्शन शेड्यूल (MPS) बनाना जो पूरी फैक्ट्री के काम का मुख्य आधार होता है।",
          details: [
            { h: "महीने/हफ्ते का प्लान", d: "महीने के टारगेट को पाने के लिए हर हफ्ते के लक्ष्य तय करना।" },
            { h: "मॉडल मिक्स प्लानिंग", d: "तय करना कि कौन से मॉडल एक साथ चलाने पर मशीन की सेटिंग कम बदलनी पड़ेगी।" },
            { h: "शिफ्ट का बँवारा", d: "यह तय करना कि काम पूरा करने के लिए 1, 2 या 3 शिफ्ट चलानी पड़ेंगी।" }
          ],
          checklist: ["मास्टर प्लान (MPS) फाइनल करें", "हफ्ते के लक्ष्य बांटें", "शिफ्ट लोड चेक करें"],
          kpi: "प्लान का पालन (%)",
          icon: "📅",
          color: "emerald"
        },
        {
          id: 4,
          title: "प्रोडक्शन शेड्यूलिंग",
          obj: "प्लान को हर घंटे और हर मशीन के लिए सटीक काम के क्रम (Sequence) में बदलना।",
          details: [
            { h: "लाइन-वाइज शेड्यूल", d: "प्रोडक्शन लाइन के हर स्टेशन के लिए हर घंटे का टारगेट चार्ट।" },
            { h: "क्रम (Sequence) प्लानिंग", d: "सामान बनाने का सही क्रम तय करना (जैसे पहले लाल पेंट, फिर नीला) ताकि बर्बादी कम हो।" },
            { h: "चेंजओवर मैनेजमेंट", d: "मॉडल बदलते समय लगने वाले समय (Setup time) की सटीक प्लानिंग।" }
          ],
          checklist: ["डेली शेड्यूल चार्ट जारी करें", "सेटअप टूल्स तैयार रखें", "सुपरवाइजर से तालमेल करें"],
          kpi: "शेड्यूल स्थिरता (%)",
          icon: "⏱️",
          color: "cyan"
        },
        {
          id: 5,
          title: "मटेरियल प्लानिंग",
          obj: "यह पक्का करना कि लाइन शुरू होने से पहले हर एक पुर्जा (Part) वर्कस्टेशन पर मौजूद हो।",
          details: [
            { h: "BOM आधारित ज़रूरत", d: "प्लान के हिसाब से हर एक पेंच, लेबल और पार्ट की कुल लिस्ट तैयार करना।" },
            { h: "शॉर्टेज की पहचान", d: "उन पार्ट्स को हाईलाइट करना जो स्टॉक में नहीं हैं, ताकि लाइन को खाली न बैठना पड़े।" },
            { h: "परचेज टीम से तालमेल", d: "सप्लायर से ज़रूरी सामान तुरंत मंगवाने के लिए कोआर्डिनेशन करना।" }
          ],
          checklist: ["स्टॉक लेवल रिव्यू करें", "कमी (Shortage) की लिस्ट बनाएं", "डेली मटेरियल इंडेंट भेजें"],
          kpi: "इन्वेंटरी टर्नओवर रेश्यो",
          icon: "📦",
          color: "amber"
        },
        {
          id: 6,
          title: "WIP कंट्रोल",
          obj: "प्रोसेस के बीच के माल (Work-In-Progress) को मैनेज करना ताकि काम बिना रुके चलता रहे।",
          details: [
            { h: "WIP लिमिट तय करना", d: "दो स्टेशनों के बीच अधिकतम कितना माल रुक सकता है, इसकी सीमा तय करना।" },
            { h: "बॉटलनेक निगरानी", d: "उन जगहों पर नज़र रखना जहाँ माल जमा हो रहा है और वहां मदद बढ़ाना।" },
            { h: "लाइन की भीड़ रोकना", d: "अगर आगे काम रुका है तो पीछे से माल भेजना बंद करना ताकि फर्श पर भीड़ न हो।" }
          ],
          checklist: ["बफर पॉइंट्स पर माल चेक करें", "बॉटलनेक आउटपुट देखें", "बिन मूवमेंट की रफ़्तार जांचें"],
          kpi: "WIP टर्न-अराउंड समय",
          icon: "⛓️",
          color: "indigo"
        },
        {
          id: 7,
          title: "आउटपुट और टारगेट कंट्रोल",
          obj: "प्लान बनाम असली काम को हर घंटे ट्रैक करना ताकि महीने के अंत में काम का बोझ न बढ़े।",
          details: [
            { h: "डेली आउटपुट ट्रैकिंग", d: "आज बने हुए सही माल की तुलना आज के टारगेट से करना।" },
            { h: "घंटेवार प्रोडक्शन रिपोर्ट", d: "हर 60 मिनट में काम की रफ़्तार देखना ताकि गड़बड़ होने पर तुरंत सुधारा जा सके।" },
            { h: "गैप एनालिसिस", d: "यह पूछना कि 'टारगेट क्यों मिस हुआ?' और अगले दिन के लिए रिकवरी प्लान बनाना।" }
          ],
          checklist: ["घंटेवार चार्ट अपडेट करें", "शिफ्ट की क्षमता निकालें", "गैप का कारण ढूँढें"],
          kpi: "UPH (पीस प्रति घंटा)",
          icon: "🎯",
          color: "rose"
        },
        {
          id: 8,
          title: "डिस्पैच प्लानिंग",
          obj: "अंतिम कदम: तैयार माल को वादे के अनुसार ग्राहक तक सही समय पर पहुँचाना।",
          details: [
            { h: "डिस्पैच शेड्यूल सिंक", d: "वेयरहाउस और ट्रक मालिकों के साथ लोडिंग और रवानगी का समय तय करना।" },
            { h: "लॉजिस्टिक्स तालमेल", d: "रास्ते के लिए ज़रूरी बिल (Invoice), पैकिंग लिस्ट और क्वालिटी सर्टिफिकेट तैयार रखना।" },
            { h: "कमिटमेंट का पालन", d: "कस्टमर संतुष्टि के लिए OTIF (On-Time In-Full) का हिसाब रखना।" }
          ],
          checklist: ["डिस्पैच की लिस्ट देखें", "ट्रक ड्राइवर से बात करें", "तैयार माल की गिनती पक्की करें"],
          kpi: "OTIF (समय पर डिलीवरी)",
          icon: "🚛",
          color: "blue"
        },
        {
          id: 9,
          title: "एक्सेप्शन हैंडलिंग",
          obj: "अचानक होने वाली समस्याओं (जैसे मशीन खराब होना) के समय प्लान को संभालना।",
          details: [
            { h: "अर्जेंट ऑर्डर मैनेजमेंट", d: "बड़े कस्टमर की रिक्वेस्ट पर लाइन को दोबारा सेट करना।" },
            { h: "ब्रेकडाउन इम्पैक्ट प्लान", d: "अगर कोई मशीन खराब है तो ऑपरेटर को दूसरे काम में लगाना।" },
            { h: "क्वालिटी होल्ड", d: "अगर माल रिजेक्ट हो जाए तो उसे सुधारने (Rework) का नया प्लान बनाना।" }
          ],
          checklist: ["बैकअप प्लान लागू करें", "सेल्स टीम को सूचित करें", "नुकसान का हिसाब लगाएं"],
          kpi: "रिस्पॉन्स टाइम (Agility)",
          icon: "⚠️",
          color: "orange"
        },
        {
          id: 10,
          title: "डेटा, रिपोर्ट्स और रिव्यू",
          obj: "फ्लोर से मिले डेटा को जानकारी में बदलकर बड़े फैसले लेना।",
          details: [
            { h: "MIS रिपोर्ट्स", d: "मैनेजमेंट के लिए ओईई (OEE) और प्रोडक्टिविटी के डैशबोर्ड बनाना।" },
            { h: "KPI ट्रैकिंग", d: "लंबे समय के रुझानों (Trends) को ग्राफ के ज़रिए देखना।" },
            { h: "डेली रिव्यू मीटिंग", d: "सुबह की 'PPC मीटिंग' जिसमें प्रोडक्शन टीम के साथ दिन भर का प्लान सिंक किया जाता है।" }
          ],
          checklist: ["डेली रिपोर्ट तैयार करें", "मॉर्निंग मीटिंग करें", "हफ्ते के रुझानों का विश्लेषण करें"],
          kpi: "रिपोर्टिंग सटीकता",
          icon: "📊",
          color: "slate"
        }
      ]
    }
  };

  const t = translations[lang] || translations['en'];
  const data = t.sections.find(s => s.id === sectionId);

  if (!data) return null;

  return (
    <div className="flex flex-col gap-8 animate-in slide-in-from-bottom-6 duration-700 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className={`flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-${data.color}-500/20 pb-6 bg-slate-950/40 p-8 rounded-t-[40px] backdrop-blur-md`}>
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className={`w-3 h-3 bg-${data.color}-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(59,130,246,0.8)]`}></div>
              <span className={`text-${data.color}-400 text-[10px] font-black uppercase tracking-[0.4em]`}>Deep Dive Module / 0{sectionId}</span>
           </div>
           <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none italic font-mono">{data.title}</h3>
        </div>
        <button onClick={onBack} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {t.back}
        </button>
      </div>

      {/* Strategic Objective Card */}
      <div className={`bg-slate-900 border border-${data.color}-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group`}>
         <div className={`absolute top-0 right-0 p-8 text-9xl font-black text-${data.color}-500/[0.03] select-none uppercase italic tracking-tighter`}>{data.icon}</div>
         <div className="relative z-10 space-y-6">
            <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-widest border-b-2 border-indigo-500 w-fit pb-2">{t.objective}</h4>
            <p className="text-slate-200 text-lg md:text-2xl font-bold leading-relaxed italic max-w-4xl">
               "{data.obj}"
            </p>
         </div>
      </div>

      {/* Detailed Technical Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {data.details.map((item, i) => (
           <div key={i} className="bg-slate-950/60 border border-white/5 p-8 rounded-[32px] hover:bg-slate-900 transition-all group flex flex-col gap-5 shadow-xl relative overflow-hidden h-full">
              <div className="flex items-center justify-between">
                 <div className={`w-10 h-10 bg-slate-900 border border-${data.color}-500/20 rounded-xl flex items-center justify-center text-xl shadow-lg`}>⚙️</div>
                 <span className={`text-${data.color}-500 font-black text-[9px] uppercase tracking-widest opacity-40`}>Detail 0{i+1}</span>
              </div>
              <div className="space-y-2">
                 <h5 className="text-white font-black text-lg uppercase tracking-tight group-hover:text-indigo-400 transition-colors">{item.h}</h5>
                 <p className="text-slate-400 text-xs font-bold leading-relaxed italic">{item.d}</p>
              </div>
           </div>
         ))}
      </div>

      {/* Checklist & KPI Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         {/* Checklist */}
         <div className="lg:col-span-7 bg-slate-900/60 border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8">
            <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4">
               <span className={`w-12 h-0.5 bg-${data.color}-500 shadow-[0_0_10px_indigo]`}></span>
               {t.checklist}
            </h4>
            <div className="space-y-3">
               {data.checklist.map((c, i) => (
                 <div key={i} className="flex items-center gap-4 p-4 bg-slate-950/60 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all group">
                    <div className={`w-8 h-8 rounded-lg bg-${data.color}-500/10 flex items-center justify-center text-${data.color}-500 font-black text-xs group-hover:bg-indigo-500 group-hover:text-white transition-all`}>0{i+1}</div>
                    <span className="text-slate-200 text-xs md:text-sm font-black uppercase tracking-tight">{c}</span>
                 </div>
               ))}
            </div>
         </div>

         {/* KPI Node */}
         <div className={`lg:col-span-5 bg-${data.color}-950/20 border border-${data.color}-500/20 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8 backdrop-blur-xl relative overflow-hidden flex flex-col items-center justify-center text-center`}>
            <div className="absolute top-0 right-0 p-8 text-4xl opacity-5">🏆</div>
            <div className="space-y-4">
               <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">{t.kpi}</h4>
               <div className="bg-slate-950 p-8 rounded-full border-4 border-indigo-500/40 w-48 h-48 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                  <span className="text-4xl">🎯</span>
                  <p className="text-white font-black text-sm uppercase mt-4 leading-tight">{data.kpi}</p>
               </div>
            </div>
            <div className="bg-indigo-500/10 p-4 rounded-2xl border border-indigo-500/20 w-full">
               <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest italic">
                  Critical Execution Parameter
               </p>
            </div>
         </div>
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className={`w-2.5 h-2.5 bg-${data.color}-500 rounded-full shadow-[0_0_12px_indigo] animate-pulse`}></span>
                Detail Extraction: Complete
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">PPC Framework v5.1 // Deep Analytics Node</div>
      </div>
    </div>
  );
};

export default PPCSectionDetail;

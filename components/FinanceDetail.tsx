
import React from 'react';
import { Language } from '../types';

interface FinanceDetailProps {
  onBack: () => void;
  lang: Language;
}

const FinanceDetail: React.FC<FinanceDetailProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Finance & Accounts Hub",
      subtitle: "Capital Management & Fiscal Control",
      backBtn: "Back",
      hero: {
        question: "What is Finance / Accounts?",
        desc: "The department that plans, controls, and records the company's money (cost, income, payments, compliance) to ensure the business stays profitable and legally safe.",
        simple: "Simple words: Money management and control.",
        mantra: "Profit is the result of perfect cost control."
      },
      pillars: [
        {
          id: 1,
          title: "Costing",
          tag: "Profitability",
          desc: "How much does it cost to make the product?",
          points: [
            "Material cost calculation",
            "Labor cost (Direct/Indirect)",
            "Overheads (Power, Admin, Maintenance)",
            "Per-unit cost & margin analysis",
            "Cost reduction opportunities"
          ],
          purpose: "Decide if the product is profitable or not.",
          icon: "📉",
          color: "emerald"
        },
        {
          id: 2,
          title: "Billing / Invoicing",
          tag: "Revenue",
          desc: "Billing the customer correctly.",
          points: [
            "Sales invoice preparation",
            "GST calculation & compliance",
            "Dispatch documents matching",
            "Credit note / Debit note handling"
          ],
          purpose: "Ensure correct, timely billing for smooth cash inflow.",
          icon: "📄",
          color: "cyan"
        },
        {
          id: 3,
          title: "Payments",
          tag: "Cash Flow",
          desc: "Controlling the flow of money in and out.",
          points: [
            "Accounts Payable: Supplier payments",
            "Accounts Receivable: Customer collection",
            "Salary, PF, ESI payments",
            "Advance / Reimbursement handling",
            "Payment scheduling & follow-up"
          ],
          purpose: "Maintain cash flow and build vendor/employee trust.",
          icon: "💳",
          color: "indigo"
        },
        {
          id: 4,
          title: "Audit & Compliance",
          tag: "Legal Security",
          desc: "Following rules, laws, and systems.",
          points: [
            "Internal audit & Statutory audit",
            "GST / Tax audit management",
            "Record verification & reporting",
            "Non-compliance corrective action"
          ],
          purpose: "Avoid legal risks and ensure transparent records.",
          icon: "⚖️",
          color: "amber"
        }
      ],
      support: {
        title: "Supporting Finance Activities",
        items: [
          { l: "Budgeting", d: "Forecasting future expenses and targets." },
          { l: "MIS Reports", d: "Monthly P&L and cost analysis reports." },
          { l: "Asset Mgmt", d: "Managing company property and depreciation." },
          { l: "Inventory", d: "Valuation of stock sitting in the store." }
        ]
      },
      summary: "Finance / Accounts ensures every single rupee in the factory is accounted for and optimized."
    },
    hi: {
      title: "फाइनेंस और अकाउंट्स हब",
      subtitle: "पूंजी प्रबंधन और वित्तीय नियंत्रण",
      backBtn: "वापस",
      hero: {
        question: "Finance / Accounts क्या होता है?",
        desc: "वह विभाग जो कंपनी के पैसों (खर्च, कमाई, पेमेंट, नियम) को प्लान, कंट्रोल और रिकॉर्ड करता है, ताकि बिजनेस मुनाफे में रहे और कानूनी रूप से सुरक्षित रहे।",
        simple: "आसान शब्दों में: 'पैसा का हिसाब-किताब और कंट्रोल' (Money control)।",
        mantra: "सटीक कॉस्ट कंट्रोल ही मुनाफे की चाबी है।"
      },
      pillars: [
        {
          id: 1,
          title: "कॉस्टिंग (Costing)",
          tag: "मुनाफा जांच",
          desc: "प्रोडक्ट बनाने में कितना खर्चा आ रहा है?",
          points: [
            "मटेरियल कॉस्ट कैलकुलेशन",
            "लेबर कॉस्ट (डायरेक्ट/इनडायरेक्ट)",
            "ओवरहेड्स (बिजली, मेंटेनेंस, एडमिन)",
            "प्रति यूनिट खर्च और मार्जिन विश्लेषण",
            "खर्च कम करने के मौके ढूँढना"
          ],
          purpose: "यह तय करना कि प्रोडक्ट मुनाफे में है या नहीं।",
          icon: "📉",
          color: "emerald"
        },
        {
          id: 2,
          title: "बिलिंग / इनवॉइसिंग",
          tag: "कमाई",
          desc: "कस्टमर के लिए सही बिल तैयार करना।",
          points: [
            "सेल्स इनवॉइस तैयार करना",
            "GST कैलकुलेशन और नियम पालन",
            "डिस्पैच दस्तावेजों का मिलान",
            "क्रेडिट / डेबिट नोट संभालना"
          ],
          purpose: "सही समय पर बिलिंग ताकि कैश फ्लो बना रहे।",
          icon: "📄",
          color: "cyan"
        },
        {
          id: 3,
          title: "पेमेंट्स (Payments)",
          tag: "कैश फ्लो",
          desc: "पैसों के आने-जाने पर नियंत्रण।",
          points: [
            "Accounts Payable: सप्लायर पेमेंट",
            "Accounts Receivable: कस्टमर कलेक्शन",
            "सैलरी, PF, ESI भुगतान",
            "एडवांस और रीइम्बर्समेंट हैंडलिंग",
            "पेमेंट शेड्यूल और फॉलो-अप"
          ],
          purpose: "कैश फ्लो बनाए रखना और वेंडर/स्टाफ का भरोसा जीतना।",
          icon: "💳",
          color: "indigo"
        },
        {
          id: 4,
          title: "ऑडिट और अनुपालन",
          tag: "कानूनी सुरक्षा",
          desc: "नियमों और कानूनों का पालन करना।",
          points: [
            "इंटरनल और स्टेट्यूटरी ऑडिट",
            "GST और टैक्स ऑडिट मैनेजमेंट",
            "रिकॉर्ड वेरिफिकेशन और रिपोर्टिंग",
            "गलतियों पर सुधारात्मक कार्यवाही"
          ],
          purpose: "कानूनी जोखिम से बचना और रिकॉर्ड पारदर्शी रखना।",
          icon: "⚖️",
          color: "amber"
        }
      ],
      support: {
        title: "फाइनेंस सपोर्ट गतिविधियां",
        items: [
          { l: "बजटिंग", d: "भविष्य के खर्चों और लक्ष्यों का अंदाज़ा।" },
          { l: "MIS रिपोर्ट्स", d: "मासिक P&L और कॉस्ट रिपोर्ट तैयार करना।" },
          { l: "एसेट मैनेजमेंट", d: "कंपनी की संपत्ति और उसकी वैल्यू का हिसाब।" },
          { l: "इन्वेंटरी", d: "स्टोर में रखे माल की कीमत का मूल्यांकन।" }
        ]
      },
      summary: "Finance / Accounts सुनिश्चित करता है कि फैक्ट्री के एक-एक रुपये का सही हिसाब और उपयोग हो।"
    }
  };

  const current = content[lang] || content['en'];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-emerald-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_12px_emerald]"></div>
              <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono italic">Fiscal Node</h3>
        </div>
        <button onClick={onBack} className="bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-emerald-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Accountability</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-emerald-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-emerald-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors">
            <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic mb-4">"💰 {current.hero.simple}"</p>
            <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.6em] animate-pulse italic">"{current.hero.mantra}"</p>
         </div>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {current.pillars.map((p) => (
            <div key={p.id} className={`bg-slate-950/60 border border-white/5 p-8 rounded-[40px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden border-t-4 border-t-${p.color}-500/40`}>
               <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 bg-slate-900 border border-${p.color}-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>{p.icon}</div>
                  <span className={`text-${p.color}-500 font-black text-[9px] uppercase tracking-widest border border-${p.color}-500/30 px-3 py-1 rounded-full`}>{p.tag}</span>
               </div>

               <div className="space-y-1">
                  <h5 className="text-white text-xl font-black uppercase tracking-tight group-hover:text-emerald-400 transition-colors">0{p.id}. {p.title}</h5>
                  <p className="text-slate-500 text-[10px] font-bold leading-relaxed italic uppercase">"{p.desc}"</p>
               </div>

               <div className="space-y-3 pt-6 border-t border-white/5">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-4">Key Elements / मुख्य कार्य:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {p.points.map((point, idx) => (
                       <div key={idx} className="flex items-start gap-3 group/point">
                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-${p.color}-500/40 group-hover/point:bg-${p.color}-500 transition-colors`}></div>
                          <span className="text-slate-300 text-[10px] font-bold uppercase tracking-tight leading-tight group-hover/point:text-white transition-colors">{point}</span>
                       </div>
                    ))}
                  </div>
               </div>

               <div className={`mt-auto bg-${p.color}-500/10 border border-${p.color}-500/20 p-5 rounded-2xl`}>
                  <span className={`text-${p.color}-500 text-[9px] font-black uppercase block mb-1`}>Critical Purpose:</span>
                  <p className="text-white text-[11px] font-bold italic leading-tight">📌 {p.purpose}</p>
               </div>
            </div>
         ))}
      </div>

      {/* Supporting Activities Section */}
      <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[48px] shadow-2xl space-y-10 relative overflow-hidden">
         <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter italic flex items-center gap-4">
            <span className="w-12 h-1 bg-emerald-500 shadow-[0_0_10px_emerald]"></span>
            {current.support.title}
         </h4>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {current.support.items.map((item, i) => (
               <div key={i} className="bg-slate-950/60 p-6 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all group shadow-inner">
                  <h6 className="text-emerald-400 font-black text-xs uppercase mb-2">{item.l}</h6>
                  <p className="text-slate-500 text-[10px] font-bold leading-relaxed italic">{item.d}</p>
               </div>
            ))}
         </div>
      </div>

      {/* Summary Footer */}
      <div className="bg-emerald-600 p-10 rounded-[48px] shadow-[0_0_50px_rgba(16,185,129,0.3)] text-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 animate-pulse opacity-50"></div>
         <div className="relative z-10 space-y-4">
            <h5 className="text-white/60 font-black text-[10px] uppercase tracking-[0.6em] mb-2">Technical Conclusion</h5>
            <p className="text-white text-lg md:text-2xl font-black italic tracking-tight leading-snug">
               "{current.summary}"
            </p>
         </div>
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_emerald] animate-pulse"></span>
                Ledger Sync: Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_10px_amber]"></span>
                Compliance Check: Validated
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">FIN-Core v14.2 // Accounting Node</div>
      </div>
    </div>
  );
};

export default FinanceDetail;

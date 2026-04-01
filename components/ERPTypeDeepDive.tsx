
import React from 'react';
import { Language } from '../types';

interface ERPTypeDeepDiveProps {
  erpIndex: number;
  onBack: () => void;
  lang: Language;
}

const ERPTypeDeepDive: React.FC<ERPTypeDeepDiveProps> = ({ erpIndex, onBack, lang }) => {
  const content = {
    en: [
      {
        name: "SAP ERP",
        tag: "Global Standard",
        desc: "The world's most powerful ERP system, used by large multinational corporations for complex manufacturing environments.",
        howItWorks: [
          { s: "Central Database", d: "Stores all global data in one single place (S/4HANA)." },
          { s: "Real-time Integration", d: "Production update instantly affects Finance and Sales logs." },
          { s: "Automated MRP", d: "System automatically calculates and places orders when stock hits Min level." }
        ],
        modules: ["MM (Materials)", "PP (Production)", "FI (Finance)", "SD (Sales)", "QM (Quality)"],
        bestFor: "Large factories with high volume and multiple plant locations.",
        color: "blue"
      },
      {
        name: "Oracle NetSuite",
        tag: "Cloud Intelligence",
        desc: "A pure cloud-based ERP that offers powerful data analytics and accessibility from anywhere in the world.",
        howItWorks: [
          { s: "Cloud Access", d: "No local servers needed. Access data on Mobile or Tablet." },
          { s: "SCM Optimization", d: "Advanced supply chain modules for global vendor tracking." },
          { s: "Business Intelligence", d: "Interactive dashboards showing live profit and loss per SKU." }
        ],
        modules: ["Supply Chain", "Order Management", "Inventory Control", "E-commerce"],
        bestFor: "Growing businesses that need fast implementation and cloud mobility.",
        color: "indigo"
      },
      {
        name: "Microsoft Dynamics",
        tag: "Integrated Ecosystem",
        desc: "An ERP that works perfectly with Excel, Word, and Outlook, making it easy for staff to adopt.",
        howItWorks: [
          { s: "User Friendly", d: "Looks like Windows/Office. Very easy to learn for employees." },
          { s: "Flexible Logic", d: "Easy to change rules as the business grows." },
          { s: "Data Export", d: "One-click reports to Excel for custom analysis." }
        ],
        modules: ["Finance", "Operations", "CRM", "Customer Service"],
        bestFor: "Mid-sized companies looking for easy training and integration.",
        color: "emerald"
      },
      {
        name: "Tally Prime",
        tag: "Accounting Focused",
        desc: "The most popular choice for small and medium factories in India due to its simplicity and powerful tax handling.",
        howItWorks: [
          { s: "Simple Voucher Entry", d: "Work based on Debit/Credit and simple Invoices." },
          { s: "Basic Inventory", d: "Track stock by Godowns and Batch numbers." },
          { s: "GST Ready", d: "Best-in-class Indian taxation and compliance support." }
        ],
        modules: ["Accounts", "Stock Summary", "Banking", "Payroll"],
        bestFor: "SMEs (Small/Medium Enterprises) focusing on compliance and simple stock.",
        color: "amber"
      },
      {
        name: "Custom ERP",
        tag: "Tailor Made",
        desc: "An ERP built by local software teams specifically for one company's unique manufacturing logic.",
        howItWorks: [
          { s: "Specific Features", d: "Built exactly for your process (e.g., unique machine logs)." },
          { s: "Cost Effective", d: "No high monthly license fees of big brands." },
          { s: "Ownership", d: "Complete control over data and system updates." }
        ],
        modules: ["Process specific", "Reporting", "User Management"],
        bestFor: "Companies with unique processes that large ERPs cannot handle.",
        color: "slate"
      }
    ],
    hi: [
      {
        name: "SAP ERP",
        tag: "ग्लोबल स्टैंडर्ड",
        desc: "दुनिया का सबसे ताकतवर ERP सिस्टम। बड़ी मल्टीनेशनल कंपनियाँ इसका उपयोग करती हैं ताकि दुनिया भर का डेटा एक ही जगह रहे।",
        howItWorks: [
          { s: "सेंट्रल डेटाबेस", d: "पूरी दुनिया का डेटा एक ही सुरक्षित जगह (S/4HANA) पर रहता है।" },
          { s: "रियल-टाइम सिंक", d: "प्रोडक्शन की एक एंट्री होते ही फाइनेंस और सेल्स में तुरंत बदलाव दिखता है।" },
          { s: "MRP ऑटोमेशन", d: "सामान कम होते ही सिस्टम अपने आप सप्लायर को ऑर्डर देने का सुझाव देता है।" }
        ],
        modules: ["MM (मटेरियल)", "PP (प्रोडक्शन)", "FI (फाइनेंस)", "SD (सेल्स)", "QM (क्वालिटी)"],
        bestFor: "बड़ी फैक्ट्रियों के लिए जहाँ हज़ारों तरह के पार्ट्स और मशीने हों।",
        color: "blue"
      },
      {
        name: "Oracle NetSuite",
        tag: "क्लाउड इंटेलिजेंस",
        desc: "यह पूरी तरह इंटरनेट (Cloud) पर आधारित है। इसे दुनिया में कहीं से भी मोबाइल या लैपटॉप पर चलाया जा सकता है।",
        howItWorks: [
          { s: "क्लाउड एक्सेस", d: "कंपनी में सर्वर रखने की ज़रूरत नहीं। सिर्फ इंटरनेट चाहिए।" },
          { s: "सप्लाई चेन", d: "वेंडर्स को ट्रैक करने और मटेरियल फ्लो के लिए बहुत एडवांस टूल्स।" },
          { s: "डेटा एनालिसिस", d: "लाइव डैशबोर्ड जिससे पल-पल के मुनाफे और स्टॉक की जानकारी मिले।" }
        ],
        modules: ["सप्लाई चेन", "ऑर्डर मैनेजमेंट", "इन्वेंटरी कंट्रोल", "E-कॉमर्स"],
        bestFor: "उन कंपनियों के लिए जो डेटा और तेज़ रफ़्तार पर ध्यान देती हैं।",
        color: "indigo"
      },
      {
        name: "Microsoft Dynamics",
        tag: "विंडोज फ्रेंडली",
        desc: "यह एक्सेल, वर्ड और आउटलुक के साथ मिलकर काम करता है। इसे सीखना कर्मचारियों के लिए बहुत आसान है।",
        howItWorks: [
          { s: "आसान इंटरफेस", d: "यह देखने में बिलकुल ऑफिस या विंडोज जैसा लगता है।" },
          { s: "लचीला सिस्टम", d: "कंपनी की ज़रूरत के हिसाब से नियम आसानी से बदले जा सकते हैं।" },
          { s: "एक्सेल सपोर्ट", d: "एक क्लिक में सारी रिपोर्ट एक्सेल में आ जाती हैं।" }
        ],
        modules: ["फाइनेंस", "ऑपरेशन्स", "कस्टमर रिलेशन", "सर्विस"],
        bestFor: "मझले उद्योगों (Mid-size) के लिए जो आसानी से काम शुरू करना चाहते हैं।",
        color: "emerald"
      },
      {
        name: "Tally Prime",
        tag: "अकाउंटिंग फोकस्ड",
        desc: "भारत की छोटी और मझली फैक्ट्रियों की पहली पसंद। यह अकाउंट्स और टैक्स के लिए सबसे बेहतरीन टूल है।",
        howItWorks: [
          { s: "वाउचर एंट्री", d: "डेबिट/क्रेडिट और बिलिंग के आधार पर सरल काम।" },
          { s: "बेसिक इन्वेंटरी", d: "गोदाम और बैच नंबर के हिसाब से स्टॉक ट्रैक करना।" },
          { s: "GST रेडी", d: "भारत के टैक्स नियमों और रिटर्न के लिए सबसे आसान सॉफ्टवेयर।" }
        ],
        modules: ["अकाउंट्स", "स्टॉक समरी", "बैंकिंग", "पेरोल (सैलरी)"],
        bestFor: "उन SMEs के लिए जो अकाउंट्स और टैक्स का काम सही रखना चाहते हैं।",
        color: "amber"
      },
      {
        name: "Custom ERP",
        tag: "अपनी ज़रूरत अनुसार",
        desc: "जब कोई फैक्ट्री अपने खास काम के तरीके के लिए अपना खुद का सॉफ्टवेयर बनवाती है।",
        howItWorks: [
          { s: "कस्टम फीचर्स", d: "सिर्फ वही बटन और रिपोर्ट जो आपकी फैक्ट्री के लिए ज़रूरी हैं।" },
          { s: "सस्ता समाधान", d: "बड़े ब्रैंड्स की तरह हर महीने मोटी फीस नहीं देनी पड़ती।" },
          { s: "मालिकाना हक़", d: "डेटा और बदलावों पर कंपनी का पूरा कंट्रोल होता है।" }
        ],
        modules: ["प्रोसेस स्पेसिफिक", "रिपोर्टिंग", "यूजर मैनेजमेंट"],
        bestFor: "उन कंपनियों के लिए जिनका काम करने का तरीका बहुत अलग और यूनिक है।",
        color: "slate"
      }
    ]
  };

  const currentList = content[lang] || content['en'];
  const erp = currentList[erpIndex];

  return (
    <div className="flex flex-col gap-8 animate-in slide-in-from-right-6 duration-700 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8 relative">
      {/* Header */}
      <div className={`flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-${erp.color}-500/20 pb-6 bg-slate-950/40 p-8 rounded-t-[40px] backdrop-blur-md`}>
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className={`w-3 h-3 bg-${erp.color}-500 rounded-full animate-pulse shadow-[0_0_12px_${erp.color}]`}></div>
              <span className={`text-${erp.color}-400 text-[10px] font-black uppercase tracking-[0.4em]`}>Deep Dive / {erp.tag}</span>
           </div>
           <h3 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none italic font-mono">{erp.name}</h3>
        </div>
        <button onClick={onBack} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
          {lang === 'hi' ? 'पीछे जाएं' : 'Back to List'}
        </button>
      </div>

      {/* Hero Definition */}
      <div className={`bg-slate-900 border border-${erp.color}-500/30 p-8 md:p-12 rounded-[48px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group`}>
         <div className="absolute top-0 right-0 p-8 text-9xl font-black text-white/[0.01] select-none uppercase italic tracking-tighter">Enterprise</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{lang === 'hi' ? 'विशेषता (Highlights)' : 'Key Characteristics'}</h4>
            <p className="text-slate-300 text-lg md:text-2xl font-bold leading-relaxed italic">
               "{erp.desc}"
            </p>
         </div>
         <div className={`bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-${erp.color}-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors`}>
            <p className="text-white text-base md:text-xl font-black uppercase italic tracking-widest">
               🎯 {lang === 'hi' ? 'किसके लिए बेस्ट है?' : 'Ideal for:'} {erp.bestFor}
            </p>
         </div>
      </div>

      {/* Detailed Workflow & Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         {/* How it works */}
         <div className="lg:col-span-7 bg-slate-900/60 border border-white/10 p-8 md:p-10 rounded-[48px] shadow-2xl space-y-10 relative overflow-hidden">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.5em] flex items-center gap-4">
               <span className={`w-12 h-1 bg-${erp.color}-500 shadow-[0_0_10px_${erp.color}]`}></span>
               {lang === 'hi' ? 'यह कैसे काम करता है?' : 'Operational Workflow'}
            </h4>
            <div className="space-y-6">
               {erp.howItWorks.map((step, i) => (
                  <div key={i} className="bg-slate-950/60 p-6 rounded-3xl border border-white/5 group hover:border-blue-500/20 transition-all flex flex-col gap-2">
                     <div className="flex items-center gap-4">
                        <span className={`text-${erp.color}-500 font-black text-xl italic`}>0{i+1}</span>
                        <h6 className="text-white font-black text-sm md:text-lg uppercase tracking-tight">{step.s}</h6>
                     </div>
                     <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed italic">"{step.d}"</p>
                  </div>
               ))}
            </div>
         </div>

         {/* Technical Modules Node */}
         <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-950 border border-white/5 p-8 rounded-[48px] shadow-2xl space-y-8">
               <h4 className={`text-${erp.color}-400 text-[10px] font-black uppercase tracking-[0.4em] text-center`}>{lang === 'hi' ? 'मुख्य तकनीकी मॉड्यूल्स' : 'Core Technical Modules'}</h4>
               <div className="grid grid-cols-1 gap-3">
                  {erp.modules.map((m, i) => (
                     <div key={i} className={`p-4 bg-slate-900 rounded-2xl border border-white/5 text-center transition-all hover:bg-${erp.color}-500/10`}>
                        <span className="text-white font-black text-xs md:text-sm uppercase tracking-widest">{m}</span>
                     </div>
                  ))}
               </div>
            </div>

            {/* Quick Logic Hook */}
            <div className={`bg-${erp.color}-600 p-8 rounded-[40px] shadow-[0_0_50px_rgba(0,0,0,0.3)] text-center relative overflow-hidden group`}>
               <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent"></div>
               <div className="relative z-10">
                  <h5 className="text-white/60 font-black text-[10px] uppercase tracking-[0.5em] mb-2">{lang === 'hi' ? 'काम की बात' : 'Final Insight'}</h5>
                  <p className="text-white text-lg font-black italic tracking-tight leading-snug">
                     {lang === 'hi' 
                       ? `${erp.name} सिर्फ एक सॉफ्टवेयर नहीं, बल्कि पूरी फैक्ट्री को जोड़ने वाली एक 'डिजिटल धागा' (Digital Thread) है।`
                       : `${erp.name} is not just software; it's the digital thread that connects every activity of your factory.`}
                  </p>
               </div>
            </div>
         </div>
      </div>

      {/* Status Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className={`w-2 h-2 bg-${erp.color}-500 rounded-full shadow-[0_0_10px_white] animate-pulse`}></span>
                Specific Logic: Loaded
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                Node Sync: Active
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">ERP-Analytics Node // Deep View v1.2</div>
      </div>
    </div>
  );
};

export default ERPTypeDeepDive;

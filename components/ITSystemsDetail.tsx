
import React, { useState } from 'react';
import { Language } from '../types';
import ITSectionDetail from './ITSectionDetail';

interface ITSystemsDetailProps {
  onBack: () => void;
  lang: Language;
}

const ITSystemsDetail: React.FC<ITSystemsDetailProps> = ({ onBack, lang }) => {
  const [selectedSectionId, setSelectedSectionId] = useState<number | null>(null);

  const content = {
    en: {
      title: "IT / Systems / MIS Hub",
      subtitle: "Digital Infrastructure & Data Intelligence",
      backBtn: "Back",
      hero: {
        question: "What is IT / Systems / MIS?",
        desc: "The department that manages factory software, ERP systems, data flow, and automation to enable fast decisions, ensure data accuracy, and reduce manual work.",
        simple: "Simple words: Running the factory through systems and data.",
        mantra: "Data is the new oil; Systems are the engine."
      },
      pillars: [
        {
          id: 1,
          title: "Software Management",
          tag: "Control",
          desc: "Control of all software used in the factory.",
          points: [
            "Dept Support (Prod, Qual, HR, Store)",
            "Installation & Regular Updates",
            "User ID & Access Control",
            "Bug fixing & Troubleshooting"
          ],
          purpose: "Systems run smoothly; avoid software downtime.",
          icon: "💻",
          color: "blue",
          clickable: true
        },
        {
          id: 2,
          title: "ERP (Enterprise Resource Planning)",
          tag: "Integration",
          desc: "All department data in one single system.",
          points: [
            "Purchase (PO, Vendor) sync",
            "Store (GRN, Inventory) tracking",
            "Production (BOM, WIP) logic",
            "Quality & Finance integration"
          ],
          purpose: "Create a Single Source of Truth for the whole factory.",
          icon: "🖥️",
          color: "indigo",
          clickable: true
        },
        {
          id: 3,
          title: "Data Management & Cyber Security",
          tag: "Security",
          desc: "Collection, storage, and protection of factory data.",
          points: [
            "Firewalls & Antivirus protection",
            "VPNs for secure remote access",
            "Access Control Policies (Role-based)",
            "Backup & Disaster recovery"
          ],
          purpose: "Prevent data breaches, unauthorized access, and ensure factory data safety.",
          icon: "🗄️",
          color: "cyan",
          clickable: true
        },
        {
          id: 4,
          title: "MIS (Mgmt Information System)",
          tag: "Dashboards",
          desc: "Reports and dashboards for decision-making.",
          points: [
            "Daily Production Reports (DPR)",
            "Live OEE Dashboards",
            "Rejection & Quality trends",
            "Inventory & Stock status"
          ],
          purpose: "Provide management with the right data at the right time.",
          icon: "📊",
          color: "emerald",
          clickable: true
        },
        {
          id: 5,
          title: "Automation & Digitalization",
          tag: "Smart Factory",
          desc: "Moving from manual work to system-based flow.",
          points: [
            "Barcode / QR code implementation",
            "Auto Weight/Dimension capture",
            "Andon & Alert systems",
            "Direct Machine Data Capture (IoT)"
          ],
          purpose: "Lower errors, higher speed, 100% transparency.",
          icon: "🤖",
          color: "purple",
          clickable: true
        },
        {
          id: 6,
          title: "IT Infrastructure",
          tag: "Hardware",
          desc: "Supporting the physical tech environment.",
          points: [
            "PC, Printers & Scanners maintenance",
            "LAN / Wi-Fi / Server management",
            "CCTV & Biometric systems",
            "Cybersecurity firewalls"
          ],
          purpose: "Safe, reliable, and high-speed IT environment.",
          icon: "🌐",
          color: "slate",
          clickable: true
        }
      ],
      summary: "IT / Systems ensures the factory is digitally connected, automated, and data-driven."
    },
    hi: {
      title: "IT / सिस्टम / MIS हब",
      subtitle: "डिजिटल इंफ्रास्ट्रक्चर और डेटा इंटेलिजेंस",
      backBtn: "वापस",
      hero: {
        question: "IT / Systems / MIS क्या होता है?",
        desc: "वह विभाग जो फैक्ट्री के सॉफ्टवेयर, ERP सिस्टम, डेटा फ्लो और ऑटोमेशन को मैनेज करता है, ताकि फैसले तेज़ हों, डेटा सही रहे और मैन्युअल काम कम हो।",
        simple: "आसान शब्दों में: 'सिस्टम और डेटा के ज़रिए फैक्ट्री चलाना' (Digital Factory)।",
        mantra: "डेटा ही नई शक्ति है; सिस्टम ही इंजन है।"
      },
      pillars: [
        {
          id: 1,
          title: "सॉफ्टवेयर मैनेजमेंट",
          tag: "कंट्रोल",
          desc: "फैक्ट्री में इस्तेमाल होने वाले सभी सॉफ्टवेयर का नियंत्रण।",
          points: [
            "विभागों का सपोर्ट (Prod, Qual, HR, Store)",
            "इंस्टॉलेशन और रेगुलर अपडेट्स",
            "User ID और एक्सेस कंट्रोल",
            "बग फिक्सिंग और गड़बड़ सुधारना"
          ],
          purpose: "सिस्टम बिना रुके चलें और काम न अटके।",
          icon: "💻",
          color: "blue",
          clickable: true
        },
        {
          id: 2,
          title: "ERP (एंटरप्राइज रिसोर्स प्लानिंग)",
          tag: "एकीकरण",
          desc: "एक ही सिस्टम में सभी विभागों का डेटा।",
          points: [
            "परचेज (PO, वेंडर) तालमेल",
            "स्टोर (GRN, स्टॉक) ट्रैकिंग",
            "प्रोडक्शन (BOM, WIP) लॉजिक",
            "क्वालिटी और फाइनेंस इंटीग्रेशन"
          ],
          purpose: "पूरी फैक्ट्री के लिए 'एक ही सच' (Single Source of Truth) बनाना।",
          icon: "🖥️",
          color: "indigo",
          clickable: true
        },
        {
          id: 3,
          title: "डेटा मैनेजमेंट और साइबर सुरक्षा",
          tag: "सुरक्षा",
          desc: "फैक्ट्री डेटा का संग्रह, स्टोरेज और सुरक्षा।",
          points: [
            "फ़ायरवॉल और एंटीवायरस सुरक्षा",
            "सुरक्षित रिमोट एक्सेस के लिए VPN",
            "एक्सेस कंट्रोल पॉलिसी (रोल-आधारित)",
            "बैकअप और डेटा रिकवरी"
          ],
          purpose: "डेटा चोरी और अनधिकृत पहुँच को रोकना और फैक्ट्री डेटा की सुरक्षा सुनिश्चित करना।",
          icon: "🗄️",
          color: "cyan",
          clickable: true
        },
        {
          id: 4,
          title: "MIS (मैनेजमेंट रिपोर्टिंग)",
          tag: "डैशबोर्ड",
          desc: "फैसले लेने के लिए रिपोर्ट्स और डैशबोर्ड।",
          points: [
            "डेली प्रोडक्शन रिपोर्ट (DPR)",
            "लाइव OEE डैशबोर्ड",
            "रिजेक्शन और क्वालिटी ट्रेंड्स",
            "इन्वेंटरी और स्टॉक की स्थिति"
          ],
          purpose: "मैनेजमेंट को सही डेटा, सही समय पर देना।",
          icon: "📊",
          color: "emerald",
          clickable: true
        },
        {
          id: 5,
          title: "ऑटोमेशन और डिजिटलीकरण",
          tag: "स्मार्ट फैक्ट्री",
          desc: "मैन्युअल काम को सिस्टम-आधारित बनाना।",
          points: [
            "बारकोड / QR कोड सिस्टम",
            "ऑटो वजन और माप रिकॉर्डिंग",
            "Andon और अलर्ट सिस्टम",
            "मशीन डेटा कैप्चर (IoT)"
          ],
          purpose: "गलतियां कम, रफ़्तार ज्यादा और 100% पारदर्शिता।",
          icon: "🤖",
          color: "purple",
          clickable: true
        },
        {
          id: 6,
          title: "IT इंफ्रास्ट्रक्चर",
          tag: "हार्डवेयर",
          desc: "फैक्ट्री के तकनीकी माहौल को संभालना।",
          points: [
            "कंप्यूटर, प्रिंटर और स्कैनर मेंटेनेंस",
            "LAN / Wi-Fi / सर्वर मैनेजमेंट",
            "CCTV और बायोमेट्रिक सिस्टम",
            "साइबर सुरक्षा फायरबॉल्स"
          ],
          purpose: "सुरक्षित, भरोसेमंद और तेज़ इंटरनेट/नेटवर्क माहौल।",
          icon: "🌐",
          color: "slate",
          clickable: true
        }
      ],
      summary: "IT / Systems सुनिश्चित करता है कि फैक्ट्री डिजिटल रूप से जुड़ी हुई, ऑटोमेटेड और डेटा-आधारित रहे।"
    }
  };

  const current = content[lang] || content['en'];

  if (selectedSectionId !== null) {
    return <ITSectionDetail sectionId={selectedSectionId} onBack={() => setSelectedSectionId(null)} lang={lang} />;
  }

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-cyan-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_12px_cyan]"></div>
              <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono italic">System Node</h3>
        </div>
        <button onClick={onBack} className="bg-cyan-700 hover:bg-cyan-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-cyan-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Digital Pulse</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-cyan-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-cyan-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors">
            <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic mb-4">"💻 {current.hero.simple}"</p>
            <p className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.6em] animate-pulse italic">"{current.hero.mantra}"</p>
         </div>
      </div>

      {/* 6 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {current.pillars.map((p) => (
            <div 
              key={p.id} 
              onClick={() => p.clickable && setSelectedSectionId(p.id)}
              className={`bg-slate-950/60 border border-white/5 p-8 rounded-[40px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden border-t-4 border-t-${p.color}-500/40 ${p.clickable ? 'cursor-pointer hover:border-cyan-500/40' : ''}`}
            >
               <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 bg-slate-900 border border-${p.color}-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>{p.icon}</div>
                  <span className={`text-${p.color}-500 font-black text-[9px] uppercase tracking-widest border border-${p.color}-500/30 px-3 py-1 rounded-full`}>{p.tag}</span>
               </div>

               <div className="space-y-1">
                  <h5 className="text-white text-xl font-black uppercase tracking-tight group-hover:text-cyan-400 transition-colors">0{p.id}. {p.title}</h5>
                  <p className="text-slate-500 text-[10px] font-bold leading-relaxed italic uppercase">"{p.desc}"</p>
               </div>

               {p.clickable && (
                 <div className="flex items-center gap-2 text-cyan-400 text-[8px] font-black uppercase tracking-widest animate-pulse group-hover:text-white transition-colors">
                    Explore Deep Intel <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                 </div>
               )}

               <div className="space-y-3 pt-6 border-t border-white/5">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-4">Functional Elements / मुख्य कार्य:</span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {p.points.map((point, idx) => (
                       <div key={idx} className="flex items-start gap-3 group/point">
                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-${p.color}-500/40 group-hover/point:bg-${p.color}-500 transition-colors`}></div>
                          <span className="text-slate-300 text-[10px] font-bold uppercase tracking-tight leading-tight group-hover:point:text-white transition-colors">{point}</span>
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

      {/* Summary Logic Footer */}
      <div className="bg-cyan-600 p-10 rounded-[48px] shadow-[0_0_50px_rgba(6,182,212,0.3)] text-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-700 animate-pulse opacity-50"></div>
         <div className="relative z-10 space-y-4">
            <h5 className="text-white/60 font-black text-[10px] uppercase tracking-[0.6em] mb-2">Technical Insight</h5>
            <p className="text-white text-lg md:text-2xl font-black italic tracking-tight leading-snug">
               "{current.summary}"
            </p>
         </div>
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_12px_cyan] animate-pulse"></span>
                System Sync: Active
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_12px_emerald]"></span>
                Automation: Online
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">IT-Core v16.4 // Data Operations Node</div>
      </div>
    </div>
  );
};

export default ITSystemsDetail;

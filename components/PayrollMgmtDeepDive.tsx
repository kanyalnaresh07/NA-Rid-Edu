
import React from 'react';
import { Language } from '../types';

interface PayrollMgmtDeepDiveProps {
  onBack: () => void;
  lang: Language;
}

const PayrollMgmtDeepDive: React.FC<PayrollMgmtDeepDiveProps> = ({ onBack, lang }) => {
  const content = {
    en: {
      title: "Payroll Management",
      subtitle: "Compensation & Trust Systems",
      backBtn: "Back to HR",
      hero: {
        question: "What is Payroll Management?",
        desc: "Calculating and paying employees' salary, benefits, and government deductions correctly and on time.",
        simple: "Simple words: 'Right money for the right work, on time.'",
        mantra: "A happy pocket makes a happy worker."
      },
      pillars: [
        {
          id: 1,
          title: "Salary & OT Calculation",
          tag: "Earnings",
          desc: "Calculating monthly pay based on work done.",
          points: [
            "Basic Salary, HRA & Allowances",
            "Attendance & Shift data sync",
            "Approved Overtime (OT) hours",
            "LWP (Leave Without Pay) deduction"
          ],
          purpose: "Fair and accurate payment for every minute worked.",
          icon: "💵",
          color: "violet"
        },
        {
          id: 2,
          title: "Incentive Processing",
          tag: "Bonus Power",
          desc: "Extra pay for extra effort or performance.",
          points: [
            "Production target incentives",
            "100% Attendance bonus",
            "Quality & Safety awards",
            "Festival or Performance bonus"
          ],
          purpose: "Boost productivity and keep workers motivated.",
          icon: "🚀",
          color: "fuchsia"
        },
        {
          id: 3,
          title: "PF / ESI / Govt Rules",
          tag: "Security",
          desc: "Legal deductions for future safety.",
          points: [
            "PF (Provident Fund) - Savings",
            "ESI (Employee State Insurance) - Medical",
            "Professional Tax & TDS",
            "Timely Govt. Challan filing"
          ],
          purpose: "Ensure legal safety and long-term worker benefits.",
          icon: "⚖️",
          color: "indigo"
        },
        {
          id: 4,
          title: "Payslip Generation",
          tag: "Transparency",
          desc: "Official record of the salary breakup.",
          points: [
            "Full earnings & deductions list",
            "Net Payable (In-hand salary)",
            "Digital / Printed copies",
            "Helpdesk for salary queries"
          ],
          purpose: "Build employee trust through clear information.",
          icon: "📄",
          color: "purple"
        },
        {
          id: 5,
          title: "Contractor Bill Check",
          tag: "Audit",
          desc: "Verifying bills of external manpower providers.",
          points: [
            "Attendance cross-check (Store/Gate)",
            "Wage rate & OT verification",
            "Compliance doc verification",
            "Prevention of over-billing"
          ],
          purpose: "Ensure company pays only for actual work done.",
          icon: "🔍",
          color: "slate"
        }
      ],
      summary: "Payroll is the bridge of trust between the Management and the Worker."
    },
    hi: {
      title: "पेरोल (Payroll) मैनेजमेंट",
      subtitle: "सैलरी और भरोसे का सिस्टम",
      backBtn: "HR पर वापस जाएं",
      hero: {
        question: "Payroll Management क्या होता है?",
        desc: "कर्मचारियों और वर्करों की सैलरी, बोनस और सरकारी कटौती (PF/ESI) का सही हिसाब लगाकर समय पर भुगतान करना।",
        simple: "आसान शब्दों में: 'काम के बदले सही पैसा, सही समय पर' (Salary on time)।",
        mantra: "जब जेब खुश होगी, तभी काम में जोश होगा।"
      },
      pillars: [
        {
          id: 1,
          title: "सैलरी और OT कैलकुलेशन",
          tag: "कमाई",
          desc: "महीने की तनख्वाह और ओवरटाइम का हिसाब।",
          points: [
            "Basic Salary और भत्ते (Allowances)",
            "हाजिरी (Attendance) के हिसाब से सैलरी",
            "पास किए गए OT घंटों की गिनती",
            "बिना बताए छुट्टी (LWP) की कटौती"
          ],
          purpose: "हर एक मिनट के काम का सही और निष्पक्ष दाम देना।",
          icon: "💵",
          color: "violet"
        },
        {
          id: 2,
          title: "इंसेंटिव (Incentive) प्रोसेस",
          tag: "इनाम",
          desc: "अच्छे काम के लिए मिलने वाला एक्स्ट्रा पैसा।",
          points: [
            "प्रोडक्शन टारगेट पूरा करने पर इनाम",
            "पूरी हाजिरी (100% Attendance) का बोनस",
            "क्वालिटी और सुरक्षा में सहयोग का इनाम",
            "त्योहार या परफॉरमेंस बोनस"
          ],
          purpose: "वर्करों का हौसला बढ़ाना और प्रोडक्शन तेज़ करना।",
          icon: "🚀",
          color: "fuchsia"
        },
        {
          id: 3,
          title: "PF / ESI / सरकारी नियम",
          tag: "सुरक्षा",
          desc: "भविष्य की बचत और सरकारी नियमों का पालन।",
          points: [
            "PF - भविष्य के लिए बचत",
            "ESI - मुफ्त इलाज की सुविधा",
            "टैक्स और अन्य ज़रूरी कटौतियां",
            "समय पर सरकारी पैसा जमा करना"
          ],
          purpose: "वर्कर का भविष्य सुरक्षित करना और कानूनी पचड़ों से बचना।",
          icon: "⚖️",
          color: "indigo"
        },
        {
          id: 4,
          title: "पे-स्लिप (Payslip) बनाना",
          tag: "पारदर्शिता",
          desc: "सैलरी के एक-एक रुपये का लिखित हिसाब।",
          points: [
            "पूरी कमाई और कटौती का विवरण",
            "In-hand सैलरी (हाथ में आने वाला पैसा)",
            "डिजिटल या प्रिंटेड सैलरी स्लिप",
            "सैलरी से जुड़े सवालों का समाधान"
          ],
          purpose: "वर्कर को सही जानकारी देकर उसका भरोसा जीतना।",
          icon: "📄",
          color: "purple"
        },
        {
          id: 5,
          title: "ठेकेदार बिल की जांच",
          tag: "ऑडिट",
          desc: "बाहरी वर्करों के बिलों का सटीक मिलान।",
          points: [
            "हाजिरी का मिलान (Gate/HR डेटा)",
            "सैलरी रेट और OT की जांच",
            "सरकारी नियमों (Compliance) का पालन",
            "गलत बिलिंग और पैसों का नुकसान रोकना"
          ],
          purpose: "यह पक्का करना कि कंपनी सिर्फ असली काम का पैसा दे रही है।",
          icon: "🔍",
          color: "slate"
        }
      ],
      summary: "पेरोल मैनेजमेंट मैनेजमेंट और वर्कर के बीच भरोसे की मज़बूत कड़ी है।"
    }
  };

  const current = content[lang] || content['en'];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-violet-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-violet-500 rounded-full animate-pulse shadow-[0_0_12px_violet]"></div>
              <span className="text-violet-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg font-mono italic">Pillar 03: Payroll</h3>
        </div>
        <button onClick={onBack} className="bg-violet-700 hover:bg-violet-600 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1 border border-white/10">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Definition */}
      <div className="bg-slate-900 border border-violet-500/30 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Finance Flow</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-violet-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-6 md:p-10 rounded-[32px] border-l-8 border-violet-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors">
            <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic mb-4">"💰 {current.hero.simple}"</p>
            <p className="text-violet-500 text-[10px] font-black uppercase tracking-[0.6em] animate-pulse italic">"{current.hero.mantra}"</p>
         </div>
      </div>

      {/* 5 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {current.pillars.map((p) => (
            <div key={p.id} className={`bg-slate-950/60 border border-white/5 p-8 rounded-[40px] hover:bg-slate-900 transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden border-t-4 border-t-${p.color}-500/40`}>
               <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 bg-slate-900 border border-${p.color}-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>{p.icon}</div>
                  <span className={`text-${p.color}-500 font-black text-[9px] uppercase tracking-widest border border-${p.color}-500/30 px-3 py-1 rounded-full`}>{p.tag}</span>
               </div>

               <div className="space-y-1">
                  <h5 className="text-white text-xl font-black uppercase tracking-tight group-hover:text-violet-400 transition-colors">0{p.id}. {p.title}</h5>
                  <p className="text-slate-500 text-[10px] font-bold leading-relaxed italic uppercase">"{p.desc}"</p>
               </div>

               <div className="space-y-3 pt-6 border-t border-white/5">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-4">Core Components / क्या होता है:</span>
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
                  <span className={`text-${p.color}-500 text-[9px] font-black uppercase block mb-1`}>Critical Purpose / उद्देश्य:</span>
                  <p className="text-white text-[11px] font-bold italic leading-tight">📌 {p.purpose}</p>
               </div>
            </div>
         ))}
      </div>

      {/* Payslip Anatomy Visual */}
      <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl space-y-8 relative overflow-hidden text-slate-900 border-t-[12px] border-violet-600">
         <div className="absolute top-0 right-0 p-8 text-6xl font-black text-slate-100 select-none uppercase italic">TRUST RECEIPT</div>
         <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-4 flex-1">
               <h4 className="text-2xl font-black uppercase tracking-tighter">{lang === 'hi' ? 'सैलरी स्लिप (Anatomy)' : 'Payslip Anatomy'}</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                     <span className="text-[9px] font-black text-emerald-700 uppercase block mb-2">Earnings (+)</span>
                     <ul className="text-[10px] font-bold space-y-1 opacity-70">
                        <li>Basic Salary</li>
                        <li>HRA / Rent</li>
                        <li>OT Amount</li>
                        <li>Incentive</li>
                     </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                     <span className="text-[9px] font-black text-rose-700 uppercase block mb-2">Deductions (-)</span>
                     <ul className="text-[10px] font-bold space-y-1 opacity-70">
                        <li>PF Contribution</li>
                        <li>ESI Contribution</li>
                        <li>Tax (TDS)</li>
                        <li>LWP Deductions</li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="w-full md:w-64 bg-slate-900 p-8 rounded-3xl flex flex-col items-center justify-center text-center gap-4">
               <div className="w-16 h-16 bg-violet-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-xl">💳</div>
               <span className="text-violet-400 text-[8px] font-black uppercase tracking-widest">NET PAYABLE</span>
               <p className="text-white text-3xl font-black italic">₹ XXX,XXX</p>
               <span className="text-white/20 text-[7px] font-bold uppercase">100% System Calculated</span>
            </div>
         </div>
      </div>

      {/* Summary Logic Footer */}
      <div className="bg-violet-600 p-10 rounded-[48px] shadow-[0_0_50px_rgba(139,92,246,0.3)] text-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-r from-violet-700 via-violet-600 to-violet-700 animate-pulse opacity-50"></div>
         <div className="relative z-10 space-y-4">
            <h5 className="text-white/90 font-black text-[10px] uppercase tracking-[0.6em] mb-2">Technical Insight</h5>
            <p className="text-white text-lg md:text-2xl font-black italic tracking-tight leading-snug">
               "{current.summary}"
            </p>
         </div>
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <div className="flex gap-8">
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-violet-500 rounded-full shadow-[0_0_10px_violet] animate-pulse"></span>
                Payroll Engine: Secure
             </span>
             <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_emerald]"></span>
                Bank Sync: Active
             </span>
          </div>
          <div className="opacity-60 italic uppercase tracking-widest font-mono">HR-Node v14.4 // Payroll Module</div>
      </div>
    </div>
  );
};

export default PayrollMgmtDeepDive;

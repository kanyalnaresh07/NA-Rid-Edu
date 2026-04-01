
import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface LogisticsDetailProps {
  onBack: () => void;
  lang: Language;
}

const LogisticsDetail: React.FC<LogisticsDetailProps> = ({ onBack, lang }) => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedPointIndex, setSelectedPointIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedModule, selectedPointIndex]);

  const content = {
    en: {
      title: "Logistics & Dispatch Hub",
      subtitle: "Final Mile & Value Delivery",
      backBtn: "Exit Hub",
      backToList: "Back to Sections",
      backToModule: "Back to Overview",
      hero: {
        question: "What is Logistics / Dispatch?",
        desc: "The function that safely packs Finished Goods (FG) and delivers them with correct documents at the right time to the customer.",
        simple: "Simple words: The final and most critical step from factory to customer.",
        mantra: "Perfect Production + Failed Logistics = Unhappy Customer."
      },
      sections: [
        { 
          id: 'packing', 
          title: "Packing Operations", 
          tag: "Product Safety", 
          desc: "Damage-free packaging process.", 
          icon: "📦", 
          color: "blue",
          points: ["SOP Adherence", "Inner/Outer Layer", "Labeling", "Accessories", "Damage Prevention"],
          details: {
            title: "Packing (Product Protection)",
            definition: "Ensuring the product is safe and damage-free through standardized packaging methods.",
            points: [
              { h: "Packing Standard / SOP", d: "Following a fixed sequence of packing for every unit.", p: "To ensure consistent protection.", details: ["Process sequence", "Standard material use", "Packing line discipline"] },
              { h: "Inner & Outer Packing", d: "Using layers like bubble wrap, foam, and corrugated cartons.", p: "Protects from shocks and vibration.", details: ["Bubble/Foam layer", "Corrugated box grade", "Seal integrity"] },
              { h: "Labeling Accuracy", d: "Applying correct model, quantity, batch, and handling marks.", p: "Ensures correct identification in transit.", details: ["Model & Serial labels", "Handling marks (Fragile)", "Batch traceability labels"] },
              { h: "Accessories & Docs Inclusion", d: "Checking that manuals, cables, and warranty cards are inside.", p: "Prevents customer complaints about missing parts.", details: ["User manuals", "Connecting cables", "Warranty certificates"] },
              { h: "Drop / Damage Prevention", d: "Handling cartons carefully to avoid internal component damage.", p: "Maintains product appearance and function.", details: ["Stacking limits", "Drop test standards", "Safe handling tools"] }
            ],
            output: ["Zero transit damage", "Correct product ID", "Complete accessory kits"],
            summary: "Product ko safe aur damage-free bana kar customer tak bhejne ke liye packing."
          }
        },
        { 
          id: 'shipment', 
          title: "Shipment Planning", 
          tag: "Dispatch Logic", 
          desc: "Customer order fulfillment plan.", 
          icon: "📅", 
          color: "emerald",
          points: ["Invoice Verify", "Scheduling", "Route Planning", "FIFO Flow", "Clearances"],
          details: {
            title: "Shipment (Dispatch Planning)",
            definition: "Planning the dispatch according to customer orders and priority.",
            points: [
              { h: "Order / Invoice Verification", d: "Matching physical goods with the customer sales order.", p: "Avoids wrong item or quantity dispatch.", details: ["Order count check", "Invoice matching", "SKU verification"] },
              { h: "Shipment Scheduling", d: "Setting specific times for loading and departure.", p: "Ensures on-time delivery commitment.", details: ["Dispatch time slot", "Truck availability check", "Team readiness"] },
              { h: "Route & Priority Planning", d: "Deciding which customer gets delivery first based on urgency.", p: "Optimizes delivery speed for critical orders.", details: ["Urgent order tagging", "Route optimization", "Priority customer focus"] },
              { h: "FIFO / Order Segregation", d: "Ensuring oldest stock moves out first to maintain rotation.", p: "Avoids stagnant stock in warehouse.", details: ["FIFO adherence", "Order-wise grouping", "Lot rotation"] },
              { h: "Dispatch Clearance", d: "Getting final 'OK' from Quality and Finance departments.", p: "Ensures no bad parts or payment issues.", details: ["Quality release stamp", "Account clearance", "Gate pass approval"] }
            ],
            output: ["On-time delivery", "Zero wrong shipments", "Financial compliance"],
            summary: "Customer orders ke hisaab se sahi plan bana kar dispatch karna."
          }
        },
        { 
          id: 'transport', 
          title: "Transportation", 
          tag: "Final Transit", 
          desc: "Moving product to customer site.", 
          icon: "🚛", 
          color: "indigo",
          points: ["Vehicle Selection", "Loading/Lashing", "Transit Tracking", "POD Confirm", "Issue Handling"],
          details: {
            title: "Transportation (Delivery Execution)",
            definition: "The physical movement of goods from factory gate to customer location.",
            points: [
              { h: "Transporter / Vehicle Selection", d: "Choosing the right truck based on size and reliability.", p: "Cost optimization and safe transit.", details: ["Truck condition check", "Transporter rating", "Cost negotiation"] },
              { h: "Vehicle Loading & Lashing", d: "Safely placing and securing goods inside the truck.", p: "Prevents movement and damage during transit.", details: ["Safe stacking", "Belt/Rope lashing", "Loading sequence"] },
              { h: "Transit Tracking", d: "Monitoring the vehicle location until it reaches the customer.", p: "Real-time visibility for the client.", details: ["GPS tracking", "En-route updates", "E-way bill sync"] },
              { h: "Delivery Confirmation (POD)", d: "Receiving the 'Proof of Delivery' signed by the customer.", p: "Evidence for payment and record.", details: ["Signed copy of Invoice", "Delivery date stamp", "ERP closure"] },
              { h: "Damage / Shortage Handling", d: "Managing insurance and replacement if goods are lost/damaged.", p: "Risk mitigation and customer support.", details: ["Transit insurance", "Claim filing", "Quick replacement plan"] }
            ],
            output: ["Safe arrival", "Documented delivery", "Customer trust"],
            summary: "Product ko customer location tak sahi-salamat pahunchana."
          }
        },
        { 
          id: 'support', 
          title: "Supporting Work", 
          tag: "Sync", 
          desc: "Documentation & Coordination.", 
          icon: "⛓️", 
          color: "amber",
          points: ["Documentation", "Sales Sync", "Cost Optimization", "Return Logistics"],
          details: {
            title: "Supporting Activities (Logic Hub)",
            definition: "Secondary activities that are vital for smooth dispatch and legal compliance.",
            points: [
              { h: "Dispatch Documentation", d: "Preparing Invoice, E-way bill, and Lorry Receipt (LR).", p: "Legal movement on the road.", details: ["GST Invoice prep", "E-way bill portal", "LR management"] },
              { h: "Sales / PPC Coordination", d: "Continuous sync for plan changes or urgent requests.", p: "Prevents last-minute chaos.", details: ["Daily status meeting", "Plan update sync", "Inventory check"] },
              { h: "Freight Cost Optimization", d: "Analyzing and reducing transport expenses.", p: "Increases company profit margins.", details: ["Route clubbing", "Vendor negotiation", "Bulk freight analysis"] },
              { h: "Return / Replacement Logistics", d: "Managing 'Reverse Logistics' for rejected or repair parts.", p: "Handles customer returns effectively.", details: ["Return order management", "Inbound inspection", "Repair tracking"] }
            ],
            output: ["Legal compliance", "Lower freight cost", "Smooth coordination"],
            summary: "Coordination aur documents ke saath logistics ko mazboot banana."
          }
        }
      ]
    },
    hi: {
      title: "लॉजिस्टिक्स और डिस्पैच हब",
      subtitle: "अंतिम कदम और ग्राहक सेवा",
      backBtn: "हब से बाहर",
      backToList: "सेक्शन लिस्ट पर वापस",
      backToModule: "पीछे जाएं",
      hero: {
        question: "Logistics / Dispatch क्या होता है?",
        desc: "तैयार माल (FG) को सुरक्षित पैक करना, सही दस्तावेजों के साथ सही समय पर ग्राहक तक पहुँचाना डिस्पैच कहलाता है।",
        simple: "आसान भाषा में: फैक्ट्री से ग्राहक तक का आखिरी और सबसे ज़रूरी कदम।",
        mantra: "प्रोडक्शन सही + डिस्पैच खराब = ग्राहक असंतुष्ट।"
      },
      sections: [
        { 
          id: 'packing', 
          title: "Packing Operations", 
          tag: "प्रोडक्ट सुरक्षा", 
          desc: "सुरक्षित पैकिंग का तरीका।", 
          icon: "📦", 
          color: "blue",
          points: ["SOP पालन", "मजबूत लेयर्स", "लेबलिंग", "एक्सेसरीज", "डैमेज से बचाव"],
          details: {
            title: "पैकिंग (Product Protection)",
            definition: "प्रोडक्ट को सुरक्षित और डैमेज-फ्री रखने के लिए स्टैंडर्ड तरीके से पैक करना।",
            points: [
              { h: "Packing Standard / SOP", d: "हर प्रोडक्ट के लिए तय किए गए स्टेप्स के अनुसार पैकिंग करना।", p: "एक जैसी सुरक्षा सुनिश्चित करना।", details: ["काम का क्रम", "स्टैंडर्ड मटेरियल", "लाइन अनुशासन"] },
              { h: "Inner & Outer Packing", d: "बबल रैप, फोम और कार्टन बॉक्स की लेयर्स का इस्तेमाल।", p: "झटकों और वाइब्रेशन से बचाव।", details: ["अंदर की सुरक्षा (Foam)", "मजबूत बाहरी बॉक्स", "सील और टेप की जांच"] },
              { h: "Labeling Accuracy", d: "सही मॉडल, मात्रा, बैच और हैंडलिंग मार्क्स लगाना।", p: "रास्ते में सही पहचान के लिए ज़रूरी।", details: ["मॉडल और सीरियल स्टिकर", "हैंडलिंग निशान (Fragile)", "बैच नंबर की ट्रेसेबिलिटी"] },
              { h: "Accessories & Docs Inclusion", d: "मैनुअल, केबल और वारंटी कार्ड को बॉक्स के अंदर रखना।", p: "सामान छूटने की शिकायतों से बचाव।", details: ["यूजर मैनुअल", "कनेक्टिंग केबल्स", "वारंटी कार्ड"] },
              { h: "Drop / Damage Prevention", d: "बॉक्स को सावधानी से पकड़ना ताकि अंदर का पार्ट न टूटे।", p: "फिनिशिंग और फंक्शन को सही रखना।", details: ["स्टैकिंग लिमिट", "ड्रॉप टेस्ट मानक", "सुरक्षित हैंडलिंग टूल्स"] }
            ],
            output: ["रास्ते में नुकसान नहीं", "सही पहचान", "पूरा सामान (Kit)"],
            summary: "Product को safe aur damage-free bana kar customer tak bhejne ke liye packing."
          }
        },
        { 
          id: 'shipment', 
          title: "Shipment Planning", 
          tag: "डिस्पैच प्लान", 
          desc: "ऑर्डर के हिसाब से प्लानिंग।", 
          icon: "📅", 
          color: "emerald",
          points: ["बिल मिलान", "शेड्यूलिंग", "रूट प्लानिंग", "FIFO फ्लो", "क्लियरेंस"],
          details: {
            title: "शिपमेंट (Dispatch Planning)",
            definition: "कस्टमर ऑर्डर और प्राथमिकता (Priority) के हिसाब से डिस्पैच प्लान करना।",
            points: [
              { h: "Order / Invoice Verification", d: "तैयार माल का कस्टमर के ऑर्डर और बिल से मिलान करना।", p: "गलत माल या गलत मात्रा भेजने से बचाव।", details: ["मात्रा की जांच", "बिल से मिलान", "मॉडल वेरिफिकेशन"] },
              { h: "Shipment Scheduling", d: "लोडिंग और ट्रक रवानगी के लिए सही समय तय करना।", p: "समय पर डिलीवरी का वादा पूरा करना।", details: ["डिस्पैच का समय", "ट्रक की उपलब्धता", "टीम की तैयारी"] },
              { h: "Route & Priority Planning", d: "प्राथमिकता के हिसाब से तय करना कि कौन सा माल पहले जाएगा।", p: "अर्जेन्ट ऑर्डर्स की तेज़ डिलीवरी।", details: ["अर्जेंट टैगिंग", "रूट का चुनाव", "खास ग्राहक फोकस"] },
              { h: "FIFO / Order Segregation", d: "पुराना स्टॉक पहले निकालने के लिए उसे अलग करना।", p: "वेयरहाउस में पुराना माल जमा होने से रोकना।", details: ["FIFO का पालन", "ऑर्डर-वाइज ग्रुपिंग", "स्टॉक रोटेशन"] },
              { h: "Dispatch Clearance", d: "क्वालिटी और फाइनेंस विभाग से अंतिम मंजूरी लेना।", p: "खराब माल या पेमेंट की गड़बड़ रोकना।", details: ["क्वालिटी पास स्टैम्प", "फाइनेंस क्लियरेंस", "गेट पास अप्रूवल"] }
            ],
            output: ["समय पर डिलीवरी", "कोई गलत शिपमेंट नहीं", "नियमों का पालन"],
            summary: "Customer orders ke hisaab se sahi plan bana kar dispatch karna."
          }
        },
        { 
          id: 'transport', 
          title: "Transportation", 
          tag: "माल की रवानगी", 
          desc: "माल को ग्राहक तक पहुँचाना।", 
          icon: "🚛", 
          color: "indigo",
          points: ["गाड़ी का चुनाव", "लोडिंग सुरक्षा", "लोकेशन ट्रैक", "डिलीवरी सबूत", "समस्या समाधान"],
          details: {
            title: "ट्रांसपोर्टेशन (Transport Execution)",
            definition: "फैक्ट्री गेट से ग्राहक के पते तक माल पहुँचाने की असली प्रक्रिया।",
            points: [
              { h: "Transporter / Vehicle Selection", d: "माल के साइज के हिसाब से सही और भरोसेमंद ट्रक चुनना।", p: "लागत और सुरक्षा का सही तालमेल।", details: ["गाड़ी की हालत जांच", "वेंडर की रेटिंग", "रेट नेगोशिएशन"] },
              { h: "Vehicle Loading & Lashing", d: "ट्रक के अंदर माल को सही से जमाना और रस्सियों से बांधना।", p: "रास्ते में माल हिलने और टूटने से बचाना।", details: ["सुरक्षित स्टैकिंग", "रस्सी/बेल्ट से बंधाई", "लोडिंग का क्रम"] },
              { h: "Transit Tracking", d: "माल पहुँचने तक गाड़ी की लोकेशन पर नज़र रखना।", p: "कस्टमर को सटीक जानकारी देना।", details: ["GPS ट्रैकिंग", "रास्ते की जानकारी", "ई-वे बिल मिलान"] },
              { h: "Delivery Confirmation (POD)", d: "कस्टमर द्वारा साइन किया हुआ 'पावती' (POD) लेना।", p: "पेमेंट और रिकॉर्ड के लिए असली सबूत।", details: ["साइन किया बिल", "तारीख की मोहर", "सिस्टम एंट्री"] },
              { h: "Damage / Shortage Handling", d: "माल खोने या टूटने पर इंश्योरेंस और सप्लायर से तालमेल।", p: "नुकसान को कम करना।", details: ["ट्रांजिट इंश्योरेंस", "क्लेम फाइल करना", "रिप्लेसमेंट प्लान"] }
            ],
            output: ["सुरक्षित पहुँच", "डिलीवरी का रिकॉर्ड", "ग्राहक का भरोसा"],
            summary: "Product ko customer location tak sahi-salamat pahunchana."
          }
        },
        { 
          id: 'support', 
          title: "Supporting Work", 
          tag: "मददगार कार्य", 
          desc: "डॉक्यूमेंटेशन और तालमेल।", 
          icon: "⛓️", 
          color: "amber",
          points: ["दस्तावेज तैयारी", "सेल्स तालमेल", "लागत में कमी", "वापसी लॉजिस्टिक्स"],
          details: {
            title: "सपोर्टिंग गतिविधियाँ (Support Node)",
            definition: "वो कार्य जो डिस्पैच को कानूनी और सिस्टम के हिसाब से मज़बूत बनाते हैं।",
            points: [
              { h: "Dispatch Documentation", d: "Invoice, E-way bill, और LR तैयार करना।", p: "रास्ते में कानूनी सुरक्षा के लिए।", details: ["GST बिल बनाना", "ई-वे बिल पोर्टल", "LR मैनेजमेंट"] },
              { h: "Sales / PPC Coordination", d: "प्लान में बदलाव के लिए लगातार बातचीत करना।", p: "अंतिम समय की गड़बड़ से बचाव।", details: ["डेली मीटिंग", "प्लान अपडेट", "स्टॉक चेक"] },
              { h: "Freight Cost Optimization", d: "ट्रांसपोर्ट के खर्चों को कम करने के तरीके ढूँढना।", p: "कंपनी के मुनाफे को बढ़ाना।", details: ["रूट क्लबिंग", "वेंडर नेगोशिएशन", "भाड़ा विश्लेषण"] },
              { h: "Return / Replacement Logistics", d: "रिजेक्ट या रिपेयर माल को वापस लाने का मैनेजमेंट।", p: "कस्टमर वापसी को सही से संभालना।", details: ["रिटर्न आर्डर", "इनबाउंड जांच", "रिपेयर ट्रैकिंग"] }
            ],
            output: ["नियमों का पालन", "खर्चों में बचत", "शानदार तालमेल"],
            summary: "Coordination aur documents ke saath logistics ko mazboot banana."
          }
        }
      ]
    }
  };

  const current = content[lang] || content['en'];

  // 3rd Level Detail View (Deep Intel)
  if (selectedPointIndex !== null && selectedModule) {
    const moduleData = current.sections.find(s => s.id === selectedModule)?.details!;
    const point = moduleData.points[selectedPointIndex];
    const color = selectedModule === 'packing' ? 'blue' : selectedModule === 'shipment' ? 'emerald' : selectedModule === 'transport' ? 'indigo' : 'amber';
    const icon = selectedModule === 'packing' ? '📦' : selectedModule === 'shipment' ? '📅' : selectedModule === 'transport' ? '🚛' : '⛓️';

    return (
      <div className="flex flex-col gap-8 animate-in slide-in-from-bottom-4 duration-500 pb-16 max-w-5xl mx-auto px-4 md:px-8 py-8 relative">
        <div className={`flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-${color}-500/20 pb-6 bg-slate-950/40 p-8 rounded-t-[40px] backdrop-blur-md`}>
           <div className="flex items-center gap-6">
              <div className={`w-14 h-14 bg-slate-900 border border-${color}-500/40 rounded-2xl flex items-center justify-center text-3xl shadow-xl`}>{icon}</div>
              <div>
                 <h4 className={`text-${color}-400 text-[10px] font-black uppercase tracking-[0.4em] mb-1`}>Logistics Deep Intel / {selectedPointIndex + 1}</h4>
                 <h3 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter italic leading-none">{point.h}</h3>
              </div>
           </div>
           <button onClick={() => setSelectedPointIndex(null)} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-white/10 transition-all flex items-center gap-3">
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
              {current.backToModule}
           </button>
        </div>

        <div className="bg-slate-900 border border-white/10 p-10 rounded-[48px] shadow-2xl space-y-10 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Log Intel</div>
           
           <div className="space-y-6 relative z-10">
              <h4 className="text-white text-xl font-black uppercase tracking-widest border-b-2 border-indigo-500 w-fit pb-2">{lang === 'hi' ? 'मुख्य विवरण' : 'Core Explanation'}</h4>
              <p className={`text-slate-200 text-lg md:text-2xl font-bold leading-relaxed italic border-l-4 border-${color}-500 pl-6 bg-${color}-500/5 py-6 rounded-r-2xl`}>
                 "{point.d}"
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {point.details && (
                <div className="space-y-6">
                   <h5 className="text-white text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                      <span className={`w-8 h-px bg-${color}-500`}></span>
                      {lang === 'hi' ? 'शामिल कार्य' : 'Involved Elements'}
                   </h5>
                   <div className="space-y-3">
                      {point.details.map((det: string, idx: number) => (
                         <div key={idx} className="flex items-center gap-4 p-4 bg-slate-950/60 border border-white/5 rounded-2xl group hover:border-blue-500/30 transition-all">
                            <div className={`w-2 h-2 bg-${color}-500 rounded-full shadow-[0_0_8px_${color}]`}></div>
                            <span className="text-slate-300 text-sm font-bold uppercase">{det}</span>
                         </div>
                      ))}
                   </div>
                </div>
              )}

              <div className="space-y-6">
                 <h5 className="text-white text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                    <span className={`w-8 h-px bg-${color}-500`}></span>
                    {lang === 'hi' ? 'महत्व / उद्देश्य' : 'Strategic Purpose'}
                 </h5>
                 <div className={`bg-${color}-500/10 p-8 rounded-[40px] border border-${color}-500/20 shadow-inner h-full flex flex-col justify-center items-center text-center gap-4 group`}>
                    <div className={`w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-2xl shadow-lg transition-transform group-hover:scale-110`}>🚩</div>
                    <p className="text-white text-base md:text-lg font-black italic tracking-tight leading-snug">
                       "{point.p}"
                    </p>
                 </div>
              </div>
           </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
           <span className="flex items-center gap-3">
              <span className={`w-2 h-2 bg-${color}-500 rounded-full animate-pulse`}></span>
              Delivery Integrity Node: v3.2 Active
           </span>
           <span className="opacity-40 italic font-mono uppercase">Full Traceability Enabled</span>
        </div>
      </div>
    );
  }

  // Level 2: Module Overview (Activity List)
  if (selectedModule) {
    const data = current.sections.find(s => s.id === selectedModule)?.details!;
    const color = selectedModule === 'packing' ? 'blue' : selectedModule === 'shipment' ? 'emerald' : selectedModule === 'transport' ? 'indigo' : 'amber';
    const icon = selectedModule === 'packing' ? '📦' : selectedModule === 'shipment' ? '📅' : selectedModule === 'transport' ? '🚛' : '⛓️';
    
    return (
      <div className="flex flex-col gap-8 animate-in slide-in-from-right-4 duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-8 py-8 relative">
        <div className={`flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-${color}-500/20 pb-6 bg-slate-950/40 p-8 rounded-t-[40px] backdrop-blur-md`}>
          <div className="flex items-center gap-6">
             <div className={`w-16 h-16 bg-slate-900 border border-${color}-500/40 rounded-2xl flex items-center justify-center text-4xl shadow-xl`}>{icon}</div>
             <div>
                <h3 className="text-white text-2xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{data.title}</h3>
                <p className={`text-${color}-400 text-[10px] font-black uppercase tracking-[0.4em] mt-2`}>Logistics Fulfillment Module</p>
             </div>
          </div>
          <button onClick={() => setSelectedModule(null)} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest border border-white/10 transition-all shadow-xl flex items-center justify-center gap-3">
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
            {current.backToList}
          </button>
        </div>

        <div className={`bg-slate-900 border border-${color}-500/30 p-10 rounded-[48px] shadow-2xl space-y-6 relative overflow-hidden group`}>
           <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">{selectedModule}</div>
           <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-widest border-b-2 border-blue-500 w-fit pb-2">{lang === 'hi' ? 'मुख्य परिभाषा' : 'Tactical Definition'}</h4>
           <p className={`text-slate-200 text-lg md:text-2xl font-bold leading-relaxed italic border-l-4 border-${color}-500 pl-6 bg-${color}-500/5 py-4 rounded-r-2xl`}>
              "{data.definition}"
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
           <div className="lg:col-span-8 bg-slate-900/60 p-8 md:p-12 rounded-[48px] border border-white/5 shadow-2xl space-y-10">
              <h4 className="text-white text-xl font-black uppercase tracking-tight flex items-center gap-4">
                 <span className={`w-12 h-1 bg-${color}-500`}></span>
                 {lang === 'hi' ? `${data.points.length} मुख्य कार्य (क्लिक करें)` : `${data.points.length} Key Elements (Click for Details)`}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {data.points.map((pt, i) => (
                    <button 
                       key={i} 
                       onClick={() => setSelectedPointIndex(i)}
                       className="bg-slate-950/60 p-6 rounded-3xl border border-white/5 group hover:border-blue-500/40 transition-all flex flex-col gap-3 text-left shadow-lg relative overflow-hidden active:scale-95 h-full"
                    >
                       <div className="flex items-center justify-between">
                          <span className={`w-8 h-8 rounded-lg bg-slate-900 border border-${color}-500/30 flex items-center justify-center text-${color}-400 font-black text-xs`}>0{i+1}</span>
                          <span className="text-[7px] font-black text-white/20 uppercase tracking-[0.4em]">LOG-INTEL</span>
                       </div>
                       <h5 className="text-white font-black text-sm uppercase tracking-tight group-hover:text-blue-400 transition-colors">{pt.h}</h5>
                       <p className="text-slate-500 text-[10px] font-bold leading-relaxed line-clamp-2 italic">"{pt.d}"</p>
                       
                       <div className="mt-auto flex items-center gap-2 text-white/30 text-[7px] font-black uppercase tracking-widest group-hover:text-white transition-colors">
                          View Deep Intel <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
                       </div>
                    </button>
                 ))}
              </div>
           </div>

           <div className="lg:col-span-4 space-y-8">
              <div className={`bg-slate-900 p-10 rounded-[48px] border border-${color}-500/30 shadow-2xl flex flex-col items-center text-center gap-8 relative overflow-hidden`}>
                 <div className={`w-20 h-20 bg-${color}-500/10 border border-${color}-500/30 rounded-3xl flex items-center justify-center text-4xl shadow-lg`}>🏁</div>
                 <h5 className="text-white text-2xl font-black uppercase tracking-tighter italic leading-none">{lang === 'hi' ? 'अंतिम परिणाम' : 'Final Result'}</h5>
                 <div className="space-y-3 w-full">
                    {data.output.map((out, idx) => (
                       <div key={idx} className={`bg-${color}-500/10 border border-${color}-500/20 px-6 py-3 rounded-2xl text-${color}-400 text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3`}>
                          <span className="text-lg">✔</span> {out}
                       </div>
                    ))}
                 </div>
              </div>

              <div className={`bg-${color}-600 p-10 rounded-[48px] shadow-[0_0_50px_rgba(0,0,0,0.2)] text-center relative overflow-hidden group`}>
                 <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent opacity-30"></div>
                 <div className="relative z-10 space-y-4">
                    <h5 className="text-white/60 font-black text-[10px] uppercase tracking-[0.6em] mb-2">{lang === 'hi' ? 'निष्कर्ष (Summary)' : 'Core Summary'}</h5>
                    <p className="text-white text-lg md:text-xl font-black italic tracking-tight leading-snug">
                       "{data.summary}"
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    );
  }

  // Level 1: Module Grid
  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-8 py-8 relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-indigo-500/20 pb-6 bg-slate-950/40 p-8 rounded-t-[40px] backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_12px_indigo]"></div>
              <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-none font-mono italic">Logistics Hub</h3>
        </div>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl border border-white/10 flex items-center gap-3">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-indigo-500/30 p-10 md:p-14 rounded-[48px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-10 text-9xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Dispatch</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-indigo-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-8 md:p-10 rounded-[40px] border-l-8 border-indigo-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors">
            <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic mb-4">"🚀 {current.hero.simple}"</p>
            <p className="text-indigo-500 text-[10px] font-black uppercase tracking-[0.8em] animate-pulse">"{current.hero.mantra}"</p>
         </div>
      </div>

      {/* 4 Sections Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         {current.sections.map((sec) => (
            <div 
              key={sec.id} 
              onClick={() => setSelectedModule(sec.id)}
              className={`bg-slate-950/60 border border-white/5 p-8 rounded-[40px] transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden h-full border-t-4 border-t-${sec.color}-500/40 ring-1 ring-white/5 cursor-pointer hover:bg-slate-900`}
            >
               <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 bg-slate-900 border border-${sec.color}-500/20 rounded-[20px] flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>{sec.icon}</div>
                  <span className={`text-${sec.color}-500 font-black text-[9px] uppercase tracking-widest border border-${sec.color}-500/30 px-3 py-1 rounded-full`}>{sec.tag}</span>
               </div>

               <div className="space-y-1">
                  <h5 className="text-white text-xl font-black uppercase tracking-tight group-hover:text-blue-400 transition-colors">0{sec.id === 'packing' ? '1' : sec.id === 'shipment' ? '2' : sec.id === 'transport' ? '3' : '4'}. {sec.title}</h5>
                  <p className="text-slate-500 text-[10px] font-bold leading-relaxed italic uppercase">{sec.desc}</p>
               </div>

               <div className={`flex items-center gap-2 text-${sec.color}-500 text-[8px] font-black uppercase tracking-widest animate-pulse group-hover:text-white transition-colors`}>
                  Open Module Overview <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7" /></svg>
               </div>

               <div className="space-y-2 pt-6 border-t border-white/5">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-4">Operational Steps:</span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {sec.points.map((point, idx) => (
                       <div key={idx} className="flex items-start gap-3 group/point">
                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-${sec.color}-500/40 group-hover/point:bg-${sec.color}-500 transition-colors`}></div>
                          <span className="text-slate-300 text-[10px] font-bold uppercase tracking-tight leading-tight group-hover/point:text-white transition-colors">{point}</span>
                       </div>
                    ))}
                  </div>
               </div>

               <div className="mt-auto h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className={`h-full bg-${sec.color}-500/30 w-full`}></div>
               </div>
            </div>
         ))}
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-10 py-6 bg-slate-950/60 rounded-[40px] border border-white/5 text-[11px] font-black uppercase tracking-[0.5em] text-slate-500">
          <div className="flex gap-12">
             <span className="flex items-center gap-4">
                <span className="w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_12px_indigo] animate-pulse"></span>
                Logistics Pipeline: Live
             </span>
             <span className="flex items-center gap-4">
                <span className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_12px_emerald]"></span>
                Dispatch Status: Ready
             </span>
          </div>
          <div className="opacity-60 italic font-mono uppercase tracking-widest">Dispatch Node v15.0 // Final Quality Shield</div>
      </div>
    </div>
  );
};

export default LogisticsDetail;

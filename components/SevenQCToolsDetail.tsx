
import React, { useState } from 'react';
import { Language } from '../types';

interface SevenQCToolsDetailProps {
  onBack: () => void;
  lang: Language;
}

type ToolId = 'check' | 'pareto' | 'fishbone' | 'histogram' | 'control' | 'scatter' | 'flow' | null;

const SevenQCToolsDetail: React.FC<SevenQCToolsDetailProps> = ({ onBack, lang }) => {
  const [selectedTool, setSelectedTool] = useState<ToolId>(null);

  const content = {
    en: {
      title: "7 Quality Control Tools",
      subtitle: "The Foundation of Quality Engineering",
      backBtn: "Back to IPQC",
      backToList: "Back to Tools List",
      hero: {
        title: "The Power of 7",
        desc: "These 7 basic tools can solve 80-90% of factory floor problems. They turn 'Guesswork' into 'Data-Driven Decisions'.",
        rule: "Rule: Use Data, Not Opinions."
      },
      flow: {
        title: "Typical Problem Solving Flow",
        steps: [
          "Data Collection (Check Sheet)",
          "Prioritize Issues (Pareto Chart)",
          "Brainstorm Causes (Fishbone)",
          "Analyze Spread (Histogram)",
          "Check Correlations (Scatter)",
          "Monitor Stability (Control Chart)",
          "Standardize Process (Flow Chart)"
        ]
      },
      tools: [
        {
          id: "check" as ToolId,
          title: "1. Check Sheet",
          tag: "Data Collection",
          desc: "The simplest format to collect real-time data on the shop floor.",
          usage: "Defect counting, shift-wise frequency tracking.",
          visual: "Table",
          color: "cyan",
          detail: {
            definition: "A Check Sheet is a structured, prepared form for collecting and analyzing data. It is a generic tool that can be adapted for a wide variety of purposes.",
            whyUse: "To collect data easily and identify patterns quickly.",
            example: "Recording how many 'Scratches' happen in Shift-A vs Shift-B.",
            elements: ["Defect Name", "Tally Marks (||||)", "Total Count", "Date/Line ID"]
          }
        },
        {
          id: "pareto" as ToolId,
          title: "2. Pareto Chart",
          tag: "80:20 Rule",
          desc: "Identifies the 'Vital Few' problems that cause most of the trouble.",
          usage: "Finding the top defect to focus on first.",
          visual: "Pareto",
          color: "amber",
          detail: {
            definition: "A bar graph where the individual values are represented in descending order by bars, and the cumulative total is represented by the line.",
            whyUse: "Based on the 80/20 rule: 80% of problems come from 20% of causes. It helps in Prioritization.",
            example: "If you have 10 types of defects, focus on the top 2 that cause 80% of your rejections.",
            action: "Focus on the 'Vital Few', ignore the 'Useful Many' for now."
          }
        },
        {
          id: "fishbone" as ToolId,
          title: "3. Fishbone Diagram",
          tag: "Brainstorming",
          desc: "Visual tool to categorize potential causes of a problem (6M).",
          usage: "Root cause analysis for complex issues.",
          visual: "Fish",
          color: "rose",
          detail: {
            definition: "Also known as Ishikawa or Cause-and-Effect diagram. It organizes many potential causes for a specific problem in a logical way.",
            whyUse: "To identify all possible root causes through team brainstorming.",
            categories: ["Man", "Machine", "Material", "Method", "Measurement", "Mother Nature (Env)"],
            example: "Why is the paint peeling? Check: Operator skill (Man), Oven temp (Machine), Paint quality (Material)."
          }
        },
        {
          id: "histogram" as ToolId,
          title: "4. Histogram",
          tag: "Distribution",
          desc: "Shows the frequency distribution and spread of data points.",
          usage: "Understanding dimension variation (Variation width).",
          visual: "Bars",
          color: "indigo",
          detail: {
            definition: "A graph that shows how often each different value in a set of data occurs. It looks like a bar chart but represents continuous data.",
            whyUse: "To see the 'Shape' of the data. Is it centered? Is it spreading too wide?",
            example: "Plotting the thickness of 100 pipes to see if they all fall near the 10mm target.",
            shapes: ["Normal (Bell curve)", "Skewed (One sided)", "Bimodal (Double peak)"]
          }
        },
        {
          id: "control" as ToolId,
          title: "5. Control Chart",
          tag: "Stability",
          desc: "Monitors process performance over time within statistical limits.",
          usage: "Detecting 'Special Causes' vs 'Common Causes'.",
          visual: "Limits",
          color: "emerald",
          detail: {
            definition: "A graph used to study how a process changes over time. Data are plotted in time order. It has a central line, an Upper Control Limit (UCL), and a Lower Control Limit (LCL).",
            whyUse: "To determine if a process is 'Stable' or if it is going 'Out of Control'.",
            types: ["X-bar R Chart (Variables)", "P-Chart (Attributes)"],
            rule: "If a point goes outside UCL/LCL, stop the process!"
          }
        },
        {
          id: "scatter" as ToolId,
          title: "6. Scatter Diagram",
          tag: "Relationship",
          desc: "Shows the correlation between two variables (Cause vs Effect).",
          usage: "Checking if Temp ↑ causes Defects ↑.",
          visual: "Dots",
          color: "blue",
          detail: {
            definition: "A graph in which the values of two variables are plotted along two axes, the pattern of the resulting points revealing any correlation present.",
            whyUse: "To prove if a 'Cause' actually impacts the 'Effect'.",
            patterns: ["Positive (Both up)", "Negative (One up, one down)", "No Correlation (Random)"],
            example: "Does increasing 'Oven Temperature' reduce the 'Drying Time'?"
          }
        },
        {
          id: "flow" as ToolId,
          title: "7. Flow Chart",
          tag: "Process Clarity",
          desc: "Step-by-step visual map of the entire process sequence.",
          usage: "Identifying bottlenecks, gaps, or SOP failures.",
          visual: "Nodes",
          color: "purple",
          detail: {
            definition: "A diagram of the sequence of movements or actions of people or things involved in a complex system or activity.",
            whyUse: "To understand the current process and find where it might be failing or where waste exists.",
            symbols: ["Oval (Start/End)", "Rectangle (Process)", "Diamond (Decision)"],
            benefit: "Standardization and SOP creation."
          }
        }
      ]
    },
    hi: {
      title: "7 QC टूल्स",
      subtitle: "क्वालिटी इंजीनियरिंग की बुनियाद",
      backBtn: "IPQC पर वापस जाएं",
      backToList: "टूल्स लिस्ट पर वापस जाएं",
      hero: {
        title: "7 की शक्ति",
        desc: "ये 7 टूल्स फैक्ट्री की 80-90% समस्याओं को अकेले सुलझा सकते हैं। ये अंदाज़े (Guesswork) को डेटा (Data) में बदलते हैं।",
        rule: "नियम: अंदाज़ा नहीं, डेटा दिखाओ।"
      },
      flow: {
        title: "समस्या समाधान का सही क्रम",
        steps: [
          "डेटा संग्रह (Check Sheet)",
          "प्राथमिकता तय करना (Pareto Chart)",
          "कारणों पर विचार (Fishbone)",
          "डेटा का फैलाव जांचना (Histogram)",
          "आपसी संबंध देखना (Scatter)",
          "स्थिरता पर नज़र (Control Chart)",
          "प्रोसेस को नियम बनाना (Flow Chart)"
        ]
      },
      tools: [
        {
          id: "check" as ToolId,
          title: "1. चेक शीट",
          tag: "डेटा इकट्ठा करना",
          desc: "शॉप फ्लोर पर डेटा जमा करने का सबसे आसान और सीधा फॉर्मेट।",
          usage: "डिफेक्ट्स की गिनती और शिफ्ट-वाइज़ रिकॉर्ड रखना।",
          visual: "Table",
          color: "cyan",
          detail: {
            definition: "चेक शीट डेटा इकट्ठा करने का एक तैयार फॉर्म होता है। यह सबसे बुनियादी टूल है जो बताता है कि समस्या कितनी बार हो रही है।",
            whyUse: "आसानी से डेटा जमा करने और उसमें पैटर्न (जैसे किस समय गलती ज्यादा हो रही है) देखने के लिए।",
            example: "शिफ्ट-A और शिफ्ट-B में होने वाले 'स्क्रैच' की गिनती करना।",
            elements: ["डिफेक्ट का नाम", "मिलान का निशान (||||)", "कुल गिनती", "तारीख/लाइन आईडी"]
          }
        },
        {
          id: "pareto" as ToolId,
          title: "2. पेरेटो चार्ट",
          tag: "80:20 का नियम",
          desc: "यह बताता है कि कौन सी 'टॉप' समस्याएँ सबसे ज़्यादा नुक़सान कर रही हैं।",
          usage: "सबसे बड़े डिफेक्ट को पहचान कर उस पर पहले काम करना।",
          visual: "Pareto",
          color: "amber",
          detail: {
            definition: "यह एक बार ग्राफ है जो डिफेक्ट्स को घटते क्रम (Descending Order) में दिखाता है। इसमें एक लाइन ग्राफ भी होता है जो कुल प्रतिशत (Cumulative %) बताता है।",
            whyUse: "80/20 नियम के लिए: यानी 80% नुकसान सिर्फ 20% बड़े कारणों की वजह से होता है। यह प्राथमिकता (Priority) तय करने में मदद करता है।",
            example: "अगर आपके पास 10 तरह की गलतियां हैं, तो उन टॉप 2 पर काम करें जो 80% रिजेक्शन पैदा कर रही हैं।",
            action: "सबसे बड़ी समस्या पर पहले प्रहार करें।"
          }
        },
        {
          id: "fishbone" as ToolId,
          title: "3. फिशबोन डायग्राम",
          tag: "विचार मंथन",
          desc: "समस्या की असली जड़ (Root Cause) ढूँढने के लिए 6M श्रेणियों का उपयोग।",
          usage: "बड़ी और जटिल समस्याओं का हल ढूँढना।",
          visual: "Fish",
          color: "rose",
          detail: {
            definition: "इसे 'इशिकावा' या 'कॉज-एंड-इफेक्ट' डायग्राम भी कहते हैं। यह किसी समस्या के सभी संभावित कारणों को एक मछली के कंकाल जैसे ढांचे में दिखाता है।",
            whyUse: "टीम के साथ बैठकर समस्या की असली जड़ (Root Cause) तक पहुँचने के लिए।",
            categories: ["Man (इंसान)", "Machine", "Material", "Method (तरीका)", "Measurement", "Environment (वातावरण)"],
            example: "पेंट क्यों उतर रहा है? चेक करें: ऑपरेटर की गलती (Man), ओवन का तापमान (Machine), पेंट की क्वालिटी (Material)।"
          }
        },
        {
          id: "histogram" as ToolId,
          title: "4. हिस्टोग्राम",
          tag: "डेटा का फैलाव",
          desc: "यह दिखाता है कि डेटा किस तरह फैला हुआ है (Variation)।",
          usage: "साइज़ और माप के उतार-चढ़ाव को समझना।",
          visual: "Bars",
          color: "indigo",
          detail: {
            definition: "एक ग्राफ जो दिखाता है कि डेटा सेट में प्रत्येक अलग वैल्यू कितनी बार आती है। यह बार चार्ट जैसा दिखता है पर इसका उपयोग लगातार (Continuous) डेटा के लिए होता है।",
            whyUse: "डेटा का 'आकार' देखने के लिए। क्या प्रोसेस सेंटर में है? क्या फैलाव (Spread) बहुत ज्यादा है?",
            example: "100 पाइपों की मोटाई मापना और देखना कि क्या वे सभी 10mm के लक्ष्य के करीब हैं।",
            shapes: ["नॉर्मल (Bell Curve)", "एक तरफ झुका हुआ", "डबल पीक"]
          }
        },
        {
          id: "control" as ToolId,
          title: "5. कंट्रोल चार्ट",
          tag: "स्थिरता (Stability)",
          desc: "समय के साथ प्रोसेस पर नज़र रखना कि वह कंट्रोल में है या नहीं।",
          usage: "प्रोसेस के बिगड़ने के संकेतों को पहले ही पहचानना।",
          visual: "Limits",
          color: "emerald",
          detail: {
            definition: "समय के साथ प्रोसेस कैसे बदल रहा है, यह देखने का ग्राफ। इसमें तीन लाइनें होती हैं: सेंट्रल लाइन, अपर कंट्रोल लिमिट (UCL), और लोअर कंट्रोल लिमिट (LCL)।",
            whyUse: "यह जानने के लिए कि क्या प्रोसेस 'स्थिर' (Stable) है या वह 'कंट्रोल से बाहर' (Out of Control) जा रहा है।",
            types: ["X-bar R चार्ट", "P-चार्ट"],
            rule: "अगर कोई पॉइंट UCL या LCL से बाहर जाए, तो प्रोसेस तुरंत रोक दें!"
          }
        },
        {
          id: "scatter" as ToolId,
          title: "6. स्केटर डायग्राम",
          tag: "आपसी संबंध",
          desc: "दो चीज़ों के बीच संबंध दिखाना (जैसे तापमान बढ़ा तो रिजेक्शन बढ़ा?)।",
          usage: "कारण और परिणाम (Cause-Effect) के रिश्ते को जाँचना।",
          visual: "Dots",
          color: "blue",
          detail: {
            definition: "एक ऐसा ग्राफ जिसमें दो वेरिएबल्स की वैल्यू को दो एक्सिस (X और Y) पर दिखाया जाता है। बिंदुओं का पैटर्न बताता है कि उनके बीच कोई संबंध है या नहीं।",
            whyUse: "यह पक्का करने के लिए कि क्या 'कारण' (Cause) वाकई 'परिणाम' (Effect) पर असर डाल रहा है।",
            patterns: ["पॉजिटिव (दोनों बढ़ते हैं)", "नेगेटिव (एक बढ़ता, एक घटता है)", "कोई संबंध नहीं"],
            example: "क्या 'ओवन का तापमान' बढ़ने से 'सूखने का समय' कम होता है?"
          }
        },
        {
          id: "flow" as ToolId,
          title: "7. फ्लो चार्ट",
          tag: "प्रोसेस मैप",
          desc: "पूरे काम का स्टेप-बाय-स्टेप विजुअल नक्शा।",
          usage: "प्रोसेस की कमियों और रुकावटों (Bottlenecks) को पहचानना।",
          visual: "Nodes",
          color: "purple",
          detail: {
            definition: "काम के क्रम या गतिविधियों का एक चित्र। यह दिखाता है कि माल या जानकारी फैक्ट्री में कहाँ से कहाँ जाती है।",
            whyUse: "प्रोसेस को समझने के लिए और यह देखने के लिए कि कहाँ समय बर्बाद हो रहा है या कहाँ गलती होने की गुंजाइश है।",
            symbols: ["अंडाकार (शुरू/खत्म)", "आयत (प्रोसेस)", "डायमंड (फैसला/Decision)"],
            benefit: "काम को स्टैंडर्ड बनाने और SOP लिखने में मदद।"
          }
        }
      ]
    }
  };

  const current = content[lang] || content['en'];

  // Logic to render individual tool detail
  const renderDetailView = (tool: any) => {
    if (!tool) return null;
    
    // Safety list for components
    const components = tool.detail.elements || tool.detail.categories || tool.detail.shapes || tool.detail.types || tool.detail.patterns || tool.detail.symbols || [];

    return (
      <div className="animate-in slide-in-from-right-4 duration-500 space-y-10">
        {/* Detail Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6">
          <div className="flex items-center gap-6">
             <div className={`w-16 h-16 bg-slate-900 border border-${tool.color}-500/40 rounded-2xl flex items-center justify-center text-4xl shadow-xl`}>
                {tool.visual === 'Table' ? '📋' : tool.visual === 'Pareto' ? '📉' : tool.visual === 'Fish' ? '🐟' : tool.visual === 'Bars' ? '📊' : tool.visual === 'Limits' ? '📈' : tool.visual === 'Dots' ? '🌌' : '📑'}
             </div>
             <div>
                <h3 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none">{tool.title}</h3>
                <p className={`text-${tool.color}-400 text-[10px] font-black uppercase tracking-[0.4em] mt-2`}>{tool.tag}</p>
             </div>
          </div>
          <button 
            onClick={() => setSelectedTool(null)}
            className={`bg-slate-900 border border-${tool.color}-500/30 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all hover:bg-slate-800 flex items-center justify-center gap-3`}
          >
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            {current.backToList}
          </button>
        </div>

        {/* Main Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
           <div className="lg:col-span-7 space-y-8">
              <div className={`bg-slate-900/60 border border-${tool.color}-500/20 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group`}>
                 <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight mb-4">{lang === 'hi' ? 'परिभाषा (Definition)' : 'Technical Definition'}</h4>
                 <p className="text-slate-200 text-lg md:text-xl font-bold leading-relaxed italic border-l-4 p-6 rounded-r-2xl bg-white/5 border-white/10">
                    "{tool.detail.definition}"
                 </p>
              </div>

              <div className="bg-slate-950/40 p-8 rounded-[40px] border border-white/5 space-y-6 shadow-xl">
                 <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                    <span className={`w-8 h-px bg-${tool.color}-500`}></span>
                    {lang === 'hi' ? 'उपयोग क्यों करें?' : 'Why use this tool?'}
                 </h4>
                 <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed">{tool.detail.whyUse}</p>
                 <div className={`bg-${tool.color}-500/10 border border-${tool.color}-500/20 p-5 rounded-2xl`}>
                    <span className={`text-${tool.color}-500 text-[10px] font-black uppercase block mb-1`}>Factory Scenario / उदाहरण</span>
                    <p className="text-white text-xs md:text-sm font-black italic">" {tool.detail.example} "</p>
                 </div>
              </div>
           </div>

           {/* Visual Workshop Node */}
           <div className="lg:col-span-5 bg-slate-900 border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-8 flex flex-col items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-2xl font-black text-white/5 select-none uppercase tracking-widest italic">Simulation</div>
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-center">Visual Prototype</h4>
              
              {/* Tool-specific Visual Simulation Large */}
              <div className="w-full bg-slate-950/80 rounded-3xl p-6 min-h-[300px] flex flex-col items-center justify-center border border-white/5 shadow-inner">
                 {tool.id === 'check' && (
                    <div className="w-full space-y-4">
                       <table className="w-full text-[10px] font-bold text-slate-400 border-collapse">
                          <thead>
                             <tr className="border-b border-white/10">
                                <th className="text-left py-2">Defect</th>
                                <th className="py-2">Tally</th>
                                <th className="text-right py-2">Qty</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 text-white">
                             <tr><td className="py-3">Scratch</td><td className="text-center font-mono">|||| ||</td><td className="text-right">7</td></tr>
                             <tr><td className="py-3">Dent</td><td className="text-center font-mono">|||</td><td className="text-right">3</td></tr>
                             <tr><td className="py-3">Missing</td><td className="text-center font-mono">||</td><td className="text-right">2</td></tr>
                          </tbody>
                       </table>
                    </div>
                 )}
                 {tool.id === 'pareto' && (
                    <div className="w-full h-48 flex items-end gap-2 px-4 relative">
                       <div className="bg-amber-500 w-full h-[90%] rounded-t-lg shadow-lg"></div>
                       <div className="bg-amber-500/80 w-full h-[60%] rounded-t-lg shadow-lg"></div>
                       <div className="bg-amber-500/60 w-full h-[30%] rounded-t-lg shadow-lg"></div>
                       <div className="bg-amber-500/40 w-full h-[15%] rounded-t-lg shadow-lg"></div>
                       <svg className="absolute inset-0 w-full h-full p-2 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <path d="M10,80 L35,50 L60,20 L90,10" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4" />
                       </svg>
                    </div>
                 )}
                 {tool.id === 'fishbone' && (
                    <div className="relative w-full h-40 flex items-center justify-center">
                       <div className="w-4/5 h-1 bg-rose-500 rounded-full relative">
                          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center text-white text-[8px] font-black">PROBLEM</div>
                          {[15, 35, 55, 75].map(pos => (
                             <React.Fragment key={pos}>
                                <div className="absolute top-0 w-8 h-0.5 bg-rose-400 rotate-[60deg] origin-left" style={{ left: `${pos}%` }}></div>
                                <div className="absolute bottom-0 w-8 h-0.5 bg-rose-400 -rotate-[60deg] origin-left" style={{ left: `${pos}%` }}></div>
                             </React.Fragment>
                          ))}
                       </div>
                    </div>
                 )}
                 {tool.id === 'histogram' && (
                    <div className="w-full h-48 flex items-end justify-center gap-1">
                       {[20, 40, 70, 95, 75, 45, 15].map((h, i) => (
                          <div key={i} className="bg-indigo-500/60 border border-indigo-400/40 w-full rounded-t-md transition-all hover:h-full" style={{ height: `${h}%` }}></div>
                       ))}
                    </div>
                 )}
                 {tool.id === 'control' && (
                    <div className="w-full h-48 flex flex-col justify-between relative p-4">
                       <div className="absolute top-8 left-0 right-0 border-t border-rose-500 border-dashed opacity-50"><span className="text-[6px] text-rose-500 px-2">UCL</span></div>
                       <div className="absolute bottom-8 left-0 right-0 border-t border-rose-500 border-dashed opacity-50"><span className="text-[6px] text-rose-500 px-2">LCL</span></div>
                       <div className="absolute top-1/2 left-0 right-0 border-t border-white/20"></div>
                       <svg className="absolute inset-0 w-full h-full p-2" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <polyline points="0,50 20,40 40,65 60,35 80,45 100,55" fill="none" stroke="#10b981" strokeWidth="2" />
                          <circle cx="60" cy="35" r="3" fill="#10b981" className="animate-ping" />
                       </svg>
                    </div>
                 )}
                 {tool.id === 'scatter' && (
                    <div className="w-48 h-48 grid grid-cols-8 grid-rows-8 gap-1 p-4 relative border border-white/10">
                       <div className="w-2 h-2 bg-blue-500 rounded-full col-start-1 row-start-8"></div>
                       <div className="w-2 h-2 bg-blue-500 rounded-full col-start-2 row-start-7"></div>
                       <div className="w-2 h-2 bg-blue-500 rounded-full col-start-3 row-start-5"></div>
                       <div className="w-2 h-2 bg-blue-500 rounded-full col-start-5 row-start-4"></div>
                       <div className="w-2 h-2 bg-blue-500 rounded-full col-start-6 row-start-2"></div>
                       <div className="w-2 h-2 bg-blue-500 rounded-full col-start-8 row-start-1"></div>
                    </div>
                 )}
                 {tool.id === 'flow' && (
                    <div className="flex flex-col items-center gap-4 text-white">
                       <div className="px-6 py-2 border-2 border-purple-500 rounded-full text-[8px] font-black uppercase">Start</div>
                       <div className="w-0.5 h-8 bg-purple-500"></div>
                       <div className="w-24 h-12 bg-slate-900 border border-white/20 flex items-center justify-center text-[8px] font-black uppercase text-center p-2">Check Part</div>
                       <div className="w-0.5 h-8 bg-purple-500"></div>
                       <div className="w-16 h-16 rotate-45 border-2 border-amber-500 flex items-center justify-center relative">
                          <span className="-rotate-45 text-[7px] font-black uppercase">OK?</span>
                       </div>
                    </div>
                 )}
              </div>

              {/* Elements List */}
              <div className="w-full space-y-4">
                 <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block text-center">Components / मुख्य अंग</span>
                 <div className="grid grid-cols-1 gap-2">
                    {components.map((item: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-slate-950/60 rounded-xl border border-white/5 hover:border-white/10 transition-all">
                         <div className={`w-5 h-5 rounded bg-${tool.color}-500/20 flex items-center justify-center text-${tool.color}-400 text-[8px] font-black`}>{idx+1}</div>
                         <span className="text-slate-200 text-[10px] font-black uppercase tracking-tight">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className={`w-full bg-${tool.color}-500/10 p-5 rounded-3xl border border-dashed border-${tool.color}-500/40 text-center`}>
                 <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-2">{lang === 'hi' ? 'प्रो टिप' : 'PRO ACTION'}</span>
                 <p className={`text-${tool.color}-400 text-xs font-black uppercase italic tracking-tighter`}>
                    {tool.detail.action || (lang === 'hi' ? 'डेटा सही से भरें और तुरंत फैसला लें।' : 'Ensure accurate data capture for faster decision making.')}
                 </p>
              </div>
           </div>
        </div>

        {/* Comparison Guide */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
            <div className="flex gap-8">
               <span className="flex items-center gap-3">
                  <span className={`w-2 h-2 bg-${tool.color}-500 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.4)]`}></span>
                  {tool.id?.toUpperCase()} Engine: Active
               </span>
               <span className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Status: Reliable
               </span>
            </div>
            <div className="opacity-60 italic uppercase tracking-widest">Tool Ref: ISO/TR 10017 // QC Node</div>
        </div>
      </div>
    );
  };

  const renderListView = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Hero Definition */}
      <div className="bg-slate-900/60 border border-emerald-500/20 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 text-8xl font-black text-emerald-500/[0.03] select-none uppercase italic tracking-tighter">Analysis</div>
         <div className="relative z-10 space-y-6">
            <div className="space-y-2">
               <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter">{current.hero.title}</h4>
               <p className="text-slate-300 text-sm md:text-xl font-bold leading-relaxed max-w-4xl italic">
                  "{current.hero.desc}"
               </p>
            </div>
            <div className="inline-block px-5 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 font-black text-xs md:text-sm uppercase tracking-widest">
               {current.hero.rule}
            </div>
         </div>
      </div>

      {/* 7 Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
         {(current.tools || []).map((tool: any, i: number) => (
           <div 
             key={i} 
             onClick={() => setSelectedTool(tool.id)}
             className={`bg-slate-950/40 border border-white/10 p-6 rounded-[32px] hover:bg-slate-900 transition-all group flex flex-col gap-5 shadow-xl relative overflow-hidden h-full cursor-pointer hover:border-${tool.color}-500/50`}
           >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-${tool.color}-500/5 blur-[40px] rounded-full`}></div>
              
              <div className="flex items-center justify-between relative z-10">
                 <span className={`text-[8px] font-black text-${tool.color}-400 border border-${tool.color}-500/30 px-3 py-1 rounded-full uppercase tracking-widest`}>{tool.tag}</span>
                 <div className={`w-8 h-8 rounded-lg bg-${tool.color}-500/10 border border-${tool.color}-500/30 flex items-center justify-center text-${tool.color}-400 group-hover:scale-110 transition-transform`}>
                    ★
                 </div>
              </div>

              <div className="relative z-10">
                 <h5 className="text-white font-black text-sm md:text-base uppercase tracking-tight leading-tight group-hover:text-white transition-colors">{tool.title}</h5>
                 <p className="text-slate-400 text-[10px] md:text-xs font-bold leading-relaxed mt-2">{tool.desc}</p>
              </div>

              {/* Mini Visual Simulation */}
              <div className="bg-slate-900/80 h-32 rounded-2xl border border-white/5 p-4 flex items-center justify-center relative overflow-hidden group/viz">
                 {tool.id === 'check' && (
                    <div className="grid grid-cols-3 gap-2 w-full opacity-40 group-hover/viz:opacity-100 transition-opacity">
                       <div className="h-2 bg-cyan-500/20 rounded"></div><div className="h-2 bg-cyan-500 rounded"></div><div className="h-2 bg-cyan-500/40 rounded"></div>
                       <div className="h-2 bg-cyan-500 rounded"></div><div className="h-2 bg-cyan-500/30 rounded"></div><div className="h-2 bg-cyan-500 rounded"></div>
                    </div>
                 )}
                 {tool.id === 'pareto' && (
                    <div className="flex items-end gap-1.5 w-full h-full pb-2 opacity-40 group-hover/viz:opacity-100 transition-opacity">
                       <div className="bg-amber-500 w-full h-[90%]"></div>
                       <div className="bg-amber-500/80 w-full h-[60%]"></div>
                       <div className="bg-amber-500/60 w-full h-[30%]"></div>
                    </div>
                 )}
                 {tool.id === 'histogram' && (
                    <div className="flex items-end gap-1 w-full h-full pb-2 opacity-40 group-hover/viz:opacity-100 transition-opacity">
                       <div className="bg-indigo-500/20 w-full h-[20%]"></div>
                       <div className="bg-indigo-500 w-full h-[80%]"></div>
                       <div className="bg-indigo-500/20 w-full h-[20%]"></div>
                    </div>
                 )}
                 {tool.id === 'control' && (
                    <div className="w-full relative opacity-40 group-hover/viz:opacity-100 transition-opacity">
                       <div className="absolute top-0 left-0 right-0 h-px bg-rose-500/50 border-t border-dashed"></div>
                       <div className="absolute bottom-0 left-0 right-0 h-px bg-rose-500/50 border-t border-dashed"></div>
                       <svg className="w-full h-8" viewBox="0 0 100 20">
                          <path d="M0,10 L20,8 L40,12 L60,9 L80,11 L100,10" fill="none" stroke="#10b981" strokeWidth="1" />
                       </svg>
                    </div>
                 )}
                 {tool.id === 'scatter' && (
                    <div className="grid grid-cols-6 grid-rows-6 gap-1 w-full p-4 opacity-40 group-hover/viz:opacity-100 transition-opacity">
                       <div className="w-1 h-1 bg-blue-400 rounded-full col-start-2 row-start-5"></div>
                       <div className="w-1.5 h-1.5 bg-blue-500 rounded-full col-start-4 row-start-3"></div>
                       <div className="w-1 h-1 bg-blue-400 rounded-full col-start-6 row-start-1"></div>
                    </div>
                 )}
                 {tool.id === 'fishbone' && (
                    <div className="w-full h-full flex items-center justify-center opacity-40 group-hover/viz:opacity-100 transition-opacity">
                       <div className="relative w-4/5 h-0.5 bg-rose-500">
                          <div className="absolute top-0 left-4 w-6 h-0.5 bg-rose-400 rotate-[60deg] origin-left"></div>
                          <div className="absolute bottom-0 left-4 w-6 h-0.5 bg-rose-400 -rotate-[60deg] origin-left"></div>
                       </div>
                    </div>
                 )}
                 {tool.id === 'flow' && (
                    <div className="flex flex-col items-center gap-1 opacity-40 group-hover/viz:opacity-100 transition-opacity">
                       <div className="w-8 h-3 bg-purple-500/40 border border-purple-500 rounded"></div>
                       <div className="w-0.5 h-3 bg-purple-500"></div>
                       <div className="w-6 h-6 rotate-45 border border-purple-500"></div>
                    </div>
                 )}
              </div>

              <div className="flex items-center gap-2 text-white/40 text-[8px] font-black uppercase tracking-widest mt-auto group-hover:text-white transition-colors">
                 Click to Learn <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7" /></svg>
              </div>
           </div>
         ))}
      </div>

      {/* Logic Flow */}
      {current.flow && (
        <div className="bg-slate-900/60 border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl space-y-10 relative overflow-hidden">
           <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4">
              <span className="w-12 h-0.5 bg-emerald-500"></span>
              {current.flow.title}
           </h4>
           <div className="relative space-y-8">
              <div className="absolute top-0 bottom-0 left-[19px] w-0.5 bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent"></div>
              {(current.flow.steps || []).map((step: string, i: number) => (
                 <div key={i} className="flex items-center gap-8 group/step relative z-10">
                    <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 text-[10px] font-black shadow-lg">
                       {i + 1}
                    </div>
                    <span className="text-white text-sm font-black uppercase tracking-tight italic group-hover/step:translate-x-2 transition-transform">{step}</span>
                 </div>
              ))}
           </div>
        </div>
      )}
    </div>
  );

  const selectedToolData = (current.tools || []).find((t: any) => t.id === selectedTool);

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      {!selectedTool && (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-emerald-500/20 pb-6 bg-slate-950/40 p-6 rounded-t-3xl backdrop-blur-md">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.8)]"></div>
                <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg">{current.title}</h3>
          </div>
          <button 
            onClick={onBack}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-x-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {current.backBtn}
          </button>
        </div>
      )}

      {selectedTool && selectedToolData ? (
        renderDetailView(selectedToolData)
      ) : (
        renderListView()
      )}

      {/* Global Status Footer */}
      {!selectedTool && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 bg-slate-950/60 rounded-3xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
            <div className="flex gap-8">
              <span className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
                  Statistic Engine: Online
              </span>
              <span className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,1)]"></span>
                  Quality Standard: MIL-STD-105
              </span>
            </div>
            <div className="opacity-60 italic uppercase tracking-widest">Industrial Hub v7.6 // QC Toolset Node</div>
        </div>
      )}
    </div>
  );
};

export default SevenQCToolsDetail;

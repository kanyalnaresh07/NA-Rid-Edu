
import React from 'react';
import { motion } from 'motion/react';
import { GlossaryTerm } from './types';

export const AIRFOCUS_LOGO = (
  <div className="flex items-center gap-1.5 md:gap-3 group">
    <div className="relative">
      {/* Enhanced background glow pulse */}
      <motion.div 
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.2, 1],
          filter: ["blur(8px)", "blur(12px)", "blur(8px)"]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute inset-0 bg-cyan-500 rounded-full pointer-events-none"
      />
      
      {/* Floating Logo Icon */}
      <motion.div 
        initial={{ rotate: -10, opacity: 0, scale: 0.8 }}
        animate={{ 
          rotate: [0, -2, 2, 0],
          y: [0, -2, 0],
          opacity: 1, 
          scale: 1 
        }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ 
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 },
          rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" },
          y: { repeat: Infinity, duration: 3, ease: "easeInOut" }
        }}
        className="relative w-8 h-8 md:w-10 md:h-10 bg-slate-900 border border-cyan-500/50 rounded-lg flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.3)] z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent"></div>
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" stroke="currentColor" strokeWidth="2.5">
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
              d="M12 2L2 7l10 5 10-5-10-5z" 
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [1, 0.5, 1] 
              }}
              transition={{ 
                pathLength: { duration: 1.5, delay: 0.4, ease: "easeInOut" },
                opacity: { repeat: Infinity, duration: 2, ease: "easeInOut" }
              }}
              d="M2 12l10 5 10-5" 
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [1, 0.5, 1] 
              }}
              transition={{ 
                pathLength: { duration: 1.5, delay: 0.6, ease: "easeInOut" },
                opacity: { repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.3 }
              }}
              d="M2 17l10 5 10-5" 
            />
        </svg>
      </motion.div>
    </div>

    <div className="flex flex-col -space-y-1">
      {/* Shimmering Main Text */}
      <div className="relative overflow-hidden">
        <motion.span 
          initial={{ x: -20, opacity: 0 }}
          animate={{ 
            x: 0, 
            opacity: 1,
            color: ["#ffffff", "#22d3ee", "#ffffff"]
          }}
          transition={{ 
            x: { duration: 0.8, delay: 0.5 },
            opacity: { duration: 0.8, delay: 0.5 },
            color: { repeat: Infinity, duration: 4, ease: "easeInOut" }
          }}
          className="text-lg md:text-2xl font-black tracking-tighter uppercase italic bg-gradient-to-r from-cyan-400 via-white to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent"
          style={{
            animation: "shimmer 8s linear infinite"
          }}
        >
          NA-RID
        </motion.span>
        
        {/* Continuous Glint Effect */}
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", repeatDelay: 5 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
        />
      </div>

      {/* Breathing Subtext */}
      <motion.span 
        initial={{ x: -10, opacity: 0 }}
        animate={{ 
          x: 0, 
          opacity: [0.6, 1, 0.6],
          letterSpacing: ["0.2em", "0.25em", "0.2em"]
        }}
        transition={{ 
          x: { duration: 0.8, delay: 0.8 },
          opacity: { repeat: Infinity, duration: 3, ease: "easeInOut" },
          letterSpacing: { repeat: Infinity, duration: 3, ease: "easeInOut" }
        }}
        className="text-[7px] md:text-[9px] font-bold text-cyan-500 tracking-[0.2em] md:tracking-[0.4em] uppercase ml-0.5"
      >
        Education Hub
      </motion.span>
    </div>

    <style>{`
      @keyframes shimmer {
        to { background-position: 200% center; }
      }
    `}</style>
  </div>
);

export const TRANSLATIONS = {
  en: {
    title: "Manufacturing Hub",
    description: "The Manufacturing Hub is where raw materials are turned into finished products. We focus on efficiency, cost-effectiveness, and high-quality standards.",
    discover: "EXPLORE HUB",
    launch: "Launch Experience",
    goBack: "Go Back",
    browseTerms: "Browse Categories",
    viewDepartments: "View Departments",
    backToCategories: "Back to Categories",
    mainRole: "Main Role",
    coreOperationalPoints: "Core Operational Points",
    responsibleTeam: "Responsible Personnel",
    aiInsights: "AI Technical Analysis",
    navHome: "HOME",
    navCategories: "CATEGORIES",
    navAbout: "ABOUT",
    navQuiz: "QUIZ",
    navPhotos: "PHOTOS",
    navContact: "CONTACT",
    navPrivacy: "PRIVACY POLICY",
    updates: "What's New",
    copyright: "Kanyal Excellence",
    footerText: "© 2026 All Rights Reserved",
    contact: {
      title: "CONTACT US",
      subtitle: "Have questions about manufacturing processes or want to collaborate? Reach out to us anytime.",
      formTitle: "SEND A MESSAGE",
      nameLabel: "YOUR NAME",
      namePlaceholder: "Enter your name",
      emailLabel: "YOUR EMAIL",
      emailPlaceholder: "Enter your email",
      subjectLabel: "SUBJECT",
      subjectPlaceholder: "What is this about?",
      messageLabel: "MESSAGE",
      messagePlaceholder: "Write your message here...",
      sendButton: "SEND MESSAGE",
      successMessage: "Message sent successfully! We'll get back to you soon.",
      emailLabelInfo: "EMAIL",
      email: "kanyal.naresh@outlook.com",
      phoneLabelInfo: "PHONE",
      phone: "+91 8979031442",
      whatsappLabelInfo: "WHATSAPP",
      whatsapp: "+91 8979031442",
      linkedinLabelInfo: "LINKEDIN",
      linkedin: "Naresh Singh Kanyal",
      locationLabelInfo: "LOCATION",
      location: "Uttarakhand, India"
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: April 2026",
      sections: [
        {
          heading: "1. Information Collection",
          content: "As an educational platform, we collect minimal personal information. We only store data necessary to provide you with the best learning experience, such as your progress in quizzes and basic profile information."
        },
        {
          heading: "2. Use of Information",
          content: "The information collected is used solely to improve our industrial training modules, personalize your learning path, and communicate important updates regarding the Manufacturing Hub."
        },
        {
          heading: "3. Data Security",
          content: "We implement industry-standard security measures to protect your data. We do not sell, trade, or rent your personal identification information to others."
        },
        {
          heading: "4. Contact Us",
          content: "If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us through the Contact page."
        }
      ]
    },
    heroCards: {
      card1: {
        tag: "OPTION 01",
        title: "MANUFACTURING EDUCATION HUB",
        desc: "NA-RID Education Hub is a modern digital platform that explains the concepts of manufacturing, industrial processes, and operational excellence in a simple and structured way. The main objective of this platform is to make real-world industrial knowledge easily accessible to students, engineers, and professionals."
      },
      card2: {
        tag: "OPTION 02",
        title: "WHAT YOU WILL LEARN",
        desc: "On this website, you will find detailed information about core departments such as Production, Quality, Planning, and Maintenance. Each section explains practical concepts, tools, and methodologies that are used in real industries."
      },
      card3: {
        tag: "OPTION 03",
        title: "WHY THIS PLATFORM",
        desc: "In today's time, industrial knowledge is often scattered. NA-RID Education Hub provides a centralized platform where you can engage in structured learning. This platform is especially useful for those who want to build their career in the manufacturing and process improvement fields."
      }
    },
    about: {
      hero: "Empowering the Industrial Workforce",
      mission: "Our Mission",
      missionText: "My vision and mission are driven by the belief that every operator deserves access to the right knowledge and guidance. Through these digital guides, I aim to empower individuals to improve themselves and master both the basic and complex nuances of the industrial world.",
      missionTags: ["KNOWLEDGE SHARING", "OPERATOR EMPOWERMENT", "SELF-IMPROVEMENT", "INDUSTRIAL MASTERY"],
      vision: "Our Vision",
      visionText: "A future where every worker is an expert, bridging the gap between basic floor operations and complex technical excellence.",
      stats: "5+",
      statsText: "YEARS OF EXPERIENCE IN INDUSTRIAL SYSTEMS",
      expertiseTitle: "TECHNICAL EXPERTISE DOMAINS",
      expertise: [
        { title: "PRODUCTION SYSTEMS", desc: "STRATEGIC SHOP FLOOR ARCHITECTURE", icon: "factory" },
        { title: "PROCESS ENGINEERING", desc: "EFFICIENCY & WORKFLOW OPTIMIZATION", icon: "settings" },
        { title: "SYSTEM INTEGRATION", desc: "BRIDGING HARDWARE WITH DIGITAL DATA", icon: "cpu" },
        { title: "WEB DEVELOPMENT", desc: "REACT, TS & NODE.JS IMPLEMENTATION", icon: "code" }
      ],
      values: "Core Values",
      v1Title: "Precision",
      v1Desc: "Every detail matters on the floor.",
      v2Title: "Integrity",
      v2Desc: "Honesty in data leads to real profit.",
      v3Title: "Innovation",
      v3Desc: "Kaizen is at the heart of our systems."
    }
  },
  hi: {
    title: "मैन्युफैक्चरिंग हब",
    description: "मैन्युफैक्चरिंग हब वह जगह है जहाँ सामान बनाया जाता है। यहाँ हम सीखते हैं कि कैसे कम खर्चे में, तेज़ी से और अच्छी क्वालिटी का सामान तैयार किया जाता है।",
    discover: "एक्सप्लोर हब",
    launch: "अभी शुरू करें",
    goBack: "पीछे जाएं",
    browseTerms: "कैटेगरी देखें",
    viewDepartments: "डिपार्टमेंट देखें",
    backToCategories: "वापस कैटेगरी पर जाएं",
    mainRole: "मुख्य ज़िम्मेदारी",
    coreOperationalPoints: "ज़रूरी काम की बातें",
    responsibleTeam: "ज़िम्मेदार टीम",
    aiInsights: "AI तकनीकी विश्लेषण",
    navHome: "होम",
    navCategories: "कैटेगरी",
    navAbout: "परिचय",
    navQuiz: "क्विज़",
    navPhotos: "फोटो",
    navContact: "संपर्क",
    navPrivacy: "गोपनीयता नीति",
    updates: "नया क्या है?",
    copyright: "कनयाल एक्सीलेंस",
    footerText: "© 2026 सभी अधिकार सुरक्षित",
    contact: {
      title: "संपर्क करें",
      subtitle: "निर्माण प्रक्रियाओं के बारे में प्रश्न हैं या सहयोग करना चाहते हैं? हमसे कभी भी संपर्क करें।",
      formTitle: "एक संदेश भेजें",
      nameLabel: "आपका नाम",
      namePlaceholder: "अपना नाम दर्ज करें",
      emailLabel: "आपका ईमेल",
      emailPlaceholder: "अपना ईमेल दर्ज करें",
      subjectLabel: "विषय",
      subjectPlaceholder: "यह किस बारे में है?",
      messageLabel: "संदेश",
      messagePlaceholder: "अपना संदेश यहाँ लिखें...",
      sendButton: "संदेश भेजें",
      successMessage: "संदेश सफलतापूर्वक भेजा गया! हम जल्द ही आपसे संपर्क करेंगे।",
      emailLabelInfo: "ईमेल",
      email: "kanyal.naresh@outlook.com",
      phoneLabelInfo: "फ़ोन",
      phone: "+91 8979031442",
      whatsappLabelInfo: "व्हाट्सएप",
      whatsapp: "+91 8979031442",
      linkedinLabelInfo: "लिंक्डइन",
      linkedin: "Naresh Singh Kanyal",
      locationLabelInfo: "स्थान",
      location: "उत्तराखंड, भारत"
    },
    privacy: {
      title: "गोपनीयता नीति",
      lastUpdated: "अंतिम अपडेट: अप्रैल 2026",
      sections: [
        {
          heading: "1. जानकारी का संग्रह",
          content: "एक शैक्षिक मंच के रूप में, हम कम से कम व्यक्तिगत जानकारी एकत्र करते हैं। हम केवल वही डेटा संग्रहीत करते हैं जो आपको सीखने का सबसे अच्छा अनुभव प्रदान करने के लिए आवश्यक है, जैसे क्विज़ में आपकी प्रगति और बुनियादी प्रोफ़ाइल जानकारी।"
        },
        {
          heading: "2. जानकारी का उपयोग",
          content: "एकत्र की गई जानकारी का उपयोग पूरी तरह से हमारे औद्योगिक प्रशिक्षण मॉड्यूल को बेहतर बनाने, आपके सीखने के मार्ग को व्यक्तिगत बनाने और मैन्युफैक्चरिंग हब के बारे में महत्वपूर्ण अपडेट देने के लिए किया जाता है।"
        },
        {
          heading: "3. डेटा सुरक्षा",
          content: "हम आपके डेटा की सुरक्षा के लिए उद्योग-मानक सुरक्षा उपाय लागू करते हैं। हम आपकी व्यक्तिगत पहचान की जानकारी दूसरों को बेचते, व्यापार या किराए पर नहीं देते हैं।"
        },
        {
          heading: "4. हमसे संपर्क करें",
          content: "यदि आपके पास इस गोपनीयता नीति, इस साइट की प्रथाओं, या इस साइट के साथ आपके व्यवहार के बारे में कोई प्रश्न हैं, तो कृपया संपर्क पृष्ठ के माध्यम से हमसे संपर्क करें।"
        }
      ]
    },
    heroCards: {
      card1: {
        tag: "विकल्प 01",
        title: "मैन्युफैक्चरिंग एजुकेशन हब",
        desc: "NA-RID एजुकेशन हब एक आधुनिक डिजिटल प्लेटफॉर्म है जो मैन्युफैक्चरिंग, औद्योगिक प्रक्रियाओं और परिचालन उत्कृष्टता की अवधारणाओं को सरल और संरचित तरीके से समझाता है। इस प्लेटफॉर्म का मुख्य उद्देश्य छात्रों, इंजीनियरों और पेशेवरों के लिए वास्तविक दुनिया के औद्योगिक ज्ञान को आसानी से सुलभ बनाना है।"
      },
      card2: {
        tag: "विकल्प 02",
        title: "आप क्या सीखेंगे",
        desc: "इस वेबसाइट पर, आपको उत्पादन, गुणवत्ता, योजना और रखरखाव जैसे मुख्य विभागों के बारे में विस्तृत जानकारी मिलेगी। प्रत्येक अनुभाग व्यावहारिक अवधारणाओं, उपकरणों और कार्यप्रणाली की व्याख्या करता है जिनका उपयोग वास्तविक उद्योगों में किया जाता है।"
      },
      card3: {
        tag: "विकल्प 03",
        title: "यह प्लेटफॉर्म क्यों",
        desc: "आज के समय में, औद्योगिक ज्ञान अक्सर बिखरा हुआ होता है। NA-RID एजुकेशन हब एक केंद्रीकृत मंच प्रदान करता है जहां आप संरचित शिक्षा में संलग्न हो सकते हैं। यह प्लेटफॉर्म विशेष रूप से उन लोगों के लिए उपयोगी है जो मैन्युफैक्चरिंग और प्रक्रिया सुधार क्षेत्रों में अपना करियर बनाना चाहते हैं।"
      }
    },
    about: {
      hero: "औद्योगिक कार्यबल का सशक्तिकरण",
      mission: "हमारा लक्ष्य",
      missionText: "मेरा दृष्टिकोण और मिशन इस विश्वास से प्रेरित है कि प्रत्येक ऑपरेटर सही ज्ञान और मार्गदर्शन तक पहुंच का हकदार है। इन डिजिटल गाइडों के माध्यम से, मेरा लक्ष्य व्यक्तियों को खुद को सुधारने और औद्योगिक दुनिया की बुनियादी और जटिल दोनों बारीकियों में महारत हासिल करने के लिए सशक्त बनाना है।",
      missionTags: ["ज्ञान साझा करना", "ऑपरेटर सशक्तिकरण", "आत्म-सुधार", "औद्योगिक महारत"],
      vision: "हमारा दृष्टिकोण",
      visionText: "एक ऐसा भविष्य जहाँ हर वर्कर एक विशेषज्ञ हो, बुनियादी फ्लोर ऑपरेशंस और जटिल तकनीकी उत्कृष्टता के बीच की दूरी को कम करना।",
      stats: "5+",
      statsText: "औद्योगिक प्रणालियों में वर्षों का अनुभव",
      expertiseTitle: "तकनीकी विशेषज्ञता क्षेत्र",
      expertise: [
        { title: "उत्पादन प्रणाली", desc: "रणनीतिक शॉप फ्लोर आर्किटेक्चर", icon: "factory" },
        { title: "प्रोसेस इंजीनियरिंग", desc: "दक्षता और वर्कफ़्लो अनुकूलन", icon: "settings" },
        { title: "सिस्टम एकीकरण", desc: "हार्डवेयर को डिजिटल डेटा से जोड़ना", icon: "cpu" },
        { title: "वेब विकास", desc: "रिएक्ट, टीएस और नोड.जेएस कार्यान्वयन", icon: "code" }
      ],
      values: "हमारे संस्कार",
      v1Title: "सटीकता",
      v1Desc: "फ्लोर पर हर छोटी बात मायने रखती है।",
      v2Title: "ईमानदारी",
      v2Desc: "डेटा में ईमानदारी से ही असली मुनाफा होता है।",
      v3Title: "नवाचार (Kaizen)",
      v3Desc: "सुधार ही हमारे सिस्टम की जान है।"
    }
  }
};

export const getGlossaryTerms = (lang: 'en' | 'hi'): GlossaryTerm[] => [
  {
    id: 'core-main-departments',
    title: lang === 'hi' ? 'मुख्य विभाग (Main Departments)' : 'Core Departments',
    description: lang === 'hi' 
      ? 'एक मुख्य विभाग (Core Department) किसी संगठन की प्राथमिक कार्यात्मक इकाई है जो सीधे उसकी मुख्य व्यावसायिक गतिविधि और मूल्य निर्माण में योगदान देती है। यह प्रमुख आउटपुट (उत्पाद या सेवा) के उत्पादन के लिए जिम्मेदार है जो संगठन के उद्देश्य को परिभाषित करता है।'
      : 'A core department is the primary functional unit of an organization that directly contributes to its main business activity and value creation. It is responsible for producing the key output (product or service) that defines the purpose of the organization.',
    category: lang === 'hi' ? 'ऑर्गनाइज़ेशन' : 'Organization',
    subItems: lang === 'hi' ? ['Production (प्रोडक्शन)', 'Quality (क्वालिटी)', 'Process Engineering (प्रोसेस)', 'Maintenance (मेंटेनेंस)', 'Planning (प्लानिंग)'] : ['Production', 'Quality (QC)', 'Process Engineering', 'Maintenance', 'Planning (PPC)'],
    details: {
      [lang === 'hi' ? 'Production (प्रोडक्शन)' : 'Production']: {
        id: 'p1',
        name: lang === 'hi' ? 'Production (प्रोडक्शन)' : 'Production',
        role: lang === 'hi' ? 'तय समय पर सही क्वालिटी का सामान बनाना।' : 'Manufacturing and assembly of products as per schedule.',
        responsibilities: [
          {
            items: [
              'T5S (5S, 3R & VM)',
              'PPE (Safety Gear)',
              'Work Instruction / OPL',
              'Time Management',
              'Productivity (UPH/UPPH)',
              'JIT / Kanban / Pull System',
              'SMED (Quick Changeover)',
              'Andon / Visual Management',
              'Rejection & Rework',
              'Manpower Handling',
              'Material Handling',
              '4M / SLE-50 (Loss reduction)',
              'OEE (Machine Efficiency)',
              'LOB (Line Balancing)',
              'Manufacturing Loss',
              'Value Analysis (VA/NVA)',
              'Improvement Principles',
              'Kaizen / Poka-Yoke'
            ]
          }
        ],
        responsiblePersons: lang === 'hi' ? ['सुपरवाइजर', 'ऑपरेटर', 'इंचार्ज', 'इंजीनियर'] : ['Line Leaders', 'Operators', 'Shift In-charge', 'Engineers']
      },
      [lang === 'hi' ? 'Quality (क्वालिटी)' : 'Quality (QC)']: {
        id: 'q1',
        name: lang === 'hi' ? 'Quality (क्वालिटी)' : 'Quality (QC)',
        role: lang === 'hi' ? 'यह सुनिश्चित करना कि उत्पाद ग्राहकों की जरूरतों और मानकों को पूरा करता है।' : 'Ensuring products meet quality standards and customer requirements.',
        responsibilities: [
          {
            items: [
              'Incoming Quality Control (IQC)',
              'In-Process Quality Control (IPQC)',
              'Final Quality Control (FQC)',
              'Statistical Process Control (SPC)',
              'Poka-Yoke (Mistake Proofing)',
              'Calibration',
              'Corrective & Preventive Action (CAPA)',
              'Root Cause Analysis (RCA)',
              '7 QC Tools',
              'Standard Operating Procedures (SOP)'
            ]
          }
        ],
        responsiblePersons: lang === 'hi' ? ['क्वालिटी इंस्पेक्टर', 'क्वालिटी इंजीनियर', 'मैनेजर'] : ['Quality Inspectors', 'Quality Engineers', 'QA Managers']
      },
      [lang === 'hi' ? 'Process Engineering (प्रोसेस)' : 'Process Engineering']: {
        id: 'pe1',
        name: lang === 'hi' ? 'Process Engineering (प्रोसेस)' : 'Process Engineering',
        role: lang === 'hi' ? 'उत्पादन प्रक्रिया को बेहतर और कुशल बनाना।' : 'Optimizing manufacturing processes for maximum efficiency.',
        responsibilities: [
          {
            items: [
              'Process Flow Chart (PFC)',
              'Cycle Time Reduction',
              'Jig & Fixture Design',
              'Process Validation',
              'Time & Motion Study',
              'Workstation Layout',
              'Standardization'
            ]
          }
        ],
        responsiblePersons: lang === 'hi' ? ['प्रोसेस इंजीनियर', 'मेथड इंजीनियर'] : ['Process Engineers', 'Method Engineers']
      },
      [lang === 'hi' ? 'Maintenance (मेंटेनेंस)' : 'Maintenance']: {
        id: 'm1',
        name: lang === 'hi' ? 'Maintenance (मेंटेनेंस)' : 'Maintenance',
        role: lang === 'hi' ? 'मशीनों और उपकरणों को चालू हालत में रखना।' : 'Keeping machines and equipment in optimal working condition.',
        responsibilities: [
          {
            items: [
              'Preventive Maintenance',
              'Breakdown Maintenance',
              'Predictive Maintenance',
              'Total Productive Maintenance (TPM)',
              'Spare Parts Management',
              'Machine Overhauling',
              'Utility Management'
            ]
          }
        ],
        responsiblePersons: lang === 'hi' ? ['मेंटेनेंस इंजीनियर', 'टेक्नीशियन', 'इलेक्ट्रीशियन'] : ['Maintenance Engineers', 'Technicians', 'Electricians']
      },
      [lang === 'hi' ? 'Planning (प्लानिंग)' : 'Planning (PPC)']: {
        id: 'pl1',
        name: lang === 'hi' ? 'Planning (प्लानिंग)' : 'Planning (PPC)',
        role: lang === 'hi' ? 'उत्पादन और सामग्री की योजना बनाना।' : 'Planning production schedules and material requirements.',
        responsibilities: [
          {
            items: [
              'Production Planning & Control (PPC)',
              'Material Requirement Planning (MRP)',
              'Inventory Control',
              'Capacity Planning',
              'Dispatch Scheduling',
              'Order Management'
            ]
          }
        ],
        responsiblePersons: lang === 'hi' ? ['प्लानिंग इंजीनियर', 'PPC इंचार्ज'] : ['Planning Engineers', 'PPC In-charge']
      }
    }
  },
  {
    id: 'support-supply-chain',
    title: lang === 'hi' ? 'सपोर्ट और सप्लाई चेन' : 'Support & Supply Chain',
    description: lang === 'hi'
      ? 'सपोर्ट और सप्लाई चेन विभाग उत्पादन के लिए आवश्यक सामग्री, सूचना और संसाधनों का सुचारू प्रवाह सुनिश्चित करते हैं। वे कच्चे माल की सोर्सिंग से लेकर ग्राहकों तक अंतिम उत्पाद पहुंचाने तक सब कुछ प्रबंधित करते हैं।'
      : 'Support and Supply Chain departments ensure the smooth flow of materials, information, and resources required for production. They manage everything from sourcing raw materials to delivering the final product to customers.',
    category: lang === 'hi' ? 'सपोर्ट' : 'Support',
    subItems: lang === 'hi' ? ['Store / Inventory (स्टोर)', 'Purchase (खरीद)', 'Logistics (लॉजिस्टिक्स)', 'R&D (डिज़ाइन)'] : ['Store / Inventory / Warehouse', 'Purchase / Procurement', 'Logistics / Dispatch', 'R&D / Design'],
    details: {
      [lang === 'hi' ? 'Store / Inventory (स्टोर)' : 'Store / Inventory / Warehouse']: {
        id: 's1',
        name: lang === 'hi' ? 'Store / Inventory (स्टोर)' : 'Store / Inventory / Warehouse',
        role: lang === 'hi' ? 'कच्चे माल और तैयार माल का प्रबंधन करना।' : 'Managing raw materials, work-in-progress, and finished goods.',
        responsibilities: [
          {
            items: [
              'Inventory Management',
              'FIFO (First In First Out)',
              'Stock Auditing',
              'Material Issuance',
              'Warehouse Optimization',
              'Safety Stock Maintenance'
            ]
          }
        ],
        responsiblePersons: lang === 'hi' ? ['स्टोर कीपर', 'इन्वेंटरी मैनेजर'] : ['Store Keepers', 'Inventory Managers']
      },
      [lang === 'hi' ? 'Purchase (खरीद)' : 'Purchase / Procurement']: {
        id: 'p2',
        name: lang === 'hi' ? 'Purchase (खरीद)' : 'Purchase / Procurement',
        role: lang === 'hi' ? 'सही कीमत पर सही सामग्री खरीदना।' : 'Procuring materials at the right price and quality.',
        responsibilities: [
          {
            items: [
              'Vendor Management',
              'Purchase Order (PO) Generation',
              'Cost Negotiation',
              'Supplier Evaluation',
              'Lead Time Management'
            ]
          }
        ],
        responsiblePersons: lang === 'hi' ? ['परचेज ऑफिसर', 'प्रोक्योरमेंट मैनेजर'] : ['Purchase Officers', 'Procurement Managers']
      },
      [lang === 'hi' ? 'Logistics (लॉजिस्टिक्स)' : 'Logistics / Dispatch']: {
        id: 'l1',
        name: lang === 'hi' ? 'Logistics (लॉजिस्टिक्स)' : 'Logistics / Dispatch',
        role: lang === 'hi' ? 'सामान को सही समय पर ग्राहक तक पहुँचाना।' : 'Ensuring timely delivery of products to customers.',
        responsibilities: [
          {
            items: [
              'Dispatch Planning',
              'Transportation Management',
              'Route Optimization',
              'Freight Cost Control',
              'Delivery Tracking'
            ]
          }
        ],
        responsiblePersons: lang === 'hi' ? ['लॉजिस्टिक्स मैनेजर', 'डिस्पैच इंचार्ज'] : ['Logistics Managers', 'Dispatch In-charge']
      },
      [lang === 'hi' ? 'R&D (डिज़ाइन)' : 'R&D / Design']: {
        id: 'rd1',
        name: lang === 'hi' ? 'R&D (डिज़ाइन)' : 'R&D / Design',
        role: lang === 'hi' ? 'नए उत्पादों का विकास और मौजूदा उत्पादों में सुधार।' : 'Developing new products and improving existing designs.',
        responsibilities: [
          {
            items: [
              'Product Design',
              'Prototyping',
              'Material Research',
              'CAD/CAM Modeling',
              'Feasibility Studies'
            ]
          }
        ],
        responsiblePersons: lang === 'hi' ? ['डिज़ाइन इंजीनियर', 'R&D हेड'] : ['Design Engineers', 'R&D Head']
      }
    }
  },
  {
    id: 'admin-corporate',
    title: lang === 'hi' ? 'एडमिन और कॉर्पोरेट' : 'Admin & Corporate',
    description: lang === 'hi'
      ? 'एडमिन और कॉर्पोरेट विभाग संगठन के समग्र प्रबंधन, मानव संसाधन, वित्तीय स्वास्थ्य और रणनीतिक दिशा को संभालते हैं। वे अन्य सभी विभागों को प्रभावी ढंग से कार्य करने के लिए आवश्यक बुनियादी ढांचा और सहायता प्रदान करते हैं।'
      : 'Admin and Corporate departments handle the overarching management, human resources, financial health, and strategic direction of the organization. They provide the necessary infrastructure and support for all other departments to function effectively.',
    category: lang === 'hi' ? 'मैनेजमेंट' : 'Management',
    subItems: ['HR / Admin', 'Finance / Accounts', 'IT / Systems', 'EHS / Safety'],
    details: {
      'HR / Admin': {
        id: 'hr1',
        name: 'HR / Admin',
        role: lang === 'hi' ? 'मानव संसाधन और कार्यालय संचालन का प्रबंधन।' : 'Managing human resources and office operations.',
        responsibilities: [
          {
            items: [
              'Recruitment',
              'Payroll Management',
              'Employee Training',
              'Policy Implementation',
              'Facility Management'
            ]
          }
        ],
        responsiblePersons: lang === 'hi' ? ['HR मैनेजर', 'एडमिन ऑफिसर'] : ['HR Managers', 'Admin Officers']
      },
      'Finance / Accounts': {
        id: 'f1',
        name: 'Finance / Accounts',
        role: lang === 'hi' ? 'वित्तीय लेनदेन और बजट का प्रबंधन।' : 'Managing financial transactions and budgeting.',
        responsibilities: [
          {
            items: [
              'Budgeting',
              'Financial Auditing',
              'Tax Compliance',
              'Accounts Payable/Receivable',
              'Cost Control'
            ]
          }
        ],
        responsiblePersons: lang === 'hi' ? ['अकाउंटेंट', 'फाइनेंस मैनेजर'] : ['Accountants', 'Finance Managers']
      },
      'IT / Systems': {
        id: 'it1',
        name: 'IT / Systems',
        role: lang === 'hi' ? 'सूचना प्रौद्योगिकी और सिस्टम का प्रबंधन।' : 'Managing IT infrastructure and information systems.',
        responsibilities: [
          {
            items: [
              'Network Management',
              'Software Implementation',
              'Data Security',
              'Hardware Maintenance',
              'MIS Reporting'
            ]
          }
        ],
        responsiblePersons: lang === 'hi' ? ['IT मैनेजर', 'सिस्टम एडमिनिस्ट्रेटर'] : ['IT Managers', 'System Administrators']
      },
      'EHS / Safety': {
        id: 'ehs1',
        name: 'EHS / Safety',
        role: lang === 'hi' ? 'पर्यावरण, स्वास्थ्य और सुरक्षा मानकों का पालन सुनिश्चित करना।' : 'Ensuring compliance with Environment, Health, and Safety standards.',
        responsibilities: [
          {
            items: [
              'Safety Audits',
              'Accident Prevention',
              'Waste Management',
              'Safety Training',
              'Environmental Compliance'
            ]
          }
        ],
        responsiblePersons: lang === 'hi' ? ['सेफ्टी ऑफिसर', 'EHS मैनेजर'] : ['Safety Officers', 'EHS Managers']
      }
    }
  },
  {
    id: 'quality-compliance',
    title: lang === 'hi' ? 'क्वालिटी और कंप्लायंस' : 'Quality & Compliance',
    description: lang === 'hi'
      ? 'क्वालिटी और कंप्लायंस विभाग यह सुनिश्चित करने के लिए जिम्मेदार हैं कि उत्पाद, सेवाएं और प्रक्रियाएं स्थापित मानकों, नियमों और ग्राहकों की अपेक्षाओं को पूरा करती हैं। वे निरंतर सुधार, जोखिम शमन, और सुरक्षा और पर्यावरण दिशानिर्देशों के पालन पर ध्यान केंद्रित करते हैं।'
      : 'Quality and Compliance departments are responsible for ensuring that products, services, and processes meet established standards, regulations, and customer expectations. They focus on continuous improvement, risk mitigation, and adherence to safety and environmental guidelines.',
    category: lang === 'hi' ? 'क्वालिटी' : 'Quality',
    subItems: ['Customer Quality', 'Compliance / ISO'],
    details: {
      'Customer Quality': {
        id: 'cq1',
        name: 'Customer Quality',
        role: lang === 'hi' ? 'ग्राहकों की शिकायतों का समाधान और संतुष्टि सुनिश्चित करना।' : 'Resolving customer complaints and ensuring satisfaction.',
        responsibilities: [
          {
            items: [
              'Customer Feedback Analysis',
              'Complaint Resolution',
              'Product Performance Monitoring',
              'Customer Audits',
              'Quality Improvement Plans'
            ]
          }
        ],
        responsiblePersons: lang === 'hi' ? ['कस्टमर क्वालिटी इंजीनियर', 'मैनेजर'] : ['Customer Quality Engineers', 'QA Managers']
      },
      'Compliance / ISO': {
        id: 'iso1',
        name: 'Compliance / ISO',
        role: lang === 'hi' ? 'अंतरराष्ट्रीय मानकों और कानूनी आवश्यकताओं का पालन।' : 'Ensuring adherence to international standards and legal requirements.',
        responsibilities: [
          {
            items: [
              'ISO Certification Maintenance',
              'Internal Audits',
              'Compliance Monitoring',
              'Documentation Control',
              'Regulatory Reporting'
            ]
          }
        ],
        responsiblePersons: lang === 'hi' ? ['कंप्लायंस ऑफिसर', 'ISO कंसल्टेंट'] : ['Compliance Officers', 'ISO Consultants']
      }
    }
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = getGlossaryTerms('en');

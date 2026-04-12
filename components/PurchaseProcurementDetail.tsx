
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { EmptyState } from './ui/EmptyState';

interface PurchaseProcurementDetailProps {
  onBack: () => void;
  lang: Language;
}

const PurchaseProcurementDetail: React.FC<PurchaseProcurementDetailProps> = ({ onBack, lang }) => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedPointIndex, setSelectedPointIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedModule, selectedPointIndex]);

  const content = {
    en: {
      title: "Purchase & Procurement Hub",
      subtitle: "Material Fulfillment & Strategy",
      backBtn: "Exit Hub",
      backToList: "Back to Modules",
      backToModule: "Back to Overview",
      hero: {
        question: "What is Purchase / Procurement?",
        desc: "The function that arranges the Right material, in the Right quality/quantity, at the Right time and cost to ensure zero rukavat.",
        simple: "Simple words: No Material = Line Stopped.",
        mantra: "Procurement is the heartbeat of Production & Dispatch."
      },
      sections: [
        { 
          id: 'material', 
          title: "Material Purchase", 
          tag: "Procurement", 
          desc: "Buying production material.", 
          icon: "💳", 
          color: "blue",
          points: ["BOM Planning", "PR Verification", "RFQ & Quotations", "PO Release", "Store & PPC Sync"],
          details: {
            title: "Material Purchase (Procurement Workflow)",
            definition: "Purchasing raw materials and parts with proper planning from the right supplier at the right time.",
            points: [
              { h: "BOM-Based Planning", d: "Production plan × BOM = Required material. Prevents over-purchase and shortage.", p: "Avoid inventory waste.", details: ["BOM Analysis", "Stock vs Demand", "Requirement Forecast"] },
              { h: "PR Receive & Verify", d: "Internal request check. Verifies part code, qty, and budget.", p: "Ensures valid internal requests.", details: ["Code check", "Qty validation", "HOD Approval"] },
              { h: "RFQ & Quotations", d: "Sending RFQ to approved suppliers to find the best market value.", p: "Price competitiveness.", details: ["Floating RFQ", "Quote comparison", "Validity check"] },
              { h: "Cost & Quality Comparison", d: "Evaluating rates, past rejections, and vendor reliability.", p: "Best value selection.", details: ["Rate analysis", "Vendor history", "Lead-time review"] },
              { h: "Purchase Order (PO) Release", d: "The official legal document confirming the order details.", p: "Legal commitment.", details: ["ERP Entry", "Taxes & Terms", "Official Signing"] },
              { h: "Delivery Schedule", d: "Confirming exact dates with the vendor based on line priority.", p: "Sequence alignment.", details: ["Daily Plan", "Priority scheduling", "Schedule confirmation"] },
              { h: "Emergency Management", d: "Handling shortages through fast-track POs or alternate vendors.", p: "Stop line stops.", details: ["Air shipment", "Local purchase", "Alternate sourcing"] },
              { h: "Logistics Coordination", d: "Managing customs and transport from vendor to factory.", p: "On-time arrival.", details: ["Transit tracking", "Customs clearance", "Freight control"] },
              { h: "Store & PPC Sync", d: "Daily status sharing to ensure material reaches the line.", p: "Flow stability.", details: ["Stock updates", "Line feeding", "Plan changes sync"] }
            ],
            output: ["Material Availability", "Cost Optimization", "Stock Accuracy", "Supply Reliability"],
            summary: "BOM ke base par material ko planned aur controlled tareeke se procure karna."
          }
        },
        { 
          id: 'vendor', 
          title: "Vendor Development", 
          tag: "Sourcing", 
          desc: "Building reliable suppliers.", 
          icon: "🤝", 
          color: "emerald",
          points: ["Vendor ID & Eval", "Capability Audit", "Sample Approval", "Performance Review", "Backup Sourcing"],
          details: {
            title: "Vendor Development (Sourcing Strategy)",
            definition: "Developing and maintaining suppliers who can consistently meet quality, delivery, and cost requirements.",
            simple: "Simple words: Trust the supplier = Smooth production.",
            points: [
              { h: "New Vendor Identification", d: "Finding new suppliers through market surveys and references.", p: "To build a reliable source pool.", details: ["Market survey", "Company profile", "Initial check"] },
              { h: "Capability Assessment", d: "Checking machine capability, skills, and monthly capacity.", p: "Ensures future demand fulfillment.", details: ["Process audit", "Capacity check", "Skill assessment"] },
              { h: "Sample Approval", d: "Testing parts against drawings before mass production starts.", p: "Reduces mass production risk.", details: ["Drawing match", "IQC approval", "Fitment check"] },
              { h: "Trial Lot Coordination", d: "Supplying limited quantities to test process stability.", p: "Validates process stability.", details: ["Trial supply", "Feedback log", "Defect ID"] },
              { h: "Quality Feedback", d: "Sharing rejection trends with vendors to drive root-cause fixes.", p: "Reduces incoming rejection.", details: ["Rejection trends", "Root Cause Fix", "Process follow-up"] },
              { h: "Performance Review", d: "Monthly monitoring of On-Time Delivery % and Quality levels.", p: "Identifies reliable partners.", details: ["Scorecard", "OTD % check", "PPM tracking"] },
              { h: "Cost Negotiation", d: "Optimizing rates through volume benefits or alternate materials.", p: "Reduces product cost.", details: ["Rate negotiation", "Volume benefit", "Material saving"] },
              { h: "Alternate Sourcing", d: "Approving second sources to avoid single-supplier risks.", p: "Business continuity.", details: ["Backup source", "Parallel dev", "Emergency ready"] },
              { h: "Vendor Audit (ISO)", d: "Checking internal system and ISO compliance at vendor end.", p: "Long-term stability.", details: ["System audit", "Doc check", "ISO compliance"] }
            ],
            output: ["Stable quality", "On-time delivery", "Cost competitiveness", "Lower supply risk"],
            summary: "Aise suppliers develop karna jo requirement ko consistently meet kar sakein."
          }
        },
        { 
          id: 'osd', 
          title: "OSD Follow-up", 
          tag: "Tracking", 
          desc: "Overdue Delivery tracking.", 
          icon: "📞", 
          color: "rose",
          points: ["Pending PO List", "Daily Chasing", "Revised Dates", "Risk Escalation", "PPC Update"],
          details: {
            title: "OSD Follow-up (Overdue Management)",
            definition: "Daily basis tracking and supplier follow-up for material that has not arrived on time as per the Purchase Order.",
            simple: "Simple words: Chasing late material.",
            points: [
              { h: "Pending PO List Prep", d: "Creating a master list of all open POs with due dates.", p: "Gives clear visibility of missing parts.", details: ["PO Status", "Part codes", "Supplier list"] },
              { h: "Due Date vs Actual Tracking", d: "Comparing planned vs actual delivery to calculate delay.", p: "Detects delays early.", details: ["Delay calculation", "Risk mapping", "Urgency level"] },
              { h: "Supplier Daily Follow-up", d: "Regular communication (Call/Mail) for dispatch status.", p: "Maintains urgency.", details: ["Daily calls", "Dispatch proof", "LR tracking"] },
              { h: "Revised Date Confirmation", d: "Fixing realistic new dates when delays occur.", p: "Allows planning update.", details: ["New date commit", "Split delivery", "Mail confirmation"] },
              { h: "Critical Escalation", d: "Highlighting line-stop risks to Purchase Head and Vendor Senior Mgmt.", p: "Prevents line stops.", details: ["Management alert", "Senior level talk", "Fast tracking"] },
              { h: "PPC & Production Sync", d: "Sharing real-time part arrival status for rescheduling.", p: "Proactive production.", details: ["Arrival ETA", "Plan impact", "Alternate model"] },
              { h: "Expediting Action", d: "Organizing fast transport or alternate vendor sourcing.", p: "Minimizes delay impact.", details: ["Air shipment", "Fast truck", "Local purchase"] }
            ],
            output: ["Delay control", "Line stoppage avoid", "Supplier discipline", "Plan stability"],
            summary: "Late material ka peecha karke production flow ko banaye rakhna.",
            tracker: {
              title: "OSD Tracker: Live Overdue Dashboard",
              headers: ["PO #", "Supplier", "Part", "Due Date", "Delay", "Priority", "Status"],
              rows: [
                { po: "PO-9821", supplier: "Steel Co.", part: "Main Frame", due: "2026-03-20", delay: "6 Days", priority: "high", status: "overdue" },
                { po: "PO-9845", supplier: "Fasten Inc.", part: "M8 Bolts", due: "2026-03-22", delay: "4 Days", priority: "medium", status: "revised" },
                { po: "PO-9870", supplier: "Polymer Ltd.", part: "Gasket", due: "2026-03-25", delay: "1 Day", priority: "low", status: "pending" },
                { po: "PO-9812", supplier: "Tech Parts", part: "Control Board", due: "2026-03-15", delay: "11 Days", priority: "high", status: "critical" }
              ]
            }
          }
        },
        { 
          id: 'support', 
          title: "Supporting Elements", 
          tag: "Synergy", 
          desc: "Linked store/finance flow.", 
          icon: "⛓️", 
          color: "amber",
          points: ["Min-Max Alignment", "GRN-Invoice Sync", "Payment Tracking", "Audit Records", "SRM Relationship"],
          details: {
            title: "Supporting Elements (Procurement Synergy)",
            definition: "Activities beyond direct purchase that are critical for material availability, supplier performance, and audit compliance.",
            points: [
              { h: "Inventory Coordination (Min–Max)", d: "Aligning purchase with store stock levels and PPC demand.", p: "Avoid line stops and cash block.", details: ["Min-Max reorder", "Safety stock backup", "Demand update sync"] },
              { h: "GRN & Invoice Coordination", d: "Proper system entry and billing match after material arrival.", p: "Avoid payment delays.", details: ["PO vs GRN match", "Invoice tax check", "Mismatch resolution"] },
              { h: "Payment Follow-up Support", d: "Coordinating with finance to ensure on-time supplier payment.", p: "Maintain supplier trust.", details: ["Due date tracking", "Finance co-ord", "Supplier queries"] },
              { h: "Documentation & Audit", d: "Maintaining updated records of PO, GRN, and vendor approvals.", p: "Strong compliance.", details: ["ISO Records", "Audit data ready", "NCR response"] },
              { h: "Supplier Relationship (SRM)", d: "Building long-term professional relationship and trust.", p: "Emergency support.", details: ["Performance feedback", "Regular meetings", "Win-win negotiation"] }
            ],
            output: ["Audit Compliance", "Supplier Trust", "Cost Savings", "Smooth Flow"],
            summary: "Coordination ke saath material availability aur compliance ensure karna."
          }
        }
      ]
    },
    hi: {
      title: "परचेज और प्रोक्योरमेंट हब",
      subtitle: "मटेरियल की पूर्ति और रणनीति",
      backBtn: "हब से बाहर",
      backToList: "सेक्शन लिस्ट पर वापस",
      backToModule: "पीछे जाएं",
      hero: {
        question: "Purchase / Procurement क्या होता है?",
        desc: "वह विभाग जो सही मटेरियल, सही क्वालिटी, सही मात्रा, सही समय और सही दाम पर अरेंज करता है।",
        simple: "आसान भाषा में: मटेरियल नहीं आया = लाइन रुक गई।",
        mantra: "प्रोडक्शन और डिस्पैच बिना रुकावट चलाने की जिम्मेदारी।"
      },
      sections: [
        { 
          id: 'material', 
          title: "Material Purchase", 
          tag: "खरीद प्रक्रिया", 
          desc: "मटेरियल की प्लानिंग और खरीद।", 
          icon: "💳", 
          color: "blue",
          points: ["BOM प्लानिंग", "PR जांच", "कोटेशन मिलान", "PO जारी करना", "तालमेल"],
          details: {
            title: "मटेरियल परचेज (Material Purchase)",
            definition: "प्रोडक्शन के लिए ज़रूरी पार्ट्स को सही प्लानिंग के साथ सही सप्लायर से सही समय पर खरीदना।",
            points: [
              { h: "BOM आधारित प्लानिंग", d: "प्रोडक्शन प्लान × BOM = ज़रूरी माल। फालतू खरीद और कमी दोनों से बचाव।", p: "इन्वेंटरी बर्बादी रोकना।", details: ["BOM विश्लेषण", "स्टॉक बनाम मांग", "मांग का अंदाज़ा"] },
              { h: "PR प्राप्त करना और जाँचना", d: "इंटरनल रिक्वेस्ट (PR) को चेक करना—पार्ट कोड, मात्रा और बजट सही है या नहीं।", p: "सही रिक्वेस्ट पक्का करना।", details: ["कोड चेक", "मात्रा जांच", "HOD अप्रूवल"] },
              { h: "RFQ और कोटेशन", d: "Approved वेंडर लिस्ट से रेट मांगना ताकि सबसे अच्छा दाम मिल सके।", p: "मार्केट रेट पक्का करना।", details: ["RFQ भेजना", "कोटेशन मिलान", "शर्तों की जांच"] },
              { h: "कीमत और क्वालिटी तुलना", d: "सप्लायर के रेट, पुरानी रिजेक्शन रिपोर्ट और डिलीवरी समय की तुलना करना।", p: "बेस्ट सप्लायर चुनाव।", details: ["रेट कम्पैरिजन", "वेंडर इतिहास", "लीड-टाइम जांच"] },
              { h: "Purchase Order (PO) रिलीज", d: "सप्लायर को आधिकारिक आर्डर देना जिसमें कीमत, मात्रा और शर्तें लिखी होती हैं।", p: "कानूनी रिकॉर्ड।", details: ["ERP एंट्री", "टैक्स और शर्तें", "हस्ताक्षर"] },
              { h: "डिलीवरी शेड्यूल", d: "सप्लायर से माल आने की पक्की तारीख लेना (पार्शियल या फुल डिलीवरी)।", p: "क्रम का तालमेल।", details: ["डेली प्लान", "प्रायोरिटी शेड्यूल", "लिखित तारीख"] },
              { h: "इमरजेंसी मैनेजमेंट", d: "माल की कमी होने पर फास्ट-ट्रैक PO या किसी दूसरे वेंडर से इंतज़ाम।", p: "लाइन रुकने से बचाना।", details: ["एयर शिपमेंट", "लोकल परचेज", "विकल्प सप्लायर"] },
              { h: "लॉजिस्टिक्स तालमेल", d: "बाहर से आने वाले माल (Customs) और लोकल माल का मूवमेंट मैनेज करना।", p: "समय पर माल आना।", details: ["गाड़ी ट्रैकिंग", "कस्टम्स क्लियरेंस", "भाड़ा कंट्रोल"] },
              { h: "स्टोर और PPC के साथ तालमेल", d: "स्टोर से स्टॉक और PPC से प्रोडक्शन बदलाव की जानकारी शेयर करना।", p: "फ्लो की स्थिरता।", details: ["स्टॉक अपडेट", "लाइन फीडिंग", "प्लान बदलाव सिंक"] }
            ],
            output: ["समय पर माल", "कम लागत", "सटीक स्टॉक", "सप्लाई पर भरोसा"],
            summary: "BOM के आधार पर सामान की सटीक खरीद।"
          }
        },
        { 
          id: 'vendor', 
          title: "Vendor Development", 
          tag: "सोर्सिंग", 
          desc: "किफायती सप्लायर बनाना।", 
          icon: "🤝", 
          color: "emerald",
          points: ["नए वेंडर जांच", "क्षमता ऑडिट", "सैंपल अप्रूवल", "परफॉरमेंस रिव्यू", "बैकअप वेंडर"],
          details: {
            title: "वेंडर डेवलपमेंट (Vendor Development)",
            definition: "ऐसे सप्लायर तैयार करना जो क्वालिटी, डिलीवरी और दाम की शर्तों को लगातार पूरा कर सकें।",
            simple: "आसान शब्दों में: सप्लायर पर भरोसा होगा, तभी प्रोडक्शन सुचारू होगा।",
            points: [
              { h: "नए वेंडर की पहचान", d: "मार्केट सर्वे और रेफरेंस के आधार पर नए सप्लायर खोजना।", p: "भरोसेमंद सोर्स बनाना।", details: ["मार्केट सर्वे", "कंपनी प्रोफाइल", "शुरुआती जांच"] },
              { h: "क्षमता और कैपेसिटी जांच", d: "चेक करना कि सप्लायर की मशीन और टीम डिमांड पूरी कर सकती है या नहीं।", p: "भविष्य की मांग पूर्ति।", details: ["प्रोसेस ऑडिट", "कैपेसिटी चेक", "हुनर की जांच"] },
              { h: "सैंपल बनाना और अप्रूवल", d: "मास प्रोडक्शन से पहले ड्राइंग के हिसाब से सैंपल पास करवाना।", p: "बड़े रिस्क को कम करना।", details: ["ड्राइंग मिलान", "IQC अप्रूवल", "फिटिंग चेक"] },
              { h: "ट्रायल लॉट तालमेल", d: "कम मात्रा में माल बनवाकर वेंडर की स्थिरता जांचना।", p: "प्रोसेस की मज़बूती।", details: ["ट्रायल सप्लाई", "फीडबैक लॉग", "डिफेक्ट ID"] },
              { h: "क्वालिटी फीडबैक", d: "रिजेक्शन डेटा वेंडर के साथ शेयर करना ताकि वो सुधार कर सके।", p: "रिजेक्शन कम करना।", details: ["रिजेक्शन ट्रेंड", "Root Cause सुधार", "फॉलो-अप"] },
              { h: "परफॉरमेंस रिव्यू", d: "वेंडर की समय पर डिलीवरी (%) और क्वालिटी पर मासिक नज़र रखना।", p: "भरोसेमंद वेंडर पहचान।", details: ["स्कोरकार्ड", "OTD % जांच", "PPM ट्रैकिंग"] },
              { h: "लागत कम करना", d: "क्वालिटी कम किए बिना सही रेट और वैकल्पिक मटेरियल पर काम करना।", p: "प्रोडक्ट की लागत कम।", details: ["रेट नेगोशिएशन", "वॉल्यूम फायदा", "मटेरियल बचत"] },
              { h: "बैकअप वेंडर तैयार करना", d: "एक ही सप्लायर पर निर्भरता खत्म करने के लिए दूसरा सोर्स बनाना।", p: "काम लगातार चलना।", details: ["सेकंड सोर्स", "पैरेलल डेवलपमेंट", "इमरजेंसी रेडी"] },
              { h: "वेंडर ऑडिट (Quality / ISO)", d: "सप्लायर के सिस्टम और ISO नियमों के पालन की जांच करना।", p: "लंबी स्थिरता।", details: ["सिस्टम ऑडिट", "डॉक्यूमेंट चेक", "ISO पालन"] }
            ],
            output: ["शानदार क्वालिटी", "किफायती दाम", "रिस्क में कमी", "पारदर्शिता"],
            summary: "बेहतरीन सप्लायर नेटवर्क तैयार करना।"
          }
        },
        { 
          id: 'osd', 
          title: "OSD फॉलो-अप", 
          tag: "पेंडिंग ट्रैक", 
          desc: "देरी से आने वाले माल की ट्रैकिंग।", 
          icon: "📞", 
          color: "rose",
          points: ["पेंडिंग PO लिस्ट", "डेली फॉलो-अप", "नई तारीख लेना", "एस्केलेशन", "PPC अपडेट"],
          details: {
            title: "OSD फॉलो-अप (OSD Follow-up)",
            definition: "जो मटेरियल PO के अकॉर्डिंग समय पर नहीं आया, उसका डेली बेसिस पर ट्रैकिंग और फॉलो-अप करना।",
            simple: "आसान भाषा में: लेट मटेरियल का पीछा करना।",
            points: [
              { h: "पेंडिंग PO लिस्ट तैयार करना", d: "सभी खुले/पेंडिंग PO की लिस्ट बनाना—पार्ट कोड और सप्लायर के साथ।", p: "माल की साफ़ विजिबिलिटी।", details: ["PO स्टेटस", "पार्ट कोड", "सप्लायर लिस्ट"] },
              { h: "तारीख बनाम असली स्थिति", d: "प्लान की गई डिलीवरी और असली स्थिति की तुलना करना।", p: "देरी को पहले पकड़ना।", details: ["देरी की गणना", "रिस्क मैपिंग", "अर्जेन्सी लेवल"] },
              { h: "सप्लायर डेली फॉलो-अप", d: "सप्लायर से रोज बात (Call/Mail) करके डिस्पैच स्टेटस लेना।", p: "दबाव बनाए रखना।", details: ["डेली कॉल्स", "डिस्पैच सबूत", "LR ट्रैकिंग"] },
              { h: "नई डिलीवरी तारीख तय करना", d: "देरी होने पर सप्लायर से माल आने की नई और पक्की तारीख लेना।", p: "प्लानिंग अपडेट करना।", details: ["नया कमिटमेंट", "पार्शियल शिपमेंट", "मेल कन्फर्मेशन"] },
              { h: "क्रिटिकल एस्केलेशन", d: "लाइन रुकने वाले माल के लिए सीनियर मैनेजमेंट से बात करना।", p: "लाइन बंद होने से बचाना।", details: ["मैनेजमेंट अलर्ट", "सीनियर से बात", "फास्ट ट्रैक"] },
              { h: "PPC और प्रोडक्शन अपडेट", d: "माल कब आएगा इसकी जानकारी प्रोडक्शन टीम को देना।", p: "प्रोएक्टिव प्रोडक्शन।", details: ["आने का समय", "प्लान पर असर", "विकल्प मॉडल"] },
              { h: "Expediting (तेज़ कार्यवाही)", d: "माल जल्दी लाने के लिए फास्ट ट्रांसपोर्ट या विकल्प सोर्स चुनना।", p: "देरी का असर कम करना।", details: ["एयर शिपमेंट", "फास्ट ट्रक", "लोकल परचेज"] }
            ],
            output: ["देरी पर नियंत्रण", "लाइन स्टॉप से बचाव", "सप्लायर अनुशासन", "प्लानिंग स्थिरता"],
            summary: "देरी से आने वाले माल को मैनेज करके प्रोडक्शन फ्लो बनाए रखना।",
            tracker: {
              title: "OSD ट्रैकर: लाइव ओवरड्यू डैशबोर्ड",
              headers: ["PO #", "सप्लायर", "पार्ट", "तारीख", "देरी", "प्रायोरिटी", "स्टेटस"],
              rows: [
                { po: "PO-9821", supplier: "Steel Co.", part: "Main Frame", due: "2026-03-20", delay: "6 दिन", priority: "high", status: "overdue" },
                { po: "PO-9845", supplier: "Fasten Inc.", part: "M8 Bolts", due: "2026-03-22", delay: "4 दिन", priority: "medium", status: "revised" },
                { po: "PO-9870", supplier: "Polymer Ltd.", part: "Gasket", due: "2026-03-25", delay: "1 दिन", priority: "low", status: "pending" },
                { po: "PO-9812", supplier: "Tech Parts", part: "Control Board", due: "2026-03-15", delay: "11 दिन", priority: "high", status: "critical" }
              ]
            }
          }
        },
        { 
          id: 'support', 
          title: "Supporting Elements", 
          tag: "जुड़ाव", 
          desc: "अन्य ज़रूरी सपोर्ट कार्य।", 
          icon: "⛓️", 
          color: "amber",
          points: ["Min-Max तालमेल", "बिल और GRN मिलान", "पेमेंट फॉलो-अप", "ऑडिट रिकॉर्ड्स", "SRM रिश्ते"],
          details: {
            title: "Supporting Elements (Procurement Synergy)",
            definition: "ये वो गतिविधियाँ हैं जो डायरेक्ट खरीद के अलावा होती हैं, लेकिन माल की उपलब्धता और नियमों के पालन के लिए ज़रूरी हैं।",
            points: [
              { h: "इन्वेंटरी तालमेल (Min–Max)", d: "परचेज को स्टोर के स्टॉक लेवल और PPC डिमांड के साथ जोड़कर रखना।", p: "लाइन स्टॉप और पैसा ब्लॉक होने से बचाव।", details: ["Min-Max रीऑर्डर", "सेफ्टी स्टॉक बैकअप", "डिमांड सिंक"] },
              { h: "GRN और इनवॉइस तालमेल", d: "माल आने के बाद सिस्टम एंट्री और बिलिंग का सही मिलान करना।", p: "पेमेंट में देरी से बचाव।", details: ["PO vs GRN मिलान", "टैक्स जांच", "मिसमैच ठीक करना"] },
              { h: "पेमेंट फॉलो-अप सपोर्ट", d: "सप्लायर और फाइनेंस के बीच तालमेल ताकि समय पर भुगतान हो सके।", p: "वेंडर का भरोसा जीतना।", details: ["तारीख ट्रैक करना", "फाइनेंस तालमेल", "वेंडर सवाल"] },
              { h: "डॉक्यूमेंटेशन और ऑडिट", d: "PO, GRN और वेंडर रिकॉर्ड्स को अपडेट रखना।", p: "मज़बूत अनुपालन (Compliance)।", details: ["ISO रिकॉर्ड्स", "ऑडिट डेटा रेडी", "NCR जवाब"] },
              { h: "सप्लायर रिलेशनशिप (SRM)", d: "सप्लायर के साथ लंबे समय के पेशेवर और भरोसेमंद रिश्ते बनाना।", p: "इमरजेंसी में सपोर्ट।", details: ["परफॉरमेंस फीडबैक", "नियमित मीटिंग", "Win-win बातचीत"] }
            ],
            output: ["ऑडिट में सफलता", "सप्लायर का भरोसा", "पैसों की बचत", "स्मूथ फ्लो"],
            summary: "परचेज के काम को मज़बूत और नियम-अनुसार बनाने वाले पिलर्स।"
          }
        }
      ]
    }
  };

  const current = content[lang] || content['en'];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'overdue':
        return { color: 'text-rose-500', bg: 'bg-rose-500/20', icon: '⚠️', border: 'border-rose-500/30', glow: 'shadow-[0_0_10px_rgba(244,63,94,0.3)]' };
      case 'revised':
        return { color: 'text-amber-400', bg: 'bg-amber-500/20', icon: '📅', border: 'border-amber-500/30', glow: 'shadow-[0_0_10px_rgba(245,158,11,0.3)]' };
      case 'pending':
        return { color: 'text-cyan-400', bg: 'bg-cyan-500/20', icon: '⏳', border: 'border-cyan-500/30', glow: 'shadow-[0_0_10px_rgba(6,182,212,0.3)]' };
      case 'critical':
        return { color: 'text-rose-600', bg: 'bg-rose-600/30', icon: '🚨', border: 'border-rose-600/50', glow: 'shadow-[0_0_15px_rgba(225,29,72,0.5)]', pulse: true };
      default:
        return { color: 'text-slate-400', bg: 'bg-slate-500/20', icon: '•', border: 'border-slate-500/30', glow: '' };
    }
  };

  const getPriorityStyle = (priority: string) => {
    switch (priority) {
      case 'high':
        return { color: 'text-rose-400', border: 'border-rose-500/30', bg: 'bg-rose-500/10', label: 'P1' };
      case 'medium':
        return { color: 'text-amber-400', border: 'border-amber-500/30', bg: 'bg-amber-500/10', label: 'P2' };
      case 'low':
        return { color: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', label: 'P3' };
      default:
        return { color: 'text-slate-400', border: 'border-slate-500/30', bg: 'bg-slate-500/10', label: 'P0' };
    }
  };

  // Level 3: Deep Intel View (Involved Activities & Purpose)
  if (selectedPointIndex !== null && selectedModule) {
    const moduleData = current.sections.find(s => s.id === selectedModule)?.details!;
    const point = moduleData.points[selectedPointIndex];
    const color = selectedModule === 'material' ? 'blue' : selectedModule === 'vendor' ? 'emerald' : selectedModule === 'osd' ? 'rose' : 'amber';
    const icon = selectedModule === 'material' ? '💳' : selectedModule === 'vendor' ? '🤝' : selectedModule === 'osd' ? '📞' : '⛓️';

    return (
      <div className="flex flex-col gap-8 animate-in slide-in-from-bottom-4 duration-500 pb-16 max-w-5xl mx-auto px-4 md:px-8 py-8 relative">
        <div className={`flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-${color}-500/20 pb-6 bg-slate-950/40 p-8 rounded-t-[40px] backdrop-blur-md`}>
           <div className="flex items-center gap-6">
              <div className={`w-14 h-14 bg-slate-900 border border-${color}-500/40 rounded-2xl flex items-center justify-center text-3xl shadow-xl`}>{icon}</div>
              <div>
                 <h4 className={`text-${color}-400 text-[10px] font-black uppercase tracking-[0.4em] mb-1`}>Activity Deep Intel / {selectedPointIndex + 1}</h4>
                 <h3 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter italic leading-none">{point.h}</h3>
              </div>
           </div>
           <motion.button 
             whileHover={{ x: -4 }}
             whileTap={{ scale: 0.98 }}
             onClick={() => setSelectedPointIndex(null)} 
             className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-white/10 transition-all flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
           >
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
              {current.backToModule}
           </motion.button>
        </div>

        <div className="bg-slate-900 border border-white/10 p-10 rounded-[48px] shadow-2xl space-y-10 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Deep View</div>
           
           <div className="space-y-6 relative z-10">
              <h4 className="text-white text-xl font-black uppercase tracking-widest border-b-2 border-indigo-500 w-fit pb-2">{lang === 'hi' ? 'मुख्य विवरण' : 'Core Explanation'}</h4>
              <p className={`text-slate-200 text-lg md:text-2xl font-bold leading-relaxed italic border-l-4 border-${color}-500 pl-6 bg-${color}-500/5 py-6 rounded-r-2xl`}>
                 "{point.d}"
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Elements/Subpoints - THESE ARE THE SUB-POINTS OF THE ELEMENT */}
              {point.details && (
                <div className="space-y-6">
                   <h5 className="text-white text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                      <span className={`w-8 h-px bg-${color}-500`}></span>
                      {lang === 'hi' ? 'शामिल गतिविधियाँ' : 'Involved Activities'}
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

              {/* Purpose/Logic */}
              <div className="space-y-6">
                 <h5 className="text-white text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                    <span className={`w-8 h-px bg-${color}-500`}></span>
                    {lang === 'hi' ? 'महत्व / उद्देश्य' : 'Purpose & Logic'}
                 </h5>
                 <div className={`bg-${color}-500/10 p-8 rounded-[40px] border border-${color}-500/20 shadow-inner h-full flex flex-col justify-center items-center text-center gap-4 group`}>
                    <div className={`w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-2xl shadow-lg transition-transform group-hover:scale-110`}>📌</div>
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
              Deep Intel Protocol: v1.5 Activated
           </span>
           <span className="opacity-40 italic">Industrial Hub // Knowledge Extraction Module</span>
        </div>
      </div>
    );
  }

  // Level 2: Module Overview (Activity List)
  if (selectedModule === 'material' || selectedModule === 'vendor' || selectedModule === 'osd' || selectedModule === 'support') {
    const data = current.sections.find(s => s.id === selectedModule)?.details!;
    const color = selectedModule === 'material' ? 'blue' : selectedModule === 'vendor' ? 'emerald' : selectedModule === 'osd' ? 'rose' : 'amber';
    const icon = selectedModule === 'material' ? '💳' : selectedModule === 'vendor' ? '🤝' : selectedModule === 'osd' ? '📞' : '⛓️';
    
    return (
      <div className="flex flex-col gap-8 animate-in slide-in-from-right-4 duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-8 py-8 relative">
        <div className={`flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-${color}-500/20 pb-6 bg-slate-950/40 p-8 rounded-t-[40px] backdrop-blur-md`}>
          <div className="flex items-center gap-6">
             <div className={`w-16 h-16 bg-slate-900 border border-${color}-500/40 rounded-2xl flex items-center justify-center text-4xl shadow-xl`}>{icon}</div>
             <div>
                <h3 className="text-white text-2xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{data.title}</h3>
                <p className={`text-${color}-400 text-[10px] font-black uppercase tracking-[0.4em] mt-2`}>Strategic Sourcing Module</p>
             </div>
          </div>
          <motion.button 
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedModule(null)} 
            className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest border border-white/10 transition-all shadow-xl flex items-center justify-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
            {current.backToList}
          </motion.button>
        </div>

        <div className={`bg-slate-900 border border-${color}-500/30 p-10 rounded-[48px] shadow-2xl space-y-6 relative overflow-hidden group`}>
           <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">{selectedModule === 'vendor' ? 'Sourcing' : selectedModule === 'osd' ? 'Tracking' : selectedModule === 'support' ? 'Synergy' : 'Workflow'}</div>
           <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-widest border-b-2 border-blue-500 w-fit pb-2">{lang === 'hi' ? 'मुख्य परिभाषा' : 'Strategic Definition'}</h4>
           <p className={`text-slate-200 text-lg md:text-2xl font-bold leading-relaxed italic border-l-4 border-${color}-500 pl-6 bg-${color}-500/5 py-4 rounded-r-2xl`}>
              "{data.definition}"
           </p>
           {data.simple && (
              <p className={`text-${color}-400 font-black text-xs md:text-lg uppercase tracking-widest italic pt-4`}>👉 {data.simple}</p>
           )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
           {/* Detailed Interactive Points - THESE ARE THE SUB-POINTS OF THE SECTION */}
           <div className="lg:col-span-8 bg-slate-900/60 p-8 md:p-12 rounded-[48px] border border-white/5 shadow-2xl space-y-10">
              <h4 className="text-white text-xl font-black uppercase tracking-tight flex items-center gap-4">
                 <span className={`w-12 h-1 bg-${color}-500`}></span>
                 {lang === 'hi' ? `${data.points.length} मुख्य गतिविधियाँ (क्लिक करें)` : `${data.points.length} Key Activities (Click for Details)`}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {data.points.map((pt, i) => (
                    <motion.button 
                       key={i} 
                       onClick={() => setSelectedPointIndex(i)}
                       whileHover={{ 
                          scale: 1.02,
                          borderColor: "rgba(59, 130, 246, 0.5)",
                          backgroundColor: "rgba(2, 6, 23, 0.8)"
                       }}
                       whileTap={{ scale: 0.98 }}
                       className="bg-slate-950/60 p-6 rounded-3xl border border-white/5 group transition-all flex flex-col gap-3 text-left shadow-lg relative overflow-hidden h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
                    >
                       <div className="flex items-center justify-between">
                          <span className={`w-8 h-8 rounded-lg bg-slate-900 border border-${color}-500/30 flex items-center justify-center text-${color}-400 font-black text-xs`}>0{i+1}</span>
                          <span className="text-[7px] font-black text-white/20 uppercase tracking-[0.4em]">{selectedModule === 'vendor' ? 'SRC-INTEL' : selectedModule === 'osd' ? 'TRACK-INTEL' : selectedModule === 'support' ? 'SYNC-INTEL' : 'PROC-INTEL'}</span>
                       </div>
                       <h5 className="text-white font-black text-sm uppercase tracking-tight group-hover:text-blue-400 transition-colors">{pt.h}</h5>
                       <p className="text-slate-500 text-[10px] font-bold leading-relaxed line-clamp-2 italic">"{pt.d}"</p>
                       
                       <div className="mt-auto flex items-center gap-2 text-white/30 text-[7px] font-black uppercase tracking-widest group-hover:text-white transition-colors">
                          View Deep Intel <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
                       </div>
                    </motion.button>
                 ))}
              </div>
           </div>

           {/* Final Output Summary */}
           <div className="lg:col-span-4 space-y-8">
              <div className={`bg-slate-900 p-10 rounded-[48px] border border-${color}-500/30 shadow-2xl flex flex-col items-center text-center gap-8 relative overflow-hidden`}>
                 <div className={`w-20 h-20 bg-${color}-500/10 border border-${color}-500/30 rounded-3xl flex items-center justify-center text-4xl shadow-lg`}>🏁</div>
                 <h5 className="text-white text-2xl font-black uppercase tracking-tighter italic leading-none">{lang === 'hi' ? 'अंतिम परिणाम' : 'Final Output'}</h5>
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
                    <h5 className="text-white/60 font-black text-[10px] uppercase tracking-[0.6em] mb-2">{lang === 'hi' ? 'मुख्य सारांश (One Line)' : 'One Line Summary'}</h5>
                    <p className="text-white text-lg md:text-xl font-black italic tracking-tight leading-snug">
                       "{data.summary}"
                    </p>
                 </div>
              </div>
           </div>
        </div>

        {/* OSD Tracker Table - Only for OSD Module */}
        {selectedModule === 'osd' && data.tracker && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-700 mt-8">
            <div className="bg-slate-900/80 border border-rose-500/30 rounded-[48px] overflow-hidden shadow-2xl backdrop-blur-xl">
              <div className="p-8 border-b border-rose-500/20 bg-rose-500/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center text-2xl shadow-lg">📊</div>
                  <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight italic">{data.tracker.title}</h4>
                </div>
                <div className="hidden md:flex items-center gap-3">
                  <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
                  <span className="text-rose-400 text-[10px] font-black uppercase tracking-widest">Live Tracking Active</span>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                {data.tracker.rows.length > 0 ? (
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-950/60">
                        {data.tracker.headers.map((header: string, i: number) => (
                          <th key={i} className="px-8 py-6 text-rose-400 text-[10px] font-black uppercase tracking-[0.2em] border-b border-white/5">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {data.tracker.rows.map((row: any, i: number) => {
                        const statusStyle = getStatusStyle(row.status);
                        const priorityStyle = getPriorityStyle(row.priority);
                        const delayDays = parseInt(row.delay);
                        const delayPercent = Math.min((delayDays / 14) * 100, 100);
                        
                        return (
                          <motion.tr 
                            key={i} 
                            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                            className="transition-colors group relative"
                          >
                            <td className="px-8 py-6 text-white font-black text-xs font-mono relative">
                              {row.po}
                              {statusStyle.pulse && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-rose-600 animate-pulse"></div>
                              )}
                            </td>
                            <td className="px-8 py-6 text-slate-300 font-bold text-xs uppercase">{row.supplier}</td>
                            <td className="px-8 py-6 text-slate-300 font-bold text-xs uppercase">{row.part}</td>
                            <td className="px-8 py-6 text-slate-400 font-mono text-xs">{row.due}</td>
                            <td className="px-8 py-6">
                              <div className="flex flex-col gap-2 min-w-[100px]">
                                <span className="text-rose-500 font-black text-xs italic">{row.delay}</span>
                                <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)] transition-all duration-1000" 
                                    style={{ width: `${delayPercent}%` }}
                                  ></div>
                                </div>
                              </div>
                            </td>
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-2">
                                <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${priorityStyle.border} ${priorityStyle.bg} ${priorityStyle.color}`}>
                                  {priorityStyle.label}
                                </span>
                                <span className={`${priorityStyle.color} text-[8px] font-black uppercase opacity-60`}>{row.priority}</span>
                              </div>
                            </td>
                            <td className="px-8 py-6">
                              <div className={`flex items-center gap-3 p-2 rounded-2xl border ${statusStyle.border} ${statusStyle.bg} ${statusStyle.glow} transition-all group-hover:scale-105`}>
                                <div className={`w-8 h-8 rounded-lg bg-slate-900/80 flex items-center justify-center text-lg shadow-inner ${statusStyle.pulse ? 'animate-pulse' : ''}`}>
                                  {statusStyle.icon}
                                </div>
                                <span className={`${statusStyle.color} font-black text-[10px] uppercase tracking-widest`}>
                                  {row.status}
                                </span>
                              </div>
                            </td>
                          </motion.tr>
                        );
                      })}
                    </tbody>
                  </table>
                ) : (
                  <div className="p-12">
                    <EmptyState 
                      color="rose"
                      icon="📋"
                      title={lang === 'hi' ? 'कोई डेटा नहीं मिला' : 'No Tracker Data Found'}
                      description={lang === 'hi' ? 'वर्तमान में कोई सक्रिय ओएसडी ट्रैकर डेटा उपलब्ध नहीं है।' : 'Currently there is no active OSD tracker data available for this module.'}
                      actionLabel={lang === 'hi' ? 'रिफ्रेश करें' : 'Refresh Data'}
                      onAction={() => window.location.reload()}
                    />
                  </div>
                )}
              </div>
              
              <div className="p-6 bg-rose-500/5 border-t border-rose-500/10 flex justify-center">
                <p className="text-rose-400/60 text-[9px] font-black uppercase tracking-[0.4em] italic">
                  Data Refresh Protocol: Real-time // Source: ERP-Procurement-Node
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Level 1: Main Category Hub (4 cards)
  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-8 py-8 relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-blue-500/20 pb-6 bg-slate-950/40 p-8 rounded-t-[40px] backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-[0_0_12px_blue]"></div>
              <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-none font-mono italic">Procurement Hub</h3>
        </div>
        <motion.button 
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBack} 
          className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl border border-white/10 flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
          {current.backBtn}
        </motion.button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-blue-500/30 p-10 md:p-14 rounded-[48px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-10 text-9xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Purchase</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-blue-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-8 md:p-10 rounded-[40px] border-l-8 border-blue-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors">
            <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic mb-4">"🚀 {current.hero.simple}"</p>
            <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.8em] animate-pulse">"{current.hero.mantra}"</p>
         </div>
      </div>

      {/* 4 Sections Grid - Bullet points visible here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         {current.sections.map((sec) => (
            <motion.button 
              key={sec.id} 
              onClick={() => setSelectedModule(sec.id)}
              whileHover={{ 
                y: -8,
                borderColor: "rgba(59, 130, 246, 0.3)",
                backgroundColor: "rgba(2, 6, 23, 0.8)"
              }}
              whileTap={{ scale: 0.98 }}
              className={`bg-slate-950/60 border border-white/5 p-8 rounded-[40px] transition-all group flex flex-col gap-6 shadow-xl relative overflow-hidden h-full border-t-4 border-t-${sec.color}-500/40 ring-1 ring-white/5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950`}
            >
               <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 bg-slate-900 border border-${sec.color}-500/20 rounded-[20px] flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>{sec.icon}</div>
                  <span className={`text-${sec.color}-500 font-black text-[9px] uppercase tracking-widest border border-${sec.color}-500/30 px-3 py-1 rounded-full`}>{sec.tag}</span>
               </div>

               <div className="space-y-1">
                  <h5 className="text-white text-xl font-black uppercase tracking-tight group-hover:text-blue-400 transition-colors">0{sec.id === 'material' ? '1' : sec.id === 'vendor' ? '2' : sec.id === 'osd' ? '3' : '4'}. {sec.title}</h5>
                  <p className="text-slate-500 text-[10px] font-bold leading-relaxed italic uppercase">{sec.desc}</p>
               </div>

               <div className={`flex items-center gap-2 text-${sec.color}-500 text-[8px] font-black uppercase tracking-widest animate-pulse group-hover:text-white transition-colors`}>
                  Open Module Overview <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
               </div>

               <div className="space-y-2 pt-6 border-t border-white/5">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-4">Core Focus / मुख्य कार्य:</span>
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
            </motion.button>
         ))}
      </div>

      {/* Footer System Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-10 py-6 bg-slate-950/60 rounded-[40px] border border-white/5 text-[11px] font-black uppercase tracking-[0.5em] text-slate-500">
          <div className="flex gap-12">
             <span className="flex items-center gap-4">
                <span className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_12px_blue] animate-pulse"></span>
                Procurement Ledger: Live
             </span>
             <span className="flex items-center gap-4">
                <span className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_12px_emerald]"></span>
                Supply Chain: Synced
             </span>
          </div>
          <div className="opacity-60 italic font-mono uppercase tracking-widest">Procurement Node v12.12 // No Interruption Policy</div>
      </div>
    </div>
  );
};

export default PurchaseProcurementDetail;

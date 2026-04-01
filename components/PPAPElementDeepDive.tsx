
import React from 'react';
import { Language } from '../types';

interface PPAPElementDeepDiveProps {
  elementIndex: number;
  onBack: () => void;
  lang: Language;
}

const PPAPElementDeepDive: React.FC<PPAPElementDeepDiveProps> = ({ elementIndex, onBack, lang }) => {
  const translations = {
    en: [
      {
        name: "Design Record",
        desc: "The official master document (Drawing/CAD) released by the customer.",
        purpose: "Ensures the supplier has the latest authorized design and understands all specs.",
        criticality: "HIGH",
        checklist: ["Part Drawing with latest Revision No.", "GD&T Tolerances verified", "Material specs clearly mentioned", "Engineering standards reference"],
        mistakes: "Using an old revision of the drawing or incomplete CAD files.",
        auditTip: "Check if the drawing date matches the PSW date."
      },
      {
        name: "Engineering Change Docs",
        desc: "Evidence of all authorized changes to the design/process including ECR, ECN, and SCN.",
        purpose: "To track modifications and ensure all changes (hardware & software) are officially approved and implemented.",
        criticality: "CRITICAL",
        checklist: ["Signed ECR (Request)", "Approved ECN (Notice)", "Software Change Note (SCN)", "Software Version Verification", "Validation of changed parameters"],
        mistakes: "Mismatch between Software Version on part vs SCN document.",
        auditTip: "For SCN, verify the 'Checksum' or 'Build ID' matches production logs."
      },
      {
        name: "Customer Engineering Approval",
        desc: "Written proof from the customer's engineering dept accepting the design/process.",
        purpose: "Validates that the product meets the specific application needs of the customer.",
        criticality: "HIGH",
        checklist: ["Signed deviation forms (if any)", "Pre-approval memos", "Technical sign-offs", "Email approvals from OEM"],
        mistakes: "Assuming verbal approval is sufficient for PPAP submission.",
        auditTip: "This is mandatory if specified by customer CSR."
      },
      {
        name: "DFMEA",
        desc: "Design Failure Mode and Effects Analysis. Risk assessment of product design.",
        purpose: "To identify design-related weaknesses and mitigate them early.",
        criticality: "HIGH",
        checklist: ["Severity scores for failures", "RPN values calculated", "Recommended design improvements", "Control strategies"],
        mistakes: "Severity scores set too low to avoid action plans.",
        auditTip: "Look for high-severity items and ensure they have a 'Prevention' action."
      },
      {
        name: "Process Flow Diagram",
        desc: "A schematic representation of the entire manufacturing process sequence.",
        purpose: "To visualize the logic and sequence of operations to identify flow gaps.",
        criticality: "MEDIUM",
        checklist: ["Incoming staging included", "All processing steps", "Inspection points marked", "Packing/Dispatch sequence"],
        mistakes: "Missing inspection steps or rework loops in the flow.",
        auditTip: "Ensure the sequence matches the Control Plan exactly."
      },
      {
        name: "PFMEA",
        desc: "Process Failure Mode and Effects Analysis. Risk analysis for manufacturing steps.",
        purpose: "To find process risks (operator error, machine drift) and prevent them.",
        criticality: "CRITICAL",
        checklist: ["Failure modes for every step", "Current controls defined", "Action plans for High RPN", "Revised S-O-D scores"],
        mistakes: "Copy-pasting DFMEA into PFMEA without process-specific risks.",
        auditTip: "Auditors check if 'Occurrence' is based on real production data."
      },
      {
        name: "Control Plan",
        desc: "The master roadmap for daily process control.",
        purpose: "Defines what to check, how often, and the reaction plan for NG parts.",
        criticality: "CRITICAL",
        checklist: ["CTQ Points identified", "Measurement method defined", "Sample frequency stated", "OCAP (Reaction Plan)"],
        mistakes: "Reaction plan being 'Tell Supervisor' instead of a physical action.",
        auditTip: "Verify if CTQ points in CP match the ballooned drawing."
      },
      {
        name: "MSA Studies",
        desc: "Measurement System Analysis. A statistical study to verify if your gauges and people can be trusted.",
        purpose: "Ensures that the variation in measurement is small enough to make correct Quality decisions.",
        criticality: "CRITICAL",
        checklist: ["Gage R&R Report (<10% target)", "Bias & Linearity study", "Stability report", "Appraiser selection list"],
        mistakes: "Performing MSA on a gauge that has not been calibrated first.",
        auditTip: "Check if the MSA was done with actual production operators and real parts."
      },
      {
        name: "Dimensional Results",
        desc: "Measurement report of actual samples vs drawing specifications.",
        purpose: "Proves that the physical part matches 100% of dimensions.",
        criticality: "HIGH",
        checklist: ["Ballooned drawing attached", "Actual vs Spec values", "OK/NG Conclusion", "Inspector stamp"],
        mistakes: "Rounding off values to make them 'look' within tolerance.",
        auditTip: "Auditors often re-measure a part to verify the report."
      },
      {
        name: "Material / Performance Tests",
        desc: "Lab reports for raw material chemistry and part functionality.",
        purpose: "Validates that material is correct and part works in real conditions.",
        criticality: "HIGH",
        checklist: ["Chemical analysis (COA)", "Hardness/Tensile tests", "Endurance study", "Environmental tests"],
        mistakes: "Expired material test reports or missing vendor COA.",
        auditTip: "Material COA date must be prior to the production run date."
      },
      {
        name: "Initial Process Studies",
        desc: "Statistical capability data like Cp and Cpk values.",
        purpose: "Proves process stability and capability to produce good parts consistently.",
        criticality: "HIGH",
        checklist: ["Cp/Cpk Data (Target > 1.33)", "Ppk Data", "Control Charts", "Distribution Histogram"],
        mistakes: "Calculating Cpk using too few samples (need at least 25-30 subgroups).",
        auditTip: "Check if the process was 'Stable' during data collection."
      },
      {
        name: "Qualified Lab Docs",
        desc: "Certifications and scope of the testing laboratory used.",
        purpose: "Proves testing was done by an authorized and accurate facility.",
        criticality: "MEDIUM",
        checklist: ["ISO 17025 Accreditation", "Lab Scope document", "Validity date", "Accreditation body logo"],
        mistakes: "Using a lab whose 'Scope' doesn't cover the specific test performed.",
        auditTip: "Ensure the lab name matches the one on test reports."
      },
      {
        name: "Appearance Approval (AAR)",
        desc: "Specific report for color, grain, texture, and surface finish.",
        purpose: "Ensures aesthetic requirements meet customer standards.",
        criticality: "MEDIUM",
        checklist: ["Color match vs Master", "Texture verify", "Shade approval", "Customer Signature"],
        mistakes: "AAR form missing signatures from the customer's design team.",
        auditTip: "Mandatory for interior/exterior 'Visible' parts."
      },
      {
        name: "Sample Production Parts",
        desc: "Actual parts taken from a significant production run.",
        purpose: "Provides customer with real parts for fitment and testing.",
        criticality: "HIGH",
        checklist: ["Physical samples", "Proper ID Tagging", "Production date code", "Cavity number identified"],
        mistakes: "Sending 'Hand-made' prototypes instead of production parts.",
        auditTip: "Parts must come from the production tooling/process."
      },
      {
        name: "Master Sample",
        desc: "The 'Golden Part' signed by both supplier and customer.",
        purpose: "Acts as a physical benchmark to compare future lots.",
        criticality: "HIGH",
        checklist: ["Signed sample part", "Storage protection", "Identification labels", "Retention period defined"],
        mistakes: "Storing Master Samples in dusty areas where they degrade.",
        auditTip: "Auditor will ask to see the Master Sample on the shop floor."
      },
      {
        name: "Checking Aids",
        desc: "Special tools, jigs, and gauges used to check production parts.",
        purpose: "Ensures the customer knows how parts are being inspected.",
        criticality: "MEDIUM",
        checklist: ["Gauge drawing", "Calibration sticker", "MSA of the gauge", "Photos of usage"],
        mistakes: "Checking aids not having their own calibration ID.",
        auditTip: "Check if the checking aid matches the Method in the Control Plan."
      },
      {
        name: "Customer Specific Req.",
        desc: "Additional documents requested by specific OEMs.",
        purpose: "Fulfills unique standards of different customers (e.g., Ford, Maruti).",
        criticality: "MEDIUM",
        checklist: ["Tier-1 Audit reports", "Packaging standards", "Run@Rate results", "Capacity verification"],
        mistakes: "Ignoring CSR (Customer Specific Requirements) from the manual.",
        auditTip: "Always refer to the latest Customer quality manual."
      },
      {
        name: "PSW (Part Submission Warrant)",
        desc: "The ultimate cover page and legal guarantee of the PPAP package.",
        purpose: "Summarizes the whole submission and acts as official request for approval.",
        criticality: "CRITICAL",
        checklist: ["Supplier/Part info", "Submission Level", "Declaration of conformity", "Final Sign-off"],
        mistakes: "Missing signatures or wrong weight recorded on PSW.",
        auditTip: "Weight must be measured in 4 decimal places (kg) usually."
      }
    ],
    hi: [
      {
        name: "डिजाइन रिकॉर्ड (Design Record)",
        desc: "कस्टमर द्वारा जारी किया गया आधिकारिक नक्शा (Drawing/CAD)।",
        purpose: "यह पक्का करता है कि सप्लायर के पास लेटेस्ट डिज़ाइन है और वह हर स्पेसिफिकेशन को समझता है।",
        criticality: "HIGH",
        checklist: ["लेटेस्ट रिवीजन वाली ड्राइंग", "GD&T टॉलरेंस की जांच", "मटेरियल स्पेसिफिकेशन", "इंजीनियरिंग मानक"],
        mistakes: "पुराने नक्शे का उपयोग करना या अधूरी CAD फाइलें रखना।",
        auditTip: "चेक करें कि ड्राइंग की तारीख PSW की तारीख से मेल खाती है या नहीं।"
      },
      {
        name: "इंजीनियरिंग चेंज डॉक्स",
        desc: "ECR, ECN और SCN सहित डिज़ाइन/प्रोसेस में किए गए सभी बदलावों का सबूत।",
        purpose: "बदलावों को ट्रैक करना और यह पक्का करना कि सभी चेंज (हार्डवेयर और सॉफ्टवेयर) पास हो चुके हैं।",
        criticality: "CRITICAL",
        checklist: ["हस्ताक्षरित ECR (प्रस्ताव)", "पास किया गया ECN (नोटिस)", "सॉफ्टवेयर चेंज नोट (SCN)", "वर्जन वेरिफिकेशन", "बदले हुए मापदंडों की जांच"],
        mistakes: "बिना लिखित आदेश (ECN) के काम शुरू कर देना।",
        auditTip: "चेक करें कि 'इफेक्टिव डेट' और पहला प्रोडक्शन बैच मैच हो रहे हैं।"
      },
      {
        name: "कस्टमर इंजीनियरिंग अप्रूवल",
        desc: "कस्टमर के इंजीनियरिंग विभाग से मिला लिखित डिज़ाइन/प्रोसेस एक्सेप्टेंस।",
        purpose: "यह साबित करता है कि प्रोडक्ट कस्टमर की ज़रूरतों के हिसाब से एकदम सही है।",
        criticality: "HIGH",
        checklist: ["डेविएशन फॉर्म (यदि कोई हो)", "टेक्निकल साइन-ऑफ", "ईमेल अप्रूवल्स"],
        mistakes: "मौखिक अप्रूवल (Verbal) पर भरोसा करना।",
        auditTip: "यह CSR नियमों के अनुसार अनिवार्य दस्तावेज है।"
      },
      {
        name: "DFMEA",
        desc: "डिजाइन फेलियर मोड एंड इफेक्ट्स एनालिसिस। डिज़ाइन के जोखिमों की जांच।",
        purpose: "डिज़ाइन की कमियों को पहचानना और उन्हें शुरू में ही ठीक करना।",
        criticality: "HIGH",
        checklist: ["Severity स्कोर", "RPN कैलकुलेशन", "सुधार के कदम", "कंट्रोल स्ट्रेटेजी"],
        mistakes: "एक्शन प्लान से बचने के लिए Severity स्कोर कम दिखाना।",
        auditTip: "हाई RPN वाली कमियों के लिए प्रिवेंटिव एक्शन ज़रूर देखें।"
      },
      {
        name: "प्रोसेस फ्लो डायग्राम",
        desc: "पूरी मैन्युफैक्चरिंग प्रक्रिया का एक नक्शा (Flow)।",
        purpose: "काम के क्रम को समझना ताकि कोई स्टेप छूट न जाए।",
        criticality: "MEDIUM",
        checklist: ["इनकमिंग स्टेज", "सभी प्रोसेस स्टेप्स", "इंस्पेक्शन पॉइंट्स", "पैकिंग और डिस्पैच"],
        mistakes: "प्रोसेस में रीवर्क लूप या चेकिंग पॉइंट को न दिखाना।",
        auditTip: "चेक करें कि फ्लो का क्रम कंट्रोल प्लान से मैच होता है या नहीं।"
      },
      {
        name: "PFMEA",
        desc: "प्रोसेस फेलियर मोड एंड इफेक्ट्स एनालिसिस। मैन्युफैक्चरिंग जोखिमों की जांच।",
        purpose: "मशीन और ऑपरेटर की गलतियों को पहचानना और उन्हें रोकना।",
        criticality: "CRITICAL",
        checklist: ["हर स्टेप के फेलियर मोड", "मौजूदा कंट्रोल", "हाई RPN सुधार प्लान"],
        mistakes: "DFMEA को ही PFMEA में कॉपी कर देना।",
        auditTip: "चेक करें कि 'Occurrence' असली प्रोडक्शन डेटा पर आधारित है या नहीं।"
      },
      {
        name: "कंट्रोल प्लान (Control Plan)",
        desc: "डेली प्रोसेस कंट्रोल के लिए मुख्य नियम पुस्तिका।",
        purpose: "यह तय करता है कि क्या चेक करना है, कितनी बार और गड़बड़ होने पर क्या करना है।",
        criticality: "CRITICAL",
        checklist: ["CTQ पॉइंट्स", "मापने का तरीका", "जांच का समय (Frequency)", "रिएक्शन प्लान"],
        mistakes: "रिएक्शन प्लान में 'सुपरवाइजर को बताओ' लिखना (सिर्फ सूचना काफी नहीं, एक्शन चाहिए)।",
        auditTip: "ड्राइंग के बैलून पॉइंट्स और कंट्रोल प्लान के पॉइंट्स को मैच करें।"
      },
      {
        name: "MSA स्टडीज (MSA Studies)",
        desc: "मेज़रमेंट सिस्टम एनालिसिस। यह जांचना कि आपके गेज और ऑपरेटर भरोसेमंद हैं या नहीं।",
        purpose: "यह पक्का करना कि नाप-तोल में होने वाली गलती इतनी कम हो कि क्वालिटी का फैसला गलत न हो।",
        criticality: "CRITICAL",
        checklist: ["Gage R&R रिपोर्ट (<10% लक्ष्य)", "Bias और Linearity जांच", "Stability रिपोर्ट", "ऑपरेटर लिस्ट"],
        mistakes: "ऐसे गेज पर MSA करना जिसका कैलिब्रेशन फेल हो गया है।",
        auditTip: "चेक करें कि MSA असली ऑपरेटरों और असली पार्ट्स के साथ किया गया है।"
      },
      {
        name: "डायमेंशनल रिजल्ट्स",
        desc: "असली सैंपल्स और ड्राइंग के माप की तुलना वाली रिपोर्ट।",
        purpose: "यह साबित करता है कि फिजिकल पार्ट ड्राइंग के हर माप से मैच होता है।",
        criticality: "HIGH",
        checklist: ["बैलून ड्राइंग", "असली माप बनाम ड्राइंग माप", "OK/NG नतीजा", "इंस्पेक्टर स्टैम्प"],
        mistakes: "टॉलरेंस में दिखाने के लिए वैल्यूज़ को गोल-मोल (Rounding) करना।",
        auditTip: "ऑडिटर रिपोर्ट चेक करने के लिए पार्ट को खुद दोबारा माप सकता है।"
      },
      {
        name: "मटेरियल / परफॉरमेंस टेस्ट",
        desc: "रॉ मटेरियल की लैब रिपोर्ट और पार्ट की फंक्शनल टेस्टिंग रिपोर्ट।",
        purpose: "मटेरियल की शुद्धता और पार्ट की मजबूती पक्का करना।",
        criticality: "HIGH",
        checklist: ["केमिकल एनालिसिस (COA)", "हार्डनेस / टेंसाइल टेस्ट", "एंड्योरेंस स्टडी", "वातावरण टेस्ट"],
        mistakes: "पुरानी टेस्ट रिपोर्ट या वेंडर का COA गायब होना।",
        auditTip: "मटेरियल टेस्ट की तारीख प्रोडक्शन रन से पहले की होनी चाहिए।"
      },
      {
        name: "इनिशियल प्रोसेस स्टडीज",
        desc: "सांख्यिकीय डेटा जैसे Cp और Cpk वैल्यू।",
        purpose: "प्रोसेस की स्थिरता और सही माल बनाने की क्षमता साबित करना।",
        criticality: "HIGH",
        checklist: ["Cp/Cpk डेटा (लक्ष्य > 1.33)", "Ppk डेटा", "कंट्रोल चार्ट्स", "हिस्टोग्राम"],
        mistakes: "बहुत कम सैंपल्स के साथ Cpk की गणना करना (कम से कम 25-30 ग्रुप चाहिए)।",
        auditTip: "चेक करें कि डेटा लेते समय प्रोसेस 'Stable' था या नहीं।"
      },
      {
        name: "क्वालिफाइड लैब डॉक्स",
        desc: "इस्तेमाल की गई टेस्टिंग लैब के सर्टिफिकेट और स्कोप।",
        purpose: "यह साबित करना कि टेस्टिंग एक अधिकृत और सटीक लैब में हुई है।",
        criticality: "MEDIUM",
        checklist: ["ISO 17025 मान्यता", "लैब स्कोप दस्तावेज", "वैलिडिटी तारीख"],
        mistakes: "ऐसी लैब का उपयोग करना जिसके पास उस खास टेस्ट की अनुमति (Scope) न हो।",
        auditTip: "लैब का नाम और टेस्ट रिपोर्ट का नाम मैच होना चाहिए।"
      },
      {
        name: "अपीयरेंस अप्रूवल (AAR)",
        desc: "रंग, चमक और फिनिशिंग की खास रिपोर्ट।",
        purpose: "दिखावट (Look) की क्वालिटी कस्टमर के हिसाब से पक्का करना।",
        criticality: "MEDIUM",
        checklist: ["रंग मिलान", "टेक्सचर जांच", "शेड अप्रूवल", "कस्टमर साइन"],
        mistakes: "दिखने वाले पार्ट्स (Visible parts) के लिए AAR फॉर्म का न होना।",
        auditTip: "कस्टमर के डिजाइन विभाग के सिग्नेचर ज़रूरी हैं।"
      },
      {
        name: "सैंपल प्रोडक्शन पार्ट्स",
        desc: "असली प्रोडक्शन लाइन से निकाले गए सैंपल्स।",
        purpose: "कस्टमर को फिटमेंट और टेस्टिंग के लिए असली माल देना।",
        criticality: "HIGH",
        checklist: ["फिजिकल सैंपल्स", "ID टैगिंग", "प्रोडक्शन डेट कोड", "कैविटी नंबर"],
        mistakes: "प्रोडक्शन के बजाय हाथ से बने (Hand-made) सैंपल्स भेजना।",
        auditTip: "पार्ट्स उसी मशीन और टूल से बने होने चाहिए जो मास प्रोडक्शन में यूज़ होगा।"
      },
      {
        name: "मास्टर सैंपल (Master Sample)",
        desc: "सप्लायर और कस्टमर द्वारा साइन किया गया 'गोल्डन पार्ट'।",
        purpose: "भविष्य के माल की तुलना के लिए एक फिजिकल बेंचमार्क।",
        criticality: "HIGH",
        checklist: ["हस्ताक्षरित सैंपल", "सुरक्षित स्टोरेज", "पहचान लेवल", "रिटेंशन पीरियड"],
        mistakes: "मास्टर सैंपल को गंदी जगह रखना जहाँ वह खराब हो जाए।",
        auditTip: "ऑडिटर शॉप फ्लोर पर मास्टर सैंपल दिखाने को कहेगा।"
      },
      {
        name: "चेकिंग एड्स (Checking Aids)",
        desc: "पार्ट चेक करने के लिए इस्तेमाल होने वाले खास गेज और जिग्स।",
        purpose: "यह पक्का करना कि चेकिंग का तरीका कस्टमर को पता है।",
        criticality: "MEDIUM",
        checklist: ["गेज ड्राइंग", "कैलिब्रेशन स्टिकर", "गेज का MSA", "उपयोग की फोटो"],
        mistakes: "चेकिंग एड का अपना कैलिब्रेशन ID न होना।",
        auditTip: "कंट्रोल प्लान के 'Method' और चेकिंग एड को मैच करें।"
      },
      {
        name: "कस्टमर स्पेसिफिक रेक.",
        desc: "खास कंपनियों (जैसे मारुति, फोर्ड) द्वारा मांगे गए अतिरिक्त दस्तावेज।",
        purpose: "अलग-अलग कस्टमर्स के अपने यूनिक स्टैंडर्ड्स को पूरा करना।",
        criticality: "MEDIUM",
        checklist: ["टियर-1 ऑडिट रिपोर्ट", "पैकिंग स्टैंडर्ड", "Run@Rate रिपोर्ट"],
        mistakes: "कस्टमर की क्वालिटी मैन्युअल के नियमों को नजरअंदाज करना।",
        auditTip: "हमेशा कस्टमर के लेटेस्ट पोर्टल/मैन्युअल को चेक करें।"
      },
      {
        name: "PSW (वॉरंट)",
        desc: "PPAP पैकेज का मुख्य कवर पेज और कानूनी गारंटी।",
        purpose: "पूरी सबमिशन का सारांश और अप्रूवल की आधिकारिक रिक्वेस्ट।",
        criticality: "CRITICAL",
        checklist: ["सप्लायर/पार्ट जानकारी", "सबमिशन लेवल", "सहमति घोषणा", "फाइनल साइन-ऑफ"],
        mistakes: "सिग्नेचर छूट जाना या पार्ट का गलत वजन लिखना।",
        auditTip: "पार्ट का वजन आमतौर पर 4 डेसीमल पॉइंट्स (kg) में होना चाहिए।"
      }
    ]
  };

  const currentData = (translations[lang] || translations['en'])[elementIndex];

  // Specific content for ECN/ECR/SCN
  const changeDetails = {
    en: {
      ecrTitle: "ECR (Request)",
      ecrDesc: "Proposes 'Why' a change is needed (Cost, Quality, or Fitment issue).",
      ecnTitle: "ECN (Notice)",
      ecnDesc: "Official approval for 'Hardware' or 'Process' implementation.",
      scnTitle: "SCN (Software Notice)",
      scnDesc: "Specifically for products with embedded Software or Firmware. Tracks version changes, bug fixes, and logic updates.",
      flow: ["Request (ECR)", "Feasibility", "Internal Approval", "Implementation (ECN/SCN)", "PPAP Update"]
    },
    hi: {
      ecrTitle: "ECR (प्रस्ताव)",
      ecrDesc: "बदलाव का प्रस्ताव। इसमें लिखा होता है कि बदलाव 'क्यों' चाहिए (जैसे खर्चे या क्वालिटी के लिए)।",
      ecnTitle: "ECN (आधिकारिक सूचना)",
      ecnDesc: "हार्डवेयर या प्रोसेस बदलाव की फाइनल आधिकारिक मंजूरी।",
      scnTitle: "SCN (सॉफ्टवेयर सूचना)",
      scnDesc: "सॉफ्टवेयर या फर्मवेयर वाले प्रोडक्ट्स के लिए। इसमें वर्जन अपडेट, बग फिक्स और लॉजिक बदलाव का रिकॉर्ड होता है।",
      flow: ["प्रस्ताव (ECR)", "जांच-पड़ताल", "मंजूरी", "लागू करना (ECN/SCN)", "PPAP अपडेट"]
    }
  };

  // Specific technical details for MSA (Element Index 7)
  const msaDetails = {
    en: {
      rrTitle: "Gage R&R (The Heart of MSA)",
      rrDesc: "Measures Repeatability (variation by same person) and Reproducibility (variation between different people).",
      factors: [
        { name: "Bias", d: "Difference between average observed value and master value.", icon: "⚖️" },
        { name: "Linearity", d: "Does the accuracy stay same for small and large parts?", icon: "📏" },
        { name: "Stability", d: "Does the gauge give same results over a long time?", icon: "⏱️" }
      ],
      criteria: [
        { zone: "< 10%", result: "Excellent (Accepted)", color: "emerald" },
        { zone: "10 - 30%", result: "Marginal (Needs improvement)", color: "amber" },
        { zone: "> 30%", result: "Rejected (Change system)", color: "rose" }
      ]
    },
    hi: {
      rrTitle: "Gage R&R (MSA की आत्मा)",
      rrDesc: "Repeatability (एक ही व्यक्ति की गलतियाँ) और Reproducibility (अलग-अलग व्यक्तियों के बीच का अंतर) को मापता है।",
      factors: [
        { name: "Bias (बायस)", d: "मास्टर वैल्यू और असली नाप के बीच का अंतर।", icon: "⚖️" },
        { name: "Linearity", d: "क्या गेज छोटे और बड़े दोनों पार्ट्स पर सही नाप देता है?", icon: "📏" },
        { name: "Stability", d: "क्या गेज लंबे समय तक एक जैसा ही रिजल्ट देता है?", icon: "⏱️" }
      ],
      criteria: [
        { zone: "< 10%", result: "बहुत अच्छा (पास)", color: "emerald" },
        { zone: "10 - 30%", result: "औसत (सुधार की ज़रूरत)", color: "amber" },
        { zone: "> 30%", result: "फेल (सिस्टम बदलें)", color: "rose" }
      ]
    }
  };

  const chg = changeDetails[lang] || changeDetails['en'];
  const msa = msaDetails[lang] || msaDetails['en'];

  return (
    <div className="min-h-screen bg-slate-950 text-white animate-in slide-in-from-bottom-8 duration-700 p-6 md:p-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-12 text-[150px] font-black text-white/[0.02] select-none italic pointer-events-none">{elementIndex + 1}</div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Nav */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-cyan-600 rounded-[32px] flex items-center justify-center text-3xl md:text-5xl font-black shadow-[0_0_40px_rgba(6,182,212,0.3)] border-2 border-cyan-400/40">
                 {elementIndex + 1}
              </div>
              <div>
                 <h4 className="text-cyan-400 text-[10px] md:text-xs font-black uppercase tracking-[0.6em] mb-2">{lang === 'hi' ? 'PPAP तत्व विवरण' : 'PPAP ELEMENT INTELLIGENCE'}</h4>
                 <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none italic">{currentData.name}</h2>
              </div>
           </div>
           <button 
             onClick={onBack}
             className="bg-slate-900 hover:bg-slate-800 border border-white/10 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-2xl flex items-center gap-3"
           >
             <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
             {lang === 'hi' ? 'ग्रिड पर वापस' : 'Back to Grid'}
           </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           {/* Left Section */}
           <div className="lg:col-span-7 space-y-8">
              <div className="bg-slate-900/60 p-8 md:p-12 rounded-[48px] border border-white/5 shadow-2xl space-y-8">
                 <div className="space-y-4">
                    <span className="text-cyan-500 text-[10px] font-black uppercase tracking-widest block">{lang === 'hi' ? 'परिभाषा और उद्देश्य' : 'Definition & Industrial Purpose'}</span>
                    <p className="text-slate-100 text-lg md:text-2xl font-bold leading-relaxed italic">
                       "{currentData.desc}"
                    </p>
                    <div className="bg-cyan-500/10 p-6 rounded-3xl border border-cyan-500/20">
                       <p className="text-cyan-200 text-sm md:text-lg font-medium italic">{currentData.purpose}</p>
                    </div>
                 </div>

                 {/* SPECIAL SECTION FOR ECN/ECR/SCN - Only shown for index 1 */}
                 {elementIndex === 1 && (
                    <div className="animate-in fade-in zoom-in-95 duration-700 space-y-8 mt-10 pt-10 border-t border-white/10">
                       <h4 className="text-white text-xl font-black uppercase tracking-tighter italic flex items-center gap-4">
                          <span className="w-10 h-1 bg-cyan-500"></span>
                          {lang === 'hi' ? 'ECR, ECN और SCN का त्रिकोण' : 'The Change Management Trio'}
                       </h4>
                       
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-slate-950 p-6 rounded-3xl border border-white/5 shadow-xl group hover:border-cyan-500/40 transition-all">
                             <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-black">R</div>
                                <h5 className="text-white font-black text-xs uppercase">{chg.ecrTitle}</h5>
                             </div>
                             <p className="text-slate-400 text-[10px] leading-relaxed font-bold italic">{chg.ecrDesc}</p>
                          </div>
                          <div className="bg-slate-950 p-6 rounded-3xl border border-white/5 shadow-xl group hover:border-indigo-500/40 transition-all">
                             <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-black">N</div>
                                <h5 className="text-white font-black text-xs uppercase">{chg.ecnTitle}</h5>
                             </div>
                             <p className="text-slate-400 text-[10px] leading-relaxed font-bold italic">{chg.ecnDesc}</p>
                          </div>
                          <div className="bg-slate-950 p-6 rounded-3xl border border-white/5 shadow-xl group hover:border-emerald-500/40 transition-all">
                             <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-black">S</div>
                                <h5 className="text-white font-black text-xs uppercase">{chg.scnTitle}</h5>
                             </div>
                             <p className="text-slate-400 text-[10px] leading-relaxed font-bold italic">{chg.scnDesc}</p>
                          </div>
                       </div>
                    </div>
                 )}

                 {/* SPECIAL SECTION FOR MSA - Only shown for index 7 */}
                 {elementIndex === 7 && (
                    <div className="animate-in fade-in zoom-in-95 duration-700 space-y-8 mt-10 pt-10 border-t border-white/10">
                       <h4 className="text-white text-xl font-black uppercase tracking-tighter italic flex items-center gap-4">
                          <span className="w-10 h-1 bg-indigo-500"></span>
                          {lang === 'hi' ? 'MSA इंटेलिजेंस' : 'MSA Technical Intelligence'}
                       </h4>
                       
                       <div className="bg-slate-950 p-8 rounded-[40px] border border-white/5 shadow-2xl space-y-8">
                          <div>
                             <h5 className="text-indigo-400 font-black text-sm uppercase mb-2">{msa.rrTitle}</h5>
                             <p className="text-slate-400 text-xs font-bold leading-relaxed">{msa.rrDesc}</p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                             {msa.factors.map((f, i) => (
                                <div key={i} className="bg-slate-900 p-5 rounded-3xl border border-white/5 group hover:border-indigo-500/40 transition-all">
                                   <div className="text-2xl mb-3">{f.icon}</div>
                                   <h6 className="text-white font-black text-[10px] uppercase mb-1">{f.name}</h6>
                                   <p className="text-slate-500 text-[9px] font-bold leading-tight">{f.d}</p>
                                </div>
                             ))}
                          </div>

                          <div className="pt-6 border-t border-white/5">
                             <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-4 text-center">Acceptance Criteria (Gage R&R %)</span>
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {msa.criteria.map((c, i) => (
                                   <div key={i} className={`flex flex-col items-center p-4 rounded-2xl bg-slate-900 border border-${c.color}-500/20`}>
                                      <span className={`text-xl font-black text-${c.color}-400 mb-1`}>{c.zone}</span>
                                      <span className="text-[8px] font-black uppercase text-slate-500 text-center">{c.result}</span>
                                   </div>
                                ))}
                             </div>
                          </div>
                       </div>
                    </div>
                 )}

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/5">
                    <div className="space-y-3">
                       <span className="text-rose-500 text-[10px] font-black uppercase tracking-widest block">{lang === 'hi' ? 'अक्सर होने वाली गलतियां' : 'Common Factory Mistakes'}</span>
                       <p className="text-slate-400 text-xs md:text-sm font-bold leading-relaxed">❌ {currentData.mistakes}</p>
                    </div>
                    <div className="space-y-3">
                       <span className="text-emerald-500 text-[10px] font-black uppercase tracking-widest block">{lang === 'hi' ? 'ऑडिट टिप' : 'Audit Readiness Tip'}</span>
                       <p className="text-slate-200 text-xs md:text-sm font-black italic">💡 {currentData.auditTip}</p>
                    </div>
                 </div>
              </div>

              {/* Status Footer */}
              <div className="flex items-center justify-between p-6 bg-slate-950 border border-white/5 rounded-3xl">
                 <div className="flex gap-8">
                    <span className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500">
                       <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                       Document Integrity: Verified
                    </span>
                    <span className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500">
                       <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                       Criticality: {currentData.criticality}
                    </span>
                 </div>
              </div>
           </div>

           {/* Right Section: Checklist */}
           <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900 border border-white/10 p-8 rounded-[48px] shadow-2xl h-full flex flex-col gap-8 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 text-4xl opacity-5">📋</div>
                 <h4 className="text-white text-xl font-black uppercase tracking-widest flex items-center gap-4">
                    <span className="w-8 h-1 bg-cyan-500"></span>
                    {lang === 'hi' ? 'अनिवार्य चेकलिस्ट' : 'Mandatory Checklist'}
                 </h4>
                 <div className="flex flex-col gap-4">
                    {currentData.checklist.map((item, i) => (
                       <div key={i} className="flex items-start gap-4 p-5 bg-slate-950/40 border border-white/5 rounded-2xl hover:border-cyan-500/30 transition-all group">
                          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-500 text-[10px] font-black group-hover:bg-cyan-500 group-hover:text-white transition-all">
                             0{i+1}
                          </div>
                          <span className="text-slate-200 text-xs md:text-sm font-black uppercase tracking-tight leading-tight pt-1">{item}</span>
                       </div>
                    ))}
                 </div>
                 <div className="mt-auto bg-cyan-500/5 p-6 rounded-3xl border border-dashed border-cyan-500/30 text-center">
                    <p className="text-[10px] text-cyan-400 font-black uppercase tracking-widest leading-relaxed">
                       {lang === 'hi' 
                         ? '"ऊपर दिए गए किसी भी पॉइंट की कमी होने पर PPAP तुरंत रिजेक्ट कर दिया जाएगा।"'
                         : '"Failure to provide any point above results in immediate PPAP REJECTION."'}
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PPAPElementDeepDive;

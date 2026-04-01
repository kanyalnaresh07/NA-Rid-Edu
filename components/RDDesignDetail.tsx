
import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface RDDesignDetailProps {
  onBack: () => void;
  lang: Language;
}

const RDDesignDetail: React.FC<RDDesignDetailProps> = ({ onBack, lang }) => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedPointIndex, setSelectedPointIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedModule, selectedPointIndex]);

  const content = {
    en: {
      title: "R&D / Design Hub",
      subtitle: "Innovation & Strategic Engineering",
      backBtn: "Exit Hub",
      backToList: "Back to Sections",
      backToModule: "Back to Overview",
      hero: {
        question: "What is R&D / Design?",
        desc: "The department that designs new products, improves existing ones, and uses testing to make products market & production ready.",
        simple: "Simple words: The journey from an Idea to a Working Product.",
        mantra: "Innovation is the engine of a world-class factory."
      },
      sections: [
        { 
          id: 'npd', 
          title: "New Product Development", 
          tag: "Innovation", 
          desc: "Process of bringing new ideas to market.", 
          icon: "🧠", 
          color: "blue",
          points: ["Market Study", "Feasibility", "Spec Definition", "3D Modeling", "BOM Creation", "Material Selection", "Design Review"],
          details: {
            title: "New Product Development (NPD)",
            definition: "The structured process of launching a new product from conceptualization to final approval.",
            points: [
              { h: "Market Study & Requirements", d: "Understanding customer needs and analyzing competitors to ensure the product has a market.", p: "Avoid making products that don't sell.", details: ["Voice of Customer (VOC)", "Market gap analysis", "Pricing benchmarks", "Trend forecasting"] },
              { h: "Feasibility Study", d: "Checking if the company has the machines, technology, and budget to build the concept.", p: "Ensures the project is realistic and profitable.", details: ["Technical capability audit", "Material sourcing check", "Initial cost estimation", "Timeline mapping"] },
              { h: "Product Specification", d: "Defining the exact features, size, performance, and safety targets of the product.", p: "Acts as the technical goalpost for the design team.", details: ["Dimensions & Weight", "Performance KPIs", "Safety standards (ISO/IS)", "User interface rules"] },
              { h: "CAD Design & 3D Modeling", d: "Creating digital 3D models to visualize the product structure before building anything.", p: "Fast changes before physical money is spent.", details: ["SolidWorks/CATIA modeling", "Assembly interference check", "Digital weight analysis", "3D Rendering for reviews"] },
              { h: "BOM Creation (Bill of Materials)", d: "A master list of every single component, screw, and label needed for one unit.", p: "Required for Store, Purchase, and Production.", details: ["Part code assignment", "Quantities per unit (Qty)", "Sub-assembly structure", "Vendor mapping"] },
              { h: "Material Selection", d: "Choosing materials based on strength, cost, durability, and environmental impact.", p: "Direct impact on quality and cost.", details: ["Grade & Hardness", "Chemical compatibility", "Recyclability check", "Supplier availability"] },
              { h: "Design Review", d: "A multi-departmental check (Prod, Qual, Purchase) to find risks before production.", p: "Identifies gaps early to avoid rejections.", details: ["Manufacturing risk audit", "Quality gate sign-off", "Safety compliance", "Tooling feasibility"] }
            ],
            output: ["Approved Concept", "Validated Design", "Preliminary BOM"],
            summary: "Naye product ko market aur production ke liye ready karna."
          }
        },
        { 
          id: 'design', 
          title: "Design Engineering", 
          tag: "Precision", 
          desc: "Detailed technical design blueprints.", 
          icon: "✏️", 
          color: "cyan",
          points: ["2D/3D Drawings", "GD&T Symbols", "DFM Logic", "DFA Logic", "ECN / ECR Management", "Tolerance Control"],
          details: {
            title: "Design Engineering (Technical Blueprinting)",
            definition: "The stage where drawings and measurements are finalized for actual manufacturing.",
            points: [
              { 
                h: "2D & 3D Drawings", 
                d: "Official engineering documents defining product geometry and fitment.", 
                p: "The primary reference for the whole factory.",
                special2D3D: true,
                subSections: [
                  {
                    title: "2D Drawings",
                    meaning: "A technical blueprint used by machine shops, assembly, and quality teams to build parts.",
                    points: ["Dimensions – exact size", "Tolerance – allowed variation (±0.1 mm)", "Material specification", "Surface finish", "Revision number"],
                    uses: ["Machining (CNC/Manual)", "IQC, IPQC, OQC Inspection", "Assembly checking"],
                    example: "If a screw hole is 10mm, the 2D drawing tells the allowed tolerance."
                  },
                  {
                    title: "3D CAD Models",
                    meaning: "A virtual 3D version of the product built on a computer.",
                    points: ["Realistic 3D shape", "Part-to-part fitment check", "Interference (clash) check", "Weight & balance analysis"],
                    software: ["SolidWorks", "CATIA", "Creo", "NX"],
                    uses: ["Design validation", "Tool / Jig design", "NPI / Customer approval"],
                    example: "A 3D model shows if parts will clash before building them."
                  }
                ],
                comparison: {
                  title: "2D Drawing vs 3D CAD (Easy Difference)",
                  headers: ["Point", "2D Drawing", "3D CAD Model"],
                  rows: [
                    { p: "Nature", v1: "Technical document", v2: "Virtual model" },
                    { p: "Focus", v1: "Size, tolerance, notes", v2: "Shape, fit, movement" },
                    { p: "Use", v1: "Manufacturing & QC", v2: "Design & validation" },
                    { p: "Mandatory", v1: "YES (Legal Authority)", v2: "Supportive / Process" }
                  ]
                },
                oneLineSummary: "2D Drawings tell HOW to build; 3D CAD Models show WHAT it looks like and how it fits."
              },
              { 
                h: "GD&T Symbols", 
                d: "Geometric Dimensioning & Tolerancing. Using symbols for accuracy (Flatness, Roundness).", 
                p: "Scientific communication of precision.",
                specialGDT: true,
                dimensioning: {
                  title: "Dimensioning & Tolerance Basics",
                  dimMean: "Telling the EXACT SIZE (Length, Width, Dia).",
                  dimEx: "Length = 100mm, Hole = Ø10mm",
                  tolMean: "ALLOWED VARIATION (How much up/down is OK).",
                  tolEx: "Ø10 ± 0.1 mm (Min: 9.9, Max: 10.1)",
                  whyTol: ["Zero error is impossible", "Ensures parts fit together", "Reduces rejection"]
                },
                gdtMeaning: "Advanced system to control Shape, Orientation, and Position—not just size.",
                symbols: [
                  { s: "Flatness", d: "How flat a surface must be.", u: "Base plates, Sealing surfaces", icon: "⏥" },
                  { s: "Parallelism", d: "Two surfaces must stay perfectly parallel.", u: "Sliding parts, Rails", icon: "∥" },
                  { s: "Perpendicularity", d: "Surface must be exactly at 90°.", u: "Vertical holes, Brackets", icon: "⊥" },
                  { s: "Position", d: "Feature must be in the exact location.", u: "Bolt hole alignment", icon: "⌖" },
                  { s: "Circularity", d: "Round feature must be TRULY round.", u: "Shafts, Pins, Bearings", icon: "○" }
                ],
                datum: {
                  title: "What is a Datum?",
                  mean: "A fixed reference point/plane used for measurements.",
                  ex: "Base Surface = Datum A, Side = Datum B"
                },
                comparison: {
                  title: "Dimensioning vs GD&T",
                  headers: ["Point", "Dimensioning", "GD&T"],
                  rows: [
                    { p: "Control", v1: "Size Only", v2: "Shape, Pos, Orientation" },
                    { p: "Method", v1: "Linear (mm)", v2: "Geometric Symbols" },
                    { p: "Use", v1: "Basic fitment", v2: "Functional accuracy" },
                    { p: "Accuracy", v1: "Limited", v2: "High Precision" }
                  ]
                },
                summary: "GD&T controls the GEOMETRY, while standard dimensioning only controls the SIZE."
              },
              { h: "DFM (Design for Manufacturing)", d: "Designing parts so they are easy and cheap to produce on machines.", p: "Reduces cycle time and scrap.", details: ["Tooling access check", "Draft angle optimization", "Uniform wall thickness", "Standardized corners"] },
              { h: "DFA (Design for Assembly)", d: "Designing products that are easy for operators to fit quickly and correctly.", p: "Reduces labor cost and errors.", details: ["Poka-Yoke slots", "Part count reduction", "Standardized fasteners", "Easy orientation"] },
              { h: "ECN / ECR Management", d: "Systematic control of any engineering changes to parts after they are released.", p: "Prevents usage of old/wrong designs.", details: ["Change Request (ECR)", "Release Notice (ECN)", "Revision history", "Stock cut-off control"] },
              { h: "Tolerance Control", d: "Defining allowed variation for every measurement to ensure fitment.", p: "Guarantees assembly success.", details: ["Tolerance stack-up", "Critical Dimensions (CD)", "Precision limits", "Fitment logic"] }
            ],
            output: ["Standard Shop Drawings", "Technical Specs", "Manufacturing Maps"],
            summary: "Design ko factory-friendly banana taaki quality stable rahe."
          }
        },
        { 
          id: 'value', 
          title: "Product Improvement", 
          tag: "Efficiency", 
          desc: "Value Engineering & Cost Optimization.", 
          icon: "🔁", 
          color: "emerald",
          points: ["Cost Reduction (VA/VE)", "Material Optimization", "Weight Reduction", "Reliability", "Complaint Analysis"],
          details: {
            title: "Product Improvement (Value Engineering)",
            definition: "Continuous activity to make existing products better and cheaper without losing quality.",
            points: [
              { h: "Cost Reduction (VA/VE)", d: "Removing unnecessary features or materials that add cost but no value.", p: "Increases company profit margins.", details: ["Function analysis", "Process cost optimization", "Waste elimination", "Feature lean-out"] },
              { h: "Material Optimization", d: "Replacing expensive components with more efficient ones.", p: "Competitive pricing in market.", details: ["Grade upgrade/downgrade", "Supplier switch review", "New technology usage", "Strength testing"] },
              { h: "Weight & Size Reduction", d: "Making the product compact and lighter for better logistics.", p: "Saves shipping and material cost.", details: ["Structural thinning", "Layout compaction", "New material usage", "Stress simulation"] },
              { h: "Reliability Improvement", d: "Enhancing the lifecycle based on real field usage data.", p: "Longer product life for the customer.", details: ["Endurance data review", "Component upgrade", "Wear analysis", "Life cycle testing"] },
              { h: "Customer Complaint Analysis", d: "Checking field failures and redesigning to stop repeat issues.", p: "Protects brand reputation.", details: ["Field return RCA", "User feedback sync", "CAPA implementation", "Validation of fix"] }
            ],
            output: ["Lower Cost", "Better Performance", "Customer Trust"],
            summary: "Existing product ko behtar aur sasta banana."
          }
        },
        { 
          id: 'test', 
          title: "Testing & Validation", 
          tag: "Shield", 
          desc: "Proving the design in real conditions.", 
          icon: "🧪", 
          color: "indigo",
          points: ["Functional Testing", "Life Cycle Test", "Env. Testing", "Safety Test", "Compliance"],
          details: {
            title: "Testing & Validation (The Proof)",
            definition: "Verifying that the physical product meets all design, safety, and performance standards.",
            points: [
              { h: "Functional Testing", d: "Does the product do exactly what it is designed to do (100% logic)?", p: "Guarantees performance for the user.", details: ["Logic verification", "Switch response", "Full run cycles", "Input/Output limits"] },
              { h: "Reliability / Life Cycle", d: "Running the product continuously until it fails to check durability.", p: "Confirms the 'Warranty' promise.", details: ["Stress testing", "Cycle counting", "MTBF calculation", "Accelerated aging"] },
              { h: "Environmental Testing", d: "Testing under extreme heat, humidity, or vibration.", p: "Ensures stability in different climates.", details: ["Heat chamber test", "Humidity soak", "Vibration table", "Corrosion (Salt spray)"] },
              { h: "Safety Testing", d: "Ensuring zero electrical shock or mechanical hazard risks.", p: "Mandatory legal requirement.", details: ["HV (High Voltage) test", "Earth leakage check", "Fire safety", "Mechanical hazard audit"] },
              { h: "Compliance Testing", d: "Checking against global standards like ISO, CE, or UL.", p: "Allows global export.", details: ["Standard audit", "Cert. documentation", "Regulatory mark check", "Lab accuracy test"] }
            ],
            output: ["Test Reports", "Certifications", "Safety Clearance"],
            summary: "Design ko saboot (Proof) ke saath pass karna."
          }
        },
        { 
          id: 'prototype', 
          title: "Prototype Development", 
          tag: "First Build", 
          desc: "Creating the first working samples.", 
          icon: "🧩", 
          color: "amber",
          points: ["Proto Build", "Fitment Check", "Design Feedback", "Pilot Lot Sync"],
          details: {
            title: "Prototype Development (The Beta Phase)",
            definition: "Building the first few physical units using actual or similar production methods.",
            points: [
              { h: "Prototype Build", d: "The first time the 3D design becomes a physical reality.", p: "Check for physical assembly issues.", details: ["Rapid Prototyping (3D print)", "Hand-build assembly", "Initial tooling check", "Process mockup"] },
              { h: "Fitment & Assembly Check", d: "Confirming every part fits together without force or gaps.", p: "Eliminates assembly delays later.", details: ["Component matching", "Gap & Flushness check", "Fastener access", "Sequence validation"] },
              { h: "Design Feedback Loop", d: "Changing the drawing based on the difficulties in building proto.", p: "Refines the design for mass production.", details: ["Issue log", "Revision update", "Lesson learned report", "Final design freeze"] },
              { h: "Pilot Lot Sync", d: "Working with production to see if the machine can make it in bulk.", p: "Validates process readiness.", details: ["Line trial", "Operator training", "Jig testing", "Yield analysis"] }
            ],
            output: ["Physical Samples", "Refined Design", "Tooling Feasibility"],
            summary: "Mass production se pehle risk kam karna."
          }
        }
      ]
    },
    hi: {
      title: "R&D / डिज़ाइन हब",
      subtitle: "नवाचार और रणनीतिक इंजीनियरिंग",
      backBtn: "हब से बाहर",
      backToList: "सेक्शन लिस्ट पर वापस",
      backToModule: "पीछे जाएं",
      hero: {
        question: "R&D / Design क्या होता है?",
        desc: "वह विभाग जो नए प्रोडक्ट्स डिज़ाइन करता है, पुराने प्रोडक्ट्स को सुधारता है और उन्हें मार्केट के लिए तैयार करता है।",
        simple: "आसान भाषा में: 'आइडिया' से लेकर 'असली प्रोडक्ट' तक का सफर।",
        mantra: "नवाचार (Innovation) ही फैक्ट्री की असली ताकत है।"
      },
      sections: [
        { 
          id: 'npd', 
          title: "New Product Development", 
          tag: "नया विकास", 
          desc: "नए आइडिया को बाज़ार में लाना।", 
          icon: "🧠", 
          color: "blue",
          points: ["मार्केट सर्वे", "फिजिबिलिटी", "स्पेसिफिकेशन", "3D मॉडलिंग", "BOM बनाना", "मटेरियल", "डिज़ाइन रिव्यू"],
          details: {
            title: "न्यू प्रोडक्ट डेवलपमेंट (NPD)",
            definition: "नए प्रोडक्ट को सोचने से लेकर उसे अंतिम मंजूरी दिलाने तक की व्यवस्थित प्रक्रिया।",
            points: [
              { h: "मार्केट स्टडी और मांग", d: "ग्राहक की ज़रूरतों और कॉम्पिटिटर्स को समझना।", p: "गलत प्रोडक्ट बनाने से बचना जिसके बिकने का चांस कम हो।", details: ["ग्राहक फीडबैक (VOC)", "बाज़ार की कमियों की पहचान", "प्राइस टार्गेटिंग", "कॉम्पिटिटर एनालिसिस"] },
              { h: "फिजिबिलिटी स्टडी", d: "चेक करना कि क्या हमारे पास प्रोडक्ट बनाने की तकनीक और बजट है।", p: "यह पक्का करना कि आईडिया हकीकत बन सकता है।", details: ["टेक्निकल क्षमता की जांच", "मटेरियल की उपलब्धता", "बजट बनाम खर्च", "मशीनों की तैयारी"] },
              { h: "प्रोडक्ट स्पेसिफिकेशन", d: "प्रोडक्ट के साइज, फीचर्स और परफॉरमेंस के नियम तय करना।", p: "डिज़ाइन टीम के लिए एक तकनीकी लक्ष्य।", details: ["माप और रफ़्तार", "परफॉरमेंस पैरामीटर्स", "सेफ्टी स्टैंडर्ड्स (ISO/IS)", "रंग और वजन का लक्ष्य"] },
              { h: "CAD डिज़ाइन और 3D मॉडलिंग", d: "कंप्यूटर पर प्रोडक्ट का असली जैसा मॉडल तैयार करना।", p: "असली पैसा खर्च करने से पहले ही डिज़ाइन बदलना आसान होता है।", details: ["3D मॉडलिंग (SolidWorks)", "असेंबली में अड़चन चेक करना", "डिजिटल वजन की जांच", "रिव्यू के लिए 3D इमेज"] },
              { h: "मटेरियल का चुनाव", d: "मजबूती और खर्च के हिसाब से सही रॉ मटेरियल चुनना।", p: "क्वालिटी और दाम का सीधा तालमेल।", details: ["ग्रेड और हार्डनेस चुनाव", "केमिकल गुण जांच", "सप्लायर की उपलब्धता", "टिकाऊपन (Durability)"] },
              { h: "BOM तैयार करना", d: "एक यूनिट में लगने वाले हर एक पुर्जे की पूरी लिस्ट।", p: "स्टोर और प्रोडक्शन के लिए मुख्य दस्तावेज।", details: ["पार्ट कोड देना", "मात्रा (Qty) लिखना", "असेंबली का नक्शा जोड़ना", "सब-असेंबली की जानकारी"] },
              { h: "डिज़ाइन रिव्यू", d: "बाकी टीमों के साथ मिलकर कमियां और रिस्क ढूँढना।", p: "बड़े प्रोडक्शन से पहले गलतियां पकड़ना।", details: ["टीमों का फीडबैक", "प्रोसेस की कमियां", "क्वालिटी गेट पास", "सुरक्षा की जांच"] }
            ],
            output: ["मंजूर आईडिया", "मार्केट स्पेसिफिकेशन", "शुरुआती BOM"],
            summary: "आईडिया को हकीकत में बदलने की पूरी योजना।"
          }
        },
        { 
          id: 'design', 
          title: "Design Engineering", 
          tag: "सटीकता", 
          desc: "तकनीकी नक्शे और बारीकियां।", 
          icon: "✏️", 
          color: "cyan",
          points: ["2D/3D ड्राइंग", "GD&T सिंबल", "DFM लॉजिक", "DFA लॉजिक", "ECN / ECR", "टोलरेंस"],
          details: {
            title: "डिज़ाइन इंजीनियरिंग (Technical Blueprinting)",
            definition: "वह तकनीकी चरण जहाँ मैन्युफैक्चरिंग के लिए नक्शे और माप फाइनल किए जाते हैं।",
            points: [
              { 
                h: "2D और 3D ड्राइंग", 
                d: "असली नक्शे और मॉडल बनाना जिन्हें पूरी फैक्ट्री फॉलो करती है।", 
                p: "प्रोडक्शन और क्वालिटी के लिए मुख्य आधार।",
                special2D3D: true,
                subSections: [
                  {
                    title: "2D Drawings क्या होते हैं?",
                    meaning: "2D Drawing एक technical blueprint होती है जिसे देखकर machine shop, assembly aur quality team kaam karti hai.",
                    points: ["Dimensions – exact size", "Tolerance – allowed variation (±0.1 mm)", "Material specification", "Surface finish", "Notes / Instructions", "Revision number"],
                    uses: ["Machining (CNC / Manual)", "IQC, IPQC, OQC inspection", "Assembly checking"],
                    example: "अगर स्क्रू का छेद 10 mm लिखा है, तो 2D drawing ही बताएगी कि कितनी छूट (Tolerance) है।"
                  },
                  {
                    title: "3D CAD Models क्या होते हैं?",
                    meaning: "3D CAD Model product का computer पर बना हुआ virtual 3D version होता है।",
                    points: ["Realistic 3D shape", "Part-to-part fitment check", "Assembly sequence visualization", "Interference (clash) check", "Weight & Balance analysis"],
                    software: ["SolidWorks", "CATIA", "Creo", "NX"],
                    uses: ["Design validation", "Tool / Jig / Fixture design", "NPI / Customer approval", "Training & Visualization"],
                    example: "3D मॉडल से पहले ही पता चल जाता है कि दो पार्ट्स टकरा रहे हैं या सही फिट हो रहे हैं।"
                  }
                ],
                comparison: {
                  title: "2D Drawing बनाम 3D CAD (मुख्य अंतर)",
                  headers: ["बिंदु", "2D Drawing", "3D CAD Model"],
                  rows: [
                    { p: "प्रकृति", v1: "Technical document", v2: "Virtual model" },
                    { p: "ध्यान", v1: "Size, Tolerance, Notes", v2: "Shape, Fit, Movement" },
                    { p: "उपयोग", v1: "Manufacturing & QC", v2: "Design & Validation" },
                    { p: "अनिवार्य", v1: "हाँ (Final Authority)", v2: "मददगार (Supportive)" }
                  ]
                },
                oneLineSummary: "2D Drawings बताती हैं product कैसे बनाना है, 3D CAD Models दिखाते हैं product कैसा दिखेगा और कैसे fit होगा।"
              },
              { 
                h: "GD&T सिंबल", 
                d: "आकार की शुद्धता बताने वाले इंटरनेशनल सिंबल्स का उपयोग।", 
                p: "क्वालिटी टीम को सही निर्देश देना।",
                specialGDT: true,
                dimensioning: {
                  title: "Dimensioning और Tolerance की बुनियादी बातें",
                  dimMean: "पार्ट का असली साइज़ बताना (लंबाई, चौड़ाई, व्यास)।",
                  dimEx: "Length = 100mm, Hole = Ø10mm",
                  tolMean: "Allowed Variation - साइज़ में कितनी छूट (ऊपर-नीचे) मान्य है।",
                  tolEx: "Ø10 ± 0.1 mm (Min: 9.9, Max: 10.1)",
                  whyTol: ["Zero error मुमकिन नहीं है", "ताकि पार्ट्स आपस में सही फिट हों", "रिजेक्शन कम करने के लिए"]
                },
                gdtMeaning: "यह सिर्फ साइज़ नहीं, बल्कि पार्ट के आकार (Shape), दिशा (Orientation) और स्थिति (Position) को कंट्रोल करता है।",
                symbols: [
                  { s: "Flatness (समतलता)", d: "सतह कितनी समतल (Flat) होनी चाहिए।", u: "बेस प्लेट, सीलिंग सतह", icon: "⏥" },
                  { s: "Parallelism (समानांतर)", d: "दो सतहों के बीच की दूरी हर जगह बराबर हो।", u: "स्लाइडिंग पार्ट्स, गाइड रेल्स", icon: "∥" },
                  { s: "Perpendicularity (लंबवत)", d: "सतह बिल्कुल 90° पर होनी चाहिए।", u: "वर्टिकल छेद, ब्रैकेट्स", icon: "⊥" },
                  { s: "Position (स्थिति)", d: "छेद या फीचर बिल्कुल सही जगह पर हो।", u: "बोल्ट होल्स अलाइनमेंट", icon: "⌖" },
                  { s: "Circularity (गोलाई)", d: "राउंड फीचर बिल्कुल गोल होना चाहिए।", u: "शाफ्ट, पिन, बेयरिंग", icon: "○" }
                ],
                datum: {
                  title: "डेटम (Datum) क्या है?",
                  mean: "एक फिक्स्ड रेफरेंस पॉइंट जिससे बाकी माप ली जाती हैं।",
                  ex: "नीचे की सतह = Datum A, साइड सतह = Datum B"
                },
                comparison: {
                  title: "Dimensioning बनाम GD&T",
                  headers: ["बिंदु", "Dimensioning", "GD&T"],
                  rows: [
                    { p: "कंट्रोल", v1: "सिर्फ साइज़", v2: "आकार, स्थिति, दिशा" },
                    { p: "तरीका", v1: "लीनियर (mm)", v2: "ज्यामितीय सिंबल" },
                    { p: "उपयोग", v1: "साधारण फिटिंग", v2: "फंक्शनल सटीकता" },
                    { p: "सटीकता", v1: "सीमित", v2: "बहुत ज्यादा" }
                  ]
                },
                summary: "GD&T पार्ट की 'ज्यामिति' (Geometry) को कंट्रोल करता है, जबकि साधारण dimensioning सिर्फ 'साइज़' को।"
              },
              { h: "DFM (Design for Mfg)", d: "डिज़ाइन को ऐसा बनाना कि मशीन पर बनाना आसान और सस्ता हो।", p: "प्रोडक्शन समय और वेस्टेज को कम करना।", details: ["टूल की पहुँच जांचना", "मोल्ड का एंगल सुधारना", "दीवारों की मोटाई", "आसान आकार"] },
              { h: "DFA (Design for Assembly)", d: "प्रोडक्ट को ऐसा बनाना कि ऑपरेटर जल्दी और आसानी से फिट कर सके।", p: "लेबर खर्च और गलतियां कम करना।", details: ["पोका-योक फिटिंग", "पुर्जों की संख्या कम करना", "एक जैसे पेंच", "आसान दिशा"] },
              { h: "ECN / ECR मैनेजमेंट", d: "लॉन्च के बाद होने वाले बदलावों को कंट्रोल करना।", p: "पुराने या गलत डिज़ाइन के इस्तेमाल को रोकना।", details: ["बदलाव का प्रस्ताव (ECR)", "आधिकारिक नोटिस (ECN)", "बदलाव का इतिहास", "पुराना स्टॉक कंट्रोल"] },
              { h: "टोलरेंस कंट्रोल", d: "हर माप में मिलने वाली छूट (Variations) को तय करना।", p: "पक्का करना कि पार्ट्स आपस में सही फिट हों।", details: ["माप की सीमा तय करना", "टोलरेंस का हिसाब", "ज़रूरी माप (CD) की मार्किंग", "सटीकता की जांच"] }
            ],
            output: ["फैक्ट्री ड्राइंग्स", "तकनीकी स्पेसिफिकेशन", "सटीक नक्शे"],
            summary: "डिज़ाइन को ऐसा बनाना कि क्वालिटी हमेशा स्थिर रहे।"
          }
        },
        { 
          id: 'value', 
          title: "Product Improvement", 
          tag: "बचत", 
          desc: "वैल्यू इंजीनियरिंग और सुधार।", 
          icon: "🔁", 
          color: "emerald",
          points: ["लागत कम करना", "मटेरियल सुधार", "वजन कम करना", "भरोसेमंद बनाना", "शिकायत विश्लेषण"],
          details: {
            title: "प्रोडक्ट सुधार (Value Engineering)",
            definition: "पुराने प्रोडक्ट को बिना क्वालिटी कम किए बेहतर और सस्ता बनाने का काम।",
            points: [
              { h: "लागत में कमी (VA/VE)", d: "उन फालतू फीचर्स को हटाना जिनसे कस्टमर को कोई फायदा नहीं है।", p: "कंपनी का मुनाफा और कॉम्पिटिटिवनेस बढ़ाना।", details: ["काम का विश्लेषण", "प्रोसेस सस्ता करना", "वैकल्पिक पार्ट्स", "फालतू खर्च रोकना"] },
              { h: "मटेरियल ऑप्टिमाइजेशन", d: "महंगे पुर्जों की जगह बेहतर और सस्ते विकल्प ढूँढना।", p: "क्वालिटी बनाए रखते हुए खर्च कम करना।", details: ["ग्रेड की तुलना", "नई तकनीक का उपयोग", "सप्लायर बदलाव", "सैंपल टेस्टिंग"] },
              { h: "वजन और साइज कम करना", d: "प्रोडक्ट को हल्का और छोटा बनाना ताकि लाना-ले जाना आसान हो।", p: "भाड़ा और मटेरियल की बचत।", details: ["डिज़ाइन पतला करना", "लेआउट सुधारना", "हल्का मटेरियल", "मजबूती की जांच"] },
              { h: "भरोसेमंद (Reliability) सुधार", d: "पुराने डेटा को देखकर प्रोडक्ट की उम्र और मजबूती बढ़ाना।", p: "कस्टमर का भरोसा जीतना।", details: ["पुर्जों की टेस्टिंग", "वारंटी डेटा विश्लेषण", "कमज़ोर पॉइंट सुधारना", "लाइफ साइकिल जांच"] },
              { h: "कस्टमर शिकायत विश्लेषण", d: "मार्केट से आई शिकायतों को देखकर डिज़ाइन सुधारना।", p: "गलती दोबारा न हो और ब्रैंड नाम बना रहे।", details: ["मार्केट फेलियर जांच", "कस्टमर फीडबैक", "सुधारात्मक कदम", "रिजल्ट की पुष्टि"] }
            ],
            output: ["कम लागत", "बेहतर परफॉरमेंस", "सस्ता भाड़ा"],
            summary: "पुराने प्रोडक्ट को कल से बेहतर और किफायती बनाना।"
          }
        },
        { 
          id: 'test', 
          title: "Testing & Validation", 
          tag: "सुरक्षा", 
          desc: "असली हालातों में डिज़ाइन को परखना।", 
          icon: "🧪", 
          color: "indigo",
          points: ["फंक्शनल टेस्ट", "लाइफ साइकिल", "वातावरण टेस्ट", "सुरक्षा टेस्ट", "नियमों का पालन"],
          details: {
            title: "टेस्टिंग और वैलिडेशन (सबूत)",
            definition: "यह साबित करना कि बना हुआ प्रोडक्ट डिज़ाइन और सुरक्षा के मानकों पर खरा उतरता है।",
            points: [
              { h: "फंक्शनल टेस्टिंग", d: "क्या प्रोडक्ट अपना मुख्य काम सही से कर रहा है?", p: "परफॉरमेंस की 100% गारंटी।", details: ["पूरा रन टेस्ट", "बटन और सेंसर जांच", "सॉफ्टवेयर लॉजिक", "वर्किंग लिमिट्स"] },
              { h: "लाइफ साइकिल टेस्टिंग", d: "प्रोडक्ट को लगातार चलाकर देखना कि वह कब फेल होता है।", p: "वारंटी (Warranty) का पक्का भरोसा।", details: ["लगातार काम की जांच", "ज़ल्दी उम्र बढ़ाना (Aging)", "दबाव टेस्ट", "MTBF जांच"] },
              { h: "वातावरण (Environmental) टेस्ट", d: "तेज़ गर्मी, नमी या झटकों (Vibration) में टेस्ट करना।", p: "अलग-अलग मौसमों में स्थिरता।", details: ["हीट और ठंड चैम्बर", "नमी की जांच", "वाइब्रेशन टेबल", "जंग (Salt spray) जांच"] },
              { h: "सुरक्षा टेस्टिंग (Safety)", d: "यह पक्का करना कि यूजर को करंट या चोट का खतरा न हो।", p: "कानूनी सुरक्षा मानक।", details: ["HV टेस्ट (करंट)", "अर्थिंग की जांच", "आग से सुरक्षा", "फिजिकल खतरा ऑडिट"] },
              { h: "नियमों का पालन (Compliance)", d: "ग्लोबल मानकों (ISO, CE) के हिसाब से जांच।", p: "इंटरनेशनल सेल्स की अनुमति।", details: ["मानक ऑडिट", "सर्टिफिकेट रिपोर्ट", "लैब की शुद्धता", "कानूनी नियम"] }
            ],
            output: ["टेस्ट रिपोर्ट्स", "सर्टिफिकेशन्स", "सेफ्टी क्लियरेंस"],
            summary: "डिज़ाइन को टेस्ट रिपोर्ट्स के साथ पास करना।"
          }
        },
        { 
          id: 'prototype', 
          title: "Prototype Development", 
          tag: "पहला मॉडल", 
          desc: "पहला असली वर्किंग सैंपल बनाना।", 
          icon: "🧩", 
          color: "amber",
          points: ["प्रोटो बनाना", "फिटिंग चेक", "फीडबैक", "ट्रायल रन"],
          details: {
            title: "प्रोटोयटप विकास (The Prototype Phase)",
            definition: "बड़े प्रोडक्शन से पहले हाथ से या थोड़े टूल्स से कुछ असली सैंपल तैयार करना।",
            points: [
              { h: "प्रोटो बनाना", d: "कंप्यूटर डिज़ाइन का पहली बार असली रूप में आना।", p: "उन असेंबली दिक्कतों को पकड़ना जो स्क्रीन पर नहीं दिखतीं।", details: ["3D प्रिंटिंग", "हैंड-बिल्ड असेंबली", "शुरुआती टूलिंग", "प्रोसेस मॉकअप"] },
              { h: "फिटिंग और असेंबली चेक", d: "पक्का करना कि सारे पुर्जे बिना किसी दिक्कत के जुड़ रहे हैं।", p: "मास प्रोडक्शन में होने वाली देरी को रोकना।", details: ["पार्ट्स का मिलान", "पहुँच की जांच", "गैप और फिनिश", "क्रम की जांच"] },
              { h: "डिज़ाइन फीडबैक", d: "प्रोटो बनाने में आई मुश्किलों के आधार पर नक्शे सुधारना।", p: "डिज़ाइन को और बेहतर और आसान बनाना।", details: ["दिक्कतों की लिस्ट", "नक्शे अपडेट करना", "सिखाया गया सबक", "डिज़ाइन फ्रीज़"] },
              { h: "ट्रायल रन (Pilot Run)", d: "प्रोडक्शन लाइन पर ट्रायल करके देखना कि क्या माल बल्क में बन सकता है।", p: "प्रोसेस की तैयारी जांचना।", details: ["लाइन ट्रायल", "ऑपरेटर ट्रेनिंग", "जिग्स की जांच", "यील्ड (Yield) विश्लेषण"] }
            ],
            output: ["वर्किंग सैंपल", "सुधरा हुआ डिज़ाइन", "टूलिंग की जानकारी"],
            summary: "Mass production se pehle risk kam karna."
          }
        }
      ]
    }
  };

  const current = content[lang] || content['en'];

  // Level 3 View: Deep Intel for a specific activity
  if (selectedPointIndex !== null && selectedModule) {
    const moduleData = current.sections.find(s => s.id === selectedModule)?.details!;
    const point = moduleData.points[selectedPointIndex];
    const color = selectedModule === 'npd' ? 'blue' : selectedModule === 'design' ? 'cyan' : selectedModule === 'value' ? 'emerald' : selectedModule === 'test' ? 'indigo' : 'amber';
    const icon = selectedModule === 'npd' ? '🧠' : selectedModule === 'design' ? '✏️' : selectedModule === 'value' ? '🔁' : selectedModule === 'test' ? '🧪' : '🧩';

    // SPECIAL RENDERING FOR "2D & 3D Drawings"
    if (point.special2D3D) {
      return (
        <div className="flex flex-col gap-8 animate-in slide-in-from-bottom-4 duration-500 pb-16 max-w-6xl mx-auto px-4 md:px-8 py-8 relative">
           <div className={`flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-${color}-500/20 pb-6 bg-slate-950/40 p-8 rounded-t-[40px] backdrop-blur-md`}>
              <div className="flex items-center gap-6">
                 <div className={`w-14 h-14 bg-slate-900 border border-${color}-500/40 rounded-2xl flex items-center justify-center text-3xl shadow-xl`}>📐</div>
                 <div>
                    <h4 className={`text-${color}-400 text-[10px] font-black uppercase tracking-[0.4em] mb-1`}>Engineering Intelligence</h4>
                    <h3 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter italic leading-none">{point.h}</h3>
                 </div>
              </div>
              <button onClick={() => setSelectedPointIndex(null)} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-white/10 transition-all flex items-center gap-3 shadow-2xl">
                 <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
                 {current.backToModule}
              </button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {point.subSections.map((sub: any, idx: number) => (
                <div key={idx} className="bg-slate-900 border border-white/10 p-8 rounded-[48px] shadow-2xl space-y-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 text-6xl font-black text-white/[0.02] select-none italic uppercase">{idx === 0 ? 'Draft' : 'CAD'}</div>
                  <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tight border-b-2 border-cyan-500 w-fit pb-2">{sub.title}</h4>
                  <p className="text-slate-200 text-sm font-bold italic bg-white/5 p-4 rounded-xl border-l-4 border-cyan-500">"{sub.meaning}"</p>
                  
                  <div className="space-y-4">
                     <span className="text-cyan-500 text-[9px] font-black uppercase tracking-widest">📌 {lang === 'hi' ? 'क्या-क्या होता है' : 'What is included?'}</span>
                     <div className="grid grid-cols-1 gap-2">
                        {sub.points.map((p: string, i: number) => (
                           <div key={i} className="flex items-center gap-3 p-3 bg-slate-950/60 border border-white/5 rounded-xl">
                              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_8px_cyan]"></div>
                              <span className="text-slate-300 text-[10px] font-bold uppercase">{p}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-4">
                     <span className="text-cyan-500 text-[9px] font-black uppercase tracking-widest">🏭 {lang === 'hi' ? 'उपयोग कहाँ होता है?' : 'Where is it used?'}</span>
                     <div className="flex flex-wrap gap-2">
                        {sub.uses.map((u: string, i: number) => (
                           <span key={i} className="bg-white/5 text-slate-200 text-[9px] font-black uppercase px-3 py-1.5 rounded-lg border border-white/10">{u}</span>
                        ))}
                     </div>
                  </div>

                  {sub.software && (
                    <div className="space-y-4">
                      <span className="text-cyan-500 text-[9px] font-black uppercase tracking-widest">💻 Software Examples</span>
                      <div className="flex flex-wrap gap-2">
                        {sub.software.map((s: string, i: number) => (
                          <span key={i} className="bg-indigo-500/10 text-indigo-400 text-[8px] font-black px-3 py-1 rounded border border-indigo-500/20">{s}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="bg-emerald-500/10 p-5 rounded-2xl border border-emerald-500/20">
                     <span className="text-emerald-500 text-[9px] font-black uppercase block mb-1">Simple Example:</span>
                     <p className="text-white text-xs font-bold italic">"{sub.example}"</p>
                  </div>
                </div>
              ))}
           </div>

           {/* Comparison Table for 2D vs 3D */}
           <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[48px] shadow-2xl overflow-hidden backdrop-blur-xl">
              <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                 <span className="w-10 h-1 bg-cyan-500"></span>
                 {point.comparison.title}
              </h4>
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="border-b border-white/10 text-[10px] font-black uppercase text-slate-500">
                          <th className="py-4 pr-4">{point.comparison.headers[0]}</th>
                          <th className="py-4 px-4 text-cyan-400">{point.comparison.headers[1]}</th>
                          <th className="py-4 px-4 text-indigo-400">{point.comparison.headers[2]}</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-[11px] font-bold">
                       {point.comparison.rows.map((row: any, i: number) => (
                          <tr key={i} className="group hover:bg-white/5 transition-colors">
                             <td className="py-6 pr-4 text-white uppercase">{row.p}</td>
                             <td className="py-6 px-4 text-slate-300 italic">{row.v1}</td>
                             <td className="py-6 px-4 text-slate-300 italic">{row.v2}</td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>

           {/* One Line Summary */}
           <div className="bg-cyan-600 p-10 rounded-[48px] shadow-[0_0_50px_rgba(6,182,212,0.3)] text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent"></div>
              <div className="relative z-10 space-y-4">
                 <h5 className="text-white/60 font-black text-[10px] uppercase tracking-[0.6em] mb-2">{lang === 'hi' ? 'इंटरव्यू रेडी सारांश' : 'Interview Ready Summary'}</h5>
                 <p className="text-white text-lg md:text-2xl font-black italic tracking-tight leading-snug">
                    "{point.oneLineSummary}"
                 </p>
              </div>
           </div>
        </div>
      );
    }

    // SPECIAL RENDERING FOR "GD&T Symbols"
    if (point.specialGDT) {
       return (
         <div className="flex flex-col gap-8 animate-in slide-in-from-bottom-4 duration-500 pb-16 max-w-6xl mx-auto px-4 md:px-8 py-8 relative">
           <div className={`flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-${color}-500/20 pb-6 bg-slate-950/40 p-8 rounded-t-[40px] backdrop-blur-md`}>
              <div className="flex items-center gap-6">
                 <div className={`w-14 h-14 bg-slate-900 border border-${color}-500/40 rounded-2xl flex items-center justify-center text-3xl shadow-xl`}>⌖</div>
                 <div>
                    <h4 className={`text-${color}-400 text-[10px] font-black uppercase tracking-[0.4em] mb-1`}>Geometric Intelligence</h4>
                    <h3 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter italic leading-none">{point.h}</h3>
                 </div>
              </div>
              <button onClick={() => setSelectedPointIndex(null)} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-white/10 transition-all flex items-center gap-3 shadow-2xl">
                 <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
                 {current.backToModule}
              </button>
           </div>

           {/* Part 1: Dimensioning & Tolerance Basics */}
           <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[48px] shadow-2xl space-y-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/[0.02] select-none italic uppercase">Standard</div>
              <h4 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter border-b-2 border-indigo-500 w-fit pb-2">{point.dimensioning.title}</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 <div className="space-y-6">
                    <div className="space-y-2">
                       <span className="text-blue-400 font-black text-[10px] uppercase tracking-widest">👉 {lang === 'hi' ? 'Dimensioning क्या है?' : 'Dimensioning'}</span>
                       <p className="text-slate-100 text-lg font-bold leading-relaxed">{point.dimensioning.dimMean}</p>
                       <p className="text-slate-500 text-sm italic">Example: {point.dimensioning.dimEx}</p>
                    </div>
                    <div className="space-y-2">
                       <span className="text-amber-400 font-black text-[10px] uppercase tracking-widest">👉 {lang === 'hi' ? 'Tolerance क्या है?' : 'Tolerance'}</span>
                       <p className="text-slate-100 text-lg font-bold leading-relaxed">{point.dimensioning.tolMean}</p>
                       <p className="text-slate-500 text-sm italic">Example: {point.dimensioning.tolEx}</p>
                    </div>
                 </div>

                 <div className="bg-slate-950 p-8 rounded-[40px] border border-white/5 space-y-4 shadow-inner">
                    <h5 className="text-white text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                       <span className="w-8 h-px bg-emerald-500"></span>
                       {lang === 'hi' ? 'Tolerance क्यों ज़रूरी है?' : 'Why is Tolerance mandatory?'}
                    </h5>
                    <div className="space-y-3">
                       {point.dimensioning.whyTol.map((item: string, i: number) => (
                          <div key={i} className="flex items-center gap-4 text-slate-300 text-sm font-bold uppercase tracking-tight">
                             <span className="text-emerald-500">✔</span> {item}
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>

           {/* Part 2: GD&T Symbols Advanced */}
           <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[48px] shadow-2xl space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-9xl font-black text-cyan-500/[0.03] select-none italic uppercase">Geometric</div>
              <div className="space-y-4 relative z-10">
                 <h4 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter">🔹 GD&T Symbols क्या होते हैं?</h4>
                 <p className="text-slate-200 text-lg md:text-xl font-bold leading-relaxed italic border-l-4 border-cyan-500 pl-6 bg-cyan-500/5 py-4 rounded-r-2xl">
                    "{point.gdtMeaning}"
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                 {point.symbols.map((sym: any, i: number) => (
                    <div key={i} className="bg-slate-950 p-6 rounded-[32px] border border-white/5 hover:border-cyan-500/40 transition-all group flex flex-col gap-4 shadow-xl">
                       <div className="flex items-center justify-between">
                          <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-3xl text-cyan-400 group-hover:scale-110 transition-transform shadow-inner">{sym.icon}</div>
                          <span className="text-white/20 font-black italic">0{i+1}</span>
                       </div>
                       <div>
                          <h5 className="text-white font-black text-lg uppercase tracking-tight group-hover:text-cyan-400">{sym.s}</h5>
                          <p className="text-slate-400 text-xs font-bold leading-relaxed mt-1 italic">"{sym.d}"</p>
                       </div>
                       <div className="bg-white/5 p-3 rounded-xl border border-white/10 mt-auto">
                          <span className="text-cyan-500 text-[9px] font-black uppercase block mb-1">📌 Use / उपयोग:</span>
                          <p className="text-slate-200 text-[10px] font-bold uppercase">{sym.u}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Part 3: Datum & Comparison */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 bg-slate-900 p-8 rounded-[48px] border border-white/10 shadow-2xl space-y-6 relative overflow-hidden group">
                 <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight border-b-2 border-amber-500 w-fit pb-2">🔹 {point.datum.title}</h4>
                 <p className="text-slate-300 text-sm md:text-base font-bold leading-relaxed italic">"{point.datum.mean}"</p>
                 <div className="bg-amber-500/10 p-5 rounded-2xl border-l-4 border-amber-500 shadow-inner">
                    <span className="text-amber-500 text-[9px] font-black uppercase block mb-1">Example:</span>
                    <p className="text-white text-xs font-black italic uppercase tracking-tight leading-snug">{point.datum.ex}</p>
                 </div>
                 <div className="flex justify-center py-6 opacity-30 group-hover:opacity-60 transition-opacity">
                    <div className="w-24 h-16 border-2 border-white rounded relative flex items-center justify-center font-black">
                       PART
                       <div className="absolute -bottom-6 left-0 right-0 h-1 bg-amber-500 flex items-center justify-center">
                          <div className="bg-slate-900 border-2 border-white px-2 py-1 text-[8px]">DATUM A</div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-8 bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[48px] shadow-2xl overflow-hidden backdrop-blur-xl">
                 <h4 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                    <span className="w-10 h-1 bg-cyan-500"></span>
                    {point.comparison.title}
                 </h4>
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead>
                          <tr className="border-b border-white/10 text-[10px] font-black uppercase text-slate-500">
                             <th className="py-4 pr-4">{point.comparison.headers[0]}</th>
                             <th className="py-4 px-4 text-indigo-400">{point.comparison.headers[1]}</th>
                             <th className="py-4 px-4 text-cyan-400">{point.comparison.headers[2]}</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-white/5 text-[11px] font-bold">
                          {point.comparison.rows.map((row: any, i: number) => (
                             <tr key={i} className="group hover:bg-white/5 transition-colors">
                                <td className="py-6 pr-4 text-white uppercase">{row.p}</td>
                                <td className="py-6 px-4 text-slate-400 italic">{row.v1}</td>
                                <td className="py-6 px-4 text-cyan-400 italic">{row.v2}</td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
           </div>

           {/* Final One Line Summary */}
           <div className="bg-indigo-600 p-10 rounded-[48px] shadow-[0_0_50px_rgba(79,70,229,0.3)] text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent"></div>
              <div className="relative z-10 space-y-4">
                 <h5 className="text-white/60 font-black text-[10px] uppercase tracking-[0.6em] mb-2">{lang === 'hi' ? 'निष्कर्ष (One Line Summary)' : 'One Line Summary'}</h5>
                 <p className="text-white text-lg md:text-2xl font-black italic tracking-tight leading-snug">
                    "{point.summary}"
                 </p>
              </div>
           </div>
         </div>
       );
    }

    // Default Rendering for other points
    return (
      <div className="flex flex-col gap-8 animate-in slide-in-from-bottom-4 duration-500 pb-16 max-w-5xl mx-auto px-4 md:px-8 py-8 relative">
        <div className={`flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-${color}-500/20 pb-6 bg-slate-950/40 p-8 rounded-t-[40px] backdrop-blur-md`}>
           <div className="flex items-center gap-6">
              <div className={`w-14 h-14 bg-slate-900 border border-${color}-500/40 rounded-2xl flex items-center justify-center text-3xl shadow-xl`}>{icon}</div>
              <div>
                 <h4 className={`text-${color}-400 text-[10px] font-black uppercase tracking-[0.4em] mb-1`}>R&D Deep Intel / {selectedPointIndex + 1}</h4>
                 <h3 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter italic leading-none">{point.h}</h3>
              </div>
           </div>
           <button onClick={() => setSelectedPointIndex(null)} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-white/10 transition-all flex items-center gap-3 shadow-2xl">
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
              {current.backToModule}
           </button>
        </div>

        <div className="bg-slate-900 border border-white/10 p-10 rounded-[48px] shadow-2xl space-y-10 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Deep View</div>
           
           <div className="space-y-6 relative z-10">
              <h4 className="text-white text-xl font-black uppercase tracking-widest border-b-2 border-indigo-500 w-fit pb-2">{lang === 'hi' ? 'मुख्य विवरण' : 'Core Explanation'}</h4>
              <p className={`text-slate-200 text-lg md:text-2xl font-bold leading-relaxed italic border-l-4 border-${color}-500 pl-6 bg-${color}-500/5 py-6 rounded-r-2xl shadow-inner`}>
                 "{point.d}"
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {point.details && (
                <div className="space-y-6">
                   <h5 className="text-white text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                      <span className={`w-8 h-px bg-${color}-500`}></span>
                      {lang === 'hi' ? 'शामिल गतिविधियाँ' : 'Involved Activities'}
                   </h5>
                   <div className="space-y-3">
                      {point.details.map((det: string, idx: number) => (
                         <div key={idx} className="flex items-center gap-4 p-4 bg-slate-950/60 border border-white/5 rounded-2xl group hover:border-blue-500/30 transition-all shadow-md">
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
                    {lang === 'hi' ? 'महत्व / उद्देश्य' : 'Purpose & Strategic Value'}
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
              Fidelity Node: v5.2 Active
           </span>
           <span className="opacity-40 italic">Engineering Hub // Strategic Knowledge Module</span>
        </div>
      </div>
    );
  }

  // Level 2 View: Module Overview (Activity List)
  if (selectedModule) {
    const data = current.sections.find(s => s.id === selectedModule)?.details!;
    const color = selectedModule === 'npd' ? 'blue' : selectedModule === 'design' ? 'cyan' : selectedModule === 'value' ? 'emerald' : selectedModule === 'test' ? 'indigo' : 'amber';
    const icon = selectedModule === 'npd' ? '🧠' : selectedModule === 'design' ? '✏️' : selectedModule === 'value' ? '🔁' : selectedModule === 'test' ? '🧪' : '🧩';
    
    return (
      <div className="flex flex-col gap-8 animate-in slide-in-from-right-4 duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-8 py-8 relative">
        <div className={`flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-${color}-500/20 pb-6 bg-slate-950/40 p-8 rounded-t-[40px] backdrop-blur-md`}>
          <div className="flex items-center gap-6">
             <div className={`w-16 h-16 bg-slate-900 border border-${color}-500/40 rounded-2xl flex items-center justify-center text-4xl shadow-xl`}>{icon}</div>
             <div>
                <h3 className="text-white text-2xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{data.title}</h3>
                <p className={`text-${color}-400 text-[10px] font-black uppercase tracking-[0.4em] mt-2`}>Product Lifecycle Module</p>
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
           {/* Detailed Interactive Points */}
           <div className="lg:col-span-8 bg-slate-900/60 p-8 md:p-12 rounded-[48px] border border-white/5 shadow-2xl space-y-10">
              <h4 className="text-white text-xl font-black uppercase tracking-tight flex items-center gap-4">
                 <span className={`w-12 h-1 bg-${color}-500`}></span>
                 {lang === 'hi' ? `${data.points.length} मुख्य गतिविधियाँ (क्लिक करें)` : `${data.points.length} Key Activities (Click for Details)`}
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
                          <span className="text-[7px] font-black text-white/20 uppercase tracking-[0.4em]">RD-INTEL</span>
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

  // Level 1 View: Pillar Hub
  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-16 max-w-7xl mx-auto px-4 md:px-8 py-8 relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-indigo-500/20 pb-6 bg-slate-950/40 p-8 rounded-t-[40px] backdrop-blur-md">
        <div className="flex flex-col gap-1">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_12px_indigo]"></div>
              <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em]">{current.subtitle}</span>
           </div>
           <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-none font-mono italic">Innovation Hub</h3>
        </div>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl border border-white/10 flex items-center gap-3">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="3" /></svg>
          {current.backBtn}
        </button>
      </div>

      {/* Hero Intro */}
      <div className="bg-slate-900 border border-indigo-500/30 p-10 md:p-14 rounded-[48px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center gap-8 group">
         <div className="absolute top-0 right-0 p-10 text-9xl font-black text-white/[0.02] select-none uppercase italic tracking-tighter">Design</div>
         <div className="space-y-4 max-w-4xl relative z-10">
            <h4 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{current.hero.question}</h4>
            <p className="text-indigo-400 font-black text-xs md:text-xl uppercase tracking-widest italic drop-shadow-lg">"{current.hero.desc}"</p>
         </div>
         <div className="bg-white/5 p-8 md:p-10 rounded-[40px] border-l-8 border-indigo-500 max-w-4xl shadow-inner group-hover:bg-white/10 transition-colors">
            <p className="text-slate-300 text-sm md:text-lg font-bold leading-relaxed italic mb-4">"🚀 {current.hero.simple}"</p>
            <p className="text-indigo-500 text-[10px] font-black uppercase tracking-[0.8em] animate-pulse">"{current.hero.mantra}"</p>
         </div>
      </div>

      {/* 5 Sections Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <h5 className="text-white text-xl font-black uppercase tracking-tight group-hover:text-blue-400 transition-colors">0{sec.id === 'npd' ? '1' : sec.id === 'design' ? '2' : sec.id === 'value' ? '3' : sec.id === 'test' ? '4' : '5'}. {sec.title}</h5>
                  <p className="text-slate-500 text-[10px] font-bold leading-relaxed italic uppercase">{sec.desc}</p>
               </div>

               <div className={`flex items-center gap-2 text-${sec.color}-500 text-[8px] font-black uppercase tracking-widest animate-pulse group-hover:text-white transition-colors`}>
                  Open Module Overview <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7" /></svg>
               </div>

               <div className="space-y-2 pt-6 border-t border-white/5">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-4">Pillar Focus:</span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {sec.points.map((point, idx) => (
                       <div key={idx} className="flex items-start gap-3 group/point">
                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-${sec.color}-500/40 group-hover/point:bg-${sec.color}-500 transition-colors`}></div>
                          <span className="text-slate-300 text-[10px] font-bold uppercase tracking-tight leading-tight group-hover:point:text-white transition-colors">{point}</span>
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
                R&D Ledger: Active
             </span>
             <span className="flex items-center gap-4">
                <span className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_12px_emerald]"></span>
                Innovation Node: Synced
             </span>
          </div>
          <div className="opacity-60 italic font-mono uppercase tracking-widest">Engineering Node v15.4 // Advanced Design Logic</div>
      </div>
    </div>
  );
};

export default RDDesignDetail;

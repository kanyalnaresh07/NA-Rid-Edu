import { QuizCategory, Language } from './types';

export const getQuizData = (lang: Language): QuizCategory[] => {
  const isHi = lang === 'hi';

  return [
    {
      id: 'production',
      title: isHi ? 'प्रोडक्शन (Production)' : 'Production Mastery',
      description: isHi ? 'उत्पादन, दक्षता और 5S के बारे में जानें' : 'Test your knowledge on manufacturing, efficiency, and 5S',
      icon: 'Factory',
      duration: 30,
      questions: [
        {
          id: 'prod1',
          question: isHi ? '5S में "Seiri" का क्या अर्थ है?' : 'What does "Seiri" mean in 5S?',
          options: isHi ? ['छांटना (Sort)', 'क्रम में रखना', 'चमकाना', 'मानकीकरण'] : ['Sort', 'Set in Order', 'Shine', 'Standardize'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'prod2',
          question: isHi ? 'OEE का पूर्ण रूप क्या है?' : 'What is the full form of OEE?',
          options: isHi ? ['Overall Equipment Effectiveness', 'Overall Engine Efficiency', 'Operating Efficiency Engine', 'Office Equipment Expense'] : ['Overall Equipment Effectiveness', 'Overall Engine Efficiency', 'Operating Efficiency Engine', 'Office Equipment Expense'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'prod3',
          question: isHi ? 'काइजैन (Kaizen) का मुख्य उद्देश्य क्या है?' : 'What is the main objective of Kaizen?',
          options: isHi ? ['निरंतर सुधार', 'बड़ा बदलाव', 'मशीन की मरम्मत', 'नया उत्पाद'] : ['Continuous Improvement', 'Big Change', 'Machine Repair', 'New Product'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'prod4',
          question: isHi ? 'JIT का मतलब क्या है?' : 'What does JIT stand for?',
          options: isHi ? ['Just In Time', 'Just In Total', 'Joint Industrial Team', 'Job In Time'] : ['Just In Time', 'Just In Total', 'Joint Industrial Team', 'Job In Time'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'prod5',
          question: isHi ? 'कनबान (Kanban) क्या है?' : 'What is Kanban?',
          options: isHi ? ['दृश्य संकेत प्रणाली', 'एक मशीन', 'एक विभाग', 'एक उत्पाद'] : ['Visual signaling system', 'A machine', 'A department', 'A product'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'prod6',
          question: isHi ? 'SMED का उद्देश्य क्या कम करना है?' : 'What does SMED aim to reduce?',
          options: isHi ? ['चेंजओवर समय', 'कर्मचारियों की संख्या', 'मशीन की लागत', 'बिजली की खपत'] : ['Changeover time', 'Number of workers', 'Machine cost', 'Power consumption'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'prod7',
          question: isHi ? 'अंडन (Andon) का उपयोग क्यों किया जाता है?' : 'Why is Andon used?',
          options: isHi ? ['समस्या की सूचना देने के लिए', 'सफाई के लिए', 'ब्रेक के लिए', 'शिपिंग के लिए'] : ['To signal a problem', 'For cleaning', 'For breaks', 'For shipping'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'prod8',
          question: isHi ? 'पोका-योक (Poka-Yoke) का अर्थ क्या है?' : 'What is the meaning of Poka-Yoke?',
          options: isHi ? ['गलती-रोधी (Error Proofing)', 'तेज़ उत्पादन', 'सस्ता माल', 'बड़ी मशीन'] : ['Error Proofing', 'Fast Production', 'Cheap Material', 'Big Machine'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'prod9',
          question: isHi ? 'Takt Time क्या दर्शाता है?' : 'What does Takt Time represent?',
          options: isHi ? ['ग्राहक की मांग की दर', 'मशीन की गति', 'कुल काम का समय', 'ब्रेक का समय'] : ['Rate of customer demand', 'Machine speed', 'Total work time', 'Break time'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'prod10',
          question: isHi ? 'वैल्यू एडेड (Value Added) गतिविधि क्या है?' : 'What is a Value Added activity?',
          options: isHi ? ['जिसके लिए ग्राहक भुगतान करता है', 'जो समय लेती है', 'जो महंगी है', 'जो बेकार है'] : ['Something the customer pays for', 'Something that takes time', 'Something expensive', 'Something useless'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'prod11',
          question: isHi ? '5S में "Seiton" का क्या अर्थ है?' : 'What does "Seiton" mean in 5S?',
          options: isHi ? ['क्रम में रखना (Set in Order)', 'छांटना', 'चमकाना', 'मानकीकरण'] : ['Set in Order', 'Sort', 'Shine', 'Standardize'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'prod12',
          question: isHi ? 'OEE गणना में "Availability" का क्या अर्थ है?' : 'What does "Availability" mean in OEE calculation?',
          options: isHi ? ['नियोजित उत्पादन समय बनाम वास्तविक समय', 'मशीन की गति', 'उत्पाद की गुणवत्ता', 'कर्मचारी की उपस्थिति'] : ['Planned production time vs actual time', 'Machine speed', 'Product quality', 'Employee attendance'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'prod13',
          question: isHi ? 'लीन मैन्युफैक्चरिंग में "Muda" का क्या अर्थ है?' : 'What does "Muda" mean in Lean Manufacturing?',
          options: isHi ? ['अपशिष्ट (Waste)', 'सुधार', 'गति', 'गुणवत्ता'] : ['Waste', 'Improvement', 'Speed', 'Quality'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'prod14',
          question: isHi ? 'सेलुलर मैन्युफैक्चरिंग का मुख्य लाभ क्या है?' : 'What is the main benefit of Cellular Manufacturing?',
          options: isHi ? ['सामग्री की आवाजाही कम करना', 'मशीन की लागत बढ़ाना', 'अधिक कर्मचारी', 'बड़ा गोदाम'] : ['Reduced material movement', 'Increased machine cost', 'More workers', 'Large warehouse'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'prod15',
          question: isHi ? '5S में "Seiso" का क्या अर्थ है?' : 'What does "Seiso" mean in 5S?',
          options: isHi ? ['चमकाना (Shine)', 'छांटना', 'क्रम में रखना', 'मानकीकरण'] : ['Shine', 'Sort', 'Set in Order', 'Standardize'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'prod16',
          question: isHi ? 'उत्पादन में "Bottleneck" को कैसे पहचाना जाता है?' : 'How is a "Bottleneck" identified in production?',
          options: isHi ? ['जहाँ सबसे अधिक WIP जमा होता है', 'जहाँ सबसे कम काम होता है', 'जहाँ सबसे तेज़ मशीन है', 'जहाँ सबसे अधिक कर्मचारी हैं'] : ['Where most WIP accumulates', 'Where least work happens', 'Where fastest machine is', 'Where most workers are'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'prod17',
          question: isHi ? '5S में "Seiketsu" का क्या अर्थ है?' : 'What does "Seiketsu" mean in 5S?',
          options: isHi ? ['मानकीकरण (Standardize)', 'छांटना', 'क्रम में रखना', 'चमकाना'] : ['Standardize', 'Sort', 'Set in Order', 'Shine'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'prod18',
          question: isHi ? 'Heijunka का क्या अर्थ है?' : 'What does Heijunka mean?',
          options: isHi ? ['उत्पादन लेवलिंग (Leveling)', 'तेज़ उत्पादन', 'सस्ता माल', 'बड़ी मशीन'] : ['Production Leveling', 'Fast Production', 'Cheap Material', 'Big Machine'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'prod19',
          question: isHi ? '5S में "Shitsuke" का क्या अर्थ है?' : 'What does "Shitsuke" mean in 5S?',
          options: isHi ? ['अनुशासन (Sustain)', 'छांटना', 'क्रम में रखना', 'चमकाना'] : ['Sustain', 'Sort', 'Set in Order', 'Shine'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'prod20',
          question: isHi ? 'OEE गणना में "Performance" का क्या अर्थ है?' : 'What does "Performance" mean in OEE calculation?',
          options: isHi ? ['वास्तविक गति बनाम आदर्श गति', 'मशीन की उपलब्धता', 'गुणवत्ता दर', 'बिजली की खपत'] : ['Actual speed vs ideal speed', 'Machine availability', 'Quality rate', 'Power consumption'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'prod21',
          question: isHi ? 'लीन में 7 प्रकार के कचरे (Wastes) में "D" का क्या अर्थ है?' : 'What does "D" stand for in 7 wastes of Lean (TIMWOOD)?',
          options: isHi ? ['Defects (दोष)', 'Delay', 'Design', 'Delivery'] : ['Defects', 'Delay', 'Design', 'Delivery'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'prod22',
          question: isHi ? 'उत्पादन में "Lead Time" कम करने का सबसे अच्छा तरीका क्या है?' : 'What is the best way to reduce "Lead Time" in production?',
          options: isHi ? ['गैर-मूल्य वर्धित गतिविधियों को हटाना', 'मशीन की गति बढ़ाना', 'अधिक कर्मचारी रखना', 'बड़ा स्टॉक रखना'] : ['Eliminate non-value added activities', 'Increase machine speed', 'Hire more workers', 'Keep large stock'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'prod23',
          question: isHi ? 'Gemba का क्या अर्थ है?' : 'What does Gemba mean?',
          options: isHi ? ['वास्तविक स्थान (जहां काम होता है)', 'मैनेजर का ऑफिस', 'कैंटीन', 'स्टोर'] : ['The real place (where work happens)', 'Manager office', 'Canteen', 'Store'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'prod24',
          question: isHi ? 'OEE गणना में "Quality" का क्या अर्थ है?' : 'What does "Quality" mean in OEE calculation?',
          options: isHi ? ['अच्छे उत्पाद बनाम कुल उत्पाद', 'मशीन की गति', 'उपलब्धता', 'दोषों की संख्या'] : ['Good units vs total units', 'Machine speed', 'Availability', 'Number of defects'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'prod25',
          question: isHi ? 'Single Piece Flow का क्या लाभ है?' : 'What is the benefit of Single Piece Flow?',
          options: isHi ? ['WIP कम करना और तेज़ी से फीडबैक', 'अधिक WIP', 'धीमी प्रक्रिया', 'बड़ा बैच साइज'] : ['Reduced WIP and faster feedback', 'More WIP', 'Slower process', 'Large batch size'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'prod26',
          question: isHi ? 'उत्पादन में "Overproduction" को सबसे बुरा कचरा क्यों माना जाता है?' : 'Why is "Overproduction" considered the worst waste?',
          options: isHi ? ['यह अन्य सभी कचरे को जन्म देता है', 'यह समय बचाता है', 'यह सस्ता है', 'यह गुणवत्ता बढ़ाता है'] : ['It leads to all other wastes', 'It saves time', 'It is cheap', 'It increases quality'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'prod27',
          question: isHi ? 'Andon Light में लाल रंग क्या दर्शाता है?' : 'What does red color in Andon Light indicate?',
          options: isHi ? ['मशीन बंद / गंभीर समस्या', 'मशीन चल रही है', 'मदद चाहिए', 'सामग्री खत्म'] : ['Machine stopped / Critical issue', 'Machine running', 'Help needed', 'Material out'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'prod28',
          question: isHi ? 'Standard Work का मुख्य तत्व क्या है?' : 'What is a key element of Standard Work?',
          options: isHi ? ['Takt Time, Work Sequence, Standard Inventory', 'Salary, Bonus, Leave', 'Machine Color, Size, Weight', 'Office Location, Name, ID'] : ['Takt Time, Work Sequence, Standard Inventory', 'Salary, Bonus, Leave', 'Machine Color, Size, Weight', 'Office Location, Name, ID'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'prod29',
          question: isHi ? 'उत्पादन में "Motion" कचरा क्या है?' : 'What is "Motion" waste in production?',
          options: isHi ? ['कर्मचारियों की अनावश्यक आवाजाही', 'मशीन की आवाजाही', 'ट्रक की आवाजाही', 'हवा की आवाजाही'] : ['Unnecessary movement of workers', 'Machine movement', 'Truck movement', 'Air movement'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'prod30',
          question: isHi ? 'उत्पादन में "Waiting" कचरा कब होता है?' : 'When does "Waiting" waste occur in production?',
          options: isHi ? ['जब ऑपरेटर अगली प्रक्रिया का इंतज़ार करता है', 'जब ऑपरेटर काम करता है', 'जब मशीन चलती है', 'जब सामान बिकता है'] : ['When operator waits for next process', 'When operator works', 'When machine runs', 'When goods are sold'],
          correctAnswer: 0,
          level: 'beginner'
        }
      ]
    },
    {
      id: 'quality',
      title: isHi ? 'क्वालिटी (Quality)' : 'Quality Control',
      description: isHi ? 'IQC, IPQC और 7 QC टूल्स' : 'Master IQC, IPQC, and 7 QC tools',
      icon: 'CheckCircle',
      duration: 30,
      questions: [
        {
          id: 'qual1',
          question: isHi ? 'IQC का पूर्ण रूप क्या है?' : 'What is the full form of IQC?',
          options: isHi ? ['Incoming Quality Control', 'Internal Quality Check', 'Input Quality Control', 'Initial Quality Check'] : ['Incoming Quality Control', 'Internal Quality Check', 'Input Quality Control', 'Initial Quality Check'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'qual2',
          question: isHi ? 'IPQC कब किया जाता है?' : 'When is IPQC performed?',
          options: isHi ? ['उत्पादन के दौरान', 'उत्पादन से पहले', 'उत्पादन के बाद', 'शिपिंग के समय'] : ['During production', 'Before production', 'After production', 'At shipping'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'qual3',
          question: isHi ? '7 QC टूल्स में पैरेटो चार्ट किस नियम पर आधारित है?' : 'On which rule is the Pareto Chart based in 7 QC tools?',
          options: isHi ? ['80/20 नियम', '50/50 नियम', '10/90 नियम', '100/0 नियम'] : ['80/20 Rule', '50/50 Rule', '10/90 Rule', '100/0 Rule'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'qual4',
          question: isHi ? 'SPC का पूर्ण रूप क्या है?' : 'What is the full form of SPC?',
          options: isHi ? ['Statistical Process Control', 'Simple Process Check', 'Standard Product Control', 'Systematic Process Control'] : ['Statistical Process Control', 'Simple Process Check', 'Standard Product Control', 'Systematic Process Control'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'qual5',
          question: isHi ? 'फिशबोन डायग्राम का दूसरा नाम क्या है?' : 'What is another name for Fishbone Diagram?',
          options: isHi ? ['इशिकावा डायग्राम', 'फ्लो चार्ट', 'कंट्रोल चार्ट', 'हिस्टोग्राम'] : ['Ishikawa Diagram', 'Flow Chart', 'Control Chart', 'Histogram'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'qual6',
          question: isHi ? 'AQL का मतलब क्या है?' : 'What does AQL stand for?',
          options: isHi ? ['Acceptable Quality Level', 'Average Quality Limit', 'Actual Quality Level', 'All Quality List'] : ['Acceptable Quality Level', 'Average Quality Limit', 'Actual Quality Level', 'All Quality List'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'qual7',
          question: isHi ? 'सिक्स सिग्मा में DPMO क्या है?' : 'What is DPMO in Six Sigma?',
          options: isHi ? ['Defects Per Million Opportunities', 'Data Per Month Output', 'Design Per Model Object', 'Defects Per Model Order'] : ['Defects Per Million Opportunities', 'Data Per Month Output', 'Design Per Model Object', 'Defects Per Model Order'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'qual8',
          question: isHi ? 'PDCA चक्र में "C" का क्या अर्थ है?' : 'What does "C" stand for in the PDCA cycle?',
          options: isHi ? ['Check', 'Control', 'Change', 'Create'] : ['Check', 'Control', 'Change', 'Create'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'qual9',
          question: isHi ? 'CPK क्या मापता है?' : 'What does CPK measure?',
          options: isHi ? ['प्रक्रिया क्षमता (Process Capability)', 'उत्पादन की गति', 'मशीन की लागत', 'कर्मचारी दक्षता'] : ['Process Capability', 'Production Speed', 'Machine Cost', 'Employee Efficiency'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'qual10',
          question: isHi ? '5 Why विश्लेषण का मुख्य उद्देश्य क्या है?' : 'What is the main purpose of 5 Why analysis?',
          options: isHi ? ['मूल कारण (Root Cause) खोजना', 'दोषों को गिनना', 'समय बचाना', 'रिपोर्ट बनाना'] : ['Find root cause', 'Count defects', 'Save time', 'Make report'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'qual11',
          question: isHi ? 'कंट्रोल चार्ट में UCL का क्या अर्थ है?' : 'What does UCL stand for in a Control Chart?',
          options: isHi ? ['Upper Control Limit', 'Under Control Level', 'Upper Check Limit', 'Unit Control List'] : ['Upper Control Limit', 'Under Control Level', 'Upper Check Limit', 'Unit Control List'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'qual12',
          question: isHi ? 'हिस्टोग्राम का उपयोग क्यों किया जाता है?' : 'Why is a Histogram used?',
          options: isHi ? ['डेटा के वितरण को देखने के लिए', 'कारण खोजने के लिए', 'प्रक्रिया को नियंत्रित करने के लिए', 'सफाई के लिए'] : ['To see data distribution', 'To find causes', 'To control process', 'For cleaning'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'qual13',
          question: isHi ? 'स्कैटर डायग्राम क्या दिखाता है?' : 'What does a Scatter Diagram show?',
          options: isHi ? ['दो चरों के बीच संबंध', 'दोषों की संख्या', 'समय का प्रवाह', 'मशीन की गति'] : ['Relationship between two variables', 'Number of defects', 'Flow of time', 'Machine speed'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'qual14',
          question: isHi ? 'सिक्स सिग्मा में "Define" चरण का क्या लक्ष्य है?' : 'What is the goal of "Define" phase in Six Sigma?',
          options: isHi ? ['समस्या और लक्ष्य को स्पष्ट करना', 'डेटा मापना', 'समाधान खोजना', 'नियंत्रण करना'] : ['Clarify problem and goal', 'Measure data', 'Find solutions', 'Control'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'qual15',
          question: isHi ? 'चेक शीट का मुख्य कार्य क्या है?' : 'What is the main function of a Check Sheet?',
          options: isHi ? ['डेटा एकत्र करना', 'डेटा का विश्लेषण करना', 'निर्णय लेना', 'रिपोर्ट बनाना'] : ['Data collection', 'Data analysis', 'Decision making', 'Report making'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'qual16',
          question: isHi ? 'गुणवत्ता में "Cost of Poor Quality" (COPQ) क्या है?' : 'What is "Cost of Poor Quality" (COPQ) in quality?',
          options: isHi ? ['दोषों के कारण होने वाली हानि', 'मशीन की कीमत', 'कच्चे माल की लागत', 'बिजली का बिल'] : ['Loss due to defects', 'Machine price', 'Raw material cost', 'Electricity bill'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'qual17',
          question: isHi ? 'TQM का पूर्ण रूप क्या है?' : 'What is the full form of TQM?',
          options: isHi ? ['Total Quality Management', 'Total Quantity Management', 'Team Quality Model', 'Total Quality Method'] : ['Total Quality Management', 'Total Quantity Management', 'Team Quality Model', 'Total Quality Method'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'qual18',
          question: isHi ? 'सिक्स सिग्मा में "Black Belt" कौन है?' : 'Who is a "Black Belt" in Six Sigma?',
          options: isHi ? ['पूर्णकालिक प्रोजेक्ट लीडर', 'पार्ट-टाइम सदस्य', 'मैनेजर', 'ऑपरेटर'] : ['Full-time project leader', 'Part-time member', 'Manager', 'Operator'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'qual19',
          question: isHi ? 'FMEA का उपयोग क्यों किया जाता है?' : 'Why is FMEA used?',
          options: isHi ? ['संभावित विफलताओं का विश्लेषण करने के लिए', 'सफाई के लिए', 'उत्पादन बढ़ाने के लिए', 'पैसे बचाने के लिए'] : ['To analyze potential failures', 'For cleaning', 'To increase production', 'To save money'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'qual20',
          question: isHi ? 'कंट्रोल चार्ट में "Out of Control" स्थिति कब होती है?' : 'When is a situation "Out of Control" in a Control Chart?',
          options: isHi ? ['जब बिंदु कंट्रोल लिमिट के बाहर हों', 'जब बिंदु बीच में हों', 'जब मशीन चल रही हो', 'जब लाइट बंद हो'] : ['When points are outside control limits', 'When points are in middle', 'When machine is running', 'When light is off'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'qual21',
          question: isHi ? 'सिक्स सिग्मा में "DMAIC" का पूर्ण रूप क्या है?' : 'What is the full form of "DMAIC" in Six Sigma?',
          options: isHi ? ['Define, Measure, Analyze, Improve, Control', 'Design, Make, Act, Inspect, Check', 'Data, Model, Area, Item, Code', 'Define, Manage, Aim, Inspect, Control'] : ['Define, Measure, Analyze, Improve, Control', 'Design, Make, Act, Inspect, Check', 'Data, Model, Area, Item, Code', 'Define, Manage, Aim, Inspect, Control'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'qual22',
          question: isHi ? 'गुणवत्ता में "Zero Defects" की अवधारणा किसने दी?' : 'Who gave the concept of "Zero Defects" in quality?',
          options: isHi ? ['फिलिप क्रॉस्बी', 'एडवर्ड्स डेमिंग', 'जोसेफ जुरान', 'ताइची ओहनो'] : ['Philip Crosby', 'Edwards Deming', 'Joseph Juran', 'Taiichi Ohno'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'qual23',
          question: isHi ? 'Poka-Yoke का मुख्य उद्देश्य क्या है?' : 'What is the main goal of Poka-Yoke?',
          options: isHi ? ['मानवीय गलतियों को रोकना', 'मशीन की मरम्मत', 'तेज़ उत्पादन', 'सस्ता माल'] : ['Prevent human errors', 'Machine repair', 'Fast production', 'Cheap material'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'qual24',
          question: isHi ? 'गुणवत्ता ऑडिट का उद्देश्य क्या है?' : 'What is the purpose of a Quality Audit?',
          options: isHi ? ['प्रणाली की प्रभावशीलता की जांच', 'गलतियां ढूंढना', 'सजा देना', 'पैसे बचाना'] : ['Check system effectiveness', 'Find mistakes', 'Punish', 'Save money'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'qual25',
          question: isHi ? 'सिक्स सिग्मा में "Yellow Belt" की भूमिका क्या है?' : 'What is the role of a "Yellow Belt" in Six Sigma?',
          options: isHi ? ['प्रोजेक्ट टीम का सदस्य', 'प्रोजेक्ट लीडर', 'मास्टर कोच', 'मैनेजर'] : ['Project team member', 'Project leader', 'Master coach', 'Manager'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'qual26',
          question: isHi ? 'Kaizen का अर्थ क्या है?' : 'What is the meaning of Kaizen?',
          options: isHi ? ['बेहतर के लिए बदलाव (निरंतर सुधार)', 'बड़ा बदलाव', 'मशीन की मरम्मत', 'नया उत्पाद'] : ['Change for better (Continuous improvement)', 'Big change', 'Machine repair', 'New product'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'qual27',
          question: isHi ? 'गुणवत्ता नियंत्रण और गुणवत्ता आश्वासन (QA) में क्या अंतर है?' : 'What is the difference between Quality Control and Quality Assurance (QA)?',
          options: isHi ? ['QA प्रक्रिया पर केंद्रित है, QC उत्पाद पर', 'QA उत्पाद पर केंद्रित है, QC प्रक्रिया पर', 'दोनों एक ही हैं', 'कोई अंतर नहीं'] : ['QA focuses on process, QC on product', 'QA focuses on product, QC on process', 'Both are same', 'No difference'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'qual28',
          question: isHi ? '7 QC टूल्स में "Stratification" क्या है?' : 'What is "Stratification" in 7 QC tools?',
          options: isHi ? ['डेटा को समूहों में विभाजित करना', 'डेटा को जोड़ना', 'डेटा को हटाना', 'डेटा को छिपाना'] : ['Dividing data into groups', 'Adding data', 'Removing data', 'Hiding data'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'qual29',
          question: isHi ? 'सिक्स सिग्मा में "Green Belt" कौन है?' : 'Who is a "Green Belt" in Six Sigma?',
          options: isHi ? ['पार्ट-टाइम प्रोजेक्ट लीडर', 'पूर्णकालिक लीडर', 'ऑपरेटर', 'ग्राहक'] : ['Part-time project leader', 'Full-time leader', 'Operator', 'Customer'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'qual30',
          question: isHi ? 'गुणवत्ता में "Customer Satisfaction" का क्या महत्व है?' : 'What is the importance of "Customer Satisfaction" in quality?',
          options: isHi ? ['यह गुणवत्ता का अंतिम पैमाना है', 'यह केवल फीडबैक है', 'यह महत्वपूर्ण नहीं है', 'यह केवल मार्केटिंग है'] : ['It is the ultimate measure of quality', 'It is only feedback', 'It is not important', 'It is only marketing'],
          correctAnswer: 0,
          level: 'beginner'
        }
      ]
    },
    {
      id: 'process',
      title: isHi ? 'प्रोसेस इंजीनियरिंग (Process Engineering)' : 'Process Engineering',
      description: isHi ? 'साइकिल टाइम और लाइन बैलेंसिंग' : 'Cycle time, line balancing, and optimization',
      icon: 'Settings',
      duration: 30,
      questions: [
        {
          id: 'pe1',
          question: isHi ? 'साइकिल टाइम क्या है?' : 'What is Cycle Time?',
          options: isHi ? ['एक यूनिट बनाने में लगा समय', 'मशीन चालू होने का समय', 'ब्रेक का समय', 'शिफ्ट का समय'] : ['Time taken to complete one unit', 'Machine startup time', 'Break time', 'Shift time'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'pe2',
          question: isHi ? 'SOP का पूर्ण रूप क्या है?' : 'What is the full form of SOP?',
          options: isHi ? ['Standard Operating Procedure', 'Simple Operating Process', 'System Order Plan', 'Standard Office Plan'] : ['Standard Operating Procedure', 'Simple Operating Process', 'System Order Plan', 'Standard Office Plan'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'pe3',
          question: isHi ? 'लाइन बैलेंसिंग का मुख्य लक्ष्य क्या है?' : 'What is the main goal of Line Balancing?',
          options: isHi ? ['काम का समान वितरण', 'मशीन की गति बढ़ाना', 'कर्मचारी कम करना', 'बिजली बचाना'] : ['Equal distribution of work', 'Increase machine speed', 'Reduce workers', 'Save electricity'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'pe4',
          question: isHi ? 'बॉटलनेक (Bottleneck) क्या है?' : 'What is a Bottleneck?',
          options: isHi ? ['सबसे धीमी प्रक्रिया', 'सबसे तेज़ प्रक्रिया', 'एक कंटेनर', 'गुणवत्ता जांच'] : ['Slowest process', 'Fastest process', 'A container', 'Quality check'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'pe5',
          question: isHi ? 'OPL का मतलब क्या है?' : 'What does OPL stand for?',
          options: isHi ? ['One Point Lesson', 'Order Part List', 'Operating Plan Level', 'Output Per Line'] : ['One Point Lesson', 'Order Part List', 'Operating Plan Level', 'Output Per Line'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'pe6',
          question: isHi ? 'लीड टाइम (Lead Time) क्या है?' : 'What is Lead Time?',
          options: isHi ? ['ऑर्डर से डिलीवरी तक का समय', 'उत्पादन का समय', 'मशीन मरम्मत का समय', 'शिपिंग का समय'] : ['Time from order to delivery', 'Production time', 'Machine repair time', 'Shipping time'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'pe7',
          question: isHi ? 'WIP का पूर्ण रूप क्या है?' : 'What is the full form of WIP?',
          options: isHi ? ['Work In Progress', 'Work In Plan', 'Waste In Production', 'Weight In Process'] : ['Work In Progress', 'Work In Plan', 'Waste In Production', 'Weight In Process'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'pe8',
          question: isHi ? 'PFC का पूर्ण रूप क्या है?' : 'What is the full form of PFC?',
          options: isHi ? ['Process Flow Chart', 'Production Fast Check', 'Power Factor Control', 'Product Final Check'] : ['Process Flow Chart', 'Production Fast Check', 'Power Factor Control', 'Product Final Check'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'pe9',
          question: isHi ? 'जिग और फिक्स्चर का उपयोग क्यों किया जाता है?' : 'Why are Jigs and Fixtures used?',
          options: isHi ? ['सटीकता और दोहराव के लिए', 'सफाई के लिए', 'मशीन की मरम्मत के लिए', 'बिजली बचाने के लिए'] : ['For accuracy and repeatability', 'For cleaning', 'For machine repair', 'To save electricity'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'pe10',
          question: isHi ? 'टाइम एंड मोशन स्टडी का उद्देश्य क्या है?' : 'What is the purpose of Time and Motion Study?',
          options: isHi ? ['दक्षता बढ़ाना', 'कर्मचारियों को डराना', 'लागत बढ़ाना', 'सफाई'] : ['Increase efficiency', 'Scare workers', 'Increase cost', 'Cleaning'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'pe11',
          question: isHi ? 'प्रोसेस इंजीनियरिंग में "Value Stream Mapping" (VSM) क्या है?' : 'What is "Value Stream Mapping" (VSM) in process engineering?',
          options: isHi ? ['प्रक्रिया के प्रवाह और कचरे का दृश्य चित्रण', 'मशीन का नक्शा', 'कर्मचारियों का चार्ट', 'बिक्री रिपोर्ट'] : ['Visual representation of process flow and waste', 'Machine map', 'Employee chart', 'Sales report'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'pe12',
          question: isHi ? 'लाइन बैलेंसिंग में "Idle Time" क्या है?' : 'What is "Idle Time" in line balancing?',
          options: isHi ? ['जब कोई काम नहीं हो रहा हो', 'काम करने का समय', 'मशीन की गति', 'ब्रेक का समय'] : ['Time when no work is being done', 'Working time', 'Machine speed', 'Break time'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'pe13',
          question: isHi ? 'SOP का मुख्य लाभ क्या है?' : 'What is the main benefit of SOP?',
          options: isHi ? ['कार्य में निरंतरता और गुणवत्ता', 'तेज़ उत्पादन', 'कम लागत', 'सफाई'] : ['Consistency and quality in work', 'Fast production', 'Low cost', 'Cleaning'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'pe14',
          question: isHi ? 'प्रोसेस इंजीनियरिंग में "Standardization" क्यों महत्वपूर्ण है?' : 'Why is "Standardization" important in process engineering?',
          options: isHi ? ['विभिन्नताओं को कम करने के लिए', 'लागत बढ़ाने के लिए', 'कर्मचारियों को भ्रमित करने के लिए', 'सजावट के लिए'] : ['To reduce variations', 'To increase cost', 'To confuse workers', 'For decoration'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'pe15',
          question: isHi ? 'साइकिल टाइम और टैक्ट टाइम में क्या संबंध होना चाहिए?' : 'What should be the relationship between Cycle Time and Takt Time?',
          options: isHi ? ['साइकिल टाइम <= टैक्ट टाइम', 'साइकिल टाइम > टैक्ट टाइम', 'कोई संबंध नहीं', 'साइकिल टाइम हमेशा 0 होना चाहिए'] : ['Cycle Time <= Takt Time', 'Cycle Time > Takt Time', 'No relationship', 'Cycle Time should always be 0'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'pe16',
          question: isHi ? 'प्रोसेस इंजीनियरिंग में "Ergonomics" का क्या महत्व है?' : 'What is the importance of "Ergonomics" in process engineering?',
          options: isHi ? ['कर्मचारी की थकान कम करना और सुरक्षा बढ़ाना', 'मशीन की गति बढ़ाना', 'लागत कम करना', 'सफाई'] : ['Reduce worker fatigue and increase safety', 'Increase machine speed', 'Reduce cost', 'Cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'pe17',
          question: isHi ? 'लाइन बैलेंसिंग में "Pitch" क्या है?' : 'What is "Pitch" in line balancing?',
          options: isHi ? ['एक निश्चित मात्रा बनाने का समय', 'मशीन की आवाज़', 'कर्मचारी की गति', 'उत्पाद का वजन'] : ['Time to produce a fixed quantity', 'Machine sound', 'Worker speed', 'Product weight'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'pe18',
          question: isHi ? 'प्रोसेस इंजीनियरिंग में "Layout" का क्या अर्थ है?' : 'What does "Layout" mean in process engineering?',
          options: isHi ? ['मशीनों और उपकरणों की व्यवस्था', 'कर्मचारियों की सूची', 'उत्पाद का डिज़ाइन', 'बिक्री योजना'] : ['Arrangement of machines and equipment', 'Employee list', 'Product design', 'Sales plan'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'pe19',
          question: isHi ? 'प्रोसेस इंजीनियरिंग में "Throughput" क्या है?' : 'What is "Throughput" in process engineering?',
          options: isHi ? ['एक निश्चित समय में उत्पादित इकाइयों की संख्या', 'कुल लागत', 'कुल समय', 'कच्चे माल की मात्रा'] : ['Number of units produced in a given time', 'Total cost', 'Total time', 'Raw material quantity'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'pe20',
          question: isHi ? 'प्रोसेस इंजीनियरिंग में "Changeover" क्या है?' : 'What is "Changeover" in process engineering?',
          options: isHi ? ['एक उत्पाद से दूसरे उत्पाद में बदलने की प्रक्रिया', 'कर्मचारी बदलना', 'मशीन बेचना', 'शिफ्ट बदलना'] : ['Process of switching from one product to another', 'Changing employees', 'Selling machines', 'Changing shifts'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'pe21',
          question: isHi ? 'प्रोसेस इंजीनियरिंग में "OEE" का उपयोग क्यों किया जाता है?' : 'Why is "OEE" used in process engineering?',
          options: isHi ? ['उपकरण की प्रभावशीलता मापने के लिए', 'कर्मचारी की उपस्थिति के लिए', 'बिजली के बिल के लिए', 'सफाई के लिए'] : ['To measure equipment effectiveness', 'For employee attendance', 'For electricity bill', 'For cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'pe22',
          question: isHi ? 'प्रोसेस इंजीनियरिंग में "Automation" का क्या लाभ है?' : 'What is the benefit of "Automation" in process engineering?',
          options: isHi ? ['सटीकता बढ़ाना और मानवीय त्रुटि कम करना', 'लागत बढ़ाना', 'कर्मचारियों की संख्या बढ़ाना', 'धीमी प्रक्रिया'] : ['Increase accuracy and reduce human error', 'Increase cost', 'Increase number of workers', 'Slower process'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'pe23',
          question: isHi ? 'प्रोसेस इंजीनियरिंग में "Work Instruction" (WI) क्या है?' : 'What is "Work Instruction" (WI) in process engineering?',
          options: isHi ? ['काम करने का विस्तृत तरीका', 'मैनेजर का आदेश', 'छुट्टी का आवेदन', 'वेतन पर्ची'] : ['Detailed way of doing work', 'Manager order', 'Leave application', 'Salary slip'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'pe24',
          question: isHi ? 'प्रोसेस इंजीनियरिंग में "Capacity" क्या है?' : 'What is "Capacity" in process engineering?',
          options: isHi ? ['अधिकतम उत्पादन क्षमता', 'मशीन का आकार', 'कर्मचारी की शक्ति', 'गोदाम की जगह'] : ['Maximum production potential', 'Machine size', 'Worker strength', 'Warehouse space'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'pe25',
          question: isHi ? 'प्रोसेस इंजीनियरिंग में "Efficiency" क्या है?' : 'What is "Efficiency" in process engineering?',
          options: isHi ? ['आउटपुट बनाम इनपुट का अनुपात', 'कुल उत्पादन', 'कुल समय', 'कुल लागत'] : ['Ratio of output to input', 'Total production', 'Total time', 'Total cost'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'pe26',
          question: isHi ? 'प्रोसेस इंजीनियरिंग में "Reliability" क्या है?' : 'What is "Reliability" in process engineering?',
          options: isHi ? ['बिना विफलता के कार्य करने की क्षमता', 'तेज़ गति', 'सस्ता उत्पादन', 'बड़ी मशीन'] : ['Ability to function without failure', 'Fast speed', 'Cheap production', 'Big machine'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'pe27',
          question: isHi ? 'प्रोसेस इंजीनियरिंग में "Optimization" का क्या अर्थ है?' : 'What does "Optimization" mean in process engineering?',
          options: isHi ? ['सर्वोत्तम संभव परिणाम प्राप्त करना', 'केवल उत्पादन बढ़ाना', 'लागत बढ़ाना', 'मशीन बदलना'] : ['Achieving the best possible result', 'Only increasing production', 'Increasing cost', 'Changing machine'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'pe28',
          question: isHi ? 'प्रोसेस इंजीनियरिंग में "Feedback Loop" क्या है?' : 'What is a "Feedback Loop" in process engineering?',
          options: isHi ? ['प्रक्रिया नियंत्रण के लिए आउटपुट का उपयोग', 'एक घेरा', 'मशीन की बेल्ट', 'सफाई'] : ['Using output for process control', 'A circle', 'Machine belt', 'Cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'pe29',
          question: isHi ? 'प्रोसेस इंजीनियरिंग में "Scalability" क्या है?' : 'What is "Scalability" in process engineering?',
          options: isHi ? ['उत्पादन क्षमता बढ़ाने की क्षमता', 'मशीन का वजन', 'मशीन की ऊंचाई', 'सफाई'] : ['Ability to increase production capacity', 'Machine weight', 'Machine height', 'Cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'pe30',
          question: isHi ? 'प्रोसेस इंजीनियरिंग में "Sustainability" क्या है?' : 'What is "Sustainability" in process engineering?',
          options: isHi ? ['दीर्घकालिक प्रभावशीलता और पर्यावरण सुरक्षा', 'तेज़ उत्पादन', 'सस्ता माल', 'बड़ी मशीन'] : ['Long-term effectiveness and environmental safety', 'Fast production', 'Cheap material', 'Big machine'],
          correctAnswer: 0,
          level: 'advanced'
        }
      ]
    },
    {
      id: 'maintenance',
      title: isHi ? 'रखरखाव (Maintenance)' : 'Industrial Maintenance',
      description: isHi ? 'मशीन और उपकरणों का रखरखाव' : 'Machine upkeep, TPM, and preventive maintenance',
      icon: 'Wrench',
      duration: 30,
      questions: [
        {
          id: 'maint1',
          question: isHi ? 'निवारक रखरखाव (Preventive Maintenance) का क्या लाभ है?' : 'What is the benefit of Preventive Maintenance?',
          options: isHi ? ['मशीन की उम्र बढ़ाना', 'मशीन को तोड़ना', 'मशीन की सफाई', 'पेंट'] : ['Increasing machine life', 'Breaking machine', 'Cleaning', 'Paint'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'maint2',
          question: isHi ? 'ब्रेकडाउन मेंटेनेंस (Breakdown Maintenance) क्या है?' : 'What is Breakdown Maintenance?',
          options: isHi ? ['मशीन टूटने के बाद की गई मरम्मत', 'नियमित जांच', 'सफाई', 'पेंट'] : ['Repair done after machine breakdown', 'Regular check', 'Cleaning', 'Paint'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'maint3',
          question: isHi ? 'TPM का पूर्ण रूप क्या है?' : 'What is the full form of TPM?',
          options: isHi ? ['Total Productive Maintenance', 'Total Process Management', 'Team Production Method', 'Tool Part Maintenance'] : ['Total Productive Maintenance', 'Total Process Management', 'Team Production Method', 'Tool Part Maintenance'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'maint4',
          question: isHi ? 'प्रेडिक्टिव मेंटेनेंस (Predictive Maintenance) का क्या लाभ है?' : 'What is the benefit of Predictive Maintenance?',
          options: isHi ? ['मशीन खराब होने से पहले मरम्मत', 'मशीन टूटने के बाद मरम्मत', 'सफाई', 'पेंट'] : ['Repair before machine breakdown', 'Repair after machine breakdown', 'Cleaning', 'Paint'],
          correctAnswer: 0,
          level: 'advanced'
        }
      ]
    },
    {
      id: 'safety',
      title: isHi ? 'सुरक्षा (Safety)' : 'Industrial Safety',
      description: isHi ? 'औद्योगिक सुरक्षा नियम और उपकरण' : 'Industrial safety rules and equipment',
      icon: 'ShieldAlert',
      duration: 30,
      questions: [
        {
          id: 'saf15',
          question: isHi ? 'सुरक्षित भार उठाने (Safe Lifting) का सही तरीका क्या है?' : 'What is the correct way of Safe Lifting?',
          options: isHi ? ['सही तरीके से वजन उठाना', 'भारी वजन उठाना', 'तेज दौड़ना', 'बिना ब्रेक के काम करना'] : ['Lifting weight correctly', 'Lifting heavy weight', 'Running fast', 'Working without breaks'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'saf16',
          question: isHi ? 'रासायनिक रिसाव (Chemical Spill) होने पर पहली प्रतिक्रिया क्या होनी चाहिए?' : 'What should be the first response to a Chemical Spill?',
          options: isHi ? ['क्षेत्र को खाली करना और सूचना देना', 'इसे हाथ से साफ करना', 'इसे अनदेखा करना', 'पंखे चलाना'] : ['Evacuate area and inform', 'Clean with hands', 'Ignore it', 'Turn on fans'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'saf17',
          question: isHi ? 'आंखों की सुरक्षा के लिए किसका उपयोग किया जाता है?' : 'What is used for eye protection?',
          options: isHi ? ['सेफ्टी गॉगल्स', 'हेलमेट', 'दस्ताने', 'इयरप्लग'] : ['Safety Goggles', 'Helmet', 'Gloves', 'Earplugs'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'saf18',
          question: isHi ? 'सुनने की सुरक्षा (Hearing Protection) में NRR क्या है?' : 'What is NRR in Hearing Protection?',
          options: isHi ? ['Noise Reduction Rating', 'New Radio Rate', 'Noise Real Rate', 'Next Range Rate'] : ['Noise Reduction Rating', 'New Radio Rate', 'Noise Real Rate', 'Next Range Rate'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'saf19',
          question: isHi ? 'जलने पर प्राथमिक चिकित्सा क्या है?' : 'What is the first aid for burns?',
          options: isHi ? ['ठंडा पानी डालना', 'तेल लगाना', 'बर्फ रगड़ना', 'कपड़े से ढकना'] : ['Apply cool water', 'Apply oil', 'Rub ice', 'Cover with cloth'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'saf20',
          question: isHi ? 'इमरजेंसी असेंबली पॉइंट (Assembly Point) का क्या उद्देश्य है?' : 'What is the purpose of an Emergency Assembly Point?',
          options: isHi ? ['आपातकाल में सुरक्षित इकट्ठा होना', 'खाना खाना', 'बैठक करना', 'सामान रखना'] : ['Safe gathering during emergency', 'Eating food', 'Meeting', 'Storing goods'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'saf21',
          question: isHi ? 'फोर्कलिफ्ट (Forklift) चलाते समय सबसे महत्वपूर्ण सुरक्षा नियम क्या है?' : 'What is the most important safety rule when driving a Forklift?',
          options: isHi ? ['प्रशिक्षित और लाइसेंस प्राप्त होना', 'तेज़ चलाना', 'बिना हॉर्न के चलाना', 'अधिक भार उठाना'] : ['Being trained and licensed', 'Driving fast', 'Driving without horn', 'Lifting excess load'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'saf22',
          question: isHi ? 'मशीन इंटरलॉकिंग (Interlocking) का क्या अर्थ है?' : 'What does machine Interlocking mean?',
          options: isHi ? ['असुरक्षित स्थिति में मशीन का न चलना', 'मशीन को जोड़ना', 'मशीन को पेंट करना', 'मशीन की गति'] : ['Machine not running in unsafe condition', 'Joining machines', 'Painting machine', 'Machine speed'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'saf23',
          question: isHi ? 'विद्युत ग्राउंडिंग (Grounding) क्यों आवश्यक है?' : 'Why is electrical Grounding necessary?',
          options: isHi ? ['बिजली के झटके से बचने के लिए', 'बिजली बचाने के लिए', 'मशीन को गर्म करने के लिए', 'शोर कम करने के लिए'] : ['To avoid electric shock', 'To save electricity', 'To heat up machine', 'To reduce noise'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'saf24',
          question: isHi ? 'सुरक्षा संस्कृति (Safety Culture) का क्या अर्थ है?' : 'What does Safety Culture mean?',
          options: isHi ? ['सुरक्षा को प्राथमिकता देना', 'केवल नियमों का पालन', 'सजा का डर', 'सफाई'] : ['Prioritizing safety', 'Only following rules', 'Fear of punishment', 'Cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        }
      ]
    },
    {
      id: 'inventory',
      title: isHi ? 'इन्वेंट्री (Inventory)' : 'Inventory Management',
      description: isHi ? 'इन्वेंट्री प्रबंधन और नियंत्रण' : 'Inventory management and control',
      icon: 'Package',
      duration: 30,
      questions: [
        {
          id: 'inv1',
          question: isHi ? 'इन्वेंट्री क्या है?' : 'What is Inventory?',
          options: isHi ? ['स्टॉक में रखा सामान', 'बेचा गया सामान', 'मशीन का वजन', 'कर्मचारियों की संख्या'] : ['Goods held in stock', 'Sold goods', 'Machine weight', 'Number of employees'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'inv2',
          question: isHi ? 'FIFO का पूर्ण रूप क्या है?' : 'What is the full form of FIFO?',
          options: isHi ? ['First In, First Out', 'Fast In, First Out', 'First In, Final Out', 'Final In, First Out'] : ['First In, First Out', 'Fast In, First Out', 'First In, Final Out', 'Final In, First Out'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'inv3',
          question: isHi ? 'LIFO का पूर्ण रूप क्या है?' : 'What is the full form of LIFO?',
          options: isHi ? ['Last In, First Out', 'Low In, Fast Out', 'Last In, Final Out', 'Level In, First Out'] : ['Last In, First Out', 'Low In, Fast Out', 'Last In, Final Out', 'Level In, First Out'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'inv4',
          question: isHi ? 'ABC विश्लेषण में "A" श्रेणी क्या है?' : 'What is category "A" in ABC analysis?',
          options: isHi ? ['उच्च मूल्य, कम मात्रा', 'कम मूल्य, उच्च मात्रा', 'मध्यम मूल्य', 'बेकार सामान'] : ['High value, low quantity', 'Low value, high quantity', 'Medium value', 'Useless goods'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'inv5',
          question: isHi ? 'सेफ्टी स्टॉक क्यों रखा जाता है?' : 'Why is Safety Stock maintained?',
          options: isHi ? ['अनिश्चितता से बचने के लिए', 'सजावट के लिए', 'जगह भरने के लिए', 'पैसे खर्च करने के लिए'] : ['To avoid uncertainty', 'For decoration', 'To fill space', 'To spend money'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'inv6',
          question: isHi ? 'स्टॉक-आउट (Stock-out) का क्या अर्थ है?' : 'What does Stock-out mean?',
          options: isHi ? ['सामान खत्म हो जाना', 'सामान बहुत ज्यादा होना', 'सामान बाहर भेजना', 'सफाई'] : ['Running out of stock', 'Too much stock', 'Sending goods out', 'Cleaning'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'inv7',
          question: isHi ? 'EOQ का पूर्ण रूप क्या है?' : 'What is the full form of EOQ?',
          options: isHi ? ['Economic Order Quantity', 'Every Order Quality', 'Equal Order Quota', 'Easy Order Quick'] : ['Economic Order Quantity', 'Every Order Quality', 'Equal Order Quota', 'Easy Order Quick'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'inv8',
          question: isHi ? 'साइकिल काउंटिंग क्या है?' : 'What is Cycle Counting?',
          options: isHi ? ['नियमित रूप से स्टॉक की जांच', 'साइकिल चलाना', 'साल में एक बार जांच', 'मशीन की गिनती'] : ['Regular stock checking', 'Riding a cycle', 'Once a year check', 'Machine counting'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'inv9',
          question: isHi ? 'डेड स्टॉक (Dead Stock) क्या है?' : 'What is Dead Stock?',
          options: isHi ? ['वह सामान जो नहीं बिक रहा', 'खराब मशीन', 'पुराना फर्नीचर', 'टूटा हुआ फर्श'] : ['Goods that are not selling', 'Broken machine', 'Old furniture', 'Broken floor'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'inv10',
          question: isHi ? 'इन्वेंट्री टर्नओवर रेशियो क्या दिखाता है?' : 'What does Inventory Turnover Ratio show?',
          options: isHi ? ['स्टॉक कितनी बार बिका और बदला गया', 'स्टॉक का वजन', 'स्टॉक की कीमत', 'स्टॉक का रंग'] : ['How often stock is sold and replaced', 'Stock weight', 'Stock price', 'Stock color'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'inv11',
          question: isHi ? 'EOQ फॉर्मूला में "H" क्या दर्शाता है?' : 'What does "H" represent in EOQ formula?',
          options: isHi ? ['होल्डिंग कॉस्ट (Holding Cost)', 'हैंडलिंग कॉस्ट', 'हायरिंग कॉस्ट', 'हेल्प कॉस्ट'] : ['Holding Cost', 'Handling Cost', 'Hiring Cost', 'Help Cost'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'inv12',
          question: isHi ? 'रीऑर्डर पॉइंट (ROP) की गणना कैसे की जाती है?' : 'How is Reorder Point (ROP) calculated?',
          options: isHi ? ['लीड टाइम मांग + सेफ्टी स्टॉक', 'कुल मांग / 2', 'मशीन की गति * समय', 'लागत + लाभ'] : ['Lead time demand + safety stock', 'Total demand / 2', 'Machine speed * time', 'Cost + Profit'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'inv13',
          question: isHi ? 'इन्वेंट्री संकुचन (Shrinkage) का मुख्य कारण क्या है?' : 'What is the main cause of Inventory Shrinkage?',
          options: isHi ? ['चोरी, क्षति या प्रशासनिक त्रुटि', 'सामान बेचना', 'नया स्टॉक आना', 'सफाई'] : ['Theft, damage, or admin error', 'Selling goods', 'New stock arrival', 'Cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'inv14',
          question: isHi ? 'कन्साइनमेंट इन्वेंट्री (Consignment) क्या है?' : 'What is Consignment Inventory?',
          options: isHi ? ['विक्रेता के पास सामान लेकिन स्वामित्व आपूर्तिकर्ता का', 'अपना सामान', 'बेचा गया सामान', 'खराब सामान'] : ['Goods at retailer but owned by supplier', 'Own goods', 'Sold goods', 'Bad goods'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'inv15',
          question: isHi ? 'VMI का पूर्ण रूप क्या है?' : 'What is the full form of VMI?',
          options: isHi ? ['Vendor Managed Inventory', 'Value Managed Item', 'Variable Model Index', 'Virtual Machine Interface'] : ['Vendor Managed Inventory', 'Value Managed Item', 'Variable Model Index', 'Virtual Machine Interface'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'inv16',
          question: isHi ? 'SKU का पूर्ण रूप क्या है?' : 'What is the full form of SKU?',
          options: isHi ? ['Stock Keeping Unit', 'Sales Key Unit', 'Standard Kit Unit', 'Simple Key Unit'] : ['Stock Keeping Unit', 'Sales Key Unit', 'Standard Kit Unit', 'Simple Key Unit'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'inv17',
          question: isHi ? 'इन्वेंट्री एजिंग (Aging) विश्लेषण क्यों किया जाता है?' : 'Why is Inventory Aging analysis done?',
          options: isHi ? ['पुराने स्टॉक की पहचान करने के लिए', 'नया स्टॉक खरीदने के लिए', 'पैसे गिनने के लिए', 'सजावट के लिए'] : ['To identify old stock', 'To buy new stock', 'To count money', 'For decoration'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'inv18',
          question: isHi ? 'बैकऑर्डर (Backorder) का क्या प्रभाव पड़ता है?' : 'What is the impact of a Backorder?',
          options: isHi ? ['ग्राहक असंतोष और बिक्री की हानि', 'अधिक लाभ', 'तेज़ डिलीवरी', 'कम लागत'] : ['Customer dissatisfaction and loss of sales', 'More profit', 'Fast delivery', 'Low cost'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'inv19',
          question: isHi ? 'बफर स्टॉक और सेफ्टी स्टॉक में क्या अंतर है?' : 'What is the difference between Buffer Stock and Safety Stock?',
          options: isHi ? ['बफर मांग के लिए है, सेफ्टी लीड टाइम के लिए', 'दोनों एक ही हैं', 'बफर बड़ा है', 'सेफ्टी छोटा है'] : ['Buffer is for demand, safety for lead time', 'Both are same', 'Buffer is bigger', 'Safety is smaller'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'inv20',
          question: isHi ? 'सतत (Perpetual) इन्वेंट्री सिस्टम क्या है?' : 'What is a Perpetual Inventory System?',
          options: isHi ? ['वास्तविक समय में स्टॉक अपडेट', 'महीने में एक बार अपडेट', 'साल में एक बार', 'कभी नहीं'] : ['Real-time stock updates', 'Once a month update', 'Once a year', 'Never'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'inv21',
          question: isHi ? 'इन्वेंट्री में बारकोडिंग (Barcoding) का क्या लाभ है?' : 'What is the benefit of Barcoding in inventory?',
          options: isHi ? ['तेज़ और सटीक डेटा प्रविष्टि', 'धीमी प्रक्रिया', 'अधिक गलतियां', 'कम जानकारी'] : ['Fast and accurate data entry', 'Slower process', 'More mistakes', 'Less information'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'inv22',
          question: isHi ? 'RFID का इन्वेंट्री में क्या लाभ है?' : 'What is the benefit of RFID in inventory?',
          options: isHi ? ['बिना लाइन-ऑफ-साइट के स्कैनिंग', 'केवल पास से स्कैनिंग', 'धीमी प्रक्रिया', 'महंगा'] : ['Scanning without line-of-sight', 'Only close scanning', 'Slower process', 'Expensive'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'inv23',
          question: isHi ? 'गोदाम लेआउट अनुकूलन (Layout Optimization) क्यों महत्वपूर्ण है?' : 'Why is warehouse layout optimization important?',
          options: isHi ? ['सामग्री की आवाजाही कम करने के लिए', 'सजावट के लिए', 'पैसे खर्च करने के लिए', 'सफाई के लिए'] : ['To reduce material movement', 'For decoration', 'To spend money', 'For cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'inv24',
          question: isHi ? 'ऑर्डर पिकिंग (Order Picking) में "Zone Picking" क्या है?' : 'What is "Zone Picking" in order picking?',
          options: isHi ? ['पिकर्स को विशिष्ट क्षेत्रों में विभाजित करना', 'सब कुछ एक साथ उठाना', 'धीमी प्रक्रिया', 'बिना योजना के'] : ['Dividing pickers into specific zones', 'Picking everything together', 'Slower process', 'Without plan'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'inv25',
          question: isHi ? 'इन्वेंट्री सटीकता (Accuracy) क्यों महत्वपूर्ण है?' : 'Why is Inventory Accuracy important?',
          options: isHi ? ['बेहतर योजना और ग्राहक सेवा के लिए', 'सजावट के लिए', 'पैसे गिनने के लिए', 'सफाई के लिए'] : ['For better planning and customer service', 'For decoration', 'To count money', 'For cleaning'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'inv26',
          question: isHi ? 'अप्रचलित (Obsolete) इन्वेंट्री का प्रबंधन कैसे किया जाता है?' : 'How is Obsolete inventory managed?',
          options: isHi ? ['डिस्काउंट पर बेचना या स्क्रैप करना', 'स्टोर में रखना', 'नया स्टॉक खरीदना', 'सफाई'] : ['Selling at discount or scrapping', 'Keeping in store', 'Buying new stock', 'Cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'inv27',
          question: isHi ? 'कैरिंग कॉस्ट (Carrying Cost) के घटक क्या हैं?' : 'What are the components of Carrying Cost?',
          options: isHi ? ['भंडारण, बीमा, अवसर लागत', 'केवल किराया', 'केवल वेतन', 'केवल बिजली'] : ['Storage, insurance, opportunity cost', 'Only rent', 'Only salary', 'Only electricity'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'inv28',
          question: isHi ? 'लीड टाइम डिमांड (Lead Time Demand) क्या है?' : 'What is Lead Time Demand?',
          options: isHi ? ['लीड टाइम के दौरान होने वाली कुल मांग', 'कुल मांग', 'मशीन की गति', 'कर्मचारी की शक्ति'] : ['Total demand during lead time', 'Total demand', 'Machine speed', 'Worker strength'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'inv29',
          question: isHi ? 'मल्टी-एचेलोन (Multi-echelon) इन्वेंट्री क्या है?' : 'What is Multi-echelon inventory?',
          options: isHi ? ['सप्लाई चेन के कई स्तरों पर इन्वेंट्री प्रबंधन', 'एक ही जगह इन्वेंट्री', 'बिना इन्वेंट्री के', 'मशीन इन्वेंट्री'] : ['Inventory management across multiple levels', 'Single location inventory', 'Without inventory', 'Machine inventory'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'inv30',
          question: isHi ? 'JIT इन्वेंट्री का मुख्य लाभ क्या है?' : 'What is the main benefit of JIT inventory?',
          options: isHi ? ['इन्वेंट्री लागत और अपशिष्ट को कम करना', 'स्टॉक बढ़ाना', 'धीमी प्रक्रिया', 'उच्च लागत'] : ['Reduced inventory cost and waste', 'Increased stock', 'Slower process', 'Higher cost'],
          correctAnswer: 0,
          level: 'intermediate'
        }
      ]
    },
    {
      id: 'ppc',
      title: isHi ? 'PPC (प्लानिंग)' : 'PPC & Planning',
      description: isHi ? 'उत्पादन योजना और नियंत्रण' : 'Production Planning and Control strategies',
      icon: 'ClipboardCheck',
      duration: 30,
      questions: [
        {
          id: 'ppc1',
          question: isHi ? 'PPC का पूर्ण रूप क्या है?' : 'What is the full form of PPC?',
          options: isHi ? ['Production Planning & Control', 'Product Price Check', 'Process Plan Center', 'Public Part Control'] : ['Production Planning & Control', 'Product Price Check', 'Process Plan Center', 'Public Part Control'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'ppc2',
          question: isHi ? 'MRP का मुख्य कार्य क्या है?' : 'What is the main function of MRP?',
          options: isHi ? ['सामग्री की आवश्यकता की योजना', 'मशीन की मरम्मत', 'सफाई', 'बिक्री'] : ['Material requirement planning', 'Machine repair', 'Cleaning', 'Sales'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'ppc3',
          question: isHi ? 'क्षमता योजना (Capacity Planning) क्या है?' : 'What is Capacity Planning?',
          options: isHi ? ['उत्पादन क्षमता का आकलन', 'स्टोर की जगह', 'मशीन का वजन', 'कर्मचारियों की ऊंचाई'] : ['Assessing production capacity', 'Store space', 'Machine weight', 'Employee height'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ppc4',
          question: isHi ? 'डिस्पैच शेड्यूलिंग का क्या अर्थ है?' : 'What does Dispatch Scheduling mean?',
          options: isHi ? ['सामान भेजने का समय तय करना', 'सामान बनाना', 'कच्चा माल खरीदना', 'सफाई'] : ['Deciding delivery schedule', 'Making goods', 'Buying raw material', 'Cleaning'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'ppc5',
          question: isHi ? 'इन्वेंट्री कंट्रोल का मुख्य उद्देश्य क्या है?' : 'What is the main goal of Inventory Control?',
          options: isHi ? ['सही मात्रा में स्टॉक रखना', 'स्टोर भरना', 'सब कुछ बेचना', 'पैसे बचाना'] : ['Maintaining right stock levels', 'Filling the store', 'Selling everything', 'Saving money'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ppc6',
          question: isHi ? 'मास्टर प्रोडक्शन शेड्यूल (MPS) क्या है?' : 'What is a Master Production Schedule (MPS)?',
          options: isHi ? ['क्या और कब बनाना है इसकी योजना', 'कर्मचारियों की सूची', 'मशीन की सूची', 'छुट्टियों का कैलेंडर'] : ['Plan of what and when to produce', 'Employee list', 'Machine list', 'Holiday calendar'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ppc7',
          question: isHi ? 'लीड टाइम कम करने से क्या होता है?' : 'What happens by reducing Lead Time?',
          options: isHi ? ['तेज़ डिलीवरी', 'धीमी डिलीवरी', 'अधिक लागत', 'कम गुणवत्ता'] : ['Faster delivery', 'Slower delivery', 'Higher cost', 'Lower quality'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'ppc8',
          question: isHi ? 'ERP सिस्टम का उपयोग क्यों किया जाता है?' : 'Why is an ERP system used?',
          options: isHi ? ['डेटा को एकीकृत करने के लिए', 'केवल ईमेल के लिए', 'गेम खेलने के लिए', 'सफाई के लिए'] : ['To integrate data', 'Only for email', 'For playing games', 'For cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ppc9',
          question: isHi ? 'बॉटलनेक प्रक्रिया का योजना पर क्या प्रभाव पड़ता है?' : 'How does a bottleneck process affect planning?',
          options: isHi ? ['यह कुल उत्पादन को सीमित करती है', 'यह उत्पादन बढ़ाती है', 'कोई प्रभाव नहीं', 'यह लागत कम करती है'] : ['It limits total output', 'It increases output', 'No effect', 'It reduces cost'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'ppc10',
          question: isHi ? 'PPC विभाग किसके बीच सेतु का काम करता है?' : 'PPC department acts as a bridge between?',
          options: isHi ? ['बिक्री और उत्पादन', 'HR और IT', 'सफाई और सुरक्षा', 'कैंटीन और स्टोर'] : ['Sales and Production', 'HR and IT', 'Cleaning and Safety', 'Canteen and Store'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ppc11',
          question: isHi ? 'गैंट चार्ट (Gantt Chart) का उपयोग क्यों किया जाता है?' : 'Why is a Gantt Chart used?',
          options: isHi ? ['प्रोजेक्ट शेड्यूल को ट्रैक करने के लिए', 'पैसे गिनने के लिए', 'मशीन का वजन मापने के लिए', 'सफाई के लिए'] : ['To track project schedule', 'To count money', 'To measure machine weight', 'For cleaning'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'ppc12',
          question: isHi ? 'योजना में JIT (Just-In-Time) का क्या अर्थ है?' : 'What does JIT mean in planning?',
          options: isHi ? ['जरूरत पड़ने पर ही उत्पादन करना', 'बहुत सारा स्टॉक रखना', 'धीमी गति से काम करना', 'बिना योजना के काम करना'] : ['Producing only when needed', 'Keeping lot of stock', 'Working slowly', 'Working without plan'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ppc13',
          question: isHi ? 'EOQ का उपयोग PPC में क्यों किया जाता है?' : 'Why is EOQ used in PPC?',
          options: isHi ? ['इष्टतम ऑर्डर मात्रा निर्धारित करने के लिए', 'मशीन की गति बढ़ाने के लिए', 'कर्मचारियों की भर्ती के लिए', 'सफाई के लिए'] : ['To determine optimal order quantity', 'To increase machine speed', 'For recruiting workers', 'For cleaning'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'ppc14',
          question: isHi ? 'उत्पादन लीड टाइम (Production Lead Time) के घटक क्या हैं?' : 'What are the components of Production Lead Time?',
          options: isHi ? ['वेटिंग, सेटअप, रन और मूव टाइम', 'केवल रन टाइम', 'केवल ब्रेक टाइम', 'केवल लंच टाइम'] : ['Waiting, setup, run, and move time', 'Only run time', 'Only break time', 'Only lunch time'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'ppc15',
          question: isHi ? 'एग्रीगेट प्लानिंग (Aggregate Planning) का क्या अर्थ है?' : 'What does Aggregate Planning mean?',
          options: isHi ? ['मध्यम अवधि की उत्पादन योजना', 'दैनिक योजना', 'सालाना रिपोर्ट', 'मशीन की मरम्मत'] : ['Medium-term production planning', 'Daily plan', 'Annual report', 'Machine repair'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'ppc16',
          question: isHi ? 'BOM (Bill of Materials) की सटीकता क्यों महत्वपूर्ण है?' : 'Why is BOM accuracy important?',
          options: isHi ? ['सही सामग्री की योजना बनाने के लिए', 'सजावट के लिए', 'पैसे खर्च करने के लिए', 'सफाई के लिए'] : ['To plan correct materials', 'For decoration', 'To spend money', 'For cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ppc17',
          question: isHi ? 'शॉप फ्लोर कंट्रोल (Shop Floor Control) क्या है?' : 'What is Shop Floor Control?',
          options: isHi ? ['उत्पादन गतिविधियों की निगरानी और नियंत्रण', 'फर्श की सफाई', 'मशीन का पेंट', 'कर्मचारियों का वेतन'] : ['Monitoring and controlling production activities', 'Floor cleaning', 'Machine paint', 'Employee salary'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ppc18',
          question: isHi ? 'अनुक्रमण (Sequencing) में FIFO नियम का क्या अर्थ है?' : 'What does FIFO rule mean in sequencing?',
          options: isHi ? ['जो पहले आया वो पहले बनेगा', 'जो बाद में आया वो पहले बनेगा', 'जो सबसे बड़ा है वो पहले बनेगा', 'जो सबसे छोटा है वो पहले बनेगा'] : ['First in, first out', 'Last in, first out', 'Biggest first', 'Smallest first'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'ppc19',
          question: isHi ? 'संसाधन लेवलिंग (Resource Leveling) का क्या उद्देश्य है?' : 'What is the goal of Resource Leveling?',
          options: isHi ? ['संसाधनों के उतार-चढ़ाव को कम करना', 'संसाधन बढ़ाना', 'संसाधन कम करना', 'संसाधन बेचना'] : ['Reduce fluctuations in resources', 'Increase resources', 'Decrease resources', 'Sell resources'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'ppc20',
          question: isHi ? 'मांग पूर्वानुमान (Demand Forecasting) क्यों किया जाता है?' : 'Why is Demand Forecasting done?',
          options: isHi ? ['भविष्य की बिक्री का अनुमान लगाने के लिए', 'पुरानी यादों के लिए', 'सफाई के लिए', 'पैसे गिनने के लिए'] : ['To estimate future sales', 'For old memories', 'For cleaning', 'To count money'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ppc21',
          question: isHi ? 'योजना में सेफ्टी स्टॉक (Safety Stock) का क्या कार्य है?' : 'What is the function of Safety Stock in planning?',
          options: isHi ? ['मांग में अनिश्चितता से सुरक्षा', 'स्टोर भरना', 'पैसे बचाना', 'सजावट'] : ['Protection against demand uncertainty', 'Filling store', 'Saving money', 'Decoration'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ppc22',
          question: isHi ? 'वर्क ऑर्डर (Work Order) ट्रैकिंग क्यों आवश्यक है?' : 'Why is Work Order tracking necessary?',
          options: isHi ? ['उत्पादन की प्रगति जानने के लिए', 'कर्मचारियों की गिनती के लिए', 'मशीन की गति के लिए', 'सफाई के लिए'] : ['To know production progress', 'For counting workers', 'For machine speed', 'For cleaning'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'ppc23',
          question: isHi ? 'उत्पादन अनुसूची अनुपालन (Schedule Adherence) क्या है?' : 'What is Production Schedule Adherence?',
          options: isHi ? ['योजना के अनुसार उत्पादन करने की क्षमता', 'योजना बदलना', 'योजना को अनदेखा करना', 'नई योजना बनाना'] : ['Ability to produce according to plan', 'Changing plan', 'Ignoring plan', 'Making new plan'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ppc24',
          question: isHi ? 'सामग्री की कमी (Material Shortage) का योजना पर क्या प्रभाव पड़ता है?' : 'How does Material Shortage affect planning?',
          options: isHi ? ['उत्पादन रुक जाता है और देरी होती है', 'उत्पादन तेज़ होता है', 'कोई प्रभाव नहीं', 'लागत कम होती है'] : ['Production stops and delays occur', 'Production speeds up', 'No effect', 'Cost decreases'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'ppc25',
          question: isHi ? 'आउटसोर्सिंग (Outsourcing) का निर्णय कब लिया जाता है?' : 'When is the decision for Outsourcing made?',
          options: isHi ? ['जब आंतरिक क्षमता कम हो या लागत अधिक हो', 'जब बहुत पैसा हो', 'जब कोई काम न हो', 'जब मशीन नई हो'] : ['When internal capacity is low or cost is high', 'When there is lot of money', 'When there is no work', 'When machine is new'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'ppc26',
          question: isHi ? 'क्षमता उपयोग (Capacity Utilization) क्या मापता है?' : 'What does Capacity Utilization measure?',
          options: isHi ? ['वास्तविक आउटपुट बनाम अधिकतम आउटपुट', 'मशीन का वजन', 'कर्मचारियों की संख्या', 'बिजली की खपत'] : ['Actual output vs maximum output', 'Machine weight', 'Number of workers', 'Power consumption'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ppc27',
          question: isHi ? 'मेंटेनेंस के लिए योजना बनाना क्यों आवश्यक है?' : 'Why is it necessary to plan for maintenance?',
          options: isHi ? ['अचानक ब्रेकडाउन से बचने के लिए', 'मशीन को खराब करने के लिए', 'पैसे खर्च करने के लिए', 'सफाई के लिए'] : ['To avoid sudden breakdowns', 'To break machine', 'To spend money', 'For cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ppc28',
          question: isHi ? 'बैच उत्पादन बनाम निरंतर उत्पादन योजना में क्या अंतर है?' : 'What is the difference between Batch and Continuous production planning?',
          options: isHi ? ['बैच में समूहों में काम होता है, निरंतर में लगातार', 'दोनों एक ही हैं', 'बैच तेज़ है', 'निरंतर धीमा है'] : ['Batch is in groups, continuous is non-stop', 'Both are same', 'Batch is fast', 'Continuous is slow'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'ppc29',
          question: isHi ? 'ग्राहक ऑर्डर डिकपलिंग पॉइंट (Decoupling Point) क्या है?' : 'What is Customer Order Decoupling Point?',
          options: isHi ? ['जहाँ उत्पादन ऑर्डर-आधारित हो जाता है', 'जहाँ सामान बिकता है', 'जहाँ कच्चा माल आता है', 'जहाँ मशीन रुकती है'] : ['Where production becomes order-driven', 'Where goods are sold', 'Where raw material arrives', 'Where machine stops'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'ppc30',
          question: isHi ? 'ERP बनाम मैनुअल योजना में क्या लाभ है?' : 'What is the benefit of ERP vs Manual planning?',
          options: isHi ? ['बेहतर डेटा सटीकता और गति', 'धीमी प्रक्रिया', 'अधिक गलतियां', 'कम जानकारी'] : ['Better data accuracy and speed', 'Slower process', 'More mistakes', 'Less information'],
          correctAnswer: 0,
          level: 'intermediate'
        }
      ]

    },
    {
      id: 'supply-chain',
      title: isHi ? 'सप्लाई चेन (Supply Chain)' : 'Supply Chain Management',
      description: isHi ? 'लॉजिस्टिक्स और खरीद' : 'Logistics, procurement, and flow',
      icon: 'Truck',
      duration: 30,
      questions: [
        {
          id: 'sc1',
          question: isHi ? 'सप्लाई चेन का पहला चरण क्या है?' : 'What is the first stage of a Supply Chain?',
          options: isHi ? ['कच्चा माल प्राप्त करना', 'सामान बेचना', 'पैकेजिंग', 'विज्ञापन'] : ['Sourcing raw materials', 'Selling goods', 'Packaging', 'Advertising'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'sc2',
          question: isHi ? 'लॉजिस्टिक्स का मुख्य कार्य क्या है?' : 'What is the main function of Logistics?',
          options: isHi ? ['सामान का परिवहन और भंडारण', 'सामान बनाना', 'डिजाइन करना', 'सफाई'] : ['Transport and storage of goods', 'Making goods', 'Designing', 'Cleaning'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'sc3',
          question: isHi ? 'खरीद (Procurement) का क्या अर्थ है?' : 'What does Procurement mean?',
          options: isHi ? ['सामग्री और सेवाएं खरीदना', 'सामान बेचना', 'मशीन चलाना', 'भर्ती करना'] : ['Buying materials and services', 'Selling goods', 'Running machines', 'Recruiting'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'sc4',
          question: isHi ? 'आउटसोर्सिंग क्या है?' : 'What is Outsourcing?',
          options: isHi ? ['बाहरी वेंडर से काम कराना', 'सब कुछ खुद बनाना', 'काम बंद करना', 'मशीन बेचना'] : ['Getting work done by external vendors', 'Making everything yourself', 'Stopping work', 'Selling machines'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'sc5',
          question: isHi ? 'सप्लाई चेन में "बुलविप इफेक्ट" क्या है?' : 'What is the "Bullwhip Effect" in Supply Chain?',
          options: isHi ? ['मांग में उतार-चढ़ाव का बढ़ना', 'तेज़ डिलीवरी', 'कम लागत', 'बेहतर गुणवत्ता'] : ['Increasing fluctuations in demand', 'Fast delivery', 'Low cost', 'Better quality'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'sc6',
          question: isHi ? 'वेंडर रेटिंग क्यों की जाती है?' : 'Why is vendor rating done?',
          options: isHi ? ['प्रदर्शन मापने के लिए', 'दोस्ती के लिए', 'पैसे देने के लिए', 'सजा देने के लिए'] : ['To measure performance', 'For friendship', 'To pay money', 'To punish'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'sc7',
          question: isHi ? 'रिवर्स लॉजिस्टिक्स क्या है?' : 'What is Reverse Logistics?',
          options: isHi ? ['वापस आए सामान का प्रबंधन', 'सामान भेजना', 'कच्चा माल खरीदना', 'सफाई'] : ['Managing returned goods', 'Sending goods', 'Buying raw material', 'Cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'sc8',
          question: isHi ? 'लीड टाइम सप्लाई चेन को कैसे प्रभावित करता है?' : 'How does Lead Time affect the Supply Chain?',
          options: isHi ? ['यह इन्वेंट्री स्तर को प्रभावित करता है', 'यह केवल रंग बदलता है', 'कोई प्रभाव नहीं', 'यह मशीन की गति बढ़ाता है'] : ['It affects inventory levels', 'It only changes color', 'No effect', 'It increases machine speed'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'sc9',
          question: isHi ? 'कोल्ड चेन लॉजिस्टिक्स किसके लिए उपयोग किया जाता है?' : 'What is Cold Chain Logistics used for?',
          options: isHi ? ['तापमान संवेदनशील सामान', 'लोहे का सामान', 'कपड़े', 'किताबें'] : ['Temperature sensitive goods', 'Iron goods', 'Clothes', 'Books'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'sc10',
          question: isHi ? 'सप्लाई चेन में पारदर्शिता का क्या लाभ है?' : 'What is the benefit of transparency in Supply Chain?',
          options: isHi ? ['बेहतर योजना और विश्वास', 'अधिक चोरी', 'कम काम', 'अधिक लागत'] : ['Better planning and trust', 'More theft', 'Less work', 'Higher cost'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'sc11',
          question: isHi ? 'सप्लाई चेन विजिबिलिटी (Visibility) का क्या अर्थ है?' : 'What does Supply Chain Visibility mean?',
          options: isHi ? ['वास्तविक समय में सामान की स्थिति जानना', 'सामान को देखना', 'अंधेरे में काम करना', 'सफाई'] : ['Knowing real-time status of goods', 'Looking at goods', 'Working in dark', 'Cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'sc12',
          question: isHi ? '3PL और 4PL में क्या अंतर है?' : 'What is the difference between 3PL and 4PL?',
          options: isHi ? ['4PL पूरी सप्लाई चेन का प्रबंधन करता है', '3PL बड़ा है', 'दोनों एक ही हैं', 'कोई अंतर नहीं'] : ['4PL manages the entire supply chain', '3PL is bigger', 'Both are same', 'No difference'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'sc13',
          question: isHi ? 'इन्वेंट्री कैरिंग कॉस्ट (Carrying Cost) क्या है?' : 'What is Inventory Carrying Cost?',
          options: isHi ? ['स्टॉक रखने की लागत', 'सामान बेचने की लागत', 'मशीन की लागत', 'बिजली का बिल'] : ['Cost of holding stock', 'Cost of selling goods', 'Machine cost', 'Electricity bill'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'sc14',
          question: isHi ? 'क्रॉस-डॉकिंग (Cross-docking) का क्या लाभ है?' : 'What is the benefit of Cross-docking?',
          options: isHi ? ['भंडारण समय कम करना', 'अधिक भंडारण', 'धीमी डिलीवरी', 'उच्च लागत'] : ['Reduced storage time', 'More storage', 'Slower delivery', 'Higher cost'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'sc15',
          question: isHi ? 'SRM का पूर्ण रूप क्या है?' : 'What is the full form of SRM?',
          options: isHi ? ['Supplier Relationship Management', 'System Resource Model', 'Sales Report Method', 'Standard Risk Management'] : ['Supplier Relationship Management', 'System Resource Model', 'Sales Report Method', 'Standard Risk Management'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'sc16',
          question: isHi ? 'TCO (Total Cost of Ownership) क्या मापता है?' : 'What does TCO (Total Cost of Ownership) measure?',
          options: isHi ? ['खरीद से लेकर निपटान तक की कुल लागत', 'केवल खरीद मूल्य', 'केवल शिपिंग लागत', 'केवल कर'] : ['Total cost from purchase to disposal', 'Only purchase price', 'Only shipping cost', 'Only taxes'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'sc17',
          question: isHi ? 'WMS का मुख्य कार्य क्या है?' : 'What is the main function of WMS?',
          options: isHi ? ['गोदाम संचालन का प्रबंधन', 'वेतन का प्रबंधन', 'मशीन की मरम्मत', 'सफाई'] : ['Managing warehouse operations', 'Managing salary', 'Machine repair', 'Cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'sc18',
          question: isHi ? 'DRP का पूर्ण रूप क्या है?' : 'What is the full form of DRP?',
          options: isHi ? ['Distribution Resource Planning', 'Data Recovery Plan', 'Delivery Rate Process', 'Design Resource Plan'] : ['Distribution Resource Planning', 'Data Recovery Plan', 'Delivery Rate Process', 'Design Resource Plan'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'sc19',
          question: isHi ? 'सस्टेनेबल सोर्सिंग (Sustainable Sourcing) क्या है?' : 'What is Sustainable Sourcing?',
          options: isHi ? ['पर्यावरण के अनुकूल खरीद', 'सस्ती खरीद', 'तेज़ खरीद', 'बिना योजना के खरीद'] : ['Environmentally friendly procurement', 'Cheap procurement', 'Fast procurement', 'Unplanned procurement'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'sc20',
          question: isHi ? 'सप्लाई चेन में जोखिम शमन (Risk Mitigation) क्यों आवश्यक है?' : 'Why is Risk Mitigation necessary in Supply Chain?',
          options: isHi ? ['व्यवधानों से बचने के लिए', 'पैसे खर्च करने के लिए', 'सजा देने के लिए', 'सजावट के लिए'] : ['To avoid disruptions', 'To spend money', 'To punish', 'For decoration'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'sc21',
          question: isHi ? 'फ्रेट फॉरवर्डिंग (Freight Forwarding) का क्या कार्य है?' : 'What is the role of Freight Forwarding?',
          options: isHi ? ['शिपमेंट का समन्वय करना', 'सामान बनाना', 'सामान बेचना', 'सफाई'] : ['Coordinating shipments', 'Making goods', 'Selling goods', 'Cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'sc22',
          question: isHi ? 'इन्कोटर्म्स (Incoterms) क्या निर्धारित करते हैं?' : 'What do Incoterms define?',
          options: isHi ? ['खरीदार और विक्रेता की जिम्मेदारियां', 'सामान की गुणवत्ता', 'मशीन की गति', 'कर्मचारी का वेतन'] : ['Responsibilities of buyer and seller', 'Quality of goods', 'Machine speed', 'Employee salary'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'sc23',
          question: isHi ? 'डिमांड-ड्रिवन सप्लाई चेन (Demand-driven) क्या है?' : 'What is a Demand-driven Supply Chain?',
          options: isHi ? ['वास्तविक मांग के आधार पर संचालित', 'अनुमान के आधार पर', 'बिना योजना के', 'मशीन के आधार पर'] : ['Driven by actual demand', 'Based on estimates', 'Without plan', 'Based on machine'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'sc24',
          question: isHi ? 'लीन सप्लाई चेन (Lean Supply Chain) का उद्देश्य क्या है?' : 'What is the goal of a Lean Supply Chain?',
          options: isHi ? ['अपशिष्ट को हटाना और दक्षता बढ़ाना', 'लागत बढ़ाना', 'स्टॉक बढ़ाना', 'धीमी प्रक्रिया'] : ['Eliminate waste and increase efficiency', 'Increase cost', 'Increase stock', 'Slower process'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'sc25',
          question: isHi ? 'डिजिटल सप्लाई चेन का क्या लाभ है?' : 'What is the benefit of a Digital Supply Chain?',
          options: isHi ? ['बेहतर डेटा और पारदर्शिता', 'धीमी प्रक्रिया', 'अधिक कागजी कार्रवाई', 'कम जानकारी'] : ['Better data and transparency', 'Slower process', 'More paperwork', 'Less information'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'sc26',
          question: isHi ? 'सप्लाई चेन लचीलापन (Resilience) क्या है?' : 'What is Supply Chain Resilience?',
          options: isHi ? ['व्यवधानों से जल्दी उबरने की क्षमता', 'मशीन का लचीलापन', 'कर्मचारी का लचीलापन', 'कम लागत'] : ['Ability to recover quickly from disruptions', 'Machine flexibility', 'Employee flexibility', 'Low cost'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'sc27',
          question: isHi ? 'लास्ट-माइल डिलीवरी (Last-mile) की मुख्य चुनौती क्या है?' : 'What is the main challenge of Last-mile delivery?',
          options: isHi ? ['उच्च लागत और जटिलता', 'कच्चा माल', 'मशीन की गति', 'सफाई'] : ['High cost and complexity', 'Raw material', 'Machine speed', 'Cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'sc28',
          question: isHi ? 'इन्वेंट्री वेलोसिटी (Velocity) क्या मापता है?' : 'What does Inventory Velocity measure?',
          options: isHi ? ['स्टॉक कितनी तेज़ी से बिकता है', 'मशीन की गति', 'ट्रक की गति', 'हवा की गति'] : ['How fast stock is sold', 'Machine speed', 'Truck speed', 'Air speed'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'sc29',
          question: isHi ? 'रणनीतिक सोर्सिंग (Strategic Sourcing) क्या है?' : 'What is Strategic Sourcing?',
          options: isHi ? ['दीर्घकालिक आपूर्ति योजना', 'दैनिक खरीद', 'सस्ती खरीद', 'बिना योजना के खरीद'] : ['Long-term supply planning', 'Daily purchase', 'Cheap purchase', 'Unplanned purchase'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'sc30',
          question: isHi ? 'CPFR का पूर्ण रूप क्या है?' : 'What is the full form of CPFR?',
          options: isHi ? ['Collaborative Planning, Forecasting, and Replenishment', 'Common Process For Repair', 'Central Plan For Resources', 'Customer Price For Return'] : ['Collaborative Planning, Forecasting, and Replenishment', 'Common Process For Repair', 'Central Plan For Resources', 'Customer Price For Return'],
          correctAnswer: 0,
          level: 'advanced'
        }
      ]

    },
    {
      id: 'ehs',
      title: isHi ? 'EHS (पर्यावरण और सुरक्षा)' : 'EHS & Environment',
      description: isHi ? 'पर्यावरण, स्वास्थ्य और सुरक्षा' : 'Environment, Health, and Safety guidelines',
      icon: 'Leaf',
      duration: 30,
      questions: [
        {
          id: 'ehs1',
          question: isHi ? 'EHS का पूर्ण रूप क्या है?' : 'What is the full form of EHS?',
          options: isHi ? ['Environment, Health, and Safety', 'Every Home Safety', 'Energy Health System', 'Emergency Help Service'] : ['Environment, Health, and Safety', 'Every Home Safety', 'Energy Health System', 'Emergency Help Service'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'ehs2',
          question: isHi ? 'अपशिष्ट प्रबंधन में 3R क्या हैं?' : 'What are the 3Rs in waste management?',
          options: isHi ? ['Reduce, Reuse, Recycle', 'Read, Run, React', 'Remove, Repair, Replace', 'Red, Right, Real'] : ['Reduce, Reuse, Recycle', 'Read, Run, React', 'Remove, Repair, Replace', 'Red, Right, Real'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'ehs3',
          question: isHi ? 'ISO 14001 किससे संबंधित है?' : 'ISO 14001 is related to?',
          options: isHi ? ['पर्यावरण प्रबंधन', 'गुणवत्ता प्रबंधन', 'खाद्य सुरक्षा', 'IT सुरक्षा'] : ['Environmental Management', 'Quality Management', 'Food Safety', 'IT Security'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ehs4',
          question: isHi ? 'खतरनाक अपशिष्ट (Hazardous Waste) क्या है?' : 'What is Hazardous Waste?',
          options: isHi ? ['जो पर्यावरण या स्वास्थ्य को नुकसान पहुंचा सकता है', 'रसोई का कचरा', 'कागज', 'पानी'] : ['Anything harmful to environment or health', 'Kitchen waste', 'Paper', 'Water'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'ehs5',
          question: isHi ? 'कार्यस्थल पर एर्गोनॉमिक्स का क्या अर्थ है?' : 'What does Ergonomics mean at workplace?',
          options: isHi ? ['काम को कर्मचारी के अनुकूल बनाना', 'मशीन को तेज़ करना', 'सफाई', 'पेंट करना'] : ['Fitting the job to the worker', 'Speeding up machine', 'Cleaning', 'Painting'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ehs6',
          question: isHi ? 'ध्वनि प्रदूषण मापने की इकाई क्या है?' : 'What is the unit to measure noise pollution?',
          options: isHi ? ['डेसिबल (dB)', 'किलोग्राम', 'मीटर', 'लीटर'] : ['Decibel (dB)', 'Kilogram', 'Meter', 'Liter'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'ehs7',
          question: isHi ? 'प्राथमिक चिकित्सा (First Aid) का मुख्य लक्ष्य क्या है?' : 'What is the main goal of First Aid?',
          options: isHi ? ['जीवन बचाना और स्थिति बिगड़ने से रोकना', 'इलाज पूरा करना', 'अस्पताल ले जाना', 'दवा देना'] : ['Save life and prevent worsening', 'Complete treatment', 'Take to hospital', 'Give medicine'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'ehs8',
          question: isHi ? 'ISO 45001 किससे संबंधित है?' : 'ISO 45001 is related to?',
          options: isHi ? ['व्यावसायिक स्वास्थ्य और सुरक्षा', 'पर्यावरण', 'गुणवत्ता', 'ऊर्जा'] : ['Occupational Health and Safety', 'Environment', 'Quality', 'Energy'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ehs9',
          question: isHi ? 'कार्बन फुटप्रिंट क्या है?' : 'What is a Carbon Footprint?',
          options: isHi ? ['कुल ग्रीनहाउस गैस उत्सर्जन', 'पैर का निशान', 'कोयले की खान', 'धुआं'] : ['Total greenhouse gas emissions', 'Footprint', 'Coal mine', 'Smoke'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'ehs10',
          question: isHi ? 'आपातकालीन निकास मार्ग कैसा होना चाहिए?' : 'How should an emergency exit path be?',
          options: isHi ? ['साफ और बाधा रहित', 'सामान से भरा', 'बंद', 'अंधेरा'] : ['Clear and unobstructed', 'Full of goods', 'Locked', 'Dark'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'ehs11',
          question: isHi ? 'EHS में "Near Miss" का क्या अर्थ है?' : 'What does "Near Miss" mean in EHS?',
          options: isHi ? ['ऐसी घटना जिसमें चोट नहीं लगी लेकिन लग सकती थी', 'एक छोटी चोट', 'मशीन का खराब होना', 'सफाई'] : ['An incident that did not result in injury but could have', 'A small injury', 'Machine failure', 'Cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ehs12',
          question: isHi ? 'EHS में "PPE" का क्या महत्व है?' : 'What is the importance of "PPE" in EHS?',
          options: isHi ? ['व्यक्तिगत सुरक्षा सुनिश्चित करना', 'मशीन की गति बढ़ाना', 'लागत कम करना', 'सजावट'] : ['Ensuring personal safety', 'Increasing machine speed', 'Reducing cost', 'Decoration'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'ehs13',
          question: isHi ? 'EHS में "LOTO" का पूर्ण रूप क्या है?' : 'What is the full form of "LOTO" in EHS?',
          options: isHi ? ['Lockout Tagout', 'Level Of Total Output', 'Log On Time Out', 'List Of Total Orders'] : ['Lockout Tagout', 'Level Of Total Output', 'Log On Time Out', 'List Of Total Orders'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ehs14',
          question: isHi ? 'EHS में "MSDS" का क्या अर्थ है?' : 'What does "MSDS" stand for in EHS?',
          options: isHi ? ['Material Safety Data Sheet', 'Machine Safety Design System', 'Main Safety Data Source', 'Material Supply Delivery Schedule'] : ['Material Safety Data Sheet', 'Machine Safety Design System', 'Main Safety Data Source', 'Material Supply Delivery Schedule'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ehs15',
          question: isHi ? 'EHS में "Hazard Identification" क्यों महत्वपूर्ण है?' : 'Why is "Hazard Identification" important in EHS?',
          options: isHi ? ['दुर्घटनाओं को रोकने के लिए', 'लागत बढ़ाने के लिए', 'कर्मचारियों को डराने के लिए', 'सफाई के लिए'] : ['To prevent accidents', 'To increase cost', 'To scare workers', 'For cleaning'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'ehs16',
          question: isHi ? 'EHS में "Root Cause Analysis" (RCA) का क्या उद्देश्य है?' : 'What is the purpose of "Root Cause Analysis" (RCA) in EHS?',
          options: isHi ? ['दुर्घटना के मूल कारण को खोजना', 'सजा देना', 'पैसे बचाना', 'रिपोर्ट बनाना'] : ['To find the root cause of an accident', 'To punish', 'To save money', 'To make a report'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'ehs17',
          question: isHi ? 'EHS में "Environmental Impact Assessment" (EIA) क्या है?' : 'What is "Environmental Impact Assessment" (EIA) in EHS?',
          options: isHi ? ['पर्यावरण पर प्रोजेक्ट के प्रभाव का आकलन', 'मशीन का वजन', 'कर्मचारियों की संख्या', 'बिक्री रिपोर्ट'] : ['Assessing project impact on environment', 'Machine weight', 'Number of workers', 'Sales report'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'ehs18',
          question: isHi ? 'EHS में "Safety Audit" का क्या लाभ है?' : 'What is the benefit of a "Safety Audit" in EHS?',
          options: isHi ? ['सुरक्षा प्रणाली की कमियों को पहचानना', 'सजा देना', 'पैसे बचाना', 'सफाई'] : ['Identifying gaps in safety system', 'To punish', 'To save money', 'Cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ehs19',
          question: isHi ? 'EHS में "Emergency Response Plan" (ERP) क्या है?' : 'What is an "Emergency Response Plan" (ERP) in EHS?',
          options: isHi ? ['आपातकाल से निपटने की योजना', 'दैनिक योजना', 'सालाना रिपोर्ट', 'मशीन की मरम्मत'] : ['Plan to deal with emergencies', 'Daily plan', 'Annual report', 'Machine repair'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ehs20',
          question: isHi ? 'EHS में "Waste Segregation" क्यों आवश्यक है?' : 'Why is "Waste Segregation" necessary in EHS?',
          options: isHi ? ['प्रभावी पुनर्चक्रण और निपटान के लिए', 'सजावट के लिए', 'पैसे खर्च करने के लिए', 'सफाई के लिए'] : ['For effective recycling and disposal', 'For decoration', 'To spend money', 'For cleaning'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'ehs21',
          question: isHi ? 'EHS में "Occupational Health" का क्या अर्थ है?' : 'What does "Occupational Health" mean in EHS?',
          options: isHi ? ['कार्यस्थल पर कर्मचारियों का स्वास्थ्य', 'मशीन का स्वास्थ्य', 'कंपनी का बैंक बैलेंस', 'सफाई'] : ['Health of workers at workplace', 'Machine health', 'Company bank balance', 'Cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ehs22',
          question: isHi ? 'EHS में "Safety Culture" क्या है?' : 'What is "Safety Culture" in EHS?',
          options: isHi ? ['सुरक्षा के प्रति साझा मूल्य और व्यवहार', 'सुरक्षा के नियम', 'सुरक्षा के उपकरण', 'सुरक्षा के पोस्टर'] : ['Shared values and behaviors towards safety', 'Safety rules', 'Safety equipment', 'Safety posters'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'ehs23',
          question: isHi ? 'EHS में "Incident Reporting" क्यों महत्वपूर्ण है?' : 'Why is "Incident Reporting" important in EHS?',
          options: isHi ? ['भविष्य की घटनाओं को रोकने के लिए सीखने के लिए', 'सजा देने के लिए', 'पैसे बचाने के लिए', 'सफाई के लिए'] : ['To learn and prevent future incidents', 'To punish', 'To save money', 'Cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ehs24',
          question: isHi ? 'EHS में "Fire Extinguisher" का उपयोग कैसे किया जाता है (PASS)?' : 'How is a "Fire Extinguisher" used in EHS (PASS)?',
          options: isHi ? ['Pull, Aim, Squeeze, Sweep', 'Push, Aim, Stop, Start', 'Pull, Aim, Stop, Sweep', 'Push, Aim, Squeeze, Start'] : ['Pull, Aim, Squeeze, Sweep', 'Push, Aim, Stop, Start', 'Pull, Aim, Stop, Sweep', 'Push, Aim, Squeeze, Start'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ehs25',
          question: isHi ? 'EHS में "Confined Space" क्या है?' : 'What is a "Confined Space" in EHS?',
          options: isHi ? ['सीमित प्रवेश और निकास वाली जगह', 'खुला मैदान', 'बड़ा हॉल', 'सड़क'] : ['Space with limited entry and exit', 'Open field', 'Big hall', 'Road'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ehs26',
          question: isHi ? 'EHS में "Work at Height" के लिए क्या आवश्यक है?' : 'What is required for "Work at Height" in EHS?',
          options: isHi ? ['सेफ्टी हार्नेस और रेलिंग', 'केवल जूते', 'केवल टोपी', 'कुछ नहीं'] : ['Safety harness and railing', 'Only shoes', 'Only hat', 'Nothing'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'ehs27',
          question: isHi ? 'EHS में "Chemical Spill Kit" का उपयोग क्यों किया जाता है?' : 'Why is a "Chemical Spill Kit" used in EHS?',
          options: isHi ? ['रसायन रिसाव को नियंत्रित करने के लिए', 'सफाई के लिए', 'पेंट करने के लिए', 'पीने के लिए'] : ['To control chemical spills', 'For cleaning', 'For painting', 'For drinking'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'ehs28',
          question: isHi ? 'EHS में "Noise Induced Hearing Loss" (NIHL) क्या है?' : 'What is "Noise Induced Hearing Loss" (NIHL) in EHS?',
          options: isHi ? ['तेज़ आवाज़ के कारण सुनने की शक्ति कम होना', 'आंखों की समस्या', 'पैरों की समस्या', 'सफाई'] : ['Hearing loss due to loud noise', 'Eye problem', 'Leg problem', 'Cleaning'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'ehs29',
          question: isHi ? 'EHS में "Sustainability" का क्या अर्थ है?' : 'What does "Sustainability" mean in EHS?',
          options: isHi ? ['भविष्य की जरूरतों से समझौता किए बिना वर्तमान जरूरतों को पूरा करना', 'केवल लाभ कमाना', 'केवल आज के बारे में सोचना', 'सफाई'] : ['Meeting current needs without compromising future needs', 'Only making profit', 'Only thinking about today', 'Cleaning'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'ehs30',
          question: isHi ? 'EHS में "Safety Data Sheet" (SDS) में क्या जानकारी होती है?' : 'What information is in a "Safety Data Sheet" (SDS) in EHS?',
          options: isHi ? ['रसायन के खतरे और सुरक्षा उपाय', 'मशीन की कीमत', 'कर्मचारी का नाम', 'बिक्री रिपोर्ट'] : ['Chemical hazards and safety measures', 'Machine price', 'Employee name', 'Sales report'],
          correctAnswer: 0,
          level: 'intermediate'
        }
      ]
    },
    {
      id: 'iso',
      title: isHi ? 'ISO और कंप्लायंस' : 'ISO & Compliance',
      description: isHi ? 'मानक और कानूनी अनुपालन' : 'Standards, audits, and legal compliance',
      icon: 'FileText',
      duration: 30,
      questions: [
        {
          id: 'iso1',
          question: isHi ? 'ISO का पूर्ण रूप क्या है?' : 'What is the full form of ISO?',
          options: isHi ? ['International Organization for Standardization', 'Indian Standard Organization', 'Internal Safety Office', 'International Sales Order'] : ['International Organization for Standardization', 'Indian Standard Organization', 'Internal Safety Office', 'International Sales Order'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'iso2',
          question: isHi ? 'ISO 9001 किससे संबंधित है?' : 'ISO 9001 is related to?',
          options: isHi ? ['गुणवत्ता प्रबंधन प्रणाली (QMS)', 'पर्यावरण', 'सुरक्षा', 'IT'] : ['Quality Management System (QMS)', 'Environment', 'Safety', 'IT'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'iso3',
          question: isHi ? 'ऑडिट (Audit) का मुख्य उद्देश्य क्या है?' : 'What is the main purpose of an Audit?',
          options: isHi ? ['मानकों के अनुपालन की जांच', 'गलतियां ढूंढकर सजा देना', 'पैसे गिनना', 'सफाई'] : ['Checking compliance with standards', 'Finding mistakes to punish', 'Counting money', 'Cleaning'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'iso4',
          question: isHi ? 'NC (Non-Conformance) क्या है?' : 'What is NC (Non-Conformance)?',
          options: isHi ? ['मानक का पालन न करना', 'नया नियम', 'सफलता', 'पुरस्कार'] : ['Failure to meet a standard', 'New rule', 'Success', 'Award'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'iso5',
          question: isHi ? 'CAPA का पूर्ण रूप क्या है?' : 'What is the full form of CAPA?',
          options: isHi ? ['Corrective and Preventive Action', 'Correct and Plan Action', 'Check and Post Action', 'Control and Plan Audit'] : ['Corrective and Preventive Action', 'Correct and Plan Action', 'Check and Post Action', 'Control and Plan Audit'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'iso6',
          question: isHi ? 'आंतरिक ऑडिट (Internal Audit) कौन करता है?' : 'Who performs an Internal Audit?',
          options: isHi ? ['संगठन के प्रशिक्षित कर्मचारी', 'बाहरी वेंडर', 'ग्राहक', 'सरकार'] : ['Trained employees of organization', 'External vendors', 'Customers', 'Government'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'iso7',
          question: isHi ? 'दस्तावेज़ नियंत्रण (Document Control) क्यों आवश्यक है?' : 'Why is Document Control necessary?',
          options: isHi ? ['सही संस्करण का उपयोग सुनिश्चित करने के लिए', 'कागज बचाने के लिए', 'सजावट के लिए', 'छुपाने के लिए'] : ['To ensure use of correct version', 'To save paper', 'For decoration', 'To hide'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'iso8',
          question: isHi ? 'प्रमाणीकरण (Certification) की वैधता आमतौर पर कितने समय की होती है?' : 'How long is a certification usually valid for?',
          options: isHi ? ['3 साल', '1 साल', '10 साल', 'हमेशा के लिए'] : ['3 Years', '1 Year', '10 Years', 'Forever'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'iso9',
          question: isHi ? 'जोखिम आधारित सोच (Risk-based thinking) किस ISO मानक का हिस्सा है?' : 'Risk-based thinking is part of which ISO standard?',
          options: isHi ? ['ISO 9001:2015', 'ISO 9001:2008', 'ISO 14001', 'ISO 45001'] : ['ISO 9001:2015', 'ISO 9001:2008', 'ISO 14001', 'ISO 45001'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'iso10',
          question: isHi ? 'कंप्लायंस (Compliance) का क्या अर्थ है?' : 'What does Compliance mean?',
          options: isHi ? ['नियमों और कानूनों का पालन', 'नियम तोड़ना', 'नया नियम बनाना', 'सफाई'] : ['Following rules and laws', 'Breaking rules', 'Making new rules', 'Cleaning'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'iso11',
          question: isHi ? 'ISO 27001 किससे संबंधित है?' : 'ISO 27001 is related to?',
          options: isHi ? ['सूचना सुरक्षा प्रबंधन प्रणाली (ISMS)', 'गुणवत्ता', 'पर्यावरण', 'खाद्य सुरक्षा'] : ['Information Security Management System (ISMS)', 'Quality', 'Environment', 'Food Safety'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'iso12',
          question: isHi ? 'ISO 22000 किससे संबंधित है?' : 'ISO 22000 is related to?',
          options: isHi ? ['खाद्य सुरक्षा प्रबंधन प्रणाली (FSMS)', 'गुणवत्ता', 'पर्यावरण', 'IT'] : ['Food Safety Management System (FSMS)', 'Quality', 'Environment', 'IT'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'iso13',
          question: isHi ? 'ISO 50001 किससे संबंधित है?' : 'ISO 50001 is related to?',
          options: isHi ? ['ऊर्जा प्रबंधन प्रणाली (EnMS)', 'गुणवत्ता', 'पर्यावरण', 'सुरक्षा'] : ['Energy Management System (EnMS)', 'Quality', 'Environment', 'Safety'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'iso14',
          question: isHi ? 'ISO में "PDCA" चक्र का क्या अर्थ है?' : 'What does "PDCA" cycle mean in ISO?',
          options: isHi ? ['Plan, Do, Check, Act', 'Plan, Design, Check, Aim', 'Process, Data, Check, Area', 'Plan, Do, Control, Act'] : ['Plan, Do, Check, Act', 'Plan, Design, Check, Aim', 'Process, Data, Check, Area', 'Plan, Do, Control, Act'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'iso15',
          question: isHi ? 'ISO में "Management Review Meeting" (MRM) का क्या उद्देश्य है?' : 'What is the purpose of "Management Review Meeting" (MRM) in ISO?',
          options: isHi ? ['प्रणाली की प्रभावशीलता की समीक्षा करना', 'कर्मचारियों की भर्ती', 'बिक्री रिपोर्ट', 'सफाई'] : ['Reviewing system effectiveness', 'Recruiting workers', 'Sales report', 'Cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'iso16',
          question: isHi ? 'ISO में "Context of the Organization" क्या है?' : 'What is "Context of the Organization" in ISO?',
          options: isHi ? ['आंतरिक और बाहरी मुद्दों को समझना', 'कंपनी का पता', 'मशीन की सूची', 'कर्मचारियों की संख्या'] : ['Understanding internal and external issues', 'Company address', 'Machine list', 'Number of workers'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'iso17',
          question: isHi ? 'ISO में "Interested Parties" कौन हैं?' : 'Who are "Interested Parties" in ISO?',
          options: isHi ? ['ग्राहक, कर्मचारी, आपूर्तिकर्ता, सरकार', 'केवल ग्राहक', 'केवल मालिक', 'केवल कर्मचारी'] : ['Customers, employees, suppliers, government', 'Only customers', 'Only owners', 'Only employees'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'iso18',
          question: isHi ? 'ISO में "Quality Policy" क्या है?' : 'What is a "Quality Policy" in ISO?',
          options: isHi ? ['गुणवत्ता के प्रति संगठन की प्रतिबद्धता', 'उत्पाद की कीमत', 'बिक्री योजना', 'सफाई के नियम'] : ['Organization\'s commitment to quality', 'Product price', 'Sales plan', 'Cleaning rules'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'iso19',
          question: isHi ? 'ISO में "Traceability" का क्या अर्थ है?' : 'What does "Traceability" mean in ISO?',
          options: isHi ? ['इतिहास या स्थान को ट्रैक करने की क्षमता', 'रास्ता खोजना', 'मशीन की मरम्मत', 'सफाई'] : ['Ability to track history or location', 'Finding path', 'Machine repair', 'Cleaning'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'iso20',
          question: isHi ? 'ISO में "Calibration" क्यों आवश्यक है?' : 'Why is "Calibration" necessary in ISO?',
          options: isHi ? ['मापन उपकरणों की सटीकता सुनिश्चित करने के लिए', 'मशीन को पेंट करने के लिए', 'पैसे बचाने के लिए', 'सफाई के लिए'] : ['To ensure accuracy of measuring instruments', 'To paint machine', 'To save money', 'For cleaning'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'iso21',
          question: isHi ? 'ISO में "Root Cause Analysis" (RCA) कब किया जाता है?' : 'When is "Root Cause Analysis" (RCA) done in ISO?',
          options: isHi ? ['NC मिलने पर', 'रोजाना', 'केवल ऑडिट के समय', 'कभी नहीं'] : ['When NC is found', 'Daily', 'Only during audit', 'Never'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'iso22',
          question: isHi ? 'ISO में "Continual Improvement" का क्या अर्थ है?' : 'What does "Continual Improvement" mean in ISO?',
          options: isHi ? ['प्रदर्शन को बेहतर बनाने के लिए आवर्ती गतिविधि', 'एक बार का सुधार', 'मशीन बदलना', 'कर्मचारी बदलना'] : ['Recurring activity to enhance performance', 'One-time improvement', 'Changing machine', 'Changing worker'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'iso23',
          question: isHi ? 'ISO में "Competence" का क्या अर्थ है?' : 'What does "Competence" mean in ISO?',
          options: isHi ? ['उचित शिक्षा, प्रशिक्षण और अनुभव', 'केवल डिग्री', 'केवल उम्र', 'केवल वेतन'] : ['Appropriate education, training, and experience', 'Only degree', 'Only age', 'Only salary'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'iso24',
          question: isHi ? 'ISO में "External Audit" कौन करता है?' : 'Who performs an "External Audit" in ISO?',
          options: isHi ? ['प्रमाणन निकाय (Certification Body)', 'कंपनी का मैनेजर', 'आपूर्तिकर्ता', 'सफाई कर्मचारी'] : ['Certification Body', 'Company manager', 'Supplier', 'Cleaning staff'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'iso25',
          question: isHi ? 'ISO में "Surveillance Audit" क्या है?' : 'What is a "Surveillance Audit" in ISO?',
          options: isHi ? ['प्रमाणन के बीच में होने वाला नियमित ऑडिट', 'पहला ऑडिट', 'अंतिम ऑडिट', 'गुप्त ऑडिट'] : ['Regular audit between certifications', 'First audit', 'Final audit', 'Secret audit'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'iso26',
          question: isHi ? 'ISO में "Scope" का क्या अर्थ है?' : 'What does "Scope" mean in ISO?',
          options: isHi ? ['प्रबंधन प्रणाली की सीमाएं और प्रयोज्यता', 'कंपनी का नाम', 'उत्पाद की सूची', 'कर्मचारियों की संख्या'] : ['Boundaries and applicability of management system', 'Company name', 'Product list', 'Number of workers'],
          correctAnswer: 0,
          level: 'intermediate'
        },
        {
          id: 'iso27',
          question: isHi ? 'ISO में "Documented Information" क्या है?' : 'What is "Documented Information" in ISO?',
          options: isHi ? ['दस्तावेज़ और रिकॉर्ड', 'केवल ईमेल', 'केवल मौखिक निर्देश', 'केवल पोस्टर'] : ['Documents and records', 'Only email', 'Only verbal instructions', 'Only posters'],
          correctAnswer: 0,
          level: 'beginner'
        },
        {
          id: 'iso28',
          question: isHi ? 'ISO में "Risk Register" क्या है?' : 'What is a "Risk Register" in ISO?',
          options: isHi ? ['पहचाने गए जोखिमों और उनके नियंत्रण की सूची', 'कर्मचारियों की उपस्थिति', 'मशीन की सूची', 'बिक्री रिपोर्ट'] : ['List of identified risks and their controls', 'Employee attendance', 'Machine list', 'Sales report'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'iso29',
          question: isHi ? 'ISO में "Objective" कैसा होना चाहिए (SMART)?' : 'How should an "Objective" be in ISO (SMART)?',
          options: isHi ? ['Specific, Measurable, Achievable, Relevant, Time-bound', 'Simple, Manageable, Aimed, Real, Tough', 'Small, Mean, Area, Right, True', 'Specific, Manageable, Active, Real, Time-bound'] : ['Specific, Measurable, Achievable, Relevant, Time-bound', 'Simple, Manageable, Aimed, Real, Tough', 'Small, Mean, Area, Right, True', 'Specific, Manageable, Active, Real, Time-bound'],
          correctAnswer: 0,
          level: 'advanced'
        },
        {
          id: 'iso30',
          question: isHi ? 'ISO में "Compliance Obligations" क्या हैं?' : 'What are "Compliance Obligations" in ISO?',
          options: isHi ? ['कानूनी और अन्य आवश्यकताएं', 'केवल कंपनी के नियम', 'केवल ग्राहक की मांग', 'केवल मैनेजर का आदेश'] : ['Legal and other requirements', 'Only company rules', 'Only customer demand', 'Only manager\'s order'],
          correctAnswer: 0,
          level: 'intermediate'
        }
      ]
    }
  ];
};

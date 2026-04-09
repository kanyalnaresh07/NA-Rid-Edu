import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Wrench, 
  Send, 
  Download, 
  FileText, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  Plus,
  Trash2,
  CheckCircle2,
  RefreshCw,
  FileCode
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    summary: string;
  };
  experience: Array<{
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  education: Array<{
    degree: string;
    school: string;
    location: string;
    graduationDate: string;
    gpa?: string;
  }>;
  skills: string[];
  projects: Array<{
    name: string;
    description: string;
    link?: string;
  }>;
}

const INITIAL_DATA: ResumeData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    summary: '',
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],
};

const STEPS = [
  { id: 'personal', title: 'Personal Info', icon: User },
  { id: 'summary', title: 'Professional Summary', icon: Sparkles },
  { id: 'experience', title: 'Experience', icon: Briefcase },
  { id: 'education', title: 'Education', icon: GraduationCap },
  { id: 'skills', title: 'Skills', icon: Wrench },
  { id: 'preview', title: 'Preview & Download', icon: FileText },
];

const ResumeBuilder: React.FC<{ lang: string }> = ({ lang }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<ResumeData>(INITIAL_DATA);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPolishing, setIsPolishing] = useState(false);
  const [aiMessage, setAiMessage] = useState('');
  const isHi = lang === 'hi';
  const resumeRef = useRef<HTMLDivElement>(null);

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  const GUIDE_MESSAGES: Record<number, string> = {
    0: isHi ? "नमस्ते! चलिए आपके रिज्यूमे की शुरुआत आपकी व्यक्तिगत जानकारी से करते हैं। अपना नाम, ईमेल और फोन नंबर भरें।" : "Hi! Let's start your resume with your personal details. Please fill in your name, email, and phone number.",
    1: isHi ? "शानदार! अब एक प्रभावशाली सारांश (Summary) लिखते हैं। आप कुछ शब्द लिखें, मैं उसे AI से पॉलिश कर दूँगा।" : "Great! Now let's write an impactful summary. Write a few words, and I'll polish it using AI.",
    2: isHi ? "अब आपके कार्य अनुभव की बारी है। अपनी पिछली नौकरियों और जिम्मेदारियों के बारे में बताएं।" : "Now for your work experience. Tell me about your previous roles and responsibilities.",
    3: isHi ? "अपनी शिक्षा के बारे में जानकारी दें। आपकी डिग्री और कॉलेज का नाम क्या है?" : "Provide details about your education. What is your degree and college name?",
    4: isHi ? "लगभग पूरा हो गया! अपने मुख्य कौशल (Skills) जोड़ें जो आपको दूसरों से अलग बनाते हैं।" : "Almost done! Add your key skills that make you stand out.",
    5: isHi ? "बधाई हो! आपका प्रीमियम रिज्यूमे तैयार है। आप इसे PDF या Word में डाउनलोड कर सकते हैं।" : "Congratulations! Your premium resume is ready. You can download it as PDF or Word.",
  };

  useEffect(() => {
    setAiMessage(GUIDE_MESSAGES[currentStep]);
  }, [currentStep, lang]);

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updatePersonalInfo = (field: string, value: string) => {
    setData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const addExperience = () => {
    setData(prev => ({
      ...prev,
      experience: [...prev.experience, { title: '', company: '', location: '', startDate: '', endDate: '', description: '' }]
    }));
  };

  const updateExperience = (index: number, field: string, value: string) => {
    const newExp = [...data.experience];
    newExp[index] = { ...newExp[index], [field]: value };
    setData(prev => ({ ...prev, experience: newExp }));
  };

  const removeExperience = (index: number) => {
    setData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const addEducation = () => {
    setData(prev => ({
      ...prev,
      education: [...prev.education, { degree: '', school: '', location: '', graduationDate: '' }]
    }));
  };

  const updateEducation = (index: number, field: string, value: string) => {
    const newEdu = [...data.education];
    newEdu[index] = { ...newEdu[index], [field]: value };
    setData(prev => ({ ...prev, education: newEdu }));
  };

  const removeEducation = (index: number) => {
    setData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const addSkill = (skill: string) => {
    if (skill && !data.skills.includes(skill)) {
      setData(prev => ({ ...prev, skills: [...prev.skills, skill] }));
    }
  };

  const removeSkill = (skill: string) => {
    setData(prev => ({ ...prev, skills: prev.skills.filter(s => s !== skill) }));
  };

  const polishSummary = async () => {
    if (!data.personalInfo.fullName) return;
    setIsPolishing(true);
    try {
      const prompt = `Write a professional resume summary for ${data.personalInfo.fullName}. 
      Current summary: ${data.personalInfo.summary}. 
      Experience: ${JSON.stringify(data.experience)}. 
      Skills: ${data.skills.join(', ')}.
      Make it impactful, professional, and concise (max 3-4 sentences). 
      Language: ${isHi ? 'Hindi' : 'English'}.
      Return ONLY the summary text.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite-preview",
        contents: prompt,
      });

      if (response.text) {
        updatePersonalInfo('summary', response.text.trim());
      }
    } catch (error) {
      console.error("AI Error:", error);
    } finally {
      setIsPolishing(false);
    }
  };

  const polishExperience = async (index: number) => {
    const exp = data.experience[index];
    if (!exp.description) return;
    setIsPolishing(true);
    try {
      const prompt = `Polish these resume bullet points for the role of ${exp.title} at ${exp.company}.
      Current points: ${exp.description}.
      Make them action-oriented using strong verbs and quantify results if possible.
      Language: ${isHi ? 'Hindi' : 'English'}.
      Return ONLY the polished bullet points.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite-preview",
        contents: prompt,
      });

      if (response.text) {
        updateExperience(index, 'description', response.text.trim());
      }
    } catch (error) {
      console.error("AI Error:", error);
    } finally {
      setIsPolishing(false);
    }
  };

  const downloadPDF = async () => {
    if (!resumeRef.current) return;
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${data.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.pdf`);
    } catch (error) {
      console.error("PDF Generation Error:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadWord = async () => {
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            text: data.personalInfo.fullName,
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({
            text: `${data.personalInfo.email} | ${data.personalInfo.phone} | ${data.personalInfo.location}`,
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({ text: "", spacing: { before: 200 } }),
          new Paragraph({
            text: isHi ? "सारांश" : "SUMMARY",
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({ text: data.personalInfo.summary }),
          new Paragraph({ text: "", spacing: { before: 200 } }),
          new Paragraph({
            text: isHi ? "अनुभव" : "EXPERIENCE",
            heading: HeadingLevel.HEADING_2,
          }),
          ...data.experience.flatMap(exp => [
            new Paragraph({
              children: [
                new TextRun({ text: exp.title, bold: true }),
                new TextRun({ text: ` | ${exp.company} (${exp.startDate} - ${exp.endDate})` }),
              ],
            }),
            new Paragraph({ text: exp.description }),
          ]),
          new Paragraph({ text: "", spacing: { before: 200 } }),
          new Paragraph({
            text: isHi ? "शिक्षा" : "EDUCATION",
            heading: HeadingLevel.HEADING_2,
          }),
          ...data.education.map(edu => 
            new Paragraph({
              children: [
                new TextRun({ text: edu.degree, bold: true }),
                new TextRun({ text: ` | ${edu.school} (${edu.graduationDate})` }),
              ],
            })
          ),
          new Paragraph({ text: "", spacing: { before: 200 } }),
          new Paragraph({
            text: isHi ? "कौशल" : "SKILLS",
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({ text: data.skills.join(', ') }),
        ],
      }],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `${data.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.docx`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
              AI <span className="text-orange-500">Resume</span> Builder
            </h1>
            <p className="text-slate-400 font-medium mt-2">
              {isHi ? "AI की मदद से अपना प्रीमियम रिज्यूमे बनाएं" : "Craft your premium resume with the power of AI"}
            </p>
          </div>
          <div className="flex gap-4">
            {currentStep === STEPS.length - 1 && (
              <>
                <button 
                  onClick={downloadPDF}
                  disabled={isGenerating}
                  className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-black uppercase tracking-widest flex items-center gap-2 transition-all disabled:opacity-50"
                >
                  {isGenerating ? <RefreshCw className="animate-spin" size={20} /> : <Download size={20} />}
                  PDF
                </button>
                <button 
                  onClick={downloadWord}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-black uppercase tracking-widest flex items-center gap-2 transition-all"
                >
                  <FileCode size={20} />
                  Word
                </button>
              </>
            )}
          </div>
        </div>

        {/* Stepper */}
        <div className="flex justify-between mb-12 overflow-x-auto pb-4 gap-4 scrollbar-hide">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = currentStep === idx;
            const isCompleted = currentStep > idx;
            return (
              <div key={step.id} className="flex flex-col items-center gap-2 min-w-[100px]">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  isActive ? 'bg-orange-500 text-white scale-110 shadow-lg shadow-orange-500/20' : 
                  isCompleted ? 'bg-emerald-500 text-white' : 'bg-white/5 text-slate-500'
                }`}>
                  {isCompleted ? <CheckCircle2 size={24} /> : <Icon size={24} />}
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest text-center ${isActive ? 'text-orange-500' : 'text-slate-500'}`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Area */}
          <div className="bg-slate-900/50 border border-white/5 rounded-[40px] p-8 md:p-12">
            {/* AI Message Bubble */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={aiMessage}
              className="mb-8 p-6 bg-orange-500/10 border border-orange-500/20 rounded-3xl flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                <Sparkles size={20} className="text-white" />
              </div>
              <p className="text-sm font-medium text-orange-100 leading-relaxed">
                {aiMessage}
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                {currentStep === 0 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-tight italic flex items-center gap-3">
                      <User className="text-orange-500" /> {isHi ? "व्यक्तिगत जानकारी" : "Personal Information"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">{isHi ? "पूरा नाम" : "Full Name"}</label>
                        <input 
                          type="text" 
                          value={data.personalInfo.fullName}
                          onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-orange-500 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">{isHi ? "ईमेल" : "Email"}</label>
                        <input 
                          type="email" 
                          value={data.personalInfo.email}
                          onChange={(e) => updatePersonalInfo('email', e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-orange-500 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">{isHi ? "फोन" : "Phone"}</label>
                        <input 
                          type="tel" 
                          value={data.personalInfo.phone}
                          onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-orange-500 outline-none transition-all"
                          placeholder="+91 9876543210"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">{isHi ? "स्थान" : "Location"}</label>
                        <input 
                          type="text" 
                          value={data.personalInfo.location}
                          onChange={(e) => updatePersonalInfo('location', e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-orange-500 outline-none transition-all"
                          placeholder="Delhi, India"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-black uppercase tracking-tight italic flex items-center gap-3">
                        <Sparkles className="text-orange-500" /> {isHi ? "पेशेवर सारांश" : "Professional Summary"}
                      </h2>
                      <button 
                        onClick={polishSummary}
                        disabled={isPolishing || !data.personalInfo.summary}
                        className="px-4 py-2 bg-white/5 hover:bg-orange-500/20 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all disabled:opacity-50"
                      >
                        {isPolishing ? <RefreshCw className="animate-spin" size={14} /> : <Sparkles size={14} />}
                        {isHi ? "AI से पॉलिश करें" : "Polish with AI"}
                      </button>
                    </div>
                    <textarea 
                      value={data.personalInfo.summary}
                      onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                      className="w-full h-48 bg-white/5 border border-white/10 rounded-3xl px-6 py-4 focus:border-orange-500 outline-none transition-all resize-none"
                      placeholder={isHi ? "अपने बारे में कुछ लिखें..." : "Write a brief summary about your professional background..."}
                    />
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-black uppercase tracking-tight italic flex items-center gap-3">
                        <Briefcase className="text-orange-500" /> {isHi ? "कार्य अनुभव" : "Work Experience"}
                      </h2>
                      <button 
                        onClick={addExperience}
                        className="p-2 bg-orange-500 rounded-xl hover:scale-110 transition-transform"
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                    <div className="space-y-8">
                      {data.experience.map((exp, idx) => (
                        <div key={idx} className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-4 relative group">
                          <button 
                            onClick={() => removeExperience(idx)}
                            className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash2 size={14} />
                          </button>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input 
                              placeholder="Job Title"
                              value={exp.title}
                              onChange={(e) => updateExperience(idx, 'title', e.target.value)}
                              className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                            />
                            <input 
                              placeholder="Company"
                              value={exp.company}
                              onChange={(e) => updateExperience(idx, 'company', e.target.value)}
                              className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                            />
                            <input 
                              placeholder="Start Date"
                              value={exp.startDate}
                              onChange={(e) => updateExperience(idx, 'startDate', e.target.value)}
                              className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                            />
                            <input 
                              placeholder="End Date"
                              value={exp.endDate}
                              onChange={(e) => updateExperience(idx, 'endDate', e.target.value)}
                              className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                            />
                          </div>
                          <div className="relative">
                            <textarea 
                              placeholder="Description / Responsibilities"
                              value={exp.description}
                              onChange={(e) => updateExperience(idx, 'description', e.target.value)}
                              className="w-full h-32 bg-slate-950 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 resize-none"
                            />
                            <button 
                              onClick={() => polishExperience(idx)}
                              disabled={isPolishing || !exp.description}
                              className="absolute bottom-4 right-4 p-2 bg-white/10 hover:bg-orange-500 rounded-lg transition-all disabled:opacity-50"
                              title="Polish with AI"
                            >
                              <Sparkles size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-black uppercase tracking-tight italic flex items-center gap-3">
                        <GraduationCap className="text-orange-500" /> {isHi ? "शिक्षा" : "Education"}
                      </h2>
                      <button 
                        onClick={addEducation}
                        className="p-2 bg-orange-500 rounded-xl hover:scale-110 transition-transform"
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                    <div className="space-y-6">
                      {data.education.map((edu, idx) => (
                        <div key={idx} className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-4 relative group">
                          <button 
                            onClick={() => removeEducation(idx)}
                            className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash2 size={14} />
                          </button>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input 
                              placeholder="Degree"
                              value={edu.degree}
                              onChange={(e) => updateEducation(idx, 'degree', e.target.value)}
                              className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                            />
                            <input 
                              placeholder="School/University"
                              value={edu.school}
                              onChange={(e) => updateEducation(idx, 'school', e.target.value)}
                              className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                            />
                            <input 
                              placeholder="Graduation Date"
                              value={edu.graduationDate}
                              onChange={(e) => updateEducation(idx, 'graduationDate', e.target.value)}
                              className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                            />
                            <input 
                              placeholder="Location"
                              value={edu.location}
                              onChange={(e) => updateEducation(idx, 'location', e.target.value)}
                              className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-tight italic flex items-center gap-3">
                      <Wrench className="text-orange-500" /> {isHi ? "कौशल" : "Skills"}
                    </h2>
                    <div className="flex gap-2">
                      <input 
                        id="skill-input"
                        type="text" 
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            addSkill((e.target as HTMLInputElement).value);
                            (e.target as HTMLInputElement).value = '';
                          }
                        }}
                        className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-orange-500 outline-none transition-all"
                        placeholder={isHi ? "कौशल जोड़ें (Enter दबाएं)" : "Add a skill (Press Enter)"}
                      />
                      <button 
                        onClick={() => {
                          const input = document.getElementById('skill-input') as HTMLInputElement;
                          addSkill(input.value);
                          input.value = '';
                        }}
                        className="px-6 bg-orange-500 rounded-2xl font-black"
                      >
                        <Plus size={24} />
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {data.skills.map((skill, idx) => (
                        <div key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl flex items-center gap-2 group">
                          <span className="text-sm font-medium">{skill}</span>
                          <button onClick={() => removeSkill(skill)} className="text-slate-500 hover:text-red-500 transition-colors">
                            <Trash2 size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="space-y-6 text-center py-12">
                    <div className="w-24 h-24 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={48} className="text-orange-500" />
                    </div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter italic">
                      {isHi ? "आपका रिज्यूमे तैयार है!" : "Your Resume is Ready!"}
                    </h2>
                    <p className="text-slate-400 max-w-sm mx-auto">
                      {isHi 
                        ? "आप दाईं ओर प्रीव्यू देख सकते हैं और ऊपर दिए गए बटनों से डाउनलोड कर सकते हैं।" 
                        : "You can preview your resume on the right and download it using the buttons above."}
                    </p>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8 border-t border-white/5">
                  <button 
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-2xl font-black uppercase tracking-widest flex items-center gap-2 transition-all disabled:opacity-50"
                  >
                    <ChevronLeft size={20} />
                    {isHi ? "पीछे" : "Back"}
                  </button>
                  <button 
                    onClick={handleNext}
                    disabled={currentStep === STEPS.length - 1}
                    className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-2xl font-black uppercase tracking-widest flex items-center gap-2 transition-all disabled:opacity-50"
                  >
                    {isHi ? "आगे" : "Next"}
                    <ChevronRight size={20} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Preview Area */}
          <div className="mt-12 lg:mt-0 overflow-x-auto pb-8 scrollbar-hide">
            <div className="sticky top-8 min-w-[800px] lg:min-w-0">
              <div className="flex items-center gap-3 mb-4 text-slate-500">
                <FileText size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">{isHi ? "लाइव प्रीव्यू" : "Live Preview"}</span>
              </div>
              <div 
                ref={resumeRef}
                className="w-full max-w-[800px] mx-auto aspect-[1/1.414] bg-white text-slate-900 rounded-lg shadow-2xl overflow-hidden p-8 md:p-12 flex flex-col gap-6"
                style={{ fontSize: '12px' }}
              >
                {/* Resume Header */}
                <div className="text-center space-y-2 border-b-2 border-slate-900 pb-6 shrink-0">
                  <h1 className="text-3xl font-bold uppercase tracking-tight">{data.personalInfo.fullName || 'YOUR NAME'}</h1>
                  <div className="text-[10px] font-medium text-slate-600 flex flex-wrap justify-center gap-2 md:gap-4">
                    <span>{data.personalInfo.email || 'email@example.com'}</span>
                    <span className="hidden md:inline">|</span>
                    <span>{data.personalInfo.phone || '+91 0000000000'}</span>
                    <span className="hidden md:inline">|</span>
                    <span>{data.personalInfo.location || 'City, Country'}</span>
                  </div>
                </div>

                {/* Summary */}
                <div className="space-y-2">
                  <h2 className="text-sm font-bold uppercase tracking-wider border-b border-slate-200 pb-1">Summary</h2>
                  <p className="text-slate-700 leading-relaxed text-justify">
                    {data.personalInfo.summary || 'A brief professional summary will appear here...'}
                  </p>
                </div>

                {/* Experience */}
                <div className="space-y-4">
                  <h2 className="text-sm font-bold uppercase tracking-wider border-b border-slate-200 pb-1">Experience</h2>
                  {data.experience.length > 0 ? data.experience.map((exp, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between font-bold">
                        <span>{exp.title}</span>
                        <span>{exp.startDate} - {exp.endDate}</span>
                      </div>
                      <div className="italic text-slate-600">{exp.company}</div>
                      <p className="text-slate-700 whitespace-pre-line">{exp.description}</p>
                    </div>
                  )) : (
                    <p className="text-slate-400 italic">Add your work experience...</p>
                  )}
                </div>

                {/* Education */}
                <div className="space-y-4">
                  <h2 className="text-sm font-bold uppercase tracking-wider border-b border-slate-200 pb-1">Education</h2>
                  {data.education.length > 0 ? data.education.map((edu, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between font-bold">
                        <span>{edu.degree}</span>
                        <span>{edu.graduationDate}</span>
                      </div>
                      <div className="text-slate-700">{edu.school}</div>
                    </div>
                  )) : (
                    <p className="text-slate-400 italic">Add your education details...</p>
                  )}
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <h2 className="text-sm font-bold uppercase tracking-wider border-b border-slate-200 pb-1">Skills</h2>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {data.skills.length > 0 ? data.skills.map((skill, i) => (
                      <span key={i} className="text-slate-700">• {skill}</span>
                    )) : (
                      <p className="text-slate-400 italic">Add your skills...</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;

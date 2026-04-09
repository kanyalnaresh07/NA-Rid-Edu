import { GoogleGenAI, Type } from "@google/genai";
import { Language } from "../types";

const apiKey = process.env.GEMINI_API_KEY;

export const searchWithAI = async (query: string, lang: Language = 'en') => {
  if (!apiKey) {
    console.error("GEMINI_API_KEY is missing from environment variables.");
    throw new Error("Gemini API key is not configured. Please set GEMINI_API_KEY in your environment.");
  }
  const ai = new GoogleGenAI({ apiKey });

  const systemInstruction = lang === 'hi' 
    ? "आप एक औद्योगिक शिक्षा विशेषज्ञ हैं। उपयोगकर्ता के औद्योगिक शब्द (जैसे 5S, Kaizen, Lean Manufacturing) के बारे में संक्षिप्त और स्पष्ट जानकारी दें। उत्तर हिंदी में होना चाहिए और इसमें परिभाषा, महत्व और उदाहरण शामिल होने चाहिए।"
    : "You are an industrial education expert. Provide concise and clear information about the industrial term (e.g., 5S, Kaizen, Lean Manufacturing) requested by the user. The response should include a definition, importance, and an example.";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: query }] }],
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.95,
        topK: 64,
      },
    });

    return response.text;
  } catch (error: any) {
    console.error("AI Search Error Details:", error);
    if (error.message?.includes("API_KEY_INVALID")) {
      throw new Error("Invalid API Key. Please check your GEMINI_API_KEY.");
    }
    throw error;
  }
};

export const generateQuiz = async (topic: string, difficulty: string, count: number, lang: Language = 'en', recentQuestions: string[] = []) => {
  if (!apiKey) {
    console.error("GEMINI_API_KEY is missing from environment variables.");
    throw new Error("Gemini API key is not configured.");
  }
  const ai = new GoogleGenAI({ apiKey });
  
  const languagePrompt = lang === 'hi' ? 'in Hindi language' : 'in English language';

  let avoidPrompt = "";
  if (recentQuestions && recentQuestions.length > 0) {
    // Limit to last 50 questions to avoid token limits
    const recentSample = recentQuestions.slice(-50);
    avoidPrompt = `\nIMPORTANT: Do NOT generate any questions similar to the following recently asked questions to ensure variety:\n${recentSample.map(q => `- ${q}`).join('\n')}`;
  }

  let topicContext = `specifically in the context of the electronics manufacturing industry.`;
  if (topic.includes("Production Operations")) {
    topicContext = `specifically in the context of the electronics manufacturing industry, focusing on a combination of SMT (Surface Mount Technology), MI (Manual Insertion), AI (Auto Insertion), and FATP (Final Assembly, Test, and Pack-out) processes.`;
  }

  const promptText = `Generate a multiple-choice quiz about "${topic}" ${topicContext} The difficulty level should be ${difficulty}. Generate exactly ${count} questions. The response must be ${languagePrompt}.
  
For each question, provide a detailed 'explanation' that describes exactly WHY the correct answer is correct, WHERE this concept is used in electronics manufacturing, and WHAT it means in practical terms. Make the explanation highly educational.
${avoidPrompt}`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: promptText }] }],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  text: { type: Type.STRING },
                  options: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  },
                  correctAnswerIndex: { type: Type.INTEGER },
                  explanation: { 
                    type: Type.OBJECT, 
                    description: "Detailed explanation broken down into parts",
                    properties: {
                      general: { type: Type.STRING, description: "General context or introduction" },
                      why: { type: Type.STRING, description: "Why the correct answer is correct" },
                      where: { type: Type.STRING, description: "Where this concept is used in electronics manufacturing" },
                      what: { type: Type.STRING, description: "What it means in practical terms" }
                    },
                    required: ["general", "why", "where", "what"]
                  }
                },
                required: ["id", "text", "options", "correctAnswerIndex", "explanation"]
              }
            }
          },
          required: ["questions"]
        }
      }
    });

    const result = JSON.parse(response.text || "{}");
    return result.questions || [];
  } catch (error: any) {
    console.error("Error generating quiz:", error);
    if (error.message?.includes("API_KEY_INVALID") || error.message?.includes("API key not valid")) {
      throw new Error("Invalid API Key. Please check your GEMINI_API_KEY.");
    }
    throw error;
  }
};

export const getTermDefinition = async (term: string, lang: Language = 'en') => {
  if (!apiKey) {
    console.error("GEMINI_API_KEY is missing from environment variables.");
    throw new Error("Gemini API key is not configured. Please set GEMINI_API_KEY in your environment.");
  }
  const ai = new GoogleGenAI({ apiKey });
  
  const languagePrompt = lang === 'hi' ? 'in Hindi language' : 'in English language';

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: `Explain the technical term "${term}" ${languagePrompt} specifically in the context of a Manufacturing hub and industrial production. Focus on efficiency, quality control, or process optimization where relevant. Keep it professional and concise, like a glossary entry. Return the response in ${lang === 'hi' ? 'Hindi' : 'English'}.` }] }],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            definition: { type: Type.STRING },
            category: { type: Type.STRING },
            types: { type: Type.STRING, description: "Common types or categories of this term" },
            tools: { type: Type.STRING, description: "Common tools or equipment associated with this" }
          },
          required: ["title", "definition", "category", "types", "tools"]
        }
      }
    });

    const result = JSON.parse(response.text || "{}");
    return result;
  } catch (error: any) {
    console.error("Error fetching definition:", error);
    if (error.message?.includes("API_KEY_INVALID")) {
      throw new Error("Invalid API Key. Please check your GEMINI_API_KEY.");
    }
    throw error;
  }
};

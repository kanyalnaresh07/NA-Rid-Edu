
import { GoogleGenAI, Type } from "@google/genai";
import { Language } from "../types";

export const getTermDefinition = async (term: string, lang: Language = 'en') => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const languagePrompt = lang === 'hi' ? 'in Hindi language' : 'in English language';

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Explain the technical term "${term}" ${languagePrompt} specifically in the context of a Manufacturing hub and industrial production. Focus on efficiency, quality control, or process optimization where relevant. Keep it professional and concise, like a glossary entry. Return the response in ${lang === 'hi' ? 'Hindi' : 'English'}.`,
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
  } catch (error) {
    console.error("Error fetching definition:", error);
    throw error;
  }
};

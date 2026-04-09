import { GoogleGenAI, Type } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function run() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: [{ parts: [{ text: "Generate a quiz" }] }],
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
    console.log("Success:", response.text);
  } catch (e: any) {
    console.error("Error:", e.message);
  }
}
run();

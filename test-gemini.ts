import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function run() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: "Hello" }] }]
    });
    console.log("Success:", response.text);
  } catch (e) {
    console.error("Error:", e);
  }
}
run();

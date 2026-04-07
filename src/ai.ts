import { GoogleGenAI } from "@google/genai";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({
  path: path.resolve(__dirname, "../.env")
});

// client reads GEMINI_API_KEY automatically
const ai = new GoogleGenAI({});

export async function askAI(prompt: string) {

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt
  });

  return response.text;
}
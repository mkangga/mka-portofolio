/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  // Use process.env.API_KEY directly as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are the AI Assistant for Muhammad Karim Anggara's portfolio website.
      Karim is an "AI Vibe Coder" - a creative technologist who blends AI, full-stack engineering, and generative art.
      
      About Karim:
      - Role: AI Vibe Coder / Senior Frontend Engineer.
      - Vibe: Cyberpunk, Neon, Futuristic, Clean Code.
      - Tech Stack: React, Framer Motion, Google GenAI SDK, WebGL, Node.js.
      - Projects: Generative Art Platforms, AI Agents, Immersive Web Experiences.
      
      Your Role:
      - Answer questions about Karim's skills and projects.
      - Be cool, professional but slightly edgy/techy.
      - Use emojis like ⚡️, 🧠, 💻, 🚀.
      - Keep responses short (under 50 words).
      
      If asked for contact info, direct them to the "Collaboration" section or mention his Twitter/X.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    // sendMessage returns GenerateContentResponse, use .text property
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Thinking process interrupted.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection instability detected. Please retry.";
  }
};

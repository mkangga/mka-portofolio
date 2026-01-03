/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  // Cek apakah API_KEY tersedia untuk mencegah crash di browser
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
  
  if (!apiKey) {
    console.warn("API_KEY tidak ditemukan di environment variables.");
  }

  const ai = new GoogleGenAI({ apiKey: apiKey || 'temporary_key' });
  
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are the AI Assistant for Muhammad Karim Anggara's portfolio.
      Karim is an "AI Vibe Coder" - a creative technologist.
      
      About Karim:
      - Role: AI Vibe Coder / Senior Frontend Engineer.
      - Vibe: Cyberpunk, Neon, Futuristic.
      - Tech Stack: React, Framer Motion, Google GenAI SDK.
      
      Your Role:
      - Answer questions about Karim's skills and projects.
      - Be cool, professional but edgy.
      - Use emojis like ⚡️, 🧠, 💻, 🚀.
      - Keep responses short (under 50 words).`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Thinking process interrupted.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection instability detected. Please ensure API_KEY is set in Cloudflare Settings.";
  }
};
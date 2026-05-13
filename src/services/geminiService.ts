import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the FoodSpot Customer Support Assistant. FoodSpot is "The Shopify of Food," a platform that helps restaurant owners digitize their business quickly.

Key Information about FoodSpot:
- Value Proposition: Launch a delivery/booking app in minutes without coding.
- Pricing: 
  - Free Trial: 14 days, includes all full version features, no credit card required.
  - Pro Plan: $25.99/month. Includes: 5 video games for customers, UGC marketing camera function, Event system, Digital menu, Delivery system, Inventory management, Expenses control, Staff backend, and Mercado Pago integration.
- Contact: WhatsApp Support at +54 351 212 2600.
- Location: Based in Córdoba Capital, Argentina.
- Product Name: Foodspot (formerly FoodSpot). AI is Foodspot AI.
- Company: Foodspot mobile.
- Core Features:
  - Quick Launch: No-code app creation.
  - Visual Menu: Support for high-quality food photography.
  - Mobile First: Optimized for smartphone users.
  - Integrated Payments: Accepts all cards and digital wallets.
  - Marketing with Photos: Auto-prompts for photo sharing.
  - AI Assistant: Generates promos, writes descriptions, and predicts sales.
  - Premium Templates: Professionally designed menu templates.

Instructions:
- Be helpful, professional, and optimistic.
- Support English, Spanish, and Portuguese. Detect the user's language and respond in the same language.
- If you don't know the answer, politely direct them to "WhatsApp Support" or "Contacto" in the footer.
- Keep responses concise and formatted with Markdown where appropriate.
`;

export class GeminiService {
  private ai: any;

  private getAI() {
    if (!this.ai) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === 'undefined' || apiKey === '') {
        console.warn("GEMINI_API_KEY is not set. Chatbot will not function correctly. Please set it in your environment variables.");
        return null;
      }
      this.ai = new GoogleGenAI({ apiKey: apiKey });
    }
    return this.ai;
  }

  async getChatResponse(userMessage: string, history: { role: string; parts: string }[] = []) {
    try {
      const ai = this.getAI();
      if (!ai) {
        return "Lo siento, el asistente de IA no está configurado correctamente (falta la clave API en el servidor). / I'm sorry, the AI assistant is not configured correctly (missing API key).";
      }

      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
        history: history.map(h => ({
          role: h.role,
          parts: [{ text: h.parts }]
        }))
      });

      const result = await chat.sendMessage({ message: userMessage });
      return result.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Lo siento, hubo un error al procesar tu solicitud. Por favor, intenta de nuevo más tarde. / Sorry, there was an error processing your request. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();

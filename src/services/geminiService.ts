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
  async getChatResponse(userMessage: string, history: { role: string; parts: string }[] = []) {
    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY;
      if (!apiKey || apiKey === 'undefined' || apiKey === '') {
        console.warn("VITE_GROQ_API_KEY is not set.");
        return "Lo siento, el asistente de IA no está configurado correctamente (falta la clave API). / I'm sorry, the AI assistant is not configured correctly (missing API key).";
      }

      const messages = [
        { role: "system", content: SYSTEM_INSTRUCTION },
        ...history.map(h => ({
          role: h.role === "model" ? "assistant" : "user",
          content: h.parts,
        })),
        { role: "user", content: userMessage },
      ];

      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages,
          temperature: 0.7,
          max_tokens: 1024,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Groq API HTTP error:", res.status, errText);
        return "Lo siento, hubo un error al procesar tu solicitud. / Sorry, there was an error processing your request.";
      }

      const data = await res.json();
      return data.choices?.[0]?.message?.content || "No response received";
    } catch (error) {
      console.error("Groq API Error:", error);
      return "Lo siento, hubo un error al procesar tu solicitud. Por favor, intenta de nuevo más tarde. / Sorry, there was an error processing your request. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();

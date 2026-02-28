const Groq = require("groq-sdk");
const buildPrompt = require("../utils/promptBuilder");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function generateProposal(data) {
  const prompt = buildPrompt(data);

  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a B2B sustainability strategy expert. Always return STRICT JSON only."
      },
      {
        role: "user",
        content: prompt
      }
    ],
    model: "llama-3.1-8b-instant",  // fast & stable model
    temperature: 0.7,
  });

  return completion.choices[0].message.content;
}

module.exports = { generateProposal };
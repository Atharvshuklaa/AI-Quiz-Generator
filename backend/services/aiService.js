const axios = require("axios");

async function generateQuiz(text) {
  const prompt = `
You are an AI Quiz Generator.

Generate exactly 10 multiple-choice questions from the study material below.

Rules:
- Use ONLY the information given.
- Each question must have exactly 4 options.
- Include the correct answer.
- Return ONLY a valid JSON array.

Do not include:
- explanations
- markdown
- comments
- notes
- code fences
- additional text

The first character of your response MUST be [
The last character MUST be ]
- Do NOT include markdown or explanations.

Return in this format:

[
  {
    "question": "...",
    "options": [
      "...",
      "...",
      "...",
      "..."
    ],
    "answer": "..."
  }
]

Study Material:
${text}
`;

  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "openrouter/free",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  console.log("========== FULL OPENROUTER RESPONSE ==========");
  console.log(JSON.stringify(response.data, null, 2));
  console.log("=============================================");

  return response.data.choices[0].message.content;
}

module.exports = generateQuiz;
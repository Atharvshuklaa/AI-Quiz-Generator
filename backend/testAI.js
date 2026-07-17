require("dotenv").config();

const generateQuiz = require("./services/aiService");

async function test() {
  try {
    const notes = `
Artificial Intelligence is transforming education.
Machine learning helps computers learn from data.
`;

    const quiz = await generateQuiz(notes);

    console.log(quiz);
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
}

test();
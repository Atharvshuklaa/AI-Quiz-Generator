const path = require("path");

const Note = require("../models/Note");

const extractTXT = require("../extractors/txtExtractor");
const extractPDF = require("../extractors/pdfExtractor");
const extractDOCX = require("../extractors/docxExtractor");

const generateQuiz = require("../services/aiService");

const uploadFile = async (req, res) => {
  try {
    // Check if a file was uploaded
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded.",
      });
    }

    const filePath = req.file.path;
    const extension = path.extname(req.file.originalname).toLowerCase();

    let content = "";

    if (extension === ".txt") {
      content = extractTXT(filePath);
      console.log("========= EXTRACTED TEXT =========");
      console.log(content);
      console.log("=================================");
    } else if (extension === ".pdf") {
      content = await extractPDF(filePath);
    } else if (extension === ".docx") {
      content = await extractDOCX(filePath);
    } else {
      return res.status(400).json({
        message: "Unsupported file type.",
      });
    }

    if (!content || content.trim() === "") {
      return res.status(400).json({
        message: "The uploaded file contains no readable text.",
      });
    }

    // Generate quiz using AI
    // Generate quiz using AI
    const quiz = await generateQuiz(content);

    console.log("========== AI RESPONSE START ==========");
    console.log(quiz);
    console.log("========== AI RESPONSE END ==========");

    const quizData = JSON.parse(quiz);
    // Save note and quiz to MongoDB
    const note = new Note({
      filename: req.file.originalname,
      fileType: req.file.mimetype,
      content: content,
      quiz: quizData,
    });

    await note.save();

    // Send response
    res.status(200).json({
      message: "Quiz generated successfully!",
      filename: req.file.filename,
      originalName: req.file.originalname,
      totalQuestions: quizData.length,
      quiz: quizData,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
};

module.exports = {
  uploadFile,
};

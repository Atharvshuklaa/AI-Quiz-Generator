const path = require("path");

const Note = require("../models/Note");

const extractTXT = require("../extractors/txtExtractor");

const extractPDF = require("../extractors/pdfExtractor");

const extractDOCX = require("../extractors/docxExtractor");

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
    const note = new Note({
      filename: req.file.originalname,
      fileType: req.file.mimetype,
      content: content,
    });
    //saving new note to the database
    await note.save();

    // Return success for now
    res.status(200).json({
      message: "File uploaded successfully!",
      filename: req.file.filename,
      originalName: req.file.originalname,
      extractedText: content,
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

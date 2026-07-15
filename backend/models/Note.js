console.log("✅ Note model loaded");

const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  fileType: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
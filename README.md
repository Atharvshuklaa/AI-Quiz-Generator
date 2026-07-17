# 📚 AI Quiz Generator

An AI-powered web application that converts study materials into interactive multiple-choice quizzes. Users can upload notes (TXT, PDF, or DOCX), and the application automatically extracts the content, generates quiz questions using AI, and provides an interactive testing experience.

---

## 🚀 Features

- 📂 Upload study materials
  - TXT
  - PDF
  - DOCX

- 📝 Automatic text extraction

- 🤖 AI-powered quiz generation

- ✅ Generates multiple-choice questions (MCQs)

- 💾 Stores uploaded notes and generated quizzes in MongoDB

- 📊 Displays quiz with correct answers

- 🎯 Calculates quiz score

---

# 🛠️ Tech Stack

## Frontend
- React.js
- HTML5
- CSS3
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose

## AI
- OpenRouter API
- LLM (Free Model)

## File Handling
- Multer
- pdf-parse
- mammoth
- fs

---

# 📁 Project Structure

AI-Quiz-Generator/

```
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── extractors/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/Atharvshuklaa/AI-Quiz-Generator.git
```

---

## 2. Backend Setup

```bash
cd backend

npm install
```

---

## 3. Frontend Setup

```bash
cd frontend

npm install
```

---

## 4. Create Environment Variables

Create a `.env` file inside the backend folder.

Example:

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

OPENROUTER_API_KEY=YOUR_OPENROUTER_API_KEY
```

---

## 5. Start Backend

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## 6. Start Frontend

```bash
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

# 📤 API Endpoints

## Upload Notes

**POST**

```
/api/upload
```

### Request

Form Data

| Key | Type |
|------|------|
| file | File |

Supported formats:

- TXT
- PDF
- DOCX

---

### Successful Response

```json
{
  "message": "Quiz generated successfully!",
  "filename": "...",
  "originalName": "...",
  "quiz": [
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
}
```

---

# 🧠 AI Workflow

```
Upload File
      │
      ▼
Extract Text
      │
      ▼
Generate AI Prompt
      │
      ▼
OpenRouter API
      │
      ▼
Receive Quiz JSON
      │
      ▼
Store in MongoDB
      │
      ▼
Return Quiz to User
```

---

# 🗃️ Database Schema

## Note

```javascript
{
    filename: String,
    fileType: String,
    content: String,
    quiz: Array,
    createdAt: Date
}
```

---

# 📌 Future Enhancements

- User Authentication
- Quiz History
- Leaderboard
- Difficulty Levels
- Timed Quizzes
- Flashcards
- Subject Categorization
- AI Explanations for Answers
- Export Quiz as PDF
- Dashboard with Analytics

---

# 👥 Team Members

### Atharv Shukla
- Frontend Development
- UI/UX
- React Integration
- Quiz Interface

### Mishka
- Backend Development
- MongoDB Integration
- File Upload API
- Text Extraction
- AI Integration
- Quiz Generation

---

# 📸 Screenshots

(Add screenshots of the application here.)

---

# 📄 License

This project is developed for educational purposes as a college project.

---

# ⭐ Acknowledgements

- OpenRouter
- MongoDB Atlas
- Express.js
- React.js
- Node.js
- Multer
- Mammoth
- pdf-parse

---

## Developed with ❤️ by Atharv Shukla & Mishka

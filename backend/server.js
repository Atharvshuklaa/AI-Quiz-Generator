require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

console.log("Registering /api routes...");

//Registering routes
app.use("/api", uploadRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

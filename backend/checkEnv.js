require("dotenv").config();

console.log("Loaded environment variables:");

for (const key of Object.keys(process.env)) {
  if (
    key.toUpperCase().includes("GEMINI") ||
    key.toUpperCase().includes("MONGO") ||
    key.toUpperCase().includes("PORT")
  ) {
    console.log(`[${key}] = ${process.env[key] ? "***loaded***" : "undefined"}`);
  }
}
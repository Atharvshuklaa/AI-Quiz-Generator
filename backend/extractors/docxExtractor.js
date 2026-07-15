const mammoth = require("mammoth");

async function extractDOCX(filePath) {
  const result = await mammoth.extractRawText({
    path: filePath,
  });

  return result.value;
}

module.exports = extractDOCX;
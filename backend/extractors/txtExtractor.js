const fs = require("fs");

function extractTXT(filePath) {
    return fs.readFileSync(filePath, "utf8");
}

module.exports = extractTXT;


const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadMiddleware");

const { uploadFile } = require("../controllers/uploadController");

router.post(
    "/upload",
    upload.single("file"),
    uploadFile
);

router.get("/test", (req, res) => {
    res.json({ message: "Upload routes are working!" });
});

module.exports = router;
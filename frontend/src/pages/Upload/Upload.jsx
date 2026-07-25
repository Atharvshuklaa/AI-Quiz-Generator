import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await API.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response:", response.data);

      navigate("/quiz", {
        state: {
          quiz: response.data.quiz,
        },
      });
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to generate quiz. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">

        <h1 className="text-3xl font-bold text-center">
          Upload Your Notes
        </h1>

        <p className="text-center text-gray-600 mt-2">
          Upload your study material to generate an AI-powered quiz.
        </p>

        {/* Upload Box */}
        <div className="mt-8 border-2 border-dashed border-gray-300 rounded-xl p-10 text-center">
          <div className="text-5xl mb-4">📂</div>

          <h2 className="text-xl font-semibold">
            Drag & Drop your files here
          </h2>

          <p className="text-gray-500 my-3">OR</p>

          {/* Hidden File Input */}
          <input
            type="file"
            id="fileInput"
            className="hidden"
            accept=".pdf,.docx,.txt"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />

          {/* Browse Button */}
          <button
            onClick={() => document.getElementById("fileInput").click()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Browse Files
          </button>

          {/* Selected File */}
          {selectedFile && (
            <p className="mt-4 text-green-600 font-medium">
              Selected: {selectedFile.name}
            </p>
          )}
        </div>

        {/* Supported Formats */}
        <div className="mt-6 text-center">
          <p className="font-semibold">Supported Formats</p>

          <div className="flex justify-center gap-6 mt-3 text-gray-600">
            <span>📄 PDF</span>
            <span>📝 DOCX</span>
            <span>📝 TXT</span>
          </div>
        </div>

        {/* Generate Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleUpload}
            disabled={loading}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition disabled:bg-gray-400"
          >
            {loading ? "Generating Quiz..." : "Generate Quiz"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Upload;
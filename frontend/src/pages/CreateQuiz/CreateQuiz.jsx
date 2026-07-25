const CreateQuiz = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">

        <h1 className="text-3xl font-bold text-center">
          Generate Quiz
        </h1>

        <p className="text-center text-gray-600 mt-2">
          Enter a topic or paste your notes below.
        </p>

        <textarea
          className="w-full h-56 mt-8 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Example: Explain the Human Digestive System..."
        />

        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Generate Quiz
          </button>
        </div>

      </div>
    </div>
  );
};

export default CreateQuiz;
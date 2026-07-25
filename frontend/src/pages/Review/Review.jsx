import { useLocation, useNavigate } from "react-router-dom";

function Review() {
  const location = useLocation();
  const navigate = useNavigate();

  const { quiz = [], answers = {} } = location.state || {};

  if (quiz.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-2xl font-bold">
          No review data available.
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center mb-8">
          Review Answers
        </h1>

        {quiz.map((question, index) => {
          const userAnswer = answers[index];
          const isCorrect = userAnswer === question.answer;

          return (
            <div
              key={index}
              className="border rounded-lg p-5 mb-6"
            >
              <h2 className="font-semibold text-lg">
                Q{index + 1}. {question.question}
              </h2>

              <p className="mt-3">
                <span className="font-semibold">
                  Your Answer:
                </span>{" "}
                <span
                  className={
                    isCorrect
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {userAnswer || "Not Answered"}
                </span>
              </p>

              <p>
                <span className="font-semibold">
                  Correct Answer:
                </span>{" "}
                <span className="text-green-600">
                  {question.answer}
                </span>
              </p>

              <p
                className={`mt-2 font-semibold ${
                  isCorrect
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {isCorrect ? "✅ Correct" : "❌ Incorrect"}
              </p>
            </div>
          );
        })}

        <div className="text-center">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Go Home
          </button>
        </div>

      </div>
    </div>
  );
}

export default Review;
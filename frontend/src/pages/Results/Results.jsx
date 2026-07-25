import { useLocation, useNavigate } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { score = 0, total = 0, quiz = [], answers = {} } =
    location.state || {};

  if (total === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-2xl font-bold">
          No quiz results found.
        </h2>
      </div>
    );
  }

  const percentage = Math.round((score / total) * 100);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl text-center">

        <div className="text-6xl mb-4">🎉</div>

        <h1 className="text-3xl font-bold">
          Quiz Completed!
        </h1>

        <p className="text-gray-600 mt-2">
          Here's how you performed.
        </p>

        {/* Score */}
        <div className="mt-8">
          <h2 className="text-5xl font-bold text-blue-600">
            {score} / {total}
          </h2>

          <p className="text-lg text-gray-600 mt-2">
            Score: {percentage}%
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mt-10">

          <div className="bg-green-100 rounded-lg p-4">
            <h3 className="text-2xl font-bold text-green-700">
              {score}
            </h3>
            <p>Correct</p>
          </div>

          <div className="bg-red-100 rounded-lg p-4">
            <h3 className="text-2xl font-bold text-red-700">
              {total - score}
            </h3>
            <p>Incorrect</p>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-10">

          <button
            onClick={() =>
              navigate("/review", {
                state: {
                  quiz,
                  answers,
                },
              })
            }
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Review Answers
          </button>

          <button
            onClick={() => navigate("/")}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            Go Home
          </button>

        </div>

      </div>
    </div>
  );
};

export default Results;
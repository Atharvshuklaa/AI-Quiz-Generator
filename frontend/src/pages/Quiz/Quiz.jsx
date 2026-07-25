import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const quiz = location.state?.quiz || [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  if (quiz.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-2xl font-bold">
          No quiz found. Please upload a file first.
        </h2>
      </div>
    );
  }

  const question = quiz[currentQuestion];

  const handleOptionChange = (option) => {
    setAnswers({
      ...answers,
      [currentQuestion]: option,
    });
  };

  const handleNext = () => {
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      let score = 0;

      quiz.forEach((q, index) => {
        if (answers[index] === q.answer) {
          score++;
        }
      });

      navigate("/results", {
        state: {
          score,
          total: quiz.length,
          quiz,
          answers,
        },
      });
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl">

        <h2 className="text-2xl font-bold">
          Question {currentQuestion + 1} of {quiz.length}
        </h2>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
          <div
            className="bg-blue-600 h-3 rounded-full"
            style={{
              width: `${((currentQuestion + 1) / quiz.length) * 100}%`,
            }}
          ></div>
        </div>

        {/* Question */}
        <h3 className="text-xl font-semibold mt-8">
          {question.question}
        </h3>

        {/* Options */}
        <div className="space-y-4 mt-6">
          {question.options.map((option, index) => (
            <label
              key={index}
              className="flex items-center gap-3 border rounded-lg p-3 cursor-pointer hover:bg-gray-100"
            >
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                checked={answers[currentQuestion] === option}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg disabled:bg-gray-300"
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            {currentQuestion === quiz.length - 1 ? "Finish Quiz" : "Next"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Quiz;
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-slate-50 via-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">

        <div className="text-center">

          {/* Badge */}
          <p className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold uppercase tracking-widest text-xs sm:text-sm shadow-sm">
            🚀 AI Powered Quiz Generation
          </p>

          {/* Main Heading */}
          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900">
            Transform Your Notes
            <br />

            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Into Smart AI Quizzes
            </span>

          </h1>

          {/* Description */}
          <p className="mt-8 text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Upload PDFs, PPTs, TXT files or simply describe a topic.
            QuizForge AI instantly generates intelligent quizzes with
            explanations, scoring and performance tracking.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

            <Link to="/upload">
              <Button text="Upload Notes" />
            </Link>

            <Link to="/createquiz">
              <Button
                text="Generate from Prompt"
                type="secondary"
              />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
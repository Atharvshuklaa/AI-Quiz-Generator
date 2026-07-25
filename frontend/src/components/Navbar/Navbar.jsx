import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 gap-4">

        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold cursor-pointer">
          <span className="text-blue-600">QuizForge</span>{" "}
          <span className="text-purple-600">AI</span>
        </h1>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-10 text-center">

          <a
            href="#home"
            className="text-slate-700 font-medium hover:text-blue-600 transition-all duration-300"
          >
            Home
          </a>

          <a
            href="#features"
            className="text-slate-700 font-medium hover:text-blue-600 transition-all duration-300"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-slate-700 font-medium hover:text-blue-600 transition-all duration-300"
          >
            How It Works
          </a>

          <Link to="/upload">
            <Button text="Get Started" />
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
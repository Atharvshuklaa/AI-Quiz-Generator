import Button from "../Button/Button";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <h1 className="text-3xl font-bold cursor-pointer">
          <span className="text-blue-600">QuizForge</span>{" "}
          <span className="text-purple-600">AI</span>
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-10">

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

          <Button text="Get Started" />

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
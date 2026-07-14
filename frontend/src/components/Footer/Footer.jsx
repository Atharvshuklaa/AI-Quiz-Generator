function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-24">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-blue-500">QuizForge</span>{" "}
              <span className="text-purple-500">AI</span>
            </h2>

            <p className="text-slate-400 mt-4">
              Transform Notes into Smart AI Quizzes in Seconds.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-3 text-slate-400">
              <li>Home</li>
              <li>Features</li>
              <li>How It Works</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>

            <div className="flex gap-5 text-slate-400">
              <span>GitHub</span>
              <span>LinkedIn</span>
              <span>Email</span>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-12 pt-6 text-center text-slate-500">
          © 2026 QuizForge AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
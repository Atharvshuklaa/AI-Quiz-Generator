import {
  FileText,
  Brain,
  Trophy,
  BarChart3,
} from "lucide-react";

import FeatureCard from "../FeatureCard/FeatureCard";

function Features() {
  return (
    <section
      id="features"
      className="bg-slate-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-slate-900">
          Why Choose QuizForge AI?
        </h2>

        <p className="text-center text-slate-500 mt-5 text-lg max-w-2xl mx-auto">
          Powerful AI features designed to help students learn faster and smarter.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          <FeatureCard
            icon={<FileText size={38} />}
            title="Upload Notes"
            description="Supports PDF, PPT and TXT files."
          />

          <FeatureCard
            icon={<Brain size={38} />}
            title="AI Generation"
            description="Generate smart quizzes using advanced AI."
          />

          <FeatureCard
            icon={<Trophy size={38} />}
            title="Instant Results"
            description="View scores and correct answers immediately."
          />

          <FeatureCard
            icon={<BarChart3 size={38} />}
            title="Performance"
            description="Track strengths, weaknesses and progress."
          />

        </div>

      </div>
    </section>
  );
}

export default Features;
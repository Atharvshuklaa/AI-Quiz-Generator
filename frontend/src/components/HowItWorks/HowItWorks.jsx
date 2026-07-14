import {
  Upload,
  Brain,
  ClipboardCheck,
  Trophy,
} from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: <Upload size={36} />,
      title: "Upload Notes",
      description: "Upload your PDF, PPT or TXT notes."
    },
    {
      icon: <Brain size={36} />,
      title: "AI Analysis",
      description: "Our AI understands your content."
    },
    {
      icon: <ClipboardCheck size={36} />,
      title: "Generate Quiz",
      description: "AI creates intelligent MCQs in seconds."
    },
    {
      icon: <Trophy size={36} />,
      title: "View Results",
      description: "Check your score and performance instantly."
    }
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-slate-900">
          How It Works
        </h2>

        <p className="text-center text-slate-500 text-lg mt-5 max-w-2xl mx-auto">
          Create quizzes in just four simple steps.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {steps.map((step, index) => (

            <div
              key={index}
              className="group bg-slate-50 rounded-3xl p-8 text-center border border-slate-200 hover:shadow-xl hover:-translate-y-3 transition-all duration-300"
            >

              <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">

                {step.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 text-slate-500 leading-relaxed">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
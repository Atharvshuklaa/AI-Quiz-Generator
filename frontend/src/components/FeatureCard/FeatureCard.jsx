function FeatureCard({ icon, title, description }) {
  return (
    <div className="group bg-white rounded-3xl border border-slate-200 p-8 text-center shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">

      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 text-slate-500 leading-relaxed">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;
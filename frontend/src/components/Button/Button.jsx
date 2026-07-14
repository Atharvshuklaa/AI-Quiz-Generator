function Button({ text, type = "primary" }) {
  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-2xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer",

    secondary:
      "border-2 border-blue-600 text-blue-600 bg-white px-7 py-3 rounded-2xl font-semibold shadow-md hover:bg-blue-50 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer",
  };

  return (
    <button className={styles[type]}>
      {text}
    </button>
  );
}

export default Button;
function Button({ text, type = "submit" }) {
  return (
    <button
      type={type}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {text}
    </button>
  );
}

export default Button;
function InputField({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
}) {
  return (
    <div className="mb-5">
      <label className="block text-gray-700 font-semibold mb-2">
        {label}
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
      />
    </div>
  );
}

export default InputField;
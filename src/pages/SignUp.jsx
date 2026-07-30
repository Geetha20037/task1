import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-red-600");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setMessage("Please fill all fields.");
      setMessageColor("text-red-600");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email)) {
      setMessage("Please enter a valid email address.");
      setMessageColor("text-red-600");
      return;
    }

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordPattern.test(formData.password)) {
      setMessage(
        "Password must be at least 8 characters and include uppercase, lowercase, number and special character."
      );
      setMessageColor("text-red-600");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      setMessageColor("text-red-600");
      return;
    }

    setMessage("Registration Successful!");
    setMessageColor("text-green-600");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-extrabold text-center text-blue-700">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Register to get started
        </p>

        {message && (
          <div
            className={`text-center mb-5 font-medium ${
              messageColor === "text-green-600"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            } rounded-lg p-3`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <InputField
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />

          <InputField
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Create a password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <InputField
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <div className="mt-6">
            <Button text="Create Account" />
          </div>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-red-600");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please fill all fields.");
      setMessageColor("text-red-600");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setMessage("Please enter a valid email address.");
      setMessageColor("text-red-600");
      return;
    }

    setMessage("Login Successful!");
    setMessageColor("text-green-600");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-extrabold text-center text-blue-700">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Sign in to continue to your account
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
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="mt-6">
            <Button text="Sign In" />
          </div>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
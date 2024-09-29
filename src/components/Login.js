import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input 
            type="email" 
            ref={emailRef} 
            placeholder="Email" 
            className="border border-gray-300 p-3 rounded" 
            required 
          />
          <input 
            type="password" 
            ref={passwordRef} 
            placeholder="Password" 
            className="border border-gray-300 p-3 rounded" 
            required 
          />
          <button 
            type="submit" 
            disabled={loading} 
            className="bg-green-500 text-white p-3 rounded hover:bg-green-600 transition"
          >
            {loading ? 'Logging In...' : 'Log In'}
          </button>
        </form>
        <Link to="/signup" className="text-blue-500 mt-4 block text-center">Need an account? Sign Up</Link>
      </div>
    </div>
  );
}

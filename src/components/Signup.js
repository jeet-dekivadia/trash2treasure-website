import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl">Sign Up</h2>
      {error && <div className="text-red-500">{error}</div>}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input type="email" ref={emailRef} placeholder="Email" className="border p-2" required />
        <input type="password" ref={passwordRef} placeholder="Password" className="border p-2" required />
        <button type="submit" disabled={loading} className="bg-green-500 text-white p-2 rounded">
          Sign Up
        </button>
      </form>
      <Link to="/login" className="text-blue-500">Already have an account? Log In</Link>
    </div>
  );
}

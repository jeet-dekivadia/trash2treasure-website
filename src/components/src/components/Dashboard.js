// src/components/Dashboard.js
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    try {
      await logout();
    } catch {
      console.log("Failed to log out");
    }
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {currentUser.email}</p>
      <Link to="/upload-image">Claim Points by Recycling</Link>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

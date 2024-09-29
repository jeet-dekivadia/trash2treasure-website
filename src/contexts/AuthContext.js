// src/contexts/AuthContext.js
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // State for loading

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password).catch(error => {
      console.error("Signup error:", error.message);
      throw error; // Propagate error
    });
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password).catch(error => {
      console.error("Login error:", error.message);
      throw error; // Propagate error
    });
  }

  function logout() {
    return signOut(auth).catch(error => {
      console.error("Logout error:", error.message);
      throw error; // Propagate error
    });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false); // Set loading to false when the auth state is determined
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Render children only when not loading */}
    </AuthContext.Provider>
  );
}

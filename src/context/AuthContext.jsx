import React, { createContext, useContext, useEffect, useState } from "react";

// 1. Create context
const AuthContext = createContext();

// 2. Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Sign in
  const login = (email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const foundUser = storedUsers.find((u) => u.email === email && u.password === password);
    if (foundUser) {
      localStorage.setItem("user", JSON.stringify(foundUser));
      setUser(foundUser);
      return { success: true };
    }
    return { success: false, message: "Invalid credentials" };
  };

  // Sign up
  const register = (email, password) => {
    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const exists = users.find((u) => u.email === email);
    if (exists) {
      return { success: false, message: "User already exists" };
    }
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    return { success: true };
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom hook
export const useAuth = () => useContext(AuthContext);

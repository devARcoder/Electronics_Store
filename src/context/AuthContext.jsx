import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email, password) => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      return { success: false, message: "No accounts found" };
    }

    const userData = JSON.parse(storedUser);

    if (userData.email === email && userData.password === password) {
      setUser(userData);
      return { success: true };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

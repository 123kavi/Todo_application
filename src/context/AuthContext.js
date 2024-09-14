import React, { createContext, useState, useEffect } from 'react';

// Context for user authentication
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Fetch user from localStorage or set to null
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Register users (store users in localStorage)
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const savedUsers = localStorage.getItem('registeredUsers');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  // Login function
  const login = (username, password) => {
    const existingUser = registeredUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (existingUser) {
      setUser(existingUser);
      localStorage.setItem('user', JSON.stringify(existingUser)); // Save logged-in user to localStorage
      return true;
    }
    return false; // User not found or incorrect credentials
  };

  // Register function
  const register = (username, password) => {
    const userExists = registeredUsers.find((u) => u.username === username);
    if (!userExists) {
      const newUser = { username, password };
      const updatedUsers = [...registeredUsers, newUser];
      setRegisteredUsers(updatedUsers);
      localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers)); // Save to localStorage
      return true;
    }
    return false; // User already exists
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Clear user from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

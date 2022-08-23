import React, { useState, useContext } from "react";
import { loginUser, registerUser } from "./services/auth";
import AuthContext from "./AuthContext";
import { useLocalStorage } from "@mantine/hooks";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage({ key: "token" });
  const [error, setError] = useState(null);
  const [registered, setRegistered] = useState(false);

  const handleLogin = (user) => {
    if (error) {
      setError(null);
    }
    loginUser(user)
      .then((result) => {
        setToken(result.data.token);
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };

  const handleLogout = () => {
    setToken(null);
  };

  const handleRegister = (user) => {
    registerUser(user)
      .then((result) => {
        setRegistered(true);
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  const value = {
    token,
    registered,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onRegister: handleRegister,
    error: error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

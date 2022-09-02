import React, { useState, useContext } from "react";
import { loginUser, registerUser, resetPassword } from "./services/auth";
import AuthContext from "./AuthContext";
import { showNotification } from "@mantine/notifications";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [error, setError] = useState(null);
  const [registered, setRegistered] = useState(false);

  const handleLogin = (user) => {
    if (error) {
      setError(null);
    }
    loginUser(user)
      .then((result) => {
        localStorage.setItem("token", result.data.token);
        setToken(result.data.token);
      })
      .catch((error) => {
        setError(true);
        showNotification({
          title: "Oh no!",
          color: "red",
          message: error.response.data.message,
        });
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const handleReset = (data) => {
    resetPassword(data).then((result) => {
      showNotification({
        title: "Success!",
        color: "green",
        message: "We've updated your password.",
      });
    });
  };

  const handleRegister = (user) => {
    registerUser(user)
      .then((result) => {
        setRegistered(true);
        showNotification({
          title: "Success!",
          color: "green",
          message: "We've sent you an email to confirm your account",
        });
      })
      .catch((error) => {
        showNotification({
          title: "Oh no!",
          color: "red",
          message: error.response.data.message,
        });
      });
  };

  const value = {
    token,
    registered,
    onLogin: handleLogin,
    onResetPassword: handleReset,
    onLogout: handleLogout,
    onRegister: handleRegister,
    error: error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

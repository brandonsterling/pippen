import React, { useContext } from "react";
import axios from "axios";

axios.defaults.baseURL =
  process.env.REACT_APP_ENV == "development"
    ? "http://localhost:5001"
    : "https://pippenapp.herokuapp.com";

export const loginUser = (user) => {
  return axios.post("/auth/login", user);
};

export const registerUser = (user) => {
  // axios.defaults.withCredentials = true;
  return axios.post("/auth/register", user);
};

export const confirmUser = (id) => {
  return axios.post(`/auth/confirm/${id}`);
};

export const resendConfirm = (data) => {
  return axios.post(`/auth/resend`, data);
};

export const forgotPassword = (data) => {
  return axios.post(`/auth/forgot_password`, data);
};

export const resetPassword = (token) => {
  return axios.post(`/auth/reset_password`, token);
};

import React, { useContext } from "react";
import axios from "axios";

const config = {
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
};

export const loginUser = (user) => {
  return axios.post("http://localhost:5001/auth/login", user);
};

export const registerUser = (user) => {
  axios.defaults.withCredentials = true;
  return axios.post("http://localhost:5001/auth/register", user);
};

export const confirmUser = (id) => {
  axios.defaults.withCredentials = true;
  return axios.post(`http://localhost:5001/auth/confirm/${id}`);
};

export const resendConfirm = (data) => {
  axios.defaults.withCredentials = true;
  return axios.post(`http://localhost:5001/auth/resend`, data);
};

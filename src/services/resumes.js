import axios from "axios";
import authHeader from "./authHeader";

export const getTest = () => {
  axios.defaults.withCredentials = true;
  return axios.get("http://localhost:5001/resume/test");
};

export const getResumes = (token) => {
  return axios.get("http://localhost:5001/resume/resumes", {
    headers: authHeader(token),
  });
};

export const getResumeById = (id, token) => {
  return axios.get(`http://localhost:5001/resume/${id}`, {
    headers: authHeader(token),
  });
};

export const deleteResumeById = (id, token) => {
  return axios.delete(`http://localhost:5001/resume/${id}`, {
    headers: authHeader(token),
  });
};

export const updateResume = (values, id) => {
  return axios.post(`http://localhost:5001/resume/${id}`, values);
};

export const createResume = (token) => {
  axios.defaults.withCredentials = true;
  return axios.post(
    `http://localhost:5001/resume/create`,
    {},
    {
      headers: authHeader(token),
    }
  );
};

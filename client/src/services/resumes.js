import axios from "axios";
import authHeader from "./authHeader";

axios.defaults.baseURL =
  process.env.REACT_APP_ENV == "development"
    ? "http://localhost:5001"
    : "https://pippapp.herokuapp.com/";

export const getResumes = (token) => {
  return axios.get("resume/resumes", {
    headers: authHeader(token),
  });
};

export const getResumeById = (id, token) => {
  return axios.get(`/resume/${id}`, {
    headers: authHeader(token),
  });
};

export const deleteResumeById = (id, token) => {
  return axios.delete(`/resume/${id}`, {
    headers: authHeader(token),
  });
};

export const updateResume = (values, id) => {
  return axios.post(`/resume/${id}`, values);
};

export const createResume = (token) => {
  return axios.post(
    `/resume/create`,
    {},
    {
      headers: authHeader(token),
    }
  );
};

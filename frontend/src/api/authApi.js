import api from "./axios";

export const loginUser = (data) => {
  return api.post("/auth/login", data, { withCredentials: true });
};

export const registerUser = (data) => {
  return api.post("/auth/register", data, { withCredentials: true });
};

export const getProfile = () => {
  return api.get("/auth/profile", { withCredentials: true });
};

export const getMe = () => {
  return api.get("/auth/me", { withCredentials: true });
};
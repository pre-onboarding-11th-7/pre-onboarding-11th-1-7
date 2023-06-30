import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;

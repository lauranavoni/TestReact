import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://randomuser.me/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;

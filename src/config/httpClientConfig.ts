import axios from "axios";
import { BASE_URL } from "./appConstant";

const axiosClient: Axios.AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// You can configure and add interceport here for request like header, Auth, error handling etc.

export default axiosClient;

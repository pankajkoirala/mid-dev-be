import axios from "axios";

export const axiosService = (url) => {
  return axios.get(url ?? "");
};

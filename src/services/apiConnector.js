import axios from "axios";

// Default to backend server on port 4000 when REACT_APP_BASE_URL is not set
const DEFAULT_BASE = process.env.REACT_APP_BASE_URL || "http://localhost:4000/api/v1";

export const axiosInstance = axios.create({
  baseURL: DEFAULT_BASE,
  timeout: 15000,
  withCredentials: true, // include cookies for auth
});

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};

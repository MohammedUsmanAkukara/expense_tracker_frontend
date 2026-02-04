import axios from "axios"
import { BASE_URL } from "./apiPaths"
import { redirecttoLogin } from "./helper";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");

        // Do not attach token for auth routes
        if (accessToken && !config.url?.includes("/api/v1/auth/login") && !config.url?.includes("/api/v1/auth/signup")) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle common error globally
        if (error.response) {
            if (error.response.status === 401) {
                // Redirect to login page
                redirecttoLogin();
            } else if (error.response.status === 500) {
                console.error("Server error. Please try again later.");
            }
        } else if (error.code === "ECONNABORTED") {
            console.error("Request timeout. Please try again.");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
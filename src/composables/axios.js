import axios from "axios";
import {useAuth} from "@/composables/auth.js";

const auth = useAuth();
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': auth ? ('Bearer ' + auth.access_token) : null,
    },
})

axiosInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload();
    }
    return Promise.reject(error);
});

export function useAxios() {
    return axiosInstance;
}

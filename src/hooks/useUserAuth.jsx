import { useContext, useEffect, useRef } from "react"
import { userContext } from "../context/userContext"
import { useNavigate } from "react-router-dom";
import axiosInstance from '../utils/axiosInstance'
import { API_PATHS } from "../utils/apiPaths";

export const useUserAuth = () => {
    const { updateUser, clearUser } = useContext(userContext);
    const navigate = useNavigate();
    const hasFetchedRef = useRef(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;
        if (hasFetchedRef.current) return;

        hasFetchedRef.current = true;

        const fetchUserInfo = async () => {
            try {
                const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO);

                // if (isMounted && response.data) {
                    updateUser(response.data);
                // }
            } catch (err) {
                console.error("Failed to fetch user info:", err);
                // if (isMounted) {
                    clearUser();
                    localStorage.removeItem('token');
                    navigate("/login");
                // }
            }
        };

        fetchUserInfo();

        // return () => {
        //     isMounted = false;
        // };
    }, []);
}
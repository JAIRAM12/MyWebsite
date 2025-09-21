import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getUserInfo from "../enums/getUserInfo";
import { addToken } from "../../Redux/Action";
import { AppNotification } from "../AppNotification";

export function useAuth() {
    const dispatch = useDispatch();
    const { token, isLogin } = useSelector((state) => state.token);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const localToken = localStorage.getItem("token");

            if (token || localToken) {
                dispatch(addToken(localToken));
                try {
                    getUserInfo(localToken);
                } catch (error) {
                    AppNotification("error", "Authentication Error", "Failed to fetch user info. Please log in again.");
                    console.error("Auth check failed:", error);
                    localStorage.removeItem("token");
                }
            }
            setLoading(false);
        };
        
        checkAuth();
    }, [dispatch, token, isLogin]);

    return { loading };
}

import { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import getUserInfo from "../enums/getUserInfo";
import { addToken, clearToken } from "../../Redux/Action";
import { AppNotification } from "../AppNotification";
import { jwtDecode } from "jwt-decode";

export function useAuth() {
    const dispatch = useDispatch();
    const { token, userInfo } = useSelector((state) => state.token);
    const [loading, setLoading] = useState(true);
    
    const checkAuth = useCallback(async () => {
        
        try {
            setLoading(true);
            const localToken = token || localStorage.getItem("token");

            if (!localToken) {
                return;
            }

            // Validate token structure first
            if (typeof localToken !== 'string' || localToken.split('.').length !== 3) {
                throw new Error('Invalid token format');
            }

            const decoded = jwtDecode(localToken);
            const expiryDate = decoded.exp * 1000;

            if (Date.now() >= expiryDate) {
                throw new Error('Token expired');
            }

            // Token is valid
            if (!token) {
                dispatch(addToken(localToken, expiryDate));
            }

            // Only fetch user info if not present
            if (!userInfo && decoded.id) {
                await getUserInfo(decoded.id);
            }

        } catch (error) {
            console.warn("Auth check failed:", error.message);
            localStorage.removeItem("token");
            dispatch(clearToken());
            
            if (error.message !== 'Invalid token format') {
                AppNotification("error", "Authentication Error", "Please log in again.");
            }
        } finally {
            setLoading(false);
        }
    }, [dispatch, token, userInfo]);

    useEffect(() => {
        checkAuth();
    }, [token]);

    return { loading };
}
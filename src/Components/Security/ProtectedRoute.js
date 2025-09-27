import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AppLoading from "../essential/AppLoading";
import { AppNotification } from "../essential/AppNotification";
import { MessageType } from "../essential/enums";
import { clearToken } from "../Redux/Action";

const ProtectedRoute = ({ children, roles }) => {
    const dispatch = useDispatch();
    const { token, userInfo, expiryDate } = useSelector(state => state.token);
    const storedToken = token || localStorage.getItem("token");

    useEffect(() => {
        if (expiryDate && Date.now() > expiryDate) {
            console.warn("⚠️ Token expired, logging out...");
            dispatch(clearToken());
            localStorage.removeItem("token");
            AppNotification(MessageType.ERROR, "Error", "Token expired");
            window.location.href = "/";
        }
    }, [expiryDate, dispatch]);

    if (!storedToken) return <Navigate to="/" replace />;

    if (!userInfo) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <AppLoading size="large" />
                <span className="ml-3 text-lg">Loading page...</span>
            </div>
        );
    }

    const allowedRoles = roles.split(",").map(r => r.trim().toLowerCase());
    const userRole = userInfo.role?.toLowerCase();
    if (!allowedRoles.includes(userRole)) return null;

    return children;
};

export default ProtectedRoute;

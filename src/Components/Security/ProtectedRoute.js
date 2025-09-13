import { memo } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute= ({ children }) => {
    const { token } = useSelector((state) => state.token);
    const storedToken = token || localStorage.getItem("token");
    
    if (!storedToken) {
        // 🚪 not logged in → send to login
        return <Navigate to="/" replace />;
    } 

    return children;
}

export default memo(ProtectedRoute);

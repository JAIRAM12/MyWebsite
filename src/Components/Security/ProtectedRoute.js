import { memo } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute= ({ children }) => {
    const { token, isLogin } = useSelector((state) => state.token);

    if (!token || !isLogin) {
        // 🚪 not logged in → send to login
        return <Navigate to="/" replace />;
    }

    return children;
}

export default memo(ProtectedRoute);

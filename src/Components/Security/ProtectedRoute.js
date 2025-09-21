import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, roles }) => {
    const { token, userInfo } = useSelector(state => state.token);
    const storedToken = token || localStorage.getItem("token");

    // Not logged in → redirect to login
    if (!storedToken) return <Navigate to="/" replace />;

    // Still loading user info → show nothing or a spinner
    if (!userInfo) return <div>Loading...</div>;

    // Normalize roles
    const allowedRoles = roles.split(",").map(r => r.trim().toLowerCase());
    const userRole = userInfo.role?.toLowerCase();

    // Unauthorized → redirect
    if (!allowedRoles.includes(userRole)) return null;

    // Authorized → render children
    return children;
};

export default ProtectedRoute;

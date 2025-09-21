import { useState, useEffect } from "react";
import Api from "../API";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function useRoutesData() {
    const { userInfo } = useSelector((state) => state.token);
    const [routesData, setRoutesData] = useState([]);

    useEffect(() => {
        const fetchRoutes = async () => {
            try {
                const resp = await Api("GET", "/getPermission");
                setRoutesData(resp.data);
            } catch (error) {
                console.error("Failed to fetch routes:", error);
            }
        };
        if (userInfo) {
            fetchRoutes();
        } else {
            setRoutesData([]);
            <Navigate to="/" replace />
        }

    }, [userInfo]);

    return routesData;
}

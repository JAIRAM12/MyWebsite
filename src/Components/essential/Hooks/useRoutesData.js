import { useState, useEffect } from "react";
import Api from "../API";
import { useSelector } from "react-redux";

export function useRoutesData() {
    const { userInfo, isLogin } = useSelector((state) => state.token);
    const [routesData, setRoutesData] = useState([]);

    useEffect(() => {
        if (!userInfo || !isLogin) {
            setRoutesData([]);
            return;
        }

        const fetchRoutes = async () => {
            try {
                const resp = await Api("GET", "/getPermission");
                setRoutesData(resp?.data || []);
            } catch (error) {
                console.error("Failed to fetch routes:", error);
                setRoutesData([]);
            }
        };

        fetchRoutes();
    }, [userInfo, isLogin]);

    return routesData;
}
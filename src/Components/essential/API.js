import axios from "axios";
import store from "../Redux/store";
import { clearToken } from "../Redux/reducer";

const Api = async (method, path, payload = null) => {
    const state = store.getState().token;
    const { token, isLogin, expiresAt } = state;
    const DAOServiceURL = process.env.REACT_APP_API_URL;

    // ✅ check expiry
    if (isLogin && expiresAt && Date.now() > expiresAt) {
        console.warn("⚠️ Token expired, logging out...");
        store.dispatch(clearToken());
        window.location.href = "/login"; // redirect
        throw new Error("Token expired");
    }

    try {
        const options = {
            method,
            url: DAOServiceURL + path,
            headers: {
                "Content-Type": "application/json",
                ...(isLogin && token ? { Authorization: `Bearer ${token}` } : {}), // ✅ only attach if valid
            },
            data: payload,
        };

        const response = await axios(options);
        return response;
    } catch (error) {
        console.error("❌ API Error:", error);
        throw error;
    }
};

export default Api;

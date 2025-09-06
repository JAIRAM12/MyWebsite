import axios from "axios";
import store from "../Redux/store";

const Api = async (method, path, payload = null) => {
    const state = store.getState();
    const { userId, userRole, token, isLogin } = state.token;
    const DAOServiceURL = process.env.REACT_APP_API_URL;
    try {
        const options = {
            method,
            url: DAOServiceURL + path,
            headers: {
                "Content-Type": "application/json",
                Authorization: state.token.isLogin ? "Basic " + token : null,
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

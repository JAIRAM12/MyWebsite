import axios from "axios";

const Api = async (method, path, payload = null) => {
    try {
        const headers = { "Content-Type": "application/json" };

        const options = {
            method,
            url: path, // e.g. "http://localhost:8080/api/staff"
            headers,
            data: payload,
        };

        const response = await axios(options);
        return response // return parsed response
    } catch (error) {
        console.error("❌ API Error:", error);
        throw error; // rethrow for handling
    }
};

export default Api;

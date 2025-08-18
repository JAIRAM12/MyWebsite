import axios from "axios";

const Api = async (method, path, payload = null) => {
    // Read the correct env variable
    const DAOServiceURL = process.env.REACT_APP_API_URL;
    console.log("API Base URL:", DAOServiceURL);

    try {
        const headers = { "Content-Type": "application/json" };

        const options = {
            method,
            url: DAOServiceURL + path,
            headers: { "Content-Type": "application/json" },
            data: payload, // convert object to URL encoded
        };
        console.log(options)
        const response = await axios(options);
        return response;
    } catch (error) {
        console.error("❌ API Error:", error);
        throw error;
    }
};

export default Api;

import axios from "axios";
import store from "../Redux/store";
import { MessageType } from "./enums";
import { AppNotification } from "./AppNotification";
import { clearToken } from "../Redux/Action";

const Api = async (method, path, payload = null) => {
  const state = store.getState().token;
  const { token = null, isLogin, expiryDate } = state;
  const DAOServiceURL = process.env.REACT_APP_API_URL;

  if (isLogin && expiryDate && Date.now() > expiryDate) {
    console.warn("⚠️ Token expired, logging out...");
    store.dispatch(clearToken());
    localStorage.removeItem("token");
    window.location.href = "/";
    AppNotification(MessageType.ERROR, "Error", "Token expired");
    throw new Error("Token expired");
  }

  try {
    const authToken = token ?? localStorage.getItem("token");
    const options = {
      method,
      url: `${DAOServiceURL}${path}`,
      headers: {
        "Content-Type": "application/json",
        ...(isLogin && authToken ? { Authorization: `Bearer ${authToken}` } : {}),
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

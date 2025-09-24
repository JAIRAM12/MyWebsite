import axios from "axios";
import store from "../Redux/store";
import { MessageType } from "./enums";
import { AppNotification } from "./AppNotification";
import { clearToken } from "../Redux/Action";

const Api = async (method, path, payload = null) => {
  const state = store.getState().token;
  const { token = null, isLogin, expiryDate } = state;
  const DAOServiceURL = process.env.REACT_APP_API_URL;

  // ✅ check expiry
  if (isLogin && expiryDate && Date.now() > expiryDate) {
    console.warn("⚠️ Token expired, logging out...");
    store.dispatch(clearToken());
    localStorage.removeItem("token"); // also clear localStorage
    window.location.href = "/"; // fallback redirect
    AppNotification(MessageType.ERROR, "Error", "Token expired");
  }

  try {
    const authToken = token ?? localStorage.getItem("token"); // ✅ always sync with Redux + storage

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
    return error;
  }
};

export default Api;

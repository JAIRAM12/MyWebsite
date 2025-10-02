import { clearToken, setUserInfo } from "../../Redux/Action";
import store from "../../Redux/store";
import Api from "../API";
import { jwtDecode } from "jwt-decode";
import { AppNotification } from "../AppNotification";
import { MessageType } from "../enums";

const getUserInfo = async (id) => {
  if (!id) return

  try {
    // const cleanToken = token || '';
    // const decoded = jwtDecode(cleanToken);
    // const username = decoded.id; // or `decoded.sub` if you stored it as subject
    // const expiryDate = decoded.exp * 1000;
    
    await Api("POST", `/${id}`).then((response) =>{
      store.dispatch(setUserInfo(response.data));
    });

  } catch (error) {
    AppNotification(MessageType.ERROR, "Error", error)
    if (error.response?.status === 401) {
      store.dispatch(clearToken());
      localStorage.removeItem("token");
    }
    throw error;
  }
};

export default getUserInfo;

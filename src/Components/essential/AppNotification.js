import { notification } from "antd";
import "antd/dist/reset.css";   // for Ant Design v5

export const AppNotification = (type, title, description, options = {}) => {
    const {
        placement = "topRight",
        duration = 4.5,
        key,
        onClose,
        onClick,
    } = options;

    const notificationConfig = {
        message: title,
        description,
        placement,
        duration,
        key,
        onClose,
        onClick,
    };

    console.log("Notification:", type, title);

    if (notification[type]) {
        notification[type](notificationConfig);
    } else {
        notification.open(notificationConfig);
    }
};

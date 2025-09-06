

import { notification } from "antd";

export const AppNotification = (type, title, description) => {
    if (notification[type]) {
        notification[type]({
            message: title,
            description,
            placement: "topRight",
        });
    } else {
        console.error(`Invalid notification type: ${type}`);
        notification.open({
            message: title,
            description,
            placement: "topRight",
        });
    }
};


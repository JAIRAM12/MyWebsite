import React from 'react';
import { notification } from 'antd';

const AppNotification = (type, title, description) => {
    notification[type]({
        message: title,
        description: description,
        placement: 'topRight',
    });
};

export default AppNotification;

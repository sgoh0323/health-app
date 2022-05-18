import { notification } from 'antd';

const openNotificationWithIcon = (
    type: 'success' | 'info' | 'warning' | 'error',
    message: string,
    description: string
): void => {
    notification[type]({
        message,
        description
    });
};

export default openNotificationWithIcon;

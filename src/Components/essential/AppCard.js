import { Card } from "antd";

const AppCard = ({ title, children, ...props }) => {
    return (
        <Card title={title} {...props}>
            {children}
        </Card>
    );
};

export default AppCard;

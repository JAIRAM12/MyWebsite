import { Tabs } from "antd";

const { TabPane } = Tabs;

const AppTabs = ({ onChange, childstyle, ...props }) => {
    return (
        <Tabs onChange={onChange} type="card" {...props}/>
    );
};

export default AppTabs;

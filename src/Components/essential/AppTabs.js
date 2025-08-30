import { Tabs } from "antd";

const { TabPane } = Tabs;

const AppTabs = ({ items, onChange, childstyle, ...props }) => {
    return (
        <Tabs onChange={onChange} type="card" {...props}>
            {items.map((data) => (
                <TabPane tab={data.tab} key={data.key} {...childstyle}>
                    {data.children || "No content"}
                </TabPane>
            ))}
        </Tabs>
    );
};

export default AppTabs;

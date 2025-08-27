import { Tabs } from "antd";

const { TabPane } = Tabs; // ✅ correct way to get TabPane

const AppTabs = ({ items, onChange, childstyle, ...props }) => {
    return (
        <Tabs onChange={onChange} type="card" {...props}>
            {items.map((data) => (
                <TabPane tab={data.tab} key={data.key} {...childstyle}>
                    {data.content || "No content"} {/* ✅ dynamic content */}
                </TabPane>
            ))}
        </Tabs>
    );
};

export default AppTabs;

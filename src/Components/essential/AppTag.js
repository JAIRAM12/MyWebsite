import { Tag } from "antd";

const AppTag = ({color = 'blue', children, ...props }) =>{
    return(
        <Tag color={color} {...props}>{children}</Tag>
    )
}

export default AppTag;
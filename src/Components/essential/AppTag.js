import { Tag } from "antd";
import { memo } from "react";

const AppTag = ({color = 'blue', children, ...props }) =>{
    return(
        <Tag color={color} {...props}>{children}</Tag>
    )
}

export default memo(AppTag);
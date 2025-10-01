import { Spin } from "antd"

const AppLoading = ({children, size = "default" , ...props}) => {

    <Spin size={size} {...props} >{children}</Spin>
}

export default AppLoading;
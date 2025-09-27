import { Spin } from "antd"

const AppLoading = ({children , ...props}) => {

    <Spin size="large" {...props} >{children}</Spin>
}

export default AppLoading;
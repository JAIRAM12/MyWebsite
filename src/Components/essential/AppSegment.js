import { Segmented } from "antd";

const AppSegment = ({options, onChange, ...props}) => {
    return (
        <>
            <Segmented
                options={options}
                onChange={onChange}
                {...props}
            />
        </>
    )
}

export default AppSegment;
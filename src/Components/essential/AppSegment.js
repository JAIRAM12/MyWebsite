import { Segmented } from "antd";

const AppSegment = ({ options, onChange, value, ...props }) => {

    return (
        <>
            <Segmented
                options={options}
                onChange={onChange}
                {...props}
            />
            <div className="mt-4">
                {options.length > 0 && options.find((opt) => opt.value === value)?.component}
            </div>
        </>
    )
}

export default AppSegment;
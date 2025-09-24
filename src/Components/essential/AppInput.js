import { Input, InputNumber, Select } from "antd";
import { memo } from "react";

const AppInput = ({ inputName, inputType, ...props }) => {
    const renderInput = () => {
        switch (inputType) {
            case "text":
            case "email":
            case "password":
                return <Input name={inputName} {...props} />;
            case "number":
                return <InputNumber name={inputName} style={{ width: "100%" }} {...props} />;
            case "select":
                return <Select name={inputName} style={{ width: "100%" }} {...props} />;
            default:
                return <Input name={inputName} {...props} />;
        }
    };

    return (
        <div className="mb-1">
            {renderInput()}
        </div>
    );
}

export default memo(AppInput);

import { Input, InputNumber, Select } from "antd";
import { memo, forwardRef } from "react";

const AppInput = forwardRef(({ inputName, inputType, ...props }, ref) => {
    const renderInput = () => {
        switch (inputType) {
            case "text":
            case "email":
            case "password":
                return <Input name={inputName} ref={ref} {...props} />;
            case "number":
                return <InputNumber name={inputName} style={{ width: "100%" }} ref={ref} {...props} />;
            case "select":
                return <Select name={inputName} style={{ width: "100%" }} ref={ref} {...props} />;
            default:
                return <Input name={inputName} ref={ref} {...props} />;
        }
    };

    return (
        <div className="mb-1">
            {renderInput()}
        </div>
    );
});

export default memo(AppInput);
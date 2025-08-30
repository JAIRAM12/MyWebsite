import { Input, InputNumber, Select } from "antd";

export default function AppInput({ inputLabel, inputName, inputType, style, ...props }) {
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
        <div style={{ marginBottom: "1rem", ...style }}>
            {inputLabel && (
                <label style={{ display: "block", marginBottom: "5px" }}>{inputLabel}</label>
            )}
            {renderInput()}
        </div>
    );
}

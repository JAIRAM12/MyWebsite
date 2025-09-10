import { Card } from "antd";
import { memo, useCallback, useEffect, useState } from "react";
import Api from "../essential/API";
import AppInput from "../essential/AppInput";
import AppButton from "../essential/AppButton";
import AppCard from "../essential/AppCard";
import { Department, MessageType } from "../essential/enums";
import { AppNotification } from "../essential/AppNotification";

const field = {
    name: "",
    department: "",
    staffId: "",
}

const Search = ({ mode, setItem }) => {
    const [searchItem, setSearchItem] = useState(field);

    const onChange = useCallback((field, value) => {
        setSearchItem((prev) => ({ ...prev, [field]: value }));
    }, [])

    const onSubmit = useCallback(async () => {
        const payload = JSON.stringify(searchItem)
        await Api("POST", "/api/faculty/Faculties", payload)
            .then((response) => {
                const data = response.data;
                if (data) {
                    setItem(data);
                }
            })
            .catch((error) => {
                AppNotification(MessageType.ERROR, "Error", error.message || "Something went wrong");
            });
    }, [setItem, searchItem])

    return (
        <>
            <AppCard >
                <div className="row">
                    <div className="col-md-3">
                        <label>Faculty ID</label>
                        <AppInput
                            placeholder="FAC12345"
                            value={searchItem.staffId}
                            onChange={(e) => onChange("staffId", e.target.value)}
                        />
                    </div>
                    {/* Name */}
                    <div className="col-md-3">
                        <label>Faculty Name</label>
                        <AppInput
                            placeholder="John Doe"
                            value={searchItem.name}
                            onChange={(e) => onChange("name", e.target.value)}
                        />
                    </div>
                    {/* Department */}
                    <div className="col-md-3">
                        <label>Department</label>
                        <AppInput
                            inputType="select"
                            options={Department}
                            value={searchItem.department || null}
                            placeholder="Select Department"
                            className='w-100'
                            onChange={(value) => onChange("department", value)}
                        />
                    </div>
                    <div className="col-12 mt-3">
                        <AppButton type="primary" onClick={onSubmit}>
                            Search
                        </AppButton>
                        <AppButton className="ml-2" onClick={() => setSearchItem(field)}>
                            Clear
                        </AppButton>
                    </div>
                </div>
            </AppCard>
        </>
    );
}

export default memo(Search)
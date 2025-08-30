import { Card } from "antd";
import { useEffect, useState } from "react";
import Api from "../essential/API";
import AppInput from "../essential/AppInput";
import AppButton from "../essential/AppButton";
import AppCard from "../essential/AppCard";
import MessageType from "../essential/enums";
import AppNotification from "../essential/AppNotification";

const field = {
    name: "",
    department: "CSE",
    staffId: "",
}

export default function Search(props) {
    const [searchItem, setSearchItem] = useState(field);

    const onChange = (field, value) => {
        setSearchItem((prev) => ({ ...prev, [field]: value }));
    }
    
    const onSubmit = () => {
        const payload = JSON.stringify(searchItem)
        Api("POST", "/api/faculty/Faculties", payload)
            .then((response) => {
                const data = response.data
                if (response.status === 200) {
                    props.setItem(data)
                }
            }).catch((error) => {
                AppNotification(MessageType.ERROR, "Error", error)
            });
    }


    return (
        <>
            <AppCard style={{
                width: "100%", margin: "0 auto", backgroundColor: props?.mode ? "#121212" : "#ffffff",
                color: props?.mode ? "#ffffff" : "#000000",
            }}>
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
                            options={[
                                { value: "CS", label: "Computer Science" },
                                { value: "Math", label: "Mathematics" },
                                { value: "Physics", label: "Physics" },
                                { value: "Chemistry", label: "Chemistry" },
                            ]}
                            value={searchItem.department}
                            placeholder="Select Department"
                            style={{ width: "100%" }}
                            onChange={(value) => onChange("department", value)}
                        />
                    </div>

                    {/* Buttons */}
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
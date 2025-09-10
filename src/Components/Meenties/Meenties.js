
import { Children, useState } from "react";
import MeentiesTable from "./MeentiesTable";
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import AppButton from "../essential/AppButton";
import AppCard from "../essential/AppCard";
import Event from "./Event";
import Achedamic from "./Achedamic";
import AppSegment from "../essential/AppSegment";

export default function Meenties() {
    const [active, setActive] = useState('event')

    const options = [
        {
            key: "1",
            label: "Event",
            value: "event",
            component: <Event />,
        },
        {
            key: "2",
            label: "Academic",
            value: "academic",
            component: <Achedamic />,
        },
    ];

    const handleChange = (value) => {
        setActive(value)
    }

    return (
        <>
            <div className="page" >
                <div className="p-4">
                    <div className="content justify-content-center w-98 p-4">
                        <AppCard>
                            {/* <div className="d-flex justify-content-end mb-3">
                                <AppButton type="primary" onClick={() => navigate('/AddMeenties')}>
                                    Add Meenties
                                </AppButton>
                            </div> */}
                            <AppSegment options={options} onChange={handleChange} value={active} />
                        </AppCard>
                    </div>
                </div>
            </div>
        </>
    );
}

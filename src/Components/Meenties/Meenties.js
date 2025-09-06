
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

    const options =[{
        key: '1',
        label: 'Event',
        children : <Event />
    },{
        key: '2',
        label: 'Achedamic',
        children : <Achedamic />
    }]

    return (
        <>
            <div className="page" >
                <div style={{ padding: 20 }}>
                    {/* <div className="d-flex justify-content-end mb-3 me-5 mt-3" style={{ padding: 20 }} >
                        <Search setItem={(data) => setData(data)} mode={mode} />
                    </div> */}
                    <div className="content justify-content-center" style={{ width: "98%", padding: 19 }}>
                        <AppCard>
                            <div className="d-flex justify-content-end mb-3">
                                <AppButton type="primary" onClick={() => navigate('/AddMeenties')}>
                                    Add Meenties
                                </AppButton>
                            </div>
                            <AppSegment options={options} />
                        </AppCard>
                    </div>
                </div>
            </div>
        </>
    );
}

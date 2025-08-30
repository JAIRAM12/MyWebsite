import { useNavigate } from "react-router-dom";
import FacultyTable from "./FacultyTable";
import Search from "./BasicSearchFaculty";
import { useEffect, useState } from "react";
import { Card } from "antd";
import Api from "../essential/API";
import AppButton from "../essential/AppButton";
import AppCard from "../essential/AppCard";
import MessageType from "../essential/enums";
import AppNotification from "../essential/AppNotification";

export default function Faculty({mode}) {
    const navigate = useNavigate();
    const [data, setData] = useState([]);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        Api("GET", "/api/faculty/all")
            .then((response) => {
                const data = response.data
                if (response.status === 200) {
                    setData(data)
                }
            }).catch((error) => {
                AppNotification(MessageType.ERROR, "Error", error)
            });
        }

    return (
        <>
            <div className="page" >
                <div style={{ padding: 20 }}>
                    <div className="d-flex justify-content-end mb-3 me-5 mt-3" style={{ padding: 20 }} >
                        <Search setItem={(data)=> setData(data)} mode={mode} />
                    </div>
                    <div className="content justify-content-center" style={{ width: "98%", padding: 19 }}>
                        <AppCard>
                            <div className="d-flex justify-content-end mb-3">
                                <AppButton type="primary" onClick={() => navigate('/Addfaculty')}>
                                    Add Faculty
                                </AppButton>
                            </div>
                            <FacultyTable data={data} />
                        </AppCard>
                    </div>
                </div>
            </div>
        </>
    );
}
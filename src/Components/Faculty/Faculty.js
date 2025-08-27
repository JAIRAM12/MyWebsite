import { useNavigate } from "react-router-dom";
import FacultyTable from "./FacultyTable";
import Search from "./BasicSearchFaculty";
import { useEffect, useState } from "react";
import { Card } from "antd";
import Api from "../essential/API";
import AppButton from "../essential/AppButton";
import AppCard from "../essential/AppCard";

export default function Faculty({mode}) {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    // const data = [
    //     {
    //         facultyid: "VH123",
    //         facultyname: "js",
    //         facultyemail: "jsjairam01@gmail.com",
    //         facultyage: "45",
    //         facultydepartment: "CS"
    //     },
    //     {
    //         facultyid: "VH145",
    //         facultyname: "js",
    //         facultyemail: "jsjairam01@gmail.com",
    //         facultyage: "45",
    //         facultydepartment: "CS"
    //     }
    // ];


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
                console.error("❌ Error fetching staff:", error);
                alert("❌ Error fetching staff");
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
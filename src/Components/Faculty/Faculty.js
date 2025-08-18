import { useNavigate } from "react-router-dom";
import AppButton from "../design/AppButton";
import FacultyTable from "./FacultyTable";
import Search from "./BasicSearchFaculty";
import { useState } from "react";
import { Card } from "antd";

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

    const setItem = (data) => {
        setData(data)
    }


    return (
        <>
            <div className="page" >
                <div style={{ padding: 20 }}>
                    <div className="d-flex justify-content-end mb-3 me-5 mt-3" style={{ padding: 20 }} >
                        <Search setItem={setItem} mode={mode} />
                    </div>
                    <div className="content justify-content-center" style={{ width: "98%", padding: 19 }}>
                        <Card>
                            <div className="d-flex justify-content-end mb-3">
                                <AppButton type="primary" onClick={() => navigate('/Addfaculty')}>
                                    Add Faculty
                                </AppButton>
                            </div>
                            <FacultyTable data={data} />
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
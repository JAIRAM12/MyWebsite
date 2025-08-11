import { useNavigate } from "react-router-dom";
import AddFaculty from "./AddFaculty";
import AppButton from "../design/AppButton";
import AppNav from "../design/AppNav";
import AppTable from "../design/AppTable";
import FacultyTable from "./FacultyTable";

export default function Faculty() {
    const navigate = useNavigate();
    const data = [
        {
            facultyid: "VH123",
            facultyname: "js",
            facultyemail: "jsjairam01@gmail.com",
            facultyage: "45",
            facultydepartment: "CS"
        },
        {
            facultyid: "VH145",
            facultyname: "js",
            facultyemail: "jsjairam01@gmail.com",
            facultyage: "45",
            facultydepartment: "CS"
        }
    ];

    return (
        <>
            <div className='home-container'>
                <AppNav />
                <div style={{ padding: 20 }} >
                    <div className="d-flex justify-content-end mb-5 me-5 mt-3">
                        <AppButton type="primary" onClick={() => navigate('/Addfaculty')}>
                            Add Faculty
                        </AppButton>
                    </div>
                    <div className="content" style={{
                        maxWidth: "80%",   // adjust width as needed
                        margin: "0 auto",    // centers horizontally
                    }}>
                        <FacultyTable data={data} />
                    </div>
                </div>
            </div>
        </>
    );
}
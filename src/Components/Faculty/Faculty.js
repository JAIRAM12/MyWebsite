import { useNavigate } from "react-router-dom";
import AddFaculty from "./AddFaculty";
import AppButton from "../design/AppButton";
import AppNav from "../design/AppNav";

export default function Faculty() {
    const navigate = useNavigate();
    return (
        <>
        <AppNav />
            <div className="d-flex justify-content-end mb-3 me-5">
                <AppButton type="primary" onClick={() => navigate('/Addfaculty')}>
                    Add Faculty
                </AppButton>
            </div>
            <div className="content">
                <h1>Facult Page</h1>
                <p>This is the content for the faculty page.</p>
            </div>
        </>
    );
}
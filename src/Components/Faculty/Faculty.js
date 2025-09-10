import { useNavigate } from "react-router-dom";
import FacultyTable from "./FacultyTable";
import Search from "./BasicSearchFaculty";
import { useCallback, useContext, useEffect, useState } from "react";
import Api from "../essential/API";
import AppButton from "../essential/AppButton";
import AppCard from "../essential/AppCard";
import { MessageType } from "../essential/enums";
import { AppNotification } from "../essential/AppNotification";

export default function Faculty({ mode }) {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = useCallback(async () => {
        await Api("GET", "/api/faculty/all")
            .then((response) => {
                const data = response.data
                if (response.status === 200) {
                    setData(data)
                }
            }).catch((error) => {
                AppNotification(MessageType.ERROR, "Error", error)
            });
    },[])

    return (
        <>
            <div className="page" >
                <div className="p-4">
                    <div className="mb-3 mt-3 mr-5 p-4">
                        <Search setItem={(data) => setData(data)} mode={mode} />
                    </div>
                    <div className="content justify-content-center p-4 w-98">
                        <AppCard>
                            {/* <div className="d-flex justify-content-end mb-3">
                                <AppButton type="primary" onClick={() => navigate('/Addfaculty')}>
                                    Add Faculty
                                </AppButton>
                            </div> */}
                            <FacultyTable data={data} />
                        </AppCard>
                    </div>
                </div>
            </div>
        </>
    );
}
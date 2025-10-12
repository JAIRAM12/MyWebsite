import { memo, useCallback, useEffect, useState } from "react";
import Api from "../../essential/API";
import AppCard from "../../essential/AppCard";
import { MessageType } from "../../essential/enums";
import { AppNotification } from "../../essential/AppNotification";
import FacultyTable from "./FacultyTable";
import BasicSearchFaculty from "./BasicSearchFaculty";

const Faculty = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            await Api("GET", "/api/faculty/all").then((response) => {
                const { status, data } = response;
                if (status === 200) {
                    setData(data)
                } else {
                    AppNotification(MessageType.ERROR, "Error", "Failed to fetch data");
                }
                setLoading(false);
            })
        } catch (error) {
            setLoading(false);
            AppNotification(MessageType.ERROR, "Error", error?.message || "Something went wrong");
        }
    }, []);

    const handleSearchResults = useCallback((data) => setData(data), []);

    return (
        <div className="page">
            <div className="p-4 flex-1">
                <div className="mb-3 mt-3 mr-5 p-4">
                    <BasicSearchFaculty setItem={handleSearchResults} />
                </div>
                <div className="content justify-content-center p-4 w-98">
                    <AppCard>
                        <FacultyTable data={data} loading={loading} />
                    </AppCard>
                </div>
            </div>
        </div>
    );

};

export default memo(Faculty);

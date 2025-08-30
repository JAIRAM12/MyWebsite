import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AppTable from "../essential/AppTable";

const StudentTable = ({ data, columns }) => {
    const [studentItems, setStudentItems] = useState([]);
    
    useEffect(() => {
        if (data) {
            setStudentItems(data);
        }
    }, [data]);

    return (
        <AppTable columns={columns} dataSource={studentItems} />
    );
};

export default StudentTable;
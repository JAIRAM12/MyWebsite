import { Card } from "antd";
import AppTable from "../design/AppTable";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FacultyTable({ data }) {
    const [facultyItems, setFacultyItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(data)
        if (data) {
            setFacultyItems(data);
        }
    }, [data]);

    const facultyColumn = [
        {
            title: 'Faculty ID',
            dataIndex: 'staffId',
            key: 'facultyid',
            render: (text) => (
                <span
                    style={{ color: 'blue', cursor: 'pointer' }}
                    onClick={() => navigate('/Facultyinfo')}
                >
                    {text}
                </span>
            )
        },
        {
            title: 'Faculty Name',
            dataIndex: 'name',
            key: 'facultyname',
        },
        {
            title: 'Faculty Department',
            dataIndex: 'department',
            key: 'facultydepartment',
        },
        {
            title: 'Faculty Email',
            dataIndex: 'email',
            key: 'facultyemail',
        },
        {
            title: 'Faculty Age',
            dataIndex: 'age',
            key: 'facultyage',
        }
    ];

    return (
        // <div className="glass-container mt-2"> //Table design isn't fulled completed 
            <AppTable columns={facultyColumn} dataSource={facultyItems} />
        // </div>
    );
}

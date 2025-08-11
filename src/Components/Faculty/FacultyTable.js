import { Card } from "antd";
import AppTable from "../design/AppTable";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FacultyTable({ data }) {
    const [facultyItems, setFacultyItems] = useState(data || []);
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            setFacultyItems(data);
        }
    }, [data]);

    const facultyColumn = [
        {
            title: 'Faculty ID',
            dataIndex: 'facultyid',
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
            dataIndex: 'facultyname',
            key: 'facultyname',
        },
        {
            title: 'Faculty Department',
            dataIndex: 'facultydepartment',
            key: 'facultydepartment',
        },
        {
            title: 'Faculty Email',
            dataIndex: 'facultyemail',
            key: 'facultyemail',
        },
        {
            title: 'Faculty Age',
            dataIndex: 'facultyage',
            key: 'facultyage',
        }
    ];

    return (
        <div className="mt-2">
            <Card className="glass-card">
                <AppTable columns={facultyColumn} dataSource={facultyItems} />
            </Card>
        </div>
    );
}

import { Card } from "antd";
import AppTable from "../essential/AppTable";
import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FacultyTable = ({ data }) => {
    const [facultyItems, setFacultyItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            setFacultyItems(data);
        }
    }, [data]);

    const facultyColumn = [
        {
            title: 'Faculty ID',
            dataIndex: 'staffId',
            key: 'facultyid',
            render: (text, record) => (
                <span
                    style={{ color: 'blue', cursor: 'pointer' }}
                    onClick={() => navigate('/Facultyinfo/' + record.id)}
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
            title: 'Position',
            dataIndex: 'position',
            key: 'position',
        }
    ];

    return (
        <AppTable columns={facultyColumn} dataSource={facultyItems} />
    );
}

export default memo(FacultyTable)

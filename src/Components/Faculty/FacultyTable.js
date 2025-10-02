import AppTable from "../essential/AppTable";
import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FacultyTable = ({ data }) => {
    const [facultyItems, setFacultyItems] = useState([]);
    
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
                <Link to={`/Facultyinfo/${record.id}`} className="text-decoration-none" style={{ color: 'blue' }}>
                    {text}
                </Link>
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
        <AppTable id={'FacultyTable'} rowKey={'FacultyTable'} columns={facultyColumn} dataSource={facultyItems} />
    );
}

export default memo(FacultyTable)

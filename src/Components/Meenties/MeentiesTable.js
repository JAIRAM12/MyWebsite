import { useNavigate } from "react-router-dom";
import AppTable from "../design/AppTable"
import { useEffect, useState } from "react";

// const studentColumns = [
//     {
//         title: 'S.No',
//         dataIndex: 'id',
//         key: 'id',
//     },
//     {
//         title: 'Name',
//         dataIndex: 'name',
//         key: 'name',
//     },
//     {
//         title: 'Roll Number',
//         dataIndex: 'rollNumber',
//         key: 'rollNumber',
//     },
//     {
//         title: 'Email',
//         dataIndex: 'email',
//         key: 'email',
//     },
//     {
//         title: 'Department',
//         dataIndex: 'department',
//         key: 'department',
//     },
//     {
//         title: 'Year',
//         dataIndex: 'year',
//         key: 'year',
//     },
//     {
//         title: 'Phone',
//         dataIndex: 'phone',
//         key: 'phone',
//     }
// ];

export default function MeentiesTable({ data, columns }) {
    const [studentItems, setstudentItems] = useState(data || []);
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            setstudentItems(data);
        }
    }, [data]);


    return (

        <AppTable columns={columns} dataSource={studentItems} />
    );
}
import { useEffect, useState } from "react";
import Api from "../../essential/API";
import AppCard from "../../essential/AppCard";
import StudentTable from "../../Meenties/MeentiesTable";
import AppNotification from "../../essential/AppNotification";
import MessageType from "../../essential/enums";


const StudentInfo = ({ id }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [id])

  const fetchData = () => {
    const payload = {
      createdBy: id
    };

    Api("POST", "/api/faculty/search/meenties", payload)
      .then((response) => {
        const data = response.data
        if (response.status === 200) {
          setData(data)
        }
      }).catch((error) => {
        AppNotification(MessageType.ERROR, "Error", error)
      });
  };

  const columns = [
    {
      title: 'VH ID',
      dataIndex: 'studentId',
      key: 'studentId',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    }
  ];


  return (
    <AppCard>
      <StudentTable data={data} columns={columns} />
    </AppCard>
  )
}

export default StudentInfo;
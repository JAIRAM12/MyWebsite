import { useEffect, useState, useMemo, useCallback, memo } from "react";
import Api from "../../essential/API";
import AppCard from "../../essential/AppCard";
import StudentTable from "../../Meenties/MeentiesTable";
import { AppNotification } from "../../essential/AppNotification";
import { MessageType } from "../../essential/enums";

const StudentInfo = ({ id }) => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await Api("POST", "/api/faculty/search/meenties", { createdBy: id });
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      AppNotification(MessageType.ERROR, "Error", error);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const columns = useMemo(() => [
    { title: 'VH ID', dataIndex: 'studentId', key: 'studentId' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Department', dataIndex: 'department', key: 'department' },
    { title: 'Year', dataIndex: 'year', key: 'year' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
  ], []);

  return (
    <AppCard>
      <StudentTable data={data} columns={columns} />
    </AppCard>
  );
};

export default memo(StudentInfo);

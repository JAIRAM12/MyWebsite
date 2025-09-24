import React, { useState, useMemo } from "react";
import { Card, Row, Col } from "antd";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import AppTable from "../essential/AppTable";
import AppInput from "../essential/AppInput";
import AppButton from "../essential/AppButton";

export default function ReportPage() {
  const [data, setData] = useState([
    {
      key: "1",
      sno: 1,
      image: "/images/logo.jpg",
      name: "ABINAV",
      cse: "A",
      gender: "M",
      internship: "internship_cert.pdf",
      workshop: null,
      paper: "paper_presentation.pdf",
      sports: null,
    },
    {
      key: "2",
      sno: 2,
      image: "/images/logo.jpg",
      name: "ARAVINDHAN",
      cse: "A",
      gender: "M",
      internship: null,
      workshop: "workshop_certificate.pdf",
      paper: null,
      sports: "sports_award.pdf",
    },
    {
      key: "3",
      sno: 3,
      image: "/images/logo.jpg",
      name: "PRIYA",
      cse: "B",
      gender: "F",
      internship: "internship_cert2.pdf",
      workshop: "workshop_certificate2.pdf",
      paper: null,
      sports: null,
    },
    {
      key: "4",
      sno: 4,
      image: "/images/logo.jpg",
      name: "AARAV",
      cse: "B",
      gender: "M",
      internship: null,
      workshop: null,
      paper: null,
      sports: null,
    },
  ]);

  // === Stats Calculation ===
  const stats = useMemo(() => {
    const total = data.length;
    const count = (field) => data.filter((d) => d[field]).length;
    return {
      totalStudents: total,
      internship: count("internship"),
      workshop: count("workshop"),
      paper: count("paper"),
      sports: count("sports"),
    };
  }, [data]);

  const columns = [
    { title: "S.No", dataIndex: "sno", key: "sno" },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (url) => (
        <img
          src={url}
          alt="student"
          style={{ borderRadius: "50%", width: 40, height: 40 }}
        />
      ),
    },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "CSE", dataIndex: "cse", key: "cse" },
    {
      title: "Internship",
      dataIndex: "internship",
      key: "internship",
      render: () => <AppInput type="file" />,
    },
    {
      title: "Workshop",
      dataIndex: "workshop",
      key: "workshop",
      render: () => <AppInput type="file" />,
    },
    {
      title: "PaperPresentation",
      dataIndex: "paper",
      key: "paper",
      render: () => <AppInput type="file" />,
    },
    {
      title: "Sports",
      dataIndex: "sports",
      key: "sports",
      render: () => <AppInput type="file" />,
    },
    {
      title: "Upload",
      key: "upload",
      render: (_, record) => (
        <AppButton
          type="primary"
          onClick={() => alert(`Uploaded for ${record.name}`)}
        >
          Upload
        </AppButton>
      ),
    },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const chartData = [
    { name: "Internship", value: stats.internship },
    { name: "Workshop", value: stats.workshop },
    { name: "Paper", value: stats.paper },
    { name: "Sports", value: stats.sports },
  ];

  return (
    <div className="home-container">
      {/* <AppNav /> */}
      <div style={{ padding: 20, maxWidth: "90%", margin: "0 auto" }}>
        {/* === Top Stats === */}
        <Row gutter={16} style={{ marginBottom: 20 }}>
          <Col span={6}>
            <AppCard title="Total Students" bordered={false}>
              {stats.totalStudents}
            </AppCard>
          </Col>
          <Col span={6}>
            <AppCard title="Internship Uploaded" bordered={false}>
              {stats.internship}
            </AppCard>
          </Col>
          <Col span={6}>
            <AppCard title="Workshops Uploaded" bordered={false}>
              {stats.workshop}
            </AppCard>
          </Col>
          <Col span={6}>
            <AppCard title="Sports Uploaded" bordered={false}>
              {stats.sports}
            </AppCard>
          </Col>
        </Row>

        {/* === Chart Section === */}
        <AppCard title="Uploads Distribution" style={{ marginBottom: 20 }}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </AppCard>

        {/* === Detailed Table === */}
        <AppCard title="Student Details">
          <AppTable dataSource={data} columns={columns} />
        </AppCard>
      </div>
    </div>
  );
}

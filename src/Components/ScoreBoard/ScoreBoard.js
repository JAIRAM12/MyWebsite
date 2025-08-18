import { Card, Row, Col, Progress, Table, Statistic } from "antd";
import { UserOutlined, FileDoneOutlined, TrophyOutlined, BookOutlined } from "@ant-design/icons";
import AppNav from "../design/AppNav";

const data = [
  { key: "1", sno: 1, image: "/images/logo.jpg", name: "ABINAV", cse: "A", gender: "M", internship: "internship_cert.pdf", workshop: null, paper: "paper_presentation.pdf", sports: null },
  { key: "2", sno: 2, image: "/images/logo.jpg", name: "ARAVINDHAN", cse: "A", gender: "M", internship: null, workshop: "workshop_certificate.pdf", paper: null, sports: "sports_award.pdf" },
  { key: "3", sno: 3, image: "/images/logo.jpg", name: "PRIYA", cse: "B", gender: "F", internship: "internship_cert2.pdf", workshop: "workshop_certificate2.pdf", paper: null, sports: null },
  { key: "4", sno: 4, image: "/images/logo.jpg", name: "AARAV", cse: "B", gender: "M", internship: null, workshop: null, paper: null, sports: null },
];

export default function ScoreBoard() {
  const totalStudents = data.length;
  const internshipCount = data.filter(d => d.internship).length;
  const workshopCount = data.filter(d => d.workshop).length;
  const paperCount = data.filter(d => d.paper).length;
  const sportsCount = data.filter(d => d.sports).length;

  const totalUploads = internshipCount + workshopCount + paperCount + sportsCount;
  const maxUploads = totalStudents * 4;
  const uploadProgress = (totalUploads / maxUploads) * 100;

  return (
    <div className="home-container">
      {/* <AppNav /> */}
      <div style={{ padding: 20 }}>
        {/* Stat Cards */}
        <Row gutter={16}>
          <Col span={6}>
            <Card className="glass-container" bordered={false}>
              <Statistic title="Total Students" value={totalStudents} prefix={<UserOutlined />} />
            </Card>
          </Col>
          <Col span={6}>
            <Card className="glass-container" bordered={false}>
              <Statistic title="Internship Uploaded" value={internshipCount} prefix={<FileDoneOutlined />} />
            </Card>
          </Col>
          <Col span={6}>
            <Card className="glass-container" bordered={false}>
              <Statistic title="Workshop Uploaded" value={workshopCount} prefix={<BookOutlined />} />
            </Card>
          </Col>
          <Col span={6}>
            <Card className="glass-container" bordered={false}>
              <Statistic title="Paper Uploaded" value={paperCount} prefix={<BookOutlined />} />
            </Card>
          </Col>
        </Row>

        {/* More stats */}
        <Row gutter={16} style={{ marginTop: 20 }}>
          <Col span={6}>
            <Card className="glass-container" bordered={false}>
              <Statistic title="Sports Uploaded" value={sportsCount} prefix={<TrophyOutlined />} />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Overall Upload Progress" className="glass-container">
              <Progress percent={Math.round(uploadProgress)} status={uploadProgress < 50 ? "exception" : "active"} />
            </Card>
          </Col>
        </Row>

        {/* Recent Uploads */}
        <Row style={{ marginTop: 30 }}>
          <Col span={24}>
            <Card title="Recent Uploads" className="glass-container">
              <Table
                dataSource={data.slice(-5)}
                columns={[
                  { title: "Name", dataIndex: "name" },
                  { title: "Internship", dataIndex: "internship", render: v => v ? v : 0 },
                //   { title: "Workshop", dataIndex: "workshop", render: v => v ? "✅" : "❌" },
                  { title: "Paper", dataIndex: "paper", render: v => v ? v : 0 },
                  { title: "Sports", dataIndex: "sports", render: v => v ? v : 0 }
                ]}
                pagination={false}
                rowKey="key"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

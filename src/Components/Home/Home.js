import AppButton from '../design/AppButton';
import AppNav from '../design/AppNav';
import AppTable from '../design/AppTable';

export default function Home({ mode }) {
  const placementColumns = [
    { title: 'S.NO', dataIndex: 'sno', key: 'sno' },
    { title: 'COMPANY', dataIndex: 'company', key: 'company' },
    { title: 'ROLE', dataIndex: 'role', key: 'role' },
    { title: 'LPA', dataIndex: 'lpa', key: 'lpa' },
    { title: 'BATCH', dataIndex: 'batch', key: 'batch' },
  ];

  const placementData = [
    { key: '1', sno: 1, company: 'WILEY EDGE', role: 'SOFTWARE DEV', lpa: '9 LPA', batch: 2023 },
    { key: '2', sno: 2, company: 'TCS', role: 'PROGRAM TRAINEE', lpa: '8 LPA', batch: 2023 },
    { key: '3', sno: 3, company: 'VIRTUSA', role: 'SOFTWARE ENGINEER', lpa: '7 LPA', batch: 2023 },
  ];

  return (
    <div
      style={{
        backgroundColor: mode ? "#121212" : "#ffffff",
        color: mode ? "#ffffff" : "#000000",
        minHeight: "100vh",
      }}
    >

      {/* Hero Section */}
      <div className="p-5 text-center bg-success text-white rounded shadow-sm">
        <h1 className="display-5 fw-bold">VEL TECH HIGH TECH</h1>
        <p className="lead">
          One of India's Best Top Ranked Colleges — A legacy of excellence in engineering and innovation.
        </p>
        <AppButton type="primary">APPLY FOR INTERNSHIP</AppButton>
      </div>

      {/* Infrastructure */}
      <section className="my-5">
        <h2 className="text-center mb-4">INFRASTRUCTURE</h2>
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-lg-4 col-md-6 col-12"><img src="https://images.pexels.com/photos/12091126/pexels-photo-12091126.jpeg" className="home-image" alt="Infrastructure 1" /></div>
            <div className="col-lg-4 col-md-6 col-12"><img src="https://images.pexels.com/photos/12091126/pexels-photo-12091126.jpeg" className="home-image" alt="Infrastructure 2" /></div>
            <div className="col-lg-4 col-md-6 col-12"><img src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?_gl=1*bo5itk*_ga*ODY0NTEzOTkyLjE3NTUzNjAxNTc.*_ga_8JE65Q40S6*czE3NTU0NDU3ODkkbzIkZzEkdDE3NTU0NDYxMjQkajMyJGwwJGgw" className="home-image" alt="Infrastructure 3" /></div>
          </div>
        </div>
      </section>

      {/* News */}
      <div className="p-3 mb-4 bg-success text-white text-center rounded">
        <strong>NEWS:</strong> Admissions open for 2025 Batch. Apply Now!
      </div>

      {/* Ranking */}
      <section className="jumbotron text-center my-5">
        <h2 className="fw-bold">RANKING</h2>
        <p className="lead">
          Vel Tech was ranked <strong>83</strong> among engineering colleges in India by NIRF, recognized for its innovation & research excellence.
        </p>
      </section>

      {/* Placements */}
      <section className="my-5">
        <h2 className="text-center mb-4">PLACEMENTS</h2>
        <div className="container">
          <AppTable columns={placementColumns} dataSource={placementData} pagination={false} />
        </div>
      </section>

      {/* Campus Life */}
      <section className="my-5">
        <h2 className="text-center mb-4">CAMPUS LIFE</h2>
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 col-12"><img src="/images/collageHome.jpg" className="home-image" alt="Campus 1" /></div>
            <div className="col-lg-3 col-md-6 col-12"><img src="/images/22.jpg" className="home-image" alt="Campus 2" /></div>
            <div className="col-lg-3 col-md-6 col-12"><img src="/images/S.jpg" className="home-image" alt="Campus 3" /></div>
            <div className="col-lg-3 col-md-6 col-12"><img src="/images/09.jpg" className="img-fluid rounded shadow mb-3" alt="Campus 4" /></div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="jumbotron my-5">
        <h2 className="fw-bold text-center">HISTORY</h2>
        <p className="lead text-center">
          Established in <strong>1997</strong> by Dr. R. Rangarajan, Vel Tech has grown into a globally recognized institution, 
          committed to innovation, research, and world-class education.
        </p>
      </section>
    </div>
  );
}

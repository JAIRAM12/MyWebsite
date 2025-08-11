import AppButton from '../design/AppButton';
import AppNav from '../design/AppNav';
import AppTable from '../design/AppTable';
import '../design/CSS components/Home.css'
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./Home.css"; // optional custom styling

export default function Home() {
  const placementColumns = [
    { title: 'S.NO', dataIndex: 'sno', key: 'sno' },
    { title: 'COMPANY', dataIndex: 'company', key: 'company' },
    { title: 'ROLE', dataIndex: 'role', key: 'role' },
    { title: 'LPA', dataIndex: 'lpa', key: 'lpa' },
    { title: 'BATCH', dataIndex: 'batch', key: 'batch' },
  ];

  const placementData = [
    { key: '1', sno: 1, company: 'WILEY EDGE', role: 'SOFTWARE DEV', lpa: '9-LPA', batch: 2023 },
    { key: '2', sno: 2, company: 'TCS', role: 'PROGRAM TRAINEE', lpa: '8-LPA', batch: 2023 },
    { key: '3', sno: 3, company: 'VIRTUSA', role: 'SOFTWARE ENGINEER', lpa: '7-LPA', batch: 2023 },
  ];
  return (
    <div className='home-container'>
      <AppNav />
      <div className='container'>

      {/* Jumbotron */}
      <div className="jumbotron">
        <h1 className="display-4">VEL TECH HIGH TECH is one of India's Best Top Ranked College</h1>
        <p className="lead">VTHT is a leading Engineering College located in Chennai...</p>
        <hr className="my-4" />
        <p>Engineering College in India to have 30 students per class</p>
        <p>Compulsory internship every year</p>
        <AppButton type="primary">APPLY FOR INTERNSHIP</AppButton>
      </div>

      {/* Infrastructure */}
      <section className="my-4">
        <div className="py-4">
          <h2 className="text-center">INFRASTRUCTURE</h2>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12"><img src="/images/04.jpg" className="img-fluid pb-3" alt="" /></div>
            <div className="col-lg-4 col-md-4 col-12"><img src="/images/02.jpg" className="img-fluid pb-3" alt="" /></div>
            <div className="col-lg-4 col-md-4 col-12"><img src="/images/05.jpg" className="img-fluid pb-3" alt="" /></div>
          </div>
        </div>
      </section>

      {/* News */}
      <div className="p-3 mb-2 bg-success text-white" style={{textAlign: 'center'}}>NEWS</div>

      {/* Ranking */}
      <div className="jumbotron">
        <h1 className="display-4">RANKING</h1>
        <p className="lead">Vel Tech was ranked 83 among the engineering colleges...</p>
      </div>

      {/* Placements */}
      <div className="jumbotron">
        <h1 className="display-9">PLACEMENTS</h1>
      </div>
      <AppTable columns={placementColumns} dataSource={placementData} pagination={false}/>
      {/* <table className="table">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>COMPANY</th>
            <th>ROLE</th>
            <th>LPA</th>
            <th>BATCH</th>
          </tr>
        </thead>
        <tbody>
          <tr><th>1</th><td>WILEY EDGE</td><td>SOFTWARE DEV</td><td>9-LPA</td><td>2023</td></tr>
          <tr><th>2</th><td>TCS</td><td>PROGRAM TRAINEE</td><td>8-LPA</td><td>2023</td></tr>
          <tr><th>3</th><td>VIRTUSA</td><td>SOFTWARE ENGINEER</td><td>7-LPA</td><td>2023</td></tr>
        </tbody>
      </table> */}

      {/* Campus Lifestyle */}
      <section className="my-4">
        <div className="py-4">
          <h2 className="text-center">CAMPUS LIFE STYLE</h2>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-12"><img src="/images/collageHome.jpg" className="img-fluid pb-3" alt="" /></div>
            <div className="col-lg-3 col-md-3 col-12"><img src="/images/22.jpg" className="img-fluid pb-3" alt="" /></div>
            <div className="col-lg-3 col-md-3 col-12"><img src="/images/S.jpg" className="img-fluid pb-3" alt="" /></div>
            <div className="col-lg-3 col-md-3 col-12"><img src="/images/09.jpg" className="img-fluid pb-3" alt="" /></div>
          </div>
        </div>
      </section>

      {/* History */}
      <div className="jumbotron">
        <h1 className="display-4">HISTORY</h1>
        <p className="lead">Vel Tech was established in 1997 by Dr. R. Rangarajan...</p>
      </div>
      </div>
    </div>
  );
}

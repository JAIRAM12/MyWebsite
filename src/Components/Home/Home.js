import '../design/CSS components/Home.css'
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./Home.css"; // optional custom styling

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">VEL TECH HIGH TECH</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active"><a className="nav-link" href="#">ACADEMIC</a></li>
            <li className="nav-item active"><a className="nav-link" href="#">Program</a></li>
            <li className="nav-item active"><a className="nav-link" href="#">Placements</a></li>
            <li className="nav-item active"><a className="nav-link" href="#">Event</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Controller Examination</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Visitors</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Contact us</a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

      {/* Second Nav Buttons */}
      <nav className="navbar navbar-green bg-light">
        <p className="lead m-0">
          <button type="button" className="btn btn-success">APPLY FOR INTERNSHIP</button>{" "}
          <a href="staff table/staff table.php"><button type="button" className="btn btn-success">FACULTY</button></a>{" "}
          <a href="staff%20table/login/staff%20profile/verify/meenties/ranking/index.php"><button type="button" className="btn btn-success">STUDENT</button></a>{" "}
          <a href="staff table/admin data.php"><button type="button" className="btn btn-success">ADMIN</button></a>{" "}
          <a href="admin/index.php"><button type="button" className="btn btn-success">RANKING ADMIN</button></a>
        </p>
      </nav>

      {/* Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="/images/01.jpg" alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>VEL TECH HIGH TECH RAGARAJAN DR.SAKUNTHALA</h5>
              <p>ENGINEERING COLLEGE</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="/images/02.jpg" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>91% RESULTS IN UNIVERSITY EXAM</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="/images/03.jpg" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>100% PLACED STUDENTS IN TOP MNC COMPANIES</h5>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>

      {/* Jumbotron */}
      <div className="jumbotron">
        <h1 className="display-4">VEL TECH HIGH TECH is one of India's Best Top Ranked College</h1>
        <p className="lead">VTHT is a leading Engineering College located in Chennai...</p>
        <hr className="my-4" />
        <p>Engineering College in India to have 30 students per class</p>
        <p>Compulsory internship every year</p>
        <button type="button" className="btn btn-success">APPLY FOR INTERNSHIP</button>
      </div>

      {/* Infrastructure */}
      <section className="my-4">
        <div className="py-4">
          <h2 className="text-center">INFRASTRUCTURE</h2>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12"><img src="/images/04.jpg" className="img-fluid pb-3" alt="" /></div>
            <div className="col-lg-4 col-md-4 col-12"><img src="/images/01.jpg" className="img-fluid pb-3" alt="" /></div>
            <div className="col-lg-4 col-md-4 col-12"><img src="/images/05.jpg" className="img-fluid pb-3" alt="" /></div>
          </div>
        </div>
      </section>

      {/* News */}
      <div className="p-3 mb-2 bg-success text-white">NEWS</div>

      {/* Ranking */}
      <div className="jumbotron">
        <h1 className="display-4">RANKING</h1>
        <p className="lead">Vel Tech was ranked 83 among the engineering colleges...</p>
      </div>

      {/* Placements */}
      <div className="jumbotron">
        <h1 className="display-9">PLACEMENTS</h1>
      </div>
      <table className="table">
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
      </table>

      {/* Campus Lifestyle */}
      <section className="my-4">
        <div className="py-4">
          <h2 className="text-center">CAMPUS LIFE STYLE</h2>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-12"><img src="/images/01.jpg" className="img-fluid pb-3" alt="" /></div>
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
  );
}

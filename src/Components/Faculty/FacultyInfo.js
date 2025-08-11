import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import "../design/CSS components/FacultyInfo.css"
import VanillaTilt from "vanilla-tilt";
import AppNav from "../design/AppNav";

export default function FacultyInfo(props) {
    //   const { id } = useParams();
    const [staff, setStaff] = useState({
        name: "John Doe",
        department: "Computer Science",
        email: "john@example.com",
        phone: "1234567890",
        staffid: "12345",
        education: "PhD",
        gender: "Male",
        image: "john.jpg",
    });
    const animationRef = useRef(null);
    const tiltRef = useRef(null);

    //   useEffect(() => {
    //     // Fetch staff data from your backend
    //     fetch(`http://localhost:8080/project/newup/api/staff/${id}`)
    //       .then((res) => res.json())
    //       .then((data) => setStaff(data))
    //       .catch((err) => console.error("Error fetching staff:", err));
    //   }, [id]);

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 25,
                speed: 400,
                glare: true,
                "max-glare": 0.3
            });
        }
    }, []);

    return (
        <div className="home-container">
            <AppNav />

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "85vh" // full viewport height
                }}
            >
                <div
                    className="glass-container mb-2"
                    ref={tiltRef}
                    style={{ width: "30%" }}
                >

                    <div className="animation" ref={animationRef}>
                        <h1><b>{staff.name}</b></h1>

                        <div className="pic">
                            <img
                                src="/images/logo.jpg"
                                alt="Profile"
                            />
                        </div>

                        <div>
                            <h4>
                                Department: <span>{staff.department}</span>
                                Email: <span>{staff.email}</span>
                            </h4>
                        </div>
                        <br />

                        <div>
                            <h4>
                                Phone: <span>{staff.phone}</span>
                                StaffId: <span>{staff.staffid}</span>
                            </h4>
                        </div>
                        <br />

                        <div>
                            <h4>
                                Education: <span>{staff.education}</span>
                                Gender: <span>{staff.gender}</span>
                            </h4>
                        </div>
                        <br />

                        <button className="btn btn-primary">
                            <a
                                href={`/verify/meenties/db image and doc/time table/${staff.timetable}`}
                                style={{ color: "#fff", textDecoration: "none" }}
                            >
                                <strong>Working Time</strong>
                            </a>
                        </button>

                        <button className="btn btn-primary" style={{ marginLeft: "10px" }}>
                            <a
                                href={`/verify/meenties/db image and doc/read more/${staff.readmore}`}
                                style={{ color: "#fff", textDecoration: "none" }}
                            >
                                <strong>Read More</strong>
                            </a>
                        </button>

                        <button className="btn btn-primary" style={{ marginLeft: "10px" }}>
                            <a
                                href="/verify/verify_meenties.php"
                                style={{ color: "#fff", textDecoration: "none" }}
                            >
                                <strong>Meenties</strong>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

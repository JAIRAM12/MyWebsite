import React, { useEffect, useState, useRef, Children } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import "../design/CSS components/FacultyInfo.css"
import AppButton from "../essential/AppButton";
import Api from "../essential/API";
import { Card, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import AppCard from "../essential/AppCard";
import AppTabs from "../essential/AppTabs";
import Detail from "./Components/Details";
import Meenties from "../Meenties/Meenties";
import StudentInfo from "./Components/Student";
import AppNotification from "../essential/AppNotification";
import MessageType from "../essential/enums";

export default function FacultyInfo(props) {
    const { id } = useParams();
    const [staff, setStaff] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = () => {
        Api("POST", `/api/faculty/${id}`)
            .then((response) => {
                const data = response.data
                if (response.status === 200) {
                    setStaff(data)
                }
            }).catch((error) => {
                AppNotification(MessageType.ERROR, "Error", error)
            });
    }

    const callback = (data) => {
        console.log(data)
    }

    const items = [
        { key: "1", tab: "Detail", children: <Detail data={staff} /> },
        { key: "2", tab: "Student Info", children: <StudentInfo id={staff.staffId} /> },
        { key: "3", tab: "Student Leave", children: <h1>helo</h1> },
        { key: "4", tab: "Tab 2", children: <h1>helo</h1> },
    ]

    return (
        <>
            <section class="bg-light py-3 py-md-5 py-xl-8">
                <div class="container">
                    <div class="row gy-4 gy-lg-0">
                        <div class="col-12 col-lg-4 col-xl-3">
                            <div class="row gy-4">
                                <div class="col-12">
                                    <AppCard title={'Welcome, ' + staff.name}>
                                        <div className="text-center mb-3">
                                            <img
                                                src={`data:image/png;base64,${staff.staffImage?.data}`}
                                                alt={staff.name}
                                                style={{ width: "50%", height: "50%", objectFit: "cover" }}
                                                className="mx-auto d-block rounded-circle"
                                            />
                                        </div>
                                        <h5 className="text-center mb-1">{staff.name}</h5>
                                        <p className="text-center text-secondary mb-4">{staff.position}</p>
                                        <AppButton type="primary" onClick={() => navigate('/AddMeenties', { state: { staffId: staff.staffId, id: staff.id } })}>
                                            Add Faculty
                                        </AppButton>
                                    </AppCard>

                                </div>
                                <div class="col-12">
                                    <AppCard title={'Social'}>
                                        <a href="#!" class="d-inline-block bg-dark link-light lh-1 p-2 rounded mr-2">
                                            <i class="bi bi-youtube"></i>
                                        </a>
                                        <a href="#!" class="d-inline-block bg-dark link-light lh-1 p-2 rounded mr-2">
                                            <i class="bi bi-twitter-x"></i>
                                        </a>
                                        <a href="#!" class="d-inline-block bg-dark link-light lh-1 p-2 rounded mr-2">
                                            <i class="bi bi-facebook"></i>
                                        </a>
                                        <a href="#!" class="d-inline-block bg-dark link-light lh-1 p-2 rounded mr-2">
                                            <i class="bi bi-linkedin"></i>
                                        </a>
                                    </AppCard>
                                </div>
                                <div class="col-12">
                                    <AppCard title={'About Me'}>
                                        <ul class="list-group list-group-flush mb-0">
                                            <li class="list-group-item">
                                                <h6 class="mb-1">
                                                    <span class="bii bi-mortarboard-fill me-2"></span>
                                                    Education
                                                </h6>
                                                {staff.education?.map((data, idx) => {
                                                    return <span key={idx} class="badge text-bg-primary mr-2">{data}</span>;
                                                })}

                                            </li>
                                            <li class="list-group-item">
                                                <h6 class="mb-1">
                                                    <span class="bii bi-geo-alt-fill me-2"></span>
                                                    Location
                                                </h6>
                                                <span>{staff.address}</span>
                                            </li>
                                        </ul>
                                    </AppCard>
                                </div>
                                <div class="col-12">
                                    <AppCard title={'Skills'}>
                                        {staff.skills
                                            ?.map((data, idx) => {
                                                return <span class="badge text-bg-primary mr-2" key={idx}>{data}</span>
                                            })}
                                    </AppCard>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-8 col-xl-9">
                            <AppCard >
                                <AppTabs items={items} onChange={callback} />
                            </AppCard>
                        </div>
                    </div>
                </div>

            </section>
        </>

    );
}

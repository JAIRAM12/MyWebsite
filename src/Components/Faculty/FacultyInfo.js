import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import "../design/CSS components/FacultyInfo.css"
import AppButton from "../essential/AppButton";
import Api from "../essential/API";
import { Card, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";

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
                console.error("❌ Error fetching staff:", error);
                alert("❌ Error fetching staff");
            });
    }

    const callback = (data) => {
        console.log(data)
    }

    return (
        <>
            <section class="bg-light py-3 py-md-5 py-xl-8">
                <div class="container">
                    <div class="row gy-4 gy-lg-0">
                        <div class="col-12 col-lg-4 col-xl-3">
                            <div class="row gy-4">
                                <div class="col-12">
                                    <AppCard title={'Welcome,' + staff.name}>
                                        <div class="text-center mb-3">
                                            <img src="" class="img-fluid rounded-circle" alt={staff.name} />
                                        </div>
                                        <h5 class="text-center mb-1">{staff.name}</h5>
                                        <p class="text-center text-secondary mb-4">Project Manager</p>
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
                                                {/* <span>{staff.department?.map((data) =>{
                                                })}</span> */}
                                            </li>
                                            <li class="list-group-item">
                                                <h6 class="mb-1">
                                                    <span class="bii bi-geo-alt-fill me-2"></span>
                                                    Location
                                                </h6>
                                                <span>{staff.name}</span>
                                            </li>
                                            {/* <li class="list-group-item">
                                                <h6 class="mb-1">
                                                    <span class="bii bi-building-fill-gear me-2"></span>
                                                    Company
                                                </h6>
                                                <span>GitHub Inc</span>
                                            </li> */}
                                        </ul>
                                    </AppCard>
                                </div>
                                <div class="col-12">
                                    <AppCard title={'Skills'}>
                                        {/* {staff.skills?.map((data) => {
                                            <span class="badge text-bg-primary mr-2">HTML</span>
                                        })} */}
                                    </AppCard>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-8 col-xl-9">
                            <AppCard >
                                <Tabs onChange={callback} type="card">
                                    <TabPane tab="Tab 1" key="1">
                                        Content of Tab Pane 1
                                    </TabPane>
                                    <TabPane tab="Tab 2" key="2">
                                        Content of Tab Pane 2
                                    </TabPane>
                                    <TabPane tab="Tab 3" key="3">
                                        Content of Tab Pane 3
                                    </TabPane>
                                </Tabs>
                            </AppCard>
                        </div>
                    </div>
                </div>

            </section>
        </>

    );
}

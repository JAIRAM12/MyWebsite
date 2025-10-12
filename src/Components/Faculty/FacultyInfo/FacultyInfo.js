import { useEffect, useState, useCallback, memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppButton from "../../essential/AppButton";
import Api from "../../essential/API";
import AppCard from "../../essential/AppCard";
import AppTabs from "../../essential/AppTabs";
import { AppNotification } from "../../essential/AppNotification";
import { MessageType } from "../../essential/enums";
import AppImage from "../../essential/AppImage";
import Upcoming from "../../essential/enums/FutureUpcoming";
import Detail from "./Components/Detail";

const FacultyInfo = (props) => {
    const { id } = useParams();
    const [staff, setStaff] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
        education: [],
        staffId: "",
        password: "",
        skills: [],
        image: null,
        address: "",
        position: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = useCallback(async () => {
        await Api("POST", `/api/faculty/${id}`)
            .then((response) => {
                const data = response.data
                if (response.status === 200) {
                    setStaff(data)
                }
            }).catch((error) => {
                AppNotification(MessageType.ERROR, "Error", error)
            });
    },[])

    const callback = (data) => {
        console.log(data)
    }

    const items = [
        { key: "1", label: "Detail", children: <Detail data={staff} /> },
        { key: "2", label: "Student Info", children: <StudentInfo id={staff.staffId} /> },
        { key: "3", label: "Student Leave", children: <Upcoming  name="Student Leave Feature" /> },
    ]

    return (
        <>
            <section className="bg-light py-3 py-md-5 py-xl-8">
                <div className="container">
                    <div className="row gy-4 gy-lg-0">
                        <div className="col-12 col-lg-4 col-xl-3">
                            <div className="row gy-4">
                                <div className="col-12">
                                    <AppCard title={'Welcome, ' + staff.name}>
                                        <div className="text-center mb-3">
                                            <AppImage
                                                data={staff.image?.data}
                                                name={staff.name}
                                                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                                className="mx-auto d-block rounded-circle"
                                            />
                                            <h5 className="text-center mb-1">{staff.name}</h5>
                                            <p className="text-center text-secondary mb-4">{staff.position}</p>
                                            <AppButton type="primary" btnId={'addmeenties'} className='mr-2' btnOnClick={() => navigate('/AddMeenties', { state: { staffId: staff.staffId, id: staff.id } })}>
                                                Add Meenties
                                            </AppButton>
                                            <AppButton type="primary" btnId={'upload'} btnOnClick={() => navigate('/Meenties', { state: { staffId: staff.staffId, id: staff.id } })}>
                                                Upload
                                            </AppButton>
                                        </div>
                                    </AppCard>
                                </div>
                                {/* <div className="col-12">
                                    <AppCard title={'Social'}>
                                        <a href="#!" className="d-inline-block bg-dark link-light lh-1 p-2 rounded mr-2">
                                            <i className="bi bi-youtube"></i>
                                        </a>
                                        <a href="#!" className="d-inline-block bg-dark link-light lh-1 p-2 rounded mr-2">
                                            <i className="bi bi-twitter-x"></i>
                                        </a>
                                        <a href="#!" className="d-inline-block bg-dark link-light lh-1 p-2 rounded mr-2">
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                        <a href="#!" className="d-inline-block bg-dark link-light lh-1 p-2 rounded mr-2">
                                            <i className="bi bi-linkedin"></i>
                                        </a>
                                    </AppCard>
                                </div> */}
                                <div className="col-12">
                                    <AppCard title={'About Me'}>
                                        <ul className="list-group list-group-flush mb-0">
                                            <li className="list-group-item">
                                                <h6 className="mb-3">
                                                    <span className="bii bi-mortarboard-fill me-2"></span>
                                                    Education
                                                </h6>
                                                {staff.education.map((data, idx) => (
                                                    <AppTag className="mr-2" key={idx}>{data}</AppTag>
                                                ))
                                                }
                                            </li>
                                            <li className="list-group-item">
                                                <h6 className="mb-1">
                                                    <span className="bii bi-geo-alt-fill me-2"></span>
                                                    Location
                                                </h6>
                                                <span>{staff.address}</span>
                                            </li>
                                        </ul>
                                    </AppCard>
                                </div>
                                <div className="col-12">
                                    <AppCard title={'Skills'}>
                                        {staff.skills?.map((data, idx) => {
                                            return <AppTag className="mr-2" key={idx}>{data}</AppTag>
                                        })}
                                    </AppCard>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 col-xl-9">
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

export default memo(FacultyInfo);

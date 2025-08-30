import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import MeentiesTable from "./MeentiesTable";
import { DeleteOutlined } from "@ant-design/icons";
import AppInput from "../essential/AppInput";
import AppButton from "../essential/AppButton";
import AppCard from "../essential/AppCard";
import { useLocation, useNavigate } from "react-router-dom";
import Api from "../essential/API";


export default function AddMeenties() {
    const [studentsData, setStudentsData] = useState([]);
    const Location = useLocation()
    const { staffId, id } = Location.state
    const navigate = useNavigate()
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            phone: "",
            department: "",
            studentId: "",
            year: "",
        }
    });


    const onSubmit = (data) => {
        if (data) {
            setStudentsData((prev) => [...prev, data]);
        }
        reset();
    };

     const handleDeleteStudent = (studentId) => {
        setStudentsData(prev => prev.filter(student => student.studentid !== studentId));
    };

    const Submit = () => {
        const finalData = studentsData.map((data) => {
    return {
        ...data,
        createdBy: staffId
    };
});
        Api("POST", "/api/student", finalData)
            .then((response) => {
                const data = response.data
                if (response.status === 200) {
                    reset();
                    AppNotification(MessageType.SUCCESS, "Success", "Staff saved successfully!")
                    navigate(-1)
                }
            })
            .catch((error) => {
                AppNotification(MessageType.ERROR, "Error", error)
            });
    }

    const studentColumns = [
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <AppButton 
                    type="primary" 
                    danger 
                    icon={<DeleteOutlined />}
                    onClick={() => handleDeleteStudent(record.studentid)}
                />
            ),
        },
        {
            title: 'VH ID',
            dataIndex: 'studentId',
            key: 'studentId',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        }
    ];

return (
    <>
        <div className="page" >
            <div className="d-flex justify-content-end mb-3 me-5 mt-3" style={{ padding: 20 }} >
                <AppCard style={{ width: "100%", margin: "0 auto" }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            {/* Student ID */}
                            <div className="col-md-2">
                                <Controller
                                    name="studentId"
                                    control={control}
                                    rules={{ required: "Student ID is required" }}
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <label>Student ID</label>
                                            <AppInput {...field} placeholder="FAC12345" status={error ? "error" : ""} />
                                            {errors.studentId && <p className="text-danger">{errors.studentId.message}</p>}
                                        </>
                                    )}
                                />
                            </div>
                            <div className="col-md-2">
                                <Controller
                                    name="phone"
                                    control={control}
                                    rules={{ required: "Phone is required" }}
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <label>Student Phone</label>
                                            <AppInput {...field} placeholder="FAC12345" status={error ? "error" : ""} />
                                            {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                                        </>
                                    )}
                                />
                            </div>
                            <div className="col-md-2">
                                <Controller
                                    name="year"
                                    control={control}
                                    rules={{ required: "Year is required" }}
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <label>Year</label>
                                            <AppInput {...field} placeholder="FAC12345" status={error ? "error" : ""} />
                                            {errors.year && <p className="text-danger">{errors.year.message}</p>}
                                        </>
                                    )}
                                />
                            </div>
                            {/* Name */}
                            <div className="col-md-2">
                                <Controller
                                    name="name"
                                    control={control}
                                    rules={{ required: "Name is required" }}
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <label>Name</label>
                                            <AppInput {...field} placeholder="John Doe" status={error ? "error" : ""} />
                                            {errors.name && <p className="text-danger">{errors.name.message}</p>}
                                        </>
                                    )}
                                />
                            </div>
                            {/* Department */}
                            <div className="col-md-2">
                                <Controller
                                    name="department"
                                    control={control}
                                    rules={{ required: "Department is required" }}
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <label>Department</label>
                                            <AppInput
                                                inputType="select"
                                                {...field}
                                                options={[
                                                    { value: "CSE", label: "Computer Science" },
                                                    { value: "ECE", label: "ECE" },
                                                    { value: "EEE", label: "EEE" },
                                                    { value: "Mechanic", label: "Mechanic" }
                                                ]}
                                                placeholder="Select Department"
                                                style={{ width: "100%" }}
                                                status={error ? "error" : ""}
                                            />
                                            {errors.studentdepartment && <p className="text-danger">{errors.studentdepartment.message}</p>}
                                        </>
                                    )}
                                />
                            </div>
                            {/* Buttons */}
                            <div>
                                <AppButton type="primary" htmlType="submit" className="mt-2">Save Student</AppButton>
                                <AppButton type="default" onClick={() => reset()} className="mt-2 ms-2">Reset</AppButton>
                            </div>
                        </div>
                    </form>
                </AppCard>
            </div>
            <div className="content justify-content-center" style={{ width: "98%", padding: 19 }}>
                <AppCard>
                    <MeentiesTable data={studentsData} columns={studentColumns} />
                    <div className="d-flex justify-content-end mb-3">
                        <AppButton type="primary" className='mt-3' onClick={Submit}>
                            Submit
                        </AppButton>
                    </div>
                </AppCard>
            </div>
        </div>
    </>
);
}


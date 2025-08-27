import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import MeentiesTable from "./MeentiesTable";
import AppInput from "../essential/AppInput";
import AppButton from "../essential/AppButton";


export default function AddMeenties() {
    const { control, handleSubmit, reset, formState: { errors } } = useForm();
    const [facultyData, setFacultyData] = useState([]);

    const onSubmit = (data) => {
        setFacultyData((prev) => [...prev, data]);
        reset();
    };

    return (
        <>
        <div className="home-container">
            {/* <AppNav /> */}
                        <AppCard title="Add Student" className="glass-card">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        {/* Student ID */}
                        <div className="col-md-2">
                            <Controller
                                name="facultyid"
                                control={control}
                                rules={{ required: "Student ID is required" }}
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <label>Student ID</label>
                                        <AppInput {...field} placeholder="FAC12345" status={error ? "error" : ""} />
                                        {errors.facultyid && <p className="text-danger">{errors.facultyid.message}</p>}
                                    </>
                                )}
                            />
                        </div>
                        {/* Name */}
                        <div className="col-md-2">
                            <Controller
                                name="facultyname"
                                control={control}
                                rules={{ required: "Name is required" }}
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <label>Name</label>
                                        <AppInput {...field} placeholder="John Doe" status={error ? "error" : ""} />
                                        {errors.facultyname && <p className="text-danger">{errors.facultyname.message}</p>}
                                    </>
                                )}
                            />
                        </div>
                        {/* Email */}
                        <div className="col-md-2">
                            <Controller
                                name="facultyemail"
                                control={control}
                                rules={{
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                                }}
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <label>Email</label>
                                        <AppInput {...field} placeholder="john@example.com" status={error ? "error" : ""} />
                                        {errors.facultyemail && <p className="text-danger">{errors.facultyemail.message}</p>}
                                    </>
                                )}
                            />
                        </div>
                        {/* Age */}
                        <div className="col-md-2">
                            <Controller
                                name="facultyage"
                                control={control}
                                rules={{ required: "Age is required" }}
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <label>Age</label>
                                        <AppInput inputType='number' {...field} min={20} max={80} style={{ width: "100%" }} status={error ? "error" : ""} />
                                        {errors.facultyage && <p className="text-danger">{errors.facultyage.message}</p>}
                                    </>
                                )}
                            />
                        </div>
                        {/* Department */}
                        <div className="col-md-2">
                            <Controller
                                name="facultydepartment"
                                control={control}
                                rules={{ required: "Department is required" }}
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <label>Department</label>
                                        <AppInput
                                            inputType="select"
                                            {...field}
                                            options={[
                                                { value: "CS", label: "Computer Science" },
                                                { value: "Math", label: "Mathematics" },
                                                { value: "Physics", label: "Physics" },
                                                { value: "Chemistry", label: "Chemistry" }
                                            ]}
                                            placeholder="Select Department"
                                            style={{ width: "100%" }}
                                            status={error ? "error" : ""}
                                        />
                                        {errors.facultydepartment && <p className="text-danger">{errors.facultydepartment.message}</p>}
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
            <MeentiesTable data={facultyData} />
            </div>
        </>
    );
}

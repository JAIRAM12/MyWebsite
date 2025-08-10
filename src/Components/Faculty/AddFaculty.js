import { useForm, Controller } from "react-hook-form";
import { Select, Card } from "antd";
import AppInput from "../design/AppInput";
import AppButton from "../design/AppButton";
import { useState } from "react";
import FacultyTable from "./FacultyTable";
// import FacultyTable from "./FacultyTable";
// import FacultyTable from "./FacultyTable";

export default function AddFaculty(props) {
    const { control, handleSubmit, reset, formState: { errors } } = useForm();
    const [facultyData, setFacultyData] = useState([])

    const onSubmit = (data) => {
    console.log("Faculty Data:", data);
    setFacultyData((prev) => [...prev, data]); // ✅ Add to array
    reset();
};

        // useFacultyData((prev) =>{
        //     ...prev,
        //     data
        // })
        // API call or state update here
        // reset();
    // };

    return (
        <>
            <Card title="Add Faculty" className="glass-card">
                <h2>Add Faculty</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        {/* Faculty ID */}
                        <div className="col-md-2">
                            <Controller
                                name="facultyid"
                                control={control}
                                rules={{ required: "Faculty ID is required" }}
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <label>Faculty ID</label>
                                        <AppInput {...field} placeholder="FAC12345" status={error ? "error" : ""} />
                                        {errors.facultyId && (
                                            <p className="text-danger">{errors.facultyId.message}</p>
                                        )}
                                    </>
                                )}
                            />
                        </div>
                        <div className="col-md-2">

                            {/* Name */}
                            <Controller
                                name="facultyname"
                                control={control}
                                rules={{ required: "Name is required" }}
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <label>Name</label>
                                        <AppInput {...field} placeholder="John Doe" status={error ? "error" : ""} />
                                        {errors.name && (
                                            <p className="text-danger">{errors.name.message}</p>
                                        )}
                                    </>
                                )}
                            /></div><div className="col-md-2">

                            {/* Email */}
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
                                        {errors.email && (
                                            <p className="text-danger">{errors.email.message}</p>
                                        )}
                                    </>
                                )}
                            /></div>
                        <div className="col-md-2">

                            {/* Age */}
                            <Controller
                                name="facultyage"
                                control={control}
                                rules={{ required: "Age is required"     }}
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <label>Age</label>
                                        <AppInput inputTyput='number' {...field} min={20} max={80} style={{ width: "100%" }} status={error ? "error" : ""} />
                                        {errors.age && (
                                            <p className="text-danger">{errors.age.message}</p>
                                        )}
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
                                        <AppInput inputType="select"
                                            {...field}
                                            placeholder="Select Department"
                                            style={{ width: "100%" }} status={error ? "error" : ""}
                                        >
                                            <Select.Option value="CS">Computer Science</Select.Option>
                                            <Select.Option value="Math">Mathematics</Select.Option>
                                            <Select.Option value="Physics">Physics</Select.Option>
                                            <Select.Option value="Chemistry">Chemistry</Select.Option>
                                        </AppInput>
                                        {errors.department && (
                                            <p className="text-danger">{errors.department.message}</p>
                                        )}
                                    </>
                                )}
                            />
                        </div>
                        <div>

                            <AppButton type="primary" htmlType="submit" className="mt-2">
                                Save Faculty
                            </AppButton>
                            <AppButton type="default" onClick={() => reset()} className="mt-2 ms-2">
                                Reset
                            </AppButton>
                        </div>
                    </div>
                </form>
            </Card>
            <FacultyTable data={facultyData} />

        </>
    );
}

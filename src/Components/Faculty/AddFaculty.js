import { useForm, Controller } from "react-hook-form";
import { Input, InputNumber, Button, Select, Card } from "antd";
import AppInput from "../design/AppInput";
import AppButton from "../design/AppButton";

export default function AddFaculty() {
    const { control, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Faculty Data:", data);
        // API call or state update here
        reset();
    };

    return (
        <>
        {/* // <div className="glass container" >
        // <div style={{ maxWidth: 500, margin: "0 auto", padding: 20 }}> */}
            {/* <div className="card" > */}
            <Card title="Add Faculty" className="glass-card">
            <h2>Add Faculty</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Faculty ID */}
                <Controller
                    name="facultyId"
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

                {/* Name */}
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: "Name is required" }}
                    render={({ field, fieldState: { error } }) => (
                        <>
                            <label>Name</label>
                            <AppInput {...field} placeholder="John Doe" status={error ? "error" : ""}/>
                            {errors.name && (
                                <p className="text-danger">{errors.name.message}</p>
                            )}
                        </>
                    )}
                />

                {/* Email */}
                <Controller
                    name="email"
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
                />

                {/* Age */}
                <Controller
                    name="age"
                    control={control}
                    rules={{ required: "Age is required", min: 20, max: 80 }}
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

                {/* Department */}
                <Controller
                    name="department"
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

                <AppButton type="primary" htmlType="submit" className="mt-4">
                    Save Faculty
                </AppButton>
                <AppButton type="default" onClick={() => reset()} className="mt-2 ms-2">
                    Reset
                </AppButton>
            </form>
            </Card>
        {/* // </div>
        
        // </div> */}
        </>
    );
}

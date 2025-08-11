import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import AppInput from "../design/AppInput";
import AppNav from "../design/AppNav";
import '../design/CSS components/AddFaculty.css'
import AppButton from "../design/AppButton";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

export default function AddStaff() {
    const navigate = useNavigate();
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            department: "",
            education: "",
            staffid: "",
            pass: "",
            image: null,
        }
    });

    const [fileNames, setFileNames] = useState({
        image: "No file selected",
    });

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
        reset();
        navigate('/faculty')
        setFileNames({
            image: "No file selected",
        });
    };

    return (
        <div className="home-container">
            <AppNav />
            <div className="container mt-2" style={{
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                borderRadius: "8px",
                width: '50%'
            }}>
                <header>Add new staff</header>
                <form className="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">

                    {/* Name */}
                    <div className="input-box">
                        <label>Name:</label>
                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: "Name is required" }}
                            render={({ field }) => (
                                <AppInput {...field} placeholder="Enter the Staff name" />
                            )}
                        />
                        {errors.name && <span className="error-msg">{errors.name.message}</span>}
                    </div>

                    {/* Email */}
                    <div className="input-box">
                        <label>Mail:</label>
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email format"
                                }
                            }}
                            render={({ field }) => (
                                <AppInput {...field} type="email" placeholder="Enter your email" />
                            )}
                        />
                        {errors.email && <span className="error-msg">{errors.email.message}</span>}
                    </div>

                    {/* Phone */}
                    <div className="column">
                        <div className="input-box">
                            <label>Phone NO:</label>
                            <Controller
                                name="phone"
                                control={control}
                                rules={{
                                    required: "Phone number is required",
                                    minLength: { value: 10, message: "Must be at least 10 digits" }
                                }}
                                render={({ field }) => (
                                    <AppInput {...field} type="number" placeholder="Enter your phone no" />
                                )}
                            />
                            {errors.phone && <span className="error-msg">{errors.phone.message}</span>}
                        </div>

                        {/* Department */}
                        <div className="input-box">
                            <label>Department:</label>
                            <Controller
                                name="department"
                                control={control}
                                rules={{ required: "Department is required" }}
                                render={({ field }) => (
                                    <AppInput {...field} placeholder="Enter the Department" />
                                )}
                            />
                            {errors.department && <span className="error-msg">{errors.department.message}</span>}
                        </div>

                        {/* Education */}
                        <div className="input-box">
                            <label>Education:</label>
                            <Controller
                                name="education"
                                control={control}
                                rules={{ required: "Education is required" }}
                                render={({ field }) => (
                                    <AppInput {...field} placeholder="Enter the education" />
                                )}
                            />
                            {errors.education && <span className="error-msg">{errors.education.message}</span>}
                        </div>
                    </div>

                    {/* Staff ID + Password */}
                    <div className="column">
                        <div className="input-box">
                            <label>Staff ID:</label>
                            <Controller
                                name="staffid"
                                control={control}
                                rules={{ required: "Staff ID is required" }}
                                render={({ field }) => (
                                    <AppInput {...field} placeholder="Enter your ID" />
                                )}
                            />
                            {errors.staffid && <span className="error-msg">{errors.staffid.message}</span>}
                        </div>

                        <div className="input-box">
                            <label>Password:</label>
                            <Controller
                                name="pass"
                                control={control}
                                rules={{
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be at least 6 characters" }
                                }}
                                render={({ field }) => (
                                    <AppInput {...field} type="password" placeholder="Enter the password" />
                                )}
                            />
                            {errors.pass && <span className="error-msg">{errors.pass.message}</span>}
                        </div>
                    </div>

                    {/* File Inputs */}
                    <div className="file-input">
                        <label>Image:</label>
                        <Controller
                            name="image"
                            control={control}
                            rules={{ required: "Image is required" }}
                            render={({ field }) => (
                                <AppInput
                                    type="file"
                                    accept=".jpg, .jpeg, .png"
                                    className='primary'
                                    onChange={async (e) => {
                                        const file = e.target.files[0];
                                        if (!file) {
                                            field.onChange(null);
                                            setFileNames((prev) => ({
                                                ...prev,
                                                image: "No file selected",
                                            }));
                                            return;
                                        }

                                        // Convert file to Base64
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                            field.onChange(reader.result); // store base64 string
                                        };
                                        reader.readAsDataURL(file);

                                        // Update displayed filename
                                        setFileNames((prev) => ({
                                            ...prev,
                                            image: file.name,
                                        }));
                                    }}
                                />
                            )}
                        />
                        <span className="file-input-name">{fileNames.image}</span>
                        {errors.image && <span className="error-msg">{errors.image.message}</span>}
                    </div>
                    <div>
                        <AppButton type="primary" htmlType="submit" className="mt-2">
                            Save Faculty
                        </AppButton>
                        <AppButton type="default" onClick={() => { navigate('/faculty'); reset() }} className="mt-2 ms-2">
                            Cancel
                        </AppButton></div>
                </form>
            </div>
        </div>
    );
}

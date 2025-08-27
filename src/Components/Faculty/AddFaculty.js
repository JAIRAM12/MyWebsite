import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import AppInput from "../essential/AppInput";
import AppNav from "../essential/AppNav";
// import '../design/CSS components/AddFaculty.css'
import AppButton from "../essential/AppButton";
import { useNavigate } from "react-router-dom";
import Api from "../essential/API";
import { UploadOutlined } from '@ant-design/icons';
import { Upload } from "antd";

export default function AddStaff({ mode }) {
    const navigate = useNavigate();
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            department: "",
            education: "",
            staffId: "",
            pass: "",
            skills: "",
            image: null,
            address: "",
        }
    });

    const [fileNames, setFileNames] = useState({
        image: "No file selected",
    });

    const convertIntoBased64 = async (file) => {
        // const file = e.target.files[0];
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
    }

    const onSubmit = (data) => {
        const educationArray = data.education.split(',').map(item => item.trim());
        const skillsArray = data.skills.split(',').map(item => item.trim());
        const payload ={
            ...data,
            education: educationArray,
            skills: skillsArray
            
        }
        Api("POST", "/api/faculty", payload)
            .then((response) => {
                const data = response.data
                // Axios response is always successful here (status 2xx)
                if (response.status === 200) {
                    reset();
                    navigate("/faculty");
                    setFileNames({ image: "No file selected" });
                    alert("Staff saved successfully!");
                }
            })
            .catch((error) => {
                // Axios throws for errors outside 2xx
                console.error("❌ Error saving staff:", error);
                alert("❌ Error saving staff");
            });
    };
    return (
        <>
            <section className={`${mode ? "bg-dark" : "bg-light"} py-4`}>
                <form className="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <div className="container py-3">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col">
                                <div className={`card card-registration my-4 ${mode ? "dark-mode" : "light-mode"}`}>
                                    <div className="row g-0">
                                        <div className="col-xl-6 d-none d-xl-block">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                                alt="Sample photo"
                                                className="img-fluid"
                                                style={{
                                                    borderTopLeftRadius: ".25rem",
                                                    borderBottomLeftRadius: ".25rem",
                                                    height: "100%", // use full height of card instead of fixed 90%
                                                    objectFit: "cover" // prevent distortion
                                                }}
                                            />
                                        </div>

                                        <div className="col-xl-6">
                                            <div className="card-body p-md-5 text-black">
                                                <h3 className="mb-5 text-uppercase">Faculty registration form</h3>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div data-mdb-input-init className="form-outline">
                                                            <label className="form-label fw-bold" htmlFor="form3Example1m">
                                                                First name
                                                            </label>
                                                            <Controller
                                                                name="name"
                                                                control={control}
                                                                rules={{ required: "Name is required" }}
                                                                render={({ field }) => (
                                                                    <AppInput
                                                                        {...field}
                                                                        id="form3Example1m"
                                                                        className="form-control form-control-lg"
                                                                        placeholder="Enter the Staff name"
                                                                        status={errors.name ? "error" : ''}
                                                                    />
                                                                )}
                                                            />
                                                            {errors.name && <span className="error-msg">{errors.name.message}</span>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div data-mdb-input-init className="form-outline">
                                                            <label className="form-label fw-bold" htmlFor="form3Example1n">Email</label>
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
                                                                    <AppInput {...field} type="email" id="form3Example1m"
                                                                        className="form-control form-control-lg" placeholder="Enter your email" />
                                                                )}
                                                            />
                                                            {/* {errors.email && <span classNameName="error-msg">{errors.email.message}</span>} */}
                                                            {errors.email && (
                                                                <span className="error-msg">
                                                                    {errors.email.message}
                                                                </span>
                                                            )}

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div data-mdb-input-init className="form-outline">
                                                            <label className="form-label fw-bold" htmlFor="form3Example1m1">Phone No</label>

                                                            {/* <input type="text" id="form3Example1m1" className="form-control form-control-lg" /> */}
                                                            <Controller
                                                                name="phone"
                                                                control={control}
                                                                rules={{
                                                                    required: "Phone number is required",
                                                                    minLength: { value: 10, message: "Must be at least 10 digits" }
                                                                }}
                                                                render={({ field }) => (
                                                                    <AppInput {...field} type="number" id="form3Example1m"
                                                                        className="form-control form-control-lg" placeholder="Enter your phone no" />
                                                                )}
                                                            />
                                                            {errors.phone && <span className="error-msg">{errors.phone.message}</span>}

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div data-mdb-input-init className="form-outline">
                                                            <label className="form-label fw-bold" htmlFor="form3Example1n1">Department</label>

                                                            <Controller
                                                                name="department"
                                                                control={control}
                                                                rules={{ required: "Department is required" }}
                                                                render={({ field }) => (
                                                                    <AppInput {...field} id="form3Example1m"
                                                                        className="form-control form-control-lg" placeholder="Enter the Department" />
                                                                )}
                                                            />
                                                            {errors.department && <span className="error-msg">{errors.department.message}</span>}

                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-mdb-input-init className="form-outline mb-4">
                                                    <label className="form-label fw-bold" htmlFor="form3Example8">Education</label>
                                                    {/* <input type="text" id="form3Example8" className="form-control form-control-lg" /> */}
                                                    <Controller
                                                        name="education"
                                                        control={control}
                                                        rules={{ required: "Education is required" }}
                                                        render={({ field }) => (
                                                            <AppInput {...field}  id="form3Example1m"
                                                                className="form-control form-control-lg" placeholder="Enter the education" />
                                                        )}
                                                    />
                                                    {errors.education && <span classNameName="error-msg">{errors.education.message}</span>}


                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div data-mdb-input-init className="form-outline mb-4">
                                                            {/* <input type="text" id="form3Example9" className="form-control form-control-lg" /> */}
                                                            <label className="form-label fw-bold" htmlFor="form3Example9">Staff Id</label>
                                                            <Controller
                                                                name="staffId"
                                                                control={control}
                                                                rules={{ required: "Staff ID is required" }}
                                                                render={({ field }) => (
                                                                    <AppInput {...field} id="form3Example1m"
                                                                        className="form-control form-control-lg" placeholder="Enter your ID" />
                                                                )}
                                                            />
                                                            {errors.staffId && <span classNameName="error-msg">{errors.staffId.message}</span>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">

                                                        <div data-mdb-input-init className="form-outline mb-4">
                                                            {/* <input type="text" id="form3Example90" className="form-control form-control-lg" /> */}
                                                            <label className="form-label fw-bold" htmlFor="form3Example90">Password</label>

                                                            <Controller
                                                                name="pass"
                                                                control={control}
                                                                rules={{
                                                                    required: "Password is required",
                                                                    minLength: { value: 6, message: "Password must be at least 6 characters" }
                                                                }}
                                                                render={({ field }) => (
                                                                    <AppInput {...field} type="password" id="form3Example1m"
                                                                        className="form-control form-control-lg" placeholder="Enter the password" />
                                                                )}
                                                            />
                                                            {errors.pass && <span classNameName="error-msg">{errors.pass.message}</span>}

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div data-mdb-input-init className="form-outline mb-4">
                                                            {/* <input type="text" id="form3Example9" className="form-control form-control-lg" /> */}
                                                            <label className="form-label fw-bold" htmlFor="form3Example9">Skills</label>
                                                            <Controller
                                                                name="skills"
                                                                control={control}
                                                                rules={{ required: "Skills ID is required" }}
                                                                render={({ field }) => (
                                                                    <AppInput {...field} id="form3Example1m" 
                                                                        className="form-control form-control-lg" placeholder="Enter your Skills" />
                                                                )}
                                                            />
                                                            {errors.staffId && <span classNameName="error-msg">{errors.staffId.message}</span>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <label className="form-label fw-bold">Upload Image</label>
                                                        <div>
                                                            <Controller
                                                                name="image"
                                                                control={control}
                                                                rules={{ required: "Image is required" }}
                                                                render={({ field }) => (
                                                                    <Upload
                                                                        beforeUpload={() => false} // prevent auto upload
                                                                        accept=".jpg,.jpeg,.png"
                                                                        maxCount={1} // allow only one file
                                                                        onChange={(info) => {
                                                                            const file = info.file.originFileObj;
                                                                            field.onChange(file);
                                                                            convertIntoBased64({ target: { files: [file] } }); // your base64 fn
                                                                        }}
                                                                    >
                                                                        <AppButton className='p-4' icon={<UploadOutlined />}>Click to Upload</AppButton>
                                                                    </Upload>
                                                                )}
                                                            /></div>

                                                        {errors.image && <span className="error-msg">{errors.image.message}</span>}
                                                    </div>
                                                </div>
                                                {/* <div className="row"> */}
                                                    {/* <div className="col-md-6 mb-4"> */}
                                                        <div data-mdb-input-init className="form-outline mb-4">
                                                            {/* <input type="text" id="form3Example9" className="form-control form-control-lg" /> */}
                                                            <label className="form-label fw-bold" htmlFor="form3Example9">Address</label>
                                                            <Controller
                                                                name="address"
                                                                control={control}
                                                                rules={{ required: "Address is required" }}
                                                                render={({ field }) => (
                                                                    <AppInput {...field} id="form3Example1m"
                                                                        className="form-control form-control-lg" placeholder="Enter your Address" />
                                                                )}
                                                            />
                                                            {errors.staffId && <span classNameName="error-msg">{errors.staffId.message}</span>}
                                                        </div>
                                                    {/* </div> */}
                                                {/* </div> */}



                                                <div className="d-flex justify-content-end pt-3">
                                                    <AppButton type="primary" htmlType="submit" className="mt-2">
                                                        Save Faculty
                                                    </AppButton>
                                                    <AppButton
                                                        type="default"
                                                        style={{
                                                            backgroundColor: mode ? "#121212" : "#ffffff", // dark / light background
                                                            color: mode ? "#ffffff" : "#000000",           // text color
                                                            borderColor: mode ? "#ffffff" : ""      // border color
                                                        }}
                                                        onClick={() => { navigate('/faculty'); reset(); }}
                                                        className="mt-2 ms-2"
                                                    >
                                                        Cancel
                                                    </AppButton>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );

}

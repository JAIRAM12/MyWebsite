import { memo, useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { AppNotification } from "../../essential/AppNotification";
import { Department, MessageType } from "../../essential/enums";
import Api from "../../essential/API";
import AppCard from "../../essential/AppCard";
import AppInput from "../../essential/AppInput";
import AppButton from "../../essential/AppButton";

const initialValues = {
    name: "",
    department: null,
    staffId: "",
}

const Search = ({ setItem }) => {
    const { control, reset, handleSubmit } = useForm({
        defaultValues: initialValues
    })

    const onSubmit = useCallback(async (data) => {
        const payload = JSON.stringify(data)
        await Api("POST", "/api/faculty/Faculties", payload)
            .then((response) => {
                const data = response.data;
                if (data) {
                    setItem(data);
                }
            })
            .catch((error) => {
                AppNotification(MessageType.ERROR, "Error", error.message || "Something went wrong");
            });
    }, [setItem]);

    return (
        <>
            <AppCard >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor='FacultyId'>Faculty ID</label>
                            <Controller
                                name="staffId"
                                control={control}
                                render={({ field }) => (
                                    <AppInput
                                        {...field}
                                        inputId='FacultyId'
                                        placeholder="Enter Faculty ID"
                                    />)}
                            />
                        </div>
                        {/* Name */}
                        <div className="col-md-3">
                            <label htmlFor='FacultyName'>Faculty Name</label>
                            <Controller
                                name="name"
                                control={control}
                                render={({ field }) => (
                                    <AppInput
                                        {...field}
                                        inputId='FacultyName'
                                        placeholder="John Doe"
                                    />)}
                            />
                        </div>
                        {/* Department */}
                        <div className="col-md-3">
                            <label htmlFor='Department'>Department</label>
                            <Controller
                                name="department"
                                control={control}
                                render={({ field }) => (
                                    <AppInput
                                        {...field}
                                        inputId='Department'
                                        inputType="select"
                                        options={Department}
                                        placeholder="Select Department"
                                        optionFilterProp="label"
                                    />)}
                            />
                        </div>
                        {/* </form> */}
                        <div className="col-12 mt-3">
                            <AppButton type="primary" btnId={'search'} htmlType="submit">
                                Search
                            </AppButton>
                            <AppButton className="ml-2" btnId={'clear'} btnOnClick={() => reset(initialValues)}>
                                Clear
                            </AppButton>
                        </div>
                    </div>
                </form>
            </AppCard>
        </>
    );
}

export default memo(Search)
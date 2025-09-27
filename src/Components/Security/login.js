import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import AppInput from "../essential/AppInput";
import AppButton from "../essential/AppButton";
import Api from "../essential/API";
import { AppNotification } from "../essential/AppNotification";
import { MessageType } from "../essential/enums";
import { addToken } from "../Redux/Action";
import { Controller, useForm } from "react-hook-form";

const Login = () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const { control, handleSubmit, reset, formState: { errors } } = useForm({})


    const onSubmit = async (data) => {
        setIsLoading(true);
        setError("");
        await Api("POST", "/login", data)
            .then((response) => {
                if (response.status === 200) {
                    const { token } = response.data
                    dispatch((addToken(token)));
                    AppNotification(MessageType.SUCCESS, "Success", "Success")
                    setIsLoading(false)
                    localStorage.setItem("token", token);
                    reset();
                }
            })
            .catch((error) => {
                setIsLoading(false)
                if (error.response?.status === 401) {
                    setError("Invalid username or password");
                } else if (error.response?.status === 403) {
                    setError("Access denied. Please contact administrator.");
                } else if (error.response?.data?.message) {
                    setError(error.response.data.message);
                } else {
                    setError("Login failed. Please try again later.");
                }
                AppNotification(MessageType.ERROR, "Error", "Login failed");
            });
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            Staff ID / Student ID
                        </label>
                        <Controller
                            name="username"
                            control={control}
                            rules={{ required: "Name is required" }}
                            render={({ field }) => (
                                <AppInput
                                    {...field}
                                    type="text"
                                    className="w-full px-4 py-2 rounded-lg"
                                    placeholder="Enter your ID"
                                    status={errors.username ? 'error' : ''}
                                    disabled={isLoading}
                                />
                            )}
                        />
                        {errors.username && <span className="error-msg">{errors.username.message}</span>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            Password
                        </label>
                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: "Password is required" }}
                            render={({ field }) => (
                                <AppInput
                                    {...field}
                                    type="password"
                                    className="w-full px-4 py-2 rounded-lg"
                                    status={errors.password ? 'error' : ''}
                                    placeholder="Enter your password"
                                    disabled={isLoading}
                                />
                            )}
                        />
                        {errors.password && <span className="error-msg">{errors.password.message}</span>}
                    </div>

                    <AppButton
                        htmlType="submit"
                        btndisabled={isLoading}
                        btntype="primary"
                        btnClassName='w-full py-2 px-4 rounded-lg'
                        btnId={'loginBtn'}
                        aria-busy={isLoading}
                        aria-label={isLoading ? "Logging in to your account" : "Login to your account"}
                    >
                        {isLoading ? "Logging in..." : "Login"}
                    </AppButton>
                </form>

                {/* <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 mb-2">Don't have an account?</p>
                    <button
                        onClick={handleRegister}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                        disabled={isLoading}
                    >
                        Register as Faculty
                    </button>
                </div> */}
            </div >
        </div >
    );
}

export default memo(Login);
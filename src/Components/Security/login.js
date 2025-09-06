import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToken } from "../Redux/reducer";
import AppInput from "../essential/AppInput";
import AppButton from "../essential/AppButton";
import Api from "../essential/API";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        const payload = { username, password }
        console.log(payload)
        Api("POST", "/api/auth/login", payload)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(addToken({
                        ...response.data,
                        token: btoa(`${username}:${password}`) // optional extra field
                    }));
                    navigate("/faculty")
                }
            })
            .catch((error) => {
                AppNotification(MessageType.ERROR, "Error", error)
                if (error.response?.status === 401) {
                    setError("Invalid username or password");
                } else if (error.response?.status === 403) {
                    setError("Access denied. Please contact administrator.");
                } else if (error.response?.data?.message) {
                    setError(error.response.data.message);
                } else {
                    setError("Login failed. Please try again later.");
                }
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            Staff ID / Student ID
                        </label>
                        <AppInput
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your ID"
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            Password
                        </label>
                        <AppInput
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your password"
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <AppButton
                        htmlType="submit"
                        disabled={isLoading}
                        type="primary"
                        className='w-full py-2 px-4 rounded-lg'
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
            </div>
        </div>
    );
}

export default Login;
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../Security/MainLayout";
import AuthLayout from "../Security/AuthLayout";
import ProtectedRoute from "../Security/ProtectedRoute";
import * as MasterIndex from "../PagePermission/MasterIndex";

export default function AppRoutes({ isLogin, userInfo, routesData }) {

    return (
        <Routes>
            <Route
                path="/"
                element={
                    isLogin ? (
                        <Navigate to="/faculty" replace />
                    ) : (
                        <AuthLayout>
                            <MasterIndex.Login />
                        </AuthLayout>
                    )
                }
            />

            {routesData?.map((route) => {
                const Component = MasterIndex[route.component];
                if (!Component) return null;
                
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={
                            route.protected ? (
                                <ProtectedRoute roles={route.roles}>
                                    <MainLayout>
                                        <Component />
                                    </MainLayout>
                                </ProtectedRoute>
                            ) : (
                                <AuthLayout>
                                    <Component />
                                </AuthLayout>
                            )
                        }
                    />
                );
            })}

            <Route
                path="*"
                element={<Navigate to={isLogin ? "/faculty" : "/"} replace />}
            />
        </Routes>
    );
}

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import * as MasterIndex from "../PagePermission/MasterIndex";
import { lazy, memo, Suspense, useEffect, useState } from "react";
import AppLoading from "./AppLoading";
const RouteLoading = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
        <AppLoading size="large" />
        <span className="ml-3 text-lg">Loading page...</span>
    </div>
);

const MainLayout = lazy(() => import("../Security/MainLayout"));
const AuthLayout = lazy(() => import("../Security/AuthLayout"));
const ProtectedRoute = lazy(() => import("../Security/ProtectedRoute"));

const AppRoutes = ({ isLogin, routesData }) => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 400);
        return () => clearTimeout(timer);
    }, [location]);

    const renderRoutes = () => {
        return routesData?.map((route) => {
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
        });
    };

    return (
        <Suspense fallback={<RouteLoading />}>
            {loading && <RouteLoading />}
            <Routes>
                {/* Root route */}
                <Route
                    path="/"
                    element={
                        isLogin ? (
                            <Navigate to="/Faculty" replace />
                        ) : (
                            <AuthLayout>
                                <MasterIndex.Login />
                            </AuthLayout>
                        )
                    }
                />

                {/* Dynamic routes */}
                {renderRoutes()}

                {/* Fallback route */}
                <Route
                    path="*"
                    element={<Navigate to={isLogin ? "/Faculty" : "/"} replace />}
                />
            </Routes>
        </Suspense>
    );
}

export default memo(AppRoutes);

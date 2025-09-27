import React from "react";
import "./design/App.css";
import AppRoutes from "./essential/AppRoutes"
import { useRoutesData } from "./essential/Hooks/useRoutesData";
import { useAuth } from "./essential/Hooks/useAuth";
import { useSelector } from "react-redux";
import AppLoading from "./essential/AppLoading";

export default function App() {
  const { loading } = useAuth();
  const { isLogin, userInfo } = useSelector((state) => state.token);
  const routesData = useRoutesData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <AppLoading size="large" />
        <span className="ml-3 text-lg">Loading page...</span>
      </div>
    );
  }

  return (
    <AppRoutes
      isLogin={isLogin}
      userInfo={userInfo}
      routesData={routesData}
    />
  );
}

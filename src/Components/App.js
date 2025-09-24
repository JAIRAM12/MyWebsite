import React from "react";
import "./design/App.css";
import AppRoutes from "./essential/AppRoutes"
import { Spin } from "antd";
import { useRoutesData } from "./essential/Hooks/useRoutesData";
import { useAuth } from "./essential/Hooks/useAuth";
import { useSelector } from "react-redux";

export default function App() {
  const { loading } = useAuth();
  const { isLogin, userInfo } = useSelector((state) => state.token);
  const routesData = useRoutesData();

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin size="large" />
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

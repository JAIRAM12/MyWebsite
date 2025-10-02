import "./design/App.css";
import AppRoutes from "./essential/AppRoutes"
import { useRoutesData } from "./essential/Hooks/useRoutesData";
import { useAuth } from "./essential/Hooks/useAuth";
import { useSelector } from "react-redux";
import { Spin } from "antd";

export default function App() {
  const { loading } = useAuth();
  const { isLogin, userInfo } = useSelector((state) => state.token);
  const routesData = useRoutesData();

  if (loading || isLogin && routesData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spin size="large" />
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

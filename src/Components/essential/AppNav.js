import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

const { Header } = Layout;

export default function AppNav({ darkMode, toggleDarkMode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedKey = location.pathname === "/" ? "/home" : location.pathname;

  // const items = [
  //   { key: "/home", label: <Link to="/home">Home</Link> },
  //   { key: "/faculty", label: <Link to="/faculty">Faculty</Link> },
  //   { key: "/scoreboard", label: <Link to="/scoreboard">Scoreboard</Link> },
  //   { key: "/Report", label: <Link to="/Report">Report</Link> }
  // ];

  const items = [
    { key: 'Faculty', label: <Link to="/faculty">Faculty</Link> },
    { key: 'Scoreboard', label: <Link to="/scoreboard">Scoreboard</Link> },
    { key: 'Letter', label: <Link to="/Report">Report</Link> },
    { key: 'Upload', label: <Link to="/upload">Upload</Link> }
  ]

  return (
    <Header
      className={`d-flex align-items-center ${darkMode ? "custom-header-dark" : "custom-header-light"}`}
      style={{ height: "80px", lineHeight: "80px", padding: "0 20px" }}
    >
      {/* Logo + Site Name */}
      <div className="d-flex align-items-center" style={{ marginRight: "20px" }}>
        <img
          src="/images/logo.jpg"
          alt="Website Logo"
          style={{ height: "60px", marginRight: "10px", borderRadius: "50%" }}
        />
        <span className="fw-bold">My Website</span>
      </div>

      {/* Menu + Toggle */}
      <div className="d-flex align-items-center" style={{ flex: 1 }}>
        <Menu
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={items}
          theme={darkMode ? "dark" : "light"}
          //   overflowedIndicator={null}   // ❌ disables "..."
          style={{ flex: 1, justifyContent: "flex-end" }}
          onClick={({ key }) => navigate(key)}
        />

        {/* Theme Toggle */}
        {/* <span
          onClick={toggleDarkMode}
          className="cursor-pointer p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          style={{ marginLeft: "15px" }}
        >
          {darkMode ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-blue-400" />}
        </span> */}
        <div className="d-flex align-items-center mr-2">
        <img
          src="/images/logo.jpg"
          alt="Website Logo"
          className="ml-2 mr-2"
          style={{ height: "50px", marginRight: "10px", borderRadius: "50%" }}
        />
        <span className="fw-bold">Jairam JS</span>
      </div>
      </div>
    </Header>
  );
}

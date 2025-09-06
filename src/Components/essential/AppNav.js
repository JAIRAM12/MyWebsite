import React, { Children } from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import store from "../Redux/store";
import AppImage from "./AppImage";

const { Header } = Layout;

export default function AppNav({ darkMode, toggleDarkMode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedKey = location.pathname === "/" ? "/home" : location.pathname;
  const state = store.getState();

  const items = [
    { key: '/faculty', label: 'Faculty' },
    { key: '/scoreboard', label: 'Scoreboard' },
    {
      key: '/admin',
      label: 'Admin',
      children: [
        { key: '/AddFaculty', label: 'Add Faculty' },
        { key: '/ManageFaculty', label: 'Manage Faculty' }
      ]
    },
    { key: '/upload', label: 'Upload' }
  ];


  return (
    <Header
      className={`d-flex align-items-center ${darkMode ? "custom-header-dark" : "custom-header-light"}`}
      style={{ height: "80px", lineHeight: "80px", padding: "0 20px" }}
    >
      {/* Logo + Site Name */}
      <div className="d-flex align-items-center mr-2" S>
        <AppImage
          name="Website logo"
          style={{ height: "50px", borderRadius: "50%", objectFit: "cover" }}
        />
        <span className="fw-bold ml-2">My Website</span>
      </div>

      {/* Menu + Toggle */}
      <div className="d-flex align-items-center" style={{ flex: 1 }}>
        <Menu
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={items}
          theme={darkMode ? "dark" : "light"}
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
        <div className="d-flex align-items-center mr-2" S>
          <AppImage
            data={state.token.image}
            name={state.token.userName}
            style={{ height: "50px", borderRadius: "50%", width: "50px", objectFit: "cover" }}
          />
          <Link to={'/Facultyinfo/' + state.token.userId} className="fw-bold ml-2 text-decoration-none" >{state.token.userName}</Link>
        </div>
      </div>
    </Header>
  );
}

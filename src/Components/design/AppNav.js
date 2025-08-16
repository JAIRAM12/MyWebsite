import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import './CSS components/GlassNavBar.css';

const { Header } = Layout;

export default function AppNav() {
    const location = useLocation();
    const selectedKey = location.pathname === "/" ? "/home" : location.pathname;

    const items = [
        { key: "/home", label: <Link to="/home">Home</Link> },
        // { key: "/about", label: <Link to="/about">About</Link> },
        { key: "/faculty", label: <Link to="/faculty">Faculty</Link> },
        { key: "/scoreboard", label: <Link to="/scoreboard">Scoreboard</Link> },
        { key: "/Report", label: <Link to="/Report">Report</Link> }
    ];

    return (
        <Header className="d-flex glass-header text-black align-items-center">
            {/* Logo + Site Name */}
            <div className="d-flex align-items-center me-3">
                <img 
                    src="/images/logo.jpg" // replace with your logo path
                    alt="Website Logo"
                    style={{ height: "40px", marginRight: "10px",  borderRadius: "50%" }}
                />
                <span className="fw-bold text-black">My Website</span>
            </div>

            {/* Navigation Menu */}
            <Menu
                mode="horizontal"
                selectedKeys={[selectedKey]}
                items={items}
                rootClassName="no-underline"
                className="ms-auto min-w-400 bg-transparent"
            />
        </Header>
    );
}
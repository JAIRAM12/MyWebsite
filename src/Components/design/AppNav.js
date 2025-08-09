import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import './CSS components/GlassNavBar.css'; // Assuming you have a CSS file for styling

const { Header } = Layout;

export default function AppNav() {
    const location = useLocation();
    const selectedKey = location.pathname === "/" ? "/home" : location.pathname;

    const items = [
        { key: "/home", label: <Link to="/home">Home</Link> },
        { key: "/about", label: <Link to="/about">About</Link> },
        { key: "/faculty", label: <Link to="/faculty">Faculty</Link> },
        { key: "/scoreboard", label: <Link to="/scoreboard">Scoreboard</Link> }
    ];

    return (
        <Header className="d-flex glass-header text-black">
            <div className="fw-bold me-3 text-black">
                My Website
            </div>
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
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

import AppNav from "./design/AppNav";  // <-- Navbar
import Home from "./Home/Home";
import Faculty from "./Faculty/Faculty";
import AddFaculty from "./Faculty/AddFaculty";
import FacultyInfo from "./Faculty/FacultyInfo";
import Scoreboard from "./ScoreBoard/ScoreBoard";
import ReportPage from "./Report/Report";
import Meenties from "./Meenties/Meenties";

import './design/CSS components/App.css';

export default function App() {
  // 🔹 Dark mode state
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // 🔹 Apply dark/light theme to body
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Layout>
      {/* Navbar with toggle button */}
      <AppNav darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      {/* Main content area */}
      <Content>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home mode={darkMode} />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/Addfaculty" element={<AddFaculty />} />
          <Route path="/Facultyinfo" element={<FacultyInfo />} />
          <Route path="/AddMeenties" element={<Meenties />} />
          <Route path="/Report" element={<ReportPage />} />
        </Routes>
      </Content>
    </Layout>
  );
}

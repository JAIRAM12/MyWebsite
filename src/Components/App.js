import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "antd";
// import AppNav from "./design/AppNav";
import { Content } from "antd/es/layout/layout";
import Home from "./Home/Home";
import Faculty from "./Faculty/Faculty";
import AddFaculty from "./Faculty/AddFaculty";
import FacultyInfo from "./Faculty/FacultyInfo";
import Scoreboard from "./ScoreBoard/ScoreBoard";
import './design/CSS components/App.css'

export default function App() {
  return (
    <Layout>
      {/* <AppNav /> */}
      {/* <Content style={{ padding: 20 }} > */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/Addfaculty" element={<AddFaculty />} />
          <Route path="/Facultyinfo" element={<FacultyInfo />} />
        </Routes>
      {/* </Content> */}
    </Layout>
  );
}
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";  // <-- Navbar
import Home from "./Home/Home";
import Faculty from "./Faculty/Faculty";
import AddFaculty from "./Faculty/AddFaculty";
import FacultyInfo from "./Faculty/FacultyInfo";
import Scoreboard from "./ScoreBoard/ScoreBoard";
import ReportPage from "./Report/Report";
import Meenties from "./Meenties/Meenties";
import './design/App.css';
import AddMeenties from "./Meenties/AddMeenties";
import Login from "./Security/login";
import MainLayout from "./Security/MainLayout";
import AuthLayout from "./Security/AuthLayout";
import ProtectedRoute from "./Security/ProtectedRoute";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

return (
    <Routes>
      {/* Public route → Login */}
      <Route
        path="/"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />

      {/* Protected routes → require auth */}
      <Route
        path="/Addfaculty"
        element={
          <ProtectedRoute>
            <MainLayout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
              <AddFaculty mode={darkMode} />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/faculty"
        element={
          <ProtectedRoute>
            <MainLayout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
              <Faculty mode={darkMode} />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/scoreboard"
        element={
          <ProtectedRoute>
            <MainLayout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
              <Scoreboard />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/Facultyinfo/:id"
        element={
          <ProtectedRoute>
            <MainLayout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
              <FacultyInfo />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/Meenties"
        element={
          <ProtectedRoute>
            <MainLayout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
              <Meenties />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/AddMeenties"
        element={
          <ProtectedRoute>
            <MainLayout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
              <AddMeenties />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/Report"
        element={
          <ProtectedRoute>
            <MainLayout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
              <ReportPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

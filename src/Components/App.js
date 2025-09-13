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
import { useDispatch, useSelector } from "react-redux";
import getUserInfo from "./essential/enums/getUserInfo";
import { addToken } from "./Redux/Action";

export default function App() {
  const dispatch = useDispatch();
  const { token, isLogin } = useSelector((state) => state.token);

  useEffect(() => {
    if (!token && !isLogin) {
      const localToken = localStorage.getItem("token")
      dispatch(addToken(localToken))
      getUserInfo(localToken)
    } else {
      getUserInfo(token)
    }
  }, [dispatch, token, isLogin])
  

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
            <MainLayout  >
              <AddFaculty />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/faculty"
        element={
          <ProtectedRoute>
            <MainLayout  >
              <Faculty />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/scoreboard"
        element={
          <ProtectedRoute>
            <MainLayout  >
              <Scoreboard />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/Facultyinfo/:id"
        element={
          <ProtectedRoute>
            <MainLayout  >
              <FacultyInfo />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/Meenties"
        element={
          <ProtectedRoute>
            <MainLayout  >
              <Meenties />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/AddMeenties"
        element={
          <ProtectedRoute>
            <MainLayout  >
              <AddMeenties />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/Report"
        element={
          <ProtectedRoute>
            <MainLayout  >
              <ReportPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

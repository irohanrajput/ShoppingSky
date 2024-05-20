import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import useIsLoggedIn from "./components/useIsLoggedIn";
import "./App.css";

const App = () => {
  const isLoggedIn = useIsLoggedIn();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn} element={Dashboard} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Articles from "./components/Articles";
import FundamentalRights from "./components/FundamentalRights";
import Quiz from "./components/Quiz";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./App.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

 useEffect(() => {
  const stored = localStorage.getItem("user");
  if (stored) {
    setIsLoggedIn(true);
  } else {
    setIsLoggedIn(false);
    navigate("/signin", { replace: true });
  }
}, []);


  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/signin");
  };

  return (
    <div className="app-root">
      {isLoggedIn && <Navbar onLogout={handleLogout} />}

      <div className="page-wrapper">
        <Routes>
          {!isLoggedIn ? (
            <>
              <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
              <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
              <Route path="*" element={<Navigate to="/signin" replace />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/rights" element={<FundamentalRights />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
      </div>

      {isLoggedIn && <Footer />}
    </div>
  );
}
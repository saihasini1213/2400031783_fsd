import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ onLogout }) {
  const navigate = useNavigate();

  return (
    <header className="nav-wrap">
      <div className="nav-left">
        <h1 className="site-title">Indian Constitution Portal <span className="in">IN</span></h1>
      </div>

      <nav className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/rights">Rights</Link>
        <Link to="/quiz">Quiz</Link>
      </nav>

      <div className="nav-right">
        <button className="btn-logout" onClick={() => { onLogout(); navigate("/signin"); }}>
          Logout
        </button>
      </div>
    </header>
  );
}
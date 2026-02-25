import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-inner">
        <h1>Welcome to the Indian Constitution Awareness Portal</h1>
        <p>Explore the Articles, Fundamental Rights, and test your knowledge with quizzes.</p>

        <div className="home-actions">
          <button onClick={() => navigate("/articles")} className="primary">Articles</button>
          <button onClick={() => navigate("/rights")} className="primary">Fundamental Rights</button>
          <button onClick={() => navigate("/quiz")} className="primary">Quiz</button>
        </div>
      </div>
    </div>
  );
}
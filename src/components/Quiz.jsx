import React, { useState } from "react";
import "./Quiz.css";

const quizData = [
  { q: "Who is known as the Father of the Indian Constitution?", opts: ["Nehru","Ambedkar","Gandhi"], a: "Ambedkar" },
  { q: "When did Constitution come into effect?", opts: ["1947","1950","1949"], a: "1950" }
];

export default function Quiz() {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const answer = (opt) => {
    if (opt === quizData[i].a) setScore(s => s + 1);
    if (i + 1 < quizData.length) setI(i + 1);
    else setDone(true);
  };

  return (
    <div className="quiz-page">
      <h2>Quiz</h2>
      {!done ? (
        <div className="quiz-card">
          <p className="q">{quizData[i].q}</p>
          <div className="opts">
            {quizData[i].opts.map(o => <button key={o} onClick={() => answer(o)}>{o}</button>)}
          </div>
        </div>
      ) : (
        <div className="quiz-result">
          <h3>Your score: {score} / {quizData.length}</h3>
        </div>
      )}
    </div>
  );
}
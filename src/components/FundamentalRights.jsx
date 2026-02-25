import React from "react";
import "./FundamentalRights.css";

export default function FundamentalRights() {
  const rights = [
    { title: "Right to Equality", desc: "Equality before law; prohibits discrimination." },
    { title: "Right to Freedom", desc: "Freedom of speech, assembly, movement etc." },
    { title: "Right Against Exploitation", desc: "Prohibits forced labour and child labour." },
    { title: "Right to Freedom of Religion", desc: "Freedom to practice and propagate religion." },
    { title: "Cultural and Educational Rights", desc: "Protects minorities' culture and language." },
    { title: "Right to Remedies", desc: "Right to move courts for enforcement of rights." }
  ];

  return (
    <div className="rights-page">
      <h2>Fundamental Rights</h2>
      <div className="rights-grid">
        {rights.map((r, idx) => (
          <div className="right-card" key={idx}>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
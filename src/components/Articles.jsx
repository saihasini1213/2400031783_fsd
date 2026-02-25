import React from "react";
import "./Articles.css";

export default function Articles() {
  const items = [
    { id: 14, title: "Article 14 - Equality", desc: "Equality before law." },
    { id: 19, title: "Article 19 - Freedom", desc: "Freedom of speech & expression." },
    { id: 21, title: "Article 21 - Life & Liberty", desc: "Protection of life and personal liberty." },
  ];

  return (
    <div className="articles-page">
      <h2>Important Articles</h2>
      <div className="articles-grid">
        {items.map(i => (
          <div key={i.id} className="article-card">
            <h3>{i.title}</h3>
            <p>{i.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
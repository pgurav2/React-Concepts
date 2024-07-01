import React from "react";
import "./newcard.css";

export default function Card2({ title, para, myImage }) {
  return (
    <div>
      <div className="card">
        <img src={myImage} />
        <h2>{title}</h2>
        <p>{para}</p>
        <div>
          <a>Explore</a>
          <div className="gradient_line"></div>
        </div>
      </div>
    </div>
  );
}

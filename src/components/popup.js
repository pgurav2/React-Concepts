import React, { Children } from "react";
import "./popup.css";
import cross from "../images/close.png";

export default function Popup({ onclick, title, children, bodyClick, shouldShow }) {
  return (
    <div className="popup_wrapper" onClick={bodyClick}>
      <div className="popup_container">
        <img src={cross} className="cross" onClick={onclick} />
        {title}
        {children}
        {shouldShow && <p>save</p>}
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Page2() {
  const nav = useNavigate();

  const key = localStorage.getItem("UID");
  console.log(localStorage.getItem("UID"));

  useEffect(() => {
    if (!key) {
      nav("/authentication");
    }

    // console.log(document.getElementById("class"))
  }, []);
  return (
    <div>
      <h1 className="class1">Page2</h1>
      <h1 id="class">Page2</h1>
      <a href="/authentication/page1" className="class1">Redirect to Page1</a>
    </div>
  );
}

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Page1() {
  const nav = useNavigate();

  const handlelogOut = () => {
    localStorage.clear()
    nav("/authentication");
  };

  const key = localStorage.getItem("UID");
  console.log(localStorage.getItem("UID"));

  
  useEffect(() => {
    if (!key) {
      nav("/authentication");
    }
  }, []);


  return (
    <div>
      <h1>HomePage</h1>
      <a href="/authentication/page2">Redirect to Page2</a>
      <button onClick={handlelogOut}>Log Out</button>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

export default function Authentication() {
  const [loginDetails, setloginDetails] = useState({ name: "Pratiksha", password: "test" });

  let obj = { ...loginDetails }

  const nav= useNavigate()

  const handleLogin = (value,element) => {
    obj[element] = (value)
    setloginDetails(obj)
  };

  const handleSubmit=()=>{
    if(loginDetails.name==="Pratiksha" && loginDetails.password==="test"){
      console.log("successfullllll")
      nav("/authentication/page1")
      localStorage.setItem("UID", "Smith");
      localStorage.setItem("Role","user")
    }
  }

  const key = localStorage.getItem("UID");
  console.log(localStorage.getItem("UID"));

  
  useEffect(() => {
    // if (key) {
    //   nav("/authentication/page1");
    // }
    console.log(document.querySelectorAll("#class"))

  }, []);

  return (
    <div>
      <h1 className="class1">Page2</h1>
      <h1 id="class">Page2</h1>
      <a href="/authentication/page1" className="class1">Redirect to Page1</a>
      <div>
        <label>Name</label>
        <input
          type="name"
          value={loginDetails.name}
          onChange={(e) => handleLogin(e.target.value,"name")}
        />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={loginDetails.password} onChange={(e) => handleLogin(e.target.value,"password")} />
      </div>

      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

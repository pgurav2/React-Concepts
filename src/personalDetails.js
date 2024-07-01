import React, { useState } from "react";
import InputFeild from "./components/inputfeild";
import "./personalDetails.css";

export default function PersonalDetails({ setactive }) {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [validate, setvalidate] = useState("");
  const [color, setcolor] = useState({ isFnEmpty: false, isLnEmpty: false });

  const [dob, setdob] = useState("");

  const handleValidation = () => {
    let newObj = { ...color };

    if (firstName === "" || lastName === "") {
      setvalidate("enter the above fields");
    } else {
      setactive(1);
    }

    if (firstName === "") {
      newObj.isFnEmpty = true;
    }
    if (lastName === "") {
      newObj.isLnEmpty = true;
    }

    setcolor(newObj);

  };

  const handleFocus = () => {
    setvalidate("");
  };

  return (
    <div className="personalDetailsWrapper">
      <div>
        <InputFeild
          label={"First Name"}
          placeholder={"Enter Your First Name"}
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
          onfocus={handleFocus}
          className={color.isFnEmpty === true && "inputActive"}
        />
      </div>

      <div>
        <InputFeild
          label={"Last Name"}
          placeholder={"Enter Your Last Name"}
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
          onfocus={handleFocus}
          className={color.isLnEmpty && "inputActive"}
        />
      </div>

      <div>
        <InputFeild
          label={"Date of Birth"}
          placeholder={"Enter Your DOB"}
          value={dob}
          onChange={(e) => setdob(e.target.value)}
          state={false}
        />
      </div>

      <div className="continue">
        <button onClick={handleValidation}>Continue</button>
      </div>
      {validate !== "" && <p>{validate}</p>}
    </div>
  );
}

import React, { useState } from "react";
import "./App.css";

export default function Handleinput() {
  const [formValues, setformValues] = useState({
    firstname: "",
    lastname: "",
    age: "",
    email: "",
  });
  const [errors, seterrors] = useState({
    isFirstNameEmpty: false,
    isLastNameEmpty: false,
    isAgeEmpty: false,
    isEmailEmpty: false,
  });
  const [isEmpty, setisEmpty] = useState(false);
  const [isnameEmpty, setisnameEmpty] = useState(false);
  const [islastnameEmpty, setislastnameEmpty] = useState(false);
  const [isageEmpty, setisageEmpty] = useState(false);
  const [isemailEmpty, setisemailEmpty] = useState(false);
  const [isFocus, setisFocus] = useState(false);

  const onChange = (value, name) => {
    let _values = { ...formValues };
    _values[name] = value;
    setformValues(_values);

    console.log(formValues.firstname);
    // if (
    //   formValues.firstname == "" ||
    //   formValues.lastname == "" ||
    //   formValues.age == "" ||
    //   formValues.email == ""
    // ) {
    //   setisEmpty(true);
    // }

    // if (
    //   formValues.firstname !== "" ||
    //   formValues.lastname !== "" ||
    //   formValues.age !== "" ||
    //   formValues.email !== ""
    // ) {
    //   setisEmpty(true);
    // }
  };

  function onsubmit() {
    let _errors = { ...errors };
    if (formValues.firstname === "") {
      // setisnameEmpty(true);
      _errors.isFirstNameEmpty = true;
    } else {
      // setisnameEmpty(false);
      _errors.isFirstNameEmpty = false;
    }

    if (formValues.lastname === "") {
      // setislastnameEmpty(true);
      _errors.isLastNameEmpty = true;
    } else {
      // setislastnameEmpty(false);
      _errors.isLastNameEmpty = false;
    }

    if (formValues.age === "") {
      // setisageEmpty(true);
      _errors.isAgeEmpty = true;
    } else {
      // setisageEmpty(false);
      _errors.isAgeEmpty = false;
    }

    if (formValues.email === "") {
      _errors.isEmailEmpty = true;
    } else {
      _errors.isEmailEmpty = false;
    }

    seterrors(_errors);
    // Array.every((item) => {
    //   item !== "";

    // });

    // if (Object.values(formValues).every((item) => item !== "")) {
    //   alert("successful");
    // }

    if (!Object.values(formValues).includes("")) {
      alert("success");
    }

    // if (
    //   formValues.firstname !== "" &&
    //   formValues.lastname !== "" &&
    //   formValues.age !== "" &&
    //   formValues.email !== ""
    // ) {
    //   alert("successful");
    // }
  }

  const handleFocus = (name) => {
    let _errors = { ...errors };
    _errors[name] = false;
    seterrors(_errors);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="enter name"
          className={errors.isFirstNameEmpty && "_border"}
          value={formValues.firstname}
          onChange={(e) => onChange(e.target.value, "firstname")}
          onFocus={() => handleFocus("isFirstNameEmpty")}
        />
        {console.log(isnameEmpty)}
        {console.log(formValues)}
        <br />
        <input
          type="text"
          placeholder="enter last name"
          className={errors.isLastNameEmpty && "_border"}
          value={formValues.lastname}
          onChange={(e) => onChange(e.target.value, "lastname")}
          onFocus={() => handleFocus("isLastNameEmpty")}
        />
        <br />
        <input
          type="text"
          maxLength={10}
          className={errors.isAgeEmpty && "_border"}
          placeholder="enter your age"
          value={formValues.age}
          onChange={(e) => {
            if (!isNaN(e.target.value)) {
              let _values = { ...formValues };
              _values.age = e.target.value;
              setformValues(_values);
            }
          }}
          onFocus={() => handleFocus("isAgeEmpty")}
        />
        <br />
        <input
          type="text"
          placeholder="enter your email"
          className={errors.isEmailEmpty && "_border"}
          onChange={(e) => {
            let _values = { ...formValues };
            _values.email = e.target.value;
            setformValues(_values);
          }}
          onFocus={() => handleFocus("isAgeEmpty")}
        />
        <br />
        <button onClick={onsubmit}>Submit</button>
      </div>
    </div>
  );
}

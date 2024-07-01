import React from "react";
import { NavLink } from "react-router-dom";

export default function Card({name, hobby, age, des,route}) {
  return (
    <div>
      {console.log(des)}
      <p>Name :{name} </p>
      <p>Hobby :{hobby} </p>
      <p>Age : {age}</p>
      <p>Designation : {des}</p>
      <p>relation={"sister"}</p>
      <NavLink to={route}>
        <button>Go to another page</button>
      </NavLink> 
    </div>
  );
}

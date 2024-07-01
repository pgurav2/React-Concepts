import React, { useState } from "react";
import "../input/password.css";

export default function Input() {
  const [password, setpassword] = useState("");
  const [newPassword, setnewPassword] = useState(false);

  const [list, setlist] = useState("");
  const [list1, setlist1] = useState([]);

  function showpassword() {
    setnewPassword(!newPassword);
  }

  let _treat = "pratiksha";
  let _data = ["pratiksha", "ssssgurav"];

  return (
    <div>
      {/* {console.log(..._treat)}
      {console.log(..._data)} */}
      <div className="password">
        <label>PASSWORD</label>
        <br></br>
        <input
          type={newPassword ? "text" : "password"}
          value={password}
          onChange={(e) => {
            console.log(e);
            setpassword(e.target.value);
          }}
        />

        <button onClick={showpassword}>
          {newPassword ? "hide password" : "show password"}
        </button>
      </div>

      <div>
        <p>To Do List</p>
        <input type="text" value={list} />
        <button>add your list</button>

        {/* {console.log(list1)} */}
      </div>
    </div>
  );
}

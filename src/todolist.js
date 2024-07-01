import React, { useState } from "react";

export default function Todolist() {
  const [password, setpassword] = useState("");
  const [newPassword, setnewPassword] = useState(false);

  const [myList, setmyList] = useState("");
  const [myTodolist, setTodolist] = useState([]);
  const [isedit, setisedit] = useState(false);
  const [newval, setnewval] = useState("");

  function changePassword() {
    setnewPassword(!newPassword);
  }

  function addTodo() {
    let arr = [...myTodolist];
    arr.push(myList);
    setTodolist(arr);
    setmyList("");
  }


  function updateHandle(value, index) {

    console.log(value);
    setmyList(value);
    setisedit(true);
    setnewval(index);

  }

  function confirm() {
    let arr = [...myTodolist];
    arr[newval] = myList;
    setTodolist(arr);
  }
  function deleteHandle(index) {
    let arr2 = [...myTodolist];
    arr2.splice(index, 1);
    setTodolist(arr2)
  }
  return (
    <div>
      <label>PASSWORD</label>
      <br></br>
      <input
        type={newPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <br></br>
      <button onClick={changePassword}>{newPassword ? "hide" : "show"}</button>

      <div>
        <p>Your todo list</p>
        <input
          type="text"
          value={myList}
          onChange={(e) => setmyList(e.target.value)}
        />
        <br></br>
        {isedit ? (
          <button onClick={confirm}>Confirm</button>
        ) : (
          <button onClick={addTodo}>ADD</button>
        )}

        <div>
          {myTodolist.map((item, index) => (
            <div>
              <p> {item}</p>
              <button onClick={() => updateHandle(item, index)}>update</button>
              <button onClick={() => deleteHandle(index)}>delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

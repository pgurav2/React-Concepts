import React, { useState } from "react";

export default function Task() {
  const [type, settype] = useState([]);
  const [showInput, setshowInput] = useState(false);
  const [label, setlabel] = useState("");
  const [addedLabel, setaddedLabel] = useState("");
  const [labelnumber, setlabelnumber] = useState(0);
  const [editnumber, seteditnumber] = useState(0);

  let a = [...type];
  let data = ["text", "password", "number", "email"];
  // let labelnumber = 0;
  console.log(data);

  const handleDelete = (index) => {
    a.splice(index, 1);
    settype(a);
    setshowInput(false);
    setaddedLabel("");
  };

  // duplicating elements remove

  let arr = [];
  let b = [1, 2, 3, 4, 1, 2, 5, 6, 1];
  b.map((item)=>{
    if(arr.includes(item)){
      console.log("first")
    }
    else{
      arr.push(item)
      console.log(item)
    }
  })
console.log(arr)



  const handleAdd = (index) => {
    console.log(index);
    // labelnumber = index;
    setlabelnumber(index);
    setshowInput(true);
    setaddedLabel("");
  };
  // submit
  const submitLable = () => {
    a[labelnumber].label = addedLabel;
    console.log(labelnumber);
    settype(a);
    setshowInput(false);
    setaddedLabel("");
    console.log("asdfghjklllllllll", type);
  };

  const handleEdit = (index, value) => {
    setshowInput(true);
    setaddedLabel(value);
    setlabelnumber(index);
  };

  return (
    <div>
      <div>
        <label for="cars">Choose a Type:</label>
      </div>
      <select
        placeholder=""
        onChange={(e) => {
          console.log(e.target.value);
          a.push({ label: "", type: e.target.value });
          settype(a);
        }}
      >
        {console.log(type)}
        <option selected disabled>
          {"please select"}
        </option>

        {data?.map((item, index) => (
          <>
            <option>{item}</option>
          </>
        ))}
      </select>

      <div>
        {type &&
          type?.map((item, index) => (
            <div>
              <label>{item.label}</label>
              <input type={item.type} />
              {!item.label && (
                <button onClick={() => handleAdd(index)}>add label</button>
              )}
              <button onClick={() => handleDelete(index)}>delete</button>
              {item.label && (
                <button onClick={() => handleEdit(index, item.label)}>
                  edit label
                </button>
              )}
            </div>
          ))}

        <br></br>
        <hr></hr>

        <div>
          {showInput && (
            <>
              <input
                type="text"
                value={addedLabel}
                onChange={(e) => {
                  setaddedLabel(e.target.value);
                }}
              />
              <button onClick={submitLable}>submit</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

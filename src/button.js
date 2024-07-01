import React, { useState } from "react";
import "./App.css";

export default function Button() {
  const [color, setcolor] = useState("");
  const [newcolor, setnewcolor] = useState("");

  const colorChange = (id) => {
    // let color=document.querySelectorAll(".colorButton");
    // color.forEach((item)=>{
    //     item.classList.remove("button")
    // })
    // document.getElementById(id).classList.add("button");
  };

  const addColor = (value) => {
    setcolor(value);
  };

  const changeColor = (idname) => {
    const newButtons = document.querySelectorAll(".common");
    newButtons.forEach((item) => {
      item.classList.remove("act_1");
      item.classList.remove("act_2");
    });
    if (idname === "btn0") {
      document.getElementById(idname).classList.add("act_1");
    } else if (idname === "btn1") {
      document.getElementById(idname).classList.add("act_2");
    } else {
      console.log("not defined");
    }
  };

  const handleColor = (id, newclass, bgclass) => {
    console.log(id, newclass);
    const newButtons = document.querySelectorAll(".common");
    newButtons.forEach((item, index) => {
      item.classList.remove("act_" + (index + 1));
      document
        .querySelector(".main_wrapper")
        .classList.remove("bg" + (index + 1));
    });

    document.querySelector(".main_wrapper").classList.add(bgclass);
    document.getElementById(id).classList.add(newclass);
  };

  let arr = ["btn1", "btn2"];

  return (
    <div className="main_wrapper">
      {console.log(color)}
      <>
        <button
          onClick={() => {
            colorChange("button1");
            addColor("ac1");
            // setcolor("ac1");
          }}
          id="button1"
          className={color === "ac1" ? "active" : null}
        >
          Green
        </button>

        <button
          onClick={() => {
            colorChange("button2");
            // setcolor("ac2");
            addColor("ac2");
          }}
          id="button2"
          className={color === "ac2" ? "active" : null}
        >
          Red
        </button>

        <button
          onClick={() => {
            // setcolor("ac3");
            addColor("ac3");

            colorChange("button3");
          }}
          id="button3"
          className={color === "ac3" ? "active_1" : null}
        >
          Black
        </button>
      </>

      <div>
        {arr.map((item, index) => {
          return (
            <button
              id={"btn" + index}
              className="common"
              // onClick={() => changeColor("btn" + index)}
              onClick={() =>
                handleColor(
                  "btn" + index,
                  "act_" + (index + 1),
                  "bg" + (index + 1)
                )
              }
            >
              {item}
            </button>
          );
        })}
        {console.log(newcolor)}
      </div>

      <div>
        <div className="social_wrapper">
          <a className="social">TL</a>
          <a className=" social2">
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
}

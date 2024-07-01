import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "./components/card";
import Card2 from "./components/newcard";
import "./about.css";
import imag from "./images/freshbatch.png";
import Popup from "./components/popup";

export default function About() {
  const [popup, setpopup] = useState(false);
  const [title, settitle] = useState("");

  let data = [
    {
      title1: "Leadership Team",
      para1: "The driving withou force HCCB",
    },
    {
      title1: "hccb Journey",
      para1: "See milestone through our eys",
    },
    {
      title1: "Award and Reconition",
      para1: "The driving withou force HCCB",
    },
  ];

  let abc = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let xyz = abc.find((item) => {
    return item > 6;

    // console.log(item);
  });

  console.log("HELLO", xyz);

  const [activeTab, setactiveTab] = useState("All");

  let btnArr = ["All", "Upcoming", "Past"];

  console.log(activeTab);

  const handlePopup = () => {
    // document.querySelector(".popup_block").classList.toggle("display_block")
  };

  // const closePopup = () => {
  //   document.querySelector(".popup_block").classList.remove("display_block")

  // };

  return (
    <div>
      <Card
        name="priyanka"
        hobby="singing"
        age="28"
        des={["All", "Upcoming", "Past"]}
        route="/contact"
      />
      <div></div>

      <div className="new_card">
        {data?.map((item) => (
          <Card2 myImage={imag} title={item.title1} para={item.para1} />
        ))}
      </div>

      <div className="tabs">
        {btnArr?.map((item, index) => (
          <div key={"tab" + index}>
            <button
              className={activeTab === item ? "active btn" : "btn"}
              onClick={() => {
                setactiveTab(item);
              }}
            >
              {item}
            </button>
          </div>
        ))}
        {/* <button className="btn">All</button>
        <button className="btn">Upcoming</button>
        <button className="btn">Past</button> */}
      </div>
      <button
        onClick={() => {
          setpopup(true);
          settitle("Rupali");
        }}
      >
        Show Popup
      </button>
      <button
        onClick={() => {
          setpopup(true);     
          settitle("Rohan");
        }}
      >
        Show Popup2
      </button>
      <button
        onClick={() => {
          setpopup(true);
          settitle("Priyanka");
        }}
      >
        Show Popup3
      </button>
      {popup && (
        <div className="popup_block">
          <Popup
            onclick={() => setpopup(false)}
            bodyClick={() => setpopup(false)}
            title={title}
           shouldShow={title === "Rohan"||title === "Priyanka"}
          >
            {title === "Rupali" ? (
              <p>Hello Rupali</p>
            ) : title === "Rohan" ? (
              <p>Hello Rohan</p>
            ) : (
              <div>
                <p>hello priyanka</p>
                <p>hello priyanka</p>
                <p>hello priyanka</p>
              </div>
            )}

          </Popup>
        </div>
      )}
    </div>
  );
}

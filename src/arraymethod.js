import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

export default function ArrayMthod() {
  const people = [
    {
      name: "Arjun",
      age: 25,
      number: "+91-9876543210",
      hobbies: ["cricket", "reading", "coding"],
    },
    {
      name: "Meera",
      age: 22,
      number: "+91-9123456789",
      hobbies: ["dancing", "painting", "traveling"],
    },
    {
      name: "Ravi",
      age: 28,
      number: "+91-9871234567",
      hobbies: ["gaming", "photography", "cycling"],
    },
    {
      name: "Sana",
      age: 24,
      number: "+91-7894561230",
      hobbies: ["baking", "gardening", "yoga"],
    },
  ];

  // axios
  //   .get("url")
  //   .then((data) => {
  //     data.data;
  //   })
  //   .catch((err) => console.log(err));

  console.log(people);

  console.log("firsttttttttttttttttttttttttttt");
  // useEffect(() => {
  //   // removing duplicates
  //   let array = [1, 2, 3, 3, 4, 6, 5, 6];
  //   let abc = [];
  //   // console.log([...new Set(array)]);
  //   array.map((item, index) => {
  //     if (!abc.includes(item)) {
  //       abc.push(item);
  //       // console.log(item);
  //     } else {
  //       console.log(item);
  //     }
  //   });

  //   // replacing method on string
  //   let name = "pratiksha is shubham bestfriend";

  //   console.log(name.replaceAll(" ", "$"));
  //   let splitedArray = name.split(" ");
  //   console.log(splitedArray.join("$"));

  //   //remove numbers from string
  //   let numberdString = "pratiksha123aa";
  //   console.log(numberdString.split(""));
  //   numberdString.split("").map((item, index) => {
  //     // if(!isNaN(item)){
  //     //   console.log(item)
  //     // }
  //     if (Number(item)) {
  //       console.log(item);
  //     }
  //   });

  //   // addition of arrays elements
  //   let add = [1, 2, 3];
  //   let count = 0;
  //   add.map((item, index) => {
  //     console.log((count = count - item));
  //   });

  //   //max num from array
  //   let max = [1, 2, 3];
  //   let num = 0;
  //   max.map((item) => {
  //     if (num <= item) num = item;
  //   });
  //   console.log(num);

  //   let min = [6, 8, 2, 3];
  //   let num1 = min[0];
  //   min.map((item) => {
  //     if (num1 >= item) num1 = item;
  //   });
  //   console.log(num1);
  // }, []);

  // {progress bar}
  const abc = () => {
    if (true) {
      return "iiii";
    }
  };

  useEffect(() => {
    let barwidth = document.querySelector(".bar");
    console.log(barwidth);
    let num = 10;
    let interval = setInterval(() => {
      if (barwidth.style.width != "100%") {
        barwidth.style.width = num + "%";
        num = num + 10;
      }
      console.log("first");
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="main-bar">
      <div className="bar"></div>

      <div>
        <table>
          {people.map((item, index) => {
            return (
              index === 0 && (
                <tr>
                  {Object.keys(item).map((item2, index2) => {
                    return <th>{item2}</th>;
                  })}
                </tr>
              )
            );
          })}
          
        </table>
      </div>
    </div>
  );
}

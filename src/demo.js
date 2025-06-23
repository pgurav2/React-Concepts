import axios from "axios";
import React, { useEffect, useState } from "react";
import "./demo.css";

export default function Demo() {
  const [homePageData, sethomePageData] = useState();

  useEffect(() => {
    //  <!-- api call -->
    axios.get("https://jsonplaceholder.typicode.com/todos/").then((data) => {
      sethomePageData(data.data);

      //   console.log(data.data);
    });
    // axios.post("https://jsonplaceholder.typicode.com/todos/",{
    //   // name:name

    // }).then((data) => {
    //   sethomePageData(data.data);

    //   //   console.log(data.data);
    // });
  }, []);

  const abc = [];
  let arr = [1, 2, [4, 6, [8]]];

  arr.map((item, index) => {
    if (typeof item === "number") {
      abc.push(item);
    } else if (Array.isArray(item)) {
      item.map((item2, index2) => {
        if (typeof item2 === "number") {
          abc.push(item2);
        }
        else(Array.isArray(item2)){
          item2.map((item3,index)=>{
            if(typeof item3==="number"){
              abc.push(item3)
            }
          })
        }
      });
    }
  });
  console.log(abc);
  return (
    <div>
      {console.log(homePageData)}
      {/* {homePageData?.map((item) => {
        return (
          <div>
            <p>{item.title}</p>
            
            <p>{item.id}</p>
            <br></br>
          </div>
        );
      })} */}

      <p className="para_1">{homePageData && homePageData[0]?.title}</p>
    </div>
  );
}

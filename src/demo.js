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

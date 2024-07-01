import React, { useEffect, useState } from "react";
import "./api.css";
import axios from "axios";

export default function Tabs() {
  const [categories, setcategories] = useState(["All"]);
  const [color, setcolor] = useState("");
  const [counter, setcounter] = useState(3);

  const [apiData, setapiData] = useState(null);

  useEffect(() => {
    getData();
    // console.log(apiData);

    axios.get("https://fakestoreapi.com/products/categories").then((data) => {
      //   setcategories([...categories,...data.data]);
      let arr = [...categories];
      data.data.map((item) => arr.push(item));
      setcategories(arr);

      setcolor(arr[0]);
    });

  }, []);


  
  useEffect(() => {
    getData("All");
  }, [counter]);

  const getData = (value) => {
    console.log("gggggggg", counter);
    setcolor(value);
    axios
      .get(`https://fakestoreapi.com/products?limit=${counter}`)
      .then((data) => setapiData(data.data));
  };

  const activeTab = (value) => {
    setcolor(value);
    // console.log("hello");
    axios
      .get(`https://fakestoreapi.com/products/category/${value}`)
      .then((data) => {
        console.log(data);
        setapiData(data.data);
      });
  };

  // function addCounter() {
  //   console.log("hellp");

  //   setcounter(counter + 1);
  // }
  // function subCounter() {
  //   console.log("hellp");

  //   if(counter>3){
  //     setcounter(counter - 1);
  //   }
  // }

  const counterHandling = (value) => {
    console.log(value);
    if (value === "add") {
      setcounter(counter + 1);
    } else {
      if (counter > 3) {
        setcounter(counter - 1);
      }
    }
  };

  return (
    <div>
      {console.log(counter)}
      {/* {console.log(data)} */}
      <div className="wrapper">
        {categories?.map((item) => (
          <button
            onClick={() => (item === "All" ? getData(item) : activeTab(item))}
            className={`btn ${color === item ? "active" : null}`}
          >
            {item}
          </button>
        ))}
      </div>

      {color === "All" && (
        <div>
          <button
            onClick={() => {
              counterHandling("add");
            }}
          >
            Add
          </button>
          <button onClick={() => counterHandling("sub")} disabled={counter===3}> Sub</button>
        </div>
      )}

      <div className="product_container">
        <div className="product-wrpper">
          {console.log("dhjhgxhxbhjjjwjwhqkhkhk", apiData)}
          {apiData?.map((item) => (
            <div className="product_card">
              <div>
                <img
                  src={item.image}
                  style={{ width: "100px", height: "100px" }}
                />
                <p>{item.title}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>{/* {productvalue} */}</div>
    </div>
  );
}

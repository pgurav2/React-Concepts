import axios from "axios";
import React, { useEffect, useState } from "react";
import "./api.css";

export default function Api() {
  const [apiData, setapiData] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => setapiData(data.data));
    console.log(apiData);
  }, []);
  return (
    <div className="product_container">
      <div className="product-wrpper">
        {console.log("dhjhgxhxbhjjjwjwhqkhkhk", apiData)}
        {apiData?.map((item) => (
          <div className="product_card">
            <div>
              <img src={item.image} style={{ width: "100px",height:"100px" }} />
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// https://fakestoreapi.com/products
// https://fakestoreapi.com/products/category/jewelery
// https://fakestoreapi.com/products/categories

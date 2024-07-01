import React, { useState } from "react";
import "./App.css";
import img1 from "./images/freshbatch.png";
import img2 from "./images/Rectangle 9 (2).png";
import img3 from "./images/Rectangle 9 (3).png";
import img4 from "./images/freshbatch.png";

export default function Gallery() {
  const [imgData, setimgData] = useState([
    {
      src: img1,
      isOpen: false,
    },
    {
      src: img2,
      isOpen: false,
    },
    {
      src: img3,
      isOpen: false,
    },
    {
      src: img4,
      isOpen: false,
    },
  ]);
  const [activeIndex, setactiveIndex] = useState(imgData[0].src);



  function imgDiaplay(value) {
    setactiveIndex(value.src);
    let arr = [...imgData];
    // console.log(arr[index].isOpen, arr[index]);
    arr.map((item) => (item.isOpen = false));
    value.isOpen = true;
    setimgData(arr);
  }

  return (
    <div>
      {console.log(imgData)}
      <div className="Gallery-wrapper">
        {imgData.map((item, index) => {
          return (
            <div>
              <img
                src={item.src}
                className="img_size"
                onClick={() => imgDiaplay(item)}
              />
            </div>
          );
        })}
      </div>
      <div>
        <img src={activeIndex} />
      </div>
    </div>
  );
}

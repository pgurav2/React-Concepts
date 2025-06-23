import React from "react";

export default function Duplicates() {
  let data = [1, 2, 3, 4, 5, 4, 16, 16];
  let arr = [];
  data.map((item, index) => {
    if (!arr.includes(item)) {
      arr.push(item);
    }
  });
  console.log(arr);

  for (let i = 0; i <= 5; i++) {
    console.log(i);
    for (let j = 0; j <= 5; j++) {
      console.log("",j);

    }
    
  }

  return <div></div>;
}

import React from "react";

export default function Forloop() {
  let n = 4;
  let k = "";

  //*****
  //*****
  //*****
  //*****

  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j <= n; j++) {
  //     k = k + "*";
  //   }
  //   k = k + "\n";
  // }
  // console.log(k);
  //*
  //**
  //***
  //****
  //   console.log(k);
  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j <= i; j++) {
  //     k = k + "*";
  //   }
  //   k = k + "\n";
  // }
  // console.log(k);

  //****
  //***
  //**
  //*

  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < n-i; j++) {
  //     k = k + "*";
  //   }
  //   k = k + "\n";
  // }
  // console.log(k);

  //   *
  //  **
  // ***
  //****
  // for (let i = 0; i <= n; i++) {
  //   for (let j = 0; j <= n; j++) {
  //     if (j < n-i) {
  //       k = k + " ";
  //     } else {
  //       k = k + "*";
  //     }
  //   }
  //   k = k + "\n";
  // }
  // console.log(k);



  //*****
  // ****
  //  ***
  //   **
  //    *
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (j < n-i) {
        k = k + " ";
      } else {
        k = k + "*";
      }
    }
    k = k + "\n";
  }
  console.log(k);
  return <div></div>;
}

//   *  
//  ***
// *****
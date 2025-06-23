import React from "react";

export default function Methods() {
  let arr = ["pratiksha", "aditi", "snehal", "shristy"];
  let arr2 = [1, 2, 3, 5, 4, 4];

  // includes (return boolean)
  console.log(arr.includes("shristy"));

  // foreach (returns nothing)
  arr.forEach((item, index) => console.log(item));

  // filter  (returns new array)
  let filterArr = arr2.filter((item, index) => item >= 4);
  console.log(filterArr);

  // join (return string)
  let joinArr = arr.join("@");
  console.log("jjjjjjjjjjjjjjjjjjjjjjjjj" + joinArr);

  // concat (return new array)
  let concatArr = arr.concat(arr2);
  console.log("cccccccccccccccccccccccccccccccccc", concatArr);

  // some (return boolean)
  let someArr = arr.some((item, index) => item === "shristy");

  // every (return boolean)
  let everyArr = arr.every((item, index) => item === "shristy");

  // map (returns new array of same length)
  let mapArr = arr2.map((item, index) => item >= 4);
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa" + Array.isArray(mapArr));

  // slice
  // splice

  // find (return first value that satisfies condition)
  let findArr = arr2.find((item, index) => item >= 4);
  console.log(findArr);

  // indexOf(return number)
  let indesArr = arr.indexOf("shristy");

  // push (adds item to the last index)
  arr.push("pratiksha");

  // pop (remove last item from the array)
  arr.pop();

  // shift (remove first item from the array)
  arr.shift();

  // unshift (adds item to the first index)
  arr.unshift("coming soon");

  // sort  (arrange the array in ascending order)
  arr.sort();

  // reverse (reverse the items in a array)
  arr.reverse();

  // isArray (check if the datatype is array)
  Array.isArray(arr);

  // StartWith (return booleean)

  let name = "Pratiksha Gurav";
  name.startsWith("P");

  // toLowerCase  convert string into lower case (return string)
  name.toLowerCase();

  // toUpperCase  convert string into upper case (return string)
  name.toUpperCase();

  //split ( returns array )
  name.split(" ");

  return <div></div>;
}

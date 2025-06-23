import logo from "./logo.svg";
import "./App.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [name, setname] = useState("Pratiksha");
  const [age, setage] = useState(20);

  const [data, setdata] = useState([1, 2, 3, 4, 6]);
  const [obj, setobj] = useState([
    { name: "pppp", age: 16 },
    { name: "dddd", age: 20 },
  ]);
  const [test, settest] = useState("gurav");

  function demo() {
    console.log("demo");
  }
  function x() {
    let a = "hello";
    return a;
    // y();

    // const y = () => console.log("first");
  }
  useEffect(() => {}, []);

  setInterval(() => {
   let b= x();
   console.log(b)
  }, 1000);

  useEffect(() => {
    demo();
  }, [name]);

  function changeName() {
    setname("Pratiksha Gurav");
    setage(23);
  }
  return (
    <div className="App">
      <NavLink to="/about">
        <button>Go to about</button>
      </NavLink>
      <p></p>
      <p>
        my name is {name} and {age}{" "}
      </p>
      <p
        onClick={() => {
          changeName();
        }}
      >
        Change your name
      </p>
      {/* <p>{obj}</p> */}
      {data?.map((item) => (
        <p>{item}</p>
      ))}
      {obj?.map((item) => (
        <div>
          <p>{item.name}</p>
          <p>{item.age}</p>

          <p>=====================</p>
          <p>
            {" "}
            {item.age == 23
              ? "pratiksha"
              : item.age >= 56
              ? "gurav"
              : "pratiksha gurav"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;

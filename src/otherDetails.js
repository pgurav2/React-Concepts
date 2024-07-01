import React, { useState } from "react";
import InputFeild from "./components/inputfeild";

export default function OtherDetails() {
  const [profilePic, setprofilePic] = useState(null);
  const [imgArr, setimgArr] = useState({});

  return (
    <div>
      <InputFeild
        label={"Profile Pic"}
        type="file"
        onChange={(e) => {
          console.log(e);
          setprofilePic(e.target.files[0]);
        }}
        accept="image/*"
      />

      <img
        src={profilePic && URL.createObjectURL(profilePic)}
        style={{ width: "300px", height: "300px" }}
      />

      <InputFeild
        label={"Profile Pic"}
        type="file"
        onChange={(e) => {
          console.log(e);
          setimgArr(e.target.files);

        }}
        multiple
        accept="image/*"
      />

      {console.log(imgArr)}
      {console.log(Object.values(imgArr))}
      {Object.values(imgArr).map((item) => (
        <img src={URL.createObjectURL(item)} style={{ width: "300px", height: "300px" }}/>
      ))}

    </div>
  );
}

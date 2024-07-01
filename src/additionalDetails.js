import React, { useState } from 'react'
import DropdownField from './components/dropdownfeild'

export default function AdditionalDetails() {
  const [age, setage] = useState("")
  const [city ,setcity] = useState("")
  let data = ["female", "male"]
  let data1=["mumbai","pune","ratnagiri"]
  return (
    <div>
      <div>
        <DropdownField label={"Genger"}select={"select your age"} state={data} onchange={(e)=> setage(e.target.value)} />
      </div>
      <div>
        <DropdownField label={"City"} select={"select your city"} state={data1} onchange={(e)=> setcity(e.target.value)} />
      </div>


    </div>
  )
}

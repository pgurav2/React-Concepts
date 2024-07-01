import React, { useState } from 'react'
import "./personalinfo.css"
import PersonalDetails from './personalDetails'
import AdditionalDetails from './additionalDetails'
import OtherDetails from './otherDetails'


export default function PersonalInfo() {
    const [active, setactive] = useState(0)


    const activeComponengts = () => {

        switch (active) {
            case 0:
                return <PersonalDetails setactive={setactive} />

            case 1:
                return <AdditionalDetails />

            case 2:
                return <OtherDetails />
                
            default:
                return <PersonalDetails />

        }

    }

    return (
        <div className='container'>
            <div className='wrapperFirst'>
                {["Personal details", "Additional deatils", "Other details"].map((item, index) => (
                    <div className={"disabled"}>
                        <p onClick={() => setactive(index)} className={active === index ? "activeCursor" : "items"}>{item}</p>
                    </div>
                ))}
            </div>
            <div className='wrapperSecond'>

                {activeComponengts()}

                {/* {active === 0 && <PersonalDetails/> || active === 1 && "hello pratiksha" || active === 2 && "hello pratiksha gurav"} */}
            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react'

export default function Local() {

    const [number, setnumber] = useState(0)
    const [inputValue, setinputValue] = useState(1)

    useEffect(() => {
        setnumber(localStorage.getItem("number"));
        setinputValue(localStorage.getItem("inputValue"))

    }, []);

    const handleIncrement = () => {
        console.log(typeof inputValue, typeof number)
        let number2 = number + inputValue;
        setnumber(number2)

        localStorage.setItem("number", number2)
    };

    const handleDecrement = () => {
        console.log(typeof inputValue, typeof number)
        let number2 = number - inputValue;
        setnumber(number2)
        localStorage.setItem("number2", number2)

    };

    const handleReset = () => {
        setnumber(0);
        setinputValue(1)

    };


    return (
        <div>
            <div>
                <div> <input type='text' value={inputValue} onChange={(e) => {
                    if (!isNaN(e.target.value)) {
                        setinputValue(Number(e.target.value))
                        localStorage.setItem("inputvalue", inputValue   )

                    }
                }
                }
                /></div>
                <div> <button onClick={() => handleReset()}>Reset</button></div>
                <div> <button onClick={() => handleIncrement()}>Increment</button></div>
                <div> <button onClick={() => handleDecrement()}>Decrement</button></div>
                <div>{number}</div>

            </div>
        </div>
    )
}

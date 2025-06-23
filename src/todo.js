import React, { useState } from 'react'

export default function Todo() {
    const [value, setvalue] = useState("")
    const [list, setlist] = useState([])
    const [listIndex, setlistIndex] = useState(null)


    let demoArray = [...list]

    const handleList = () => (

        demoArray.push(value),
        setlist(demoArray),
        setvalue("")
    )

    const handleDelete = (index) => (
        demoArray.splice(index, 1),
        setlist(demoArray)

    )

    const handleEdit = (item, index) => (
        setvalue(item),
        setlistIndex(index)
    )

    const handleUpdate = () => (

        demoArray[listIndex] = value,
        setlist(demoArray)
    )

    return (
        <div>
            <label>enter your list</label>
            <input type='text' value={value} onChange={(e) => setvalue(e.target.value)} placeholder='enter your list' />
            <button onClick={handleList}>Add</button>
            <button onClick={handleUpdate}>Update</button>


            {list?.map((item, index) => (
                <div>
                    <p>{item}</p>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                    <button onClick={() => handleEdit(item, index)}>Edit</button>


                </div>
            ))}
        </div>
    )
}

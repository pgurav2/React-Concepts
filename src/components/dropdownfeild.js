import React from 'react'

export default function DropdownField({ label, state, onchange, select }) {
    return (
        <div>
            <label>{label}</label>

            <select name="cars" id="cars" onChange={onchange}>
                <option value="select" selected disabled>{select}</option>
                {state.map((item) => (
                    <>
                        <option value={item}>{item}</option>
                    </>
                ))}

            </select>
        </div>
    )
}

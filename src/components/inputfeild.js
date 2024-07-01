import React from 'react'
import "./inputfeild.css"

export default function InputFeild({ type = "text", label, accept, value, placeholder, onChange, state = true, onfocus, className,multiple }) {
  return (
    <div className='inputWrapper'>

      <label>
        {label}  {state && <span className='star'>*</span>}
      </label>
      <input accept={accept} type={type} value={value} placeholder={placeholder} onChange={onChange} onFocus={onfocus} className={className} multiple={multiple} />

    </div>
  )
}

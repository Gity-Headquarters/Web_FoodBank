import React from 'react'

function InputForm({ htmlFor, title, type, onChange, value }: any) {
    return (
        <div className="mb-3">
            <label htmlFor={htmlFor} className="form-label">
                {title}
            </label>
            <input
                type={type}
                className="form-control"
                name={htmlFor}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default InputForm
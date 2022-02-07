import React from "react"

export const Textarea = ({input,meta,...props}) => {
    const hasError = meta.touched && meta.error
    return  (
        <div>
            <input {...input} {...props}></input>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
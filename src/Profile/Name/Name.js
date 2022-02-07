import React, { useEffect, useState } from 'react';
import s from './Name.module.css'

const Name = (props) =>  {
        
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let [editMode, setEditMode] = useState(false) //editMode = false (hook)
    let [status, setStatus] = useState(props.status)

    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
            <div className={s.wrap}>
                <span className={s.name}>{props.src.fullName}</span>
                {!editMode &&
                    <span onDoubleClick={activateMode}>{props.status || 'No Status'}</span>
                    }
                {editMode &&
                    <input value={status} onChange={onStatusChange} onBlur={deactivateMode} autoFocus={true}></input>
                }  
            </div>
        )
}

export default Name;
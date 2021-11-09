import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    
    const DialogsElement = props.DialogsElement
    const MessagesElement = props.MessagesElement
    

    let addMessage = () => {
        props.addMessage()
    }

    let onChange = (e) => {
        let text = e.target.value;
        props.onChange(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.main}>
                Dialogs
            </div>
            <div className={s.message}>
                <div className={s.names}>
                    {DialogsElement}
                </div>
                <div className={s.text}>
                    {MessagesElement}
                </div>
            </div>
            <input onChange={onChange} value={props.newMessageText} className={s.input}></input>
            <button onClick={addMessage} className={s.button}>Send</button>
        </div>
    );
}

export default Dialogs

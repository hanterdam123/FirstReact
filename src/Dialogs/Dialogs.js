import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem.js'
import DialogsText from './DialogsText/DialogsText.js'

const Dialogs = (props) => {
    
    const DialogsElement = props.DialogsElement.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} photo={dialog.photo} key={dialog.id}/>)
    const MessagesElement = props.MessagesElement.map(m => <DialogsText text={m.text} id={m.id} name={m.name} photo={m.photo} key={m.id}/>)
    const value = props.Value

    let addMessage = () => {
        props.addMessage()
    }

    let onChange = (e) => {
        let text = e.target.value
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
            <input onChange={onChange} value={value} className={s.input}></input>
            <button onClick={addMessage} className={s.button}>Send</button>
        </div>
    );
}

export default Dialogs

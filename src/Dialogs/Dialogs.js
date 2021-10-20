import React from 'react'
import s from './Dialogs.module.css'
import DialogsText from './DialogsText/DialogsText.js'
import DialogsItem from './DialogsItem/DialogsItem.js'
import {addMessageActionCreator, updateMessageActionCreator} from '.././Redux/MessageReducer/MessageReducer.js'

const Dialogs = (props) => {
    
    const DialogsElement = props.state.MessagePage.DialogsInfo.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} photo={dialog.photo}/>)
    const MessagesElement = props.state.MessagePage.MessagesInfo.map(m => <DialogsText text={m.text} id={m.id} name={m.name} photo={m.photo}/>)
    

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateMessageActionCreator(text));
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
            <input onChange={onChange} value={props.state.MessagePage.newMessageText} className={s.input}></input>
            <button onClick={addMessage} className={s.button}>Send</button>
        </div>
    );
}

export default Dialogs

import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'

let newMessageElement = React.createRef();
let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
}

const DialogsItem = (props) => {
    return (
        <ul>
            <li>
                <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>
                    <img className={s.dialogs_photo} src={props.photo}></img>
                    {props.name}
                </NavLink>
            </li>
        </ul>
    );
}
 
const DialogsText = (props) => {
    if (props.id == 0) {
    return (
        <ul>
            <li className={s.text_me}>
                <p className={s.message_me}>{props.text}</p>
                <div>
                    <img src={props.photo}></img>
                    <p>{props.name}</p>
                </div>
            </li>
        </ul>
    )
    }
else {
    return (
    <ul>
        <li className={s.text_friend}>
            <div>
                <img src={props.photo}></img>
                <p>{props.name}</p>
            </div>
            <p className={s.message_friend}>{props.text}</p>
        </li>
    </ul>
    );
    }
}

const Dialogs = (props) => {
    
    let DialogsElement = props.state.DialogsInfo.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} photo={dialog.photo}/>)
    let MessagesElement = props.state.MessagesInfo.map(m => <DialogsText text={m.text} id={m.id} name={m.name} photo={m.photo}/>)
    
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
            <input ref={newMessageElement} className={s.input}></input>
            <button onClick={addMessage} className={s.button}>Send</button>
        </div>
    );
}

export default Dialogs

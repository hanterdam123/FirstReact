import React from 'react';
import s from '../Dialogs.module.css'


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

export default DialogsText
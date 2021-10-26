import React from 'react'
import DialogsText from './DialogsText/DialogsText.js'
import DialogsItem from './DialogsItem/DialogsItem.js'
import Dialogs from './Dialogs.js'
import {addMessageActionCreator, updateMessageActionCreator} from '.././Redux/MessageReducer/MessageReducer.js'

const DialogsContainer = (props) => {

    const DialogsElement = props.store.messageReducer.DialogsInfo.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} photo={dialog.photo}/>)
    const MessagesElement = props.store.messageReducer.MessagesInfo.map(m => <DialogsText text={m.text} id={m.id} name={m.name} photo={m.photo}/>)
    
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onChange = (text) => {
        props.dispatch(updateMessageActionCreator(text));
    }
    return (<Dialogs DialogsElement={DialogsElement} MessagesElement={MessagesElement} addMessage={addMessage} onChange={onChange} state={props.store}/>)
}

export default DialogsContainer
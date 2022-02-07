import React from 'react'
import { Navigate, Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../validators/FormsControl'
import { requiredField, maxLengthCreator } from '../validators/validators'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem.js'
import DialogsText from './DialogsText/DialogsText.js'

const Dialogs = (props) => {
    
    const DialogsElement = props.DialogsElement.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} photo={dialog.photo} key={dialog.id}/>)
    const MessagesElement = props.MessagesElement.map(m => <DialogsText text={m.text} id={m.id} name={m.name} photo={m.photo} key={m.id}/>)
    const value = props.Value

    let addMessage = (values) => {
        props.addMessage(values.messageField)
    }

    let FormLength = maxLengthCreator(20)
   

    const AddMessageForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <Field component={Textarea} name={'messageField'} className={s.input} validate={[requiredField, FormLength]}></Field>
                <button className={s.button}>Send</button>
            </form>
        )
    }

    const AddMessageReduxForm = reduxForm({form:'message'})(AddMessageForm)

    if(props.isAuth === false) {return <Redirect to={'/login'}/>}
    else {
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
            <AddMessageReduxForm onSubmit={addMessage}/>
        </div>
    );
    }
}

export default Dialogs

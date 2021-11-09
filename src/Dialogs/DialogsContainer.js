
import Dialogs from './Dialogs.js'
import {addMessageActionCreator, updateMessageActionCreator} from '.././Redux/MessageReducer/MessageReducer.js'
import DialogsItem from './DialogsItem/DialogsItem.js'
import DialogsText from './DialogsText/DialogsText.js'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return ({
        DialogsElement: state.messageReducer.DialogsInfo.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} photo={dialog.photo}/>),
        MessagesElement: state.messageReducer.MessagesInfo.map(m => <DialogsText text={m.text} id={m.id} name={m.name} photo={m.photo}/>)
    })
}

let mapDispatchToProps = (dispatch) => 
{
    return ({
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
    
        onChange: (text) => {
            dispatch(updateMessageActionCreator(text))
        }
    })
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
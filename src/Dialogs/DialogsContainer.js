
import Dialogs from './Dialogs.js'
import {addMessageActionCreator, updateMessageActionCreator} from '.././Redux/MessageReducer/MessageReducer.js'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    
    return ({
        DialogsElement: state.messageReducer.DialogsInfo,
        MessagesElement: state.messageReducer.MessagesInfo,
        Value: state.messageReducer.newMessageText
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
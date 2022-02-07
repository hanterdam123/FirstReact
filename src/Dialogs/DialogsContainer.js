
import Dialogs from './Dialogs.js'
import {addMessageActionCreator, updateMessageActionCreator} from '.././Redux/MessageReducer/MessageReducer.js'
import { connect } from 'react-redux'
import {authRedirect} from '../HOC/authRedirect.js'
import { compose } from 'redux'

let mapStateToProps = (state) => {
    
    return ({
        DialogsElement: state.messageReducer.DialogsInfo,
        MessagesElement: state.messageReducer.MessagesInfo,
        Value: state.messageReducer.newMessageText,
        isAuth:state.authReducer.isAuth
    })

}

let mapDispatchToProps = (dispatch) => 
{
    return ({
        addMessage: (body) => {
            dispatch(addMessageActionCreator(body))
        },
    
        onChange: (text) => {
            dispatch(updateMessageActionCreator(text))
        }
    })
}

export default compose(connect(mapStateToProps, mapDispatchToProps) ,authRedirect)(Dialogs)


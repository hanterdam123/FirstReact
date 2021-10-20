const ADD_MESSAGE = 'ADD_MESSAGE'
const CHANGE_MESSAGE = 'CHANGE_MESSAGE'

const messageReducer = (state, action) => {
    if (action.type === ADD_MESSAGE) {
        let newMessage = {
          text:state.newMessageText,
          id:0,
          name:'Artem',
          photo: 'https://yt3.ggpht.com/a/AATXAJyM4KuEcv_bqSIjZreW0i3voF85xaiLKUuhN4punw=s900-c-k-c0xffffffff-no-rj-mo'
        }
        state.MessagesInfo.push(newMessage)
        state.newMessageText.text = ''
        
    } else if (action.type === CHANGE_MESSAGE) {
        state.newMessageText = action.text
        
    }
    return state
}

export const addMessageActionCreator = () => ({type:ADD_MESSAGE})

export const updateMessageActionCreator = (text) => ({type:CHANGE_MESSAGE , text:text})

export default messageReducer
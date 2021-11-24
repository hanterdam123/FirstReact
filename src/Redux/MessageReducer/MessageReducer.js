const ADD_MESSAGE = 'ADD_MESSAGE'
const CHANGE_MESSAGE = 'CHANGE_MESSAGE'

let initialState = {
   
      newMessageText:'',
      DialogsInfo: [
        {name:'Nikita', id:1, photo:'https://st3.depositphotos.com/1007566/32981/v/950/depositphotos_329811158-stock-illustration-young-man-avatar-character-icon.jpg' },
        {name:'Arthur', id:2, photo: 'https://implantes-dentales.odonto.com.ar/wp-content/uploads/2018/01/Depositphotos_32817757_l.jpg' },
        {name:'Masha', id:3, photo:'https://yobte.ru/uploads/posts/2019-11/krasivye-devushki-s-dlinnymi-volosami-60-foto-43.jpg' }
      ],
      MessagesInfo: [
          {text:'Hello, Nikita, how are you ?', id:0, name:'Artem' ,photo:'https://yt3.ggpht.com/a/AATXAJyM4KuEcv_bqSIjZreW0i3voF85xaiLKUuhN4punw=s900-c-k-c0xffffffff-no-rj-mo'},
          {text:"It's fantastic", id:1, name:'Nikita', photo:'https://st3.depositphotos.com/1007566/32981/v/950/depositphotos_329811158-stock-illustration-young-man-avatar-character-icon.jpg'},
          {text:"Where are you from ?", id:1, name:'Nikita', photo:'https://st3.depositphotos.com/1007566/32981/v/950/depositphotos_329811158-stock-illustration-young-man-avatar-character-icon.jpg'},
          {text:'I am from Russia!', id:0, name:'Artem' ,photo:'https://yt3.ggpht.com/a/AATXAJyM4KuEcv_bqSIjZreW0i3voF85xaiLKUuhN4punw=s900-c-k-c0xffffffff-no-rj-mo'},
          {text:"And you?", id:1, name:'Nikita', photo:'https://st3.depositphotos.com/1007566/32981/v/950/depositphotos_329811158-stock-illustration-young-man-avatar-character-icon.jpg'}
      ]
    }


const messageReducer = (state = initialState, action) => {
    
    let stateCopy

    switch (action.type) {
       case ADD_MESSAGE: {
            let newMessage = {
                text:state.newMessageText,
                id:0,
                name:'Artem',
                photo: 'https://yt3.ggpht.com/a/AATXAJyM4KuEcv_bqSIjZreW0i3voF85xaiLKUuhN4punw=s900-c-k-c0xffffffff-no-rj-mo'
            }
            stateCopy = {
                ...state,
                newMessageText:'',
                MessagesInfo:[...state.MessagesInfo,newMessage]
            }
            return stateCopy
       }
        case CHANGE_MESSAGE: {
            stateCopy = {
                ...state,
                newMessageText: action.text
            }
            return stateCopy
        }
        default: { 
            return state
        }
    }
}

export const addMessageActionCreator = () => ({type:ADD_MESSAGE})

export const updateMessageActionCreator = (text) => ({type:CHANGE_MESSAGE , text:text})

export default messageReducer
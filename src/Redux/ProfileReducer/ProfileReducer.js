const ADD_POST = 'ADD_POST'
const CHANGE_POST = 'CHANGE_POST'

let initialState = {
 
    newPostText:'' ,
    PostsInfo: [
      {message:'Hello, World!', like:'20', dislike:'2', id:1,name:'Artem', photo:'https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg'},
      {message:'My name is Arthur', like:'20', dislike:'2',id:2,name:'Arthur', photo:'https://implantes-dentales.odonto.com.ar/wp-content/uploads/2018/01/Depositphotos_32817757_l.jpg'},
      {message:'How are you?', like:'20', dislike:'2',id:3,name:'Masha', photo:'https://yobte.ru/uploads/posts/2019-11/krasivye-devushki-s-dlinnymi-volosami-60-foto-43.jpg'},
    ],
  }

const profileReducer = (state = initialState, action) => {
    
  let stateCopy 

  switch (action.type) {
      case ADD_POST:{
        let newPost = {
          message:state.newPostText,
          id:1,
          like:0,
          dislike:0,
          name:'Artem',
          photo:'https://yt3.ggpht.com/a/AATXAJyM4KuEcv_bqSIjZreW0i3voF85xaiLKUuhN4punw=s900-c-k-c0xffffffff-no-rj-mo'
        }
        stateCopy = {
          ...state,
          PostsInfo: [...state.PostsInfo, newPost] ,
          newPostText: ''
        }
        return stateCopy
      }
      case CHANGE_POST:{
        stateCopy = {
          ...state,
          newPostText: action.text
        }
        return stateCopy
      }
      default: {
        return state
      }
    }
}

export const addPostActionCreator = () => ({type:ADD_POST})

export const updatePostActionCreator = (text) => ({type:CHANGE_POST, text:text})

export default profileReducer
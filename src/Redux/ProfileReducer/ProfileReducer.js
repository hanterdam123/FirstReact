const ADD_POST = 'ADD_POST'
const CHANGE_POST = 'CHANGE_POST'

const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
          message:state.newPostText,
          id:1,
          like:0,
          dislike:0,
          name:'Artem',
          photo:'https://yt3.ggpht.com/a/AATXAJyM4KuEcv_bqSIjZreW0i3voF85xaiLKUuhN4punw=s900-c-k-c0xffffffff-no-rj-mo'
        }
        state.PostsInfo.push(newPost)
        state.newPostText = ' '
        
      }
    else if (action.type === CHANGE_POST) {
        state.newPostText = action.text
    
    }
    return state
}

export const addPostActionCreator = () => ({type:ADD_POST})

export const updatePostActionCreator = (text) => ({type:CHANGE_POST, text:text})

export default profileReducer
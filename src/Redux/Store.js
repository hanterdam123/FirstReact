import  messageReducer from "./MessageReducer/MessageReducer.js"
import  profileReducer  from "./ProfileReducer/ProfileReducer.js"

let Store = {
  
  //rerender(restart)

callSubscriber()  {
  console.log(' ')
},

getState() {
  return this._State
},
  
subscribe(observer) {
  this.callSubscriber = observer;
},

  // state

_State: {
    MessagePage: 
    {
      
    },
    ProfilePage: 
    {
      
    },
     NavBar: {
        
    }

  },

  // dispatch action's

dispatch(action) {
  this._State.MessagePage = messageReducer(this._State.MessagePage , action)
  this._State.ProfilePage = profileReducer(this._State.ProfilePage , action)
  this._State.NavBar = navbarReducer(this._State.NavBar, action)
  this.callSubscriber()
  }
}

export default Store
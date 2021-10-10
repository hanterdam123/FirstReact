import { rerender } from "../render";

let State = {
    MessagePage: 
    {
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
    },
    ProfilePage: 
    {
      PostsInfo: [
        {message:'Hello, World!', like:'20', dislike:'2', id:1,name:'Artem', photo:'https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg'},
        {message:'My name is Arthur', like:'20', dislike:'2',id:2,name:'Arthur', photo:'https://implantes-dentales.odonto.com.ar/wp-content/uploads/2018/01/Depositphotos_32817757_l.jpg'},
        {message:'How are you?', like:'20', dislike:'2',id:3,name:'Masha', photo:'https://yobte.ru/uploads/posts/2019-11/krasivye-devushki-s-dlinnymi-volosami-60-foto-43.jpg'},
      ]
    },
    SideBar: {
        data:[
        {name:'NEWS', src:'/news'},
        {name:'MESSAGES', src:'/dialogs'},
        {name:'PROFILE', src:'/profile'},
        {name:'INFO', src:'/info'},
        ],
        friends:[
          {name:'Nikita',id:1,photo:'https://st3.depositphotos.com/1007566/32981/v/950/depositphotos_329811158-stock-illustration-young-man-avatar-character-icon.jpg'},
          {name:'Arthur',id:2,photo:'https://implantes-dentales.odonto.com.ar/wp-content/uploads/2018/01/Depositphotos_32817757_l.jpg'},
          {name:'Masha', id:3, photo:'https://yobte.ru/uploads/posts/2019-11/krasivye-devushki-s-dlinnymi-volosami-60-foto-43.jpg'}
        ]
    },
  }
export let addPost = (message) => {
    let newPost = {
      message:message,
      id:1,
      like:0,
      dislike:0,
      name:'Artem',
      photo:'https://yt3.ggpht.com/a/AATXAJyM4KuEcv_bqSIjZreW0i3voF85xaiLKUuhN4punw=s900-c-k-c0xffffffff-no-rj-mo'
    }
    State.ProfilePage.PostsInfo.push(newPost)
    rerender(State)
}

export let addMessage = (message) => {
    let newMessage = {
      text:message,
      id:0,
      name:'Artem',
      photo: 'https://yt3.ggpht.com/a/AATXAJyM4KuEcv_bqSIjZreW0i3voF85xaiLKUuhN4punw=s900-c-k-c0xffffffff-no-rj-mo'
    }
    State.MessagePage.MessagesInfo.push(newMessage)
    rerender(State)
}

  export default State;
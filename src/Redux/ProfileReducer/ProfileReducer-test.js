import profileReducer, { addPostActionCreator } from "./ProfileReducer";


it('new post should be added', () => {
    let action = addPostActionCreator('it-kamasutra')

    let state = {
        newPostText:'' ,
        PostsInfo: [
          {message:'Hello, World!', like:'20', dislike:'2', id:1,name:'Artem', photo:'https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg'},
          {message:'My name is Arthur', like:'20', dislike:'2',id:2,name:'Arthur', photo:'https://implantes-dentales.odonto.com.ar/wp-content/uploads/2018/01/Depositphotos_32817757_l.jpg'},
          {message:'How are you?', like:'20', dislike:'2',id:3,name:'Masha', photo:'https://yobte.ru/uploads/posts/2019-11/krasivye-devushki-s-dlinnymi-volosami-60-foto-43.jpg'},
        ],
        users:[],
        status:''
    }

    let newState = profileReducer(state , action)
    expect(newState.PostsInfo.length.toBe(5))
})

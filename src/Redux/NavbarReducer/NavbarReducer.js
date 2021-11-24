
let initialState = {
       info:[
       {name:'NEWS', src:'/news'},
       {name:'MESSAGES', src:'/dialogs'},
       {name:'PROFILE', src:'/profile'},
       {name:'INFO', src:'/info'},
       {name:'USERS',src:'/users'}
       ],
       friends:[
         {name:'Nikita',id:1,photo:'https://st3.depositphotos.com/1007566/32981/v/950/depositphotos_329811158-stock-illustration-young-man-avatar-character-icon.jpg'},
         {name:'Arthur',id:2,photo:'https://implantes-dentales.odonto.com.ar/wp-content/uploads/2018/01/Depositphotos_32817757_l.jpg'},
         {name:'Masha', id:3, photo:'https://yobte.ru/uploads/posts/2019-11/krasivye-devushki-s-dlinnymi-volosami-60-foto-43.jpg'}
       ],
       sidebar:[
         {photo:"https://www.ixbt.online/idata/gtnews/2020/08/[5f2afc5556bae]/dR719lj213411WqhfZaFH5CB536oc6M47E7mPOLO.jpeg"}
       ]
}

const navbarReducer = (state = initialState, action) => {
       return state
}

export default navbarReducer
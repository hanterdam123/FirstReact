import React from 'react'
import Carte from './Carte/Carte.js'
import FriendsInfo from './FriendsInfo/FriendsInfo.js'
import Sidebar from './Sidebar/Sidebar.js'
import Navbar from './Navbar'

const NavbarContainer = (props) => {
    let Menu = props.store.navbarReducer.info.map(s => <Carte name={s.name} src={s.src}/>)
    let Friends = props.store.navbarReducer.friends.map(s => <FriendsInfo name={s.name} id={s.id} photo={s.photo}/>)
    let Background = props.store.navbarReducer.sidebar.map(s => <Sidebar photo={s.photo}/>)
    return (
        <Navbar menu={Menu} friends={Friends} background={Background}/>
    )
}

export default NavbarContainer

import Navbar from './Navbar'
import { connect } from 'react-redux'
import Carte from './Carte/Carte.js'
import FriendsInfo from './FriendsInfo/FriendsInfo.js'
import Sidebar from './Sidebar/Sidebar.js'

let mapStateToProps = (state) => {
    return {
        menu: state.navbarReducer.info.map(s => <Carte name={s.name} src={s.src}/>),
        friends: state.navbarReducer.friends.map(s => <FriendsInfo name={s.name} id={s.id} photo={s.photo}/>),
        background: state.navbarReducer.sidebar.map(s => <Sidebar photo={s.photo}/>)
    }
}  
const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer
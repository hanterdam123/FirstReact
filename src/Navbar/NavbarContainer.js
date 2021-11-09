
import Navbar from './Navbar'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        menu: state.info,
        friends: state.friends,
        background: state.sidebar
    }
}  
const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer
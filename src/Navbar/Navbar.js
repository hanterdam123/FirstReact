import React from 'react';
import s from './Navbar.module.css';
import Carte from './Carte/Carte.js'
import FriendsInfo from './FriendsInfo/FriendsInfo.js'
import Sidebar from './Sidebar/Sidebar.js'

const Navbar = (props) => {

  let Menu = props.state.info.map(s => <Carte name={s.name} src={s.src}/>)
  let Friends = props.state.friends.map(s => <FriendsInfo name={s.name} id={s.id} photo={s.photo}/>)
  let Background = props.state.sidebar.map(s => <Sidebar photo={s.photo}/>)

  return (
      <div className={s.navbar}>
        <ul>
            {Menu}
          <p className={s.friends_info}>Friends</p>
          <div className={s.list_friends}>
            {Friends}
          </div>
        </ul>
        <div className={s.main_img}>
          {Background}
        </div>
      </div>

    );
}
export default Navbar;
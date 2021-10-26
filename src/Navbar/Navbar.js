import React from 'react';
import s from './Navbar.module.css';

const Navbar = (props) => {

  let menu = props.menu
  let friends = props.friends
  let background = props.background

  return (
      <div className={s.navbar}>
        <ul>
            {menu}
          <p className={s.friends_info}>Friends</p>
          <div className={s.list_friends}>
            {friends}
          </div>
        </ul>
        <div className={s.main_img}>
            {background}
        </div>
      </div>

    );
}
export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const SideBar = (props) => {
  return (
      <li><NavLink to={props.src} activeClassName={s.active}>{props.name}</NavLink></li>
  );
}
const FriendsInfo = (props) => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={'/dialogs/' + props.id}>
            <img className={s.photo_friends} src={props.photo}></img>
            <p className={s.name_friends}>{props.name}</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

const Navbar = (props) => {
  let NavBar = props.state.data.map(s => <SideBar name={s.name} src={s.src}/>)
  let Friends = props.state.friends.map(s => <FriendsInfo name={s.name} id={s.id} photo={s.photo}/>)
  return (
      <div className={s.navbar}>
        <ul>
          {NavBar}
          <p className={s.friends_info}>Friends</p>
          <div className={s.list_friends}>
            {Friends}
          </div>
        </ul>
        <div className={s.main_img}>
          <img src="https://kgbu-shar.ru/wp-content/uploads/2017/02/fon-priroda30.jpg" className={s.nav_img}></img>
        </div>
      </div>

    );
}
export default Navbar;
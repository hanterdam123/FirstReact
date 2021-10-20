import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Navbar.module.css';

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

export default FriendsInfo


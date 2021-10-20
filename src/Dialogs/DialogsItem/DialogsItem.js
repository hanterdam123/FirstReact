import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogsItem = (props) => {
    return (
        <ul>
            <li>
                <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>
                    <img className={s.dialogs_photo} src={props.photo}></img>
                    {props.name}
                </NavLink>
            </li>
        </ul>
    );
}

export default DialogsItem
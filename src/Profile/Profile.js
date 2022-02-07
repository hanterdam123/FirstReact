import React from 'react';
import s from'./Profile.module.css';
import Logo from './Logo/Logo.js';
import PostsContainer from './Posts/PostsContainer';
import Name from './Name/Name';

const Profile = (props) => {
    
    return (
        <div className={s.profile}>
            <div className={s.people}>
                <Logo src={props.users}/>
                <div className={s.description}>
                    <Name status={props.status} src={props.users} updateStatus={props.updateStatus}/>
                </div>
            </div>
            <PostsContainer store={props.store} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;
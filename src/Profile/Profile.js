import React from 'react';
import s from'./Profile.module.css';
import Name from './Name/Name.js';
import Logo from './Logo/Logo.js';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <div className={s.people}>
                <Logo src='https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg'/>
                <div className={s.description}>
                    <Name text='nickname'/>
                </div>
            </div>
            <PostsContainer store={props.store} dispatch={props.dispatch}/>
        </div>
        
    );
}
export default Profile;
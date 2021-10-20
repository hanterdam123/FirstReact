import React, {createRef} from 'react';
import s from './Posts.module.css';
import Write from './Write/Write.js';
import {addPostActionCreator, updatePostActionCreator} from '../.././Redux/ProfileReducer/ProfileReducer.js'

const Posts = (props) => {

    let PostsElement = props.state.ProfilePage.PostsInfo.map(p => <Write message={p.message} like={p.like} dislike={p.dislike} id={p.id} name={p.name} photo={p.photo}/>)

    let newPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onChange = (e) => {
        let text = e.target.value;
        props.dispatch(updatePostActionCreator(text))
    }

    return (
        <div className={s.posts}>
            <input onChange={onChange} value={props.state.ProfilePage.newPostText} placeholder="write..."></input>
            <button onClick={newPost}>POST</button>
            {PostsElement}
        </div>
    );
}
export default Posts;
import React from 'react';
import s from './Posts.module.css';

const Posts = (props) => {

    let PostsElement = props.PostsElement

    let newPost = () => {
        props.newPost()
    }

    let onChange = (e) => {
        let text = e.target.value;
        props.onChange(text)
    }

    return (
        <div className={s.posts}>
            <input onChange={onChange} value={props.state.newPostText} placeholder="write..."></input>
            <button onClick={newPost}>POST</button>
            {PostsElement}
        </div>
    );
}
export default Posts;
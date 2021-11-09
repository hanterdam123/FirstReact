import React from 'react';
import s from './Posts.module.css';
import Write from './Write/Write.js'

const Posts = (props) => {
    let PostsElement = props.PostsElement.map(p => <Write message={p.message} like={p.like} dislike={p.dislike} id={p.id} name={p.name} photo={p.photo}/>)

    let newPost = () => {
        props.newPost()
    }

    let onChange = (e) => {
        let text = e.target.value;
        props.onChange(text)
    }

    return (
        <div className={s.posts}>
            <input onChange={onChange} value={props.newPostText} placeholder="write..."></input>
            <button onClick={newPost}>POST</button>
            {PostsElement}
        </div>
    )
}
export default Posts;
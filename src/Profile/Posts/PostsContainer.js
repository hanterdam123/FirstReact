import React from 'react'
import Posts from './Posts'
import Write from './Write/Write.js'
import {addPostActionCreator, updatePostActionCreator} from '../../Redux/ProfileReducer/ProfileReducer.js'

const PostsContainer = (props) => {

    let PostsElement = props.store.profileReducer.PostsInfo.map(p => <Write message={p.message} like={p.like} dislike={p.dislike} id={p.id} name={p.name} photo={p.photo}/>)

    let newPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onChange = (text) => {
        props.dispatch(updatePostActionCreator(text))
    }

    return (<Posts PostsElement={PostsElement} newPost={newPost} onChange={onChange} state={props.store}/>);
}
export default PostsContainer;
import React from 'react'
import Posts from './Posts.js'
import { addPostActionCreator, updatePostActionCreator } from '../../Redux/ProfileReducer/ProfileReducer.js'
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        PostsElement: state.profileReducer.PostsInfo,
        Value: state.profileReducer.newPostText
    }
}

/*let mapDispatchToProps = (dispatch) => 
{
    return {
        newPost: () => {
            dispatch(addPostActionCreator())
        },

        onChange: (text) => {
            dispatch(updatePostActionCreator(text))
        }
    }
}*/

const PostsContainer = connect(mapStateToProps, {
        newPost: addPostActionCreator,
        onChange: updatePostActionCreator,
    })(Posts)

export default PostsContainer;
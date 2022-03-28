import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';

function mapStateToProps(state: any) {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        updateNewPostText: (text: any) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost() {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
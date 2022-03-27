import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';

export const MyPostsContainer = (props: any) => {
    let state = props.store.getState()

    function addPost() {
        props.store.dispatch(addPostAC())
    }

    const onPostChange = (text: any) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>
}
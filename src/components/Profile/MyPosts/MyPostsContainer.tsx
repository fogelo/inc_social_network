import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {StoreContext} from '../../../index';

export const MyPostsContainer = (props: any) => {
    return <StoreContext.Consumer>
        {
            (store: any) => {
                const state = store.getState()

                function addPost() {
                    store.dispatch(addPostAC())
                }

                const onPostChange = (text: any) => {
                    store.dispatch(updateNewPostTextAC(text))
                }
                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>
            }
        }
    </StoreContext.Consumer>
}
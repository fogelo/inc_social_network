import React from 'react';
import {Post} from './Post/Post';
import {ProfilePropsType} from '../Profile';

export const MyPosts = (props: ProfilePropsType) => {
    return (
        <div>
            <div>My posts</div>
            <textarea/>
            <button>add post</button>
            {props.state.posts.map((item, index) => <Post post={props.state.posts[index]}/>)}
        </div>
    );
}
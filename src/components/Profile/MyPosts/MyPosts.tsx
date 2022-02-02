import React from 'react';
import {Post} from './Post/Post';

let posts = [
    {id: 1, post: 'Я попал в инкубатор'},
    {id: 2, post: 'Я выучил CSS'},
    {id: 3, post: 'Я выучил JS'},
    {id: 4, post: 'Я выучил React'},
]

export const MyPosts = () => {
    return (
        <div>
            <div>My posts</div>
            <textarea/>
            <button>add post</button>
            {posts.map((item, index) => <Post post={posts[index]}/>)}
        </div>
    );
}
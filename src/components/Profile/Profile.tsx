import React from 'react';
import style from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';

type PostType = {
        id: number
        post: string
}

export type ProfilePropsType = {
    posts: Array<PostType>
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.profile}>
            <div>ava+description</div>
            <MyPosts {...props}/>
        </div>
    );
}


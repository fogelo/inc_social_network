import React from 'react';
import style from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {PostType} from '../../App';


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


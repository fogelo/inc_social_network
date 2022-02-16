import React from 'react';
import style from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfilePageType} from '../../App';


export type ProfilePropsType = {
    state: ProfilePageType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.profile}>
            <div>ava+description</div>
            <MyPosts {...props}/>
        </div>
    );
}


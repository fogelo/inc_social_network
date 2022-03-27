import React from 'react';
import style from './Profile.module.css'
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfilePageType} from '../../App';


export type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: any
}

export const Profile = (props: any) => {
    return (
        <div className={style.profile}>
            <div>ava+description</div>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}


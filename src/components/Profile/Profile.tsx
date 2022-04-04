import React from 'react';
import style from './Profile.module.css'
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfilePageType} from '../../App';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';


export type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: any
}

export const Profile = (props: any) => {
    return (
        <div className={style.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}


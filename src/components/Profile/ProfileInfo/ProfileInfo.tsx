import React from 'react';
import {Preloader} from '../../common/Preloader';

export const ProfileInfo = (props: any) => {
    console.log(props)
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>name: {props.profile.fullName}</div>
            <div>
                <img src={props.profile.photos.small ? props.profile.photos.small : ''} alt="1"/>
            </div>
            <div>about me: {props.profile.aboutMe}</div>
        </div>
    )
}
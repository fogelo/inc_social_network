import React from 'react';
import {Preloader} from '../../common/Preloader';
import photo from '../../../img/user.png'
import {ProfileStatus} from './ProfileStatus';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';

export const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>name: {props.profile.fullName}</div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            <div>
                <img src={props.profile.photos.small ? props.profile.photos.small : photo}
                     alt="1"
                     style={{width: '100px'}}/>
            </div>
            <div>about me: {props.profile.aboutMe}</div>
        </div>
    )
}



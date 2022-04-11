import photo from '../../img/user.png';
import React from 'react';
import {NavLink} from 'react-router-dom';

export const User = ({id, name, status, photos, followingInProgress, follow, unfollow, followed}: any) => {
    return (
        <div key={id} style={{marginBottom: '20px'}}>
            <div>
                <NavLink to={`/profile/${id}`}>
                    <img style={{width: '100px'}} src={photos.small !== null ? photos.small : photo}
                         alt="avatar"/>
                </NavLink>
            </div>

            <div>
                {followed
                    ? <button disabled={followingInProgress.some((userId: any) => userId === id)} onClick={() => {
                        follow(id)

                    }}>unfollow</button>
                    : <button disabled={followingInProgress.some((userId: any) => userId === id)} onClick={() => {
                        unfollow(id)
                    }}>follow</button>}
            </div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>status: {status}</div>
        </div>
    )
}
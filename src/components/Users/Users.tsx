import s from './UsersContainer.module.css';
import photo from '../../img/user.png';
import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

export const Users = (props: any) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.usersCount)
    let pagesArray = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i)
    }
    return (
        <div>
            {pagesArray.map((e, i) => <span key={i}
                                            className={e === props.currentPage ? s.currentPage : ''}
                                            onClick={() => props.onPageChanged(e)}>
                    {e}
                </span>)}
            {props.users.map((u: any) => <div key={u.id} style={{marginBottom: '20px'}}>
                <div>
                    <NavLink to={`/profile/${u.id}`}>
                        <img style={{width: '100px'}} src={u.photos.small !== null ? u.photos.small : photo}
                             alt="avatar"/>
                    </NavLink>
                </div>

                <div>
                    {u.followed
                        ? <button onClick={() => {
                            axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + u.id, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'e1a10142-bc6b-4db7-85fc-aa063d946841'
                                }
                            }).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }

                            })

                        }}>unfollow</button>
                        : <button onClick={() => {
                            axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + u.id, {}, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'e1a10142-bc6b-4db7-85fc-aa063d946841'
                                }
                            }).then(response => {
                                console.log(response)
                                if (response.data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                            })
                        }}>follow</button>}
                </div>
                <div>id: {u.id}</div>
                <div>name: {u.name}</div>
                <div>status: {u.status}</div>
                {/*<div>{u.location.city}</div>*/}
                {/*<div>{u.location.country}</div>*/}

            </div>)}
        </div>
    )
}
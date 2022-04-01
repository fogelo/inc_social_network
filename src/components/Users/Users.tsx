import s from './UsersContainer.module.css';
import photo from '../../img/user.png';
import React from 'react';

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
                    <img style={{width: '100px'}} src={u.photos.small !== null ? u.photos.small : photo}
                         alt="avatar"/>
                </div>

                <div>
                    {u.followed
                        ? <button onClick={() => props.unfollow(u.id)}>unfollow</button>
                        : <button onClick={() => props.follow(u.id)}>follow</button>}
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
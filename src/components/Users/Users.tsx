import React from 'react';
import {Paginator} from './Paginator';
import {User} from './User';

export const Users = (props: any) => {
    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount}
                       usersCount={props.usersCount}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}/>
            {props.users.map((u: any) => <User key={u.id}
                                               id={u.id}
                                               name={u.name}
                                               status={u.status}
                                               photos={u.photos}
                                               followed={u.followed}
                                               follow={props.follow}
                                               unfollow={props.unfollow}
                                               followingInProgress={props.followingInProgress}

            />)}
        </div>
    )
}
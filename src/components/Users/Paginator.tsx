import s from './UsersContainer.module.css';
import React from 'react';

export const Paginator = (props: any) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.usersCount)
    let pagesArray = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i)
    }
    return (
        <div>
            {pagesArray.map((e, i) => {
                return (
                    <span key={i}
                          className={props.currentPage === e ? s.currentPage : ''}
                          onClick={() => props.onPageChanged(e)}>{e}
                    </span>
                )
            })}
        </div>
    )
}
import React from 'react';
import ava from '../../../../img/ava.png'
import style from '../Post/Post.module.css'

type PropsType = {
    post: {
        id: number
        post: string
        likesCount: number
    }
}

export const Post: React.FC<PropsType> = (props: PropsType) => { /*здесь 2 способа типизации*/
    return (
        <div className={style.post__wrapper}>
            <img src={ava} alt="ava"/>
            <div className={style.post}>{props.post.post}</div>
            <span>{props.post.likesCount}</span>
        </div>
    );
}
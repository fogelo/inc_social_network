import React from 'react';
import ava from '../../../../img/ava.png'
import style from '../Post/Post.module.css'

type PropsType = {
    post: {
        id: number
        post: string
    }
}

export const Post: React.FC<PropsType> = (props: PropsType) => {
    return (
        <div className={style.post__wrapper}>
            <img src={ava} alt="ava"/>
            <div className={style.post}>{props.post.post}</div>
        </div>
    );
}
import React from 'react';
import style from './Menu.module.css'

export const Menu = () => {
    return (
        <div>
            <nav className={style.menu}>
                <a href={'s#'} className={style.menu__item}>Profile</a>
                <a href={'s#'} className={style.menu__item}>Messages</a>
                <a href={'s#'} className={style.menu__item}>News</a>
                <a href={'s#'} className={style.menu__item}>Music</a>
                <a href={'s#'} className={style.menu__item}>Settings</a>
            </nav>
        </div>
    );
}
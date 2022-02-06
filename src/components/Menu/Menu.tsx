import React from 'react';
import style from './Menu.module.css'
import {NavLink} from 'react-router-dom';

export const Menu = () => {
    return (
        <div>
            <nav className={style.menu}>
                <NavLink to={'/profile'} className={({ isActive }) => (isActive ? style.active : 'inactive')}>Profile</NavLink>
                <NavLink to={'/dialogs'} className={style.menu__link}>Messages</NavLink>
                <NavLink to={'/news'} className={style.menu__link}>News</NavLink>
                <NavLink to={'/music'} className={style.menu__link}>Music</NavLink>
                <NavLink to={'/settings'} className={style.menu__link}>Settings</NavLink>
            </nav>
        </div>
    );
}
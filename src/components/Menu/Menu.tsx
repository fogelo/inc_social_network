import React from 'react';
import style from './Menu.module.css'
import {NavLink} from 'react-router-dom';

export const Menu = () => {
    return (
        <div>
            <nav className={style.menu}>
                <NavLink to={'/profile'} className={({ isActive }) => (isActive ? style.active : 'active')}>Profile</NavLink>
                <NavLink to={'/dialogs'} className={({ isActive }) => (isActive ? style.active : 'active')}>Messages</NavLink>
                <NavLink to={'/users'} className={({ isActive }) => (isActive ? style.active : 'active')}>Users</NavLink>
                <NavLink to={'/news'} className={({ isActive }) => (isActive ? style.active : 'active')}>News</NavLink>
                <NavLink to={'/music'} className={({ isActive }) => (isActive ? style.active : 'active')}>Music</NavLink>
                <NavLink to={'/settings'} className={({ isActive }) => (isActive ? style.active : 'active')}>Settings</NavLink>

            </nav>
        </div>
    );
}
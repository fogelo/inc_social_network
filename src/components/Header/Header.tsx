import React from 'react';
import style from './Header.module.css';
import logo from '../../img/logo.svg'

export const Header = () => {
    return (
        <div>
            <header className={style.header}>
                <img src={logo} alt="logo"/>
            </header>
        </div>
    );
}
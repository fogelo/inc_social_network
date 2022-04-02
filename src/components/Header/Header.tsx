import React from 'react';
import style from './Header.module.css';
import logo from '../../img/logo.svg'
import {NavLink} from 'react-router-dom';

export const Header = (props: any) => {
    return (
        <div>
            <header className={style.header}>
                <img src={logo} alt="logo"/>
                {props.login ? props.login : <div><NavLink to={'login'}>Login</NavLink></div>}
            </header>
        </div>
    );
}
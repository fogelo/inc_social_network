import React, {useEffect} from 'react';
import style from './Header.module.css';
import logo from '../../img/logo.svg'
import {NavLink, useNavigate} from 'react-router-dom';


export const Header = (props: any) => {

    const navigate = useNavigate()
    useEffect(() => {
        if (props.login) navigate('/profile')
    }, [props.login])
    return (
        <div>
            <header className={style.header}>
                <img src={logo} alt="logo"/>
                {props.login
                    ? <div>
                        <button onClick={props.logout}>logout</button>
                        -{props.login}
                    </div>
                    : <div><NavLink to={'login'}>Login</NavLink></div>}
            </header>
        </div>
    );
}
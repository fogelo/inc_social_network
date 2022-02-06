import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.users}>
                <NavLink className={style.link} to={'/dialogs/1'}>user1</NavLink>
                <NavLink className={style.link} to={'/dialogs/2'}>user2</NavLink>
                <NavLink className={style.link} to={'/dialogs/3'}>user3</NavLink>
                <NavLink className={style.link} to={'/dialogs/4'}>user4</NavLink>
                <NavLink className={style.link} to={'/dialogs/5'}>user5</NavLink>
            </div>
            <div className={style.messages}>
                <div>how are you?</div>
                <div>i am fine</div>
                <div>and you?</div>
            </div>
        </div>
    );
};

export default Dialogs;
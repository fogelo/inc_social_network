import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'user1'},
        {id: 2, name: 'user2'},
        {id: 3, name: 'user3'},
        {id: 4, name: 'user4'},
        {id: 5, name: 'user5'},
    ]

    let messagesData = [
        {id: 1, message: 'how are you?'},
        {id: 2, message: 'i am fine'},
        {id: 3, message: 'and you?'},
    ]
    return (
        <div className={style.dialogs}>
            <div className={style.users}>
                {dialogsData.map(u => <NavLink key={u.id} className={style.link} to={'/dialogs/' + u.id}>{u.name}</NavLink>)}
            </div>
            <div className={style.messages}>
                {messagesData.map(m=><div key={m.id} >{m.message}</div>)}
            </div>
        </div>
    );
};

export default Dialogs;
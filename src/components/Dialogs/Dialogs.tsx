import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogsPageType} from '../../App';

type DialogsPropsType = {
    state: DialogsPageType
}

const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={style.dialogs}>
            <div className={style.users}>
                {props.state.dialogs.map(u => <NavLink key={u.id} className={style.link}
                                                 to={'/dialogs/' + u.id}>{u.name}</NavLink>)}
            </div>
            <div className={style.messages}>
                {props.state.messages.map(m => <div key={m.id}>{m.message}</div>)}
            </div>
        </div>
    );
};

export default Dialogs;
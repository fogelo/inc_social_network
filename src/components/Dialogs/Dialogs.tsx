import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogType, MessageType} from '../../App';

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={style.dialogs}>
            <div className={style.users}>
                {props.dialogs.map(u => <NavLink key={u.id} className={style.link}
                                               to={'/dialogs/' + u.id}>{u.name}</NavLink>)}
            </div>
            <div className={style.messages}>
                {props.messages.map(m => <div key={m.id}>{m.message}</div>)}
            </div>
        </div>
    );
};

export default Dialogs;
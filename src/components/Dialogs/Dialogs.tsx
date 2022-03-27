import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogsPageType} from '../../App';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogs-reducer';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: any
}


const Dialogs = (props: DialogsPropsType) => {
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }
    const addMessage = () => {
        props.dispatch(addMessageAC())
    }

    return (
        <div className={style.dialogs}>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 10px 0 10px'}}>
                <div>
                    {props.dialogsPage.dialogs.map(u => <NavLink key={u.id} className={style.link}
                                                                 to={'/dialogs/' + u.id}>{u.name}</NavLink>)}
                </div>
                <div>
                    {props.dialogsPage.messages.map(m => <div key={m.id}>{m.message}</div>)}
                </div>
            </div>

            <div style={{display: 'flex', padding: '0 10px 0 10px'}}>
                <textarea value={props.dialogsPage.newMessageText}
                          onChange={onMessageChange}/>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>
    );
};

export default Dialogs;
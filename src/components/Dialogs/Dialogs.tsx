import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {Navigate, NavLink} from 'react-router-dom';
import {DialogsPageType} from '../../App';


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: any
}


const Dialogs = (props: any) => {
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }
    const addMessage = () => {
        props.addMessage()
    }

    if (!props.login) return <Navigate to={'/login'}/>

    return (
        <div className={style.dialogs}>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 10px 0 10px'}}>
                <div>
                    {props.dialogs.map((u: any) => <NavLink key={u.id} className={style.link}
                                                            to={'/dialogs/' + u.id}>{u.name}</NavLink>)}
                </div>
                <div>
                    {props.messages.map((m: any) => <div key={m.id}>{m.message}</div>)}
                </div>
            </div>

            <div style={{display: 'flex', padding: '0 10px 0 10px'}}>
                <textarea value={props.newMessageText}
                          onChange={onMessageChange}/>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>
    );


};

export default Dialogs;
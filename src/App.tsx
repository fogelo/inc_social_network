import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Menu} from './components/Menu/Menu';
import {Profile} from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

export type PostType = {
    id: number
    post: string
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

type AppPropsType = {
    posts: Array<PostType>
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <div className={'app'}><Header/>
                    <div className={'main-wrapper'}>
                        <Menu/>
                        <Routes><Route path="profile" element={<Profile posts={props.posts}/>}/>
                            {/*<Route path="/dialogs" element={<Dialogs/>}/>*/}
                            <Route path="dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Menu} from './components/Menu/Menu';
import {Profile} from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

let posts = [
    {id: 1, post: 'Я попал в инкубатор'},
    {id: 2, post: 'Я выучил CSS'},
    {id: 3, post: 'Я выучил JS'},
    {id: 4, post: 'Я выучил React'},
]

function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <div className={'main-wrapper'}>
                    <Menu/>
                    <Routes>
                        <Route path="/profile" element={<Profile posts={posts}/>}/>
                        <Route path="/dialogs" element={<Dialogs />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

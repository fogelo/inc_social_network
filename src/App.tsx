import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Menu} from './components/Menu/Menu';
import {Profile} from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

let postData = [
    {id: 1, post: 'Я попал в инкубатор', likesCount: 12},
    {id: 2, post: 'Я выучил CSS', likesCount: 1},
    {id: 3, post: 'Я выучил JS', likesCount: 122},
    {id: 4, post: 'Я выучил React', likesCount: 312},
]

function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <div className={'app'}><Header/>
                    <div className={'main-wrapper'}>
                        <Menu/>
                        <Routes><Route path="profile" element={<Profile posts={postData}/>}/>
                            {/*<Route path="/dialogs" element={<Dialogs/>}/>*/}
                            <Route path="dialogs/*" element={<Dialogs/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

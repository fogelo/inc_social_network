import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Menu} from './components/Menu/Menu';
import {Profile} from './components/Profile/Profile';

function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <div className={'main-wrapper'}>
                <Menu/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;

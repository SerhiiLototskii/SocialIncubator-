import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import s from './App.module.css';
import {Route} from 'react-router-dom';
import store from "./components/redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";




function App() {
    return (
        <div className={s.app_wrapper}>
            <Header/>
            <Navbar/>
            <div className={s.app_wrapper_content}>
                <Route path='/profile'
                       render={() => <ProfileContainer profilePage={store.profilePage}
                                              dispatch={store.dispatch}
                                              />}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
            </div>
        </div>
    );
}

export default App;

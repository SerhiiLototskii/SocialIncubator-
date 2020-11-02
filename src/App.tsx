import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import s from './App.module.css';
import {Route} from 'react-router-dom';
import store, {stateType} from "./components/redux/state";

export type AppType = {
    state: stateType
    dispatch: any
}



function App(props: AppType) {
    return (
        <div className={s.app_wrapper}>
            <Header/>
            <Navbar/>
            <div className={s.app_wrapper_content}>
                <Route path='/profile'
                       render={() => <Profile profilePage={props.state.profilePage}
                                              dispatch={store.dispatch}
                                              />}/>
                <Route path='/dialogs'
                       render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                              dispatch={store.dispatch}/>}/>
            </div>
        </div>
    );
}

export default App;

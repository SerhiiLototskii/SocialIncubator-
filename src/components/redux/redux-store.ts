import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogReducer from "./dialogs-reduser";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogReducer
})

let store = createStore()


export default  store


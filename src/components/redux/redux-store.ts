import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogReducer from "./dialogs-reduser";
import usersReducer from "./users-reduser";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogReducer,
    usersPage:usersReducer
})

let store = createStore(reducers)


export default  store


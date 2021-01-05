import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogReducer from "./dialogs-reduser";
import usersReducer from "./users-reduser";


let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogReducer,
    usersPage:usersReducer
})

let store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

export default  store


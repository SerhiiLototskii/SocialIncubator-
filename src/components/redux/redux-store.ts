import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogReducer from "./dialogs-reduser";
import usersReducer from "./users-reduser";
import thunkMiddleware from "redux-thunk";
import {authReducer} from "./auth-reducer";


let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogReducer,
    usersPage:usersReducer,
    auth:authReducer
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>

export default  store


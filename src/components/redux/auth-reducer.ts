import {restAPI} from "../Rest-API/restAPI";
import {Dispatch} from "react";

const initialState = {
    userId: null,
    email: null,
    login:null,
    isAuth: false
}
export type authInitialStateType = {
    userId: null | number,
    email: null | string,
    login:null| string
    isAuth: boolean
}

export const authReducer = (state: authInitialStateType = initialState, action: ActionsType): authInitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state,
                ...action,
                userId: action.id,
                email: action.email,
                login: action.login,
                isAuth:true
            }
        default:
            return state
    }
}
// actions
export const setAuthUserDataAC = (id: number, email: string, login:string) =>
    ({type: 'login/SET-IS-LOGGED-IN', id, email, login,} as const)

export const authMeTC = () => {
    return (dispatch: ThunkDispatch) => {

        restAPI.authMe()
            .then(data => {
                if (data.resultCode == 0) {
                    let {id, email, login,} = data.data
                    dispatch(setAuthUserDataAC(id, email, login,))
                }
            })
    }
}

type ThunkDispatch = Dispatch<ActionsType>

type ActionsType = ReturnType<typeof setAuthUserDataAC>

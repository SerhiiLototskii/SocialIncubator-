import {Dispatch} from "react";
import {restAPI} from "../Rest-API/restAPI";

let initialState: initialUsersStateType = {
    users: [
        {
            name: "dimon",
            id: 3,
            photos: {
                small: "",
                large: ""
            },
            status: "",
            isFollow: false
        }
    ],
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 100,
    isFetching: false,
    toggleFollowingInProgress: [1, 2]

}

export type userType = {
    name: string,
    id: number,
    uniqueUrlName?: string,
    photos: {
        small: null | string,
        large: null | string
    },
    status: null | string,
    isFollow: boolean

}

export  type initialUsersStateType = {
    users: Array<userType>,
    pageSize: number
    currentPage: number,
    totalUsersCount: number
    isFetching: boolean
    toggleFollowingInProgress: Array<number>

}
const usersReducer = (state: initialUsersStateType = initialState, action: UsersActionsType): initialUsersStateType => {
    switch (action.type) {
        case "SET_USERS": {
            return {...state, users: action.users,}
        }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFollow: false}
                    }
                    return u
                })
            }
        case "ADD-FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFollow: true}
                    }
                    return u
                })
            }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET_TOTAL_USERS_COUNT": {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "FOLLOWING_IN_PROGRES": {
            return {
                ...state, toggleFollowingInProgress: action.following ?
                    [...state.toggleFollowingInProgress, action.userId]
                    : state.toggleFollowingInProgress.filter(id => id != action.userId)
            }
        }
        default :
            return state
    }
}

export const followAC = (userId: number) => ({type: "ADD-FOLLOW", userId} as const)
export const unFollowAC = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsersAC = (users: Array<userType>) => ({type: "SET_USERS", users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching} as const)
export const followingInProgressAC = (following: boolean, userId: number) => ({
    type: "FOLLOWING_IN_PROGRES",
    following,
    userId
} as const)

export const setTotalUsersCountAC = (totalUsersCount: number) => ({
    type: "SET_TOTAL_USERS_COUNT",
    totalUsersCount
} as const)

//thunks
export const getUsersTC = (currentPage: number, pageSize: number) => {
    return (dispatch: ThunkDispatch) => {
        dispatch(toggleIsFetchingAC(true))
        restAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetchingAC(false))
                dispatch(setUsersAC(data.items))
                dispatch(setTotalUsersCountAC(data.totalCount))
            })
    }
}
export const onPageChangedTC = (currentPage: number, pageSize: number) => {
    return (dispatch: ThunkDispatch) => {
        dispatch(toggleIsFetchingAC(true))
        restAPI.onPageChanged(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetchingAC(false))
                dispatch(setUsersAC(data.items))
                dispatch(setCurrentPageAC(currentPage))
            })
    }
}
export const unfollowTC = ( userId: number) => {
    return (dispatch: ThunkDispatch) => {
        dispatch(followingInProgressAC(true, userId))
        restAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unFollowAC(userId))
                    dispatch(followingInProgressAC(false, userId))
                }
            })
    }
}
export const followTC = ( userId: number) => {
    return (dispatch: ThunkDispatch) => {
        dispatch(followingInProgressAC(true, userId))
        restAPI.follow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(followAC(userId))
                    dispatch(followingInProgressAC(false, userId))
                }
            })
    }
}

export type followActionType = ReturnType<typeof followAC>
export type unFollowActionType = ReturnType<typeof unFollowAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>
export type toggleIsFetchingActionType = ReturnType<typeof toggleIsFetchingAC>
export type followingInProgressActionType = ReturnType<typeof followingInProgressAC>

export type UsersActionsType =
    | followActionType
    | unFollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType
    | toggleIsFetchingActionType
    | followingInProgressActionType


type ThunkDispatch = Dispatch<UsersActionsType>

export default usersReducer;
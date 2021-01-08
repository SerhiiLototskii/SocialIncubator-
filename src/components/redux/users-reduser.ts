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
            location: {
                city: "",
                country: ""
            },
            isFollow: false
        }
    ],
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 100,
    isFetching: false

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
    location: {
        city: string
        country: string
    }
    isFollow: boolean

}

export  type initialUsersStateType = {
    users: Array<userType>,
    pageSize: number
    currentPage: number,
    totalUsersCount: number
    isFetching: boolean

}
const usersReducer = (state: initialUsersStateType = initialState, action: UsersActionsType): initialUsersStateType => {
    switch (action.type) {
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
        case "SET_USERS": {
            return {...state, users: action.users}
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
        default :
            return state
    }
}

export const followAC = (userId: number) => ({type: "ADD-FOLLOW", userId} as const)
export const unFollowAC = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsersAC = (users: Array<userType>) => ({type: "SET_USERS", users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching} as const)

export const setTotalUsersCountAC = (totalUsersCount: number) => ({
    type: "SET_TOTAL_USERS_COUNT",
    totalUsersCount
} as const)

export type followActionType = ReturnType<typeof followAC>
export type unFollowActionType = ReturnType<typeof unFollowAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>
export type toggleIsFetchingActionType = ReturnType<typeof toggleIsFetchingAC>

export type UsersActionsType =
    | followActionType
    | unFollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType
    | toggleIsFetchingActionType

export default usersReducer;
export const FOLLOW = "ADD-FOLLOW"

export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET_USERS"


let initialState = {
    users: [
        {id: 1,photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUg0cFnYeMrjdJjXv7sBPvObKwhzU7LIv2DA&usqp=CAU",
            followed: true, fullName: "Sergey", status: "im a boss", location: {city: 'Kiev', coutry: "Ukraine"}},
        {id: 2,photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUg0cFnYeMrjdJjXv7sBPvObKwhzU7LIv2DA&usqp=CAU",
            followed: false, fullName: "Sania", status: "im a boss too", location: {city: 'Toronto', coutry: "Dubai"}},
        {id: 3,photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUg0cFnYeMrjdJjXv7sBPvObKwhzU7LIv2DA&usqp=CAU",
            followed: true, fullName: "Nikitos", status: "im a boss too", location: {city: 'Mirovoe', coutry: "Ukraine"}},

    ]
}

export type locationType = {
    city: string
    country : string
}

export type usersStateType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName:string
    status: string
    location : locationType
    photos: () => void
}

const usersReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })

            }
        case SET_USERS:{
            return {...state, users:[...state.users, ...action.users]}
        }
        default :
            return state

    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId})

export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: usersStateType) => ({type: SET_USERS, users})

export default usersReducer
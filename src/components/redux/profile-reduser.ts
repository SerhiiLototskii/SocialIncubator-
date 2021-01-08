let initialState: initialStateType = {
    profile : {
        aboutMe: "я круто чувак 1001%",
        contacts: {
            facebook: "facebook.com",
            website: null,
            vk: "vk.com/dimych",
            twitter: "https://twitter.com/@sdf",
            instagram: "instagra.com/sds",
            youtube: null,
            github: "github.com",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: "samurai dimych",
        userId: 2,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    },
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 25},
        {id: 2, message: 'Im fine!', likesCount: 10}
    ],
    newPostText: 'It kamasutra'
}

type initialStateType = {
    profile: userProfileType
    posts: Array<{
        id: number
        message: string
        likesCount: number
    }>
    newPostText: string
}

export type userProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string|null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string|null,
        github: string,
        mainLink: string|null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

const profileReducer = (state:initialStateType = initialState, action: ProfileActionsType) :initialStateType=> {

    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: 3, message: state.newPostText, likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case "SET-USER-PROFILE": {
            return {
                ...state, profile: action.profile
            }
        }
        default :
            return state

    }
}

export const AddPostAC = () => ({type: "ADD-POST"} as const)
export const OnPostChangeAC = (text: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: text} as const)
export const setUserProfileAC = (profile: userProfileType) => ({type: "SET-USER-PROFILE", profile} as const)

export type AddPostActionType = ReturnType<typeof AddPostAC>
export type OnPostChangeActionType = ReturnType<typeof OnPostChangeAC>
export type setUserProfileACActionType = ReturnType<typeof setUserProfileAC>

export type ProfileActionsType =
    | setUserProfileACActionType
    | AddPostActionType
    | OnPostChangeActionType

export default profileReducer

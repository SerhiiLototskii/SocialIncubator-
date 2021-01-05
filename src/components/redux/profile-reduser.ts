
let initialState: initialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 25},
        {id: 2, message: 'Im fine!', likesCount: 10}
    ],
    newPostText: 'It kamasutra'
}

type initialStateType = {
    posts: Array<{
        id: number
        message: string
        likesCount: number
    }>
    newPostText: string
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
        default :
            return state

    }
}

export const AddPostAC = () => ({type: "ADD-POST"} as const)

export const OnPostChangeAC = (text: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: text} as const)

export type AddPostActionType = ReturnType<typeof AddPostAC>
export type OnPostChangeActionType = ReturnType<typeof OnPostChangeAC>

export type ProfileActionsType =
    | AddPostActionType
    | OnPostChangeActionType

export default profileReducer

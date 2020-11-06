export const ADD_POST = "ADD-POST"

export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

/*
type AddPostActionType = {
    type : typeof ADD_POST
    newText:string
}
type ChangeNewPostTextActionType = {
    type : typeof UPDATE_NEW_POST_TEXT
    newText:string
}

type ProfileReducerType = {
    type: typeof AddPostActionType| ChangeNewPostTextActionType

}*/

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 25},
        {id: 2, message: 'Im fine!', likesCount: 10}
    ],
    newPostText: 'It kamasutra'
}


const profileReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = {...state.posts}

            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default :
            return state

    }
}

export const AddPostActionCreator = () => ({type: ADD_POST})

export const OnPostChangeActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer
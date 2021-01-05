let initialState: initialStateType = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sweta'},
        {id: 4, name: 'Sahsa'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Im fine'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'yo'},
        {id: 6, message: 'yop'},
    ],
    newMessageText: 'It kamasutra'
}

type initialStateType = {
    dialogs: Array<{
        id: number
        name: string
    }>
    messages: Array<{
        id: number
        message: string
    }>
    newMessageText: string
}

const dialogReducer = (state: initialStateType = initialState, action: DIalogsReduserActionsType): initialStateType => {

    switch (action.type) {
        case "SEND-MESSAGE": {

            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 3, message: state.newMessageText}]
            }

        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            return {
                ...state,
                newMessageText: action.messageText
            }
        }
        default :
            return state
    }
}

export const SentMessageAC = () => ({type: "SEND-MESSAGE"} as const)
export const OnMessageChangeAC = (text: string) => ({type: "UPDATE-NEW-MESSAGE-TEXT", messageText: text} as const)

export type SentMessageActionType = ReturnType<typeof SentMessageAC>
export type OnMessageChangeActionType = ReturnType<typeof OnMessageChangeAC>

export type DIalogsReduserActionsType =
    | SentMessageActionType
    | OnMessageChangeActionType


export default dialogReducer
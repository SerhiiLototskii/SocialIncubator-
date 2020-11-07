export const SEND_MESSAGE = "SEND-MESSAGE"

export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialState = {
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

const dialogReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case SEND_MESSAGE: {

            return {
                ...state,
                newMessageText : '',
                messages: [...state.messages, {id: 3, message: state.newMessageText} ]
            }

        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return  {
                ...state,
                newMessageText : action.messageText
            }
        }
        default :
            return state
    }
}

export const SentMessageCreator = () => ({type: SEND_MESSAGE})
export const OnMessageChangeCreator = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: text})


export default dialogReducer
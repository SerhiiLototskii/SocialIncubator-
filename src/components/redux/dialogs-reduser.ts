export const SEND_MESSAGE = "SEND-MESSAGE"

export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"


const dialogReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 3,
                message: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = ''

            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.messageText
            return state

        default :
            return state
    }
}

export const SentMessageActionCreator = () => ({type: SEND_MESSAGE})
export const OnMessageChangeActionCreator = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: text})


export default dialogReducer
import React from 'react';
import {OnMessageChangeCreator, SentMessageCreator} from "../redux/dialogs-reduser";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

let mapSateToProps = (state:any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
         sendMessage: () => {
            dispatch(SentMessageCreator())
        },
        updateNewMessageText: (text: string) => {
            dispatch(OnMessageChangeCreator(text))
        },

    }
}

const DialogsContainer = connect (mapSateToProps,mapDispatchToProps) (Dialogs)

export default DialogsContainer;
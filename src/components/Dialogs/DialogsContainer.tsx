import React, {Dispatch} from 'react';
import {DIalogsReduserActionsType, OnMessageChangeAC, SentMessageAC} from "../redux/dialogs-reduser";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AppRootStateType} from "../redux/redux-store";

let mapSateToProps = (state:AppRootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch:Dispatch<DIalogsReduserActionsType>) => {
    return {
         sendMessage: () => {
            dispatch(SentMessageAC())
        },
        updateNewMessageText: (text: string) => {
            dispatch(OnMessageChangeAC(text))
        },

    }
}

const DialogsContainer = connect (mapSateToProps,mapDispatchToProps) (Dialogs)

export default DialogsContainer;
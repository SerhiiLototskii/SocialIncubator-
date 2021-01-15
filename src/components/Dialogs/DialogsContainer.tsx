import React, {Dispatch} from 'react';
import dialogReducer, {DIalogsReduserActionsType, OnMessageChangeAC, SentMessageAC} from "../redux/dialogs-reduser";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AppRootStateType} from "../redux/redux-store";


export type DialogsContainerPropsType = {
    dialogsPage: ReturnType<typeof dialogReducer>
    isAuth: boolean
}

let mapSateToProps = (state:AppRootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth

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
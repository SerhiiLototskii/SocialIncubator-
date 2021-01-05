import React, {Dispatch} from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {connect} from "react-redux";
import {AddPostAC, OnPostChangeAC, ProfileActionsType} from "../redux/profile-reduser";
import {AppRootStateType} from "../redux/redux-store";


let mapSateToProps = (state:AppRootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ProfileActionsType>) => {
    return {
        addPost: () => {
            dispatch(AddPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(OnPostChangeAC(text))
        },

    }
}

const MyPostContainer = connect (mapSateToProps,mapDispatchToProps) (MyPosts)


export default MyPostContainer;
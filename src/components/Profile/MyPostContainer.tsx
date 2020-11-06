import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {connect} from "react-redux";
import {AddPostActionCreator, OnPostChangeActionCreator} from "../redux/profile-reduser";


let mapSateToProps = (state:any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        addPost: () => {
            dispatch(AddPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(OnPostChangeActionCreator(text))
        },

    }
}

const MyPostContainer = connect (mapSateToProps,mapDispatchToProps) (MyPosts)


export default MyPostContainer;
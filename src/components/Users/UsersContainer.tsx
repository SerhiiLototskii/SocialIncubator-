import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC, usersStateType} from "../redux/users-reduser";


let mapSateToProps = (state: any) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users:usersStateType) => {
            dispatch (setUsersAC(users))
        }

     }
}

const UsersContainer = connect(mapSateToProps, mapDispatchToProps)(Users)

    
export default UsersContainer;
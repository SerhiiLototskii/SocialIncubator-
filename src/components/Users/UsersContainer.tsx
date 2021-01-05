import React, {Dispatch} from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersActionsType,
    userType,


} from "../redux/users-reduser";
import {AppRootStateType} from "../redux/redux-store";


let mapSateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch<UsersActionsType>) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users:Array<userType>) => {
            dispatch (setUsersAC(users))
        },
        setCurrentPage: (currentPage:number) => {
            dispatch (setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount:number) => {
            dispatch (setTotalUsersCountAC(totalUsersCount))
        }

     }
}

const UsersContainer = connect(mapSateToProps, mapDispatchToProps)(Users)

    
export default UsersContainer;
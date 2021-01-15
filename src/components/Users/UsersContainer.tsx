import React, {Dispatch} from 'react';

import {
    setCurrentPageAC,
    toggleIsFetchingAC,
    setTotalUsersCountAC,
    userType,
    followingInProgressAC,
    getUsersTC,
    onPageChangedTC,
    unfollowTC,
    followTC,

} from "../redux/users-reduser";
import {AppRootStateType} from "../redux/redux-store";
import Users from "./Users";
import {connect} from "react-redux";
import {Preloader} from "../common/preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";



export type UsersContainerPropsType = {
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
    currentPage: number
    totalUsersCount: number
    pageSize: number
    users: Array<userType>
    getUsersTC: (currentPage: number,pageSize: number) => void
    onPageChangedTC: (currentPage: number,pageSize: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress:Array<number>
    unfollowTC:( userId: number) => void
    followTC:( userId: number) => void
    isAuth: boolean
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage,this.props.pageSize)
    }
    onPageChanged(currentPage: number) {
        this.props.onPageChangedTC(currentPage,this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users setTotalUsersCount={this.props.setTotalUsersCount}
                   setCurrentPage={this.props.setCurrentPage}
                   currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                   toggleIsFetching={this.props.toggleIsFetching}
                   onPageChanged={this.onPageChanged.bind(this)}
                   unfollowTC= {this.props.unfollowTC}
                   followTC= {this.props.followTC}
                   isAuth= {this.props.isAuth}
            />
        </>

    }
}


let mapSateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        toggleFollowingInProgress:state.usersPage.toggleFollowingInProgress,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    withAuthRedirect,
    connect(mapSateToProps, {
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetching: toggleIsFetchingAC,
    followingInProgress: followingInProgressAC,
    getUsersTC: getUsersTC,
    onPageChangedTC: onPageChangedTC,
    unfollowTC: unfollowTC,
    followTC: followTC}),

    (UsersContainer))






/*let mapDispatchToProps = (dispatch: Dispatch<UsersActionsType>) => {
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
        },
        toggleIsFetching : (isFetching: boolean) => {
          dispatch((toggleIsFetchingAC(isFetching)))
        }
     }
}*/


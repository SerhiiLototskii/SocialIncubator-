import React, {Dispatch} from 'react';


import {

    setCurrentPageAC,
    toggleIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    userType, followAC,
} from "../redux/users-reduser";
import {AppRootStateType} from "../redux/redux-store";
import axios from "axios";
import Users from "./Users";
import {connect} from "react-redux";
import {Preloader} from "../common/preloader/Preloader";


export type UsersContainerPropsType = {
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
    currentPage: number
    totalUsersCount: number
    pageSize: number
    users: Array<userType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<userType>) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}


class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged(currentPage: number) {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setCurrentPage(currentPage)
            })
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
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   setUsers={this.props.setUsers}
                   onPageChanged={this.onPageChanged.bind(this)}/>

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

    }
}

export default connect(mapSateToProps, {
    follow: followAC,
    unfollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetching : toggleIsFetchingAC
})(UsersContainer)



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


import React from "react";
import {userType} from "../redux/users-reduser";
import userPhoto from "../../assets/images/user.png";
import styles from './Users.module.css';

import axios from 'axios'

export type UsersPropsType = {
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
    currentPage: number
    totalUsersCount: number
    pageSize: number
    users: Array<userType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<userType>) => void
}


class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)


            })
    }

    onPageChanged(currentPage: number) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setCurrentPage(currentPage)

            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        debugger
                        return <span className={this.props.currentPage === p ?  styles.selectedPage: ""}

                                     onClick={(e) => {
                                         this.onPageChanged(p)

                                     }}>{p}</span>
                    })}

                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                            <div><img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/></div>
                            <div>
                                {u.isFollow
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
                                    }}>Follow</button>}
                            </div>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{"{u.location.country}"}</div>
                                <div>{"{u.location.city}"}</div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }

}

export default Users
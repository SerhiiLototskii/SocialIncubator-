import React from "react";
import {userType} from "../redux/users-reduser";
import userPhoto from "../../assets/images/user.png";
import styles from './Users.module.css';
import {NavLink, Redirect} from "react-router-dom";



export type UsersPropsType = {
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
    currentPage: number
    totalUsersCount: number
    pageSize: number
    users: Array<userType>
    onPageChanged: (currentPage: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress:Array<number>
    unfollowTC:( userId: number) => void
    followTC:( userId: number) => void
    isAuth: boolean
}


const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    if(props.isAuth === false) return <Redirect to={"/login"} />
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ""}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                        <div>
                            <NavLink to={'/profile'}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {u.isFollow
                                ? <button disabled={props.toggleFollowingInProgress.some(id => id ===u.id)} onClick={() => {
                                  props.unfollowTC( u.id)
                                }}>Unfollow</button>
                                : <button disabled={props.toggleFollowingInProgress.some(id => id ===u.id)} onClick={() => {
                                    props.followTC(u.id)
                                }}>Follow</button>}
                        </div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users
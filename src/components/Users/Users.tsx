import React from "react";
import {usersStateType} from "../redux/users-reduser";
import userPhoto from "../../assets/images/user.png";
import * as axios from 'axios'

export type UsersType = {
    users: Array<usersStateType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users:usersStateType) => void
}

class Users  extends React.Component<UsersType> {

    componentDidMount(): void {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render (){
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                            <div><img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/></div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
                                    }}>Follow</button>}
                            </div>
                            <div>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }

    }

export default Users
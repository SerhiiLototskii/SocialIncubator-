import React from "react";
import {usersStateType} from "../redux/users-reduser";

export type UsersType = {
    users: Array<usersStateType>
    follow: (id: number) => void
    unfollow: (id: number) => void
}

let Users = (props: UsersType) => {
/*

    if(props.users.length === 0) {
        props.setUsers ( [
            {id: 1,photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUg0cFnYeMrjdJjXv7sBPvObKwhzU7LIv2DA&usqp=CAU",
                followed: true, fullName: "Sergey", status: "im a boss", location: {city: 'Kiev', country: "Ukraine"}},
            {id: 2,photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUg0cFnYeMrjdJjXv7sBPvObKwhzU7LIv2DA&usqp=CAU",
                followed: false, fullName: "Sania", status: "im a boss too", location: {city: 'Toronto', country: "Dubai"}},
            {id: 3,photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUg0cFnYeMrjdJjXv7sBPvObKwhzU7LIv2DA&usqp=CAU",
                followed: true, fullName: "Nikitos", status: "im a boss too", location: {city: 'Mirovoe', country: "Ukraine"}},


        ])

    }
*/


    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                        <div><img src={u.photoUrl} alt=""/></div>
                        <div>
                            {u.followed
                                ?  <button onClick={() => {props.unfollow(u.id)} }>Unfollow</button>
                            :<button onClick={() => {props.follow(u.id)} }>Follow</button>}
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

export default Users
import axios from 'axios'
import {userType} from "../redux/users-reduser";
import {userProfileType} from "../redux/profile-reduser";

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '6408b3a3-6577-4f97-aa9e-f7b63990ec1a'
    }
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    ...settings
})

export const restAPI = {
    authMe() {
        return instance.get<ResponseType<authMeResponseType>>(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    onPageChanged(currentPage: number, pageSize: number) {
        return instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(id: number) {
        return instance.post<ResponseType<{}>>(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(id: number) {
        return instance.delete<ResponseType<{}>>(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(id: number) {
        return instance.get<userProfileType>(`profile/${id}`)
            .then(response => {
                return response.data
            })
    }
}

export  type getUsersResponseType = {
    items: Array<userType>
    totalCount: number,
    error: null | string
}
export type authMeResponseType = {
    id: number,
    email: string,
    login:string
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

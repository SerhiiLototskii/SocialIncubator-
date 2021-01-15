import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {getProfileTC, setUserProfileAC, userProfileType} from "../redux/profile-reduser";
import {Redirect, withRouter} from 'react-router-dom';



export type ProfileContainerPropsType = {
    setUserProfile: (profile: userProfileType) => void
    profile: userProfileType
    match: {
        params: {
            userId:number
        }
    }
    getProfileTC: (userId: number) => void
    isAuth: boolean
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId= 2
        }
        getProfileTC(userId)
    }

    render() {
        if(this.props.isAuth === false) return <Redirect to={"/login"} />

        return <Profile
            {...this.props}
            profile={this.props.profile}
           />
    }
}

let mapSateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}
// @ts-ignore
 const ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapSateToProps, {
    setUserProfile: setUserProfileAC,
    getProfileTC:getProfileTC
})(ProfileContainerWithRouter)

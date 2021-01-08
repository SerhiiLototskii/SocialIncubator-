import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import axios from "axios";
import {setUserProfileAC, userProfileType} from "../redux/profile-reduser";

export type ProfileContainerPropsType = {
    setUserProfile: (profile: userProfileType) => void
    profile: userProfileType
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile
            {...this.props}
            profile={this.props.profile}/>
    }
}

let mapSateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapSateToProps, {
    setUserProfile: setUserProfileAC,
})(ProfileContainer)

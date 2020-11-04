import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, { profilePageType, } from "../redux/store";

export type profileType = {
    profilePage: profilePageType
    dispatch: any

}


const ProfileContainer = (props: profileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     dispatch={store.dispatch}
            />/>
        </div>
    )
}

export default ProfileContainer;
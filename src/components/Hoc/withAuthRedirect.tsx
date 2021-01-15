import {Redirect} from "react-router-dom";
import React from "react";
import {AppRootStateType} from "../redux/redux-store";
import {connect} from "react-redux";

let mapStateAuthRedirectComponent = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any) => {

    class RedirectComponent extends React.Component<any> {
        render() {

            if (!this.props.isAuth) return <Redirect to={"/login"}/>

            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateAuthRedirectComponent)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}
import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMeTC, setAuthUserDataAC} from "../redux/auth-reducer";
import {AppRootStateType} from "../redux/redux-store";


export type HeaderContainerPropsType = {
    authMeTC: () => void
    isAuth: boolean
    login: string
    setAuthUserDataAC: (id: number,
                        login: string,
                        email: string) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.authMeTC()
    }

    render() {
        return <Header  {...this.props}
                        login={this.props.login}
                        isAuth={this.props.isAuth}/>
    }
}

let mapSateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapSateToProps, {
    setAuthUserDataAC: setAuthUserDataAC,
    authMeTC:authMeTC
    // @ts-ignore
})(HeaderContainer)

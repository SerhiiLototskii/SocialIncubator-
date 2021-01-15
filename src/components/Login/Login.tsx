import React from 'react';


type LoginType = {

}

const Login = () => {
    return (
        <div>
            <form action="">
                <div><input type={"text"} placeholder={"Email"} /></div>
                <div><input type={"password"} placeholder={"Password"} /></div>
                <div><input type={"checkBox"} placeholder={"Password"} /></div>
                <div><button type={"submit"}>Submit</button></div>
            </form>
        </div>
    )
}

export default Login
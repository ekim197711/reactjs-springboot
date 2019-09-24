import {useSelector, useDispatch} from "react-redux";
import React from 'react'
import {Login, LoginSwitch, Logout} from '../action/LoginActions'

const login = React.memo((props) => {
    const loginstate = useSelector(state => {return state.login})
    const mydispatch = useDispatch()

    const switchLogin = () => {mydispatch(LoginSwitch())}
    const login = () => {mydispatch(Login())}
    const logout = () => {mydispatch(Logout())}



    return (
        <div>
            Are we logged in:
            {loginstate ?
                (<div>YES WE ARE LOGGED IN :)</div>)
                : (<div>NO WE ARE NOT LOGGED IN :(</div>)}
            <div>
                <div>
                <button onClick={switchLogin}>Switch the login state</button>
                </div>
                <button onClick={login}>Log in!!!</button>
                <button onClick={logout}>Logout !!!</button>
            </div>
        </div>
    )
})

export default login
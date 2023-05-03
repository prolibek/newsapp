import React, { useRef, useState } from "react";
import classes from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
    
    const dispatch = useDispatch()
    const loggedIn = useSelector(state => state.loggedIn)

    console.log(loggedIn)

    const userRef = useRef(null)
    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const login = (event) => {
        event.preventDefault()
        if(pwd === "12345" && username === "Admin") {
            dispatch({type: "LOGIN"})
            localStorage.setItem("auth", true)
            navigate("/profile", { replace: true })
        } else {
            setErrMsg("*You've entered wrong username or password.")
        }
    }

    return (
        <div className={classes["wrapper"]}>
            <form onSubmit={login} className={classes["form-wrapper"]}>
                <label htmlFor="username">
                    Username:
                </label>
                <input 
                    type="text" 
                    id="username" 
                    ref={userRef}
                    autoComplete="off"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <label htmlFor="password">
                    Password:
                </label>
                <input 
                    type="password"
                    id="password"
                    value={pwd}
                    onChange={e => setPwd(e.target.value)}
                />
                <button type="submit">Login</button>
                <p>{errMsg}</p>
            </form>
        </div>
    )
}

export default LoginPage;
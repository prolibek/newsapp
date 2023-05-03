import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./Profile.module.css";

const ProfilePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch({type: "LOGOUT"})
        localStorage.removeItem("auth")
        navigate("/", {replace: true})
    }

    return (
        <div className={classes["wrapper"]}>
            <h1>Your profile page.</h1>
            <button type="submit" onClick={logout} className={classes["btn"]}>Logout</button>
        </div>
    )
}

export default ProfilePage;
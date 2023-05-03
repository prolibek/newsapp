import React from "react";
import { useSelector } from "react-redux";
import classes from "./Home.module.css";

const HomePage = () => {
    const loggedIn = useSelector(authState => authState.loggedIn)

    return (
        <div className={classes["wrapper"]}>
            { loggedIn ?
            <h1>Welcome, Admin.</h1>
            :
            <h1>Welcome.</h1>
            }
        </div>
    )
}

export default HomePage;
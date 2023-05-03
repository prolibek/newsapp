import React from "react";
import classes from "./TopNavbar.module.css";
import { Link } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../utils/routes";
import { useSelector } from "react-redux";

const TopNavbar = () => {
    const loggedIn = useSelector(authState => authState.loggedIn)

    return (
        <div className={classes["wrapper"]}>
            <ul className={classes["top-navbar"]}>
                {
                    loggedIn
                    ?
                    privateRoutes.map(route => (
                        <li>
                            <Link to={route.path} className={classes["btn"]}>{route.name}</Link>
                        </li>
                    ))
                    :
                    publicRoutes.map(route => (
                        <li>
                            <Link to={route.path} className={classes["btn"]}>{route.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TopNavbar;
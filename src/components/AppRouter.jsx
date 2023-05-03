import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../utils/routes"
import { useSelector } from "react-redux";
import NotFoundPage from "../pages/NotFound/NotFound";

const AppRouter = () => {
    const loggedIn = useSelector(authState => authState.loggedIn)

    return (
        <Routes>
            {
                loggedIn 
                ?
                privateRoutes.map(route => (
                    <Route path={route.path} element={route.element}/>
                ))
                :
                publicRoutes.map(route => (
                    <Route path={route.path} element={route.element}/>
                ))
            }
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
} 

export default AppRouter;
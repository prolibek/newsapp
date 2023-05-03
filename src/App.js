import { BrowserRouter } from "react-router-dom";
import './App.css';
import TopNavbar from "./components/ui/TopNavbar";
import AppRouter from "./components/AppRouter";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.getItem("auth"))
            dispatch({type: "LOGIN"})
        else dispatch({type: "LOGOUT"})
    })

    return (
        <BrowserRouter>
            <TopNavbar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;

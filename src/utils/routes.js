import HomePage from "../pages/Home/Home";
import NewsPage from "../pages/News/News";
import LoginPage from "../pages/Login/Login";
import ProfilePage from "../pages/Profile/Profile";

export const publicRoutes = [
    { path: '/', element: <HomePage/>, name: "Home" },
    { path: '/news', element: <NewsPage/>, name: "News" },
    { path: '/login', element: <LoginPage/>, name: "Login" },
]

export const privateRoutes = [
    { path: '/', element: <HomePage/>, name: "Home" },
    { path: '/news', element: <NewsPage/>, name: "News" },
    { path: '/profile', element: <ProfilePage/>, name: "Profile" }
]
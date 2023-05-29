import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Singup from "../Pages/Registration/Singup";
import Login from "../Pages/Registration/Login";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <Singup></Singup>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default routes;
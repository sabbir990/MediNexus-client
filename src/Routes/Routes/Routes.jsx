import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import DashboardLayout from "../../Components/Dasboard/DashboardLayout";
import SellerHomepage from "../../Components/Dasboard/Seller Statistics/SellerHomepage";
import Profile from "../../Components/Dasboard/Profile/Profile";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Root />,
        children : [
            {
                path : '/',
                element : <Home />
            },
        ]
    },
    {
        path : '/login',
        element : <Login />
    },
    {
        path : '/register',
        element : <Register />
    },
    {
        path : '/dashboard',
        element : <DashboardLayout />,
        children : [
            {
                path : 'seller-homepage',
                element : <SellerHomepage />
            },
            {
                path : '/dashboard/profile',
                element : <Profile />
            }
        ]
    }
])

export default router;
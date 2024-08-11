import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import DashboardLayout from "../../Components/Dasboard/DashboardLayout";
import SellerHomepage from "../../Pages/Seller Homepage/SellerHomepage";
import Profile from "../../Components/Dasboard/Profile/Profile";
import ManageMedicines from "../../Components/Dasboard/Manage Medicines/ManageMedicines";
import CategoryItems from "../../Pages/Home/Categories/CategoryItems";
import Shop from "../../Pages/Shop Page/Shop";
import CartPage from "../../Pages/Cart/CartPage";
import CheckOut from "../../Pages/Checkout/CheckOut";
import Invoice from "../../Pages/Invoice/Invoice";
import ManageCategory from "../../Pages/Home/Manage Category/ManageCategory";
import ManageUsers from "../../Pages/Manage Users/ManageUsers";
import PaymentManagement from "../../Pages/Payment Management/PaymentManagement";
import SalesReport from "../../Pages/Sales Report/SalesReport";
import PaymentHistory from "../../Pages/Payment History/PaymentHistory";
import AdminHomepage from "../../Pages/Admin Homepage/AdminHomepage";
import UserHomepage from "../../Pages/User Homepage/UserHomepage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/category-items/:category',
                element: <CategoryItems />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/cart',
                element: <CartPage />
            },
        ]
    },
    {
        path: '/checkout/:itemName',
        element: <CheckOut />
    },
    {
        path : '/invoice/:id',
        element : <Invoice />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <SellerHomepage />
            },
            {
                index : true,
                element : <AdminHomepage />
            },
            {
                index : true,
                element : <UserHomepage />
            },
            {
                path : 'admin-homepage',
                element : <AdminHomepage />
            },
            {
                path: 'seller-homepage',
                element: <SellerHomepage />
            },
            {
                path: '/dashboard/profile',
                element: <Profile />
            },
            {
                path: 'manage-medicines',
                element: <ManageMedicines />
            },
            {
                path : 'manage-category',
                element : <ManageCategory />
            },
            {
                path : 'manage-users',
                element : <ManageUsers />
            },
            {
                path : 'payment-management',
                element : <PaymentManagement />
            },
            {
                path : "sales-report",
                element : <SalesReport />
            },
            {
                path : "payment-history",
                element : <PaymentHistory />
            },
            {
                path : 'user-homepage',
                element : <UserHomepage />
            }
        ]
    }
])

export default router;
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
import UpdateProfile from "../../Pages/Update Profile/UpdateProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";

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
                element: <PrivateRoute>
                    <CartPage />
                </PrivateRoute>
            },
        ]
    },
    {
        path: '/checkout/:itemName',
        element: <PrivateRoute>
            <CheckOut />
        </PrivateRoute>
    },
    {
        path: '/invoice/:id',
        element: <PrivateRoute>
            <Invoice />
        </PrivateRoute>
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
        path: '/updateProfile',
        element: <PrivateRoute>
            <UpdateProfile />
        </PrivateRoute>
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout />
        </PrivateRoute>,
        children: [
            {
                index: true,
                element: <PrivateRoute>
                    <SellerHomepage />
                </PrivateRoute>
            },
            {
                index: true,
                element: <PrivateRoute>
                    <AdminRoute>
                        <AdminHomepage />
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                index: true,
                element: <PrivateRoute>
                    <UserHomepage />
                </PrivateRoute>
            },
            {
                path: 'admin-homepage',
                element: <PrivateRoute>
                    <AdminRoute>
                        <AdminHomepage />
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: 'seller-homepage',
                element: <PrivateRoute>
                    <SellerHomepage />
                </PrivateRoute>
            },
            {
                path: '/dashboard/profile',
                element: <PrivateRoute>
                    <Profile />
                </PrivateRoute>
            },
            {
                path: 'manage-medicines',
                element: <PrivateRoute>
                    <ManageMedicines />
                </PrivateRoute>
            },
            {
                path: 'manage-category',
                element: <PrivateRoute>
                    <AdminRoute>
                        <ManageCategory />
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: 'manage-users',
                element: <PrivateRoute>
                    <AdminRoute>
                        <ManageUsers />
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: 'payment-management',
                element: <PrivateRoute>
                    <AdminRoute>
                        <PaymentManagement />
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: "sales-report",
                element: <PrivateRoute>
                    <AdminRoute>
                        <SalesReport />
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: "payment-history",
                element: <PrivateRoute>
                    <PaymentHistory />
                </PrivateRoute>
            },
            {
                path: 'user-homepage',
                element: <PrivateRoute>
                    <UserHomepage />
                </PrivateRoute>
            }
        ]
    }
])

export default router;
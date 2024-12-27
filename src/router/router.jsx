import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import NotFound from "../page/NotFound";
import About from "../page/About";
import Contact from "../page/Contact";
import SignIn from "../page/SignIn";
import ProductDetails from "../components/ProductDetails";
import UserProfile from "../components/users/UserProfile";
import UserOrder from "../components/users/UserOrder";
import ProtectedRoute from "./ProtectedRoute";
import AdminProduct from "../components/admin/AdminProduct";
import AdminProfile from "../components/admin/AdminProfile";
import AdminCategory from "../components/admin/AdminCategory";
import AdminUsers from "../components/admin/AdminUsers";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "product/:id",
                element: <ProductDetails />,
            },
            {
                path: "signIn",
                element: <SignIn />,
            },
            {
                path: "dashboard/user",
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "profile", // Relative path
                        element: <UserProfile />,
                    },
                    {
                        path: "order", // Relative path
                        element: <UserOrder />,
                    },
                ],
            },
            {
                path: "dashboard/admin",
                element: <AdminRoute />,
                children: [
                    {
                        path: "profile", // Relative path
                        element: <AdminProfile />,
                    },
                    {
                        path: "products", // Relative path
                        element: <AdminProduct />,
                    },
                    {
                        path: "category", // Relative path
                        element: <AdminCategory />,
                    },
                    {
                        path: "users", // Relative path
                        element: <AdminUsers />,
                    },
                ],
            },
        ],
    },
]);

export default router;

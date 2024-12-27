import { Outlet } from "react-router-dom";
import SignIn from "../page/SignIn";

const AdminRoute = () => {
    const isSignedIn = true;
    const isAdmin = true

    return isSignedIn && isAdmin ? <Outlet /> : <SignIn />
}

export default AdminRoute
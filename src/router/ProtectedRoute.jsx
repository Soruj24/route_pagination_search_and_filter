import { Outlet } from "react-router-dom";
import SignIn from "../page/SignIn";

const ProtectedRoute = () => {
    const isSignedIn = true;

    return isSignedIn ? <Outlet /> : <SignIn />
}

export default ProtectedRoute
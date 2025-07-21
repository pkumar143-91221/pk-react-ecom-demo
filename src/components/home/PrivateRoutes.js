import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
// import RegisterAccount from "../../pages/register-account";
// import { Dashboard } from "../../pages/Dashboard";


/** Navigating user to appropriate routes as per the user session */
export const PrivateRoutes = () => {
    const auth = useAuth();
    return auth.isAuthenticated ? <Outlet /> : <Navigate to="/register-account" />;
}

export const GuestRoutes = () => {
    const auth = useAuth();
    return !auth.isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
}

/** Loading appropriate component as per the user */
// export const PrivateRoutes = () => {
//     const auth = useAuth();
//     return auth.isAuthenticated ? <Outlet /> : <RegisterAccount />;
// }

// export const GuestRoutes = () => {
//     const auth = useAuth();
//     return !auth.isAuthenticated ? <Outlet /> : <Dashboard />;
// }

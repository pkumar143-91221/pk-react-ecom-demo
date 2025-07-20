import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext"

export const PrivateRoutes = () => {
    const auth = useAuth();
    return auth.isAuthenticated ? <Outlet /> : <Navigate to="/register-account" />;
}

export const GuestRoutes = () => {
    const auth = useAuth();
    return !auth.isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
}
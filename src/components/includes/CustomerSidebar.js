import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

export const CustomerSidebar = () => {
    const auth = useAuth();
    const location = useLocation();
    return (
        <div className="card sidebar-menu">
            <div className="card-header">
                <h3 className="h4 card-title">Customer section</h3>
            </div>
            <div className="card-body">
                <ul className="nav nav-pills flex-column">
                    <Link to="/customer-orders" className={`nav-link ${location.pathname === '/customer-orders' ? 'active' : ""}`}>
                        <i className="fa fa-list" /> My orders
                    </Link>
                    <Link to="/customer-wishlist" className={`nav-link ${location.pathname === '/customer-wishlist' ? 'active' : ""}`}>
                        <i className="fa fa-heart" /> My wishlist
                    </Link>
                    <Link to="/dashboard" className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ""}`}>
                        <i className="fa fa-user" /> My account
                    </Link>
                    <Link onClick={() => auth.logout()} className={`nav-link`}>
                        <i className="fa fa-sign-out" /> Logout
                    </Link>
                </ul>
            </div>
        </div>
    );
}
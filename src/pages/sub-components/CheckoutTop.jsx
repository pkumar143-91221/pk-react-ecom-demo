import { Link, useLocation } from "react-router-dom";

export const CheckoutTop = () => {
    const location = useLocation();

    return (
        <>
            <div className="nav flex-column flex-md-row nav-pills text-center">
                <Link to="/checkout-address"
                    className={`nav-link flex-sm-fill text-sm-center ${location.pathname === '/checkout-address' ? "active" : ""}`}
                >
                    <i className="fa fa-map-marker"> </i>Address
                </Link>
                <Link to="/delivery-method"
                    className={`nav-link flex-sm-fill text-sm-center ${location.pathname === '/delivery-method' ? "active" : ""}`}
                >
                    <i className="fa fa-truck"> </i>Delivery Method
                </Link>
                <Link to="/payment-method"
                    className={`nav-link flex-sm-fill text-sm-center ${location.pathname === '/payment-method' ? "active" : ""}`}
                >
                    <i className="fa fa-money"> </i>Payment Method
                </Link>
                <Link to="/order-review"
                    className={`nav-link flex-sm-fill text-sm-center ${location.pathname === '/order-review' ? "active" : ""}`}
                >
                    <i className="fa fa-eye"> </i>Order Review
                </Link>
            </div>
        </>
    );
}
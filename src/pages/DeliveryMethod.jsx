import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "./sub-components/breadcrumb";
import { CheckoutTop } from "./sub-components/CheckoutTop";

export const DeliveryMethod = () => {
    const navigate = useNavigate();
    const breadcrumb = [
        <Link to="/">Home</Link>,
        "Checkout - Delivery Method"
    ];
    const paymentMethod = (e) => {
        e.preventDefault();
        navigate("/payment-method")
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* breadcrumb*/}
                        <Breadcrumb value={breadcrumb} />
                    </div>
                    <div id="checkout" className="col-lg-9">
                        <div className="box">
                            <h1>Checkout - Delivery method</h1>
                            <CheckoutTop />
                            <form method="get" action="checkout3.html">
                                <div className="content py-3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="box shipping-method">
                                                <h4>USPS Next Day</h4>
                                                <p>Get it right on next day - fastest option possible.</p>
                                                <div className="box-footer text-center">
                                                    <input
                                                        type="radio"
                                                        name="delivery"
                                                        defaultValue="delivery1"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="box shipping-method">
                                                <h4>USPS Next Day</h4>
                                                <p>Get it right on next day - fastest option possible.</p>
                                                <div className="box-footer text-center">
                                                    <input
                                                        type="radio"
                                                        name="delivery"
                                                        defaultValue="delivery2"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="box shipping-method">
                                                <h4>USPS Next Day</h4>
                                                <p>Get it right on next day - fastest option possible.</p>
                                                <div className="box-footer text-center">
                                                    <input
                                                        type="radio"
                                                        name="delivery"
                                                        defaultValue="delivery3"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-footer d-flex justify-content-between">
                                    <Link to="/checkout-address" className="btn btn-outline-secondary">
                                        <i className="fa fa-chevron-left" />
                                        Back to address
                                    </Link>
                                    <button onClick={paymentMethod} type="submit" className="btn btn-primary">
                                        Continue to Payment Method
                                        <i className="fa fa-chevron-right" />
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* /.box*/}
                    </div>
                    {/* /.col-md-9*/}
                    <div className="col-md-3">
                        <div id="order-summary" className="card">
                            <div className="card-header">
                                <h3 className="mt-4 mb-4">Order summary</h3>
                            </div>
                            <div className="card-body">
                                <p className="text-muted">
                                    Shipping and additional costs are calculated based on the values
                                    you have entered.
                                </p>
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Order subtotal</td>
                                                <th>$446.00</th>
                                            </tr>
                                            <tr>
                                                <td>Shipping and handling</td>
                                                <th>$10.00</th>
                                            </tr>
                                            <tr>
                                                <td>Tax</td>
                                                <th>$0.00</th>
                                            </tr>
                                            <tr className="total">
                                                <td>Total</td>
                                                <th>$456.00</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.col-md-3*/}
                </div>
            </div>

        </>
    );
}
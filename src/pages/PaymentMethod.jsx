import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "./sub-components/breadcrumb";
import { CheckoutTop } from "./sub-components/CheckoutTop";

export const PaymentMethod = () => {
    const navigate = useNavigate();
    const breadcrumb = [
        <Link to="/">Home</Link>,
        "Checkout - Payment Method"
    ];
    const orderReview = (e) => {
        e.preventDefault();
        navigate("/order-review")
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
                            <h1>Checkout - Payment method</h1>
                            <CheckoutTop />
                            <form method="get" action="checkout4.html">
                                <div className="content py-3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="box payment-method">
                                                <h4>Paypal</h4>
                                                <p>We like it all.</p>
                                                <div className="box-footer text-center">
                                                    <input
                                                        type="radio"
                                                        name="payment"
                                                        defaultValue="payment1"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="box payment-method">
                                                <h4>Payment gateway</h4>
                                                <p>VISA and Mastercard only.</p>
                                                <div className="box-footer text-center">
                                                    <input
                                                        type="radio"
                                                        name="payment"
                                                        defaultValue="payment2"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="box payment-method">
                                                <h4>Cash on delivery</h4>
                                                <p>You pay when you get it.</p>
                                                <div className="box-footer text-center">
                                                    <input
                                                        type="radio"
                                                        name="payment"
                                                        defaultValue="payment3"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.row*/}
                                </div>
                                {/* /.content*/}
                                <div className="box-footer d-flex justify-content-between">
                                    <Link to="/delivery-method" className="btn btn-outline-secondary">
                                        <i className="fa fa-chevron-left" />
                                        Back to Shipping Method
                                    </Link>
                                    <button onClick={orderReview} type="submit" className="btn btn-primary">
                                        Continue to Order Review
                                        <i className="fa fa-chevron-right" />
                                    </button>
                                </div>
                            </form>
                            {/* /.box*/}
                        </div>
                    </div>
                    {/* /.col-lg-9*/}
                    <div className="col-lg-3">
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
                    {/* /.col-lg-3*/}
                </div>
            </div>

        </>
    );
}
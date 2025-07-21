import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "./sub-components/breadcrumb";
import { CheckoutTop } from "./sub-components/CheckoutTop";

export const CheckoutAddress = () => {
    const navigate = useNavigate();
    const breadcrumb = [
        <Link to="/">Home</Link>,
        "Checkout Address"
    ];
    const deliveryMethod = (e) => {
        e.preventDefault();
        navigate("/delivery-method")
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
                            <h1>Checkout - Address</h1>
                            <CheckoutTop />
                            <form method="get" action="checkout2.html">
                                <div className="content py-3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="firstname">Firstname</label>
                                                <input
                                                    id="firstname"
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="lastname">Lastname</label>
                                                <input id="lastname" type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.row*/}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="company">Company</label>
                                                <input id="company" type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="street">Street</label>
                                                <input id="street" type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.row*/}
                                    <div className="row">
                                        <div className="col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="city">Company</label>
                                                <input id="city" type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="zip">ZIP</label>
                                                <input id="zip" type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="state">State</label>
                                                <select id="state" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label htmlFor="country">Country</label>
                                                <select id="country" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="phone">Telephone</label>
                                                <input id="phone" type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input id="email" type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.row*/}
                                </div>
                                <div className="box-footer d-flex justify-content-between">
                                    <Link to="/basket" className="btn btn-outline-secondary">
                                        <i className="fa fa-chevron-left" />
                                        Back to Basket
                                    </Link>
                                    <button onClick={deliveryMethod} type="submit" className="btn btn-primary">
                                        Continue to Delivery Method
                                        <i className="fa fa-chevron-right" />
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* /.box*/}
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
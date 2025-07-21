import { Link } from "react-router-dom";
import Breadcrumb from "./sub-components/breadcrumb";
import { CheckoutTop } from "./sub-components/CheckoutTop";

export const OrderReview = () => {
    const breadcrumb = [
        <Link to="/">Home</Link>,
        "Checkout - Order Review"
    ];
    const placeOrder = (e) => {
        e.preventDefault();
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
                            <h1>Checkout - Order review</h1>
                            <CheckoutTop />
                            <form method="get" action="checkout4.html">
                                <div className="content">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th colSpan={2}>Product</th>
                                                    <th>Quantity</th>
                                                    <th>Unit price</th>
                                                    <th>Discount</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <a href="#">
                                                            <img
                                                                src="img/detailsquare.jpg"
                                                                alt="White Blouse Armani"
                                                            />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a href="#">White Blouse Armani</a>
                                                    </td>
                                                    <td>2</td>
                                                    <td>$123.00</td>
                                                    <td>$0.00</td>
                                                    <td>$246.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="#">
                                                            <img
                                                                src="img/basketsquare.jpg"
                                                                alt="Black Blouse Armani"
                                                            />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a href="#">Black Blouse Armani</a>
                                                    </td>
                                                    <td>1</td>
                                                    <td>$200.00</td>
                                                    <td>$0.00</td>
                                                    <td>$200.00</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th colSpan={5}>Total</th>
                                                    <th>$446.00</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    {/* /.table-responsive*/}
                                </div>
                                {/* /.content*/}
                                <div className="box-footer d-flex justify-content-between">
                                    <Link to="/payment-method" className="btn btn-outline-secondary">
                                        <i className="fa fa-chevron-left" />
                                        Back to payment method
                                    </Link>
                                    <button onClick={placeOrder} type="submit" className="btn btn-primary">
                                        Place an order
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
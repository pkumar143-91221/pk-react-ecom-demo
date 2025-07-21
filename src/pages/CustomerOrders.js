import { Link } from "react-router-dom";
import Breadcrumb from "./sub-components/breadcrumb";
import { CustomerSidebar } from "./sub-components/CustomerSidebar";

export const CustomerOrders = () => {
    
    const breadcrumb = [
        <Link to="/dashboard">Home</Link>,
        "My Orders"
    ];
    const getRandomNumber = () => {
        return Math.floor(Math.random() * 10000) + 1; // Example: 1-100
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* breadcrumb*/}
                        <Breadcrumb value={breadcrumb} />
                    </div>
                    <div className="col-lg-3">
                        <CustomerSidebar />
                        {/* /.col-lg-3*/}
                        {/* *** CUSTOMER MENU END ****/}
                    </div>
                    <div id="customer-orders" className="col-lg-9">
                        <div className="box">
                            <h1>My orders</h1>
                            <p className="lead">Your orders on one place.</p>
                            <p className="text-muted">
                                If you have any questions, please feel free to{" "}
                                <a href="contact.html">contact us</a>, our customer service center
                                is working for you 24/7.
                            </p>
                            <hr />
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Order</th>
                                            <th>Date</th>
                                            <th>Total</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th># 1735</th>
                                            <td>22/06/2013</td>
                                            <td>$ 150.00</td>
                                            <td>
                                                <span className="badge badge-info">Being prepared</span>
                                            </td>
                                            <td>
                                                <Link to={`/customer-order/${getRandomNumber()}`} className="btn btn-primary btn-sm">
                                                    View
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th># 1735</th>
                                            <td>22/06/2013</td>
                                            <td>$ 150.00</td>
                                            <td>
                                                <span className="badge badge-info">Being prepared</span>
                                            </td>
                                            <td>
                                                <Link to={`/customer-order/${getRandomNumber()}`} className="btn btn-primary btn-sm">
                                                    View
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th># 1735</th>
                                            <td>22/06/2013</td>
                                            <td>$ 150.00</td>
                                            <td>
                                                <span className="badge badge-success">Received</span>
                                            </td>
                                            <td>
                                                <Link to={`/customer-order/${getRandomNumber()}`} className="btn btn-primary btn-sm">
                                                    View
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th># 1735</th>
                                            <td>22/06/2013</td>
                                            <td>$ 150.00</td>
                                            <td>
                                                <span className="badge badge-danger">Cancelled</span>
                                            </td>
                                            <td>
                                                <Link to={`/customer-order/${getRandomNumber()}`} className="btn btn-primary btn-sm">
                                                    View
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th># 1735</th>
                                            <td>22/06/2013</td>
                                            <td>$ 150.00</td>
                                            <td>
                                                <span className="badge badge-warning">On hold</span>
                                            </td>
                                            <td>
                                                <Link to={`/customer-order/${getRandomNumber()}`} className="btn btn-primary btn-sm">
                                                    View
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
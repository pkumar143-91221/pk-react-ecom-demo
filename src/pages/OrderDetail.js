import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../components/includes/breadcrumb";
import { CustomerSidebar } from "../components/includes/CustomerSidebar";

export const OrderDetail = () => {
    const params = useParams();
        console.log("Params ::>", params);
    const breadcrumb = [
        <Link to="/dashboard">Home</Link>,
        <Link to="/customer-orders">My Orders</Link>,
        "Order Detail#" + params?.id
    ]
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* breadcrumb*/}
                        <Breadcrumb value={breadcrumb}/>
                    </div>
                    <div className="col-lg-3">
                        
                        <CustomerSidebar />
                        {/* /.col-lg-3*/}
                        {/* *** CUSTOMER MENU END ****/}
                    </div>
                    <div id="customer-order" className="col-lg-9">
                        <div className="box">
                            <h1>Order #{params?.id}</h1>
                            <p className="lead">
                                Order #1735 was placed on <strong>22/06/2013</strong> and is
                                currently <strong>Being prepared</strong>.
                            </p>
                            <p className="text-muted">
                                If you have any questions, please feel free to{" "}
                                <Link to="/contact">contact us</Link>, our customer service center
                                is working for you 24/7.
                            </p>
                            <hr />
                            <div className="table-responsive mb-4">
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
                                                        src="/img/detailsquare.jpg"
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
                                                        src="/img/basketsquare.jpg"
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
                                            <th colSpan={5} className="text-right">
                                                Order subtotal
                                            </th>
                                            <th>$446.00</th>
                                        </tr>
                                        <tr>
                                            <th colSpan={5} className="text-right">
                                                Shipping and handling
                                            </th>
                                            <th>$10.00</th>
                                        </tr>
                                        <tr>
                                            <th colSpan={5} className="text-right">
                                                Tax
                                            </th>
                                            <th>$0.00</th>
                                        </tr>
                                        <tr>
                                            <th colSpan={5} className="text-right">
                                                Total
                                            </th>
                                            <th>$456.00</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            {/* /.table-responsive*/}
                            <div className="row addresses">
                                <div className="col-lg-6">
                                    <h2>Invoice address</h2>
                                    <p>
                                        John Brown
                                        <br />
                                        13/25 New Avenue
                                        <br />
                                        New Heaven
                                        <br />
                                        45Y 73J
                                        <br />
                                        England
                                        <br />
                                        Great Britain
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <h2>Shipping address</h2>
                                    <p>
                                        John Brown
                                        <br />
                                        13/25 New Avenue
                                        <br />
                                        New Heaven
                                        <br />
                                        45Y 73J
                                        <br />
                                        England
                                        <br />
                                        Great Britain
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
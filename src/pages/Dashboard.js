import { Link } from "react-router-dom";
import Breadcrumb from "./sub-components/breadcrumb";
import { CustomerSidebar } from "./sub-components/CustomerSidebar";
import { useSelector } from "react-redux";

export const Dashboard = () => {
    const productData = useSelector(state => state.productData)
    const breadcrumb = [
        <Link to="/">Home</Link>,
        "My Account"
    ]
    console.log("productData ::>", productData)
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
                    <div className="col-lg-9">
                        <div className="box">
                            <h1>My account</h1>
                            <p className="lead">
                                Change your personal details or your password here.
                            </p>
                            <p className="text-muted">
                                Pellentesque habitant morbi tristique senectus et netus et malesuada
                                fames ac turpis egestas.
                            </p>
                            <h3>Change password</h3>
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="password_old">Old password</label>
                                            <input
                                                id="password_old"
                                                type="password"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="password_1">New password</label>
                                            <input
                                                id="password_1"
                                                type="password"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="password_2">Retype new password</label>
                                            <input
                                                id="password_2"
                                                type="password"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* /.row*/}
                                <div className="col-md-12 text-center">
                                    <button type="submit" className="btn btn-primary">
                                        <i className="fa fa-save" /> Save new password
                                    </button>
                                </div>
                            </form>
                            <h3 className="mt-5">Personal details</h3>
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="firstname">Firstname</label>
                                            <input id="firstname" type="text" className="form-control" />
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
                                    <div className="col-md-12 text-center">
                                        <button type="submit" className="btn btn-primary">
                                            <i className="fa fa-save" /> Save changes
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}